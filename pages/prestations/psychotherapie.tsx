import PrestationPage from "../../components/PrestationPage";
import CardsSection from "../../components/CardsSection";
import Quote from "../../components/Quote";
import styles from "../../styles/Prestation.module.css";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function Psychotherapie() {
  return (
    <>
      <PrestationPage
        title="Psychothérapie"
        description="Accompagnement psychothérapeutique individualisé avec Julie Sanguinetti — écoute, soutien et transformation."
        heroText="Vous ressentez un stress récurrent, une fatigue émotionnelle ou un sentiment de blocage ?
Vous avez parfois l’impression de ne plus trop savoir où vous en êtes, ou de tourner en rond malgré
tous vos efforts ?"
        heroImage={{
          src: "/images/psycho1.jpg",
          alt: "Psychothérapie",
        }}
        sections={[
          {
            title: "Pour qui ?",
            content:
              "Pour vous adultes, adolescents, couples, parents, professionnels, toute personne souhaitant se (re)connecter à elle-même à travers une approche intégrative, c’est-à-dire adaptée à chaque personne et à chaque histoire. Concernant l’accompagnement des enfants de moins de 11 ans, nous en discutons ensemble et si besoin, je réfère à des collègues spécialisés dans le Narbonnais. Cadre bienveillant, confidentiel et sans jugement.",
          },
          {
            title: "En quoi la psychothérapie peut aider :",
            content:
              "Parfois, on ne va pas bien. On se sent bloqué, fatigué, vide ou perdu. On ne sait plus trop ce qu’on veut, ni même pourquoi on réagit comme ça. On fouille pour trouver le pourquoi peut bouger le comment. La psychothérapie, c’est un espace pour remettre du sens là où il n’y en a plus. Un lieu pour souffler, observer, comprendre, et se remettre en mouvement.",
            image: {
              src: "/images/psycho2.jpg",
              alt: "Séance de psychothérapie",
            },
          },
          {
            title: "Comment ça se passe ?",
            content:
              "Retrouver de la clarté, du calme, de la confiance, du sens et du souffle.La psychothérapie, ce n'est pas parler pour parler. C’est explorer pour se libérer, comprendre pour avancer, oser être soi.",
          },
        ]}
        cta={{ label: "Me contacter", href: "/contact" }}
      />
      <CardsSection
        cards={[
          {
            imageSrc: "/images/seanceindiv.jpg",
            imageAlt: "Séance individuelle 1h",
            title: "Séance individuelle 1h",
            overlayText: "60 €",
            overlayText2: "",
            overlayText3: "",
            buttonText: "Choisir",
            href: "/contact",
          },
          {
            imageSrc: "/images/seancevisio.jpg",
            imageAlt: "Séance en visio 1h",
            title: "Séance en visio 1h",
            overlayText: "60 €",
            overlayText2: "",
            overlayText3: "",
            buttonText: "Choisir",
            href: "/contact",
          },
          {
            imageSrc: "/images/seanceduo.jpg",
            imageAlt: "Séance duo 1h30 (parent-enfant, couple, binôme)",
            title: "Séance duo 1h30 (parent-enfant, couple, binôme)",
            overlayText: "90 €",
            overlayText2: "",
            overlayText3: "",
            buttonText: "Choisir",
            href: "/contact",
          },
        ]}
      />
      <div className={styles.buttonWrapper}>
        {" "}
        <Link href="/contact" className={styles.button}>
          Je souhaite en parler{" "}
          <span className={styles.icon}>
            <FiArrowRight />
          </span>
        </Link>
        <Link href="/ressources/temoignages" className={styles.button}>
          Témoignages{" "}
          <span className={styles.icon}>
            <FiArrowRight />
          </span>
        </Link>
      </div>
      <Quote>
        “La psychothérapie aide à comprendre et apaiser. La préparation mentale
        aide à se dépasser et performer. Deux approches complémentaires, deux
        tarifs adaptés à leur spécificité.” <br />
        <br /> Julie Sanguinetti
      </Quote>
    </>
  );
}
