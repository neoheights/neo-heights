"use client";

import React from "react";
import styles from "./AboutProcess.module.scss";
import VectorLine from "@/assets/images/aboutUs/Vector.png";
import Image from "next/image";
import ISO9001 from "@/assets/images/aboutUs/image 987.jpg";
import ISO45001 from "@/assets/images/aboutUs/image 988.png";

const steps = [
  {
    number: "01",
    title: "Understanding your vision and lifestyle",
    description:
      "Every successful project begins with understanding operational goals, engineering requirements, and future scalability. We collaborate closely with clients to build solutions tailored to their industry needs.",
    side: "right",
  },
  {
    number: "02",
    title: "Designing integrated engineering solutions",
    description:
      "Our multidisciplinary expertise across civil, PEB, MEP, and infrastructure allows us to deliver fully integrated construction systems with efficiency and precision.",
    side: "left",
  },
  {
    number: "03",
    title: "Executing with quality and performance",
    description:
      "From project planning to on-site execution, we maintain strict quality standards, advanced safety protocols, and timeline-driven delivery to ensure successful outcomes.",
    side: "right",
  },
];

const policyPillars = [
  {
    number: "01.",
    title: "Safety-First Work Culture",
  },
  {
    number: "02.",
    title: "Real-time, map-based\nprogress tracking",
  },
  {
    number: "03.",
    title: "Collaborations with on-\nground communities",
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
            <div className={styles.vectorBg}>
              <Image src={VectorLine} alt="Timeline" fill style={{ objectFit: "contain", objectPosition: "top center" }} />
            </div>
            
            {steps.map((step, idx) => (
              <div key={idx} className={`${styles.stepBlock} ${step.side === "left" ? styles.stepLeft : styles.stepRight}`}>
                <div className={styles.stepContent}>
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
                <span className={styles.pillarNumber}>{pillar.number}</span>
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
                <Image src={ISO9001} alt="ISO 9001" fill style={{ objectFit: "contain" }} />
              </div>
              <div className={styles.isoLogo}>
                <Image src={ISO45001} alt="ISO 45001" fill style={{ objectFit: "contain" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutProcess;
