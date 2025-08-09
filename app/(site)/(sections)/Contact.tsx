"use client";
import { Section, Reveal } from "../(components)/ui";
import { CONTACT } from "../(content)/content";

export default function Contact() {
  return (
    <Section id="contact">
      <Reveal>
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          Let’s build something!
        </h2>
      </Reveal>
      <Reveal>
        <div className="mt-6 flex flex-wrap items-center gap-3 justify-center">
          <a
            href={`mailto:${CONTACT.email}`}
            className="rounded-full border border-gold px-5 py-3 text-sm hover:bg-gold hover:text-black transition"
          >
            Email
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            className="rounded-full border border-neutral-600 px-5 py-3 text-sm hover:bg-neutral-200 hover:text-black transition"
          >
            LinkedIn
          </a>
          <a
            href={CONTACT.github}
            target="_blank"
            className="rounded-full border border-neutral-600 px-5 py-3 text-sm hover:bg-neutral-200 hover:text-black transition"
          >
            GitHub
          </a>
          <a
            href={`tel:${CONTACT.phone.replace(/[^0-9]/g, "")}`}
            className="rounded-full border border-neutral-600 px-5 py-3 text-sm hover:bg-neutral-200 hover:text-black transition"
          >
            {CONTACT.phone}
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
