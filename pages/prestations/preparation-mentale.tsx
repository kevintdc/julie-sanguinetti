import PrestationPage from "../../components/PrestationPage";
import CardsSection from "../../components/CardsSection";
import styles from "../../styles/Prestation.module.css";
export default function PreparationMentale() {
  return (
    <>
      <PrestationPage
        title="Préparation mentale"
        description="Préparation mentale pour sportifs, artistes et professionnels exigeants — avec Julie Sanguinetti."
        heroText="Vous avez un objectif, un défi… ou juste l’envie d’arrêter de vous saboter ?"
        heroImage={{
          src: "/images/prepamental1.jpg",
          alt: "Préparation mentale",
        }}
        sections={[
          {
            title: "La préparation mentale, c'est quoi ?",
            content: (
              <>
                <p>
                  La préparation mentale, c’est l’art de faire{" "}
                  <strong>la paix avec son mental</strong> quand il décide de
                  faire grève. C’est aussi apprendre à
                  <strong> transformer</strong> le stress en allié, à canaliser
                  ses émotions et à retrouver du <strong>plaisir</strong> dans
                  la <strong>performance</strong>. Repartez avec un mindset
                  aussi affûté qu’un couteau de boucher : précis, tranchant, et
                  prêt à couper court à tout ce qui freine votre élan. C’est
                  concret, <strong>efficace</strong>, et toujours adapté à votre
                  personnalité et votre projet. Un accompagnement actif, soigné
                  et orienté vers vos objectifs — et toujours dans le{" "}
                  <strong>respect</strong> du rythme et de la personne, juste
                  avant une échéance importante.
                </p>
                <br />
              </>
            ),
          },
          {
            title: "Pour qui ?",
            content: (
              <>
                <p>
                  Pour les sportifs, les artistes, les étudiants, les
                  dirigeants, les professionnels, les particuliers. En solo, en
                  binôme ou en équipe. Débutants, avancés, professionnels, haut
                  niveau. Bref, pour toute personne qui veut performer sans se
                  perdre. Pour celles et ceux qui veulent arriver le jour J de
                  leur défi, plus préparée qu’une mariée à la mairie. Pas besoin
                  d’être athlète de haut niveau :{" "}
                  <strong>ici, le terrain, c’est le vôtre</strong> — compétition
                  sportive, oral, projet pro, ou simple envie de se dépasser
                  sans y laisser la moitié de votre sérénité.
                </p>
              </>
            ),
            image: {
              src: "/images/prepamental2.jpg",
              alt: "Techniques de préparation mentale",
            },
          },
          {
            title: "En quoi la préparation mentale peut aider ?",
            content: (
              <>
                <p>
                  La préparation mentale agit sur ce qui fait vraiment la
                  différence :
                </p>
                <br />
                <ul className="checkList">
                  <li>✔ Gestion du stress et de la concentration</li>
                  <li>
                    ✔ Préparation sereine d&apos;une échéance : compétition,
                    oral, examens…
                  </li>
                  <li>✔ Transformation du doute en confiance</li>
                  <li>✔ Ancrage émotionnel</li>
                  <li>✔ Clarté des objectifs</li>
                  <li>✔ Récupération mentale et régulation émotionnelle</li>
                  <li>✔ Mise en place de routines mentales efficaces</li>
                  <li>✔ Travail sur son identité</li>
                  <br />
                  <li>
                    <em>
                      Liste non exhaustive, la seule limite c&apos;est vous !
                    </em>
                  </li>
                </ul>
                <br />
                <p>
                  Ici, <strong>pas de discours motivants</strong>, mais des{" "}
                  <strong>outils concrets</strong>, des{" "}
                  <strong>mises en situation</strong>, et un vrai travail
                  d&apos;adaptation à votre personnalité.
                </p>
              </>
            ),
          },
          {
            title: "Comment ça se passe ?",
            content: (
              <>
                <p>
                  Je m’engage à donner le meilleur de mon savoir-faire, de mon
                  intuition et de mon exigence, pour que vous puissiez donner le
                  meilleur de vous-même et performer avec sérénité, alignement
                  et plaisir.
                </p>
                <br />
                <ol className={styles.numberedList}>
                  <li>
                    <strong>Prise de contact → </strong>un appel de 15 minutes
                    (gratuit) pour définir votre besoin.
                  </li>
                  <li>
                    <strong>Choix de la formule → </strong>selon votre objectif,
                    votre rythme et votre budget.
                  </li>
                  <li>
                    <strong>Accompagnement personnalisé → </strong>en cabinet,
                    visio ou lieu adapté.
                  </li>
                  <li>
                    <strong>Suivi et autonomie → </strong>outils concrets,
                    bilans, exercices pratiques.
                  </li>
                </ol>
                <br />
                <p>
                  Chaque formule est pensée comme un chemin : plus vous avancez,
                  plus vous découvrez la puissance de votre mental.
                </p>
                <br />
                <p>
                  La fréquence des séances est décidé ensemble selon vos besoins
                  et reste modifiable.
                </p>
                <br />
                <p>
                  Le règlement s&apos;effectue sur place, en espèces ou par
                  virement. Si besoin, un paiement en plusieurs fois peut être
                  proposé - l&apos;important, c&apos;est que la démarche reste
                  fluide et sereine.
                </p>
              </>
            ),
          },
          {
            title: "Formules et tarifs",
            content:
              "Ces offres sont pensées comme une belle histoire. Je démarre avec élan, j’avance dans la progression, je prends un autre niveau avec l’ascension et je m’ancre dans la durée avec les piliers. Consultation initiale (60 min), suivie d’un accompagnement modulable. Un besoin, une question ? Discutons-en ensemble !",
          },
        ]}
        cta={{ label: "Me contacter", href: "/contact" }}
      />
      <div className={styles.containerCard}>
        <CardsSection
          cards={[
            {
              imageSrc: "/images/carte-decouverte.jpg",
              imageAlt: "Séance découverte",
              title: "Séance découverte",
              overlayText: "1 séance 1h",
              overlayText2: "60 €",
              overlayText3: (
                <>
                  <ul>
                    <li className={styles.list}>
                      Une véritable séance de travail pour définir vos objectifs
                      et identifier vos leviers de progression. Vous repartez
                      avec un positionnement clair sur vos besoins et vos
                      possibilités d’évolution. Si vous décidez de poursuivre
                      l’aventure à travers une formule, cette séance vous sera
                      offerte - Un premier pas que je fais avec vous, avec
                      plaisir sur le chemin de votre transformation.
                    </li>
                  </ul>
                </>
              ),
              buttonText: "Choisir",
              href: "/contact",
              id: "seance-decouverte",
            },
            {
              imageSrc: "/images/carte-oneshot.jpg",
              imageAlt: "Séance oneshot",
              title: "Séance One Shot",
              overlayText: "1 séance 1h30",
              overlayText2: "150 €",
              overlayText3: (
                <>
                  <ul>
                    <li className={styles.list}>
                      Une séance intensive pour répondre à un besoin immédiat :
                    </li>
                    <li className={styles.list}>
                      • Gestion du stress avant une échéance
                    </li>
                    <li className={styles.list}>
                      • Déblocage émotionnel ou mental
                    </li>
                    <li className={styles.list}>
                      • Recentrage express avant un évènement important
                    </li>
                    <li className={styles.list}>
                      Vous repartez avec un plan d&apos;action concret et des
                      outils simples à appliquer
                    </li>
                  </ul>
                </>
              ),
              buttonText: "Choisir",
              href: "/contact",
              id: "seance-oneshot",
            },
            {
              imageSrc: "/images/carte-pilier.jpg",
              imageAlt: "Formule Pilier",
              title: "Formule Pilier",
              overlayText:
                "Accompagnement ancré et régulier qui vous soutient dans la durée — sur devis",
              overlayText2:
                " Pour installer un cadre solide, avancer en profondeur et rester soutenu·e mois après mois. Idéal lorsque l’on souhaite travailler en continu, au long cours. ",
              overlayText3: "",
              buttonText: "Me contacter",
              href: "/contact",
              id: "formule-pilier",
            },
            {
              imageSrc: "/images/carte-elan.jpg",
              imageAlt: "Formule Elan",
              title: "Formule Elan",
              overlayText: "5 séances d'1h sur 2 mois",
              overlayText2: "520 €",
              overlayText3: (
                <ul>
                  <li className={styles.list}>
                    • 1 séance découverte offerte + 4 séances de transformations
                  </li>
                  <li className={styles.list}>
                    • Séances au cabinet, Visio ou lieu impactant
                  </li>
                  <li className={styles.list}>
                    • Suivi par message entre les séances (réponse sous 24h
                    ouvrées)
                  </li>
                  <li className={styles.list}>
                    • Exercices et outils personnalisés selon vos besoins
                  </li>
                </ul>
              ),
              buttonText: "Choisir",
              href: "/contact",
              id: "formule-elan",
            },
            {
              imageSrc: "/images/carte-progression.jpg",
              imageAlt: "Formule Progression",
              title: "Formule Progression",
              overlayText: "7 séances d'1h sur 3 mois",
              overlayText2: "840 €",
              overlayText3: (
                <ul>
                  <li className={styles.list}>
                    • 1 séance découverte offerte + 6 séances de transformations
                  </li>
                  <li className={styles.list}>
                    • Séances au cabinet, Visio ou lieu impactant
                  </li>
                  <li className={styles.list}>
                    • Accompagnement WhatsApp entre les séances
                  </li>
                  <li className={styles.list}>
                    • Préparation la veille d&apos;un évènement important (oral,
                    entretien, compétition)
                  </li>
                  <li className={styles.list}>
                    • Outils de préparation mentale et de recentrage
                  </li>
                </ul>
              ),
              buttonText: "Choisir",
              href: "/contact",
              id: "formule-progression",
            },
            {
              imageSrc: "/images/carte-ascension.png",
              imageAlt: "Formule Ascension",
              title: "Formule Ascension",
              overlayText: "11 séances d'1h sur 4 à 5 mois",
              overlayText2: "1 490 €",
              overlayText3: (
                <ul>
                  <li className={styles.list}>
                    • 1 séance découverte offerte + 10 séances de
                    transformations
                  </li>
                  <li className={styles.list}>
                    • Séances au cabinet, Visio ou lieu impactant
                  </li>
                  <li className={styles.list}>
                    • Suivi illimité par WhatsApp (avec horaires définis)
                  </li>
                  <li className={styles.list}>
                    • Préparation la veille d&apos;un évènement clé
                  </li>
                  <li className={styles.list}>
                    • Outils personnalisés et fiches de travail
                  </li>
                  <li className={styles.list}>
                    • 1 séance inclue dans un lieu atypique (ex : blanéo,
                    cryo...)
                  </li>
                </ul>
              ),
              buttonText: "Choisir",
              href: "/contact",
              id: "formule-ascension",
            },
            {
              imageSrc: "/images/carte-binome.jpg",
              imageAlt: "Formule Binôme / Equipe / Clubs",
              title: "Formule Binôme / Equipe / Clubs",
              overlayText: "Sur devis pour une offre adaptée",
              overlayText2: "",
              overlayText3: (
                <>
                  <ul>
                    <li className={styles.list}>
                      Pour les équipes sportives, entreprises ou structures
                      souhaitant un accompagnement collectif autour de la
                      cohésion, de la communication et de la performance
                      mentale.
                    </li>
                    <li className={styles.list}>
                      → Coaching d&apos;équipe, gestion des émotions
                      collectives, confiance, motivation, gestion des conflits.
                    </li>
                  </ul>
                </>
              ),
              buttonText: "Choisir",
              href: "/contact",
              id: "formule-binomie-equipe-clubs",
            },
          ]}
        />
      </div>
    </>
  );
}
