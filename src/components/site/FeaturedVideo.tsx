import { Link } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { featuredVideo } from "@/data/content";

export function FeaturedVideo() {
  const v = featuredVideo;
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-[1400px] items-center gap-8 px-5 py-14 md:grid-cols-[1.35fr_1fr] md:gap-14 md:px-8 md:py-20">
        <Link
          to="/article/$slug"
          params={{ slug: v.slug }}
          className="hover-zoom group block"
          aria-label={v.title}
        >
          <div className="media-frame relative aspect-video bg-ink">
            <img src={v.image} alt={v.title} loading="lazy" className="h-full w-full object-cover opacity-90" />
            <span className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ink-foreground/90 transition-transform duration-300 group-hover:scale-110">
              <Play className="ml-1 h-7 w-7 fill-ink text-ink" />
            </span>
            <span className="absolute bottom-4 right-4 bg-ink/85 px-2 py-1 font-mono text-xs">
              {v.duration}
            </span>
          </div>
        </Link>
        <div>
          <p className="eyebrow text-accent">Featured Video</p>
          <h2 className="mt-3 text-3xl leading-[1.05] sm:text-4xl md:text-5xl">{v.title}</h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink-foreground/70">
            {v.deck}
          </p>
          <p className="meta-text mt-5 text-ink-foreground/55">
            {v.channel} · {v.duration} · {v.date}
          </p>
          <Link
            to="/article/$slug"
            params={{ slug: v.slug }}
            className="eyebrow mt-7 inline-flex items-center gap-2 bg-ink-foreground px-6 py-3.5 text-ink transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <Play className="h-3.5 w-3.5 fill-current" /> Watch Video
          </Link>
        </div>
      </div>
    </section>
  );
}
