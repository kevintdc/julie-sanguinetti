import styles from "./css/ContactMapAndForm.module.css";
import ContactForm from "./ContactForm"; // Tu dois déjà avoir ce composant

export default function ContactMapAndForm() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.mapWrapper}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.5417928379156!2d2.8991420000000003!3d43.283292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b1b17893ed03e3%3A0x8423ed7a557a3a1e!2s%E2%80%A2%20Julie%20SANGUINETTI%20%E2%80%A2%20Psychoth%C3%A9rapie%20%26%20Pr%C3%A9paration%20mentale!5e1!3m2!1sfr!2sfr!4v1760966498562!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className={styles.separator}></div>

      <div className={styles.formWrapper}>
        <ContactForm />
      </div>
    </section>
  );
}
