import PrestationPage from "../../components/PrestationPage";

export default function Services() {
  return (
    <PrestationPage
      title="Actualités"
      description="Ateliers, accompagnements spécifiques, interventions ponctuelles — découvrez les autres services proposés par Julie Sanguinetti."
      heroText=""
      heroImage={{
        src: "/images/services-hero.jpg",
        alt: "Services complémentaires",
      }}
      sections={[
        {
          title: "Mes actualités",
          content:
            "Retrouvez ici les dernières nouvelles concernant les ateliers, événements et autres activités proposés par Julie Sanguinetti. Restez informé·e des prochaines dates et nouveautés !",
        },
      ]}
      cta={{ label: "Prendre contact", href: "/contact" }}
    />
  );
}
