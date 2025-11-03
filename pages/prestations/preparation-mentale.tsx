import PrestationPage from "../../components/PrestationPage";

export default function PreparationMentale() {
  return (
    <PrestationPage
      title="Préparation mentale"
      description="Préparation mentale pour sportifs, artistes et professionnels exigeants — avec Julie Sanguinetti."
      heroText="Renforcer votre mental pour performer, gérer le stress, et rester aligné.e avec vos objectifs personnels et professionnels."
      heroImage={{
        src: "/images/preparation-mentale-hero.jpg",
        alt: "Préparation mentale",
      }}
      sections={[
        {
          title: "Qui est concerné·e ?",
          content:
            "Artistes, sportifs, professionnels en transition ou toute personne souhaitant libérer son plein potentiel mental : cette démarche est faite pour vous.",
        },
        {
          title: "Mon accompagnement",
          content:
            "Je vous propose des techniques personnalisées pour : gérer la pression, structurer vos pensées, gagner en confiance, et rester focalisé·e. Une approche humaine, dynamique et adaptée.",
          image: {
            src: "/images/preparation-mentale-technique.jpg",
            alt: "Techniques de préparation mentale",
          },
        },
        {
          title: "Processus & tarifs",
          content:
            "Consultation initiale (80 min), suivie d’un accompagnement modulable. Pour connaître les tarifs, contactez‑moi directement.",
        },
      ]}
      cta={{ label: "Me contacter", href: "/contact" }}
    />
  );
}
