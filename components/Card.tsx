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
  id,
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

  useEffect(() => {
    if (!isMobile || !cardRef.current) return;

    const node = cardRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFlipped(true);
        } else {
          setFlipped(false);
        }
      },
      { threshold: 0.95 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [id, isMobile]);

  const handleClick = () => {
    if (!isMobile) setFlipped((prev) => !prev);
  };

  return (
    <div
      ref={cardRef}
      className={`${styles.cardContainer} ${flipped ? styles.flipped : ""}`}
      onClick={handleClick}
    >
      <div className={styles.card}>
        <div className={styles.front}>
          <Image src={imageSrc} alt={imageAlt} fill className={styles.image} />
        </div>
        <div className={styles.back}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.duration}>{overlayText}</p>
          <p className={styles.price}>{overlayText2}</p>
          <div className={styles.scrollableText}>{overlayText3}</div>
          <Link href={href} className={styles.button}>
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
}
