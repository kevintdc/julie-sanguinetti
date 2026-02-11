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
            content: (
              <>
                <p>
                  Pour vous adultes, adolescents, couples, parents,
                  professionnels, toute personne souhaitant se{" "}
                  <strong>(re)connecter</strong> à elle-même à travers une
                  approche intégrative, c’est-à-dire adaptée à chaque personne
                  et à chaque histoire. Concernant l’accompagnement des enfants
                  de moins de 11 ans, nous en discutons ensemble et si besoin,
                  je réfère à des collègues spécialisés dans le Narbonnais.
                  <br />
                  <strong>
                    Cadre bienveillant, confidentiel et sans jugement.
                  </strong>
                </p>
                <br />
                <ul className="checkList">
                  <li>✔ Gestion du stress et de la concentration</li>
                  <li>
                    ✔ Préparation sereine d&apos;une échéance : compétition,
                    oral, examens…
                  </li>
                  <li>✔ Transformation du doute en confiance</li>
                  <li>✔ Ancrage émotionnel</li>
                  <li>✔ Clarté des objectifs</li>
                  <li>✔ Récupération mentale et régulation émotionnelle</li>
                  <li>✔ Mise en place de routines mentales efficaces</li>
                  <li>✔ Travail sur son identité</li>
                  <br />
                  <li>
                    <em>
                      Liste non exhaustive, la seule limite c&apos;est vous !
                    </em>
                  </li>
                </ul>
                <br />
                <p>
                  Ici, <strong>pas de discours motivants</strong>, mais des{" "}
                  <strong>outils concrets</strong>, des{" "}
                  <strong>mises en situation</strong>, et un vrai travail
                  d&apos;adaptation à votre personnalité.
                </p>
              </>
            ),
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
            content: (
              <>
                <p>
                  Retrouver de la clarté, du calme, de la confiance, du sens et
                  du souffle.La psychothérapie, ce n&apos;est pas parler pour
                  parler. C&apos;est explorer pour se libérer, comprendre pour
                  avancer, oser être soi.
                </p>
                <br />
                <p>Acancez à votre rythme :</p>
                <br />
                <ul className="checkList">
                  <li>✔ Prise de contact par téléphone, sms ou mail</li>
                  <li>
                    ✔ Accueil première séance : on fait le point sur votre
                    situation et vos besoins
                  </li>
                  <li>
                    ✔ On définit ensemble votre objectif (souple, évolutif)
                  </li>
                  <li>
                    ✔ Vous pouvez arrêter à tout moment si ce n’est plus juste
                    pour vous
                  </li>
                </ul>
                <br />
                <p>
                  <strong>Remboursement :</strong> <br />
                  Certaines mutuelles prennent en charge une partie ou la
                  totalité des séances selon vos contrats.
                </p>
              </>
            ),
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
            id: "seance-individuelle",
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
            id: "seance-visio",
          },
          {
            imageSrc: "/images/seanceduo.jpg",
            imageAlt: "Séance duo 1h30 (parent-enfant, couple, binôme)",
            title: "Séance duo 1h30 (parent-enfant, couple...)",
            overlayText: "90 €",
            overlayText2: "",
            overlayText3: "",
            buttonText: "Choisir",
            href: "/contact",
            id: "seance-duo",
          },
        ]}
      />
      <div className={styles.buttonWrapper}>
        {" "}
        <Link href="/contact" className={styles.button}>
          Prendre contact{" "}
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
        offres adaptés à leur spécificité.” <br />
        <br /> Julie Sanguinetti
      </Quote>
    </>
  );
}
