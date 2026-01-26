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
                            <span>👋</span>
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
                                {item.label}
                                {item.hasDropdown && <ChevronDown size={14} className={styles.dropdownIcon} />}
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
