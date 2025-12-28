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
              className={styles.video}
              controls
              poster="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
            >
              <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            </video>
            <div className={styles.videoOverlayTitle}>
              THE JOURNEY OF<br />ARUL GROUP
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;

