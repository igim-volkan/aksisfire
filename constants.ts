import { NavItem } from './types';

export const NAVIGATION_DATA: NavItem[] = [
  {
    label: "Fire Solutions",
    type: "mega",
    path: "/fire-solutions",
    children: [
      { label: "CO₂ Fire Extinguishing System", path: "/solutions/co2-system" },
      { label: "Deep Fat Fryer Fire Extinguishing System", path: "/solutions/deep-fat-fryer" },
      { label: "Deck Foam Fire Fighting System", path: "/solutions/deck-foam" },
      { label: "Water Spray Fire Extinguishing System", path: "/solutions/water-spray" },
      { label: "Fire Detection & Alarm System", path: "/solutions/fire-detection-alarm" },
      { label: "External Fire Fighting (Fi-Fi) System", path: "/solutions/fi-fi" },
      { label: "Dry Powder Fire Extinguishing System", path: "/solutions/dry-powder" },
      { label: "Drencher Fire Protection System", path: "/solutions/drencher" },
      { label: "Local Application Watermist System", path: "/solutions/local-watermist" },
      { label: "Clean Gas System (AKSIS FK5112 System)", path: "/solutions/clean-gas" },
      { label: "Sprinkler System", path: "/solutions/sprinkler" },
      { label: "Smoke Sampling System", path: "/solutions/smoke-sampling" },
      { label: "Inergen System", path: "/solutions/inergen" },
      { label: "Oil Mist Detection System", path: "/solutions/oil-mist-detection" },
      { label: "Gas Detection System", path: "/solutions/gas-detection" },
    ]
  },
  {
    label: "Products",
    type: "link",
    path: "/products",
  },
  {
    label: "Applications",
    type: "link",
    path: "/application"
  },
  {
    label: "Test & Research",
    type: "link",
    path: "/test-research"
  },
  {
    label: "About Us",
    type: "dropdown",
    path: "/about",
    children: [
      { label: "Who We Are", path: "/about/who-we-are" },
      { label: "What We Do", path: "/about/what-we-do" },
      { label: "Career", path: "/about/career" },
      { label: "News", path: "/about/news" },
      { label: "Our Certificates", path: "/about/certificates" },
    ]
  },
  {
    label: "Contact Us",
    type: "dropdown",
    path: "/contact",
    children: [
      { label: "Contact Us", path: "/contact/main" },
      { label: "Global Network", path: "/contact/agents" },
      { label: "After Sales", path: "/contact/after-sales" },
    ]
  }
];

export const HERO_SLIDES = [
  {
    image: "https://picsum.photos/1920/1080?random=1",
    title: "Advanced Fire Protection",
    subtitle: "Protecting lives and assets with state-of-the-art fire suppression technology."
  },
  {
    image: "https://picsum.photos/1920/1080?random=2",
    title: "Marine & Industrial Safety",
    subtitle: "Certified solutions for the most demanding environments on land and sea."
  }
];

export const PRODUCT_CATALOG = [
  {
    id: 1,
    name: "Pilot Vent Valve",
    category: "Valves",
    image: "/pilot-vent-valve.jpg",
    description: "High quality pilot vent valve for fire suppression systems.",
    path: "/products/pilot-vent-valve",
    certifications: [],
    specs: { material: "Brass", pressure: "High" }
  },
  {
    id: 2,
    name: "Safety Valve",
    category: "Valves",
    image: "/safety-valve.jpg",
    description: "High performance safety valve for effective pressure relief and system protection.",
    path: "/products/safety-valve",
    certifications: [],
    specs: { material: "Carbon Steel", pressure: "High" }
  },
  {
    id: 3,
    name: "Shuttle Valve",
    category: "Valves",
    image: "/shuttle-valve.jpg",
    description: "Reliable shuttle valve for directional control in fire suppression systems.",
    path: "/products/shuttle-valve",
    certifications: [],
    specs: { material: "Brass", pressure: "Medium" }
  },
  {
    id: 4,
    name: "CO₂ Hose",
    category: "Hoses",
    image: "/co2-hose.jpg",
    description: "High-pressure flexible hose for CO₂ discharge and pilot lines.",
    path: "/products/co2-hose",
    certifications: [],
    specs: { material: "Rubber/Steel", pressure: "High" }
  },
  {
    id: 5,
    name: "CO₂ Pilot Cylinder 2L",
    category: "Cylinders",
    image: "/co2-pilot-cylinder-2l.jpg",
    description: "2 Liter seamless steel pilot cylinder for system actuation.",
    path: "/products/co2-pilot-cylinder-2l",
    certifications: ["TPED"],
    specs: { material: "Steel", pressure: "High" }
  },
  {
    id: 6,
    name: "FK Tüpü",
    category: "Cylinders",
    image: "/fk-cylinder.jpg",
    description: "FK 5-1-12 Extinguishing Cylinder for clean gas systems.",
    path: "/products/fk-cylinder",
    certifications: ["TPED"],
    specs: { material: "Steel", pressure: "High" }
  },
  {
    id: 7,
    name: "Cargo Hold Smoke Detection Panel",
    category: "Detection",
    image: "/smoke-detection-panel.jpg",
    description: "Advanced control panel for cargo hold smoke detection systems.",
    path: "/products/smoke-detection-panel",
    certifications: [],
    specs: { material: "Steel/Electronics", pressure: "N/A" }
  },
  {
    id: 8,
    name: "Fan Unit",
    category: "Ventilation",
    image: "/fan-unit.jpg",
    description: "High-performance fan unit for smoke extraction and ventilation.",
    path: "/products/fan-unit",
    certifications: [],
    specs: { material: "Steel/Aluminum", pressure: "N/A" }
  }
];

