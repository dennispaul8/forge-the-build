import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { RowCard } from "@/components/site/cards";
import { NewsletterCTA } from "@/components/site/NewsletterCTA";
import { stories } from "@/data/content";

const title = "Search — FORGE";
const description = "Search FORGE features, profiles and original video on people, technology and process.";

export const Route = createFileRoute("/search")({
  validateSearch: (search: Record<string, unknown>) => ({
    q: typeof search['q'] === "string" ? (search['q'] as string) : "",
  }),
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const { q } = Route.useSearch();
  const navigate = useNavigate();
  const [value, setValue] = useState(q);

  const needle = q.trim().toLowerCase();
  const results = needle
    ? stories.filter((s) =>
        [s.title, s.deck, s.category, s.author].join(" ").toLowerCase().includes(needle),
      )
    : [];

  return (
    <>
      <PageHeader
        eyebrow="Search"
        title={q ? `Results for “${q}”` : "Search FORGE"}
        intro={
          q
            ? `${results.length} ${results.length === 1 ? "story" : "stories"} matching your search.`
            : "Find features, profiles and video across people, technology and process."
        }
      />
      <section className="mx-auto max-w-[1400px] px-5 py-12 md:px-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate({ to: "/search", search: { q: value } });
          }}
          className="flex max-w-xl gap-2"
        >
          <div className="relative min-w-0 flex-1">
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Search stories, people, topics"
              className="w-full border border-input bg-card py-3 pl-10 pr-4 text-sm outline-none focus:border-accent"
            />
          </div>
          <button className="eyebrow bg-ink px-5 py-3 text-ink-foreground transition-colors hover:bg-accent">
            Search
          </button>
        </form>

        {q && results.length === 0 ? (
          <p className="mt-14 text-lg text-muted-foreground">
            No stories matched “{q}”. Try a broader term like “AI”, “design” or “shipping”.
          </p>
        ) : (
          <div className="mt-14 grid gap-7 md:grid-cols-2 md:gap-x-14">
            {results.map((s) => (
              <RowCard key={s.slug} story={s} />
            ))}
          </div>
        )}
      </section>
      <NewsletterCTA />
    </>
  );
}
