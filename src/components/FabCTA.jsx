import { useEffect, useState } from "react";
import { ctaLink } from "../data/content";

function CalendarIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#04121a"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="16" rx="2.5" />
      <path d="M3 10h18" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
    </svg>
  );
}

export default function FabCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="group fixed bottom-6 right-6 z-[60]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.6)",
        transition:
          "opacity 400ms cubic-bezier(0.22, 1, 0.36, 1), transform 400ms cubic-bezier(0.22, 1, 0.36, 1)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {/* Tooltip (desktop only) */}
      <span
        className="hidden lg:flex absolute right-full mr-3 top-1/2 -translate-y-1/2 items-center whitespace-nowrap font-display text-[14px] text-text bg-surface border border-line-strong rounded-full px-4 py-2 shadow-[0_6px_24px_rgba(0,0,0,0.35)] opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none"
        aria-hidden="true"
      >
        Prenota call
      </span>

      <a
        href={ctaLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Prenota una call"
        title="Prenota call"
        className="block w-14 h-14 sm:w-16 sm:h-16 rounded-full grid place-items-center cursor-pointer"
        style={{
          background: "var(--grad)",
          boxShadow: "0 8px 30px rgba(45, 91, 255, 0.4)",
          transition:
            "transform 0.22s ease, box-shadow 0.22s ease, filter 0.22s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.06)";
          e.currentTarget.style.boxShadow =
            "0 14px 40px rgba(45, 91, 255, 0.55)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow =
            "0 8px 30px rgba(45, 91, 255, 0.4)";
        }}
      >
        <CalendarIcon />
      </a>
    </div>
  );
}
