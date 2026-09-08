import { useState } from "react";
import { Check } from "lucide-react";

export function NewsletterCTA({ variant = "full" }: { variant?: "full" | "inline" }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes("@")) setDone(true);
  };

  if (variant === "inline") {
    return (
      <aside className="border-y border-border-strong bg-paper px-6 py-8">
        <p className="eyebrow text-accent">The FORGE Dispatch</p>
        <h3 className="mt-2 text-2xl leading-tight">Stay ahead of what's being built.</h3>
        <form onSubmit={submit} className="mt-4 flex flex-col gap-2 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="min-w-0 flex-1 border border-input bg-card px-4 py-3 text-sm outline-none focus:border-accent"
          />
          <button className="eyebrow bg-ink px-5 py-3 text-ink-foreground transition-colors hover:bg-accent">
            {done ? "Subscribed" : "Subscribe"}
          </button>
        </form>
        <p className="meta-text mt-3">One email a week. Unsubscribe any time.</p>
      </aside>
    );
  }

  return (
    <section id="newsletter" className="scroll-mt-24 bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
        <div>
          <p className="eyebrow text-accent">Newsletter</p>
          <h2 className="mt-3 text-4xl leading-[1.03] sm:text-5xl md:text-6xl">
            Stay Ahead of What's Being Built.
          </h2>
        </div>
        <div className="md:pt-10">
          <p className="max-w-md text-base leading-relaxed text-ink-foreground/70">
            Get the latest stories on people, technology, AI, and the processes shaping what comes
            next.
          </p>
          {done ? (
            <p className="mt-7 flex items-center gap-2 text-lg">
              <Check className="h-5 w-5 text-accent" /> You're on the list. Welcome to FORGE.
            </p>
          ) : (
            <form onSubmit={submit} className="mt-7 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="min-w-0 flex-1 border border-ink-foreground/25 bg-transparent px-4 py-3.5 text-sm text-ink-foreground outline-none placeholder:text-ink-foreground/45 focus:border-accent"
              />
              <button className="eyebrow bg-ink-foreground px-6 py-3.5 text-ink transition-colors hover:bg-accent hover:text-accent-foreground">
                Subscribe
              </button>
            </form>
          )}
          <p className="meta-text mt-4 text-ink-foreground/45">
            We only send the dispatch. No ads, no list sharing, unsubscribe in one click.
          </p>
        </div>
      </div>
    </section>
  );
}
