"use client";

import React from "react";
import Image from "next/image";
import styles from "./AboutCertifications.module.scss";

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
          {/* Left column */}
          <div className={styles.awardsLeft}>
            <div className={styles.awardCard}>
              <div className={styles.awardCardInner}>
                <div className={styles.smeLogoBox}>
                  {/* Replace with: <Image src={sme100Logo} alt="India SME 100" fill /> */}
                  <span className={styles.placeholderLabel}>India SME 100 Awards</span>
                </div>
                <div className={styles.smeText}>
                  <p>Neo Heights Builders and Promoters Pvt Ltd has been honored as one of the Top 100 Winners of the 10th Edition of the India SME 100 Awards 2023, selected from over 21,000 nominations received for this edition.</p>
                </div>
              </div>
            </div>
            <div className={styles.awardPhotoCard}>
              {/* Replace with: <Image src={smeAward2023} alt="India SME 100 Award 2023" fill /> */}
              <div className={styles.photoPlaceholder}>
                <div className={styles.awardBadgeOverlay}>
                  <p className={styles.awardBadgeText}>HAS BEEN HONORED WITH THE PRESTIGIOUS</p>
                  <p className={styles.awardBadgeName}>India SME 100 Award 2023</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className={styles.awardsRight}>
            <div className={styles.awardImgCard}>
              {/* Replace with: <Image src={domesticSalesAward} alt="Top Domestic Sales Award" fill /> */}
              <div className={styles.photoPlaceholder}>
                <span className={styles.placeholderLabel}>TOP DOMESTIC SALES AWARD<br />(Rubber Machineries and Equipment)</span>
              </div>
            </div>
            <div className={styles.awardImgCard}>
              {/* Replace with: <Image src={ime2025Badge} alt="IME 2025" fill /> */}
              <div className={styles.photoPlaceholder}>
                <span className={styles.placeholderLabel}>11th IME 2025<br />International Mining, Equipment &amp; Minerals Exhibition</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── ISO Certifications ── */}
        <div className={styles.isoSection}>
          <h3 className={styles.isoTitle}>ISO Certfication</h3>
          <div className={styles.isoGrid}>
            <div className={styles.certCard}>
              <div className={styles.certImgWrap}>
                {/* Replace with: <Image src={iso9001Cert} alt="ISO 9001:2015" fill objectFit="contain" /> */}
                <div className={styles.certPlaceholder}>
                  <span className={styles.certPlaceholderText}>Certificate of Registration<br /><strong>ISO 9001:2015</strong></span>
                </div>
              </div>
              <p className={styles.certLabel}>Quality Management System<br />Certification</p>
            </div>
            <div className={styles.certCard}>
              <div className={styles.certImgWrap}>
                {/* Replace with: <Image src={iso45001Cert} alt="ISO 45001:2018" fill objectFit="contain" /> */}
                <div className={styles.certPlaceholder}>
                  <span className={styles.certPlaceholderText}>Certificate of Registration<br /><strong>ISO 45001:2018</strong></span>
                </div>
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
