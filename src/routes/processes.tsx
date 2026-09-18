import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { RowCard } from "@/components/site/cards";
import { SectionHeading } from "@/components/site/SectionHeading";
import { NewsletterCTA } from "@/components/site/NewsletterCTA";
import { byCategory } from "@/data/content";

const title = "Processes — How Things Actually Get Built | FORGE";
const description =
  "Inside the workflows, rituals and trade-offs teams use to move an idea from prototype to production.";

export const Route = createFileRoute("/processes")({
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
  component: ProcessesPage,
});

function ProcessesPage() {
  const stories = byCategory("Processes");
  return (
    <>
      <PageHeader
        eyebrow="Processes"
        title="How Things Actually Get Built"
        intro="The workflows, rituals and trade-offs that carry an idea from a whiteboard to something people use."
      />
      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8">
        <SectionHeading eyebrow="Reporting" title="Latest in Processes" />
        <div className="mt-10 grid gap-7 md:grid-cols-2 md:gap-x-14">
          {stories.map((s) => (
            <RowCard key={s.slug} story={s} />
          ))}
        </div>
      </section>
      <NewsletterCTA />
    </>
  );
}
