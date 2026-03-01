import BlogPost from "@/components/BlogPost/BlogPost";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function GoldPlatinumBlog() {
  const blogData = {
    title: "Gold & Platinum Rated Buildings: Key Considerations in EPC Construction",
    subtitle: "A comprehensive look at high-performance building standards and how they influence EPC construction.",
    heroImage: require("@/assets/images/blogs/material.png"), // Using existing image
    date: "FEB 24, 2026",
    category: "CONSTRUCTION",
    tableOfContents: [
      "Integrated Design from the Start",
      "Smart Material Selection",
      "Energy & Water Efficiency as Core Priorities",
      "Execution Quality & Documentation",
      "Long-Term Value Creation"
    ],
    content: {
      intro: "In today's construction landscape, achieving Gold or Platinum certification isn't just a badge of honor—it's a commitment to building a sustainable future. High-performance buildings require a holistic approach where every decision from design to execution is optimized for efficiency and environmental impact.",
      tags: ["EPC Construction", "Sustainable Design", "Gold Rating", "Platinum Rating", "Building Efficiency"],
      // sections: [
      //   {
      //     title: "Integrated Design from the Start",
      //     text: "The foundation of a high-performance building is laid long before the first brick is placed. Integrated design involves all stakeholders—architects, engineers, and contractors—working together from day one to ensure that sustainability goals are woven into every aspect of the project.",
      //     image: require("@/assets/images/blogs/sustainable.png"),
      //     imageCaption: "Integrated design process ensures seamless sustainability implementation."
      //   },
      //   {
      //     title: "Smart Material Selection",
      //     text: "Choosing the right materials is crucial for meeting Gold and Platinum standards. This includes sourcing local materials to reduce transportation emissions, using recycled content, and selecting non-toxic materials that improve indoor air quality.",
      //     list: [
      //       { label: "Locally Sourced", value: "Reducing carbon footprint through shorter transportation distances." },
      //       { label: "Recycled Content", value: "Using materials with a high percentage of post-consumer or post-industrial waste." },
      //       { label: "Low-VOC Materials", value: "Ensuring healthy indoor environments for occupants." }
      //     ]
      //   },
      //   {
      //     title: "Energy & Water Efficiency as Core Priorities",
      //     text: "Gold and Platinum buildings are characterized by their superior energy and water performance. This is achieved through high-efficiency HVAC systems, LED lighting, smart building controls, and advanced water conservation technologies like greywater recycling and rainwater harvesting."
      //   },
      //   {
      //     title: "Execution Quality & Documentation",
      //     text: "In EPC (Engineering, Procurement, and Construction), the quality of execution is just as important as the design. Rigorous quality control and meticulous documentation are required to prove that the building meets the stringent requirements for high-level certification.",
      //     image: require("@/assets/images/blogs/quality.png"),
      //     imageCaption: "Meticulous execution is key to achieving top-tier sustainability ratings."
      //   },
      //   {
      //     title: "Long-Term Value Creation",
      //     text: "While the initial investment in Gold or Platinum certification may be higher, the long-term benefits are substantial. These buildings have lower operating costs, higher resale values, and provide a healthier, more productive environment for occupants."
      //   }
      // ]
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