export const NEWS_DATA = [
  {
    id: 6,
    slug: "aksisfire-exhibiting-2026-bosphorus-boat-show",
    title: "AKSISFIRE will be exhibiting at the 2026 Bosphorus Boat Show.",
    date: "March 2026",
    image: "/boat-show.jpg",
    excerpt: "We would be delighted to welcome industry professionals to meet our team and learn more about our fixed marine fire suppression systems at the 2026 Bosphorus Boat Show.",
    content: "We would be delighted to welcome industry professionals who would like to meet our team and learn more about our fixed marine fire suppression systems and engineering expertise. We have 12 complimentary invitations available for the first 12 professionals who contact us via direct message. We look forward to connecting with you at the show. ⚓"
  },
  {
    id: 1,
    slug: "aksisfire-signature-is-vapur-project",
    title: "The AKSISFIRE Signature on the İş Vapur Project: Safe and Environmentally Friendly Solutions",
    date: "January 2026",
    image: "/news-is-vapur.jpg",
    excerpt: "AKSISFIRE integrates environmentally friendly clean gas systems in the prestigious İş Vapur project at Galataport.",
    content: "In the İş Vapur project, built by Haliç Shipyard for İşbank and now operating at Galataport, AKSISFIRE integrated environmentally friendly and human-safe AKSIS FK5112 clean gas and water-based fire suppression systems, providing comprehensive and reliable fire protection throughout the vessel’s infrastructure; we thank Haliç Shipyard and İşbank for choosing us for this project."
  },
  {
    id: 2,
    slug: "rewarding-dedication-with-partnership",
    title: "Rewarding Dedication with Partnership",
    date: "December 2025",
    image: "/news-rewarding-dedication.jpg",
    excerpt: "Celebrating long-term commitment as key team members become partners in AKSISFIRE.",
    content: "We are pleased to announce that our Project Director Engin Eraydın, Aftersales Manager Mehmet Mutlu, and Production and R&D Manager Görkem Berk Kunal, each of whom has dedicated over a decade of service to AKSISFIRE, have become partners in our company. We warmly congratulate and wish them good luck as they step into this exciting new challenge."
  },
  {
    id: 3,
    slug: "first-graduates-completed-training-aksisfire-academy",
    title: "The First Graduates Completed Training at Aksisfire Academy",
    date: "June 2025",
    image: "/news-academy-graduates.jpg",
    excerpt: "AKSISFIRE Academy proudly celebrates its first graduates who completed professional training on Marine Fire Protection.",
    content: "AKSISFIRE Academy proudly celebrates its first graduates! 🎓 Our participants have completed professional training on Marine Fire Protection and Detection systems, gaining both theoretical knowledge and hands-on experience. Stay tuned for upcoming training sessions!"
  },
  {
    id: 4,
    slug: "first-turkish-made-fire-suppression-system-nato-ship",
    title: "First Turkish-Made Fire Suppression System on Nato Ship",
    date: "March 2025",
    image: "/news-nato-ship.jpg",
    excerpt: "A historic milestone: AKSISFIRE delivers the fire suppression system for the MPS TRIGLAV military ship of the Slovenian Navy.",
    content: "AKSISFIRE Achieves a Milestone in the Defense Industry! Desan Shipyard, the first private Turkish shipyard to modernize a military ship belonging to a NATO and EU member country, has successfully designed, manufactured, and delivered the fire suppression system for the MPS TRIGLAV military ship of the Slovenian Navy, produced by AKSISFIRE. With this project, AKSISFIRE has accomplished a first in Turkey. The AKSIS FK5112 fire suppression system, produced in Turkey, has been delivered on a military ship belonging to a NATO member country for the first time. We continue to represent Turkey on the global stage with our solutions that ensure the highest level of safety. We will keep proving the engineering strength of the Turkish defense industry on the international stage."
  },
  {
    id: 5,
    slug: "delivering-excellence-138-shipset-contracts-2024",
    title: "Delivering Excellence in Fire Protection: 138 Shipset of Contracts Signed in 2024",
    date: "December 2024",
    image: "/news-shipset-contracts.jpg",
    excerpt: "AKSISFIRE signs contracts for 138 shipset of fire protection projects, reinforcing our market leadership.",
    content: "We’re excited to announce that we have signed contracts for 138 shipset of fire protection projects in 2024, reinforcing our commitment to safety and excellence in the marine and offshore industries. Thank you to our team and partners for making this milestone possible!"
  }
];

