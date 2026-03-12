import styles from "./css/TestimonialsList.module.css";

type Testimonial = {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  date?: string;
};

type Props = {
  testimonials: Testimonial[];
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className={styles.stars} aria-label={`Note : ${rating} sur 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`${styles.star} ${star <= rating ? styles.filled : styles.empty}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function TestimonialsList({ testimonials }: Props) {
  return (
    <div className={styles.list}>
      {testimonials.map((testimonial, index) => (
        <article key={index} className={styles.card}>
          <div className={styles.header}>
            <div>
              <h3 className={styles.name}>{testimonial.name}</h3>
              {testimonial.date && (
                <p className={styles.date}>{testimonial.date}</p>
              )}
            </div>

            <Stars rating={testimonial.rating} />
          </div>

          <p className={styles.text}>“{testimonial.text}”</p>
        </article>
      ))}
    </div>
  );
}
