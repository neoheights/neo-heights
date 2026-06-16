import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./SustainabilityHero.module.scss";
import heroImg from "@/assets/images/services/land/tata-rwh.jpg";

const SustainabilityHero = () => {
  return (
    <section className={styles.hero}>
      <Image
        src={heroImg}
        alt="Sustainable infrastructure by Neo Heights"
        fill
        className={styles.heroImage}
        sizes="100vw"
        priority
      />
      <div className={styles.overlay} />

      <div className={`container ${styles.container}`}>
        <h1 className={styles.title}>
          Building sustainably for a <br /> better tomorrow.
        </h1>
        <p className={styles.description}>
          Globally, developers are focusing on high-performance buildings
          that lower environmental impact and improve efficiency.
        </p>
        <Link href="/contact" className={styles.ctaButton}>
          Start a Project <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
};

export default SustainabilityHero;
