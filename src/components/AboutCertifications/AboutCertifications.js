"use client";

import React from "react";
import Image from "next/image";
import styles from "./AboutCertifications.module.scss";
import Certificate from "@/assets/images/aboutUs/certificate.jpg";
import Certificates from "@/assets/images/aboutUs/certificates.jpg";
import IME from "@/assets/images/aboutUs/ime.jpg";
import IndiaSme from "@/assets/images/aboutUs/india-sme.png";
import TopDomestic from "@/assets/images/aboutUs/top-domenstic.jpg";

const AboutCertifications = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* ── Header ── */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>OUR CERTIFICATIONS</span>
          <h2 className={styles.heading}>
            Certified Excellence. Continuous Quality. Global Standards.
          </h2>
          <p className={styles.description}>
            At Neo Heights, quality is not just a process it is a commitment embedded into every project we deliver.
            Our operations follow internationally recognized quality and safety standards, ensuring consistency, reliability,
            and operational excellence across all stages of construction and engineering.
          </p>
        </div>

        {/* ── Awards Grid ── */}
        <div className={styles.awardsGrid}>
          {/* Left column — India SME 100 */}
          <div className={styles.awardsLeft}>

            <div className={styles.awardPhotoCard}>
              <Image
                src={IndiaSme}
                alt="India SME 100 Award 2023"
                fill
              />
            </div>
          </div>

          {/* Right column — Top Domestic + IME */}
          <div className={styles.awardsRight}>
            <div className={styles.awardImgCard}>
              <Image
                src={TopDomestic}
                alt="Top Domestic Sales Award"
                fill
              />
            </div>
            <div className={styles.awardImgCard}>
              <Image
                src={IME}
                alt="11th IME 2025 International Mining Equipment & Minerals Exhibition"
                fill
              />
            </div>
          </div>
        </div>

        {/* ── ISO Certifications ── */}
        <div className={styles.isoSection}>
          <h3 className={styles.isoTitle}>ISO Certification</h3>
          <div className={styles.isoGrid}>
            <div className={styles.certCard}>
              <div className={styles.certImgWrap}>
                <Image
                  src={Certificate}
                  alt="ISO 9001:2015 Quality Management System Certification"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className={styles.certLabel}>Quality Management System<br />Certification</p>
            </div>
            <div className={styles.certCard}>
              <div className={styles.certImgWrap}>
                <Image
                  src={Certificates}
                  alt="ISO 45001:2018 Occupational Safety Management Certification"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className={styles.certLabel}>Occupational Safety Management<br />Certification</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutCertifications;
