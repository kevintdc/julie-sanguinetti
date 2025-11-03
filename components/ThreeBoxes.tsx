import styles from "./css/ThreeBoxes.module.css";
import Image from "next/image";

export default function ThreeBoxes() {
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <Image src="/images/logo1.jpg" alt="Logo 1" width={50} height={50} />
        <p>Psychothérapie & Accompagnement personnel</p>
      </div>
      <div className={styles.box}>
        <Image src="/images/logo2.png" alt="Logo 2" width={50} height={50} />
        <p>Préparation mentale & Performance</p>
      </div>
      <div className={styles.box}>
        <Image src="/images/logo3.jpg" alt="Logo 3" width={50} height={50} />
        <p>Autres prestations personnalisées</p>
      </div>
    </section>
  );
}
