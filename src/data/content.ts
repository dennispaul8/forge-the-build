import heroAiEngineers from "@/assets/hero-ai-engineers.jpg";
import techAgents from "@/assets/tech-agents.jpg";
import startupTeam from "@/assets/startup-team.jpg";
import processWorkflow from "@/assets/process-workflow.jpg";
import devTools from "@/assets/dev-tools.jpg";
import prototypeProduction from "@/assets/prototype-production.jpg";
import featuredVideoImg from "@/assets/featured-video.jpg";
import portrait1 from "@/assets/portrait-1.jpg";
import portrait2 from "@/assets/portrait-2.jpg";
import portrait3 from "@/assets/portrait-3.jpg";

export const images = {
  heroAiEngineers,
  techAgents,
  startupTeam,
  processWorkflow,
  devTools,
  prototypeProduction,
  featuredVideoImg,
  portrait1,
  portrait2,
  portrait3,
};

export type Category = "People" | "Technology" | "Processes";
export type Format = "article" | "video";

export type Story = {
  slug: string;
  title: string;
  deck: string;
  category: Category;
  format: Format;
  image: string;
  author: string;
  date: string;
  readingTime?: string;
  duration?: string;
  channel?: string;
  portrait?: boolean;
};

export type Person = {
  slug: string;
  name: string;
  role: string;
  company: string;
  blurb: string;
  image: string;
};

export const stories: Story[] = [
  {
    slug: "engineers-building-next-generation-ai",
    title: "The Engineers Building the Next Generation of AI",
    deck: "Inside the people, tools, and processes reshaping how modern products are built.",
    category: "Technology",
    format: "article",
    image: heroAiEngineers,
    author: "Nadia Osei",
    date: "Sep 4, 2026",
    readingTime: "12 min read",
  },
  {
    slug: "how-ai-agents-actually-work",
    title: "How AI Agents Actually Work",
    deck: "A plain-language teardown of planning loops, tool calls, and the failure modes nobody demos.",
    category: "Technology",
    format: "video",
    image: techAgents,
    author: "FORGE Studio",
    channel: "FORGE Studio",
    date: "Sep 2, 2026",
    duration: "14:22",
  },
  {
    slug: "inside-a-startup-engineering-team",
    title: "Inside a Startup Engineering Team",
    deck: "Six engineers, one release train, and a whiteboard that never gets erased.",
    category: "Processes",
    format: "article",
    image: startupTeam,
    author: "Marcus Lin",
    date: "Sep 1, 2026",
    readingTime: "9 min read",
  },
  {
    slug: "the-ai-tools-changing-product-development",
    title: "The AI Tools Changing Product Development",
    deck: "The stack that quietly replaced the spec document.",
    category: "Technology",
    format: "article",
    image: devTools,
    author: "Priya Raman",
    date: "Aug 30, 2026",
    readingTime: "7 min read",
  },
  {
    slug: "how-we-built-the-product-from-scratch",
    title: "How We Built the Product From Scratch",
    deck: "Ninety days from a sketch on paper to a product with paying customers.",
    category: "Processes",
    format: "article",
    image: processWorkflow,
    author: "Marcus Lin",
    date: "Aug 28, 2026",
    readingTime: "11 min read",
  },
  {
    slug: "from-prototype-to-production",
    title: "From Prototype to Production",
    deck: "What actually breaks when a demo meets ten thousand users.",
    category: "Processes",
    format: "video",
    image: prototypeProduction,
    author: "FORGE Studio",
    channel: "FORGE Studio",
    date: "Aug 26, 2026",
    duration: "18:07",
  },
  {
    slug: "meet-the-engineers-turning-ai-ideas-into-products",
    title: "Meet the Engineers Turning AI Ideas Into Products",
    deck: "Three builders on research debt, taste, and shipping under uncertainty.",
    category: "People",
    format: "article",
    image: portrait1,
    author: "Nadia Osei",
    date: "Aug 24, 2026",
    readingTime: "10 min read",
    portrait: true,
  },
  {
    slug: "the-founder-who-rebuilt-her-company-around-inference",
    title: "The Founder Who Rebuilt Her Company Around Inference",
    deck: "Why she threw away two years of roadmap and started from the model up.",
    category: "People",
    format: "article",
    image: portrait3,
    author: "Ayo Bankole",
    date: "Aug 22, 2026",
    readingTime: "8 min read",
    portrait: true,
  },
  {
    slug: "inside-the-engineering-workflow",
    title: "Inside the Engineering Workflow",
    deck: "Trunk-based, review-light, and obsessive about the first ten minutes of onboarding.",
    category: "Processes",
    format: "article",
    image: startupTeam,
    author: "Marcus Lin",
    date: "Aug 20, 2026",
    readingTime: "6 min read",
  },
  {
    slug: "inside-the-technology-powering-the-next-generation-of-startups",
    title: "Inside the Technology Powering the Next Generation of Startups",
    deck: "A cinematic look at the infrastructure, models, and small teams behind an unusually fast year.",
    category: "Technology",
    format: "video",
    image: featuredVideoImg,
    author: "FORGE Studio",
    channel: "FORGE Studio",
    date: "Aug 18, 2026",
    duration: "24:51",
  },
  {
    slug: "the-quiet-craft-of-developer-tools",
    title: "The Quiet Craft of Developer Tools",
    deck: "The people who make everyone else faster, and rarely get a launch post.",
    category: "Technology",
    format: "article",
    image: devTools,
    author: "Priya Raman",
    date: "Aug 15, 2026",
    readingTime: "9 min read",
  },
  {
    slug: "the-process-behind-the-product",
    title: "The Process Behind the Product",
    deck: "Design reviews, kill criteria, and the meeting that saved the launch.",
    category: "Processes",
    format: "video",
    image: processWorkflow,
    author: "FORGE Studio",
    channel: "FORGE Studio",
    date: "Aug 12, 2026",
    duration: "11:38",
  },
  {
    slug: "the-researcher-translating-papers-into-products",
    title: "The Researcher Translating Papers Into Products",
    deck: "Between the arXiv preprint and the shipped feature sits a very specific kind of engineer.",
    category: "People",
    format: "article",
    image: portrait2,
    author: "Nadia Osei",
    date: "Aug 10, 2026",
    readingTime: "7 min read",
    portrait: true,
  },
  {
    slug: "what-evaluation-really-means",
    title: "What Evaluation Really Means",
    deck: "Benchmarks are marketing. Here is how serious teams measure quality.",
    category: "Technology",
    format: "video",
    image: techAgents,
    author: "FORGE Studio",
    channel: "FORGE Studio",
    date: "Aug 7, 2026",
    duration: "16:04",
  },
];

