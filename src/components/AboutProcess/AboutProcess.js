"use client";

import React from "react";
import styles from "./AboutProcess.module.scss";

const steps = [
  {
    number: "01",
    title: "Understanding your vision and themes",
    description:
      "We begin with a deep-dive into your goals, site conditions, and project parameters — aligning our team with your vision before any engineering begins.",
    side: "right",
    highlight: false,
  },
  {
    number: "02",
    title: "Deploying beyond engineering ambitions",
    description:
      "Our multidisciplinary engineers translate every requirement into detailed plans, leveraging the latest technology to push structural and design boundaries.",
    side: "left",
    highlight: false,
  },
  {
    number: "03",
    title: "Delivering with quality and performance",
    description:
      "Execution is driven by strict quality control, real-time progress tracking, and transparent communication — ensuring every project is delivered to the highest standards.",
    side: "right",
    highlight: true,
  },
];

const policyPillars = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Safety-First Work Culture",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Real-time, map-based progress tracking",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Collaborations with on-ground communities",
  },
];

const AboutProcess = () => {
  return (
    <>
      {/* ── Process Timeline ── */}
      <section className={styles.processSection}>
        <div className={styles.inner}>
          <h2 className={styles.heading}>
            How we transform ideas, vision, and craftsmanship into modern
            infrastructure
          </h2>

          <div className={styles.timeline}>
            {/* Wavy SVG path */}
            <div className={styles.pathWrap} aria-hidden="true">
              <svg
                className={styles.wavePath}
                viewBox="0 0 120 600"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M60 0 C60 80, 100 120, 100 200 C100 280, 20 320, 20 400 C20 480, 60 520, 60 600"
                  fill="none"
                  stroke="rgba(246,129,33,0.35)"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
              </svg>
            </div>

            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`${styles.stepRow} ${
                  step.side === "left" ? styles.stepLeft : styles.stepRight
                }`}
              >
                {/* Dot */}
                <div className={styles.stepDot}>
                  <span>{step.number}</span>
                </div>

                {/* Card */}
                <div
                  className={`${styles.stepCard} ${
                    step.highlight ? styles.stepCardHighlight : ""
                  }`}
                >
                  <h4 className={styles.stepTitle}>{step.title}</h4>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quality & HSC Policy ── */}
      <section className={styles.qualitySection}>
        <div className={styles.qualityInner}>
          <h2 className={styles.qualityHeading}>Quality and HSC Policy</h2>

          <div className={styles.pillars}>
            {policyPillars.map((pillar, idx) => (
              <div key={idx} className={styles.pillar}>
                <div className={styles.pillarIcon}>{pillar.icon}</div>
                <span className={styles.pillarTitle}>{pillar.title}</span>
              </div>
            ))}
          </div>

          <div className={styles.qualityBottom}>
            <p className={styles.qualityDesc}>
              At Neo Heights, quality, safety, and environmental responsibility
              are integrated into every stage of project execution. Through
              disciplined engineering practices, workforce training, and
              sustainable operational standards, we deliver infrastructure that
              is efficient, compliant, and built for long-term impact.
            </p>
            <div className={styles.isoLogos}>
              <div className={styles.isoLogo}>
                <div className={styles.isoLogoRing}>
                  <span>ISO</span>
                  <small>9001:2015</small>
                </div>
              </div>
              <div className={styles.isoLogo}>
                <div className={styles.isoLogoRing}>
                  <span>ISO</span>
                  <small>45001:2018</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutProcess;
