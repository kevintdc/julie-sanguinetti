import React, { useEffect, useId, useRef, useState } from "react";
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
  heroCollapsible?: boolean;
  defaultOpen?: boolean;
  heroAlign?: "left" | "right";
};

export default function PrestationPage({
  title,
  description,
  heroText,
  heroImage,
  sections,
  cta,
  heroCollapsible = false,
  defaultOpen = false,
  heroAlign = "left",
}: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const uid = useId();
  const panelId = `prestation-sections-${uid}`;
  const btnId = `prestation-hero-${uid}`;

  // clic en dehors => ferme (seulement si heroCollapsible activé)
  useEffect(() => {
    if (!heroCollapsible) return;

    const handler = (e: PointerEvent) => {
      const el = wrapRef.current;
      if (!el) return;
      if (!el.contains(e.target as Node)) setOpen(false);
    };

    document.addEventListener("pointerdown", handler);
    return () => document.removeEventListener("pointerdown", handler);
  }, [heroCollapsible]);

  const sectionsMarkup = (
    <>
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
        ),
      )}
    </>
  );

  const heroClassName = `
  ${styles.hero}
  ${heroAlign === "right" ? styles.heroReverse : ""}
  ${heroCollapsible ? styles.heroCompact : ""}
`;

  return (
    <>
      <CustomHead title={title} description={description} />

      <div ref={wrapRef}>
        {/* HERO */}
        {heroCollapsible ? (
          <button
            id={btnId}
            type="button"
            className={`${heroClassName} ${styles.heroClickable}`}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
          >
            <div className={styles.heroContent}>
              <h1>{title}</h1>
              <p>{heroText}</p>

              <div className={styles.heroHint}>
                <span>
                  {open ? "Cliquer pour réduire" : "Cliquer pour dérouler"}
                </span>
                <span
                  className={`${styles.heroChevron} ${
                    open ? styles.heroChevronOpen : ""
                  }`}
                  aria-hidden="true"
                >
                  ▾
                </span>
              </div>
            </div>

            {/* ✅ Même emplacement qu’avant, mais caché quand fermé + animation douce */}
            <div
              className={`${styles.heroImage} ${styles.heroImageAnimated} ${
                open ? styles.heroImageShown : styles.heroImageHidden
              }`}
              aria-hidden={!open}
            >
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                width={800}
                height={450}
                layout="responsive"
                priority
              />
            </div>
          </button>
        ) : (
          <section className={heroClassName}>
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
                priority
              />
            </div>
          </section>
        )}

        {/* SECTIONS (déroulées) */}
        {heroCollapsible ? (
          <div
            id={panelId}
            role="region"
            aria-labelledby={btnId}
            className={`${styles.sectionsPanel} ${
              open ? styles.sectionsOpen : ""
            }`}
          >
            <div className={styles.sectionsInner}>
              {/* ✅ Bouton visible UNIQUEMENT quand ouvert (tu peux déplacer ce bloc où tu veux) */}
              {cta && open && (
                <div className={styles.openCtaRow}>
                  <Link href={cta.href} className={styles.ctaButton}>
                    {cta.label}
                  </Link>
                </div>
              )}
              {sectionsMarkup}
            </div>
          </div>
        ) : (
          <>{sectionsMarkup}</>
        )}
      </div>
    </>
  );
}
