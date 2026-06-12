import { brand, footer } from "../data/content";

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-bg-2 py-12 sm:py-16">
      <div className="max-w-page mx-auto px-4 sm:px-6">
        {/* Riga 1: logo + nav anchors */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 flex-wrap">
          <a href="#top" className="flex items-center gap-2">
            <img
              src="/altalogik-logo.webp"
              alt="Altalogik"
              className="h-6 w-auto"
            />
            <span className="font-mono text-[13px] text-teal font-medium">
              {brand.suffix}
            </span>
          </a>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[12px] tracking-[0.16em] uppercase text-muted">
            {footer.navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-text transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Divisoria */}
        <div className="mt-10 border-t border-line opacity-50" />

        {/* Riga 2: copyright + link legali */}
        <div className="mt-10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 flex-wrap">
          <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted-2">
            {footer.copyright}
          </p>
          <ul className="flex flex-wrap gap-5 font-mono text-[11px] tracking-[0.12em] uppercase text-muted-2">
            {footer.links.map((l, i) => {
              const external = l.href.startsWith("http");
              return (
                <li key={i}>
                  <a
                    href={l.href}
                    {...(external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="hover:text-teal transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Riga 3: ragione sociale */}
        <p className="mt-6 font-mono text-[11px] text-muted-2 leading-relaxed">
          {footer.legal}
        </p>
      </div>
    </footer>
  );
}
