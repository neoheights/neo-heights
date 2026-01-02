"use client";

import React from 'react';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import styles from './Footer.module.scss';

import FooterTopImage from '@/assets/images/footer_top.png'
import NeoLogo from '@/assets/images/neo_logo.png';


const Footer = () => {
    return (
        <footer className={styles.footer}>
            {/* White top strip image */}
            <div className={styles.footerTopStrip}>
                <Image src={FooterTopImage} alt="Footer Partners" className={styles.footerTopImage} priority />
            </div>

            <div className={`container ${styles.container}`}>
                {/* CTA Bar */}
                <div className={styles.ctaBar}>
                    <div className={styles.ctaText}>
                        <h4>Have a project in mind?</h4>
                        <p>Let's build it together.</p>
                    </div>
                    <button className={styles.ctaButton}>Contact Us</button>
                </div>

                <div className={styles.bottomSection}>
                    <div className={styles.brandCol}>
                        <div className={styles.brandCard}>
                            <Image src={NeoLogo} alt="Neo Heights" className={styles.brandLogo} />
                            <span className={styles.brandSub}>Part of Arul Group</span>
                        </div>
                        <p className={styles.brandDesc}>
                            Neo Heights, backed by the Arul Group, delivers civil, PEB, interior, and MEP construction
                            solutions with a focus on quality, safety, and long-term value.
                        </p>
                    </div>

                    <div className={styles.linksCol}>
                        <h4>QUICK LINKS</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Sustainability</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    
                    <div className={styles.linksCol}>
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#">Civil Construction</a></li>
                            <li><a href="#">PEB Structures</a></li>
                            <li><a href="#">Interior Fit-outs</a></li>
                            <li><a href="#">MEP Works</a></li>
                            <li><a href="#">Sustainable Construction</a></li>
                        </ul>
                    </div>

                    <div className={styles.contactCol}>
                        <h4>Contact</h4>
                        <ul>
                            <li>Hosur, Tamil Nadu, India</li>
                            <li>+91 XXXXX XXXXX</li>
                            <li>info@neoheights.com</li>
                        </ul>
                        <div className={styles.socialIcons}>
                            <a href="#"><Facebook size={18} /></a>
                            <a href="#"><Twitter size={18} /></a>
                            <a href="#"><Linkedin size={18} /></a>
                            <a href="#"><Instagram size={18} /></a>
                            <a href="#"><span className={styles.youtubeDot}></span></a>
                        </div>
                    </div>

                </div>

                <div className={styles.copyright}>
                    <p>© 2025 Neo Heights. All rights reserved.</p>
                    <span className={styles.rightNote}>A part of the <a href="#">Arul Group</a>.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
