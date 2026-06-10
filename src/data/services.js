import service1 from "@/assets/images/services/service1.jpg";
import service2 from "@/assets/images/services/service2.jpg";
import service3 from "@/assets/images/services/service3.jpg";
import service4 from "@/assets/images/services/service4.jpg";
import service5 from "@/assets/images/services/service5.jpg";
import service6 from "@/assets/images/services/service6.jpg";
import service7 from "@/assets/images/services/service7.png";
import indiaImg from "@/assets/images/projects/india.png";
import india2Img from "@/assets/images/projects/india2.jpg";
import tataImg from "@/assets/images/projects/tata.png";
import pebImg from "@/assets/images/projects/peb.png";

export const services = [
  {
    slug: "epc-contractor",
    navLabel: "EPC Contractor",
    icon: "Factory",
    title: "EPC Contractor",
    eyebrow: "FROM CONCEPT TO COMMISSIONING",
    description:
      "As an EPC (Engineering, Procurement & Construction) partner, Neo Heights handles complete project lifecycles — from design and material procurement to construction and commissioning — delivering turnkey solutions with single-point accountability.",
    capabilities: [
      "Engineering design & detailing",
      "Material procurement & supply chain",
      "Construction & site execution",
      "Testing, commissioning & handover",
    ],
    image: service7,
    imageCaption: "EPC Contractor",
  },
  {
    slug: "civil-engineering",
    navLabel: "Civil Construction",
    icon: "Building2",
    title: "Civil Construction",
    eyebrow: "ENGINEERING EVERY FOUNDATION FOR LASTING IMPACT",
    description:
      "From industrial factories to commercial complexes and residential buildings, Neo Heights brings precision engineering and proven execution to every civil construction project. We deliver structures that are built to perform, built to last, and built on time.",
    capabilities: [
      "Industrial & commercial building construction",
      "RCC structures, foundations & structural works",
      "Residential multi-storey buildings",
      "Turnkey civil works for large-scale campuses",
    ],
    image: service1,
    imageCaption: "Civil Engineering",
  },
  {
    slug: "pre-engineering-building",
    navLabel: "PEB Structures",
    icon: "Box",
    title: "PEB Structures",
    eyebrow: "ENGINEERED FOR SPEED, BUILT FOR STRENGTH",
    description:
      "Neo Heights designs and delivers Pre-Engineered Building (PEB) solutions that combine speed, durability, and cost-efficiency. Ideal for warehouses, factories, and large-span structures, our PEB systems are engineered for rapid deployment without compromising on quality.",
    capabilities: [
      "Custom-engineered steel structures",
      "Warehouses, factories & large-span sheds",
      "Faster construction with reduced costs",
      "Corrosion-resistant, durable materials",
    ],
    image: service2,
    imageCaption: "Pre Engineering Building",
    processTitle: "Key Advantages:",
    processDescription: "",
    processSteps: [
      { number: "01", title: "Up to 40% faster construction vs. conventional RCC" },
      { number: "02", title: "Flexible, scalable layouts" },
      { number: "03", title: "Factory-fabricated components for consistent quality" },
      { number: "04", title: "Cost-optimised without compromising structural integrity" },
    ],
    featuredProjects: [
      { title: "SCHAEFFLER INDIA LIMITED", location: "SHOOLAGIRI", image: indiaImg },
      { title: "Faiveley Transport India Pvt Ltd", location: "SHOOLAGIRI", image: pebImg },
    ],
  },
  {
    slug: "mep",
    navLabel: "MEP Systems",
    icon: "Zap",
    title: "MEP Systems",
    eyebrow: "POWERING EFFICIENT & SUSTAINABLE INFRASTRUCTURE",
    description:
      "Our MEP (Mechanical, Electrical & Plumbing) division delivers integrated engineering systems that ensure operational efficiency, safety, and sustainability across industrial and commercial facilities.",
    capabilities: [
      "HVAC design & installation",
      "Electrical systems & power distribution",
      "Plumbing & fire-fighting systems",
      "Building automation & energy efficiency",
    ],
    image: service4,
    imageCaption: "MEP Systems",
    serviceAreas: [
      {
        title: "HVAC",
        description:
          "Air-conditioning (Precision & Comfort Cooling), Humidification, Data Centre cooling, Kitchen & Basement ventilation, Clean Room applications, Industrial Process Cooling, HVAC Commissioning, AHU, Ducts & HVLS Fan installation",
      },
      {
        title: "Fire Protection Systems",
        description:
          "Sprinkler systems, Hydrant systems, Basement water curtain, Extinguisher systems, Water foam monitor & gas bank suppression",
      },
      {
        title: "Industrial Utility Systems",
        description:
          "Compressed air grid, Hot water pipelines, Water Treatment & Sewage Treatment Plants, RO Systems, HSD systems, Special pipelines (Methanol, Nitrogen, Ammonia, LPG)",
      },
      {
        title: "Electrical Works",
        description:
          "Electrical tray and cable laying, Substation works, Cable-to-equipment connections, Lighting systems",
      },
      {
        title: "Third-Party Performance Testing",
        description:
          "Clean Room, Sound & Vibration, Fume Hood, Duct Leakage, Indoor Environmental, Cooling Tower, Air & Water Balancing, Functional Performance, Pre-Construction Plan Review",
      },
    ],
  },
  {
    slug: "land-development",
    navLabel: "Land Development",
    icon: "MapPin",
    title: "Land Development",
    eyebrow: "TRANSFORMING LAND INTO OPPORTUNITY",
    description:
      "Neo Heights provides comprehensive land development services — from site grading and infrastructure works to utility installation — preparing land for industrial, commercial, and residential growth.",
    capabilities: [
      "Site grading & earthwork",
      "Roads, drainage & utility infrastructure",
      "Land surveying & feasibility studies",
      "Site preparation for large-scale projects",
    ],
    image: service5,
    imageCaption: "Land Development",
    processTitle: "Why Neo Heights",
    processDescription:
      "With a large fleet of owned and operated heavy machinery — including excavators, dozers, tippers, rollers, and compactors — we bring the full resource muscle to tackle even the most demanding land development assignments.",
    processSteps: [],
    featuredProjects: [
      { title: "Tata Electronics. Rainwater Harvesting (RWH)", location: "SHOOLAGIRI", image: tataImg },
      { title: "SCHAEFFLER INDIA LIMITED", location: "SHOOLAGIRI", image: india2Img },
    ],
  },
  {
    slug: "commercial-interiors",
    navLabel: "Interior Solutions",
    icon: "PenTool",
    title: "Commercial Interiors",
    eyebrow: "SPACES DESIGNED TO INSPIRE. BUILT TO PERFORM",
    description:
      "Neo Heights delivers commercial, industrial, and residential interior fit-outs that combine smart space planning, quality materials, and aesthetic precision. From bare-shell to fully operational workspaces, we transform interiors into environments that drive productivity and reflect brand identity.",
    capabilitiesLabel: "SERVICE AREAS:",
    capabilities: [
      "Space planning & design consultation",
      "Material selection & procurement",
      "Project execution with MEP co-ordination",
      "Handover-ready fit-outs",
    ],
    image: service3,
    imageCaption: "Commercial Interiors",
    serviceAreasDesc:
      "Creating functional, inspiring, and high-performance interior environments that enhance productivity, reflect brand identity, and support business growth across commercial, industrial, and corporate spaces.",
    serviceAreas: [
      {
        title: "Corporate office & workstation fit-outs",
        description:
          "Turnkey office interiors designed to improve collaboration, productivity, and employee experience through smart planning and efficient space utilization.",
      },
      {
        title: "Industrial facility interiors",
        description:
          "Interior solutions for manufacturing plants, production facilities, control rooms, utility buildings, and administrative spaces within industrial environments.",
      },
      {
        title: "Retail & commercial space interiors",
        description:
          "Customer-focused interiors for retail outlets, showrooms, experience centers, and commercial establishments that elevate brand presence and user engagement.",
      },
      {
        title: "Residential interior works",
        description:
          "Welcoming reception spaces, meeting rooms, breakout zones, training rooms, and collaborative work environments tailored to modern workplace needs.",
      },
      {
        title: "False ceiling, flooring, partition & joinery",
        description:
          "Complete execution of false ceilings, raised flooring, glass partitions, gypsum systems, acoustic solutions, and space-defining interior elements.",
      },
      {
        title: "Electrical, lighting & MEP integration within interior",
        description:
          "End-to-end interior execution including design coordination, procurement, project management, MEP integration, finishing works, and handover-ready spaces.",
      },
    ],
  },
  {
    slug: "gc-projects",
    navLabel: "GC Projects",
    icon: "HardHat",
    title: "GC Projects",
    eyebrow: "MANAGING COMPLEXITY WITH PRECISION",
    description:
      "As a General Contractor, Neo Heights manages every phase of project execution — coordinating trades, schedules, and quality control to deliver complex projects on time and within budget.",
    capabilities: [
      "End-to-end project management",
      "Multi-trade coordination & scheduling",
      "Quality control & safety compliance",
      "On-time, on-budget delivery",
    ],
    image: service6,
    imageCaption: "GC Projects",
  },
];

export const navServices = services.filter((s) => s.slug !== "gc-projects");

export const getServiceBySlug = (slug) =>
  services.find((s) => s.slug === slug);
