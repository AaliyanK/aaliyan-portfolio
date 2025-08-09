"use client";
import { Section, Reveal } from "../(components)/ui";

export default function About() {
  return (
    <Section id="about">
      <Reveal>
        <h2 className="text-2xl md:text-3xl font-semibold">About</h2>
      </Reveal>
      <Reveal>
        <div className="mt-6 rounded-2xl border border-neutral-800 bg-card p-6">
          <p className="text-lg text-neutral-200">
            I build at the intersection of{" "}
            <span className="text-gold">product, engineering, and growth</span>.
            From enterprise features that unlock ARR to ecommerce funnels that
            generate seven-figures, I ship measurable outcomes.
          </p>
          <p className="mt-3 text-neutral-400">
            Comfortable across React/TypeScript/GraphQL/Python/Flask/SQLAlchemy
            and the growth stack (Shopify, GA4, GTM, Klaviyo,
            Meta/Google/TikTok). I like clean interfaces, fast feedback loops,
            and decisions grounded in data.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
