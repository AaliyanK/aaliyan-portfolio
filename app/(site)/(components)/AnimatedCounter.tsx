"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView, useMotionValue, useMotionValueEvent } from "framer-motion";

type Props = { to: number; prefix?: string; suffix?: string; label: string; sublabel?: string };

export default function AnimatedCounter({ to, prefix = "", suffix = "", label, sublabel }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimation();
  const count = useMotionValue(0);
  const [text, setText] = useState("0");

  // Subscribe to motion value and push formatted text into state
  useMotionValueEvent(count, "change", (v) => {
    const n = Math.floor(v);
    setText(n.toLocaleString());
  });

  useEffect(() => {
    if (!inView) return;
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } });

    const duration = 1200;
    const start = performance.now();
    const step = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      count.set(p * to);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, controls, count, to]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      animate={controls}
      className="tw-rounded-xl tw-border tw-border-white/10 tw-bg-white/5 tw-p-4 tw-backdrop-blur-sm"
    >
      <div className="tw-text-3xl tw-font-semibold tw-tracking-tight tw-text-white">
        {prefix}<span>{text}</span>{suffix}
      </div>
      <div className="tw-mt-1 tw-text-sm tw-text-white/80">{label}</div>
      {sublabel && <div className="tw-text-xs tw-text-white/60">{sublabel}</div>}
    </motion.div>
  );
}
