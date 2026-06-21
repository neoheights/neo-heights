import styles from "./SustainabilityOverview.module.scss";
import ISO9001 from "@/assets/images/aboutUs/image 987.jpg";
import Image from "next/image";

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
              <Image src={ISO9001} alt="ISO 9001" fill style={{ objectFit: "contain", borderRadius: "8px" }} />
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
