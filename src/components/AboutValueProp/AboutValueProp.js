"use client";

import React from "react";
import styles from "./AboutValueProp.module.scss";

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Rigorous safety standards on every job site",
    description:
      "NeoHeights enforces strict safety protocols across all projects, ensuring every worker and stakeholder operates in a secure, compliant environment.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
    title: "Precise planning at every phase of construction",
    description:
      "We embed detailed engineering planning into every stage — from foundation to finishing — so nothing is left to chance and timelines are always protected.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "On-schedule delivery within budget",
    description:
      "Our disciplined project management approach consistently delivers structures on time and within the agreed budget — no surprises, no overruns.",
  },
];

const AboutValueProp = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.heading}>
            Building strategy, execution and delivering tangible business growth
          </h2>
          <p className={styles.description}>
            Comprehensive engineering, procurement, and construction solutions
            that exceed client requirements on each and every project.
          </p>
        </div>

        <div className={styles.right}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardIcon}>{feature.icon}</div>
              <div className={styles.cardContent}>
                <h4 className={styles.cardTitle}>{feature.title}</h4>
                <p className={styles.cardDesc}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValueProp;
