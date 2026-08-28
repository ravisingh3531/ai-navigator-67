import { useMemo, useState } from "react";

type Course = {
  rank: number;
  name: string;
  provider: string;
  score: number;
  fee: string;
  feeFrom: number;
  budget: "under-50k" | "50k-2l" | "above-2l";
  level: "absolute" | "some-coding";
  levelLabel: string;
  mentorship: "live" | "weekend" | "self-paced";
  mentorshipLabel: string;
  career: "strong" | "moderate" | "minimal";
  careerLabel: string;
  duration: string;
  bestFor: string;
  anchor: string;
};

const courses: Course[] = [
  {
    rank: 1,
    name: "AI & Machine Learning Course",
    provider: "LogicMojo",
    score: 8.9,
    fee: "Mid-band (₹XX,XXX) · EMI",
    feeFrom: 80000,
    budget: "50k-2l",
    level: "absolute",
    levelLabel: "Absolute beginner friendly",
    mentorship: "live",
    mentorshipLabel: "Live classes + weekday doubt sessions",
    career: "moderate",
    careerLabel: "Moderate — interview prep, referrals",
    duration: "7 months",
    bestFor: "Engineering-grade depth with live mentorship at a mid-band price",
    anchor: "review-1",
  },
  {
    rank: 2,
    name: "Advanced AI & ML Program",
    provider: "Scaler",
    score: 8.05,
    fee: "₹2.5–4L",
    feeFrom: 250000,
    budget: "above-2l",
    level: "some-coding",
    levelLabel: "Needs aptitude test + coding comfort",
    mentorship: "live",
    mentorshipLabel: "Live IST cohort + 1:1 mentors",
    career: "strong",
    careerLabel: "Strong — dedicated placement team",
    duration: "12 months",
    bestFor: "Product-company placement goals with 15+ hrs/week to spare",
    anchor: "review-2",
  },
  {
    rank: 3,
    name: "Executive PG in ML & AI (IIIT-B)",
    provider: "upGrad",
    score: 7.6,
    fee: "~₹2.99L",
    feeFrom: 150000,
    budget: "above-2l",
    level: "absolute",
    levelLabel: "Beginner bridge bootcamp included",
    mentorship: "weekend",
    mentorshipLabel: "Recorded core + scheduled live sessions",
    career: "strong",
    careerLabel: "Strong — university-linked career services",
    duration: "13 months",
    bestFor: "Career switchers who need a credential HR recognises",
    anchor: "review-3",
  },
  {
    rank: 4,
    name: "PGP-AIML (UT Austin / Great Lakes)",
    provider: "Great Learning",
    score: 7.55,
    fee: "~₹2.4L + GST",
    feeFrom: 240000,
    budget: "above-2l",
    level: "absolute",
    levelLabel: "No prior programming required",
    mentorship: "weekend",
    mentorshipLabel: "Weekend live mentor sessions",
    career: "moderate",
    careerLabel: "Moderate — career support, no guarantee",
    duration: "7–12 months",
    bestFor: "Working professionals with zero coding background",
    anchor: "review-4",
  },
  {
    rank: 5,
    name: "AI & ML with iHUB IIT Roorkee",
    provider: "Intellipaat",
    score: 7.05,
    fee: "₹80K–₹2L",
    feeFrom: 80000,
    budget: "50k-2l",
    level: "absolute",
    levelLabel: "Beginner track with foundations module",
    mentorship: "live",
    mentorshipLabel: "Live + self-paced hybrid, 24/7 support",
    career: "moderate",
    careerLabel: "Moderate — resume + interview assistance",
    duration: "6–12 months",
    bestFor: "An IIT-linked credential without premium pricing",
    anchor: "review-5",
  },
  {
    rank: 6,
    name: "PG Program in AI & ML (Purdue / IBM)",
    provider: "Simplilearn",
    score: 6.38,
    fee: "₹1.5–1.9L",
    feeFrom: 150000,
    budget: "50k-2l",
    level: "absolute",
    levelLabel: "Beginner-tolerant, ~8 hrs/week",
    mentorship: "weekend",
    mentorshipLabel: "Self-paced core + live masterclasses",
    career: "minimal",
    careerLabel: "Minimal — credential-led, light placement",
    duration: "11 months",
    bestFor: "Employer-sponsored upskilling where HR values the brand",
    anchor: "review-6",
  },
  {
    rank: 7,
    name: "ML + Deep Learning Specializations",
    provider: "DeepLearning.AI",
    score: 6.3,
    fee: "₹2,099/mo or ₹13,999/yr",
    feeFrom: 13999,
    budget: "under-50k",
    level: "some-coding",
    levelLabel: "Comfortable with Python + maths",
    mentorship: "self-paced",
    mentorshipLabel: "Self-paced, forum support only",
    career: "minimal",
    careerLabel: "None — no career services",
    duration: "3–6 months",
    bestFor: "Foundations at near-zero cost before paying for a course",
    anchor: "review-7",
  },
  {
    rank: 8,
    name: "AI & ML Program (IITM Pravartak)",
    provider: "HCL GUVI",
    score: 6.18,
    fee: "EMI from ₹11,585",
    feeFrom: 45000,
    budget: "under-50k",
    level: "absolute",
    levelLabel: "Beginner friendly, vernacular teaching",
    mentorship: "live",
    mentorshipLabel: "120+ live hrs in EN/HI/TA/TE",
    career: "moderate",
    careerLabel: "Moderate — placement cell, Tier-2/3 roles",
    duration: "3–9 months",
    bestFor: "Vernacular learners and Tier-2/3 accessibility",
    anchor: "review-8",
  },
  {
    rank: 9,
    name: "Data Science with Generative AI",
    provider: "PW Skills",
    score: 6.13,
    fee: "₹5K–₹30K",
    feeFrom: 5000,
    budget: "under-50k",
    level: "absolute",
    levelLabel: "Beginner friendly, student-paced",
    mentorship: "weekend",
    mentorshipLabel: "Recorded + live revision sessions",
    career: "minimal",
    careerLabel: "Minimal — job portal + community",
    duration: "8 months",
    bestFor: "Students and budget-constrained beginners",
    anchor: "review-9",
  },
  {
    rank: 10,
    name: "AI Engineering Professional Certificate",
    provider: "IBM",
    score: 5.7,
    fee: "Coursera subscription",
    feeFrom: 13999,
    budget: "under-50k",
    level: "some-coding",
    levelLabel: "Assumes working Python knowledge",
    mentorship: "self-paced",
    mentorshipLabel: "Self-paced labs, no mentor",
    career: "minimal",
    careerLabel: "None — certificate only",
    duration: "3–6 months",
    bestFor: "Applied practice if you already code",
    anchor: "review-10",
  },
];

