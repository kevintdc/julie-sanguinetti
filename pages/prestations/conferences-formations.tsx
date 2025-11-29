import PrestationPage from "../../components/PrestationPage";
import styles from "../../styles/Prestation.module.css";
import Link from "next/link";
import { FiCheck } from "react-icons/fi";

export default function Psychotherapie() {
  return (
    <>
      <PrestationPage
        title="Conférences & séminaires"
        description="Conférences et séminaires sur la psychothérapie, le bien-être mental et la préparation mentale avec Julie Sanguinetti."
        heroText="Vous recherchez un intervenant pour une conférence, un séminaire ou un atelier au sein de votre organisation, entreprise ou événement ?"
        heroImage={{
          src: "/images/psychotherapie-hero.jpg",
          alt: "Psychothérapie",
        }}
        sections={[
          {
            title: "Thématiques possibles",
            content: (
              <>
                <ul className="checkList">
                  <li>
                    ✔ Performance et bien-être : les deux faces d’un même mental
                  </li>
                  <li>
                    ✔ Les émotions au travail : comprendre pour mieux coopérer
                  </li>
                  <li>
                    ✔ Audace et résilience : oser, tomber, se relever,
                    recommencer
                  </li>
                  <li>✔ Comment faire d’un mal , un bien ?</li>
                  <li>✔ Pas d’échecs, toujours des apprentissages</li>
                  <li>✔ L’art de perdre en gagnant</li>
                  <li>✔ (ou un thème construit sur mesure avec vous)</li>
                </ul>
              </>
            ),
          },
          {
            title: "Pourquoi ?",
            content:
              "Pour inspirer, sensibiliser, ou simplement réveiller un peu d’énergie collective. Des interventions où le fond est solide, le ton accessible, et l’émotion bien présente. Un mélange de psychologie, de préparation mentale et de concret.",
            image: {
              src: "/images/psychotherapie-session.jpg",
              alt: "Séance de psychothérapie",
            },
          },
          {
            title: "Tarifs & informations",
            content: "👉 Sur devis selon la durée, le lieu et les besoins.",
          },
          {
            title: "Les formations — offres à venir, bientôt disponibles",
            content: "",
          },
          {
            title:
              "Transmettre, outiller, inspirer — pour des équipes qui grandissent ensemble.",
            content: (
              <>
                <p>
                  Parce que je crois profondément que{" "}
                  <strong>le savoir est fait pour circuler</strong>, je prépare
                  actuellement des{" "}
                  <strong>
                    modules de formation à destination des entreprises
                  </strong>{" "}
                  et des institutions.
                </p>
                <br />
                <p>
                  Parce que comprendre, c’est déjà changer. Les formations que
                  je propose sont pensées pour allier{" "}
                  <strong>savoir-faire et savoir-être</strong>, théorie et
                  pratique, réflexion et mise en action.
                </p>
                <br />
                <p>
                  Ici, pas de slides interminables ni de jargon indigeste : on
                  apprend, on échange, on bouge, on rit (un peu), et surtout… on
                  repart avec du concret. Transmettre autrement — avec
                  dynamisme, sens et impact.
                </p>
                <br />
                <p>
                  Possibilités de créations spécifiques en fonction des
                  ressources nécessaires pour les différents secteurs
                  d’activités.
                </p>
                <br />
                <p>Exemples de thématiques envisagées :</p>
                <ul className="checkList">
                  <li>✔ Gestion du stress et des émotions au travail</li>
                  <li>✔ Communication bienveillante et assertive</li>
                  <li>
                    ✔ Développement de la cohésion et de la communication
                    d’équipe
                  </li>
                  <li>
                    ✔ Gestion des conflits et communication interpersonnelle
                  </li>
                  <li>✔ Prévention de l’épuisement professionnel</li>
                  <li>✔ Performance et résilience mentale</li>
                </ul>
                <br />
                <p>
                  En bref : des formations qui réveillent, font réfléchir, et
                  laissent une trace durable. Parce qu&apos;apprendre,
                  c&apos;est bien — et apprendre à se comprendre, c&aposest
                  encore mieux.
                </p>
                <br />
                <p>
                  <em>
                    (Et oui, Qualiopi se profile à l&apos;horizon — il faudra
                    juste un peu de patience... et beaucoup de café !)
                  </em>
                </p>
              </>
            ),
          },
          {
            title: "🌟 En résumé",
            content: (
              <>
                <p>
                  <strong>Le coaching</strong>, pour l’introspection qui fait
                  avancer : Accompagnement sur mesure, plus introspectif,
                  transformation individuelle ou collective.
                </p>
                <br />
                <p>
                  <strong>Conférences et séminaires</strong>, pour l’énergie qui
                  relie : L’expérience collective par excellence, un temps fort
                  pour transmettre des connaissances et une expertise à un
                  public plus large autour d’une thématique.
                </p>
                <br />
                <p>
                  <strong>La formation</strong>, (offre à venir) pour l’action
                  qui fait grandir : La transmission de compétences, format plus
                  structuré, avec supports, objectifs pédagogiques, outils,
                  etc..
                </p>
                <br />
                <p>
                  Coaching, conférences ou formations — la mission reste la même
                  :
                  <strong>
                    faire émerger du sens, du lien et de la performance durable
                  </strong>
                  . Parce qu’un collectif fort, ça commence toujours par des
                  humains dans la compréhension et qui vont bien.
                </p>
                <br />
              </>
            ),
          },
        ]}
        cta={{ label: "Me contacter", href: "/contact" }}
      />
      <div className={styles.buttonWrapper}>
        {" "}
        <Link href="/contact" className={styles.button}>
          Je recherche un intervenant{" "}
          <span className={styles.icon}>
            <FiCheck />
          </span>
        </Link>
      </div>
      <br />
    </>
  );
}
