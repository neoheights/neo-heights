"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./ProjectsGrid.module.scss";

import advikImg from "@/assets/images/projects/advik.png";
import sakataImg from "@/assets/images/projects/sakata.png";
import indiaImg from "@/assets/images/projects/india.png";
import tataImg from "@/assets/images/projects/tata.png";
import pebImg from "@/assets/images/projects/peb.png";

import volvoAerialImg from "@/assets/images/services/epc/5c5045d58f5f455bf74b38872b82565af17992d0.webp";
import toyotaImg from "@/assets/images/services/epc/931a18e0b6b494b3883cab079980e47c2e33fa48.webp";
import vajraInteriorImg from "@/assets/images/services/commercial/d86a0c296c788c16230b1529c9f9d2ef05b4faf6.png";
import vajraNightImg from "@/assets/images/services/civil/vajra-towers.png";
import geHealthcareImg from "@/assets/images/services/epc/epc-hero.webp";
import foxconnImg from "@/assets/images/services/epc/0890fd8fee161194c0997d296a5416bf8309c158.webp";
import lmWindImg from "@/assets/images/services/service12.png";
import tataRwhPondImg from "@/assets/images/services/land/tata-rwh.jpg";
import tataRwhAerialImg from "@/assets/images/services/service1.jpg";
import csWendtImg from "@/assets/images/services/civil/6291cb839d92a01ce7932a3d6e3412a7a257e58b.png";
import rccMagnumImg from "@/assets/images/services/civil/62a588ccadda717d4b886e1e7748dd9e4b11ebd0.png";
import schoolCsrImg from "@/assets/images/services/civil/31d21483aa2467352b9a312f85f50daf0832f795.png";
import rccAsterImg from "@/assets/images/services/civil/70e80b9d3d7a0b72d60f56a6c10331ed9d618d38.png";

const categories = [
  "All",
  "On-going",
  "Completed",
  "Civil, PEB, Interior & MEP Works",
  "EPC Contracts",
  "Civil Engineering",
  "EPC Pre-Engineered Building",
  "MEP",
];

const imageProjects = [
  {
    slug: "volvo-trucks",
    title: "Volvo Trucks",
    location: "HOSKOTE",
    image: volvoAerialImg,
    tags: [
      "Completed",
      "Civil, PEB, Interior & MEP Works",
      "EPC Pre-Engineered Building",
    ],
  },
  {
    slug: "advik-hi-tech",
    title: "Advik Hi Tech Pvt. Ltd.,",
    location: "NARSAPURA, KA",
    image: advikImg,
    tags: ["Completed", "EPC Contracts", "Civil Engineering"],
  },
  {
    slug: "schaeffler-india-limited",
    title: "SCHAEFFLER INDIA LIMITED",
    location: "SHOOLAGIRI",
    image: indiaImg,
    imagePosition: "50% 20%",
    tags: [
      "On-going",
      "Civil, PEB, Interior & MEP Works",
      "EPC Pre-Engineered Building",
    ],
  },
  {
    slug: "tata-electronics",
    title: "TATA ELECTRONICS",
    location: "HOSUR",
    image: tataImg,
    tags: ["On-going", "EPC Contracts", "Civil Engineering"],
  },
  {
    slug: "peb-works-volvo",
    title: "PEB WORKS VOLVO",
    location: "NARSAPURA",
    image: pebImg,
    imagePosition: "50% 0%",
    tags: ["Completed", "EPC Pre-Engineered Building", "MEP"],
  },
];

// Additional showcase projects rendered below the filterable grid.
const moreProjects = [
  {
    slug: "ge-healthcare",
    title: "GE Healthcare / Wipro GE Healthcare",
    location: "BENGALURU KARNATAKA",
    image: geHealthcareImg,
  },
  {
    slug: "pca",
    title: "PCA",
    location: "BENGALURU",
    image: sakataImg,
  },
  {
    slug: "toyota",
    title: "Toyota",
    location: "BENGALURU",
    image: toyotaImg,
  },
  {
    slug: "vajra-towers",
    title: "Vajra Towers",
    location: "HOSUR",
    image: vajraInteriorImg,
  },
  {
    slug: "vajra-towers",
    title: "Vajra Towers",
    location: "HOSUR",
    image: vajraNightImg,
  },
];

// Final showcase row - GE Healthcare, Foxconn-Cinda and LM Wind Power.
const additionalProjects = [
  {
    slug: "ge-healthcare",
    title: "GE Healthcare / Wipro GE Healthcare",
    location: "BENGALURU KARNATAKA",
    image: sakataImg,
  },
  {
    slug: "foxconn-cinda",
    title: "Foxconn-Cinda",
    location: "CHENNAI",
    image: foxconnImg,
  },
  {
    slug: "lm-wind-power",
    title: "LM Wind Power (GE Renewable Energy)",
    location: "DOBBASPET",
    image: lmWindImg,
  },
];

// Final row - Tata Electronics RWH, School CSR project and RCC Aster residential.
const finalProjects = [
  {
    slug: "tata-electronics",
    title: "Tata Electronics — Rainwater Harvesting (RWH)",
    location: "DOBBASPET, KARNATAKA",
    image: tataRwhPondImg,
  },
  {
    slug: "tata-electronics",
    title: "Tata Electronics — Rainwater Harvesting (RWH)",
    location: "DOBBASPET, KARNATAKA",
    image: tataRwhAerialImg,
  },
  {
    title: "CS Building — Wendt India",
    location: "HOSUR",
    image: csWendtImg,
  },
  {
    title: "RCC Residential Building — Magnum",
    location: "",
    image: rccMagnumImg,
  },
  {
    title: "School Building CSR Project — for Schaeffler",
    location: "",
    image: schoolCsrImg,
    badge: "CSR Project",
  },
  {
    title: "RCC Residential Building — Aster",
    location: "",
    image: rccAsterImg,
  },
];

