"use client";

import React from 'react';
import SectionText from '../SectionText/SectionText';
import { ArrowRight } from 'lucide-react';
import styles from './Blogs.module.scss';

const Blogs = () => {
    const blogs = [
        {
            category: "SUSTAINABLE CONSTRUCTIONS",
            title: "Sustainable Construction Building Smarter and Greener",
            image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Solar panels/green field
        },
        {
            category: "MATERIALS",
            title: "Important factors every homeowner should know from design planning and material selection to approvals and timelines.",
            image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Modern building/greenery
        },
        {
            category: "SAFETY & QUALITY",
            title: "Discover best practices, safety standards, and quality checks that protect workers .",
            image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Construction worker/concrete
        }
    ];

    return (
        <section className={styles.blogsSection}>
            <div className={`container ${styles.container}`}>
                <SectionText 
                    title="Featured Blogs"
                    align="left"
                    description="Explore our insights, R&D findings, and comments on industry trends. How does business goals influence product development cost, what's the thin line of ethical AI usage, when is digital transformation non-negotiable — explore in detail through our insights."
                    // maxWidth="800px"
                />
                
                <div className={styles.blogGrid}>
                    {blogs.map((blog, index) => (
                        <div key={index} className={styles.blogCard}>
                            <div className={styles.imageContainer}>
                                <img src={blog.image} alt={blog.title} className={styles.blogImage} />
                            </div>
                            <div className={styles.overlay}>
                                <div className={styles.topContent}>
                                    <span className={styles.category}>{blog.category}</span>
                                    <span className={styles.categoryDecor}></span>
                                </div>
                                
                                <h3 className={styles.blogTitle}>{blog.title}</h3>
                                
                                <a href="#" className={styles.knowMoreLink}>
                                    KNOW MORE <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
