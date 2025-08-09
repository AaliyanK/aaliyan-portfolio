
import type { Metadata } from "next";
import "./../styles/globals.css";

export const metadata: Metadata = {
  title: "Aaliyan Kapadia — Product minded full stack engineer",
  description: "Grit, range, and results. Full stack engineering and growth with measurable impact.",
  openGraph: {
    title: "Aaliyan Kapadia — Product minded full stack engineer",
    description: "Grit, range, and results.",
    type: "website"
  },
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-gold-600/40 selection:text-white">
        {children}
      </body>
    </html>
  );
}