// Cycle of column-spans used to recreate the masonry layout
const slotSizes = ["span2", "span1", "span2", "span1", "span1"];

// Auto-sets overlay colors based on image luminance so text stays readable
const ProjectCard = ({ project, size }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const imgSrc = project?.image?.src || project?.image;
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
        const step = 4;
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
          cardRef.current.style.setProperty("--overlay-text-color", textColor);
          cardRef.current.style.setProperty(
            "--overlay-text-secondary",
            textSecondary,
          );
          cardRef.current.style.setProperty("--overlay-text-shadow", textShadow);
        }
      } catch (err) {
        if (cardRef.current)
          cardRef.current.style.setProperty("--overlay-bg", "rgba(0,0,0,0.45)");
      }
    };

    if (img.complete) handleLoad();
    else img.addEventListener("load", handleLoad);

    return () => img.removeEventListener("load", handleLoad);
  }, [project]);

  const className = `${styles.projectCard} ${styles[size]}`;
  const cardContent = (
    <>
      <Image
        src={project.image}
        alt={project.title}
        className={styles.projectImage}
        width={1000}
        height={1000}
        style={{ objectPosition: project.imagePosition || "50% 50%" }}
      />
      {project.badge && <span className={styles.cardBadge}>{project.badge}</span>}
      <div className={styles.overlay}>
        <h3>{project.title}</h3>
        <span>{project.location}</span>
      </div>
    </>
  );

  if (project.slug) {
    return (
      <Link ref={cardRef} href={`/projects/${project.slug}`} className={className}>
        {cardContent}
      </Link>
    );
  }

  return (
    <div ref={cardRef} className={className}>
      {cardContent}
    </div>
  );
};

// Recreates the masonry layout: image cards in cycling spans, with a
// descriptive text card and a closing CTA card woven into the grid
const MasonryGrid = ({ images, infoCard, ctaCard }) => {
  const gridItems = images.map((project, index) => ({
    type: "image",
    key: `${project.title}-${index}`,
    project,
    size: slotSizes[index % slotSizes.length],
  }));

  if (infoCard) {
    gridItems.splice(Math.min(2, gridItems.length), 0, { type: "info", key: "info" });
  }
  if (ctaCard) gridItems.push({ type: "cta", key: "cta" });

  return (
    <div className={styles.grid}>
      {gridItems.map((item) => {
        if (item.type === "image") {
          return <ProjectCard key={item.key} project={item.project} size={item.size} />;
        }

        if (item.type === "info") {
          return (
            <div key={item.key} className={`${styles.textCard} ${styles.span1}`}>
              <div className={styles.textCardContent}>
                <div className={styles.textHeader}>
                  <h3>{infoCard.title}</h3>
                  {infoCard.badge && (
                    <span className={styles.statusBadge}>{infoCard.badge}</span>
                  )}
                </div>
                <p>{infoCard.description}</p>
                <button className={styles.viewMoreBtn}>
                  {infoCard.buttonLabel} <ArrowRight size={14} />
                </button>
              </div>
            </div>
          );
        }

        return (
          <div
            key={item.key}
            className={`${styles.textCard} ${styles.span1} ${styles.darkTextCard}`}
          >
            <p className={styles.finalCardText}>{ctaCard.text}</p>
            <button className={styles.viewMoreBtn}>
              {ctaCard.buttonLabel} <ArrowRight size={14} />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? imageProjects
      : imageProjects.filter((project) => project.tags.includes(activeCategory));

  return (
    <section className={styles.projectsGridSection}>
      <div className={styles.container}>
        <div className={styles.filters}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterBtn} ${
                activeCategory === category ? styles.active : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <MasonryGrid
          images={filteredImages}
          infoCard={{
            title: "Schaeffler India Limited, Shoolagiri",
            badge: "Area - 14,500 sq. m",
            description:
              "Building a fully operational manufacturing facility involves a comprehensive scope that includes civil engineering, mechanical, electrical, and plumbing (MEP) systems. This project will encompass all necessary components to ensure a successful setup.",
            buttonLabel: "View More",
          }}
          ctaCard={{
            text: "Executed as a turnkey EPC project, this facility integrates civil, structural, PEB, and MEP works to deliver a seamless, efficient, and future-ready industrial space tailored to client requirements.",
            buttonLabel: "Learn More",
          }}
        />

        <MasonryGrid
          images={moreProjects}
          infoCard={{
            title: "Toyota",
            description:
              "Large-scale manufacturing campus construction for Toyota's Bengaluru facility. The project involves integrated civil structural works, PEB production sheds, and full MEP systems integration across a sprawling industrial campus.",
            buttonLabel: "View More",
          }}
          ctaCard={{
            text: "Neo Heights / Arul Group corporate head office building at SIPCOT II, Hosur. Multi-storey commercial building with a modern glass facade and night-illuminated exterior, fully operational.",
            buttonLabel: "Learn More",
          }}
        />

        <MasonryGrid
          images={additionalProjects}
          infoCard={{
            title: "LM Wind Power",
            description:
              "Wind blade manufacturing facility for LM Wind Power at Dobbaspet. Features a large-span, high-clearance PEB structure with integrated overhead bridge crane rails and full MEP systems.",
            buttonLabel: "View More",
          }}
        />

        <MasonryGrid images={finalProjects} />
      </div>
    </section>
  );
}
