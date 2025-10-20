import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end("Méthode non autorisée");
  }

  const { name, email, message, website } = req.body;

  if (website) {
    return res.status(400).json({ error: "Spam détecté" });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Champs manquants" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // true si port 465, false si port 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.SMTP_USER,
      subject: "Nouveau message via le site",
      text: message,
      html: `<p><strong>Nom :</strong> ${name}</p>
             <p><strong>Email :</strong> ${email}</p>
             <p><strong>Message :</strong><br />${message}</p>`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Erreur SMTP :", error);
    res.status(500).json({ error: "Erreur lors de l’envoi" });
  }
}
