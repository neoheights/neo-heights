import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./ProjectsHero.module.scss";

export default function ProjectsHero() {
  return (
    <section className={styles.projectsHero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.copyBlock}>
            <p className={styles.eyebrow}>PROJECTS</p>
            <h1 className={styles.heading}>
              Building Landmarks Across Industries
            </h1>
          </div>

          <div className={styles.detailBlock}>
            <p className={styles.description}>
              Our projects represent a commitment to engineering excellence,
              quality, and reliable execution. From large-scale industrial
              facilities and EPC developments to civil construction, PEB
              structures, MEP systems, and interior solutions, we deliver
              projects that create lasting value for our clients.
            </p>
            <p className={styles.description}>
              With a focus on safety, innovation, and operational efficiency,
              we manage every stage of the project lifecycle with precision
              and accountability. Our diverse portfolio reflects the trust
              placed in us by leading organizations and showcases our ability
              to transform complex challenges into successful, future-ready
              developments that drive growth and performance.
            </p>

            <Link href="/contact" className={styles.cta}>
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
