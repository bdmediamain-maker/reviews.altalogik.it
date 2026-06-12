function LockIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="4" y="11" width="16" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

// "Vedi altro": banner rettangolare full-width con anteprime ghost sotto che sfumano.
// Suggerisce profondità di catalogo. variant: "videos" o "cases".
export default function LockedMore({
  count,
  label,
  cta = "Vedi tutti",
  variant = "videos",
}) {
  return (
    <a
      href="#"
      className="locked locked-banner block group"
      aria-label={`+${count} ${label}`}
    >
      {/* Ghost preview row — UNA sola riga di placeholders che sfumano da metà */}
      <div className="locked-inner">
        <div
          className={`grid gap-3 sm:gap-4 p-3 sm:p-5 ${
            variant === "cases"
              ? "grid-cols-3"
              : "grid-cols-3 sm:grid-cols-4 lg:grid-cols-5"
          }`}
        >
          {Array.from({
            length: variant === "cases" ? 3 : 5,
          }).map((_, i) => (
            <div key={i} className="rounded-lg overflow-hidden">
              <div
                className="slot"
                style={{
                  aspectRatio: variant === "cases" ? "16/10" : "16/9",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Overlay: lock + count + CTA inline orizzontale */}
      <div className="locked-veil">
        <div className="flex items-center justify-center gap-5 sm:gap-7 flex-wrap text-center">
          <span className="grid place-items-center w-10 h-10 rounded-full border border-line-bright text-teal transition-colors group-hover:border-teal group-hover:bg-[rgba(30,216,198,0.05)]">
            <LockIcon />
          </span>
          <span className="font-display text-text font-bold text-[32px] sm:text-[40px] leading-none">
            +{count}
          </span>
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted">
            {label}
          </span>
          <span className="font-mono text-[13px] text-teal inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
            {cta} <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </a>
  );
}
