import { useState } from "react";
import { stories, type Story } from "@/data/content";
import { RowCard } from "./cards";
import { SectionHeading } from "./SectionHeading";

const tabs = ["All", "People", "Technology", "Processes", "Videos"] as const;
type Tab = (typeof tabs)[number];

const filterStories = (tab: Tab): Story[] => {
  if (tab === "All") return stories;
  if (tab === "Videos") return stories.filter((s) => s.format === "video");
  return stories.filter((s) => s.category === tab);
};

export function LatestStories() {
  const [tab, setTab] = useState<Tab>("All");
  const list = filterStories(tab);

  return (
    <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8">
      <SectionHeading eyebrow="The Feed" title="Latest Stories" />
      <div className="no-scrollbar -mx-5 mt-6 flex gap-2 overflow-x-auto px-5 md:mx-0 md:px-0">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`eyebrow shrink-0 border px-4 py-2.5 transition-colors ${
              tab === t
                ? "border-ink bg-ink text-ink-foreground"
                : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-7 md:grid-cols-2 md:gap-x-14">
        {list.map((story) => (
          <RowCard key={story.slug} story={story} />
        ))}
      </div>
    </section>
  );
}
