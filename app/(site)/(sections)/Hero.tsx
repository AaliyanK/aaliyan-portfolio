"use client";
import { motion } from "framer-motion";
import { Section, Reveal } from "../(components)/ui";
import {
  CircleDollarSign,
  Megaphone,
  Users,
  TrendingUp,
  Mail,
  Linkedin,
  Github,
  Phone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type KPI = {
  value: string;
  label: string;
  sub: string;
  Icon: LucideIcon;
};

export default function Hero() {
  const KPIS: KPI[] = [
    {
      value: "$1,000,000+",
      label: "Revenue driven for DTC brands",
      sub: "Full-scale ecommerce funnels in home goods & gaming",
      Icon: CircleDollarSign,
    },
    {
      value: "$1,500,000+",
      label: "Ad spend managed",
      sub: "Meta, Google, TikTok, Amazon, and more",
      Icon: Megaphone,
    },
    {
      value: "50,000+",
      label: "Monthly active users supported",
      sub: "Insights dashboards, events infra, complex forms",
      Icon: Users,
    },
    {
      value: "$100,000+",
      label: "ARR influenced",
      sub: "Feature development at seed & growth-stage startups",
      Icon: TrendingUp,
    },
  ];

  return (
    <Section id="top" className="pt-32 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Stacked name + headline */}
          <motion.h1
            className="font-semibold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="block text-4xl md:text-6xl">Aaliyan Kapadia</span>
            <span className="block mt-1 text-3xl md:text-5xl text-white/90">
              Product minded full stack engineer.
            </span>
            <span className="block mt-1 text-3xl md:text-5xl text-gold">
              Grit, range, and execution.
            </span>
          </motion.h1>

          {/* Social */}
          <motion.div
            className="mt-2 flex flex-wrap justify-center items-center gap-6 text-neutral-300"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a
              href="mailto:aaliyan.kapadia@gmail.com"
              aria-label="Email Aaliyan Kapadia"
              className="hover:text-white transition inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail
                className="h-[18px] w-[18px]"
                strokeWidth={1.6}
                aria-hidden
              />
              <span>Email</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/aaliyank/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="hover:text-white transition inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin
                className="h-[18px] w-[18px]"
                strokeWidth={1.6}
                aria-hidden
              />
              <span>LinkedIn</span>
            </motion.a>

            <motion.a
              href="https://github.com/AaliyanK"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="hover:text-white transition inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github
                className="h-[18px] w-[18px]"
                strokeWidth={1.6}
                aria-hidden
              />
              <span>GitHub</span>
            </motion.a>

            <motion.a
              href="tel:+19057834673"
              aria-label="Call Aaliyan Kapadia"
              className="hover:text-white transition inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone
                className="h-[18px] w-[18px]"
                strokeWidth={1.6}
                aria-hidden
              />
              <span>905-783-4673</span>
            </motion.a>
          </motion.div>

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
              <motion.div
                key={i}
                className="group relative h-full overflow-hidden rounded-2xl border border-white/10
                           bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-5 text-left
                           shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset]
                           transition hover:border-gold/40 hover:shadow-[0_0_0_1px_rgba(219,188,0,0.25),0_12px_30px_rgba(0,0,0,0.45)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
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

                  {/* icon on the right (Lucide) */}
                  <motion.div
                    className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full
                               bg-gold/15 text-gold ring-1 ring-gold/30"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <kpi.Icon
                      className="h-[18px] w-[18px]"
                      strokeWidth={1.8}
                      aria-hidden
                    />
                  </motion.div>
                </div>
              </motion.div>
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
              <motion.a
                href="/resume.pdf"
                className="rounded-full border border-neutral-600 px-5 py-3 text-sm hover:bg-neutral-200 hover:text-black transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download resume
              </motion.a>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
