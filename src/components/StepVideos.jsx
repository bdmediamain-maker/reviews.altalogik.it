import { useState } from "react";
import { videos, ctaLink } from "../data/content";
import MediaSlot from "./MediaSlot";
import RevealOnScroll from "./RevealOnScroll";
import VideoModal from "./VideoModal";

export default function StepVideos() {
  const [active, setActive] = useState(null);

  return (
    <section id="video" className="relative pt-16 sm:pt-24 pb-16 sm:pb-24">
      <div className="max-w-page mx-auto px-4 sm:px-6">
        <RevealOnScroll>
          <p className="font-mono text-[12px] tracking-[0.22em] uppercase text-teal mb-3">
            Step 01 / 04
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
                    label={`VIDEO ${String(v.id).padStart(2, "0")}`}
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
            className="card-brick overflow-hidden flex items-center justify-center min-h-[260px] lg:col-span-2 border border-dashed border-line-strong"
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
    </section>
  );
}
