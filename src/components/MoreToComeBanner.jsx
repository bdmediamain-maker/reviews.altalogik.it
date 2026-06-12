import RevealOnScroll from "./RevealOnScroll";

// Banner orizzontale "ce ne sarà altro" — testo a sinistra + ghost cards
// che sfumano verso destra. Usato sotto le sezioni come invito + segnale di
// catalogo in crescita.
export default function MoreToComeBanner({
  title,
  subtitle,
  aspectRatio = "16/10",
  delay = 80,
  showPlus = false,
}) {
  return (
    <RevealOnScroll delay={delay} className="mt-6 sm:mt-7">
      <div
        className="card-brick relative overflow-hidden"
        style={{
          background:
            "radial-gradient(420px 200px at 8% 0%, rgba(30,216,198,0.07), transparent 60%), radial-gradient(420px 240px at 0% 100%, rgba(45,91,255,0.08), transparent 60%), linear-gradient(180deg, var(--surface) 0%, var(--surface-2) 100%)",
        }}
      >
        <div className="flex items-center gap-5 sm:gap-8 px-5 sm:px-7 py-5 sm:py-6">
          <div className="flex-shrink-0 max-w-[42%]">
            <div className="font-display font-semibold text-text text-[22px] sm:text-[28px] leading-[1.1]">
              {title}
            </div>
            <div className="mt-2 font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-muted-2">
              {subtitle}
            </div>
          </div>

          <div
            className="flex-1 min-w-0 grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4"
            style={{
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,1) 10%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.35) 75%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,1) 10%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.35) 75%, rgba(0,0,0,0) 100%)",
            }}
            aria-hidden="true"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="rounded-lg border border-dashed border-line"
                style={{
                  aspectRatio,
                  background:
                    "linear-gradient(180deg, rgba(120,160,220,0.04) 0%, rgba(120,160,220,0.02) 100%)",
                }}
              />
            ))}
          </div>
        </div>

        {showPlus && (
          <span
            aria-hidden="true"
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 font-display font-semibold text-text leading-none select-none pointer-events-none"
            style={{
              fontSize: "clamp(34px, 4vw, 48px)",
              opacity: 0.85,
            }}
          >
            +
          </span>
        )}
      </div>
    </RevealOnScroll>
  );
}
