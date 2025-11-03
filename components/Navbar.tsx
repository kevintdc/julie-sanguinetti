import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./css/Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleRouteChange = () => {
      setIsSubMenuOpen(false);
      setMenuOpen(false); // optionnel : ferme aussi le menu burger
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsSubMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  return (
    <nav
      ref={menuRef}
      className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}
    >
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
          <div className={styles.subMenuWrapper}>
            <button onClick={toggleSubMenu} className={styles.subMenuButton}>
              Prestations
              <span
                className={`${styles.arrow} ${
                  isSubMenuOpen ? styles.arrowOpen : ""
                }`}
              >
                ▼
              </span>
            </button>

            <ul
              className={`${styles.subMenu} ${
                isSubMenuOpen ? styles.showSubMenu : ""
              }`}
            >
              <li>
                <Link href="/prestations/psychotherapie" onClick={closeMenu}>
                  Psychothérapie
                </Link>
              </li>
              <li>
                <Link
                  href="/prestations/preparation-mentale"
                  onClick={closeMenu}
                >
                  (P)réparation mentale
                </Link>
              </li>
            </ul>
          </div>
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
