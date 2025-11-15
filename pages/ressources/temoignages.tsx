import PrestationPage from "../../components/PrestationPage";

export default function Services() {
  return (
    <PrestationPage
      title="Témoignages"
      description="Ateliers, accompagnements spécifiques, interventions ponctuelles — découvrez les autres services proposés par Julie Sanguinetti."
      heroText="Julie vous propose des accompagnements sur mesure, en dehors du cadre traditionnel de la psychothérapie ou de la préparation mentale."
      heroImage={{
        src: "/images/services-hero.jpg",
        alt: "Services complémentaires",
      }}
      sections={[
        {
          title: "Interventions ponctuelles",
          content:
            "Conférences, ateliers de groupe, sensibilisation en entreprise ou milieu scolaire. Julie intervient autour de thèmes comme la gestion des émotions, le stress, la communication ou la préparation mentale.",
        },
        {
          title: "Accompagnements spécifiques",
          content: (
            <>
              <p>Julie propose aussi un accompagnement pour :</p>
              <ul>
                <li>Parents en difficulté relationnelle avec leurs enfants</li>
                <li>Jeunes adultes en période de transition</li>
                <li>
                  Personnes en questionnement identitaire ou professionnel
                </li>
              </ul>
            </>
          ),
          image: {
            src: "/images/services-accompagnement.jpg",
            alt: "Accompagnement personnalisé",
          },
        },
        {
          title: "Collaborations",
          content:
            "Professionnel·le du soin, du sport ou du développement personnel ? Julie est ouverte aux projets communs ou relais d'accompagnement.",
        },
      ]}
      cta={{ label: "Prendre contact", href: "/contact" }}
    />
  );
}
