import { Section, Reveal } from "../(components)/ui";

const languages = [
  "Python",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "SQL",
  "MATLAB",
  "React",
  "Flask",
  "Node.js",
  "GraphQL",
  "FastAPI",
  "SQLAlchemy",
];
const tools = [
  "PostgreSQL",
  "Git",
  "Docker",
  "AWS",
  "Linux",
  "Cypress",
  "Retool",
  "Shopify",
  "Klaviyo",
  "GA4",
  "GTM",
  "Meta Events Manager",
];

export default function Skills() {
  return (
    <Section id="skills">
      <Reveal>
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          Technical Skills
        </h2>
      </Reveal>
      <div className="mt-6 grid md:grid-cols-2 gap-8">
        <Reveal>
          <div>
            <h3 className="font-medium">Languages and frameworks</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {languages.map((s) => (
                <span
                  className="text-xs rounded-full border border-neutral-700 px-3 py-1"
                  key={s}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div>
            <h3 className="font-medium">Tools and platforms</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {tools.map((s) => (
                <span
                  className="text-xs rounded-full border border-neutral-700 px-3 py-1"
                  key={s}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
