import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Journey from "@/components/Journey/Journey";
import styles from "./page.module.scss";

export const metadata = {
  title: "Terms and Conditions | Neo Heights",
  description:
    "Read the terms and conditions governing your use of the Neo Heights website.",
};

const sections = [
  {
    title: "Use of Website",
    content: [
      {
        type: "paragraph",
        text: "The Website is provided for general information and business purposes related to NeoHeights' services, products, capabilities, and overview.",
      },
      {
        type: "paragraph",
        text: "You agree to use the Website only for lawful purposes and in a manner that does not infringe the rights of, restrict or inhibit the use of the Website by any third party.",
      },
      {
        type: "paragraph",
        text: "Unauthorized use of this Website may give rise to a claim for damages and/or be a criminal offence.",
      },
    ],
  },
  {
    title: "No Offer or Contractual Obligation",
    content: [
      {
        type: "paragraph",
        text: "Content on this Website does not constitute an offer, bid, tender, or legally-binding commitment by NeoHeights. Any information, figures or claims represented by NeoHeights are indicative only and are subject to change without notice.",
      },
      {
        type: "paragraph",
        text: "NeoHeights reserves the right to modify, suspend, or withdraw any content or service described on this Website without prior notice.",
      },
    ],
  },
  {
    title: "Intellectual Property Rights",
    content: [
      {
        type: "paragraph",
        text: "All content on this Website, including but not limited to text, graphics, images, codes, drawings, logos, trademarks, designs, layouts, and intellectual property are the exclusive property of NeoHeights or its licensed partners.",
      },
      {
        type: "paragraph",
        text: "No part of this Website may be copied, reproduced, amended, posted, transmitted, stored or distributed in any form without prior written permission from NeoHeights.",
      },
    ],
  },
  {
    title: "Accuracy of Information",
    content: [
      {
        type: "paragraph",
        text: 'While NeoHeights makes reasonable efforts to ensure the accuracy of information on this Website, the content is provided on an "as is" and "as available" basis, without representations or warranties of any kind, express or implied.',
      },
      {
        type: "paragraph",
        text: "NeoHeights does not warrant that the Website will be uninterrupted, error-free, or free of viruses or other harmful components.",
      },
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      {
        type: "paragraph",
        text: "To the fullest extent permitted by applicable law, NeoHeights shall not be liable for any indirect, incidental, consequential, special or punitive damages, including:",
      },
      {
        type: "bullets",
        items: [
          "Loss of revenue or profits experienced by the client",
          "Reliance on information available on the Website",
          "Any interruption to our business",
          "Any loss arising from the use or inability to use this Website",
        ],
      },
      {
        type: "paragraph",
        text: "This limitation applies to whether liability arises in contract, tort, negligence, or otherwise, to the maximum extent permitted by applicable law.",
      },
    ],
  },
  {
    title: "Third-Party Links",
    content: [
      {
        type: "paragraph",
        text: "This Website may contain links to third-party websites for convenience or reference. NeoHeights does not control, endorse, or assume responsibility for the content, accuracy, or practices of any third-party website. Accessing such links is at your own risk.",
      },
    ],
  },
  {
    title: "Confidential Information",
    content: [
      {
        type: "paragraph",
        text: "Any information shared with NeoHeights through this Website shall be deemed non-confidential unless otherwise agreed in a separate written agreement signed by an authorised representative of NeoHeights.",
      },
      {
        type: "paragraph",
        text: "NeoHeights may use or share such information without restriction, unless the law requires otherwise.",
      },
    ],
  },
  {
    title: "User Submissions",
    content: [
      {
        type: "paragraph",
        text: "You agree to submit only accurate, complete, and lawful content through any forms on this Website. You do not claim any copyright or other proprietary rights in any submission made to NeoHeights via this Website.",
      },
      {
        type: "paragraph",
        text: "NeoHeights reserves the right to remove, edit, or disregard any submission at its discretion.",
      },
    ],
  },
  {
    title: "Indemnity",
    content: [
      {
        type: "paragraph",
        text: "You agree to indemnify and hold NeoHeights, its directors, employees, partners, and affiliates free and harmless against any claims, damages, losses, expenses, or costs (including legal fees) arising from your use or misuse of this Website or breach of these Terms.",
      },
    ],
  },
  {
    title: "Privacy",
    content: [
      {
        type: "paragraph",
        text: "Use of this Website is also governed by our Privacy Policy, which outlines how personal information is collected, used, and processed. By using this Website, you consent to the practices described in the Privacy Policy.",
      },
    ],
  },
  {
    title: "Governing Law and Jurisdiction",
    content: [
      {
        type: "paragraph",
        text: "These Terms and Conditions are governed in accordance with the laws of India. The courts having jurisdiction at Bengaluru, Karnataka, India shall have exclusive jurisdiction over any dispute arising from these Terms and Conditions.",
      },
    ],
  },
  {
    title: "Amendments",
    content: [
      {
        type: "paragraph",
        text: "NeoHeights reserves the right to update or revise these Terms at any time without prior notice. Continued use of the Website following such amendments constitutes your acceptance of the revised Terms.",
      },
    ],
  },
  {
    title: "Contact Information",
    content: [
      {
        type: "paragraph",
        text: "If you have any questions regarding these Terms and Conditions, please reach out to us:",
      },
      {
        type: "contact",
        items: [
          { label: "Email", value: "ceo@neoheights.com, marketing@neoheights.com" },
          { label: "Contact", value: "+91 87546 05666, +91 99402 17718" },
          { label: "Website", value: "www.neoheights.com" },
        ],
      },
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main>
      <Header />

      <div className={styles.pageWrapper}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.eyebrow}>TERMS AND CONDITIONS</span>
            <h1 className={styles.heading}>Terms and Conditions</h1>
            <p className={styles.lastUpdated}>Last updated: May 2025</p>
          </div>
        </section>

        {/* Content */}
        <div className={styles.contentWrapper}>
          <div className={styles.intro}>
            <p>
              Welcome to NeoHeights (the &ldquo;Website&rdquo;). The Website is owned and
              operated by NeoHeights (&ldquo;NeoHeights&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By
              accessing and using this Website, you agree to these Terms and
              Conditions in their entirety. If you do not agree with these Terms,
              please discontinue use of the Website immediately.
            </p>
          </div>

          <div className={styles.sections}>
            {sections.map((section, idx) => (
              <div key={idx} className={styles.section}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>{idx + 1}.</span>{" "}
                  {section.title}
                </h2>
                <div className={styles.sectionBody}>
                  {section.content.map((block, bIdx) => {
                    if (block.type === "paragraph") {
                      return (
                        <p key={bIdx} className={styles.paragraph}>
                          {block.text}
                        </p>
                      );
                    }
                    if (block.type === "bullets") {
                      return (
                        <ul key={bIdx} className={styles.bulletList}>
                          {block.items.map((item, iIdx) => (
                            <li key={iIdx}>{item}</li>
                          ))}
                        </ul>
                      );
                    }
                    if (block.type === "contact") {
                      return (
                        <ul key={bIdx} className={styles.contactList}>
                          {block.items.map((item, iIdx) => (
                            <li key={iIdx}>
                              <span className={styles.contactLabel}>
                                {item.label}:
                              </span>{" "}
                              {item.value}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer showTopStrip />
    </main>
  );
}
