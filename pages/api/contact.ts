import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
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

  // 🛡 Anti-spam honeypot
  if (website) {
    return res.status(400).json({ error: "Bot détecté" });
  }

  // 🛡 Vérification du token reCAPTCHA
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

    const captchaData = await captchaRes.json();

    if (!captchaData.success || captchaData.score < 0.5) {
      return res
        .status(400)
        .json({ error: "Échec de la vérification reCAPTCHA" });
    }

    // ✅ Si tout est OK, tu peux maintenant envoyer le mail
    // TODO: Ajoute ici ta logique d’envoi (ex: nodemailer, SMTP, etc.)
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Erreur reCAPTCHA:", err);
    return res.status(500).json({ error: "Erreur serveur reCAPTCHA" });
  }
}
