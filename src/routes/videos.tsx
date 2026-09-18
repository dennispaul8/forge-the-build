import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { VideoCard } from "@/components/site/cards";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FeaturedVideo } from "@/components/site/FeaturedVideo";
import { NewsletterCTA } from "@/components/site/NewsletterCTA";
import { videos, featuredVideo } from "@/data/content";

const title = "Videos — Original Documentary Series | FORGE";
const description =
  "Original video: studio visits, build breakdowns and long-form conversations with the people making technology.";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VideosPage,
});

function VideosPage() {
  const rest = videos.filter((v) => v.slug !== featuredVideo.slug);
  return (
    <>
      <PageHeader
        eyebrow="Watch"
        title="Original Video"
        intro="Studio visits, build breakdowns and long-form conversations, shot inside the rooms where the work happens."
      />
      <FeaturedVideo />
      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8">
        <SectionHeading eyebrow="Series" title="All Episodes" />
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((v) => (
            <VideoCard key={v.slug} story={v} size="sm" />
          ))}
        </div>
      </section>
      <NewsletterCTA />
    </>
  );
}
