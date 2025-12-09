import styles from "./css/ThreeBoxes.module.css";
import { FaBrain, FaUsers, FaLeaf, FaChild, FaBookOpen } from "react-icons/fa";
import { BiBuildings } from "react-icons/bi";
import { useRouter } from "next/router";

const cards = [
  {
    icon: <FaLeaf />,
    text: "Psychothérapie & Accompagnement personnel",
    href: "/prestations/psychotherapie",
  },
  {
    icon: <FaBrain />,
    text: "Préparation mentale & Performance",
    href: "/prestations/preparation-mentale",
  },
  {
    icon: <FaUsers />,
    text: "Ateliers",
    href: "/prestations/atelier",
  },
  {
    icon: <BiBuildings />,
    text: "Entreprises",
    href: "/prestations/entreprises",
  },
  {
    icon: <FaChild />,
    text: "Qui suis-je ?",
    href: "/apropos",
  },
  {
    icon: <FaBookOpen />,
    text: "Ressources",
    href: "/ressources",
  },
];

export default function ThreeBoxes() {
  const router = useRouter();

  return (
    <section className={styles.grid}>
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={`${styles.card} ${styles["fadeInCard"]}`}
          onClick={() => router.push(card.href)}
        >
          <div className={styles.icon}>{card.icon}</div>
          <p className={styles.text}>{card.text}</p>
          <div className={styles.overlay}></div>
        </div>
      ))}
    </section>
  );
}
