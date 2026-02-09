import PrestationPage from "../../components/PrestationPage";

export default function Services() {
  return (
    <PrestationPage
      title="Podcast"
      description="Découvrez le podcast de Julie Sanguinetti, où elle explore des sujets liés à la psychothérapie, la préparation mentale et le bien-être avec humour et humanité."
      heroText="Écoutez, apprenez et grandissez avec mes invités."
      heroImage={{
        src: "/images/podcast.png",
        alt: "Services complémentaires",
      }}
      sections={[
        {
          title: "En cours d'implantation",
          content:
            "Le podcast est en préparation. Ici on parlera de déclics, de claques de vie et de ce qu'on en fait. Des interviews menées avec cœur, sens et honnêteté. On parle vrai et sans filtre. Comment transformer nos coups durs en coups de génie. Restez tout près, les épisodes arrivent bientôt sur toutes les plateformes d'écoute.",
        },
      ]}
      cta={{ label: "Prendre contact", href: "/contact" }}
    />
  );
}
