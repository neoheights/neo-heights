"use client";

import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.topSection}>
                    <div className={styles.logoCol}>
                        <div className={styles.logo}>
                            {/* Placeholder Logo */}
                            <span>ARUL GROUP</span>
                        </div>
                        <div className={styles.subLogos}>
                            <span>Arul Polymers</span>
                            <span>Arul Rubbers</span>
                        </div>
                    </div>

                    <div className={styles.addressCol}>
                        <h4>Arul Signaal B.E., M.B.A(IIM)</h4>
                        <p>Managing Director</p>
                        <address>
                            Caravan 24x7 (412-2B3)<br/>
                            SIDCO Industrial Estate<br/>
                            Ambattur, Chennai - 600 098<br/>
                            Tamil Nadu, INDIA
                        </address>
                        <p>Mobile: +91 98418 87140</p>
                        <p>Email: arul@neoheights.com</p>
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.bottomSection}>
                    <div className={styles.linksCol}>
                        <h4>QUICK LINKS</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Blogs</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    
                    <div className={styles.linksCol}>
                        <h4>SERVICES</h4>
                        <ul>
                            <li><a href="#">Civil Engineering</a></li>
                            <li><a href="#">PEB Works</a></li>
                            <li><a href="#">Commercial Interiors</a></li>
                            <li><a href="#">MEP Solutions</a></li>
                        </ul>
                    </div>

                    <div className={styles.linksCol}>
                        <h4>CAREER</h4>
                        <ul>
                            <li><a href="#">Current Openings</a></li>
                            <li><a href="#">Internships</a></li>
                            <li><a href="#">Work Culture</a></li>
                        </ul>
                    </div>

                    <div className={styles.socialCol}>
                         <button className={styles.subscribeBtn}>Subscribe</button>
                         <div className={styles.socialIcons}>
                             <a href="#"><Facebook size={20} /></a>
                             <a href="#"><Twitter size={20} /></a>
                             <a href="#"><Instagram size={20} /></a>
                             <a href="#"><Linkedin size={20} /></a>
                         </div>
                    </div>
                </div>

                <div className={styles.copyright}>
                    <p>© 2025 Neo Heights. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
