"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SectionText from "../SectionText/SectionText";
import { ArrowRight } from "lucide-react";
import styles from "./Projects.module.scss";
import Image from "next/image";

const Projects = () => {
  const router = useRouter();
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

  const ProjectCard = ({ project, className, styleProps }) => {
    return (
      <div
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
          onButtonClick={() => router.push('/projects')}
          align="left"
          customChildren={<Filters />}
          maxWidth="750px"
          titleStyle={{
            fontSize: "clamp(28px, 3.6vw, 40px)",
            lineHeight: 1.05,
          }}
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
              <Link href="/projects" className={styles.viewMoreBtn}>
                View More <ArrowRight size={14} />
              </Link>
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
            <Link href="/projects" className={styles.viewMoreBtn}>
              Learn More <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
