import { Link, useNavigate } from "@tanstack/react-router";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "The Feed" },
  { to: "/videos", label: "Videos" },
  { to: "/about", label: "About" },
] as const;

const seriesLinks = [
  { to: "/people", label: "People" },
  { to: "/technology", label: "Technology" },
  { to: "/processes", label: "Processes" },
] as const;

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [seriesOpen, setSeriesOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setMenuOpen(false);
        setSeriesOpen(false);
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

        <nav className="hidden items-center justify-center gap-6 md:flex">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="eyebrow text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "eyebrow border-b border-accent pb-1 text-foreground" }}
          >
            The Feed
          </Link>
          <div className="relative">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              aria-expanded={seriesOpen}
              onClick={() => setSeriesOpen((value) => !value)}
              className="eyebrow h-auto rounded-none p-0 text-muted-foreground shadow-none hover:bg-transparent hover:text-foreground"
            >
              Series <ChevronDown className="h-3 w-3" />
            </Button>
            {seriesOpen && (
              <div className="absolute left-1/2 top-7 w-48 -translate-x-1/2 border border-border bg-background p-2 shadow-lg">
                {seriesLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setSeriesOpen(false)}
                    className="eyebrow block px-3 py-2.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {links.slice(1).map((l) => (
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
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
            className="rounded-none shadow-none"
          >
            <Search className="h-4 w-4" />
          </Button>
          <Button
            asChild
            className="eyebrow hidden rounded-none bg-accent px-4 text-accent-foreground shadow-none hover:bg-accent/90 sm:inline-flex"
          >
            <Link to="/" hash="today">
              Jump to Today
            </Link>
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="rounded-none shadow-none md:hidden"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
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
            <Button type="submit" className="eyebrow rounded-none bg-ink px-4 text-ink-foreground shadow-none">
              Search
            </Button>
          </form>
        </div>
      )}

      {menuOpen && (
        <nav className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto max-w-[1400px] px-5 py-2 md:px-8">
            {[links[0], ...seriesLinks, ...links.slice(1)].map((l) => (
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
              hash="today"
              onClick={() => setMenuOpen(false)}
              className="eyebrow block bg-ink px-4 py-3 text-center text-ink-foreground"
            >
              Jump to Today
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
