"use client"

import BlogPost from "@/components/BlogPost/BlogPost";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function SustainabilityBlog() {
  const blogData = {
    title: "Sustainability in Civil Construction",
    subtitle: "How sustainability is shaping the future of civil construction.",
    heroImage: require("@/assets/images/blogs/blog1.jpg"), // Using existing image from project
    date: "FEB 24, 2026",
    category: "CONSTRUCTION",
    tableOfContents: [
      "Introduction to Sustainable Civil Construction",
      "Why Sustainability Matters in Today's Construction Industry",
      "Building with Purpose: A Long-Term Vision",
      "The Future of Sustainability in Civil Construction"
    ],
    content: {
      introTitle: 'How sustainability is shaping the future of civil construction.',
      tags: ["Sustainable Construction", "Green Building", "Infrastructure Development", "Energy Efficient Design", "Smart Engineering"],
      intro: ["Sustainability in civil construction is no longer just about following guidelines—it’s about making thoughtful decisions that balance performance, responsibility, and long-term value. As the construction industry continues to shape modern cities and infrastructure, responsible building has become essential to creating spaces that serve both people and the planet."],
      sections: [
        {
          title: "Introduction to Sustainable Civil Construction",
          sectionContent: [
            {
              type: "paragraph",
              content: "Sustainability in civil construction involves integrating environmental, social, and economic considerations into the design, construction, and operation of built environments. It's about meeting the needs of the present without compromising the ability of future generations to meet their own."
            },
            {
              type: "paragraph",
              content: "The Tangible Benefits Sustainable construction practices help reduce energy and water consumption, lower long-term operating costs, and minimize material waste. Smart designs, efficient systems, and eco-friendly materials not only save money over a building’s life cycle but also improve overall project efficiency and asset value."
            },
            {
              type: "paragraph",
              content: "The Intangible Benefits Beyond numbers and materials, sustainability creates a positive impact that lasts. It reduces environmental harm, lowers carbon emissions, and helps preserve natural resources for future generations. It also strengthens a company’s reputation—clients, partners, and communities increasingly trust and prefer builders who act responsibly. Most importantly, sustainable buildings offer healthier, more comfortable spaces for people."
            },
            {
              type: "paragraph",
              content: "At its core, sustainable civil construction is about building with purpose creating infrastructure that performs well today while caring for tomorrow."
            }
          ],
        },
        {
          title: "Why Sustainability Matters in Today’s Construction Industry",
          sectionContent: [
            {
              type: "list",
              content: [
                { label: "Rising Resource Demand", value: "The construction industry is one of the largest consumers of energy, water, and raw materials. Sustainable practices help optimize resource usage, reduce dependency on non-renewable materials, and ensure responsible consumption as urban development continues to grow." },
                { label: "Environmental Responsibility", value: "Construction activities contribute substantially to carbon emissions and environmental degradation. Sustainable construction reduces emissions, minimizes waste, and protects natural ecosystems, supporting global and local environmental goals." },
                { label: "Changing Client & Regulatory Expectations", value: "Governments, investors, and clients increasingly demand environmentally responsible projects. Sustainability improves compliance, enhances brand credibility, and builds trust with stakeholders who value transparency and long-term impact." }
              ],
            },
            {
              type: "image",
              url: require("@/assets/images/blogs/blog2.png"),
              imageCaption: "Image © Courtesy of Neoheights"
            }
          ],
        },
        {
          title: "Building with Purpose: A Long-Term Vision",
          sectionContent: [
            {
              type: "paragraph",
              content: "Building sustainably means thinking beyond immediate project delivery. Smart designs, efficient systems, and eco-friendly materials contribute to structures that are more resilient, adaptable, and cost-effective over time. Purpose-driven construction improves asset value, enhances user comfort, and ensures infrastructure remains relevant and functional for years to come. Sustainability, in this sense, becomes a strategic investment in longevity and performance."
            }
          ]
        },
        {
          title: "The Future of Sustainability in Civil Construction",
          sectionContent: [
            {
              type: "paragraph",
              content: "The future of sustainability in civil construction is bright and full of potential. As technology and innovation continue to evolve, sustainability will play an even greater role in shaping the future of civil construction. From energy-efficient designs and advanced construction methods to data-driven planning and green materials, the industry is moving toward smarter, more responsible building solutions. Organizations that embed sustainability into their processes today will lead the way in creating healthier cities and stronger communities tomorrow."
            }
          ],
        }
      ]
    },
    quote: {
      text: "Sustainable construction is not just about building structures it's about building a better future for generations to come."
    }
  };

  return (
    <main>
      <Header />
      <BlogPost {...blogData} />
      <Footer />
    </main>
  );
}
