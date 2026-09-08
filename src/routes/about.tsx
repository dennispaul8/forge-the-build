import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { NewsletterCTA } from "@/components/site/NewsletterCTA";

const title = "About FORGE — A Media Hub for People Who Build";
const description =
  "FORGE is a digital media hub covering people, technology, innovation and the processes behind how things get made.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    label: "People",
    text: "The engineers, founders and researchers doing the work — reported up close, with their reasoning intact.",
  },
  {
    label: "Technology",
    text: "AI, tooling and infrastructure examined through the decisions teams actually make under constraint.",
  },
  {
    label: "Processes",
    text: "How an idea survives the trip from prototype to production, and what it costs along the way.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A Media Hub for People Who Build"
        intro="FORGE covers the human side of technology: the people, the systems and the messy processes behind everything that ships."
      />
      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow text-accent">Our Mission</p>
            <h2 className="mt-3 text-3xl leading-[1.06] sm:text-4xl">
              Most coverage stops at the announcement. We start after it.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Technology stories are usually told through launches and funding rounds. The more
              interesting story is the one underneath: who argued for what, which trade-off won,
              and what the team learned the third time it broke.
            </p>
            <p>
              FORGE publishes long-form features, profiles and original video for the people doing
              that work — builders, operators and the curious readers who want to understand how
              modern products really come together.
            </p>
          </div>
        </div>
        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div key={p.label} className="rule-top pt-5">
              <span className="font-display text-4xl leading-none text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-2xl">{p.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>
      <NewsletterCTA />
    </>
  );
}
