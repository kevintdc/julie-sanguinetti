import Link from "next/link";
import Image from "next/image";
import styles from "./css/Card.module.css";

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
        <div className={styles.overlay}>
          <div className={styles.content}>
            <h3>{title}</h3>
            <p>{overlayText}</p>
            <p>{overlayText2}</p>
            <p>{overlayText3}</p>
            <button className={styles.button}>{buttonText}</button>
          </div>
        </div>
      </div>
    </Link>
  );
}
