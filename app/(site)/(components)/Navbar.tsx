"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const navItems = [
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#timeline" },
    { name: "Skills", href: "#skills" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-neutral-900/90 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 flex items-center justify-between max-w-6xl w-full mx-4">
        {/* Logo */}
        <Link href="#top" className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
            <span className="text-black font-bold text-sm">A</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center">
          <Link
            href="/resume.pdf"
            className="text-white/70 hover:text-white transition-colors text-sm font-medium flex items-center space-x-1"
          >
            <span>Resume</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15,3 21,3 21,9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
