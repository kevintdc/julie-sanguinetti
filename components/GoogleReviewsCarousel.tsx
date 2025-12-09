"use client";

import { useEffect, useState } from "react";
import styles from "./css/GoogleReviewsCarousel.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

type Review = {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
};

export default function GoogleReviewsCarousel({
  placeId,
}: {
  placeId: string;
}) {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(`/api/google-reviews?placeId=${placeId}`);
        const data = await res.json();

        if (data.reviews) {
          setReviews((prevReviews) => {
            const newReviews = data.reviews.filter(
              (newReview: Review) =>
                !prevReviews.some(
                  (r) =>
                    r.author_name === newReview.author_name &&
                    r.text === newReview.text
                )
            );
            return [...prevReviews, ...newReviews];
          });
        }
      } catch (err) {
        console.error("Erreur lors de la récupération des avis Google :", err);
      }
    };

    fetchReviews();
    const interval = setInterval(fetchReviews, 5 * 60 * 1000); // toutes les 5 minutes

    return () => clearInterval(interval);
  }, [placeId]);

  if (!reviews.length) return <p>Chargement des avis...</p>;

  return (
    <div className={styles.carouselWrapper}>
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 8000 }}
        loop={true}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((r, i) => (
          <SwiperSlide key={i}>
            <div className={`${styles.reviewCard} ${styles[`delay-${i % 5}`]}`}>
              <div className={styles.header}>
                {r.profile_photo_url && (
                  <Image
                    src={r.profile_photo_url}
                    alt={r.author_name}
                    width={48}
                    height={48}
                    className={styles.avatar}
                  />
                )}
                <div>
                  <strong>{r.author_name}</strong>
                  <div>{"★".repeat(r.rating)}</div>
                </div>
              </div>
              <p className={styles.text}>“{r.text}”</p>
              <small className={styles.date}>
                {r.relative_time_description}
              </small>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
