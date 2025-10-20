import styles from "./css/ThreeBoxes.module.css";
import Image from "next/image";

export default function ThreeBoxes() {
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <Image src="/logo1.svg" alt="Logo 1" width={50} height={50} />
        <p>Texte associé au premier élément</p>
      </div>
      <div className={styles.box}>
        <Image src="/logo2.svg" alt="Logo 2" width={50} height={50} />
        <p>Texte associé au second élément</p>
      </div>
      <div className={styles.box}>
        <Image src="/logo3.svg" alt="Logo 3" width={50} height={50} />
        <p>Texte associé au troisième élément</p>
      </div>
    </section>
  );
}
