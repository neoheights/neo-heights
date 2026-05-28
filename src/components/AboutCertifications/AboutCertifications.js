"use client";

import React from "react";
import styles from "./AboutCertifications.module.scss";

const awards = [
  { label: "ISO 100", sublabel: "Quality Award", year: "2023" },
  { label: "Forbes SME 100", sublabel: "Award 2023", year: "2023" },
  { label: "Top Domestic Sales Award", sublabel: "National Recognition", year: "2024" },
  { label: "IME 2025", sublabel: "International Machine Exhibition", year: "2025" },
];

const isoCerts = [
  {
    standard: "ISO 9001:2015",
    title: "Quality Management System Certification",
    body: "IAS · IAF",
  },
  {
    standard: "ISO 45001:2018",
    title: "Occupational Safety Management Certification",
    body: "IAS · IAF",
  },
];

const AboutCertifications = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>OUR CERTIFICATIONS</span>
          <h2 className={styles.heading}>
            Certified Excellence. Continuous Quality.
            <br className={styles.br} /> Global Standards.
          </h2>
          <p className={styles.description}>
            Neo Heights is committed to international quality standards,
            consistently maintaining compliance with globally recognized
            certifications. Our accreditations reflect our dedication to
            robust processes, workplace safety, and sustainable construction.
          </p>
        </div>

        {/* Awards strip */}
        <div className={styles.awardsRow}>
          {awards.map((award, idx) => (
            <div key={idx} className={styles.awardBadge}>
              <div className={styles.awardIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
                </svg>
              </div>
              <div className={styles.awardText}>
                <strong>{award.label}</strong>
                <span>{award.sublabel}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ISO Certifications */}
        <div className={styles.isoSection}>
          <h3 className={styles.isoTitle}>ISO Certification</h3>
          <div className={styles.isoGrid}>
            {isoCerts.map((cert, idx) => (
              <div key={idx} className={styles.certCard}>
                {/* Certificate mock */}
                <div className={styles.certFrame}>
                  <div className={styles.certTop}>
                    <div className={styles.certLogoPlaceholder} />
                    <span className={styles.certOf}>Certificate of Registration</span>
                  </div>
                  <div className={styles.certStandard}>{cert.standard}</div>
                  <div className={styles.certBody}>{cert.body}</div>
                  <div className={styles.certSeal}>
                    <div className={styles.sealRing}>
                      <div className={styles.sealInner}>ISO</div>
                    </div>
                  </div>
                </div>
                <p className={styles.certLabel}>{cert.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCertifications;
