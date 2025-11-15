import CustomHead from "../components/CustomHead";
import AboutHero from "../components/AboutHero";
import AboutTextSection from "../components/AboutTextSection";

export default function Apropos() {
  return (
    <>
      <CustomHead
        title="À propos | Julie Sanguinetti"
        description="En savoir plus sur Julie Sanguinetti, sa démarche et sa vision."
      />
      <main>
        <AboutHero />
        <br />
        <AboutTextSection />
        <br />
      </main>
    </>
  );
}
