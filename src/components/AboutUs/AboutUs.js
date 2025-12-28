"use client";

import React from 'react';
import SectionText from '../SectionText/SectionText';
import FeatureCard from '../FeatureCard/FeatureCard';
import styles from './AboutUs.module.scss';

const AboutUs = () => {
  const features = [
    {
      stat: "12+",
      title: "Years of Excellence",
      description: "Years of experience delivering high-quality engineering solutions.",
      category: "ENGINEERING & CONSTRUCTION",
      subItems: ["Structural Design", "Project Execution"],
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      stat: "20+",
      title: "Projects Completed",
      description: "Projects completed across commercial, residential, and industrial sectors.",
      category: "COMMERCIAL BUILDS",
      subItems: ["Commercial Builds", "Residential Projects"],
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      stat: "100%",
      title: "Cutting-Edge Tools",
      description: "Deployment of cutting-edge tools and equipment for precision work.",
      category: "LATEST EQUIPMENT",
      subItems: ["Advanced Machinery", "Modern Technology"],
      image: "https://images.unsplash.com/photo-1581094794329-cd1096a7a2e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      stat: "3M+ sq.ft",
      title: "Footprint Delivered",
      description: "Construction footprint delivered with engineering excellence.",
      category: "PROJECT SCALE",
      subItems: ["Large-format Builds", "Infrastructure Delivery"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      stat: "3,000+",
      title: "Widgets Produced",
      description: "Widgets in one day boost operational efficiency.",
      category: "FORTUNE 500 COMPANY",
      subItems: ["Electrification", "Backend Development"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const handleLearnMore = () => {
    console.log("Learn More Clicked");
  };

  return (
    <section className={styles.aboutSection}>
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
