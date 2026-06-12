// Slot video. API:
//   - videoUrl + posterUrl + onPlay → preview cliccabile (apre modal)
//   - videoUrl (solo, es. iframe YouTube) → iframe embed
//   - null → placeholder
export default function MediaSlot({
  videoUrl,
  posterUrl,
  label = "VIDEO",
  aspect = "16/9",
  className = "",
  onPlay,
}) {
  if (videoUrl && posterUrl && onPlay) {
    return (
      <button
        type="button"
        onClick={onPlay}
        aria-label={`Riproduci ${label}`}
        className={`relative block w-full overflow-hidden border border-line-strong bg-black group ${className}`}
        style={{ aspectRatio: aspect, borderRadius: 14 }}
      >
        <img
          src={posterUrl}
          alt={label}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <span
          className="absolute top-3 left-3 font-mono uppercase tracking-[0.18em]"
          style={{
            fontSize: 10,
            color: "var(--muted)",
            background: "rgba(0,0,0,0.45)",
            padding: "4px 8px",
            borderRadius: 6,
            backdropFilter: "blur(6px)",
          }}
        >
          {label}
        </span>
        <div className="play-orb pointer-events-none">
          <div>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </button>
    );
  }

  if (videoUrl) {
    return (
      <div
        className={`overflow-hidden border border-line-strong bg-black ${className}`}
        style={{ aspectRatio: aspect, borderRadius: 14 }}
      >
        <iframe
          src={videoUrl}
          title={label}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
        />
      </div>
    );
  }

  return (
    <div className={`slot ${className}`} style={{ aspectRatio: aspect }}>
      <span className="slot-label">{label}</span>
      <div className="play-orb">
        <div>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
