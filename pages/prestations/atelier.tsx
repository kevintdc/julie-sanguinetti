import PrestationPage from "../../components/PrestationPage";
import styles from "../../styles/Prestation.module.css";
import Link from "next/link";
import { FiCheck } from "react-icons/fi";

export default function Psychotherapie() {
  return (
    <>
      <PrestationPage
        title="Ateliers colelctifs"
        description="Ateliers collectifs animés par Julie Sanguinetti — partage, apprentissage et croissance personnelle."
        heroText="Vous souhaitez explorer des thématiques spécifiques en groupe, partager vos expériences et apprendre dans un cadre bienveillant ?"
        heroImage={{
          src: "/images/psychotherapie-hero.jpg",
          alt: "Psychothérapie",
        }}
        sections={[
          {
            title:
              "Envie d’un moment pour souffler, apprendre, échanger (et rire un peu) ?",
            content:
              "Les ateliers, c’est l’équilibre parfait entre réflexion, pratique et convivialité. C’est l’occasion de prendre un temps pour soi, de partager des expériences et de repartir avec des outils simples et efficaces. Et si, en plus, vous y trouvez un peu de légèreté… c’est gagné.",
          },
          {
            title: "Pour qui ?",
            content:
              "Pour toutes les personnes curieuses, audacieuses, sensibles (et même celles qui ne le savent pas encore). Pour les âmes qui doutent, les esprits qui cogitent et les coeurs qui vibrent. Ici, on apprend à penser moins contre soi, et un peu plus pour soi. Aucune compétence requise, juste l’envie d’explorer.",
            image: {
              src: "/images/psychotherapie-session.jpg",
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
            content:
              "Un moment pour soi, des outils concrets pour avancer, un regard neuf. Et souvent, cette petite étincelle qui donne envie de passer à l’action. Calendrier et actualités disponibles sur ma page Instagram ou sur demande. Possibilités de création d’atelier sur mesure à partir de vos projets, besoins, partenariats.",
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
            <FiCheck />
          </span>
        </Link>
      </div>
      <br />
    </>
  );
}
