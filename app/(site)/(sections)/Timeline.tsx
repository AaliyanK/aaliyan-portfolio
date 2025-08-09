"use client";
import { Section, Reveal } from "../(components)/ui";

/* ---------- Types ---------- */
type TL = {
  icon: string;
  company: string;
  role: string;
  dates: string;
  summary: string;
  bullets: string[];
  impact?: string[];
  learnings?: string[];
  tech?: string[];
};

/* ---------- Career ---------- */
const CAREER: TL[] = [
  {
    icon: "💼",
    company: "Epoch",
    role: "Full-Stack Software Engineer (Product)",
    dates: "May 2023 — Present",
    summary:
      "End-to-end features across React + TypeScript and Flask + GraphQL for enterprise customers (Salesforce, Workday, Datadog, Asana, GoDaddy).",
    bullets: [
      "Shipped ERG/Communities: Slack integration, automated onboarding/questionnaires, and role-based welcome flows.",
      "Built admin insights that attribute ROI; influenced renewals/upsells in the six-figure range.",
      "Architected event creation with conditional logic and secure response storage supporting 100K+ MAUs.",
      "Led ShadCN UI migration and component system; ~35% design debt reduction and faster delivery.",
      "Integrated Slack, Google Calendar, and WorkOS via a modular GraphQL data layer.",
      "Ran intensive support rotations: triaged incidents, investigated production data, and shipped hotfixes under tight SLAs.",
    ],
    impact: [
      "100K+ MAU supported",
      "$100K+ ARR influenced",
      "−35% design debt",
    ],
    learnings: [
      "Balance product speed with scale—make explicit tradeoffs with PM/design.",
      "Interfaces + observability: a clean GraphQL boundary with tracing keeps features operable.",
      "Mentoring co-ops lifts team velocity and raises quality bars.",
    ],
    tech: [
      "React",
      "TypeScript",
      "GraphQL",
      "Python",
      "Flask",
      "SQLAlchemy",
      "Slack API",
      "ShadCN",
    ],
  },
  {
    icon: "📊",
    company: "Epoch",
    role: "Full-Stack Software Engineer",
    dates: "Jan 2022 — Aug 2022",
    summary:
      "Product-engineering internship focused on insights and data-heavy UX; collaborated daily with design and support.",
    bullets: [
      "Built the first Insights dashboard: cohorts, heatmaps, trend charts, and drilldowns.",
      "Introduced queue-based compute with AWS SQS to parallelize heavy aggregations.",
      "Created support-friendly views and caching to keep charts fast under load.",
    ],
    impact: [
      "$50K+ upsells",
      "Enterprise expansions (Toast, EA)",
      "Stable P95 views",
    ],
    learnings: [
      "Design early, measure always—instrument decisions so UX and performance move together.",
      "Idempotent jobs + deterministic caching simplify on-call and reduce support load.",
    ],
    tech: [
      "React",
      "TypeScript",
      "GraphQL",
      "Python",
      "Flask",
      "SQLAlchemy",
      "AWS SQS",
    ],
  },
  {
    icon: "🏦",
    company: "RBC — Borealis AI",
    role: "Data & Full-Stack Engineer",
    dates: "Jan 2021 — Apr 2021",
    summary:
      "At the ML institute, moved from pipelines to a React metadata catalog to speed up data discovery for researchers.",
    bullets: [
      "Optimized Spark partitioning/caching (~40% faster) and automated MLflow logging with Airflow.",
      "Built a React + Flask metadata catalog; deployed on OpenShift and tuned pods for scale.",
    ],
    impact: ["Faster data discovery", "Spark +40% efficiency"],
    learnings: [
      "Metadata and docs are part of the product—strong interfaces beat tribal knowledge.",
    ],
    tech: ["Python", "Airflow", "Spark", "React", "Flask", "OpenShift"],
  },
  {
    icon: "👗",
    company: "Pronti AI",
    role: "Software Engineer (Founding team)",
    dates: "May 2020 — Aug 2020",
    summary:
      "First dev role—built the back end for a wardrobe app recommending outfits by mood/weather/time.",
    bullets: [
      "Launched MVP in ~4 months; Flask REST APIs with PostgreSQL and S3.",
      "DAO architecture for clean data boundaries and maintainability.",
    ],
    impact: ["MVP in 4 months"],
    learnings: [
      "Speed with structure—small patterns (DAOs, modules) keep velocity sustainable.",
    ],
    tech: ["Python", "Flask", "REST", "PostgreSQL", "AWS S3"],
  },
  {
    icon: "🏭",
    company: "PepsiCo Beverages",
    role: "Supply Chain Engineer",
    dates: "2019",
    summary:
      "Bridged operators and management to ship data-driven efficiency wins across bottlers/fillers/labellers.",
    bullets: [
      "Built a plant data pipeline + dashboards for gap analysis; rolled out to a second plant.",
      "Negotiated process tweaks by aligning operator efficiency with management output goals.",
    ],
    impact: ["Throughput ↑", "Downtime ↓", "Deployed to 2nd plant"],
    learnings: [
      "Change management is a people problem—data helps; trust ships.",
      "First pro use of SQL/Python/React showed the leverage of code + data in ops.",
    ],
    tech: ["SQL", "Python", "React", "PostgreSQL", "Dashboards"],
  },
];

