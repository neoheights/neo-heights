import volvoImg from "@/assets/images/projects/volvo.png";
import advikImg from "@/assets/images/projects/advik.png";
import sakataImg from "@/assets/images/projects/sakata.png";
import pcaImg from "@/assets/images/projects/pca.png";
import foxconnProjectImg from "@/assets/images/projects/foxconn.png";
import indiaImg from "@/assets/images/projects/india.png";
import tataImg from "@/assets/images/projects/tata.png";
import hindustanImg from "@/assets/images/projects/hindustan.png";
import pebImg from "@/assets/images/projects/peb.png";
import india2Img from "@/assets/images/projects/india2.jpg";
import tataRwhPondImg from "@/assets/images/services/land/tata-rwh.jpg";

import svc1 from "@/assets/images/services/service1.jpg";
import svc2 from "@/assets/images/services/service2.jpg";
import svc3 from "@/assets/images/services/service3.jpg";
import svc4 from "@/assets/images/services/service4.jpg";
import svc5 from "@/assets/images/services/service5.jpg";
import svc6 from "@/assets/images/services/service6.jpg";
import svc7 from "@/assets/images/services/service7.png";
import svc8 from "@/assets/images/services/service8.jpg";
import svc9 from "@/assets/images/services/service9.jpg";
import svc10 from "@/assets/images/services/service10.jpg";
import geHealthcareImg from "@/assets/images/services/epc/epc-hero.webp";
import geHealthcareBuildingImg from "@/assets/images/services/epc/1773dd480df6ffdba64edd50610e2d23ca806821.webp";

import logo1 from "@/assets/images/trustedPartners/img1.png";
import logo2 from "@/assets/images/trustedPartners/img2.png";
import logo3 from "@/assets/images/trustedPartners/img3.png";
import logo5 from "@/assets/images/trustedPartners/img5.png";
import logo6 from "@/assets/images/trustedPartners/img6.png";
import logo9 from "@/assets/images/trustedPartners/img9.png";
import logo10 from "@/assets/images/trustedPartners/img10.png";
import logo12 from "@/assets/images/trustedPartners/img12.png";
import foxconnLogo from "@/assets/images/trustedPartners/foxconn.png";

