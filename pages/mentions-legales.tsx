import CustomHead from "../components/CustomHead";
import styles from "../styles/PolitiquesConf.module.css";

export default function MentionsLegales() {
  return (
    <>
      <CustomHead
        title="Mentions légales | Julie Sanguinetti"
        description="Mentions légales du site de Julie Sanguinetti."
      />

      <main className={styles.main}>
        <h1 className={styles.pageTitle}>Mentions légales</h1>

        <p className={styles.divider}>⸻</p>

        <section className={styles.section}>
          <h2>1. Éditeur du site</h2>
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

        <p className={styles.divider}>⸻</p>

        <section className={styles.section}>
          <h2>2. Hébergement</h2>
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

        <p className={styles.divider}>⸻</p>

        <section className={styles.section}>
          <h2>3. Propriété intellectuelle</h2>
          <p>
            Le contenu de ce site (textes, images, logos, etc.) est la propriété
            exclusive de Julie Sanguinetti sauf mention contraire. Toute
            reproduction ou utilisation sans autorisation est interdite.
          </p>
        </section>

        <p className={styles.divider}>⸻</p>

        <section className={styles.section}>
          <h2>4. Responsabilité</h2>
          <p>
            Les informations présentes sur ce site ont une vocation informative
            et ne remplacent en aucun cas un avis médical ou psychologique
            dispensé par un professionnel de santé. Julie Sanguinetti ne peut
            être tenue responsable d’un mauvais usage des informations
            disponibles sur le site.
          </p>
        </section>

        <p className={styles.divider}>⸻</p>

        <section className={styles.section}>
          <h2>5. Activité professionnelle</h2>
          <p>Julie Sanguinetti exerce en tant que :</p>
          <ul className={styles.list}>
            <li>Praticienne en psychothérapie</li>
            <li>Préparatrice mentale</li>
          </ul>
          <p>
            Cette activité n’est pas soumise à un régime professionnel
            réglementé. Elle est exercée sous statut de micro-entreprise.
          </p>
        </section>

        <p className={styles.divider}>⸻</p>

        <section className={styles.section}>
          <h2>6. Médiation de la consommation</h2>
          <p>
            Conformément à l’article L612-1 du Code de la consommation, en cas
            de litige vous pouvez saisir:
          </p>
          <ul className={styles.list}>
            <li>Société Médiation Professionnelle</li>
            <li>www.mediateur-consommation-smp.fr</li>
            <li>(SMP – Médiation de la consommation)</li>
            <li>
              Adresse email du médiateur :
              mediateur@mediateur-consommation-smp.fr
            </li>
            <li>
              Adresse postale : Société de la médiation professionnelle -
              Médiateur de la consommation Alteritae, 5 rue salvaing 12 000
              Rodez
            </li>
          </ul>
          <p>
            Cette activité n’est pas soumise à un régime professionnel
            réglementé. Elle est exercée sous statut de micro-entreprise.
          </p>
        </section>

        <p className={styles.divider}>⸻</p>

        <section className={styles.section}>
          <h2>7. Protection des données personnelles</h2>
          <p>
            Les informations collectées via le formulaire de contact sont
            utilisées uniquement pour répondre aux demandes. Conformément au
            RGPD et à la loi Informatique & Libertés, vous disposez d’un droit
            d’accès, de rectification et de suppression :
          </p>
          <p>👉 en écrivant à : juliesanguinetti.pnl@gmail.com</p>
          <p>Aucune donnée n’est vendue ni transférée à des tiers.</p>
        </section>

        <p className={styles.divider}>⸻</p>

        <section className={styles.section}>
          <h2>8. Création du site</h2>
          <p>Design, textes et contenus : Julie Sanguinetti</p>
          <p>Création et conception du site : Toudic Development</p>
        </section>
      </main>
    </>
  );
}
