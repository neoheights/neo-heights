"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../ThemeProvider';
import styles from './Header.module.scss';
import Image from 'next/image';
import logoImg from '@/assets/images/neo_logo.png';

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showProjectsMenu, setShowProjectsMenu] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navItems = [
        { label: 'Home', href: '/', id: 'home' },
        { label: 'About us', href: '/', id: 'aboutUs' },
        { label: 'Projects', href: '/', hasDropdown: true, id: 'projects' },
        { label: 'Services', href: '/', hasDropdown: false, id: 'services' },
        { label: 'Sustainability', href: '/', hasDropdown: false, id: 'sustainability' },
        // { label: 'Newsroom', href: '/' },
        { label: 'Team', href: '/', hasDropdown: false, id: 'team' },
        { label: 'Contact', href: '/', id: 'contactUs' },
    ];

    const projectList = [
        { title: 'Schaeffler India Limited.', location: 'SHOOLAGIRI' },
        { title: 'SHIMZU - SAKATA', location: 'HOSUR' },
        { title: 'FAIVELEY - CS Building', location: 'HOSUR' },
        { title: 'SAKATA - WAREHOUSE', location: 'BENGALURU' },
        { title: 'Toyato Design Build canteen', location: 'BIDADI, KA' },
        { title: 'TATA Electronic', location: 'HOSUR' },
    ];

    const handleNavClick = (item) => {
        if (item.id === 'projects') {
            setShowProjectsMenu(!showProjectsMenu);
        } else {
            scrollToSection(item.id);
        }
    };

    const closeProjectsMenu = () => {
        setShowProjectsMenu(false);
    };

    const scrollToSection = (id) => {
        setIsMenuOpen(false); // For mobile screens, close the navbar while clicking navbar element
        setShowProjectsMenu(false);
        const element = document.getElementById(id);
        if (!element) return;

        const offset = 120; // navbar height
        const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset;

        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    };

    const ProjectsMegaMenu = () => (
        <div className={styles.projectsMegaMenu}>
            <div className={`container ${styles.megaMenuContainer}`}>
                <div className={styles.menuGrid}>
                    <div className={styles.projectsListSection}>
                        <h4 className={styles.sectionTitle}>Projects</h4>
                        <div className={styles.projectsList}>
                            {projectList.map((project, index) => (
                                <div key={index} className={styles.projectItem}>
                                    <h5>{project.title}</h5>
                                    <span>{project.location}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.exploreSection}>
                        <h4 className={styles.sectionTitle}>Explore</h4>
                        <div className={styles.exploreCard}>
                            <Image src={require('@/assets/images/projects/sakata.png')} alt="Explore" width={400} height={300} className={styles.exploreImage} />
                            <div className={styles.exploreOverlay}>
                                <h5>SAKATA INDIA PVT LTD</h5>
                                <span>DODDABALLAPURA</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.bottomBar}>
                    <div className={styles.ctaWrapper}>
                        <div className={styles.ctaIcon}>
                            <span style={{ display: 'flex' }}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.83997 14.84H9.83997V1.84L16.2339 4.58025C16.6016 4.73783 16.84 5.09937 16.84 5.4994V14.84H18.84V16.84H-3.16003V14.84H-1.16003V1.48987C-1.16003 1.09469 -0.927304 0.736556 -0.566174 0.576056L7.13687 -2.84752C7.38927 -2.95968 7.68477 -2.84603 7.79687 -2.59369C7.82527 -2.52976 7.83997 -2.46058 7.83997 -2.39062V14.84Z" fill="white" />
                                </svg>
                            </span>
                        </div>
                        <p>Ready to kick off a project? <span>Let's get in touch!</span></p>
                    </div>
                    <button className={styles.startProjectBtn} onClick={() => scrollToSection('contactUs')}>
                        Start Your Project <ChevronDown className={styles.rotateIcon} size={16} />
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <div className={styles.logo}>
                    <Image src={logoImg} width={300} height={300} className={styles.logoIcon} alt="neo" />
                </div>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.mobileOpen : ''}`}>
                    <ul className={styles.navList}>
                        {navItems.map((item) => (
                            <li key={item.label} className={styles.navItem} onClick={() => handleNavClick(item)}>
                                {/* <Link href={item.href} className={styles.navLink}> */}
                                <span>
                                    {item.label}
                                </span>
                                <span>
                                    {item.hasDropdown &&
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.5 8.25L11 13.75L16.5 8.25" stroke="white" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    }
                                </span>
                                {/* </Link> */}
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={styles.actions}>
                    {/* <button
                        className={styles.themeToggle}
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button> */}
                    <button
                        className={styles.mobileMenuToggle}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {showProjectsMenu && (
                <>
                    <div className={styles.backdrop} onClick={closeProjectsMenu} />
                    <ProjectsMegaMenu />
                </>
            )}
        </header>
    );
};

export default Header;
