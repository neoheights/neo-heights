"use client";

import React, { useState, useEffect, useRef } from "react";
import SectionText from "../SectionText/SectionText";
import { ArrowRight } from "lucide-react";
import styles from "./Projects.module.scss";
import Image from "next/image";

const Projects = () => {
  const [activeStatus, setActiveStatus] = useState("Completed");
  const [activeCategory, setActiveCategory] = useState("All");

  const statuses = [];
  const categories = [
    "On-going",
    "Completed",
    "Civil, PEB, Interior & MEP Works",
    "EPC Contracts",
    "Civil Engineering",
    "EPC Pre-Engineered Building",
    "MEP",
  ];

  // Dummy data for projects
  const projects = [
    {
      title: "SHIMIZU - SAKATA",
      location: "DODDABLLAPURA",
      image: require("@/assets/images/projects/sakata.png"),
      imagePosition: "50% 20%",
      size: "large",
    },
    {
      title: "Advik Hi Tech Pvt. Ltd.,",
      location: "NARSAPURA, KA",
      image: require("@/assets/images/projects/advik.png"),
      imagePosition: "50% 20%",
      size: "small",
    },
    {
      title: "Schaeffler India Limited, Shoolagiri",
      location: "SHOOLAGIRI",
      description:
        "Building a fully operational manufacturing facility involves a comprehensive scope that includes civil engineering, mechanical, electrical, and plumbing (MEP) systems. This project will encompass all necessary components to ensure a successful setup.",
      image: require("@/assets/images/projects/sakata.png"),
      size: "medium-text", // Special type for text + image split
      isFeatured: true,
    },
    {
      title: "SCHAEFFLER INDIA LIMITED",
      location: "SHOOLAGIRI",
      image: require("@/assets/images/projects/india.png"),
      image2: require("@/assets/images/projects/india2.jpg"),
      size: "large-wide",
    },
    {
      title: "TATA ELECTRONICS",
      location: "HOSUR",
      image: require("@/assets/images/projects/tata.png"),
      imagePosition: "50% 20%",
      size: "small",
    },
    {
      title: "PEB WORKS VOLVO",
      location: "NARSAPURA",
      image: require("@/assets/images/projects/peb.png"),
      imagePosition: "50% 0%",
      size: "small",
    },
    {
      // title: "PEB WORKS VOLVO",
      description:
        "Executed as a turnkey EPC project, this facility integrates civil, structural, PEB, and MEP works to deliver a seamless, efficient, and future-ready industrial space tailored to client requirements.",
      image: null,
      size: "small",
      isFeatured: true,
    },
  ];

  const Filters = () => (
    <div className={styles.filtersWrapper}>
      <div className={styles.categoryFilters}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.categoryBtn} ${activeCategory === cat ? styles.active : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );

  // Helper component to auto-set overlay color based on image luminance
  const ProjectCard = ({ project, className, styleProps }) => {
    const cardRef = useRef(null);

    useEffect(() => {
      const imgSrc =
        project?.image?.src ||
        project?.image?.default ||
        project?.image ||
        project?.image2?.src ||
        project?.image2;
      if (!imgSrc) return;

      const img = new window.Image();
      img.crossOrigin = "Anonymous";
      img.src = imgSrc;

      const handleLoad = () => {
        try {
          const canvas = document.createElement("canvas");
          const w = Math.min(img.width, 200);
          const h = Math.min(img.height, 200);
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, w, h);
          const data = ctx.getImageData(0, 0, w, h).data;
          let r = 0,
            g = 0,
            b = 0,
            count = 0;
          const step = 4; // sample every few pixels
          for (let i = 0; i < data.length; i += 4 * step) {
            r += data[i];
            g += data[i + 1];
            b += data[i + 2];
            count++;
          }
          r = r / count;
          g = g / count;
          b = b / count;
          const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
          // If image is light, use a dark overlay; otherwise use a light overlay
          let overlay, textColor, textSecondary, textShadow;
          if (luminance > 0.6) {
            overlay = "rgba(0,0,0,0.6)";
            textColor = "rgba(255,255,255,0.95)";
            textSecondary = "rgba(255,255,255,0.85)";
            textShadow = "0 1px 2px rgba(0,0,0,0.35)";
          } else {
            overlay = "rgba(255,255,255,0.18)";
            textColor = "rgba(0,0,0,0.92)";
            textSecondary = "rgba(0,0,0,0.65)";
            textShadow = "none";
          }

          if (cardRef.current) {
            cardRef.current.style.setProperty("--overlay-bg", overlay);
            cardRef.current.style.setProperty(
              "--overlay-text-color",
              textColor,
            );
            cardRef.current.style.setProperty(
              "--overlay-text-secondary",
              textSecondary,
            );
            cardRef.current.style.setProperty(
              "--overlay-text-shadow",
              textShadow,
            );
          }
        } catch (err) {
          // fallback
          if (cardRef.current)
            cardRef.current.style.setProperty(
              "--overlay-bg",
              "rgba(0,0,0,0.45)",
            );
        }
      };

      if (img.complete) handleLoad();
      else img.addEventListener("load", handleLoad);

      return () => img.removeEventListener("load", handleLoad);
    }, [project]);

    return (
      <div
        ref={cardRef}
        className={`${styles.projectCard} ${className || ""}`}
        style={styleProps}
      >
        {project?.image && (
          <Image
            src={project.image}
            alt={project.title || ""}
            className={styles.projectImage}
            width={1000}
            height={1000}
            style={{ objectPosition: project.imagePosition || "50% 50%" }}
          />
        )}
        <div className={styles.overlay}>
          <h3>{project?.title}</h3>
          <span>{project?.location}</span>
        </div>
      </div>
    );
  };

  return (
    <section className={styles.projectsSection} id="projects">
      <div className={`container ${styles.container}`}>
        <SectionText
          smallTitle="PROJECTS"
          title="Innovative Projects That Push Boundaries and Surpass Goals"
          buttonLabel="Explore All Projects"
          onButtonClick={() => {}}
          align="left"
          customChildren={<Filters />}
          // maxWidth='60%'
        />

        <div className={styles.projectsGrid}>
          {/* Top Row */}
          <ProjectCard project={projects[0]} className={styles.span2} />
          <ProjectCard project={projects[1]} className={styles.span1} />

          {/* Middle Row - Featured Text Card */}
          <div className={`${styles.textCard} ${styles.span1}`}>
            <div className={styles.textCardContent}>
              <div className={styles.textHeader}>
                <h3>{projects[2].title}</h3>
                <span className={styles.statusBadge}>Area - 14,500 sq. m</span>
              </div>
              <p>{projects[2].description}</p>
              <button className={styles.viewMoreBtn}>
                View More <ArrowRight size={14} />
              </button>
            </div>
          </div>

          <ProjectCard project={projects[3]} className={styles.span2} />

          {/* Bottom Row */}
          <ProjectCard project={projects[4]} className={styles.span1} />
          <ProjectCard project={projects[5]} className={styles.span1} />

          <div
            className={`${styles.textCard} ${styles.span1} ${styles.darkTextCard}`}
          >
            <p className={styles.finalCardText}>
              Executed as a turnkey EPC project, this facility integrates civil,
              structural, PEB, and MEP works to deliver a seamless, efficient,
              and future-ready industrial space tailored to client
              requirements.{" "}
            </p>
            <button className={styles.viewMoreBtn}>
              Learn More <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
