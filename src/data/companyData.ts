import heroMachineWorkingAsset from "../assets/images/hero-machine-working.jpg.asset.json";
const openMouldHeroImg = heroMachineWorkingAsset.url;
import heroInjectionMouldImgAsset from "../assets/images/hero_injection_moulding_1791344816956.jpg.asset.json";
const heroInjectionMouldImg = heroInjectionMouldImgAsset.url;
import haasVmcImgAsset from "../assets/images/haas_vmc_machining_1791344829999.jpg.asset.json";
const haasVmcImg = haasVmcImgAsset.url;
import cadProductDesignImgAsset from "../assets/images/cad_product_design_1791344841891.jpg.asset.json";
const cadProductDesignImg = cadProductDesignImgAsset.url;
import injectionFacilityImgAsset from "../assets/images/injection_molding_facility_1791344853234.jpg.asset.json";
const injectionFacilityImg = injectionFacilityImgAsset.url;
import reviewsFactoryWideImgAsset from "../assets/images/reviews_factory_wide_1791344867162.jpg.asset.json";
const reviewsFactoryWideImg = reviewsFactoryWideImgAsset.url;
import founderPortraitImgAsset from "../assets/images/founder_portrait_1791344880828.jpg.asset.json";
const founderPortraitImg = founderPortraitImgAsset.url;
import thinWallPackagingImgAsset from "../assets/images/thin_wall_packaging_1791344893213.jpg.asset.json";
const thinWallPackagingImg = thinWallPackagingImgAsset.url;
import jewelleryBoxesImgAsset from "../assets/images/jewellery_boxes_1791344906090.jpg.asset.json";
const jewelleryBoxesImg = jewelleryBoxesImgAsset.url;
import plasticPartsCustomImgAsset from "../assets/images/plastic_parts_custom_1791344922773.jpg.asset.json";
const plasticPartsCustomImg = plasticPartsCustomImgAsset.url;
import oemProductionCellImgAsset from "../assets/images/oem_production_cell_1791344935450.jpg.asset.json";
const oemProductionCellImg = oemProductionCellImgAsset.url;
import toolroomFittingBenchImgAsset from "../assets/images/toolroom_fitting_bench_1791344948737.jpg.asset.json";
const toolroomFittingBenchImg = toolroomFittingBenchImgAsset.url;
import sanitaryFluidImgAsset from "../assets/images/sanitary_plumbing_parts_1791344960420.jpg.asset.json";
const sanitaryFluidImg = sanitaryFluidImgAsset.url;
import cmmQualityLabImgAsset from "../assets/images/cmm_quality_lab_1791345342335.jpg.asset.json";
const cmmQualityLabImg = cmmQualityLabImgAsset.url;
import automotiveClipsImgAsset from "../assets/images/automotive_nylon_clips_1791345361571.jpg.asset.json";
const automotiveClipsImg = automotiveClipsImgAsset.url;
import electricalSwitchgearImgAsset from "../assets/images/electrical_switchgear_parts_1791345377549.jpg.asset.json";
const electricalSwitchgearImg = electricalSwitchgearImgAsset.url;
import irrigationDripImgAsset from "../assets/images/irrigation_drip_fittings_1791345389523.jpg.asset.json";
const irrigationDripImg = irrigationDripImgAsset.url;
import consumerHousingsImgAsset from "../assets/images/consumer_housings_1791345416221.jpg.asset.json";
const consumerHousingsImg = consumerHousingsImgAsset.url;
import toyComponentsImgAsset from "../assets/images/toy_components_molded_1791345405093.jpg.asset.json";
const toyComponentsImg = toyComponentsImgAsset.url;
import applicationsHeroImgAsset from "../assets/images/applications_sectors_hero_1791346836260.jpg.asset.json";
const applicationsHeroImg = applicationsHeroImgAsset.url;
import contactExteriorImgAsset from "../assets/images/contact_plant_exterior_1791346820103.jpg.asset.json";
const contactExteriorImg = contactExteriorImgAsset.url;

import { CapabilityItem, IndustryItem, ProcessStage, FaqItem } from "../types";

