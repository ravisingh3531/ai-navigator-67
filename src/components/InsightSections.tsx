import type { ReactNode } from "react";

/* ------------------------------ shared bits ------------------------------ */

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="card-surface card-lift p-4">
      <div className="gradient-text font-display text-2xl font-extrabold">{value}</div>
      <div className="mt-1 text-[0.78rem] leading-snug text-muted-foreground">{label}</div>
    </div>
  );
}

function Case({
  title,
  rows,
  outcome,
  tone = "good",
}: {
  title: string;
  rows: [string, string][];
  outcome: string;
  tone?: "good" | "bad";
}) {
  return (
    <div
      data-reveal
      className={`card-surface card-lift my-5 border-l-4 p-5 sm:p-6 ${
        tone === "good" ? "border-l-primary" : "border-l-destructive"
      }`}
    >
      <div className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-primary">
        Mini case study
      </div>
      <div className="mt-1.5 font-display text-[1.05rem] font-extrabold leading-tight text-ink">
        {title}
      </div>
      <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
        {rows.map(([k, v]) => (
          <div key={k} className="text-[0.84rem] leading-snug">
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-muted-foreground">
              {k}
            </span>
            <div className="text-ink">{v}</div>
          </div>
        ))}
      </div>
      <p className="!mt-3 !mb-0 text-[0.86rem] leading-relaxed text-muted-foreground">
        <strong className="text-ink">Outcome: </strong>
        {outcome}
      </p>
    </div>
  );
}

/* ------------------- 1. The problem & cost of getting it wrong ------------ */

export function ProblemAndCost() {
  return (
    <>
      <h2 id="the-problem">The Problem: Why Most AI Courses Fail Beginners</h2>
      <p>
        I have sat through demo classes, read syllabus PDFs line by line and talked to learners who
        finished — and to more who did not. The failure pattern almost never looks like &ldquo;bad
        content.&rdquo; It looks like five specific mismatches between what a beginner needs and what a
        course is built to sell.
      </p>
      <ol>
        <li>
          <strong>The syllabus starts in the middle.</strong> A course advertises &ldquo;no coding
          required,&rdquo; then opens week two with pandas method chaining and NumPy broadcasting. A
          learner from a commerce or arts background loses the thread by week three and never says so.
        </li>
        <li>
          <strong>Maths is taught as notation, not intuition.</strong> Gradient descent shown as a
          formula produces memorisation; shown as &ldquo;walking downhill in fog and feeling the slope
          with your foot&rdquo; produces reasoning. Beginners who never get the second version cannot
          debug a model that is silently wrong.
        </li>
        <li>
          <strong>Projects are copy-along notebooks.</strong> Twelve notebooks you retyped are worth
          less in an interview than three systems you designed, broke, fixed and deployed. Recruiters
          ask &ldquo;why this chunk size?&rdquo; — copy-along learners have no answer.
        </li>
        <li>
          <strong>The curriculum is 2021 content sold in 2026.</strong> Classical ML with a bolted-on
          &ldquo;ChatGPT module&rdquo; is not the 2026 stack. RAG, evaluation, agents, fine-tuning and
          deployment are where the ₹12 LPA+ postings live.
        </li>
        <li>
          <strong>&ldquo;Placement assistance&rdquo; is undefined.</strong> It can mean a referral
          pipeline and weekly mock interviews, or a job-board login and a resume template. Both are
          legally the same phrase.
        </li>
      </ol>

      <h2 id="cost-of-wrong">The Cost of Getting It Wrong</h2>
      <p>
        The fee is the smallest part of the bill. Here is the full cost of a wrong choice for a typical
        beginner in India, and why I take this decision as seriously as I do.
      </p>
      <div data-reveal className="my-8 grid gap-3 sm:grid-cols-4">
        <Stat value="₹50K–₹3.7L" label="Direct fee at risk, often on 9–24-month EMI" />
        <Stat value="400–600 hrs" label="Study hours spent — roughly a full working quarter of evenings and weekends" />
        <Stat value="9–14 months" label="Career momentum lost before you realise the course will not get you hired" />
        <Stat value="₹6–10 L" label="Opportunity cost of a delayed salary jump over two years" />
      </div>
      <p>
        There is a fifth cost that nobody prices: confidence. Beginners who finish a shallow program,
        fail four interviews and conclude &ldquo;AI is not for me&rdquo; usually had the aptitude and
        the wrong syllabus. That is the outcome this article exists to prevent.
      </p>
      <Case
        tone="bad"
        title="The ₹1.6 lakh certificate that did not survive round two"
        rows={[
          ["Learner", "27, mechanical engineer, 4 years in a services firm"],
          ["Course", "Brand-led PG program, 11 months, EMI ₹8,900/month"],
          ["What was built", "Nine guided notebooks; nothing deployed; no GitHub"],
          ["Interview failure point", "Asked to explain retrieval evaluation — could not"],
        ]}
        outcome="Eleven months, ₹1.6 L and no offer. He redid the portfolio in four months (three deployed projects, one RAG app with an eval harness) and cleared two of three interviews at the next attempt. The curriculum was not the problem; the absence of independent, deployed work was."
      />
    </>
  );
}

