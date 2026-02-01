import PrestationPage from "../../components/PrestationPage";
import styles from "../../styles/Prestation.module.css";

export default function Services() {
  return (
    <PrestationPage
      title="Inspirations"
      description="Explorez les interventions ponctuelles, accompagnements spécifiques et collaborations proposés par Julie Sanguinetti en dehors du cadre traditionnel de la psychothérapie."
      heroText="Parce qu'on ne devient pas soi tout seul"
      heroImage={{
        src: "/images/inspi.jpg",
        alt: "Services complémentaires",
      }}
      sections={[
        {
          title: "🌟 Ils m’inspirent",
          content: (
            <>
              <p>
                Parce qu’on se construit aussi à travers les voix, les regards,
                les mots, les éclats de rire ou les coups de gueule des autres.
                Voici quelques personnalités qui, chacune à leur manière,
                m’inspirent profondément. <br />
                <br />
                L’intelligence d&apos;<strong>Alexandre Astier</strong>, <br />
                La ténacité d&apos;<strong>Élise Lucet</strong>, <br />
                La lucidité mordante de <strong>Jérémy Ferrari</strong>,
                <br />
                La poésie désabusée d&apos;<strong>Orelsan</strong>, <br />
                La profondeur et l’immensité du jeu d’acteur d&apos;
                <strong>Anthony Hopkins</strong>, <br />
                Et la résilience de <strong>Keanu Reeves</strong>
              </p>
            </>
          ),
        },
        {
          title: "🎭 Alexandre Astier",
          content: (
            <>
              <p>
                Pour l&apos;intelligence acérée, la curiosité sans limite et la
                capacité à dire des choses profondes en parlant de chevaliers
                qui mangent des rillettes.
              </p>
              <br />
              <p className={styles.quote}>
                “Ce n&apos;est pas parce qu&apos;ils sont nombreux à avoir tort
                qu&apos;ils ont raison.”
              </p>
            </>
          ),
        },
        {
          title: "🔎 Élise Lucet",
          content: (
            <>
              <p>
                Pour son courage tranquille, son sens du juste, et sa façon
                d&apos;aller au bout des questions que tout le monde évite, son
                audace et sa persévérance.
              </p>
              <br />
              <p className={styles.quote}>
                “Le courage, c&apos;est aussi de poser les questions qui
                dérangent.”
              </p>
            </>
          ),
        },
        {
          title: "💬 Jérémy Ferrari",
          content: (
            <>
              <p>
                Pour l&apos;humour qui gratte là où ça fait réfléchir, et sa
                manière de transformer la colère en lucidité, la qualité de son
                travail et son écriture brillante.
              </p>
              <br />
              <p className={styles.quote}>
                “Rire des choses graves, c&apos;est leur enlever un peu de
                pouvoir.”
              </p>
            </>
          ),
        },
        {
          title: "🎤 Orelsan",
          content: (
            <>
              <p>
                Pour la sensibilité cachée derrière le cynisme,
                l&apos;autodérision bien placée, et sa capacité à mettre des
                mots justes sur le flou.
              </p>
              <br />
              <p className={styles.quote}>
                “Si les hommes se tirent dessus, c&apos;est qu&apos;il y a des
                vaccins dans les balles Et si les bâtiments explosent c&apos;est
                pour fabriquer des étoiles Et si un jour ils ont disparu,
                c&apos;est qu&apos;ils s&apos;amusaient tellement bien Ils sont
                partis faire une ronde, tous en treillis main dans la main Tout
                va bien, tout va bien Petit tout va bien” - extrait de la
                chanson « tout va bien » Novembre 2017.
              </p>
            </>
          ),
        },
        {
          title: "🎥 Anthony Hopkins",
          content: (
            <>
              <p>
                Pour ce jeu d&apos;acteur d&apos;une immensité et d&apos;une
                justesse rare, cette intensité calme, cette sagesse un peu
                sauvage, et ce regard qui a tout vu sans jamais juger.
              </p>
              <br />
              <p className={styles.quote}>
                “La vie, c&apos;est ce qui arrive quand on arrête de vouloir
                tout comprendre.”
              </p>
            </>
          ),
        },
        {
          title: "🎬 Keanu Reeves",
          content: (
            <>
              <p>
                Pour sa discrétion légendaire, sa bienveillance désarmante, sa
                résilience et sa philosophie sans grands discours.
              </p>
              <br />
              <p className={styles.quote}>
                “Chaque lutte de votre vie vous a façonné en la personne que
                vous êtes aujourd&lsquo;hui. Soyez reconnaissant pour les
                moments difficiles ; ils ne peuvent que vous rendre plus fort.”
              </p>
            </>
          ),
        },
        {
          title: "🎤 Freddie Mercury",
          content: (
            <>
              <p>
                Pour sa flamboyance libre, son excentricité sincère et sa façon
                de transformer la scène en déclaration d&apos;existence.
              </p>
              <br />
              <p className={styles.quote}>
                “I won&apos;t be a rock star. I will be a legend.”
              </p>
            </>
          ),
        },
        {
          title: "🔥 Albert Dupontel",
          content: (
            <>
              <p>
                Pour sa folie lucide, sa tendresse anarchique, et cette rage de
                dire le monde autrement.
              </p>
              <br />
              <p className={styles.quote}>
                “Le rire, c&apos;est la politesse du désespoir.”
              </p>
            </>
          ),
        },
        {
          title: "💪 Philippe Croizon",
          content: (
            <>
              <p>
                Pour son audace à toute épreuve, sa ténacité joyeuse et sa façon
                d&apos;incarner la résilience sans jamais la réciter.
              </p>
              <br />
              <p className={styles.quote}>
                “Tout est possible à celui qui ose, travaille et
                n&apos;abandonne jamais.”
              </p>
            </>
          ),
        },
        {
          title: "🕯 Simone Weil",
          content: (
            <>
              <p>
                Pour la rigueur du coeur, la pureté de la pensée, et cette
                manière d&apos;unir la lucidité à la compassion.
              </p>
              <br />
              <p className={styles.quote}>
                “L&apos;attention est la forme la plus rare et la plus pure de
                la générosité.”
              </p>
            </>
          ),
        },
        {
          title: "Des voix différentes, mais un même souffle :",
          content: (
            <>
              <p>
                <strong>
                  Celui de l&apos;humain, du vrai, du sensible et du courageux.
                </strong>
              </p>
              <br />
              <p>
                Des êtres qui osent dire, faire, créer, tomber, se relever,
                recommencer.
              </p>
              <br />
              <p>
                Bref, j’aime les gens vrais, un peu fêlés, souvent drôles — ceux
                qui transforment les chocs en éclats.” 🌙
              </p>
            </>
          ),
        },
      ]}
      cta={{ label: "Prendre contact", href: "/contact" }}
    />
  );
}
