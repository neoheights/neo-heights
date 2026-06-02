import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./ServicesIntro.module.scss";

export default function ServicesIntro() {
  return (
    <section className={styles.servicesIntro}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.copyBlock}>
            <p className={styles.eyebrow}>SERVICES</p>
            <h1 className={styles.heading}>
              Engineering Excellence Across Every Sector
            </h1>
          </div>

          <div className={styles.detailBlock}>
            <p className={styles.description}>
              Integrated construction and infrastructure solutions tailored for
              industrial, commercial, residential, and large-scale development
              projects. Backed by decades of expertise and a commitment to
              quality, we combine engineering precision, operational efficiency,
              and sustainable practices to execute projects that exceed
              expectations.
            </p>
            <p className={styles.description}>
              From EPC contracting and civil construction to PEB structures, MEP
              systems, land development, and interior solutions, we provide
              end-to-end capabilities designed to support modern infrastructure
              growth.
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
