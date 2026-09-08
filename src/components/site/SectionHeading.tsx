import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function SectionHeading({
  eyebrow,
  title,
  to,
  linkLabel = "View all",
}: {
  eyebrow: string;
  title: string;
  to?: "/people" | "/technology" | "/processes" | "/videos";
  linkLabel?: string;
}) {
  return (
    <div className="rule-top grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 pt-5 sm:flex sm:justify-between">
      <div className="min-w-0">
        <p className="eyebrow text-accent">{eyebrow}</p>
        <h2 className="mt-2 text-3xl leading-[1.05] sm:text-4xl md:text-5xl">{title}</h2>
      </div>
      {to && (
        <Link
          to={to}
          className="eyebrow inline-flex shrink-0 items-center gap-1.5 pb-1 text-muted-foreground transition-colors hover:text-accent"
        >
          {linkLabel}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      )}
    </div>
  );
}
