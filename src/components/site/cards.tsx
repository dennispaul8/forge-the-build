import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Play } from "lucide-react";
import type { Person, Story } from "@/data/content";

export function CategoryLabel({ story }: { story: Story }) {
  return (
    <span className="flex items-center gap-2">
      <span className="eyebrow text-accent">{story.category}</span>
      {story.format === "video" && (
        <span className="eyebrow flex items-center gap-1 text-muted-foreground">
          <Play className="h-2.5 w-2.5 fill-current" /> Video
        </span>
      )}
    </span>
  );
}

function PlayOverlay({ duration }: { duration?: string | undefined }) {
  return (
    <>
      <span className="pointer-events-none absolute inset-0 bg-ink/10 transition-opacity group-hover:opacity-0" />
      <span className="pointer-events-none absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ink-foreground/90 transition-transform duration-300 group-hover:scale-110">
        <Play className="ml-0.5 h-5 w-5 fill-ink text-ink" />
      </span>
      {duration && (
        <span className="pointer-events-none absolute bottom-3 right-3 bg-ink/85 px-2 py-1 font-mono text-[11px] text-ink-foreground">
          {duration}
        </span>
      )}
    </>
  );
}

export function StoryMeta({ story }: { story: Story }) {
  return (
    <p className="meta-text">
      {story.author} · {story.date}
      {story.readingTime ? ` · ${story.readingTime}` : ""}
      {story.format === "video" && story.duration ? ` · ${story.duration}` : ""}
    </p>
  );
}

/* --- Featured / hero-scale card --- */
export function FeaturedCard({ story, priority }: { story: Story; priority?: boolean }) {
  return (
    <article className="hover-zoom group">
      <Link
        to="/article/$slug"
        params={{ slug: story.slug }}
        className="block"
        aria-label={story.title}
      >
        <div className="media-frame relative aspect-[16/10]">
          <img
            src={story.image}
            alt={story.title}
            loading={priority ? "eager" : "lazy"}
            className="h-full w-full object-cover"
          />
          {story.format === "video" && <PlayOverlay duration={story.duration} />}
        </div>
        <div className="mt-5">
          <CategoryLabel story={story} />
          <h2 className="mt-3 text-3xl leading-[1.08] sm:text-4xl md:text-[2.9rem]">
            {story.title}
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
            {story.deck}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
            <StoryMeta story={story} />
            <span className="eyebrow inline-flex items-center gap-1 border-b border-foreground pb-0.5 transition-colors group-hover:border-accent group-hover:text-accent">
              {story.format === "video" ? "Watch Video" : "Read Story"}
              <ArrowUpRight className="h-3 w-3" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

/* --- Standard article / video card --- */
export function ArticleCard({
  story,
  size = "md",
  showDeck = true,
}: {
  story: Story;
  size?: "sm" | "md";
  showDeck?: boolean;
}) {
  return (
    <article className="hover-zoom group">
      <Link to="/article/$slug" params={{ slug: story.slug }} className="block">
        <div
          className={`media-frame relative ${story.portrait ? "aspect-[4/5]" : "aspect-[16/10]"}`}
        >
          <img src={story.image} alt={story.title} loading="lazy" className="h-full w-full object-cover" />
          {story.format === "video" && <PlayOverlay duration={story.duration} />}
        </div>
        <div className="mt-4">
          <CategoryLabel story={story} />
          <h3
            className={`mt-2 leading-[1.15] transition-colors group-hover:text-accent ${
              size === "sm" ? "text-lg" : "text-2xl"
            }`}
          >
            {story.title}
          </h3>
          {showDeck && (
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{story.deck}</p>
          )}
          <div className="mt-3">
            <StoryMeta story={story} />
          </div>
        </div>
      </Link>
    </article>
  );
}

/* --- Compact horizontal row card --- */
export function RowCard({ story }: { story: Story }) {
  return (
    <article className="hover-zoom group border-b border-border pb-6">
      <Link
        to="/article/$slug"
        params={{ slug: story.slug }}
        className="grid grid-cols-[1fr_110px] items-start gap-4 sm:grid-cols-[1fr_220px] sm:gap-8"
      >
        <div className="min-w-0">
          <CategoryLabel story={story} />
          <h3 className="mt-2 text-xl leading-[1.15] transition-colors group-hover:text-accent sm:text-2xl">
            {story.title}
          </h3>
          <p className="mt-2 hidden text-sm leading-relaxed text-muted-foreground sm:block">
            {story.deck}
          </p>
          <div className="mt-3">
            <StoryMeta story={story} />
          </div>
        </div>
        <div className="media-frame relative aspect-[4/3]">
          <img src={story.image} alt={story.title} loading="lazy" className="h-full w-full object-cover" />
          {story.format === "video" && (
            <span className="pointer-events-none absolute inset-0 grid place-items-center bg-ink/15">
              <Play className="h-6 w-6 fill-ink-foreground text-ink-foreground" />
            </span>
          )}
        </div>
      </Link>
    </article>
  );
}

/* --- Video card --- */
export function VideoCard({ story, size = "md" }: { story: Story; size?: "sm" | "md" | "lg" }) {
  return (
    <article className="hover-zoom group">
      <Link to="/article/$slug" params={{ slug: story.slug }} className="block">
        <div className="media-frame relative aspect-video">
          <img src={story.image} alt={story.title} loading="lazy" className="h-full w-full object-cover" />
          <PlayOverlay duration={story.duration} />
        </div>
        <div className="mt-4">
          <CategoryLabel story={story} />
          <h3
            className={`mt-2 leading-[1.15] transition-colors group-hover:text-accent ${
              size === "lg" ? "text-3xl" : size === "sm" ? "text-lg" : "text-2xl"
            }`}
          >
            {story.title}
          </h3>
          {size !== "sm" && (
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{story.deck}</p>
          )}
          <p className="meta-text mt-3">
            {story.channel} · {story.date}
          </p>
        </div>
      </Link>
    </article>
  );
}

/* --- Profile card --- */
export function ProfileCard({ person }: { person: Person }) {
  return (
    <article className="hover-zoom group">
      <div className="media-frame relative aspect-[4/5]">
        <img src={person.image} alt={person.name} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <h3 className="mt-4 text-2xl leading-tight">{person.name}</h3>
      <p className="eyebrow mt-1.5 text-accent">{person.role}</p>
      <p className="meta-text mt-1">{person.company}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{person.blurb}</p>
    </article>
  );
}
