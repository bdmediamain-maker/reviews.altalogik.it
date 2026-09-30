import { useEffect } from "react";

// Lightbox immagine, stesso stile di VideoModal (backdrop blur, Esc per chiudere)
export default function ImageModal({ src, alt, onClose }) {
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
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(4, 8, 16, 0.78)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
        }}
      />

      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          aria-label="Chiudi immagine"
          className="absolute -top-12 right-0 w-10 h-10 rounded-full border border-line-strong bg-surface/70 text-text hover:text-teal hover:border-teal transition-colors grid place-items-center backdrop-blur"
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

        <img
          src={src}
          alt={alt}
          className="block w-auto h-auto max-w-[92vw] max-h-[80vh] rounded-2xl border border-line-strong"
          style={{ boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6)" }}
        />
      </div>
    </div>
  );
}
