import BlogPost from "@/components/BlogPost/BlogPost";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function GoldPlatinumBlog() {
  const blogData = {
    title: "Gold & Platinum Rated Buildings: Key Considerations in EPC Construction",
    subtitle: "Globally, developers are focusing on high-performance buildings that lower environmental impact and improve efficiency.",
    heroImage: require("@/assets/images/blogs/gold_blog.jpg"), // Using existing image from project
    date: "FeB 08, 2026",
    category: "CONSTRUCTION",
    tableOfContents: [
      "Integrated Design from the Start",
      "Smart Material Selection",
      "Energy & Water Efficiency as Core Priorities",
      "Execution Quality & Documentation",
      "Long-Term Value Creation"
    ],
    content: {
      introTitle: 'Gold & Platinum Rated Buildings: Key Considerations in EPC Construction',
      tags: [],
      intro: [
        "As sustainability becomes central to modern infrastructure, Gold and Platinum rated green buildings are no longer optional add-ons—they are smart, future-ready investments. Across the globe and in rapidly growing markets like India, developers and organizations are prioritizing high-performance buildings that reduce environmental impact while enhancing operational efficiency.",
        "For EPC (Engineering, Procurement & Construction) projects, achieving these advanced green certifications—such as LEED (Leadership in Energy and Environmental Design) or IGBC (Indian Green Building Council)—requires careful planning, integrated execution, and a strong commitment to sustainability from the earliest stages."
      ],
      sections: [
        {
          title: "Integrated Design from the Start",
          sectionContent: [
            {
              type: "scroll-images",
              content: [
                require("@/assets/images/blogs/goldBlog/step_1_1.png"),
                require("@/assets/images/blogs/goldBlog/step_1_2.png"),
                require("@/assets/images/blogs/goldBlog/step_1_3.png"),
              ]
            },
            {
              type: "paragraph",
              content: "Green ratings are won—or lost—at the design stage. High-performance buildings depend on a well-coordinated strategy that integrates architecture, structural engineering, and MEP (Mechanical, Electrical, and Plumbing) systems from the beginning."
            },
            {
              type: "paragraph",
              content: "In EPC construction, early collaboration between stakeholders ensures:"
            },
            {
              type: "bullet-points",
              content: [
                "Accurate energy modeling and simulation",
                "Daylight and ventilation optimization",
                "Efficient HVAC system design",
                "Smart water and waste management planning",
              ]
            },
            {
              type: "paragraph",
              content: "By aligning design and execution teams early, EPC contractors can reduce rework, optimize costs, and ensure sustainability targets are realistic and achievable. This integrated approach also improves lifecycle performance and project timelines."
            }
          ],
        },
        {
          title: "Smart Material Selection",
          sectionContent: [
            {
              type: "paragraph",
              content: "Material choice plays a critical role in achieving Gold and Platinum certification. Sustainable construction materials must meet environmental, structural, and economic criteria."
            },
            {
              type: "paragraph",
              content: "Key considerations include:"
            },
            {
              type: "bullet-points",
              content: [
                "Low embodied carbon and recycled content",
                "Locally sourced and regionally manufactured materials",
                "Durability and lifecycle performance",
                "Compliance with green building standards"
              ]
            },
            {
              type: "paragraph",
              content: "EPC teams must strike the right balance between sustainability goals and real-world challenges such as availability, cost, and project timelines. Strategic procurement ensures materials meet both performance and certification requirements without compromising project efficiency."
            }
          ],
        },
        {
          title: "Energy & Water Efficiency as Core Priorities",
          sectionContent: [
            {
              type: "paragraph",
              content: "Energy and water efficiency are fundamental to high-rated green buildings. These systems not only reduce environmental impact but also significantly lower operating costs over time."
            },
            {
              type: "paragraph",
              content: "Critical EPC considerations include:"
            },
            {
              type: "bullet-points",
              content: [
                "Solar power integration and renewable energy strategies",
                "High-efficiency HVAC and lighting systems",
                "Rainwater harvesting and stormwater management",
                "Wastewater treatment and reuse",
                "Smart metering and building automation"
              ]
            },
            {
              type: "paragraph",
              content: "Precision in design, procurement, and installation is essential to ensure long-term performance and sustainability outcomes."
            }
          ],
        },
        {
          title: "Execution Quality & Documentation",
          sectionContent: [
            {
              type: "scroll-images",
              content: [
                require("@/assets/images/blogs/goldBlog/step_1_1.png"),
                require("@/assets/images/blogs/goldBlog/step_4_2.jpg"),
                require("@/assets/images/blogs/goldBlog/step_4_3.jpg"),
              ]
            },
            {
              type: "paragraph",
              content: "As technology and innovation continue to evolve, sustainability will play an even greater role in shaping the future of civil construction. From energy-efficient designs and advanced construction methods to data-driven planning and green materials, the industry is moving toward smarter, more responsible building solutions. Organizations that embed sustainability into their processes today will lead the way in creating healthier cities and stronger communities tomorrow."
            }
          ],
        },
        {
          title: "Long-Term Value Creation",
          sectionContent: [
            {
              type: "paragraph",
              content: "While Gold and Platinum rated buildings may require higher upfront planning and coordination, they deliver significant long-term benefits:"
            },
            {
              type: "bullet-points",
              content: [
                "Reduced operational and maintenance costs",
                "Improved indoor air quality and occupant health",
                "Enhanced asset value and market competitiveness",
                "Stronger brand positioning and ESG compliance",
                "Future readiness against regulatory and environmental changes"
              ]
            },
            {
              type: "paragraph",
              content: "For developers and organizations, these buildings represent a strategic investment that aligns profitability with sustainability."
            }
          ],
        }
      ]
    },
    quote: {
      text: "EPC construction to Gold or Platinum standards means delivering efficient, resilient infrastructure. Every stage, from design to execution, is crucial for sustainability excellence."
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
