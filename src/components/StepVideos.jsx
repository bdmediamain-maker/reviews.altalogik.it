import { useState } from "react";
import { videos, writtenReview, ctaLink } from "../data/content";
import MediaSlot from "./MediaSlot";
import RevealOnScroll from "./RevealOnScroll";
import VideoModal from "./VideoModal";
import ImageModal from "./ImageModal";

export default function StepVideos() {
  const [active, setActive] = useState(null);
  const [proofOpen, setProofOpen] = useState(false);

  return (
    <section id="video" className="relative pt-16 sm:pt-24 pb-16 sm:pb-24">
      <div className="max-w-page mx-auto px-4 sm:px-6">
        <RevealOnScroll>
          <p className="font-mono text-[12px] tracking-[0.22em] uppercase text-teal mb-3">
            Step 01 / 03
          </p>
          <h2
            className="font-display font-semibold text-text max-w-[720px]"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Testimonianze
          </h2>
          <p className="text-[17px] leading-[1.55] text-muted mt-4 max-w-[640px]">
            I clienti spiegano cosa è cambiato nei loro processi. Nessuno
            script, niente regia, solo quello che hanno detto.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mt-12">
          {/* Messaggio scritto: apre la sezione e ne detta l'ordine */}
          <RevealOnScroll className="card-brick overflow-hidden sm:col-span-2 lg:col-span-3 p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <div className="flex-1 min-w-0">
                <span className="inline-block font-mono text-[10px] tracking-[0.18em] uppercase text-muted bg-black/45 px-2 py-1 rounded-md">
                  {writtenReview.label}
                </span>
                <div className="font-display text-[20px] sm:text-[24px] font-semibold text-text mt-5">
                  {writtenReview.title}
                </div>
                <p className="text-[15px] sm:text-[16px] leading-[1.6] text-muted mt-3">
                  &ldquo;{writtenReview.quote}&rdquo;
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 mt-6 pt-6 border-t border-line">
                  {writtenReview.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 text-[14px] leading-[1.45] text-text"
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prova: screenshot del messaggio originale */}
              <figure className="shrink-0 w-full max-w-[260px] mx-auto md:mx-0 md:w-[220px] lg:w-[250px]">
                <button
                  type="button"
                  onClick={() => setProofOpen(true)}
                  aria-label="Ingrandisci il messaggio originale"
                  className="group relative block w-full overflow-hidden rounded-xl border border-line-strong"
                >
                  <img
                    src={writtenReview.proofUrl}
                    alt="Screenshot del messaggio originale inviato dal cliente"
                    loading="lazy"
                    width="411"
                    height="500"
                    className="block w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </button>
                <figcaption className="flex items-center justify-between gap-2 mt-2 font-mono text-[10px] tracking-[0.16em] uppercase text-muted-2 whitespace-nowrap">
                  <span>{writtenReview.proofCaption}</span>
                  <span className="text-teal" aria-hidden="true">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="7" />
                      <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
                    </svg>
                  </span>
                </figcaption>
              </figure>
            </div>
          </RevealOnScroll>

          {videos.map((v, i) => {
            const isLocal = Boolean(v.videoUrl && v.posterUrl);
            return (
              <RevealOnScroll
                key={v.id}
                delay={(i % 3) * 60}
                className="card-brick overflow-hidden flex flex-col"
              >
                <div className="p-3">
                  <MediaSlot
                    videoUrl={v.videoUrl}
                    posterUrl={v.posterUrl}
                    label={`VIDEO ${String(i + 1).padStart(2, "0")}`}
                    onPlay={
                      isLocal
                        ? () =>
                            setActive({
                              videoUrl: v.videoUrl,
                              posterUrl: v.posterUrl,
                            })
                        : undefined
                    }
                  />
                </div>
                <div className="px-5 pb-5 pt-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-display text-[16px] font-semibold text-text">
                      {v.title}
                    </div>
                    {v.duration && (
                      <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-2 whitespace-nowrap">
                        {v.duration}
                      </span>
                    )}
                  </div>
                  {v.description && (
                    <p className="text-[14px] leading-[1.5] text-muted mt-2">
                      &ldquo;{v.description}&rdquo;
                    </p>
                  )}
                </div>
              </RevealOnScroll>
            );
          })}

          <RevealOnScroll
            delay={120}
            className="card-brick overflow-hidden flex items-center justify-center min-h-[260px] border border-dashed border-line-strong"
          >
            <div className="flex flex-col items-center justify-center gap-5 px-6 py-10 text-center">
              <span className="font-display text-text font-semibold text-[clamp(22px,2.4vw,30px)] leading-[1.2] max-w-[520px]">
                Vuoi anche tu un partner tecnologico che parla chiaro?
              </span>
              <a
                href={ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-mono text-[12px] tracking-[0.18em] uppercase text-white bg-[#2563eb] hover:bg-[#1d4ed8] transition-colors"
              >
                Prenota una call
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {active && (
        <VideoModal
          videoUrl={active.videoUrl}
          posterUrl={active.posterUrl}
          onClose={() => setActive(null)}
        />
      )}
      {proofOpen && (
        <ImageModal
          src={writtenReview.proofUrl}
          alt="Screenshot del messaggio originale inviato dal cliente"
          onClose={() => setProofOpen(false)}
        />
      )}
    </section>
  );
}
