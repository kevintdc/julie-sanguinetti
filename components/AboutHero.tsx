import styles from "./css/AboutHero.module.css";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/julie-portrait.jpeg" // remplace par ton image réelle
          alt="Portrait de Julie Sanguinetti"
          width={450}
          height={450}
          className={styles.profileImage}
        />
      </div>
      <h1 className={styles.title}>Julie Sanguinetti</h1>
    </section>
  );
}
