import Link from "next/link";
import Image from "next/image";
import styles from "./css/Card.module.css";
import { useState, useEffect } from "react";

type CardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  overlayText: string;
  overlayText2: string;
  overlayText3: React.ReactNode;
  buttonText: string;
  href: string;
  id: string;
};

export default function Card({
  imageSrc,
  imageAlt,
  title,
  overlayText,
  overlayText2,
  overlayText3,
  buttonText,
  href,
}: CardProps) {
  const [flipped, setFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const media = window.matchMedia("(max-width: 768px)");
      const update = () => setIsMobile(media.matches);

      update();
      media.addEventListener("change", update);
      return () => media.removeEventListener("change", update);
    }
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    if (isMobile) {
      setFlipped((prev) => !prev);
    }
  };

  const closeCard = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    setFlipped(false);
  };

  return (
    <div
      className={`${styles.cardContainer} ${flipped ? styles.flipped : ""} ${
        isMobile ? styles.mobileCard : ""
      } ${mounted ? styles.ready : ""}`}
      onClick={handleClick}
    >
      <div className={styles.card}>
        <div className={styles.front}>
          <Image src={imageSrc} alt={imageAlt} fill className={styles.image} />

          {isMobile && !flipped && (
            <div className={styles.touchIndicator}>Découvrir</div>
          )}
        </div>

        <div className={styles.back}>
          <div className={styles.backImageWrap}>
            <Image src={imageSrc} alt="" fill className={styles.backImage} />
          </div>

          <div className={styles.backContent}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.duration}>{overlayText}</p>
            <p className={styles.price}>{overlayText2}</p>

            <div className={styles.scrollableText}>{overlayText3}</div>

            <Link
              href={href}
              className={styles.button}
              onClick={(e) => e.stopPropagation()}
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
