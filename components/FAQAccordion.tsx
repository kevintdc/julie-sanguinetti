import { useState } from "react";
import styles from "./css/FAQAccordion.module.css";

type QA = {
  emoji: string;
  question: string;
  answer: string | React.ReactNode;
};

const data: QA[] = [
  {
    emoji: "🧭",
    question: "Comment se déroule la première séance ?",
    answer: (
      <>
        <p>La première séance, c’est avant tout une rencontre.</p>
        <p>
          On échange sur ce qui vous amène, vos attentes, vos besoins, et je
          vous explique comment je travaille.
        </p>
        <p>
          C’est aussi le moment pour voir si le courant passe — parce que la
          qualité du lien, c’est le cœur du travail.
        </p>
      </>
    ),
  },
  {
    emoji: "🧠",
    question:
      "Je ne sais pas trop si j’ai besoin d’une psychothérapie ou d’une préparation mentale… comment savoir ?",
    answer: (
      <>
        <p>
          Pas de panique, c’est souvent flou au début et ces deux axes sont même
          souvent très complémentaires alors on en parle ensemble, simplement.
        </p>
        <p>La psychothérapie répare. La préparation mentale prépare.</p>
        <p>
          Si vous venez avec une difficulté émotionnelle, relationnelle ou
          personnelle, on s’oriente plutôt vers la psychothérapie.
        </p>
        <p>
          Si vous voulez investir sur vous, travailler votre focus, votre
          confiance, votre gestion du stress ou votre performance (dans le
          sport, les études ou la vie pro), on bascule vers la préparation
          mentale.
        </p>
        <p>
          Et parfois, c’est un peu des deux — l’important, c’est ce qui vous
          aide à avancer, et on parle ensemble.
        </p>
      </>
    ),
  },
  {
    emoji: "💬",
    question: "Combien de séances faut‑il ?",
    answer: (
      <>
        <p>Autant que nécessaire… et le moins possible.</p>
        <p>Chaque personne avance à son rythme.</p>
        <p>
          Certains trouvent des clés en quelques séances, d’autres ont besoin
          d’un accompagnement plus long suivant le nombre de cailloux sur le
          chemin qu’il faudra remettre à leur place.
        </p>
        <p>On fait le point régulièrement, ensemble.</p>
      </>
    ),
  },
  {
    emoji: "⏳",
    question: "Combien de temps dure une séance ?",
    answer: (
      <>
        <p>En général, une séance dure environ une heure.</p>
        <p>
          Parfois un peu plus quand le mental s’emballe ou qu’un sujet mérite de
          s’ouvrir tranquillement.
        </p>
        <p>
          On prend le temps qu’il faut — sans chronomètre, mais avec respect de
          votre espace et de la personne suivante.
        </p>
      </>
    ),
  },
  {
    emoji: "💶",
    question: "Est‑ce que les séances sont remboursées ?",
    answer: (
      <>
        <p>Pas par la Sécurité sociale, malheureusement.</p>
        <p>
          Mais de plus en plus de mutuelles proposent un remboursement partiel
          des séances, à voir en fonction des modalités, une facture vous sera
          délivrée si besoin.
        </p>
      </>
    ),
  },
  {
    emoji: "💻",
    question: "Les séances en visio, ça marche vraiment ?",
    answer: (
      <>
        <p>Oui ! Et souvent même très bien.</p>
        <p>
          La visio permet de rester dans votre cocon, d’éviter les trajets, tout
          en gardant la même qualité d’écoute et de lien. Peu importe où vous
          vous trouvez sur le globe, nous sommes ensemble. Le mental s’adapte
          très vite à ce cadre-là (et vous aussi).
        </p>
      </>
    ),
  },
  // … continuez avec les autres questions de la liste
  {
    emoji: "🧩",
    question: "Quelles sont mes approches ?",
    answer: (
      <>
        <p>
          Principalement la PNL (Programmation Neuro-Linguistique), l’hypnose,
          les outils de préparation mentale et la clinique.
        </p>
        <p>
          Mais aussi ce que j’appelle le bon sens émotionnel, celui qui écoute,
          observe, et relie. L’objectif : que vous repartiez avec des pistes
          pleines de sens pour la suite de votre parcours.
        </p>
      </>
    ),
  },
  {
    emoji: "🤔",
    question: "Et si je ne sais pas par où commencer ?",
    answer: (
      <>
        <p>
          C’est parfait. Commencez par venir sans savoir, c’est déjà un pas.
        </p>
        <p>
          Vous n’avez pas besoin d’avoir “préparé” votre séance. Vous venez
          comme vous êtes, avec vos doutes, vos émotions, votre envie de
          comprendre, de performer, d’optimiser ou juste votre besoin de
          souffler. C’est moi qui vous aide à mettre de l’ordre dans tout ça. On
          clarifie ensemble ce que vous traversez, ce que vous ressentez et ce
          que vous souhaitez voir évoluer.
        </p>
      </>
    ),
  },
  {
    emoji: "🏥",
    question:
      "Et si j’ai besoin d’un suivi plus spécifique (psychiatre, médecin, etc.) ?",
    answer: (
      <>
        <p>
          Si une autre forme d’accompagnement semble nécessaire, je vous en
          parle en toute transparence et vous oriente vers les bons
          professionnels. La priorité, c’est que vous soyez bien accompagné·e,
          au bon endroit, au bon moment.
        </p>
      </>
    ),
  },
  {
    emoji: "😬",
    question: "Je ne suis pas à l’aise avec l’idée de “me confier”…",
    answer: (
      <>
        <p>J’entends, et c’est complètement normal.</p>
        <p>
          Vous choisissez ce que vous souhaitez partager. Le rythme, le contenu,
          la profondeur… tout se fait selon votre sécurité intérieure. La
          libération de la parole, c’est le début. Croyez-moi sur parole ou
          expérimentez le vous même : Son impact sur le bien être et la
          résolution des problèmes n’est plus à prouver.
        </p>
      </>
    ),
  },
  {
    emoji: "💪",
    question: "Les séances en visio, ça marche vraiment ?",
    answer: (
      <>
        <p>
          Pas du tout. C’est pour toute personne qui veut se dépasser,
          performer, s’améliorer : étudiants, dirigeants, artistes, etc.
        </p>
        <p>
          Le mental, c’est un muscle — il s’entraîne, s’assouplit, se renforce.
          Et parfois, il apprend surtout à se détendre. C’est l’art de se
          conditionner le mieux possible pour un évènement précis. (Défis
          sportif, examens, prise de parole en public, permis de conduire, Repas
          relou avec belle maman, ça marche aussi !)
        </p>
      </>
    ),
  },
  {
    emoji: "🚀",
    question: "Est-ce que je donne des “exercices” entre les séances ?",
    answer: (
      <>
        <p>Parfois oui, parfois non.</p>
        <p>
          Tout dépend de vous, de votre rythme et de ce qu’on travaille. Parfois
          ce sera une réflexion, une observation, une action concrète… Jamais
          une contrainte, toujours une invitation.
        </p>
      </>
    ),
  },
  {
    emoji: "❤️",
    question: "Et si ça ne “marche pas” ?",
    answer: (
      <>
        <p>Alors on en parle.</p>
        <p>
          Parce que c’est aussi ça, le travail thérapeutique : comprendre ce qui
          bloque, ajuster, changer d’angle. Et si un jour vous sentez que vous
          voulez arrêter, c’est possible aussi. L’important, c’est que ça ait du
          sens pour vous.
        </p>
      </>
    ),
  },
  {
    emoji: "♿",
    question: "Le cabinet est-il accessible aux personnes à mobilité réduite ?",
    answer: (
      <>
        <p>Oui, tout à fait.</p>
        <p>
          Le cabinet répond aux normes ERP et est entièrement accessible PMR.
        </p>
      </>
    ),
  },
  {
    emoji: "🏠",
    question: "Qu’y a t il dans ce cabinet ? ",
    answer: (
      <>
        <p>
          Un espace simple et chaleureux, pensé pour se poser. Deux fauteuils,
          de la lumière naturelle, quelques livres, des plantes ( quand j’arrive
          à les garder en vie ) et un cadre calme pour parler librement.
        </p>
      </>
    ),
  },
  {
    emoji: "🕰️",
    question: "Y a-t-il une salle d’attente ?",
    answer: (
      <>
        <p>Non, le cabinet ne dispose pas de salle d’attente.</p>
        <p>
          Je vous remercie donc d’arriver au maximum 5 minutes avant l’heure du
          rendez-vous, afin de préserver la confidentialité et le calme de
          chaque séance.
        </p>
      </>
    ),
  },
  {
    emoji: "👥",
    question: "Puis-je venir accompagné·e ?",
    answer: (
      <>
        <p>
          Les séances se déroulent en individuel, sauf cas particuliers
          (parent/enfant, couple, binôme sportif, etc.).
        </p>
        <p>
          Il n’est pas possible d’être accompagné en consultation, mais les
          séances à plusieurs sont tout à fait possibles sur demande.
        </p>
      </>
    ),
  },
  {
    emoji: "💬",
    question: "Puis-je offrir une séance à quelqu’un ?",
    answer: (
      <>
        <p>Oui, c’est possible sous forme de bon cadeau.</p>
        <p>
          Le mieux est d’en discuter ensemble pour que la démarche reste adaptée
          à la personne concernée.
        </p>
      </>
    ),
  },
  {
    emoji: "🕯️",
    question: "Travaillez-vous avec les enfants ou les adolescents ?",
    answer: (
      <>
        <p>
          Là encore, tout dépend de la problématique et de la demande, on en
          parle ensemble.
        </p>
        <p>
          Oui, j’accompagne les adolescents à partir de 11 ans toujours dans un
          cadre bienveillant et adapté à leur âge. Pour les enfants, je réfère à
          un spécialiste de l’enfance, néanmoins, il est toujours bon de
          vérifier le système familial et donc parfois, c’est finalement
          l’adulte qui reste. L’implication des parents se fait selon les
          besoins.
        </p>
      </>
    ),
  },
  {
    emoji: "⚖️",
    question:
      "Quelle est la différence entre votre approche et une psychothérapie “classique” ?",
    answer: (
      <>
        <p>
          Ma pratique mêle plusieurs approches dans une démarche intégrative et
          dynamique.
        </p>
        <p>
          On travaille à la fois sur le “pourquoi” et surtout le “comment”, avec
          une attention particulière portée au corps, aux émotions et au mental.
          C’est un accompagnement vivant, concret et sur mesure.
        </p>
      </>
    ),
  },
  {
    emoji: "📆",
    question: "Comment prendre rendez-vous ?",
    answer: (
      <>
        <p>Les rendez-vous se prennent par téléphone ou mail.</p>
        <p>
          Je vous réponds dès que possible pour fixer un créneau selon nos
          disponibilités respectives.
        </p>
      </>
    ),
  },
];

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.accordion}>
      {data.map((item, index) => (
        <div key={index} className={styles.item}>
          <button
            className={styles.question}
            onClick={() => toggle(index)}
            aria-expanded={activeIndex === index}
          >
            <span className={styles.emoji}>{item.emoji}</span>
            <span className={styles.text}>{item.question}</span>
            <span
              className={`${styles.icon} ${
                activeIndex === index ? styles.open : ""
              }`}
            >
              ▼
            </span>
          </button>
          <div
            className={`${styles.answerWrapper} ${
              activeIndex === index ? styles.openWrapper : ""
            }`}
          >
            <div className={styles.answer}>{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
