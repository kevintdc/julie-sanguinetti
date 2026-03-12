import { useState } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import ContactInfoSection from "../components/ContactInfoSection";
import ContactMapAndForm from "../components/ContactMapAndForm";
import CustomHead from "../components/CustomHead";
import Quote from "../components/Quote";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (formData: FormData) => {
    setStatus("sending");

    const body = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      website: formData.get("website"),
      "g-recaptcha-response": formData.get("g-recaptcha-response"),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    setStatus(response.ok ? "success" : "error");
  };

  return (
    <>
      <CustomHead
        title="Contact | Julie Sanguinetti"
        description="Contactez Julie pour vos projets personnels ou demandes de psychothérapie."
      />

      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
      >
        <main>
          <ContactInfoSection />
          <ContactMapAndForm onSubmit={handleSubmit} status={status} />
        </main>
      </GoogleReCaptchaProvider>

      <Quote>
        🕰 Petit rappel pratique <br />• Merci d’arriver à l’heure prévue ou
        maxi 5 minutes avant l’heure du rendez-vous (pas de salle d’attente).{" "}
        <br />• Les séances se font en présentiel ou en visio, selon vos
        besoins. <br />
        • Les séances duo (parent/enfant, couple, binôme sportif…) sont
        possibles sur demande. <br />
        <br />❤ Et si vous hésitez à écrire ? Prenez le temps, respirez, puis
        lancez-vous. Un premier message, c’est déjà un premier pas et cela
        n’engage à rien.
      </Quote>

      <Quote>« Un jour, je commencerais. Jour Un, je commence. »</Quote>
    </>
  );
}
