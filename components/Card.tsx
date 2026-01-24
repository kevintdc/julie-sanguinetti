import Link from "next/link";
import Image from "next/image";
import styles from "./css/Card.module.css";
import { useRef, useState, useEffect } from "react";

type CardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  overlayText: string;
  overlayText2: string;
  overlayText3: React.ReactNode;
  buttonText: string;
  href: string;
  id: string; // id unique pour chaque carte
};

let currentFlippedId: string | null = null;

export default function Card({
  imageSrc,
  imageAlt,
  title,
  overlayText,
  overlayText2,
  overlayText3,
  buttonText,
  href,
  id,
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

  useEffect(() => {
    if (!isMobile || !cardRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (currentFlippedId !== id) {
            currentFlippedId = id;
            setFlipped(true);
          }
        } else {
          if (currentFlippedId === id) {
            setFlipped(false);
            currentFlippedId = null;
          }
        }
      },
      { threshold: 0.5 }
    );

    const element = cardRef.current; // 🔐 capture la valeur actuelle
    observer.observe(element);

    return () => {
      observer.unobserve(element); // utilise la même référence exacte
    };
  }, [id, isMobile]);

  // desktop click toggle
  const handleClick = () => {
    if (!isMobile) {
      setFlipped((prev) => !prev);
    }
  };

  return (
    <div
      ref={cardRef}
      className={`${styles.cardContainer} ${flipped ? styles.flipped : ""}`}
      onClick={handleClick}
    >
      <div className={styles.card}>
        {/* face avant */}
        <div className={styles.front}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </div>

        {/* face arrière */}
        <div className={styles.back}>
          <h3>{title}</h3>
          <p>{overlayText}</p>
          <p>{overlayText2}</p>
          <div>{overlayText3}</div>
          <Link href={href} className={styles.button}>
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}
