"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Factory,
  Building2,
  Box,
  Zap,
  TreePine,
  Sparkles,
  HardHat,
} from "lucide-react";
import { services } from "@/data/services";
import styles from "./ServiceTabs.module.scss";

const iconMap = {
  Factory,
  Building2,
  Box,
  Zap,
  TreePine,
  Sparkles,
  HardHat,
};

export default function ServiceTabs() {
  const pathname = usePathname();

  return (
    <section className={styles.tabsSection}>
      <div className={styles.container}>
        <div className={styles.tabsScroller}>
          <div className={styles.tabsRow}>
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              const href = `/services/${service.slug}`;
              const isActive = pathname === href;

              return (
                <Link
                  key={service.slug}
                  href={href}
                  className={`${styles.tab} ${isActive ? styles.active : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className={styles.iconWrap}>
                    {Icon ? <Icon size={20} strokeWidth={1.6} /> : null}
                  </span>
                  <span className={styles.label}>{service.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
