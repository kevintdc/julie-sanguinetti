import styles from "./css/AlternatingParagraphs.module.css";
import Link from "next/link";
import Image from "next/image";

export default function AlternatingParagraphs() {
  return (
    <section className={styles.container}>
      <Link href="/prestations/psychotherapie" className={styles.block}>
        <div className={styles.text}>
          <h2>Psychothérapie</h2>
          <p>
            Découvrez l’accompagnement thérapeutique pour retrouver équilibre,
            écoute intérieure, et expression personnelle…
          </p>
        </div>
        <div className={styles.image}>
          <Image
            src="/images/psychotherapie-hero.jpg"
            alt="Psychothérapie"
            width={600}
            height={400}
            className={styles.imageContent}
          />
        </div>
      </Link>

      <Link
        href="/prestations/preparation-mentale"
        className={`${styles.block} ${styles.reverse}`}
      >
        <div className={styles.text}>
          <h2>{"Préparation mentale"}</h2>
          <p>
            Pour les artistes, sportifs ou professionnels : développez vos
            capacités mentales dans les moments clés…
          </p>
        </div>
        <div className={styles.image}>
          <Image
            src="/images/preparation-mentale-hero.jpg"
            alt="Préparation mentale"
            width={600}
            height={400}
            className={styles.imageContent}
          />
        </div>
      </Link>
    </section>
  );
}
