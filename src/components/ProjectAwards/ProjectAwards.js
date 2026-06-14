"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import styles from "./ProjectAwards.module.scss";

const awards = [
  {
    title: "GE Healthcare Supplier of the Year",
    description:
      "Recognised for outstanding MEP project delivery and client satisfaction — 2025",
    year: "2025",
  },
  {
    title: "India SME 100 Awards 2023",
    description: "Top 100 Winners — selected from 31,000+ nominations",
    year: "2023",
  },
  {
    title: "Tata — 10 Million Safe Man Hours",
    description: "Recognised for outstanding site safety performance",
    year: "2024",
  },
  {
    title: "ISO 9001 / 14001 / 45001 Certified",
    description: "Quality, Environmental & Safety management systems",
    year: "Ongoing",
  },
];

export default function ProjectAwards() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Celebrating Our
          <br />
          Awards &amp; Certifications
        </h2>

        <div className={styles.list}>
          {awards.map((award, i) => {
            const isActive = i === activeIndex;
            return isActive ? (
              <div key={award.title} className={`${styles.row} ${styles.active}`}>
                <div className={styles.activeContent}>
                  <span className={styles.rowTitle}>{award.title}</span>
                  <p className={styles.rowDesc}>{award.description}</p>
                </div>
                <span className={styles.year}>{award.year}</span>
              </div>
            ) : (
              <div
                key={award.title}
                className={styles.row}
                onClick={() => setActiveIndex(i)}
              >
                <span className={styles.rowTitle}>{award.title}</span>
                <span className={styles.rowDescInline}>{award.description}</span>
                <ArrowRight size={14} className={styles.arrow} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
