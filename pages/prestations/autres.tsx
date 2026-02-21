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
        heroText="La stratégie gagnante pour vos équipes et agir pour le bien être au travail."
        heroImage={{
          src: "/images/autre-entreprise.jpg",
          alt: "Psychothérapie",
        }}
        sections={[
          {
            title: "L’efficacité professionnelle par la préparation mentale",
            content: (
              <>
                <p>
                  Coaching pour les dirigeants, managers, salariés et équipes
                  pour remettre du sens, apaiser les tensions, renforcer la
                  communication et la coopération. Espace confidentiel, exigeant
                  mais bienveillant, où l’on travaille sur la posture, la
                  confiance, la gestion des conflits et la clarté mentale.
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
                  <em>Thème et tarifs sur devis</em>
                </p>
              </>
            ),
          },
        ]}
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
        heroText="Pour inspirer, sensibiliser, réveiller et ouvrir à chacun sa  propre réflexion"
        heroImage={{
          src: "/images/autre-conf.jpg",
          alt: "Psychothérapie",
        }}
        sections={[
          {
            title: "",
            content: (
              <>
                <p>
                  L’expérience collective par excellence. Un temps fort pour
                  transmettre des connaissances, des expériences et une
                  expertise à un public plus large autour d’une thématique où le
                  fond est solide, le ton accessible, et l’émotion bien
                  présente.
                  <br />
                  <br /> Je construis des interventions sur mesure dès lors que
                  le sujet entre dans mon champ de compétences. Demandez moi :
                  je vous répondrai en toute transparence sur la faisabilité du
                  projet.
                </p>
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
        heroText="Pour apprendre, grandir et évoluer."
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
                  Des formations vivantes et concrètes adaptées à vos besoins.
                  Oubliez les slides interminables : on bouge, on échange, on
                  apprend… et on repart avec des outils applicables pour tous.
                </p>
              </>
            ),
          },
          {
            title: "Pourquoi me choisir ?",
            content: (
              <>
                <p>
                  Pour des formations dynamiques, humaines, ancrées dans le réel
                  et parce que le savoir est fait pour circuler.
                  <br />
                  <em>
                    Possibilité Qualiopi – sur demande.
                    <br /> <br />
                    Thèmes & tarif sur devis.
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
          Je veux former mes équipes{" "}
          <span className={styles.icon}>
            <FiArrowRight />
          </span>
        </Link>
      </div>
      <br />
    </>
  );
}
