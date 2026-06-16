import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./RelatedProjects.module.scss";
import { projects } from "@/data/projects";

export default function RelatedProjects({
  currentSlug,
  projectSlugs,
  imageOverrides,
}) {
  const current = projects.find((p) => p.slug === currentSlug);

  let related;
  if (projectSlugs?.length) {
    related = projectSlugs
      .map((slug) => projects.find((p) => p.slug === slug))
      .filter(Boolean)
      .map((p) => ({
        slug: p.slug,
        title: p.title,
        location: p.location,
        image: imageOverrides?.[p.slug] ?? p.heroImage,
      }));
  } else if (current?.relatedProjects?.length) {
    related = current.relatedProjects;
  } else {
    related = projects
      .filter((p) => p.slug !== currentSlug)
      .map((p) => ({
        slug: p.slug,
        title: p.title,
        location: p.location,
        image: p.heroImage,
      }));
  }

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
        {related.map((project, index) => {
          const cardContent = (
            <>
              <Image
                src={project.image}
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
            </>
          );

          if (project.slug) {
            return (
              <Link
                key={`${project.slug}-${index}`}
                href={`/projects/${project.slug}`}
                className={styles.card}
              >
                {cardContent}
              </Link>
            );
          }

          return (
            <div key={`${project.title}-${index}`} className={styles.card}>
              {cardContent}
            </div>
          );
        })}
      </div>
    </section>
  );
}
