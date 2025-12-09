import styles from "../styles/Prestation.module.css";
import CustomHead from "./CustomHead";
import Link from "next/link";
import Image from "next/image";

type Section = {
  title: string;
  content: string | React.ReactNode;
  image?: {
    src: string;
    alt: string;
  };
};

type Props = {
  title: string;
  description: string;
  heroText: string;
  heroImage: {
    src: string;
    alt: string;
  };
  sections: Section[];
  cta?: {
    label: string;
    href: string;
  };
};

export default function PrestationPage({
  title,
  description,
  heroText,
  heroImage,
  sections,
  cta,
}: Props) {
  return (
    <>
      <CustomHead title={title} description={description} />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>{title}</h1>
          <p>{heroText}</p>
        </div>
        <div className={styles.heroImage}>
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            width={800}
            height={450}
            layout="responsive"
          />
        </div>
      </section>

      {sections.map((section, index) =>
        section.image ? (
          <section key={index} className={styles.sectionAlt}>
            <div className={styles.imageSide}>
              <Image
                src={section.image.src}
                alt={section.image.alt}
                width={600}
                height={400}
                layout="responsive"
              />
            </div>
            <div className={styles.textSide}>
              <h2>{section.title}</h2>
              {typeof section.content === "string" ? (
                <p>{section.content}</p>
              ) : (
                section.content
              )}

              {cta && index === 0 && (
                <Link href={cta.href} className={styles.ctaButton}>
                  {cta.label}
                </Link>
              )}
            </div>
          </section>
        ) : (
          <section key={index} className={styles.section}>
            <h2>{section.title}</h2>
            {typeof section.content === "string" ? (
              <p>{section.content}</p>
            ) : (
              section.content
            )}
          </section>
        )
      )}
    </>
  );
}
