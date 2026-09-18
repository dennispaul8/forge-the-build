import { createFileRoute } from "@tanstack/react-router";
import { ChronologicalFeed } from "@/components/site/ChronologicalFeed";
import { NewsletterCTA } from "@/components/site/NewsletterCTA";

const title = "The Feed — Latest Technology and AI Stories | FORGE";
const description =
  "The latest FORGE reporting on people, technology, AI, product innovation and how modern products get built, ordered by publication date.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <>
      <ChronologicalFeed />
      <NewsletterCTA />
    </>
  );
}
