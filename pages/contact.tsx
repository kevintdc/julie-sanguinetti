import ContactInfoSection from "../components/ContactInfoSection";
import ContactMapAndForm from "../components/ContactMapAndForm";
import CustomHead from "../components/CustomHead";

export default function Contact() {
  return (
    <>
      <CustomHead
        title="Contact | Julie Sanguinetti"
        description="Contactez Julie pour vos projets personnels ou demandes de psychothérapie."
      />
      <main>
        <ContactInfoSection />
        <ContactMapAndForm />
      </main>
    </>
  );
}
