"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./ServicesHero.module.scss";
import TrustedBy from "@/components/TrustedBy/TrustedBy";

const services = [
  {
    title: "Civil Engineering",
    image: require("@/assets/images/services/service1.jpg"),
  },
  {
    title: "Pre-Engineering Building",
    image: require("@/assets/images/services/service2.jpg"),
  },
  {
    title: "Commercial Interiors",
    image: require("@/assets/images/services/service3.jpg"),
  },
  {
    title: "MEP",
    image: require("@/assets/images/services/service4.jpg"),
  },
  {
    title: "Land Development",
    image: require("@/assets/images/services/service5.jpg"),
  },
  {
    title: "GC Projects",
    image: require("@/assets/images/services/service6.jpg"),
  },
  {
    title: "EPC Contractor",
    image: require("@/assets/images/services/service7.png"),
  },
];

const ServicesHero = () => {
  return (
    <section className={styles.servicesHero}>
      {/* ── Hero intro ── */}
      <div className={styles.intro}>
        <div className={styles.introLeft}>
          <span className={styles.eyebrow}>OUR SERVICES</span>
          <h1 className={styles.heading}>
            Engineering Excellence Across Every Sector
          </h1>
        </div>
        <div className={styles.introRight}>
          <p className={styles.description}>
            From civil engineering to specialized construction solutions, we
            deliver precision and quality across every project. Our
            comprehensive services are backed by decades of expertise and a
            commitment to excellence that drives every structure we build.
          </p>
          <button className={styles.ctaButton}>
            Contact Us <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* ── Large hero image ── */}
      <div className={styles.heroImageWrap}>
        <Image
          src={require("@/assets/images/aboutUs/aboutpage.jpg")}
          alt="services-hero"
          className={styles.heroImage}
          width={1600}
          height={600}
          priority
        />
      </div>

      {/* ── Story + stats section ── */}
      <div className={styles.storySection}>
        <div className={styles.statsPanel}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>14+</div>
            <div className={styles.statLabel}>
              Years of Construction Excellence
            </div>
          </div>

          <div className={styles.statItem}>
            <div className={styles.statNumber}>100+</div>
            <div className={styles.statLabel}>Completed & Ongoing Projects</div>
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
          <h2>TheNeoHeights Story</h2>
          <p>
            Founded in 2011 under the strong industrial legacy of Arul Group,
            Neo Heights was established with a vision to redefine modern
            construction through engineering excellence, innovation, and
            customer trust.
          </p>
          <p>
            Today, our portfolio spans industrial facilities, warehouses,
            commercial spaces, residential developments, infrastructure works,
            PEB projects, MEP engineering, and interior solutions — serving some
            of the world's leading brands and industries.
          </p>
        </div>
      </div>

      {/* Trusted logos below story section */}
      <div className={styles.trustedStrip}>
        <TrustedBy />
      </div>

      {/* ── Strategy / Feature cards ── */}
      <div className={styles.strategySection}>
        <div className={styles.strategyIntro}>
          <h2>
            Building strategy, execution and delivering tangible business growth
          </h2>
          <p>
            Comprehensive engineering, procurement, and construction solutions
            designed for seamless project execution and operational efficiency.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          <div className={styles.cardSimple}>
            <div className={styles.cardIcon} />
            <div className={styles.cardBadge}>SITE SAFETY</div>
            <h3 className={styles.cardTitle}>
              We enforce rigorous safety standards
            </h3>
            <p className={styles.cardDesc}>
              We enforce rigorous safety standards on every job site
            </p>
          </div>

          <div className={styles.cardSimple}>
            <div className={styles.cardIcon} />
            <div className={styles.cardBadge}>SKILLED TRADES</div>
            <h3 className={styles.cardTitle}>
              Deployment of expert tradespeople
            </h3>
            <p className={styles.cardDesc}>
              We deploy expert tradespeople for every phase of construction
            </p>
          </div>

          <div className={styles.cardSimple}>
            <div className={styles.cardIcon} />
            <div className={styles.cardBadge}>PROJECT DELIVERY</div>
            <h3 className={styles.cardTitle}>On-time, on-budget delivery</h3>
            <p className={styles.cardDesc}>
              We complete complex builds on time and within budget
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
