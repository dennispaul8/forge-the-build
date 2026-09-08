import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { FeaturedCard, ArticleCard, ProfileCard, VideoCard } from "@/components/site/cards";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TrendingCarousel } from "@/components/site/TrendingCarousel";
import { FeaturedVideo } from "@/components/site/FeaturedVideo";
import { LatestStories } from "@/components/site/LatestStories";
import { NewsletterCTA } from "@/components/site/NewsletterCTA";
import { heroStory, heroSecondary, people, videos, byCategory } from "@/data/content";

const title = "FORGE — People, Technology and the Processes Behind What Gets Built";
const description =
  "A digital media hub covering the people, technology and processes shaping how modern products are built. Editorial features, profiles and original video.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  const processes = byCategory("Processes").slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-[1400px] px-5 py-10 md:px-8 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <FeaturedCard story={heroStory} priority />
          <div className="flex flex-col gap-8 lg:border-l lg:border-border lg:pl-10">
            <p className="eyebrow text-muted-foreground">Editor's Picks</p>
            {heroSecondary.map((story) => (
              <ArticleCard key={story.slug} story={story} size="sm" showDeck={false} />
            ))}
          </div>
        </div>
      </section>

      <TrendingCarousel />

      {/* People */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
        <SectionHeading eyebrow="People" title="The Builders" to="/people" />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((person) => (
            <ProfileCard key={person.slug} person={person} />
          ))}
        </div>
      </section>

      <FeaturedVideo />

      {/* Videos */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
        <SectionHeading eyebrow="Watch" title="Original Video" to="/videos" />
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {videos.slice(0, 3).map((story) => (
            <VideoCard key={story.slug} story={story} size="sm" />
          ))}
        </div>
      </section>

      {/* Processes */}
      <section className="border-t border-border bg-paper">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-20">
          <SectionHeading eyebrow="Processes" title="How Things Get Built" to="/processes" />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {processes.map((story) => (
              <ArticleCard key={story.slug} story={story} />
            ))}
          </div>
        </div>
      </section>

      <LatestStories />

      <section className="mx-auto max-w-[1400px] px-5 pb-16 md:px-8">
        <Link
          to="/technology"
          className="eyebrow inline-flex items-center gap-2 border-b border-foreground pb-1 transition-colors hover:border-accent hover:text-accent"
        >
          Explore Technology coverage <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </section>

      <NewsletterCTA />
    </>
  );
}
