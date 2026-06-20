"use client";

import React from "react";
import SectionText from "../SectionText/SectionText";
import FeatureCard from "../FeatureCard/FeatureCard";
import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  const features = [
    {
      stat: "14+",
      title: "Years of Experience",
      description:
        "Delivering trusted engineering and construction solutions with a proven track record of quality and reliability.",
      category: "ENGINEERING & CONSTRUCTION",
      subItems: ["Structural Design", "Project Execution"],
      image: require("@/assets/images/aboutUs/structural_design.jpg"),
      backgroundColor: "#E0654F",
    },
    {
      stat: "20+",
      title: "Projects Completed",
      description:
        "Successfully completed projects across commercial, industrial, and infrastructure sectors.",
      category: "VOLVO",
      volvo: require("@/assets/images/volvo.png"),
      subItems: ["Commercial Builds", "Industrial Projects"],
      image: require("@/assets/images/aboutUs/residential_prjts.png"),
      backgroundColor: "#E0654F",
    },
    {
      stat: "100%",
      title: "Latest Equipment",
      description:
        "Equipped with advanced machinery and modern technologies for precision-driven execution.",
      category: "LATEST EQUIPMENT",
      subItems: ["Advanced Machinery", "Modern Technology"],
      image: require("@/assets/images/aboutUs/modern_tech.jpg"),
      backgroundColor: "#F57F2A",
    },
    {
      stat: "5M+ sq.ft",
      title: "Project Scale",
      description:
        "Extensive construction footprint delivered through engineering excellence and innovation.",
      category: "PROJECT SCALE",
      subItems: ["Large-Scale Projects", "Infrastructure Delivery"],
      image: require("@/assets/images/aboutUs/infra_delivery.jpg"),
      backgroundColor: "#0462AE",
    },
    {
      stat: "1000+",
      title: "Expert Workforce",
      description:
        "A dedicated team of skilled professionals ensuring safety, quality, and timely project delivery.",
      category: "EXPERT WORKFORCE",
      subItems: ["Multi-disciplinary Teams", "Nationwide Deployment"],
      image: require("@/assets/images/aboutUs/workforce.jpg"),
      backgroundColor: "#E0654F",
    },
  ];

  const handleLearnMore = () => {
    console.log("Learn More Clicked");
  };

  return (
    <section className={styles.aboutSection} id="aboutUs">
      <SectionText
        smallTitle="ABOUT US"
        title="Building Excellence Beyond Boundaries and Defying Limits"
        description="At Neo Heights, we are at the forefront of industrial and commercial construction, dedicated to delivering top-notch quality while ensuring cost-efficiency. Our skilled team possesses the expertise to transform your vision into reality, completing projects on schedule and within your budget."
        buttonLabel="Learn More"
        onButtonClick={handleLearnMore}
      />

      <div className={styles.cardsContainer}>
        <div className={styles.cardsScroll}>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      {/* Absolute background colour */}
      <div className={styles.absoluteBgColor} />
    </section>
  );
};

export default AboutUs;
