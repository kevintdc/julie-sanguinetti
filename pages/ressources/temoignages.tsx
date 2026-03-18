import PrestationPage from "../../components/PrestationPage";
import TestimonialsCarousel from "../../components/TestimonialsCarousel";

const testimonials = [
  {
    name: "Poline S.",
    rating: 5,
    text: "✨ 5 étoiles bien méritées ✨Je recommande vivement ! Cette psychothérapeute a été vraiment bénéfique pour moi : écoute attentive, bienveillance et outils concrets qui ont fait une vraie différence. J’ai hâte d’écouter son podcast, tellement j’ai apprécié l'approche de Julie 💛 🙌",
  },
  {
    name: "Emeline D.",
    rating: 5,
    text: "Julie n’est pas une « psy » c’est bien plus que ça, merci infiniment, pour tout, tu as fait en sorte que je guérisse de blessures très fortes, tes outils et tes petits exercices m’ont fait chouiner certes, mais tellement de bien. Merci d’avoir fait de moi une tout autre personne. Y’a pas à hésiter, j’aurais pas pu avoir mieux comme thérapie 🫶🏼",
  },
  {
    name: "Emilie G.",
    rating: 5,
    text: "Participation à l'atelier \"l'art de s'en foutre\". Merci Julie, pour ce moment bienveillant, de partage, d'écoute, d'apprentissage. En petit groupe, très enrichissant. Je recommande de découvrir cette expérience très intéressante.",
  },
  {
    name: "Jade C.",
    rating: 5,
    text: "Julie est une thérapeute exceptionnelle. A l’écoute, douce et bienveillante, elle saura vous donner les clés donc vous avez besoin pour améliorer votre santé mentale et votre vie. Elle prend le temps de bien cerner les problématiques afin de répondre aux mieux à nos besoins. Je la recommande 1000x et je suis très heureuse de faire partie des personnes qu’elle accompagne. Merci Julie!",
  },
  {
    name: "Véronique S.",
    rating: 5,
    text: "Mille mercis Julie pour votre professionnalisme, votre empathie, votre écoute personnalisée. J'ai bénéficié avec plaisir de vos conseils avisés, et j'en ressort grandie de cet apprentissage. Bref, vous êtes une psychothérapeute à recommander \"sans modération\"",
  },
  {
    name: "Sara H.",
    rating: 5,
    text: "J’ai eu la chance de rencontrer Julie pendant notre formation et j'ai donc eu l'occasion de travailler sur moi aupres d'elle. J'ai tout de suite été impressionnée par sa présence, sa qualité d’écoute, sa finesse d'analyse et sa bienveillance. Elle incarne une professionnelle engagée, humaine et compétente, profondément respectueuse du parcours de chacun, que je recommande les yeux fermés. Vous serez entre de très bonnes mains. Belle continuation à toi Julie, hâte de voir où ce chemin passionnant te menera...",
  },
  {
    name: "Candice R.",
    rating: 5,
    text: "Julie est vraiment super, vraiment à l'écoute, et elle saura vous accompagner avec bienveillance et douceur, sans tralala, avec un seul objectif en tête : vous accompagner pour que vous trouviez les réponses en vous! Et teaser... elle est du genre tenace et elle atteint toujours ses objectifs. 🤘",
  },
  {
    name: "Sophie L.",
    rating: 5,
    text: "Une rencontre incroyable. Julie a su aller chercher en moi des choses insoupçonnées et surtout les ancrer sur la durée. Juste merci",
  },
  {
    name: "Audrey C.",
    rating: 5,
    text: "Une écoute authentique, une bienveillance rare et une énergie communicative ! J'ai eu la chance de rencontrer Julie lors d'une formation, les accompagnements qu'elle m'a fait ont été un vrai moment de recentrage et d’élan. Un accompagnement sur-mesure qui fait vraiment du bien. Merci ! 🌟",
  },
  {
    name: "Cléémentine G.",
    rating: 5,
    text: "Les échanges que j'ai eu avec Julie ont été à chaque fois, et sont toujours, des moments d'accueil bienveillant et d'écoute empathique et compréhensive. Je recommande sincèrement cette thérapeute pour sa présence, sa pertinence et sa douceur qui ont été trois qualités très précieuses pour moi !",
  },
  {
    name: "Laurent M.",
    rating: 5,
    text: "J’ai fait appel à Julie pour me permettre d’améliorer ma concentration et mon organisation au travail, mais aussi dans ma vie en générale … En quatre séances et deux suivis…… Julie a su toucher la cause profonde et les résultats sont sans appels….merci pour votre professionnalisme et votre bienveillance . Je recommande vivement .",
  },
  {
    name: "Ensevelyne B.",
    rating: 5,
    text: "Une professionnelle bienveillante et à l'écoute. Je me suis sentie tout de suite en confiance grâce à son approche douce et sans jugement. Elle sait poser les bonnes questions et proposer des outils adaptés pour avancer sereinement. Merci pour votre aide précieuse ! Je recommande vivement.",
  },
  {
    name: "Eloise D.",
    rating: 5,
    text: "Seulement si vous cherchez quelqu’un de compétent pour vous aider à vous comprendre, vous connaître et ainsi aboutir aux résultats que vous envisagez. Personnellement j’ai eu un déclic en pleine séance et la dynamique qu’il a infusé en moi ne me quitte plus et m’aide au quotidien à prendre des décisions, car là était ma problématique.",
  },
  {
    name: "Jessica P.",
    rating: 5,
    text: "J'ai eu l'occasion de passer \"entre les mains\" de Julie au cours d'une formation. Douceur, bienveillance et audace, un combo qui m'a beaucoup touché, merci Julie",
  },
  {
    name: "Sophie L.",
    rating: 5,
    text: "Une rencontre incroyable. Julie a su aller chercher en moi des choses insoupçonnées et surtout les ancrer sur la durée. Juste merci",
  },
  {
    name: "Pascal C.",
    rating: 5,
    text: "Une professionnelle investie, sensible et profondément humaine. On sent qu’elle met tout son cœur et son authenticité dans ce qu’elle fait. Je la recommande les yeux fermés.",
  },
  {
    name: "Sandro C.",
    rating: 5,
    text: "Super séance avec Julie qui est très professionnelle, compétente et bienveillante ! Je recommande vivement.",
  },
  {
    name: "Julie N.",
    rating: 5,
    text: "Je l'ai choisie en tant que psy à la base .. Elle est devenue ma coach mentale. Je la qualifierai comme un mentor dans l'art de la résilience et de la détermination. Grâce à elle, je dépasse mes peurs et mes limites, je crois davantage en moi .. et je me transcende pour enfin atteindre mes objectifs. Merci Julie ✨",
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
