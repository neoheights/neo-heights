import Header from "@/components/Header/Header";
import TrustedBy from "@/components/TrustedBy/TrustedBy";
import Footer from "@/components/Footer/Footer";
import SectionText from "@/components/SectionText/SectionText";
import styles from "./page.module.scss";

export default function AboutPage() {
  const buildingImage = require("@/assets/images/aboutUs/infra_delivery.jpg");

  return (
    <main>
      <Header />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <SectionText
              smallTitle="ABOUT US"
              title="Building Excellence Beyond Boundaries and Defying Limits"
              description={null}
              buttonLabel={null}
              align="left"
              maxWidth={760}
            />
          </div>

          <div className={styles.heroRight}>
            <p>
              Neo Heights is a leading construction and infrastructure company
              under the legacy of Arul Group, delivering innovative engineering
              solutions across industrial, commercial, residential, and
              infrastructure sectors.
            </p>
            <button className={styles.contactBtn}>Contact Us</button>
          </div>
        </div>

        <div className={styles.heroGlow} />
      </section>

      <section className={styles.heroImageWrap}>
        <img
          src={buildingImage}
          alt="building"
          className={styles.buildingImage}
        />
      </section>

      <section className={styles.storySection}>
        <div className={styles.storyInner}>
          <div className={styles.statsBox}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>14+</div>
              <div className={styles.statLabel}>
                Years of Construction Excellence
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>100+</div>
              <div className={styles.statLabel}>
                Completed & Ongoing Projects
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>1000+</div>
              <div className={styles.statLabel}>
                Strong Workforce & Technical Teams
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Latest Equipments</div>
            </div>
          </div>

          <div className={styles.storyText}>
            <h3>TheNeoHeights Story</h3>
            <p>
              Founded in 2011 under the strong industrial legacy of Arul Group,
              Neo Heights was established with a vision to redefine modern
              construction through engineering excellence, innovation, and
              customer trust.
            </p>

            <p>
              Today, our portfolio spans industrial facilities, transportation,
              commercial spaces, residential developments, infrastructure works,
              PEB projects, MEP engineering, and interior solutions — serving
              some of the world's leading brands and industries.
            </p>
          </div>
        </div>
      </section>

      <TrustedBy />
      <Footer />
    </main>
  );
}
