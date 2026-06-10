"use client";

import { Award } from "lucide-react";
import styles from "./Achievements.module.scss";

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "98%", label: "On-Time Delivery" },
  { value: "25M+", label: "Sq.Ft Constructed" },
];

const certifications = [
  "ISO 9001:2015 Quality Management",
  "ISO 14001:2015 Environmental Management",
  "ISO 45001:2018 Occupational Health & Safety",
  "LEED Accredited Professional",
  "IGBC Certified Green Building",
  "BIS Certifications",
];

const Achievements = () => {
  return (
    <>
      <section className={styles.statsSection}>
        <div className={styles.inner}>
          <span className={styles.eyebrow}>RECENT COMPLETIONS</span>
          <h2 className={styles.heading}>Delivered Excellence</h2>

          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.certSection}>
        <div className={styles.inner}>
          <span className={styles.eyebrow}>CERTIFICATIONS &amp; STANDARDS</span>
          <h2 className={styles.heading}>Industry Recognition</h2>
          <p className={styles.description}>
            Committed to maintaining the highest industry standards through
            continuous certification and compliance
          </p>

          <div className={styles.certGrid}>
            {certifications.map((cert) => (
              <div key={cert} className={styles.certCard}>
                <span className={styles.certIcon}>
                  <Award size={16} />
                </span>
                <span className={styles.certLabel}>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievements;
