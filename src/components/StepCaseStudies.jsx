import { caseStudies } from "../data/content";
import ImageSlot from "./ImageSlot";
import CaseStudyPreview from "./CaseStudyPreview";
import RevealOnScroll from "./RevealOnScroll";

export default function StepCaseStudies() {
  return (
    <section
      id="case-study"
      className="relative pt-16 sm:pt-24 pb-16 sm:pb-24 bg-bg-2"
    >
      <div className="max-w-page mx-auto px-4 sm:px-6">
        <RevealOnScroll>
          <p className="font-mono text-[12px] tracking-[0.22em] uppercase text-teal mb-3">
            Step 02 / 04
          </p>
          <h2
            className="font-display font-semibold text-text max-w-[720px]"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Casi studio
          </h2>
          <p className="text-[17px] leading-[1.55] text-muted mt-4 max-w-[640px]">
            Documenti completi con numeri, processo, prima/dopo. Scaricabili in
            PDF.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-12">
          {caseStudies.map((c, i) => (
            <RevealOnScroll
              key={c.id}
              delay={(i % 2) * 80}
              className="card-brick overflow-hidden flex flex-col"
            >
              <div className="p-3">
                {c.previewUrl ? (
                  <ImageSlot
                    imageUrl={c.previewUrl}
                    label={`ANTEPRIMA · Pag 1 di ${c.pages}`}
                    aspect="16/10"
                    objectFit={c.previewFit || "cover"}
                  />
                ) : (
                  <CaseStudyPreview
                    caseNumber={c.id}
                    client={c.client}
                    sector={c.sector}
                    keyMetric={c.keyMetric}
                    keyMetricLabel={c.keyMetricLabel}
                    aspect="16/10"
                  />
                )}
              </div>
              <div className="px-6 pb-6 pt-4 flex flex-col flex-1">
                <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-teal">
                  {c.sector}
                </div>
                <h3 className="font-display text-text mt-2 font-semibold leading-[1.2] text-[22px] sm:text-[24px]">
                  {c.title}
                </h3>
                <p className="text-[15px] text-muted mt-3 leading-[1.55]">
                  {c.abstract}
                </p>
                <div className="mt-5 flex items-center justify-between pt-5 border-t border-line">
                  <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted-2">
                    {c.pages} pagine · PDF
                  </span>
                  <a
                    href={c.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[12px] text-teal hover:underline inline-flex items-center gap-1"
                  >
                    Apri PDF <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
