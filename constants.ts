import { NavItem } from './types';

export const NAVIGATION_DATA: NavItem[] = [
  {
    label: "Fire Solutions",
    type: "mega",
    path: "/fire-solutions",
    children: [
      { label: "Fixed CO₂ System", path: "/solutions/fixed-co2-system" },
      { label: "Fire Detection & Alarm", path: "/solutions/fire-detection-alarm" },
      { label: "Local Application Watermist", path: "/solutions/local-watermist" },
      { label: "Deep Fat Fryer System", path: "/solutions/deep-fat-fryer" },
      { label: "External Fire Fighting (Fi-Fi)", path: "/solutions/fi-fi" },
      { label: "Clean Gas System", path: "/solutions/clean-gas" },
      { label: "Deck Foam System", path: "/solutions/deck-foam" },
      { label: "Dry Powder System", path: "/solutions/dry-powder" },
      { label: "Sprinkler System", path: "/solutions/sprinkler" },
      { label: "Water Spray System", path: "/solutions/water-spray" },
      { label: "Drencher System", path: "/solutions/drencher" },
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
      { label: "Our Agents", path: "/contact/agents" },
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
  "fixed-co2-system": {
    title: "Fixed CO₂ System",
    image: "/fixed-co2-system.png",
    description: "Carbon Dioxide is a colorless, odorless, dry, inert gas and is one of the most well-known of all fire extinguishants.",
    content: "Carbon Dioxide has been used as an extinguishant in fixed installations since the beginning of the twentieth century. Carbon Dioxide is a colorless, odorless, dry, inert gas and is one of the most well-known of all fire extinguishants.\n\nThe standard size cylinders used for the system are 67.5 L steel cylinders filled with 45 Kg of Carbon Dioxide. Cylinders can be delivered by following the requirements of the various national authorities, including required stamping and certificates."
  },
  "fire-detection-alarm": {
    title: "Fire Detection & Alarm",
    image: "/fire-detection-alarm.png",
    description: "Part of the total fire protection",
    content: "Part of total fire protection\nTherefore we have decided to design and install fire detection & alarm components as a part of our fire extinguishing systems.\n\nAksisfire offers customized design solutions and maximum safety according to marine rules and regulations.\n\nOur fire alarm systems, which are based on standard modules, may be delivered as stand-alone systems or communicate in integrated networks.\n\nOur skilled commissioning engineers are always ready to start up & testing the systems in a very short time onboard."
  },
  "local-watermist": {
    title: "Local Application Watermist",
    image: "/local-watermist.png",
    description: "High standards of safety for ship engine spaces.",
    content: "The Ship’s engine spaces require particularly high standards of safety on account of the particular conditions at sea. This applies especially to fire protection, and in particular, and around the engine room, which is home to fuel lines and other supply lines such as those that feed the main engines, auxiliary diesel engines, boiler burners, fuel separators, and pumps.\n\nAll these are typical areas of risk which must be considered when choosing an extinguishing system. The International Maritime Organization (IMO) therefore recommends a permanent, quick activation fire fighting system to protect equipment on board in addition to the total flooding fire suppression system."
  },
  "deep-fat-fryer": {
    title: "Deep Fat Fryer System",
    image: "/deep-fat-fryer.jpg",
    description: "Automatic kitchen object protection system for high-tech kitchens.",
    content: "In high-tech kitchens, where deep fat fryers, special baking appliances, tilting-type frying pans, are in use, spontaneous fires must be expected. The use of an automatic kitchen object protection system is recommended here. Such a system guarantees that the fire will be extinguished immediately, keeping subsequent damages to a minimum and with almost no effect on the kitchen operations.\n\nThe Deep Fat Fryer extinguishing system has been specially designed for use in catering kitchens. The fire detection elements respond the moment the first small occurs, and there is promptly extinguished before serious damage occurs."
  },
  "fi-fi": {
    title: "External Fire Fighting (Fi-Fi)",
    image: "/fi-fi-system.png",
    description: "External fire fighting systems for Tug boats and offshore vessels.",
    content: "Aksisfire supplies external fire fighting systems to Tug boats, offshore vessels, and fire fighting ships with the cooperation of the world’s leading producer and supplier, Fire Fighting Systems AS (FFS)."
  },
  "clean-gas": {
    title: "Clean Gas System",
    image: "/clean-gas-system.png",
    description: "Clean and safe fire suppression for sensitive equipment.",
    content: "At sea, safety requirements for ships are of the utmost importance. This also applies to fire protection measures. After all, in the event of a fire, rapid escape is usually impossible and the prompt arrival of help from outside cannot be expected. In light of the various types of fire risks which exist onboard ships, specific solutions are necessary for the space or object to be protected in order to ensure optimal fire protection onboard.\n\nAreas that deserve special attention include rooms with electrical, and electronic devices, such as control rooms, control cabinets and smaller machine rooms on ships. In such risk areas, extinguishing systems which put out fires quickly yet carefully are essential, to ensure that sensitive equipment is not damaged by residues left by the extinguishing agent. With the Clean Gas FK5-1-12 agent Aksisfire offers clean and safe solutions which meet the demanding requirements on board a ship.\n\nThe systems are distinguished through the presence of the authorised and tested chemical suppressors: neither fire suppressor is corrosive nor electrically conductive, nor causes any damage to sensitive parts through short circuits or residues. Aksisfire’s FK 5-1-12 clean agent suppression systems are available for fishing boats, offshore vessels, tugboats, coast and inland navigation vessels and yachts. The size of the room to be protected is a key focus for both systems. As a result, they offer optimal fire protection in smaller and medium size rooms, and are fully certified with all major marine sector approvals."
  },
  "deck-foam": {
    title: "Deck Foam System",
    image: "/deck-foam-system.png",
    description: "Large-scale low foam blankets for tanker ship deck areas.",
    content: "During a fire, foam extinguishing systems distribute large-scale low foam blankets via foam monitors and hand applicators to tanker ship’s tank deck areas. The foam is applied to the burning fuel or chemical cargoes, extinguishes the fire by the produce of foam film over the Cargo and serves as a deterrent against reignition.\n\nDeck Foam extinguishing systems are suitable for protecting high-risk areas, e.g. due to flammable liquids or chemicals.\n\nFlexible components for our foam extinguishing systems with a versatile foaming agent range. Aksisfire offers safe and flexible application. Perfectly aligned components are supplied in line with the individual needs of clients and according to respective fire protection requirements and the Rules."
  },
  "dry-powder": {
    title: "Dry Powder System",
    image: "/dry-powder-system.png",
    description: "Highly efficient, quick-acting extinguishing powders for various fire classes.",
    content: "The extinguishing powders used in powder extinguishing systems are highly efficient, quick-acting extinguishants. The sudden extinguishing effect of the powder cloud is caused by the suffocation effect and the anticatalytic effect, a chemical intervention into the combustion process. Extinguishing powders mainly consist of non-poisonous inorganic salts mixed with waterproofing and pouring agents. They are used for fires with solid, liquid, or gaseous substances and metal fires, thus, they are used for fire classification A, B, C, and D. Our powder units is largely used to protect LNG carriers and LNG powered ships."
  },
  "sprinkler": {
    title: "Sprinkler System",
    image: "/sprinkler-system.png",
    description: "Self-acting fire extinguishing systems with safe functioning principle.",
    content: "Sprinkler systems are self-acting fire extinguishing systems having an uncomplicated as well a safe functioning principle. A network of piping and sprinkler heads are installed throughout the areas of the building requiring protection and is constantly under pressure. Under normal conditions, the sprinkler head is closed off by a liquid-filled bulb. If due to the effects of a fire, the ambient temperature in the immediate vicinity rises by approximately 30 c° above the maximum temperature expected under normal conditions, the glass bulb bursts. Then pressurized extinguishing water flows through the piping into the sprinkler head and the resulting water jet hits the spray plate which diverts the spray to the areas to be covered. At the same time, the water flow in the piping network trips the alarm system."
  },
  "drencher": {
    title: "Drencher System",
    image: "/drencher-system.jpg",
    description: "Deluge system triggered hydraulically, pneumatically or electrically for fast-spreading fires.",
    content: "Drencher (Deluge) system is triggered hydraulically, pneumatically or electrically and disperse water throughout the entire protection zone with open nozzles. In this way, they reliably fight fires in rooms and facilities, even if a particularly fast spreading of the fire is to be expected. If necessary, a film-forming foam agent can be added to the extinguishing water."
  },
  "water-spray": {
    title: "Water Spray System",
    image: "/water-spray-system.jpg",
    description: "Open nozzle system for rapid fire spread protection.",
    content: "When conditions are such that extremely rapid fire spread can be expected, Aksisfire suppression systems can provide maximum safety. Water-spray extinguishing systems operate with open extinguisher nozzles which, in the event of a fire, distribute the extinguishing water over the entire protected area, the quantity of extinguishant needed being minimal.\n\nSpray extinguishing increases the surface area of the extinguishing water, entrains the heat of in addition to this cooling effect there is a smothering effect because the steam produced impedes the oxygen supply to the base of the fire. Water-spray extinguishing systems are designed for space or equipment protection. In the case of space protection, the extinguishing water is distributed evenly across the whole area of the fire hazard. The extinguishing nozzles are therefore arranged evenly spaced at ceiling level, In the case of equipment protection systems, defined objects particularly subject to fire hazard are provided with water spray for protection or preventive cooling.\n\nThe extinguishing nozzles are therefore arranged to be specifically aimed at the object. For tall objects, they may also be installed at several levels."
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