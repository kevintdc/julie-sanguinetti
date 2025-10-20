import { useState } from "react";
import styles from "./css/ContactForm.module.css";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      body: data,
    });

    setStatus(response.ok ? "success" : "error");
    if (response.ok) form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Nom :
        <input type="text" name="name" required className={styles.input} />
      </label>

      <label className={styles.label}>
        Email :
        <input type="email" name="email" required className={styles.input} />
      </label>

      <label className={styles.label}>
        Objet :
        <input type="text" name="objet" required className={styles.input} />
      </label>

      <label className={styles.label}>
        Message :
        <textarea
          name="message"
          rows={5}
          required
          className={styles.textarea}
        />
      </label>

      {/* Honeypot anti-spam */}
      <input
        type="text"
        name="website"
        style={{ display: "none" }}
        tabIndex={-1}
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className={styles.button}
      >
        {status === "sending" ? "Envoi en cours…" : "Envoyer"}
      </button>

      {status === "success" && (
        <p className={styles.success}>Message envoyé !</p>
      )}
      {status === "error" && (
        <p className={styles.error}>Erreur lors de l’envoi.</p>
      )}
    </form>
  );
}
