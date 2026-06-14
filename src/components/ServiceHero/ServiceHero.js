import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./ServiceHero.module.scss";

export default function ServiceHero({ service }) {
  return (
    <section className={styles.serviceHero}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>{service.eyebrow}</p>
            <h1 className={styles.title}>{service.title}</h1>
            <p className={styles.description}>{service.description}</p>

            <p className={styles.capHeading}>CORE CAPABILITIES</p>
            <ul className={styles.capList}>
              {service.capabilities.map((item) => (
                <li key={item} className={styles.capItem}>
                  <span className={styles.dot} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/contact" className={styles.cta}>
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className={styles.media}>
            <div className={styles.mediaInner}>
              <Image
                src={service.image}
                alt={service.title}
                className={styles.image}
                fill
                sizes="(max-width: 980px) 100vw, 50vw"
                priority
              />
              <div className={styles.imageOverlay} aria-hidden="true" />
              <span className={styles.imageLabel}>{service.imageLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