export interface DetailedCapability extends CapabilityItem {
  detailedSpecs?: {
    toolSteel: string;
    cavityRange: string;
    cycleTime: string;
    tolerance: string;
    typicalResins: string;
    surfaceFinish: string;
  };
  useCases?: string[];
}

export const COMPANY_INFO = {
  name: "ADVAY ENGINEERS",
  tagline: "Redefine Excellence",
  subTagline: "Precision Moulds. Reliable Manufacturing.",
  bullets: "Injection Moulds • Engineering Plastic Components • OEM Manufacturing",
  description:
    "From product development and precision tooling to injection moulding and production — engineered for consistency, quality and dependable performance.",
  established: "2016",
  location: "Rajkot, Gujarat, India",
  founder: {
    name: "Keyur Vaghani",
    title: "Founder & Managing Director",
    experience: "15+ Years in Toolroom Engineering & Injection Moulding",
    bio: "Passionate toolmaker and manufacturing entrepreneur dedicated to precision engineering. Established Advay Engineers in 2016 in Rajkot with the vision of providing turnkey, high-precision injection tooling and zero-defect OEM plastic components under one unified facility.",
    image: founderPortraitImg,
  },
  address: {
    line1: "SR. No. 202, Plot No. 51, Shed No. 51A",
    line2: "Opp. Inova Cast, Essen Road, Veraval (Shapar)",
    city: "Rajkot",
    pincode: "360024",
    state: "Gujarat",
    country: "India",
  },
  phones: [
    { label: "+91 99746 98789", raw: "+919974698789" },
    { label: "+91 88666 04575", raw: "+918866604575" },
  ],
  whatsapp: "+919974698789",
  email: "advayengineers1@gmail.com",
  socials: {
    instagram: "https://www.instagram.com/advay.engineers/",
    facebook: "https://www.facebook.com/advayengineers",
    linkedin: "https://www.linkedin.com/company/advay-engineers",
    youtube: "https://www.youtube.com/@advayengineers",
  },
  images: {
    hero: openMouldHeroImg,
    mouldCore: heroInjectionMouldImg,
    haasVmc: haasVmcImg,
    facility: injectionFacilityImg,
    cadDesign: cadProductDesignImg,
    injectionPress: injectionFacilityImg,
    oemCell: oemProductionCellImg,
    plasticParts: plasticPartsCustomImg,
    thinWall: thinWallPackagingImg,
    jewelleryBoxes: jewelleryBoxesImg,
    toolroomBench: toolroomFittingBenchImg,
    reviewsFactory: reviewsFactoryWideImg,
    founder: founderPortraitImg,
    cmmQuality: cmmQualityLabImg,
    applicationsHero: "/__l5e/assets-v1/4a33166a-08a1-4069-80a1-959aeb4eefdc/hero_applications_parts_1791437176922.jpg",
    capabilitiesHero: "/__l5e/assets-v1/d1a489a8-4442-46ff-9653-6deca19ae00f/hero_capabilities_moulds_1791437159152.jpg",
    infrastructureHero: "/__l5e/assets-v1/b1ea96bd-2c8d-4545-94ef-0fdc6012d26c/hero_infrastructure_plant_1791437189009.jpg",
    qualityHero: "/__l5e/assets-v1/9ed71ad3-f37d-48b2-9f06-b6d90a4cd9f4/hero_quality_metrology_1791437201452.jpg",
    aboutHero: "/__l5e/assets-v1/8f9f7271-cce0-4b0f-ab5f-c258c231e1de/hero_about_heritage_1791437215469.jpg",
    contactExterior: contactExteriorImg,
  },
};

