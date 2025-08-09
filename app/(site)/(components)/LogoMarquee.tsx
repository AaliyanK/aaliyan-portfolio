
'use client'

import Image from 'next/image'
import { PROOF } from '../(content)/content'

export default function LogoMarquee() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4">
        <h3 className="text-neutral-300 text-sm mb-4">Worked with and built for</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {PROOF.map((name) => (
            <div key={name} className="h-10 flex items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/40">
              <span className="text-neutral-400 text-sm">{name}</span>
            </div>
          ))}
        </div>
        <p className="text-neutral-500 text-xs mt-3">Drop SVGs in <code>/public/logos/</code> named like the company to replace text with logos later.</p>
      </div>
    </section>
  )
}