type FilterKey = "budget" | "level" | "mentorship" | "career";

const filterGroups: {
  key: FilterKey;
  label: string;
  options: { value: string; label: string }[];
}[] = [
  {
    key: "budget",
    label: "Budget",
    options: [
      { value: "all", label: "Any budget" },
      { value: "under-50k", label: "Under ₹50K" },
      { value: "50k-2l", label: "₹50K – ₹2L" },
      { value: "above-2l", label: "Above ₹2L" },
    ],
  },
  {
    key: "level",
    label: "Beginner level",
    options: [
      { value: "all", label: "Any level" },
      { value: "absolute", label: "Absolute beginner" },
      { value: "some-coding", label: "Some coding already" },
    ],
  },
  {
    key: "mentorship",
    label: "Mentorship",
    options: [
      { value: "all", label: "Any format" },
      { value: "live", label: "Live + doubt support" },
      { value: "weekend", label: "Weekend / hybrid" },
      { value: "self-paced", label: "Self-paced" },
    ],
  },
  {
    key: "career",
    label: "Career support",
    options: [
      { value: "all", label: "Any support" },
      { value: "strong", label: "Strong placement team" },
      { value: "moderate", label: "Moderate assistance" },
      { value: "minimal", label: "Not a priority" },
    ],
  },
];

