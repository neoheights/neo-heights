import React from 'react';
import styles from './FeatureCard.module.scss';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const FeatureCard = ({ stat, title, description, category, subItems, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        {/* Default Content */}
        <div className={styles.defaultContent}>
          <div className={styles.top}>
            <h3 className={styles.stat}>{stat}</h3>
            <p className={styles.description}>{description}</p>
          </div>


          <div className={styles.bottom}>
            <h5 className={styles.category}>{category}</h5>
            <div className={styles.divider}></div>
            {subItems && (
              <ul className={styles.subItems}>
                {subItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Hover Content */}
        <div className={styles.hoverContent}>
          <span className={styles.hoverTitle}>{title}</span>
          <Image
            src={image}
            alt="bg-image"
            width={1000}
            height={1000}
            className={styles.bgImage}
          />
          <button className={styles.knowMoreBtn}>
            Know More
            {/* <ArrowRight size={16} /> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
