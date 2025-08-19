"use client";
import { useMemo, useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Section, Reveal } from "../(components)/ui";
import { PROJECTS } from "../(content)/content";

/* ---------- Autoplay helper ---------- */
function useAutoplay(len: number, enabled: boolean, delay = 4200) {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const start = () => {
    if (!enabled || len <= 1) return;
    stop();
    timer.current = setInterval(() => setIndex((i) => (i + 1) % len), delay);
  };
  const stop = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
  };
  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [len, enabled, delay]);
  return { index, setIndex, start, stop };
}

/* ---------- Lightbox (smooth cross-fade, zoom controls, click-off to close) ---------- */
function Lightbox({
  images,
  startIndex,
  onClose,
}: {
  images: string[];
  startIndex: number;
  onClose: () => void;
}) {
  const [i, setI] = useState(startIndex);
  const [scale, setScale] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Preload current, prev, next
  useEffect(() => {
    const preload = (src: string) => {
      const img = new window.Image();
      img.src = src;
    };
    preload(images[i]);
    preload(images[(i + 1) % images.length]);
    preload(images[(i - 1 + images.length) % images.length]);
  }, [i, images]);

  // Keyboard shortcuts
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "+") zoomIn();
      if (e.key === "-" || e.key === "_") zoomOut();
      if (e.key.toLowerCase() === "r") resetZoom();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const next = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setScale(1);
    setI((v) => (v + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 250); // match animation duration
  };

  const prev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setScale(1);
    setI((v) => (v - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 250);
  };

  const zoomIn = () => setScale((s) => Math.min(3, +(s + 0.25).toFixed(2)));
  const zoomOut = () => setScale((s) => Math.max(1, +(s - 0.25).toFixed(2)));
  const resetZoom = () => setScale(1);

  const draggable = scale > 1;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose} // click on backdrop closes
      >
        {/* Controls (raised; don't bubble to backdrop) */}
        <div
          className="absolute top-4 right-4 z-10 flex items-center gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={zoomIn}
            className="rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20"
          >
            Zoom in
          </button>
          <button
            onClick={zoomOut}
            className="rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20"
          >
            Zoom out
          </button>
          {/* <button
            onClick={resetZoom}
            className="rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20"
          >
            Reset
          </button> */}
          <button
            onClick={onClose}
            className="rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20"
          >
            Close
          </button>
        </div>

        {/* Stage (centered). Only the image wrapper stops propagation */}
        <div className="h-full w-full flex items-center justify-center overflow-hidden p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              className="relative z-0 cursor-default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              style={{ scale }}
              drag={draggable}
              dragConstraints={{
                left: -800,
                right: 800,
                top: -800,
                bottom: 800,
              }}
              dragElastic={0.2}
              onClick={(e) => e.stopPropagation()} // clicking image doesn't close
            >
              <Image
                src={images[i]}
                alt={`Preview ${i + 1}`}
                width={1920}
                height={1080}
                className="max-h-[85vh] w-auto rounded-lg object-contain shadow-2xl"
                priority
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrows (disabled while panning) */}
        {images.length > 1 && (
          <>
            <button
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              disabled={draggable || isTransitioning}
              className={`absolute left-6 top-1/2 -translate-y-1/2 z-10 rounded-full border border-white/25 p-3 text-white shadow-lg backdrop-blur ${
                draggable
                  ? "bg-white/10 opacity-50 cursor-not-allowed"
                  : "bg-black/60 hover:bg-black/80"
              }`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  d="M15 6l-6 6 6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              disabled={draggable || isTransitioning}
              className={`absolute right-6 top-1/2 -translate-y-1/2 z-10 rounded-full border border-white/25 p-3 text-white shadow-lg backdrop-blur ${
                draggable
                  ? "bg-white/10 opacity-50 cursor-not-allowed"
                  : "bg-black/60 hover:bg-black/80"
              }`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  d="M9 6l6 6-6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </>
        )}

        {/* Dots */}
        {images.length > 1 && (
          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setScale(1);
                  setI(idx);
                }}
                className={`h-1.5 rounded-full transition-all shadow ${
                  idx === i
                    ? "w-6 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

/* ---------- Carousel with better contrast ---------- */
function Carousel({
  images,
  alt,
  onZoom,
}: {
  images: string[];
  alt: string;
  onZoom: (startIndex: number) => void;
}) {
  const len = images.length;
  const { index, setIndex, start, stop } = useAutoplay(len, true);
  const direction = useRef(1);
  const go = (next: number) => {
    direction.current = next > index ? 1 : -1;
    setIndex((next + len) % len);
  };
  const swipeConfidenceThreshold = 40;

  return (
    <div
      className="relative overflow-hidden rounded-xl border border-neutral-800 bg-black"
      onMouseEnter={stop}
      onMouseLeave={start}
    >
      {/* edge scrims so controls are visible on light images */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-black/25 to-transparent" />
        <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-black/25 to-transparent" />
      </div>

      <div className="relative aspect-[16/10]">
        <AnimatePresence initial={false} custom={direction.current}>
          <motion.div
            key={index}
            className="absolute inset-0 cursor-zoom-in"
            custom={direction.current}
            initial={{ opacity: 0, x: 40 * direction.current }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 * direction.current }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 28,
              opacity: { duration: 0.18 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.8}
            onDragEnd={(_, info) => {
              const offset = info.offset.x;
              const velocity = info.velocity.x;
              if (offset < -swipeConfidenceThreshold || velocity < -300)
                go(index + 1);
              else if (offset > swipeConfidenceThreshold || velocity > 300)
                go(index - 1);
            }}
            onClick={() => onZoom(index)}
          >
            <Image
              src={images[index]}
              alt={`${alt} - Screenshot ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 50vw"
              priority={index === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {len > 1 && (
        <>
          <button
            aria-label="Previous image"
            onClick={() => go(index - 1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-black/60 p-2 text-white shadow-md backdrop-blur hover:bg-black/80"
          >
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path
                d="M15 6l-6 6 6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            aria-label="Next image"
            onClick={() => go(index + 1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-black/60 p-2 text-white shadow-md backdrop-blur hover:bg-black/80"
          >
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path
                d="M9 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`h-1.5 rounded-full transition-all shadow ${
                  i === index
                    ? "w-6 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  const [lightbox, setLightbox] = useState<{
    images: string[];
    index: number;
  } | null>(null);

  return (
    <Section id="projects">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Featured Projects",
            description:
              "Portfolio of featured software projects and applications",
            itemListElement: PROJECTS.map((project, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "SoftwareApplication",
                name: project.title,
                description: project.description || project.tldr.join(" "),
                url: project.link,
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web",
                programmingLanguage: project.stack.filter((s) =>
                  [
                    "React",
                    "TypeScript",
                    "Python",
                    "JavaScript",
                    "Node.js",
                  ].includes(s)
                ),
                keywords:
                  project.keywords?.join(", ") || project.stack.join(", "),
              },
            })),
          }),
        }}
      />
      <Reveal>
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          Featured Projects
        </h2>
      </Reveal>

      <div className="mt-8 grid md:grid-cols-2 gap-8">
        {PROJECTS.map((p) => {
          const images = useMemo(
            () => (Array.isArray(p.image) ? p.image : [p.image]),
            [p.image]
          );
          return (
            <Reveal key={p.key}>
              <article
                className="rounded-2xl border border-neutral-800 overflow-hidden bg-card"
                itemScope
                itemType="https://schema.org/SoftwareApplication"
              >
                {images.length > 0 && (
                  <Carousel
                    images={images}
                    alt={p.description || p.title}
                    onZoom={(i) => setLightbox({ images, index: i })}
                  />
                )}

                <div className="p-6">
                  <h3 className="text-xl font-medium" itemProp="name">
                    {p.title}
                  </h3>
                  {p.description && (
                    <meta itemProp="description" content={p.description} />
                  )}
                  {p.keywords && (
                    <meta itemProp="keywords" content={p.keywords.join(", ")} />
                  )}
                  <ul className="mt-3 text-sm text-neutral-300 space-y-1">
                    {p.tldr.map((t, i) => (
                      <li key={i}>• {t}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-xs rounded-full border border-neutral-700 px-3 py-1"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  {p.link && (
                    <div className="mt-4">
                      <meta itemProp="url" content={p.link} />
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold/80 transition-colors"
                        itemProp="url"
                      >
                        <span>Visit Project</span>
                        <svg
                          width="14"
                          height="14"
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
                      </a>
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* Fullscreen zoom */}
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          startIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </Section>
  );
}