export const byCategory = (category: Category) =>
  stories.filter((s) => s.category === category);

export const videos = stories.filter((s) => s.format === "video");

export const heroStory = stories[0];
export const heroSecondary = [stories[1], stories[2], stories[6]];

export const trending = [
  stories[3],
  stories[2],
  stories[4],
  stories[1],
  stories[10],
  stories[5],
];

export const featuredVideo = stories[9];

export const people: Person[] = [
  {
    slug: "amara-diallo",
    name: "Amara Diallo",
    role: "Staff Engineer, Inference",
    company: "Northbound Labs",
    blurb:
      "Rebuilt a serving stack from scratch so a research prototype could answer a million requests a day.",
    image: portrait1,
  },
  {
    slug: "kenji-mori",
    name: "Kenji Mori",
    role: "Co-founder & CTO",
    company: "Fieldnote",
    blurb:
      "Left a decade of platform work to build tooling for the people who document how software gets made.",
    image: portrait2,
  },
  {
    slug: "asha-venkat",
    name: "Asha Venkat",
    role: "Head of Research",
    company: "Perigee AI",
    blurb:
      "Turns dense evaluation research into product decisions teams can actually ship against.",
    image: portrait3,
  },
];

export const featuredArticleSlug = "engineers-building-next-generation-ai";

export const getStory = (slug: string) => stories.find((s) => s.slug === slug);

export const relatedStories = (slug: string) =>
  stories.filter((s) => s.slug !== slug).slice(0, 3);

export const articleBody: Array<
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "quote"; text: string; attribution: string }
  | { kind: "image"; src: string; caption: string }
  | { kind: "video"; id: string; title: string; caption: string }
> = [
  {
    kind: "p",
    text: "The room is dark except for a wall of glass showing a graph that nobody in the building fully understands. Two engineers stand in front of it at 11pm, arguing about a number that moved four percent. This is what the frontier actually looks like: not a keynote, but a pair of people trying to work out whether a change made the product better or only made the benchmark happier.",
  },
  {
    kind: "p",
    text: "Over six weeks we spent time with fourteen teams building AI products — some inside large companies, most inside startups of fewer than twenty people. What emerged was less a story about models and more a story about process: how decisions get made, how quality gets defined, and who gets to say a thing is finished.",
  },
  { kind: "h2", text: "The people are the architecture" },
  {
    kind: "p",
    text: "Every team we visited had quietly invented the same role. Call it the translator: someone fluent enough in research to read a paper on Friday and pragmatic enough to ship a narrowed version of it by Wednesday. They rarely have the title. They almost always set the pace.",
  },
  {
    kind: "quote",
    text: "The hard part was never the model. The hard part was agreeing on what good looked like, then holding that line for six months.",
    attribution: "Amara Diallo, Staff Engineer at Northbound Labs",
  },
  {
    kind: "p",
    text: "That agreement gets written down as an evaluation set — a few hundred examples that encode the team's taste. It is the most boring artifact in the company and the one most likely to determine whether the product survives contact with real users.",
  },
  { kind: "h2", text: "Watch: how the loop actually runs" },
  {
    kind: "video",
    id: "dQw4w9WgXcQ",
    title: "How AI Agents Actually Work",
    caption:
      "A fourteen-minute teardown of planning loops, tool calls, and the failure modes nobody puts in a demo.",
  },
  {
    kind: "p",
    text: "The video above sits at the centre of this story on purpose. Some of what these teams do is easier to watch than to read: the retry that quietly hides a broken tool call, the reviewer who catches it, the dashboard that never showed it.",
  },
  { kind: "h2", text: "Process is the product" },
  {
    kind: "image",
    src: processWorkflow,
    caption:
      "A working desk at Fieldnote: paper wireframes, three colours of sticky note, and the branch that shipped.",
  },
  {
    kind: "p",
    text: "The teams shipping fastest were not the ones with the largest budgets. They were the ones whose review process took hours rather than weeks, and who had written down — explicitly, on a page anyone could open — the conditions under which they would kill a feature.",
  },
  {
    kind: "p",
    text: "That is the thread running through everything that follows on this site. Who is building, what they are building, and how the building actually happens. The last question is the one most publications skip, and the one practitioners care about most.",
  },
];
