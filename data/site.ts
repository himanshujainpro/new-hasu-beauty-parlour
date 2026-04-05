export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  category: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
};

export type Testimonial = {
  name: string;
  quote: string;
  service: string;
  videoUrl?: string;
};

export type Expert = {
  name: string;
  role: string;
  bio: string;
  highlights: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
};

export type SocialProfile = {
  title: string;
  handle: string;
  href: string;
  description: string;
  cta: string;
};

export type MediaItem = {
  type: "image";
  src: string;
  title: string;
};

export type InstagramEmbedItem = {
  url: string;
  title: string;
};

export type Branch = {
  name: string;
  availability: string;
  address: string;
  mapsUrl: string;
};

// Keep business copy and repeatable content centralized so the UI stays reusable.
export const siteConfig = {
  name: "NEW HASU BEAUTY CARE 2.0",
  legacyLine: "Since 1985 | Trusted Beauty Experts",
  title: "Beauty meets perfection with premium hair, skin, nail and makeup artistry.",
  description:
    "NEW HASU BEAUTY CARE 2.0 is a premium salon brand led by Jaimin Valand, offering hair, skin, nail, makeup and hairstyling services with trusted expertise and modern beauty trends.",
  instagram: "https://www.instagram.com/new_hasu_beauty_care",
  founderInstagram: "https://www.instagram.com/jaimin_hair_craft/",
  mapsUrl:
    "https://www.google.com/maps/place/Hasu+beauty+care/@23.1727834,73.3230009,17z/data=!3m1!4b1!4m6!3m5!1s0x395e07483e0f3e5f:0x289a191317c9e5fe!8m2!3d23.1727834!4d73.3255758!16s%2Fg%2F11g2wr2mgy?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D",
  whatsappNumber: "9160289593",
  whatsappUrl:
    "https://wa.me/918160289593?text=Hi%20New%20Hasu%20Beauty%20Care%2C%20I%20want%20to%20book%20an%20appointment.",
  phone: "9537478199",
  phoneUrl: "tel:+919537478199",
  whatsappLabel: "+91 81602 89593",
  locationLabel:
    "Shop no. 18, Satkaiwal Residency & Complex, Below Dena Gramin Bank, Bayad Road, Sathamba, Gujarat 383340, India",
  owner: "Jaimin Valand",
  hours: "Contact the salon on call or WhatsApp for slot availability.",
  heroImages: [
    "/new-hasu-media/hero-bride.jpg",
    "/new-hasu-media/soft-glam.jpg",
    "/new-hasu-media/emerald-portrait.jpg"
  ]
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export const brandStatements = [
  "All beauty services under one roof",
  "41+ years of trust, quality work and personal care",
  "Hair, skin, makeup and bridal styling with premium finish"
];

export const aboutStory = [
  "Welcome to NEW HASU BEAUTY CARE 2.0, where beauty meets perfection and every service is shaped around confidence, detail and personal care.",
  "The salon blends a trusted legacy since 1985 with fresh creative direction led by Jaimin Valand, giving guests a premium but approachable beauty experience.",
  "From bridal preparation to everyday grooming, the team focuses on consultation, transformation and polished results that feel luxurious and wearable."
];

export const services: Service[] = [
  {
    category: "Hair Services",
    title: "Hair Transformations & Treatments",
    description:
      "From polished everyday styling to advanced correction and makeover services, the hair menu is built for visible transformation.",
    image: "/new-hasu-media/hairstyle-portrait.jpg",
    highlights: [
      "Precision haircuts and styling",
      "Keratin, smoothening and nanoplastia",
      "Global hair color, balayage and highlights",
      "Botox, protein and rebonding treatments"
    ]
  },
  {
    category: "Skin Services",
    title: "Glow, Repair & Rejuvenation",
    description:
      "Customized skincare designed for glow, hydration, detan care and confidence-building skin results.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
    highlights: [
      "Glow facials from essential care to luxury skin rituals",
      "De-tan, brightening and age-defence skin programs",
      "Korean glass skin and Hydra facial glow therapy",
      "BB Glow, oxygen and collagen-boost care"
    ]
  },
  {
    category: "Nail Services",
    title: "Nail Art & Extensions",
    description:
      "Stylish nail services that focus on clean shaping, long-lasting polish and trend-conscious designs.",
    image:
      "https://images.unsplash.com/photo-1604902396830-aca29e19b067?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Glossy gel polish with clean detailing",
      "Acrylic nails and elegant length extensions",
      "Custom nail art for modern, bridal and festive looks"
    ]
  },
  {
    category: "Makeup Services",
    title: "Bridal, Glam & Editorial Makeup",
    description:
      "Premium makeup artistry using international brands for weddings, festive looks and camera-ready beauty.",
    image: "/new-hasu-media/soft-glam.jpg",
    highlights: [
      "Bridal and luxury makeup",
      "Engagement and pre-wedding looks",
      "HD, airbrush and waterproof makeup",
      "Fashion, editorial and photoshoot makeup"
    ]
  },
  {
    category: "Hairstyling Services",
    title: "Designer Hairstyles & Occasion Styling",
    description:
      "Elegant hairstyle work crafted for brides, celebrations, events and modern fashion-led looks.",
    image: "/new-hasu-media/hero-bride.jpg",
    highlights: [
      "Bridal and designer hairstyles",
      "Soft curls, waves and open styles",
      "Braids, buns and updos",
      "Trendy ponytails and modern looks"
    ]
  },
  {
    category: "Advanced Care",
    title: "Body, Skin & Scalp Add-On Rituals",
    description:
      "A wider care menu for guests who want treatment depth, grooming support and premium maintenance rituals.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Luminous body polishing with manicure and pedicure rituals",
      "Targeted acne care with advanced skin-correction support",
      "PRP, laser care and soothing fish spa sessions",
      "Strength-focused scalp therapies for hair fall and dandruff control"
    ]
  }
];

