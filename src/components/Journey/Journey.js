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
            <span className={styles.sinceText}>SINCE 1978</span>
          </div>

          <h2 className={styles.mainTitle}>
            <span className={styles.neoText}>NEO</span><br />
            <span className={styles.heightsText}>HEIGHTS</span>
          </h2>

          <div className={styles.features}>
            <div className={styles.featureItem}>
              <div className={styles.badgeBox}>
                <svg width="39" height="29" viewBox="0 0 39 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M-1.42306e-06 0.000287831H11.644V28.9463H5.371V5.61729H-1.42306e-06V0.000287831ZM35.1982 0.000287831V17.7533H38.8062V23.0013H35.1982V28.9463H29.6222V23.0013H17.4042V17.4663L29.8682 0.000287831H35.1982ZM26.8342 12.4233L23.1442 17.8353H29.7042C29.7042 15.7033 29.7042 13.6123 29.7452 11.4803C29.7862 10.4963 29.8272 9.47129 29.9502 8.48729C29.9912 7.87229 30.1142 7.21629 30.2372 6.60129C29.7452 7.58529 29.2122 8.56929 28.6382 9.51229C28.0642 10.4963 27.4492 11.4393 26.8342 12.4233Z" fill="url(#paint0_linear_687_19854)" />
                  <defs>
                    <linearGradient id="paint0_linear_687_19854" x1="18.392" y1="-5.05371" x2="18.392" y2="35.9463" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FF7300" />
                      <stop offset="1" stop-color="#FFA500" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className={styles.badgeOverlay} />
              </div>
              <div className={styles.featureContent}>
                <h4 className={styles.featureTitle}>Years of industry expertise</h4>
                <p className={styles.featureDesc}>
                  Built on years of hands-on experience and trusted delivery.
                </p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.iconBox}>
                <svg width="27" height="44" viewBox="0 0 27 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.7745 44L26.4164 39.4997V32.6084H12.7745V44Z" fill="#F89828" />
                  <path d="M12.7735 32.6084H0.678558C0.678558 33.0304 0.678558 40.0622 0.678558 40.0622L12.7735 44V32.6084Z" fill="#F68121" />
                  <path d="M0.000198364 32.4678V33.7665L12.7547 34.708L26.9881 33.7455V32.4678H0.000198364Z" fill="#F89828" />
                  <path d="M0.000198364 32.4678V32.8925L12.793 33.8293L26.9881 32.8307V32.4678H0.000198364Z" fill="white" fill-opacity="0.1" />
                  <path d="M24.1703 31.2217H13.7574V29.8153H24.1703V31.2217ZM24.1703 27.9118L13.7574 27.324V25.9176L24.1703 26.5055V27.9118ZM24.1703 24.6018L13.7574 23.4263V22.02L24.1703 23.1955V24.6018ZM24.1703 21.2919L13.7574 19.5286V18.1223L24.1703 19.8856V21.2919ZM24.1703 17.9819L13.7574 15.6309V14.2246L24.1703 16.5756V17.9819ZM24.1703 14.672L13.7574 11.7332V10.3269L24.1703 13.2657V14.672ZM24.1703 11.362L13.7574 7.83551V6.42918L24.1703 9.95569V11.362ZM24.1703 8.05215L13.7574 3.93782V2.53149L24.1703 6.64582V8.05215ZM25.0142 5.20364L12.7787 0V33.2801L25.0142 32.7687V5.28206C25.0487 5.26802 25.0538 5.2433 25.0142 5.20364Z" fill="#F68121" fill-opacity="0.5" />
                  <path d="M2.22971 5.20364V6.97917L11.9337 2.53149V3.93782L2.22971 8.3855V10.2414L11.9337 6.42918V7.83551L2.22971 11.6478V13.5039L11.9337 10.3269V11.7332L2.22971 14.9102V16.7661L11.9337 14.2246V15.6309L2.22971 18.1725V20.0284L11.9337 18.1223V19.5286L2.22971 21.4347V23.2908L11.9337 22.02V23.4263L2.22971 24.6971V26.5531L11.9337 25.9176V27.324L2.22971 27.9594V29.8153H11.9337V31.2217H2.22971V32.7687L12.7775 33.2801V0L2.22971 5.20364Z" fill="#F89828" />
                </svg>
                <div className={styles.badgeOverlay} />
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

