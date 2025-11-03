import styles from "./css/Footer.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSection}>
        <p>
          &copy; {new Date().getFullYear()} Julie Sanguinetti. Tous droits
          réservés.
        </p>
      </div>

      <div className={`${styles.footerSection} ${styles.socials}`}>
        <a
          href="https://www.instagram.com/julie.sanguinetti/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <Image
            src="/icons/instagram.svg"
            alt="Instagram"
            width={24}
            height={24}
          />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <Image
            src="/icons/linkedin.svg"
            alt="LinkedIn"
            width={24}
            height={24}
          />
        </a>
        <a
          href="https://spotify.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <Image
            src="/icons/spotify.svg"
            alt="Spotify"
            width={24}
            height={24}
          />
        </a>
      </div>

      <div className={`${styles.footerSection} ${styles.links}`}>
        <Link href="/mentions-legales" className={styles.link}>
          Mentions légales
        </Link>
        <a href="#top" className={styles.link}>
          Retour en haut ↑
        </a>
      </div>
    </footer>
  );
}
