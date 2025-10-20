import styles from "./css/AboutTextSection.module.css";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function AboutTextSection() {
  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.heading}>Qui suis-je ?</h2>
        <p className={styles.text}>
          Je suis Julie Sanguinetti, coucou c&apos;est moi ! Psychothérapeute
          passionnée et spécialisée en (P)réparation mentale, je suis là pour
          vous accompagner dans votre cheminement personnel avec audace et
          résilience. Mon approche unique allie humour et humanité pour apaiser
          l&apos;esprit et favoriser le bien-être. Que vous cherchiez à
          surmonter des défis personnels, à améliorer votre santé mentale ou à
          explorer de nouvelles perspectives, je suis là pour vous guider avec
          compassion et expertise. Ensemble, nous travaillerons à créer un
          espace sûr où vous pourrez grandir, guérir et découvrir votre plein
          potentiel.
        </p>
        <div className={styles.buttonWrapper}>
          {" "}
          <Link href="/contact" className={styles.button}>
            Me contacter{" "}
            <span className={styles.icon}>
              <FiArrowRight />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
