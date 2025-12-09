import PrestationPage from "../../components/PrestationPage";
import GoogleReviewsCarousel from "../../components/GoogleReviewsCarousel";

export default function Services() {
  return (
    <PrestationPage
      title="Témoignages"
      description="Découvrez les avis et témoignages de clients ayant bénéficié des services de Julie Sanguinetti en psychothérapie et préparation mentale."
      heroText="Des services adaptés à vos besoins"
      heroImage={{
        src: "/images/services-hero.jpg",
        alt: "Services complémentaires",
      }}
      sections={[
        {
          title: "Avis Google",
          content:
            "Voici ce que disent les clients de Julie Sanguinetti après avoir bénéficié de ses services en psychothérapie et préparation mentale.",
        },
        {
          title: "Témoignages",
          content: (
            <GoogleReviewsCarousel placeId="ChIJ4wPtk3ixsRIRHjp6VXrtI4Q" />
          ),
        },
      ]}
      cta={{ label: "Prendre contact", href: "/contact" }}
    />
  );
}
