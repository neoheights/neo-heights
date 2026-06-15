import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionText from "@/components/SectionText/SectionText";
import styles from "./SustainabilityBlogs.module.scss";
import sustainableImg from "@/assets/images/blogs/sustainable.png";
import materialImg from "@/assets/images/blogs/material.png";
import qualityImg from "@/assets/images/blogs/quality.png";

const blogs = [
  {
    category: "SUSTAINABLE CONSTRUCTIONS",
    title: "Sustainable Construction Building Smarter and Greener",
    image: sustainableImg,
    slug: "sustainability-in-civil-construction",
  },
  {
    category: "MATERIALS",
    title:
      "Important factors every homeowner should know from design planning and material selection to approvals and timelines.",
    image: materialImg,
    slug: "gold-and-platinum-rated-buildings",
  },
  {
    category: "SAFETY & QUALITY",
    title:
      "Discover best practices, safety standards, and quality checks that protect workers.",
    image: qualityImg,
    slug: "",
  },
];

const SustainabilityBlogs = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <SectionText
          title="Featured Blogs"
          align="left"
          description="Explore our insights, R&D findings, and comments on industry trends. How does business goals influence product development cost, what's the thin line of ethical AI usage, when is digital transformation non-negotiable — explore in detail through our insights."
        />

        <div className={styles.blogGrid}>
          {blogs.map((blog) => (
            <Link
              href={blog.slug ? `/blogs/${blog.slug}` : ""}
              key={blog.title}
              className={styles.blogCard}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className={styles.blogImage}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className={styles.overlay}>
                <div className={styles.topContent}>
                  <span className={styles.category}>{blog.category}</span>
                  <span className={styles.categoryDecor} />
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

export default SustainabilityBlogs;
