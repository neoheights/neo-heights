"use client";

import React from 'react';
import SectionText from '../SectionText/SectionText';
import styles from './Services.module.scss';
import Image from 'next/image';

const Services = () => {
    // Extended list of services for the infinite scroll
    const services = [
        {
            title: "Civil Engineering",
            image: require('@/assets/images/services/service1.jpg'),
        },
        {
            title: "Pre-Engineering Building",
            image: require('@/assets/images/services/service2.jpg'),
        },
        {
            title: "Commercial Interiors",
            image: require('@/assets/images/services/service3.jpg'),
        },
        {
            title: "MEP",
            image: require('@/assets/images/services/service4.jpg'),
        },
        {
            title: "Land Development",
            image: require('@/assets/images/services/service5.jpg'),
        },
        {
            title: "GC PROJECTS",
            image: require('@/assets/images/services/service6.jpg'),
        },
        {
            title: "EPC CONTRACTOR",
            image: require('@/assets/images/services/service7.png'),
        },
        {
            title: "Civil Engineering",
            image: require('@/assets/images/services/service8.jpg'),
        },
        {
            title: "Pre Engineering Building",
            image: require('@/assets/images/services/service9.jpg'),
        },
        {
            title: "Land Development",
            image: require('@/assets/images/services/service10.jpg'),
        },
        {
            title: "GC PROJECTS",
            image: require('@/assets/images/services/service11.png'),
        },
        {
            title: "EPC CONTRACTOR",
            image: require('@/assets/images/services/service12.png'),
        },
    ];

    // Duplicate the list to ensure seamless scrolling
    const scrollItems = [...services, ...services];

    return (
        <section className={styles.servicesSection} id="services">
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
                            <Image src={service.image} alt={service.title} className={styles.cardImage} width={1000} height={1000} />
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
