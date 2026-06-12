import { hero } from "../data/content";
import RevealOnScroll from "./RevealOnScroll";

export default function Hero() {
  return (
    <section id="top" className="relative pt-20 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-page mx-auto px-4 sm:px-6">
        <RevealOnScroll>
          <p className="font-mono text-[12px] tracking-[0.22em] uppercase text-teal">
            {hero.eyebrow}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={60}>
          <h1
            className="font-display text-text mt-7 max-w-[900px]"
            style={{
              fontSize: "clamp(42px, 6vw, 78px)",
              lineHeight: 1.04,
              letterSpacing: "-0.035em",
              fontWeight: 700,
              whiteSpace: "pre-line",
            }}
          >
            {hero.title}
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={120}>
          <p className="text-[17px] sm:text-[19px] leading-[1.5] text-muted max-w-[560px] mt-8">
            {hero.subtitle}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={180}>
          <ul className="mt-12 flex flex-wrap gap-x-7 gap-y-3 font-mono text-[12px] uppercase tracking-[0.14em] text-muted">
            {hero.steps.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  className="inline-flex items-center gap-1.5 hover:text-teal transition-colors"
                >
                  {s.label}
                  <span aria-hidden="true">↓</span>
                </a>
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>

      <div className="max-w-page mx-auto px-4 sm:px-6 mt-16 sm:mt-24">
        <div className="border-t border-line opacity-50" />
      </div>
    </section>
  );
}
