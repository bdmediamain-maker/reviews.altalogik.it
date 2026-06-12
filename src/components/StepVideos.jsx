import { useState } from "react";
import { videos } from "../data/content";
import MediaSlot from "./MediaSlot";
import RevealOnScroll from "./RevealOnScroll";
import VideoModal from "./VideoModal";
import MoreToComeBanner from "./MoreToComeBanner";

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
            Video testimonianze
          </h2>
          <p className="text-[17px] leading-[1.55] text-muted mt-4 max-w-[640px]">
            I clienti spiegano cosa è cambiato nei loro processi. Nessuno
            script, niente regia — quello che hanno detto.
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
                  {v.title ? (
                    <>
                      <div className="font-display text-[16px] font-semibold text-text lowercase">
                        {v.title}
                      </div>
                      {v.company && (
                        <div className="mt-2 font-display text-[14px] font-semibold text-text">
                          {v.company}
                        </div>
                      )}
                      {v.description && (
                        <div className="text-[13px] text-muted mt-1 leading-snug">
                          {v.description}
                        </div>
                      )}
                      {v.duration && (
                        <div className="mt-3 font-mono text-[11px] tracking-[0.16em] text-teal">
                          {v.duration}
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="font-display text-[16px] font-semibold text-text">
                        {v.name}
                      </div>
                      <div className="text-[13px] text-muted mt-1 leading-snug">
                        {v.role} · {v.company}
                      </div>
                      <div className="mt-3 font-mono text-[11px] tracking-[0.16em] text-teal">
                        {v.duration}
                      </div>
                    </>
                  )}
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        <MoreToComeBanner
          title="il prossimo sei tu"
          subtitle="slot disponibile · testimonianza futura"
          aspectRatio="16/10"
          showPlus
        />
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
