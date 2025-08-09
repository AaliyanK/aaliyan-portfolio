"use client"

import { motion } from 'framer-motion';
import clsx from "clsx";

export function Section({ id, children, className }:{ id?: string, children: React.ReactNode, className?: string }){
  return (
    <section id={id} className={clsx("mx-auto max-w-6xl px-4 md:px-8 py-16 md:py-24", className)}>
      {children}
    </section>
  );
}

export function Reveal({ children, delay=0 }:{ children: React.ReactNode, delay?: number }){
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