export const projects = [
  {
    slug: "schaeffler-india-limited",
    title: "Schaeffler India Limited",
    location: "SHOOLAGIRI · TAMIL NADU",
    heroImage: indiaImg,
    galleryLabel: "Gallery No: 01",
    client: "Schaeffler India Limited",
    clientLogo: logo1,
    description:
      "A landmark composite EPC package covering Hall 01 construction at Schaeffler's Shoolagiri facility. This end-to-end delivery encompassed civil foundations through to fully operational production spaces.",
    tags: [
      "EPC Contractor",
      "Civil Construction",
      "PEB Structure",
      "MEP Systems",
      "Interior Fit-out",
      "MEP",
    ],
    totalArea: "14,500 m²",
    projectPeriod: "2023–25",
    scopeOfWork: [
      "Civil and foundation work including EPC building",
      "Soil compaction and RCC substructure works",
      "PEB planning and structural erection",
      "120-ton EOT crane rail and girder installation",
      "Interior finishes of production plant spaces",
      "Interior fit-out of administrative and utility blocks",
      "MEP systems — HVAC, electrical and plumbing",
      "Automated dock leveller and door handling systems",
    ],
    gallery: [indiaImg, india2Img, svc1, svc4],
  },
  {
    slug: "volvo-trucks",
    title: "Volvo Trucks",
    location: "HOSKOTE · KARNATAKA",
    heroImage: volvoImg,
    galleryLabel: "Gallery No: 02",
    client: "Volvo Trucks India Pvt. Ltd.",
    clientLogo: logo2,
    description:
      "Comprehensive turnkey construction of Volvo's truck assembly facility at Hoskote. The project included civil, PEB structural works, interior fit-outs, and complete MEP systems across the manufacturing campus.",
    tags: [
      "Civil Construction",
      "PEB Structures",
      "Interior Fit-out",
      "MEP Systems",
      "EPC Contractor",
    ],
    totalArea: "12,000 m²",
    projectPeriod: "2021–23",
    scopeOfWork: [
      "Civil foundation and superstructure works",
      "Pre-engineered building design and erection",
      "Cladding, roofing and fascia systems",
      "Interior fit-out of assembly and utility areas",
      "Electrical systems and power distribution",
      "HVAC and ventilation installation",
    ],
    gallery: [volvoImg, pebImg, svc2, svc5, svc8, svc10],
  },
  {
    slug: "advik-hi-tech",
    title: "PEB Works — Advik Hi Power",
    location: "NARASAPURA",
    heroImage: advikImg,
    galleryLabel: "Gallery No: 03",
    client: "Advik Hi Power",
    clientLogo: logo3,
    description:
      "Steel-frame PEB factory shed for Advik Hi Power's industrial manufacturing facility at Narasapura.",
    tags: ["PEB Structure"],
    totalArea: "-",
    projectPeriod: "Completed",
    scopeOfWork: [
      "Steel-frame PEB factory shed",
      "Industrial manufacturing facility",
    ],
    gallery: [advikImg, sakataImg, svc3, svc6],
  },
  {
    slug: "tata-electronics",
    title: "Tata Electronics. Rainwater Harvesting (RWH)",
    location: "DOBBASPET, KARNATAKA",
    heroImage: tataRwhPondImg,
    galleryLabel: "Gallery No: 04",
    client: "Tata Electronics Pvt. Ltd.",
    clientLogo: logo5,
    description:
      "RWH pond and utilities area a key sustainability intervention delivered by our team and well appreciated for its long-term impact.",
    tags: [
      "EPC Contractor",
      "Civil Construction",
      "Land Development",
      "MEP Systems",
    ],
    totalArea: "22,000 m²",
    projectPeriod: "2022–25",
    scopeOfWork: [
      "Mass earthwork and land grading",
      "Rainwater harvesting system design and installation",
      "RCC civil construction across multiple blocks",
      "Road, drainage and utility network",
      "MEP systems for all production areas",
      "Landscaping and external development works",
    ],
    gallery: [tataImg, india2Img, svc1, svc5, svc9],
  },
  {
    slug: "peb-works-volvo",
    title: "PEB Works — Volvo",
    location: "NARSAPURA · KARNATAKA",
    heroImage: pebImg,
    galleryLabel: "Gallery No: 05",
    client: "Volvo Group India Pvt. Ltd.",
    clientLogo: logo2,
    description:
      "Pre-engineered building works for Volvo's Narsapura production shed. The project delivered a large-span, column-free PEB structure with integrated MEP systems, designed for heavy-duty manufacturing operations.",
    tags: ["PEB Structures", "MEP Systems"],
    totalArea: "6,800 m²",
    projectPeriod: "2019–21",
    scopeOfWork: [
      "PEB structural design and detailing",
      "Steel fabrication and supply",
      "On-site erection and alignment",
      "Roofing and wall cladding systems",
      "Electrical and lighting installation",
    ],
    gallery: [pebImg, volvoImg, svc2, svc7],
  },
  {
    slug: "ge-healthcare",
    title: "GE Healthcare / Wipro GE Healthcare",
    location: "BENGALURU REGION, KARNATAKA",
    heroImage: geHealthcareImg,
    galleryLabel: "Gallery No: 06",
    client: "GE Healthcare / Wipro GE Healthcare",
    clientLogo: logo9,
    description:
      "Manufacturing and office facility construction for GE Healthcare's Bengaluru plant. The scope included civil, MEP, and interior works delivered as a composite EPC package. Neo Heights won the GE Healthcare Supplier of the Year Award 2025.",
    tags: ["EPC Contractor", "Civil Construction", "PEB Structure", "MEP Systems"],
    totalArea: "-",
    projectPeriod: "Ongoing",
    scopeOfWork: [
      "Manufacturing and office facility construction",
      "Fire pump room — VTP 354 M3/Hr with diesel engine pumps",
      "STP, HVAC, electrical systems",
      "Civil, MEP, and interior works",
      "DM RO Plant — 10,000 litre capacity",
      "Plumbing and drainage infrastructure",
    ],
    gallery: [svc7, { src: svc9, label: "Safety Training" }, geHealthcareBuildingImg],
  },
  {
    slug: "pca",
    title: "PCA",
    location: "BENGALURU · KARNATAKA",
    heroImage: pcaImg,
    galleryLabel: "Gallery No: 07",
    client: "PCA",
    clientLogo: logo6,
    description:
      "Full-scope construction and fit-out works for PCA's Bengaluru operations. The project combined civil construction, PEB structural works, and complete MEP systems installation within a defined project timeline.",
    tags: ["Civil Construction", "PEB Structures", "MEP Systems"],
    totalArea: "5,500 m²",
    projectPeriod: "2021–22",
    scopeOfWork: [
      "Civil foundations and substructure",
      "PEB shed construction",
      "MEP systems — electrical, plumbing, HVAC",
      "Painting and finishing works",
    ],
    gallery: [sakataImg, pebImg, svc8],
  },
  {
    slug: "toyota",
    title: "Toyota",
    location: "BENGALURU · KARNATAKA",
    heroImage: india2Img,
    galleryLabel: "Gallery No: 08",
    client: "Toyota",
    clientLogo: logo10,
    description:
      "Large-scale manufacturing campus construction for Toyota's Bengaluru facility. The project involves integrated civil structural works, PEB production sheds, and full MEP systems integration across a sprawling industrial campus.",
    tags: ["EPC Contractor", "Civil Construction", "PEB Structure", "MEP Systems"],
    totalArea: "-",
    projectPeriod: "Ongoing",
    scopeOfWork: [
      "Large-scale manufacturing campus construction",
      "PEB sheds for production areas",
      "Civil structural works and foundations",
      "MEP systems integration throughout",
    ],
    gallery: [india2Img, indiaImg, svc1, svc5, svc9, svc10],
    relatedProjects: [
      {
        title: "Faiveley Transport India Pvt Ltd",
        location: "HOSUR",
        image: pebImg,
      },
      {
        slug: "ge-healthcare",
        title: "GE Healthcare / Wipro GE Healthcare",
        location: "WHITEFIELD, BANGALORE",
        image: geHealthcareImg,
      },
      {
        title: "Hindustan Foods Ltd",
        location: "",
        image: hindustanImg,
      },
    ],
  },
  {
    slug: "vajra-towers",
    title: "Vajra Towers",
    location: "HOSUR · TAMIL NADU",
    heroImage: tataImg,
    galleryLabel: "Gallery No: 09",
    client: "Vajra Towers",
    clientLogo: logo12,
    description:
      "Neo Heights / Arul Group corporate head office building at SIPCOT II, Hosur. Multi-storey commercial building with a modern glass facade and night-illuminated exterior, fully operational as an administrative hub.",
    tags: ["Civil Construction", "GC Projects", "Interior Fit-out"],
    totalArea: "4,200 m²",
    projectPeriod: "2018–20",
    scopeOfWork: [
      "Multi-storey RCC structural frame",
      "Glass facade and cladding works",
      "Office interior fit-out",
      "MEP systems — electrical, HVAC, plumbing",
      "External lighting and landscaping",
    ],
    gallery: [tataImg, svc3, svc6, svc7],
  },
  {
    slug: "foxconn-cinda",
    title: "Foxconn-Cinda",
    location: "BENGALURU REGION · KARNATAKA",
    heroImage: foxconnProjectImg,
    galleryLabel: "Gallery No: 10",
    client: "Foxconn-Cinda",
    clientLogo: foxconnLogo,
    description:
      "Multi-storey RCC industrial facility construction for Foxconn-Cinda's Bengaluru campus. The project involved large manufacturing block civil structural works, completed and handed over for operations.",
    tags: ["EPC Contractor", "Civil Construction"],
    totalArea: "-",
    projectPeriod: "Completed",
    scopeOfWork: [
      "Multi-storey RCC industrial facility",
      "Structural civil works — completed",
      "Large manufacturing block construction",
      "Foundation and superstructure works",
    ],
    gallery: [volvoImg, advikImg, svc2, svc4, svc8],
  },
  {
    slug: "lm-wind-power",
    title: "LM Wind Power",
    location: "DOBBASPET · KARNATAKA",
    heroImage: pebImg,
    galleryLabel: "Gallery No: 11",
    client: "LM Wind Power (GE Renewable Energy)",
    clientLogo: logo6,
    description:
      "Wind blade manufacturing facility for LM Wind Power at Dobbaspet. Features a large-span, high-clearance PEB structure with integrated overhead bridge crane rails and full MEP systems engineered for renewable energy production.",
    tags: ["PEB Structures", "MEP Systems", "Civil Construction"],
    totalArea: "16,000 m²",
    projectPeriod: "2021–23",
    scopeOfWork: [
      "Large-span high-clearance PEB structure",
      "Overhead bridge crane rail integration",
      "Civil foundations for heavy equipment loads",
      "Full MEP systems — electrical, HVAC, plumbing",
      "Fire protection systems",
      "External roads and utility infrastructure",
    ],
    gallery: [pebImg, hindustanImg, svc2, svc5, svc9, svc10],
  },
];

export const getProjectBySlug = (slug) =>
  projects.find((p) => p.slug === slug);
