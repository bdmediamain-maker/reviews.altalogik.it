// Preview "cover" custom per case studies, mimica la prima pagina del PDF
// Altalogik. Usato quando previewUrl è null. Quando avrai screenshot reali,
// passare imageUrl a ImageSlot invece di questo componente.
export default function CaseStudyPreview({
  caseNumber,
  client,
  sector,
  keyMetric,
  keyMetricLabel,
  aspect = "16/10",
}) {
  return (
    <div
      className="relative overflow-hidden border border-line rounded-[14px]"
      style={{
        aspectRatio: aspect,
        background:
          "radial-gradient(140% 100% at 0% 0%, rgba(30,216,198,0.14), transparent 55%), radial-gradient(140% 100% at 100% 100%, rgba(45,91,255,0.20), transparent 55%), linear-gradient(170deg, var(--bg-2) 0%, var(--surface) 100%)",
      }}
    >
      {/* Hatched pattern very subtle */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(120,160,220,0.10) 0 1px, transparent 1px 12px)",
        }}
      />

      {/* Top: brand header */}
      <div className="absolute top-4 left-5 right-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="w-1.5 h-1.5 rounded-full bg-teal"
          />
          <span className="font-display font-bold text-text text-[13px] tracking-tight">
            Altalogik
          </span>
          <span className="font-mono text-[9px] tracking-[0.16em] text-teal uppercase ml-1">
            Adv. Software & AI
          </span>
        </div>
        <span className="font-mono text-[9px] tracking-[0.2em] text-muted-2 uppercase">
          Case Study #{String(caseNumber).padStart(2, "0")}
        </span>
      </div>

      {/* Hairline divisoria sotto il brand */}
      <div className="absolute top-[42px] left-5 right-5 h-px bg-line-strong" />

      {/* Centro: client + sector */}
      <div className="absolute inset-0 grid place-items-center px-6 pt-12 pb-16 pointer-events-none">
        <div className="text-center">
          <div
            className="font-display font-bold text-text leading-[1]"
            style={{
              fontSize: "clamp(28px, 3.6vw, 44px)",
              letterSpacing: "-0.03em",
            }}
          >
            {client}
          </div>
          <div className="mt-3 font-mono text-[10px] tracking-[0.22em] uppercase text-muted">
            {sector}
          </div>
        </div>
      </div>

      {/* Bottom: key metric a destra + dot teal a sinistra */}
      <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
        <span
          aria-hidden="true"
          className="w-2 h-2 rounded-full bg-teal mb-1"
        />
        {keyMetric && (
          <div className="text-right">
            <div
              className="grad-text font-display font-bold leading-none"
              style={{
                fontSize: "clamp(26px, 3vw, 36px)",
                letterSpacing: "-0.02em",
              }}
            >
              {keyMetric}
            </div>
            {keyMetricLabel && (
              <div className="mt-1.5 font-mono text-[9px] tracking-[0.16em] uppercase text-muted-2">
                {keyMetricLabel}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
