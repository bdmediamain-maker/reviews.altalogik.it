import { articles } from "../data/content";
import ImageSlot from "./ImageSlot";
import RevealOnScroll from "./RevealOnScroll";

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export default function StepArticles() {
  const [featured, ...rest] = articles;

  return (
    <section id="news" className="relative pt-16 sm:pt-24 pb-16 sm:pb-24">
      <div className="max-w-page mx-auto px-4 sm:px-6">
        <RevealOnScroll>
          <p className="font-mono text-[12px] tracking-[0.22em] uppercase text-teal mb-3">
            Step 03 / 04
          </p>
          <h2
            className="font-display font-semibold text-text max-w-[720px]"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            News & articoli
          </h2>
          <p className="text-[17px] leading-[1.55] text-muted mt-4 max-w-[640px]">
            Rassegna stampa: pubblicazioni e articoli che hanno parlato del
            nostro lavoro.
          </p>
        </RevealOnScroll>

        {/* Featured (primo articolo, hero card) */}
        {featured && (
          <RevealOnScroll delay={80} className="mt-12">
            <a
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-brick block overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
                <div className="p-3">
                  <ImageSlot
                    imageUrl={featured.imageUrl}
                    label={`${featured.outlet.toUpperCase()} · ANTEPRIMA`}
                    aspect="16/10"
                    objectFit={featured.imageFit || "cover"}
                    placeholderText={featured.outlet}
                    placeholderTopic={featured.topic}
                  />
                </div>
                <div className="px-6 sm:px-8 pb-7 pt-5 lg:py-9 flex flex-col justify-center">
                  <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase">
                    <span className="text-teal">{featured.outlet}</span>
                    <span className="text-muted-2">·</span>
                    <span className="text-muted">{featured.date}</span>
                    <span className="ml-auto inline-flex items-center justify-center w-7 h-7 rounded-full border border-line-strong text-muted group-hover:text-teal group-hover:border-teal transition-colors">
                      <ArrowIcon />
                    </span>
                  </div>
                  <h3 className="font-display text-text font-semibold mt-4 text-[22px] sm:text-[26px] leading-[1.2]">
                    {featured.title}
                  </h3>
                  <p className="text-[15px] text-muted mt-3 leading-[1.55]">
                    {featured.excerpt}
                  </p>
                  <span className="mt-5 font-mono text-[12px] text-teal inline-flex items-center gap-1.5">
                    Leggi l'articolo <span aria-hidden="true">→</span>
                  </span>
                </div>
              </div>
            </a>
          </RevealOnScroll>
        )}

        {/* Resto degli articoli — griglia card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
          {rest.map((a, i) => (
            <RevealOnScroll key={a.id} delay={(i % 3) * 60}>
              <a
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-brick overflow-hidden flex flex-col h-full group"
              >
                <div className="p-3">
                  <ImageSlot
                    imageUrl={a.imageUrl}
                    label={a.outlet.toUpperCase()}
                    aspect="16/10"
                    objectFit={a.imageFit || "cover"}
                    placeholderText={a.outlet}
                    placeholderTopic={a.topic}
                  />
                </div>
                <div className="px-5 pb-5 pt-3 flex flex-col flex-1">
                  <div className="font-mono text-[11px] tracking-[0.18em] uppercase">
                    <span className="text-teal">{a.outlet}</span>
                    <span className="text-muted-2 mx-2">·</span>
                    <span className="text-muted">{a.date}</span>
                  </div>
                  <h3 className="font-display text-text font-semibold mt-2 text-[17px] leading-[1.25]">
                    {a.title}
                  </h3>
                  <p className="text-[14px] text-muted mt-2 leading-[1.5] line-clamp-3">
                    {a.excerpt}
                  </p>
                  <span className="mt-4 font-mono text-[12px] text-teal inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Leggi <ArrowIcon />
                  </span>
                </div>
              </a>
            </RevealOnScroll>
          ))}
        </div>

        <p className="mt-10 font-mono text-[11px] tracking-[0.15em] uppercase text-muted-2">
          Tutti gli articoli si aprono in una nuova scheda sul sito della testata originale.
        </p>
      </div>
    </section>
  );
}
