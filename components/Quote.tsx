import styles from "./css/Quote.module.css";

type QuoteProps = {
  children: React.ReactNode;
};

export default function Quote({ children }: QuoteProps) {
  return (
    <blockquote className={styles.quote}>
      <p>{children}</p>
    </blockquote>
  );
}
