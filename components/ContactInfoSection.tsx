import styles from "./css/ContactInfoSection.module.css";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

export default function ContactInfoSection() {
  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <p>ME CONTACTER</p>
        <h2>OÙ ME TROUVER</h2>
        <div className={styles.underline}></div>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <FiPhone className={styles.icon} />
          <h3>Téléphone</h3>
          <p>
            <a href="tel:+33665914371">06 65 91 43 71</a>
          </p>
        </div>

        <div className={styles.card}>
          <FiMail className={styles.icon} />
          <h3>Email</h3>
          <p>
            <a href="mailto:cabinet@juliesanguinetti.com">
              cabinet@juliesanguinetti.com
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
