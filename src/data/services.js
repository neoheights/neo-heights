import indiaImg from "@/assets/images/projects/india.png";
import pebImg from "@/assets/images/projects/peb.png";
import epcHero from "@/assets/images/services/epc/epc-hero.webp";
import civilHero from "@/assets/images/services/civil/civil-hero.jpg";
import pebHero from "@/assets/images/services/peb/peb-hero.png";
import mepHero from "@/assets/images/services/mep/mep-hero.png";
import landHero from "@/assets/images/services/land/land-hero.png";
import tataRwhImg from "@/assets/images/services/land/tata-rwh.jpg";
import schaefflerSiteImg from "@/assets/images/services/land/schaeffler-site.jpg";
import tataRwhAerialImg from "@/assets/images/services/service1.jpg";
import csWendtImg from "@/assets/images/services/civil/6291cb839d92a01ce7932a3d6e3412a7a257e58b.png";
import rccMagnumImg from "@/assets/images/services/civil/62a588ccadda717d4b886e1e7748dd9e4b11ebd0.png";
import schoolCsrImg from "@/assets/images/services/civil/31d21483aa2467352b9a312f85f50daf0832f795.png";
import rccAsterImg from "@/assets/images/services/civil/70e80b9d3d7a0b72d60f56a6c10331ed9d618d38.png";
import commercialHero from "@/assets/images/services/commercial/commercial-hero.jpg";
import gcHero from "@/assets/images/services/gc/gc-hero.jpg";
import mepInstallationImg from "@/assets/images/services/mep/mep-installation.png";
import firefightingSystemImg from "@/assets/images/services/mep/firefighting-system.png";
import boardroomInteriorImg from "@/assets/images/services/commercial/boardroom-interior.jpg";
import officeLoungeInteriorImg from "@/assets/images/services/commercial/d86a0c296c788c16230b1529c9f9d2ef05b4faf6.png";
import epcBuildingImg from "@/assets/images/services/epc/0890fd8fee161194c0997d296a5416bf8309c158.webp";
import epcSolarRooftopImg from "@/assets/images/services/epc/epc-solar-rooftop.webp";
import schaefflerAerialImg from "@/assets/images/services/gc/schaeffler-aerial.jpg";
import gcCommercialBuildingImg from "@/assets/images/services/gc/commercial-building.png";

// land-development — remaining images from land/ folder
import landBuildingRenderImg from "@/assets/images/services/land/building-render.jpg";

// civil-engineering — remaining images from civil/ folder
import civilSakataImg from "@/assets/images/services/civil/sakata-building.png";
import civilVajraImg from "@/assets/images/services/civil/vajra-towers.png";
import civilAdvikImg from "@/assets/images/services/civil/2076e947bd03b9328b4941f097f7123ae042497b.jpg";
import civilSchaefflerAerialImg from "@/assets/images/services/civil/fdd5e0952784a06c0a96782dcde86d69bc003524.jpg";

// mep — remaining images from mep/ folder
import mepUtilityPipingImg from "@/assets/images/services/mep/0f2d00f1a674aef3cd9cb597fe7e845e1466dc1b.png";
import mepElectricalWorksImg from "@/assets/images/services/mep/c98979ab739ca307462ad6414e6409cbe786d7a6.png";

// commercial-interiors — remaining images from commercial/ folder
import commercialFacilityImg from "@/assets/images/services/commercial/377b4115a0573a82311d76e7bc8ded860d8021e3.png";

// epc-contractor — remaining images from epc/ folder
import epcConcreteWorksImg from "@/assets/images/services/epc/1773dd480df6ffdba64edd50610e2d23ca806821.webp";
import epcPathwaysImg from "@/assets/images/services/epc/5c0ea3418e3f1e674f151cef687c5b9f136f479f.webp";
import epcGreenCampusImg from "@/assets/images/services/epc/5c5045d58f5f455bf74b38872b82565af17992d0.webp";
import epcArchRenderImg from "@/assets/images/services/epc/931a18e0b6b494b3883cab079980e47c2e33fa48.webp";
import epcAssemblyFacilityImg from "@/assets/images/services/epc/fece8981271c0532e85ec46b9ed4d346c70cf238.webp";

// gc-projects — remaining images from gc/ folder
import gcIndustrialComplexImg from "@/assets/images/services/gc/civil-industrial-complex.jpg";
import gcSiteOfficeImg from "@/assets/images/services/gc/site-office-building.png";
import gcSakataImg from "@/assets/images/services/gc/sakata-building-gc.png";
import gcResidentialNightImg from "@/assets/images/services/gc/residential-apartment-night.png";
import gcRccResidentialImg from "@/assets/images/services/gc/rcc-residential-building.png";
import gcVajraImg from "@/assets/images/services/gc/vajra-towers-render.png";

