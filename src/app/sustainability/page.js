import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import SustainabilityHero from "@/components/SustainabilityHero/SustainabilityHero";
import SustainabilityOverview from "@/components/SustainabilityOverview/SustainabilityOverview";
import RelatedProjects from "@/components/RelatedProjects/RelatedProjects";
import SustainabilityInitiatives from "@/components/SustainabilityInitiatives/SustainabilityInitiatives";
import SustainabilityBlogs from "@/components/SustainabilityBlogs/SustainabilityBlogs";
import Contact from "@/components/Contact/Contact";
import FAQ from "@/components/FAQ/FAQ";
import schaefflerSolarImg from "@/assets/images/services/epc/epc-solar-rooftop.webp";
import tataRwhPondImg from "@/assets/images/services/land/tata-rwh.jpg";
import JourneySection from "@/components/JourneySection/JourneySection";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./page.module.scss";

export const metadata = {
  title: "Sustainability | Neo Heights",
  description:
    "At Neo Heights, sustainability is key in project execution, from efficient planning to industrial infrastructure. We commit to responsible engineering that helps businesses grow while reducing environmental impact.",
};

export default function SustainabilityPage() {
  return (
    <main>
      <Header />
      <SustainabilityHero />
      <SustainabilityOverview />
      <section className={styles.section}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Realted Projects</h2>
          <Link href="/projects" className={styles.viewMore}>
            View More <ArrowRight size={15} />
          </Link>
        </div>
        <div className={styles.strip}>
          {/* Schaeffler Card */}
          <Link href="/projects/schaeffler-india-limited" className={styles.card}>
            <Image
              src={schaefflerSolarImg}
              alt="Schaeffler India Limited"
              fill
              className={styles.cardImage}
              sizes="360px"
            />
            <div className={styles.overlay} />
            <div className={styles.cardFooter}>
              <span className={styles.cardTitle}>SCHAEFFLER INDIA LIMITED</span>
              <span className={styles.cardLocation}>SHOOLAGIRI</span>
            </div>
          </Link>

          {/* Tata Electronics Card */}
          <Link href="/projects/tata-electronics" className={styles.card}>
            <Image
              src={tataRwhPondImg}
              alt="Tata Electronics. Rainwater Harvesting (RWH)"
              fill
              className={styles.cardImage}
            />
            <div className={styles.overlay} />
            <div className={styles.cardFooter}>
              <span className={styles.cardTitle} style={{ textTransform: "none" }}>Tata Electronics. Rainwater Harvesting (RWH)</span>
              <span className={styles.cardLocation}></span>
            </div>
          </Link>
        </div>
      </section>
      <SustainabilityInitiatives />
      <SustainabilityBlogs />
      <Contact />
      <FAQ />
      <Footer showTopStrip />
    </main>
  );
}
