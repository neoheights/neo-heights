"use client";

import React from 'react';
import SectionText from '../SectionText/SectionText';
import styles from './Services.module.scss';

const Services = () => {
    // Extended list of services for the infinite scroll
    const services = [
        {
            title: "Civil Engineering",
            image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Pre-Engineering Building",
            image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Commercial Interiors",
            image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "MEP",
            image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Industrial Construction",
            image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Warehousing Solutions",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Infrastructure",
            image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    // Duplicate the list to ensure seamless scrolling
    const scrollItems = [...services, ...services];

    return (
        <section className={styles.servicesSection}>
            <div className={`container ${styles.container}`}>
                <SectionText 
                    smallTitle="OUR SERVICES"
                    title="Exceptional Services That Break Barriers and Exceed Expectations"
                    buttonLabel="Explore All"
                    onButtonClick={() => {}}
                    align="center"
                />
            </div>

            {/* Full width scrolling container */}
            <div className={styles.scrollContainer}>
                <div className={styles.scrollTrack}>
                    {scrollItems.map((service, index) => (
                        <div key={index} className={styles.serviceCard}>
                            <img src={service.image} alt={service.title} className={styles.cardImage} />
                            <div className={styles.overlay}>
                                <span>{service.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
