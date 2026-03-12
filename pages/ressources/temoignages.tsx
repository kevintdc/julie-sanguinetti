import PrestationPage from "../../components/PrestationPage";
import TestimonialsCarousel from "../../components/TestimonialsCarousel";

const testimonials = [
  {
    name: "Marie",
    rating: 5,
    text: "Julie m’a énormément aidée à retrouver confiance en moi et à avancer avec plus de sérénité au quotidien.",
  },
  {
    name: "Thomas",
    rating: 5,
    text: "Un accompagnement très juste, bienveillant et concret. J’en ressors avec de vrais outils.",
  },
  {
    name: "Camille",
    rating: 4,
    text: "Une écoute précieuse dans une période compliquée. Je me suis sentie comprise et guidée.",
  },
  {
    name: "Luc",
    rating: 5,
    text: "Des séances qui m’ont permis de mieux gérer mon stress et de reprendre confiance.",
  },
  {
    name: "Sophie",
    rating: 5,
    text: "Un vrai changement dans ma manière de vivre mes émotions. Merci pour cette qualité d’accompagnement.",
  },
  {
    name: "Paul",
    rating: 4,
    text: "Très professionnel, humain et à l’écoute. Une belle expérience.",
  },
];

export default function Temoignages() {
  return (
    <PrestationPage
      title="Témoignages"
      description="Découvrez les avis et témoignages de clients ayant bénéficié des services de Julie Sanguinetti en psychothérapie et préparation mentale."
      heroText="Ils sont venus avec leurs questions, leurs doutes, leurs objectifs. Découvrez ici ce qu’ils partagent après le chemin parcouru ensemble."
      heroImage={{
        src: "/images/temoignage.jpg",
        alt: "Témoignages et avis clients",
      }}
      sections={[
        {
          title: "Ce qu’ils en disent",
          content: <TestimonialsCarousel testimonials={testimonials} />,
        },
        {
          title: "Voir plus d’avis",
          content: (
            <a
              href="https://www.google.com/search?client=firefox-b-d&hs=VGqU&sa=X&sca_esv=c50016dede84fb5a&sxsrf=ANbL-n6OSNBLA2mYJTW-Xe8EWZIEulzpiQ:1773336891804&q=%E2%80%A2+Julie+SANGUINETTI+%E2%80%A2+Psychoth%C3%A9rapie+%26+Pr%C3%A9paration+mentale+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxK2NDUyNDc0NTQxszAzNzIyNzQz28DI-IrR9VHDIgWv0pzMVIVgRz_3UE8_15AQTwWQaEBxZXJGfknG4ZVFiQVAeTWFgKLDKwsSixJLMvPzFHJT80oSc1IVHMsyixexUsccAItKusyqAAAA&rldimm=9521715146867227166&tbm=lcl&hl=fr-FR&ved=2ahUKEwjC14Lc8pqTAxUkTKQEHfeOPGUQ9fQKegQIURAG&biw=1920&bih=919&dpr=1#lkt=LocalPoiReviews"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#a24a3b",
                fontWeight: 600,
                textDecoration: "underline",
              }}
            >
              Consulter tous les avis sur Google
            </a>
          ),
        },
      ]}
      cta={{ label: "Prendre contact", href: "/contact" }}
    />
  );
}
