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
import logo13 from "@/assets/images/trustedPartners/img13.png";
import logo14 from "@/assets/images/trustedPartners/img14.png";
import logo15 from "@/assets/images/trustedPartners/img15.png";
import logo16 from "@/assets/images/trustedPartners/img16.png";
import logo17 from "@/assets/images/trustedPartners/img17.png";
import logo18 from "@/assets/images/trustedPartners/img18.png";
import logo19 from "@/assets/images/trustedPartners/img19.png";
import logo20 from "@/assets/images/trustedPartners/img20.png";
import logo21 from "@/assets/images/trustedPartners/img21.png";
import logo22 from "@/assets/images/trustedPartners/img22.png";
import logo23 from "@/assets/images/trustedPartners/img23.png";

const Clients = () => {
    const row1Logos = [
        { src: logo1,  alt: "TATA" },
        { src: logo11, alt: "VOLVO" },
        { src: logo15, alt: "Faiveley Transport" },
        { src: logo13, alt: "VOLTAS" },
        { src: logo14, alt: "TVS" },
        { src: logo12, alt: "Wabtec" },
        { src: logo2,  alt: "Partner" },
        { src: logo3,  alt: "Partner" },
        { src: logo4,  alt: "Partner" },
        { src: logo5,  alt: "Partner" },
        { src: logo6,  alt: "Partner" },
        { src: logo7,  alt: "Partner" },
    ];

    const row2Logos = [
        { src: logo18, alt: "Wipro" },
        { src: logo19, alt: "Scania" },
        { src: logo20, alt: "SHMZ" },
        { src: logo21, alt: "CUMI" },
        { src: logo22, alt: "Triangle" },
        { src: logo23, alt: "AVTEC", invert: true },
        { src: logo8,  alt: "Partner" },
        { src: logo9,  alt: "Partner" },
        { src: logo10, alt: "Partner" },
        { src: logo16, alt: "Partner" },
        { src: logo17, alt: "Partner" },
    ];

    return (
        <section className={styles.clientsSection}>
            <div className={`container ${styles.container}`}>
                <SectionText
                    smallTitle="CLIENTS"
                    title="We Collaborate With Trusted Brands In Engineering And Technology, Valuing Quality."
                    align="left"
                    maxWidth="1150px"
                    titleStyle={{ fontSize: 'clamp(28px, 3.6vw, 40px)', lineHeight: 1.05 }}
                />
            </div>

            <div className={styles.carouselWrapper}>
                {/* Row 1 — scrolls left */}
                <div className={styles.track}>
                    <div className={styles.slide}>
                        {[...row1Logos, ...row1Logos].map((logo, i) => (
                            <div key={i} className={styles.logoItem}>
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    className={styles.clientLogo}
                                    width={280}
                                    height={144}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2 — scrolls right */}
                <div className={`${styles.track} ${styles.trackReverse}`}>
                    <div className={styles.slide}>
                        {[...row2Logos, ...row2Logos].map((logo, i) => (
                            <div key={i} className={styles.logoItem}>
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={280}
                                    height={144}
                                    className={`${styles.clientLogo}${logo.invert ? ` ${styles.clientLogoInvert}` : ''}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
