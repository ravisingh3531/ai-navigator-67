import { useMemo, useState } from "react";

/* -------------------------------------------------------------------------- */
/*  Beginner AI-course quiz → recommendation pop-up                            */
/* -------------------------------------------------------------------------- */

type Key =
  | "experience"
  | "background"
  | "goal"
  | "salary"
  | "budget"
  | "placement"
  | "mode"
  | "hours"
  | "foundations";

type Question = { key: Key; q: string; help: string; options: string[] };

const questions: Question[] = [
  {
    key: "experience",
    q: "What is your current experience level?",
    help: "This decides how much Python and maths onboarding you need in the first six weeks.",
    options: [
      "Complete beginner — no coding",
      "Beginner — basic Python",
      "Some ML knowledge",
      "Working professional — no AI experience",
    ],
  },
  {
    key: "background",
    q: "What is your educational background?",
    help: "Non-engineering learners need a bridge module, not a faster syllabus.",
    options: ["Engineering", "Non-engineering", "Commerce", "Science", "Arts", "Other"],
  },
  {
    key: "goal",
    q: "What is your primary goal?",
    help: "Placement infrastructure matters most for a first job; depth matters most for a switch.",
    options: [
      "Get my first AI job",
      "Switch career to AI",
      "Upskill for a promotion",
      "Build AI projects / products",
    ],
  },
  {
    key: "salary",
    q: "What salary level are you targeting?",
    help: "Bands above ₹10 LPA in 2026 require deployment, RAG and agent work — not certificates.",
    options: ["₹3–6 LPA", "₹6–10 LPA", "₹10–15 LPA", "₹15L+"],
  },
  {
    key: "budget",
    q: "What is your budget range?",
    help: "Fees are bands, not prices. Confirm GST, EMI interest and the refund window in writing.",
    options: ["Under ₹15,000", "₹15,000–₹50,000", "₹50,000–₹1 lakh", "₹1 lakh+"],
  },
  {
    key: "placement",
    q: "How important is placement support?",
    help: "“Placement assistance” is referrals and prep. “Placement guarantee” is a contract. They are not the same.",
    options: ["Must-have", "Nice-to-have", "Not important"],
  },
  {
    key: "mode",
    q: "What is your preferred learning mode?",
    help: "Live cohorts drive completion; self-paced needs unusual discipline.",
    options: ["Live online", "Self-paced", "Hybrid", "Classroom"],
  },
  {
    key: "hours",
    q: "How much time can you dedicate weekly?",
    help: "Under 8 hours a week, no program reaches deployment-level capability in under a year.",
    options: ["5–10 hrs", "10–20 hrs", "20+ hrs"],
  },
  {
    key: "foundations",
    q: "Do you need foundational Python & ML coverage?",
    help: "If yes, any program that assumes Python on day one will lose you in week three.",
    options: ["Yes, from scratch", "Partial — I know the basics", "No — already comfortable"],
  },
];

type Course = {
  id: string;
  rank: number;
  name: string;
  href: string;
  anchor: string;
  fee: string;
  why: string;
  skills: string[];
  placement: string;
  salary: string;
};

