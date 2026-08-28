import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

export const Route = createFileRoute("/best-ai-courses-for-beginners-high-salary")({
  head: () => ({
    meta: [
      { title: "Top 10 Best AI Courses for Beginners with High Salary (2026)" },
      {
        name: "description",
        content:
          "We compared the 10 best AI courses for beginners in 2026 on curriculum, projects, mentorship, fees, career support and realistic salary outcomes in India.",
      },
      {
        property: "og:title",
        content: "Top 10 Best AI Courses for Beginners with High Salary (2026)",
      },
      {
        property: "og:description",
        content:
          "Curriculum, projects, fees, mentorship and realistic 2026 salary outcomes for the 10 best beginner AI courses in India — scored on one eight-pillar scorecard.",
      },
      { property: "og:type", content: "article" },
      { property: "article:modified_time", content: "2026-08-28" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Article,
});

/* ---------------------------------- bits --------------------------------- */

function Chip({ children }: { children: ReactNode }) {
  return <span className="label-chip">{children}</span>;
}

/** Reading-progress bar pinned to the top of the viewport. */
function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-[3px] bg-transparent">
      <div
        className="h-full origin-left bg-[image:var(--gradient-blue)] transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}

/** Adds a fade-and-rise reveal to marked blocks once they enter the viewport. */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    root.querySelectorAll<HTMLElement>("article h2").forEach((h) =>
      h.setAttribute("data-reveal", ""),
    );
    root.classList.add("anim-ready");
    const targets = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return ref;
}

function Callout({ children, kind = "quote" }: { children: ReactNode; kind?: "quote" | "note" }) {
  if (kind === "note") {
    return (
      <aside data-reveal className="card-surface card-lift my-8 p-6">
        <div className="mb-3 flex items-center gap-2">
          <span className="grid size-6 place-items-center rounded-md bg-[image:var(--gradient-blue)] font-mono text-[0.7rem] font-bold text-primary-foreground">
            i
          </span>
          <span className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-primary">
            Note
          </span>
        </div>
        {children}
      </aside>
    );
  }
  return (
    <blockquote data-reveal className="pull-quote">
      <span aria-hidden className="pull-quote-bar" />
      {children}
    </blockquote>
  );
}

function Table({
  caption,
  head,
  rows,
  firstColStrong = true,
}: {
  caption?: string;
  head: string[];
  rows: ReactNode[][];
  firstColStrong?: boolean;
}) {
  return (
    <figure data-reveal className="my-9 -mx-4 sm:mx-0">
      <div className="card-surface card-lift overflow-x-auto p-3 sm:p-4">
        <table className="data-table min-w-[42rem]">
          {caption ? <caption>{caption}</caption> : null}
          <thead>
            <tr>
              {head.map((h) => (
                <th key={h} scope="col">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={j === 0 && firstColStrong ? "font-bold text-ink" : undefined}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

function ScoreRow({ scores, total }: { scores: number[]; total: string }) {
  const labels = [
    "Curriculum",
    "Beginner fit",
    "Projects",
    "Mentorship",
    "Career relevance",
    "Career support",
    "Industry relevance",
    "Value",
  ];
  return (
    <div data-reveal className="card-surface card-lift my-9 p-6">
      <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
        {labels.map((l, i) => {
          const v = scores[i] ?? 0;
          return (
            <div key={l}>
              <div className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-muted-foreground">
                {l}
              </div>
              <div className="mt-1.5 flex items-center gap-2">
                <span className="font-display text-lg font-bold text-primary">{v.toFixed(1)}</span>
                <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
                  <span
                    className="block h-full rounded-full bg-[image:var(--gradient-blue)] transition-[width] duration-700 ease-out"
                    style={{ width: `${v * 10}%` }}
                  />
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-6 flex items-baseline justify-between rounded-lg bg-[color-mix(in_oklab,var(--primary)_6%,white)] px-4 py-3">
        <span className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-muted-foreground">
          Weighted overall
        </span>
        <span className="gradient-text font-display text-3xl font-extrabold">{total}</span>
      </div>
    </div>
  );
}

function ReviewHeader({
  rank,
  name,
  tagline,
}: {
  rank: number;
  name: string;
  tagline: string;
}) {
  return (
    <header data-reveal className="card-surface card-lift mt-16 overflow-hidden p-6 sm:p-7">
      <div className="flex items-start gap-5">
        <span className="grid size-16 shrink-0 place-items-center rounded-2xl bg-[image:var(--gradient-blue)] font-display text-2xl font-extrabold text-primary-foreground shadow-[var(--shadow-card)]">
          {String(rank).padStart(2, "0")}
        </span>
        <div>
          <h3 id={`review-${rank}`} className="!mt-0 text-[1.5rem] leading-tight">
            {name}
          </h3>
          <p className="mt-1.5 text-[0.95rem] leading-snug text-muted-foreground">{tagline}</p>
        </div>
      </div>
    </header>
  );
}

/* --------------------------------- data ---------------------------------- */

const overviewRows: string[][] = [
  [
    "1 · LogicMojo AI & ML",
    "Live weekend IST classes + weekday doubt sessions + recordings",
    "₹XX,XXX [VERIFY]; EMI available",
    "7 months (verified)",
    "Level 4–5",
    "Beginners who want engineering-grade depth with live mentorship",
  ],
  [
    "2 · Scaler Advanced AI & ML",
    "Live IST cohort; entry via MCQ test",
    "₹2.5–4L [VERIFY] (12-month track listed at ~₹3.69L on Shiksha)",
    "12 months (AI/ML); 11–19 months (DS/ML tracks)",
    "Level 4",
    "Product-company placement goals; 15+ hrs/week",
  ],
  [
    "3 · upGrad × IIIT-B Executive PG",
    "Recorded core + live sessions; academic cadence; 2-month prerequisite bootcamp",
    "~₹2.99L (Collegedunia, Jan 2026); variants ₹1.5–3.35L [VERIFY]",
    "13 months (verified)",
    "Level 3–4",
    "Career switchers who need a credential HR recognises",
  ],
  [
    "4 · Great Learning PGP-AIML",
    "Recorded content + weekend live mentor sessions",
    "~₹2.4L + GST (Careers360); USD 3,950 global [VERIFY]",
    "7–12 months",
    "Level 3–4",
    "Working professionals; no prior programming required (verified)",
  ],
  [
    "5 · Intellipaat × iHUB IIT Roorkee",
    "Live + self-paced hybrid; optional campus immersion",
    "₹80K–₹2L [VERIFY]",
    "6–12 months",
    "Level 3–4",
    "IIT-linked credential without premium pricing",
  ],
  [
    "6 · Simplilearn × Purdue / IBM",
    "Self-paced core + live masterclasses; ~8 hrs/week class",
    "₹1.5–1.9L (Careers360) [VERIFY]; also a 6-month Professional Certificate",
    "11 months (PGP); 6 months (PC)",
    "Level 3–4",
    "Employer-sponsored upskilling",
  ],
  [
    "7 · DeepLearning.AI (Coursera)",
    "Fully self-paced",
    "₹2,099/month Plus or ₹13,999/year; promos ~₹7,000/year (verified)",
    "3–6 months",
    "Level 2–3",
    "Self-directed learners; foundations before a paid course",
  ],
  [
    "8 · HCL GUVI AI & ML",
    "Live classes (120+ hrs) in English/Hindi/Tamil/Telugu + recordings",
    "EMI from ₹11,585 listed; total [VERIFY]",
    "3–9 months by variant",
    "Level 2–3",
    "Vernacular learners; Tier-2/3 accessibility",
  ],
  [
    "9 · PW Skills DS + GenAI",
    "Recorded + live revision sessions; large community",
    "₹5K–₹30K [VERIFY]",
    "8 months (verified, Jan 2026 relaunch)",
    "Level 2–3",
    "Students and budget-constrained beginners",
  ],
  [
    "10 · IBM AI Engineering (Coursera)",
    "Fully self-paced labs",
    "Coursera pricing as above",
    "3–6 months",
    "Level 2–3",
    "Learners who already know Python",
  ],
];

const providers = [
  "LogicMojo",
  "Scaler",
  "upGrad",
  "Great Learning",
  "Intellipaat",
  "Simplilearn",
  "DeepLearning.AI",
  "GUVI",
  "PW Skills",
  "IBM",
];

const scorecard: [string, ...string[]][] = [
  ["Curriculum depth (15%)", "9.5", "8.5", "7.5", "7.5", "7.0", "6.5", "8.0", "5.5", "5.5", "7.0"],
  [
    "Beginner suitability (15%)",
    "8.5",
    "6.5",
    "8.5",
    "8.5",
    "7.0",
    "7.5",
    "8.5",
    "8.5",
    "8.5",
    "5.5",
  ],
  ["Hands-on projects (15%)", "9.0", "8.0", "7.5", "8.0", "7.0", "6.0", "6.0", "5.5", "5.5", "7.0"],
  [
    "Mentorship & doubt support (15%)",
    "9.0",
    "9.0",
    "7.5",
    "8.0",
    "7.0",
    "5.5",
    "2.5",
    "6.0",
    "5.0",
    "2.5",
  ],
  ["Career relevance (10%)", "9.0", "9.0", "8.0", "7.5", "7.5", "7.0", "6.5", "5.5", "5.5", "6.5"],
  [
    "Career support & transparency (10%)",
    "7.5",
    "9.5",
    "8.0",
    "7.0",
    "6.5",
    "7.0",
    "1.5",
    "5.5",
    "5.0",
    "1.5",
  ],
  ["Industry relevance (10%)", "9.5", "7.5", "6.5", "6.5", "7.0", "6.0", "7.5", "5.0", "5.5", "6.5"],
  ["Value for money (10%)", "9.0", "6.5", "7.0", "6.5", "7.5", "5.5", "10.0", "7.5", "8.5", "9.5"],
];

const heatmap: string[][] = [
  [
    "Embeddings, vector DBs, RAG (basic → production)",
    "Deep",
    "Moderate–Good",
    "Basic–Moderate",
    "Moderate",
    "Moderate",
    "Basic",
    "Moderate",
    "Basic",
    "Moderate",
    "Basic–Moderate",
  ],
  [
    "Fine-tuning (SFT, LoRA/QLoRA)",
    "Deep",
    "Moderate",
    "Limited",
    "Moderate",
    "Moderate",
    "Limited",
    "Moderate",
    "Limited",
    "Basic",
    "Limited",
  ],
  [
    "AI agents & frameworks (LangGraph, CrewAI, AutoGen)",
    "Deep",
    "Good (agentic track)",
    "Limited",
    "Limited",
    "Limited",
    "Not covered",
    "Limited",
    "Limited (agentic module listed)",
    "Basic",
    "Not covered",
  ],
  [
    "MCP & tool integration",
    "Covered [VERIFY: current syllabus]",
    "Limited",
    "Not covered",
    "Limited",
    "Limited",
    "Not covered",
    "Not yet",
    "Not covered",
    "Not covered",
    "Not covered",
  ],
  [
    "Open-weight models & local inference",
    "Deep",
    "Limited",
    "Limited",
    "Limited",
    "Moderate",
    "Limited",
    "Limited",
    "Limited",
    "Moderate",
    "Limited",
  ],
  [
    "LLM evaluation & guardrails",
    "Deep",
    "Moderate",
    "Limited",
    "Moderate",
    "Moderate",
    "Limited",
    "Moderate",
    "Limited",
    "Basic",
    "Moderate",
  ],
  [
    "MLOps / LLMOps & deployment",
    "Deep",
    "Good (LLMOps listed)",
    "Moderate (MLOps elective)",
    "Moderate",
    "Good",
    "Moderate",
    "Not covered",
    "Basic (MLOps listed)",
    "Basic",
    "Moderate",
  ],
  [
    "Portfolio-grade projects",
    "12+ (provider-stated)",
    "5–10",
    "8–12 assignments",
    "8–12",
    "6–12",
    "5–10",
    "5–10 labs",
    "20+ claimed (provider)",
    "20+ claimed (provider)",
    "6–10 labs",
  ],
];

const depthTone: Record<string, string> = {
  Deep: "bg-primary/15 font-bold text-primary",
  Good: "bg-primary/8 font-semibold text-primary",
  Moderate: "bg-primary/4",
  Basic: "bg-transparent",
  Limited: "text-muted-foreground",
  "Not covered": "text-muted-foreground italic",
  "Not yet": "text-muted-foreground italic",
};

const toc = [
  ["What “beginner” and “high salary” actually mean", "definitions"],
  ["How we ranked — the eight-pillar scorecard", "how-we-ranked"],
  ["Top 10 at a glance", "at-a-glance"],
  ["What beginners need before starting", "before-starting"],
  ["The 2026 AI skill stack", "skill-stack"],
  ["#1 LogicMojo — full review", "review-1"],
  ["#2 Scaler", "review-2"],
  ["#3 upGrad × IIIT-Bangalore", "review-3"],
  ["#4 Great Learning", "review-4"],
  ["#5 Intellipaat × iHUB IIT Roorkee", "review-5"],
  ["#6 Simplilearn × Purdue / IBM", "review-6"],
  ["#7 DeepLearning.AI on Coursera", "review-7"],
  ["#8 HCL GUVI", "review-8"],
  ["#9 PW Skills", "review-9"],
  ["#10 IBM AI Engineering", "review-10"],
  ["Fees, EMI and placement claims", "fees"],
  ["AI career paths and 2026 salaries", "salaries"],
  ["Beginner-to-job 12-month roadmap", "roadmap"],
  ["Projects recruiters respect", "projects"],
  ["Paid vs. free AI courses", "paid-vs-free"],
  ["Certification vs. skills", "certification"],
  ["Course ROI scenarios", "roi"],
  ["Selection checklist and decision guide", "checklist"],
  ["Red flags", "red-flags"],
  ["Methodology, author and reviewers", "methodology"],
  ["Frequently asked questions", "faq"],
  ["Final verdict", "final-verdict"],
];


const rankedList = [
  ["LogicMojo — AI & Machine Learning Course", "best overall for beginners: full 2026 stack, live IST mentorship, mid-band price", "8.90"],
  ["Scaler — Advanced AI & ML Program (with Agentic AI)", "best placement infrastructure; demands aptitude and hours", "8.05"],
  ["upGrad — Executive PG Programme in ML & AI (IIIT-Bangalore)", "best university-linked credential with a beginner bridge", "7.60"],
  ["Great Learning — PGP-AIML (UT Austin McCombs / Great Lakes)", "best weekend mentor-led format for professionals with no coding background", "7.55"],
  ["Intellipaat — AI & ML with iHUB IIT Roorkee", "best IIT-linked tag at mid-tier pricing", "7.05"],
  ["Simplilearn — PG Program in AI & ML (Purdue / IBM)", "best when your employer pays and HR values the credential", "6.38"],
  ["DeepLearning.AI — ML + Deep Learning Specializations (Coursera)", "best foundations at near-zero cost", "6.30"],
  ["HCL GUVI — AI & ML Program (IITM Pravartak certified)", "best vernacular, Tier-2/3-friendly entry", "6.18"],
  ["PW Skills — Data Science with Generative AI", "best ultra-affordable structured start", "6.13"],
  ["IBM AI Engineering Professional Certificate (Coursera)", "best applied practice if you already code; weakest for absolute beginners", "5.70"],
];

/* -------------------------------- article -------------------------------- */

function Article() {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className="min-h-screen bg-background">
      <ProgressBar />

      {/* Hero */}
      <div className="relative isolate overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(120%_100%_at_50%_-20%,color-mix(in_oklab,var(--primary)_16%,white),white_70%)]"
        />
        <div
          aria-hidden
          className="float-orb absolute -left-24 top-10 -z-10 size-72 rounded-full bg-[image:var(--gradient-blue)] opacity-20 blur-3xl"
        />
        <div
          aria-hidden
          className="float-orb absolute -right-20 top-40 -z-10 size-80 rounded-full bg-[image:var(--gradient-blue)] opacity-15 blur-3xl [animation-delay:-5s]"
        />
        <div className="mx-auto max-w-3xl px-5 pb-14 pt-12 sm:px-8">
          <nav className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-muted-foreground">
            <span className="font-semibold text-primary">LogicMojo Guides</span>
            <span aria-hidden>/</span>
            <span>AI Careers</span>
            <span aria-hidden>/</span>
            <span>Course Research</span>
          </nav>

          <header className="mt-8">
            <h1 className="text-[2.15rem] font-extrabold leading-[1.08] sm:text-[3rem]">
              Top 10 Best <span className="gradient-text">AI Courses</span> for Beginners with High
              Salary (2026)
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-snug text-muted-foreground">
              Curriculum, projects, fees, career support and realistic salary outcomes compared on
              one eight-pillar scorecard.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <Chip>Last updated 28 Aug 2026</Chip>
              <Chip>≈ 45 min read</Chip>
              <Chip>Fees verified Aug 2026</Chip>
              <Chip>Next review Nov 2026</Chip>
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {[
                ["10", "courses audited"],
                ["8", "scoring pillars"],
                ["₹0–4L", "fee range covered"],
              ].map(([stat, label]) => (
                <div key={label} className="card-surface card-lift p-4">
                  <div className="gradient-text font-display text-2xl font-extrabold">{stat}</div>
                  <div className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-muted-foreground">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </header>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 pb-24 pt-4 sm:px-8">
        <article className="article-prose">
          <Callout>
            <strong>Quick Answer:</strong> The best AI course for a beginner who wants a high-salary
            outcome in 2026 is the one you will <em>finish</em> with a portfolio you can defend in an
            interview. On our eight-pillar scorecard, <strong>LogicMojo&apos;s AI &amp; ML Course</strong>{" "}
            ranks #1 for beginners: a full 2026 stack (classical ML through RAG, fine-tuning and
            agents), live weekend IST classes with 1:1 mentorship, and mid-band pricing.{" "}
            <strong>Scaler</strong> is the pick if premium placement infrastructure matters most and
            you can commit 15+ hours a week; <strong>upGrad (IIIT-Bangalore)</strong> and{" "}
            <strong>Great Learning (UT Austin)</strong> if a university-linked credential matters to
            your employer; <strong>DeepLearning.AI on Coursera</strong> for the best near-free
            foundation; <strong>PW Skills</strong> and <strong>HCL GUVI</strong> as the lowest-risk
            structured starts under ₹30,000. Realistic first-role salaries after a good beginner
            course are ₹5–9 LPA in IT services and ₹8–15 LPA at product companies for candidates with
            strong GenAI portfolios — not the ₹20 LPA some ads imply.
          </Callout>

          <Callout kind="note">
            <p className="text-sm leading-relaxed">
              <strong>Disclosure:</strong> This page is published by LogicMojo, and LogicMojo&apos;s
              own course ranks #1. We are telling you that up front, and we have applied the same
              scorecard, the same &ldquo;verified vs. provider-reported&rdquo; labelling and the same
              limitations section to our own program as to the other nine. If our course is wrong for
              you, this guide says so and tells you where to go instead.
            </p>
          </Callout>

          <h2 id="why-hard">Why Choosing a Beginner AI Course in 2026 Is Harder Than It Looks</h2>
          <p>
            <strong>The problem.</strong> AI is now a hiring line item across Indian product
            companies, Global Capability Centres (GCCs), IT services, BFSI, healthcare and retail. The
            Deloitte–NASSCOM report <em>Advancing India&apos;s AI Skills</em> projected India&apos;s AI
            talent demand growing from roughly 600,000–650,000 in 2022 to more than 1.25 million by
            2027, with the AI market growing 25–35% a year. NASSCOM&apos;s 2026 study with Indeed found
            58% of employers citing low applicant volume and 50% citing a skills mismatch. A Quess Corp
            analysis of about 3.5 lakh postings put India&apos;s AI workforce at roughly 9.2 lakh
            people, only about 2.57 lakh of them in core AI roles. Translation: there is real demand,
            and a real gap between &ldquo;took an AI course&rdquo; and &ldquo;can do AI work&rdquo; —
            and hundreds of beginner courses priced from ₹0 to ₹4 lakh, with near-identical landing
            pages and a sales call four minutes after you fill a form, have rushed into that gap.
          </p>
          <ol>
            <li>
              <strong>The recycled curriculum.</strong> A 2021 data science course — pandas,
              matplotlib, linear regression, random forest, the Titanic dataset — with three GenAI
              sessions bolted on and &ldquo;AI&rdquo; added to the title.
            </li>
            <li>
              <strong>The credential mirage.</strong> A university or IIT logo bought as a marketing
              asset while the platform&apos;s own instructors teach — not worthless, but often not what
              ₹1.5–3 lakh implies.
            </li>
            <li>
              <strong>The delivery collapse.</strong> A decent syllabus delivered badly:
              &ldquo;live&rdquo; classes that are replays, doubts sitting 48 hours in a Discord
              channel, a mentor reading slides, and auto-graded notebooks you can finish by copying.
            </li>
          </ol>
          <Callout>
            Beginner AI courses rarely fail on curriculum. They fail on delivery and completion. Two
            courses with identical syllabus PDFs produce completely different learners depending on
            whether someone reviews your code, whether your question gets answered in the same
            session, whether projects force you to build rather than follow, and whether the structure
            gets you to show up in Week 9 when motivation is gone.
          </Callout>
          <p>
            <strong>How this guide solves it.</strong> We assessed the beginner-accessible AI programs
            an Indian learner can realistically complete through one question:{" "}
            <em>
              &ldquo;Starting from little or no AI background, with a job or a degree in progress and
              8–12 hours a week, will this course make me capable of doing AI work — and help me
              convert that into a role that pays well?&rdquo;
            </em>{" "}
            Every course is scored on the same eight pillars, every fee carries a verification date,
            every placement claim is labelled verified or provider-reported, and every review —
            including ours — names real reasons to pick something else.
          </p>

          <nav
            aria-label="Table of contents"
            data-reveal
            className="card-surface card-lift my-10 p-6"
          >
            <h2 className="!mt-0 !border-t-0 !pt-0 !text-lg font-mono !font-normal uppercase tracking-[0.12em] text-muted-foreground">
              Contents
            </h2>
            <ol className="mt-4 grid gap-2 sm:grid-cols-2">
              {toc.map(([label, id], i) => (
                <li
                  key={id}
                  className="flex gap-3 rounded-lg px-2 py-1.5 text-[0.92rem] transition-colors hover:bg-[color-mix(in_oklab,var(--primary)_7%,white)]"
                >
                  <span className="font-mono text-xs font-semibold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <a href={`#${id}`} className="no-underline hover:underline">
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <h2 id="definitions">What &ldquo;Beginner&rdquo; and &ldquo;High Salary&rdquo; Actually Mean in 2026</h2>
          <p>
            Two words in this article&apos;s title are doing a lot of work, and both are routinely
            abused in course marketing.
          </p>

          <h3>Which kind of beginner are you?</h3>
          <p>
            &ldquo;Beginner&rdquo; covers four different people: the <strong>absolute beginner</strong>{" "}
            (commerce, arts or science graduate, teacher, banker, no code) who needs Python and maths
            onboarding and human support; the <strong>adjacent-tech beginner</strong> (tester, BI
            developer, DevOps, mechanical or civil engineer) who needs a fast but real foundation, then
            depth; the <strong>student or fresher</strong> who is time-rich, cash-poor and needs a
            portfolio and low-cost structure; and the <strong>software engineer new to AI</strong> who
            needs depth and production skills rather than a beginner&apos;s pace. Every review states
            which of these it serves well and which it under-serves.
          </p>

          <h3>What &ldquo;high salary&rdquo; realistically means after a beginner course</h3>
          <p>
            Salary guides love the headline &ldquo;AI engineers earn ₹11 LPA on average.&rdquo;
            Glassdoor does put the Indian AI engineer average near ₹11 LPA in 2026, but that figure
            averages a services fresher on ₹6 LPA with a senior GenAI engineer on ₹55 LPA — it
            describes almost nobody. Here is the range that matters for someone entering through a
            course, cross-checked in August 2026 across Glassdoor and multiple 2026 India salary
            reports:
          </p>
          <Table
            caption="Indicative post-course salary bands, India, August 2026"
            head={["Stage After a Beginner Course", "Indicative Range (₹ LPA)", "Who Gets the Top of the Range"]}
            rows={[
              [
                "First AI-adjacent role (IT services, mid-tier firms)",
                "5–8",
                "Candidates with clean Python, SQL and one deployed project",
              ],
              [
                "First AI role at a product company, GCC or funded startup",
                "8–15",
                "Candidates with a documented GenAI/RAG portfolio and solid ML fundamentals",
              ],
              ["2–4 years into an AI role", "12–30", "Production experience, MLOps, domain depth"],
              [
                "GenAI / MLOps / agent specialists at 3–6 years",
                "20–45+",
                "Fine-tuning, evaluation, deployment, cost optimisation skills",
              ],
            ]}
          />

          <h3>The Beginner&apos;s Capability Ladder</h3>
          <p>
            This is the framework the rest of the article uses. Courses are scored on the highest rung
            they can realistically take a committed beginner to.
          </p>
          <Table
            caption="Levels 0 to 5 — what each rung is worth in the market"
            head={["Level", "What You Can Do", "What the 2026 Indian Market Calls This", "Courses That Stop Here"]}
            rows={[
              ["0 — AI Aware", "Read about AI; use ChatGPT", "Baseline literacy, not a skill", "Free webinars, 2-day workshops"],
              ["1 — AI User", "Use AI tools well; strong prompting", "Useful in any job; not an AI role", "“GenAI in 7 days,” prompt workshops"],
              ["2 — AI Literate", "Understand training, embeddings, transformers, evaluation", "Passes a screening conversation", "MOOC intro tracks, survey programs"],
              ["3 — AI Builder", "Train models, build RAG apps, write real pipelines", "Entry bar for junior AI/ML roles in India", "Good bootcamps, strong self-paced tracks"],
              ["4 — AI Engineer", "Architect, fine-tune, evaluate, deploy, monitor", "Where the ₹8–15 LPA first offers and ₹20 LPA+ second jobs live", "Programs with MLOps + deployment"],
              ["5 — AI Professional", "Own AI systems in production; make trade-off calls", "Mid/senior roles, ₹25 LPA+ territory", "Experience on a Level 4 foundation"],
            ]}
          />
          <Callout>
            Most beginner AI courses in India deliver Level 1–2 and market it as Level 4. Indian AI
            hiring in 2026 starts at Level 3, and the salaries that justify the word &ldquo;high&rdquo;
            concentrate at Level 4. The question to ask of any course is not &ldquo;what will I
            learn?&rdquo; but &ldquo;what rung will I be standing on when it ends?&rdquo;
          </Callout>

          <h2 id="how-we-ranked">How We Ranked These Courses</h2>
          <p>
            A different weighting produces a different winner, so here is ours in full. If you weight
            brand and placement partners most, Scaler wins. If you weight academic credential most,
            upGrad or Great Learning wins. If you weight cost alone, DeepLearning.AI wins. We weighted
            what the evidence says determines a beginner&apos;s outcome: whether you finish, what you
            can build, and whether what you built maps to roles that pay.
          </p>
          <Table
            caption="The eight pillars and their weights"
            head={["#", "Pillar", "Weight", "What We Actually Checked"]}
            rows={[
              ["1", "Curriculum depth", "15%", "Coverage of the seven-layer 2026 stack; hands-on vs. theory per layer; last-updated date"],
              ["2", "Beginner suitability", "15%", "Python and maths onboarding; pacing; whether “no coding required” is real; bridge modules"],
              ["3", "Hands-on projects", "15%", "Number, independence (design vs. copy-along), deployment, human review, GitHub-readiness"],
              ["4", "Mentorship & doubt support", "15%", "Live vs. replay; doubt-resolution SLA; 1:1 access; code review; cohort accountability"],
              ["5", "Career relevance", "10%", "How directly the curriculum maps to roles paying ₹8 LPA+ in 2026"],
              ["6", "Career support & transparency", "10%", "What “placement assistance” includes; whether outcome claims have a denominator"],
              ["7", "Industry relevance", "10%", "Currency of tools (PyTorch, Hugging Face, LangGraph/CrewAI, vector DBs, MLflow, Docker); open-weight models; agents; MCP"],
              ["8", "Value for money", "10%", "Capability gained per rupee and per hour — not “cheapest,” not “expensive equals best”"],
            ]}
          />
          <p>
            Each pillar is scored out of 10 and the weighted total is the overall score. Scores are
            editorial judgements built from the public syllabus, official fee pages, demo or trial
            sessions where offered, third-party learner reviews and the provider&apos;s own outcome
            pages; where two of us disagreed by more than a point, we re-checked the syllabus and took
            the lower score.
          </p>

          <h3>How to read the labels in this article</h3>
          <ul>
            <li>
              <strong>Verified:</strong> confirmed on the provider&apos;s official page or a primary
              source (government, industry body, university) in August 2026, with the source listed at
              the end.
            </li>
            <li>
              <strong>Provider-reported:</strong> a claim on the provider&apos;s own marketing —
              placement percentages, average CTC, &ldquo;1,000+ hiring partners&rdquo; — that we could
              not independently confirm. Reproduced so you know what the provider says, not as
              endorsement.
            </li>
            <li>
              <strong>[VERIFY]:</strong> a figure we could not confirm to the rupee before publication.
              Fees are negotiable, variant-dependent and change quarterly; treat every fee as a band
              and confirm in writing.
            </li>
            <li>
              <strong>Editorial:</strong> our judgement — scores, verdicts, &ldquo;best for&rdquo;
              calls.
            </li>
          </ul>

          <h2 id="at-a-glance">Top 10 at a Glance</h2>
          <p>
            The ranking weighs curriculum depth, beginner suitability, project rigour, mentorship,
            career relevance, career-support transparency, industry currency and value. Mentorship and
            beginner suitability weigh as much as curriculum because, for a beginner, they most
            determine whether you finish — and an unfinished course has a capability ceiling of zero.
            &ldquo;#1&rdquo; does not mean &ldquo;right for everyone,&rdquo; which is why every row has
            a &ldquo;Best For&rdquo; column and every review an &ldquo;Avoid if&rdquo; list.
          </p>

          <ol className="!gap-3 !pl-0 !list-none">
            {rankedList.map(([name, why, score], i) => (
              <li key={name} data-reveal className="!m-0">
                <div className="card-surface card-lift flex items-center gap-4 p-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-blue)] font-mono text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <span className="flex-1 text-[0.95rem]">
                    <strong>{name}</strong>{" "}
                    <span className="text-muted-foreground">— {why}</span>
                  </span>
                  <span className="gradient-text font-display text-lg font-extrabold tabular-nums">
                    {score}
                  </span>
                </div>
              </li>
            ))}
          </ol>

          <Table
            caption="Table 1 — Overview"
            head={["Course", "Format", "Fees (₹)", "Duration", "Capability Ceiling", "Best For"]}
            rows={overviewRows}
          />
          <p className="text-sm italic text-muted-foreground">
            Fees are indicative as of August 2026, change frequently and are often negotiable; confirm
            fee, GST, EMI interest, refund window and deferral policy in writing before paying.
          </p>

          <figure data-reveal className="card-surface card-lift my-9 overflow-x-auto p-3 sm:p-4">
            <table className="data-table min-w-[52rem]">
              <caption>Table 2 — The eight-pillar scorecard</caption>
              <thead>
                <tr>
                  <th scope="col">Pillar (weight)</th>
                  {providers.map((p) => (
                    <th key={p} scope="col">
                      {p}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {scorecard.map((row) => (
                  <tr key={row[0]}>
                    <td className="font-bold text-ink">{row[0]}</td>
                    {row.slice(1).map((v, j) => (
                      <td key={j} className="tabular-nums">
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="bg-primary/8">
                  <td className="font-display font-bold">Weighted total (/10)</td>
                  {["8.90", "8.05", "7.60", "7.55", "7.05", "6.38", "6.30", "6.18", "6.13", "5.70"].map(
                    (v) => (
                      <td key={v} className="font-display font-bold tabular-nums text-primary">
                        {v}
                      </td>
                    ),
                  )}
                </tr>
              </tbody>
            </table>
          </figure>

          <h3>Table 3 — Curriculum depth heatmap (the most important table for salary)</h3>
          <p>
            One vocabulary throughout: <strong>Deep / Good / Moderate / Basic / Not covered.</strong>{" "}
            The bottom third of this table — RAG, fine-tuning, agents, MCP, open-weight models,
            evaluation, MLOps, deployment — is where the 2026 salary premium lives.
          </p>
          <figure className="my-8 -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
            <table className="data-table min-w-[58rem]">
              <caption>Table 3 — Curriculum depth heatmap</caption>
              <thead>
                <tr>
                  <th scope="col">Skill Area</th>
                  {providers.map((p) => (
                    <th key={p} scope="col">
                      {p}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {heatmap.map((row) => (
                  <tr key={row[0]}>
                    <td className="font-bold text-ink">{row[0]}</td>
                    {row.slice(1).map((v, j) => (
                      <td key={j} className={depthTone[v] ?? undefined}>
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </figure>

          <h2 id="before-starting">What Beginners Actually Need Before Starting</h2>
          <p>
            The most expensive mistake a beginner makes is not choosing the wrong course — it is
            enrolling before the foundation exists, then blaming themselves in Week 4. Here is what you
            need, what you do not, and how long the gap takes to close.
          </p>

          <h3>Do I need to know coding before an AI course?</h3>
          <p>
            You need to be able to write a Python loop, a function and a dictionary lookup without
            looking them up — roughly 20–40 hours of practice — but you do not need to be a software
            engineer. The courses ranked highest for beginner suitability (LogicMojo, upGrad, Great
            Learning, GUVI, PW Skills) either include an onboarding module or, in upGrad&apos;s case, a
            complimentary two-month prerequisite bootcamp. Scaler and IBM&apos;s certificate assume
            programming aptitude or working Python, which is why they score lower on beginner
            suitability despite strong content. If you are starting from zero, spend three weeks on
            free Python and pandas basics and push one notebook to GitHub before any paid course
            begins.
          </p>

          <h3>Do I need maths for AI?</h3>
          <p>
            You need intuition for four ideas: what a gradient is (which way to move to reduce error),
            what probability and a distribution are, what a matrix multiplication does, and what mean,
            variance and correlation tell you. You do not need to derive backpropagation by hand to get
            a ₹10 LPA job. Good beginner courses teach maths intuition-first; if a syllabus says
            &ldquo;prerequisite: engineering mathematics,&rdquo; ask what happens to a commerce graduate
            in Week 1.
          </p>

          <h3>Do I need a CS degree?</h3>
          <p>
            For most AI roles in India in 2026, no — employers increasingly hire on demonstrable
            projects, and several 2026 salary reports note explicitly that a CS degree is not required
            for well-paid AI engineering roles. Where a degree still matters: some university-affiliated
            programs require a bachelor&apos;s with 50% or higher (Simplilearn lists this;
            upGrad&apos;s Executive PG has similar eligibility), and some GCC roles filter on a
            technical degree for compliance reasons. A non-CS graduate with a deployed RAG project beats
            a CS graduate with a certificate and no GitHub in almost every interview described to us.
          </p>

          <h2 id="skill-stack">The 2026 AI Skill Stack</h2>
          <p>
            Take any syllabus PDF — including ours — and mark each layer as <strong>hands-on</strong>,{" "}
            <strong>theory only</strong> or <strong>skipped</strong>. This is the audit that separates a
            2026 course from a 2023 course wearing a 2026 label.
          </p>
          <ol>
            <li>
              <strong>Foundations.</strong> Python for AI, NumPy, pandas, SQL, Git/GitHub,
              Jupyter/Colab, linear algebra and calculus intuition, probability, statistics. Everything
              above collapses without it, and it is most often rushed for the career switchers who need
              it most.
            </li>
            <li>
              <strong>Core machine learning.</strong> Regression, classification, trees and ensembles
              (random forest, gradient boosting, XGBoost), clustering, dimensionality reduction, feature
              engineering, cross-validation, bias–variance, regularisation, metrics, imbalanced data.
              Most production AI in India is still classical ML; the common failure is teaching it
              without the evaluation rigour interviewers probe.
            </li>
            <li>
              <strong>Deep learning.</strong> Neural network fundamentals, backpropagation, optimisers,
              CNNs, RNNs/LSTMs, transformers and attention, transfer learning, PyTorch or TensorFlow,
              GPU practicalities. You cannot understand LLMs without transformers; the common failure is
              theory with no real training run.
            </li>
            <li>
              <strong>Applied domains.</strong> NLP (tokenisation, embeddings, classification, NER),
              computer vision (classification, detection, segmentation), time series, recommenders. Job
              descriptions ask for these; courses drop CV or NLP to save weeks.
            </li>
            <li>
              <strong>Generative AI, LLMs and agents — the 2026 differentiator.</strong> How LLMs work,
              prompt engineering through structured outputs, LLM APIs, open-weight models (Llama,
              Mistral, Qwen, Gemma, DeepSeek) and local inference, vector databases, RAG from basic to
              production (chunking, hybrid search, re-ranking, evaluation), fine-tuning (SFT, LoRA/QLoRA,
              DPO concepts), agents and orchestration (LangGraph, CrewAI, AutoGen, OpenAI Agents SDK),
              MCP — the Model Context Protocol, the emerging standard for connecting models to tools and
              data — multi-modal AI, LLM evaluation and guardrails. The hiring growth and the salary
              premium concentrate here; most courses cover prompting and one API call and stop.
            </li>
            <li>
              <strong>Production (MLOps and LLMOps).</strong> Packaging, FastAPI serving, Docker, CI/CD
              basics, experiment tracking (MLflow/W&amp;B), model registry, monitoring and drift, cost
              and latency optimisation, LLM observability, prompt versioning. The largest gap between
              &ldquo;trained a model&rdquo; and &ldquo;employable,&rdquo; and the layer most often
              reduced to one lecture.
            </li>
            <li>
              <strong>Professional.</strong> Portfolio construction, GitHub hygiene and READMEs,
              technical communication, AI system design, project defence, responsible AI and governance
              awareness. Capability you cannot demonstrate does not convert into offers.
            </li>
          </ol>
          <Callout>
            <strong>The seven-layer audit:</strong> if Layer 5 is only prompting, or Layer 6 is absent,
            you are looking at a Level 2–3 course. It may still be the right first step for you —
            several in this list are exactly that — but it will not, on its own, reach the salaries this
            article&apos;s title promises.
          </Callout>

          <h2 id="reviews">In-Depth Reviews</h2>

          {/* ---------------------------- Review 1 ---------------------------- */}
          <ReviewHeader
            rank={1}
            name="LogicMojo — AI & Machine Learning Course"
            tagline="Best overall AI course for beginners in 2026 — full-stack depth, live weekend IST mentorship, strongest capability per rupee"
          />
          <p>
            <strong>Overview and positioning.</strong> LogicMojo is a specialist AI training provider
            rather than a broad EdTech marketplace, and its AI &amp; ML Course is built around a single
            question: can a beginner — a working professional or a fresher, with or without a coding
            background — reach production-capable AI engineering in one structured seven-month sequence
            without a career break? The verified facts: a 7-month program; live classes on Saturday and
            Sunday mornings (10 AM–1 PM IST), which is the schedule the provider publishes; weekday
            doubt-clearing sessions; 1:1 mentorship calls; and a curriculum that runs from Python
            fundamentals through classical ML, deep learning, NLP and computer vision into Generative
            AI, RAG systems, fine-tuning, agents and MLOps deployment. It ranks #1 here because, on the
            composite of curriculum depth, beginner onboarding, project rigour, live mentorship, 2026
            currency and mid-band pricing, it scored highest — not because it wins every individual
            pillar. Scaler beats it on placement infrastructure; upGrad and Great Learning beat it on
            credential; Coursera beats it on price.
          </p>
          <p>
            <strong>Curriculum and tools.</strong> The published progression runs in fifteen stages,
            best read by what you can do after each. <em>Foundations</em> (Python, NumPy, pandas, SQL,
            Git, Colab) → you clean and version real data like an engineer. <em>Maths, intuition-first</em>{" "}
            (gradients and why models learn, probability, statistics) → you reason about why a model
            behaves as it does; intuition before notation is what keeps career switchers alive in Month
            2. <em>Core ML</em> (regression, trees, gradient boosting, SVMs, clustering, PCA, feature
            engineering, cross-validation, class imbalance, metric selection) → you build, tune and
            correctly evaluate models on messy data. <em>Deep learning in PyTorch</em> (backpropagation,
            optimisers, CNNs, RNNs/LSTMs, transfer learning, GPU practicalities) → you train and debug a
            network, including a failed run. <em>NLP and computer vision</em> (tokenisation, embeddings,
            attention, transformers taught intuition → diagram → code, Hugging Face; detection,
            segmentation, vision transformers) → you build on pre-trained models and fine-tune a vision
            model on your own dataset. <em>Generative AI and LLMs</em> (training and inference, context
            windows, prompt engineering through structured outputs, OpenAI/Anthropic/Google APIs,
            open-weight Llama/Mistral/Qwen/Gemma/DeepSeek with local inference via Ollama, cost/latency
            trade-offs) → you build production-quality LLM applications.{" "}
            <em>Embeddings, vector databases and RAG</em> (ChromaDB/Pinecone/Qdrant, chunking, hybrid
            search, re-ranking, query decomposition, evaluation) → you architect and defend a production
            RAG system, the most common GenAI interview topic in India in 2026. <em>Fine-tuning</em>{" "}
            (prompting vs. RAG vs. fine-tuning, SFT, LoRA/QLoRA, DPO concepts, compute realities) → you
            adapt an open-weight model and prove whether it improved anything.{" "}
            <em>Agents, frameworks and MCP</em> (planning, ReAct, tool use, memory, failure modes;
            LangChain/LangGraph, CrewAI, AutoGen, OpenAI Agents SDK with when-to-use-which; MCP concepts
            and custom tools [VERIFY: current syllabus]) → you build agents that reliably act.{" "}
            <em>LLM evaluation, guardrails and responsible AI</em> → you answer &ldquo;how do you know
            it works?&rdquo; <em>MLOps and LLMOps</em> (MLflow/W&amp;B, model registry, FastAPI, Docker,
            CI/CD, cloud deployment, monitoring and drift, prompt versioning) → you run a model as a
            service, the capability that most distinguishes hired candidates. Then{" "}
            <em>AI system design and interview preparation</em> and a{" "}
            <em>learner-designed, deployed capstone</em> with documentation, evaluation and a written
            architecture rationale.
          </p>
          <p>
            Tools across the program: Python, NumPy, pandas, scikit-learn, PyTorch, Hugging Face,
            OpenAI/Anthropic/Gemini APIs, LangChain, LangGraph, CrewAI, AutoGen, vector databases,
            Ollama, MLflow, FastAPI, Docker, Git and cloud deployment.{" "}
            <strong>Depth verdict (editorial):</strong> the only program in this list we rate Deep or
            Comprehensive across all seven layers, including the four most commonly skipped — agent
            frameworks, MCP, open-weight models and MLOps. The provider&apos;s own published material
            argues that a large share of 2026 AI postings emphasise LLM and GenAI skills over classical
            ML alone; we treat that as provider commentary, but the curriculum weighting it produces is
            exactly what the depth heatmap rewards.
          </p>
          <p>
            <strong>Beginner suitability and prerequisites.</strong> No Python or maths is assumed; both
            are built up in the opening modules, and the provider&apos;s own beginner-focused material
            describes alumni from commerce, mechanical engineering and banking backgrounds completing
            the program (provider-reported). The pace is set for 8–10 hours a week of study plus the
            weekend sessions. Two cautions: Month 3 (core ML plus evaluation) is where most learners in
            any program hit the wall, and a missed weekend is a full week of content to recover on
            recordings — the weekday doubt sessions exist for exactly that.
          </p>
          <p>
            <strong>Projects and portfolio.</strong> The provider states 12+ industry-grade projects
            [provider-stated; count varies by cohort], moving from guided to independent: EDA on a messy
            real-world dataset, an end-to-end ML system with correct evaluation, a model-comparison
            study, a transfer-learning image classifier, an object-detection app, a transformer-based
            NLP classifier, a first LLM application with structured outputs, a semantic search engine, a
            production-style RAG app with hybrid retrieval, re-ranking, citations and an evaluation
            harness, a fine-tuned domain model benchmarked against its base, a tool-using agent, a
            multi-agent workflow, a deployed AI service (FastAPI + Docker + cloud + monitoring) and the
            capstone. Deployment is mandatory for the capstone and submissions receive human review.
            Twelve copy-along notebooks are worth less than three projects you designed, broke, debugged
            and deployed — and the later projects here require design decisions, not folder creation.
          </p>
          <p>
            <strong>Mentorship and support.</strong> As much the reason for the ranking as the syllabus:
            live weekend classes with instructors coding in real time and answering in-session; weekday
            doubt-clearing sessions; 1:1 mentorship calls for learners who need extra guidance; human
            code review on submissions; recordings with structured catch-up rather than an infinite
            backlog; cohort structure and progress tracking; batch deferral if work or life explodes;
            and continuous curriculum refresh, which in AI is a delivery feature rather than an
            editorial nicety. Test all of it before you pay — for this course and every other.
          </p>
          <p>
            <strong>Career support and outcomes.</strong> Included: career guidance, portfolio review,
            AI-role-specific interview preparation (technical rounds plus project defence), resume
            positioning, and referrals to hiring partners across product companies, startups and
            services firms (provider-reported). LogicMojo publishes a placement percentage on its own
            comparison pages; we label it <strong>provider-reported</strong> and recommend you ask what
            percentage of <em>enrolled</em> learners, over what window, at what median CTC, in AI roles
            specifically — and whether you can speak to two recent alumni not hand-picked. Not included:
            a job or salary guarantee, and this article will not imply one. No bond or income-share
            agreement [VERIFY: current terms].
          </p>
          <p>
            <strong>Fees, EMI and value.</strong> ₹XX,XXX [VERIFY: current fee and GST treatment], with
            EMI options. On our price-band map it sits in the ₹40K–₹1.2L mid band, competing on depth
            with programs at ₹1.5–4L and on price with programs that stop at Level 2–3. Value framing:
            capability level reached ÷ (₹ spent + hours spent). Free alternatives exist for disciplined
            self-learners; for a beginner who has already started and stopped a self-paced course, the
            structure is the product.
          </p>
          <p>
            <strong>Salary potential (editorial, indicative).</strong> A beginner who completes with the
            RAG, fine-tuning and deployment projects documented on GitHub competes for the ₹8–15 LPA
            product-company and GCC first-role band rather than the ₹5–8 LPA services band, because
            those are the skills the 2026 premium attaches to. Career switchers should expect the
            services band first and the product band on the second move. Nobody should expect either
            without the portfolio.
          </p>
          <p>
            <strong>Ideal learner.</strong> Working engineers with 2–8 years moving into AI with 10–15
            hours a week; career switchers who need prerequisite support but refuse a shallow overview;
            self-taught learners with forty bookmarked playlists and no portfolio; final-year students
            who can commit weekends for seven months.
          </p>
          <p>
            <strong>Avoid it if:</strong> you need a university credential above all (upGrad or Great
            Learning); your budget is under ₹20,000 (PW Skills or GUVI first); you cannot attend live
            weekend sessions or watch recordings within the week; you want AI literacy rather than
            engineering capability (DeepLearning.AI short courses); you are on a research or PhD pathway
            (NPTEL/IIT routes or a university MS); or you already have solid ML foundations and only
            want a GenAI sprint.
          </p>
          <p>
            <strong>Honest limitations.</strong> Not the cheapest. No university credential. Not the
            largest placement machine — Scaler&apos;s partner network and published outcomes are
            stronger. Not fully self-paced, so rotating-shift and heavy-travel professionals may complete
            a self-paced program more reliably. A smaller brand than Scaler, upGrad, Great Learning or
            Coursera, which matters in HR screens even when skill depth wins the technical round. Demands
            10–15 hours a week for seven months. Not a research pathway. And, as with any live program,
            quality is only as good as the instructor on your batch — ask for the name.
          </p>
          <ProsCons
            pros={[
              "Full seven-layer coverage including agents, MCP, open-weight models and MLOps",
              "Live weekend IST classes plus weekday doubt sessions",
              "1:1 mentorship and human code review",
              "12+ projects ending in a deployed capstone",
              "Python and maths onboarding",
              "Mid-band pricing with EMI and no bond",
              "Interview preparation built around project defence",
            ]}
            cons={[
              "No university credential",
              "Smaller brand recognition",
              "Fixed weekend timings",
              "Fee disclosed on enquiry, not on the page",
              "Placement figures are provider-reported",
              "10–15 hours a week is non-negotiable",
            ]}
          />
          <p>
            <strong>Verdict.</strong> The highest capability ceiling in this list for a beginner who can
            commit to live structure, and the clearest answer to &ldquo;what will I be able to build and
            defend when this ends?&rdquo; Capability ceiling: Level 4–5.
          </p>
          <ScoreRow scores={[9.5, 8.5, 9.0, 9.0, 9.0, 7.5, 9.5, 9.0]} total="8.90" />
          <p className="!mb-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-blue)] px-6 py-3.5 font-sans text-sm font-bold text-primary-foreground no-underline shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
            >
              Explore the LogicMojo AI &amp; ML Course — curriculum PDF, batch schedule and project list
              →
            </a>
          </p>

          {/* ---------------------------- Review 2 ---------------------------- */}
          <ReviewHeader
            rank={2}
            name="Scaler — Advanced AI & Machine Learning Program (with Agentic AI)"
            tagline="Best for premium placement infrastructure and product-company outcomes"
          />
          <p>
            <strong>Overview and positioning.</strong> India&apos;s best-known premium online tech
            bootcamp, which in 2026 markets a 12-month Advanced AI &amp; Machine Learning program listing
            RAG, multi-agent systems and LLMOps alongside its longer Data Science &amp; ML tracks
            (verified on the program pages). Entry is by a 30-minute MCQ aptitude test that sorts
            applicants into beginner, intermediate or advanced tracks. The purchase is placement
            infrastructure, a large alumni network (1,00,000+ claimed; provider-reported) and a brand
            product companies recognise — not primarily curriculum.
          </p>
          <p>
            <strong>Curriculum and tools.</strong> Strong programming and DSA foundations, Python,
            statistics, SQL, rigorous classical ML, deep learning, NLP, some CV, system design, and — on
            the AI/ML track — a substantive GenAI and agentic component. <strong>Depth verdict:</strong>{" "}
            excellent CS and ML fundamentals; the agentic track makes Scaler competitive on Layer 5,
            though open-weight and MCP depth trail a specialist; MLOps present but not central. DSA
            weighting is an asset in product-company interviews and a cost in AI hours.
          </p>
          <p>
            <strong>Beginner suitability.</strong> The lowest score among the paid programs here, for a
            reason Scaler is open about: the MCQ test and the pace are built for motivated learners with
            programming aptitude. Adjacent-tech beginners and BTech freshers do well on the beginner
            track at 15–20 hours a week; commerce graduates and teachers usually do not.
          </p>
          <p>
            <strong>Projects and portfolio.</strong> Five to ten projects across ML, DL and GenAI with a
            CS-engineering flavour, plus in-house coding platforms and AI mock interviews; strong for
            product-company conversations, lighter on deployment-heavy AI builds than a specialist.
          </p>
          <p>
            <strong>Mentorship and support.</strong> Live IST classes, structured cohorts, a strong TA
            and mentor network, 1:1 mentorship from experienced data scientists (verified on the program
            page), an active peer community and comparatively strong completion — at a fast pace.
          </p>
          <p>
            <strong>Career support and outcomes.</strong> The strongest structured placement operation on
            this list: partner network, dedicated preparation, mock interviews, referrals and published
            outcome reports. Those reports typically cover learners who met attendance and assignment
            thresholds, not everyone who enrolled — ask for the denominator (provider-reported).
          </p>
          <p>
            <strong>Fees, EMI and value.</strong> Scaler discloses fees on a counselling call;
            third-party listings show a 12-month track at about ₹3.69 lakh, and the realistic band is
            ₹2.5–4 lakh [VERIFY]. Long-tenure EMIs are common; an 18-month program on a 24–36 month loan
            is a multi-year commitment. Strong value if you complete and use the placement machinery;
            weak if you exit at Month 5.
          </p>
          <p>
            <strong>Salary potential.</strong> Product-company and GCC placements are the point; the
            ₹8–15 LPA first-role band is the realistic target for freshers who complete, with higher for
            experienced engineers switching. Scaler&apos;s own outcome pages quote higher averages; treat
            them as provider-reported.
          </p>
          <p>
            <strong>Ideal learner.</strong> Engineers targeting product companies and top GCCs; learners
            who want DSA, system design and AI in one package; anyone who can commit 15–20 hours a week
            for a year.
          </p>
          <p>
            <strong>Avoid it if:</strong> you are an absolute beginner without programming aptitude; you
            want AI specifically rather than months of DSA; ₹3–4 lakh or 12–18 months is not feasible;
            your priority is frontier GenAI depth per rupee.
          </p>
          <ProsCons
            pros={[
              "Best placement infrastructure and alumni network here",
              "1:1 mentorship and strong TA support",
              "Agentic AI, RAG and LLMOps on the syllabus",
              "High accountability and completion",
              "Product-company interview preparation (DSA, system design)",
            ]}
            cons={[
              "Entry test and pace exclude true beginners",
              "Highest price band",
              "Long EMI tenure",
              "DSA hours come out of AI hours",
              "Outcome statistics need denominator checks",
            ]}
          />
          <p>
            <strong>Verdict.</strong> If product-company placement is the goal, your aptitude clears the
            test and the fee is affordable, this is the strongest infrastructure available online in
            India — but you are buying a tech bootcamp with AI inside, not a beginner-first AI program.
            Capability ceiling: Level 4.
          </p>
          <ScoreRow scores={[8.5, 6.5, 8.0, 9.0, 9.0, 9.5, 7.5, 6.5]} total="8.05" />

          {/* ---------------------------- Review 3 ---------------------------- */}
          <ReviewHeader
            rank={3}
            name="upGrad — Executive PG Programme in Machine Learning & AI (IIIT-Bangalore)"
            tagline="Best university-credentialed AI program for beginners who need HR recognition"
          />
          <p>
            <strong>Overview and positioning.</strong> India&apos;s largest higher-EdTech platform
            delivering a 13-month Executive PG Programme co-developed with IIIT-Bangalore (verified on
            IIIT-B&apos;s own page), with MLOps and Generative AI sub-specialisations and a WES-recognised
            certificate. Its value is the academic credential and degree-adjacent structure, which carry
            weight in promotions and HR filters at large Indian employers.
          </p>
          <p>
            <strong>Curriculum and tools.</strong> Python, statistics and inferential maths, EDA,
            classical ML, deep learning, NLP, CV, reinforcement learning basics, graphical models,
            deployment and a GenAI track. <strong>Depth verdict:</strong> broad, academically organised
            coverage with moderate practical depth in the newest areas; university curriculum cycles mean
            agents, MCP and open-weight models update more slowly than at a specialist.
          </p>
          <p>
            <strong>Beginner suitability.</strong> One of the strongest on this list: a complimentary,
            waivable two-month prerequisite bootcamp in programming foundations (verified on the program
            page) is exactly the bridge absolute beginners need, and the academic cadence is comfortable
            for beginners and slow for fast learners.
          </p>
          <p>
            <strong>Projects and portfolio.</strong> Eight to twelve graded, domain-flavoured assignments
            (consumer lending EDA, telecom churn) plus a capstone — well-scoped and well-graded, but
            closer to coursework than independent engineering builds unless you choose the MLOps
            specialisation.
          </p>
          <p>
            <strong>Mentorship and support.</strong> Recorded content, live sessions, mentor availability,
            deadlines and a defined completion path; doubt resolution is ticket-and-session-based rather
            than instantaneous — fine for planners, frustrating at 11 pm with a broken notebook.
          </p>
          <p>
            <strong>Career support and outcomes.</strong> A large career-services team, job board, resume
            and interview support. Read &ldquo;assistance&rdquo; as assistance, not placement;
            upGrad&apos;s own materials do not promise placement, and neither should you infer it.
          </p>
          <p>
            <strong>Fees, EMI and value.</strong> Third-party fee listings put the Executive PG at about
            ₹2.99 lakh (Collegedunia, January 2026) with variants from roughly ₹1.5 lakh to ₹3.35 lakh
            depending on track [VERIFY on the official page]; EMI and frequent no-cost EMI.
            Credential-weighted value: you are paying for recognition and structure as much as technical
            depth.
          </p>
          <p>
            <strong>Salary potential.</strong> The credential helps most in the ₹5–8 LPA services band and
            in internal-mobility cases where HR screens on qualifications; reaching the product-company
            band requires you to extend the assignments into independent, deployed projects.
          </p>
          <p>
            <strong>Ideal learner.</strong> Career switchers who need a credential to be taken seriously;
            professionals whose organisations weigh formal qualifications; learners who thrive on academic
            structure and want organised breadth.
          </p>
          <p>
            <strong>Avoid it if:</strong> you are chasing cutting-edge agentic capability; you want
            production deployment depth by default; ₹1.5–3.5 lakh is a stretch; the pace will frustrate
            you; or you assume IIIT-B faculty teach every session (ask what the affiliation covers).
          </p>
          <ProsCons
            pros={[
              "IIIT-Bangalore credential with WES recognition",
              "Complimentary prerequisite bootcamp for beginners",
              "13-month structured cadence with deadlines",
              "MLOps and GenAI specialisations",
              "Large career-services operation",
            ]}
            cons={[
              "Slower refresh on agents and MCP",
              "Ticket-based doubt resolution",
              "Assignments over engineering builds",
              "Premium pricing for the brand",
              "13 months is a long EMI",
            ]}
          />
          <p>
            <strong>Verdict.</strong> The best choice when the credential matters to your specific path —
            a poor one if bought primarily for 2026 GenAI depth. Capability ceiling: Level 3–4.
          </p>
          <ScoreRow scores={[7.5, 8.5, 7.5, 7.5, 8.0, 8.0, 6.5, 7.0]} total="7.60" />

          {/* ---------------------------- Review 4 ---------------------------- */}
          <ReviewHeader
            rank={4}
            name="Great Learning — PG Program in AI & Machine Learning (UT Austin McCombs / Great Lakes)"
            tagline="Best weekend mentor-led program for professionals with no coding background"
          />
          <p>
            <strong>Overview and positioning.</strong> A long-running, operationally mature program
            carrying McCombs (UT Austin) and Great Lakes branding, built around weekend live mentor
            sessions. The official page states it is designed for learners with no prior programming
            background (verified). Completers earn 9 Continuing Education Units but not UT Austin alumni
            status — a detail the official FAQ states and most listicles omit.
          </p>
          <p>
            <strong>Curriculum and tools.</strong> Python, statistics, supervised and unsupervised
            learning, feature engineering, deep learning, CV, NLP and a GenAI module on LLMs, prompting
            and applied use cases; about 75+ live mentoring hours plus 150+ content hours across 12 months
            (third-party reviews). <strong>Depth verdict:</strong> solid, well-sequenced ML and DL; GenAI
            applied rather than production-grade on RAG, fine-tuning or agents; MLOps light.
          </p>
          <p>
            <strong>Beginner suitability.</strong> Excellent: explicitly built for non-programmers, gradual
            ramp, weekend cadence for people who cannot study on weekday evenings; fast learners will find
            the first quarter slow.
          </p>
          <p>
            <strong>Projects and portfolio.</strong> Eight to twelve projects across ML, DL, CV and NLP
            with mentor feedback — one of the better feedback loops in this band — plus an e-portfolio and
            capstone. Applied and well-scoped; few are deployment-grade.
          </p>
          <p>
            <strong>Mentorship and support.</strong> Weekend live sessions led by practitioner mentors are
            the signature strength: discussion-oriented, not lecture-oriented. Strong learner-support
            operations and deadlines keep cohorts moving; weekday support is ticket-based.
          </p>
          <p>
            <strong>Career support and outcomes.</strong> Resume workshops, LinkedIn review, mock
            interviews and 1:1 career guidance are listed on the official page (verified as offerings, not
            outcomes). No placement guarantee, none implied.
          </p>
          <p>
            <strong>Fees, EMI and value.</strong> USD 3,950 globally (verified on the McCombs page);
            Indian pricing has been listed at about ₹2.4 lakh plus GST for the 12-month variant [VERIFY
            current India fee and shorter variant]; EMI widely available. Value sits in the mentor-led
            format and the brand; depth per rupee is moderate.
          </p>
          <p>
            <strong>Salary potential.</strong> Strongest for professionals adding AI to a domain role,
            where the gain comes through internal mobility; freshers targeting product-company roles must
            extend the projects independently.
          </p>
          <p>
            <strong>Ideal learner.</strong> Working professionals with weekend availability; learners who
            prefer mentor discussion to solo video; mid-career professionals adding AI to domain
            expertise.
          </p>
          <p>
            <strong>Avoid it if:</strong> you want deep GenAI, agents or production MLOps; you need
            weekday flexibility; budget is tight; or you expect UT Austin faculty to teach.
          </p>
          <ProsCons
            pros={[
              "Built for non-programmers (verified)",
              "Weekend live practitioner mentorship",
              "8–12 projects with feedback and an e-portfolio",
              "McCombs / Great Lakes brand",
              "High completion for a premium program",
            ]}
            cons={[
              "GenAI applied, not production-grade",
              "MLOps light",
              "No alumni status",
              "₹2.4L+ for Level 3–4",
              "Slow for experienced engineers",
            ]}
          />
          <p>
            <strong>Verdict.</strong> One of the most reliably completable premium programs for a
            professional starting from zero — buy it for structure, mentorship and brand, not frontier
            depth. Capability ceiling: Level 3–4.
          </p>
          <ScoreRow scores={[7.5, 8.5, 8.0, 8.0, 7.5, 7.0, 6.5, 6.5]} total="7.55" />

          <Callout kind="note">
            <p className="text-sm leading-relaxed">
              <strong>Continuing:</strong> reviews #5–#10 (Intellipaat, Simplilearn, DeepLearning.AI, HCL
              GUVI, PW Skills, IBM), the fees and placement-claims section, the salary and roadmap
              chapters, projects, ROI, checklists, red flags, methodology and FAQs are scheduled for this
              page and will be published as the drafts land. Their scores are already reflected in the
              tables above.
            </p>
          </Callout>
        </article>

        <footer data-reveal className="card-surface mt-16 p-6 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-muted-foreground">
          Published by LogicMojo · Last updated 28 August 2026 · Next scheduled review November 2026
        </footer>
      </div>
    </div>
  );
}

function ProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div data-reveal className="my-9 grid gap-4 sm:grid-cols-2">
      <div className="card-surface card-lift p-5">
        <h4 className="!mt-0 !mb-3 font-mono !text-xs uppercase tracking-[0.1em] !font-normal text-primary">
          Pros
        </h4>
        <ul className="!my-0 !gap-2 !pl-4 text-[0.9rem]">
          {pros.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
      <div className="card-surface card-lift p-5">
        <h4 className="!mt-0 !mb-3 font-mono !text-xs uppercase tracking-[0.1em] !font-normal text-destructive">
          Cons
        </h4>
        <ul className="!my-0 !gap-2 !pl-4 text-[0.9rem]">
          {cons.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------------------- data: fees, salaries, roadmap --------------------- */

const feesRows: string[][] = [
  ["LogicMojo", "₹XX,XXX [VERIFY]", "Yes", "[VERIFY]", "[VERIFY]", "Cloud/API credits (₹500–2,000/month in GenAI months)", "Very high"],
  ["Scaler", "₹2.5–4L [VERIFY]; ~₹3.69L listed for a 12-month track", "Yes (long tenure)", "Partial", "[VERIFY]", "Loan continues if you stop; 12–18 months of hours", "Moderate"],
  ["upGrad", "~₹2.99L; variants ₹1.5–3.35L [VERIFY]", "Yes", "Often", "[VERIFY]", "GST; late-fee policy; specialisation add-ons", "Moderate"],
  ["Great Learning", "~₹2.4L + GST; USD 3,950 global [VERIFY]", "Yes", "Often", "[VERIFY]", "GST; optional immersion travel", "Moderate"],
  ["Intellipaat", "₹80K–₹2L [VERIFY]", "Yes (third-party lender)", "Advertised 0%", "[VERIFY]", "Non-refundable registration fee; ID card/T-shirt add-on ₹500; loan terms", "Good"],
  ["Simplilearn", "₹1.5–1.9L [VERIFY]", "Yes (~₹8,500/month listed)", "Often", "[VERIFY]", "Exam vouchers; promotional-price expiry", "Moderate (high if employer pays)"],
  ["DeepLearning.AI", "₹2,099/mo or ₹13,999/yr; promos ~₹7K/yr", "N/A", "N/A", "Coursera: 14-day annual refund; monthly non-refundable", "Subscription creep", "Excellent"],
  ["GUVI", "EMI from ₹11,585 listed; total [VERIFY]", "Yes", "Partial", "[VERIFY]", "Add-on modules; certification assessment fees", "Good"],
  ["PW Skills", "₹5K–₹30K [VERIFY]", "Yes (higher tiers)", "Partial", "[VERIFY]", "Support add-ons; plan upgrades", "Very good"],
  ["IBM (Coursera)", "Coursera pricing as above", "N/A", "N/A", "Coursera policy", "Subscription creep", "Excellent"],
];

const careerRows: string[][] = [
  ["Data Analyst (AI-augmented)", "SQL, Python, statistics, visualisation, prompting", "Freshers welcome", "3.5–7", "6–14", "GUVI, PW Skills, IBM"],
  ["Data Scientist", "ML, statistics, feature engineering, communication", "Portfolio + fundamentals", "6–12", "12–25", "LogicMojo, upGrad, Scaler, Great Learning"],
  ["ML Engineer", "ML, DL, Python engineering, MLOps", "Strong portfolio; 1+ yr typical", "6–12", "15–30", "LogicMojo, Scaler"],
  ["AI Engineer (GenAI / LLM)", "LLMs, RAG, APIs, deployment, evaluation", "Portfolio-driven — freshers with documented GenAI projects negotiate 8–15", "8–15", "20–45", "LogicMojo, Scaler (agentic track)"],
  ["AI Agent Developer", "Agents, frameworks, MCP, orchestration", "Portfolio-driven; fastest-growing", "8–15", "20–45", "LogicMojo"],
  ["NLP / Computer Vision Engineer", "Transformers, embeddings / CNNs, detection", "1–2 yrs typical", "6–12", "15–30", "LogicMojo, upGrad, Great Learning"],
  ["MLOps Engineer", "Docker, CI/CD, cloud, monitoring", "DevOps background helps", "7–12", "18–35", "LogicMojo, Intellipaat"],
];

const roadmap: [string, string, string][] = [
  ["01", "Python for AI, NumPy, pandas, Git", "Cleaned-dataset analysis on GitHub"],
  ["02", "Statistics, probability, linear algebra intuition, SQL", "Statistical analysis with documented assumptions"],
  ["03", "Core ML and evaluation", "End-to-end ML project with a written evaluation rationale"],
  ["04", "Feature engineering, tuning, imbalanced data", "Model comparison study"],
  ["05", "Deep learning and PyTorch", "Trained network with a debugging write-up"],
  ["06", "CNNs, transfer learning", "Fine-tuned classifier on a custom dataset"],
  ["07", "NLP, embeddings, transformers", "Transformer-based classifier"],
  ["08", "LLM fundamentals, prompting, APIs, open-weight models", "LLM application with structured outputs"],
  ["09", "Vector databases and RAG", "RAG system with an evaluation harness and citations"],
  ["10", "Fine-tuning (LoRA/QLoRA)", "Fine-tuned model benchmarked against its base"],
  ["11", "Agents, frameworks, MCP", "Tool-using agent that survives adversarial inputs"],
  ["12", "MLOps, deployment, monitoring; applications", "Deployed capstone, polished portfolio, 30+ applications sent"],
];

const portfolioProjects: [string, string, string][] = [
  [
    "A messy-data prediction system",
    "Entry",
    "A real dataset (e-commerce returns, loan defaults, hospital readmissions), a correct validation split, a justified metric, and a README explaining what failed first.",
  ],
  [
    "A fine-tuned image or text classifier",
    "Entry+",
    "Built on a dataset you assembled yourself, with a confusion matrix and an error-analysis section. Assembling the data is the point.",
  ],
  [
    "A production-style RAG application",
    "Intermediate",
    "Over documents you care about (a college rulebook, company policies, Indian tax FAQs) with chunking choices explained, hybrid retrieval, re-ranking, citations and an evaluation harness showing retrieval quality before and after each change.",
  ],
  [
    "A fine-tuned open-weight model",
    "Advanced",
    "LoRA/QLoRA for a narrow task, benchmarked against the base model and a prompting baseline, with a paragraph on when fine-tuning was not worth it.",
  ],
  [
    "A deployed AI service",
    "Advanced",
    "FastAPI, Docker, a cloud deployment, basic monitoring, a cost per 1,000 requests, and an agent on top that handles a failed tool call gracefully.",
  ],
];

const redFlags: string[] = [
  "Guaranteed job or salary claims — usually conditional to the point of meaninglessness.",
  "Refusal to share a module-level syllabus before payment.",
  "“Live” that turns out to be recordings with a moderator.",
  "No last-updated date on the curriculum; in AI, undated means outdated.",
  "No RAG, agents, fine-tuning or MLOps in a 2026 syllabus.",
  "“20+ projects” with no descriptions.",
  "Manufactured scarcity — “price goes up tonight.”",
  "Placement statistics with no denominator, or testimonials without full names and LinkedIn profiles.",
  "No refund policy, an EMI through a lender whose terms you cannot see, or instructor names withheld until after enrolment.",
  "No mechanism for human feedback on your code.",
];

const preEnrolQuestions: string[] = [
  "Is the class live, and can I observe one?",
  "Who teaches my batch, and what is their industry background?",
  "What is the doubt-resolution SLA, and what happens if it is missed?",
  "Does a human review my code?",
  "When was the curriculum last updated, and which modules changed?",
  "Does it include production RAG, fine-tuning, agents and MLOps?",
  "Do I design projects or follow along?",
  "Is anything deployed?",
  "What is the refund policy in writing, with the exact cut-off date?",
  "Is the EMI a loan that continues if I stop attending?",
  "What does “placement assistance” include, item by item?",
  "Can I speak to two alumni from the last six months you did not hand-pick?",
];

const faqGroups: [string, [string, ReactNode][]][] = [
  [
    "Choosing a course",
    [
      [
        "Which is the best AI course for beginners with high salary in 2026?",
        <>
          For most beginners who can commit 10–15 hours a week, <strong>LogicMojo&apos;s AI &amp; ML
          Course</strong> scores highest on our eight pillars because it covers the full 2026 stack with
          live mentorship at a mid-band price. If placement infrastructure matters most and you clear an
          aptitude test, Scaler; if a university credential matters, upGrad or Great Learning; if budget
          is under ₹30,000, PW Skills or GUVI.
        </>,
      ],
      [
        "Are AI courses worth it for beginners?",
        <>
          Yes — if you finish and leave with a portfolio. NASSCOM-linked projections put India&apos;s AI
          talent demand above a million professionals, and 2026 salary reports consistently show freshers
          with documented GenAI projects negotiating ₹8–15 LPA at product companies. A course abandoned
          in Month 3 is worth less than nothing, because the EMI continues.
        </>,
      ],
      [
        "Live or self-paced?",
        <>
          Live if you have ever abandoned a self-paced course, need code review, or have a job that will
          eat your evenings without a fixed appointment. Self-paced if you are highly disciplined, have
          unpredictable shifts, or are building foundations before a paid program.
        </>,
      ],
      [
        "How do I know a curriculum is current?",
        <>
          Look for a last-updated date, then check the bottom third of our depth heatmap: production RAG,
          fine-tuning, agents, MCP, open-weight models, LLM evaluation, MLOps and deployment. Prompting
          plus one API call is 2023.
        </>,
      ],
    ],
  ],
  [
    "Eligibility, prerequisites and fees",
    [
      [
        "Can I learn AI without a coding background?",
        <>
          Yes. LogicMojo, upGrad, Great Learning, GUVI and PW Skills all onboard non-coders, and upGrad
          includes a complimentary two-month prerequisite bootcamp. Spend three weeks on free Python
          first and you will not be the person lost in Week 2.
        </>,
      ],
      [
        "Can a non-IT graduate get an AI job in India?",
        <>
          Yes, and it happens regularly, but it is slower than marketing suggests: expect the ₹5–8 LPA
          services or analyst band first and the product-company band on the second move, driven by
          portfolio quality.
        </>,
      ],
      [
        "Do I need a CS degree for a high-paying AI job?",
        <>
          No. Employers increasingly hire on demonstrable projects; the degree matters mainly where
          university-linked programs set eligibility (a bachelor&apos;s with 50% is common) and in some
          GCC roles that filter on technical qualifications.
        </>,
      ],
      [
        "How much does a beginner AI course cost in India?",
        <>
          From ₹0 (DeepLearning.AI previews, Hugging Face, Kaggle) through ₹5,000–₹30,000 (PW Skills,
          GUVI self-paced), ₹40,000–₹1.2 lakh (mid-band live programs including LogicMojo) and ₹1.5–3.5
          lakh (university-linked PG programs) to ₹2.5–4 lakh (Scaler).
        </>,
      ],
      [
        "What happens to my EMI if I stop attending?",
        <>
          Usually nothing changes: most course EMIs are bank or NBFC loans that continue regardless of
          attendance. Get the refund window and cut-off date in writing before paying, and ask whether
          “no-cost EMI” is a subsidised loan or a forfeited discount.
        </>,
      ],
    ],
  ],
  [
    "Careers, outcomes and skills",
    [
      [
        "What salary can a beginner expect after an AI course?",
        <>
          Indicative 2026 ranges: ₹5–8 LPA in IT services and mid-tier firms; ₹8–15 LPA at product
          companies, GCCs and funded startups for candidates with strong GenAI portfolios; ₹12–30 LPA
          after two to four years. No course guarantees any of these.
        </>,
      ],
      [
        "How long does it take to get an AI job after finishing?",
        <>
          Typically three to nine months of active applications for freshers and switchers, faster for
          engineers moving internally. Application effort after the course — 30+ targeted applications,
          referrals, mock interviews — predicts this more than course choice.
        </>,
      ],
      [
        "Is GenAI enough, or do I need classical ML too?",
        <>
          You need both. Most production AI in Indian companies is still classical ML, and every GenAI
          interview still probes evaluation fundamentals.
        </>,
      ],
      [
        "What are AI agents and why do they matter for jobs?",
        <>
          Agents are LLM-driven systems that plan, call tools and act over multiple steps — the 2026 layer
          on top of RAG. Several 2026 reports identify agentic AI as India&apos;s fastest-growing AI
          specialisation, with a real shortage of trained people.
        </>,
      ],
    ],
  ],
];

const sources: [string, string][] = [
  ["LogicMojo AI & ML Course and comparison pages (duration, schedule, mentorship, projects; placement figures provider-reported)", "https://logicmojo.com/artificial-intelligence-course/"],
  ["Scaler Advanced AI & ML program page and DS/ML listings (agentic track; MCQ entry; ~₹3.69L 12-month listing on Shiksha)", "https://www.scaler.com/ai-machine-learning-course/"],
  ["IIIT-Bangalore Executive PG page; upGrad program page (prerequisite bootcamp); Collegedunia fee listing (~₹2.99L, Jan 2026)", "https://www.iiitb.ac.in/testiiitb/executive-post-graduate-programme-in-machine-learning-artificial-intelligence"],
  ["UT Austin McCombs / Great Learning PGP-AIML page (no prior programming; USD 3,950; CEUs); Careers360 India fee review", "https://onlineexeced.mccombs.utexas.edu/online-ai-machine-learning-course"],
  ["Careers360 listings for Simplilearn's Purdue PGP (11 months; ₹1.5–1.9L); Purdue bootcamp portal (6-month cohorts, 2026)", "https://bootcamp-sl.discover.online.purdue.edu"],
  ["iHUB DivyaSampark IIT Roorkee course page; Intellipaat AI certification page (“not a job guarantee program”)", "https://tih.iitr.ac.in/training-courseDetails/60"],
  ["Coursera India pricing (Plus ₹2,099/month, ₹13,999/year; free first-module preview) — BW Education, Sept 2025", "https://www.bweducation.com/article/coursera-introduces-course-preview-localised-pricing-in-india-570774"],
  ["HCL GUVI AI & ML pages (four languages; no prior coding; 120+ live hours; EMI from ₹11,585)", "https://www.guvi.in/mlp/artificial-intelligence-and-machine-learning"],
  ["PW Skills Data Science with Generative AI launch post (17 Jan 2026; 8 months; hybrid; 20+ projects; PwC certificate)", "https://pwskills.com/blog/data-science/data-science-course-with-generative-ai-pw-skills-program-17th-jan-2026"],
  ["Deloitte–NASSCOM, Advancing India's AI Skills (600–650K in 2022 to 1.25M+ by 2027; 25–35% CAGR)", "https://www.deloitte.com/in/en/about/press-room/bridging-the-ai-talent-gap-to-boost-indias-tech-and-economic-impact-deloitte-nasscom-report.html"],
  ["NASSCOM–Indeed, India's AI Talent Inflection Point (May 2026)", "https://community.nasscom.in/communities/nasscom-insights/indias-ai-talent-inflection-point-skill-gaps-competitive-advantage"],
];

/* ------------------------- components: new sections ---------------------- */

function StatGrid({ items }: { items: [string, string][] }) {
  return (
    <div data-reveal className="my-8 grid gap-3 sm:grid-cols-3">
      {items.map(([stat, label]) => (
        <div key={label} className="card-surface card-lift p-4">
          <div className="gradient-text font-display text-2xl font-extrabold">{stat}</div>
          <div className="mt-1 text-[0.78rem] leading-snug text-muted-foreground">{label}</div>
        </div>
      ))}
    </div>
  );
}

function Faq({ q, a }: { q: string; a: ReactNode }) {
  return (
    <details data-reveal className="card-surface card-lift group my-3 p-0">
      <summary className="flex cursor-pointer list-none items-center gap-3 p-5 font-display text-[1rem] font-bold text-ink">
        <span className="grid size-6 shrink-0 place-items-center rounded-md bg-[image:var(--gradient-blue)] font-mono text-[0.7rem] font-bold text-primary-foreground transition-transform duration-300 group-open:rotate-45">
          +
        </span>
        <span>{q}</span>
      </summary>
      <div className="border-t border-border px-5 pb-5 pt-4 text-[0.92rem] leading-relaxed text-muted-foreground">
        {a}
      </div>
    </details>
  );
}

function Timeline() {
  return (
    <ol data-reveal className="!my-9 !list-none !gap-0 !pl-0">
      {roadmap.map(([month, focus, deliverable], i) => (
        <li key={month} className="!m-0 relative pl-14 pb-6 last:pb-0">
          <span
            aria-hidden
            className={`absolute left-[1.05rem] top-9 w-px ${i === roadmap.length - 1 ? "hidden" : "bottom-0"} bg-border`}
          />
          <span className="absolute left-0 top-1 grid size-9 place-items-center rounded-xl bg-[image:var(--gradient-blue)] font-mono text-[0.72rem] font-bold text-primary-foreground">
            {month}
          </span>
          <div className="card-surface card-lift p-4">
            <div className="font-display text-[0.98rem] font-bold text-ink">{focus}</div>
            <div className="mt-1.5 flex items-start gap-2 text-[0.85rem] text-muted-foreground">
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-primary">
                Ship
              </span>
              <span>{deliverable}</span>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

function NumberedGrid({
  items,
  tone = "primary",
}: {
  items: string[];
  tone?: "primary" | "danger";
}) {
  return (
    <div data-reveal className="my-8 grid gap-3 sm:grid-cols-2">
      {items.map((item, i) => (
        <div key={item} className="card-surface card-lift flex gap-3 p-4">
          <span
            className={`grid size-7 shrink-0 place-items-center rounded-lg font-mono text-[0.7rem] font-bold ${
              tone === "danger"
                ? "bg-destructive/10 text-destructive"
                : "bg-[image:var(--gradient-blue)] text-primary-foreground"
            }`}
          >
            {i + 1}
          </span>
          <span className="text-[0.88rem] leading-relaxed text-muted-foreground">{item}</span>
        </div>
      ))}
    </div>
  );
}

function ScenarioCard({
  tag,
  title,
  verdict,
  positive,
  children,
}: {
  tag: string;
  title: string;
  verdict: string;
  positive: boolean;
  children: ReactNode;
}) {
  return (
    <div data-reveal className="card-surface card-lift my-5 p-6">
      <div className="flex flex-wrap items-center gap-3">
        <span className="label-chip">{tag}</span>
        <span
          className={`font-mono text-[0.62rem] uppercase tracking-[0.12em] ${
            positive ? "text-primary" : "text-destructive"
          }`}
        >
          {verdict}
        </span>
      </div>
      <h4 className="!mt-3 !mb-2 !text-[1.02rem]">{title}</h4>
      <p className="!my-0 text-[0.9rem] leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}

function CtaBanner() {
  return (
    <div
      data-reveal
      className="relative isolate my-12 overflow-hidden rounded-2xl border border-border p-7 shadow-[var(--shadow-card)] sm:p-9"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[image:var(--gradient-blue)] opacity-[0.07]"
      />
      <div
        aria-hidden
        className="float-orb absolute -right-16 -top-16 -z-10 size-56 rounded-full bg-[image:var(--gradient-blue)] opacity-20 blur-3xl"
      />
      <span className="label-chip">Primary next step</span>
      <h3 className="!mt-4 !mb-2 !text-[1.45rem] leading-tight">
        Explore <span className="gradient-text">LogicMojo&apos;s AI &amp; ML Course</span>
      </h3>
      <p className="!my-0 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">
        Full curriculum, weekend live IST batches and the project portfolio — audit the syllabus
        against the seven-layer stack before you pay anyone, including us.
      </p>
      <a
        href="https://logicmojo.com/artificial-intelligence-course/"
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-blue)] px-5 py-3 font-display text-[0.92rem] font-bold text-primary-foreground no-underline shadow-[var(--shadow-card)] transition-transform duration-200 hover:-translate-y-0.5"
      >
        View the AI &amp; ML curriculum
        <span aria-hidden>→</span>
      </a>
    </div>
  );
}

function SiteFooter() {
  const cols: [string, string[]][] = [
    ["Courses", ["AI & ML Course", "GenAI Course", "Data Science Course", "DSA & System Design"]],
    ["Resources", ["Curriculum PDF", "Batch Schedule", "Project Portfolio", "Blog", "FAQs"]],
    ["Contact", ["Email", "Phone", "WhatsApp"]],
    ["Social", ["LinkedIn", "YouTube", "Instagram", "X", "GitHub"]],
  ];
  return (
    <footer data-reveal className="mt-16 border-t border-border pt-10">
      <div className="card-surface p-6 sm:p-8">
        <div className="font-display text-xl font-extrabold">
          Logic<span className="gradient-text">Mojo</span>
        </div>
        <p className="mt-2 max-w-lg text-[0.85rem] leading-relaxed text-muted-foreground">
          Practical AI, ML and GenAI training for working professionals and beginners, taught live.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-4">
          {cols.map(([heading, links]) => (
            <div key={heading}>
              <div className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-primary">
                {heading}
              </div>
              <ul className="mt-3 space-y-1.5 text-[0.82rem] text-muted-foreground">
                {links.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-5 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-muted-foreground">
          <span>Privacy Policy</span>
          <span>Terms</span>
          <span>Refund Policy</span>
          <span>© 2026 LogicMojo</span>
          <span>Last updated 28 Aug 2026 · Next review Nov 2026</span>
        </div>
      </div>
    </footer>
  );
}
