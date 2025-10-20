import CustomHead from "../components/CustomHead";

export default function MentionsLegales() {
  return (
    <>
      <CustomHead
        title="Mentions légales | Julie Sanguinetti"
        description="Mentions légales du site de Julie Sanguinetti."
      />

      <main
        style={{ padding: "3rem 2rem", maxWidth: "800px", margin: "0 auto" }}
      >
        <h1>Mentions légales</h1>

        <section>
          <h2>Éditeur du site</h2>
          <p>
            Julie Sanguinetti
            <br />
            Adresse : [à compléter]
            <br />
            Email : [à compléter]
          </p>
        </section>

        <section>
          <h2>Hébergement</h2>
          <p>
            Nom de l’hébergeur : [à compléter]
            <br />
            Adresse : [à compléter]
            <br />
            Site web : [à compléter]
          </p>
        </section>

        <section>
          <h2>Propriété intellectuelle</h2>
          <p>
            Le contenu de ce site (textes, images, logos, etc.) est la propriété
            exclusive de Julie Sanguinetti sauf mention contraire. Toute
            reproduction ou utilisation sans autorisation est interdite.
          </p>
        </section>

        <section>
          <h2>Responsabilité</h2>
          <p>
            Julie Sanguinetti s’efforce d’assurer l’exactitude des informations
            diffusées sur ce site. Toutefois, elle ne saurait être tenue pour
            responsable des éventuelles erreurs ou omissions.
          </p>
        </section>
      </main>
    </>
  );
}
