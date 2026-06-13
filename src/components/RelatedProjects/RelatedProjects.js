import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./RelatedProjects.module.scss";
import { projects } from "@/data/projects";

export default function RelatedProjects({ currentSlug }) {
  const related = projects.filter((p) => p.slug !== currentSlug);

  if (related.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Related Projects</h2>
        <Link href="/projects" className={styles.viewMore}>
          View More <ArrowRight size={15} />
        </Link>
      </div>

      <div className={styles.strip}>
        {related.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className={styles.card}
          >
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className={styles.cardImage}
              sizes="360px"
            />
            <div className={styles.overlay} />
            <div className={styles.cardFooter}>
              <span className={styles.cardTitle}>{project.title}</span>
              <span className={styles.cardLocation}>{project.location}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
