import { useState } from "react";
import ContactInfoSection from "../components/ContactInfoSection";
import ContactMapAndForm from "../components/ContactMapAndForm";
import CustomHead from "../components/CustomHead";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const body = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      website: formData.get("website"), // honeypot
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <>
      <CustomHead
        title="Contact | Julie Sanguinetti"
        description="Contactez Julie pour vos projets personnels ou demandes de psychothérapie."
      />
      <main>
        <ContactInfoSection />
        <ContactMapAndForm onSubmit={handleSubmit} status={status} />
      </main>
    </>
  );
}
