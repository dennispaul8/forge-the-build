import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/people", label: "People" },
  { to: "/technology", label: "Technology" },
  { to: "/processes", label: "Processes" },
  { to: "/videos", label: "Videos" },
  { to: "/about", label: "About" },
] as const;

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchOpen(false);
    setMenuOpen(false);
    navigate({ to: "/search", search: { q: query } });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto grid max-w-[1400px] grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-4 md:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2" onClick={() => setMenuOpen(false)}>
          <span className="h-4 w-1.5 shrink-0 bg-accent" />
          <span className="font-display text-2xl leading-none tracking-tight">FORGE</span>
        </Link>

        <nav className="hidden justify-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="eyebrow text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "eyebrow text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center border border-border transition-colors hover:border-border-strong hover:bg-secondary"
          >
            <Search className="h-4 w-4" />
          </button>
          <Link
            to="/"
            hash="newsletter"
            className="eyebrow hidden bg-ink px-4 py-2.5 text-ink-foreground transition-colors hover:bg-accent sm:inline-block"
          >
            Newsletter
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center border border-border lg:hidden"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-border bg-paper">
          <form
            onSubmit={submitSearch}
            className="mx-auto flex max-w-[1400px] items-center gap-3 px-5 py-4 md:px-8"
          >
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles, people, technology, processes, videos"
              className="min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
            />
            <button type="submit" className="eyebrow bg-ink px-4 py-2 text-ink-foreground">
              Search
            </button>
          </form>
        </div>
      )}

      {menuOpen && (
        <nav className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto max-w-[1400px] px-5 py-2 md:px-8">
            {links.map((l) => (
              <li key={l.to} className="border-b border-border last:border-0">
                <Link
                  to={l.to}
                  onClick={() => setMenuOpen(false)}
                  className="block py-4 font-display text-2xl"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-5 pb-5 md:px-8">
            <Link
              to="/"
              hash="newsletter"
              onClick={() => setMenuOpen(false)}
              className="eyebrow block bg-ink px-4 py-3 text-center text-ink-foreground"
            >
              Subscribe to the newsletter
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
