export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  imageUrl: string;
  imageAlt: string;
  tag: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  specifications: string[];
  imageUrl: string;
  imageAlt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "lathe" | "needle-loom" | "spare-parts" | "fabrication";
  categoryLabel: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  deliverables: string;
}

export const COMPANY_CONFIG = {
  name: "MS Engineering Works",
  shortName: "MS Engineering Works",
  tagline: "Building Solutions. Engineering Trust.",
  foundedYear: "2008",
  phoneDisplay: "+91 92591 36185",
  phoneRaw: "+919259136185",
  secondaryPhone: "+91 74569 17763",
  secondaryPhoneRaw: "+917456917763",
  email: "info@msengineeringworks.com",
  supportEmail: "info@msengineeringworks.com",
  whatsappNumber: "919259136185",
  whatsappMessage: "Hello MS Engineering Works, I would like to inquire about your machinery and engineering services.",
  address: {
    street: "Gali No.2, Santpura Gali, behind Vishal Mega Mart",
    area: "Adarsh Nagar",
    city: "Modinagar",
    state: "Uttar Pradesh",
    postalCode: "201204",
    country: "India",
    fullAddress: "Gali No.2, Santpura Gali, behind Vishal Mega Mart, Adarsh Nagar, Modinagar, Uttar Pradesh 201204",
  },
  workingHours: "Open · Closes 8 to 6 pm",
  canonicalUrl: "https://www.msengineeringworks.com",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "lathe-machine-work",
    slug: "lathe-machine-work",
    title: "Lathe Machine Work (Kharad Work)",
    subtitle: "High-Precision Heavy & Light Machining",
    shortDescription:
      "Precision lathe turning, facing, threading, boring, and taper turning services for industrial shafts, rollers, bushes, and custom mechanical components.",
    fullDescription:
      "Equipped with advanced heavy-duty lathe machines and high-precision tooling, we deliver micro-tolerance turning and Kharad work for both prototype components and mass production runs.",
    features: [
      "Micro-tolerance turning down to ±0.01 mm",
      "Shafts, rollers, bushes, collars, & flanges",
      "Mild steel, alloy steel, stainless steel & brass",
      "Single-piece prototype & large batch job work",
    ],
    imageUrl: "/img/kharad.jpg",
    imageAlt: "Industrial lathe machine turning a precision steel cylindrical shaft in workshop",
    tag: "Core Capability",
  },
  {
    id: "needle-loom-manufacturing",
    slug: "needle-loom-machine-manufacturing",
    title: "Needle Loom Machine Manufacturing",
    subtitle: "High-Speed Narrow Fabric Weaving Machines",
    shortDescription:
      "Complete manufacturing of heavy-duty, vibration-free narrow fabric needle loom machines engineered for elastic tapes, webbing, ribbons, and industrial straps.",
    fullDescription:
      "Our needle loom machinery features robust cast frames, high-precision link chains, precision harness frames, and dynamically balanced shafts for continuous 24/7 industrial production.",
    features: [
      "Rigid cast-iron vibration-damped construction",
      "High operating speeds with minimal thread breakage",
      "Suitable for elastic, rigid tape, nylon & PP webbing",
      "Custom space-saving and high-output configurations",
    ],
    imageUrl: "/img/loom.png",
    imageAlt: "High-speed industrial needle loom machine weaving technical textile narrow fabrics",
    tag: "Machinery OEM",
  },
  {
    id: "needle-loom-spare-parts",
    slug: "needle-loom-spare-parts-manufacturing",
    title: "Needle Loom Spare Parts",
    subtitle: "Precision Replacement & Wear Components",
    shortDescription:
      "OEM-standard needle loom spare parts including pattern chain links, weft needles, latch needles, shed levers, connecting rods, and take-up rollers.",
    fullDescription:
      "Engineered from hardened alloy steels with heat treatment and hard chrome plating for maximum wear resistance, longevity, and seamless compatibility with leading loom models.",
    features: [
      "Pattern chains, link plates, & shed cams",
      "Hardened weft needles & reed wire assemblies",
      "Connecting arms, eccentric shafts, & gears",
      "Custom dimensional matching for imported machines",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Precision machined metal gears and mechanical needle loom spare parts",
    tag: "High Demand",
  },
  {
    id: "custom-die-manufacturing",
    slug: "custom-die-manufacturing",
    title: "Custom Die Manufacturing",
    subtitle: "Tooling, Punching & Stamping Dies",
    shortDescription:
      "Precision design and manufacturing of custom stamping dies, blanking dies, forming dies, and progressive press tools tailored to exacting industrial specifications.",
    fullDescription:
      "Using premium tool steels (D2, D3, HCHCr) and precision grinding techniques, our dies guarantee sharp cutting edges, exceptional cycle life, and consistent repeatability.",
    features: [
      "Blanking, piercing, forming & progressive dies",
      "Hardened and tempered tool steel grades",
      "CAD/CAM guided design and tight tolerances",
      "Die re-sharpening, testing, and maintenance",
    ],
    imageUrl: "/img/die.jpg",
    imageAlt: "Custom precision industrial metal die and tool manufacturing",
    tag: "Tool & Die",
  },
  {
    id: "drilling-grinding-welding",
    slug: "drilling-grinding-welding-services",
    title: "Drilling, Grinding & Welding",
    subtitle: "Surface Finishing & Heavy Fabrication",
    shortDescription:
      "Comprehensive workshop machining including radial drilling, surface grinding, cylindrical grinding, and certified MIG/TIG welding fabrication.",
    fullDescription:
      "Our multi-capability workshop handles structural welding frames, base plates, precise hole tapping, bore alignments, and micron-level surface finishes on all industrial metals.",
    features: [
      "Precision surface and cylindrical grinding",
      "Heavy radial drilling and multi-spindle tapping",
      "Structural MIG, TIG, and ARC welding fabrication",
      "Stress-relieved weldments and machine frames",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Industrial welder working on structural metal fabrication with sparks flying",
    tag: "Machining & Fab",
  },
  {
    id: "repairing-and-maintenance",
    slug: "industrial-machine-repairing-maintenance",
    title: "Industrial Repairing & Maintenance",
    subtitle: "Overhauling, Reconditioning & Breakdown Support",
    shortDescription:
      "Expert troubleshooting, mechanical reconditioning, spindle rebuilds, alignment corrections, and routine preventive maintenance for factory machinery.",
    fullDescription:
      "We minimize plant downtime with prompt diagnosis, on-site disassembly, precision shaft re-sleeving, bearing replacements, and total overhauling of textile and engineering machinery.",
    features: [
      "Complete needle loom reconditioning & tuning",
      "Lathe spindle, carriage & headstock rebuilding",
      "Emergency breakdown repair & wear part replacement",
      "Annual maintenance contracts (AMC) available",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Industrial technician repairing and servicing heavy manufacturing machinery",
    tag: "Rapid Support",
  },
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "prod-needle-loom",
    slug: "needle-loom-machines",
    title: "High-Speed Narrow Fabric Needle Loom Machine",
    category: "Machinery",
    description:
      "Heavy-duty weaving machine engineered for high-output production of elastic and non-elastic tape, satin ribbons, webbing, and medical bandages.",
    specifications: [
      "Operating Speeds: Up to 1200+ RPM",
      "Heald Frames: 8 to 16 frame options",
      "Cast iron heavy frame for vibration suppression",
      "Automatic yarn stop motion sensors",
    ],
    imageUrl: "/img/loom.png",
    imageAlt: "Industrial high speed needle loom weaving machine",
  },
  {
    id: "prod-loom-spare-parts",
    slug: "needle-loom-spare-parts",
    title: "Needle Loom Spare Parts & Accessories",
    category: "Spare Parts",
    description:
      "Precision-machined replacement parts including link chains, pattern chain plates, weft needles, latch needles, shed levers, and gearboxes.",
    specifications: [
      "Case hardened and heat-treated alloy steel",
      "Hard chrome plating for extended wear cycle",
      "100% interchangeable with standard loom makes",
      "High tensile resistance under high-RPM loads",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Set of precision industrial spare parts and gear assemblies for needle loom",
  },
  {
    id: "prod-custom-components",
    slug: "custom-machine-components",
    title: "Custom Machined Mechanical Components",
    category: "Custom Machining",
    description:
      "Tailor-made industrial machine parts manufactured to custom drawings, CAD models, or physical sample components with tight tolerances.",
    specifications: [
      "Materials: MS, EN8, EN19, EN31, SS304, SS316, Brass",
      "Precision turning, milling, and keyway slotting",
      "Surface finish: Ra 0.4 to 1.6 μm",
      "Comprehensive dimensional inspection report",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Machined mechanical components and heavy duty steel fixtures",
  },
  {
    id: "prod-industrial-dies",
    slug: "industrial-dies-tooling",
    title: "Industrial Stamping & Forming Dies",
    category: "Tool & Die",
    description:
      "Engineered press tools, sheet metal stamping dies, piercing punches, and forming blocks crafted for high-durability production stamping.",
    specifications: [
      "High Carbon High Chromium (HCHCr / D2 / D3) steel",
      "Vacuum hardened to 58-62 HRC",
      "Precision ground guide pillars and bushes",
      "Consistent burr-free component output",
    ],
    imageUrl: "/img/die.jpg",
    imageAlt: "Precision industrial metal tooling and stamping die set",
  },
  {
    id: "prod-precision-turned",
    slug: "precision-turned-components",
    title: "Precision Turned & Ground Shafts",
    category: "Turned Components",
    description:
      "Precision cylindrical shafts, drive rollers, splined shafts, flanged bushes, and threaded spindle assemblies machined on heavy lathe units.",
    specifications: [
      "Diameters from 10 mm to 600 mm",
      "Length up to 3500 mm between centers",
      "Precision ground concentricity and runout testing",
      "Induction hardening or nitriding on request",
    ],
    imageUrl: "/img/kharad.jpg",
    imageAlt: "Precision turned cylindrical metal shaft after lathe machining",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Customer Requirement & Sample Study",
    description:
      "We thoroughly analyze your engineering drawings, 3D CAD files, or physical component samples to assess metallurgical specs, tolerances, and production volume.",
    deliverables: "Design review, feasibility report & competitive quote",
  },
  {
    stepNumber: "02",
    title: "Design, Tooling & Planning",
    description:
      "Our senior engineering team selects raw material grades, prepares tool paths, designs custom fixtures or dies, and establishes a sequential machining plan.",
    deliverables: "Process sheet, material selection & tooling setup",
  },
  {
    stepNumber: "03",
    title: "Precision Manufacturing & Machining",
    description:
      "Operations commence across our lathe machines, drilling, milling, surface grinding, and certified welding units under continuous operator supervision.",
    deliverables: "Controlled machining, heat treatment & surface finishing",
  },
  {
    stepNumber: "04",
    title: "Rigorous Quality Inspection",
    description:
      "Every finished component is subjected to strict dimensional metrology, hardness testing, runout verification, and visual surface inspection.",
    deliverables: "Quality assurance sign-off & tolerance verification",
  },
  {
    stepNumber: "05",
    title: "Protective Packaging & Final Delivery",
    description:
      "Finished assemblies and parts receive anti-rust oil treatment, secure industrial packaging, and are dispatched for on-time domestic or international delivery.",
    deliverables: "Safe transit packing & on-time doorstep dispatch",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Heavy-Duty Lathe Turning Operation",
    category: "lathe",
    categoryLabel: "Lathe Work",
    description: "Precision metal turning of alloy steel shaft with tight concentricity tolerance.",
    imageUrl:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Lathe machine turning metal shaft in industrial manufacturing workshop",
  },
  {
    id: "gal-2",
    title: "High-Speed Needle Loom Assembly",
    category: "needle-loom",
    categoryLabel: "Needle Loom",
    description: "Precision assembly of narrow fabric needle loom machine with multi-frame drive.",
    imageUrl:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Industrial needle loom machine with weaving threads and harness frames",
  },
  {
    id: "gal-3",
    title: "Machined Industrial Gears & Loom Parts",
    category: "spare-parts",
    categoryLabel: "Spare Parts",
    description: "Hardened steel gears and wear-resistant mechanical components for textile machinery.",
    imageUrl:
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Precision machined gears and metal mechanical components",
  },
  {
    id: "gal-4",
    title: "Structural MIG Welding & Machine Frame",
    category: "fabrication",
    categoryLabel: "Welding & Fabrication",
    description: "Certified MIG welding on heavy-gauge industrial machine base frame.",
    imageUrl:
      "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Welder fabricating industrial steel machine frame with protective visor",
  },
  {
    id: "gal-5",
    title: "Precision Tool & Die Block Machining",
    category: "spare-parts",
    categoryLabel: "Die & Tooling",
    description: "Hardened D2 tool steel die manufacturing for progressive sheet metal stamping.",
    imageUrl:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Precision metal die set and stamping tooling block",
  },
  {
    id: "gal-6",
    title: "Radial Drilling & Hole Boring Operations",
    category: "lathe",
    categoryLabel: "Drilling & Machining",
    description: "Multi-axis radial drilling and tapping on heavy machine bed castings.",
    imageUrl:
      "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Industrial drilling operation on heavy metal plate in engineering facility",
  },
  {
    id: "gal-7",
    title: "Industrial Machine Maintenance & Overhauling",
    category: "fabrication",
    categoryLabel: "Maintenance",
    description: "Technician inspecting spindle bearings and mechanical gear train during rebuild.",
    imageUrl:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Industrial engineer servicing mechanical machine drive system",
  },
  {
    id: "gal-8",
    title: "Precision Surface Grinding for Flatness",
    category: "spare-parts",
    categoryLabel: "Grinding Work",
    description: "Micron-level surface grinding on hardened guide rails and die plates.",
    imageUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Precision grinding machine finishing metal plate surface to mirror smoothness",
  },
  {
    id: "gal-9",
    title: "Complete Manufacturing Workshop Floor",
    category: "fabrication",
    categoryLabel: "Workshop Facility",
    description: "Overview of our modern engineering plant equipped with heavy-duty machine tools.",
    imageUrl:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Spacious industrial workshop with rows of precision machining equipment",
  },
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: "Quality Workmanship",
    description:
      "Zero-compromise craftmanship with precision ground surfaces, deburred edges, and certified metallurgy for extreme durability under harsh industrial conditions.",
    badge: "ISO Standard Practices",
  },
  {
    title: "Precision Engineering",
    description:
      "State-of-the-art lathe machines, calibrated metrology tools, and micron-level dimensional accuracy adhering strictly to engineering blueprints.",
    badge: "±0.01mm Tolerance",
  },
  {
    title: "Custom Manufacturing",
    description:
      "Complete flexibility to manufacture from 2D/3D CAD drawings or reverse engineer from legacy worn-out parts without minimum batch constraints.",
    badge: "Custom Job Work",
  },
  {
    title: "Reliable & On-Time Delivery",
    description:
      "Streamlined production planning and inventory buffers that guarantee committed lead times to prevent expensive factory downtime.",
    badge: "Strict Deadlines",
  },
  {
    title: "Experienced Technical Team",
    description:
      "Master lathe machinists (Kharad specialists), toolmakers, and loom technicians bringing decades of combined shop-floor problem-solving expertise.",
    badge: "Skilled Technicians",
  },
  {
    title: "Complete Industrial Solutions",
    description:
      "Single-source partner handling everything from raw casting procurement to precision machining, heat treatment, fabrication, and final machine commissioning.",
    badge: "Turnkey Capability",
  },
];
