import styles from "./css/ContactForm.module.css";

type Props = {
  onSubmit: (e: React.FormEvent) => void;
  status: "idle" | "sending" | "success" | "error";
};

export default function ContactForm({ onSubmit, status }: Props) {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
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
        ></textarea>
      </div>

      {/* Champ anti-spam invisible */}
      <input
        type="text"
        name="website"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Envoi..." : "Envoyer"}
      </button>

      {status === "success" && (
        <p className={styles.success}>Message envoyé avec succès !</p>
      )}
      {status === "error" && (
        <p className={styles.error}>
          Erreur lors de l’envoi. Veuillez réessayer.
        </p>
      )}
    </form>
  );
}
