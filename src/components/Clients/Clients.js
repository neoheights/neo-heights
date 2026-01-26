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
    // First set of 12 logos (Row 1)
    const row1Logos = [
        { src: logo1, alt: "Wabtec" },
        { src: logo2, alt: "Wipro" },
        { src: logo3, alt: "Scania" },
        { src: logo4, alt: "SHMZ" },
        { src: logo5, alt: "CUMI" },
        { src: logo6, alt: "Triangle" },
        { src: logo7, alt: "AVTEC" },
        { src: logo8, alt: "Ashok Leyland" },
        { src: logo9, alt: "Ashok Leyland" },
        { src: logo10, alt: "Ashok Leyland" },
        { src: logo11, alt: "Ashok Leyland" },
        { src: logo12, alt: "Ashok Leyland" },
    ];

    // Second set of 11 logos (Row 2)
    const row2Logos = [
        { src: logo13, alt: "Client" },
        { src: logo14, alt: "Client" },
        { src: logo15, alt: "Client" },
        { src: logo16, alt: "Client" },
        { src: logo17, alt: "Client" },
        { src: logo18, alt: "Client" },
        { src: logo19, alt: "Client" },
        { src: logo20, alt: "Client" },
        { src: logo21, alt: "Client" },
        { src: logo22, alt: "Client" },
        { src: logo23, alt: "Client" },
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

                <div className={styles.slidersContainer}>
                    {/* Row 1 */}
                    <div className={styles.slider}>
                        <div className={styles.slideTrack}>
                            {[...row1Logos, ...row1Logos].map((logo, index) => (
                                <div key={`row1-${index}`} className={styles.slide}>
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

                    {/* Row 2 */}
                    <div className={styles.slider}>
                        <div className={styles.slideTrack}>
                            {[...row2Logos, ...row2Logos].map((logo, index) => (
                                <div key={`row2-${index}`} className={styles.slide}>
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
                </div>
            </div>
        </section>
    );
};

export default Clients;
