"use client";

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './Sustainability.module.scss';

const useCounter = (end, duration = 2000, start = 0) => {
    const [count, setCount] = useState(start);
    const countRef = useRef(start);
    const [hasAnimated, setHasAnimated] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.5 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [hasAnimated]);

    useEffect(() => {
        if (!hasAnimated) return;

        let startTime = null;
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Easing function for smooth animation
            const easeOutQuad = (t) => t * (2 - t);

            const currentCount = Math.floor(easeOutQuad(percentage) * (end - start) + start);
            setCount(currentCount);

            if (progress < duration) {
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animate);
    }, [hasAnimated, end, duration, start]);

    return { count, elementRef };
};

const StatItem = ({ end, suffix }) => {
    // Parse 'end' to number if it has 'K' or 'M' for calculation, then append suffix
    // Actually simpler to just count to the number part
    const { count, elementRef } = useCounter(end);

    return (
        <div className={styles.statItem} ref={elementRef}>
            <div className={styles.number}>
                {count}{suffix}
            </div>
        </div>
    );
};

const Sustainability = () => {
    const sectionRef = useRef(null);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className={styles.sustainabilitySection} id="sustainability">
            <div className={styles.overlay}></div>

            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h2
                        className={`${styles.title} ${animate ? styles.fadeUp : styles.hidden
                            }`}
                    >
                        Building sustainably for a <br /> better tomorrow.
                    </h2>

                    <button
                        className={`${styles.ctaButton} ${animate ? styles.fadeUpDelay1 : styles.hidden
                            }`}
                    >
                        Explore Our Projects<ArrowRight size={18} />
                    </button>
                </div>

                <div className={styles.stats}>
                    <div
                        className={`${styles.statItem} ${animate ? styles.fadeUpDelay2 : styles.hidden
                            }`}
                    >
                        <span className={styles.statNumber}><StatItem end={96} suffix="%" /></span>
                        <span className={styles.statLabel}>
                            Verified customer<br />delight rating
                        </span>
                    </div>

                    <div
                        className={`${styles.statItem} ${animate ? styles.fadeUpDelay3 : styles.hidden
                            }`}
                    >
                        <span className={styles.statNumber}><StatItem end={10} suffix="+" /></span>
                        <span className={styles.statLabel}>
                            Years of sustainable<br />Construction
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sustainability;
