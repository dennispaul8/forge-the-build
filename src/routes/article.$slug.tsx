import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft, Play } from "lucide-react";
import { ArticleCard } from "@/components/site/cards";
import { SectionHeading } from "@/components/site/SectionHeading";
import { NewsletterCTA } from "@/components/site/NewsletterCTA";
import { articleBody, getStory, relatedStories } from "@/data/content";

export const Route = createFileRoute("/article/$slug")({
  loader: ({ params }) => {
    const story = getStory(params.slug);
    if (!story) throw notFound();
    return { story };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Story not found — FORGE" }, { name: "robots", content: "noindex" }] };
    }
    const { story } = loaderData;
    const t = `${story.title} — FORGE`;
    return {
      meta: [
        { title: t },
        { name: "description", content: story.deck },
        { property: "og:title", content: t },
        { property: "og:description", content: story.deck },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { story } = Route.useLoaderData();
  const related = relatedStories(story.slug);

  return (
    <>
      <article>
        <header className="border-b border-border bg-paper">
          <div className="mx-auto max-w-[820px] px-5 py-12 md:py-16">
            <Link
              to="/"
              className="eyebrow inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
            </Link>
            <p className="eyebrow mt-8 text-accent">{story.category}</p>
            <h1 className="mt-4 text-4xl leading-[1.04] sm:text-5xl md:text-[3.4rem]">
              {story.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{story.deck}</p>
            <p className="meta-text mt-7">
              {story.author} · {story.date}
              {story.readingTime ? ` · ${story.readingTime}` : ""}
              {story.duration ? ` · ${story.duration}` : ""}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-[1000px] px-5 py-10 md:py-14">
          <div className="media-frame relative aspect-[16/9]">
            <img src={story.image} alt={story.title} className="h-full w-full object-cover" />
            {story.format === "video" && (
              <span className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ink-foreground/90">
                <Play className="ml-1 h-7 w-7 fill-ink text-ink" />
              </span>
            )}
          </div>
        </div>

        <div className="mx-auto max-w-[720px] px-5 pb-16">
          <div className="space-y-7">
            {articleBody.map((block, i) => {
              if (block.kind === "p")
                return (
                  <p key={i} className="text-lg leading-[1.75] text-foreground/85">
                    {block.text}
                  </p>
                );
              if (block.kind === "h2")
                return (
                  <h2 key={i} className="pt-6 text-3xl leading-tight">
                    {block.text}
                  </h2>
                );
              if (block.kind === "quote")
                return (
                  <blockquote key={i} className="border-l-2 border-accent py-2 pl-6">
                    <p className="font-display text-2xl leading-snug sm:text-3xl">“{block.text}”</p>
                    <footer className="meta-text mt-4">{block.attribution}</footer>
                  </blockquote>
                );
              if (block.kind === "image")
                return (
                  <figure key={i} className="py-4">
                    <div className="media-frame aspect-[16/10]">
                      <img
                        src={block.src}
                        alt={block.caption}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <figcaption className="meta-text mt-3">{block.caption}</figcaption>
                  </figure>
                );
              return (
                <figure key={i} className="py-4">
                  <div className="media-frame relative aspect-video bg-ink">
                    <img
                      src={story.image}
                      alt={block.title}
                      loading="lazy"
                      className="h-full w-full object-cover opacity-80"
                    />
                    <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ink-foreground/90">
                      <Play className="ml-1 h-6 w-6 fill-ink text-ink" />
                    </span>
                  </div>
                  <figcaption className="meta-text mt-3">{block.caption}</figcaption>
                </figure>
              );
            })}
          </div>

          <div className="mt-14">
            <NewsletterCTA variant="inline" />
          </div>
        </div>
      </article>

      <section className="mx-auto max-w-[1400px] px-5 pb-20 md:px-8">
        <SectionHeading eyebrow="Keep Reading" title="Related Stories" />
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {related.map((s) => (
            <ArticleCard key={s.slug} story={s} />
          ))}
        </div>
      </section>
    </>
  );
}