export const CAPABILITIES: DetailedCapability[] = [
  {
    id: "precision-injection-moulds",
    name: "Precision Injection Moulds",
    description:
      "Design and manufacturing of production-ready injection moulds engineered for accuracy, repeatability and dependable performance.",
    iconName: "Layers",
    image: heroInjectionMouldImg,
    keyPoints: [
      "Rigid hardened tool steel core & cavity inserts",
      "Optimized cooling circuits for fast cycle times",
      "Guaranteed micron accuracy & high dimensional stability",
    ],
    detailedSpecs: {
      toolSteel: "P20, H13, DIN 1.2316, Stavax Hardened (48-52 HRC)",
      cavityRange: "1 to 32 Cavity Tooling Architectures",
      cycleTime: "High-Speed Cycling with Balanced Conformal Cooling",
      tolerance: "±0.005 mm Machining & Toolroom Tolerance",
      typicalResins: "PA66, POM, PC, ABS, PBT, Polypropylene, TPE",
      surfaceFinish: "SPI A2 Diamond Mirror Polish or EDM VDI Texture",
    },
    useCases: [
      "Multi-cavity engineering component moulds",
      "Thin-wall container and enclosure tooling",
      "Insert moulding and unscrewing thread moulds",
      "Hot runner & cold runner valve gate configurations",
    ],
  },
  {
    id: "injection-moulding",
    name: "Injection Moulding",
    description:
      "Manufacturing of engineering plastic components with a focus on consistency, process control and reliable production.",
    iconName: "Cog",
    image: injectionFacilityImg,
    keyPoints: [
      "Automatic injection molding production cell",
      "Engineering polymer processing (PA66, PC, POM, ABS)",
      "Batch-to-batch repeatability and flash-free quality",
    ],
    detailedSpecs: {
      toolSteel: "High-Duty Automatic Microprocessor Machines",
      cavityRange: "Shot Capacities from 10 grams to 450 grams",
      cycleTime: "Continuous 24/7 Automated Production Runs",
      tolerance: "±0.02 mm Component Molding Repeatability",
      typicalResins: "Engineering Grade GF-Nylon, Polycarbonate, POM, Delrin",
      surfaceFinish: "Flash-free, uniform wall thickness, zero sink marks",
    },
    useCases: [
      "High-volume automotive and electrical components",
      "Consumer plastic cases and precision closures",
      "Agricultural irrigation fittings and drippers",
      "Industrial gears, wear bushes, and valve bodies",
    ],
  },
  {
    id: "oem-manufacturing",
    name: "OEM Manufacturing",
    description:
      "End-to-end manufacturing support for businesses looking for a dependable long-term production partner.",
    iconName: "Factory",
    image: oemProductionCellImg,
    keyPoints: [
      "Turnkey contract component supply agreements",
      "In-house tooling custody, routine service & maintenance",
      "Strict NDA confidentiality and on-schedule delivery",
    ],
    detailedSpecs: {
      toolSteel: "Tooling Custody & Life-Cycle Tool Room Maintenance",
      cavityRange: "Scheduled Monthly OEM Dispatch Calendars",
      cycleTime: "Full Traceability with Batch Inspection Reports",
      tolerance: "100% Quality Assurance to Drawing Standards",
      typicalResins: "Customer-specified certified polymer raw materials",
      surfaceFinish: "Custom branding, pad printing, and secondary assembly",
    },
    useCases: [
      "Contract manufacturing for switchgear and power tools",
      "White-label industrial machinery plastic components",
      "Turnkey assembly and sub-component packaging",
      "Long-term OEM master supply agreements",
    ],
  },
  {
    id: "product-development",
    name: "Product Development",
    description:
      "Engineering support from concept and component development through tooling, trials and production.",
    iconName: "PenTool",
    image: cadProductDesignImg,
    keyPoints: [
      "DFM plastic flow analysis & gate placement",
      "Draft angles, parting lines & uniform wall thickness checks",
      "Polymer material feasibility & structural optimization",
    ],
    detailedSpecs: {
      toolSteel: "3D Parametric CAD/CAM Workstations",
      cavityRange: "STEP, IGES, Parasolid, DXF, DWG Compatibility",
      cycleTime: "Rapid 48-Hour DFM Feasibility Analysis",
      tolerance: "Nominal CAD 3D Solid Model Verification",
      typicalResins: "Resin recommendation based on operating environment",
      surfaceFinish: "DFM reports indicating sink risk and parting lines",
    },
    useCases: [
      "Plastic part weight and structural optimization",
      "Conversion of metal parts to engineering plastics",
      "Snap-fit geometry and living hinge design",
      "Pre-tooling mold flow and gate location consultation",
    ],
  },
  {
    id: "custom-plastic-components",
    name: "Custom Plastic Components",
    description:
      "Application-specific plastic components developed and manufactured to customer requirements.",
    iconName: "Box",
    image: plasticPartsCustomImg,
    keyPoints: [
      "Application-tailored engineering polymers",
      "Functional snap fits, threads & internal ribs",
      "Tight geometric tolerances conforming to CAD models",
    ],
    detailedSpecs: {
      toolSteel: "Custom Geometry Conforming to 2D/3D Drawings",
      cavityRange: "Small to Medium and High Volume Runs",
      cycleTime: "Optimized for dimensional stability and heat aging",
      tolerance: "Strict geometric dimensioning and tolerancing (GD&T)",
      typicalResins: "Glass-filled nylon, PEEK, Delrin, ABS/PC blend",
      surfaceFinish: "Aesthetic matte, gloss, or spark erosion texture",
    },
    useCases: [
      "Automotive cable clips and electrical sensor housings",
      "Pneumatic valve bodies, manifolds, and wear bushings",
      "Sanitary plumbing components and water meters",
      "Precision toy gears and structural figurines",
    ],
  },
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: "01",
    title: "Product Development",
    description: "Understanding the application, component requirements and production objectives.",
    image: cadProductDesignImg,
    details:
      "Understanding the application, component requirements and production objectives. Our engineering approach considers part geometry, material selection, and tooling feasibility before manufacturing begins.",
    keyDeliverables: [
      "Application & requirement analysis",
      "Component design & feasibility evaluation",
      "Material selection & tooling roadmap",
    ],
  },
  {
    step: "02",
    title: "Mould Design",
    description:
      "Engineering the tooling around component geometry, material and production needs.",
    image: openMouldHeroImg,
    details:
      "Engineering the tooling around component geometry, material and production needs. We design cooling layouts, parting mechanisms, runners, and ejector systems for long-term production reliability.",
    keyDeliverables: [
      "Tooling design around component geometry",
      "Cooling & runner optimization",
      "Core, cavity & ejector kinematics",
    ],
  },
  {
    step: "03",
    title: "Tool Manufacturing",
    description: "Precision machining and mould development within our engineering setup.",
    image: haasVmcImg,
    details:
      "Precision machining and mould development within our engineering setup. High-speed CNC vertical milling, spark erosion EDM, surface grinding, and bench fitting ensure micron-level tool precision.",
    keyDeliverables: [
      "Haas VMC high-precision toolpath milling",
      "Fine spark EDM erosion & surface grinding",
      "Skilled toolmaker bench fitting & blue matching",
    ],
  },
  {
    step: "04",
    title: "Mould Trial & Validation",
    description: "Testing, refinement and evaluation before moving into production.",
    image: heroInjectionMouldImg,
    details:
      "Testing, refinement and evaluation before moving into production. Systematic T0 and T1 mould sampling evaluates cycle performance, part ejection, and dimensional compliance.",
    keyDeliverables: [
      "Initial T0/T1 trial sampling",
      "Tool refinement & cycle evaluation",
      "Sample approval before serial production",
    ],
  },
  {
    step: "05",
    title: "Injection Moulding",
    description: "Controlled manufacturing of engineering plastic components.",
    image: injectionFacilityImg,
    details:
      "Controlled manufacturing of engineering plastic components. Dedicated automatic injection moulding presses process technical resins under strict process parameter monitoring.",
    keyDeliverables: [
      "Controlled parameter injection moulding",
      "Technical & engineering resin processing",
      "Batch-to-batch consistency & stability",
    ],
  },
  {
    step: "06",
    title: "Quality Inspection",
    description: "Checks at critical stages to maintain dimensional and production consistency.",
    image: cmmQualityLabImg,
    details:
      "Checks at critical stages to maintain dimensional and production consistency. Comprehensive metrology using CMM touch probes, optical comparators, and calibrated digital gauges.",
    keyDeliverables: [
      "Critical dimension & GD&T verification",
      "In-process parameter inspection",
      "Final batch quality clearance",
    ],
  },
  {
    step: "07",
    title: "Production & Supply",
    description: "Reliable manufacturing support from approved component to repeat production.",
    image: plasticPartsCustomImg,
    details:
      "Reliable manufacturing support from approved component to repeat production. Consistent batch output, safe packaging, and dependable schedule coordination for repeat customer supply.",
    keyDeliverables: [
      "Approved component mass manufacturing",
      "Protective packaging & batch tracking",
      "Dependable repeat supply schedule",
    ],
  },
];