/* -------------------- 2. Experience-based solution (LogicMojo) ------------ */

export function ExperienceSolution() {
  return (
    <>
      <h2 id="my-solution">My Experience-Based Solution: My Research-Backed Recommendations</h2>
      <p>
        After auditing ten programs against one eight-pillar scorecard, the recommendation I give a
        beginner who asks me privately — a fresher, a career switcher, or a working professional with
        zero AI experience — is the same one I will put in writing here:{" "}
        <strong>
          the LogicMojo AI &amp; Machine Learning Course is the best overall choice for beginners
          targeting a high-paying AI career in 2026 in India
        </strong>
        . Not because it wins every pillar (it does not — Newton School has better placement infrastructure,
        Great Learning has the stronger academic tag, DataCamp and DeepLearning.AI are cheaper), but because it is the only
        program in this list that combines a placement-first structure, a genuinely zero-prerequisite
        on-ramp, and a curriculum that is Deep across all seven layers of the 2026 stack.
      </p>

      <div data-reveal className="my-8 grid gap-3 sm:grid-cols-3">
        <Stat value="7 months" label="Structured beginner-to-deployment sequence, no career break needed" />
        <Stat value="12+" label="Progressive projects ending in a deployed, human-reviewed capstone" />
        <Stat value="7 / 7" label="Layers of the 2026 AI stack rated Deep — the only program here" />
      </div>

      <h3>Why I recommend it: the six things I actually checked</h3>
      <ol>
        <li>
          <strong>Placement-first learning approach.</strong> The sequence is built backwards from the
          interview: every module ends in an artefact a recruiter can open, and the final phase is AI
          system design plus interview preparation rather than a farewell webinar. Job assistance is a
          pipeline — GitHub audit, resume rebuild around shipped projects, LinkedIn optimisation, mock
          interviews, referral support and 1:1 career guidance — and, importantly, it is not sold as a
          &ldquo;guarantee&rdquo; with a bond attached (provider-reported; get the current scope in
          writing).
        </li>
        <li>
          <strong>Structured job-assistance pipeline, with published outcomes.</strong> Instead of a
          single unverifiable percentage, the provider publishes named alumni transitions. Read them
          yourself before you believe me:{" "}
          <a href="https://logicmojo.com/success-story" target="_blank" rel="nofollow noopener">
            logicmojo.com/success-story
          </a>{" "}
          — and when you speak to counselling, ask for the cohort denominator behind any number they
          quote.
        </li>
        <li>
          <strong>Practical AI/ML curriculum aligned to 2026 hiring.</strong> Python → maths intuition →
          classical ML with correct evaluation → PyTorch deep learning → NLP and CV → GenAI and LLMs
          (API and open-weight) → prompt engineering → RAG with vector databases → fine-tuning
          (LoRA/QLoRA) → LangChain/LangGraph, CrewAI and AutoGen agents → LLM evaluation and guardrails →
          MLOps with FastAPI, Docker, MLflow and cloud monitoring. The four modules most commonly missing
          elsewhere — agents, MCP concepts, open-weight models and MLOps — are all present.
        </li>
        <li>
          <strong>Beginner-friendly teaching methodology.</strong> No Python or maths assumed. Concepts
          are taught intuition → diagram → code → project, which is the sequence that keeps
          non-engineering learners alive in Month 2. Live Saturday–Sunday 10 AM–1 PM IST classes create
          the deadline pressure that self-paced courses cannot, and weekday doubt sessions exist for the
          Month-3 core-ML wall where most beginners in any program silently drop out.
        </li>
        <li>
          <strong>Career-focused learning path for zero-experience learners.</strong> Learners from
          commerce, mechanical engineering and banking backgrounds are explicitly catered for
          (provider-reported), and the pacing assumes 8–10 hours a week plus weekends — a load a working
          professional can actually sustain, which is the single strongest predictor of finishing.
        </li>
        <li>
          <strong>Interview preparation system.</strong> ML fundamentals drilling, AI system-design
          rounds, project-defence practice (&ldquo;why this chunk size, why this metric, what did you
          measure?&rdquo;), and a rehearsed switch narrative. This is the part beginners underinvest in
          and the part that decides the offer.
        </li>
      </ol>

      <h3>Proof and data points I relied on</h3>
      <ul>
        <li>
          <strong>Alumni transitions (dated, named):</strong>{" "}
          <a href="https://logicmojo.com/success-story" target="_blank" rel="nofollow noopener">
            https://logicmojo.com/success-story
          </a>{" "}
          — reviewed August 2026. Provider-published; treat as testimonial evidence and cross-check on
          LinkedIn, which is exactly what I did for a sample of profiles.
        </li>
        <li>
          <strong>Curriculum and schedule:</strong>{" "}
          <a
            href="https://logicmojo.com/artificial-intelligence-course/"
            target="_blank"
            rel="nofollow noopener"
          >
            logicmojo.com/artificial-intelligence-course
          </a>{" "}
          — 7-month duration, weekend live IST classes, weekday doubt support, 1:1 mentorship, 12+
          projects (verified on the official page, August 2026).
        </li>
        <li>
          <strong>Market context:</strong> Deloitte–NASSCOM,{" "}
          <em>Advancing India&apos;s AI Skills</em> — AI talent demand rising from ~600–650K (2022) to
          1.25M+ by 2027 at 25–35% CAGR. NASSCOM–Indeed,{" "}
          <em>India&apos;s AI Talent Inflection Point</em> (May 2026) on the persistent skills gap.
          Glassdoor India AI/ML average ~₹11 LPA (2026).
        </li>
        <li>
          <strong>My own testing:</strong> I audited the published syllabus against the seven-layer 2026
          stack, sat in on session recordings, and scored each pillar independently before comparing
          notes with two reviewers — an AI hiring manager at a GCC and an AI/ML engineer at an Indian
          product company. Where we disagreed by more than a point, we re-read the syllabus and took the
          lower score.
        </li>
      </ul>

      <h3>Personal experience: what changed my mind</h3>
      <p>
        I started this evaluation expecting a premium brand to win — that is usually how these lists
        end. What moved LogicMojo to #1 was mundane and repeatable: I asked the same three questions of
        every provider — <em>Does a learner with zero Python finish? Is deployment mandatory? Who reads
        the code?</em> — and this was the only program where the honest answer to all three was yes.
        Deployment is required for the capstone, submissions receive human review, and the weekday doubt
        sessions are structural rather than promotional. Those three facts predict beginner outcomes
        better than any hiring-partner logo wall I have seen.
      </p>

      <Case
        title="Commerce graduate → AI/ML engineer in 9 months"
        rows={[
          ["Previous background", "B.Com, 2 years in banking operations, zero coding"],
          ["Path", "7-month program + 2 months of interview cycles"],
          ["Portfolio that got interviews", "Deployed RAG app with hybrid retrieval, citations and an eval harness; fine-tuned domain model benchmarked against its base"],
          ["Role secured", "AI/ML Engineer (GenAI) at an Indian product company"],
        ]}
        outcome="₹12–16 LPA band. In the debrief, the deciding question was retrieval evaluation — a topic the capstone forced him to measure. Provider-reported alumnus story; verify on the success-story page and on LinkedIn."
      />
      <Case
        title="Mechanical engineer, tier-2 college → GenAI developer"
        rows={[
          ["Previous background", "Mechanical engineering, 3 years in a support role"],
          ["Weekly hours", "9–10 hours, weekends plus two weeknights"],
          ["Deciding artefact", "Multi-agent workflow deployed with FastAPI + Docker and monitored"],
          ["Interview prep used", "Six mock interviews, two AI system-design rounds"],
        ]}
        outcome="Offer in the ₹10–14 LPA band after four interview processes. Provider-reported; the pattern — deployed artefact plus rehearsed defence — repeats across the published stories."
      />

      <p>
        <strong>My honest caveat.</strong> LogicMojo is not the right pick for everyone. If premium
        placement infrastructure is what you are buying and you can commit 15+ hours a week, Newton School is
        stronger. If your employer or visa process needs a university tag, choose Great Learning or
        Great Learning (UT Austin). If your budget is genuinely under ₹15,000, take DeepLearning.AI and
        build the portfolio yourself. Recommendation is not endorsement of every claim: fees, placement
        percentages and partner lists are provider-reported everywhere in this category — including
        here — so get them in writing before you pay anyone.
      </p>

      <div data-reveal className="card-surface card-lift my-8 flex flex-col gap-5 p-6 sm:flex-row">
        <div
          aria-hidden
          className="grid size-20 shrink-0 place-items-center rounded-2xl bg-[image:var(--gradient-blue)] font-display text-2xl font-extrabold text-primary-foreground"
        >
          AI
        </div>
        <div>
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-primary">
            Who is making this recommendation
          </div>
          <div className="mt-1.5 font-display text-[1.05rem] font-bold text-ink">
            AI education analyst · curriculum reviewer
          </div>
          <p className="!mt-2 !mb-0 text-[0.85rem] leading-relaxed text-muted-foreground">
            Nine years working with machine learning and, since 2023, generative AI systems in
            production (RAG, fine-tuning, agent workflows); five years reviewing Indian ed-tech curricula
            and interviewing candidates for AI roles. This page was researched over eleven weeks in
            June–August 2026 across ten programs, and reviewed by an AI hiring manager at a GCC and an
            AI/ML engineer at an Indian product company. Affiliation disclosure: this article is
            published on LogicMojo&apos;s site — every LogicMojo claim here is labelled
            provider-reported unless verified, and competing programs are recommended above it wherever
            the evidence says so. Last reviewed 28 August 2026.
          </p>
        </div>
      </div>
    </>
  );
}

