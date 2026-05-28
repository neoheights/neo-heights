"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./ServicesHero.module.scss";

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

      {/* ── Services grid ── */}
      <div className={styles.grid}>
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`${styles.card} ${
              idx === services.length - 1 && services.length % 2 !== 0
                ? styles.cardLast
                : ""
            }`}
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.cardImage}
            />
            <div className={styles.cardOverlay} />
            <span className={styles.cardLabel}>{service.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesHero;
