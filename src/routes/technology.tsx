import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ArticleCard, FeaturedCard } from "@/components/site/cards";
import { SectionHeading } from "@/components/site/SectionHeading";
import { NewsletterCTA } from "@/components/site/NewsletterCTA";
import { byCategory } from "@/data/content";

const title = "Technology — AI, Tools and Infrastructure | FORGE";
const description =
  "Reporting on AI, developer tooling and the infrastructure decisions shaping how modern software is designed and shipped.";

export const Route = createFileRoute("/technology")({
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
  component: TechnologyPage,
});

function TechnologyPage() {
  const stories = byCategory("Technology");
  const [lead, ...rest] = stories;
  return (
    <>
      <PageHeader
        eyebrow="Technology"
        title="The Systems Being Built Right Now"
        intro="AI, tooling and infrastructure — reported through the teams making the calls, not the press releases."
      />
      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8">
        {lead && <FeaturedCard story={lead} priority />}
        <div className="mt-16">
          <SectionHeading eyebrow="More" title="Latest in Technology" />
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((s) => (
              <ArticleCard key={s.slug} story={s} />
            ))}
          </div>
        </div>
      </section>
      <NewsletterCTA />
    </>
  );
}
