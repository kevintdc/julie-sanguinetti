import PrestationPage from "../../components/PrestationPage";

export default function Psychotherapie() {
  return (
    <PrestationPage
      title="Psychothérapie"
      description="Accompagnement psychothérapeutique individualisé avec Julie Sanguinetti — écoute, soutien et transformation."
      heroText="Un espace de parole, de compréhension et de transformation pour vous accompagner en toute bienveillance."
      heroImage={{
        src: "/images/psychotherapie-hero.jpg",
        alt: "Psychothérapie",
      }}
      sections={[
        {
          title: "Pour qui ?",
          content:
            "Vous traversez un moment difficile ou souhaitez mieux vous connaître ? La psychothérapie vous offre un espace d’écoute bienveillant.",
        },
        {
          title: "Mon approche",
          content:
            "J'utilise une approche centrée sur la personne, combinée à des outils de la psychologie moderne, pour vous aider à avancer vers plus de clarté et de liberté.",
          image: {
            src: "/images/psychotherapie-session.jpg",
            alt: "Séance de psychothérapie",
          },
        },
        {
          title: "Déroulement d'une séance",
          content:
            "Première séance d’évaluation, suivie de séances régulières à votre rythme. Un accompagnement sur mesure.",
        },
      ]}
      cta={{ label: "Me contacter", href: "/contact" }}
    />
  );
}
