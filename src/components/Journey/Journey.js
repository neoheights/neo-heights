"use client";

import React from 'react';
import { Download, Building2 } from 'lucide-react';
import styles from './Journey.module.scss';

const Journey = () => {
  return (
    <section className={styles.journeySection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.leftPane}>
          <div className={styles.sinceRow}>
            <span className={styles.sinceDot}></span>
            <span className={styles.sinceText}>SINCE 1989</span>
          </div>

          <h2 className={styles.mainTitle}>
            <span className={styles.neoText}>NEO</span><br />
            <span className={styles.heightsText}>HEIGHTS</span>
          </h2>

          <div className={styles.features}>
            <div className={styles.featureItem}>
              <div className={styles.badgeBox}>14</div>
              <div className={styles.featureContent}>
                <h4 className={styles.featureTitle}>Years of industry expertise</h4>
                <p className={styles.featureDesc}>
                  Built on years of hands-on experience and trusted delivery.
                </p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.iconBox}>
                <Building2 size={20} />
              </div>
              <div className={styles.featureContent}>
                <h4 className={styles.featureTitle}>End-to-end construction capabilities</h4>
                <p className={styles.featureDesc}>
                  Built on years of hands-on experience and trusted delivery.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.ctaRow}>
            <button className={styles.downloadBtn}>
              Download E‑Brochure <Download size={18} />
            </button>
          </div>
        </div>

        <div className={styles.rightPane}>
          <div className={styles.videoShell}>
            <video
              src="/videos/neo_heights.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              style={{ width: "100%", height: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;

