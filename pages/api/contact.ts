import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

type RecaptchaResponse = {
  success: boolean;
  score?: number;
  action?: string;
  hostname?: string;
  ["error-codes"]?: string[];
};

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  const {
    name,
    email,
    message,
    website,
    "g-recaptcha-response": token,
  } = req.body ?? {};

  if (website) {
    return res.status(400).json({ error: "Bot détecté" });
  }

  if (!token) {
    return res.status(400).json({ error: "Token reCAPTCHA manquant" });
  }

  const secretKey = process.env.RECAPTCHA_SECRET;
  if (!secretKey) {
    return res.status(500).json({ error: "Clé secrète reCAPTCHA manquante" });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: "RESEND_API_KEY manquante" });
  }

  const safeName = String(name ?? "").trim();
  const safeEmail = String(email ?? "").trim();
  const safeMessage = String(message ?? "").trim();

  if (!safeName || !safeEmail || !safeMessage) {
    return res.status(400).json({ error: "Champs requis manquants" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(safeEmail)) {
    return res.status(400).json({ error: "Email invalide" });
  }

  if (safeName.length > 120) {
    return res.status(400).json({ error: "Nom trop long" });
  }

  if (safeMessage.length > 3000) {
    return res.status(400).json({ error: "Message trop long" });
  }

  try {
    const params = new URLSearchParams({
      secret: secretKey,
      response: String(token),
    });

    const captchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      },
    );

    const captchaData: RecaptchaResponse = await captchaRes.json();

    if (!captchaData.success) {
      return res.status(400).json({
        error: "Échec de la vérification reCAPTCHA",
        details: captchaData["error-codes"] || [],
      });
    }

    if ((captchaData.score ?? 0) < 0.5) {
      return res.status(400).json({ error: "Score reCAPTCHA trop faible" });
    }

    if (captchaData.action !== "contact_form") {
      return res.status(400).json({ error: "Action reCAPTCHA invalide" });
    }

    const from =
      process.env.CONTACT_FROM_EMAIL || "contact@juliesanguinetti.fr";
    const adminTo =
      process.env.CONTACT_TO_EMAIL || "juliesanguinetti.pnl@gmail.com";

    const adminEmail = await resend.emails.send({
      from: `Site Julie Sanguinetti <${from}>`,
      to: [adminTo],
      replyTo: safeEmail,
      subject: `Nouveau message de contact - ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
          <h2>Nouveau message depuis le site</h2>
          <p><strong>Nom :</strong> ${escapeHtml(safeName)}</p>
          <p><strong>Email :</strong> ${escapeHtml(safeEmail)}</p>
          <p><strong>Message :</strong></p>
          <div style="padding: 12px; background: #f7f7f7; border-radius: 8px; white-space: pre-wrap;">
            ${escapeHtml(safeMessage)}
          </div>
        </div>
      `,
      text: `
Nouveau message depuis le site

Nom : ${safeName}
Email : ${safeEmail}

Message :
${safeMessage}
      `.trim(),
    });

    if (adminEmail.error) {
      console.error("Erreur envoi admin:", adminEmail.error);
      return res
        .status(500)
        .json({ error: "Erreur lors de l'envoi du mail admin" });
    }

    const confirmationEmail = await resend.emails.send({
      from: `Julie Sanguinetti <${from}>`,
      to: [safeEmail],
      subject: "Votre message a bien été reçu",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
          <h2>Merci pour votre message</h2>
          <p>Bonjour ${escapeHtml(safeName)},</p>
          <p>
            Votre message a bien été reçu. Je reviendrai vers vous dès que possible.
          </p>
          <p><strong>Récapitulatif de votre message :</strong></p>
          <div style="padding: 12px; background: #f7f7f7; border-radius: 8px; white-space: pre-wrap;">
            ${escapeHtml(safeMessage)}
          </div>
          <p style="margin-top: 24px;">
            Bien à vous,<br />
            Julie Sanguinetti
          </p>
        </div>
      `,
      text: `
Bonjour ${safeName},

Votre message a bien été reçu. Je reviendrai vers vous dès que possible.

Récapitulatif de votre message :
${safeMessage}

Bien à vous,
Julie Sanguinetti
      `.trim(),
    });

    if (confirmationEmail.error) {
      console.error("Erreur envoi confirmation:", confirmationEmail.error);
      return res.status(500).json({
        error:
          "Le message a été reçu, mais l'email de confirmation n'a pas pu être envoyé.",
      });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Erreur contact API:", err);
    return res.status(500).json({ error: "Erreur serveur" });
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
