type Dive = {
  rank: number;
  name: string;
  anchor: string;
  bestFor: string;
  beginner: string;
  prereq: string;
  foundation: string;
  curriculum: string[];
  projects: string;
  support: string;
  interview: string;
  placement: string;
  partners: string;
  rate: string;
  services: string[];
  feedback: { from: string; role: string; company: string; salary: string; note: string };
};

const dives: Dive[] = [
  {
    rank: 1,
    name: "LogicMojo — AI & Machine Learning Course",
    anchor: "#review-1",
    bestFor: "Absolute beginners who want a placement-first, job-ready path to ₹10–20 LPA AI roles",
    beginner: "★★★★★ — no coding assumed; intuition-first maths; every concept taught diagram → code → project.",
    prereq: "None. Graduation in any stream; commerce, mechanical and banking backgrounds are common (provider-reported).",
    foundation:
      "Weeks 1–6 build Python, NumPy, pandas, SQL, Git and Colab from zero, then gradients, probability and statistics taught as intuition before notation. Weekday doubt sessions exist specifically to catch learners who slip in the Month-3 core-ML wall.",
    curriculum: [
      "Python, NumPy, pandas, SQL, Git",
      "Maths intuition: gradients, probability, statistics",
      "Classical ML + correct evaluation, class imbalance",
      "Deep learning in PyTorch (CNNs, RNNs, transfer learning)",
      "NLP: tokenisation, embeddings, attention, transformers, Hugging Face",
      "Computer vision: detection, segmentation, ViTs",
      "Generative AI + LLMs (API and open-weight: Llama, Mistral, Qwen, Gemma)",
      "Prompt engineering incl. structured outputs",
      "RAG: chunking, hybrid search, re-ranking, evaluation",
      "Vector databases: ChromaDB, Pinecone, Qdrant",
      "LangChain, LangGraph, CrewAI, AutoGen agents + MCP concepts",
      "Fine-tuning: SFT, LoRA/QLoRA, DPO concepts",
      "MLOps/LLMOps: MLflow, FastAPI, Docker, CI/CD, monitoring, drift",
      "AI system design + interview preparation",
    ],
    projects:
      "12+ progressive projects (provider-stated) moving from guided EDA to independent design: end-to-end ML system, transfer-learning classifier, object detection app, transformer NLP classifier, semantic search, production-style RAG with citations and an eval harness, a fine-tuned domain model benchmarked against its base, a tool-using agent, a multi-agent workflow and a deployed capstone (FastAPI + Docker + cloud + monitoring). Deployment is mandatory for the capstone; submissions get human review.",
    support:
      "Live Saturday–Sunday 10 AM–1 PM IST classes, weekday doubt-clearing sessions, lifetime recordings, 1:1 mentorship calls with practitioners.",
    interview:
      "AI system-design rounds, ML fundamentals drilling, project-defence practice (\"why this chunk size, why this metric\"), mock interviews with feedback, and a rehearsed narrative for career switchers explaining the transition.",
    placement:
      "Structured job-assistance pipeline rather than a bond: portfolio and GitHub audit, resume rebuild around shipped projects, LinkedIn optimisation, referral support and repeated mock interviews until the learner clears rounds (provider-reported).",
    partners: "Product companies, GCCs, AI startups and services firms hiring for GenAI roles (provider-reported; ask for the current list in writing).",
    rate: "Provider publishes alumni success stories rather than a single percentage — read them at logicmojo.com/success-story and ask for the cohort denominator.",
    services: ["Resume rebuild", "GitHub/portfolio audit", "LinkedIn optimisation", "Mock interviews", "1:1 career counselling", "Referral support", "Post-course doubt access"],
    feedback: {
      from: "B.Com graduate, 2 years in banking operations",
      role: "AI/ML Engineer (GenAI, RAG systems)",
      company: "Indian product company (alumnus story)",
      salary: "₹12–16 LPA band",
      note: "Cleared interviews on the strength of a deployed RAG app with an evaluation harness, not the certificate. Provider-reported; verify on the success-story page.",
    },
  },
  {
    rank: 2,
    name: "Scaler — Advanced AI & ML Program",
    anchor: "#review-2",
    bestFor: "Working professionals with 2+ years' experience who can give 15+ hours a week",
    beginner: "★★★☆☆ — beginner-accessible only after the entry test; pace assumes strong aptitude.",
    prereq: "MCQ aptitude test; prior programming exposure strongly helps.",
    foundation: "Foundation modules cover Python and maths, but the schedule expects fast absorption; absolute beginners with no coding often struggle in the first quarter.",
    curriculum: ["Python", "DSA-adjacent problem solving", "Statistics + ML", "Deep learning", "NLP", "GenAI and agentic AI track", "ML system design"],
    projects: "Structured projects plus capstone, reviewed by mentors; strong emphasis on system design write-ups.",
    support: "Live classes, dedicated mentors, 1:1 sessions, peer cohort accountability.",
    interview: "The strongest interview machine in this list: repeated mock interviews, DSA and ML rounds, behavioural prep, offer-negotiation coaching.",
    placement: "In-house career team with referral pipeline; placement assistance, not guarantee.",
    partners: "Large stated hiring-partner network (provider-reported).",
    rate: "Provider-reported percentages; always ask what fraction of the enrolled cohort the number covers.",
    services: ["Resume reviews", "LinkedIn optimisation", "Mock interviews", "Referrals", "Salary negotiation"],
    feedback: {
      from: "Mechanical engineer, 3 years in manufacturing IT",
      role: "Machine Learning Engineer",
      company: "GCC in Bengaluru (learner review)",
      salary: "₹18–24 LPA reported band",
      note: "Third-party learner reviews; outcomes skew toward candidates who already had tech work experience.",
    },
  },
  {
    rank: 3,
    name: "upGrad × IIIT-Bangalore — Executive PG in ML & AI",
    anchor: "#review-3",
    bestFor: "Professionals who need a university-recognised credential for promotion or visa purposes",
    beginner: "★★★★☆ — a prerequisite bootcamp exists for non-programmers.",
    prereq: "Bachelor's degree; the bridge bootcamp covers Python before the main program.",
    foundation: "Dedicated pre-program bootcamp in Python and statistics; academic sequencing means slower but sturdier foundations.",
    curriculum: ["Python bridge", "Statistics and inference", "ML", "Deep learning", "NLP", "GenAI electives", "Deployment basics"],
    projects: "Case studies and a capstone with industry datasets; less deployment emphasis than specialist programs.",
    support: "Faculty sessions, teaching assistants, doubt forums, student success managers.",
    interview: "Interview prep sessions and profile-building workshops; less drilling than Scaler.",
    placement: "Career-services team, referral network, job board; assistance not guarantee.",
    partners: "Broad stated partner network across IT services and GCCs (provider-reported).",
    rate: "Provider-reported; academic credential is the durable asset here.",
    services: ["Resume and profile building", "LinkedIn workshops", "Interview prep", "Career counselling"],
    feedback: {
      from: "IT support engineer, 5 years, non-CS degree",
      role: "Data Scientist (analytics + ML)",
      company: "Indian IT services firm (alumni review)",
      salary: "₹14–18 LPA reported band",
      note: "Internal promotion path; the IIIT-B tag mattered to the employer's banding committee.",
    },
  },
  {
    rank: 4,
    name: "Great Learning — PGP-AIML (UT Austin McCombs)",
    anchor: "#review-4",
    bestFor: "Busy professionals with zero programming background who need weekend mentor groups",
    beginner: "★★★★★ — explicitly states no prior programming required.",
    prereq: "None stated beyond graduation and work experience.",
    foundation: "Python and statistics from scratch in small mentor-led groups; the mentor group is the main completion driver.",
    curriculum: ["Python from zero", "Statistics", "ML", "Deep learning", "NLP", "Computer vision", "GenAI modules"],
    projects: "Multiple mentor-reviewed projects and a capstone; portfolio-grade but lighter on production deployment.",
    support: "Weekend mentored sessions in small groups, program managers, discussion forums.",
    interview: "Career-prep sessions, interview workshops; not a drilling-heavy program.",
    placement: "Career support and mentor referrals; the credential is the headline, not placement.",
    partners: "Career-services network (provider-reported).",
    rate: "Not published as a verifiable percentage; treat outcome claims as marketing.",
    services: ["Resume support", "LinkedIn guidance", "Career counselling", "Alumni network"],
    feedback: {
      from: "Marketing manager, 7 years, arts background",
      role: "AI Product Analyst",
      company: "SaaS company (learner review)",
      salary: "₹12–15 LPA reported band",
      note: "Moved sideways within the same industry — a common and realistic pattern for non-tech professionals.",
    },
  },
  {
    rank: 5,
    name: "Intellipaat — AI & ML with iHUB IIT Roorkee",
    anchor: "#review-5",
    bestFor: "Learners who want an IIT-linked certificate at mid-tier pricing",
    beginner: "★★★★☆ — no coding prerequisite; 24×7 doubt support helps beginners.",
    prereq: "None stated.",
    foundation: "Python and statistics modules at the start; support quality varies by batch.",
    curriculum: ["Python", "SQL", "ML", "Deep learning", "NLP", "GenAI basics", "Cloud deployment"],
    projects: "Industry projects and a capstone; verify current GenAI project list before enrolling.",
    support: "24×7 doubt support, live classes, lifetime access to recordings.",
    interview: "Mock interviews, resume workshops, job-readiness sessions.",
    placement: "Job assistance; the provider states explicitly it is not a job-guarantee program — a point in its favour for honesty.",
    partners: "Stated hiring-partner list (provider-reported).",
    rate: "Not independently verifiable.",
    services: ["Resume building", "Mock interviews", "Job portal access", "Career counselling"],
    feedback: {
      from: "BSc graduate, fresher",
      role: "Junior Data Scientist",
      company: "Mid-size analytics firm (learner review)",
      salary: "₹6–9 LPA reported band",
      note: "Freshers here typically land entry analytics roles first, then move into ML within 12–18 months.",
    },
  },
  {
    rank: 6,
    name: "Simplilearn — PG Program in AI & ML (Purdue / IBM)",
    anchor: "#review-6",
    bestFor: "Employer-sponsored learners where HR values Purdue/IBM branding",
    beginner: "★★★☆☆ — structured, but pacing suits people already in tech.",
    prereq: "Bachelor's degree; programming exposure recommended.",
    foundation: "Python and statistics primers included; foundational depth is moderate.",
    curriculum: ["Python", "Statistics", "ML", "Deep learning", "NLP", "GenAI electives", "Capstone"],
    projects: "Guided projects plus capstone; strong structure, moderate independence.",
    support: "Live virtual classes, teaching assistants, forums.",
    interview: "Career-assistance sessions and interview prep content.",
    placement: "Job-assistance services and job-board access; credential-led.",
    partners: "Stated partner network (provider-reported).",
    rate: "Not verifiable; ask for cohort-level data.",
    services: ["Resume assistance", "Interview prep", "Job board", "Career mentoring"],
    feedback: {
      from: "Software test engineer, 4 years",
      role: "ML Engineer (internal transfer)",
      company: "Large IT services employer (learner review)",
      salary: "₹10–14 LPA reported band",
      note: "Typical outcome is an internal move, not an external switch.",
    },
  },
  {
    rank: 7,
    name: "DeepLearning.AI — ML + Deep Learning Specializations",
    anchor: "#review-7",
    bestFor: "Self-driven learners on a tight budget who want world-class foundations",
    beginner: "★★★★☆ for concepts, ★★☆☆☆ for job readiness — no mentor, no career team.",
    prereq: "Basic Python and school maths help substantially.",
    foundation: "Andrew Ng's teaching is the clearest foundational material available anywhere; but nobody chases you when you stop.",
    curriculum: ["Supervised ML", "Advanced learning algorithms", "Neural networks", "CNNs / RNNs / attention", "TensorFlow", "ML strategy"],
    projects: "Lab notebooks and assignments; you must build and deploy your own portfolio projects separately.",
    support: "Community forums only.",
    interview: "None built in — pair it with your own mock-interview practice.",
    placement: "None.",
    partners: "None.",
    rate: "Not applicable.",
    services: ["Shareable certificates", "Community forums"],
    feedback: {
      from: "CS student, final year",
      role: "ML intern → full-time ML engineer",
      company: "Startup (public learner accounts)",
      salary: "₹6–10 LPA entry band",
      note: "Works when combined with three self-built, deployed projects and an active GitHub.",
    },
  },
  {
    rank: 8,
    name: "HCL GUVI — AI & ML Program (IITM Pravartak certified)",
    anchor: "#review-8",
    bestFor: "Tier-2/3 learners who learn faster in a regional language",
    beginner: "★★★★★ — teaching in four languages, no prior coding required.",
    prereq: "None.",
    foundation: "120+ live hours with foundational Python and ML taught in the learner's language — a genuine accessibility advantage.",
    curriculum: ["Python", "Statistics", "ML", "Deep learning basics", "GenAI introduction", "Live project work"],
    projects: "Guided projects; depth is entry-level rather than production-grade.",
    support: "Live classes, mentor support, community.",
    interview: "Mock interviews and profile-building sessions.",
    placement: "Placement drives and profile support; verify current employer list.",
    partners: "HCL ecosystem plus stated hiring partners (provider-reported).",
    rate: "Not independently verifiable.",
    services: ["Resume building", "Mock interviews", "Placement drives", "Career guidance"],
    feedback: {
      from: "Diploma holder, small-town Tamil Nadu",
      role: "Data Analyst with ML tasks",
      company: "Service company (learner review)",
      salary: "₹4–7 LPA reported band",
      note: "Language accessibility is the decisive factor in these accounts.",
    },
  },
  {
    rank: 9,
    name: "PW Skills — Data Science with Generative AI",
    anchor: "#review-9",
    bestFor: "Students and freshers who need the cheapest structured start",
    beginner: "★★★★☆ — designed for first-timers; hybrid format.",
    prereq: "None.",
    foundation: "Python and statistics from scratch across an 8-month hybrid program.",
    curriculum: ["Python", "Statistics", "ML", "GenAI introduction", "20+ guided projects"],
    projects: "20+ guided projects (provider-stated) — high volume, guided rather than independently designed.",
    support: "Live and recorded sessions, doubt-support channels.",
    interview: "Job-prep content, resume guidance; limited 1:1 mock interviews.",
    placement: "Portal access and prep support rather than an active referral pipeline.",
    partners: "Stated partners (provider-reported).",
    rate: "Not verifiable.",
    services: ["Resume templates", "Job portal", "Interview prep content"],
    feedback: {
      from: "BCA student",
      role: "Data/AI associate",
      company: "Startup (learner review)",
      salary: "₹3.5–6 LPA reported band",
      note: "Best treated as a foundation year before a deeper, placement-focused program.",
    },
  },
  {
    rank: 10,
    name: "IBM AI Engineering Professional Certificate",
    anchor: "#review-10",
    bestFor: "People who already write Python and want applied practice cheaply",
    beginner: "★★☆☆☆ — the weakest fit for absolute beginners in this list.",
    prereq: "Comfortable Python from day one.",
    foundation: "Minimal onboarding; the pace assumes coding fluency.",
    curriculum: ["Python for AI", "Keras / PyTorch", "Computer vision", "NLP", "LLM app basics", "Deployment labs"],
    projects: "Hands-on labs and a capstone; good applied reps, weak portfolio narrative on its own.",
    support: "Forums only.",
    interview: "None.",
    placement: "None.",
    partners: "None.",
    rate: "Not applicable.",
    services: ["Certificate", "Labs"],
    feedback: {
      from: "Backend developer, 3 years",
      role: "AI Engineer (internal move)",
      company: "Product company (public learner accounts)",
      salary: "₹14–20 LPA reported band",
      note: "Effective as a proof-of-skill add-on for people already employed in tech.",
    },
  },
];

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-primary">{label}</div>
      <p className="!my-1 text-[0.85rem] leading-relaxed text-muted-foreground">{value}</p>
    </div>
  );
}

