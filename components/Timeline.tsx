"use client";
import { ReactNode } from "react";

type Item = {
  id: string;
  title: string;
  period?: string;
  icon?: ReactNode;
  bullets: string[];
  tags?: string[];
};

function DotIcon() {
  return (
    <svg viewBox="0 0 24 24" className="tw-h-6 tw-w-6 tw-text-emerald-400" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="6" />
    </svg>
  );
}

function Section({ item }: { item: Item }) {
  return (
    <li className="tw-relative tw-pl-8">
      <div className="tw-absolute tw-left-0 tw-top-0 tw-flex tw-h-6 tw-w-6 tw-items-center tw-justify-center">
        {item.icon ?? <DotIcon />}
      </div>
      <div className="tw-rounded-2xl tw-border tw-border-white/10 tw-bg-white/3 tw-p-4 tw-shadow">
        <div className="tw-flex tw-flex-wrap tw-items-baseline tw-justify-between tw-gap-2">
          <h4 className="tw-text-lg tw-font-semibold">{item.title}</h4>
          {item.period && <span className="tw-text-xs tw-text-white/60">{item.period}</span>}
        </div>
        <ul className="tw-mt-2 tw-space-y-2 tw-text-sm tw-leading-relaxed tw-text-white/90">
          {item.bullets.map((b, i) => (
            <li key={i} className="tw-flex tw-gap-2">
              <span className="tw-select-none">•</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        {item.tags && item.tags.length > 0 && (
          <div className="tw-mt-3 tw-flex tw-flex-wrap tw-gap-2">
            {item.tags.map((t, i) => (
              <span key={i} className="tw-rounded-full tw-bg-emerald-500/10 tw-px-2.5 tw-py-1 tw-text-xs tw-text-emerald-300 tw-ring-1 tw-ring-inset tw-ring-emerald-400/20">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}

const data: Item[] = [
  {
    id: "epoch-communities",
    title: "Epoch — Communities platform with Slack integration",
    period: "Product engineering",
    bullets: [
      "Supported 50,000+ monthly active users with automated onboarding and questionnaires.",
      "Shipped Slack sync, customizable welcome messages, and deep link flows between events and invites.",
      "Built notification rails using Slack and email via SparkPost with role based templates.",
      "Drove over $100,000 in renewals and upsells by demonstrating ROI to admins.",
      "Delivered admin insights for communities and events to quantify engagement and impact."
    ],
    tags: ["React", "GraphQL", "TypeScript", "Python", "Flask", "SQLAlchemy", "Slack API", "SparkPost"]
  },
  {
    id: "epoch-insights",
    title: "Epoch — Insights dashboard with queue based compute",
    period: "Platform metrics",
    bullets: [
      "Solved heavy metric computation with AWS SQS and worker coordination for reliable throughput.",
      "Shipped faster reporting and support friendly views covering cohorts, heatmaps, and trend charts.",
      "Unlocked $50,000+ in upsells and renewals and helped close enterprise logos including Toast and EA.",
      "Built dynamic filtering, time ranges, and drilldowns that connected events to outcomes."
    ],
    tags: ["React", "GraphQL", "TypeScript", "Python", "Flask", "SQLAlchemy", "AWS SQS", "Data viz"]
  },
  {
    id: "dtc-lighting",
    title: "DTC Home Goods Lighting Brand — Founder",
    period: "Ecommerce growth",
    bullets: [
      "Scaled revenue from $3,000 to $5,000 per day and passed $120,000 in early months.",
      "Launched a high converting funnel with email capture, social proof, affiliate endorsements, and fast checkout.",
      "Ran Meta, Google, TikTok Shop, YouTube Ads, TikTok affiliates, and Amazon as a multi channel engine.",
      "Hit $100,000+ in two months at ~1.8x ROI across 1,756+ orders and ~2.1% CVR.",
      "Built site architecture and tracking: GA4, GTM, Klaviyo, server events for Meta and TikTok."
    ],
    tags: ["Shopify", "GA4", "GTM", "Klaviyo", "Meta Ads", "Google Ads", "TikTok Shop", "Amazon", "Server side tracking"]
  },
  {
    id: "dtc-furniture",
    title: "DTC Luxury Furniture Brand — Co founder",
    period: "Ecommerce growth",
    bullets: [
      "Set exclusive US warehouse partnership to reduce lead times and improve NPS.",
      "Built a luxury focused funnel with CRO and A/B testing on creative and landing page variants.",
      "Ran a repeatable influencer and paid social playbook across Meta and Google with PMax.",
      "Implemented analytics and retention stack: GA4, GTM, Klaviyo, and LTV cohorts."
    ],
    tags: ["Shopify", "GA4", "GTM", "Klaviyo", "Meta Ads", "Google Ads", "TikTok", "Amazon"]
  },
  {
    id: "retro-gaming",
    title: "Retro Gaming Ecommerce Brand — Exited",
    period: "Ecommerce scale",
    bullets: [
      "Scaled to $1,000,000+ revenue in 8 months at ~2.0x ROI and 10,000+ customers globally.",
      "Grew 16,000+ social followers with high ROAS UGC, CPC ≈ $0.50 and CTR > 2%.",
      "Expanded catalog with accessories and upsells like cases and SD cards to lift AOV.",
      "Built a 20,000+ email list and generated $100,000+ via lifecycle campaigns.",
      "Spent $55,000 on Google for ~$184,000 revenue and drove $1,000,000+ via Meta with interest plus broad targeting.",
      "Partnered with influencers and affiliates including Akon’s production team; ran giveaways for organic reach."
    ],
    tags: ["Shopify", "GA4", "GTM", "Klaviyo", "Meta Ads", "Google Ads", "TikTok", "Affiliates"]
  },
  {
    id: "youtube",
    title: "YouTube Content Creator — @AaliyanKapWrites",
    period: "Creator economy",
    bullets: [
      "Monetized within one month, grew to 1,000+ subscribers quickly, now at ~2,980 subs.",
      "Produced video essays with 404,000+ lifetime views and generated $5,000+ in ad revenue.",
      "Built a consistent posting pipeline and repurposed content across shorts and socials."
    ],
    tags: ["YouTube", "Scriptwriting", "Editing", "Thumbnails", "Analytics"]
  },
  {
    id: "pepsi",
    title: "PepsiCo Beverages — Supply chain analytics intern",
    period: "Manufacturing plant, Moncton",
    bullets: [
      "Analyzed bottlers, fillers, and labellers to find efficiency gaps then shipped fixes with both operators and management on board.",
      "Built a plant data pipeline and dashboard so leaders could see loss and downtime trends at a glance, rolled to a second plant.",
      "First professional use of SQL, Python, and React to turn raw line data into action; learned stakeholder alignment on a factory floor."
    ],
    tags: ["SQL", "Python", "React", "PostgreSQL", "Manufacturing", "Dashboards"]
  },
  {
    id: "pronti",
    title: "Pronti AI — Founding engineer intern",
    period: "Product MVP",
    bullets: [
      "Launched an MVP in four months for a mobile closet app that recommended outfits from mood, weather, and time.",
      "Built Flask REST APIs and data access layer with PostgreSQL and AWS S3; used DAOs to keep iteration fast."
    ],
    tags: ["Python", "Flask", "REST", "PostgreSQL", "AWS S3", "MVP"]
  },
  {
    id: "rbc",
    title: "RBC Borealis AI — Data engineer then full stack",
    period: "ML institute",
    bullets: [
      "Wrote pipelines and data cleaning jobs to move and prepare millions of rows for research teams.",
      "Built a React metadata catalog and deployed to OpenShift with tuned pods for scale and reliability."
    ],
    tags: ["Airflow", "Python", "React", "OpenShift", "Data pipelines", "Metadata"]
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="tw-w-full tw-py-16">
      <div className="tw-mx-auto tw-max-w-5xl tw-px-4">
        <h3 className="tw-mb-8 tw-text-center tw-text-2xl tw-font-bold">Career timeline</h3>
        <ol className="tw-relative tw-space-y-6">
          <div className="tw-absolute tw-left-3 tw-top-0 tw-h-full tw-w-px tw-bg-gradient-to-b tw-from-emerald-400/50 tw-to-transparent" />
          {data.map((item) => (
            <Section key={item.id} item={item} />
          ))}
        </ol>
      </div>
    </section>
  );
}
