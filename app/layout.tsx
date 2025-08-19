import type { Metadata } from "next";
import "./../styles/globals.css";
import Navbar from "./(site)/(components)/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://aaliyan-portfolio-dun.vercel.app"),
  title: "Aaliyan Kapadia - Product Minded Full Stack Engineer",
  description:
    "Full-stack software engineer specializing in enterprise AI, React, TypeScript, and Python. Built enterprise superintelligence apps, scaled ecommerce brands, and delivered solutions for companies like Reddit and Instacart.",
  keywords: [
    "full stack engineer",
    "enterprise AI",
    "React developer",
    "TypeScript developer",
    "Python developer",
    "enterprise software",
    "AI applications",
    "software engineering",
    "product development",
    "enterprise automation",
  ],
  icons: {
    icon: [{ url: "/assets/favicon.png", sizes: "32x32", type: "image/png" }],
    apple: {
      url: "/assets/apple_touch_icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    other: [
      {
        rel: "icon",
        url: "/assets/android_chrome_192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/assets/android_chrome_512.png",
        sizes: "512x512",
        type: "image/png",
      },
      { rel: "mask-icon", url: "/favicon.svg", color: "#000000" }, // put favicon.svg in public
    ],
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Aaliyan Kapadia - Product Minded Full Stack Engineer",
    description:
      "Full-stack software engineer specializing in enterprise AI, React, TypeScript, and Python. Built enterprise superintelligence apps, scaled ecommerce brands, and delivered solutions for companies like Reddit and Instacart.",
    images: [
      { url: "/assets/dark_og_text_square.png", width: 1200, height: 1200 },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaliyan Kapadia - Product Minded Full Stack Engineer",
    description:
      "Full-stack software engineer specializing in enterprise AI, React, TypeScript, and Python. Built enterprise superintelligence apps, scaled ecommerce brands, and delivered solutions for companies like Reddit and Instacart.",
    images: ["/assets/dark_og_text_square.png"],
  },
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-gold-600/40 selection:text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