const initial: Record<FilterKey, string> = {
  budget: "all",
  level: "all",
  mentorship: "all",
  career: "all",
};

const careerDot: Record<Course["career"], string> = {
  strong: "bg-primary",
  moderate: "bg-primary/50",
  minimal: "bg-muted-foreground/40",
};

export function CourseFinder() {
  const [filters, setFilters] = useState<Record<FilterKey, string>>(initial);
  const [sort, setSort] = useState<"score" | "fee">("score");

  const results = useMemo(() => {
    const list = courses.filter(
      (c) =>
        (filters.budget === "all" || c.budget === filters.budget) &&
        (filters.level === "all" || c.level === filters.level) &&
        (filters.mentorship === "all" || c.mentorship === filters.mentorship) &&
        (filters.career === "all" || c.career === filters.career),
    );
    return [...list].sort((a, b) =>
      sort === "score" ? b.score - a.score : a.feeFrom - b.feeFrom,
    );
  }, [filters, sort]);

  const activeCount = Object.values(filters).filter((v) => v !== "all").length;

  return (
    <div data-reveal className="not-prose my-10">
      <div className="card-surface overflow-hidden">
        {/* header */}
        <div className="relative isolate border-b border-border p-5 sm:p-6">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[radial-gradient(120%_140%_at_0%_0%,color-mix(in_oklab,var(--primary)_12%,transparent),transparent_70%)]"
          />
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-primary">
            Interactive tool
          </p>
          <h3 className="font-display mt-1 text-2xl font-extrabold tracking-tight sm:text-[1.7rem]">
            Find your best-fit AI course
          </h3>
          <p className="mt-1.5 max-w-2xl text-[0.95rem] leading-snug text-muted-foreground">
            Filter the same ten courses by what actually decides fit for a beginner: what you can
            spend, how much coding you already know, how much live mentorship you need and whether
            you want a real placement team behind you.
          </p>
        </div>

        {/* filters */}
        <div className="grid gap-5 border-b border-border bg-secondary/40 p-5 sm:grid-cols-2 sm:p-6">
          {filterGroups.map((group) => (
            <fieldset key={group.key} className="min-w-0">
              <legend className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                {group.label}
              </legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {group.options.map((opt) => {
                  const active = filters[group.key] === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      aria-pressed={active}
                      onClick={() =>
                        setFilters((f) => ({ ...f, [group.key]: opt.value }))
                      }
                      className={`rounded-full border px-3 py-1.5 text-[0.82rem] font-semibold transition-all duration-200 ${
                        active
                          ? "border-transparent bg-[image:var(--gradient-blue)] text-primary-foreground shadow-md shadow-primary/25"
                          : "border-border bg-card text-muted-foreground hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground"
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          ))}
        </div>

        {/* result bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-3 sm:px-6">
          <p className="text-sm font-semibold">
            <span className="gradient-text font-display text-lg tabular-nums">
              {results.length}
            </span>{" "}
            of 10 courses match
            {activeCount > 0 && (
              <span className="text-muted-foreground"> · {activeCount} filter{activeCount > 1 ? "s" : ""} on</span>
            )}
          </p>
          <div className="flex items-center gap-2">
            <label className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
              Sort
            </label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as "score" | "fee")}
              className="rounded-lg border border-border bg-card px-2.5 py-1.5 text-[0.82rem] font-semibold text-foreground"
            >
              <option value="score">Overall score</option>
              <option value="fee">Lowest fee first</option>
            </select>
            <button
              type="button"
              onClick={() => setFilters(initial)}
              disabled={activeCount === 0}
              className="rounded-lg border border-border bg-card px-3 py-1.5 text-[0.82rem] font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground disabled:opacity-40"
            >
              Reset
            </button>
          </div>
        </div>

        {/* results — table on desktop */}
        <div className="hidden overflow-x-auto md:block">
          <table className="data-table min-w-[54rem]">
            <thead>
              <tr>
                <th scope="col">Course</th>
                <th scope="col">Fees</th>
                <th scope="col">Duration</th>
                <th scope="col">Beginner fit</th>
                <th scope="col">Mentorship</th>
                <th scope="col">Career support</th>
                <th scope="col">Score</th>
              </tr>
            </thead>
            <tbody>
              {results.map((c) => (
                <tr key={c.anchor} className="transition-colors hover:bg-primary/5">
                  <th scope="row" className="align-top !bg-card !bg-none !text-foreground">
                    <a
                      href={`#${c.anchor}`}
                      className="font-semibold text-primary no-underline hover:underline"
                    >
                      #{c.rank} {c.provider}
                    </a>
                    <span className="block text-[0.8rem] font-normal text-muted-foreground">
                      {c.name}
                    </span>
                  </th>
                  <td className="align-top text-[0.85rem]">{c.fee}</td>
                  <td className="align-top text-[0.85rem]">{c.duration}</td>
                  <td className="align-top text-[0.85rem]">{c.levelLabel}</td>
                  <td className="align-top text-[0.85rem]">{c.mentorshipLabel}</td>
                  <td className="align-top text-[0.85rem]">
                    <span className="inline-flex items-center gap-2">
                      <span className={`size-2 shrink-0 rounded-full ${careerDot[c.career]}`} />
                      {c.careerLabel}
                    </span>
                  </td>
                  <td className="align-top">
                    <span className="gradient-text font-display text-base font-extrabold tabular-nums">
                      {c.score.toFixed(2)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* results — cards on mobile */}
        <div className="grid gap-3 p-4 md:hidden">
          {results.map((c) => (
            <div key={c.anchor} className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <a href={`#${c.anchor}`} className="font-semibold text-primary no-underline">
                    #{c.rank} {c.provider}
                  </a>
                  <p className="text-[0.82rem] text-muted-foreground">{c.name}</p>
                </div>
                <span className="gradient-text font-display text-lg font-extrabold tabular-nums">
                  {c.score.toFixed(2)}
                </span>
              </div>
              <dl className="mt-3 grid grid-cols-2 gap-2 text-[0.8rem]">
                <div>
                  <dt className="text-muted-foreground">Fees</dt>
                  <dd className="font-semibold">{c.fee}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Duration</dt>
                  <dd className="font-semibold">{c.duration}</dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-muted-foreground">Mentorship</dt>
                  <dd className="font-semibold">{c.mentorshipLabel}</dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-muted-foreground">Career support</dt>
                  <dd className="font-semibold">{c.careerLabel}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>

        {results.length === 0 && (
          <div className="p-8 text-center">
            <p className="font-display text-lg font-bold">No course matches all four filters</p>
            <p className="mx-auto mt-1 max-w-md text-sm text-muted-foreground">
              That combination does not exist in the 2026 market — usually because strong placement
              teams sit above ₹2L. Loosen budget or career support first.
            </p>
            <button
              type="button"
              onClick={() => setFilters(initial)}
              className="mt-4 rounded-full bg-[image:var(--gradient-blue)] px-4 py-2 text-sm font-bold text-primary-foreground"
            >
              Clear all filters
            </button>
          </div>
        )}

        {results.length > 0 && (
          <div className="border-t border-border bg-secondary/40 px-5 py-3 text-[0.8rem] text-muted-foreground sm:px-6">
            Best fit for your filters:{" "}
            <a href={`#${results[0]!.anchor}`} className="font-semibold text-primary">
              {results[0]!.provider}
            </a>{" "}
            — {results[0]!.bestFor}.
          </div>
        )}
      </div>
    </div>
  );
}
