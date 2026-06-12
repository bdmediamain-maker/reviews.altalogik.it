import { PREVIEW_MODE } from "../data/content";

export default function PreviewBar() {
  if (!PREVIEW_MODE) return null;
  return (
    <div className="relative z-30 border-b border-line bg-[rgba(7,11,22,0.85)] backdrop-blur">
      <div className="max-w-page mx-auto px-4 sm:px-6 py-1.5 sm:py-2 text-[10px] sm:text-[11px] font-mono tracking-[0.18em] uppercase text-muted text-center">
        <span className="sm:hidden">
          <span className="text-teal">ANTEPRIMA</span>
          <span className="mx-2 text-muted-2">·</span>
          contenuti placeholder
        </span>
        <span className="hidden sm:inline">
          <span className="text-teal">ANTEPRIMA</span>
          <span className="mx-2 text-muted-2">·</span>
          video, PDF, articoli e loghi sono{" "}
          <span className="text-text">PLACEHOLDER</span> da sostituire con
          materiale reale prima della pubblicazione
        </span>
      </div>
    </div>
  );
}
