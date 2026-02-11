import styles from "./css/AboutTextSection.module.css";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function AboutTextSection() {
  return (
    <>
      <main className={styles.container}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mon terrain de jeu</h2>
          <p className={styles.paragraph}>
            Mon terrain de jeu : l’esprit, les émotions, et tout ce qui s’y
            emmêle. J’aime comprendre comment l’humain fonctionne, comment il
            bug, comment il redémarre. Et surtout, ce moment magique où{" "}
            <em>clic</em> — quelque chose change.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mon parcours</h2>
          <p className={styles.paragraph}>
            Avant d’écouter les humains, j’écoutais les animaux : j’exerçais la
            profession d’<strong>auxiliaire spécialisée vétérinaire</strong>{" "}
            pendant plusieurs années en clinique. C’est là que j’ai appris la
            patience ( pas tout à fait encore super acquis, mais j’y travaille
            !) , la lecture du non-verbal, l’écoute silencieuse, la résilience
            bien qu’elle m’est été imposée très jeune. Des années passionnantes,
            pleines de sens.
          </p>
          <p className={styles.paragraph}>
            Aujourd’hui, j’accompagne les humains avec les mêmes ingrédients :
            présence, écoute attentive, adaptation et empathie.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mes compétences & formations</h2>
          <p className={styles.paragraph}>
            Véritable curieuse de l’esprit et toujours en quête d’excellence, je
            continue de me former tant les perspectives sont infinies. Ma boite
            à outils ne cesse de s’enrichir bien que ma spécialité soit la
            maîtrise de la PNL :
          </p>
          <br />
          <ul className={styles.list}>
            <li>
              <strong>
                Maître‑Praticienne certifiée RNCP en Programmation Neuro
                Linguistique
              </strong>
              , formée par <strong>Michel Rolion</strong>, auteur, enseignant et
              formateur reconnu, passionné de langage et de l’humain. Sa
              pédagogie, exigeante et bienveillante, m’a appris à manier la
              précision de la PNL sans jamais perdre la profondeur du lien. Et
              formée également par <strong>Fabien Martinet</strong>, praticien
              en hypnose, formateur PNL & hypnose et formateur en entreprise
              pour une communication bienveillante. Véritable pédagogue du lien
              humain, il m’a appris à manier l’art du langage métaphorique, et à
              faire de la parole un espace de liberté entre rire et émotions.
            </li>
            <li>
              <strong>
                Formée à la psychopathologie clinique adulte & juvenile
              </strong>{" "}
              par <strong>Bruno Dal Palu.</strong> Psychologue,
              psychothérapeute, docteur en psychanalyse, conférencier, formateur
              et enseignant dans les universités d&apos;Avignon et
              Aix-Marseille. Il est le fondateur de l’éducation Bientraitante et{" "}
              <strong>l’EmètAnalyse</strong>, une approche thérapeutique
              intégrative qui vise à penser le symptôme non pas comme un ennemi
              absolu, mais comme une porte vers un réajustement (penser /
              panser).
            </li>
            <li>
              <strong>Formée à l’hypnose</strong>, que j’utilise quand les mots
              seuls n’ouvrent plus la porte aussi large que nécessaire et qu’ils
              ont besoin d’un coup de pouce de l’inconscient.
            </li>
            <li>
              Je participe également aux séances de <strong>supervision</strong>
              , à minima deux fois par mois avec deux spécialistes différents,
              pour garantir un regard extérieur, une éthique, la qualité et la
              justesse de mes accompagnements. Ceci ne s&apos;inscrit pas dans
              une démarche d&apos;apprentissage, mais dans un espace
              d&apos;échange entre professionnels. La supervision fait partie
              des <strong>pratiques essentielles</strong> de tout thérapeute
              engagé et responsable travaillant avec sens et sérieux.
            </li>
            <li>
              Je nourris ma pratique par une{" "}
              <strong>formation régulière</strong> : curieuse et jamais figée
              sur mes acquis, je cherche toujours à apprendre, évoluer et
              enrichir ma pratique.
            </li>
          </ul>
          <p className={styles.paragraph}>
            Et tant d’autres rencontres, enseignants et formateurs dont j’ai eu
            la chance d’apprendre, chacun apportant sa nuance, son regard, et un
            morceau de ce que je transmets aujourd’hui. Chacun à sa manière a
            affiné ma pratique, élargi ma vision et nourri mon engagement. Je
            suis également <strong>jury d’examen</strong> pour les auxiliaires
            spécialisées vétérinaires, je savoure chaque occasion de transmettre
            et de reconnaître l’engagement de celles et ceux qui prennent soin
            de nos compagnons à 4 pattes avec passion.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Et dans la vraie vie ?</h2>
          <p className={styles.paragraph}>
            Je suis aussi <strong>maman de deux petits bouts charmants</strong>,
            qui m’offrent chaque jour une master‑class gratuite de gestion
            mentale, de patience et d’amour inconditionnel (souvent dans cet
            ordre, parfois non).
          </p>
          <p className={styles.paragraph}>
            J’aime le <strong>travail bien fait</strong>, le{" "}
            <strong>chocolat</strong>, et les conversations qui partent dans
            tous les sens pour finir par faire sens.
          </p>
          <p className={styles.paragraph}>
            Je viens d’une famille à la frontière entre le chaos et la comédie —
            disons qu’on est plutôt version Shameless que téléfilm du dimanche.
            Alors oui, <strong>on ne devient pas thérapeute par hasard…</strong>{" "}
            Je n’aime pas{" "}
            <strong>
              l’injustice, les betteraves, la haine et la désinformation.
            </strong>{" "}
            Je ne suis pas fan non plus des périodes où il fait très, très froid
            et qu’il n’y a même pas de neige — parce que celle-là, je l’aime
            beaucoup… surtout si je peux glisser dessus.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Ce qui m&apos;anime</h2>
          <p className={styles.paragraph}>
            J’aime les <strong>déclics.</strong> Les vrais. Ceux où les yeux
            s’allument, où un sourire revient, où un{" "}
            <strong>poids tombe</strong>. J’aime quand une personne{" "}
            <strong>réalise qu’elle peut faire autrement</strong> — même un tout
            petit peu. J’aime voir les gens se <strong>dépasser</strong>,
            retrouver leur
            <strong> puissance</strong>, leur calme, leur humour. J’aime voir un
            parent retrouver le sourire, un enfant respirer en paix, un adulte
            sortir de sa zone de confort — ne serait-ce que d’un pas. J’aime
            voir un humain devenir finisher de ses propres batailles comme de sa
            propre course.
          </p>
          <p className={styles.paragraph}>
            Quand ça fait <em>clic</em>, je sais que je suis au{" "}
            <strong>bon endroit</strong>. Quand ça fait <em>claque</em>, je sais
            qu’on avance. Sportive dans l’âme, j’ai besoin que ça bouge.
            L’équitation, l’éthologie équine, les randonnées, la course à pied,
            la pole dance, les expériences, l’adrénaline… Véritable adepte des
            arts de la scène, des concerts, des oeuvres artistiques et des
            découvertes en tout genre qui nourrissent l’âme. Toutes ces
            expériences m’ont appris que le corps en sait souvent plus long que
            la tête. Alors dans mes accompagnements, on parle, oui — mais{" "}
            <strong>on respire, on ressent, on agit aussi.</strong>
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Mon approche</h2>
          <p className={styles.paragraph}>
            Je suis plutôt du genre <strong>franche avec douceur.</strong> Je
            dis les choses, parfois avec un brin d’humour, toujours avec{" "}
            <strong>respect.</strong> Je crois qu’on avance mieux quand on se
            sent écouté sans être ménagé.
          </p>
          <p className={styles.paragraph}>
            La psychothérapie pour <strong>réparer,</strong> la préparation
            mentale pour <strong>préparer.</strong> Le tout en cherchant à faire
            émerger ce qu’il y a déjà de vivant et de solide en vous.
          </p>
          <p className={styles.paragraph}>
            Dans mon accompagnement, j’adopte une approche intégrative,
            bienveillante et centrée sur la personne, où chaque séance est
            pensée pour accueillir la totalité de l’humain. Au coeur de mon
            travail : <strong>la rencontre, le lien et la confiance,</strong>{" "}
            ces ingrédients indispensables pour que les transformations puissent
            émerger. Et comme vous avez déjà pu l’expérimenter personnellement :
            c’est ce qui fait la différence.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>En résumé</h2>
          <p className={styles.paragraph}>
            Je ne promets pas des miracles, mais des mouvements. Je ne prétends
            pas savoir à votre place, mais j’adore chercher avec vous. Et si
            vous êtes prêt·e à vous poser les bonnes questions — les vraies,
            parfois un peu piquantes — alors on devrait bien s’entendre.
          </p>
          <p className={styles.paragraph}>
            Bienvenue dans{" "}
            <strong>
              l’authenticité, l’engagement, l’audace et la résilience.
            </strong>
          </p>

          <div className={styles.buttonWrapper}>
            {" "}
            <Link href="/contact" className={styles.button}>
              Me contacter{" "}
              <span className={styles.icon}>
                <FiArrowRight />
              </span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