export function BeginnerDeepDive() {
  return (
    <div className="my-10 space-y-6">
      {dives.map((d) => (
        <div key={d.rank} data-reveal className="card-surface card-lift p-6 sm:p-7">
          <div className="flex flex-wrap items-start gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-blue)] font-display text-lg font-extrabold text-primary-foreground">
              {String(d.rank).padStart(2, "0")}
            </span>
            <div className="min-w-[16rem] flex-1">
              <div className="font-display text-[1.15rem] font-extrabold leading-tight text-ink">
                {d.name}
              </div>
              <div className="mt-1 text-[0.85rem] leading-snug text-muted-foreground">
                Best for: {d.bestFor}
              </div>
            </div>
            <a
              href={d.anchor}
              className="font-mono text-[0.64rem] uppercase tracking-[0.1em] text-primary"
            >
              Full review →
            </a>
          </div>

          <div className="mt-5 rounded-xl border border-border bg-[color-mix(in_oklab,var(--primary)_5%,white)] px-4 py-3">
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-primary">
              Beginner-friendliness
            </span>
            <p className="!my-1 text-[0.88rem] font-semibold leading-relaxed text-ink">{d.beginner}</p>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <Field label="Prerequisites" value={d.prereq} />
            <Field label="Foundational support" value={d.foundation} />
            <Field label="Practical projects" value={d.projects} />
            <Field label="Learning support & mentorship" value={d.support} />
            <Field label="Interview preparation" value={d.interview} />
            <Field label="Placement / job assistance" value={d.placement} />
            <Field label="Hiring partners" value={d.partners} />
            <Field label="Placement percentage" value={d.rate} />
          </div>

          <div className="mt-5">
            <div className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-primary">
              AI curriculum depth for beginners
            </div>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {d.curriculum.map((c) => (
                <span
                  key={c}
                  className="rounded-lg border border-border bg-secondary px-2.5 py-1 text-[0.72rem] text-ink"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <div className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-primary">
              Post-course career services
            </div>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {d.services.map((s) => (
                <span
                  key={s}
                  className="rounded-lg border border-primary/25 bg-[color-mix(in_oklab,var(--primary)_7%,white)] px-2.5 py-1 text-[0.72rem] font-semibold text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-border bg-secondary/50 p-4 sm:p-5">
            <div className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-primary">
              Student placement feedback (reported)
            </div>
            <div className="mt-2.5 grid gap-3 sm:grid-cols-4">
              {[
                ["Previous background", d.feedback.from],
                ["Role secured", d.feedback.role],
                ["Company", d.feedback.company],
                ["Salary range", d.feedback.salary],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="text-[0.66rem] uppercase tracking-[0.08em] text-muted-foreground">
                    {k}
                  </div>
                  <div className="mt-0.5 text-[0.84rem] font-semibold leading-snug text-ink">{v}</div>
                </div>
              ))}
            </div>
            <p className="!mt-3 !mb-0 text-[0.78rem] italic leading-relaxed text-muted-foreground">
              {d.feedback.note}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
