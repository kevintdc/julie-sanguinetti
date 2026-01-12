import Link from "next/link";
import Image from "next/image";
import styles from "./css/Card.module.css";
import { useRef, useState } from "react";

type CardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  overlayText: string;
  overlayText2: string;
  overlayText3: React.ReactNode;
  buttonText: string;
  href: string;
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
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [dragStartY, setDragStartY] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (dragStartY === null) return;
    const currentY = e.touches[0].clientY;
    const diff = dragStartY - currentY;
    if (diff > 50) {
      setIsOpen(true);
    }
  };

  const handleTouchEnd = () => {
    setDragStartY(null);
  };

  const handleClickOverlay = () => {
    setIsOpen(true);
  };

  return (
    <Link href={href} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </div>

        <div
          ref={overlayRef}
          className={`${styles.overlay} ${isOpen ? styles.open : ""}`}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onClick={handleClickOverlay}
        >
          <div className={styles.content}>
            <h3>{title}</h3>
            <p>{overlayText}</p>
            <p>{overlayText2}</p>
            <p>{overlayText3}</p>
            <button className={styles.button}>{buttonText}</button>
          </div>

          {!isOpen && (
            <div className={styles.pullIndicator}>
              <div className={styles.line}></div>
              <span>tirer / cliquer vers le haut</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