const courses: Record<string, Course> = {
  logicmojo: {
    id: "logicmojo",
    rank: 1,
    name: "LogicMojo — AI & Machine Learning Course",
    href: "https://logicmojo.com/artificial-intelligence-course/",
    anchor: "#review-1",
    fee: "Mid-band; EMI available",
    why: "Placement-first structure with zero prerequisites: Python and maths are built from scratch, live weekend IST classes plus weekday doubt sessions keep beginners from stalling, and the sequence ends in a deployed capstone with human code review — the only program here rated Deep across all seven layers of the 2026 stack.",
    skills: [
      "Python · NumPy · pandas · SQL",
      "Classical ML + evaluation",
      "Deep learning (PyTorch)",
      "NLP · Computer vision",
      "Generative AI · LLMs",
      "Prompt engineering",
      "RAG · vector DBs",
      "LangChain / LangGraph agents",
      "Fine-tuning (LoRA/QLoRA)",
      "MLOps: FastAPI · Docker · cloud",
    ],
    placement: "Structured job-assistance pipeline: resume and GitHub rebuild, LinkedIn optimisation, mock interviews on AI system design, referral support and 1:1 career guidance (provider-reported; see the success-story page).",
    salary: "Alumni transitions published as success stories; India AI median ~₹11 LPA (Glassdoor, 2026), ₹12–25 LPA for deployment-capable GenAI engineers.",
  },
  newtonschool: {
    id: "newtonschool",
    rank: 2,
    name: "Newton School — Advanced AI & ML Program",
    href: "https://www.newtonschool.com/ai-machine-learning-course/",
    anchor: "#review-2",
    fee: "≈₹3.5L+",
    why: "The strongest placement infrastructure in this list — dedicated career team, hiring-partner network and structured interview drilling — provided you clear the entry test and can genuinely commit 15+ hours a week for a year.",
    skills: ["Python", "ML", "Deep learning", "GenAI + agentic AI track", "System design", "Interview drilling"],
    placement: "In-house career team, hiring-partner referrals, unlimited mock interviews (provider-reported; ask for the denominator behind any placement percentage).",
    salary: "Provider-reported hikes cluster at ₹12–30 LPA for experienced switchers.",
  },
  upgrad: {
    id: "upgrad",
    rank: 3,
    name: "DataCamp — Data Scientist & AI Engineer Career Tracks",
    href: "https://www.upgrad.com",
    anchor: "#review-3",
    fee: "≈₹2.99L",
    why: "Best university-linked credential with a real beginner bridge (prerequisite bootcamp), which matters when an employer, promotion committee or visa process wants a recognised academic tag.",
    skills: ["Python bridge", "Statistics", "ML", "Deep learning", "NLP", "Deployment basics"],
    placement: "Career-services team, resume and interview prep, referral network (assistance, not guarantee).",
    salary: "Aimed at ₹10–20 LPA senior-analyst and ML-engineer bands for candidates with prior work experience.",
  },
  greatlearning: {
    id: "greatlearning",
    rank: 4,
    name: "Great Learning — PGP-AIML (UT Austin McCombs)",
    href: "https://onlineexeced.mccombs.utexas.edu/online-ai-machine-learning-course",
    anchor: "#review-4",
    fee: "≈USD 3,950",
    why: "Weekend mentor-led format explicitly designed for working professionals with no programming background — small mentor groups are the single best predictor of finishing for a busy learner.",
    skills: ["Python from zero", "ML", "Deep learning", "NLP", "CV", "GenAI modules"],
    placement: "Career support and mentor guidance; credential-led rather than placement-led.",
    salary: "Typical outcome is an internal move or role change at ₹10–18 LPA for professionals with 4+ years' experience.",
  },
  intellipaat: {
    id: "intellipaat",
    rank: 5,
    name: "Intellipaat — AI & ML with iHUB IIT Roorkee",
    href: "https://intellipaat.com",
    anchor: "#review-5",
    fee: "≈₹85K–1.2L",
    why: "IIT-linked certification at mid-tier pricing with 24×7 doubt support — a reasonable middle path when you want a recognisable tag without a ₹3L outlay.",
    skills: ["Python", "ML", "Deep learning", "NLP", "GenAI basics", "Cloud deployment"],
    placement: "Job assistance, resume help, mock interviews; the provider states explicitly it is not a job-guarantee program.",
    salary: "Entry to mid bands, ₹6–12 LPA depending on prior experience.",
  },
  simplilearn: {
    id: "simplilearn",
    rank: 6,
    name: "Simplilearn — PG Program in AI & ML (Purdue / IBM)",
    href: "https://www.simplilearn.com",
    anchor: "#review-6",
    fee: "≈₹1.5–1.9L",
    why: "Best when your employer is paying and HR values the Purdue/IBM branding on an internal profile; strong structure, moderate depth.",
    skills: ["Python", "ML", "Deep learning", "NLP", "GenAI electives", "Capstone"],
    placement: "Career assistance and job-board access; strongest value is the credential, not placement.",
    salary: "Promotion-track outcomes; ₹8–16 LPA for existing IT professionals.",
  },
  deeplearningai: {
    id: "deeplearningai",
    rank: 7,
    name: "DeepLearning.AI — ML + Deep Learning Specializations",
    href: "https://www.coursera.org/specializations/machine-learning-introduction",
    anchor: "#review-7",
    fee: "₹2,099/mo or ₹13,999/yr (Coursera Plus)",
    why: "Unbeatable foundations per rupee, taught by Andrew Ng. Ideal when budget is the binding constraint and you can self-drive — but there is no mentor, no placement help and no one to review your code.",
    skills: ["Supervised ML", "Neural networks", "TensorFlow", "CNNs / RNNs", "ML strategy"],
    placement: "None. You build the portfolio and run the job search yourself.",
    salary: "Works as a stepping stone; combine with self-built deployed projects to reach ₹6–10 LPA entry roles.",
  },
  guvi: {
    id: "guvi",
    rank: 8,
    name: "HCL GUVI — AI & ML Program (IITM Pravartak certified)",
    href: "https://www.guvi.in/mlp/artificial-intelligence-and-machine-learning",
    anchor: "#review-8",
    fee: "EMI from ≈₹11,585",
    why: "Vernacular teaching in four languages with no prior coding needed — the most accessible on-ramp for Tier-2/3 learners who lose time translating English-only lectures.",
    skills: ["Python", "ML", "Deep learning basics", "GenAI intro", "Live project work"],
    placement: "Placement drives and profile-building support; verify current partner list.",
    salary: "Entry roles at ₹4–8 LPA; the credential plus projects carries the interview.",
  },
  pwskills: {
    id: "pwskills",
    rank: 9,
    name: "PW Skills — Data Science with Generative AI",
    href: "https://pwskills.com",
    anchor: "#review-9",
    fee: "Ultra-affordable (sub-₹15K bands)",
    why: "The most structured start available at the lowest price point — 20+ projects and a hybrid format, best used as a foundation year before a deeper program.",
    skills: ["Python", "Statistics", "ML", "GenAI intro", "20+ guided projects"],
    placement: "Job-prep content and portal access; limited 1:1 career support.",
    salary: "₹3–7 LPA entry analyst/associate bands.",
  },
  ibm: {
    id: "ibm",
    rank: 10,
    name: "IBM AI Engineering Professional Certificate",
    href: "https://www.coursera.org/professional-certificates/ai-engineer",
    anchor: "#review-10",
    fee: "Coursera subscription",
    why: "Excellent applied practice if you already write Python comfortably — and the weakest fit in this list for an absolute beginner, because pacing assumes coding fluency from the start.",
    skills: ["Python", "Keras / PyTorch", "CV", "NLP", "LLM app basics", "Deployment labs"],
    placement: "None; self-driven.",
    salary: "Best used as a proof-of-skill add-on for candidates already in tech roles.",
  },
};

