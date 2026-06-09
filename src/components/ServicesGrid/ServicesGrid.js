import Image from "next/image";
import Link from "next/link";
import styles from "./ServicesGrid.module.scss";
import { services } from "@/data/services";

export default function ServicesGrid() {
  return (
    <section className={styles.servicesGrid}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={styles.card}
              aria-label={`View ${service.name} service`}
            >
              <Image
                src={service.image}
                alt={service.name}
                className={styles.cardImage}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className={styles.overlay}>
                <span className={styles.cardTitle}>{service.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