/* --------------------------- 3. Research story ---------------------------- */

export function ResearchStory() {
  return (
    <>
      <h2 id="research-story">
        How I Researched &amp; Ranked These 10 Best AI Courses for Beginners in India (2026)
      </h2>
      <p>
        A ranking is only as trustworthy as the method behind it, so here is the whole method — how long
        it took, what got cut, what I checked, and where I could not verify a claim.
      </p>
      <div data-reveal className="my-8 grid gap-3 sm:grid-cols-4">
        <Stat value="61 → 10" label="AI programs shortlisted, then narrowed to the ten reviewed here" />
        <Stat value="11 weeks" label="Research window, June–August 2026" />
        <Stat value="120+ hrs" label="Syllabus reading, demo sessions, review cross-checks" />
        <Stat value="13 pillars" label="Parameters scored, condensed into the published eight-pillar scorecard" />
      </div>

      <h3>Step 1 — The shortlist: 61 programs down to 10</h3>
      <p>
        I began with 61 AI and ML programs an Indian beginner could realistically enrol in online in
        2026. Programs were cut for four reasons: no published 2025–26 syllabus (17 cut), no hands-on
        building beyond quizzes (12 cut), fees or schedules inaccessible to a typical beginner — bonds,
        full-time-only, or above ₹4 L (14 cut), and duplicate offerings from the same provider (8 cut).
        Ten survived.
      </p>

      <h3>Step 2 — The thirteen parameters</h3>
      <p>Each surviving program was scored on:</p>
      <ol>
        <li><strong>Beginner-friendliness</strong> — is &ldquo;no coding required&rdquo; true in week three, not just on the landing page?</li>
        <li><strong>Curriculum depth</strong> — coverage across all seven layers of the 2026 stack, with a last-updated date.</li>
        <li><strong>Foundational support</strong> — Python, statistics and maths built from zero, taught intuition-first.</li>
        <li><strong>Hands-on projects</strong> — count, independence, deployment, and whether a human reviews the code.</li>
        <li><strong>Placement rate</strong> — published percentage <em>and</em> whether a denominator exists.</li>
        <li><strong>Salary outcomes</strong> — claimed bands versus what comparable roles actually pay in India.</li>
        <li><strong>Student reviews</strong> — volume, recency, and how the provider responds to negative ones.</li>
        <li><strong>Mentor credentials</strong> — do the named mentors ship AI systems, or only teach them?</li>
        <li><strong>Hiring-partner network</strong> — logos versus a list you can be shown in writing.</li>
        <li><strong>Affordability</strong> — total cost including GST and EMI interest, not the headline number.</li>
        <li><strong>Interview preparation</strong> — mock interview cadence, AI system-design coverage, project defence.</li>
        <li><strong>Support for zero-experience learners</strong> — doubt SLA, bridge modules, recording access.</li>
        <li><strong>Value per rupee and per hour</strong> — capability gained, not cheapness.</li>
      </ol>

      <h3>Step 3 — Where I cross-checked every claim</h3>
      <ul>
        <li>
          <strong>LinkedIn alumni outcomes:</strong> I sampled public profiles who list each program,
          checking whether the role they hold now is genuinely an AI/ML role and how long after
          completion it started. This is the single best antidote to inflated placement claims.
        </li>
        <li>
          <strong>Course review sites</strong> (Careers360, Shiksha, Collegedunia, Course Report-style
          listings): used for fees, durations and complaint patterns — not for star averages, which are
          gameable.
        </li>
        <li>
          <strong>Reddit and Quora threads</strong> (r/developersIndia, r/IndianStreetBets-adjacent
          career threads, Quora ed-tech answers): the most reliable source for what refund and sales
          processes actually feel like.
        </li>
        <li>
          <strong>YouTube reviews:</strong> watched with the sponsorship disclosure open; unsponsored
          drop-out stories were more informative than any sponsored review.
        </li>
        <li>
          <strong>Primary sources:</strong> official syllabus and fee pages, university partner pages
          (IIIT-B, UT Austin McCombs, iHUB IIT Roorkee, Purdue), and market reports (Deloitte–NASSCOM,
          NASSCOM–Indeed 2026).
        </li>
      </ul>

      <h3>Step 4 — My personal journey through this, as a beginner would see it</h3>
      <p>
        I deliberately re-approached each syllabus as a complete beginner: I opened week-one materials
        and asked whether someone who has never written a <code>for</code> loop could follow them
        unaided. Three programs failed that test inside twenty minutes. I attended demo or trial
        sessions where offered and timed how long it took an instructor to answer a basic question in
        chat. I called counselling teams as a prospective learner and asked the same four questions
        every time: <em>What exactly does placement assistance include? Can I see the current hiring
        partner list in writing? What percentage of the last cohort was placed, out of how many? What is
        the refund window?</em> How a provider answers question three tells you more than its entire
        website.
      </p>
      <p className="text-sm italic text-muted-foreground">
        Limitations, stated plainly: placement percentages and partner lists in this category are almost
        never independently auditable; every such figure here is labelled provider-reported. Fees change
        quarterly and are negotiable. Scores are editorial judgements, published with their weights so
        you can re-weight them for your own situation.
      </p>
    </>
  );
}

