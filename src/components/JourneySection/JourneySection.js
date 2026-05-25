import styles from "./JourneySection.module.scss";
import Image from "next/image";

export default function JourneySection() {
  return (
    <section className={styles.journey}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.logoWrap}>
            <div className={styles.logoSmall}>SINCE 1978</div>
            <div className={styles.logo}>
              NEO
              <br />
              HEIGHTS
            </div>
          </div>

          <div className={styles.points}>
            <div className={styles.point}>
              <div className={styles.statBadge}>
                <div className={styles.statInner}>
                  <div className={styles.statNumber}>14</div>
                </div>
              </div>

              <div className={styles.pointText}>
                <strong>Years of industry expertise</strong>
                <div className={styles.sub}>
                  Built on years of hands-on experience and trusted delivery.
                </div>
              </div>
            </div>

            <div className={styles.point}>
              <div className={styles.statBadge}>
                <div className={styles.statInner}>
                  <div className={styles.buildingIcon}>🏢</div>
                </div>
              </div>

              <div className={styles.pointText}>
                <strong>End-to-end construction capabilities</strong>
                <div className={styles.sub}>
                  Built on years of hands-on experience and trusted delivery.
                </div>
              </div>
            </div>
          </div>

          <button className={styles.cta}>
            Download E-Brochure <span className={styles.downloadIcon}>⬇️</span>
          </button>
        </div>

        <div className={styles.right}>
          <div className={styles.videoWrap}>
            <video
              className={styles.video}
              src="/videos/arul-journey.mp4"
              controls
              preload="metadata"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
