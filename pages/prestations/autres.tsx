import PrestationPage from "../../components/PrestationPage";
import styles from "../../styles/Prestation.module.css";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function Autres() {
  return (
    <>
      <PrestationPage
        title="Ateliers collectifs"
        description="Ateliers collectifs animés par Julie Sanguinetti — partage, apprentissage et croissance personnelle."
        heroText="Parce qu’on est pas tout seul à douter et à tourner en boucle…"
        heroImage={{
          src: "/images/atelier1.jpg",
          alt: "Psychothérapie",
        }}
        sections={[
          {
            title:
              "Envie de souffler, d’apprendre, de comprendre (et de rire un peu) ?",
            content: (
              <>
                <p>
                  Les ateliers, c’est l’équilibre parfait entre{" "}
                  <strong>réflexion</strong>, pratique et convivialité. C’est
                  l’occasion de prendre un temps pour soi, de{" "}
                  <strong>partager</strong> des expériences et de repartir avec
                  des outils simples et efficaces. Et si, en plus, vous y
                  trouvez un peu de <strong>légèreté...</strong> c’est gagné.
                  Parce qu’on réalise aussi une chose essentielle : On est pas
                  seuls à tourner en boucle, douter, galérer…
                </p>
              </>
            ),
          },
          {
            title: "Pour qui ?",
            content:
              "Pour les personnes curieuses, sensibles, audacieuses… ou qui ont juste envie d’explorer et de comprendre ce qui se joue en elles.",
            image: {
              src: "/images/atelier2.jpg",
              alt: "Séance de psychothérapie",
            },
          },
          {
            title: "En quoi les ateliers apportent un véritable soutien ?",
            content:
              "Un atelier, c’est un espace pour expérimenter, pas pour écouter passivement. On explore, on teste, on échange — et souvent, on découvre que l’on est pas si seul dans ce que l’on vit. A travers ces moments, laissez vous guider par l’efficacité de l’intelligence collective… Les thématiques varient, mais le fil conducteur reste le même : comprendre, ressentir, agir différemment.",
          },
          {
            title: "Comment ça se passe ?",
            content: (
              <>
                <ul className="checkList">
                  <li>✔ En petits groupes (6 à 8 personnes max)</li>
                  <li>✔ Durée : entre 1h30 et 3h selon le thème</li>
                  <li>
                    ✔ Tarif : entre 30 € et 70 € selon durée / matériel /
                    thématique
                  </li>
                  <li>✔ Lieu : dans les lieux partenaires du Narbonnais</li>
                </ul>
                <br />
                <p>Exemples de thèmes :</p>
                <ul className="checkList">
                  <li>✔ Calmer son mental sans s&apos;endormir</li>
                  <li>✔ Confiance, estime et audace</li>
                  <li>✔ Les émotions : ces amies qu&apos;on comprend mal</li>
                  <li>✔ Petits pas, grands changements</li>
                  <li>✔ Préparer ses objectifs perso, pro, sportifs, ...</li>
                  <li>✔ Et tant d&apos;autres...</li>
                </ul>
              </>
            ),
          },
          {
            title: "Bénéfices",
            content: (
              <>
                <p>
                  Un moment <strong>pour soi</strong>, des outils concrets pour{" "}
                  <strong>avancer</strong>, un regard neuf. Et souvent, cette
                  petite étincelle qui donne envie de passer à l’action.
                  Calendrier et actualités disponibles sur ma page Instagram ou
                  sur demande. Possibilités de création d’atelier{" "}
                  <strong>sur mesure</strong> à partir de vos projets, besoins,
                  partenariats.
                </p>
              </>
            ),
          },
        ]}
        cta={{ label: "Me contacter", href: "/contact" }}
      />
      <div className={styles.buttonWrapper}>
        {" "}
        <Link
          href="https://www.instagram.com/julie.sanguinetti/"
          className={styles.button}
          target="newtab"
        >
          Je découvre les prochains ateliers{" "}
          <span className={styles.icon}>
            <FiArrowRight />
          </span>
        </Link>
      </div>
      <br />
      <PrestationPage
        title="Entreprises & Organisations"
        description="Accompagnement psychothérapeutique et ateliers de préparation mentale pour les entreprises et organisations avec Julie Sanguinetti."
        heroText="Coaching, formations, interventions, conférences et séminaires"
        heroImage={{
          src: "/images/autre-entreprise.jpg",
          alt: "Psychothérapie",
        }}
        sections={[
          {
            title: "Et si la performance passait (vraiment) par l’humain ?",
            content: (
              <>
                <p>
                  Et si tout commençait par{" "}
                  <strong>le mental, l’émotionnel et la communication</strong>,
                  ça changerait quoi ? Probablement beaucoup de choses — à
                  commencer par l’envie de venir travailler le matin. Dans le
                  monde du travail, on parle souvent de performance, rarement de
                  sens. Et pourtant, les deux vont ensemble —{" "}
                  <strong>l’un ne dure pas sans l’autre.</strong> Mon rôle ?
                  Créer des espaces où les équipes, les dirigeants et les
                  collaborateurs peuvent respirer, comprendre, (ré)aligner et
                  avancer. Parce qu’une entreprise, ce sont d’abord des humains
                  — avec leurs forces, leurs doutes, leurs élans et leurs
                  émotions..
                </p>
              </>
            ),
            image: {
              src: "/images/autre-coaching.jpg",
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
                  <strong> Sur devis</strong>, selon le nombre de participants,
                  la durée et le lieu. (Je ne vends pas du temps, mais de la
                  transformation)
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
            <FiArrowRight />
          </span>
        </Link>
      </div>
      <br />
      <PrestationPage
        title="Conférences & séminaires"
        description="Conférences et séminaires sur la psychothérapie, le bien-être mental et la préparation mentale avec Julie Sanguinetti."
        heroText="Vous recherchez un intervenant pour une conférence, un séminaire ou un atelier au sein de votre organisation, entreprise ou événement ?"
        heroImage={{
          src: "/images/autre-conf.jpg",
          alt: "Psychothérapie",
        }}
        sections={[
          {
            title: "Pourquoi ?",
            content: (
              <>
                <p>
                  Pour inspirer, <strong>sensibiliser</strong>, ou simplement{" "}
                  <strong>réveiller</strong> un peu d’énergie collective. Des
                  interventions où le fond est solide, le ton{" "}
                  <strong>accessible</strong>, et l’émotion bien présente. Un
                  mélange de psychologie, de préparation mentale et de{" "}
                  <strong>concret.</strong>
                </p>
              </>
            ),
          },
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
            title: "Tarifs & informations",
            content: "👉 Sur devis selon la durée, le lieu et les besoins.",
          },
        ]}
        cta={{ label: "Me contacter", href: "/contact" }}
      />
      <div className={styles.buttonWrapper}>
        {" "}
        <Link href="/contact" className={styles.button}>
          Je recherche un intervenant{" "}
          <span className={styles.icon}>
            <FiArrowRight />
          </span>
        </Link>
      </div>
      <br />
      <PrestationPage
        title="Les formations "
        description="Ateliers collectifs animés par Julie Sanguinetti — partage, apprentissage et croissance personnelle."
        heroText="Possibilité QUALIOPI, me contacter"
        heroImage={{
          src: "/images/autre-formation.jpg",
          alt: "Formation",
        }}
        sections={[
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
                  c&apos;est bien — et apprendre à se comprendre, c&apos;est
                  encore mieux.
                </p>
                <br />
              </>
            ),
          },
          {
            title: "Tarifs",
            content: (
              <>
                <p>
                  <em>
                    <strong>Sur devis</strong>, selon le nombre de participants,
                    la durée et le lieu. (Je ne vends pas du temps, mais de la
                    transformation)
                  </em>
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
          Je recherche un intervenant{" "}
          <span className={styles.icon}>
            <FiArrowRight />
          </span>
        </Link>
      </div>
      <br />
    </>
  );
}
