import styles from "./SustainabilityOverview.module.scss";

const SustainabilityOverview = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <p className={styles.description}>
          At Neo Heights, sustainability is key in project execution, from
          efficient planning to industrial infrastructure. We commit to
          responsible engineering that helps businesses grow while reducing
          environmental impact.
        </p>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>96%</span>
            <span className={styles.statLabel}>
              Verified customer delight rating
            </span>
          </div>

          <div className={styles.statItem}>
            <span className={styles.statNumber}>18+</span>
            <span className={styles.statLabel}>
              Global manufacturing and infrastructure clients
            </span>
          </div>

          <div className={styles.certItem}>
            <div className={styles.certBadge}>
              <span className={styles.certBadgeIso}>ISO</span>
              <span className={styles.certBadgeNumber}>9001:2015</span>
            </div>
            <span className={styles.statLabel}>
              Quality, safety &amp; environmental standards
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityOverview;