export const INFRASTRUCTURE_HIGHLIGHTS = [
  {
    title: "In-House Toolroom",
    description:
      "Dedicated mould development and manufacturing capability for production-ready tooling.",
    sub: "TOOLROOM",
    image: toolroomFittingBenchImg,
    detail:
      "Equipped with dedicated mould fitting benches, precision surface grinders, and specialized assembly infrastructure for complete mould fabrication.",
  },
  {
    title: "Haas VMC Machining",
    description:
      "Precision machining support for mould components, complex profiles and tooling requirements.",
    sub: "CNC MACHINING",
    image: haasVmcImg,
    detail:
      "High-speed vertical machining centers ensuring microscopic accuracy, smooth surface finishes, and repeatable tool steel milling.",
  },
  {
    title: "Injection Moulding",
    description:
      "Dedicated moulding capability for engineering plastic components and repeat production.",
    sub: "PRODUCTION CELL",
    image: injectionFacilityImg,
    detail:
      "Automatic injection molding machines operating with closed-loop process parameters for tight-tolerance technical resins.",
  },
  {
    title: "Engineering Support",
    description:
      "Practical manufacturing input from product development through tooling, trials and production.",
    sub: "CAD / CAM",
    image: cadProductDesignImg,
    detail:
      "Digital engineering workstations equipped for 3D solid modeling, mold flow analysis, and first-article CAD verification.",
  },
];

