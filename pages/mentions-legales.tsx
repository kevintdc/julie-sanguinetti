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
            Micro-entreprise immatriculée sous le numéro SIRET : 99213282900019
            <br />
            Adresse du cabinet : 4 route de Ginestas, 11120 Mirepeisset
            <br />
            Email : juliesanguinetti.pnl@gmail.com
            <br />
            Téléphone : 06 65 91 43 71
            <br />
            Directrice de la publication : Julie Sanguinetti
          </p>
        </section>

        <section>
          <h2>Hébergement</h2>
          <p>
            Nom de l’hébergeur : OVH Cloud
            <br />
            SAS au capital de 50 000 000 €
            <br />
            RCS Lille Métropole 424 761 419
            <br />
            Siège social : 2 rue Kellermann – 59100 Roubaix – France
            <br />
            Téléphone : 1007 (depuis la France)
            <br />
            Site web : https://www.ovhcloud.com
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
        <section>
          <h2>Activité professionnelle</h2>
          <p>
            Julie Sanguinetti exerce en tant que :
            <ul>
              <li> • Praticienne en psychothérapie</li>
              <li>• Préparatrice mentale</li>
            </ul>
            <br />
            Cette activité n’est pas soumise à un régime professionnel
            réglementé. Elle est exercée sous statut de micro-entreprise.
          </p>
        </section>
      </main>
    </>
  );
}
