import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./css/Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setSubMenuOpen(false);
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/logo_julie.svg"
            alt="Logo Julie Sanguinetti"
            width={40}
            height={40}
          />
          <span>Julie Sanguinetti</span>
        </Link>
      </div>

      <button
        className={styles.burger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span className={menuOpen ? styles.burgerOpen : ""} />
        <span className={menuOpen ? styles.burgerOpen : ""} />
        <span className={menuOpen ? styles.burgerOpen : ""} />
      </button>

      <ul className={`${styles.navList} ${menuOpen ? styles.showMenu : ""}`}>
        <li>
          <Link href="/" onClick={closeMenu}>
            Accueil
          </Link>
        </li>
        <li>
          <Link href="/qui-suis-je" onClick={closeMenu}>
            Qui suis-je
          </Link>
        </li>

        <li className={styles.hasSubMenu}>
          <button
            onClick={() => setSubMenuOpen(!subMenuOpen)}
            className={styles.subMenuButton}
          >
            Prestations
            <span
              className={`${styles.arrow} ${
                subMenuOpen ? styles.arrowOpen : ""
              }`}
            >
              ▼
            </span>
          </button>
          <ul
            className={`${styles.subMenu} ${
              subMenuOpen ? styles.showSubMenu : ""
            }`}
          >
            <li>
              <Link href="/prestations/psychotherapie" onClick={closeMenu}>
                Psychothérapie
              </Link>
            </li>
            <li>
              <Link href="/prestations/preparation-mentale" onClick={closeMenu}>
                (P)réparation mentale
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link href="/services" onClick={closeMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
