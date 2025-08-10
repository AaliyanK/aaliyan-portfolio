export const CONTACT = {
  email: "aaliyan.kapadia@gmail.com",
  linkedin: "https://www.linkedin.com/in/aaliyank/",
  github: "https://github.com/AaliyanK",
  phone: "905-783-4673",
};

export const PROOF: string[] = [
  "Salesforce",
  "Electronic Arts",
  "Workday",
  "Asana",
  "Miro",
  "Glassdoor",
  "Reddit",
  "Braze",
  "Toast",
  "Udemy",
  "Chime",
  "Datadog",
];

export type Project = {
  key: string;
  title: string;
  tldr: string[];
  stack: string[];
  image: string | string[]; // can be a carousel
};

export const PROJECTS: Project[] = [
  {
    key: "communities",
    title: "Communities Platform With Slack Integration",
    tldr: [
      "More than 50K monthly active users",
      "Automated onboarding and questionnaires",
      "Slack sync and customizable welcome messages",
      "Drove $100K+ in renewals and upsells",
      "Event → invite linking with Slack & SparkPost email notifications",
      "Admin insights to measure community & event ROI",
    ],
    stack: [
      "React",
      "GraphQL",
      "TypeScript",
      "Python",
      "Flask",
      "SQLAlchemy",
      "Slack API",
      "Tailwind CSS",
    ],
    image: ["/images/comms1.png", "/images/comms2.png"],
  },
  {
    key: "insights",
    title: "Insights Dashboard with Queue Based Compute",
    tldr: [
      "Solved heavy metric computation with AWS SQS",
      "Faster reporting and support‑friendly views",
      "Unlocked $50K+ in upsells and renewals",
      "Won/expanded enterprise customers — e.g., Toast and EA",
      "Heatmaps, dynamic charts, and filters for actionable insight",
    ],
    stack: [
      "React",
      "GraphQL",
      "TypeScript",
      "Python",
      "Flask",
      "SQLAlchemy",
      "AWS SQS",
      "Tailwind CSS",
    ],
    image: [
      "/images/insights1.png",
      "/images/insights2.png",
      "/images/insights3.png",
    ],
  },
  {
    key: "dtc-lighting",
    title: "DTC Home Goods Lighting Brand",
    tldr: [
      "3K–5K daily revenue; $120K+ sales passed in early months",
      "Full‑funnel engine across Meta, Google, TikTok Shop, YouTube, Affiliates, Amazon",
      "Luxury lighting catalogue with high‑converting funnel (email capture, social proof, affiliate endorsements)",
      "Scaled to $100K+ in 2 months (1.8× ROI, 1,756 orders, 2.1% CVR)",
      "Custom analytics: GA4, GTM, Klaviyo; server‑side event tracking",
    ],
    stack: [
      "Shopify",
      "GA4",
      "GTM",
      "Klaviyo",
      "Meta Ads",
      "Google Ads",
      "TikTok Shop",
      "Amazon",
    ],
    image: "/images/nuve1.png",
  },
  {
    key: "furniture",
    title: "DTC Luxury Furniture Brand",
    tldr: [
      "Exclusive U.S. warehouse partnership",
      "Influencer + paid social playbook; Google & Meta core pipeline",
      "High‑converting Shopify funnel with CRO/A‑B tested landers per audience/creative",
      "Analytics & lifecycle: GA4, GTM, Klaviyo, server‑side tracking",
    ],
    stack: ["Shopify", "GA4", "GTM", "Klaviyo", "Meta Ads", "Google Ads"],
    image: "/images/nord.png",
  },
  {
    key: "gaming",
    title: "Retro Gaming E‑commerce Brand (exited)",
    tldr: [
      ">$1M revenue in 8 months; 16K+ social followers",
      "Influencer partnerships & affiliates with celebrity creators",
      "High‑ROAS video ads (CPC ≈ $0.50, CTR > 2%); scaled Meta/Google spend profitably",
      "20K+ email list; $100K+ generated via lifecycle campaigns",
      "$184K on Google at profitable ROAS; Meta interest + broad targeting to scale globally",
    ],
    stack: [
      "Shopify",
      "GA4",
      "GTM",
      "Klaviyo",
      "Meta Ads",
      "Google Ads",
      "TikTok",
    ],
    image: ["/images/nost1.png", "/images/nost2.png"],
  },
  {
    key: "youtube",
    title: "YouTube: AaliyanKapWrites",
    tldr: [
      "Monetized in 1 month; 1,000+ subs early",
      "500K lifetime views and $5K+ ad revenue",
      "Long‑form video essays; scripting, editing, and growth",
    ],
    stack: ["YouTube", "DaVinci Resolve", "Analytics", "Canva"],
    image: "/images/youtube1.png",
  },
];
