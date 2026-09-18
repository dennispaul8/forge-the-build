import { Link } from "@tanstack/react-router";
import { Play, Radio } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { feedStories, type FeedStory } from "@/data/content";

const topics = [
  "All Stories",
  "Deep Dives",
  "AI Governance Watch",
  "Founder Stories",
  "Product Drops",
  "Big Tech Reactions",
] as const;

type Topic = (typeof topics)[number];

const contentTypeStyles: Record<FeedStory["contentType"], string> = {
  "The Script": "bg-accent text-accent-foreground",
  "The Files": "bg-foreground text-background",
  "Daily Briefing": "bg-secondary text-secondary-foreground",
  "Deep Dive": "bg-primary text-primary-foreground",
  Profile: "border border-accent text-accent",
  Video: "bg-accent text-accent-foreground",
};

function dateKey(publishedAt: string) {
  return publishedAt.slice(0, 10);
}

function dateLabel(key: string, newestKey: string) {
  const value = new Date(`${key}T12:00:00Z`);
  const formatted = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  })
    .format(value)
    .toUpperCase();
  return key === newestKey ? `TODAY — ${formatted}` : formatted;
}

function FeedStoryCard({ story, priority }: { story: FeedStory; priority?: boolean }) {
  return (
    <article className="hover-zoom group border border-border bg-card transition-colors duration-300 hover:border-border-strong hover:bg-background">
      <Link
        to="/article/$slug"
        params={{ slug: story.slug }}
        aria-label={story.title}
        className="grid min-w-0 grid-cols-[104px_minmax(0,1fr)] gap-4 p-3 sm:grid-cols-[190px_minmax(0,1fr)] sm:gap-6 sm:p-4 lg:grid-cols-[230px_minmax(0,1fr)]"
      >
        <div className="media-frame relative aspect-[4/3] self-start sm:aspect-video">
          <img
            src={story.image}
            alt=""
            loading={priority ? "eager" : "lazy"}
            className="h-full w-full object-cover"
          />
          {story.format === "video" && (
            <>
              <span className="absolute inset-0 grid place-items-center bg-ink/20 transition-colors group-hover:bg-ink/10">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-ink-foreground/90 transition-transform group-hover:scale-110 sm:h-11 sm:w-11">
                  <Play className="ml-0.5 h-4 w-4 fill-ink text-ink" />
                </span>
              </span>
              <span className="absolute bottom-1.5 right-1.5 bg-ink/90 px-1.5 py-0.5 font-mono text-[10px] text-ink-foreground sm:bottom-2 sm:right-2">
                {story.duration}
              </span>
            </>
          )}
        </div>

        <div className="min-w-0 py-0.5 sm:py-1">
          <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1.5">
            <span className={`eyebrow px-2 py-1 ${contentTypeStyles[story.contentType]}`}>
              {story.contentType}
            </span>
            <span className="meta-text shrink-0">{story.time}</span>
            <span className="hidden border-l border-border pl-2 text-[11px] font-semibold text-muted-foreground min-[460px]:inline">
              Part of: {story.series}
            </span>
          </div>
          <h2 className="mt-2 text-lg leading-[1.08] transition-colors group-hover:text-accent sm:text-2xl lg:text-[1.72rem]">
            {story.title}
          </h2>
          <p className="mt-2 hidden max-w-3xl text-sm leading-relaxed text-muted-foreground sm:block">
            {story.deck}
          </p>
          <p className="meta-text mt-3 hidden sm:block">
            © FORGE — original {story.format === "video" ? "video" : "reporting"}
          </p>
        </div>
      </Link>
    </article>
  );
}

export function ChronologicalFeed() {
  const [topic, setTopic] = useState<Topic>("All Stories");
  const filteredStories = useMemo(() => {
    if (topic === "All Stories") return feedStories;
    if (topic === "Deep Dives") return feedStories.filter((story) => story.contentType === "Deep Dive");
    return feedStories.filter((story) => story.series === topic);
  }, [topic]);

  const groups = useMemo(() => {
    const grouped = new Map<string, FeedStory[]>();
    filteredStories.forEach((story) => {
      const key = dateKey(story.publishedAt);
      grouped.set(key, [...(grouped.get(key) ?? []), story]);
    });
    return [...grouped.entries()];
  }, [filteredStories]);

  const newestKey = dateKey(feedStories[0]?.publishedAt ?? "2026-09-18T00:00:00Z");

  return (
    <>
      <div className="border-b border-border bg-ink text-ink-foreground">
        <div className="mx-auto flex max-w-[1120px] items-center gap-3 px-5 py-3 md:px-8">
          <span className="eyebrow flex shrink-0 items-center gap-2 text-ink-foreground/55">
            <Radio className="h-3.5 w-3.5 text-accent" /> Topics
          </span>
          <div className="no-scrollbar flex min-w-0 flex-1 gap-2 overflow-x-auto">
            {topics.map((item) => (
              <Button
                key={item}
                type="button"
                variant="ghost"
                size="sm"
                aria-pressed={topic === item}
                onClick={() => setTopic(item)}
                className={`eyebrow h-8 shrink-0 rounded-full border px-3 shadow-none ${
                  topic === item
                    ? "border-accent bg-accent text-accent-foreground hover:bg-accent hover:text-accent-foreground"
                    : "border-ink-foreground/20 bg-transparent text-ink-foreground/70 hover:border-ink-foreground/45 hover:bg-ink-foreground/10 hover:text-ink-foreground"
                }`}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-paper">
        <div className="mx-auto max-w-[1120px] px-5 pb-20 pt-8 md:px-8 md:pt-10">
          <div className="mb-8 grid gap-3 border-b border-border-strong pb-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
            <div className="min-w-0">
              <p className="eyebrow text-accent">Live Editorial Desk</p>
              <h1 className="mt-2 text-4xl leading-none sm:text-5xl">The Feed</h1>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-right">
              People, technology, AI and the decisions behind what gets built.
            </p>
          </div>

          {groups.length > 0 ? (
            <div className="space-y-12">
              {groups.map(([key, group], groupIndex) => (
                <section key={key} id={groupIndex === 0 ? "today" : undefined} className="scroll-mt-36">
                  <div className="grid grid-cols-[minmax(20px,1fr)_auto_minmax(20px,1fr)] items-center gap-4">
                    <span className="h-px bg-border-strong" />
                    <h2 className="eyebrow text-center text-muted-foreground">
                      {dateLabel(key, newestKey)}
                    </h2>
                    <span className="h-px bg-border-strong" />
                  </div>
                  <div className="mt-5 space-y-3">
                    {group.map((story, storyIndex) => (
                      <FeedStoryCard
                        key={story.slug}
                        story={story}
                        priority={groupIndex === 0 && storyIndex === 0}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : (
            <div className="border-y border-border py-16 text-center">
              <p className="font-display text-3xl">No stories in this desk yet.</p>
              <Button type="button" variant="link" onClick={() => setTopic("All Stories")} className="mt-3 text-accent">
                Return to all stories
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}