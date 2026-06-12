// Slot immagine. API:
// - imageUrl: URL → mostra <img>; null → placeholder
// - objectFit: "cover" (default, foto edge-to-edge) | "contain" (logo, p-6 bg-2)
// - placeholderText: testo principale grande quando imageUrl è null (es. testata)
// - placeholderTopic: micro-tag sotto al testo principale (es. tema articolo)
export default function ImageSlot({
  imageUrl,
  label = "IMAGE",
  alt = "",
  aspect = "4/3",
  className = "",
  objectFit = "cover",
  placeholderText = null,
  placeholderTopic = null,
}) {
  if (imageUrl) {
    return (
      <div
        className={`overflow-hidden border border-line ${
          objectFit === "contain" ? "bg-bg-2" : "bg-surface"
        } ${className}`}
        style={{ aspectRatio: aspect, borderRadius: 14 }}
      >
        <img
          src={imageUrl}
          alt={alt || label}
          loading="lazy"
          className={`w-full h-full ${
            objectFit === "contain" ? "object-contain p-6" : "object-cover"
          }`}
        />
      </div>
    );
  }

  // Placeholder editoriale (magazine cover style) quando placeholderText valorizzato
  if (placeholderText) {
    return (
      <div
        className={`relative overflow-hidden border border-line rounded-[14px] ${className}`}
        style={{
          aspectRatio: aspect,
          background:
            "radial-gradient(140% 100% at 0% 0%, rgba(30,216,198,0.10), transparent 55%), radial-gradient(140% 100% at 100% 100%, rgba(45,91,255,0.14), transparent 55%), linear-gradient(180deg, var(--surface) 0%, var(--bg-2) 100%)",
        }}
      >
        {/* Hatched lines pattern overlay */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(120,160,220,0.08) 0 1px, transparent 1px 10px)",
          }}
        />

        {/* Diagonal teal accent slash top-right */}
        <div
          className="absolute top-0 right-0 w-[40%] h-[3px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--teal))",
          }}
        />

        {/* Eyebrow mono top-left */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span
            className="font-mono text-[10px] tracking-[0.22em] uppercase text-teal"
          >
            Rassegna stampa
          </span>
          <span
            className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-2"
          >
            {label}
          </span>
        </div>

        {/* Big outlet name centrato */}
        <div className="absolute inset-0 grid place-items-center pointer-events-none px-6 text-center">
          <div>
            <div
              className="font-display font-bold tracking-tight text-text"
              style={{
                fontSize: "clamp(24px, 3vw, 38px)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              {placeholderText}
            </div>
            {placeholderTopic && (
              <div className="mt-3 font-mono text-[10px] tracking-[0.2em] uppercase text-muted">
                {placeholderTopic}
              </div>
            )}
          </div>
        </div>

        {/* Bottom-left decorative dot */}
        <span
          aria-hidden="true"
          className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-teal"
        />
      </div>
    );
  }

  // Placeholder semplice (icona "immagine generica") — usato per case studies
  return (
    <div
      className={`slot ${className}`}
      style={{
        aspectRatio: aspect,
        backgroundImage:
          "var(--grad-soft), repeating-linear-gradient(135deg, rgba(120,160,220,0.06) 0 1px, transparent 1px 9px)",
      }}
    >
      <span
        className="slot-label"
        style={{ fontSize: 10, color: "var(--muted-2)" }}
      >
        {label}
      </span>
      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        <svg
          viewBox="0 0 48 48"
          width="40"
          height="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ color: "var(--muted-2)" }}
          aria-hidden="true"
        >
          <rect x="6" y="9" width="36" height="30" rx="3" />
          <circle cx="16" cy="19" r="3" />
          <path d="M6 33l11-11 9 9 6-6 12 12" />
        </svg>
      </div>
    </div>
  );
}
