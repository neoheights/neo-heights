import Image from "next/image";
import styles from "./ProjectDetailHero.module.scss";

export default function ProjectDetailHero({ project }) {
  return (
    <section className={styles.hero}>
      <Image
        src={project.heroImage}
        alt={project.title}
        fill
        className={styles.heroImage}
        sizes="100vw"
        priority
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.titleBlock}>
          <h1 className={styles.title}>{project.title}</h1>
          <span className={styles.location}>{project.location}</span>
        </div>
        {project.galleryLabel && (
          <span className={styles.galleryLabel}>{project.galleryLabel}</span>
        )}
      </div>
    </section>
  );
}
