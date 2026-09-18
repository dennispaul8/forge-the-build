import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ArticleCard, ProfileCard } from "@/components/site/cards";
import { SectionHeading } from "@/components/site/SectionHeading";
import { NewsletterCTA } from "@/components/site/NewsletterCTA";
import { byCategory, people } from "@/data/content";

const title = "People — Profiles of the Builders | FORGE";
const description =
  "Profiles, interviews and features on the engineers, founders and researchers building the technology behind modern products.";

export const Route = createFileRoute("/people/")({
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
  component: PeoplePage,
});

function PeoplePage() {
  const stories = byCategory("People");
  return (
    <>
      <PageHeader
        eyebrow="People"
        title="The Builders Behind the Work"
        intro="Engineers, founders and researchers on the decisions, doubts and habits behind the products they ship."
      />
      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8">
        <SectionHeading eyebrow="Profiles" title="In Focus" />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((p) => (
            <ProfileCard key={p.slug} person={p} />
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-[1400px] px-5 pb-16 md:px-8">
        <SectionHeading eyebrow="Stories" title="Latest in People" />
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((s) => (
            <ArticleCard key={s.slug} story={s} />
          ))}
        </div>
      </section>
      <NewsletterCTA />
    </>
  );
}
