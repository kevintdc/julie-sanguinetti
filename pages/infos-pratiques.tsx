import Link from "next/link";
import PrestationPage from "../components/PrestationPage";

export default function Services() {
  return (
    <PrestationPage
      title="Infos pratiques"
      description="Services complémentaires avec Julie Sanguinetti — interventions ponctuelles, accompagnements spécifiques et collaborations."
      heroText=""
      heroImage={{
        src: "/images/infopratique.jpg",
        alt: "Services complémentaires",
      }}
      sections={[
        {
          title: "Pour me trouver",
          content: (
            <>
              <p>
                Les séances se déroulent dans mon cabinet, un lieu pensé pour
                que l’on s’y sente bien, en confiance, sans chichi.
                <strong>Adresse :</strong> 4, route de Ginestas, 11 120
                MIREPEISSET Facile d’accès, avec stationnement à proximité{" "}
                <em>
                  (accès PMR, toilettes, café si vous êtes sympa, parking à
                  proximité)
                </em>
              </p>

              <br />
              <p>
                Pour celles et ceux qui préfèrent choisir leur environnement,
                comme chez vous par exemple (ou qui vivent plus loin), les
                séances peuvent aussi se faire <strong>en visio</strong>, dans
                les mêmes conditions de qualité et de confidentialité. (Si si je
                vous assure, c’est bien vous avec moi et pas vous avec votre
                ordi !)
              </p>
            </>
          ),
        },
        {
          title: "Horaires",
          content: (
            <>
              <p>
                Je vous reçois sur rendez-vous uniquement, du lundi au vendredi
                de 9H à 17H. <br />
                Si vous avez besoin d’horaires spécifiques, nous pouvons en
                discuter.
              </p>
              <br />
              <p>
                ➡ Prise de rendez-vous par téléphone, mail ou via le{" "}
                <Link href="/contact">
                  <u>formulaire de contact.</u>
                </Link>
              </p>
              <br />
              <p>
                Le cabinet ne dispose pas de salle d’attente. Je vous remercie
                donc d’arriver à l’heure prévue, sans avance ou au maximum 5
                minutes avant l’heure du rendez-vous afin de préserver la
                confidentialité et le calme de chaque séance.
              </p>
            </>
          ),
        },
        {
          title: "Tarifs et règlements",
          content:
            "Les tarifs sont consultables dans les prestations définies et sont non assujettis à la TVA, (TVA non applicable de l’art. 293B du CGI). Le règlement se fait sur place à la fin de chaque prestation en espèces ou par virement). Il n’y a pas de distributeur automatique dans le village, vous en trouverez cependant facilement à Ginestas, Argeliers, Saint Marcel d’Aude et autres villages aux alentours. Les séances ne sont pas prises en charge par la Sécurité sociale, mais certaines mutuelles remboursent une partie du montant. N’hésitez pas à vous renseigner auprès de la votre.",
        },
        {
          title: "Confidentialité et cadre",
          content: (
            <>
              <p>
                Tout ce qui se dit au cabinet <strong>reste au cabinet</strong>.
                Si toutefois pour des raisons éthiques, une tierce personne
                devrait être informée de certains points, nous en discuterons
                ensemble. Le cadre est bienveillant, sans jugement, et
                totalement confidentiel. Mon rôle : vous aider à mettre de la
                clarté, du mouvement et du sens dans ce que vous vivez.
              </p>
              <br />
              <p>
                <strong>Attention :</strong> mes accompagnements sont des
                pratiques complémentaires à d’autres, et se différencie très
                largement du domaine de la médecine. Ma pratique ne se substitue
                pas à l’avis et la consultation de professionnels de la santé et
                n’est pas de nature à guérir des maladies. Aucun diagnostic ne
                sera établi, et le cas échéant, une réorientation vers un
                professionnel spécialisé et accrédité vous sera proposé. Si un
                traitement est déjà en place, il est impératif de poursuivre
                attentivement sa continuité, de continuer votre parcours de soin
                et les rendez vous avec les autres professionnels.
              </p>
            </>
          ),
        },
        {
          title: "Annulation / report",
          content:
            "La vie est parfois pleine d’imprévus — je le sais bien. Il est simplement demandé de prévenir au moins 24h à l’avance pour toute annulation ou report de séance, afin que ce créneau puisse être proposé à quelqu’un d’autre. Tout comme vous j’ai aussi j’ai une vie personnelle, et cela m’aiderait aussi a prendre des créneaux perso. Passé ce délais, la consultation sera due à hauteur de 50% du prix annoncé.",
        },
        {
          title: "Et sinon ?",
          content:
            "Ici, pas de baguette magique (malheureusement ), mais un espace où vous pouvez vous poser, vous comprendre, performer, et repartir un peu plus léger·ère, plus clair·e, plus fort·e. C’est déjà beaucoup.",
        },
      ]}
      cta={{ label: "Prendre contact", href: "/contact" }}
    />
  );
}
