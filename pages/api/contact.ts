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
    const to = process.env.CONTACT_TO_EMAIL || "juliesanguinetti.pnl@gmail.com";

    const { error } = await resend.emails.send({
      from: `Site Julie Sanguinetti <${from}>`,
      to: [to],
      replyTo: safeEmail,
      subject: `Nouveau message de contact - ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Nouveau message depuis le site</h2>
          <p><strong>Nom :</strong> ${escapeHtml(safeName)}</p>
          <p><strong>Email :</strong> ${escapeHtml(safeEmail)}</p>
          <p><strong>Message :</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(safeMessage)}</p>
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

    if (error) {
      console.error("Erreur Resend:", error);
      return res.status(500).json({ error: "Erreur lors de l'envoi du mail" });
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
