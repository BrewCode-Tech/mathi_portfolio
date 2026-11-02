// Single source of truth for the site and the /resume page.
// Numbers marked TODO(metric) are waiting on real figures — never invent them.

export const site = {
  url: 'https://mathi1322.github.io',
  title: 'Mathivanan S — Lead Full Stack Engineer, AI/LLM',
  description:
    'Lead Full Stack Engineer with 5.5 years shipping SaaS and LLM-powered products for US clients. React, TypeScript, Python, Rails, PostgreSQL, OpenAI and Claude.',
};

export const person = {
  name: 'Mathivanan S',
  shortName: 'Mathi',
  headline: 'Lead Full Stack Engineer · AI/LLM Products',
  location: 'Coimbatore, India',
  availability: 'Open to remote · Immediate joiner',
  email: 'mathiks1322@gmail.com',
  phone: '+91 96299 96453',
  links: {
    linkedin: 'https://www.linkedin.com/in/mathi-s/',
    github: 'https://github.com/mathi1322',
    proof: 'https://proof.zeromaintenanceengineer.in/mathi1322',
  },
  pitch:
    'I build LLM features that survive production — the prompt, the fallback, the validation, the queue behind it, and the UI on top.',
  summary: [
    '5.5 years building SaaS and AI products for US clients, promoted from QA to Lead at one company.',
    'Ships production LLM features: AI outreach email at 1,000–1,500 sends a day, document extraction with multi-model fallback, and natural-language querying over business data.',
    'Most recently led a team of 4 engineers as the technical bridge between US stakeholders and the India team.',
  ],
};

export const highlights = [
  { value: '5.5 yrs', label: 'shipping for US clients' },
  { value: '4×', label: 'promoted, QA → Lead' },
  { value: '4', label: 'engineers led' },
  { value: '40%+', label: 'faster dashboards via SQL tuning' },
];

// Client names stay private: they are Drylogic's clients, so products are described, not named.
export type Engagement = {
  product?: string;
  stack?: string;
  bullets: string[];
};

export type Role = {
  title: string;
  dates: string;
  engagements: Engagement[];
};

export const company = {
  name: 'Drylogic Solutions',
  place: 'Coimbatore',
  dates: 'Feb 2021 – Jul 2026',
};

export const roles: Role[] = [
  {
    title: 'Lead Full Stack Developer',
    dates: 'Jan 2026 – Jul 2026',
    engagements: [
      {
        product: 'A bid management platform where agencies and vendors track bids (US client)',
        stack: 'Kafka, Stytch, OpenAI',
        bullets: [
          'Project anchor leading 4 engineers (3 senior developers and 1 lead automation engineer), reporting to the project manager and acting as the technical link between the US and India teams.',
          'Researched each new area before the team started (ERP data flows, Kafka, Stytch auth), turned it into a technical plan, and split the work across the team, owning sprint planning and releases so delivery stayed on schedule.',
          'Integrated 4 ERP partners with the platform, both inbound and outbound, through secure APIs and Kafka-based event-driven messaging.',
          'Led the migration of AI services from the OpenAI Assistants API to the Responses API, simplifying the code and reducing operational overhead.',
          'Set engineering standards for code review, testing, performance and security, and onboarded and mentored new engineers.',
        ],
      },
      {
        product: 'Internal BI platform (mentor and contributor)',
        bullets: [
          'Worked on the RAG and natural-language query flow that lets users upload CSV or Excel data and ask questions about it in plain English.',
        ],
      },
    ],
  },
  {
    title: 'Senior Full Stack Engineer',
    dates: 'Jan 2025 – Dec 2025',
    engagements: [
      {
        product: 'An AI-powered sales outreach platform (US client)',
        stack: 'React, TypeScript, Python, FastAPI, PostgreSQL',
        bullets: [
          'Built personalized AI email generation with ChatGPT and Perplexity, sending 1,000–1,500 outreach emails a day for 4 customer accounts across ~40 mailboxes.',
          'Designed the send scheduler: caps each mailbox at 50 emails a day to stay out of spam, honors each customer’s send days and follow-up gaps, and cancels a lead’s follow-up as soon as they reply.',
          'Built the background job system for continuous campaign delivery and a campaign analytics page (sent, remaining, replies), and integrated Stripe payments and EmailEngine.',
        ],
      },
      {
        product: 'A business discovery and review platform (US client)',
        stack: 'Next.js, Supabase, React Native (Expo), AWS Amplify',
        bullets: [
          'Built the web platform end to end: location search over Google Places, business listings, user reviews, save and share, and meeting scheduling.',
          'Designed a database-first cache for Google Places results with a 30-day TTL and a cleanup job (per Google Maps terms), cutting Maps API calls by an estimated 30–40% on repeat searches.',
          'Built the React Native companion app for events, messaging, friend connections and live location sharing.',
        ],
      },
    ],
  },
  {
    title: 'Full Stack Engineer',
    dates: 'Apr 2022 – Dec 2024',
    engagements: [
      {
        product: 'A premium social media analytics platform (US client)',
        stack: 'React, TypeScript, Ruby on Rails, PostgreSQL, Mixpanel',
        bullets: [
          'Built data visualization features for global brands: follower demographics dashboards, a virtualized data table and a tag manager for categorizing brand posts and videos.',
          'Optimized PostgreSQL queries, making data visualizations load over 40% faster.',
          'Moved legacy code to a new architecture in Ruby on Rails, adding new models and fixing production bugs.',
          'Built REST APIs and integrated external social data providers, working test-first.',
        ],
      },
    ],
  },
  {
    title: 'QA Engineer, manual & automation',
    dates: 'May 2021 – Mar 2022',
    engagements: [
      {
        product: 'A premium social media analytics platform (US client)',
        stack: 'Ruby, Capybara, Selenium, Jenkins',
        bullets: [
          'Ran manual and automated testing with Ruby, Capybara and Selenium in Jenkins CI.',
          'Took the initiative to build reusable helper functions for most pages, which the team used to automate those pages’ components, cutting test-writing time by about 30%.',
        ],
      },
    ],
  },
  {
    title: 'Trainee',
    dates: 'Feb 2021 – Apr 2021',
    engagements: [{ bullets: [] }],
  },
];

