import styles from "./css/ContactForm.module.css";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useEffect, useRef, useState } from "react";

type Props = {
  onSubmit: (formData: FormData) => void;
  status: "idle" | "sending" | "success" | "error";
};

export default function ContactForm({ onSubmit, status }: Props) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [captchaReady, setCaptchaReady] = useState(false);

  useEffect(() => {
    if (executeRecaptcha) {
      setCaptchaReady(true);
    }
  }, [executeRecaptcha]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!executeRecaptcha) {
      console.error("reCAPTCHA non prêt");
      return;
    }

    const token = await executeRecaptcha("contact_form");

    if (!token) {
      console.error("Token reCAPTCHA introuvable");
      return;
    }

    const formData = new FormData(formRef.current);
    formData.append("g-recaptcha-response", token);

    onSubmit(formData);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.group}>
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Votre nom"
          required
        />
      </div>

      <div className={styles.group}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Votre adresse email"
          required
        />
      </div>

      <div className={styles.group}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Votre message"
          required
        />
      </div>

      <input
        type="text"
        name="website"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <button type="submit" disabled={status === "sending" || !captchaReady}>
        {status === "sending"
          ? "Envoi..."
          : !captchaReady
            ? "Chargement..."
            : "Envoyer"}
      </button>
    </form>
  );
}
