"use client";

import React from "react";
import styles from "./AboutValueProp.module.scss";

const features = [
  {
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.668 28.668V20.3346C28.668 19.8926 28.8436 19.4687 29.1561 19.1561C29.4687 18.8436 29.8926 18.668 30.3346 18.668H33.668C34.11 18.668 34.5339 18.8436 34.8465 19.1561C35.159 19.4687 35.3346 19.8926 35.3346 20.3346V28.668" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M35.332 22C37.9842 22 40.5277 23.0536 42.4031 24.9289C44.2785 26.8043 45.332 29.3478 45.332 32V37" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.668 37V32C18.668 29.3478 19.7215 26.8043 21.5969 24.9289C23.4723 23.0536 26.0158 22 28.668 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M46.9987 37H16.9987C16.0782 37 15.332 37.7462 15.332 38.6667V42C15.332 42.9205 16.0782 43.6667 16.9987 43.6667H46.9987C47.9192 43.6667 48.6654 42.9205 48.6654 42V38.6667C48.6654 37.7462 47.9192 37 46.9987 37Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    ),
    badge: "SITE SAFETY",
    title: "We enforce rigorous safety standards on every job site",
    description:
      "Our team ensures full compliance with safety regulations, protecting workers and keeping projects on schedule.",
  },
  {
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M36.4983 22.5009C36.1929 22.8124 36.0219 23.2313 36.0219 23.6675C36.0219 24.1038 36.1929 24.5226 36.4983 24.8342L39.165 27.5009C39.4765 27.8062 39.8954 27.9773 40.3316 27.9773C40.7679 27.9773 41.1867 27.8062 41.4983 27.5009L47.7816 21.2175C48.6197 23.0695 48.8734 25.1329 48.5091 27.1328C48.1447 29.1326 47.1795 30.9739 45.7421 32.4113C44.3047 33.8487 42.4634 34.8139 40.4635 35.1783C38.4637 35.5427 36.4003 35.2889 34.5483 34.4509L23.0316 45.9675C22.3686 46.6306 21.4693 47.0031 20.5316 47.0031C19.5939 47.0031 18.6947 46.6306 18.0316 45.9675C17.3686 45.3045 16.9961 44.4052 16.9961 43.4675C16.9961 42.5298 17.3686 41.6306 18.0316 40.9675L29.5483 29.4509C28.7102 27.5989 28.4565 25.5355 28.8209 23.5356C29.1852 21.5358 30.1504 19.6945 31.5878 18.2571C33.0252 16.8197 34.8665 15.8545 36.8664 15.4901C38.8662 15.1257 40.9296 15.3795 42.7816 16.2175L36.515 22.4842L36.4983 22.5009Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    ),
    badge: "SKILLED TRADES",
    title: "We deploy expert tradespeople for every phase of construction",
    description:
      "From foundation to finishing, our certified crews deliver precision workmanship across all disciplines.",
  },
  {
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 48.6654V18.6654C22 17.7813 22.3512 16.9335 22.9763 16.3083C23.6014 15.6832 24.4493 15.332 25.3333 15.332H38.6667C39.5507 15.332 40.3986 15.6832 41.0237 16.3083C41.6488 16.9335 42 17.7813 42 18.6654V48.6654H22Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.9987 32H18.6654C17.7813 32 16.9335 32.3512 16.3083 32.9763C15.6832 33.6014 15.332 34.4493 15.332 35.3333V45.3333C15.332 46.2174 15.6832 47.0652 16.3083 47.6904C16.9335 48.3155 17.7813 48.6667 18.6654 48.6667H21.9987" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M42 27H45.3333C46.2174 27 47.0652 27.3512 47.6904 27.9763C48.3155 28.6014 48.6667 29.4493 48.6667 30.3333V45.3333C48.6667 46.2174 48.3155 47.0652 47.6904 47.6904C47.0652 48.3155 46.2174 48.6667 45.3333 48.6667H42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28.668 22H35.3346" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28.668 28.668H35.3346" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28.668 35.332H35.3346" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28.668 42H35.3346" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    ),
    badge: "PROJECT DELIVERY",
    title: "We complete complex builds on time and within budget",
    description:
      "Our project managers coordinate materials, labor, and logistics so every structure is delivered to spec.",
  },
];

const AboutValueProp = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Building strategy, execution and delivering tangible business growth
          </h2>
          <p className={styles.description}>
            Comprehensive engineering, procurement, and construction solutions
            designed for seamless project execution and operational efficiency.
          </p>
        </div>

        <div className={styles.cards}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.cardIcon}>{feature.icon}</div>
              </div>
              <div className={styles.cardBottom}>
                <span className={styles.badge}>{feature.badge}</span>
                <h4 className={styles.cardTitle}>{feature.title}</h4>
                <p className={styles.cardDesc}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValueProp;
