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
        description="Julie Sanguinetti - Psychothérapie & [P]réparation mentale - Apaiser l'esprit, avec humour & humanité ! Narbonne, Occitanie."
      />
      <section className={styles.hero}>
        <div className={styles.overlay} />

        <div className={styles.contentTop}>
          <h1>
            Julie Sanguinetti <br /> Psychothérapie & {"[P]réparation mentale"}
          </h1>
          <p>
            — AUDACE & RÉSILIENCE — <br />
            Pour les curieux, les audacieux, les sensibles — et ceux qui ne le
            savent pas encore. <br />
            Parce que l&apos;esprit et le mental aussi ont besoin
            d&apos;entraînement.
          </p>
        </div>

        <p className={styles.paccueil}>
          Installez-vous, explorez les accompagnements, et voyez ce qui résonne
          pour vous.
        </p>
      </section>
      <ThreeBoxes />
      <section style={{ margin: "4rem 0" }}>
        <ImageCarousel />
      </section>
      <AlternatingParagraphs />
    </>
  );
}