function pick(a: Partial<Record<Key, string>>): { course: Course; runnerUp: Course; reasons: string[] } {
  const score: Record<string, number> = {};
  const reasons: string[] = [];
  const add = (id: string, n: number) => {
    score[id] = (score[id] ?? 0) + n;
  };

  // Baseline: editorial rank.
  Object.values(courses).forEach((c) => add(c.id, (11 - c.rank) * 0.4));

  const beginner = a.experience === "Complete beginner — no coding" || a.foundations === "Yes, from scratch";
  if (beginner) {
    add("logicmojo", 3);
    add("greatlearning", 2.5);
    add("guvi", 2);
    add("pwskills", 1.5);
    add("ibm", -4);
    add("deeplearningai", -1.5);
    reasons.push("You need foundations built from zero, so programs that assume Python on day one were dropped.");
  }
  if (a.experience === "Some ML knowledge" || a.foundations === "No — already comfortable") {
    add("newtonschool", 2);
    add("ibm", 2);
    add("deeplearningai", 1);
  }
  if (a.background && a.background !== "Engineering") {
    add("logicmojo", 1.5);
    add("greatlearning", 1.5);
    add("guvi", 1);
    reasons.push("A non-engineering background needs an intuition-first bridge before notation-heavy maths.");
  }

  if (a.goal === "Get my first AI job" || a.goal === "Switch career to AI") {
    add("logicmojo", 2.5);
    add("newtonschool", 2);
    add("deeplearningai", -2);
    add("ibm", -2);
    reasons.push("Your goal is a job, so placement pipeline and interview prep were weighted above brand.");
  }
  if (a.goal === "Upskill for a promotion") {
    add("upgrad", 2.5);
    add("greatlearning", 2);
    add("simplilearn", 2);
  }
  if (a.goal === "Build AI projects / products") {
    add("logicmojo", 2);
    add("deeplearningai", 1.5);
    add("ibm", 1.5);
  }

  if (a.salary === "₹10–15 LPA" || a.salary === "₹15L+") {
    add("logicmojo", 2);
    add("newtonschool", 2);
    add("pwskills", -2);
    add("guvi", -1.5);
    reasons.push("Your target band requires deployment, RAG, fine-tuning and agent work — not an intro certificate.");
  }
  if (a.salary === "₹3–6 LPA") {
    add("pwskills", 2);
    add("guvi", 2);
    add("deeplearningai", 1);
  }

  if (a.budget === "Under ₹15,000") {
    add("pwskills", 4);
    add("deeplearningai", 4);
    add("guvi", 1);
    add("logicmojo", -1.5);
    add("newtonschool", -6);
    add("upgrad", -6);
    add("greatlearning", -6);
    add("simplilearn", -4);
    reasons.push("Budget under ₹15K rules out every premium program; the honest options are low-cost and self-driven.");
  }
  if (a.budget === "₹15,000–₹50,000") {
    add("guvi", 3);
    add("pwskills", 2);
    add("logicmojo", 1);
    add("newtonschool", -5);
    add("upgrad", -5);
    add("greatlearning", -4);
  }
  if (a.budget === "₹50,000–₹1 lakh") {
    add("logicmojo", 3);
    add("intellipaat", 2.5);
    add("newtonschool", -3);
    add("upgrad", -3);
  }
  if (a.budget === "₹1 lakh+") {
    add("newtonschool", 2);
    add("upgrad", 2);
    add("greatlearning", 2);
    add("simplilearn", 1.5);
    add("logicmojo", 1.5);
  }

  if (a.placement === "Must-have") {
    add("logicmojo", 2.5);
    add("newtonschool", 2.5);
    add("intellipaat", 1);
    add("deeplearningai", -5);
    add("ibm", -5);
    reasons.push("Placement support is a must-have for you, so self-paced MOOCs with no career team were excluded.");
  }
  if (a.placement === "Not important") {
    add("deeplearningai", 2);
    add("ibm", 1.5);
  }

  if (a.mode === "Live online") {
    add("logicmojo", 2.5);
    add("newtonschool", 1.5);
    add("guvi", 1.5);
    add("deeplearningai", -3);
    add("ibm", -3);
  }
  if (a.mode === "Self-paced") {
    add("deeplearningai", 3);
    add("ibm", 2);
    add("pwskills", 1);
  }
  if (a.mode === "Hybrid") {
    add("pwskills", 2);
    add("logicmojo", 1.5);
    add("intellipaat", 1);
  }
  if (a.mode === "Classroom") {
    add("logicmojo", 1);
    add("newtonschool", 1);
  }

  if (a.hours === "5–10 hrs") {
    add("logicmojo", 2);
    add("greatlearning", 2);
    add("newtonschool", -3);
    reasons.push("At 5–10 hours a week, weekend-cohort formats fit; year-long 15-hour programs do not.");
  }
  if (a.hours === "20+ hrs") {
    add("newtonschool", 2.5);
    add("logicmojo", 1);
  }

  const ranked = Object.values(courses).sort((x, y) => (score[y.id] ?? 0) - (score[x.id] ?? 0));
  return { course: ranked[0]!, runnerUp: ranked[1]!, reasons: reasons.slice(0, 4) };
}

