"use client";

import React from 'react';
import styles from './BlogPost.module.scss';
import Image from 'next/image';

const BlogPost = ({
  title,
  subtitle,
  heroImage,
  date,
  category,
  tableOfContents,
  content,
  quote
}) => {
  return (
    <article className={styles.blogPost}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.backgourndBlack}></div>
        <div className={styles.heroOverlay}>
          <div className={styles.container}>
            <div className={styles.heroContentTopContent}>
              <div className={styles.breadcrumb}>
                <span>Home</span>
                <span>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.25 16.5L13.75 11L8.25 5.5" stroke="#D2D5DB" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
                <span> Blogs</span>
              </div>
              <div className={styles.heroContent}>
                <h1 className={styles.mainTitle}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
              </div>
            </div>
            <div className={styles.heroMeta}>
              {date} | {category}
            </div>
          </div>
        </div>
        <div className={styles.heroImageContainer}>
          {heroImage && <Image src={heroImage} alt={title} fill priority className={styles.heroImage} />}
        </div>
      </section>

      <div className={styles.container}>
        <div className={styles.mainLayout}>
          {/* Left Sidebar - Table of Contents */}
          <div className={styles.sidebar}>
            <div className={styles.tocWrapper}>
              <h4 className={styles.tocTitle}>Table of Contents</h4>
              <ul className={styles.tocList}>
                {tableOfContents?.map((item, index) => (
                  <li key={index} className={styles.tocItem}>
                    <a href={`#section-${index}`}>
                      <span>
                        {index + 1}.
                      </span>
                      <p>
                        {item}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.connectWrapper}>
              <div className={styles.connectWrapperText}>
                <h4 className={styles.connectTitle}>Let's connect</h4>
                <p className={styles.connectText}>
                  Please reach out to us at <a href="mailto:arun@arulgroups.com">arun@arulgroups.com</a>
                </p>
              </div>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialIcon}>
                  <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.76826 7.65176L8.19934 5.18991H5.50402V3.59234C5.50402 2.91883 5.88053 2.26232 7.08768 2.26232H8.31302V0.166319C8.31302 0.166319 7.20106 0 6.13791 0C3.91823 0 2.46735 1.17911 2.46735 3.31364V5.18991H0V7.65176H2.46735V13.6031H5.50402V7.65176H7.76826Z" fill="white" />
                  </svg>
                </a>
                <a href="#" className={styles.socialIcon}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.92687 0H10.6659L6.86758 4.80142L11.3359 11.3359H7.8381L5.09649 7.37381L1.96322 11.3359H0.221694L4.28361 6.19934L0 0H3.58651L6.06209 3.62151L8.92687 0ZM8.31598 10.186H9.27911L3.06184 1.08999H2.02727L8.31598 10.186Z" fill="white" />
                  </svg>
                </a>
                <a href="#" className={styles.socialIcon}>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.70659 12.0917H0.199728V4.01868H2.70659V12.0917ZM1.45181 2.91745C0.650197 2.91745 0 2.25347 0 1.45184C5.7376e-09 1.06679 0.152958 0.697508 0.425225 0.425235C0.697492 0.152961 1.06677 0 1.45181 0C1.83685 0 2.20613 0.152961 2.47839 0.425235C2.75066 0.697508 2.90362 1.06679 2.90362 1.45184C2.90362 2.25347 2.25315 2.91745 1.45181 2.91745ZM12.089 12.0917H9.5875V8.16179C9.5875 7.2252 9.56861 6.02411 8.28414 6.02411C6.98078 6.02411 6.78105 7.04166 6.78105 8.09431V12.0917H4.27689V4.01868H6.68119V5.11991H6.71627C7.05095 4.48562 7.86849 3.81625 9.08818 3.81625C11.6253 3.81625 12.0917 5.48699 12.0917 7.65706V12.0917H12.089Z" fill="white" />
                  </svg>
                </a>
                <a href="#" className={styles.socialIcon}>
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3189 1.41895C13.1624 0.860421 12.7015 0.42054 12.1162 0.27126C11.0554 0 6.80156 0 6.80156 0C6.80156 0 2.54777 0 1.48691 0.27126C0.901646 0.420563 0.440698 0.860421 0.28425 1.41895C0 2.43132 0 4.54354 0 4.54354C0 4.54354 0 6.65575 0.28425 7.66812C0.440698 8.22666 0.901646 8.64821 1.48691 8.79749C2.54777 9.06875 6.80156 9.06875 6.80156 9.06875C6.80156 9.06875 11.0554 9.06875 12.1162 8.79749C12.7015 8.64821 13.1624 8.22666 13.3189 7.66812C13.6031 6.65575 13.6031 4.54354 13.6031 4.54354C13.6031 4.54354 13.6031 2.43132 13.3189 1.41895ZM5.41032 6.46127V2.6258L8.96567 4.54359L5.41032 6.46127Z" fill="white" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className={styles.contentArea}>
            <div className={styles.introTitleText}>
              {content?.introTitle}
            </div>

            {/* Tags/Categories */}
            <div className={styles.tags}>
              {content?.tags?.map((tag, index) => (
                <span key={index} className={styles.tag}>{tag}</span>
              ))}
            </div>

            <div className={styles.introText}>
              {content?.intro}
            </div>

            {/* Sections */}
            {content?.sections?.map((section, index) => (
              <section
                key={index}
                id={`section-${index}`}
                className={styles.contentSection}
              >
                {/* Title */}
                {section.title && (
                  <h2 className={styles.sectionTitle}>
                    {index + 1}. {section.title}
                  </h2>
                )}

                <div className={styles.sectionBody}>
                  {Object.keys(section).map((key) => {
                    const value = section[key];

                    switch (key) {
                      case "text":
                        return (
                          <div key={key} className={styles.sectionTextWrapper}>
                            {(Array.isArray(value) ? value : [value]).map(
                              (paragraph, i) => (
                                <p key={i} className={styles.sectionText}>
                                  {paragraph}
                                </p>
                              )
                            )}
                          </div>
                        );

                      case "image":
                        return (
                          value && (
                            <div key={key} className={styles.sectionImageWrapper}>
                              <Image
                                src={value}
                                alt={section.title || "section image"}
                                width={1000}
                                height={1000}
                                className={styles.sectionImage}
                              />
                              {section.imageCaption && (
                                <span className={styles.imageCaption}>
                                  {section.imageCaption}
                                </span>
                              )}
                            </div>
                          )
                        );

                      case "list":
                        return (
                          value && (
                            <ul key={key} className={styles.sectionList}>
                              {value.map((item, i) => (
                                <li key={i} className={styles.sectionListItem}>
                                  <span>
                                    <svg width="22" height="34" viewBox="0 0 22 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M8.25 22.5L13.75 17L8.25 11.5" stroke="#F68121" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                  </span>
                                  <div className={styles.listItemContent}>
                                    <p>{item.label}</p>
                                    <p>{item.value}</p>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          )
                        );

                      default:
                        return null;
                    }
                  })}
                </div>
              </section>
            ))}

            {/* Quote Section */}
            {quote && (
              <div className={styles.quoteWrapper}>
                <p>
                  <span>
                    <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M29.7283 12.3836H21.7964C23.6985 17.9381 28.4031 20.2044 28.4031 20.2044V25C19.5654 21.5115 17.3449 12.3836 17.3449 12.3836V6.19182V0H29.7285V12.3836H29.7283Z" fill="#F68121" />
                      <path d="M12.3838 0V12.3836H4.45163C6.35377 17.9381 11.0583 20.2044 11.0583 20.2044V25C2.22065 21.5115 0.000150681 12.3836 0.000150681 12.3836V6.19182V0H12.3838Z" fill="#F68121" />
                    </svg>
                  </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{quote.text}
                  <span>
                    <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.000185696 12.3836H7.25873C5.51808 17.9381 1.21292 20.2044 1.21292 20.2044V25C9.30031 21.5115 11.3323 12.3836 11.3323 12.3836V6.19182V0H0V12.3836H0.000185696Z" fill="#F68121" />
                      <path d="M15.8721 0V12.3836H23.1308C21.3902 17.9381 17.085 20.2044 17.085 20.2044V25C25.1724 21.5115 27.2044 12.3836 27.2044 12.3836V6.19182V0H15.8721Z" fill="#F68121" />
                    </svg>
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
