"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Factory,
  Building2,
  Box,
  Zap,
  MapPin,
  PenTool,
  HardHat,
  TrendingUp,
  Award,
  Trees,
} from "lucide-react";
import styles from "./ServiceDetail.module.scss";
import Achievements from "@/components/Achievements/Achievements";
import { navServices } from "@/data/services";
import sakataImg from "@/assets/images/projects/sakata.png";
import vajraImg from "@/assets/images/project_img.jpg";

const iconMap = {
  Factory,
  Building2,
  Box,
  Zap,
  MapPin,
  PenTool,
  HardHat,
};

const sustainIconMap = {
  TrendingUp,
  Award,
  Trees,
  Zap,
};

const defaultProcessDescription =
  "At Neo Heights, we are at the forefront of industrial and commercial construction, dedicated to delivering top-notch quality while ensuring cost-efficiency. Our skilled team possesses the expertise to transform your vision into reality, completing projects on schedule and within your budget.";

const defaultProcessSteps = [
  {
    number: "01",
    title: "Site Assessment & Feasibility",
    description: "Initial planning and feasibility studies",
  },
  {
    number: "02",
    title: "Structural Design & Documentation",
    description: "Comprehensive technical documentation",
  },
  {
    number: "03",
    title: "Resource Mobilisation & Procurement",
    description: "Strategic sourcing and vendor management",
  },
  {
    number: "04",
    title: "On-site Construction & Quality Control",
    description: "On-site execution and quality control",
  },
];

const defaultFeaturedProjects = [
  {
    title: "Shimzu-Sakata India Pvt Ltd",
    location: "DODDABALLAPUR",
    image: sakataImg,
  },
  {
    title: "RCC Building — Vajra Tower",
    location: "BENGALURU",
    image: vajraImg,
  },
];

const defaultServiceAreasDesc =
  "Comprehensive engineering, procurement, and construction solutions designed for seamless project execution and operational efficiency.";

const sustainStats = [
  {
    value: "40%",
    label: "Reduction in carbon emissions",
    icon: "TrendingUp",
  },
  {
    value: "25+",
    label: "Green building projects",
    icon: "Award",
  },
  {
    value: "100%",
    label: "Waste recycling initiative",
    icon: "Trees",
  },
  {
    value: "50%",
    label: "Renewable energy usage",
    icon: "Zap",
  },
];

const ServiceDetail = ({ service }) => {
  const processTitle = service.processTitle || "Process & Workflow";
  const processDescription =
    service.processDescription ?? defaultProcessDescription;
  const steps = service.processSteps ?? defaultProcessSteps;
  const projects = service.featuredProjects ?? defaultFeaturedProjects;

  return (
    <>
      {/* ── Service category nav ── */}
      <section className={styles.navSection}>
        <div className={styles.navGrid}>
          {navServices.map((item) => {
            const Icon = iconMap[item.icon];
            const isActive = item.slug === service.slug;
            return (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className={`${styles.navCard} ${
                  isActive ? styles.active : ""
                }`}
              >
                <span className={styles.navIcon}>
                  <Icon size={22} />
                </span>
                <span className={styles.navLabel}>{item.navLabel}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── Hero ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroGlow} />
        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <span className={styles.eyebrow}>{service.eyebrow}</span>
            <h1 className={styles.title}>{service.title}</h1>
            <p className={styles.description}>{service.description}</p>

            <span className={styles.capabilitiesLabel}>
              {service.capabilitiesLabel || "CORE CAPABILITIES"}
            </span>
            <ul className={styles.capabilitiesList}>
              {service.capabilities.map((cap) => (
                <li key={cap}>
                  <Check size={14} />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>

            <Link href="/contact" className={styles.contactBtn}>
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>

          <div className={styles.heroRight}>
            <Image
              src={service.image}
              alt={service.title}
              fill
              className={styles.heroImage}
              sizes="(max-width: 900px) 100vw, 50vw"
              priority
            />
            <div className={styles.imageCaption}>{service.imageCaption}</div>
          </div>
        </div>
      </section>

      {/* ── Process & Workflow ── */}
      {!service.serviceAreas && (
        <section className={styles.processSection}>
          <span className={styles.processEyebrow}>PROCESS</span>
          <h2 className={styles.processTitle}>{processTitle}</h2>
          {processDescription && (
            <p className={styles.processDesc}>{processDescription}</p>
          )}
          <Link href="/about" className={styles.learnMore}>
            Learn More <ArrowRight size={16} />
          </Link>
        </section>
      )}

      {/* ── Process steps ── */}
      {!service.serviceAreas && steps.length > 0 && (
        <section className={styles.stepsSection}>
          <div className={styles.stepsGrid}>
            {steps.map((step) => (
              <div key={step.number} className={styles.stepItem}>
                <span className={styles.stepNumber}>{step.number}</span>
                <span className={styles.stepDivider} />
                <h4 className={styles.stepTitle}>{step.title}</h4>
                {step.description && (
                  <p className={styles.stepDesc}>{step.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Service Areas ── */}
      {service.serviceAreas && (
        <section className={styles.serviceAreasSection}>
          <div className={styles.serviceAreasHeader}>
            <h2 className={styles.serviceAreasTitle}>Service Areas</h2>
            <p className={styles.serviceAreasDesc}>
              {service.serviceAreasDesc || defaultServiceAreasDesc}
            </p>
          </div>
          <div className={styles.serviceAreasGrid}>
            {service.serviceAreas.map((area) => (
              <div key={area.title} className={styles.serviceAreaCard}>
                <h3 className={styles.serviceAreaTitle}>{area.title}</h3>
                <p className={styles.serviceAreaDesc}>{area.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Featured Projects ── */}
      <section className={styles.featuredSection}>
        <div className={styles.featuredHeader}>
          <h2 className={styles.featuredTitle}>Featured Projects</h2>
          <Link href="/#projects" className={styles.viewMore}>
            View More <ArrowRight size={16} />
          </Link>
        </div>
        <div className={styles.featuredGrid}>
          {projects.map((project) => (
            <div key={project.title} className={styles.featuredCard}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={styles.featuredImage}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className={styles.featuredOverlay}>
                <h3>{project.title}</h3>
                <span>{project.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Sustainability Integration ── */}
      <section className={styles.sustainSection}>
        <div className={styles.sustainGrid}>
          <div className={styles.sustainLeft}>
            <span className={styles.sustainEyebrow}>
              SUSTAINABILITY INTEGRATION
            </span>
            <h2 className={styles.sustainTitle}>
              Engineering for a Sustainable Future
            </h2>
            <p className={styles.sustainDesc}>
              At Neo Heights, sustainability isn&apos;t an afterthought
              &mdash; it&apos;s embedded in every phase of our project
              lifecycle. From energy-efficient designs to responsible
              material sourcing, we&apos;re committed to minimizing
              environmental impact while maximizing long-term value.
            </p>
            <div className={styles.certItem}>
              <span className={styles.certBullet} />
              <div>
                <strong>Green Building Certifications</strong>
                <p>
                  LEED and IGBC certified sustainable construction practices
                </p>
              </div>
            </div>
          </div>

          <div className={styles.sustainStats}>
            {sustainStats.map((stat) => {
              const Icon = sustainIconMap[stat.icon];
              return (
                <div key={stat.label} className={styles.sustainStatItem}>
                  <Icon size={20} />
                  <span className={styles.sustainStatNumber}>
                    {stat.value}
                  </span>
                  <span className={styles.sustainStatLabel}>
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Delivered Excellence & Industry Recognition ── */}
      <Achievements />
    </>
  );
};

export default ServiceDetail;
