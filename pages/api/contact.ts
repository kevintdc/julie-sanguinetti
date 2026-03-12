import type { NextApiRequest, NextApiResponse } from "next";

type RecaptchaResponse = {
  success: boolean;
  score?: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
};

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
  } = req.body;

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

  try {
    const verifyUrl = "https://www.google.com/recaptcha/api/siteverify";
    const params = new URLSearchParams({
      secret: secretKey,
      response: token,
    });

    const captchaRes = await fetch(verifyUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

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

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Champs requis manquants" });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Erreur reCAPTCHA:", err);
    return res.status(500).json({ error: "Erreur serveur reCAPTCHA" });
  }
}
