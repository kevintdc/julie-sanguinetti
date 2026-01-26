import CustomHead from "../components/CustomHead";
import CardsSection from "../components/CardsSection";

export default function Ressources() {
  return (
    <>
      <CustomHead
        title="Ressources | Julie Sanguinetti"
        description="Témoignages, podcasts, actualités & inspirations autour de la psychothérapie et de la préparation mentale."
      />
      <main style={{ padding: "2rem 1rem", textAlign: "center" }}>
        <h1>Ressources</h1>
      </main>
      <CardsSection
        cards={[
          {
            imageSrc: "/images/resstemoignage.jpg",
            imageAlt: "Témoignages",
            title: "Témoignages",
            overlayText: "Découvrez les retours des personnes accompagnées",
            overlayText2: "",
            overlayText3: "",
            buttonText: "Lire",
            href: "/ressources/temoignages",
            id: "ressources-temoignages",
          },
          {
            imageSrc: "/images/resspodcast.jpg",
            imageAlt: "Podcast",
            title: "Podcast",
            overlayText:
              "Écoutez les épisodes sur le mental, les émotions & plus",
            overlayText2: "",
            overlayText3: "",
            buttonText: "Écouter",
            href: "/ressources/podcast",
            id: "ressources-podcast",
          },
          {
            imageSrc: "/images/ressactu.jpg",
            imageAlt: "Actualités",
            title: "Actualités",
            overlayText: "Les dernières nouvelles, événements & publications",
            overlayText2: "",
            overlayText3: "",
            buttonText: "Voir",
            href: "/ressources/actualites",
            id: "ressources-actualites",
          },
          {
            imageSrc: "/images/ressinspi.jpg",
            imageAlt: "Inspirations",
            title: "Inspirations",
            overlayText: "Livres, citations, idées qui nourrissent le chemin",
            overlayText2: "",
            overlayText3: "",
            buttonText: "Explorer",
            href: "/ressources/inspirations",
            id: "ressources-inspirations",
          },
        ]}
      />
    </>
  );
}