// pre-engineering-building — remaining images from peb/ folder
import pebScissorLiftsImg from "@/assets/images/services/peb/3daf6bf59f182b114e98317c7c06047d459644f5.png";
import pebConstructionImg from "@/assets/images/services/peb/84267bc433a5366b453a57a9abbc63e42ae77eb7.png";
import pebCompletedBuildingImg from "@/assets/images/services/peb/a105cdf92a8d2188de17afc791554eb4515a08e0.png";
import pebFactorySolarImg from "@/assets/images/services/peb/peb-factory-solar.jpg";

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
    image: epcHero,
    imageCaption: "EPC Contractor",
    featuredProjects: [
      { title: "Industrial Facility Construction", location: "BENGALURU", image: epcBuildingImg },
      { title: "Turnkey Facility with Rooftop Solar", location: "SHOOLAGIRI", image: epcSolarRooftopImg },
      { title: "Commercial Office Building", location: "BENGALURU", image: epcHero },
      { title: "Foundation & Concrete Works", location: "SHOOLAGIRI", image: epcConcreteWorksImg },
      { title: "Site Infrastructure & Pathways", location: "BENGALURU", image: epcPathwaysImg },
      { title: "Facility Amidst Green Campus", location: "DOBBASPET", image: epcGreenCampusImg },
      { title: "Architectural Design — Office Building", location: "BENGALURU", image: epcArchRenderImg },
      { title: "Automotive Assembly Facility", location: "BENGALURU", image: epcAssemblyFacilityImg },
    ],
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
    image: civilHero,
    imageCaption: "Civil Engineering",
    featuredProjects: [
      { title: "Tata Electronics. Rainwater Harvesting (RWH)", location: "DOBBASPET, KARNATAKA", image: tataRwhAerialImg },
      { title: "Tata Electronics. Rainwater Harvesting (RWH)", location: "DOBBASPET, KARNATAKA", image: tataRwhImg },
      { title: "CS Building — Wendt India", location: "HOSUR", image: csWendtImg },
      { title: "RCC Residential Building — Magnum", location: "BENGALURU", image: rccMagnumImg },
      { title: "School Building CSR Project — for Schaeffler", location: "HOSUR", image: schoolCsrImg, badge: "CSR Project" },
      { title: "RCC Residential Building — Aster", location: "BENGALURU", image: rccAsterImg },
      { title: "Industrial Complex Construction", location: "HOSUR", image: civilHero },
      { title: "Shimzu-Sakata India Pvt Ltd", location: "DODDABALLAPUR", image: civilSakataImg },
      { title: "RCC Building — Vajra Tower", location: "BENGALURU", image: civilVajraImg },
      { title: "ADVIK Hi-Tech Facility", location: "BENGALURU", image: civilAdvikImg },
      { title: "SCHAEFFLER INDIA LIMITED", location: "SHOOLAGIRI", image: civilSchaefflerAerialImg },
    ],
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
    image: pebHero,
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
      { title: "PEB Structure Erection", location: "SHOOLAGIRI", image: pebHero },
      { title: "Large-Span PEB Warehouse", location: "BENGALURU", image: pebScissorLiftsImg },
      { title: "Factory Shed — PEB Construction", location: "HOSUR", image: pebConstructionImg },
      { title: "Pre-Engineered Building — Completed", location: "BENGALURU", image: pebCompletedBuildingImg },
      { title: "PEB Facility with Rooftop Solar", location: "SHOOLAGIRI", image: pebFactorySolarImg },
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
    image: mepHero,
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
    featuredProjects: [
      { title: "Industrial MEP Installation", location: "BENGALURU", image: mepInstallationImg },
      { title: "Fire Fighting System Installation", location: "SHOOLAGIRI", image: firefightingSystemImg },
      { title: "Rooftop HVAC Installation", location: "BENGALURU", image: mepHero },
      { title: "Industrial Utility Piping", location: "SHOOLAGIRI", image: mepUtilityPipingImg },
      { title: "Electrical & Substation Works", location: "HOSUR", image: mepElectricalWorksImg },
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
    image: landHero,
    imageCaption: "Land Development",
    processTitle: "Why Neo Heights",
    processDescription:
      "With a large fleet of owned and operated heavy machinery — including excavators, dozers, tippers, rollers, and compactors — we bring the full resource muscle to tackle even the most demanding land development assignments.",
    processSteps: [],
    featuredProjects: [
      { title: "Tata Electronics. Rainwater Harvesting (RWH)", location: "SHOOLAGIRI", image: tataRwhImg },
      { title: "SCHAEFFLER INDIA LIMITED", location: "SHOOLAGIRI", image: schaefflerSiteImg },
      { title: "Site Grading & Earthwork", location: "SHOOLAGIRI", image: landHero },
      { title: "Landscape & Site Development", location: "BENGALURU", image: landBuildingRenderImg },
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
    image: commercialHero,
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
    featuredProjects: [
      { title: "Corporate Boardroom Fit-out", location: "BENGALURU", image: boardroomInteriorImg },
      { title: "Office Reception & Lounge", location: "BENGALURU", image: officeLoungeInteriorImg },
      { title: "Corporate Office Workstations", location: "BENGALURU", image: commercialHero },
      { title: "Facility Exterior & Loading Bay", location: "BENGALURU", image: commercialFacilityImg },
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
    image: gcHero,
    imageCaption: "GC Projects",
    featuredProjects: [
      { title: "SCHAEFFLER INDIA LIMITED", location: "SHOOLAGIRI", image: schaefflerAerialImg },
      { title: "Commercial Building Project", location: "BENGALURU", image: gcCommercialBuildingImg },
      { title: "ADVIK Hi-Tech Facility", location: "BENGALURU", image: gcHero },
      { title: "Industrial Campus Development", location: "HOSUR", image: gcIndustrialComplexImg },
      { title: "Site Office Building", location: "HOSUR", image: gcSiteOfficeImg },
      { title: "Shimzu-Sakata India Pvt Ltd", location: "DODDABALLAPUR", image: gcSakataImg },
      { title: "Residential Apartment Project", location: "BENGALURU", image: gcResidentialNightImg },
      { title: "RCC Residential Building", location: "BENGALURU", image: gcRccResidentialImg },
      { title: "RCC Building — Vajra Tower", location: "BENGALURU", image: gcVajraImg },
    ],
  },
];

export const navServices = services.filter((s) => s.slug !== "gc-projects");

export const getServiceBySlug = (slug) =>
  services.find((s) => s.slug === slug);
