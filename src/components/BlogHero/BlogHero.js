"use client";

import React from 'react';
import styles from './BlogHero.module.scss';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const BlogHero = () => {
  const otherBlogs = [
    {
      title: "Building Excellence Beyond Boundaries and Defying Limits",
      date: "JUNE 27, 2026",
      category: "CONSTRUCTION",
      slug: "sustainability-in-civil-construction"
    },
    {
      title: "Gold & Platinum Rated Buildings: Key Considerations in EPC Construction",
      date: "JUNE 27, 2026",
      category: "CONSTRUCTION",
      slug: "gold-and-platinum-rated-buildings"
    },
    {
      title: "Safety Considerations & Occupational Hazards in EPC Construction in India",
      date: "JUNE 27, 2026",
      category: "CONSTRUCTION",
      slug: "sustainability-in-civil-construction"
    }
  ];

  return (
    <section className={styles.blogHero}>
      <div className="container">
        <div className={styles.breadcrumb}>
          <span>Home</span> &gt; <span className={styles.active}>Blogs</span>
        </div>

        <div className={styles.contentWrapper}>
          {/* Main Featured Blog */}
          <div className={styles.mainBlog}>
            <div className={styles.imageWrapper}>
              {/* Replace with actual image path when available */}
              <div className={styles.placeholderImage}>
                {/* <Image src="/path-to-image.jpg" alt="Featured Blog" fill /> */}
              </div>
            </div>
            <div className={styles.mainBlogDetails}>
              <span className={styles.meta}>JUNE 27, 2026 | CONSTRUCTION</span>
              <h1 className={styles.mainTitle}>Building Excellence Beyond Boundaries and Defying Limits</h1>
              <Link href="/blogs/sustainability-in-civil-construction" className={styles.learnMore}>
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Other Blogs Sidebar */}
          <div className={styles.sidebar}>
            <h2 className={styles.sidebarTitle}>OTHER BLOGS</h2>
            <div className={styles.otherBlogsList}>
              {otherBlogs.map((blog, index) => (
                <Link href={`/blogs/${blog.slug}`} key={index} className={styles.otherBlogItem}>
                  <h3 className={styles.otherBlogTitle}>{blog.title}</h3>
                  <span className={styles.otherBlogMeta}>{blog.date} | {blog.category}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
