import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectDetailInfo.module.scss";

export default function ProjectDetailInfo({ project }) {
  return (
    <section className={styles.infoSection}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/" className={styles.breadcrumbLink}>Home</Link>
        <span className={styles.breadcrumbSep} />
        <Link href="/projects" className={styles.breadcrumbLink}>Projects</Link>
        <span className={styles.breadcrumbSep} />
        <span className={styles.breadcrumbCurrent}>{project.title}</span>
      </nav>

      <div className={styles.container}>
        <div className={styles.rows}>
          {/* Client — 3-column: label | name | logo */}
          <div className={styles.rowClient}>
            <span className={styles.rowLabel}>Client</span>
            <div className={styles.rowBody}>
              <span className={styles.clientName}>{project.client}</span>
            </div>
            {project.clientLogo && (
              <div className={styles.logoBox}>
                <Image
                  src={project.clientLogo}
                  alt={`${project.client} logo`}
                  fill
                  className={styles.clientLogoImg}
                  sizes="110px"
                />
              </div>
            )}
          </div>

          {/* Description — 2-column */}
          <div className={styles.row}>
            <span className={styles.rowLabel}>Description</span>
            <div className={styles.rowBody}>
              <p className={styles.description}>{project.description}</p>
            </div>
          </div>

          {/* Tags — 2-column */}
          <div className={styles.row}>
            <span className={styles.rowLabel}>Tags</span>
            <div className={styles.rowBody}>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.stats}>
          {project.totalArea && (
            <div className={styles.stat}>
              <span className={styles.statValue}>{project.totalArea}</span>
              <span className={styles.statLabel}>Total Area</span>
            </div>
          )}
          {project.projectPeriod && (
            <div className={styles.stat}>
              <span className={styles.statValue}>{project.projectPeriod}</span>
              <span className={styles.statLabel}>Project Period</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
