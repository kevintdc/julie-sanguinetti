import CustomHead from "../components/CustomHead";
import FAQAccordion from "../components/FAQAccordion";

export default function FAQPage() {
  return (
    <>
      <CustomHead
        title="FAQ – Vos questions fréquentes | Julie Sanguinetti"
        description="Foire aux questions concernant la psychothérapie, la préparation mentale, les tarifs, la visio, les séances, etc."
      />
      <main>
        <section style={{ padding: "2rem 1rem", textAlign: "center" }}>
          <h1>💬 FAQ — Vos questions fréquentes</h1>
        </section>
        <FAQAccordion />
      </main>
    </>
  );
}
