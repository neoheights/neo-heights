import Image from "next/image";
import styles from "./ProjectScopeGallery.module.scss";

export default function ProjectScopeGallery({ project }) {
  if (!project.scopeOfWork?.length && !project.gallery?.length) return null;

  const mid = Math.ceil(project.scopeOfWork.length / 2);
  const leftCol = project.scopeOfWork.slice(0, mid);
  const rightCol = project.scopeOfWork.slice(mid);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {project.scopeOfWork?.length > 0 && (
          <div className={styles.scopeBlock}>
            <h2 className={styles.heading}>Scope of Work</h2>
            <div className={styles.scopeColumns}>
              <ul className={styles.scopeList}>
                {leftCol.map((item) => (
                  <li key={item} className={styles.scopeItem}>
                    <span className={styles.bullet} />
                    {item}
                  </li>
                ))}
              </ul>
              <ul className={styles.scopeList}>
                {rightCol.map((item) => (
                  <li key={item} className={styles.scopeItem}>
                    <span className={styles.bullet} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {project.gallery?.length > 0 && (
          <div className={styles.galleryGrid}>
            {project.gallery.map((img, i) => (
              <div key={i} className={styles.galleryItem}>
                <Image
                  src={img}
                  alt={`${project.title} — photo ${i + 1}`}
                  fill
                  className={styles.galleryImage}
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
