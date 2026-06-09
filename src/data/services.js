import service1 from "@/assets/images/services/service1.jpg";
import service2 from "@/assets/images/services/service2.jpg";
import service3 from "@/assets/images/services/service3.jpg";
import service4 from "@/assets/images/services/service4.jpg";
import service5 from "@/assets/images/services/service5.jpg";
import service6 from "@/assets/images/services/service6.jpg";
import service7 from "@/assets/images/services/service7.png";

export const services = [
  {
    slug: "epc-contractor",
    name: "EPC Contractor",
    icon: "Factory",
    eyebrow: "ENGINEERING, PROCUREMENT & CONSTRUCTION",
    title: "EPC Contractor",
    description:
      "End-to-end project delivery with integrated design, procurement, and construction management for large-scale infrastructure.",
    capabilities: [
      "Turnkey project execution",
      "Design-build integration",
      "Advanced procurement systems",
      "Quality assurance protocols",
    ],
    image: service7,
    imageLabel: "EPC CONTRACTOR",
  },
  {
    slug: "civil-construction",
    name: "Civil Construction",
    icon: "Building2",
    eyebrow: "CIVIL ENGINEERING & STRUCTURES",
    title: "Civil Construction",
    description:
      "Robust civil works delivered with structural precision, modern methods, and rigorous safety standards for projects of every scale.",
    capabilities: [
      "Reinforced concrete frameworks",
      "Foundations & substructures",
      "Site development & earthworks",
      "Structural retrofits & upgrades",
    ],
    image: service1,
    imageLabel: "CIVIL CONSTRUCTION",
  },
  {
    slug: "peb-structures",
    name: "PEB Structures",
    icon: "Box",
    eyebrow: "PRE-ENGINEERED BUILDINGS",
    title: "PEB Structures",
    description:
      "Engineered steel building systems delivered with speed, precision, and economy for warehouses, factories, and industrial campuses.",
    capabilities: [
      "Custom steel design & fabrication",
      "Rapid on-site erection",
      "Cladding & roofing systems",
      "Long-span column-free spaces",
    ],
    image: service2,
    imageLabel: "PEB STRUCTURES",
  },
  {
    slug: "mep-systems",
    name: "MEP Systems",
    icon: "Zap",
    eyebrow: "MECHANICAL, ELECTRICAL & PLUMBING",
    title: "MEP Systems",
    description:
      "Integrated mechanical, electrical, and plumbing solutions engineered for reliability, energy efficiency, and code-compliant performance.",
    capabilities: [
      "HVAC & ventilation systems",
      "Power distribution & lighting",
      "Plumbing & firefighting networks",
      "Building automation & controls",
    ],
    image: service4,
    imageLabel: "MEP SYSTEMS",
  },
  {
    slug: "land-development",
    name: "Land Development",
    icon: "TreePine",
    eyebrow: "SITE PLANNING & DEVELOPMENT",
    title: "Land Development",
    description:
      "Strategic land development services that transform raw sites into ready-to-build platforms with planning, grading, and infrastructure.",
    capabilities: [
      "Master planning & feasibility",
      "Grading & earthwork",
      "Drainage & utility networks",
      "Permitting & regulatory coordination",
    ],
    image: service5,
    imageLabel: "LAND DEVELOPMENT",
  },
  {
    slug: "interior-solutions",
    name: "Interior Solutions",
    icon: "Sparkles",
    eyebrow: "COMMERCIAL & WORKPLACE INTERIORS",
    title: "Interior Solutions",
    description:
      "Refined commercial interior fit-outs that blend brand identity, functional planning, and premium finishes for modern workplaces.",
    capabilities: [
      "Workspace planning & design",
      "Premium finishes & joinery",
      "Lighting & acoustic detailing",
      "Turnkey fit-out delivery",
    ],
    image: service3,
    imageLabel: "INTERIOR SOLUTIONS",
  },
  {
    slug: "gc-projects",
    name: "GC Projects",
    icon: "HardHat",
    eyebrow: "GENERAL CONTRACTING",
    title: "GC Projects",
    description:
      "Full-scope general contracting that orchestrates trades, schedules, and quality across complex multi-discipline construction programs.",
    capabilities: [
      "Multi-trade coordination",
      "Schedule & cost control",
      "Subcontractor management",
      "On-site quality assurance",
    ],
    image: service6,
    imageLabel: "GC PROJECTS",
  },
];

export const getServiceBySlug = (slug) =>
  services.find((service) => service.slug === slug);
