import styles from "./css/ContactInfoSection.module.css";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

export default function ContactInfoSection() {
  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <p>NOUS CONTACTER</p>
        <h2>OÙ NOUS TROUVER</h2>
        <div className={styles.underline}></div>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <FiPhone className={styles.icon} />
          <h3>Téléphone</h3>
          <p>
            <a href="tel:+33600000000">06 00 00 00 00</a>
          </p>
        </div>

        <div className={styles.card}>
          <FiMail className={styles.icon} />
          <h3>Email</h3>
          <p>
            <a href="mailto:contact@juliesanguinetti.fr">
              contact@juliesanguinetti.fr
            </a>
          </p>
        </div>

        <div className={styles.card}>
          <FaInstagram className={styles.icon} />
          <h3>Instagram</h3>
          <p>
            <a
              href="https://instagram.com/julie.sanguinetti"
              target="_blank"
              rel="noreferrer"
            >
              @julie.sanguinetti
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