export const WHY_ADVAY_POINTS = [
  {
    title: "Integrated Tooling & Moulding",
    description:
      "Mould development and component production coordinated within one manufacturing ecosystem.",
    iconName: "Layers",
  },
  {
    title: "Prototype-to-Production Support",
    description:
      "Engineering assistance from early-stage development through trials and repeat production.",
    iconName: "PenTool",
  },
  {
    title: "Custom OEM Solutions",
    description:
      "Manufacturing solutions developed around customer-specific components, applications and production requirements.",
    iconName: "Factory",
  },
  {
    title: "Responsive Engineering Support",
    description:
      "Direct communication and practical problem-solving throughout the project lifecycle.",
    iconName: "CheckCircle",
  },
  {
    title: "Production-Focused Approach",
    description:
      "Every decision is made with manufacturability, consistency and long-term production in mind.",
    iconName: "Target",
  },
  {
    title: "Long-Term Collaboration",
    description:
      "Built to support repeat projects, evolving requirements and ongoing manufacturing partnerships.",
    iconName: "ShieldCheck",
  },
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "automotive-engineering",
    name: "Automotive & Engineering",
    description:
      "Precision moulds and engineered plastic components developed for functional, technical and production requirements.",
    highlightPart: "Clips, brackets, sensor housings & mechanical bushings",
    iconName: "Car",
    image: automotiveClipsImg,
  },
  {
    id: "electrical-electronics",
    name: "Electrical & Electronics",
    description:
      "Custom plastic components, housings and tooling for electrical, electronic and related applications.",
    highlightPart: "Switchgear bodies, terminal housings & socket covers",
    iconName: "Zap",
    image: electricalSwitchgearImg,
  },
  {
    id: "industrial-components",
    name: "Industrial Components",
    description:
      "Engineered plastic parts and mould solutions for machinery, equipment and industrial applications.",
    highlightPart: "Gears, rollers, wear pads & pneumatic valve manifolds",
    iconName: "Wrench",
    image: toolroomFittingBenchImg,
  },
  {
    id: "agriculture-irrigation",
    name: "Agriculture & Irrigation",
    description:
      "Plastic components developed for agricultural, irrigation and allied applications.",
    highlightPart: "Drip fittings, sprinkler bodies & pipe joiners",
    iconName: "Sprout",
    image: irrigationDripImg,
  },
  {
    id: "consumer-products",
    name: "Consumer Products",
    description: "Custom moulds and plastic components for functional and everyday-use products.",
    highlightPart: "Enclosures, functional handles & structural shells",
    iconName: "ShoppingBag",
    image: consumerHousingsImg,
  },
  {
    id: "toy-components",
    name: "Toy Components",
    description:
      "Precision moulds and plastic components for toys, educational products and customised applications.",
    highlightPart: "Gears, chassis parts, figurine components & blocks",
    iconName: "Gamepad2",
    image: toyComponentsImg,
  },
  {
    id: "thin-wall-enclosures-boxes",
    name: "Thin-Wall Enclosures & Boxes",
    description:
      "Precision tooling and moulding solutions for lightweight enclosures, containers, cases and thin-wall applications.",
    highlightPart: "Thin-wall containers, modular boxes & utility cases",
    iconName: "Box",
    image: thinWallPackagingImg,
  },
  {
    id: "jewellery-packaging-boxes",
    name: "Jewellery Packaging & Storage Boxes",
    description:
      "Precision moulds and plastic packaging solutions for jewellery boxes, storage cases and presentation containers.",
    highlightPart: "Jewellery display cases, presentation boxes & storage containers",
    iconName: "Package",
    image: jewelleryBoxesImg,
  },
  {
    id: "custom-oem-applications",
    name: "Custom OEM Applications",
    description:
      "Application-specific product development, tooling and manufacturing support tailored to customer requirements.",
    highlightPart: "Turnkey proprietary components manufactured to client specs",
    iconName: "Cpu",
    image: oemProductionCellImg,
  },
];

