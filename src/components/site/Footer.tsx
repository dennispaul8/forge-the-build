import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-ink-foreground">
      <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-4 w-1.5 bg-accent" />
              <span className="font-display text-3xl leading-none">FORGE</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-foreground/65">
              A digital media hub about the people, technology and processes behind how things
              get built.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <ul className="space-y-3">
              {[
                { to: "/people", label: "People" },
                { to: "/technology", label: "Technology" },
                { to: "/processes", label: "Processes" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="eyebrow text-ink-foreground/70 hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {[
                { to: "/videos", label: "Videos" },
                { to: "/about", label: "About" },
                { to: "/search", label: "Search" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="eyebrow text-ink-foreground/70 hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-ink-foreground/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="meta-text text-ink-foreground/50">
            © 2026 FORGE Media. A concept prototype.
          </p>
          <p className="meta-text text-ink-foreground/50">Built for people who build.</p>
        </div>
      </div>
    </footer>
  );
}
