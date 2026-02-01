import Card from "./Card";
import styles from "./css/CardsSection.module.css";

type CardData = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  overlayText: string;
  overlayText2: string;
  overlayText3: React.ReactNode;
  buttonText: string;
  href: string;
  id: string;
};

type Props = {
  cards: CardData[];
};

export default function CardsSection({ cards }: Props) {
  return (
    <section className={styles.cardsGrid}>
      {cards.map((card) => (
        <div className={styles.cardWrapper} key={card.id}>
          <Card {...card} />
          <p className={styles.cardLabel}>{card.title}</p>
        </div>
      ))}
    </section>
  );
}