export const SOLUTIONS_CONTENT: Record<string, { title: string; image: string; description: string; content: string }> = {
  "co2-system": {
    title: "CO₂ Fire Extinguishing System",
    image: "/fixed-co2-system.png",
    description: "Provend fixed fire protection solution for high-risk enclosed spaces in marine applications.",
    content: "The CO₂ Fire Extinguishing System is a proven fixed fire protection solution specifically engineered for high-risk enclosed spaces in marine applications. The system consists of high-pressure CO₂ cylinders, precisely designed manifold and distribution piping, discharge nozzles, and integrated control equipment, all configured through a project-based engineering approach specialized to each vessel.\n\nAll components are manufactured in compliance with IMO and SOLAS requirements and tested in accordance with the rules of relevant classification societies. Widely preferred for the protection of critical areas such as engine rooms, pump rooms, and cargo holds, the system provides a reliable fire safety solution for container ships, oil and chemical tankers, LNG/LPG carriers, Ro-Ro vessels, offshore support vessels, and passenger ships."
  },
  "deep-fat-fryer": {
    title: "Deep Fat Fryer Fire Extinguishing System",
    image: "/deep-fat-fryer.jpg",
    description: "Dedicated local application solution designed to protect galley fryers onboard vessels.",
    content: "The Deep Fat Fryer Fire Extinguishing System is a dedicated local application solution specifically designed to protect galley fryers onboard vessels. The system consists of an extinguishing agent cylinder, stainless steel distribution piping, specially engineered discharge nozzles, and manual and/or automatic activation mechanisms. It is engineered to provide rapid and effective response against high-risk cooking oil fires typically associated with deep fat frying equipment.\n\nDesigned for marine applications, the system is configured in compliance with IMO and SOLAS requirements and tested in accordance with the rules of relevant classification societies. Installed directly at fryer units within ship galleys, it provides reliable protection for passenger ships, cruise vessels, Ro-Ro vessels, offshore support vessels, and other commercial ships with intensive galley operations, offering a compact and reliable fire safety solution."
  },
  "deck-foam": {
    title: "Deck Foam Fire Fighting System",
    image: "/deck-foam-system.png",
    description: "Fixed fire protection solution developed to protect open deck areas against flammable liquid fires.",
    content: "The Deck Foam Fire Fighting System is a fixed fire protection solution specifically developed to protect open deck areas against flammable liquid fires, particularly on tanker vessels. The system consists of a foam concentrate tank, foam pump, proportioning unit, deck foam monitors, and a dedicated distribution network. It is engineered to provide effective surface coverage over large areas, enabling rapid control of hydrocarbon pool fires and preventing re-ignition.\n\nDesigned for marine applications, the system is configured in compliance with IMO and SOLAS requirements and tested in accordance with the rules of relevant classification societies. Primarily installed on oil and chemical tankers, the system ensures reliable protection of cargo deck areas where flammable substances are handled, offering a high-capacity fire safety solution for demanding marine environments."
  },
  "water-spray": {
    title: "Water Spray Fire Extinguishing System",
    image: "/water-spray-system.jpg",
    description: "Fixed fire protection and cooling solution designed for areas and equipment where rapid fire spread may occur.",
    content: "The Water Spray Fire Extinguishing System is a fixed fire protection and cooling solution designed for areas and equipment where rapid fire spread may occur. The system operates through open-type spray nozzles that discharge water in fine droplets, creating a high cooling effect.\n\nFor space protection applications, nozzles are evenly arranged—typically at ceiling level—to ensure uniform water distribution throughout the hazard area. In equipment protection systems, nozzles are specifically positioned and directed toward defined high-risk objects to provide targeted suppression or preventive cooling.\n\nDesigned for marine applications, the system is configured in compliance with IMO and SOLAS requirements and tested in accordance with the rules of relevant classification societies. It is widely used for the protection of fuel transfer areas, transformer rooms, deck equipment, and other special hazard spaces onboard tankers, LNG/LPG carriers, offshore support vessels, and various commercial ships."
  },
  "fire-detection-alarm": {
    title: "Fire Detection & Alarm System",
    image: "/fire-detection-alarm.png",
    description: "Integrated safety solution designed to ensure early fire detection and immediate response onboard vessels.",
    content: "The Fire Detection & Alarm System is an integrated safety solution designed to ensure early fire detection and immediate response onboard vessels. The system comprises smoke, heat, and flame detectors, manual call points, addressable or conventional control panels, audible and visual alarm devices, and monitoring modules, all configured to provide continuous system supervision.\n\nThrough the central control panel, all zones and zone devices are continuously monitored, with real-time indication of alarm, fault, and system status conditions.\n\nDesigned in compliance with IMO and SOLAS requirements and tested according to the rules of relevant classification societies, the system provides reliable protection for engine rooms, accommodation areas, cargo spaces, bridge, control rooms, and other critical spaces onboard tankers, container ships, LNG/LPG carriers, Ro-Ro vessels, offshore support vessels, and passenger ships."
  },
  "fi-fi": {
    title: "External Fire Fighting (Fi-Fi) System",
    image: "/fi-fi-system.png",
    description: "High-capacity fire protection solution designed to enable vessels to support firefighting operations.",
    content: "The External Fire Fighting (Fi-Fi) System is a high-capacity fire protection solution designed to enable vessels to support firefighting operations for other ships, port facilities, and offshore platforms. The system consists of high-capacity fire pumps, water and/or foam monitors, remote control systems, foam proportioning units, and dedicated piping infrastructure. It delivers powerful water or foam jets over long distances, ensuring effective and reliable intervention in demanding marine environments.\n\nThe systems are engineered in accordance with IMO and SOLAS requirements and certified based on the Fi-Fi class notation rules of relevant classification societies. Installed primarily on tug boats, offshore support vessels, and dedicated fire fighting ships, the Fi-Fi system provides a high-performance solution for ship-to-ship and ship-to-shore external fire response operations."
  },
  "dry-powder": {
    title: "Dry Powder Fire Extinguishing System",
    image: "/dry-powder-system.png",
    description: "Fixed fire protection solution designed to provide rapid and highly effective suppression of flammable gas and liquid fires.",
    content: "The Dry Powder Fire Extinguishing System is a fixed fire protection solution designed to provide rapid and highly effective suppression of flammable gas and liquid fires. The system consists of a dry powder storage tank, pressurization unit, distribution piping and hose stations.\n\nThe extinguishing powders used in the system are highly efficient, quick-acting agents. The immediate suppression effect of the powder cloud is achieved through both a smothering effect and an anticatalytic action, which chemically interferes with the combustion process. The powders are primarily composed of non-toxic inorganic salts combined with waterproofing and flow-enhancing additives and are suitable for Class A, B, C, and D fires.\n\nDesigned in compliance with IMO and SOLAS requirements and tested according to relevant classification society rules, the system is widely used for the protection of LNG carriers and LNG-fueled vessels, as well as gas tankers and high-risk deck operation areas, providing a robust and reliable fire safety solution for demanding marine environments."
  },
  "drencher": {
    title: "Drencher Fire Protection System",
    image: "/drencher-system.jpg",
    description: "Fixed water-based solution designed to protect specific spaces and structural boundaries onboard vessels.",
    content: "The Drencher Fire Protection System is a fixed water-based solution designed to protect specific spaces and structural boundaries onboard vessels against fire exposure. The system consists of fire pumps, control panels, deluge/drencher control valves, distribution piping, and open-type drencher nozzles. Upon activation, all nozzles operate simultaneously to create a continuous water curtain over the protected area.\n\nThe generated water curtain reduces heat transfer between adjacent spaces, effectively cools structural elements, and limits fire spread.\n\nDesigned in compliance with IMO and SOLAS requirements and tested in accordance with relevant classification society rules, drencher systems are widely used for the protection of vehicle decks on Ro-Ro vessels, accommodation boundaries, under-deck spaces, and other special hazard areas onboard tankers, passenger ships, and various commercial vessels, offering a reliable fire protection solution."
  },
  "local-watermist": {
    title: "Local Application Watermist System",
    image: "/local-watermist.png",
    description: "Integrated fire detection and suppression solution designed to protect high-risk machinery.",
    content: "The Local Application Watermist System is an integrated fire detection and suppression solution designed to protect high-risk machinery and critical equipment onboard vessels. The system operates with two independent detectors installed directly above the protected equipment. Upon confirmation from both detectors, the system automatically activates the relevant section valve and discharges water mist precisely onto the fire source.\n\nThe system consists of a pump unit, control panel, section valves, stainless steel piping network, specially engineered nozzles, and audible alarm devices (sounders). Audible warnings are provided prior to and during discharge to enhance personnel safety. The fine water droplets deliver an intensive cooling effect, while the generated steam creates a smothering effect at the seat of the fire, increasing suppression efficiency.\n\nDesigned in accordance with IMO and SOLAS requirements, the system is used for the protection of main engines, auxiliary engines, generators, boilers, and fuel modules, and is widely applied onboard tankers, container vessels, LNG/LPG carriers, and offshore support vessels as a compact and reliable fire protection solution."
  },
  "clean-gas": {
    title: "Clean Gas System (AKSIS FK5112 System)",
    image: "/clean-gas-system.png",
    description: "Fixed fire suppression solution designed to protect sensitive and critical spaces onboard vessels.",
    content: "The Clean Gas System (AKSIS FK5112 System) is a fixed fire suppression solution designed to protect sensitive and critical spaces onboard vessels. In the event of a fire, the system discharges the clean agent (AKS5112) uniformly into the protected space, ensuring rapid and effective suppression without leaving residue or causing damage to sensitive equipment.\n\nThe system consists of cylinder assemblies, valve and actuator mechanisms, a distribution piping network, discharge nozzles, and a control panel. Activation can be performed pneumatically, manually, or electrically. Prior to discharge, audible and visual warnings are provided to ensure space safety and support a controlled evacuation process.\n\nAksisfire’s FK 5-1-12 clean agent suppression systems are available for fishing boats, offshore vessels, tugboats, coast and inland navigation vessels, and yachts. The system is particularly suitable for the protection of control rooms, electrical and electronic equipment spaces, control cabinets, and smaller machinery rooms onboard ships."
  },
  "sprinkler": {
    title: "Sprinkler System",
    image: "/sprinkler-system.png",
    description: "Automatic fire suppression solution designed to protect accommodation and living spaces onboard vessels.",
    content: "The Sprinkler System is an automatic fire suppression solution designed to protect accommodation and living spaces onboard vessels. When the ambient temperature rises to a predetermined level due to fire, the glass bulb within the sprinkler head ruptures, allowing water to discharge only in the affected area. This localized activation ensures rapid response while minimizing water damage.\n\nThe system fundamentally consists of a sprinkler tank, sprinkler pumps, control panels, control valves, a distribution piping network, and sprinkler nozzles. Upon activation, the system initiates water discharge and simultaneously transmits an alarm signal to notify the relevant fire monitoring systems.\n\nDesigned in compliance with IMO and SOLAS requirements, sprinkler systems are widely used for the protection of cabins, corridors, lounges, offices, and other accommodation spaces onboard passenger ships, ferries, cruise vessels, and various commercial ships, providing a reliable and efficient fire safety solution."
  },
  "smoke-sampling": {
    title: "Smoke Sampling System",
    image: "/smoke-sampling.png",
    description: "Fixed fire detection solution designed to provide early warning by continuously monitoring protected spaces.",
    content: "The Smoke Sampling System is a fixed fire detection solution designed to provide early warning by continuously monitoring protected spaces for the presence of smoke particles.\n\nThe system consists of a main cabinet housing the smoke detection modules, control panels for monitoring system status and alarms, and a fan unit that continuously performs air sampling through dedicated nozzles installed within the protected area. The fan unit draws air samples from the cargo space and transports them to the smoke detectors, ensuring fast and reliable detection of a fire.\n\nDesigned in compliance with IMO and SOLAS requirements and certified according to the rules of relevant classification societies, the system is particularly used for the protection of cargo holds onboard cargo vessels, providing an effective and reliable early fire detection solution for large enclosed spaces."
  },
  "inergen": {
    title: "Inergen System",
    image: "/inergen-system.png",
    description: "Clean agent fire suppression solution based on an inert gas mixture designed to extinguish fires by reducing oxygen concentration.",
    content: "The Inergen System is a clean agent fire suppression solution based on an inert gas mixture designed to extinguish fires by reducing the oxygen concentration in the protected space to a level that stops combustion while remaining safe for occupied areas. The gas mixture consists of nitrogen, argon, and carbon dioxide, which together support human respiration during discharge.\n\nEngineered for rapid and uniform gas distribution, the system ensures effective fire suppression without leaving residue or causing damage to critical equipment. The system comprises cylinder assemblies, valve and actuator mechanisms, a piping distribution network, discharge nozzles, a control panel, and audible and visual alarm devices.\n\nDesigned in compliance with IMO and SOLAS requirements and certified according to the rules of relevant classification societies, the Inergen System is widely used for the protection of control rooms, electrical and electronic equipment spaces, and other critical areas onboard commercial vessels and offshore installations, providing reliable and environmentally responsible fire protection for high-value assets."
  },
  "oil-mist-detection": {
    title: "Oil Mist Detection System",
    image: "/oil-mist-detection.png",
    description: "Advanced monitoring and early warning solution designed to proactively prevent fire risks in marine engine rooms.",
    content: "The Oil Mist Detection System is an advanced monitoring and early warning solution designed to proactively prevent fire risks in marine engine rooms. While conventional fire detection systems react only after a fire has started, the system utilizes unique airflow technology to identify atmospheric oil mist and gas leaks before they reach ignition levels, effectively eliminating fire risks before escalation.\n\nEngineered with dual detection technology, the system minimizes false alarms and provides only real, actionable alerts, ensuring uninterrupted vessel operations. With the capability to monitor multiple zones simultaneously, it delivers comprehensive 24/7 surveillance, including hard-to-reach areas within the engine room.\n\nDesigned in compliance with IMO and SOLAS requirements and certified according to relevant classification society rules, the Oil Mist Detection System plays a critical role in reducing engine room fire risks—particularly those originating from oil leaks—and provides a reliable machinery safety solution for commercial vessels and yachts."
  },
  "gas-detection": {
    title: "Gas Detection System",
    image: "/gas-detection.png",
    description: "Advanced monitoring and alarm solution designed for the early detection of flammable and toxic gases.",
    content: "The Gas Detection System is an advanced monitoring and alarm solution designed for the early detection of flammable and toxic gases in marine and industrial applications. Gases such as hydrogen, methanol, and ammonia present significant risks due to their flammability, toxicity, or tendency to accumulate in confined spaces. Reliable gas detection is therefore essential to ensure personnel safety and operational continuity.\n\nThe system comprises fixed gas detectors (%LEL and ppm measurement technologies), zoned control and supervision modules, and a central control panel with integrated alarm management. Advanced software continuously monitors gas concentrations, activates audible and visual alarms when preset thresholds are exceeded, and supervises system integrity. Sequential sampling solutions are available for multi-point monitoring, particularly in cofferdams and fuel-related spaces.\n\nDesigned in compliance with IMO, SOLAS, and IGF Code requirements and certified according to relevant classification society rules, the Gas Detection System provides comprehensive and reliable gas safety for LNG, methanol-, hydrogen-, and ammonia-fueled vessels."
  }
};

export const CERTIFICATES_DATA = [
  { id: 1, image: "/se1-iso-9001-Logo.png", title: "ISO 9001" },
  { id: 2, image: "/se2-Bureau_Veritas-logo.png", title: "Bureau Veritas" },
  { id: 3, image: "/se3-ABS-certified.png", title: "ABS" },
  { id: 4, image: "/se4-lr-logo-default-social.jpg", title: "Lloyd's Register" },
  { id: 5, image: "/se5-nkstempel.gif", title: "NK" },
  { id: 6, image: "/se6-registr.png", title: "Russian Maritime Register of Shipping" },
  { id: 7, image: "/se7-RF-Microtech-Quality-System-Certification-header.png", title: "Quality System Certification" },
  { id: 8, image: "/se8-rina-1.jpg", title: "RINA" },
  { id: 9, image: "/se9-turkloydu.jpg", title: "Türk Loydu" }
];