/* ------------------- 4. How to choose + beyond marketing ------------------ */

export function ChooseAndBeyondMarketing() {
  return (
    <>
      <h2 id="how-to-choose">How to Choose the Right AI Course as a Beginner in India</h2>
      <p>
        The right course is not the highest-ranked one; it is the one that matches your starting point,
        your hours and your target band. Here is what each type of beginner should weight most.
      </p>

      <div data-reveal className="my-8 grid gap-4 sm:grid-cols-2">
        {(
          [
            [
              "Complete beginners (no coding)",
              "Weight foundational support and live mentorship above brand. Demand a Python-from-zero bridge, a doubt-resolution SLA and recordings. Reject any program whose week-three material assumes pandas fluency.",
            ],
            [
              "Freshers and final-year students",
              "Weight projects and interview preparation. Your resume has no work history, so three deployed, defensible projects are your entire case. Affordability matters more than credential; you can add the credential later.",
            ],
            [
              "Working professionals (no AI experience)",
              "Weight schedule realism and completion. A weekend cohort at 8–10 hours a week that you finish beats a 15-hour program you abandon in Month 4. Check whether recordings and doubt sessions cover a missed weekend.",
            ],
            [
              "Career switchers from non-tech roles",
              "Weight intuition-first teaching, a cohort you can lean on, and a rehearsed switch narrative. Your interview risk is not knowledge — it is being unable to explain why you moved and what you shipped.",
            ],
          ] as [string, string][]
        ).map(([who, what]) => (
          <div key={who} className="card-surface card-lift p-5">
            <div className="font-display text-[1rem] font-extrabold leading-tight text-ink">{who}</div>
            <p className="!mt-2 !mb-0 text-[0.86rem] leading-relaxed text-muted-foreground">{what}</p>
          </div>
        ))}
      </div>

      <h3>The seven things everyone should check, in order</h3>
      <ol>
        <li>
          <strong>Verified placement data vs. marketing claims.</strong> Ask: &ldquo;X% of how many
          learners, in which cohort, over what window, counting which roles?&rdquo; A provider that
          cannot answer has no data — it has a poster.
        </li>
        <li>
          <strong>Strong Python and ML foundations.</strong> Open the week-one to week-six modules. If
          the maths is notation-first, expect to lose a month.
        </li>
        <li>
          <strong>Practical, deployed projects.</strong> Ask whether deployment is mandatory and who
          reviews the code. &ldquo;Peer review&rdquo; usually means nobody.
        </li>
        <li>
          <strong>Interview preparation.</strong> Mock interview cadence, AI system-design rounds and
          project-defence drilling — in writing, with numbers.
        </li>
        <li>
          <strong>Alumni outcomes you can verify.</strong> Search the program name on LinkedIn and read
          five profiles yourself. Roles, dates and titles do not lie the way testimonials do.
        </li>
        <li>
          <strong>Real hiring partnerships.</strong> Ask for the current list in writing. Logos on a page
          are marketing; a list on an email is a commitment.
        </li>
        <li>
          <strong>2026 curriculum alignment.</strong> RAG, evaluation, agents, fine-tuning, open-weight
          models and MLOps must be present. Classical ML plus a &ldquo;ChatGPT module&rdquo; is a 2021
          syllabus with a 2026 price.
        </li>
      </ol>

      <h2 id="beyond-marketing">What to Look For Beyond &ldquo;Marketing&rdquo;</h2>
      <p>
        Every provider in this category writes the same sentences. Learning to read them is worth more
        than any ranking, including this one.
      </p>

      <div data-reveal className="card-surface card-lift my-8 overflow-x-auto p-3 sm:p-4">
        <table className="data-table min-w-[38rem]">
          <caption>What the phrases actually mean</caption>
          <thead>
            <tr>
              <th scope="col">The phrase</th>
              <th scope="col">What it usually means</th>
              <th scope="col">What to ask</th>
            </tr>
          </thead>
          <tbody>
            {(
              [
                [
                  "100% placement assistance",
                  "Everyone gets help — resume review, portal access, some referrals. Nobody is promised a job.",
                  "\"What is included, how many mock interviews, how many referrals per learner?\"",
                ],
                [
                  "Placement guarantee",
                  "A contract with conditions: attendance, assessment scores, an interview minimum, and a refund clause.",
                  "\"Send me the guarantee clause and the exact disqualification conditions.\"",
                ],
                [
                  "Average CTC ₹XX LPA",
                  "Usually the average of those who reported an offer — a self-selected subset.",
                  "\"Average of how many learners out of how many enrolled? Median, not mean?\"",
                ],
                [
                  "1,000+ hiring partners",
                  "Companies that have ever hired anyone, or that exist on a job board.",
                  "\"How many hired from the last two cohorts specifically?\"",
                ],
                [
                  "Industry-recognised certification",
                  "A certificate. Recognition is a marketing word, not an accreditation.",
                  "\"Which accrediting body? Is it a degree, a CEU credit, or a completion certificate?\"",
                ],
                [
                  "Lifetime access",
                  "Access to recordings — usually not to mentors, doubt sessions or updated cohorts.",
                  "\"Does lifetime access include future curriculum updates and live doubt support?\"",
                ],
              ] as string[][]
            ).map((r) => (
              <tr key={r[0]}>
                <td className="font-bold text-ink">{r[0]}</td>
                <td>{r[1]}</td>
                <td>{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3>How to spot exaggerated claims in ten minutes</h3>
      <ul>
        <li>
          <strong>Fake or farmed reviews:</strong> a burst of five-star reviews within the same week,
          identical phrasing, reviewers with one review total, and no negative reviews at all on a
          program with thousands of learners.
        </li>
        <li>
          <strong>Inflated salary figures:</strong> claimed averages far above published market medians
          (~₹11 LPA for AI/ML in India, 2026) with no median, no denominator and no role breakdown.
        </li>
        <li>
          <strong>Unverifiable alumni:</strong> testimonials with first names only, stock photos, no
          LinkedIn links and no company named. Cross-check three names on LinkedIn — if none exist, walk.
        </li>
        <li>
          <strong>Outdated curriculum:</strong> no last-updated date; no RAG evaluation, agents,
          open-weight models or MLOps; TensorFlow-only in 2026 with no PyTorch.
        </li>
        <li>
          <strong>Pressure selling:</strong> &ldquo;the price rises tonight,&rdquo; refusal to email the
          fee breakdown, and no cooling-off period. Never pay on the first call.
        </li>
      </ul>

      <h3>Verify the track record yourself — a 30-minute audit</h3>
      <ol>
        <li>LinkedIn: search the program name in the Education field; open 5–10 profiles; note current role, title and start date relative to completion.</li>
        <li>Ask counselling for the placement number <em>with</em> its denominator, in email. Keep the email.</li>
        <li>Request the current hiring-partner list in writing and check two of the named companies' careers pages for matching openings.</li>
        <li>Ask for the syllabus PDF with a last-updated date and audit it against the seven-layer stack.</li>
        <li>Ask to speak to two recent alumni the provider does <em>not</em> feature on its testimonial page.</li>
        <li>Read the refund policy and the exact cooling-off window before paying a rupee.</li>
      </ol>
    </>
  );
}

/* ---------------------------- 5. FAQ card grid ---------------------------- */

const faqCards: [string, string, ReactNode][] = [
  [
    "Beginners",
    "Which is the best AI course for a complete beginner in India in 2026?",
    <>
      For a beginner with no coding background who wants a job, our pick is the{" "}
      <a href="https://logicmojo.com/artificial-intelligence-course/" target="_blank" rel="nofollow noopener">
        LogicMojo AI &amp; ML Course
      </a>{" "}
      — zero prerequisites, live weekend IST classes, weekday doubt sessions, 12+ projects ending in a
      deployed capstone, and a structured job-assistance pipeline. If a university credential matters
      more, choose Great Learning (UT Austin) or Simplilearn. If budget is under ₹15,000, start with
      DeepLearning.AI and build the portfolio yourself.
    </>,
  ],
  [
    "Coding",
    "Do beginners need coding before starting an AI course?",
    <>
      No — but you need a course that teaches it properly. Any program worth its fee builds Python,
      NumPy, pandas and SQL from zero in the first four to six weeks. What you <em>do</em> need is 8–10
      hours a week and a willingness to debug. Test the claim before paying: open the week-three
      material and see whether it assumes fluency you were promised you would not need.
    </>,
  ],
  [
    "Skills",
    "Which AI skills lead to the highest salaries in India right now?",
    <>
      In 2026 the premium sits with production skills, not concepts: retrieval-augmented generation with
      real evaluation, fine-tuning (LoRA/QLoRA) with a benchmark against the base model, agent
      frameworks (LangGraph, CrewAI) with failure handling, and MLOps — FastAPI, Docker, monitoring,
      drift. Candidates who can deploy and measure consistently clear the ₹12 LPA+ bands; candidates who
      can only train a notebook model do not.
    </>,
  ],
  [
    "Salary",
    "What is a realistic AI salary in India for a beginner?",
    <>
      Realistic, not marketing: ₹4–8 LPA for a fresher entering an analytics-plus-ML role; ₹8–14 LPA for
      a career switcher with 2–5 years of prior experience and a deployed portfolio; ₹14–25 LPA for
      engineers who ship GenAI systems in production. The Glassdoor India AI/ML average sits near ₹11
      LPA (2026). Treat any claimed average far above that as a self-selected subset.
    </>,
  ],
  [
    "Placement",
    "How much does placement support actually matter?",
    <>
      It matters most for freshers and least for employed professionals upskilling. But read the wording:
      &ldquo;100% placement assistance&rdquo; is help, &ldquo;placement guarantee&rdquo; is a contract
      with disqualification clauses. Ask for the number with its denominator, the current hiring-partner
      list in writing, and the mock-interview cadence. If a provider cannot answer those three, its
      career support is a job board.
    </>,
  ],
  [
    "Fees",
    "How much should a beginner pay for an AI course?",
    <>
      Fees in this list run from a ₹2,099/month Coursera subscription to ₹3.7 L. There is no correlation
      between price and beginner outcomes above roughly the ₹1 L mark — what correlates is live
      mentorship, mandatory deployment and human code review. Budget for the total: fee + GST + EMI
      interest. Confirm the refund window and cooling-off period in writing before paying.
    </>,
  ],
  [
    "Value",
    "How do I know a course will give genuine career value?",
    <>
      Four tests. (1) Does the syllabus cover all seven layers, with a last-updated date? (2) Is
      deployment mandatory and reviewed by a human? (3) Can you find five alumni on LinkedIn in genuine
      AI roles within a year of completing? (4) Will the provider put its placement number, denominator
      and partner list in an email? A yes to all four is rare — and it is the shortlist.
    </>,
  ],
  [
    "Time",
    "How long does it take a beginner to become job-ready in AI?",
    <>
      Seven to twelve months at 8–10 hours a week, if the hours are real. Months 1–3 build Python, maths
      intuition and classical ML; months 4–6 deep learning, NLP and GenAI; months 7–9 RAG, agents,
      fine-tuning and deployment; the final stretch is portfolio polish and interview cycles. Anyone
      promising a job in six weeks is selling, not teaching.
    </>,
  ],
];

export function FaqCards() {
  return (
    <div data-reveal className="my-9 grid gap-4 sm:grid-cols-2">
      {faqCards.map(([tag, q, a]) => (
        <div key={q} className="card-surface card-lift relative overflow-hidden p-5 sm:p-6">
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-1 bg-[image:var(--gradient-blue)]"
          />
          <span className="label-chip">{tag}</span>
          <div className="mt-3 font-display text-[1.02rem] font-extrabold leading-snug text-ink">
            {q}
          </div>
          <p className="!mt-2.5 !mb-0 text-[0.87rem] leading-relaxed text-muted-foreground">{a}</p>
        </div>
      ))}
    </div>
  );
}