export const education = [
  { degree: 'M.Sc. Mathematics', school: 'Bharathiar University, Coimbatore', dates: '2016 – 2018', note: 'First class' },
  { degree: 'B.Sc. Mathematics', school: 'Government Arts College, Coimbatore', dates: '2013 – 2016', note: 'First class with distinction' },
];

// Every skill here is backed by a bullet or project above — keep it that way.
export const skills: { group: string; items: string[] }[] = [
  {
    group: 'AI & LLMs',
    items: ['OpenAI Responses & Assistants APIs', 'Anthropic Claude', 'Perplexity', 'RAG & natural-language querying', 'Multi-model fallback', 'Tesseract & OpenCV'],
  },
  {
    group: 'Frontend',
    items: ['TypeScript', 'React', 'Next.js', 'React Native (Expo)'],
  },
  {
    group: 'Backend',
    items: ['Python', 'FastAPI', 'Ruby on Rails', 'REST APIs', 'Kafka', 'Background jobs'],
  },
  {
    group: 'Data & cloud',
    items: ['PostgreSQL', 'Supabase', 'AWS Amplify', 'Docker'],
  },
  {
    group: 'Testing & CI',
    items: ['TDD', 'pytest', 'Vitest', 'Capybara & Selenium', 'Jenkins', 'GitHub Actions'],
  },
];

