import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft, MapPin } from "lucide-react";
import { ArticleCard, ProfileCard } from "@/components/site/cards";
import { SectionHeading } from "@/components/site/SectionHeading";
import { NewsletterCTA } from "@/components/site/NewsletterCTA";
import { getPerson, people, storiesForSlugs } from "@/data/content";

export const Route = createFileRoute("/people/$slug")({
  loader: ({ params }) => {
    const person = getPerson(params.slug);
    if (!person) throw notFound();
    return { person };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Profile not found — FORGE" }, { name: "robots", content: "noindex" }],
      };
    }
    const { person } = loaderData;
    const t = `${person.name} — ${person.role} | FORGE`;
    return {
      meta: [
        { title: t },
        { name: "description", content: person.blurb },
        { property: "og:title", content: t },
        { property: "og:description", content: person.blurb },
        { property: "og:type", content: "profile" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProfilePage,
});

function ProfilePage() {
  const { person } = Route.useLoaderData();
  const stories = storiesForSlugs(person.storySlugs);
  const others = people.filter((p) => p.slug !== person.slug);

  return (
    <>
      <header className="border-b border-border bg-paper">
        <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-8 md:py-16">
          <Link
            to="/people"
            className="eyebrow inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All Profiles
          </Link>
          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-16">
            <div className="media-frame aspect-[4/5]">
              <img
                src={person.image}
                alt={person.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="lg:pt-4">
              <p className="eyebrow text-accent">Profile</p>
              <h1 className="mt-4 text-4xl leading-[1.02] sm:text-5xl md:text-6xl">
                {person.name}
              </h1>
              <p className="mt-5 text-lg text-muted-foreground">
                {person.role}, {person.company}
              </p>
              {person.location && (
                <p className="meta-text mt-2 flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" /> {person.location}
                </p>
              )}
              {person.focus && (
                <ul className="mt-7 flex flex-wrap gap-2">
                  {person.focus.map((f) => (
                    <li
                      key={f}
                      className="eyebrow border border-border-strong px-3 py-1.5 text-muted-foreground"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              )}
              <p className="mt-8 max-w-xl text-lg leading-relaxed">{person.blurb}</p>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-[1100px] gap-14 px-5 py-16 md:px-8 lg:grid-cols-[1fr_320px]">
        <div className="article-body max-w-[680px]">
          {(person.bio ?? []).map((para, i) => (
            <p key={i} className="mb-6 text-lg leading-relaxed">
              {para}
            </p>
          ))}

          {person.qa && person.qa.length > 0 && (
            <div className="mt-12 border-t border-border pt-10">
              <p className="eyebrow text-accent">In Conversation</p>
              <dl className="mt-8 space-y-9">
                {person.qa.map((item) => (
                  <div key={item.q}>
                    <dt className="text-xl leading-snug">{item.q}</dt>
                    <dd className="mt-3 border-l-2 border-accent pl-5 text-lg leading-relaxed text-muted-foreground">
                      {item.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>

        <aside className="lg:pt-2">
          <NewsletterCTA variant="inline" />
        </aside>
      </section>

      {stories.length > 0 && (
        <section className="border-t border-border bg-paper">
          <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8">
            <SectionHeading eyebrow="Coverage" title={`Stories featuring ${person.name.split(" ")[0]}`} />
            <div className="mt-10 grid gap-10 md:grid-cols-3">
              {stories.map((s) => (
                <ArticleCard key={s.slug} story={s} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8">
        <SectionHeading eyebrow="More People" title="Other Builders" to="/people" />
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {others.map((p) => (
            <ProfileCard key={p.slug} person={p} />
          ))}
        </div>
      </section>

      <NewsletterCTA />
    </>
  );
}
