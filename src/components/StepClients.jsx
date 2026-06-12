import { partners } from "../data/content";
import RevealOnScroll from "./RevealOnScroll";

function PartnerTile({ name, imageUrl }) {
  return (
    <div className="aspect-[3/2] flex items-center justify-center bg-surface border-r border-b border-line group transition-colors hover:bg-surface-2">
      <img
        src={imageUrl}
        alt={name}
        loading="lazy"
        className="max-h-24 max-w-[80%] object-contain transition-opacity duration-300"
        style={{
          mixBlendMode: "screen",
          filter: "brightness(1.15)",
          opacity: 0.75,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.75")}
      />
    </div>
  );
}

export default function StepClients() {
  return (
    <section
      id="clienti"
      className="relative pt-16 sm:pt-24 pb-20 sm:pb-28 bg-bg-2"
    >
      <div className="max-w-page mx-auto px-4 sm:px-6">
        <RevealOnScroll>
          <p className="font-mono text-[12px] tracking-[0.22em] uppercase text-teal mb-3">
            Step 04 / 04
          </p>
          <h2
            className="font-display text-text"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              fontWeight: 700,
            }}
          >
            Partner tecnologici
          </h2>
          <p className="text-[17px] leading-[1.55] text-muted mt-4 max-w-[640px]">
            L'ecosistema cloud &amp; infrastruttura su cui costruiamo: stessi
            partner di altalogik.it/partner.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={80} className="mt-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-l border-line">
            {partners.map((p) => (
              <PartnerTile key={p.id} name={p.name} imageUrl={p.imageUrl} />
            ))}
          </div>
        </RevealOnScroll>

        <p className="mt-10 font-mono text-[11px] tracking-[0.15em] uppercase text-muted-2">
          Loghi riprodotti con il permesso dei rispettivi proprietari.
        </p>
      </div>
    </section>
  );
}