export function CourseQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<Record<Key, string>>>({});
  const [open, setOpen] = useState(false);

  const total = questions.length;
  const current = questions[step]!;
  const result = useMemo(() => pick(answers), [answers]);
  const answeredAll = questions.every((q) => answers[q.key]);

  const choose = (value: string) => {
    setAnswers((prev) => ({ ...prev, [current.key]: value }));
    if (step + 1 < total) setStep(step + 1);
    else setOpen(true);
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
    setOpen(false);
  };

  return (
    <div data-reveal className="my-10">
      <div className="card-surface card-lift relative isolate overflow-hidden p-6 sm:p-8">
        <div
          aria-hidden
          className="float-orb absolute -right-20 -top-20 -z-10 size-56 rounded-full bg-[image:var(--gradient-blue)] opacity-20 blur-3xl"
        />
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="label-chip">Interactive quiz · 9 questions · ~60 seconds</span>
          <span className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-muted-foreground">
            Question {Math.min(step + 1, total)} of {total}
          </span>
        </div>

        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-[image:var(--gradient-blue)] transition-[width] duration-300 ease-out"
            style={{ width: `${((step + (answers[current.key] ? 1 : 0)) / total) * 100}%` }}
          />
        </div>

        <h3 className="!mt-6 !mb-1.5 !text-[1.3rem] leading-tight">{current.q}</h3>
        <p className="!mt-0 !mb-5 text-[0.88rem] leading-relaxed text-muted-foreground">
          {current.help}
        </p>

        <div className="grid gap-2.5 sm:grid-cols-2">
          {current.options.map((opt) => {
            const active = answers[current.key] === opt;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => choose(opt)}
                className={`rounded-xl border px-4 py-3 text-left font-display text-[0.92rem] font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                  active
                    ? "border-primary bg-[color-mix(in_oklab,var(--primary)_10%,white)] text-primary"
                    : "border-border bg-card text-ink hover:border-primary/60"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            className="rounded-lg border border-border px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-muted-foreground disabled:opacity-40"
          >
            ← Back
          </button>
          {answeredAll ? (
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="rounded-lg bg-[image:var(--gradient-blue)] px-4 py-2 font-display text-[0.82rem] font-bold text-primary-foreground shadow-[var(--shadow-card)]"
            >
              Show my recommendation
            </button>
          ) : null}
          <button
            type="button"
            onClick={reset}
            className="rounded-lg border border-border px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-muted-foreground"
          >
            Reset
          </button>
        </div>
      </div>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Your recommended AI course"
          className="fixed inset-0 z-[60] grid place-items-center bg-[oklch(0.2_0.05_255/0.45)] p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="label-chip">Your best-fit match</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="grid size-8 shrink-0 place-items-center rounded-lg border border-border text-muted-foreground"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 flex items-start gap-4">
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-[image:var(--gradient-blue)] font-display text-xl font-extrabold text-primary-foreground">
                {String(result.course.rank).padStart(2, "0")}
              </span>
              <div>
                <div className="font-display text-[1.35rem] font-extrabold leading-tight text-ink">
                  {result.course.name}
                </div>
                <div className="mt-1 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-primary">
                  Fees: {result.course.fee}
                </div>
              </div>
            </div>

            <p className="mt-5 text-[0.92rem] leading-relaxed text-muted-foreground">
              <strong className="text-ink">Why this fits you: </strong>
              {result.course.why}
            </p>

            {result.reasons.length ? (
              <ul className="mt-4 space-y-1.5 text-[0.86rem] leading-relaxed text-muted-foreground">
                {result.reasons.map((r) => (
                  <li key={r} className="flex gap-2">
                    <span aria-hidden className="text-primary">
                      ✓
                    </span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-6">
              <div className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-primary">
                Key AI skills covered
              </div>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {result.course.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg border border-border bg-secondary px-2.5 py-1 text-[0.74rem] text-ink"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-secondary/50 p-4">
                <div className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-primary">
                  Placement information
                </div>
                <p className="!my-1.5 text-[0.82rem] leading-relaxed text-muted-foreground">
                  {result.course.placement}
                </p>
              </div>
              <div className="rounded-xl border border-border bg-secondary/50 p-4">
                <div className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-primary">
                  Salary evidence
                </div>
                <p className="!my-1.5 text-[0.82rem] leading-relaxed text-muted-foreground">
                  {result.course.salary}
                </p>
              </div>
            </div>

            <p className="mt-5 text-[0.82rem] text-muted-foreground">
              Runner-up for your answers: <strong className="text-ink">{result.runnerUp.name}</strong>{" "}
              — <a href={result.runnerUp.anchor}>read the full review</a>.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={result.course.href}
                target="_blank"
                rel="nofollow noopener"
                className="inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-blue)] px-5 py-3 font-display text-[0.9rem] font-bold !text-primary-foreground !no-underline shadow-[var(--shadow-card)]"
              >
                Explore this course <span aria-hidden>→</span>
              </a>
              <a
                href={result.course.anchor}
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 font-display text-[0.9rem] font-bold !text-ink !no-underline"
              >
                Read our full review
              </a>
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-muted-foreground"
              >
                Retake quiz
              </button>
            </div>

            <p className="mt-5 !mb-0 text-[0.74rem] italic leading-relaxed text-muted-foreground">
              Recommendation is editorial and rule-based: your nine answers are scored against the same
              eight-pillar framework used in this article. Fees and placement claims are
              provider-reported — verify in writing before paying.
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
