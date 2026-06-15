"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import styles from "./SustainabilityInitiatives.module.scss";
import smartWaterImg from "@/assets/images/services/land/tata-rwh.jpg";
import greenFacadeImg from "@/assets/images/services/land/building-render.jpg";
import landDevImg from "@/assets/images/services/land/land-hero.png";

const SLIDE_DURATION = 6000;

const slides = [
  {
    image: smartWaterImg,
    project: "Schaeffler India Limited — Shoolagiri",
    title: "Smart Water Management",
    description:
      "Integrated rainwater harvesting and water conservation systems designed to improve resource efficiency and support long-term environmental sustainability.",
  },
  {
    image: greenFacadeImg,
    project: "Neo Heights — Green Building Design",
    title: "Green Facade & Energy Efficiency",
    description:
      "Vertical landscaping and passive design strategies that reduce heat load and energy consumption while improving occupant well-being.",
  },
  {
    image: landDevImg,
    project: "Tata Electronics — Dobbaspet",
    title: "Responsible Land Development",
    description:
      "Careful site grading and earthwork planning that minimises runoff, protects topsoil, and prepares the land for long-term sustainable use.",
  },
];

const SustainabilityInitiatives = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (paused) return;

    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(pct);

      if (pct >= 100) {
        setActive((prev) => (prev + 1) % slides.length);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [active, paused]);

  const goTo = (index) => {
    setActive((index + slides.length) % slides.length);
    setProgress(0);
  };

  const slide = slides[active];

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            Initiatives That Shape <br /> a Sustainable Future
          </h2>
          <p className={styles.description}>
            Through responsible engineering and future-focused infrastructure
            planning, Neo Heights delivers sustainable initiatives that
            reduce environmental impact while supporting industrial growth
            and operational excellence.
          </p>
        </div>

        <div className={styles.carousel}>
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className={styles.slideImage}
            sizes="(max-width: 900px) 100vw, 420px"
            priority
          />

          <div className={styles.progressRow}>
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={styles.progressTrack}
                onClick={() => goTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              >
                <span
                  className={styles.progressFill}
                  style={{
                    width:
                      index === active
                        ? `${progress}%`
                        : index < active
                          ? "100%"
                          : "0%",
                  }}
                />
              </button>
            ))}
            <button
              type="button"
              className={styles.playPauseBtn}
              onClick={() => setPaused((prev) => !prev)}
              aria-label={paused ? "Play slideshow" : "Pause slideshow"}
            >
              {paused ? <Play size={14} /> : <Pause size={14} />}
            </button>
          </div>

          <button
            type="button"
            className={`${styles.navBtn} ${styles.navPrev}`}
            onClick={() => goTo(active - 1)}
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            className={`${styles.navBtn} ${styles.navNext}`}
            onClick={() => goTo(active + 1)}
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>

          <div className={styles.caption}>
            <span className={styles.captionProject}>{slide.project}</span>
            <h3 className={styles.captionTitle}>{slide.title}</h3>
            <p className={styles.captionDesc}>{slide.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityInitiatives;
