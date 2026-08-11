export const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const DIVISIONS = [
  {
    slug: "luxury-car-rentals",
    index: "01",
    name: "Luxury Car Rentals",
    tag: "Automotive",
    short: "An elite fleet of exotic and luxury vehicles for those who move differently.",
    image: "https://images.pexels.com/photos/94272/sports-car-pkw-auto-vehicle-94272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    hero: "https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
    intro: "Arrival is a statement. Our curated collection of exotic and premium automobiles delivers unrivaled performance and presence for weddings, corporate travel, and unforgettable escapes.",
    features: [
      "Hand-selected exotic & luxury fleet",
      "White-glove delivery & concierge",
      "Chauffeur and self-drive options",
      "Corporate & event partnerships",
    ],
  },
  {
    slug: "events-entertainment",
    index: "02",
    name: "Events & Entertainment",
    tag: "Experiences",
    short: "Unforgettable galas, productions, and experiences engineered to the last detail.",
    image: "https://images.unsplash.com/photo-1700514077430-3659e38eb5e7?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    hero: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
    intro: "From intimate soirées to headline productions, we design and stage experiences that linger long after the lights dim — every detail choreographed, every moment intentional.",
    features: [
      "Full-scale event design & production",
      "Talent & entertainment booking",
      "Luxury galas & brand activations",
      "Bespoke concept development",
    ],
  },
  {
    slug: "self-care",
    index: "03",
    name: "Self-Care",
    tag: "Wellness",
    short: "Sanctuaries of restoration where luxury and wellbeing become one ritual.",
    image: "https://images.unsplash.com/photo-1696841212541-449ca29397cc?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    hero: "https://images.unsplash.com/photo-1696841212541-449ca29397cc?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
    intro: "Wellbeing is the ultimate luxury. Our self-care spaces blend restorative treatments, considered design, and quiet indulgence into a ritual of renewal for body and mind.",
    features: [
      "Signature spa & wellness rituals",
      "Premium skincare & beauty lines",
      "Membership sanctuaries",
      "Holistic restoration programs",
    ],
  },
  {
    slug: "restaurant-chains",
    index: "04",
    name: "Restaurant Chains",
    tag: "Culinary",
    short: "Culinary destinations where atmosphere and flavor are crafted in equal measure.",
    image: "https://images.unsplash.com/photo-1766832255363-c9f060ade8b0?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    hero: "https://images.unsplash.com/photo-1776774795092-63a3b45ec1f8?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
    intro: "Dining is theatre. Our restaurant concepts pair inventive cuisine with immersive atmosphere, creating destinations that turn every meal into an occasion worth returning to.",
    features: [
      "Chef-driven signature concepts",
      "Immersive interior atmospheres",
      "Private dining & events",
      "Multi-location growth partnerships",
    ],
  },
  {
    slug: "philanthropy",
    index: "05",
    name: "Philanthropy",
    tag: "Impact",
    short: "The heart of the enterprise — lifting communities, women, and children worldwide.",
    image: "https://images.unsplash.com/photo-1651372381086-9861c9c81db5?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
    hero: "https://images.unsplash.com/photo-1758599668547-2b1192c10abb?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
    intro: "Legacy is measured in lives changed. Through our philanthropic arm we channel resources into orphanages, women's empowerment, and community programs — turning success into shared prosperity.",
    features: [
      "Orphanage support & sponsorship",
      "Women's empowerment initiatives",
      "Global community outreach",
      "Charity partner network",
    ],
  },
];

export const ROLES = [
  { title: "Director of Partnerships", type: "Full-time", location: "Remote / HQ", dept: "Corporate" },
  { title: "Luxury Fleet Manager", type: "Full-time", location: "On-site", dept: "Automotive" },
  { title: "Event Production Lead", type: "Full-time", location: "Hybrid", dept: "Events" },
  { title: "Spa & Wellness Director", type: "Full-time", location: "On-site", dept: "Self-Care" },
  { title: "Executive Chef", type: "Full-time", location: "On-site", dept: "Culinary" },
  { title: "Community Impact Coordinator", type: "Contract", location: "Remote", dept: "Philanthropy" },
];

export const SOCIALS = ["Instagram", "LinkedIn", "Facebook", "X"];