export interface SelectedWorkItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export const SELECTED_WORK: SelectedWorkItem[] = [
  {
    id: "precision-injection-moulds",
    title: "Precision Injection Moulds",
    description:
      "Production-ready tooling developed for accuracy, repeatability and long-term use.",
    image: heroInjectionMouldImg,
    category: "TOOLING",
  },
  {
    id: "engineering-plastic-components",
    title: "Engineering Plastic Components",
    description:
      "Custom components manufactured to meet functional, dimensional and application-specific requirements.",
    image: plasticPartsCustomImg,
    category: "COMPONENTS",
  },
  {
    id: "thin-wall-enclosures-boxes",
    title: "Thin-Wall Enclosures & Boxes",
    description:
      "Tooling and moulding solutions for lightweight enclosures, cases and packaging applications.",
    image: thinWallPackagingImg,
    category: "ENCLOSURES",
  },
  {
    id: "jewellery-packaging-storage",
    title: "Jewellery Packaging & Storage Boxes",
    description:
      "Precision-moulded packaging and storage solutions for jewellery and presentation products.",
    image: jewelleryBoxesImg,
    category: "PACKAGING",
  },
  {
    id: "oem-components",
    title: "OEM Components",
    description: "From product development and tooling through moulding and repeat production.",
    image: oemProductionCellImg,
    category: "OEM",
  },
];

export const QUALITY_PILLARS = [
  {
    title: "Tool & Component Inspection",
    description:
      "Critical dimensions and manufacturing details are checked throughout development and production.",
    iconName: "CheckCircle",
  },
  {
    title: "Process Control",
    description:
      "Production parameters are monitored to maintain consistency across repeat batches.",
    iconName: "Settings",
  },
  {
    title: "Trial & Validation",
    description:
      "Mould trials help identify, evaluate and refine performance before regular production.",
    iconName: "Target",
  },
  {
    title: "Final Inspection",
    description: "Finished components are reviewed against defined requirements before dispatch.",
    iconName: "ShieldCheck",
  },
  {
    title: "Repeatable Production",
    description:
      "Our manufacturing approach is built around consistency, reliability and long-term production support.",
    iconName: "Layers",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What files can I send for a quotation?",
    answer: "STEP, IGES, 2D drawings or available product information.",
  },
  {
    question: "Can Advay support product development before mould manufacturing?",
    answer:
      "Yes, we can support the project from product development through tooling and production.",
  },
  {
    question: "Do you manufacture custom OEM plastic components?",
    answer:
      "Yes. We support application-specific OEM requirements based on customer drawings and specifications.",
  },
  {
    question: "Can you manufacture both the mould and the final component?",
    answer:
      "Yes. Our integrated capabilities support tooling development, mould trials and component production.",
  },
  {
    question: "Can we discuss confidentiality or NDA requirements?",
    answer:
      "Yes. Project confidentiality requirements can be discussed before technical information is shared.",
  },
];
