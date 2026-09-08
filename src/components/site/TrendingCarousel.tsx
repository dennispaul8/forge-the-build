import { Link } from "@tanstack/react-router";
import { Play, TrendingUp } from "lucide-react";
import { trending } from "@/data/content";

export function TrendingCarousel() {
  return (
    <section className="border-y border-border bg-paper">
      <div className="mx-auto max-w-[1400px] px-5 py-10 md:px-8">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-accent" />
          <h2 className="eyebrow text-foreground">Trending Now</h2>
        </div>
        <div className="no-scrollbar -mx-5 mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 md:mx-0 md:px-0">
          {trending.map((story, i) => (
            <Link
              key={story.slug + i}
              to="/article/$slug"
              params={{ slug: story.slug }}
              className="hover-zoom group w-[260px] shrink-0 snap-start sm:w-[300px]"
            >
              <div className="media-frame relative aspect-[16/10]">
                <img
                  src={story.image}
                  alt={story.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                {story.format === "video" && (
                  <>
                    <span className="absolute inset-0 grid place-items-center bg-ink/15">
                      <Play className="h-8 w-8 fill-ink-foreground text-ink-foreground" />
                    </span>
                    {story.duration && (
                      <span className="absolute bottom-2 right-2 bg-ink/85 px-1.5 py-0.5 font-mono text-[10px] text-ink-foreground">
                        {story.duration}
                      </span>
                    )}
                  </>
                )}
              </div>
              <div className="mt-3 flex gap-3">
                <span className="font-display text-3xl leading-none text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <p className="eyebrow text-muted-foreground">{story.category}</p>
                  <h3 className="mt-1 text-lg leading-tight transition-colors group-hover:text-accent">
                    {story.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
