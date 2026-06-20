"use client";

import React, { useState } from "react";
import SectionText from "../SectionText/SectionText";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import styles from "./FAQ.module.scss";

const FAQ = ({ showBannerOnly = false, hideCta = false }) => {
  const [openIndex, setOpenIndex] = useState(0); // Default first one open

  const faqs = [
    {
      question: "What services does Neo Heights Construction provide?",
      answer:
        "Neo Heights Construction specializes in residential and commercial construction, including new builds, renovations, structural work, interior finishing, and project management from start to completion.",
    },
    {
      question: "Do you handle both residential and commercial projects?",
      answer:
        "Yes, we handle both residential and commercial projects, with dedicated teams and expertise to deliver high-quality results across all sectors.",
    },
    {
      question: "How do I request a quote or consultation?",
      answer:
        "You can request a quote or consultation by contacting us through our website or by phone. Our team will respond promptly to discuss your project requirements and next steps.",
    },
    {
      question: "Are you licensed and insured?",
      answer:
        "Yes, Neo Heights is a fully licensed and insured construction company, complying with all local and national regulations.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={`container ${styles.container}`}>
        {!showBannerOnly && (
          <div>
            <SectionText
              smallTitle="NEED HELP?"
              title="Frequently asked questions"
              align="center"
              maxWidth="800px"
            />

            <div className={styles.faqList}>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`${styles.faqItem} ${openIndex === index ? styles.active : ""}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className={styles.questionHeader}>
                    <h3>{faq.question}</h3>
                    <span className={styles.icon}>
                      {openIndex === index ? "×" : "+"}
                    </span>
                  </div>
                  <div className={styles.answerBody}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.helpCenterText}>
              <p>
                Still have more questions? Find answers in our{" "}
                <span className={styles.helpBottom}>help center</span> .
              </p>
            </div>
          </div>
        )}

        {!hideCta && (
          <div className={styles.bottomCta}>
            <div className={styles.ctaCard}>
              <h3>
                Your Trusted <br />
                Construction Partner
              </h3>

              <p>
                Whether it’s a new build or renovation, we manage your project
                with <br />
                transparency, efficiency, and uncompromising standards.
              </p>

              <button className={styles.ctaBtn}>
                Start Your Project <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;
