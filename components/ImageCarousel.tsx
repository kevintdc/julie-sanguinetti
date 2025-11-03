import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./css/ImageCarousel.module.css";

const images = [
  { src: "/images/carousel1.png", alt: "Image 1" },
  { src: "/images/psychotherapie-hero.jpg", alt: "Image 2" },
  { src: "/images/services-hero.jpg", alt: "Image 3" },
  { src: "/images/julie-portrait.jpeg", alt: "Image 4" },
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => setCurrent(index);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const next = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <div className={styles.carousel}>
      {images.map((img, index) => (
        <div
          key={img.src}
          className={`${styles.slide} ${
            index === current ? styles.active : ""
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      ))}

      <button
        className={`${styles.arrow} ${styles.left}`}
        onClick={prev}
        aria-label="Précédent"
      >
        ‹
      </button>
      <button
        className={`${styles.arrow} ${styles.right}`}
        onClick={next}
        aria-label="Suivant"
      >
        ›
      </button>

      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === current ? styles.activeDot : ""
            }`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
