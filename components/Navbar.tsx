import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./css/Navbar.module.css";

type SubMenuKey = "accompagnements" | "ressources" | null;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<SubMenuKey>(null); // ✅ un seul état, mais ciblé
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleSubMenu = (key: Exclude<SubMenuKey, null>) => {
    setOpenSubMenu((prev) => (prev === key ? null : key));
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenSubMenu(null);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    const handleRouteChangeStart = () => {
      setOpenSubMenu(null);
      setMenuOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenSubMenu(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    router.events.on("routeChangeStart", handleRouteChangeStart);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      router.events.off("routeChangeStart", handleRouteChangeStart);
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
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Menu"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
      >
        <span className={menuOpen ? styles.burgerOpen : ""} />
        <span className={menuOpen ? styles.burgerOpen : ""} />
        <span className={menuOpen ? styles.burgerOpen : ""} />
      </button>

      <ul
        id="primary-navigation"
        className={`${styles.navList} ${menuOpen ? styles.showMenu : ""}`}
      >
        <li>
          <Link href="/" onClick={closeMenu}>
            Accueil
          </Link>
        </li>
        <li>
          <Link href="/apropos" onClick={closeMenu}>
            À propos
          </Link>
        </li>

        {/* ---- Sous-menu Accompagnements ---- */}
        <li className={styles.hasSubMenu}>
          <div className={styles.subMenuWrapper}>
            <button
              onClick={() => toggleSubMenu("accompagnements")}
              className={styles.subMenuButton}
              aria-expanded={openSubMenu === "accompagnements"}
              aria-controls="submenu-accompagnements"
            >
              Accompagnements
              <span
                className={`${styles.arrow} ${
                  openSubMenu === "accompagnements" ? styles.arrowOpen : ""
                }`}
              >
                ▼
              </span>
            </button>

            <ul
              id="submenu-accompagnements"
              className={`${styles.subMenu} ${
                openSubMenu === "accompagnements" ? styles.showSubMenu : ""
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
                  Préparation mentale
                </Link>
              </li>
              <li>
                <Link href="/prestations/atelier" onClick={closeMenu}>
                  Ateliers
                </Link>
              </li>
              <li>
                <Link href="/prestations/entreprises" onClick={closeMenu}>
                  Entreprises
                </Link>
              </li>
              <li>
                <Link
                  href="/prestations/conferences-formations"
                  onClick={closeMenu}
                >
                  Conférences & Formations
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <Link href="/infos-pratiques" onClick={closeMenu}>
            Infos pratiques
          </Link>
        </li>
        <li>
          <Link href="/faq" onClick={closeMenu}>
            F.A.Q.
          </Link>
        </li>
        <li>
          <Link href="/ressources" onClick={closeMenu}>
            Ressources
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