/* ---------- Ventures ---------- */
const VENTURES: TL[] = [
  {
    icon: "💡",
    company: "Nuve — DTC Home Goods Lighting",
    role: "Full-Stack & Growth",
    dates: "2024 — present",
    summary:
      "Luxury lighting brand with an automated, multi-channel engine and conversion-first UX.",
    bullets: [
      "High-converting funnel: email capture, social proof, affiliate endorsements, fast checkout.",
      "Meta ASC, Google PMax, TikTok Shop/Affiliates, Amazon; server-side events via GA4/GTM/Klaviyo.",
    ],
    impact: [
      "$3–5K/day",
      "$120K+ early months",
      "1.8× ROI · 1,756 orders · 2.1% CVR",
    ],
    tech: [
      "Shopify",
      "GA4",
      "GTM",
      "Klaviyo",
      "Meta Ads",
      "Google Ads",
      "TikTok Shop",
      "Amazon",
      "Server-side events",
    ],
  },
  {
    icon: "🛋️",
    company: "DTC Luxury Furniture Brand",
    role: "Full-Stack & Growth",
    dates: "2024 — present",
    summary:
      "Exclusive US warehouse partnership; influencer + paid playbook and CRO/A-B tested landers.",
    bullets: [
      "Audience-specific landers and a creative testing loop; lifecycle via Klaviyo.",
    ],
    impact: ["AOV ↑", "CPC ↓", "NPS ↑"],
    tech: ["Shopify", "GA4", "GTM", "Klaviyo", "Meta Ads", "Google Ads"],
  },
  {
    icon: "🎮",
    company: "DTC Retro Gaming Brand (Exited)",
    role: "Full-Stack & Growth",
    dates: "2024",
    summary:
      "Scaled a high-ticket retro gaming brand to seven figures with UGC and influencer partnerships.",
    bullets: [
      "$184K on Google at profitable ROAS; $1M+ via Meta (interest + broad).",
      "20K+ email list and $100K+ lifecycle revenue; catalog expansion and upsells.",
    ],
    impact: [
      "$1M+ in 8 months",
      "2.0× ROI",
      "10K+ customers",
      "16K+ followers",
    ],
    tech: [
      "Shopify",
      "GA4",
      "GTM",
      "Klaviyo",
      "Meta Ads",
      "Google Ads",
      "TikTok",
      "Affiliates",
    ],
  },
  {
    icon: "▶️",
    company: "YouTube — AaliyanKapWrites",
    role: "Creator",
    dates: "2023 — Present",
    summary:
      "Long-form video essays—monetized quickly and grew a niche audience.",
    bullets: ["Script, edit, publish cadence; analytics-driven content bets."],
    impact: ["404K lifetime views", "$5K+ ad revenue", "~3K subscribers"],
    tech: ["YouTube Studio", "DaVinci Resolve", "Analytics"],
  },
];

