import CustomHead from "../components/CustomHead";
import ThreeBoxes from "../components/ThreeBoxes";
import AlternatingParagraphs from "../components/AlternatingParagraphs";
import styles from "../styles/Home.module.css";
import ImageCarousel from "../components/ImageCarousel";

export default function Home() {
  return (
    <>
      <CustomHead
        title="Julie Sanguinetti | Accueil"
        description="Julie Sanguinetti - Psychothérapie & (P)réparation mentale - Apaiser l'esprit, avec humour & humanité ! Narbonne, Occitanie."
      />
      <section className={styles.hero}>
        <div className={styles.overlay} />
        <div className={styles.content}>
          <h1>
            Julie Sanguinetti <br /> Psychothérapie & {"{P}réparation mentale"}
          </h1>
          <p>
            - AUDACE & RÉSILIENCE - <br />
            Apaiser l&apos;esprit, avec humour & humanité !
          </p>
        </div>
      </section>
      <ThreeBoxes />
      <section style={{ margin: "4rem 0" }}>
        <ImageCarousel />
      </section>
      <AlternatingParagraphs />
    </>
  );
}
