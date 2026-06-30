import { useEffect } from "react";
import { legalNotice } from "../data/content";

export default function LegalModal({ onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8 sm:p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(4, 8, 16, 0.82)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
        }}
      />

      <div
        className="relative w-full max-w-[820px] max-h-full flex flex-col rounded-2xl border border-line-strong bg-bg-2 overflow-hidden"
        style={{ boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6 px-6 sm:px-10 pt-8 pb-5 border-b border-line">
          <div>
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-teal mb-2">
              Legal
            </p>
            <h2
              id="legal-modal-title"
              className="font-display font-semibold text-text"
              style={{
                fontSize: "clamp(22px, 2.4vw, 30px)",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
              }}
            >
              {legalNotice.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Chiudi"
            className="shrink-0 w-10 h-10 rounded-full border border-line-strong bg-surface/70 text-text hover:text-teal hover:border-teal transition-colors grid place-items-center"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto px-6 sm:px-10 py-7 space-y-7">
          {legalNotice.sections.map((s) => (
            <section key={s.heading}>
              <h3 className="font-display text-text font-semibold text-[16px] mb-2">
                {s.heading}
              </h3>
              {s.body.split("\n\n").map((p, i) => (
                <p
                  key={i}
                  className="text-[14px] leading-[1.65] text-muted mb-2 last:mb-0"
                >
                  {p}
                </p>
              ))}
            </section>
          ))}
          <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted-2 pt-3 border-t border-line">
            Ultimo aggiornamento · {legalNotice.lastUpdate}
          </p>
        </div>
      </div>
    </div>
  );
}