export const experts: Expert[] = [
  {
    name: "Mahendrabhai Valand",
    role: "Senior Beauty Expert | Since 1985",
    bio:
      "With 41+ years of experience in the beauty industry, Mahendrabhai Valand is trusted for quality work, consistency, modern technique and deep client care across core salon services.",
    highlights: [
      "Hair cutting and styling expertise built since 1985",
      "Skin care, treatments and professional makeup guidance",
      "Bridal and party hairstyle specialization",
      "All beauty services under one roof with personal care"
    ]
  },
  {
    name: "Jaimin Valand",
    role: "Founder | Professional Hair Dresser",
    bio:
      "A passionate hair professional with 5+ years of experience in hair cutting, transformation, consultation and salon leadership.",
    highlights: [
      "Served 300+ satisfied clients across 2 salon branches",
      "Handles 20 to 25 haircuts in a single day with precision",
      "Diploma in Hair Dressing with training-content delivery experience",
      "Strong salon management and customer relationship skills"
    ]
  },
  {
    name: "Bhumi Valand",
    role: "Skin Expert",
    bio:
      "A dedicated skincare professional focused on advanced treatments, skin analysis and personalized care plans for glowing results.",
    highlights: [
      "Expertise in facials, skin treatments and advanced skincare solutions",
      "Specialized in skin analysis and customized treatment plans",
      "Knowledge of modern skincare techniques and premium products",
      "Focused on healthy, glowing and flawless skin outcomes"
    ]
  }
];

export const achievements = [
  "41+ years of trust and beauty expertise under the Hasu legacy",
  "Quality work delivered with personal care and premium detailing",
  "Founder-led transformations backed by formal hair dressing training",
  "All beauty services under one roof for hair, skin, makeup and styling"
];

export const socialProfiles: SocialProfile[] = [
  {
    title: "Salon Instagram",
    handle: "@new_hasu_beauty_care",
    href: siteConfig.instagram,
    description: "View bridal looks, makeup finishes, client transformations and the latest salon updates.",
    cta: "Open salon Instagram"
  },
  {
    title: "Jaimin Hair Craft",
    handle: "@jaimin_hair_craft",
    href: siteConfig.founderInstagram,
    description: "Explore haircut finishes, hairstyle samples, reels and hair transformation work from the founder.",
    cta: "Open hair craft Instagram"
  }
];

export const workSliderImages: MediaItem[] = [
  { type: "image", src: "/new-hasu-media/hero-bride.jpg", title: "Signature bridal portrait" },
  { type: "image", src: "/new-hasu-media/double-bridal.jpg", title: "Twin bridal styling" },
  { type: "image", src: "/new-hasu-media/emerald-portrait.jpg", title: "Soft glam editorial look" },
  { type: "image", src: "/new-hasu-media/lehenga-motion.jpg", title: "Bridal styling in motion" },
  { type: "image", src: "/new-hasu-media/soft-glam.jpg", title: "Soft glam celebration look" },
  { type: "image", src: "/new-hasu-media/couple-portrait.jpg", title: "Wedding-ready makeup finish" }
];

