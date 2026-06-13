"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../ThemeProvider";
import styles from "./Header.module.scss";
import Image from "next/image";
import logoImg from "@/assets/images/neo_logo.png";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { label: "Home", href: "/", id: "home" },
    { label: "About us", href: "/about", id: "about" },
    { label: "Projects", href: "/projects", id: "projects" },
    { label: "Services", href: "/services", id: "services" },
    {
      label: "Sustainability",
      href: "/",
      hasDropdown: true,
      id: "sustainability",
    },
    { label: "Newsroom", href: "/blogs", id: "newsroom" },
    { label: "Team", href: "/", hasDropdown: true, id: "team" },
    { label: "Contact", href: "/contact", id: "contactUs" },
  ];

  const handleNavClick = (item) => {
    if (item.id === "projects") {
      setIsMenuOpen(false);
      router.push("/projects");
    } else if (item.id === "contactUs") {
      setIsMenuOpen(false);
      router.push("/contact");
    } else if (item.href === "/about" || item.id === "about") {
      setIsMenuOpen(false);
      router.push("/about");
    } else if (item.id === "services") {
      setIsMenuOpen(false);
      router.push("/services");
    } else if (pathname !== "/") {
      // If we're not on the home page, navigate to home and then scroll
      setIsMenuOpen(false);
      router.push(`/#${item.id}`);
    } else {
      scrollToSection(item.id);
    }
  };

  const scrollToSection = (id) => {
    setIsMenuOpen(false); // For mobile screens, close the navbar while clicking navbar element
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

  React.useEffect(() => {
    // Handle hash scrolling on page load (e.g., coming from a blog page)
    if (pathname === "/" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    }
  }, [pathname]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          <Image
            src={logoImg}
            width={300}
            height={300}
            className={styles.logoIcon}
            alt="neo"
          />
        </Link>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.mobileOpen : ""}`}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li
                key={item.label}
                className={styles.navItem}
                onClick={() => handleNavClick(item)}
              >
                <span className={styles.navLabel}>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown className={styles.dropdownIcon} size={13} />
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <div
            className={styles.themeToggle}
            role="group"
            aria-label="Theme toggle"
          >
            <button
              type="button"
              className={`${styles.themeOption} ${
                theme === "dark" ? styles.active : ""
              }`}
              onClick={theme === "light" ? toggleTheme : undefined}
              aria-label="Switch to dark mode"
            >
              <Moon size={14} />
            </button>
            <button
              type="button"
              className={`${styles.themeOption} ${
                theme === "light" ? styles.active : ""
              }`}
              onClick={theme === "dark" ? toggleTheme : undefined}
              aria-label="Switch to light mode"
            >
              <Sun size={14} />
            </button>
          </div>
          <button
            className={styles.mobileMenuToggle}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
