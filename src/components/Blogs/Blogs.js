"use client";

import React from 'react';
import SectionText from '../SectionText/SectionText';
import { ArrowRight } from 'lucide-react';
import styles from './Blogs.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Blogs = () => {
    const blogs = [
        {
            category: "SUSTAINABLE CONSTRUCTIONS",
            title: "Sustainable Construction Building Smarter and Greener",
            image: require('@/assets/images/blogs/sustainable.png'),
            slug: "sustainability-in-civil-construction"
        },
        {
            category: "MATERIALS",
            title: "Important factors every homeowner should know from design planning and material selection to approvals and timelines.",
            image: require('@/assets/images/blogs/material.png'),
            slug: ""
            // slug: "gold-and-platinum-rated-buildings"
        },
        {
            category: "SAFETY & QUALITY",
            title: "Discover best practices, safety standards, and quality checks that protect workers .",
            image: require('@/assets/images/blogs/quality.png'),
            slug: ""
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
                        <Link href={blog.slug ? `/blogs/${blog.slug}` : ""} key={index} className={styles.blogCard}>
                            <div className={styles.imageContainer}>
                                <Image width={1000} height={1000} src={blog.image} alt={blog.title} className={styles.blogImage} />
                            </div>
                            <div className={styles.overlay}>
                                <div className={styles.topContent}>
                                    <span className={styles.category}>{blog.category}</span>
                                    <span className={styles.categoryDecor}></span>
                                </div>

                                <h3 className={styles.blogTitle}>{blog.title}</h3>

                                <div className={styles.knowMoreLink}>
                                    KNOW MORE <ArrowRight size={16} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
