import PrestationPage from "../../components/PrestationPage";
import styles from "../../styles/Prestation.module.css";
import Link from "next/link";
import { FiCheck } from "react-icons/fi";

export default function Psychotherapie() {
  return (
    <>
      <PrestationPage
        title="Entreprises & Organisations"
        description="Accompagnement psychothérapeutique et ateliers de préparation mentale pour les entreprises et organisations avec Julie Sanguinetti."
        heroText="Dans le contexte professionnel actuel, le bien-être mental des collaborateurs est essentiel pour la performance et la cohésion d'équipe. Je propose des services adaptés aux besoins des entreprises et organisations."
        heroImage={{
          src: "/images/psychotherapie-hero.jpg",
          alt: "Psychothérapie",
        }}
        sections={[
          {
            title:
              "Coaching, formations, interventions, conférences et séminaires",
            content:
              "Et si tout commençait par le mental, l’émotionnel et la communication, ça changerait quoi ?",
          },
          {
            title: "Et si la performance passait (vraiment) par l’humain ?",
            content:
              " Probablement beaucoup de choses — à commencer par l’envie de venir travailler le matin. Dans le monde du travail, on parle souvent de performance, rarement de sens. Et pourtant, les deux vont ensemble — l’un ne dure pas sans l’autre. Mon rôle ? Créer des espaces où les équipes, les dirigeants et les collaborateurs peuvent respirer, comprendre, (ré)aligner et avancer. Parce qu’une entreprise, ce sont d’abord des humains — avec leurs forces, leurs doutes, leurs élans et leurs émotions..",
            image: {
              src: "/images/psychotherapie-session.jpg",
              alt: "Séance de psychothérapie",
            },
          },
          {
            title: "Coaching professionnel",
            content: (
              <>
                <p>
                  C’est un accompagnement <strong>sur mesure</strong> pour les
                  dirigeants, managers, collaborateurs, salariés ou équipes qui
                  veulent remettre du sens, du lien et de la clarté dans leur
                  quotidien professionnel. Le coaching, c’est un espace
                  confidentiel, exigeant mais bienveillant, où l’on travaille
                  sur la posture, la communication, la confiance et la clarté
                  mentale.
                </p>
                <br />
                <p>
                  <strong>Objectifs possibles :</strong>
                </p>
                <ul className="checkList">
                  <li>✔ Gérer le stress, la pression et la charge mentale</li>
                  <li>✔ Prévention du stress et de l’épuisement</li>
                  <li>
                    ✔ Développement de la cohésion et de la communication
                    d’équipe
                  </li>
                  <li>
                    ✔ Gestion des conflits et communication interpersonnellel
                  </li>
                  <li>✔ Motivation, sens et engagement au travail</li>
                  <li>✔ Préparation mentale avant une échéance importante</li>
                  <li>✔ Posture et adaptation face à un public délicat</li>
                </ul>
                <br />
                <p>
                  <strong>Formats :</strong>
                </p>
                <ul className="checkList">
                  <li>✔ Séances individuelles (1h à 2h selon besoin)</li>
                  <li>
                    ✔ Ateliers collectifs sur mesure (demi-journée ou journée)
                  </li>
                </ul>
                <br />
                <p>
                  <strong>Tarifs :</strong>
                </p>
                <br />
                <p>
                  <strong>SUR DEVIS</strong>, à partir de 150 €/personne selon
                  le nombre de participants, la durée et le lieu. (Je ne vends
                  pas du temps, je propose des résultats)
                </p>
              </>
            ),
          },
        ]}
        cta={{ label: "Me contacter", href: "/contact" }}
      />
      <div className={styles.buttonWrapper}>
        {" "}
        <Link href="/contact" className={styles.button}>
          Je souhaite échanger sur mes besoins{" "}
          <span className={styles.icon}>
            <FiCheck />
          </span>
        </Link>
      </div>
      <br />
    </>
  );
}
