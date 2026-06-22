"use client";

import React from "react";
import { useRouter } from "next/navigation";
import SectionText from "../SectionText/SectionText";
import FeatureCard from "../FeatureCard/FeatureCard";
import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  const features = [
    {
      stat: "14+",
      title: "Years of Experience",
      description:
        "Years of experience delivering high-quality engineering solutions.",
      category: "ENGINEERING & CONSTRUCTION",
      subItems: ["Structural Design", "Project Execution"],
      image: require("@/assets/images/aboutUs/structural_design.jpg"),
      backgroundColor: "#E0654F",
    },
    {
      stat: "20+",
      title: "Projects Completed",
      description:
        "Projects completed across commercial, residential, and industrial sectors.",
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
        "Deployment of cutting-edge tools and equipment for precision work.",
      category: "LATEST EQUIPMENT",
      subItems: ["Advanced Machinery", "Modern Technology"],
      image: require("@/assets/images/aboutUs/modern_tech.jpg"),
      backgroundColor: "#F57F2A",
    },
    {
      stat: "3M+ sq.ft",
      title: "Project Scale",
      description:
        "Construction footprint delivered with engineering excellence.",
      category: "PROJECT SCALE",
      subItems: ["Large-Scale Projects", "Infrastructure Delivery"],
      image: require("@/assets/images/aboutUs/infra_delivery.jpg"),
      backgroundColor: "#0462AE",
    },
    {
      stat: "1000+",
      title: "Expert Workforce",
      description: "A skilled workforce ensures precision, safety, and timely delivery.",
      category: "EXPERT WORKFORCE",
      subItems: ["Multi-disciplinary Teams", "Nationwide Deployment"],
      image: require("@/assets/images/aboutUs/workforce.jpg"),
      backgroundColor: "#E0654F",
    },
  ];

  const router = useRouter();
  const handleLearnMore = () => router.push("/about");

  return (
    <section className={styles.aboutSection} id="aboutUs">
      <div className={styles.sectionTextWrapper}>
        <SectionText
          smallTitle="ABOUT US"
          title="Building Excellence Beyond Boundaries and Defying Limits"
          description="At Neo Heights, we are at the forefront of industrial and commercial construction, dedicated to delivering top-notch quality while ensuring cost-efficiency. Our skilled team possesses the expertise to transform your vision into reality, completing projects on schedule and within your budget."
          buttonLabel="Learn More"
          onButtonClick={handleLearnMore}
        />
      </div>

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
