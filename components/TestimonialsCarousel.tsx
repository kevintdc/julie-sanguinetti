"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./css/TestimonialsCarousel.module.css";

type Testimonial = {
  name: string;
  rating: number;
  text: string;
};

type Props = {
  testimonials: Testimonial[];
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= rating ? styles.starFilled : styles.star}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function TestimonialsCarousel({ testimonials }: Props) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const visible = 3;

  const next = useCallback(() => {
    setIndex((prev) =>
      prev + visible >= testimonials.length ? 0 : prev + visible,
    );
  }, [testimonials.length, visible]);

  const prev = () => {
    setIndex((prev) =>
      prev - visible < 0 ? testimonials.length - visible : prev - visible,
    );
  };

  // autoplay
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      next();
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [next]);

  const visibleTestimonials = testimonials.slice(index, index + visible);

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={() =>
        intervalRef.current && clearInterval(intervalRef.current)
      }
      onMouseLeave={() =>
        (intervalRef.current = setInterval(() => next(), 5000))
      }
    >
      <button className={styles.arrow} onClick={prev}>
        ‹
      </button>

      <div className={styles.carousel}>
        {visibleTestimonials.map((t, i) => (
          <div key={i} className={styles.card}>
            <p className={styles.name}>{t.name}</p>
            <Stars rating={t.rating} />

            <p className={styles.text}>“{t.text}”</p>
          </div>
        ))}
      </div>

      <button className={styles.arrow} onClick={next}>
        ›
      </button>
    </div>
  );
}