export const hairEmbeds: InstagramEmbedItem[] = [
  { url: "https://www.instagram.com/p/CxhjkPFsFBl/", title: "Hair sample post 1" },
  { url: "https://www.instagram.com/p/CwhpKt8sNpN/", title: "Hair sample post 2" },
  { url: "https://www.instagram.com/reel/CslFTbHt-GL/", title: "Hair reel sample 1" },
  { url: "https://www.instagram.com/reel/DWA0ODpjNLE/", title: "Hair reel sample 2" },
  { url: "https://www.instagram.com/reel/DOOc6xkDCPn/", title: "Hair reel sample 3" }
];

export const makeupEmbeds: InstagramEmbedItem[] = [
  { url: "https://www.instagram.com/p/CqVbl8UMav0/", title: "Makeup sample post 1" },
  { url: "https://www.instagram.com/p/CqVcnifMmFD/", title: "Makeup sample post 2" },
  { url: "https://www.instagram.com/p/DF72KhasT6H/", title: "Makeup sample post 3" },
  { url: "https://www.instagram.com/p/DJOCuLtMsXn/", title: "Makeup sample post 4" },
  { url: "https://www.instagram.com/p/DVK6d9wiuAd/", title: "Makeup sample post 5" },
  { url: "https://www.instagram.com/p/C3T-bIGRbtT/", title: "Makeup sample post 6" }
];

const tipSubjects = [
  "The best bridal looks",
  "Long-lasting makeup",
  "Healthy hair transformations",
  "Glass-skin facial results",
  "Fresh salon color",
  "Smooth, shiny hair",
  "Elegant nail finishes",
  "Party-ready styling",
  "Scalp-focused treatments",
  "Professional salon care"
];

const tipAdvice = [
  "start with a clear consultation before the service begins.",
  "last longer when aftercare is followed consistently at home.",
  "look more premium when preparation starts early, not at the last minute.",
  "depend on skin, hair and scalp health as much as final styling.",
  "need the right product choice for the client's texture and routine.",
  "work best when tone, finish and maintenance are planned together.",
  "show better results when appointments are timed properly.",
  "feel more comfortable when the final look matches the event and outfit.",
  "benefit from expert advice instead of trend-based guesswork.",
  "create more confidence when the result still feels natural and wearable."
];

export const beautyTips = tipSubjects.flatMap((subject) => tipAdvice.map((advice) => `${subject} ${advice}`));

export const branches: Branch[] = [
  {
    name: "Sathamba Branch",
    availability: "Regular services available",
    address:
      "Shop no. 18, Satkaiwal Residency & Complex, Below Dena Gramin Bank, Bayad Road, Sathamba, Gujarat 383340, India",
    mapsUrl:
      "https://www.google.com/maps/place/Hasu+beauty+care/@23.1727834,73.3230009,17z/data=!3m1!4b1!4m6!3m5!1s0x395e07483e0f3e5f:0x289a191317c9e5fe!8m2!3d23.1727834!4d73.3255758!16s%2Fg%2F11g2wr2mgy?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Bayad Branch",
    availability: "Open 3 days a week (By appointment only) - Monday | Thursday | Saturday",
    address: "Vatrak Road,Bayad",
    mapsUrl: "https://www.google.com/maps/place/Hasu+beauty+care/@23.1727834,73.3230009,17z/data=!3m1!4b1!4m6!3m5!1s0x395e07483e0f3e5f:0x289a191317c9e5fe!8m2!3d23.1727834!4d73.3255758!16s%2Fg%2F11g2wr2mgy?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
  }
];

export const reviewUrl = "https://www.google.com/maps/place/Hasu+beauty+care/@23.1727834,73.3230009,17z/data=!3m1!4b1!4m6!3m5!1s0x395e07483e0f3e5f:0x289a191317c9e5fe!8m2!3d23.1727834!4d73.3255758!16s%2Fg%2F11g2wr2mgy?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D";

export const blogPosts: BlogPost[] = [
  {
    slug: "bridal-hair-makeup-planning",
    title: "How to plan bridal hair and makeup so everything feels polished on the wedding day",
    excerpt:
      "A practical salon-backed plan for trials, treatment timing and look selection before your big event.",
    readTime: "4 min read",
    category: "Bridal"
  },
  {
    slug: "glass-skin-treatment-guide",
    title: "What to know before booking Korean glass skin and Hydra facial treatments",
    excerpt:
      "Understand who these glow-focused skin services are for and how to prepare for the best results.",
    readTime: "3 min read",
    category: "Skincare"
  },
  {
    slug: "hair-transformation-consultation",
    title: "Why a hair transformation starts with the right consultation, not just the final style",
    excerpt:
      "See how consultation helps choose cuts, color and treatments that match your routine and hair condition.",
    readTime: "5 min read",
    category: "Haircare"
  }
];
