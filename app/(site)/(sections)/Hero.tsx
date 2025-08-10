"use client";
import { motion } from "framer-motion";
import { Section, Reveal } from "../(components)/ui";

export default function Hero() {
  const KPIS = [
    {
      value: "$1,000,000+",
      label: "Revenue driven for DTC brands",
      sub: "Full-scale ecommerce funnels in home goods & gaming",
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
          <path
            d="M3 7.5h18v9H3z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle
            cx="12"
            cy="12"
            r="2.6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M6 10.5v3M18 10.5v3"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      ),
    },
    {
      value: "$1,500,000+",
      label: "Ad spend managed",
      sub: "Meta, Google, TikTok, Amazon, and more",
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
          <path
            d="M3 12h6l9-4v8l-9-4H3z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M6 15v2.2A2.8 2.8 0 0 0 8.8 20H10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      value: "50,000+",
      label: "Monthly active users supported",
      sub: "Insights dashboards, events infra, complex forms",
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
          <circle
            cx="12"
            cy="9"
            r="3.2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M4 19a8 8 0 0 1 16 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      value: "$100,000+",
      label: "ARR influenced",
      sub: "Feature development at seed & growth-stage startups",
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
          <path
            d="M3 17l6-6 4 4 7-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <Section id="top" className="pt-24 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-semibold tracking-tight"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Product minded full stack engineer.
            <br />
            <span className="text-gold">Grit, range, and execution.</span>
          </motion.h1>

          {/* Social */}
          <div className="mt-2 flex flex-wrap justify-center items-center gap-6 text-neutral-300">
            {/* Email */}
            <a
              href="mailto:aaliyan.kapadia@gmail.com"
              className="hover:text-white transition inline-flex items-center gap-2"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M4 7l8 6 8-6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
              Email
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/aaliyank/"
              target="_blank"
              className="hover:text-white transition inline-flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 48 48"
                aria-hidden
              >
                <path
                  fill="#0288D1"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                />
                <path
                  fill="#FFF"
                  d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36z"
                />
              </svg>
              LinkedIn
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/AaliyanK"
              target="_blank"
              className="hover:text-white transition inline-flex items-center gap-2"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.19-3.37-1.19-.45-1.16-1.1-1.47-1.1-1.47-.9-.61.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.89 1.52 2.34 1.08 2.91.82.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.26.1-2.62 0 0 .84-.27 2.75 1.02A9.57 9.57 0 0 1 12 6.8c.85 0 1.7.11 2.5.31 1.9-1.29 2.74-1.02 2.74-1.02.55 1.36.2 2.37.1 2.62.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86 0 1.34-.01 2.43-.01 2.76 0 .26.18.57.69.47A10 10 0 0 0 12 2Z" />
              </svg>
              GitHub
            </a>

            {/* Phone (added SVG) */}
            <a
              href="tel:+19057834673"
              className="hover:text-white transition inline-flex items-center gap-2"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M6 3h3l1.5 4.5L8.5 9a11 11 0 0 0 6.5 6.5l1.5-2.5L21 15v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              905-783-4673
            </a>
          </div>

          <Reveal>
            <p className="mt-4 max-w-3xl text-lg text-neutral-300">
              I am a full-stack software engineer who thrives at the
              intersection of code and customers. From building enterprise
              product features for clients like Reddit and Instacart to scaling
              my own ecommerce brands past one million in sales, I pair
              technical depth with a product mindset. What drives me is building
              things people use and growing them with intentional engineering,
              data-informed decisions, collaborative teams, and relentless
              iteration.
            </p>
          </Reveal>

          {/* KPI cards */}
          <div className="mt-10 grid w-full max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {KPIS.map((kpi, i) => (
              <div
                key={i}
                className="group relative h-full overflow-hidden rounded-2xl border border-white/10
                         bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-5 text-left
                         shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset]
                         transition hover:border-gold/40 hover:shadow-[0_0_0_1px_rgba(219,188,0,0.25),0_12px_30px_rgba(0,0,0,0.45)]"
              >
                {/* content and icon */}
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="text-gold text-2xl font-extrabold tracking-tight">
                      {kpi.value}
                    </div>
                    <div className="mt-1 text-base font-semibold text-white">
                      {kpi.label}
                    </div>
                    <div className="mt-1 text-sm leading-relaxed text-neutral-400">
                      {kpi.sub}
                    </div>
                  </div>

                  {/* icon on the right */}
                  <div
                    className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full
                             bg-gold/15 text-gold ring-1 ring-gold/30"
                  >
                    {kpi.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Reveal>
            <div className="mt-8 flex gap-3 justify-center">
              {/* <a
                href="#projects"
                className="rounded-full border border-gold px-5 py-3 text-sm hover:bg-gold hover:text-black transition"
              >
                View projects
              </a> */}
              <a
                href="/resume.pdf"
                className="rounded-full border border-neutral-600 px-5 py-3 text-sm hover:bg-neutral-200 hover:text-black transition"
              >
                Download resume
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
