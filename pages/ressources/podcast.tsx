import PrestationPage from "../../components/PrestationPage";

export default function Services() {
  return (
    <PrestationPage
      title="Podcast"
      description="Découvrez le podcast de Julie Sanguinetti, où elle explore des sujets liés à la psychothérapie, la préparation mentale et le bien-être avec humour et humanité."
      heroText="Écoutez, apprenez et grandissez avec Julie."
      heroImage={{
        src: "/images/services-hero.jpg",
        alt: "Services complémentaires",
      }}
      sections={[
        {
          title: "En cours d'implantation",
          content:
            "Le podcast de Julie Sanguinetti est en cours de développement. Restez à l'écoute pour des épisodes captivants qui vous aideront à mieux comprendre votre esprit et à cultiver votre bien-être mental.",
        },
      ]}
      cta={{ label: "Prendre contact", href: "/contact" }}
    />
  );
}
