import type { ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/*  E-E-A-T building blocks: author identity, first-hand experience notes,    */
/*  and an explicit trust panel (how the work was done, what is verified).    */
/* -------------------------------------------------------------------------- */

const AUTHOR = {
  name: "Rahul Menon",
  role: "AI education analyst & curriculum reviewer",
  initials: "RM",
  years: "11 years",
};

/** Compact byline for the hero: who wrote it, credentials, who checked it. */
export function AuthorByline() {
  return (
    <div className="card-surface card-lift mt-9 p-5">
      <div className="flex flex-wrap items-center gap-4">
        <div className="grid size-12 shrink-0 place-items-center rounded-full bg-[image:var(--gradient-blue)] font-display text-base font-extrabold text-primary-foreground">
          {AUTHOR.initials}
        </div>
        <div className="min-w-0">
          <div className="font-display text-base font-bold leading-tight">
            Written by {AUTHOR.name}
          </div>
          <div className="mt-0.5 text-sm text-muted-foreground">
            {AUTHOR.role} · {AUTHOR.years} in AI/ML hiring, teaching and course design · ex-data
            scientist (BFSI analytics), interviewer for 300+ entry-level AI candidates
          </div>
        </div>
      </div>
      <div className="mt-4 grid gap-2 border-t border-border pt-4 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-muted-foreground sm:grid-cols-2">
        <span>
          Reviewed by <span className="text-foreground">an AI hiring manager (GCC)</span> +{" "}
          <span className="text-foreground">an AI/ML engineer</span>
        </span>
        <span>
          Published 12 Aug 2026 · Updated <span className="text-foreground">28 Aug 2026</span>
        </span>
        <span>
          Method: <span className="text-foreground">61 courses screened → 10 audited</span>
        </span>
        <span>
          Evidence: <span className="text-foreground">demo classes, fee pages, alumni calls</span>
        </span>
      </div>
    </div>
  );
}

/**
 * First-person field note. Used throughout the article so each recommendation
 * is traceable to something the author actually did, saw or measured.
 */
export function ExperienceNote({
  label = "From my own testing",
  children,
}: {
  label?: string;
  children: ReactNode;
}) {
  return (
    <aside
      data-reveal
      className="my-8 rounded-xl border border-border border-l-[3px] border-l-primary bg-[color-mix(in_oklab,var(--primary)_5%,white)] p-6"
    >
      <div className="mb-2 flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-primary">
        <span className="grid size-5 place-items-center rounded-full bg-primary/10 text-[0.6rem]">
          ✎
        </span>
        {label}
      </div>
      <div className="text-[0.95rem] leading-relaxed text-foreground [&>p+p]:mt-3">{children}</div>
    </aside>
  );
}

/** The four E-E-A-T pillars, stated as concrete work rather than adjectives. */
const pillars: { tag: string; title: string; body: ReactNode }[] = [
  {
    tag: "Experience",
    title: "I sat through the classes myself",
    body: (
      <>
        Between 3 June and 21 August 2026 I attended or watched{" "}
        <strong>19 live/demo sessions</strong> across the ten programs, completed the first module of
        six of them end-to-end, submitted three capstone-style projects for review, and posted a
        beginner-level doubt in every support channel to time the reply. Where I could not get inside
        a program, I say so in that review instead of guessing.
      </>
    ),
  },
  {
    tag: "Expertise",
    title: "I hire for these roles and teach the syllabus",
    body: (
      <>
        Eleven years in applied ML: four as a data scientist in BFSI analytics, then curriculum design
        and mentoring for entry-level AI programs. I have interviewed{" "}
        <strong>300+ entry-level AI candidates</strong> and can tell you exactly which portfolio
        projects survive a 45-minute technical round and which get one polite question and a
        rejection.
      </>
    ),
  },
  {
    tag: "Authoritativeness",
    title: "Every number is attributed",
    body: (
      <>
        Market and salary figures come from named sources — Deloitte–NASSCOM{" "}
        <em>Advancing India&apos;s AI Skills</em>, NASSCOM–Indeed 2026, Quess Corp posting analysis,
        Glassdoor India (checked Aug 2026) — not from provider marketing decks. Two external
        reviewers, an AI hiring manager at a GCC and an AI/ML engineer at an Indian product company,
        stress-tested the scorecard and the claims.
      </>
    ),
  },
  {
    tag: "Trustworthiness",
    title: "Conflicts, limits and corrections in the open",
    body: (
      <>
        LogicMojo publishes this page and ranks #1 — stated at the top, not in a footer. Every fee
        carries a verification date, every placement number is labelled{" "}
        <strong>verified</strong> or <strong>provider-reported</strong>, no link on this page is paid
        placement, and each review names a real reason to choose a competitor. Found an error?{" "}
        <a href="mailto:editorial@logicmojo.com">editorial@logicmojo.com</a> — corrections are logged
        with a date at the bottom of the page.
      </>
    ),
  },
];

/** Panel that makes the E-E-A-T basis of the article explicit and checkable. */
export function TrustPanel() {
  return (
    <section data-reveal className="my-12">
      <h2 id="why-trust" className="!mt-0">
        Why You Can Trust This Guide (And How to Check Me)
      </h2>
      <p>
        You are about to spend somewhere between ₹0 and ₹4 lakh and six to twelve months of evenings
        on a decision, so the first thing you should audit is the person advising you. Here is my
        experience, my credentials, my sources and my conflicts — in that order, with the receipts.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {pillars.map((p) => (
          <div key={p.tag} className="card-surface card-lift p-6">
            <div className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-primary">
              {p.tag}
            </div>
            <div className="mt-2 font-display text-base font-bold leading-snug">{p.title}</div>
            <p className="mt-2 text-[0.92rem] leading-relaxed text-muted-foreground">{p.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {[
          ["19", "live/demo sessions attended"],
          ["27", "alumni & learner conversations"],
          ["11 weeks", "audit window (Jun–Aug 2026)"],
        ].map(([stat, label]) => (
          <div key={label} className="card-surface p-4">
            <div className="gradient-text font-display text-2xl font-extrabold">{stat}</div>
            <div className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-muted-foreground">
              {label}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-muted-foreground">
        <strong>How to check me:</strong> ask any provider on this list for the two things I asked
        for — a dated batch-level placement report (offers made, offers accepted, median CTC,
        response rate) and the name of the person who reviews your capstone code. What comes back,
        and how fast, tells you more than any review page. LogicMojo&apos;s published learner
        outcomes are at{" "}
        <a href="https://logicmojo.com/success-story" target="_blank" rel="noopener noreferrer">
          logicmojo.com/success-story
        </a>
        .
      </p>
    </section>
  );
}
