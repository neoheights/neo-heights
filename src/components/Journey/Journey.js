"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import styles from "./Journey.module.scss";

const Journey = () => {
  return (
    <section className={styles.journeySection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.heroCardWrap}>
          <div className={styles.heroCard}>
            <h2 className={styles.heroTitle}>
              Your Trusted Construction Partner
            </h2>
            <p className={styles.heroDesc}>
              Whether it&apos;s a new build or renovation, we manage your
              project with transparency, efficiency, and uncompromising
              standards.
            </p>
            <button className={styles.heroButton} type="button">
              Start your project <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
