"use client";

import React from 'react';
import Image from 'next/image';
import SectionText from '../SectionText/SectionText';
import styles from './Clients.module.scss';

import logo1 from "@/assets/images/trustedPartners/img1.png";
import logo2 from "@/assets/images/trustedPartners/img2.png";
import logo3 from "@/assets/images/trustedPartners/img3.png";
import logo4 from "@/assets/images/trustedPartners/img4.png";
import logo5 from "@/assets/images/trustedPartners/img5.png";
import logo6 from "@/assets/images/trustedPartners/img6.png";
import logo7 from "@/assets/images/trustedPartners/img7.png";
import logo8 from "@/assets/images/trustedPartners/img8.png";
import logo9 from "@/assets/images/trustedPartners/img9.png";
import logo10 from "@/assets/images/trustedPartners/img10.png";
import logo11 from "@/assets/images/trustedPartners/img11.png";
import logo12 from "@/assets/images/trustedPartners/img12.png";

const Clients = () => {
    // Mapping available images to the grid layout shown in screenshot (12 items)
    // Using available logos and reusing some to fill the grid as per user instruction to use imported images
    const logos = [
        { src: logo1, alt: "Wabtec" },
        { src: logo2, alt: "Wipro" }, // Reusing Wistron for Wipro as placeholder
        { src: logo3, alt: "Scania" }, // Reusing Volvo for Scania as placeholder
        { src: logo4, alt: "SHMZ" }, // Reusing Faiveley for SHMZ as placeholder
        { src: logo5, alt: "CUMI" }, // Reusing Voltas for CUMI as placeholder
        { src: logo6, alt: "Triangle" }, // Reusing TVS for Triangle as placeholder
        { src: logo7, alt: "AVTEC" },    // Using Ashok Leyland for AVTEC as placeholder
        { src: logo8, alt: "Ashok Leyland" },
        { src: logo9, alt: "Ashok Leyland" },
        { src: logo10, alt: "Ashok Leyland" },
        { src: logo11, alt: "Ashok Leyland" },
        { src: logo12, alt: "Ashok Leyland" },
    ];

    return (
        <section className={styles.clientsSection}>
            <div className={`container ${styles.container}`}>
                <SectionText
                    smallTitle="CLIENTS"
                    title="We Collaborate With Trusted Brands In Engineering And Technology, Valuing Quality."
                    align="left"
                    maxWidth="800px"
                />

                <div className={styles.logoGrid}>
                    {logos.map((logo, index) => (
                        <div key={index} className={styles.logoItem}>
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                className={styles.clientLogo}
                                width={300}
                                height={300}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
