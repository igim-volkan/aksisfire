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
    label: "Application",
    type: "link",
    path: "/application"
  },
  {
    label: "Test & Research",
    type: "dropdown",
    path: "/test-research",
    children: [
      { label: "Research", path: "/test-research/research" },
      { label: "Fire Test Room", path: "/test-research/fire-test-room" },
    ]
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
    name: "High Pressure CO₂ Valve",
    category: "Valves",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400",
    description: "Marine grade stainless steel valve for high pressure CO₂ systems.",
    path: "/products/hp-co2-valve",
    certifications: ["MED", "CE"],
    specs: { material: "Stainless Steel", pressure: "High" }
  },
  {
    id: 2,
    name: "Water Mist Nozzle Type-A",
    category: "Nozzles",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=400",
    description: "Fine mist generation nozzle for localized fire suppression.",
    path: "/products/mist-nozzle-a",
    certifications: ["FM Approved", "UL"],
    specs: { material: "Brass", pressure: "Medium" }
  },
  {
    id: 3,
    name: "80L Seamless Cylinder",
    category: "Cylinders",
    image: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&q=80&w=400",
    description: "Certified seamless steel cylinder for gas storage.",
    path: "/products/80l-cylinder",
    certifications: ["TPED", "DOT"],
    specs: { material: "Carbon Steel", pressure: "High" }
  },
  {
    id: 4,
    name: "Foam Concentrate 3%",
    category: "Foam",
    image: "https://images.unsplash.com/photo-1628133287820-22274cc82a39?auto=format&fit=crop&q=80&w=400",
    description: "High expansion foam concentrate for deck systems.",
    path: "/products/foam-3-percent",
    certifications: ["MED", "IMO"],
    specs: { material: "Chemical", pressure: "N/A" }
  },
  {
    id: 5,
    name: "Alarm Control Panel",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=400",
    description: "Addressable fire detection control panel with LCD display.",
    path: "/products/alarm-panel",
    certifications: ["EN-54", "LPCB"],
    specs: { material: "Plastic/Metal", pressure: "N/A" }
  },
  {
    id: 6,
    name: "Manual Call Point",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?auto=format&fit=crop&q=80&w=400",
    description: "IP67 rated manual call point for harsh environments.",
    path: "/products/manual-call-point",
    certifications: ["EN-54", "ATEX"],
    specs: { material: "Polycarbonate", pressure: "N/A" }
  },
  {
    id: 7,
    name: "Pilot Cylinder Valve",
    category: "Valves",
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400",
    description: "Pneumatic actuation valve for pilot cylinders.",
    path: "/products/pilot-valve",
    certifications: ["CE"],
    specs: { material: "Brass", pressure: "Low" }
  },
  {
    id: 8,
    name: "Low Exp. Foam Nozzle",
    category: "Nozzles",
    image: "https://images.unsplash.com/photo-1615828731057-a3093282a0b1?auto=format&fit=crop&q=80&w=400",
    description: "Stainless steel low expansion foam discharge nozzle.",
    path: "/products/low-exp-foam-nozzle",
    certifications: ["MED"],
    specs: { material: "Stainless Steel", pressure: "Medium" }
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