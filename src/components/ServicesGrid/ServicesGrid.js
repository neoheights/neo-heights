import Image from "next/image";
import styles from "./ServicesGrid.module.scss";
import service1 from "@/assets/images/services/service1.jpg";
import service2 from "@/assets/images/services/service2.jpg";
import service3 from "@/assets/images/services/service3.jpg";
import service4 from "@/assets/images/services/service4.jpg";
import service5 from "@/assets/images/services/service5.jpg";
import service6 from "@/assets/images/services/service6.jpg";
import service7 from "@/assets/images/services/service7.png";

const services = [
  { title: "Civil Engineering", image: service1 },
  { title: "Pre Engineering Building", image: service2 },
  { title: "Commercial Interiors", image: service3 },
  { title: "MEP", image: service4 },
  { title: "Land Development", image: service5 },
  { title: "GC Projects", image: service6 },
  { title: "EPC Contractor", image: service7 },
];

export default function ServicesGrid() {
  return (
    <section className={styles.servicesGrid}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.title} className={styles.card}>
              <Image
                src={service.image}
                alt={service.title}
                className={styles.cardImage}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className={styles.overlay}>
                <span className={styles.cardTitle}>{service.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
