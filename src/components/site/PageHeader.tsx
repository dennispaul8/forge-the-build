export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <header className="border-b border-border bg-paper">
      <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 md:py-20">
        <p className="eyebrow text-accent">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.02] sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {intro}
        </p>
      </div>
    </header>
  );
}
