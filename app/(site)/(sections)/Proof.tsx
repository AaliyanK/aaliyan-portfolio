import { Section, Reveal } from "../(components)/ui";
import { PROOF } from "../(content)/content";

export default function Proof() {
  return (
    <Section className="py-10 md:py-12">
      <Reveal>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-neutral-400">
          <span className="font-medium text-neutral-200">
            Worked With and Built for
          </span>
          {PROOF.map((p) => (
            <span key={p} className="opacity-80">
              {p}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
