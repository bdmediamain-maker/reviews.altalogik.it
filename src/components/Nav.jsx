import { brand, nav } from "../data/content";

export default function Nav() {
  return (
    <header className="sticky top-0 z-20 bg-[rgba(7,11,22,0.72)] backdrop-blur-md border-b border-line">
      <div className="max-w-page mx-auto px-4 sm:px-6 h-16 grid grid-cols-[1fr_auto_1fr] items-center">
        <a href="#top" className="flex items-center gap-2 justify-self-start">
          <img
            src="/altalogik-logo.webp"
            alt="Altalogik"
            className="h-7 w-auto"
          />
          <span className="font-mono text-[13px] text-teal font-medium">
            {brand.suffix}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-mono text-[12px] tracking-[0.18em] uppercase text-muted justify-self-center">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-text transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <span aria-hidden="true" />
      </div>
    </header>
  );
}
