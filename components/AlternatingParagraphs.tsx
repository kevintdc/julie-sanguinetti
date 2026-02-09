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
          <div className={styles.ctaHint}>
            <span>En savoir plus</span>
            <span className={styles.chevron}>➜</span>
          </div>
        </div>
        <div className={styles.image}>
          <Image
            src="/images/psychotherapie_hero.jpg"
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
          <h2>{"Préparation mentale et performance"}</h2>
          <p>
            Pour vous qui êtes prêts à investir sur vous même et développer vos
            capacités mentales dans les moments clés
          </p>
          <div className={styles.ctaHint}>
            <span>En savoir plus</span>
            <span className={styles.chevron}>➜</span>
          </div>
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
      <Link href="/prestations/autres" className={styles.block}>
        <div className={styles.text}>
          <h2>
            Autres accompagnements : Ateliers, entreprises, conférences &
            formations
          </h2>
          <p>
            Créer des déclics, grandir ensemble, renforcer la cohésion et faire
            évoluer les pratiques individuelles et collectives
          </p>
          <div className={styles.ctaHint}>
            <span>En savoir plus</span>
            <span className={styles.chevron}>➜</span>
          </div>
        </div>
        <div className={styles.image}>
          <Image
            src="/images/autre_accomp_accueil.jpg"
            alt="Psychothérapie"
            width={600}
            height={400}
            className={styles.imageContent}
          />
        </div>
      </Link>

      <Link href="/apropos" className={`${styles.block} ${styles.reverse}`}>
        <div className={styles.text}>
          <h2>Qui suis-je ?</h2>
          <p>
            Bienvenue — ici, on dédramatise. <br />
            On réfléchit, on rigole parfois, on met du sens… et on construit un
            mental qui tient la route, même quand ça secoue. <br />
            Ici, on parle vrai, on avance pas à pas — et on cherche surtout des
            déclics qui durent.
            <br />
            <br />
            S’il y a de la place pour la vérité, il y en a aussi pour la douceur
            et le courage d’avancer
          </p>
          <div className={styles.ctaHint}>
            <span>En savoir plus</span>
            <span className={styles.chevron}>➜</span>
          </div>
        </div>
        <div className={styles.image}>
          <Image
            src="/images/quisuisje_accueil1.jpeg"
            alt="Préparation mentale - Narbonne"
            width={600}
            height={400}
            className={styles.imageContent}
          />
        </div>
      </Link>
    </section>
  );
}
