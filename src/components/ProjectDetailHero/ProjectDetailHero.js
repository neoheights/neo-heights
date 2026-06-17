import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./ProjectDetailHero.module.scss";

export default function ProjectDetailHero({ project }) {
  return (
    <section className={styles.hero}>
      <Image
        src={project.heroImage}
        alt={project.title}
        fill
        className={styles.heroImage}
        style={{ objectPosition: project.heroObjectPosition || "center center" }}
        sizes="100vw"
        priority
      />
      <div className={styles.overlay} />
      <div className={styles.bar}>
        <div className={styles.titleBlock}>
          <h1 className={styles.title}>{project.title}</h1>
          <span className={styles.location}>{project.location}</span>
        </div>
        <Link href="/contact" className={styles.contactLink}>
          Contact Us <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