/* ---------- UI bits ---------- */

function Header({ t }: { t: TL }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <h3 className="text-lg font-semibold leading-tight">
        <span className="whitespace-pre-wrap ">{t.company}</span>
        <span className="text-neutral-400">: {t.role}</span>
      </h3>
      <span className="text-xs text-neutral-400 shrink-0">{t.dates}</span>
    </div>
  );
}

function Body({ t }: { t: TL }) {
  return (
    <>
      <p className="mt-1 text-sm text-neutral-300">{t.summary}</p>

      {t.impact && (
        <div className="mt-3 flex flex-wrap gap-2">
          {t.impact.map((m) => (
            <span
              key={m}
              className="rounded-full bg-gold/15 text-gold px-2.5 py-1 text-xs border border-gold/30"
            >
              {m}
            </span>
          ))}
        </div>
      )}

      <ul className="mt-3 space-y-1.5 text-sm text-neutral-300">
        {t.bullets.map((b, i) => (
          <li key={i}>• {b}</li>
        ))}
      </ul>

      {t.learnings && t.learnings.length > 0 && (
        <div className="mt-3 rounded-lg border border-neutral-800 bg-black/30 p-3">
          <div className="text-xs font-medium text-neutral-400">Learnings</div>
          <ul className="mt-1 list-disc pl-5 space-y-1 text-sm text-neutral-300">
            {t.learnings.map((l, i) => (
              <li key={i}>{l}</li>
            ))}
          </ul>
        </div>
      )}

      {t.tech && (
        <div className="mt-3 flex flex-wrap gap-2">
          {t.tech.map((x) => (
            <span
              key={x}
              className="text-xs rounded-full border border-neutral-700 px-3 py-1"
            >
              {x}
            </span>
          ))}
        </div>
      )}
    </>
  );
}

/** One centered row with a fixed rail; equal gutter on both sides */
function Row({ item, index }: { item: TL; index: number }) {
  const leftSide = index % 2 === 0;
  return (
    <Reveal delay={index * 0.04}>
      <div className="relative grid grid-cols-1 md:grid-cols-2 items-start md:gap-16">
        {/* rail node */}
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-3 z-10">
          <div className="h-8 w-8 rounded-full bg-gold text-black grid place-items-center text-sm shadow">
            {item.icon}
          </div>
        </div>

        {/* card */}
        <article
          className={[
            "rounded-xl border border-neutral-800 bg-card p-6",
            // wider cards so long titles fit on one line
            "w-full md:max-w-[52rem]",
            leftSide
              ? "md:col-start-1 md:justify-self-end md:mr-12"
              : "md:col-start-2 md:justify-self-start md:ml-12",
          ].join(" ")}
        >
          <Header t={item} />
          <Body t={item} />
        </article>
      </div>
    </Reveal>
  );
}

/** Reusable timeline section with its own centered rail */
function TimelineSection({
  id,
  title,
  items,
}: {
  id: string;
  title: string;
  items: TL[];
}) {
  return (
    <Section id={id}>
      <Reveal>
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          {title}
        </h2>
      </Reveal>

      <div className="relative mt-8 mx-auto max-w-6xl">
        {/* steady center rail */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gold/60" />

        <div className="space-y-12">
          {items.map((t, i) => (
            <Row key={`${id}-${i}`} item={t} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Page Component ---------- */
export default function Timeline() {
  return (
    <>
      <TimelineSection id="career" title="Career Timeline" items={CAREER} />

      {/* natural gap between the two timelines */}
      <div className="h-10" />

      <TimelineSection
        id="entrepreneurship"
        title="Entrepreneurship"
        items={VENTURES}
      />
    </>
  );
}