export type Project = {
  slug: string;
  name: string;
  kind: 'Own project' | 'Client work';
  tagline: string;
  /** Resume line 1: what it does for the user, in plain words. */
  summary?: string;
  /** Resume line 2: how it is built, in one sentence. */
  how?: string;
  stack?: string[];
  repo?: string;
  live?: string;
  repoNote?: string;
  problem: string;
  role: string;
  flow: { label: string; detail: string; tone?: 'ai' | 'guard' | 'human' }[];
  decisions?: { title: string; body: string }[];
  results?: string[];
  /** Screenshots under public/shots/, taken from sample data only. */
  shots?: { src: string; alt: string; caption: string; width: number; height: number }[];
  /** Set false to keep a project on the portfolio but off the resume. */
  onResume?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'ocr-billing',
    name: 'OCR Billing App',
    kind: 'Own project',
    tagline: 'Invoice extraction where a cheap model goes first and a second model is called only when a deterministic check says the answer is weak.',
    summary:
      'Upload a bill as a PDF, phone photo or Word file and get its details back as clean, structured data: vendor, dates, line items, taxes and totals.',
    how:
      'OpenAI extracts first; a rule-based validator (money totals, dates, Indian GST checks) scores the result and calls Claude only below the threshold; 140+ tests, 98% backend coverage.',
    stack: ['Next.js 15', 'React 19', 'FastAPI', 'Supabase', 'OpenAI', 'Claude', 'Docker'],
    repoNote: 'Private repo — walkthrough available on request',
    problem:
      'Bills arrive as PDFs, phone photos and Word files with no shared layout. Template-based OCR breaks on every new vendor, and sending every bill to the most capable model is slow and expensive. Indian bills add GST rules that a generic extractor knows nothing about.',
    role: 'Solo build: architecture, extraction pipeline, validation scoring, database security, review UI, tests and CI.',
    flow: [
      { label: 'Upload', detail: 'PDF, photo or Word (converted via LibreOffice/Poppler); a content hash blocks duplicates' },
      { label: 'Extract', detail: 'OpenAI vision model returns structured bill JSON', tone: 'ai' },
      { label: 'Validate', detail: 'Money totals, date sanity and GST rules → a score from 0 to 1', tone: 'guard' },
      { label: 'Fallback', detail: 'Score below 0.5 → Claude re-extracts; the higher score wins', tone: 'ai' },
      { label: 'Review', detail: 'Flagged fields highlighted; every edit is re-validated and audited', tone: 'human' },
    ],
    decisions: [
      {
        title: 'Validate with code, not with another LLM',
        body: 'The score starts at 1.0. Each hard error (line items don’t sum to the subtotal, the total doesn’t match subtotal + tax − discount + round-off, a missing invoice number, a future date) costs 0.3; each soft flag costs 0.05. Below 0.5, Claude is called. It is cheap, explainable and cannot hallucinate.',
      },
      {
        title: 'GST rules that catch OCR misreads',
        body: 'GSTINs are checked against their built-in check character (a mod-36 Luhn variant), which catches most single-character misreads. CGST must equal SGST, and IGST vs CGST + SGST must match whether vendor and buyer are in the same state. These raise flags rather than errors, so a misread ID never triggers a paid fallback on its own.',
      },
      {
        title: 'Not locked to one AI provider',
        body: 'The primary extractor speaks the OpenAI API, so it can point at Gemini, Groq, OpenRouter or a local Ollama model, and Claude is optional. Every attempt’s model, latency and token counts are stored, so cost and quality can be compared per provider.',
      },
      {
        title: 'Row-level security and an audit trail',
        body: 'Postgres RLS and private storage keep each user’s bills unreachable from another session. When a user corrects a field, the original AI output is kept and the change is written to an audit log.',
      },
    ],
    results: [
      '140+ automated tests; 98% backend coverage, with CI enforcing at least 90%',
      'Handles both tax-exclusive bills and tax-inclusive Indian GST / MRP bills',
      'Runs on paid, free-tier or fully local models',
      'CSV and Excel export; Dockerized backend running as non-root',
    ],
    shots: [
      { src: 'shots/ocr-detail.jpg', alt: 'Bill detail: the original sample invoice on the left, extracted vendor, line items, GST and totals on the right, confidence 90% and a flag on the vendor tax ID', caption: 'A sample bill beside its extracted data. The validator scored it 90% and flagged the made-up GSTIN, whose check character doesn’t match.', width: 1600, height: 1384 },
      { src: 'shots/ocr-dashboard.jpg', alt: 'Dashboard showing total spend in INR with a USD toggle, total bills and top vendor', caption: 'Dashboard: total spend (INR or USD), bill count and top vendor.', width: 1600, height: 418 },
      { src: 'shots/ocr-mobile.jpg', alt: 'Three phone screens: dashboard, bills list with CSV and Excel export, and the upload sheet that accepts photos from the camera', caption: 'On mobile: dashboard, bills list with export, and camera-friendly upload. Customer names and invoice numbers are redacted.', width: 1568, height: 1020 },
    ],
  },
  {
    slug: 'citecheck',
    name: 'CiteCheck',
    kind: 'Own project',
    tagline: 'Shows whether your website gets cited when people ask AI assistants about what you sell — and what to fix if it doesn’t.',
    summary:
      'Shows a business whether AI assistants cite its website when buyers ask about what it sells, and gives a ranked list of fixes.',
    how:
      'Asks an AI search engine real buyer questions, records the cited sites, checks whether AI crawlers can read the site, and compares it with the pages that won.',
    stack: ['Python', 'FastAPI', 'Tavily', 'Groq', 'Gemini'],
    live: 'https://citecheck-ysjl.onrender.com/',
    problem:
      'Buyers increasingly ask an AI assistant instead of scrolling search results. A business has no easy way to see whether those answers cite its site, which competitors get cited instead, or why.',
    role: 'Solo build: product idea, backend, AI search integration, scoring and the recommendations engine.',
    flow: [
      { label: 'Ask', detail: '10–20 buyer questions (written from your homepage, or your own) go to an AI search engine', tone: 'ai' },
      { label: 'Record', detail: 'Capture the cited sources, and the search results the AI read' },
      { label: 'AI memory', detail: 'Does a model name you with no web search at all?', tone: 'ai' },
      { label: 'Crawl check', detail: 'robots.txt AI crawlers, noindex, canonical, JS-only pages, sitemap', tone: 'guard' },
      { label: 'Compare', detail: 'Cited pages vs your closest page: direct answer, depth, headings, freshness' },
      { label: 'Fix list', detail: 'Ranked high / medium / off-site / low, each with its evidence', tone: 'human' },
    ],
    decisions: [
      {
        title: '“Not found” and “not chosen” are different problems',
        body: 'The report separates questions where your site never appeared in the search results the AI read (an SEO problem) from ones where it appeared but wasn’t cited (a content problem). Each needs a different fix.',
      },
      {
        title: 'Be honest about what is certain',
        body: 'Technical checks are pass/fail: a page AI crawlers can’t read can’t be cited. Content comparisons are shown as patterns in pages that did get cited, not as ranking factors, and answers that vary run to run are labelled as noise.',
      },
      {
        title: 'Runs on free tiers',
        body: 'The default engine is Tavily search plus a free Groq model, the same search-then-cite design as AI search products. Gemini with Google Search grounding is optional, a demo mode needs no keys, and paste mode checks real ChatGPT or Perplexity answers.',
      },
    ],
    results: ['Live and publicly usable, no login', 'Quick check in about 10 seconds; full report with share of voice per domain', 'Before/after comparison to see whether changes worked'],
    shots: [
      { src: 'shots/citecheck-report.jpg', alt: 'CiteCheck report: visibility score 50/100, 5 of 10 questions cited, 11 fixes found, with the top high-priority fixes listed', caption: 'The report summary and the first ranked fixes (example report).', width: 1600, height: 1127 },
      { src: 'shots/citecheck-cited.jpg', alt: 'Table of which sites AI engines cite, with share of citations and average position, the user’s site highlighted', caption: 'Who AI engines cite instead: share of voice per domain.', width: 1600, height: 853 },
    ],
  },

  {
    slug: 'exam-answer-checker',
    name: 'Exam Answer Checker',
    kind: 'Own project',
    tagline: 'Scores TNPSC and TCS iON response sheets against an answer key whose questions are in a different order — with classical maths first and an LLM last.',
    summary:
      'Scores a candidate’s exam response sheet against the official answer key, even when the questions are in a different order.',
    how:
      'Matches questions by their text (TF-IDF + Hungarian algorithm), detects hand-drawn ticks with OpenCV, and flags unsure answers for a person; 47 tests.',
    stack: ['FastAPI', 'Tesseract', 'OpenCV', 'scikit-learn', 'SciPy', 'Docker'],
    repo: 'https://github.com/mathi1322/exam_answer_checker',
    problem:
      'Candidates get a response sheet and a separately published answer key, but the question order is shuffled between them. Matching by number is useless; matching by hand takes hours.',
    role: 'Solo build: OCR pipeline, matching algorithm, tick detection, API, tests and documentation.',
    flow: [
      { label: 'Read', detail: 'Response sheet from its text layer; answer key scans via Tesseract OCR' },
      { label: 'Match', detail: 'Character 3–5-gram TF-IDF similarity between every pair of questions' },
      { label: 'Assign', detail: 'Hungarian algorithm: optimal one-to-one matching; weak or close matches flagged', tone: 'guard' },
      { label: 'Detect ticks', detail: 'Stroke size, coloured ink and excess dark ink around each option label' },
      { label: 'Review', detail: 'Anything uncertain is shown side by side for a person to confirm', tone: 'human' },
    ],
    decisions: [
      {
        title: 'Treat matching as an assignment problem',
        body: 'Greedy “best match per question” lets two questions claim the same answer. The Hungarian algorithm maximizes total similarity under a strict one-to-one constraint. A pair is flagged when its score is below 0.35, its lead over the runner-up is under 0.08, or the row’s best match disagrees with the assignment.',
      },
      {
        title: 'Ink signals before AI',
        body: 'A ticked label often OCRs as junk or vanishes, so ticks are found from three image signals, not text. One clear winner is accepted; otherwise the question is marked uncertain. An LLM fallback exists but is off by default, and anything it decides is flagged.',
      },
      {
        title: 'Built to be safe in public',
        body: 'PDFs are validated before processing, uploads are rate-limited, and each candidate’s data is deleted automatically after 2 hours.',
      },
    ],
    results: ['Scored a 12-question sample exactly right after one review', '47 automated tests', 'Dockerized, with CSV, JSON and reordered-PDF exports'],
    shots: [
      { src: 'shots/exam-review.jpg', alt: 'Review screen showing an unclear tick: answer key crop beside the matched response question, match score 0.89, and other likely matches', caption: 'Review before results: an unclear tick, shown beside its matched question (synthetic sample).', width: 1600, height: 866 },
      { src: 'shots/exam-results.jpg', alt: 'Results page: 15.0 marks out of 18, 10 correct, 1 wrong, 1 unanswered, with a table of every question', caption: 'Results: score, counts and every question’s match (synthetic sample).', width: 1600, height: 1203 },
    ],
  },

  {
    slug: 'ai-email-engine',
    name: 'AI Outreach Email Engine',
    kind: 'Client work',
    tagline: 'Personalized AI emails at 1,000–1,500 sends a day, scheduled across ~40 mailboxes so none of them lands in spam.',
    stack: ['React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'OpenAI', 'Perplexity', 'EmailEngine', 'Stripe'],
    problem:
      'A US sales outreach platform needed every email researched and written for its recipient, then sent from each customer’s pool of mailboxes on the customer’s schedule — with follow-ups that stop the moment a lead replies, and without any mailbox getting flagged as spam.',
    role: 'Senior Full Stack Engineer: generation pipeline, scheduling algorithm, job system, payments and mailbox integration.',
    flow: [
      { label: 'Research', detail: 'Perplexity gathers recent, public context about the lead', tone: 'ai' },
      { label: 'Write', detail: 'ChatGPT drafts a personalized email from the research and campaign brief', tone: 'ai' },
      { label: 'Schedule', detail: 'Max 50 sends per mailbox per day, only on the customer’s chosen days', tone: 'guard' },
      { label: 'Follow up', detail: 'Follow-up after the customer’s chosen gap — cancelled if the lead replies', tone: 'guard' },
      { label: 'Track', detail: 'Analytics: sent, remaining in the set, replies' },
    ],
    decisions: [
      {
        title: 'A hard per-mailbox cap',
        body: 'Each mailbox sends at most 50 emails a day. With 4 customers and about 10 mailboxes each, the scheduler spreads 1,000–1,500 daily sends so no single mailbox spikes and gets flagged as spam.',
      },
      {
        title: 'Replies cancel follow-ups, per lead',
        body: 'When a lead replies to the first email, only that lead’s queued follow-up is cancelled. Nobody gets a “just following up” after they have already answered.',
      },
      {
        title: 'Separate research from writing',
        body: 'Splitting retrieval (Perplexity) from generation (ChatGPT) made each step testable on its own and kept facts and tone as separate concerns.',
      },
    ],
    results: ['1,000–1,500 personalized emails a day across 4 customers and ~40 mailboxes', 'Follow-ups cancelled automatically on reply', 'Campaign analytics: sent, remaining and replies'],
  },
  {
    slug: 'responses-api-migration',
    name: 'Assistants → Responses API Migration',
    kind: 'Client work',
    tagline: 'Led the upgrade of a bid management platform’s AI services from OpenAI’s Assistants API to the Responses API.',
    stack: ['OpenAI Responses API', 'OpenAI Assistants API'],
    problem:
      'The platform’s AI features were built on the Assistants API, which means managing threads, runs and polling as server-side state. OpenAI has deprecated the Assistants API in favour of the Responses API, so the features had to move to stay supported.',
    role: 'Lead: planned the upgrade, set the approach for the team, reviewed the work and owned the release.',
    flow: [
      { label: 'Before', detail: 'Create a thread, add messages, start a run, poll until it finishes' },
      { label: 'Upgrade', detail: 'Rewrite each AI call as a single Responses API request', tone: 'ai' },
      { label: 'Test', detail: 'Check the AI features still behave correctly before release', tone: 'guard' },
      { label: 'After', detail: 'One request in, one response out — no polling loop' },
    ],
    decisions: [
      {
        title: 'Stateless over stateful',
        body: 'Dropping the thread-and-run polling loop removed a whole class of “stuck run” states, and the code that existed only to manage them.',
      },
      {
        title: 'Move before the deadline, not at it',
        body: 'Upgrading while the old API still worked meant the team could test calmly and ship it as a normal release, instead of a rushed fix when the API is switched off.',
      },
    ],
    results: ['Simpler AI service code', 'Lower operational overhead', 'On OpenAI’s supported API going forward'],
  },
];
