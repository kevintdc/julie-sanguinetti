import styles from "./css/ContactInfoSection.module.css";
import { FiPhone, FiMail, FiMapPin, FiCalendar } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

export default function ContactInfoSection() {
  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <h2>💬 Un mot avant de cliquer</h2>
        <h3>
          <em>
            Parce qu’une démarche vers soi, ça commence souvent par un petit
            message. Vous n’avez pas besoin de trouver “les bons mots” : dites
            simplement ce qui vous amène, ce que vous cherchez, ou posez vos
            questions. Je vous répondrai avec attention, dès que possible.
          </em>
        </h3>
      </div>
      <br />
      <br />
      <div className={styles.heading}>
        <p>ME CONTACTER</p>
        <h2>OÙ ME TROUVER</h2>
        <div className={styles.underline}></div>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <FiMapPin className={styles.icon} />
          <h3>Adresse </h3>
          <p>4, route de Ginestas, 11120 MIREPEISSET</p>
        </div>
        <div className={styles.card}>
          <FiCalendar className={styles.icon} />
          <h3>Sur rdv uniquement</h3>
          <p>Du Lundi au Vendredi</p>
        </div>
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
            <a href="mailto:juliesanguinetti.pnl@gmail.com">
              juliesanguinetti.pnl@gmail.com
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
