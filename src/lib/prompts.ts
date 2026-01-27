// Types for prompt data
export interface Prompt {
  id: string;
  title: string;
  description: string;
  prompt: string;
  category: string;
  subcategory?: string;
  tags: string[];
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

export interface PromptCategory {
  slug: string;
  name: string;
  description: string;
  icon: string;
  count: number;
  subcategories?: {
    slug: string;
    name: string;
    count: number;
  }[];
}

// Industry data
export const industries: PromptCategory[] = [
  {
    slug: 'saas',
    name: 'SaaS & Tech',
    description: 'Technical buyers, PLG motions, enterprise cycles',
    icon: 'laptop',
    count: 100,
    subcategories: [
      { slug: 'outreach', name: 'Cold Outreach', count: 25 },
      { slug: 'discovery', name: 'Discovery', count: 20 },
      { slug: 'objections', name: 'Objection Handling', count: 20 },
      { slug: 'proposals', name: 'Proposals', count: 15 },
      { slug: 'follow-up', name: 'Follow-Up', count: 20 },
    ],
  },
  {
    slug: 'financial-services',
    name: 'Financial Services',
    description: 'Compliance-aware, trust-building, risk-focused',
    icon: 'banknote',
    count: 100,
    subcategories: [
      { slug: 'outreach', name: 'Cold Outreach', count: 25 },
      { slug: 'discovery', name: 'Discovery', count: 20 },
      { slug: 'objections', name: 'Objection Handling', count: 20 },
      { slug: 'proposals', name: 'Proposals', count: 15 },
      { slug: 'follow-up', name: 'Follow-Up', count: 20 },
    ],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare & MedTech',
    description: 'HIPAA-conscious, clinical stakeholders, long cycles',
    icon: 'heart-pulse',
    count: 100,
    subcategories: [
      { slug: 'outreach', name: 'Cold Outreach', count: 25 },
      { slug: 'discovery', name: 'Discovery', count: 20 },
      { slug: 'objections', name: 'Objection Handling', count: 20 },
      { slug: 'proposals', name: 'Proposals', count: 15 },
      { slug: 'follow-up', name: 'Follow-Up', count: 20 },
    ],
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    description: 'Plant managers, OEE, supply chain',
    icon: 'factory',
    count: 100,
    subcategories: [
      { slug: 'outreach', name: 'Cold Outreach', count: 25 },
      { slug: 'discovery', name: 'Discovery', count: 20 },
      { slug: 'objections', name: 'Objection Handling', count: 20 },
      { slug: 'proposals', name: 'Proposals', count: 15 },
      { slug: 'follow-up', name: 'Follow-Up', count: 20 },
    ],
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    description: 'Partnership dynamics, utilization metrics',
    icon: 'briefcase',
    count: 100,
    subcategories: [
      { slug: 'outreach', name: 'Cold Outreach', count: 25 },
      { slug: 'discovery', name: 'Discovery', count: 20 },
      { slug: 'objections', name: 'Objection Handling', count: 20 },
      { slug: 'proposals', name: 'Proposals', count: 15 },
      { slug: 'follow-up', name: 'Follow-Up', count: 20 },
    ],
  },
  {
    slug: 'ecommerce',
    name: 'E-commerce & Retail',
    description: 'Conversion metrics, seasonality, fast decisions',
    icon: 'shopping-cart',
    count: 100,
    subcategories: [
      { slug: 'outreach', name: 'Cold Outreach', count: 25 },
      { slug: 'discovery', name: 'Discovery', count: 20 },
      { slug: 'objections', name: 'Objection Handling', count: 20 },
      { slug: 'proposals', name: 'Proposals', count: 15 },
      { slug: 'follow-up', name: 'Follow-Up', count: 20 },
    ],
  },
  {
    slug: 'real-estate',
    name: 'Real Estate & PropTech',
    description: 'Deal-driven, relationship-based selling',
    icon: 'building',
    count: 100,
    subcategories: [
      { slug: 'outreach', name: 'Cold Outreach', count: 25 },
      { slug: 'discovery', name: 'Discovery', count: 20 },
      { slug: 'objections', name: 'Objection Handling', count: 20 },
      { slug: 'proposals', name: 'Proposals', count: 15 },
      { slug: 'follow-up', name: 'Follow-Up', count: 20 },
    ],
  },
  {
    slug: 'education',
    name: 'Education & EdTech',
    description: 'Committee decisions, mission-driven buyers',
    icon: 'graduation-cap',
    count: 100,
    subcategories: [
      { slug: 'outreach', name: 'Cold Outreach', count: 25 },
      { slug: 'discovery', name: 'Discovery', count: 20 },
      { slug: 'objections', name: 'Objection Handling', count: 20 },
      { slug: 'proposals', name: 'Proposals', count: 15 },
      { slug: 'follow-up', name: 'Follow-Up', count: 20 },
    ],
  },
  {
    slug: 'logistics',
    name: 'Logistics & Supply Chain',
    description: 'Operations buyers, efficiency metrics, global scale',
    icon: 'truck',
    count: 100,
    subcategories: [
      { slug: 'outreach', name: 'Cold Outreach', count: 25 },
      { slug: 'discovery', name: 'Discovery', count: 20 },
      { slug: 'objections', name: 'Objection Handling', count: 20 },
      { slug: 'proposals', name: 'Proposals', count: 15 },
      { slug: 'follow-up', name: 'Follow-Up', count: 20 },
    ],
  },
  {
    slug: 'energy',
    name: 'Energy & Utilities',
    description: 'Regulated markets, sustainability mandates, infrastructure',
    icon: 'zap',
    count: 100,
    subcategories: [
      { slug: 'outreach', name: 'Cold Outreach', count: 25 },
      { slug: 'discovery', name: 'Discovery', count: 20 },
      { slug: 'objections', name: 'Objection Handling', count: 20 },
      { slug: 'proposals', name: 'Proposals', count: 15 },
      { slug: 'follow-up', name: 'Follow-Up', count: 20 },
    ],
  },
  {
    slug: 'government',
    name: 'Government & Public Sector',
    description: 'RFP-driven, compliance-heavy, long procurement',
    icon: 'landmark',
    count: 100,
    subcategories: [
      { slug: 'outreach', name: 'Cold Outreach', count: 25 },
      { slug: 'discovery', name: 'Discovery', count: 20 },
      { slug: 'objections', name: 'Objection Handling', count: 20 },
      { slug: 'proposals', name: 'Proposals', count: 15 },
      { slug: 'follow-up', name: 'Follow-Up', count: 20 },
    ],
  },
  {
    slug: 'telecom',
    name: 'Telecommunications',
    description: 'Enterprise infrastructure, carrier relationships',
    icon: 'radio-tower',
    count: 100,
    subcategories: [
      { slug: 'outreach', name: 'Cold Outreach', count: 25 },
      { slug: 'discovery', name: 'Discovery', count: 20 },
      { slug: 'objections', name: 'Objection Handling', count: 20 },
      { slug: 'proposals', name: 'Proposals', count: 15 },
      { slug: 'follow-up', name: 'Follow-Up', count: 20 },
    ],
  },
  {
    slug: 'media',
    name: 'Media & Entertainment',
    description: 'Content creators, advertisers, streaming platforms',
    icon: 'play-circle',
    count: 100,
    subcategories: [
      { slug: 'outreach', name: 'Cold Outreach', count: 25 },
      { slug: 'discovery', name: 'Discovery', count: 20 },
      { slug: 'objections', name: 'Objection Handling', count: 20 },
      { slug: 'proposals', name: 'Proposals', count: 15 },
      { slug: 'follow-up', name: 'Follow-Up', count: 20 },
    ],
  },
  {
    slug: 'hospitality',
    name: 'Hospitality & Travel',
    description: 'Seasonal business, guest experience, franchises',
    icon: 'hotel',
    count: 100,
    subcategories: [
      { slug: 'outreach', name: 'Cold Outreach', count: 25 },
      { slug: 'discovery', name: 'Discovery', count: 20 },
      { slug: 'objections', name: 'Objection Handling', count: 20 },
      { slug: 'proposals', name: 'Proposals', count: 15 },
      { slug: 'follow-up', name: 'Follow-Up', count: 20 },
    ],
  },
  {
    slug: 'construction',
    name: 'Construction & Infrastructure',
    description: 'Project-based, bid processes, safety focus',
    icon: 'hard-hat',
    count: 100,
    subcategories: [
      { slug: 'outreach', name: 'Cold Outreach', count: 25 },
      { slug: 'discovery', name: 'Discovery', count: 20 },
      { slug: 'objections', name: 'Objection Handling', count: 20 },
      { slug: 'proposals', name: 'Proposals', count: 15 },
      { slug: 'follow-up', name: 'Follow-Up', count: 20 },
    ],
  },
  {
    slug: 'insurance',
    name: 'Insurance',
    description: 'Risk management, actuarial buyers, regulatory',
    icon: 'shield',
    count: 100,
    subcategories: [
      { slug: 'outreach', name: 'Cold Outreach', count: 25 },
      { slug: 'discovery', name: 'Discovery', count: 20 },
      { slug: 'objections', name: 'Objection Handling', count: 20 },
      { slug: 'proposals', name: 'Proposals', count: 15 },
      { slug: 'follow-up', name: 'Follow-Up', count: 20 },
    ],
  },
];

// Sample prompts for SaaS industry
export const saasPrompts: Prompt[] = [
  {
    id: 'saas-cold-email-1',
    title: 'Technical Founder Cold Email',
    description: 'Cold email for reaching technical founders at early-stage startups',
    category: 'saas',
    subcategory: 'outreach',
    tags: ['cold-email', 'founder', 'technical'],
    difficulty: 'beginner',
    prompt: `Write a cold email to [FOUNDER NAME], technical founder of [COMPANY].

Context:
- They recently [SIGNAL: launched on Product Hunt / raised seed funding / posted on HN]
- Company stage: [STAGE: pre-seed / seed / Series A]
- Their product: [WHAT THEY BUILD]
- I help [TYPE OF COMPANIES] with [PROBLEM I SOLVE]

Tone: Technical peer, not salesy. Respect their time.

Rules:
- Subject line: 5 words max, no clickbait
- Opening: Reference the signal, show you did research
- Body: One specific way you could help, tied to their stage
- CTA: Low commitment (15-min call or async)
- Total length: Under 100 words
- No "hope this finds you well" or "I'm reaching out because"`,
  },
  {
    id: 'saas-cold-email-2',
    title: 'VP Engineering Cold Email',
    description: 'Cold email targeting VP/Director of Engineering at growth-stage companies',
    category: 'saas',
    subcategory: 'outreach',
    tags: ['cold-email', 'engineering', 'growth-stage'],
    difficulty: 'intermediate',
    prompt: `Write a cold email to [NAME], VP of Engineering at [COMPANY].

Context:
- Company size: [EMPLOYEE COUNT]
- Their stack: [TECHNOLOGIES THEY USE]
- Signal: [SIGNAL: hiring engineers / scaling infrastructure / tech debt mentions]
- We help engineering teams with [PROBLEM]

Tone: Peer-to-peer, technical credibility matters.

Structure:
1. Hook: Reference something specific about their engineering challenges
2. Problem: One sentence on the pain they likely feel
3. Credibility: One proof point (customer result, not features)
4. CTA: Specific and low-friction

Rules:
- No buzzwords (leverage, synergy, cutting-edge)
- Mention specific tech if relevant
- Under 80 words`,
  },
  {
    id: 'saas-discovery-1',
    title: 'Technical Discovery Questions',
    description: 'Discovery questions for technical buyers evaluating your SaaS product',
    category: 'saas',
    subcategory: 'discovery',
    tags: ['discovery', 'technical', 'questions'],
    difficulty: 'intermediate',
    prompt: `Generate discovery questions for a technical buyer evaluating [YOUR PRODUCT TYPE].

Context:
- Buyer role: [TITLE: VP Eng / CTO / Tech Lead]
- Company stage: [STAGE]
- Known pain points: [WHAT YOU KNOW]
- Competitors they might be evaluating: [COMPETITORS]

Question categories needed:
1. Current state (how they do it today)
2. Pain quantification (time/cost/risk of current approach)
3. Decision process (who else is involved, timeline)
4. Technical requirements (integration, security, scale)
5. Success criteria (how they'll measure if it worked)

Format: 3 questions per category, ordered from easy to probing.
Include follow-up prompts for each question.`,
  },
  {
    id: 'saas-objection-1',
    title: 'Handle "We Built It In-House"',
    description: 'Response framework for the build vs buy objection',
    category: 'saas',
    subcategory: 'objections',
    tags: ['objection', 'build-vs-buy', 'technical'],
    difficulty: 'advanced',
    prompt: `Help me respond to this objection from a technical buyer:

"We've already built something in-house that does this."

Context:
- My product: [YOUR PRODUCT]
- Their company size: [SIZE]
- Their likely in-house solution: [WHAT YOU THINK THEY BUILT]
- My key differentiator: [WHAT MAKES YOU BETTER]

Response framework needed:
1. Acknowledge their investment (don't dismiss it)
2. Curious questions to understand their solution's scope
3. Subtle wedge questions (maintenance burden, opportunity cost, feature gaps)
4. Bridge to your value (only if there's a real gap)

Tone: Respect their engineering effort. Never trash their work.
Goal: Understand if there's a real opportunity, not to "win" the objection.`,
  },
  {
    id: 'saas-proposal-1',
    title: 'Executive Summary for SaaS Proposal',
    description: 'Write a compelling executive summary for a SaaS proposal',
    category: 'saas',
    subcategory: 'proposals',
    tags: ['proposal', 'executive-summary', 'enterprise'],
    difficulty: 'advanced',
    prompt: `Write an executive summary for a SaaS proposal.

Deal context:
- Prospect: [COMPANY NAME]
- Champion: [NAME, TITLE]
- Economic buyer: [NAME, TITLE]
- Problem they're solving: [PROBLEM]
- Our solution: [YOUR PRODUCT]
- Deal size: [ACV]
- Competition: [WHO ELSE THEY'RE EVALUATING]

Key wins from discovery:
- [PAIN POINT 1 + QUANTIFIED IMPACT]
- [PAIN POINT 2 + QUANTIFIED IMPACT]
- [PAIN POINT 3 + QUANTIFIED IMPACT]

Success metrics they mentioned:
- [METRIC 1]
- [METRIC 2]

Write a 200-word executive summary that:
1. Opens with their goal, not your product
2. Summarizes the problems you'll solve (in their words)
3. Previews the ROI case
4. Creates urgency without being pushy
5. Ends with a clear next step`,
  },
  {
    id: 'saas-cold-email-3',
    title: 'Product Manager Cold Email',
    description: 'Cold email for product managers evaluating tools',
    category: 'saas',
    subcategory: 'outreach',
    tags: ['cold-email', 'product-manager', 'tools'],
    difficulty: 'beginner',
    prompt: `Write a cold email to [NAME], Product Manager at [COMPANY].

Context:
- They recently [SIGNAL: launched a new feature / posted about product challenges / hiring for PM role]
- Product area: [THEIR PRODUCT AREA]
- We help PMs with [YOUR VALUE PROP]
- Team size: [THEIR TEAM SIZE]

Tone: Fellow product person, empathetic to PM struggles.

Structure:
1. Hook: Something specific about their product work
2. Pain: One PM-specific challenge you solve
3. Proof: Quick metric from similar PM
4. CTA: "See how [Similar Company] did it?"

Rules:
- Under 75 words
- No feature lists
- Speak their language (roadmap, velocity, stakeholders)`,
  },
  {
    id: 'saas-cold-email-4',
    title: 'CFO Budget Season Email',
    description: 'Cold email timed for budget planning season',
    category: 'saas',
    subcategory: 'outreach',
    tags: ['cold-email', 'cfo', 'budget', 'timing'],
    difficulty: 'intermediate',
    prompt: `Write a cold email to [NAME], CFO at [COMPANY] during budget planning season.

Context:
- Company revenue: [REVENUE RANGE]
- Fiscal year end: [MONTH]
- Signal: [SIGNAL: earnings call mention / LinkedIn post / job posting]
- We help finance teams [YOUR VALUE PROP]
- ROI we typically deliver: [ROI METRIC]

Tone: Financially literate, respect their time, data-driven.

Key angles to consider:
1. Budget planning = open to new line items
2. Show clear ROI timeline
3. Align with their fiscal planning cycle

Rules:
- Lead with a financial insight, not product pitch
- Include one specific number
- CTA tied to their planning timeline`,
  },
  {
    id: 'saas-cold-email-5',
    title: 'Competitive Displacement Email',
    description: 'Cold email when prospect uses competitor',
    category: 'saas',
    subcategory: 'outreach',
    tags: ['cold-email', 'competitive', 'displacement'],
    difficulty: 'advanced',
    prompt: `Write a cold email to [NAME] at [COMPANY] who currently uses [COMPETITOR].

Context:
- Their current solution: [COMPETITOR NAME]
- How long they've used it: [IF KNOWN]
- Known pain points with competitor: [GAPS/ISSUES]
- Our key differentiator: [YOUR ADVANTAGE]
- Similar customer who switched: [REFERENCE CUSTOMER]

Tone: Respectful of their choice, not trash-talking competitor.

Strategy:
1. Acknowledge they have a solution (validates their decision)
2. Plant a seed about one specific limitation
3. Offer comparison value, not hard pitch
4. Make it safe to explore options

Rules:
- Never badmouth competitor directly
- Focus on what they might be missing
- Low-commitment CTA`,
  },
  {
    id: 'saas-discovery-2',
    title: 'Budget and Timeline Discovery',
    description: 'Questions to qualify budget and buying timeline',
    category: 'saas',
    subcategory: 'discovery',
    tags: ['discovery', 'budget', 'timeline', 'qualification'],
    difficulty: 'intermediate',
    prompt: `Generate discovery questions to qualify budget and timeline.

Context:
- Prospect company: [COMPANY]
- Your ACV: [DEAL SIZE]
- Typical sales cycle: [LENGTH]
- Champion role: [THEIR TITLE]

Generate questions for:
1. Budget discovery (without asking "what's your budget?")
2. Decision timeline reality check
3. Competing priorities that could delay
4. Approval process and stakeholders
5. Past purchase experiences (how they bought last tool)

Format each question with:
- The question itself
- Why you're asking (the intel you need)
- Follow-up if they're vague
- Red flag answers to watch for`,
  },
  {
    id: 'saas-discovery-3',
    title: 'Stakeholder Mapping Questions',
    description: 'Questions to understand the buying committee',
    category: 'saas',
    subcategory: 'discovery',
    tags: ['discovery', 'stakeholders', 'buying-committee'],
    difficulty: 'advanced',
    prompt: `Generate questions to map the buying committee.

Context:
- Deal size: [ACV]
- Prospect: [COMPANY NAME]
- Current contact: [NAME, TITLE]
- Your product affects: [DEPARTMENTS/ROLES IMPACTED]

Question categories:
1. Who else will be involved in this decision?
2. Who needs to approve budget at this level?
3. Who might block this internally? (IT, legal, procurement)
4. Who will be the day-to-day users?
5. Who has failed to buy something like this before? Why?

For each answer, provide:
- Natural way to ask without seeming interrogative
- How to position as helping them navigate internally
- When in the conversation to ask this`,
  },
  {
    id: 'saas-objection-2',
    title: 'Handle "No Budget Right Now"',
    description: 'Response when prospect has budget constraints',
    category: 'saas',
    subcategory: 'objections',
    tags: ['objection', 'budget', 'timing'],
    difficulty: 'intermediate',
    prompt: `Help me respond to: "We don't have budget for this right now."

Context:
- My product: [YOUR PRODUCT]
- Deal size: [ACV]
- Their company stage: [STAGE/SIZE]
- Value I provide: [KEY BENEFIT]
- Their fiscal year: [IF KNOWN]

Explore these angles:
1. Is this a priority problem? (If so, budget finds a way)
2. Reframe as cost of inaction (what's the cost of waiting?)
3. Creative pricing options (if applicable)
4. Plant seeds for next budget cycle
5. Find smaller entry point

Provide:
- 3 diagnostic questions to understand the real blocker
- 2 reframe responses
- 1 graceful exit that keeps door open
- Follow-up timing recommendation`,
  },
  {
    id: 'saas-objection-3',
    title: 'Handle "Need to Think About It"',
    description: 'Response when prospect stalls with vague objection',
    category: 'saas',
    subcategory: 'objections',
    tags: ['objection', 'stall', 'closing'],
    difficulty: 'advanced',
    prompt: `Help me respond to: "Let me think about it and get back to you."

Context:
- Deal stage: [STAGE: post-demo / post-proposal / post-trial]
- What we covered: [LAST INTERACTION SUMMARY]
- Their apparent concerns: [IF ANY SURFACED]
- Their timeline mentioned: [IF ANY]
- Competition: [IF YOU KNOW]

This objection often masks:
- Unspoken concern they didn't raise
- Need to socialize internally
- Evaluating competitor
- Not a real priority
- You haven't earned the next step

Provide:
- 3 ways to gently probe what's really happening
- Questions to surface hidden objections
- How to offer help without being pushy
- Clear mutual action plan suggestion`,
  },
  {
    id: 'saas-proposal-2',
    title: 'ROI Business Case Section',
    description: 'Create the ROI section of a proposal',
    category: 'saas',
    subcategory: 'proposals',
    tags: ['proposal', 'roi', 'business-case'],
    difficulty: 'advanced',
    prompt: `Create the ROI/business case section for a SaaS proposal.

Deal context:
- Prospect: [COMPANY]
- Annual deal value: [ACV]
- Contract length: [MONTHS/YEARS]
- Implementation cost: [IF ANY]

Value drivers discovered:
- Time savings: [HOURS/FTEs SAVED]
- Revenue impact: [GROWTH/RETENTION IMPROVEMENT]
- Risk reduction: [COMPLIANCE/SECURITY BENEFITS]
- Cost reduction: [TOOLS CONSOLIDATED/COSTS AVOIDED]

Their current costs:
- Current solution cost: [IF KNOWN]
- Manual process cost: [TIME × SALARY]
- Opportunity cost: [DEALS LOST/DELAYED]

Build a business case that shows:
1. Year 1 ROI calculation
2. 3-year TCO comparison
3. Payback period
4. Risk-adjusted projections
5. Soft benefits (harder to quantify)

Format: Clear table + narrative explanation.`,
  },
  {
    id: 'saas-follow-up-1',
    title: 'Post-Demo Follow-Up Email',
    description: 'Follow-up email after a product demo',
    category: 'saas',
    subcategory: 'follow-up',
    tags: ['follow-up', 'demo', 'next-steps'],
    difficulty: 'beginner',
    prompt: `Write a follow-up email after a product demo.

Demo context:
- Attendees: [NAMES AND TITLES]
- Key features shown: [FEATURES DEMOED]
- Their biggest reactions: [WHAT EXCITED THEM]
- Questions they asked: [KEY QUESTIONS]
- Concerns raised: [OBJECTIONS/HESITATIONS]
- Agreed next step: [WHAT YOU SAID YOU'D DO]

Structure:
1. Thank + personalized observation (not generic)
2. Recap what resonated (in their words)
3. Address any open questions
4. Attach relevant resources
5. Clear CTA with specific date/time

Rules:
- Send within 2 hours of demo
- Under 150 words
- Include mutual action plan
- Don't re-pitch—you already demoed`,
  },
  {
    id: 'saas-follow-up-2',
    title: 'Break-Up Email Sequence',
    description: 'Final follow-up when prospect goes dark',
    category: 'saas',
    subcategory: 'follow-up',
    tags: ['follow-up', 'break-up', 'gone-dark'],
    difficulty: 'intermediate',
    prompt: `Write a "break-up" email for a prospect who's gone dark.

Context:
- Last contact: [DATE]
- Previous touchpoints: [# OF FOLLOW-UPS SENT]
- Stage when they went dark: [STAGE]
- Last topic discussed: [TOPIC]
- Value they acknowledged: [WHAT THEY SAID THEY LIKED]

Write 3 versions:
1. Soft break-up (assumes they're busy)
2. Value-add break-up (shares useful resource)
3. Direct break-up (asks for a no)

For each version include:
- Subject line
- Body (under 50 words)
- The psychology behind why it works

Goal: Get a response (even if it's no) or permission to follow up later.`,
  },
];

// Role data
export const roles: PromptCategory[] = [
  {
    slug: 'sdr',
    name: 'SDR / BDR',
    description: 'Prospecting, cold outreach, meeting booking',
    icon: 'phone-outgoing',
    count: 50,
  },
  {
    slug: 'ae',
    name: 'Account Executive',
    description: 'Discovery, demos, negotiation, closing',
    icon: 'handshake',
    count: 50,
  },
  {
    slug: 'sales-manager',
    name: 'Sales Manager',
    description: 'Pipeline reviews, coaching, forecasting',
    icon: 'users',
    count: 30,
  },
  {
    slug: 'revops',
    name: 'RevOps',
    description: 'Process design, metrics, systems',
    icon: 'settings',
    count: 30,
  },
  {
    slug: 'csm',
    name: 'CSM / Account Manager',
    description: 'Customer health, expansion, retention',
    icon: 'heart-handshake',
    count: 30,
  },
  {
    slug: 'founder',
    name: 'Founder',
    description: 'Founder-led sales at scale',
    icon: 'rocket',
    count: 30,
  },
];

// Methodology data
export const methodologies: PromptCategory[] = [
  {
    slug: 'meddpicc',
    name: 'MEDDPICC',
    description: 'Enterprise deal qualification framework',
    icon: 'clipboard-check',
    count: 15,
  },
  {
    slug: 'spin',
    name: 'SPIN Selling',
    description: 'Situation, Problem, Implication, Need-payoff',
    icon: 'message-circle-question',
    count: 12,
  },
  {
    slug: 'challenger',
    name: 'Challenger Sale',
    description: 'Teach, tailor, take control',
    icon: 'swords',
    count: 10,
  },
  {
    slug: 'sandler',
    name: 'Sandler',
    description: 'Pain funnel and upfront contracts',
    icon: 'target',
    count: 10,
  },
  {
    slug: 'value-selling',
    name: 'Value Selling',
    description: 'ROI and business case focused',
    icon: 'dollar-sign',
    count: 10,
  },
  {
    slug: 'gap-selling',
    name: 'Gap Selling',
    description: 'Current state vs future state',
    icon: 'git-compare',
    count: 10,
  },
];

// Financial Services Prompts
export const financialServicesPrompts: Prompt[] = [
  {
    id: 'fin-cold-email-1',
    title: 'Compliance-Safe Cold Email',
    description: 'Cold email for financial services that respects regulatory concerns',
    category: 'financial-services',
    subcategory: 'outreach',
    tags: ['cold-email', 'compliance', 'finserv'],
    difficulty: 'intermediate',
    prompt: `Write a cold email to a financial services executive that respects compliance concerns.

Context:
- Recipient: [NAME, TITLE at FINANCIAL INSTITUTION]
- Institution type: [BANK / CREDIT UNION / WEALTH MANAGEMENT / INSURANCE]
- Regulatory environment: [KEY REGULATIONS: SOX, FINRA, SEC, PCI-DSS, etc.]
- Signal: [WHAT TRIGGERED OUTREACH]
- My solution: [WHAT YOU SELL]
- Compliance benefit: [HOW YOU HELP WITH COMPLIANCE]

Financial Services Rules:
- Never make claims you can't prove
- Reference regulatory requirements by name
- Emphasize security, audit trails, compliance
- Mention relevant certifications (SOC 2, etc.)
- Respect their risk-averse culture
- No urgency tactics (they move slowly for good reasons)

The email should feel like it's from someone who understands their world.`,
  },
  {
    id: 'fin-discovery-1',
    title: 'Risk-Focused Discovery Questions',
    description: 'Discovery questions for risk-averse financial buyers',
    category: 'financial-services',
    subcategory: 'discovery',
    tags: ['discovery', 'risk', 'compliance'],
    difficulty: 'intermediate',
    prompt: `Generate discovery questions for a financial services buyer.

Context:
- Prospect: [NAME, TITLE at INSTITUTION]
- Institution type: [TYPE]
- My product: [WHAT YOU SELL]
- Likely compliance concerns: [RELEVANT REGULATIONS]

Question categories:
1. Current vendor/process (who, what, how long)
2. Compliance requirements (audits, reporting, certifications)
3. Risk assessment (what could go wrong, what keeps them up at night)
4. Decision process (who else needs to approve, procurement, legal)
5. Security requirements (data handling, encryption, access controls)
6. Integration needs (existing systems, IT involvement)

For each question, note:
- Why this matters in financial services
- Red flags to listen for
- Follow-up questions`,
  },
  {
    id: 'fin-objection-1',
    title: 'Handle "We Need to Check with Compliance"',
    description: 'Navigate the compliance review objection',
    category: 'financial-services',
    subcategory: 'objections',
    tags: ['objection', 'compliance', 'legal'],
    difficulty: 'advanced',
    prompt: `Help me respond to: "We need to run this by compliance first."

Context:
- My product: [WHAT YOU SELL]
- Their institution: [TYPE AND SIZE]
- Where we are in the deal: [STAGE]
- Certifications I have: [SOC 2, ISO 27001, etc.]

This isn't an objection to overcome - it's a buying signal. Help me:
1. Embrace the compliance review process
2. Offer to participate in the review
3. Provide documentation proactively
4. Ask about their compliance review process
5. Identify who in compliance I should meet

The goal is to be seen as a compliance ally, not a vendor trying to skip due diligence.`,
  },
  {
    id: 'fin-proposal-1',
    title: 'Risk Mitigation Executive Summary',
    description: 'Proposal summary that emphasizes risk reduction',
    category: 'financial-services',
    subcategory: 'proposals',
    tags: ['proposal', 'risk', 'executive-summary'],
    difficulty: 'advanced',
    prompt: `Write an executive summary for a financial services proposal.

Deal context:
- Institution: [NAME]
- Type: [BANK / INSURANCE / WEALTH MGMT]
- Problem: [WHAT THEY'RE SOLVING]
- My solution: [YOUR PRODUCT]
- Key compliance requirements: [REGULATIONS]
- Risk factors of status quo: [CURRENT RISKS]

Financial services executive summaries need:
1. Risk reduction framing (not just benefits)
2. Compliance alignment (specific regulations)
3. Security posture (certifications, controls)
4. Implementation risk mitigation (phased rollout, training)
5. Reference customers in their sector
6. Total cost of ownership (they think long-term)

Tone: Conservative, thorough, trustworthy. No hype.`,
  },
  {
    id: 'fin-follow-up-1',
    title: 'Quarterly Review Meeting Request',
    description: 'Request a QBR with a financial services client',
    category: 'financial-services',
    subcategory: 'follow-up',
    tags: ['qbr', 'review', 'retention'],
    difficulty: 'beginner',
    prompt: `Write an email requesting a quarterly business review with a financial services client.

Context:
- Client: [INSTITUTION NAME]
- Main contact: [NAME, TITLE]
- How long they've been a customer: [TENURE]
- Key wins this quarter: [RESULTS/METRICS]
- Upcoming audit or regulatory deadline: [IF ANY]
- Expansion opportunity: [IF ANY]

QBR request should:
1. Reference specific value delivered (metrics)
2. Tie to their regulatory calendar if relevant
3. Offer to include their compliance team
4. Propose agenda topics
5. Be respectful of their busy schedule

Financial services clients appreciate structure and documentation.`,
  },
];

// Healthcare Prompts
export const healthcarePrompts: Prompt[] = [
  {
    id: 'health-cold-email-1',
    title: 'Clinical Stakeholder Cold Email',
    description: 'Cold email for reaching clinical decision-makers',
    category: 'healthcare',
    subcategory: 'outreach',
    tags: ['cold-email', 'clinical', 'healthcare'],
    difficulty: 'intermediate',
    prompt: `Write a cold email to a clinical stakeholder in healthcare.

Context:
- Recipient: [NAME, TITLE - e.g., Chief Medical Officer, VP Clinical Operations]
- Organization: [HOSPITAL SYSTEM / HEALTH PLAN / MEDTECH COMPANY]
- Size: [# BEDS / MEMBERS / EMPLOYEES]
- Signal: [WHAT TRIGGERED OUTREACH]
- My solution: [WHAT YOU SELL]
- Patient outcome impact: [HOW YOU IMPROVE CARE]

Healthcare Cold Email Rules:
- Lead with patient outcomes, not features
- Reference clinical evidence if available
- Acknowledge HIPAA/PHI handling upfront
- Respect their mission-driven culture
- No aggressive sales tactics
- Be specific about implementation timelines

Clinical stakeholders care about: patient safety, clinical workflows, staff burnout, evidence base.`,
  },
  {
    id: 'health-discovery-1',
    title: 'Healthcare Discovery Questions',
    description: 'Discovery for healthcare with long buying cycles',
    category: 'healthcare',
    subcategory: 'discovery',
    tags: ['discovery', 'clinical', 'hipaa'],
    difficulty: 'intermediate',
    prompt: `Generate discovery questions for a healthcare prospect.

Context:
- Prospect: [NAME, TITLE at ORGANIZATION]
- Organization type: [HOSPITAL / CLINIC / PAYER / PHARMA]
- My product: [WHAT YOU SELL]
- Known initiative: [WHAT THEY'RE WORKING ON]

Discovery categories for healthcare:
1. Clinical workflow impact (who uses it, when, how often)
2. Patient outcome metrics (what they measure, targets)
3. Compliance requirements (HIPAA, HITECH, state regs)
4. Integration needs (EMR/EHR systems - Epic, Cerner, etc.)
5. Budget cycle (fiscal year, capital vs. operating)
6. Decision process (committees, clinical champions, IT, legal)
7. Implementation concerns (training, change management)

Healthcare buying cycles are long. Understand the full process upfront.`,
  },
  {
    id: 'health-objection-1',
    title: 'Handle "We Need Clinical Validation"',
    description: 'Respond when they want clinical evidence',
    category: 'healthcare',
    subcategory: 'objections',
    tags: ['objection', 'clinical', 'evidence'],
    difficulty: 'advanced',
    prompt: `Help me respond to: "We need to see clinical validation / peer-reviewed studies."

Context:
- My product: [WHAT YOU SELL]
- Clinical evidence we have: [STUDIES / DATA / CASE STUDIES]
- Evidence we don't have: [GAPS]
- Similar products' evidence: [COMPETITOR EVIDENCE]

This is legitimate in healthcare. Help me:
1. Present the evidence we do have credibly
2. Acknowledge gaps honestly
3. Propose a pilot/study if appropriate
4. Connect them with reference customers
5. Understand what level of evidence they actually need

Never oversell clinical claims. It damages trust and can have regulatory implications.`,
  },
  {
    id: 'health-proposal-1',
    title: 'Healthcare Value Analysis Committee Proposal',
    description: 'Proposal for hospital value analysis committees',
    category: 'healthcare',
    subcategory: 'proposals',
    tags: ['proposal', 'vac', 'hospital'],
    difficulty: 'advanced',
    prompt: `Write a proposal summary for a hospital Value Analysis Committee.

Context:
- Hospital: [NAME]
- Product category: [WHAT YOU'RE PROPOSING]
- Clinical champion: [NAME, TITLE]
- Current product/process: [WHAT THEY USE TODAY]
- Clinical evidence: [STUDIES SUPPORTING YOUR PRODUCT]
- Cost comparison: [PRICE VS CURRENT]
- Patient outcome impact: [EXPECTED IMPROVEMENT]

VAC proposals need:
1. Clinical efficacy summary (evidence-based)
2. Total cost analysis (not just unit price)
3. Safety profile
4. Comparison to current standard
5. Implementation requirements
6. Standardization benefits (if applicable)
7. Staff feedback (if pilots were done)

Format: Structured for committee review, not narrative.`,
  },
  {
    id: 'health-follow-up-1',
    title: 'Post-Committee Follow-Up',
    description: 'Follow up after a committee review meeting',
    category: 'healthcare',
    subcategory: 'follow-up',
    tags: ['follow-up', 'committee', 'decision'],
    difficulty: 'intermediate',
    prompt: `Write a follow-up email after a committee reviewed my proposal.

Context:
- Organization: [HOSPITAL/HEALTH SYSTEM]
- Committee: [VAC / P&T / CLINICAL COUNCIL / etc.]
- My champion: [NAME, TITLE]
- Meeting outcome: [APPROVED / TABLED / NEED MORE INFO]
- Questions raised: [WHAT THEY ASKED]
- Next steps discussed: [WHAT WAS AGREED]

Follow-up should:
1. Thank them for the thorough review
2. Address specific questions raised
3. Provide any additional documentation requested
4. Confirm next steps and timeline
5. Offer additional references or site visits

Maintain patience - healthcare committees move deliberately.`,
  },
  {
    id: 'health-pilot-proposal',
    title: 'Clinical Pilot Proposal',
    description: 'Propose a clinical pilot program',
    category: 'healthcare',
    subcategory: 'proposals',
    tags: ['pilot', 'clinical', 'trial'],
    difficulty: 'advanced',
    prompt: `Create a clinical pilot proposal for a healthcare organization.

Context:
- Organization: [HOSPITAL/HEALTH SYSTEM NAME]
- Department: [UNIT/SERVICE LINE]
- Clinical sponsor: [NAME, TITLE]
- Problem we're solving: [CLINICAL CHALLENGE]
- Pilot duration: [WEEKS/MONTHS]
- Success metrics: [WHAT WE'LL MEASURE]

Pilot proposal needs:
1. Executive summary (why this pilot, why now)
2. Clinical hypothesis (expected outcomes)
3. Pilot design (scope, duration, population)
4. Resource requirements (staff, systems, training)
5. Data collection plan (what/how/who)
6. Success criteria (measurable outcomes)
7. Risk mitigation (what could go wrong)
8. Path to full deployment (if pilot succeeds)
9. Timeline with milestones
10. Investment required

Format for clinical leadership review.`,
  },
  {
    id: 'health-emr-integration',
    title: 'EMR Integration Discussion Guide',
    description: 'Navigate EMR/EHR integration conversations',
    category: 'healthcare',
    subcategory: 'discovery',
    tags: ['emr', 'integration', 'epic', 'cerner'],
    difficulty: 'advanced',
    prompt: `Create a guide for discussing EMR integration.

Context:
- Organization: [HOSPITAL/HEALTH SYSTEM]
- Their EMR: [EPIC / CERNER / MEDITECH / OTHER]
- My product: [WHAT YOU SELL]
- Integration needed: [READ / WRITE / BI-DIRECTIONAL]

Discussion topics:
1. Their EMR version and customizations
2. Integration standards (HL7, FHIR, APIs)
3. IT team involvement and timeline
4. Security and compliance requirements
5. Past integration experiences (successes/failures)
6. Vendor marketplace status (if Epic/Cerner)
7. Budget for integration work
8. Training and workflow impact

Questions to ask:
- Technical questions for IT
- Workflow questions for clinical
- Timeline questions for project management
- Budget questions for finance

Red flags and how to address them.`,
  },
  {
    id: 'health-payer-outreach',
    title: 'Health Plan Cold Outreach',
    description: 'Cold email for health plan/payer organizations',
    category: 'healthcare',
    subcategory: 'outreach',
    tags: ['payer', 'health-plan', 'insurance'],
    difficulty: 'intermediate',
    prompt: `Write cold outreach for a health plan/payer.

Context:
- Organization: [HEALTH PLAN NAME]
- Contact: [NAME, TITLE]
- Plan type: [COMMERCIAL / MEDICARE / MEDICAID / ALL]
- Members: [NUMBER]
- My solution: [WHAT YOU SELL]
- Value prop: [COST / QUALITY / MEMBER EXPERIENCE]

Payer priorities to address:
- Medical cost reduction (MLR improvement)
- Quality scores (HEDIS, Stars)
- Member experience (CAHPS)
- Provider network management
- Care management efficiency
- Regulatory compliance

Email should:
1. Demonstrate understanding of payer economics
2. Quantify potential savings or quality improvement
3. Reference similar plan results
4. Address implementation without disrupting operations
5. Propose low-commitment first step`,
  },
  {
    id: 'health-physician-champion',
    title: 'Building a Physician Champion',
    description: 'Strategy for cultivating physician advocacy',
    category: 'healthcare',
    subcategory: 'strategy',
    tags: ['champion', 'physician', 'clinical'],
    difficulty: 'advanced',
    prompt: `Help me build a physician champion for this deal.

Context:
- Organization: [HOSPITAL/HEALTH SYSTEM]
- Product: [WHAT YOU SELL]
- Physician candidates: [NAMES, SPECIALTIES]
- Clinical value: [HOW PHYSICIANS BENEFIT]
- Current status: [INTEREST LEVEL]

Champion development strategy:
1. Identify the right physician (criteria)
2. Initial engagement approach
3. Clinical value messaging for physicians
4. Addressing "I don't have time" concern
5. Peer influence strategies
6. Getting them to advocate internally
7. Supporting their internal presentation
8. Maintaining relationship post-sale

What physicians care about:
- Patient outcomes
- Workflow efficiency
- Evidence and data
- Peer validation
- Recognition

What turns physicians off:
- Purely financial pitches
- Overselling
- Ignoring clinical concerns`,
  },
  {
    id: 'health-regulatory-positioning',
    title: 'Regulatory Compliance Positioning',
    description: 'Position product for regulatory requirements',
    category: 'healthcare',
    subcategory: 'objections',
    tags: ['compliance', 'hipaa', 'regulatory'],
    difficulty: 'intermediate',
    prompt: `Help me position my product for healthcare compliance.

Context:
- My product: [WHAT YOU SELL]
- Data handled: [PHI / CLINICAL / CLAIMS / OTHER]
- Our certifications: [HITRUST / SOC2 / etc.]
- Their requirements: [WHAT THEY'VE ASKED ABOUT]

Compliance positioning:
1. HIPAA compliance story
2. Data security architecture summary
3. BAA readiness and process
4. Audit trail capabilities
5. Data residency options
6. Incident response process
7. Staff training on compliance
8. Third-party assessment results

Questions they might ask and answers:
- "How do you handle PHI?"
- "Are you HITRUST certified?"
- "What's your BAA process?"
- "Where is data stored?"
- "What about HITECH/Meaningful Use?"
- "How do you handle breach notification?"

Format as FAQ for their compliance team.`,
  },
];

// Manufacturing Prompts
export const manufacturingPrompts: Prompt[] = [
  {
    id: 'mfg-cold-email-1',
    title: 'Plant Manager Cold Email',
    description: 'Cold email for reaching plant managers and operations leaders',
    category: 'manufacturing',
    subcategory: 'outreach',
    tags: ['cold-email', 'plant-manager', 'operations'],
    difficulty: 'intermediate',
    prompt: `Write a cold email to a plant manager or VP of Operations.

Context:
- Recipient: [NAME, TITLE]
- Company: [MANUFACTURER NAME]
- Industry: [DISCRETE / PROCESS / HYBRID MANUFACTURING]
- Plant size: [EMPLOYEES / OUTPUT]
- Signal: [EXPANSION / NEW LINE / EFFICIENCY INITIATIVE]
- My solution: [WHAT YOU SELL]
- Metric impact: [OEE / THROUGHPUT / DOWNTIME REDUCTION]

Manufacturing Email Rules:
- Lead with operational metrics (OEE, throughput, yield)
- Speak their language (downtime, changeover, scrap rate)
- Reference specific manufacturing challenges
- Be practical, not theoretical
- Respect their limited time off the floor
- Offer plant visit or demo on their turf

Plant managers care about: uptime, safety, quality, efficiency, their team.`,
  },
  {
    id: 'mfg-discovery-1',
    title: 'Manufacturing Discovery Questions',
    description: 'Discovery for manufacturing operations',
    category: 'manufacturing',
    subcategory: 'discovery',
    tags: ['discovery', 'oee', 'operations'],
    difficulty: 'intermediate',
    prompt: `Generate discovery questions for a manufacturing prospect.

Context:
- Prospect: [NAME, TITLE at COMPANY]
- Manufacturing type: [DISCRETE / PROCESS / ASSEMBLY]
- My product: [WHAT YOU SELL]
- Known pain: [EFFICIENCY / QUALITY / SUPPLY CHAIN]

Manufacturing discovery categories:
1. Current operations (shifts, lines, throughput targets)
2. Pain quantification (downtime hours, scrap %, OEE)
3. Existing systems (MES, ERP, SCADA, PLCs)
4. Decision process (plant vs corporate, capex vs opex)
5. Implementation reality (production schedules, maintenance windows)
6. Success metrics (how they measure improvement)
7. ROI requirements (payback period expectations)

Ask about specific lines or processes - get concrete, not abstract.`,
  },
  {
    id: 'mfg-objection-1',
    title: 'Handle "Can\'t Disrupt Production"',
    description: 'Overcome implementation timing concerns',
    category: 'manufacturing',
    subcategory: 'objections',
    tags: ['objection', 'implementation', 'production'],
    difficulty: 'advanced',
    prompt: `Help me respond to: "We can't risk disrupting production for implementation."

Context:
- My product: [WHAT YOU SELL]
- Their operation: [TYPE OF MANUFACTURING]
- Implementation requirements: [WHAT'S NEEDED]
- Our approach: [HOW WE MINIMIZE DISRUPTION]

This is the #1 objection in manufacturing. Help me:
1. Validate their concern (production uptime is sacred)
2. Explain phased implementation options
3. Reference similar implementations that didn't disrupt
4. Propose implementation during planned downtime
5. Offer risk mitigation (parallel running, rollback plan)
6. Quantify cost of waiting vs. implementation risk

Never minimize their concern - show you understand manufacturing realities.`,
  },
  {
    id: 'mfg-proposal-1',
    title: 'Manufacturing ROI Proposal',
    description: 'ROI-focused proposal for manufacturing capex',
    category: 'manufacturing',
    subcategory: 'proposals',
    tags: ['proposal', 'roi', 'capex'],
    difficulty: 'advanced',
    prompt: `Write an ROI-focused proposal for a manufacturing investment.

Context:
- Company: [MANUFACTURER]
- Plant/Line: [SPECIFIC AREA]
- Current state: [METRICS TODAY - OEE, DOWNTIME, SCRAP]
- Proposed solution: [YOUR PRODUCT]
- Investment: [TOTAL COST]
- Expected improvement: [TARGET METRICS]
- Payback expectation: [THEIR REQUIREMENT - usually 12-24 months]

Manufacturing proposals need:
1. Clear baseline metrics (current state)
2. Conservative improvement projections
3. Payback calculation (months)
4. NPV/IRR if they require it
5. Risk factors acknowledged
6. Implementation timeline
7. Resource requirements (their side)
8. Reference plants/case studies with actual results

Manufacturing buyers want hard numbers, not promises.`,
  },
  {
    id: 'mfg-follow-up-1',
    title: 'Post-Plant-Visit Follow-Up',
    description: 'Follow up after a manufacturing plant visit',
    category: 'manufacturing',
    subcategory: 'follow-up',
    tags: ['follow-up', 'plant-visit', 'operations'],
    difficulty: 'beginner',
    prompt: `Write a follow-up email after visiting a manufacturing plant.

Context:
- Company: [MANUFACTURER]
- Plant visited: [LOCATION]
- People I met: [NAMES, TITLES]
- What I observed: [SPECIFIC OBSERVATIONS]
- Pain points discussed: [WHAT THEY SHARED]
- Next steps agreed: [WHAT WAS DECIDED]

Follow-up should:
1. Thank them for the plant access (this is a big deal)
2. Reference specific things you saw/discussed
3. Connect observations to your solution
4. Provide any requested information
5. Confirm next steps
6. Offer additional technical resources

Be specific - show you paid attention during the visit.`,
  },
  {
    id: 'mfg-supply-chain-pain',
    title: 'Supply Chain Pain Discovery',
    description: 'Uncover supply chain challenges in manufacturing',
    category: 'manufacturing',
    subcategory: 'discovery',
    tags: ['supply-chain', 'discovery', 'logistics'],
    difficulty: 'intermediate',
    prompt: `Generate questions to uncover supply chain pain in manufacturing.

Context:
- Company: [MANUFACTURER]
- Industry: [AUTOMOTIVE / AEROSPACE / CONSUMER / INDUSTRIAL]
- Supply chain complexity: [LOCAL / REGIONAL / GLOBAL]
- My solution: [HOW YOU HELP SUPPLY CHAIN]

Discovery areas:
1. Supplier management (number, quality, reliability)
2. Inventory challenges (carrying costs, stockouts, obsolescence)
3. Visibility gaps (where they lose sight of materials)
4. Planning accuracy (forecast vs. actual)
5. Lead time pressures (customer expectations vs. reality)
6. Recent disruptions (what went wrong)
7. Regulatory/traceability requirements

Questions should uncover:
- Quantified pain (dollars, days, units)
- Who owns the problem
- Failed solutions they've tried
- Timeline for addressing it`,
  },
  {
    id: 'mfg-quality-pitch',
    title: 'Quality Improvement Positioning',
    description: 'Position solution around quality metrics',
    category: 'manufacturing',
    subcategory: 'proposals',
    tags: ['quality', 'six-sigma', 'defects'],
    difficulty: 'intermediate',
    prompt: `Create quality-focused positioning for manufacturing.

Context:
- Company: [MANUFACTURER]
- Quality challenges: [DEFECT RATE / RECALLS / SCRAP]
- Current quality metrics: [PPM, COPQ, FIRST PASS YIELD]
- My solution: [WHAT YOU SELL]
- Quality impact: [HOW YOU IMPROVE QUALITY]

Position around:
1. Cost of Poor Quality (COPQ) calculation
2. Defect reduction potential
3. Traceability and root cause analysis
4. Compliance/audit readiness
5. Customer quality requirements (OEM scorecards)
6. Quality certifications (ISO, IATF, AS9100)

Build a quality-focused value prop:
- Current state cost (scrap, rework, warranty, recalls)
- Future state improvement (specific metrics)
- ROI calculation
- Risk mitigation (avoid costly recalls)
- Competitive advantage (quality reputation)`,
  },
  {
    id: 'mfg-oem-supplier-approach',
    title: 'OEM Supplier Positioning',
    description: 'Position to Tier 1/2/3 automotive or aerospace suppliers',
    category: 'manufacturing',
    subcategory: 'outreach',
    tags: ['oem', 'supplier', 'automotive', 'aerospace'],
    difficulty: 'advanced',
    prompt: `Create outreach for an OEM supplier.

Context:
- Company: [SUPPLIER NAME]
- Tier: [TIER 1 / TIER 2 / TIER 3]
- OEM customers: [WHO THEY SUPPLY - GM, Ford, Boeing, etc.]
- My solution: [WHAT YOU SELL]
- Supplier requirements addressed: [QUALITY / DELIVERY / COST]

OEM supplier pressures:
- Cost-down demands (annual price reductions)
- Quality scorecards (PPM targets, audits)
- Delivery performance (JIT, sequencing)
- Engineering changes (rapid response required)
- Capacity investments (without guaranteed volume)

Positioning should address:
1. Meeting OEM requirements more efficiently
2. Improving scorecard performance
3. Reducing cost to offset margin pressure
4. Enabling faster response to changes
5. Providing audit-ready documentation

Include references to similar tier suppliers if possible.`,
  },
  {
    id: 'mfg-digital-transformation',
    title: 'Industry 4.0 / Digital Transformation Pitch',
    description: 'Position for manufacturing digital transformation initiatives',
    category: 'manufacturing',
    subcategory: 'proposals',
    tags: ['industry-4.0', 'digital', 'iot', 'automation'],
    difficulty: 'advanced',
    prompt: `Create positioning for Industry 4.0 / digital transformation.

Context:
- Company: [MANUFACTURER]
- Digital maturity: [EARLY / ADVANCING / MATURE]
- Initiative: [SMART FACTORY / IIoT / AUTOMATION / DATA ANALYTICS]
- My solution: [WHAT YOU SELL]
- Digital transformation fit: [HOW YOU ENABLE]

Address common executive questions:
1. What's the ROI on digital initiatives?
2. How does this fit with our existing systems?
3. What skills do we need on our team?
4. What's the implementation risk?
5. How do we scale beyond a pilot?

Create a digital transformation business case:
- Current state (manual, disconnected, reactive)
- Future state (automated, connected, predictive)
- Journey/roadmap (realistic phases)
- Investment required vs. value created
- Risk mitigation approach
- Success stories from similar manufacturers`,
  },
  {
    id: 'mfg-ehs-safety-angle',
    title: 'EHS/Safety Value Positioning',
    description: 'Position product with safety and environmental benefits',
    category: 'manufacturing',
    subcategory: 'objections',
    tags: ['safety', 'ehs', 'compliance', 'environment'],
    difficulty: 'intermediate',
    prompt: `Create safety/EHS-focused positioning.

Context:
- Company: [MANUFACTURER]
- Industry: [IMPACTS REGULATORY ENVIRONMENT]
- Safety challenges: [KNOWN ISSUES]
- My solution: [WHAT YOU SELL]
- Safety/EHS impact: [HOW YOU IMPROVE SAFETY]

Safety value angles:
1. Incident reduction (recordable rate, lost time)
2. Compliance assurance (OSHA, EPA, state regulations)
3. Risk mitigation (costly accidents, liability)
4. Insurance implications (lower premiums possible)
5. Worker satisfaction (safer environment)
6. Audit readiness (documentation, training records)

Position for different audiences:
- Plant manager (operational + liability)
- EHS manager (compliance + metrics)
- CFO (cost of incidents + insurance)
- HR (worker satisfaction + retention)

Include ROI of safety improvements (cost of incidents avoided).`,
  },
];

// Professional Services Prompts
export const professionalServicesPrompts: Prompt[] = [
  {
    id: 'proserv-cold-email-1',
    title: 'Partner-Level Cold Email',
    description: 'Cold email for reaching partners at consulting/law/accounting firms',
    category: 'professional-services',
    subcategory: 'outreach',
    tags: ['cold-email', 'partner', 'consulting'],
    difficulty: 'intermediate',
    prompt: `Write a cold email to a partner at a professional services firm.

Context:
- Recipient: [NAME, TITLE at FIRM]
- Firm type: [CONSULTING / LAW / ACCOUNTING / ARCHITECTURE]
- Firm size: [TIER - Big 4, Am Law 100, Regional, Boutique]
- Signal: [NEW PRACTICE AREA / GROWTH / EFFICIENCY INITIATIVE]
- My solution: [WHAT YOU SELL]
- Utilization/efficiency impact: [HOW YOU HELP]

Professional Services Email Rules:
- Respect the partnership structure
- Speak to utilization, realization, leverage
- Reference peer firms if possible
- Understand billable hour economics
- Be concise (partners bill by the minute mentally)
- Appeal to competitive differentiation

Partners care about: client service, utilization, talent retention, firm growth.`,
  },
  {
    id: 'proserv-discovery-1',
    title: 'Professional Services Discovery',
    description: 'Discovery questions for consulting/law/accounting',
    category: 'professional-services',
    subcategory: 'discovery',
    tags: ['discovery', 'utilization', 'partners'],
    difficulty: 'intermediate',
    prompt: `Generate discovery questions for a professional services firm.

Context:
- Prospect: [NAME, TITLE at FIRM]
- Firm type: [CONSULTING / LAW / ACCOUNTING]
- My product: [WHAT YOU SELL]
- Known initiative: [WHAT THEY'RE WORKING ON]

Professional services discovery categories:
1. Practice economics (utilization, realization, leverage ratios)
2. Current tools/processes (what they use today)
3. Pain points (efficiency, knowledge management, collaboration)
4. Decision process (partnership approval, practice vs. firm-wide)
5. Implementation reality (partner adoption, change management)
6. Client impact (how this affects client service)
7. Competitive landscape (what other firms are doing)

Remember: Every hour of implementation is an hour not billed to a client.`,
  },
  {
    id: 'proserv-objection-1',
    title: 'Handle "Partners Won\'t Adopt It"',
    description: 'Address partner adoption concerns',
    category: 'professional-services',
    subcategory: 'objections',
    tags: ['objection', 'adoption', 'change-management'],
    difficulty: 'advanced',
    prompt: `Help me respond to: "We've tried tools like this before - partners won't use them."

Context:
- My product: [WHAT YOU SELL]
- Their firm: [FIRM TYPE AND SIZE]
- Past failures: [WHAT THEY'VE TRIED - if mentioned]
- Our adoption approach: [HOW WE DRIVE ADOPTION]

Partner adoption is the #1 challenge. Help me:
1. Acknowledge the pattern (professional services is a graveyard of failed tools)
2. Ask about what specifically failed before
3. Explain how our approach differs
4. Reference firms that succeeded with adoption
5. Propose a pilot with willing partners first
6. Discuss change management support we provide

Partners are creatures of habit. Changing workflow is hard when you bill $1,000/hour.`,
  },
  {
    id: 'proserv-proposal-1',
    title: 'Professional Services Business Case',
    description: 'Business case for partnership approval',
    category: 'professional-services',
    subcategory: 'proposals',
    tags: ['proposal', 'partnership', 'business-case'],
    difficulty: 'advanced',
    prompt: `Write a business case for partnership approval.

Context:
- Firm: [FIRM NAME]
- Practice area: [IF SPECIFIC TO ONE PRACTICE]
- Investment: [TOTAL COST]
- Expected impact: [METRICS]
- Champion: [PARTNER CHAMPIONING THIS]
- Concerns raised: [OBJECTIONS FROM OTHER PARTNERS]

Partnership proposals need:
1. Utilization/efficiency ROI (in their metrics)
2. Competitive positioning (what peer firms do)
3. Client service impact
4. Implementation approach (minimal disruption)
5. Risk mitigation
6. Phased rollout option
7. Reference firms (similar size/type)
8. Support and training included

Format for busy partners: Executive summary first, details as appendix.`,
  },
  {
    id: 'proserv-follow-up-1',
    title: 'Partnership Meeting Follow-Up',
    description: 'Follow up after presenting to partners',
    category: 'professional-services',
    subcategory: 'follow-up',
    tags: ['follow-up', 'partnership', 'decision'],
    difficulty: 'intermediate',
    prompt: `Write a follow-up email after presenting to the partnership.

Context:
- Firm: [FIRM NAME]
- Meeting type: [PRACTICE GROUP / PARTNERSHIP / COMMITTEE]
- Outcome: [APPROVED / NEEDS MORE INFO / TABLED]
- Questions raised: [KEY CONCERNS]
- Champion: [YOUR INTERNAL ALLY]
- Timeline: [NEXT STEPS]

Follow-up should:
1. Thank them for the time (partners' time is expensive)
2. Summarize the key points discussed
3. Address specific questions raised
4. Provide any requested documentation
5. Confirm next steps and who owns what
6. Offer to present to individual skeptics

Partnership decisions can take time - maintain patience and provide support to your champion.`,
  },
];

// E-commerce Prompts
export const ecommercePrompts: Prompt[] = [
  {
    id: 'ecom-cold-email-1',
    title: 'E-commerce Executive Cold Email',
    description: 'Cold email for e-commerce and DTC brands',
    category: 'ecommerce',
    subcategory: 'outreach',
    tags: ['cold-email', 'ecommerce', 'dtc'],
    difficulty: 'beginner',
    prompt: `Write a cold email to an e-commerce executive.

Context:
- Recipient: [NAME, TITLE at BRAND]
- Brand type: [DTC / MARKETPLACE SELLER / OMNICHANNEL]
- Approximate revenue: [SIZE]
- Platform: [SHOPIFY / MAGENTO / SALESFORCE / CUSTOM]
- Signal: [NEW LAUNCH / SCALING / CONVERSION ISSUE]
- My solution: [WHAT YOU SELL]
- Metric impact: [CVR / AOV / LTV / ROAS]

E-commerce Email Rules:
- Lead with specific metrics (conversion rate, AOV, ROAS)
- Reference their actual site/products if possible
- Be fast and transactional (they're used to quick decisions)
- Show you understand DTC/e-commerce economics
- Offer quick wins, not long implementations
- Mention competitors using you (they're competitive)

E-commerce buyers move fast. Match their pace.`,
  },
  {
    id: 'ecom-discovery-1',
    title: 'E-commerce Discovery Questions',
    description: 'Discovery for e-commerce optimization',
    category: 'ecommerce',
    subcategory: 'discovery',
    tags: ['discovery', 'conversion', 'metrics'],
    difficulty: 'beginner',
    prompt: `Generate discovery questions for an e-commerce prospect.

Context:
- Prospect: [NAME, TITLE at BRAND]
- Brand category: [APPAREL / BEAUTY / FOOD / etc.]
- Channel mix: [DTC / AMAZON / RETAIL]
- My product: [WHAT YOU SELL]
- Likely pain: [CVR / ACQUISITION COST / RETENTION]

E-commerce discovery categories:
1. Current metrics (conversion rate, AOV, LTV, CAC)
2. Traffic sources and ROAS by channel
3. Tech stack (platform, apps, integrations)
4. Team structure (who owns what)
5. Seasonal patterns and upcoming peaks
6. Current experiments/tests running
7. Decision process (usually faster than enterprise)

E-commerce teams are metrics-obsessed. Come with benchmark data.`,
  },
  {
    id: 'ecom-objection-1',
    title: 'Handle "We Just Launched a New Site"',
    description: 'Navigate timing after a replatform',
    category: 'ecommerce',
    subcategory: 'objections',
    tags: ['objection', 'timing', 'replatform'],
    difficulty: 'intermediate',
    prompt: `Help me respond to: "We just launched a new site / replatformed. We're not adding anything else right now."

Context:
- My product: [WHAT YOU SELL]
- Their platform: [SHOPIFY / MAGENTO / etc.]
- When they launched: [HOW RECENTLY]
- Integration complexity: [HOW EASY WE ARE TO ADD]

Post-replatform is actually a great time. Help me:
1. Validate their caution (replatforms are exhausting)
2. Position as enhancing their new investment
3. Explain lightweight integration (if true)
4. Reference other post-replatform implementations
5. Propose a small pilot that doesn't require IT
6. Plant seed for 90 days from now if they're not ready

Timing objections in e-commerce are often soft - they move fast when they see value.`,
  },
  {
    id: 'ecom-proposal-1',
    title: 'E-commerce ROI Proposal',
    description: 'Quick ROI case for e-commerce',
    category: 'ecommerce',
    subcategory: 'proposals',
    tags: ['proposal', 'roi', 'conversion'],
    difficulty: 'intermediate',
    prompt: `Write a quick ROI proposal for an e-commerce brand.

Context:
- Brand: [NAME]
- Monthly revenue: [APPROXIMATE]
- Current conversion rate: [CVR]
- Current AOV: [AVERAGE ORDER VALUE]
- My solution: [WHAT YOU SELL]
- Expected impact: [% IMPROVEMENT]
- Price: [YOUR COST]

E-commerce proposals need:
1. Simple math: Current revenue × expected lift = incremental revenue
2. Payback period (they think in months, not years)
3. Case study with similar brand
4. Implementation timeline (they want fast)
5. A/B test proposal to prove it
6. Easy cancellation if it doesn't work (reduces risk)

Keep it to one page. E-commerce teams don't read long proposals.`,
  },
  {
    id: 'ecom-follow-up-1',
    title: 'Post-Peak Season Follow-Up',
    description: 'Re-engage after Black Friday / holiday',
    category: 'ecommerce',
    subcategory: 'follow-up',
    tags: ['follow-up', 'seasonal', 'bfcm'],
    difficulty: 'beginner',
    prompt: `Write a follow-up email after peak season ends.

Context:
- Brand: [NAME]
- Contact: [NAME, TITLE]
- Their peak results: [IF KNOWN - BFCM performance]
- Our last conversation: [WHAT YOU DISCUSSED]
- My solution: [WHAT YOU SELL]

Post-peak follow-up should:
1. Acknowledge the peak season push (they're exhausted)
2. Reference their results if public (congrats or sympathy)
3. Connect to what they could improve for next year
4. Remind them of your previous conversation
5. Propose a quick call now that things are calmer
6. Reference timeline to implement before next peak

January-February is planning season. Help them think about next year.`,
  },
  {
    id: 'ecom-retention-pitch',
    title: 'Customer Retention/LTV Positioning',
    description: 'Position around customer lifetime value',
    category: 'ecommerce',
    subcategory: 'proposals',
    tags: ['retention', 'ltv', 'loyalty', 'repeat-purchase'],
    difficulty: 'intermediate',
    prompt: `Create retention/LTV-focused positioning for e-commerce.

Context:
- Brand: [NAME]
- Category: [PRODUCT CATEGORY]
- Current repeat rate: [% OF CUSTOMERS WHO REPEAT]
- Current LTV: [IF KNOWN]
- Acquisition cost: [CAC]
- My solution: [WHAT YOU SELL]
- LTV impact: [HOW YOU IMPROVE RETENTION]

Build an LTV business case:
1. Current LTV calculation
2. Current CAC to LTV ratio
3. Industry benchmarks for their category
4. Improvement potential with your solution
5. Revenue impact of LTV improvement
6. ROI projection

Address:
- Why retention matters more than acquisition
- Quick wins to show early value
- Long-term program evolution
- Integration with their existing stack`,
  },
  {
    id: 'ecom-agency-partnership',
    title: 'E-commerce Agency Partnership Pitch',
    description: 'Pitch to e-commerce agencies for partnership',
    category: 'ecommerce',
    subcategory: 'outreach',
    tags: ['agency', 'partnership', 'referral'],
    difficulty: 'intermediate',
    prompt: `Create a partnership pitch for an e-commerce agency.

Context:
- Agency: [NAME]
- Agency specialty: [SHOPIFY / CRO / PAID MEDIA / EMAIL / FULL SERVICE]
- Their typical clients: [SIZE AND TYPE]
- My solution: [WHAT YOU SELL]
- Partnership model: [REFERRAL / RESELLER / IMPLEMENTATION PARTNER]

Agency partnership pitch:
1. How we help their clients succeed
2. Commission/referral structure
3. How we make them look good
4. Case study of agency + us working together
5. Technical support we provide
6. Co-marketing opportunities
7. Deal registration and protection

Address agency concerns:
- Will this complicate our delivery?
- How does this affect our margins?
- Is this easy to position to clients?
- What's the support model?`,
  },
  {
    id: 'ecom-platform-integration',
    title: 'Platform Integration Pitch',
    description: 'Position your integration with Shopify/BigCommerce/etc.',
    category: 'ecommerce',
    subcategory: 'proposals',
    tags: ['integration', 'shopify', 'platform'],
    difficulty: 'beginner',
    prompt: `Create integration-focused pitch for e-commerce platform.

Context:
- Prospect platform: [SHOPIFY / BIGCOMMERCE / MAGENTO / WOOCOMMERCE]
- Our integration: [APP STORE / NATIVE / API]
- Integration complexity: [ONE-CLICK / DEVELOPER NEEDED]
- My solution: [WHAT YOU SELL]
- Integration benefits: [WHAT'S EASY/AUTOMATIC]

Position the integration:
1. Installation simplicity (how fast to get started)
2. Data sync capabilities (what flows automatically)
3. No developer required (if true)
4. App store reviews/ratings (if applicable)
5. Other brands on their platform using us
6. Support for their specific platform features

Include:
- Step-by-step setup overview
- Time to value (how fast they see results)
- What data we access and why
- Security and privacy compliance`,
  },
  {
    id: 'ecom-amazon-seller-pitch',
    title: 'Amazon Seller Outreach',
    description: 'Cold outreach to Amazon marketplace sellers',
    category: 'ecommerce',
    subcategory: 'outreach',
    tags: ['amazon', 'marketplace', 'seller'],
    difficulty: 'intermediate',
    prompt: `Create outreach for Amazon sellers/brands.

Context:
- Seller: [BRAND/SELLER NAME]
- Seller type: [1P / 3P / HYBRID]
- Category: [PRODUCT CATEGORY]
- Approximate revenue: [SIZE]
- Signal: [NEW PRODUCT / RANKING CHANGE / REVIEW ISSUE]
- My solution: [WHAT YOU SELL]
- Amazon-specific value: [HOW YOU HELP ON AMAZON]

Amazon seller priorities:
- Buy box ownership
- Review management and ratings
- Advertising efficiency (ACOS, TACOS)
- Inventory management
- Competitor monitoring
- Account health and compliance

Email should:
1. Reference something specific about their Amazon presence
2. Speak to Amazon-specific metrics
3. Understand their seller central pain points
4. Position quick wins (they're scrappy)
5. Acknowledge if they have DTC too (multichannel)`,
  },
];

// Real Estate Prompts
export const realEstatePrompts: Prompt[] = [
  {
    id: 're-cold-email-1',
    title: 'Commercial Real Estate Cold Email',
    description: 'Cold email for commercial real estate professionals',
    category: 'real-estate',
    subcategory: 'outreach',
    tags: ['cold-email', 'cre', 'brokerage'],
    difficulty: 'intermediate',
    prompt: `Write a cold email to a commercial real estate professional.

Context:
- Recipient: [NAME, TITLE at FIRM]
- CRE role: [BROKER / OWNER / DEVELOPER / PROPERTY MANAGER]
- Asset class: [OFFICE / RETAIL / INDUSTRIAL / MULTIFAMILY]
- Market: [GEOGRAPHIC MARKET]
- Signal: [RECENT DEAL / NEW LISTING / MARKET TREND]
- My solution: [WHAT YOU SELL]
- Deal impact: [HOW YOU HELP THEM WIN/CLOSE]

Real Estate Email Rules:
- Reference specific deals or properties if possible
- Speak to their commission/fee structure
- Understand the competitive brokerage landscape
- Respect relationship-based nature of the business
- Timing matters - be aware of deal cycles
- Offer to help them win their next listing or close their current deal

Real estate is relationship-driven. Position as a tool to strengthen their relationships.`,
  },
  {
    id: 're-discovery-1',
    title: 'Real Estate Discovery Questions',
    description: 'Discovery for real estate tech sales',
    category: 'real-estate',
    subcategory: 'discovery',
    tags: ['discovery', 'proptech', 'deals'],
    difficulty: 'intermediate',
    prompt: `Generate discovery questions for a real estate prospect.

Context:
- Prospect: [NAME, TITLE at FIRM/COMPANY]
- CRE segment: [BROKERAGE / OWNERSHIP / DEVELOPMENT / MANAGEMENT]
- My product: [WHAT YOU SELL]
- Their likely pain: [DEAL FLOW / EFFICIENCY / DATA]

Real estate discovery categories:
1. Current deal flow (volume, average deal size, close rate)
2. Tech stack (CRM, marketing tools, data sources)
3. Team structure and workflow
4. Competitive landscape (who they compete against)
5. Decision process (individual broker vs. firm-wide)
6. Budget (tech budget often limited)
7. Success metrics (deals closed, volume, commissions)

Real estate is fragmented. Understand if you're selling to individuals or firms.`,
  },
  {
    id: 're-objection-1',
    title: 'Handle "I Have My Own System"',
    description: 'When brokers have personal workflows',
    category: 'real-estate',
    subcategory: 'objections',
    tags: ['objection', 'workflow', 'individual'],
    difficulty: 'advanced',
    prompt: `Help me respond to: "I've got my own system that works for me."

Context:
- My product: [WHAT YOU SELL]
- Their role: [BROKER / AGENT / MANAGER]
- Their "system": [WHAT THEY LIKELY USE - spreadsheets, notes, etc.]
- Our differentiation: [WHAT WE DO BETTER]

This is common with independent brokers. Help me:
1. Respect their success with current system
2. Ask about specific friction points (not general)
3. Understand their actual workflow
4. Find the wedge (scaling, team growth, efficiency)
5. Position as enhancing, not replacing their system
6. Offer a trial tied to their next active deal

Top brokers are protective of their process. Show value without threatening their identity.`,
  },
  {
    id: 're-proposal-1',
    title: 'Brokerage Firm Proposal',
    description: 'Proposal for firm-wide real estate technology',
    category: 'real-estate',
    subcategory: 'proposals',
    tags: ['proposal', 'brokerage', 'firm-wide'],
    difficulty: 'advanced',
    prompt: `Write a proposal for a real estate brokerage firm.

Context:
- Firm: [BROKERAGE NAME]
- Size: [NUMBER OF BROKERS/AGENTS]
- Markets: [GEOGRAPHIC COVERAGE]
- Asset focus: [OFFICE / RETAIL / INDUSTRIAL / etc.]
- Champion: [YOUR INTERNAL ALLY]
- Investment: [YOUR PRICE]
- Key pain: [WHAT THEY WANT TO SOLVE]

Brokerage proposals need:
1. Individual broker value prop (what's in it for each agent)
2. Firm-level value (recruiting, retention, brand)
3. Adoption plan (brokers are independent)
4. Integration with existing tools
5. Support and training
6. Reference firms (similar size/market)
7. Flexible pricing (per broker vs. firm)

The challenge: Firm leadership buys, but brokers decide to use it.`,
  },
  {
    id: 're-follow-up-1',
    title: 'Post-Deal Follow-Up',
    description: 'Follow up after they close a deal',
    category: 'real-estate',
    subcategory: 'follow-up',
    tags: ['follow-up', 'deal', 'relationship'],
    difficulty: 'beginner',
    prompt: `Write a follow-up email after a prospect closes a deal.

Context:
- Contact: [NAME, TITLE at FIRM]
- Deal they closed: [PROPERTY / TRANSACTION]
- Our relationship: [PROSPECT / CUSTOMER / CHURNED]
- My solution: [WHAT YOU SELL]
- How we could have helped: [VALUE WE BRING]

Post-deal follow-up should:
1. Congratulate them on the deal (be specific about the property)
2. Don't make it about you (celebrate their win)
3. Gentle plant for next deal
4. Offer value (market data, insights, etc.)
5. Keep door open

Real estate is cyclical. Stay visible for their next deal.`,
  },
];

// Education Prompts
export const educationPrompts: Prompt[] = [
  {
    id: 'edu-cold-email-1',
    title: 'K-12 Administrator Cold Email',
    description: 'Cold email for reaching school district administrators',
    category: 'education',
    subcategory: 'outreach',
    tags: ['cold-email', 'k12', 'edtech'],
    difficulty: 'intermediate',
    prompt: `Write a cold email to a K-12 administrator.

Context:
- Recipient: [NAME, TITLE - Superintendent, Curriculum Director, CTO, etc.]
- District: [DISTRICT NAME]
- Size: [NUMBER OF STUDENTS / SCHOOLS]
- Signal: [GRANT / INITIATIVE / ADOPTION CYCLE]
- My solution: [WHAT YOU SELL]
- Student outcome impact: [HOW YOU HELP STUDENTS]

Education Email Rules:
- Lead with student outcomes, not features
- Reference research/evidence base if available
- Understand the buying cycle (often annual)
- Be aware of budget cycles and funding sources
- Respect their mission-driven culture
- Never be pushy (educators are sensitive to sales tactics)

Educators care about: student success, teacher support, equity, evidence-based practices.`,
  },
  {
    id: 'edu-discovery-1',
    title: 'Education Discovery Questions',
    description: 'Discovery for K-12 and higher ed sales',
    category: 'education',
    subcategory: 'discovery',
    tags: ['discovery', 'k12', 'higher-ed'],
    difficulty: 'intermediate',
    prompt: `Generate discovery questions for an education prospect.

Context:
- Prospect: [NAME, TITLE at INSTITUTION]
- Institution type: [K-12 / HIGHER ED / DISTRICT / STATE]
- My product: [WHAT YOU SELL]
- Known initiative: [WHAT THEY'RE WORKING ON]

Education discovery categories:
1. Student/learning outcomes (what they measure, goals)
2. Current solutions (what they use today)
3. Teacher/staff experience (adoption, workload)
4. Budget and funding (grants, operating, capital)
5. Decision process (committees, board approval, procurement)
6. Implementation timeline (school year considerations)
7. Equity and access requirements
8. Integration needs (SIS, LMS, rostering)

Education buying cycles align to school years. Understand their calendar.`,
  },
  {
    id: 'edu-objection-1',
    title: 'Handle "We Don\'t Have Budget"',
    description: 'Navigate budget constraints in education',
    category: 'education',
    subcategory: 'objections',
    tags: ['objection', 'budget', 'funding'],
    difficulty: 'advanced',
    prompt: `Help me respond to: "We don't have budget for this."

Context:
- My product: [WHAT YOU SELL]
- Their institution: [TYPE AND SIZE]
- Price: [YOUR COST]
- Funding opportunities: [GRANTS, ESSER, TITLE I, etc.]

Budget is real in education, but there are often creative paths. Help me:
1. Understand the specific constraint (none at all vs. not budgeted)
2. Ask about grant funding possibilities
3. Explore alternative budget lines (PD, curriculum, technology)
4. Discuss pilot options to prove value first
5. Align to their budget cycle for future
6. Connect them with similar districts who found funding

Never pressure. Education budgets are genuinely constrained.`,
  },
  {
    id: 'edu-proposal-1',
    title: 'District RFP Response Framework',
    description: 'Framework for responding to education RFPs',
    category: 'education',
    subcategory: 'proposals',
    tags: ['proposal', 'rfp', 'district'],
    difficulty: 'advanced',
    prompt: `Help me respond to an education RFP/RFQ.

Context:
- District/Institution: [NAME]
- RFP for: [WHAT THEY'RE BUYING]
- Key requirements: [MUST-HAVES FROM RFP]
- Evaluation criteria: [HOW THEY'LL SCORE]
- My solution: [WHAT YOU SELL]
- Competitors likely responding: [WHO ELSE]

Education RFP responses need:
1. Complete compliance matrix (hit every requirement)
2. Student outcome focus (not features)
3. Implementation plan (aligned to school calendar)
4. Professional development included
5. References from similar districts
6. Pricing in their required format
7. Evidence base / research citations
8. Equity and accessibility statements

Education RFPs are often checkbox-driven. Don't miss any requirements.`,
  },
  {
    id: 'edu-follow-up-1',
    title: 'End-of-Year Follow-Up',
    description: 'Re-engage before summer planning season',
    category: 'education',
    subcategory: 'follow-up',
    tags: ['follow-up', 'planning', 'budget'],
    difficulty: 'beginner',
    prompt: `Write a follow-up email for end-of-year planning season.

Context:
- Institution: [DISTRICT / SCHOOL / UNIVERSITY]
- Contact: [NAME, TITLE]
- Our history: [PREVIOUS CONVERSATIONS]
- My solution: [WHAT YOU SELL]
- Next year timing: [WHEN THEY'D IMPLEMENT]

End-of-year follow-up should:
1. Acknowledge end-of-year busyness
2. Plant seed for summer/fall planning
3. Reference any pilot results or interest
4. Offer planning conversation for next year
5. Be respectful of their timeline

Spring is when next year's budgets form. Be present but patient.`,
  },
  {
    id: 'edu-grant-positioning',
    title: 'Grant Funding Positioning',
    description: 'Position product for grant-funded purchases',
    category: 'education',
    subcategory: 'proposals',
    tags: ['grant', 'funding', 'esser', 'title'],
    difficulty: 'advanced',
    prompt: `Position my product for grant-funded purchase.

Context:
- District: [DISTRICT NAME]
- Grant type: [ESSER / TITLE I / STATE / FOUNDATION]
- Grant deadline: [WHEN FUNDS EXPIRE]
- My product: [WHAT YOU SELL]
- Educational outcome: [WHAT IT ACHIEVES]
- Allowable use alignment: [HOW IT FITS GRANT REQUIREMENTS]

Create positioning that:
1. Maps to grant allowable uses
2. Connects to academic outcomes
3. Includes required data/assessment
4. Addresses sustainability (after grant ends)
5. Provides budget justification language
6. References similar grant-funded implementations

Include:
- Language they can use in grant applications
- Evidence/research citations
- Budget line item suggestions
- Compliance checkboxes to address`,
  },
  {
    id: 'edu-committee-presentation',
    title: 'School Board / Committee Presentation',
    description: 'Present to school board or adoption committee',
    category: 'education',
    subcategory: 'proposals',
    tags: ['board', 'committee', 'presentation'],
    difficulty: 'advanced',
    prompt: `Create a school board presentation for my product.

Context:
- District: [DISTRICT NAME]
- Board/Committee: [SCHOOL BOARD / ADOPTION COMMITTEE / TECH COMMITTEE]
- Champion: [WHO'S PRESENTING WITH/FOR YOU]
- Investment: [TOTAL COST]
- Students impacted: [NUMBER]
- Key concern: [WHAT THEY CARE MOST ABOUT]

Board presentation must address:
1. Educational need (data-driven)
2. Alignment to district goals
3. Evidence of effectiveness
4. Total cost and funding source
5. Implementation plan
6. Professional development included
7. Success metrics and accountability
8. Privacy and security
9. Equity considerations
10. Community impact

Format for:
- 10-minute presentation
- Board packet document
- Parent-friendly FAQ`,
  },
  {
    id: 'edu-pilot-results',
    title: 'Pilot Results Summary',
    description: 'Summarize pilot results for expansion decision',
    category: 'education',
    subcategory: 'follow-up',
    tags: ['pilot', 'results', 'expansion'],
    difficulty: 'intermediate',
    prompt: `Summarize pilot results for expansion recommendation.

Pilot details:
- District: [DISTRICT]
- Schools in pilot: [NUMBER/NAMES]
- Duration: [WEEKS/MONTHS]
- Students reached: [NUMBER]
- Teachers involved: [NUMBER]
- Success metrics tracked: [WHAT WAS MEASURED]
- Results: [DATA/OUTCOMES]
- Feedback: [QUALITATIVE FEEDBACK]

Create summary that:
1. Shows measurable outcomes
2. Includes teacher/student quotes
3. Compares to baseline or control
4. Addresses challenges honestly
5. Projects district-wide impact
6. Recommends expansion path
7. Provides implementation timeline
8. Calculates cost per student

Format for:
- Superintendent summary (1 page)
- Board presentation (3 slides)
- Full report (detailed)`,
  },
  {
    id: 'edu-teacher-champion',
    title: 'Building Teacher Champions',
    description: 'Cultivate teacher advocates for edtech adoption',
    category: 'education',
    subcategory: 'strategy',
    tags: ['teacher', 'champion', 'adoption'],
    difficulty: 'intermediate',
    prompt: `Strategy to build teacher champions for my edtech product.

Context:
- Product: [WHAT YOU SELL]
- Target grades/subjects: [GRADE LEVELS / SUBJECTS]
- Current teacher users: [IF ANY]
- District: [DISTRICT NAME]
- Goal: [PILOT / ADOPTION / EXPANSION]

Build champion strategy:
1. Identify ideal teacher profile
2. Initial outreach approach
3. Value proposition for teachers
4. Support to make them successful
5. Recognition and visibility
6. How they influence administration
7. Peer-to-peer spreading strategy

Teacher motivations:
- Student outcomes
- Time savings
- Professional growth
- Recognition from peers/admin
- Making their job easier

Provide outreach templates and talking points.`,
  },
  {
    id: 'edu-renewal-pitch',
    title: 'District Renewal Pitch',
    description: 'Pitch for contract renewal with expanded scope',
    category: 'education',
    subcategory: 'proposals',
    tags: ['renewal', 'expansion', 'district'],
    difficulty: 'intermediate',
    prompt: `Create a renewal pitch for this district.

Current contract:
- District: [DISTRICT NAME]
- Current products: [WHAT THEY HAVE]
- Contract value: [ANNUAL AMOUNT]
- Renewal date: [WHEN]
- Usage level: [HIGH/MEDIUM/LOW]
- Results achieved: [OUTCOMES DATA]

Renewal pitch should:
1. Celebrate their success (with data)
2. Show ROI vs. original expectations
3. Present expansion opportunities
4. Offer multi-year incentives
5. Address any concerns or gaps
6. Lock in favorable pricing
7. Align to upcoming initiatives

Expansion angles:
- Additional schools
- Additional grade levels
- Additional products/modules
- Professional development
- Support tier upgrade`,
  },
];

// Logistics & Supply Chain Prompts
export const logisticsPrompts: Prompt[] = [
  {
    id: 'logistics-cold-email-1',
    title: 'Supply Chain Executive Cold Email',
    description: 'Cold email for VP Supply Chain or Logistics Director',
    category: 'logistics',
    subcategory: 'outreach',
    tags: ['cold-email', 'supply-chain', 'operations'],
    difficulty: 'intermediate',
    prompt: `Write a cold email to a supply chain or logistics executive.

Context:
- Recipient: [NAME, TITLE - VP Supply Chain, Director of Logistics, etc.]
- Company: [COMPANY NAME]
- Industry: [THEIR INDUSTRY]
- Signal: [EXPANSION / DISRUPTION / EFFICIENCY INITIATIVE]
- My solution: [WHAT YOU SELL]
- Key metric impact: [ON-TIME DELIVERY / INVENTORY TURNS / FREIGHT COST]

Logistics Email Rules:
- Lead with operational metrics (OTIF, inventory turns, freight spend)
- Reference supply chain disruptions or challenges
- Speak to visibility, efficiency, resilience
- Understand their network complexity
- Be practical - logistics leaders are operators
- Reference similar companies or industries

Supply chain executives care about: reliability, cost, visibility, speed, flexibility.`,
  },
  {
    id: 'logistics-discovery-1',
    title: 'Supply Chain Discovery Questions',
    description: 'Discovery for supply chain technology sales',
    category: 'logistics',
    subcategory: 'discovery',
    tags: ['discovery', 'supply-chain', 'operations'],
    difficulty: 'intermediate',
    prompt: `Generate discovery questions for a supply chain prospect.

Context:
- Prospect: [NAME, TITLE at COMPANY]
- Supply chain type: [MANUFACTURING / RETAIL / 3PL / DISTRIBUTION]
- My product: [WHAT YOU SELL]
- Known challenges: [VISIBILITY / COST / SPEED / RELIABILITY]

Supply chain discovery categories:
1. Network overview (facilities, partners, geography)
2. Current pain (where things break down)
3. Technology stack (TMS, WMS, ERP, visibility tools)
4. Key metrics (OTIF, inventory days, freight cost per unit)
5. Decision process (ops vs. IT vs. finance)
6. Integration requirements (EDI, API, ERP connection)
7. Seasonality and peaks (planning cycles)

Supply chain is complex - map the network before proposing solutions.`,
  },
  {
    id: 'logistics-objection-1',
    title: 'Handle "We Have Too Many Systems Already"',
    description: 'Navigate integration fatigue in supply chain',
    category: 'logistics',
    subcategory: 'objections',
    tags: ['objection', 'integration', 'systems'],
    difficulty: 'advanced',
    prompt: `Help me respond to: "We have too many systems already. We can't add another one."

Context:
- My product: [WHAT YOU SELL]
- Their current stack: [SYSTEMS THEY MENTIONED]
- Integration approach: [HOW WE CONNECT]
- Our differentiation: [WHAT WE DO BETTER]

This is common in supply chain (system fatigue is real). Help me:
1. Acknowledge the integration burden
2. Ask about specific pain their current systems don't solve
3. Position as consolidating/simplifying (if true)
4. Explain our integration approach clearly
5. Offer to map to their existing architecture
6. Propose a pilot that proves integration ease

Never dismiss their concern - supply chain integration is genuinely hard.`,
  },
  {
    id: 'logistics-proposal-1',
    title: 'Supply Chain ROI Proposal',
    description: 'Build an ROI case for logistics investment',
    category: 'logistics',
    subcategory: 'proposals',
    tags: ['proposal', 'roi', 'logistics'],
    difficulty: 'advanced',
    prompt: `Write an ROI-focused proposal for a supply chain investment.

Context:
- Company: [NAME]
- Annual freight spend: [IF KNOWN]
- Current metrics: [OTIF %, INVENTORY DAYS, COST PER ORDER]
- Pain points: [SPECIFIC ISSUES]
- My solution: [WHAT YOU SELL]
- Expected improvements: [TARGET METRICS]
- Investment: [YOUR PRICE]

Supply chain proposals need:
1. Baseline metrics (current state)
2. Industry benchmarks (where they should be)
3. Hard dollar savings (freight, labor, inventory)
4. Soft benefits (visibility, speed, customer satisfaction)
5. Implementation timeline and phases
6. Integration requirements and effort
7. Risk factors and mitigation
8. Reference customers in similar situations

Supply chain buyers want specific, defensible numbers.`,
  },
  {
    id: 'logistics-follow-up-1',
    title: 'Peak Season Follow-Up',
    description: 'Re-engage after peak shipping season',
    category: 'logistics',
    subcategory: 'follow-up',
    tags: ['follow-up', 'peak-season', 'operations'],
    difficulty: 'beginner',
    prompt: `Write a follow-up email after peak shipping season.

Context:
- Company: [NAME]
- Contact: [NAME, TITLE]
- Their peak: [HOLIDAY / BACK-TO-SCHOOL / SEASONAL]
- How peak went: [IF KNOWN]
- Our last conversation: [CONTEXT]
- My solution: [WHAT YOU SELL]

Post-peak follow-up should:
1. Acknowledge the intensity of peak season
2. Ask how it went (genuinely curious)
3. Connect any problems to your solution
4. Propose a planning conversation for next year
5. Reference specific improvements you could have helped with

January-February is planning season for most supply chains. Be present.`,
  },
  {
    id: 'logistics-3pl-pitch',
    title: '3PL Provider Pitch',
    description: 'Pitch to third-party logistics providers',
    category: 'logistics',
    subcategory: 'outreach',
    tags: ['3pl', 'provider', 'warehouse'],
    difficulty: 'intermediate',
    prompt: `Create a pitch for a 3PL provider.

Context:
- 3PL: [COMPANY NAME]
- Size: [WAREHOUSES / SHIPMENTS]
- Specialization: [E-COMMERCE / RETAIL / B2B / COLD CHAIN]
- Their customers: [WHO THEY SERVE]
- My solution: [WHAT YOU SELL]
- Operational impact: [HOW YOU HELP]

3PL value drivers:
1. Margin improvement (their business is thin margins)
2. Customer stickiness (reduce churn)
3. New capability for sales team
4. Operational efficiency (labor, space)
5. Customer visibility demands
6. Competitive differentiation

Position for:
- Operations team (efficiency)
- Sales team (new capabilities to sell)
- Executive team (margin and growth)

3PLs sell your product to their customers - help them sell.`,
  },
  {
    id: 'logistics-shipper-pitch',
    title: 'Shipper Direct Pitch',
    description: 'Pitch to companies that ship goods (brands, retailers)',
    category: 'logistics',
    subcategory: 'outreach',
    tags: ['shipper', 'brand', 'retail'],
    difficulty: 'intermediate',
    prompt: `Create a pitch for a shipper (brand/retailer).

Context:
- Company: [BRAND/RETAILER NAME]
- Industry: [CPG / RETAIL / MANUFACTURING / ETC]
- Shipping volume: [ANNUAL SHIPMENTS OR FREIGHT SPEND]
- Current setup: [IN-HOUSE / 3PL / HYBRID]
- Pain points: [COST / VISIBILITY / SPEED / COMPLEXITY]
- My solution: [WHAT YOU SELL]

Shipper priorities:
1. Freight cost management
2. On-time delivery (customer experience)
3. Inventory optimization
4. Visibility and control
5. Carrier performance
6. Claims and damages

Position around:
- Cost savings (freight spend reduction)
- Service improvement (OTIF, customer satisfaction)
- Visibility (track and trace, exception management)
- Operational efficiency (automation, reporting)

Shippers are cost-conscious but increasingly service-focused.`,
  },
  {
    id: 'logistics-carrier-pitch',
    title: 'Carrier Sales Pitch',
    description: 'Pitch to trucking companies and carriers',
    category: 'logistics',
    subcategory: 'outreach',
    tags: ['carrier', 'trucking', 'transportation'],
    difficulty: 'intermediate',
    prompt: `Create a pitch for a trucking/carrier company.

Context:
- Carrier: [COMPANY NAME]
- Size: [FLEET SIZE / DRIVERS]
- Type: [TL / LTL / SPECIALIZED / DRAYAGE]
- Service area: [REGIONAL / NATIONAL / CROSS-BORDER]
- My solution: [WHAT YOU SELL]
- Operational benefit: [DRIVER RETENTION / EFFICIENCY / MARGIN]

Carrier pain points:
1. Driver recruitment and retention
2. Asset utilization (empty miles)
3. Fuel costs
4. Compliance (ELD, HOS, safety)
5. Rate pressure from brokers/shippers
6. Operating ratio

Position around:
- Driver satisfaction (reduces turnover)
- Revenue per truck (better utilization)
- Compliance simplification
- Cost reduction (fuel, maintenance)
- Shipper relationships (service improvement)

Carriers are margin-sensitive. Show clear ROI fast.`,
  },
  {
    id: 'logistics-disruption-outreach',
    title: 'Supply Chain Disruption Outreach',
    description: 'Outreach when supply chain disruption is news',
    category: 'logistics',
    subcategory: 'outreach',
    tags: ['disruption', 'trigger', 'timely'],
    difficulty: 'intermediate',
    prompt: `Create outreach tied to supply chain disruption news.

Disruption type:
- Port congestion/strike
- Weather event
- Geopolitical issue
- Carrier bankruptcy
- Pandemic impact
- Capacity crisis

Context:
- Prospect: [COMPANY]
- How they're affected: [IMPACT]
- My solution: [WHAT YOU SELL]
- How we help in crisis: [SPECIFIC VALUE]

Outreach approach:
1. Acknowledge the disruption (don't exploit tragedy)
2. Be genuinely helpful (not opportunistic)
3. Offer insight or assistance first
4. Connect to prevention/mitigation
5. Position as long-term resilience

Provide:
- Email template
- LinkedIn message
- Call script
- Helpful resource to share

Be helpful, not vulture-like.`,
  },
  {
    id: 'logistics-integration-guide',
    title: 'Logistics Integration Discussion Guide',
    description: 'Navigate TMS/WMS/ERP integration conversations',
    category: 'logistics',
    subcategory: 'discovery',
    tags: ['integration', 'tms', 'wms', 'erp'],
    difficulty: 'advanced',
    prompt: `Guide for discussing logistics system integration.

Context:
- Prospect: [COMPANY]
- Their systems: [TMS / WMS / ERP / OTHER]
- Integration needed: [API / EDI / FILE / NATIVE]
- My product: [WHAT YOU SELL]
- Our integration approach: [HOW WE CONNECT]

Discussion topics:
1. Current system landscape
2. Integration pain points today
3. IT team involvement and capacity
4. Standards they use (EDI 204/214/990, API)
5. Data requirements
6. Timeline and phasing
7. Who's done integrations before

Questions to ask:
- What's your current integration architecture?
- What's worked well with past integrations?
- What's been challenging?
- Who owns integrations internally?
- What's your testing process?

Red flags and how to address them.`,
  },
];

// Energy & Utilities Prompts
export const energyPrompts: Prompt[] = [
  {
    id: 'energy-cold-email-1',
    title: 'Utility Executive Cold Email',
    description: 'Cold email for energy and utility decision makers',
    category: 'energy',
    subcategory: 'outreach',
    tags: ['cold-email', 'utility', 'energy'],
    difficulty: 'intermediate',
    prompt: `Write a cold email to an energy or utility executive.

Context:
- Recipient: [NAME, TITLE]
- Utility type: [ELECTRIC / GAS / WATER / MULTI-UTILITY]
- Size: [CUSTOMERS SERVED / TERRITORY]
- Signal: [REGULATORY CHANGE / INFRASTRUCTURE / SUSTAINABILITY GOAL]
- My solution: [WHAT YOU SELL]
- Regulatory alignment: [HOW YOU HELP WITH COMPLIANCE]

Energy/Utility Email Rules:
- Understand their regulatory environment (PUC, FERC, state mandates)
- Reference sustainability/decarbonization goals
- Speak to grid reliability, safety, customer experience
- Be aware of rate case cycles
- Long sales cycles are normal (12-24+ months)
- Reference similar utilities or regulatory requirements

Utility buyers care about: reliability, safety, compliance, customer satisfaction, rates.`,
  },
  {
    id: 'energy-discovery-1',
    title: 'Utility Discovery Questions',
    description: 'Discovery for utility and energy sales',
    category: 'energy',
    subcategory: 'discovery',
    tags: ['discovery', 'utility', 'regulated'],
    difficulty: 'intermediate',
    prompt: `Generate discovery questions for a utility prospect.

Context:
- Prospect: [NAME, TITLE at UTILITY]
- Utility type: [ELECTRIC / GAS / WATER]
- My product: [WHAT YOU SELL]
- Known initiative: [WHAT THEY'RE WORKING ON]

Utility discovery categories:
1. Regulatory environment (PUC requirements, rate cases, mandates)
2. Current systems and infrastructure age
3. Capital vs. operating budget dynamics
4. Sustainability and decarbonization goals
5. Customer experience initiatives
6. Workforce challenges (aging workforce, safety)
7. Decision process (extremely long and complex)
8. Rate case timing (critical for budgeting)

Utilities are heavily regulated - understand the regulatory drivers first.`,
  },
  {
    id: 'energy-objection-1',
    title: 'Handle "It\'s Not in the Rate Case"',
    description: 'Navigate rate case budget constraints',
    category: 'energy',
    subcategory: 'objections',
    tags: ['objection', 'rate-case', 'budget'],
    difficulty: 'advanced',
    prompt: `Help me respond to: "This isn't included in our current rate case / capital plan."

Context:
- My product: [WHAT YOU SELL]
- Their utility: [TYPE AND SIZE]
- Their rate case cycle: [IF KNOWN]
- Budget category: [CAPEX vs OPEX implications]

This is a real constraint in utilities. Help me:
1. Understand their rate case timeline
2. Ask about alternative budget categories (O&M vs. capital)
3. Explore pilot or proof-of-concept scope
4. Position for next rate case inclusion
5. Identify regulatory mandates that could justify faster action
6. Plant seeds for the next planning cycle

Rate cases are real constraints - don't fight them, plan around them.`,
  },
  {
    id: 'energy-proposal-1',
    title: 'Utility Business Case',
    description: 'Build a business case for utility procurement',
    category: 'energy',
    subcategory: 'proposals',
    tags: ['proposal', 'utility', 'regulated'],
    difficulty: 'advanced',
    prompt: `Write a business case for a utility investment.

Context:
- Utility: [NAME]
- Initiative: [WHAT THEY'RE TRYING TO ACCOMPLISH]
- My solution: [WHAT YOU SELL]
- Regulatory drivers: [MANDATES, RATE CASE REQUIREMENTS]
- Investment: [YOUR PRICE]
- Expected outcomes: [METRICS]

Utility business cases need:
1. Regulatory alignment (how this supports compliance)
2. Customer benefit (rate impact, service quality)
3. Reliability/safety improvements
4. Operating cost savings
5. Capital efficiency
6. Implementation risk mitigation
7. Reference utilities
8. Alignment with IRP (Integrated Resource Plan) if relevant

Format for regulatory review - utilities often need to justify to PUC.`,
  },
  {
    id: 'energy-follow-up-1',
    title: 'Post-Rate-Case Follow-Up',
    description: 'Re-engage after rate case decision',
    category: 'energy',
    subcategory: 'follow-up',
    tags: ['follow-up', 'rate-case', 'budget'],
    difficulty: 'intermediate',
    prompt: `Write a follow-up email after a utility's rate case decision.

Context:
- Utility: [NAME]
- Contact: [NAME, TITLE]
- Rate case outcome: [APPROVED / MODIFIED / DENIED - if known]
- Our previous discussion: [CONTEXT]
- My solution: [WHAT YOU SELL]
- Next planning cycle: [WHEN]

Post-rate-case follow-up should:
1. Acknowledge the rate case process (it's exhausting)
2. Reference the outcome appropriately
3. Connect to initiatives that were approved
4. Position for newly funded programs
5. Plant seeds for next rate case if needed

Rate case outcomes create new opportunities - be ready.`,
  },
  {
    id: 'energy-sustainability-pitch',
    title: 'Sustainability/Decarbonization Pitch',
    description: 'Position for utility sustainability initiatives',
    category: 'energy',
    subcategory: 'proposals',
    tags: ['sustainability', 'decarbonization', 'clean-energy'],
    difficulty: 'advanced',
    prompt: `Position my solution for utility sustainability goals.

Context:
- Utility: [NAME]
- Sustainability target: [NET ZERO BY YEAR / RENEWABLE % / ETC]
- Current progress: [WHERE THEY ARE]
- My solution: [WHAT YOU SELL]
- Sustainability contribution: [HOW WE HELP]

Address utility sustainability priorities:
1. Decarbonization pathway
2. Renewable integration
3. Grid modernization
4. Electrification (EVs, heating)
5. Energy efficiency programs
6. Customer-side resources (DERs)
7. Environmental justice
8. Reporting and compliance

Position around:
- Regulatory compliance (state mandates)
- Cost of achieving targets
- Operational feasibility
- Customer program effectiveness
- Measurement and verification

Include ESG and investor perspective if applicable.`,
  },
  {
    id: 'energy-smart-grid-discovery',
    title: 'Smart Grid / AMI Discovery',
    description: 'Discovery for grid modernization initiatives',
    category: 'energy',
    subcategory: 'discovery',
    tags: ['smart-grid', 'ami', 'grid-modernization'],
    difficulty: 'advanced',
    prompt: `Discovery questions for smart grid/AMI initiative.

Context:
- Utility: [NAME]
- Grid initiative: [AMI / DERMS / ADMS / GRID SENSORS / OTHER]
- Current state: [WHERE THEY ARE IN JOURNEY]
- My product: [WHAT YOU SELL]
- Fit: [HOW WE SUPPORT THEIR INITIATIVE]

Discovery areas:
1. Current infrastructure (meters, comms, SCADA)
2. Initiative scope and timeline
3. Vendor relationships (who's already involved)
4. Integration requirements
5. Data management strategy
6. Customer program goals
7. Budget and funding source
8. Regulatory requirements driving initiative
9. Pilot vs. full deployment approach

For grid tech:
- Who owns the decision (ops vs. IT vs. customer)
- Procurement process (RFP likely)
- Success metrics
- Reference utilities they've talked to

Grid modernization is multi-year - understand the full roadmap.`,
  },
  {
    id: 'energy-coop-municipal',
    title: 'Co-op / Municipal Utility Approach',
    description: 'Approach for electric co-ops and muni utilities',
    category: 'energy',
    subcategory: 'outreach',
    tags: ['coop', 'municipal', 'public-power'],
    difficulty: 'intermediate',
    prompt: `Create approach for co-ops and municipal utilities.

Context:
- Utility: [NAME]
- Type: [ELECTRIC CO-OP / MUNICIPAL / PUBLIC POWER DISTRICT]
- Size: [METERS / CUSTOMERS]
- Region: [STATE/AREA]
- My solution: [WHAT YOU SELL]
- Value: [SPECIFIC BENEFIT FOR SMALLER UTILITIES]

Co-op/Muni differences from IOUs:
1. Smaller staff (fewer specialists)
2. Board governance (elected or appointed)
3. Member/customer focus (not shareholder)
4. Limited budget for technology
5. Rely on associations (NRECA, APPA)
6. Often use cooperative buying programs

Approach strategy:
- Reference similar co-ops/munis
- Emphasize ease of implementation
- Address resource constraints
- Show association partnerships if any
- Be patient with board approval process
- Consider joint purchasing opportunities

These are relationship sales - trust takes time.`,
  },
  {
    id: 'energy-customer-program',
    title: 'Utility Customer Program Pitch',
    description: 'Pitch for utility customer programs (rebates, DR, EE)',
    category: 'energy',
    subcategory: 'proposals',
    tags: ['customer-programs', 'demand-response', 'energy-efficiency'],
    difficulty: 'intermediate',
    prompt: `Pitch for a utility customer program initiative.

Context:
- Utility: [NAME]
- Program type: [DEMAND RESPONSE / ENERGY EFFICIENCY / REBATES / RATES / EV]
- Current program: [WHAT THEY HAVE TODAY]
- Pain points: [PARTICIPATION / COST / MEASUREMENT]
- My solution: [WHAT YOU SELL]
- Program improvement: [HOW WE HELP]

Utility customer program priorities:
1. Participation rates
2. Cost per kWh saved (or kW reduced)
3. M&V (measurement and verification)
4. Customer experience
5. Equity and access
6. Regulatory compliance
7. Integration with other programs

Position around:
- Increased participation
- Lower program costs
- Better customer experience
- Improved M&V accuracy
- Regulatory reporting

Customer programs are judged by regulators - help them look good.`,
  },
];

// Government & Public Sector Prompts
export const governmentPrompts: Prompt[] = [
  {
    id: 'gov-cold-email-1',
    title: 'Government Agency Cold Email',
    description: 'Cold email for government decision makers',
    category: 'government',
    subcategory: 'outreach',
    tags: ['cold-email', 'government', 'public-sector'],
    difficulty: 'intermediate',
    prompt: `Write a cold email to a government or public sector buyer.

Context:
- Recipient: [NAME, TITLE]
- Agency/Department: [AGENCY NAME]
- Level: [FEDERAL / STATE / LOCAL]
- Mission: [WHAT THE AGENCY DOES]
- Signal: [BUDGET CYCLE / NEW INITIATIVE / MANDATE]
- My solution: [WHAT YOU SELL]
- Contract vehicle: [IF APPLICABLE - GSA, SEWP, etc.]

Government Email Rules:
- Reference their mission and public service
- Be aware of procurement rules and contract vehicles
- Understand fiscal year budget cycles
- Don't be pushy (they can't move fast even if they want to)
- Reference FedRAMP, StateRAMP, or relevant certifications
- Know the difference between end user and contracting officer

Government buyers care about: mission, compliance, security, taxpayer value.`,
  },
  {
    id: 'gov-discovery-1',
    title: 'Government Discovery Questions',
    description: 'Discovery for government and public sector',
    category: 'government',
    subcategory: 'discovery',
    tags: ['discovery', 'government', 'procurement'],
    difficulty: 'intermediate',
    prompt: `Generate discovery questions for a government prospect.

Context:
- Prospect: [NAME, TITLE at AGENCY]
- Agency level: [FEDERAL / STATE / LOCAL]
- My product: [WHAT YOU SELL]
- Known initiative: [WHAT THEY'RE WORKING ON]

Government discovery categories:
1. Mission alignment (how this supports their mission)
2. Current solution and pain points
3. Budget and funding source (appropriated, grant, etc.)
4. Procurement path (RFP, sole source, contract vehicle)
5. Timeline and fiscal year considerations
6. Security and compliance requirements
7. Decision process (program office vs. IT vs. procurement)
8. Stakeholders (end users, CIO, CISO, contracting)

Government buying is complex - map the process early.`,
  },
  {
    id: 'gov-objection-1',
    title: 'Handle "We Need to Go Through Procurement"',
    description: 'Navigate government procurement requirements',
    category: 'government',
    subcategory: 'objections',
    tags: ['objection', 'procurement', 'rfp'],
    difficulty: 'advanced',
    prompt: `Help me respond to: "We'd need to put this out for competitive bid / go through procurement."

Context:
- My product: [WHAT YOU SELL]
- Agency: [AGENCY NAME AND LEVEL]
- Deal size: [APPROXIMATE VALUE]
- Contract vehicles we're on: [GSA, SEWP, STATE CONTRACTS, etc.]

This isn't an objection - it's reality. Help me:
1. Understand their procurement options
2. Identify applicable contract vehicles we're on
3. Ask about sole source thresholds
4. Offer to help with requirements definition
5. Position for the eventual RFP
6. Identify the contracting officer to build relationship

Never try to circumvent procurement - help them navigate it.`,
  },
  {
    id: 'gov-proposal-1',
    title: 'Government RFP Response Framework',
    description: 'Framework for responding to government RFPs',
    category: 'government',
    subcategory: 'proposals',
    tags: ['proposal', 'rfp', 'government'],
    difficulty: 'advanced',
    prompt: `Help me respond to a government RFP.

Context:
- Agency: [AGENCY NAME]
- RFP number: [IF APPLICABLE]
- Requirement summary: [WHAT THEY'RE BUYING]
- Evaluation criteria: [HOW THEY'LL SCORE]
- Page limits: [IF APPLICABLE]
- Due date: [DEADLINE]
- My solution: [WHAT YOU SELL]
- Competitors likely: [WHO ELSE]

Government RFP responses need:
1. Strict compliance with instructions (follow exactly)
2. Clear response to each requirement
3. Past performance references (CPARS if federal)
4. Pricing in required format
5. Technical approach with specifics
6. Key personnel and qualifications
7. Small business participation (if required)
8. Security certifications and compliance

Government evaluators score objectively - make it easy for them.`,
  },
  {
    id: 'gov-follow-up-1',
    title: 'End-of-Fiscal-Year Follow-Up',
    description: 'Re-engage before fiscal year end',
    category: 'government',
    subcategory: 'follow-up',
    tags: ['follow-up', 'fiscal-year', 'budget'],
    difficulty: 'beginner',
    prompt: `Write a follow-up email before fiscal year end.

Context:
- Agency: [AGENCY NAME]
- Contact: [NAME, TITLE]
- Fiscal year end: [SEPTEMBER 30 for federal, varies for state/local]
- Our previous discussion: [CONTEXT]
- My solution: [WHAT YOU SELL]
- Deal size: [APPROXIMATE VALUE]

End-of-fiscal-year follow-up should:
1. Reference use-or-lose budget dynamics
2. Offer expedited procurement options
3. Mention contract vehicles for quick purchase
4. Be helpful, not predatory (they know their budget)
5. Offer to support with paperwork/justification

September is chaos for federal - be a helpful partner, not another vendor.`,
  },
  {
    id: 'gov-contract-vehicle',
    title: 'Contract Vehicle Positioning',
    description: 'Position your contract vehicles effectively',
    category: 'government',
    subcategory: 'proposals',
    tags: ['contract-vehicle', 'gsa', 'gwac', 'bpa'],
    difficulty: 'intermediate',
    prompt: `Position my contract vehicles for this opportunity.

Context:
- Agency: [AGENCY NAME AND LEVEL]
- Requirement: [WHAT THEY NEED]
- Deal size: [ESTIMATED VALUE]
- Our contract vehicles: [GSA / SEWP / CIO-SP3 / STATE CONTRACTS / ETC]
- Competitor contract position: [IF KNOWN]

Contract vehicle positioning:
1. Match vehicle to requirement type
2. Explain acquisition benefits (faster, compliant, pre-competed)
3. Show pricing and ordering process
4. Provide contract numbers and contact info
5. Offer to support with ordering documentation

For each applicable vehicle:
- What it covers (scope)
- Price list or rate card
- How to order
- Why it's fastest path
- What to request from contracting

Make procurement easy - they'll thank you for it.`,
  },
  {
    id: 'gov-stakeholder-coalition',
    title: 'Government Stakeholder Coalition',
    description: 'Build coalition across government stakeholders',
    category: 'government',
    subcategory: 'strategy',
    tags: ['stakeholders', 'coalition', 'politics'],
    difficulty: 'advanced',
    prompt: `Build stakeholder coalition for government sale.

Context:
- Agency: [AGENCY NAME]
- Initiative: [WHAT THEY'RE BUYING]
- Known stakeholders: [WHO YOU KNOW]
- Program office: [WHO OWNS THE REQUIREMENT]
- IT/CIO office: [WHO APPROVES TECH]
- Procurement: [WHO BUYS]

Map and engage:
1. Program Office (owns the mission need)
2. CIO/IT (technical approval)
3. CISO (security approval)
4. Procurement/Contracting (acquisition)
5. Budget/CFO (funding)
6. End users (will use it)
7. Leadership (executives)

For each stakeholder:
- What they care about
- How to approach them
- What they need to approve
- Potential blockers
- How to align their interests

Government requires consensus - build the coalition.`,
  },
  {
    id: 'gov-small-business',
    title: 'Small Business / Set-Aside Positioning',
    description: 'Position for small business set-aside contracts',
    category: 'government',
    subcategory: 'proposals',
    tags: ['small-business', 'set-aside', '8a', 'hubzone'],
    difficulty: 'intermediate',
    prompt: `Position for small business set-aside opportunity.

Context:
- Agency: [AGENCY NAME]
- Set-aside type: [8(A) / HUBZONE / SDVOSB / WOSB / SB]
- My certifications: [WHICH YOU HAVE]
- Requirement: [WHAT THEY'RE BUYING]
- Prime or sub: [YOUR ROLE]

If you're the small business:
- Highlight certification and NAICS codes
- Past performance at scale
- Capability statement
- Team/subcontractors for capacity

If you need a small business partner:
- How to find partners (SAM, SBA, events)
- Teaming agreement approach
- Mentor-protégé if applicable
- Subcontracting plan

Positioning:
- Meet the socioeconomic goal
- Demonstrate capability
- Price competitively
- Show past performance

Set-asides are opportunities - know the rules.`,
  },
  {
    id: 'gov-sled-approach',
    title: 'State & Local Government Approach',
    description: 'Approach for state, county, and municipal sales',
    category: 'government',
    subcategory: 'outreach',
    tags: ['sled', 'state', 'local', 'municipal'],
    difficulty: 'intermediate',
    prompt: `Create approach for state/local government sales.

Context:
- Entity: [STATE AGENCY / COUNTY / CITY / SCHOOL DISTRICT]
- Department: [WHICH DEPARTMENT]
- My solution: [WHAT YOU SELL]
- Relevant state contracts: [WHICH ONES YOU'RE ON]

SLED differences from federal:
1. Shorter procurement cycles (usually)
2. Cooperative purchasing (NASPO, Sourcewell, TIPS)
3. More relationship-driven
4. Budget cycles vary by entity
5. Often piggyback on existing contracts
6. Smaller deals, higher volume

Entry strategies:
- State contract vehicles
- Cooperative purchasing agreements
- Piggyback clauses
- Direct relationships
- Reseller/partner network

Provide outreach templates and qualification questions.`,
  },
  {
    id: 'gov-compliance-positioning',
    title: 'Government Compliance Positioning',
    description: 'Position security and compliance certifications',
    category: 'government',
    subcategory: 'objections',
    tags: ['fedramp', 'fisma', 'security', 'compliance'],
    difficulty: 'advanced',
    prompt: `Position my compliance certifications for government.

Context:
- Agency: [AGENCY NAME]
- Data sensitivity: [PUBLIC / SENSITIVE / CLASSIFIED]
- Their requirements: [WHAT THEY'VE ASKED FOR]
- Our certifications: [FEDRAMP / SOC2 / FISMA / IL4/5 / ETC]
- Gaps: [WHAT WE DON'T HAVE]

Compliance positioning by level:
Federal Civilian:
- FedRAMP (Moderate/High)
- FISMA
- Section 508

DoD:
- IL4/IL5
- CMMC
- ITAR if applicable

State/Local:
- StateRAMP
- SOC 2
- State-specific requirements

For each certification:
- What it means
- What it covers
- How to verify
- If we're pursuing (with timeline)

Make compliance easy - provide documentation proactively.`,
  },
];

// Telecommunications Prompts
export const telecomPrompts: Prompt[] = [
  {
    id: 'telecom-cold-email-1',
    title: 'Telecom Executive Cold Email',
    description: 'Cold email for telecom carriers and service providers',
    category: 'telecom',
    subcategory: 'outreach',
    tags: ['cold-email', 'telecom', 'carrier'],
    difficulty: 'intermediate',
    prompt: `Write a cold email to a telecommunications executive.

Context:
- Recipient: [NAME, TITLE]
- Company type: [CARRIER / MSO / MVNO / ENTERPRISE TELECOM]
- Signal: [5G ROLLOUT / FIBER EXPANSION / COST REDUCTION]
- My solution: [WHAT YOU SELL]
- Network impact: [HOW YOU HELP THEIR NETWORK/OPERATIONS]

Telecom Email Rules:
- Understand their network infrastructure
- Reference industry trends (5G, fiber, edge, convergence)
- Speak to ARPU, churn, network efficiency
- Be aware of CapEx vs. OpEx dynamics
- Mention relevant integrations (OSS/BSS, network elements)
- Reference similar carriers or use cases

Telecom buyers care about: network performance, subscriber experience, cost per bit, competitive differentiation.`,
  },
  {
    id: 'telecom-discovery-1',
    title: 'Telecom Discovery Questions',
    description: 'Discovery for telecom and carrier sales',
    category: 'telecom',
    subcategory: 'discovery',
    tags: ['discovery', 'telecom', 'network'],
    difficulty: 'intermediate',
    prompt: `Generate discovery questions for a telecom prospect.

Context:
- Prospect: [NAME, TITLE at COMPANY]
- Telecom type: [CARRIER / CABLE / ENTERPRISE]
- My product: [WHAT YOU SELL]
- Network area: [ACCESS / CORE / OSS/BSS / CUSTOMER EXPERIENCE]

Telecom discovery categories:
1. Network architecture and evolution plans
2. Current pain points (cost, performance, scale)
3. Technology stack (vendors, platforms, standards)
4. Integration requirements (APIs, protocols, legacy)
5. Decision process (network engineering vs. IT vs. product)
6. Budget cycles and CapEx planning
7. Competitive landscape and differentiation needs
8. Regulatory considerations

Telecom is technical - understand their architecture before proposing.`,
  },
  {
    id: 'telecom-objection-1',
    title: 'Handle "We\'re Locked Into Vendor X"',
    description: 'Navigate incumbent vendor relationships',
    category: 'telecom',
    subcategory: 'objections',
    tags: ['objection', 'incumbent', 'vendor'],
    difficulty: 'advanced',
    prompt: `Help me respond to: "We're locked into [INCUMBENT VENDOR] for the next X years."

Context:
- My product: [WHAT YOU SELL]
- Incumbent: [WHO THEY'RE LOCKED INTO]
- Contract timeline: [WHEN IT ENDS]
- Our differentiation: [WHY WE'RE BETTER]

Vendor lock-in is real in telecom. Help me:
1. Understand the scope of the contract
2. Find gaps the incumbent doesn't cover
3. Position for co-existence or complement
4. Plant seeds for contract renewal timing
5. Identify pain points that could accelerate change
6. Offer a pilot in a non-contracted area

Never trash the incumbent - just find the gaps.`,
  },
  {
    id: 'telecom-proposal-1',
    title: 'Telecom Network Investment Proposal',
    description: 'Build a business case for network infrastructure',
    category: 'telecom',
    subcategory: 'proposals',
    tags: ['proposal', 'network', 'infrastructure'],
    difficulty: 'advanced',
    prompt: `Write a proposal for a telecom network investment.

Context:
- Carrier: [NAME]
- Network area: [ACCESS / CORE / OSS/BSS]
- Current challenge: [WHAT THEY'RE SOLVING]
- My solution: [WHAT YOU SELL]
- Investment: [YOUR PRICE]
- Expected outcomes: [METRICS]

Telecom proposals need:
1. Technical architecture alignment
2. Network performance improvements (latency, capacity, reliability)
3. Cost analysis (CapEx, OpEx, TCO)
4. Integration approach and effort
5. Migration/implementation plan
6. Reference carriers and results
7. Standards and interoperability
8. Roadmap alignment

Telecom buyers are technical - be precise and specific.`,
  },
  {
    id: 'telecom-follow-up-1',
    title: 'Post-Technology-Trial Follow-Up',
    description: 'Follow up after a network trial or POC',
    category: 'telecom',
    subcategory: 'follow-up',
    tags: ['follow-up', 'trial', 'poc'],
    difficulty: 'intermediate',
    prompt: `Write a follow-up email after a network technology trial.

Context:
- Carrier: [NAME]
- Contact: [NAME, TITLE]
- Trial scope: [WHAT WAS TESTED]
- Trial results: [OUTCOMES]
- Next steps discussed: [WHAT WAS AGREED]
- Blockers: [IF ANY]

Post-trial follow-up should:
1. Summarize trial results objectively
2. Reference specific performance data
3. Connect results to their business goals
4. Address any issues that arose
5. Propose clear path to production
6. Identify remaining technical validation needs

Telecom trials are extensive - document everything for their internal process.`,
  },
];

// Media & Entertainment Prompts
export const mediaPrompts: Prompt[] = [
  {
    id: 'media-cold-email-1',
    title: 'Media Executive Cold Email',
    description: 'Cold email for media and entertainment companies',
    category: 'media',
    subcategory: 'outreach',
    tags: ['cold-email', 'media', 'entertainment'],
    difficulty: 'intermediate',
    prompt: `Write a cold email to a media or entertainment executive.

Context:
- Recipient: [NAME, TITLE]
- Company type: [STREAMING / BROADCAST / PUBLISHER / AGENCY / STUDIO]
- Signal: [NEW SHOW / PLATFORM LAUNCH / ADVERTISER PRESSURE]
- My solution: [WHAT YOU SELL]
- Content/audience impact: [HOW YOU HELP]

Media Email Rules:
- Understand their business model (subscription, ad-supported, hybrid)
- Reference audience engagement and content performance
- Speak to their competitive landscape
- Be aware of content windows and release cycles
- Mention relevant integrations (CMS, ad tech, analytics)
- Reference similar media companies

Media buyers care about: audience, engagement, content ROI, advertiser value.`,
  },
  {
    id: 'media-discovery-1',
    title: 'Media Discovery Questions',
    description: 'Discovery for media and entertainment sales',
    category: 'media',
    subcategory: 'discovery',
    tags: ['discovery', 'media', 'content'],
    difficulty: 'intermediate',
    prompt: `Generate discovery questions for a media prospect.

Context:
- Prospect: [NAME, TITLE at COMPANY]
- Media type: [STREAMING / BROADCAST / DIGITAL / PRINT]
- My product: [WHAT YOU SELL]
- Known challenge: [ENGAGEMENT / MONETIZATION / EFFICIENCY]

Media discovery categories:
1. Business model (subscription, ads, hybrid)
2. Content strategy and priorities
3. Audience and engagement metrics
4. Technology stack (CMS, distribution, analytics)
5. Advertiser/monetization challenges
6. Competitive differentiation
7. Decision process (content vs. tech vs. business)
8. Budget and investment priorities

Media is fast-moving - understand their content calendar and priorities.`,
  },
  {
    id: 'media-objection-1',
    title: 'Handle "Content is Our Priority, Not Tech"',
    description: 'Connect technology to content outcomes',
    category: 'media',
    subcategory: 'objections',
    tags: ['objection', 'content', 'technology'],
    difficulty: 'advanced',
    prompt: `Help me respond to: "We're focused on content right now, not technology investments."

Context:
- My product: [WHAT YOU SELL]
- Their company: [MEDIA TYPE]
- How we impact content: [CONNECTION TO CONTENT OUTCOMES]

Content is king in media - but tech enables it. Help me:
1. Validate content as the priority (it should be)
2. Connect my solution to content outcomes
3. Show how tech improves content performance
4. Reference content companies that use us successfully
5. Position as enabling their content strategy
6. Find the technology champion who sees the connection

Never compete with content - show how you serve it.`,
  },
  {
    id: 'media-proposal-1',
    title: 'Media Technology Proposal',
    description: 'Build a case for media technology investment',
    category: 'media',
    subcategory: 'proposals',
    tags: ['proposal', 'media', 'technology'],
    difficulty: 'advanced',
    prompt: `Write a proposal for a media technology investment.

Context:
- Company: [MEDIA COMPANY NAME]
- Business model: [HOW THEY MAKE MONEY]
- Challenge: [WHAT THEY'RE SOLVING]
- My solution: [WHAT YOU SELL]
- Investment: [YOUR PRICE]
- Expected outcomes: [METRICS - ENGAGEMENT, REVENUE, EFFICIENCY]

Media proposals need:
1. Clear connection to content/audience outcomes
2. Engagement and performance metrics
3. Revenue impact (subs, ads, or both)
4. Integration with existing workflow
5. Time-to-value (media moves fast)
6. Reference media companies
7. Flexibility for evolving needs

Media buyers think in content cycles - show quick wins.`,
  },
  {
    id: 'media-follow-up-1',
    title: 'Post-Upfronts Follow-Up',
    description: 'Re-engage after upfronts or ad sales season',
    category: 'media',
    subcategory: 'follow-up',
    tags: ['follow-up', 'upfronts', 'advertising'],
    difficulty: 'beginner',
    prompt: `Write a follow-up email after upfronts/ad sales season.

Context:
- Company: [MEDIA COMPANY]
- Contact: [NAME, TITLE]
- Their upfronts results: [IF KNOWN]
- Our previous discussion: [CONTEXT]
- My solution: [WHAT YOU SELL]

Post-upfronts follow-up should:
1. Acknowledge the intensity of upfronts season
2. Reference their ad sales performance if public
3. Connect to advertiser value proposition
4. Propose planning for next cycle
5. Identify opportunities to improve performance

Media has seasonal intensity - time your outreach appropriately.`,
  },
];

// Hospitality & Travel Prompts
export const hospitalityPrompts: Prompt[] = [
  {
    id: 'hospitality-cold-email-1',
    title: 'Hotel/Travel Executive Cold Email',
    description: 'Cold email for hospitality and travel companies',
    category: 'hospitality',
    subcategory: 'outreach',
    tags: ['cold-email', 'hospitality', 'travel'],
    difficulty: 'intermediate',
    prompt: `Write a cold email to a hospitality or travel executive.

Context:
- Recipient: [NAME, TITLE]
- Company type: [HOTEL / AIRLINE / OTA / RESTAURANT GROUP / CRUISE]
- Size: [PROPERTIES / LOCATIONS / FLEET]
- Signal: [EXPANSION / RENOVATION / TECH UPGRADE / LABOR CHALLENGE]
- My solution: [WHAT YOU SELL]
- Guest/operational impact: [HOW YOU HELP]

Hospitality Email Rules:
- Understand their guest experience focus
- Reference RevPAR, occupancy, or relevant metrics
- Be aware of seasonal patterns
- Speak to labor challenges and efficiency
- Mention franchise vs. managed vs. owned dynamics
- Reference similar brands or properties

Hospitality buyers care about: guest experience, RevPAR, operational efficiency, labor.`,
  },
  {
    id: 'hospitality-discovery-1',
    title: 'Hospitality Discovery Questions',
    description: 'Discovery for hospitality and travel sales',
    category: 'hospitality',
    subcategory: 'discovery',
    tags: ['discovery', 'hospitality', 'operations'],
    difficulty: 'intermediate',
    prompt: `Generate discovery questions for a hospitality prospect.

Context:
- Prospect: [NAME, TITLE at COMPANY]
- Hospitality type: [HOTEL / RESTAURANT / TRAVEL]
- My product: [WHAT YOU SELL]
- Known challenge: [GUEST EXPERIENCE / LABOR / REVENUE]

Hospitality discovery categories:
1. Property/portfolio overview
2. Guest experience priorities
3. Current technology stack (PMS, POS, CRM)
4. Labor challenges and costs
5. Revenue management approach
6. Brand standards and corporate requirements
7. Decision process (property vs. corporate)
8. Seasonality and planning cycles

Hospitality is fragmented - understand property vs. corporate dynamics.`,
  },
  {
    id: 'hospitality-objection-1',
    title: 'Handle "We Have a Preferred Vendor"',
    description: 'Navigate brand-mandated vendor relationships',
    category: 'hospitality',
    subcategory: 'objections',
    tags: ['objection', 'preferred-vendor', 'brand'],
    difficulty: 'advanced',
    prompt: `Help me respond to: "Our brand has a preferred vendor for that."

Context:
- My product: [WHAT YOU SELL]
- Their brand: [HOTEL BRAND / CHAIN]
- Preferred vendor: [WHO IT IS - if known]
- Our positioning: [WHY WE'RE DIFFERENT]

Brand standards are real in hospitality. Help me:
1. Understand if it's required or preferred
2. Ask about exceptions or pilots
3. Find properties with more autonomy
4. Position for preferred vendor list
5. Identify gaps the preferred vendor doesn't cover
6. Connect with corporate brand technology team

Work with brand standards, not against them.`,
  },
  {
    id: 'hospitality-proposal-1',
    title: 'Hospitality Technology Proposal',
    description: 'Build a case for hospitality tech investment',
    category: 'hospitality',
    subcategory: 'proposals',
    tags: ['proposal', 'hospitality', 'technology'],
    difficulty: 'advanced',
    prompt: `Write a proposal for a hospitality technology investment.

Context:
- Company: [BRAND/PROPERTY NAME]
- Property count: [NUMBER OF PROPERTIES]
- Challenge: [WHAT THEY'RE SOLVING]
- My solution: [WHAT YOU SELL]
- Investment: [YOUR PRICE]
- Expected outcomes: [METRICS]

Hospitality proposals need:
1. Guest experience impact
2. Operational efficiency gains
3. Revenue impact (RevPAR, ADR, occupancy)
4. Labor savings (huge in hospitality)
5. Integration with PMS and other systems
6. Roll-out plan across properties
7. Brand standards compliance
8. Reference properties

Hospitality buyers need ROI per property.`,
  },
  {
    id: 'hospitality-follow-up-1',
    title: 'Post-Peak-Season Follow-Up',
    description: 'Re-engage after busy travel season',
    category: 'hospitality',
    subcategory: 'follow-up',
    tags: ['follow-up', 'seasonal', 'planning'],
    difficulty: 'beginner',
    prompt: `Write a follow-up email after peak travel season.

Context:
- Company: [BRAND/PROPERTY]
- Contact: [NAME, TITLE]
- Their peak: [SUMMER / HOLIDAY / CONVENTION SEASON]
- Their results: [IF KNOWN]
- Our previous discussion: [CONTEXT]
- My solution: [WHAT YOU SELL]

Post-peak follow-up should:
1. Acknowledge the peak season push
2. Congratulate on results if public
3. Ask about pain points that emerged
4. Connect to solutions for next season
5. Propose planning conversation

Off-peak is planning season in hospitality. Strike while they have time.`,
  },
];

// Construction & Infrastructure Prompts
export const constructionPrompts: Prompt[] = [
  {
    id: 'construction-cold-email-1',
    title: 'Construction Executive Cold Email',
    description: 'Cold email for general contractors and construction firms',
    category: 'construction',
    subcategory: 'outreach',
    tags: ['cold-email', 'construction', 'contractor'],
    difficulty: 'intermediate',
    prompt: `Write a cold email to a construction executive.

Context:
- Recipient: [NAME, TITLE]
- Company type: [GC / SUBCONTRACTOR / DEVELOPER / OWNER]
- Size: [ANNUAL REVENUE / PROJECT SIZE]
- Signal: [NEW PROJECT / SAFETY INCIDENT / EFFICIENCY INITIATIVE]
- My solution: [WHAT YOU SELL]
- Project impact: [HOW YOU HELP]

Construction Email Rules:
- Lead with project outcomes (time, cost, safety)
- Reference specific project types they do
- Be aware of bid/proposal cycles
- Speak to safety (critical in construction)
- Understand field vs. office dynamics
- Mention integrations with their tools (Procore, etc.)

Construction buyers care about: safety, schedule, budget, quality, risk.`,
  },
  {
    id: 'construction-discovery-1',
    title: 'Construction Discovery Questions',
    description: 'Discovery for construction technology sales',
    category: 'construction',
    subcategory: 'discovery',
    tags: ['discovery', 'construction', 'projects'],
    difficulty: 'intermediate',
    prompt: `Generate discovery questions for a construction prospect.

Context:
- Prospect: [NAME, TITLE at COMPANY]
- Construction type: [COMMERCIAL / RESIDENTIAL / INFRASTRUCTURE]
- My product: [WHAT YOU SELL]
- Known pain: [SAFETY / SCHEDULE / COST / QUALITY]

Construction discovery categories:
1. Project portfolio and pipeline
2. Current pain points (field vs. office)
3. Technology stack (project management, BIM, safety)
4. Safety program and requirements
5. Subcontractor and labor management
6. Decision process (project vs. corporate)
7. Budget and project economics
8. Compliance and reporting requirements

Construction is project-based - understand their pipeline.`,
  },
  {
    id: 'construction-objection-1',
    title: 'Handle "Our Field Crews Won\'t Use It"',
    description: 'Navigate field adoption concerns',
    category: 'construction',
    subcategory: 'objections',
    tags: ['objection', 'adoption', 'field'],
    difficulty: 'advanced',
    prompt: `Help me respond to: "Our field crews won't use another app/system."

Context:
- My product: [WHAT YOU SELL]
- Their company: [GC / SPECIALTY]
- Field challenges: [WHAT THEY'VE TRIED BEFORE]
- Our approach: [HOW WE'RE DIFFERENT]

Field adoption is the #1 challenge in construction tech. Help me:
1. Validate the concern (tech fatigue is real)
2. Ask about what has/hasn't worked before
3. Explain our approach to field usability
4. Reference similar companies with successful adoption
5. Propose a pilot with a specific crew
6. Discuss training and support approach

Never dismiss field adoption concerns - address them directly.`,
  },
  {
    id: 'construction-proposal-1',
    title: 'Construction Technology Proposal',
    description: 'Build a case for construction tech investment',
    category: 'construction',
    subcategory: 'proposals',
    tags: ['proposal', 'construction', 'technology'],
    difficulty: 'advanced',
    prompt: `Write a proposal for a construction technology investment.

Context:
- Company: [CONTRACTOR NAME]
- Company size: [ANNUAL REVENUE / EMPLOYEES]
- Challenge: [WHAT THEY'RE SOLVING]
- My solution: [WHAT YOU SELL]
- Investment: [YOUR PRICE]
- Expected outcomes: [METRICS]

Construction proposals need:
1. Safety improvements (always first)
2. Schedule impact (days saved)
3. Cost savings (labor, rework, materials)
4. Risk reduction
5. Field adoption plan
6. Integration with existing tools
7. Training and support
8. Reference projects/companies

Construction buyers are conservative - prove it works with references.`,
  },
  {
    id: 'construction-follow-up-1',
    title: 'Post-Project Follow-Up',
    description: 'Follow up after a project completes',
    category: 'construction',
    subcategory: 'follow-up',
    tags: ['follow-up', 'project', 'relationship'],
    difficulty: 'beginner',
    prompt: `Write a follow-up email after a customer's project completes.

Context:
- Company: [CONTRACTOR]
- Contact: [NAME, TITLE]
- Project completed: [PROJECT NAME/TYPE]
- How we helped: [IF CUSTOMER] or [HOW WE COULD HAVE HELPED]
- Their pipeline: [UPCOMING PROJECTS IF KNOWN]
- My solution: [WHAT YOU SELL]

Post-project follow-up should:
1. Congratulate on project completion
2. Reference results achieved (if customer)
3. Capture lessons learned
4. Discuss upcoming project pipeline
5. Position for next project

Construction relationships are project-to-project. Stay connected between projects.`,
  },
];

// Insurance Prompts
export const insurancePrompts: Prompt[] = [
  {
    id: 'insurance-cold-email-1',
    title: 'Insurance Executive Cold Email',
    description: 'Cold email for insurance carriers and agencies',
    category: 'insurance',
    subcategory: 'outreach',
    tags: ['cold-email', 'insurance', 'carrier'],
    difficulty: 'intermediate',
    prompt: `Write a cold email to an insurance executive.

Context:
- Recipient: [NAME, TITLE]
- Company type: [CARRIER / MGA / AGENCY / BROKER / INSURTECH]
- Lines of business: [P&C / LIFE / HEALTH / SPECIALTY]
- Signal: [DIGITAL TRANSFORMATION / LOSS RATIO / NEW PRODUCT]
- My solution: [WHAT YOU SELL]
- Underwriting/claims impact: [HOW YOU HELP]

Insurance Email Rules:
- Understand their role in the value chain
- Reference loss ratios, combined ratios, or relevant metrics
- Be aware of regulatory requirements
- Speak to underwriting, claims, or distribution challenges
- Mention relevant integrations (policy admin, claims systems)
- Reference AM Best ratings or market position

Insurance buyers care about: loss ratio, customer retention, operational efficiency, compliance.`,
  },
  {
    id: 'insurance-discovery-1',
    title: 'Insurance Discovery Questions',
    description: 'Discovery for insurance technology sales',
    category: 'insurance',
    subcategory: 'discovery',
    tags: ['discovery', 'insurance', 'underwriting'],
    difficulty: 'intermediate',
    prompt: `Generate discovery questions for an insurance prospect.

Context:
- Prospect: [NAME, TITLE at COMPANY]
- Insurance type: [CARRIER / MGA / AGENCY]
- Lines of business: [P&C / LIFE / HEALTH]
- My product: [WHAT YOU SELL]
- Known challenge: [UNDERWRITING / CLAIMS / DISTRIBUTION]

Insurance discovery categories:
1. Business model and lines of business
2. Current pain points by function
3. Technology stack (policy admin, claims, CRM)
4. Underwriting and pricing approach
5. Claims process and efficiency
6. Distribution strategy (agents, direct, digital)
7. Regulatory and compliance requirements
8. Decision process (IT vs. business, long cycles)

Insurance is regulated and risk-averse - understand their constraints.`,
  },
  {
    id: 'insurance-objection-1',
    title: 'Handle "Our Systems Are Legacy"',
    description: 'Navigate legacy system concerns in insurance',
    category: 'insurance',
    subcategory: 'objections',
    tags: ['objection', 'legacy', 'integration'],
    difficulty: 'advanced',
    prompt: `Help me respond to: "Our core systems are legacy and hard to integrate with."

Context:
- My product: [WHAT YOU SELL]
- Their systems: [WHAT THEY USE - if known]
- Our integration approach: [HOW WE CONNECT]
- Their modernization plans: [IF KNOWN]

Legacy systems are endemic in insurance. Help me:
1. Acknowledge the reality (insurance has massive technical debt)
2. Ask about their modernization roadmap
3. Explain our approach to legacy integration
4. Reference similar carriers we've integrated with
5. Propose a phased approach
6. Position as stepping stone to modernization

Never underestimate the complexity of insurance legacy systems.`,
  },
  {
    id: 'insurance-proposal-1',
    title: 'Insurance Technology Proposal',
    description: 'Build a case for insurance tech investment',
    category: 'insurance',
    subcategory: 'proposals',
    tags: ['proposal', 'insurance', 'technology'],
    difficulty: 'advanced',
    prompt: `Write a proposal for an insurance technology investment.

Context:
- Carrier/Company: [NAME]
- Lines of business: [P&C / LIFE / HEALTH]
- Challenge: [WHAT THEY'RE SOLVING]
- My solution: [WHAT YOU SELL]
- Investment: [YOUR PRICE]
- Expected outcomes: [METRICS]

Insurance proposals need:
1. Loss ratio or combined ratio impact
2. Underwriting efficiency gains
3. Claims processing improvements
4. Compliance and regulatory alignment
5. Integration approach with core systems
6. Implementation timeline and phases
7. Security and data requirements
8. Reference carriers (same lines of business)

Insurance buyers need actuarial-level rigor in business cases.`,
  },
  {
    id: 'insurance-follow-up-1',
    title: 'Post-Renewal-Season Follow-Up',
    description: 'Re-engage after insurance renewal season',
    category: 'insurance',
    subcategory: 'follow-up',
    tags: ['follow-up', 'renewal', 'seasonal'],
    difficulty: 'beginner',
    prompt: `Write a follow-up email after renewal season.

Context:
- Company: [CARRIER/AGENCY]
- Contact: [NAME, TITLE]
- Renewal season: [1/1, 7/1, or other]
- Their results: [IF KNOWN]
- Our previous discussion: [CONTEXT]
- My solution: [WHAT YOU SELL]

Post-renewal follow-up should:
1. Acknowledge the intensity of renewal season
2. Ask how the renewal cycle went
3. Identify pain points that emerged
4. Connect to solutions for next cycle
5. Propose planning conversation

Insurance has seasonal intensity around renewals. Time outreach accordingly.`,
  },
];

// Universal Sales Prompts (work across all industries)
export const universalPrompts: Prompt[] = [
  {
    id: 'uni-meeting-prep',
    title: 'Meeting Preparation Checklist',
    description: 'Prepare for any sales meeting',
    category: 'universal',
    tags: ['preparation', 'meeting', 'research'],
    difficulty: 'beginner',
    prompt: `Help me prepare for a sales meeting.

Meeting details:
- Prospect: [NAME, TITLE at COMPANY]
- Meeting type: [INTRO / DISCOVERY / DEMO / NEGOTIATION]
- Duration: [MINUTES]
- Virtual or in-person: [FORMAT]
- Other attendees: [WHO ELSE]
- Previous interactions: [HISTORY]

Prepare:
1. Research briefing (company news, their role, mutual connections)
2. Meeting objectives (what I want to accomplish)
3. Key questions to ask (prioritized)
4. Anticipated objections and responses
5. Value props most relevant to them
6. Success metrics for the meeting
7. Clear next step to propose
8. Backup plan if main approach doesn't work

Also: Calendar items to send, materials to prepare, tech to test.`,
  },
  {
    id: 'uni-email-reply-busy',
    title: 'Reply to "Too Busy" Email',
    description: 'Craft a response when prospect says they are too busy',
    category: 'universal',
    tags: ['email', 'objection', 'follow-up'],
    difficulty: 'beginner',
    prompt: `Write a reply to a prospect who said they're too busy.

Context:
- Their response: [EXACT TEXT OF THEIR REPLY]
- What I originally asked for: [MY ASK]
- My product: [WHAT I SELL]
- Their likely priorities: [WHAT'S ON THEIR PLATE]

Response strategies:
1. Acknowledge and offer smaller ask
2. Propose specific future time
3. Offer async option (video, doc, etc.)
4. Connect my ask to reducing their busyness
5. Give them an easy out with follow-up timing

Write 3 response options with different approaches.
Keep each under 50 words.`,
  },
  {
    id: 'uni-recap-email',
    title: 'Meeting Recap Email',
    description: 'Summarize a meeting and confirm next steps',
    category: 'universal',
    tags: ['email', 'recap', 'follow-up'],
    difficulty: 'beginner',
    prompt: `Write a meeting recap email.

Meeting details:
- Attendees: [WHO WAS THERE]
- Meeting type: [TYPE]
- Key topics discussed: [MAIN POINTS]
- Problems they mentioned: [PAIN POINTS]
- Their questions: [QUESTIONS THEY ASKED]
- Action items agreed: [WHAT'S NEXT]
- Timeline discussed: [DATES]

Recap email should:
1. Thank them (brief)
2. Summarize what we heard (shows we listened)
3. List action items with owners
4. Confirm next meeting/step
5. Attach relevant resources
6. Keep it scannable

Under 200 words. Send within 2 hours of meeting.`,
  },
  {
    id: 'uni-no-show-follow-up',
    title: 'No-Show Follow-Up',
    description: 'Follow up after a prospect misses a meeting',
    category: 'universal',
    tags: ['no-show', 'follow-up', 'reschedule'],
    difficulty: 'beginner',
    prompt: `Write a follow-up after a prospect no-showed.

Context:
- Prospect: [NAME, TITLE]
- Meeting type: [WHAT IT WAS]
- How they booked: [INBOUND / OUTBOUND / REFERRAL]
- Attempts to reach: [NONE / CALLED / TEXTED]
- First no-show or repeat: [FREQUENCY]

Write 3 versions:
1. Benefit-of-doubt (same day, assumes conflict)
2. Gentle check-in (next day)
3. Last attempt (3 days later)

Each version should:
- Not guilt them
- Make it easy to reschedule
- Include your calendar link
- Be under 50 words
- Have a subject line

Never be passive aggressive. Things happen.`,
  },
  {
    id: 'uni-objection-price',
    title: 'Handle Price Objections',
    description: 'Respond to various price objections',
    category: 'universal',
    tags: ['objection', 'pricing', 'negotiation'],
    difficulty: 'intermediate',
    prompt: `Help me respond to a price objection.

Context:
- What they said: [EXACT OBJECTION]
- My price: [WHAT I QUOTED]
- Their budget (if known): [THEIR NUMBER]
- Value I provide: [KEY BENEFITS]
- Flexibility I have: [WHAT I CAN ADJUST]
- Competition: [WHAT ALTERNATIVES COST]

Generate responses for these price objection types:
1. "It's too expensive" (general sticker shock)
2. "We only have $X budget" (specific number)
3. "Competitor is cheaper" (competitive pressure)
4. "Can't justify the ROI" (value question)
5. "Need discount to close" (negotiation tactic)

For each, provide:
- Questions to ask first
- Reframe language
- When to hold firm
- When to negotiate
- Creative alternatives to discounting`,
  },
  {
    id: 'uni-internal-champion-email',
    title: 'Champion Enablement Email',
    description: 'Arm your champion to sell internally',
    category: 'universal',
    tags: ['champion', 'internal-selling', 'enablement'],
    difficulty: 'intermediate',
    prompt: `Create content to help my champion sell internally.

Context:
- Champion: [NAME, TITLE]
- Decision maker they need to convince: [WHO]
- What they need to justify: [THE ASK]
- Internal objections they'll face: [CONCERNS]
- Our value prop: [KEY BENEFITS]
- ROI case: [NUMBERS]

Create:
1. One-pager they can share (bullet points)
2. Email they can forward to their boss
3. Talk track for their internal meeting
4. Responses to likely internal pushback
5. Quick ROI summary

Make everything easy to copy-paste. Use their company's language.`,
  },
  {
    id: 'uni-referral-request',
    title: 'Ask for Referral',
    description: 'Request referrals from happy customers',
    category: 'universal',
    tags: ['referral', 'customer', 'growth'],
    difficulty: 'beginner',
    prompt: `Write a referral request message.

Context:
- Customer: [NAME at COMPANY]
- Relationship length: [HOW LONG]
- Value delivered: [RESULTS/OUTCOMES]
- Target referral type: [WHO YOU WANT TO MEET]
- How to ask: [EMAIL / CALL / IN QBR]

Write versions for:
1. Direct ask (strong relationship)
2. Soft ask (newer relationship)
3. Specific person ask (you know who)
4. Event-based (after success milestone)
5. Quid pro quo (you're offering something)

Each version should:
- Lead with their success
- Make the ask specific
- Make it easy to say yes
- Include language they can use for intro
- Not be pushy`,
  },
  {
    id: 'uni-competitor-mention',
    title: 'Handle Competitor Mention',
    description: 'Respond when prospect mentions competitor',
    category: 'universal',
    tags: ['competitive', 'positioning', 'objection'],
    difficulty: 'intermediate',
    prompt: `Help me respond when a prospect mentions a competitor.

Context:
- What they said: [EXACT QUOTE]
- Competitor mentioned: [NAME]
- Where we're strong vs. them: [ADVANTAGES]
- Where they're strong vs. us: [THEIR ADVANTAGES]
- Prospect's priorities: [WHAT THEY CARE ABOUT]

Create responses for these scenarios:
1. "We're also looking at X" (evaluation)
2. "We currently use X" (displacement)
3. "X is cheaper" (price comparison)
4. "X has feature Y" (feature gap)
5. "We heard X is better at Z" (reputation)

Rules:
- Never badmouth competitor
- Ask questions first
- Focus on fit, not features
- Acknowledge where they're strong
- Tie differentiators to their priorities`,
  },
  {
    id: 'uni-linkedin-post-ideas',
    title: 'LinkedIn Content Ideas for Sales',
    description: 'Generate LinkedIn post ideas for social selling',
    category: 'universal',
    tags: ['linkedin', 'content', 'social-selling'],
    difficulty: 'beginner',
    prompt: `Generate LinkedIn post ideas for sales content.

Context:
- My industry: [INDUSTRY]
- My target buyer: [PERSONA]
- My expertise: [TOPICS I KNOW]
- My goal: [BRAND / LEADS / ENGAGEMENT]

Generate 10 post ideas in these formats:
1. Contrarian take (challenge conventional wisdom)
2. Lesson learned (personal story)
3. Quick tip (tactical advice)
4. Myth busting (common misconception)
5. Framework share (process I use)
6. Question post (spark discussion)
7. Observation (industry trend)
8. Celebration (customer success, without naming)
9. Behind the scenes (authentic look)
10. Poll (engagement driver)

For each idea:
- Hook (first line)
- Key points (3-5 bullets)
- CTA (if any)
- Best time to post`,
  },
  {
    id: 'uni-case-study-structure',
    title: 'Case Study Builder',
    description: 'Structure a customer success story',
    category: 'universal',
    tags: ['case-study', 'proof', 'content'],
    difficulty: 'intermediate',
    prompt: `Help me structure a customer case study.

Customer details:
- Company: [NAME]
- Industry: [INDUSTRY]
- Size: [SIZE]
- Their challenge: [PROBLEM THEY HAD]
- Our solution: [WHAT WE PROVIDED]
- Results: [OUTCOMES/METRICS]
- Timeline: [HOW LONG TO RESULTS]

Create structure for:
1. One-paragraph summary (for emails)
2. One-pager (for sales)
3. Full case study (for website)
4. Quote for social proof
5. Slide for presentations

Each format should include:
- The challenge (pain)
- The solution (how we helped)
- The results (outcomes)
- A quotable quote

Identify gaps where I need more info from the customer.`,
  },
  {
    id: 'uni-cold-call-voicemail',
    title: 'Voicemail That Gets Callbacks',
    description: 'Leave effective cold call voicemails',
    category: 'universal',
    tags: ['cold-call', 'voicemail', 'phone'],
    difficulty: 'beginner',
    prompt: `Write cold call voicemail scripts.

Context:
- Target: [TITLE at COMPANY TYPE]
- My company: [NAME]
- My value prop: [ONE SENTENCE]
- Why them specifically: [PERSONALIZATION ANGLE]
- My callback number: [NUMBER]

Write voicemails for:
1. First touch (they don't know me)
2. Follow-up to email (they got my email)
3. Trigger event (timely reason)
4. Referral mention (someone suggested)
5. Break-up voicemail (final attempt)

Each voicemail must be:
- Under 20 seconds when spoken
- Have ONE clear point
- Say name and number slowly
- Give a reason to call back
- End with number again`,
  },
  {
    id: 'uni-deal-update-internal',
    title: 'Internal Deal Update',
    description: 'Update leadership on deal status',
    category: 'universal',
    tags: ['internal', 'deal', 'update', 'leadership'],
    difficulty: 'intermediate',
    prompt: `Write an internal deal update for leadership.

Deal context:
- Account: [COMPANY]
- Deal size: [VALUE]
- Stage: [CURRENT STAGE]
- Close date: [TARGET]
- Champion: [NAME, STRENGTH]
- Competition: [WHO ELSE]
- Blockers: [WHAT'S IN THE WAY]
- Support needed: [WHAT I NEED FROM LEADERSHIP]

Structure the update:
1. One-line status (green/yellow/red + why)
2. Progress since last update
3. Key milestones hit
4. Current blockers and plan
5. Specific ask (if any)
6. Next steps with dates

Keep it scannable. Executives skim.
Flag where you need help early.`,
  },
  {
    id: 'uni-demo-agenda',
    title: 'Demo Agenda Template',
    description: 'Structure an effective product demo',
    category: 'universal',
    tags: ['demo', 'presentation', 'agenda'],
    difficulty: 'intermediate',
    prompt: `Create a demo agenda based on discovery.

Discovery findings:
- Main pain: [PRIMARY PROBLEM]
- Secondary pain: [SECONDARY PROBLEM]
- Current tools: [WHAT THEY USE TODAY]
- Decision criteria: [HOW THEY'LL EVALUATE]
- Attendees: [WHO'S IN THE DEMO]
- Time: [MINUTES AVAILABLE]

Create an agenda that:
1. Opens with their situation (show you listened)
2. Maps agenda to their priorities
3. Shows most relevant features only
4. Includes a "wow moment"
5. Leaves time for questions
6. Ends with clear next step

Also provide:
- Talking points for each section
- Questions to ask during demo
- How to handle "can you show feature X?"
- Recovery if demo breaks`,
  },
  {
    id: 'uni-qualification-questions',
    title: 'Universal Qualification Questions',
    description: 'Questions to qualify any opportunity',
    category: 'universal',
    tags: ['qualification', 'discovery', 'questions'],
    difficulty: 'intermediate',
    prompt: `Generate qualification questions for any sales conversation.

Context:
- My product: [WHAT YOU SELL]
- My typical deal size: [ACV RANGE]
- My sales cycle: [TYPICAL LENGTH]

Generate questions for:
BANT:
- Budget (without asking "what's your budget?")
- Authority (who makes the decision?)
- Need (what problem are they solving?)
- Timeline (when do they need this?)

MEDDPICC (for enterprise):
- Metrics (how will they measure success?)
- Economic Buyer (who controls budget?)
- Decision Criteria (how will they evaluate?)
- Decision Process (what are the steps?)
- Paper Process (procurement/legal?)
- Identify Pain (what's the compelling event?)
- Champion (who's advocating internally?)
- Competition (who else are they looking at?)

For each question:
- Natural way to ask
- Follow-up if answer is vague
- Red flag answers`,
  },
  {
    id: 'uni-trial-check-in',
    title: 'Trial Check-In Messages',
    description: 'Check in with trial users to drive adoption',
    category: 'universal',
    tags: ['trial', 'check-in', 'adoption'],
    difficulty: 'beginner',
    prompt: `Create trial check-in messages.

Context:
- Product: [WHAT YOU SELL]
- Trial length: [DAYS]
- Key activation event: [WHAT SHOWS THEY'RE ENGAGED]
- Customer persona: [WHO'S USING IT]

Create check-ins for:
Day 1: Welcome + quick start
Day 3: First milestone check
Day 7: Engagement check (are they using it?)
Day 10: Value conversation
Day [X-2]: Trial ending soon
Day [X]: Final ask

For each check-in:
- Subject line
- Body (under 100 words)
- Goal of the touchpoint
- If low engagement, alternative message
- CTA

Include both email and in-app message versions.`,
  },
  {
    id: 'uni-proposal-structure',
    title: 'Proposal Document Structure',
    description: 'Structure a winning proposal document',
    category: 'universal',
    tags: ['proposal', 'document', 'closing'],
    difficulty: 'advanced',
    prompt: `Structure a proposal document.

Deal context:
- Prospect: [COMPANY]
- Deal size: [VALUE]
- Decision timeline: [WHEN]
- Key stakeholders: [WHO'S READING]
- Main problems we solve: [TOP 3 PAINS]
- Competition: [WHO ELSE]

Proposal structure:
1. Executive Summary (1 page)
2. Understanding Your Situation
3. Proposed Solution
4. Implementation Approach
5. Investment & ROI
6. About Us (brief)
7. Next Steps

For each section provide:
- What to include
- What to avoid
- Length guidance
- Visuals to consider

Also include:
- Email to send with proposal
- How to present vs. just send
- Follow-up cadence if no response`,
  },
  {
    id: 'uni-territory-planning',
    title: 'Territory Planning Prompt',
    description: 'Plan coverage for your territory',
    category: 'universal',
    tags: ['territory', 'planning', 'strategy'],
    difficulty: 'advanced',
    prompt: `Help me plan my sales territory.

Territory details:
- Geographic/vertical scope: [WHAT I OWN]
- Account list: [NUMBER OF ACCOUNTS]
- Quota: [TARGET]
- My product: [WHAT I SELL]
- Average deal size: [TYPICAL ACV]
- Sales cycle: [LENGTH]

Create a territory plan that includes:
1. Account tiering (A/B/C criteria)
2. Time allocation by tier
3. Weekly/monthly activity targets
4. Pipeline math (what I need to hit quota)
5. Account prioritization framework
6. Coverage gaps to address
7. Quick wins vs. long-term plays
8. Metrics to track

Output:
- Account tier definitions
- Weekly activity template
- Pipeline goals by month
- Top 10 accounts to focus on and why`,
  },
  {
    id: 'uni-renewal-outreach',
    title: 'Renewal Outreach Sequence',
    description: 'Outreach for upcoming renewals',
    category: 'universal',
    tags: ['renewal', 'retention', 'customer'],
    difficulty: 'intermediate',
    prompt: `Create a renewal outreach sequence.

Customer context:
- Company: [NAME]
- Current ARR: [VALUE]
- Renewal date: [DATE]
- Days until renewal: [DAYS]
- Usage level: [HIGH / MEDIUM / LOW]
- NPS/satisfaction: [IF KNOWN]
- Expansion opportunity: [IF ANY]
- Risk level: [LOW / MEDIUM / HIGH]

Create outreach for:
- 90 days out: Health check
- 60 days out: Renewal preview
- 45 days out: Formal renewal conversation
- 30 days out: Proposal/quote
- 14 days out: Close push
- 7 days out: Final ask

For each touchpoint:
- Email template
- Call script key points
- What to achieve
- If at-risk, alternative approach

Include executive sponsor escalation if needed.`,
  },
  {
    id: 'uni-objection-bank',
    title: 'Common Objection Response Bank',
    description: 'Responses to the most common sales objections',
    category: 'universal',
    tags: ['objections', 'responses', 'handling'],
    difficulty: 'intermediate',
    prompt: `Create responses for common sales objections.

Context:
- My product: [WHAT YOU SELL]
- My typical buyer: [PERSONA]
- My price point: [RANGE]

Generate responses for:
1. "We're happy with our current solution"
2. "It's not a priority right now"
3. "Send me some information"
4. "I need to talk to my team/boss"
5. "Let me think about it"
6. "We tried something like this before and it didn't work"
7. "We're too busy to implement anything new"
8. "Call me back in [future date]"
9. "We don't have budget allocated for this"
10. "I'm not the decision maker"

For each objection:
- Empathetic acknowledgment
- Probing question
- Reframe response
- Exit gracefully if real
- Red flag that means stop`,
  },
  {
    id: 'uni-email-subject-ab-test',
    title: 'A/B Test Email Subject Lines',
    description: 'Generate subject line variations for testing',
    category: 'universal',
    tags: ['email', 'subject-line', 'ab-test'],
    difficulty: 'beginner',
    prompt: `Generate A/B test subject line variations.

Context:
- Original subject: [CURRENT SUBJECT LINE]
- Email purpose: [COLD / FOLLOW-UP / NURTURE / PROMO]
- Target persona: [WHO'S RECEIVING]
- Tone: [PROFESSIONAL / CASUAL / URGENT]

Generate 10 variations using different psychological triggers:
1. Curiosity (opens a loop)
2. Benefit (what they get)
3. Pain point (what they avoid)
4. Social proof (others doing it)
5. Scarcity (limited availability)
6. Specificity (exact numbers)
7. Question (engages them)
8. Personal (uses their name/company)
9. News hook (timely/relevant)
10. Direct ask (no games)

For each variation:
- The subject line
- Character count
- Why it might work
- Who it works best for`,
  },
  {
    id: 'uni-intro-email-new-contact',
    title: 'Introduction to New Contact',
    description: 'Introduce yourself to a new stakeholder',
    category: 'universal',
    tags: ['email', 'introduction', 'stakeholder'],
    difficulty: 'beginner',
    prompt: `Write an introduction email to a new contact at an existing account.

Context:
- New contact: [NAME, TITLE]
- How you learned about them: [REFERRAL / ORG CHART / LINKEDIN]
- Your existing contact: [NAME, TITLE]
- Your relationship: [PROSPECT / CUSTOMER / PARTNER]
- Why you want to connect: [REASON]

Introduction approaches:
1. Referral from existing contact
2. Org chart discovery (direct)
3. LinkedIn connection first then email
4. Through shared meeting invite
5. Value-first (share something useful)

For each approach:
- Email template
- Subject line
- When to use it
- How to handle if no response`,
  },
  {
    id: 'uni-reactivation-email',
    title: 'Lead Reactivation Campaign',
    description: 'Re-engage old leads and closed-lost opps',
    category: 'universal',
    tags: ['reactivation', 'nurture', 'closed-lost'],
    difficulty: 'intermediate',
    prompt: `Create a reactivation campaign for old leads.

Context:
- Lead status: [COLD / CLOSED-LOST / NURTURE]
- How long since contact: [MONTHS]
- Original reason for no-deal: [WHY THEY DIDN'T BUY]
- What's changed since then: [NEW FEATURES / PRICING / POSITIONING]
- Total leads to reactivate: [NUMBER]

Create:
1. Re-engagement email sequence (3 touches)
2. Phone script for warm calls
3. LinkedIn message approach
4. Value-add content to share
5. Segmentation criteria (who to prioritize)

For each touch:
- Acknowledge the time gap
- Reference previous conversation
- Lead with new value
- Make it easy to re-engage
- Have a clear, low-commitment ask`,
  },
  {
    id: 'uni-exec-intro-email',
    title: 'Executive Introduction Email',
    description: 'Cold email to C-level executives',
    category: 'universal',
    tags: ['executive', 'cold-email', 'c-level'],
    difficulty: 'advanced',
    prompt: `Write a cold email to a C-level executive.

Context:
- Executive: [NAME, TITLE at COMPANY]
- Company size: [REVENUE/EMPLOYEES]
- Signal/trigger: [WHY NOW]
- Business outcome we drive: [TOP-LINE IMPACT]
- Exec-level proof point: [SIMILAR EXEC/COMPANY RESULT]

Executive email rules:
- Lead with business impact, not product
- One specific insight they might not have
- Shorter is better (under 75 words)
- No fluff or empty compliments
- Peer credibility matters
- Ask for direction, not their time

Structure:
1. Pattern interrupt (first line matters)
2. One insight or observation
3. Credibility marker
4. Soft CTA (who should I speak with?)

Write 3 versions with different hooks.`,
  },
  {
    id: 'uni-persona-research',
    title: 'Buyer Persona Research',
    description: 'Research a buyer persona for better messaging',
    category: 'universal',
    tags: ['persona', 'research', 'icp'],
    difficulty: 'intermediate',
    prompt: `Help me research and understand a buyer persona.

Persona to research:
- Title/Role: [TITLE]
- Industry: [INDUSTRY]
- Company size: [SEGMENT]

I need to understand:
1. What's in their job description?
2. How are they measured (KPIs)?
3. What do they worry about (3 AM problems)?
4. What's their boss asking them for?
5. What would make them a hero internally?
6. What have they tried before that failed?
7. Who influences their decisions?
8. How do they prefer to buy?
9. What content do they consume?
10. What language do they use?

Also provide:
- Day in the life
- Goals vs. obstacles
- Buying triggers
- Objections I'll hear
- Best way to reach them`,
  },
  {
    id: 'uni-power-questions',
    title: 'Power Questions for Sales',
    description: 'High-impact questions for any sales conversation',
    category: 'universal',
    tags: ['questions', 'discovery', 'power-questions'],
    difficulty: 'intermediate',
    prompt: `Generate power questions for sales conversations.

Context:
- My product: [WHAT YOU SELL]
- Conversation type: [COLD CALL / DISCOVERY / DEMO / CLOSE]
- Buyer persona: [WHO I'M TALKING TO]

Generate questions in these categories:

Opening Power Questions:
- To grab attention
- To understand their world
- To earn the right to continue

Pain Discovery Questions:
- To find problems
- To quantify impact
- To create urgency

Process Questions:
- To understand how they buy
- To identify stakeholders
- To map timeline

Commitment Questions:
- To test interest
- To identify blockers
- To advance the deal

For each question:
- The exact question
- When to use it
- What you're really learning
- Follow-up if they're vague`,
  },
  {
    id: 'uni-value-proposition',
    title: 'Value Proposition Builder',
    description: 'Craft value propositions for different audiences',
    category: 'universal',
    tags: ['value-prop', 'messaging', 'positioning'],
    difficulty: 'intermediate',
    prompt: `Build value propositions for my product.

Context:
- My product: [WHAT YOU SELL]
- What it does: [FUNCTIONALITY]
- Who uses it: [END USERS]
- Problems it solves: [TOP 3 PAIN POINTS]
- Outcomes it delivers: [RESULTS]
- Differentiators: [WHY US VS ALTERNATIVES]

Create value propositions for:
1. One-liner (10 words max)
2. Elevator pitch (30 seconds)
3. Email opener (one sentence)
4. Website headline
5. Cold call opener
6. Exec summary intro

Then adapt for different personas:
- Economic buyer (ROI focused)
- Technical evaluator (capability focused)
- End user (ease of use focused)
- Champion (internal justification)

Test each against: "So what?" and "Why you?"`,
  },
  {
    id: 'uni-social-proof-bank',
    title: 'Social Proof Library',
    description: 'Organize and use social proof effectively',
    category: 'universal',
    tags: ['social-proof', 'testimonials', 'references'],
    difficulty: 'beginner',
    prompt: `Help me build a social proof library.

Current proof points:
- Customer quotes: [LIST WHAT YOU HAVE]
- Case studies: [LIST TITLES]
- Metrics/results: [KEY NUMBERS]
- Logos: [RECOGNIZABLE BRANDS]
- Awards/recognition: [ACCOLADES]
- Industry validation: [ANALYSTS, PRESS]

Help me organize this for different uses:

Email Proof Points:
- One-liners to drop in
- Specific results to cite

Call Talk Tracks:
- How to weave in naturally
- "Companies like X are using this to..."

Proposal Proof:
- Which proof for which objection
- Industry-specific references

Presentation Slides:
- Logo slides
- Quote slides
- Results slides

For each situation, show me how to use what I have.`,
  },
  {
    id: 'uni-urgency-creation',
    title: 'Urgency Creation Techniques',
    description: 'Create genuine urgency without being pushy',
    category: 'universal',
    tags: ['urgency', 'closing', 'motivation'],
    difficulty: 'advanced',
    prompt: `Help me create urgency in this deal.

Context:
- Prospect: [COMPANY]
- Deal stage: [STAGE]
- Their stated timeline: [WHAT THEY SAID]
- Actual buying signals: [WHAT YOU'VE SEEN]
- What's causing delay: [BLOCKER]
- Our leverage: [WHY THEY NEED US]

Generate ethical urgency angles:
1. Cost of delay (what waiting costs them)
2. Competitive risk (what others are doing)
3. Implementation timeline (start now to hit goal)
4. Resource availability (our capacity)
5. Pricing (legitimate expiration)
6. Business cycle (their fiscal year/quarter)
7. External event (industry change, regulation)

For each angle:
- How to position it
- Language to use
- When it's appropriate
- When to NOT use it
- How to avoid being sleazy`,
  },
  {
    id: 'uni-negotiation-prep',
    title: 'Negotiation Preparation Framework',
    description: 'Prepare for any negotiation conversation',
    category: 'universal',
    tags: ['negotiation', 'preparation', 'strategy'],
    difficulty: 'advanced',
    prompt: `Prepare me for a negotiation.

Deal context:
- Prospect: [COMPANY]
- Our ask: [PRICE/TERMS]
- Their position: [WHAT THEY WANT]
- History: [NEGOTIATION SO FAR]
- Stakeholders: [WHO'S INVOLVED]
- Competition: [ALTERNATIVES THEY HAVE]
- Timeline pressure: [THEIR DEADLINE / OURS]

Prepare:
1. BATNA Analysis
   - Our best alternative if this fails
   - Their best alternative if this fails

2. Zone of Possible Agreement
   - Our walkaway point
   - Their likely walkaway
   - Target outcome

3. Concession Strategy
   - What we can give
   - What we want in return
   - Order of concessions

4. Objection Responses
   - Anticipated pushback
   - How to respond

5. Closing Approach
   - How to ask for the close
   - How to handle "no"
   - How to leave door open`,
  },
  {
    id: 'uni-weekly-planning',
    title: 'Sales Week Planning',
    description: 'Plan your sales activities for the week',
    category: 'universal',
    tags: ['planning', 'productivity', 'time-management'],
    difficulty: 'beginner',
    prompt: `Help me plan my sales week.

Current state:
- Open pipeline: [TOTAL VALUE]
- Deals closing this month: [NUMBER AND VALUE]
- Meetings booked this week: [NUMBER]
- Prospecting target: [CALLS/EMAILS]
- Admin tasks due: [WHAT'S NEEDED]

Help me plan:
1. Priority deals to advance (top 3-5)
2. Prospecting blocks (when and how much)
3. Follow-up tasks (who needs what)
4. Meeting preparation time
5. Admin time (CRM, forecasting)

Weekly cadence template:
- Monday: Week planning + top deals
- Tuesday-Thursday: Prospecting + meetings
- Friday: Follow-up + forecast

Time blocking suggestions:
- Deep work windows
- Call blocks
- Email processing
- CRM updates`,
  },
  {
    id: 'uni-lost-deal-analysis',
    title: 'Lost Deal Post-Mortem',
    description: 'Analyze why a deal was lost',
    category: 'universal',
    tags: ['lost-deal', 'analysis', 'learning'],
    difficulty: 'intermediate',
    prompt: `Analyze this lost deal for learnings.

Deal details:
- Company: [PROSPECT]
- Deal value: [AMOUNT]
- Sales cycle length: [DAYS]
- Stage reached: [HIGHEST STAGE]
- Competition: [WHO ELSE]
- Who won: [COMPETITOR / NO DECISION / INTERNAL]
- Reason given: [WHAT THEY SAID]

Analyze:
1. Where did we lose it? (which stage)
2. Was it winnable? (qualification check)
3. What did competition do better?
4. What would we do differently?
5. Red flags we missed?
6. Good things we did?

Categories of loss:
- Timing (not ready to buy)
- Budget (couldn't afford)
- Competition (chose someone else)
- No decision (did nothing)
- Bad fit (should have disqualified)

Action items:
- What to improve for next time
- How to stay in touch (maybe future opportunity)`,
  },
  {
    id: 'uni-champion-checklist',
    title: 'Champion Validation Checklist',
    description: 'Validate if your champion is real',
    category: 'universal',
    tags: ['champion', 'validation', 'qualification'],
    difficulty: 'advanced',
    prompt: `Validate if my contact is a true champion.

Contact details:
- Name and title: [WHO]
- Time in role: [TENURE]
- Relationship with EB: [CONNECTION]
- What they've done for us: [ACTIONS]
- What they've said: [COMMITMENTS]

Champion criteria (must have all 3):
1. POWER: Can influence the decision
2. ACCESS: Can get you to decision makers
3. WILL: Actively selling for you internally

Validation tests:
1. Will they give you info others won't?
2. Will they coach you on internal dynamics?
3. Will they introduce you to power?
4. Will they tell you the truth about your position?
5. Will they fight for you when you're not there?

If they fail:
- How to build a real champion
- Where else to look
- Questions to find hidden champions`,
  },
  {
    id: 'uni-competitive-landmine',
    title: 'Competitive Landmines',
    description: 'Plant questions that expose competitor weaknesses',
    category: 'universal',
    tags: ['competitive', 'differentiation', 'questions'],
    difficulty: 'advanced',
    prompt: `Create competitive landmines for my evaluation.

Context:
- My product: [WHAT YOU SELL]
- Main competitor: [WHO]
- Where we're strong: [OUR ADVANTAGES]
- Where they're weak: [THEIR GAPS]
- Buyer's likely criteria: [WHAT THEY CARE ABOUT]

Create landmines (questions for buyer to ask competitor):
1. Technical landmines (expose capability gaps)
2. Process landmines (expose complexity)
3. Support landmines (expose service gaps)
4. Pricing landmines (expose hidden costs)
5. Roadmap landmines (expose direction)

For each landmine:
- The question to plant
- Why it hurts competitor
- Natural way to bring it up
- What answer exposes the weakness

Rules:
- Don't lie or exaggerate
- Focus on real differences
- Make questions reasonable
- Be ready if they flip it on you`,
  },
  {
    id: 'uni-deal-review-prep',
    title: 'Deal Review Preparation',
    description: 'Prepare for a deal review with your manager',
    category: 'universal',
    tags: ['deal-review', 'coaching', 'preparation'],
    difficulty: 'intermediate',
    prompt: `Prepare for a deal review with my manager.

Deal details:
- Account: [COMPANY]
- Deal size: [VALUE]
- Close date: [TARGET]
- Current stage: [STAGE]
- Days in stage: [NUMBER]

Prepare to answer:
1. SITUATION: What's the deal? (one paragraph)
2. QUALIFICATION: Is this real? (MEDDPICC/BANT)
3. COMPETITION: Are we winning?
4. NEXT STEPS: What happens next?
5. HELP NEEDED: What support do I need?

Anticipate manager questions:
- Why will they buy?
- Why us vs. competition?
- Is the close date realistic?
- What could go wrong?
- What are you doing to advance it?

Come with specific asks, not vague "I need help."`,
  },
  {
    id: 'uni-email-writing-polish',
    title: 'Email Polish and Improvement',
    description: 'Improve an existing sales email',
    category: 'universal',
    tags: ['email', 'writing', 'improvement'],
    difficulty: 'beginner',
    prompt: `Improve this sales email.

Current email:
[PASTE YOUR EMAIL HERE]

Context:
- Purpose: [WHAT YOU'RE TRYING TO ACHIEVE]
- Recipient: [WHO]
- Stage: [COLD / WARM / FOLLOW-UP]

Check and improve:
1. Subject line (is it compelling?)
2. Opening line (does it hook?)
3. Length (too long?)
4. Clarity (is the ask clear?)
5. Value (what's in it for them?)
6. CTA (is it specific?)
7. Tone (right for the reader?)
8. Personalization (is it generic?)
9. Grammar/typos
10. Mobile readability

Provide:
- Rewritten version
- What I changed and why
- Alternative subject lines
- Shorter version if too long`,
  },
  {
    id: 'uni-buying-committee-map',
    title: 'Buying Committee Mapping',
    description: 'Map all stakeholders in a complex deal',
    category: 'universal',
    tags: ['stakeholders', 'mapping', 'enterprise'],
    difficulty: 'advanced',
    prompt: `Map the buying committee for this deal.

Deal context:
- Company: [PROSPECT]
- Deal size: [VALUE]
- What we sell: [PRODUCT]
- Known contacts: [WHO YOU KNOW]

For each stakeholder type, identify:
1. Economic Buyer (budget authority)
2. Technical Buyer (evaluates capabilities)
3. User Buyer (will use daily)
4. Champion (wants you to win)
5. Coach (gives inside info)
6. Blocker (might say no)
7. Influencer (shapes opinion)
8. Legal/Procurement (contract authority)

For each person found:
- Name and title
- Their agenda (what they care about)
- How to win them
- Risk they pose
- Engagement strategy

Create a visual org chart with relationships.`,
  },
  {
    id: 'uni-discovery-debrief',
    title: 'Discovery Call Debrief',
    description: 'Debrief and extract insights from discovery',
    category: 'universal',
    tags: ['discovery', 'debrief', 'notes'],
    difficulty: 'intermediate',
    prompt: `Debrief my discovery call and extract key insights.

Call details:
- Prospect: [NAME, TITLE at COMPANY]
- Call duration: [MINUTES]
- Raw notes: [PASTE YOUR NOTES]

Extract and organize:
1. SITUATION (current state)
   - How they do it today
   - Tools/processes in place
   - Team structure

2. PAIN (problems)
   - Problems mentioned
   - Impact of problems
   - Urgency level

3. IMPACT (quantified)
   - Time wasted
   - Money lost
   - Risk exposure

4. DECISION (process)
   - Who else involved
   - Timeline
   - Budget

5. NEXT STEPS
   - What was agreed
   - Follow-up actions

Also flag: Red flags, positive signals, info gaps to fill.`,
  },
  {
    id: 'uni-sales-deck-outline',
    title: 'Sales Presentation Outline',
    description: 'Structure a compelling sales presentation',
    category: 'universal',
    tags: ['presentation', 'deck', 'pitch'],
    difficulty: 'intermediate',
    prompt: `Create a sales presentation outline.

Context:
- Audience: [WHO'S ATTENDING]
- Meeting purpose: [INTRO / DEEP DIVE / EXEC]
- Time available: [MINUTES]
- What they know: [BACKGROUND]
- My product: [WHAT YOU SELL]
- Key message: [MAIN POINT]

Create outline for:
1. Opening (grab attention)
2. Agenda (set expectations)
3. Their situation (show you understand)
4. The problem (pain amplification)
5. The solution (your approach)
6. How it works (demo/walkthrough)
7. Results/proof (social proof)
8. Investment (pricing)
9. Next steps (CTA)

For each section:
- Key points to make
- Time allocation
- Visuals needed
- Questions to ask audience
- Transitions between sections`,
  },
  {
    id: 'uni-crm-notes',
    title: 'CRM Notes Template',
    description: 'Write effective CRM notes for any interaction',
    category: 'universal',
    tags: ['crm', 'notes', 'documentation'],
    difficulty: 'beginner',
    prompt: `Write CRM notes for this interaction.

Interaction details:
- Type: [CALL / EMAIL / MEETING / DEMO]
- Prospect: [NAME, TITLE]
- Date: [WHEN]
- Duration: [HOW LONG]
- What happened: [RAW NOTES OR MEMORY]

Structure notes as:
1. SUMMARY (2-3 sentences)
2. KEY POINTS
   - What they said about pain
   - What they said about timeline
   - What they said about budget
   - What they said about competition
3. STAKEHOLDERS (mentioned or involved)
4. OBJECTIONS (raised concerns)
5. NEXT STEPS (specific with dates)
6. FOLLOW-UP ITEMS (what you owe them)

Keep it scannable. Future you (or your manager) needs to understand this deal in 30 seconds.`,
  },
  {
    id: 'uni-pricing-presentation',
    title: 'Pricing Conversation Framework',
    description: 'Present pricing effectively',
    category: 'universal',
    tags: ['pricing', 'presentation', 'value'],
    difficulty: 'intermediate',
    prompt: `Prepare to present pricing for this deal.

Context:
- Prospect: [COMPANY]
- Our price: [AMOUNT]
- Their likely budget: [IF KNOWN]
- Value we deliver: [KEY OUTCOMES]
- Competition pricing: [IF KNOWN]
- Decision timeline: [WHEN]

Create pricing presentation approach:
1. Before revealing price:
   - Value summary (what they get)
   - ROI preview (what it's worth)
   - Comparison to alternatives

2. The reveal:
   - How to frame the number
   - Anchoring strategy
   - Package/option presentation

3. After revealing:
   - Silence (let them respond)
   - Handle initial reaction
   - Objection responses ready

4. Negotiation prep:
   - What you can flex on
   - What you can't
   - Trade-offs to offer`,
  },
  {
    id: 'uni-email-sequence-audit',
    title: 'Email Sequence Audit',
    description: 'Audit and improve an existing email sequence',
    category: 'universal',
    tags: ['email', 'sequence', 'audit', 'optimization'],
    difficulty: 'intermediate',
    prompt: `Audit my email sequence and suggest improvements.

Current sequence:
[PASTE YOUR SEQUENCE - SUBJECT LINES AND BODIES]

Sequence context:
- Target persona: [WHO]
- Goal: [BOOK MEETING / DEMO / ETC]
- Current performance: [OPEN/REPLY RATES IF KNOWN]

Audit each email for:
1. Subject line (compelling? right length?)
2. Opening line (personalized? relevant?)
3. Value prop (clear? specific?)
4. Length (too long? too short?)
5. CTA (clear? low friction?)
6. Tone (appropriate for persona?)

Audit the sequence as a whole:
- Pacing (timing between emails)
- Angle variation (different approaches)
- Escalation (appropriate progression)
- Breakup (effective closing)

Provide rewritten versions of weak emails.`,
  },
  {
    id: 'uni-account-plan',
    title: 'Strategic Account Plan',
    description: 'Create a plan for a strategic account',
    category: 'universal',
    tags: ['account-plan', 'strategy', 'enterprise'],
    difficulty: 'advanced',
    prompt: `Create a strategic account plan.

Account details:
- Company: [NAME]
- Industry: [INDUSTRY]
- Size: [REVENUE/EMPLOYEES]
- Current relationship: [PROSPECT / CUSTOMER / VALUE]
- Key contacts: [WHO YOU KNOW]
- My product: [WHAT YOU SELL]

Build an account plan covering:
1. ACCOUNT OVERVIEW
   - Business summary
   - Strategic initiatives
   - Key challenges
   - Decision makers

2. OPPORTUNITY ANALYSIS
   - Current state with us
   - Whitespace opportunities
   - Total addressable value
   - Competition present

3. RELATIONSHIP MAP
   - Org chart
   - Power dynamics
   - Champion status
   - Coverage gaps

4. ACTION PLAN
   - 30-day priorities
   - 90-day goals
   - Key meetings needed
   - Resources required

5. SUCCESS METRICS
   - How we'll measure progress`,
  },
  {
    id: 'uni-win-story',
    title: 'Customer Win Story',
    description: 'Document a customer win for future reference',
    category: 'universal',
    tags: ['win-story', 'case-study', 'documentation'],
    difficulty: 'beginner',
    prompt: `Document this customer win.

Win details:
- Customer: [COMPANY]
- Deal size: [VALUE]
- Sales cycle: [LENGTH]
- Key stakeholders: [WHO]
- Competition: [WHO ELSE]
- Why they chose us: [REASONS]
- Close date: [WHEN]

Document:
1. DEAL SUMMARY
   - What they bought
   - Deal value and terms
   - Timeline

2. WIN FACTORS
   - What we did well
   - Why they chose us over alternatives
   - Key moments that won it

3. LESSONS LEARNED
   - What would we repeat
   - What would we do differently
   - Surprises along the way

4. REUSABLE ELEMENTS
   - Talk tracks that worked
   - Materials that resonated
   - Proof points to cite

5. REFERENCE POTENTIAL
   - Can they be a reference?
   - Quote for marketing?
   - Case study candidate?`,
  },
  {
    id: 'uni-sales-manager-update',
    title: 'Pipeline Update for Manager',
    description: 'Prepare pipeline update for 1:1',
    category: 'universal',
    tags: ['pipeline', 'manager', 'update', '1:1'],
    difficulty: 'intermediate',
    prompt: `Prepare my pipeline update for manager 1:1.

Current state:
- Quota: $[AMOUNT]
- Closed this month/quarter: $[CLOSED]
- Pipeline: $[TOTAL]
- Coverage ratio: [X]x

Top deals to discuss:
[LIST YOUR TOP 5 DEALS WITH STAGE AND VALUE]

Prepare update covering:
1. DEALS TO CLOSE
   - Commit deals (high confidence)
   - Upside deals (possible)
   - At-risk deals (needs help)

2. PIPELINE HEALTH
   - New pipeline added
   - Pipeline velocity
   - Stage distribution
   - Aging deals

3. HELP NEEDED
   - Specific asks
   - Resources required
   - Escalations needed

4. FOCUS AREAS
   - What I'm prioritizing
   - Why those priorities
   - Expected outcomes

Come with answers, not just updates.`,
  },
  {
    id: 'uni-prospect-research',
    title: 'Pre-Call Prospect Research',
    description: 'Research a prospect before reaching out',
    category: 'universal',
    tags: ['research', 'preparation', 'prospecting'],
    difficulty: 'beginner',
    prompt: `Research this prospect before I reach out.

Prospect:
- Name: [NAME]
- Title: [TITLE]
- Company: [COMPANY]

Research and compile:
1. COMPANY INFO
   - What they do
   - Company size
   - Recent news
   - Funding/financials
   - Growth trajectory

2. PERSONAL INFO
   - Background
   - Previous companies
   - LinkedIn activity
   - Recent posts/shares
   - Mutual connections

3. PAIN INDICATORS
   - Job postings (what they're hiring for)
   - Tech stack (what tools they use)
   - Initiatives mentioned
   - Challenges in their industry

4. CONVERSATION STARTERS
   - Personalization hooks
   - Relevant triggers
   - Common ground

5. OUTREACH ANGLE
   - Best channel to reach
   - Best time to reach
   - Opening line suggestion`,
  },
  {
    id: 'uni-poc-planning',
    title: 'POC/Pilot Planning',
    description: 'Plan a proof of concept or pilot',
    category: 'universal',
    tags: ['poc', 'pilot', 'trial', 'planning'],
    difficulty: 'advanced',
    prompt: `Plan a POC/pilot for this prospect.

Context:
- Prospect: [COMPANY]
- What they want to test: [SCOPE]
- Their success criteria: [WHAT THEY SAID]
- Timeline: [HOW LONG]
- Who's involved: [STAKEHOLDERS]
- What's at stake: [DEAL VALUE IF POC SUCCEEDS]

POC plan should include:
1. OBJECTIVES
   - Clear success criteria
   - Metrics to measure
   - Decision point

2. SCOPE
   - What's included
   - What's excluded
   - Users/volume

3. TIMELINE
   - Setup phase
   - Active testing
   - Evaluation
   - Decision meeting

4. RESOURCES
   - Their commitments
   - Our commitments
   - Support model

5. RISK MITIGATION
   - What could go wrong
   - How to prevent
   - Exit criteria

6. CONVERSION PLAN
   - What happens if successful
   - Next steps already agreed`,
  },
  {
    id: 'uni-competitive-intel',
    title: 'Competitive Intelligence Gathering',
    description: 'Gather intel on competitor activity',
    category: 'universal',
    tags: ['competitive', 'intelligence', 'research'],
    difficulty: 'intermediate',
    prompt: `Help me gather competitive intelligence.

Competitor: [COMPETITOR NAME]
My product: [WHAT YOU SELL]

Research and organize:
1. PRODUCT INTEL
   - Features and capabilities
   - Recent releases
   - Roadmap (if public)
   - Known limitations

2. PRICING INTEL
   - Pricing model
   - Price points (if known)
   - Discount behavior
   - Contract terms

3. SALES INTEL
   - Sales process
   - Common tactics
   - Strengths to counter
   - Weaknesses to exploit

4. CUSTOMER INTEL
   - Who they sell to
   - Reference customers
   - Win/loss patterns
   - Customer complaints

5. POSITIONING
   - How they position vs. us
   - Messaging themes
   - Claims they make

Sources to check:
- G2/Capterra reviews
- LinkedIn posts
- Job postings
- Press releases
- Customer testimonials`,
  },
  {
    id: 'uni-multi-thread-strategy',
    title: 'Multi-Threading Strategy',
    description: 'Build relationships across the account',
    category: 'universal',
    tags: ['multi-threading', 'relationships', 'account'],
    difficulty: 'advanced',
    prompt: `Create a multi-threading strategy for this account.

Current state:
- Account: [COMPANY]
- Current contact: [NAME, TITLE]
- Contact status: [ENGAGED / STALLED / RESPONSIVE]
- Other people identified: [WHO ELSE YOU KNOW ABOUT]
- Deal stage: [WHERE YOU ARE]

Multi-thread plan:
1. STAKEHOLDER MAP
   - Who else should we know
   - Their role in the decision
   - How to identify them

2. ENTRY STRATEGY
   - For each new contact
   - How to get introduced
   - Value prop for their role

3. MESSAGING
   - Different messages for different personas
   - How to coordinate outreach
   - When to reference other conversations

4. RISK MITIGATION
   - Don't step on champion's toes
   - Coordinate internal messaging
   - Avoid appearing desperate

5. EXECUTION
   - Sequence of outreach
   - Timing between touches
   - Escalation path if blocked`,
  },
  {
    id: 'uni-objection-prevention',
    title: 'Objection Prevention Strategy',
    description: 'Prevent objections before they arise',
    category: 'universal',
    tags: ['objections', 'prevention', 'proactive'],
    difficulty: 'advanced',
    prompt: `Create an objection prevention strategy.

Context:
- My product: [WHAT YOU SELL]
- Common objections I hear: [LIST THEM]
- Typical buyer: [PERSONA]
- Sales stage: [WHERE OBJECTIONS ARISE]

For each common objection:
1. PRICE TOO HIGH
   - How to prevent: Build value before revealing
   - Pre-emptive messaging
   - When to address proactively

2. NOT A PRIORITY
   - How to prevent: Establish urgency early
   - Questions to ask
   - How to quantify cost of delay

3. NEED TO THINK ABOUT IT
   - How to prevent: Surface concerns early
   - Trial close questions
   - How to earn commitment

4. HAPPY WITH CURRENT SOLUTION
   - How to prevent: Find dissatisfaction early
   - Questions that expose gaps
   - How to plant seeds of doubt

For each prevention strategy:
- When in the process to deploy
- What to say
- Questions to ask
- Signs it's working`,
  },
  {
    id: 'uni-sales-email-templates',
    title: 'Essential Sales Email Templates',
    description: 'Core email templates every rep needs',
    category: 'universal',
    tags: ['email', 'templates', 'essentials'],
    difficulty: 'beginner',
    prompt: `Create essential sales email templates.

Context:
- My product: [WHAT YOU SELL]
- My target buyer: [PERSONA]
- My value prop: [KEY BENEFIT]

Create templates for:
1. First Touch (cold outreach)
2. Follow-Up #1 (no response)
3. Follow-Up #2 (still no response)
4. Breakup Email (final attempt)
5. Meeting Confirmation
6. Meeting Reminder (day before)
7. Post-Meeting Recap
8. Proposal Delivery
9. Proposal Follow-Up
10. Contract Sent
11. Thank You (after close)
12. Referral Request

For each template:
- Subject line
- Body (under 100 words)
- Variables to personalize [BRACKETS]
- When to send
- What makes it effective`,
  },
  {
    id: 'uni-quota-planning',
    title: 'Quota Achievement Planning',
    description: 'Plan how to hit your number',
    category: 'universal',
    tags: ['quota', 'planning', 'goals'],
    difficulty: 'intermediate',
    prompt: `Help me plan to hit my quota.

My numbers:
- Annual quota: $[AMOUNT]
- Quota this quarter: $[AMOUNT]
- Closed so far: $[CLOSED]
- Current pipeline: $[PIPELINE]
- Average deal size: $[ACV]
- Win rate: [%]
- Average sales cycle: [DAYS]

Calculate and plan:
1. THE MATH
   - Gap to quota
   - Pipeline needed (at my win rate)
   - Deals needed to close
   - New opportunities needed

2. PIPELINE ANALYSIS
   - What will close this quarter
   - What's at risk
   - What's missing

3. ACTIVITY REQUIREMENTS
   - Meetings needed
   - Calls/emails needed
   - To generate enough pipeline

4. WEEKLY PLAN
   - Activity targets
   - Pipeline milestones
   - Check-in points

5. RISK FACTORS
   - What could go wrong
   - Contingency plans
   - Help needed from manager`,
  },
];

// Helper to get prompts by category
export function getPromptsByCategory(category: string): Prompt[] {
  switch (category) {
    case 'saas':
      return saasPrompts;
    case 'financial-services':
      return financialServicesPrompts;
    case 'healthcare':
      return healthcarePrompts;
    case 'manufacturing':
      return manufacturingPrompts;
    case 'professional-services':
      return professionalServicesPrompts;
    case 'ecommerce':
      return ecommercePrompts;
    case 'real-estate':
      return realEstatePrompts;
    case 'education':
      return educationPrompts;
    case 'logistics':
      return logisticsPrompts;
    case 'energy':
      return energyPrompts;
    case 'government':
      return governmentPrompts;
    case 'telecom':
      return telecomPrompts;
    case 'media':
      return mediaPrompts;
    case 'hospitality':
      return hospitalityPrompts;
    case 'construction':
      return constructionPrompts;
    case 'insurance':
      return insurancePrompts;
    default:
      return [];
  }
}

export function getPromptsBySubcategory(category: string, subcategory: string): Prompt[] {
  return getPromptsByCategory(category).filter(p => p.subcategory === subcategory);
}

// SDR Prompts
export const sdrPrompts: Prompt[] = [
  {
    id: 'sdr-cold-email-sequence',
    title: 'Cold Email Sequence Builder',
    description: 'Generate a 5-touch email sequence for outbound prospecting',
    category: 'sdr',
    tags: ['cold-email', 'sequence', 'outbound'],
    difficulty: 'beginner',
    prompt: `Create a 5-email sequence for cold outbound prospecting.

Context:
- My company: [YOUR COMPANY]
- What we sell: [YOUR PRODUCT/SERVICE]
- Target persona: [TITLE at COMPANY TYPE]
- Key pain point we solve: [MAIN PAIN POINT]
- Best customer result: [SPECIFIC OUTCOME/METRIC]

Sequence structure:
1. Email 1 (Day 1): Hook with pain point or signal
2. Email 2 (Day 3): Social proof / case study
3. Email 3 (Day 7): Different angle / new value prop
4. Email 4 (Day 10): Breakup tease
5. Email 5 (Day 14): Actual breakup

Rules for each email:
- Subject line: 5 words max
- Body: Under 75 words
- One clear CTA
- No "I hope this finds you well"
- Reference previous emails in follow-ups`,
  },
  {
    id: 'sdr-linkedin-connection',
    title: 'LinkedIn Connection Request',
    description: 'Write a connection request that gets accepted',
    category: 'sdr',
    tags: ['linkedin', 'connection', 'prospecting'],
    difficulty: 'beginner',
    prompt: `Write a LinkedIn connection request that gets accepted.

Target:
- Name: [NAME]
- Title: [TITLE]
- Company: [COMPANY]
- Something notable: [RECENT POST / COMPANY NEWS / MUTUAL CONNECTION]

Rules:
- Under 300 characters (LinkedIn limit)
- Reference something specific about them
- No pitch in the connection request
- Give a reason to connect
- Be a human, not a sales robot

Generate 3 variations with different approaches.`,
  },
  {
    id: 'sdr-objection-voicemail',
    title: 'Voicemail Script',
    description: 'Leave a voicemail that gets callbacks',
    category: 'sdr',
    tags: ['voicemail', 'cold-call', 'phone'],
    difficulty: 'intermediate',
    prompt: `Write a voicemail script that gets callbacks.

Context:
- Prospect: [NAME, TITLE at COMPANY]
- Why I'm calling: [TRIGGER/SIGNAL]
- What I'm selling: [YOUR SOLUTION]
- Key pain point: [THEIR LIKELY PAIN]

Voicemail rules:
- Under 30 seconds when spoken
- Lead with something about THEM, not you
- One specific reason to call back
- Your phone number twice (beginning and end)
- Create curiosity without being clickbaity

Also provide:
1. A "pattern interrupt" version
2. A "referral" version (if you have a mutual connection)`,
  },
  {
    id: 'sdr-meeting-confirmation',
    title: 'Meeting Confirmation Email',
    description: 'Confirm a booked meeting and reduce no-shows',
    category: 'sdr',
    tags: ['meeting', 'confirmation', 'no-show'],
    difficulty: 'beginner',
    prompt: `Write a meeting confirmation email that reduces no-shows.

Meeting details:
- Prospect: [NAME, TITLE at COMPANY]
- Meeting time: [DATE/TIME]
- Meeting type: [INTRO CALL / DISCOVERY / DEMO]
- What was promised: [WHAT YOU SAID YOU'D COVER]
- AE joining: [YES/NO - IF YES, THEIR NAME]

Email should:
1. Confirm the time and add calendar context
2. Set expectations for what you'll cover
3. Ask a pre-meeting question to get them engaged
4. Provide easy reschedule option (but make it slightly harder than confirming)
5. Include your Calendly/booking link for rescheduling

Keep it under 100 words.`,
  },
  {
    id: 'sdr-research-prompt',
    title: 'Account Research Framework',
    description: 'Research a prospect account before outreach',
    category: 'sdr',
    tags: ['research', 'account', 'preparation'],
    difficulty: 'intermediate',
    prompt: `Help me research [COMPANY] before I reach out to them.

What I need to find:
1. Company basics (size, funding, growth stage)
2. Recent news/signals (funding, hiring, product launches)
3. Key stakeholders in [DEPARTMENT]
4. Tech stack (if relevant)
5. Likely pain points based on their stage/industry
6. Competitors they might be using
7. Trigger events I can reference

My product: [WHAT YOU SELL]
My ICP: [IDEAL CUSTOMER PROFILE]

Format the research as a one-pager I can reference during outreach.
Highlight the top 3 angles I should use in my first touch.`,
  },
  {
    id: 'sdr-linkedin-connection',
    title: 'LinkedIn Connection Request',
    description: 'Connection request messages that get accepted',
    category: 'sdr',
    tags: ['linkedin', 'connection', 'social-selling'],
    difficulty: 'beginner',
    prompt: `Write a LinkedIn connection request for [NAME, TITLE at COMPANY].

Context:
- Signal I found: [RECENT POST / JOB CHANGE / MUTUAL CONNECTION]
- My goal: [WHAT YOU WANT TO DISCUSS]
- Common ground: [SHARED INDUSTRY / INTEREST / BACKGROUND]

Constraints:
- 300 character limit (LinkedIn's max)
- Must NOT pitch in the connection request
- Reference something specific about them
- Give a reason for connecting that benefits them

Write 3 versions:
1. Shared interest approach
2. Mutual connection approach
3. Industry peer approach`,
  },
  {
    id: 'sdr-linkedin-followup',
    title: 'LinkedIn Message After Connect',
    description: 'First message after LinkedIn connection accepted',
    category: 'sdr',
    tags: ['linkedin', 'messaging', 'social-selling'],
    difficulty: 'intermediate',
    prompt: `Write my first LinkedIn message after [NAME] accepted my connection.

Context:
- Their role: [TITLE at COMPANY]
- Why I connected: [ORIGINAL REASON]
- Time since acceptance: [DAYS]
- My goal: [BOOK MEETING / START CONVERSATION / SHARE CONTENT]

Rules:
- Don't immediately pitch
- Reference why you connected
- Provide value first (insight, content, intro)
- Soft CTA (not "Let's jump on a call")
- Under 100 words

Write a 3-message sequence:
1. Value-first opener (Day 1)
2. Engagement touch (Day 4)
3. Soft meeting ask (Day 7)`,
  },
  {
    id: 'sdr-video-prospecting',
    title: 'Video Prospecting Script',
    description: 'Script for personalized video outreach',
    category: 'sdr',
    tags: ['video', 'prospecting', 'loom', 'personalization'],
    difficulty: 'intermediate',
    prompt: `Create a video prospecting script for [NAME, TITLE at COMPANY].

Context:
- Personalization hook: [SPECIFIC THING ABOUT THEM/COMPANY]
- Their likely pain: [PROBLEM YOU SOLVE]
- Proof point: [SIMILAR CUSTOMER RESULT]
- Video length: 45-60 seconds max

Script structure:
1. Pattern interrupt (first 3 seconds are critical)
2. Why them specifically (prove you researched)
3. One-sentence value prop
4. Quick proof point
5. Clear CTA

Include:
- What to show on screen at each moment
- Thumbnail text suggestion
- Subject line for video email
- Text to include in email body

Platform: [LOOM / VIDYARD / SENDSPARK]`,
  },
  {
    id: 'sdr-multi-thread',
    title: 'Multi-Threading Strategy',
    description: 'Reach multiple stakeholders at one account',
    category: 'sdr',
    tags: ['multi-threading', 'account-based', 'stakeholders'],
    difficulty: 'advanced',
    prompt: `Create a multi-threading strategy for [COMPANY].

Target account context:
- Company size: [EMPLOYEES]
- Primary contact: [NAME, TITLE] - [STATUS: responded / meeting booked / ghosted]
- My product: [WHAT YOU SELL]
- Departments affected: [WHO USES/BUYS YOUR PRODUCT]

Identify and create outreach for:
1. Champion candidate (end user who feels pain)
2. Economic buyer (controls budget)
3. Technical evaluator (if relevant)
4. Coach (someone who can give you inside info)

For each persona, provide:
- How to find them (title search, LinkedIn, etc.)
- Unique angle based on their role
- Whether to reference the primary contact
- Sequence timing relative to other threads`,
  },
  {
    id: 'sdr-objection-no-time',
    title: 'Handle "Too Busy Right Now"',
    description: 'Response when prospects say they have no time',
    category: 'sdr',
    tags: ['objection', 'busy', 'timing'],
    difficulty: 'intermediate',
    prompt: `Help me respond to: "I'm too busy right now, reach out next quarter."

Context:
- Prospect: [NAME, TITLE]
- How they said it: [PHONE / EMAIL / LINKEDIN]
- What I was asking for: [15 MIN CALL / DEMO / MEETING]
- Urgency factor: [WHY WAITING COSTS THEM]

Generate responses for each scenario:
1. If this is a real timing issue (legitimate)
2. If this is a brush-off (they're not interested)
3. If they're evaluating competitor (stalling)

Each response should:
- Acknowledge their time constraint
- Probe gently for the real reason
- Either lock in future time OR qualify out gracefully

Include a 3-touch nurture sequence if they truly want to wait.`,
  },
  {
    id: 'sdr-referral-request',
    title: 'Internal Referral Request',
    description: 'Ask contact to refer you to right person',
    category: 'sdr',
    tags: ['referral', 'navigation', 'internal'],
    difficulty: 'intermediate',
    prompt: `Write a message asking [NAME] to refer me to the right person.

Situation:
- Current contact: [NAME, TITLE]
- Why they're not the right person: [REASON: different department / too junior / wrong function]
- Who I think I need: [TARGET ROLE/DEPARTMENT]
- Relationship with current contact: [COLD / WARM / HAD CONVERSATION]

Message should:
1. Acknowledge their role (don't make them feel bypassed)
2. Explain why someone else might be better fit
3. Make it easy for them to help (provide intro template)
4. Give them an out if they can't help

Write versions for:
1. Email request
2. LinkedIn message
3. End-of-call verbal ask`,
  },
  {
    id: 'sdr-event-followup',
    title: 'Event/Webinar Follow-Up',
    description: 'Follow up with event attendees or registrants',
    category: 'sdr',
    tags: ['event', 'webinar', 'follow-up', 'conference'],
    difficulty: 'beginner',
    prompt: `Write follow-up outreach for [EVENT TYPE] attendees.

Event details:
- Event name: [EVENT/WEBINAR NAME]
- Topic covered: [WHAT WAS DISCUSSED]
- Their engagement: [ATTENDED / REGISTERED BUT NO-SHOW / ASKED QUESTION]
- Days since event: [NUMBER]

My angle:
- Relevant pain point from event topic: [PAIN]
- How my product relates: [CONNECTION]
- Specific CTA: [WHAT I WANT THEM TO DO]

Write sequences for:
1. Engaged attendees (asked questions, stayed till end)
2. Passive attendees (watched but no interaction)
3. No-shows (registered but didn't attend)

Each sequence: 3 touches over 10 days.`,
  },
  {
    id: 'sdr-trigger-event',
    title: 'Trigger Event Outreach',
    description: 'Outreach based on specific trigger events',
    category: 'sdr',
    tags: ['trigger', 'signal', 'timing', 'relevance'],
    difficulty: 'intermediate',
    prompt: `Create trigger-based outreach for this signal.

Trigger event: [SELECT ONE]
- New funding round
- New executive hire
- Job posting in relevant area
- Product launch
- Company acquisition
- Office expansion
- Tech stack change
- Earnings report mention
- Industry regulation change
- Competitor news

Prospect details:
- Company: [COMPANY NAME]
- Target contact: [NAME, TITLE]
- My product: [WHAT YOU SELL]

For this trigger, provide:
1. Why this trigger matters (what it signals)
2. Best timing window to reach out
3. Subject line that references the trigger
4. Email body that connects trigger → pain → solution
5. Alternative channels to use (LinkedIn, phone)`,
  },
  {
    id: 'sdr-cold-call-opener',
    title: 'Cold Call Opener Scripts',
    description: 'Opening lines for cold calls that get conversations',
    category: 'sdr',
    tags: ['cold-call', 'opener', 'phone', 'pattern-interrupt'],
    difficulty: 'intermediate',
    prompt: `Create cold call opener scripts for [TARGET PERSONA].

Context:
- Target title: [TITLE]
- Industry: [INDUSTRY]
- My company: [YOUR COMPANY]
- What I sell: [PRODUCT/SERVICE]
- Time I need: [30 SEC OPENER / ASK FOR 5 MIN]

Generate 5 different opener styles:
1. Permission-based ("Did I catch you at a bad time?")
2. Referral/trigger-based (if you have one)
3. Pattern interrupt (unexpected opening)
4. Direct approach (straight to the point)
5. Curiosity-based (open loop)

For each opener include:
- The exact words to say
- Expected response handling (if they say "who is this?")
- Transition to value prop
- Handling "not interested" within first 10 seconds`,
  },
  {
    id: 'sdr-voicemail-script',
    title: 'Voicemail Script Templates',
    description: 'Voicemail scripts that get callbacks',
    category: 'sdr',
    tags: ['voicemail', 'phone', 'callback'],
    difficulty: 'beginner',
    prompt: `Create voicemail scripts for different scenarios.

Target: [NAME, TITLE at COMPANY]
My value prop: [ONE SENTENCE]
My callback number: [NUMBER]

Create voicemails for:
1. First touch (they don't know you)
2. Follow-up to email (you've sent something)
3. After no-show (they missed meeting)
4. Trigger-based (reference something timely)
5. Break-up voicemail (final attempt)

Each voicemail must be:
- Under 20 seconds when spoken
- Have ONE clear message
- End with your name and number (spoken slowly)
- Include a reason to call back

Pro tip: Leave phone number twice—once at beginning, once at end.`,
  },
];

// AE Prompts
export const aePrompts: Prompt[] = [
  {
    id: 'ae-discovery-call',
    title: 'Discovery Call Framework',
    description: 'Structure a discovery call that uncovers real pain',
    category: 'ae',
    tags: ['discovery', 'call', 'qualification'],
    difficulty: 'intermediate',
    prompt: `Create a discovery call framework for this opportunity.

Context:
- Prospect: [NAME, TITLE at COMPANY]
- Company size: [EMPLOYEES / REVENUE]
- How they found us: [INBOUND / OUTBOUND / REFERRAL]
- What they said they need: [THEIR STATED NEED]
- My product: [WHAT YOU SELL]

Generate:
1. Opening (build rapport, set agenda, get permission)
2. Current state questions (how they do it today)
3. Pain quantification questions (cost of the problem)
4. Future state questions (what good looks like)
5. Decision process questions (who, what, when)
6. Next steps framework

For each question, include:
- The question itself
- Why you're asking it
- Follow-up questions based on likely answers`,
  },
  {
    id: 'ae-demo-script',
    title: 'Demo Script Builder',
    description: 'Build a demo script tailored to discovery findings',
    category: 'ae',
    tags: ['demo', 'presentation', 'pitch'],
    difficulty: 'intermediate',
    prompt: `Create a demo script based on what I learned in discovery.

Discovery findings:
- Main pain point: [THEIR #1 PROBLEM]
- Secondary pain: [THEIR #2 PROBLEM]
- Current solution: [WHAT THEY USE TODAY]
- Why they're looking: [TRIGGER EVENT]
- Success metrics: [HOW THEY'LL MEASURE SUCCESS]
- Key stakeholders: [WHO'S INVOLVED]
- Timeline: [WHEN THEY NEED TO DECIDE]

My product: [YOUR PRODUCT]

Create a demo flow that:
1. Recaps their situation (show you listened)
2. Shows the 3 most relevant features (tied to their pain)
3. Includes a "wow moment" that differentiates
4. Handles likely objections preemptively
5. Ends with clear next steps

Time limit: 20 minutes of demo + 10 minutes Q&A`,
  },
  {
    id: 'ae-proposal-email',
    title: 'Proposal Delivery Email',
    description: 'Email to send with your proposal that drives action',
    category: 'ae',
    tags: ['proposal', 'email', 'closing'],
    difficulty: 'advanced',
    prompt: `Write an email to send with my proposal.

Deal context:
- Prospect: [NAME, TITLE at COMPANY]
- What we're proposing: [SOLUTION SUMMARY]
- Price: [DEAL VALUE]
- Their timeline: [WHEN THEY SAID THEY NEED TO DECIDE]
- Champion: [WHO'S PUSHING FOR YOU]
- Blocker: [WHO MIGHT SAY NO]
- Competitor: [WHO ELSE THEY'RE EVALUATING]

Email should:
1. Reference specific things they said they needed
2. Summarize the proposal (they'll skim before opening)
3. Highlight the ROI case
4. Create urgency without being pushy
5. Make next steps crystal clear
6. Give them language to sell internally

Under 200 words. No attachments - embed key points in the email.`,
  },
  {
    id: 'ae-negotiation-prep',
    title: 'Negotiation Preparation',
    description: 'Prepare for a pricing/terms negotiation',
    category: 'ae',
    tags: ['negotiation', 'pricing', 'closing'],
    difficulty: 'advanced',
    prompt: `Help me prepare for a negotiation on this deal.

Deal context:
- Prospect: [COMPANY NAME]
- Our price: [YOUR ASKING PRICE]
- Their budget: [WHAT THEY SAID / YOUR GUESS]
- Deal size: [ACV]
- What they've pushed back on: [PRICE / TERMS / TIMELINE]
- Their alternatives: [COMPETITORS / STATUS QUO]
- Our leverage: [WHY THEY NEED US]
- Their leverage: [WHY WE NEED THEM]

Help me with:
1. BATNA analysis (theirs and mine)
2. Concessions I can offer (and what to get in return)
3. Anchoring strategy
4. "If... then" trade-offs
5. Walk-away point
6. Red lines I shouldn't cross

Also give me:
- 3 responses to "Can you do better on price?"
- How to handle "Competitor X is cheaper"
- Language for multi-year discount trades`,
  },
  {
    id: 'ae-champion-enablement',
    title: 'Champion Enablement Email',
    description: 'Give your champion ammo to sell internally',
    category: 'ae',
    tags: ['champion', 'internal-selling', 'stakeholder'],
    difficulty: 'advanced',
    prompt: `Create a champion enablement package for my internal sponsor.

Context:
- Champion: [NAME, TITLE]
- Economic buyer: [NAME, TITLE]
- Other stakeholders: [WHO ELSE NEEDS TO APPROVE]
- Champion's motivation: [WHY THEY WANT THIS]
- What they need to prove: [BUSINESS CASE REQUIREMENTS]
- Objections they'll face: [LIKELY INTERNAL PUSHBACK]

Create:
1. One-pager they can share with their boss
2. Email they can forward to stakeholders
3. Talk track for their internal meeting
4. Responses to likely internal objections
5. ROI calculation framework
6. Competitive comparison talking points

Make it easy for them to copy-paste and look good internally.`,
  },
  {
    id: 'ae-mutual-action-plan',
    title: 'Mutual Action Plan',
    description: 'Create a MAP to guide deal to close',
    category: 'ae',
    tags: ['map', 'closing', 'process'],
    difficulty: 'advanced',
    prompt: `Create a Mutual Action Plan (MAP) for this deal.

Deal context:
- Prospect: [COMPANY NAME]
- Target close date: [DATE]
- Key stakeholders: [NAMES AND ROLES]
- Deal value: [ACV]
- Current stage: [STAGE]
- Known requirements: [SECURITY / LEGAL / TECHNICAL / PROCUREMENT]

Build a reverse-engineered timeline that includes:
1. All steps needed from both sides
2. Who owns each step
3. Dependencies between steps
4. Buffer time for delays
5. Go-live planning (not just contract signing)

Categories to include:
- Technical evaluation (POC, security review, integration)
- Business validation (ROI, stakeholder buy-in)
- Procurement (legal, finance, contract)
- Implementation (timeline, resources, training)

Format as a shareable document they can edit with me.`,
  },
  {
    id: 'ae-executive-briefing',
    title: 'Executive Briefing Doc',
    description: 'Create a doc for champion to share with executives',
    category: 'ae',
    tags: ['executive', 'document', 'champion-enablement'],
    difficulty: 'advanced',
    prompt: `Create an executive briefing document for this deal.

Context:
- Company: [PROSPECT COMPANY]
- Executive reader: [C-LEVEL TITLE]
- Champion: [WHO'S SPONSORING]
- Initiative: [WHAT THEY'RE TRYING TO DO]
- Our solution: [YOUR PRODUCT]
- Investment: [DEAL SIZE]

Executive's likely questions:
- Why now? (timing/urgency)
- Why this? (vs alternatives)
- What's the risk? (downside mitigation)
- What's the return? (ROI timeline)
- Who's done this? (references)

Create a 1-page brief that:
1. Leads with their strategic priority (not your product)
2. Frames the problem in financial terms
3. Summarizes the recommendation
4. Provides clear ROI projection
5. Outlines next steps with timeline
6. Addresses the "why not" objections

Write in executive voice—no jargon, bullets over paragraphs.`,
  },
  {
    id: 'ae-competitive-positioning',
    title: 'Competitive Battle Card',
    description: 'Position against a specific competitor',
    category: 'ae',
    tags: ['competitive', 'positioning', 'objections'],
    difficulty: 'intermediate',
    prompt: `Help me position against [COMPETITOR] in this deal.

Situation:
- Prospect: [COMPANY]
- Competitor: [COMPETITOR NAME]
- How we know they're involved: [SOURCE]
- Prospect's evaluation criteria: [WHAT MATTERS TO THEM]
- Where competitor is strong: [THEIR ADVANTAGES]
- Where we're strong: [OUR ADVANTAGES]

Create:
1. Competitive landmines to plant early
2. Differentiating questions to ask prospect
3. Responses to "why not [competitor]?"
4. Head-to-head feature comparison (honest)
5. Customer proof points vs. competitor
6. When to walk away (bad fit indicators)

Rules:
- Never trash competitor directly
- Focus on what's best for the customer
- Acknowledge where competitor wins
- Lead with differentiation, not FUD`,
  },
  {
    id: 'ae-trial-to-paid',
    title: 'Trial Conversion Playbook',
    description: 'Convert a trial or POC to paid deal',
    category: 'ae',
    tags: ['trial', 'poc', 'conversion', 'closing'],
    difficulty: 'intermediate',
    prompt: `Create a trial-to-paid conversion plan.

Trial context:
- Company: [COMPANY NAME]
- Trial length: [DAYS]
- Days remaining: [DAYS LEFT]
- Users active: [NUMBER]
- Usage metrics: [KEY ACTIVITY DATA]
- Success criteria: [WHAT THEY DEFINED AS SUCCESS]
- Champion: [NAME, TITLE]
- Blocker/skeptic: [IF ANY]

Build a conversion plan that includes:
1. Usage milestones to hit each week
2. Check-in cadence and talk tracks
3. Success metrics to highlight
4. Expansion signals to identify
5. Objections to preempt
6. Transition call structure
7. Urgency creation (without being pushy)

Include:
- Email templates for each phase
- Questions to ask in check-ins
- Red flags that trial is going poorly
- Save plays for struggling trials`,
  },
  {
    id: 'ae-deal-unstick',
    title: 'Unstick a Stalled Deal',
    description: 'Strategies to move a stalled opportunity forward',
    category: 'ae',
    tags: ['stalled', 'stuck', 'pipeline', 'deal-strategy'],
    difficulty: 'advanced',
    prompt: `Help me unstick this stalled deal.

Deal context:
- Company: [PROSPECT]
- Deal value: [ACV]
- Stage: [CURRENT STAGE]
- Days in stage: [NUMBER]
- Last meaningful contact: [DATE AND WHAT HAPPENED]
- Stated next step that didn't happen: [WHAT WAS SUPPOSED TO HAPPEN]
- Champion status: [ENGAGED / GONE DARK / LEFT COMPANY]
- Competition: [KNOWN ALTERNATIVES]

Diagnose the stall:
1. Priority dropped (something else became urgent)
2. Champion lost influence
3. Evaluating competitor
4. Budget disappeared
5. Internal politics
6. We didn't earn the next step

For each diagnosis, provide:
- How to confirm this is the issue
- Specific re-engagement strategy
- Multi-channel outreach sequence
- When to cut losses`,
  },
  {
    id: 'ae-security-questionnaire',
    title: 'Security Questionnaire Prep',
    description: 'Prepare for security review process',
    category: 'ae',
    tags: ['security', 'questionnaire', 'enterprise', 'infosec'],
    difficulty: 'intermediate',
    prompt: `Help me navigate this security review process.

Context:
- Prospect: [COMPANY]
- Their industry: [INDUSTRY - affects compliance needs]
- Security contact: [NAME, TITLE]
- Questionnaire type: [SIG / CAIQ / CUSTOM / VSAQ]
- Questions I'm stuck on: [LIST SPECIFIC QUESTIONS]
- Our certifications: [SOC2 / ISO27001 / GDPR / HIPAA / etc.]
- Our security page: [URL IF EXISTS]

Help me with:
1. Understanding what they're really asking
2. Drafting responses that are accurate and reassuring
3. Identifying gaps we need to address honestly
4. Red flags that could slow us down
5. How to position security as a differentiator
6. Questions to ask their security team

Format responses as copy-paste ready with appropriate caveats.`,
  },
  {
    id: 'ae-procurement-navigation',
    title: 'Navigate Procurement',
    description: 'Get through procurement and legal review',
    category: 'ae',
    tags: ['procurement', 'legal', 'contract', 'enterprise'],
    difficulty: 'advanced',
    prompt: `Help me navigate procurement on this deal.

Context:
- Company: [PROSPECT]
- Deal size: [ACV]
- Procurement contact: [NAME, TITLE]
- Legal contact: [NAME, TITLE]
- Contract issues raised: [SPECIFIC REDLINES]
- Timeline pressure: [WHEN THEY NEED TO GO LIVE]
- Our leverage: [WHY THEY NEED US]

Common blockers and how to handle:
1. Indemnification clauses
2. Liability caps
3. Data processing terms
4. SLA requirements
5. Termination terms
6. Auto-renewal concerns

For this specific deal:
- What to push back on vs. concede
- How to keep champion engaged during legal
- Escalation strategy if stuck
- Creative deal structures (if needed)
- Language I can propose for each redline`,
  },
  {
    id: 'ae-qbr-presentation',
    title: 'QBR Presentation for Existing Customer',
    description: 'Quarterly business review deck for expansion',
    category: 'ae',
    tags: ['qbr', 'customer', 'expansion', 'upsell'],
    difficulty: 'intermediate',
    prompt: `Create a QBR presentation for this customer.

Customer context:
- Company: [CUSTOMER NAME]
- Current ARR: [VALUE]
- Contract renewal: [DATE]
- Primary contact: [NAME, TITLE]
- Executive sponsor: [NAME, TITLE]
- Products they use: [CURRENT PRODUCTS]
- Usage metrics: [KEY STATS]
- Value delivered: [OUTCOMES ACHIEVED]

Expansion opportunity:
- Additional product: [WHAT YOU WANT TO UPSELL]
- Additional users/seats: [IF APPLICABLE]
- New department: [IF EXPANDING USE CASE]

Create a QBR deck that:
1. Celebrates their wins (metrics + stories)
2. Shows ROI vs. original business case
3. Benchmarks vs. similar customers
4. Identifies expansion opportunities naturally
5. Previews product roadmap (relevant items)
6. Aligns on next quarter goals

Include talking points and anticipated questions.`,
  },
];

// Sales Manager Prompts
export const salesManagerPrompts: Prompt[] = [
  {
    id: 'sm-pipeline-review',
    title: 'Pipeline Review Framework',
    description: 'Run an effective pipeline review with your team',
    category: 'sales-manager',
    tags: ['pipeline', 'coaching', 'forecast'],
    difficulty: 'intermediate',
    prompt: `Create a pipeline review framework for my team.

Team context:
- Team size: [NUMBER OF REPS]
- Average deal size: [ACV]
- Sales cycle: [LENGTH]
- Current quarter: [Q# YYYY]
- Quota attainment so far: [%]
- Pipeline coverage: [X]x

For each deal reviewed, I want to assess:
1. Is this deal real? (BANT/MEDDPICC check)
2. Are we winning? (competitive position)
3. What's the next step? (clear action)
4. Is the close date accurate? (commit vs. upside)

Generate:
- Questions to ask for each deal stage
- Red flags to look for
- How to categorize (commit/upside/push)
- Coaching prompts for stuck deals
- Format for a 30-minute team review`,
  },
  {
    id: 'sm-rep-coaching',
    title: 'Rep Coaching Session',
    description: 'Structure a 1:1 coaching session with a rep',
    category: 'sales-manager',
    tags: ['coaching', '1:1', 'development'],
    difficulty: 'intermediate',
    prompt: `Help me prepare for a coaching 1:1 with one of my reps.

Rep context:
- Name: [REP NAME]
- Tenure: [TIME ON TEAM]
- Current performance: [% TO QUOTA]
- Strength: [WHAT THEY'RE GOOD AT]
- Development area: [WHERE THEY NEED HELP]
- Recent deal: [DEAL TO DISCUSS - WON OR LOST]

Create a 1:1 agenda that:
1. Opens with their wins (recognition)
2. Reviews a specific deal (learning moment)
3. Addresses the development area (skill building)
4. Sets clear action items (accountability)
5. Ends with their input (two-way dialogue)

Include:
- Specific questions to ask
- How to give feedback (situation-behavior-impact)
- Role-play scenario for skill practice
- Metrics to track improvement`,
  },
  {
    id: 'sm-forecast-call',
    title: 'Forecast Call Preparation',
    description: 'Prepare for your forecast call with leadership',
    category: 'sales-manager',
    tags: ['forecast', 'leadership', 'reporting'],
    difficulty: 'advanced',
    prompt: `Help me prepare for my forecast call with leadership.

Current state:
- Quota: $[QUOTA]
- Closed so far: $[CLOSED]
- Pipeline: $[PIPELINE VALUE]
- Days left in quarter: [DAYS]
- Commit: $[COMMIT DEALS]
- Upside: $[UPSIDE DEALS]

Deals at risk:
- [DEAL 1]: [RISK REASON]
- [DEAL 2]: [RISK REASON]

Create:
1. Executive summary (where we are, where we'll land)
2. Commit vs. upside breakdown with confidence levels
3. Risk mitigation plan for at-risk deals
4. Upside scenarios (what could go right)
5. Ask for leadership (what I need from them)
6. Answers to likely questions they'll ask`,
  },
];

// Founder Prompts
export const founderPrompts: Prompt[] = [
  {
    id: 'founder-first-10',
    title: 'First 10 Customers Playbook',
    description: 'Strategy for getting your first 10 paying customers',
    category: 'founder',
    tags: ['early-stage', 'customers', 'playbook'],
    difficulty: 'beginner',
    prompt: `Create a playbook for getting my first 10 customers.

Context:
- My product: [WHAT YOU'RE BUILDING]
- Target customer: [WHO IT'S FOR]
- Price point: [WHAT YOU'LL CHARGE]
- Current stage: [PRE-LAUNCH / BETA / LAUNCHED]
- My network: [WHO I KNOW IN THE SPACE]
- Budget for sales: $[BUDGET]

Help me with:
1. Where to find my first 10 (specific channels)
2. How to reach out (templates for warm/cold)
3. What to say on calls (discovery + pitch)
4. How to handle "it's too early" objection
5. When to charge vs. give free
6. How to get referrals from early users

Focus on scrappy, high-touch tactics. No paid ads or scale plays yet.`,
  },
  {
    id: 'founder-sales-hire',
    title: 'First Sales Hire Evaluation',
    description: 'Evaluate and interview your first sales hire',
    category: 'founder',
    tags: ['hiring', 'sales-hire', 'evaluation'],
    difficulty: 'advanced',
    prompt: `Help me hire my first salesperson.

Context:
- My product: [WHAT YOU SELL]
- Deal size: [AVERAGE ACV]
- Sales cycle: [LENGTH]
- My involvement: [HOW MUCH I'LL STAY INVOLVED]
- Budget: $[BASE + OTE]
- What I've learned selling: [WHAT WORKS]

Help me with:
1. Should I hire SDR, AE, or hybrid?
2. What profile to look for (experience, traits)
3. Interview questions that reveal the truth
4. Role-play scenario to test their skills
5. Comp structure recommendations
6. 30-60-90 day plan for them
7. Red flags to watch for

I need someone who can figure things out, not just follow a playbook.`,
  },
  {
    id: 'founder-investor-pitch',
    title: 'Investor Sales Pitch',
    description: 'Pitch your go-to-market to investors',
    category: 'founder',
    tags: ['investor', 'pitch', 'gtm'],
    difficulty: 'advanced',
    prompt: `Help me pitch my go-to-market strategy to investors.

Company context:
- What we do: [PRODUCT DESCRIPTION]
- Current ARR: $[ARR]
- Customers: [NUMBER]
- Growth rate: [MoM or YoY %]
- Sales motion: [PLG / SALES-LED / HYBRID]
- Team: [SALES TEAM SIZE]

Investors want to know:
1. Who buys and why (ICP + pain)
2. How you find them (channels)
3. How you close them (process)
4. Unit economics (CAC, LTV, payback)
5. What changes with more capital

Create:
- 3-minute GTM pitch script
- Key metrics to highlight
- Answers to tough questions
- Competitive positioning
- Scaling plan narrative`,
  },
];

// RevOps Prompts
export const revopsPrompts: Prompt[] = [
  {
    id: 'revops-territory-plan',
    title: 'Territory Planning Framework',
    description: 'Design equitable and effective sales territories',
    category: 'revops',
    tags: ['territory', 'planning', 'segmentation'],
    difficulty: 'advanced',
    prompt: `Help me design sales territories for my team.

Context:
- Total addressable accounts: [NUMBER]
- Number of reps: [NUMBER]
- Current territory structure: [GEOGRAPHIC / VERTICAL / NAMED / ROUND ROBIN]
- Average deal size: [ACV]
- Sales cycle length: [MONTHS]
- Historical performance data: [WHAT YOU HAVE]

Territory design needs to balance:
1. Equal opportunity (similar total TAM per rep)
2. Travel efficiency (if field sales)
3. Specialization benefits (vertical expertise)
4. Account relationships (don't disrupt existing)
5. Growth potential (not just current revenue)

Output:
- Recommended territory model
- Criteria for account assignment
- Transition plan for existing relationships
- Quota implications
- Metrics to track territory health`,
  },
  {
    id: 'revops-forecast-model',
    title: 'Forecast Accuracy Analysis',
    description: 'Analyze and improve forecast accuracy',
    category: 'revops',
    tags: ['forecast', 'accuracy', 'metrics'],
    difficulty: 'advanced',
    prompt: `Help me analyze and improve our sales forecast accuracy.

Current state:
- Forecast method: [BOTTOM-UP / TOP-DOWN / WEIGHTED PIPELINE]
- Historical accuracy: [LAST 4 QUARTERS]
- Common misses: [OVER-FORECAST / UNDER-FORECAST / TIMING]
- Pipeline stages: [LIST YOUR STAGES]
- Stage conversion rates: [IF KNOWN]

Analysis needed:
1. Identify where forecast breaks down (stage, rep, segment)
2. Calculate optimal stage weights
3. Recommend forecast categories (commit/best case/upside)
4. Design inspection criteria per category
5. Build manager review cadence

Output a forecast methodology doc with:
- Stage definitions with exit criteria
- Weighting by stage and probability
- Commit criteria checklist
- Forecast hygiene scorecard`,
  },
  {
    id: 'revops-process-audit',
    title: 'Sales Process Audit',
    description: 'Audit your sales process for leaks and inefficiencies',
    category: 'revops',
    tags: ['process', 'audit', 'efficiency'],
    difficulty: 'intermediate',
    prompt: `Help me audit our sales process for inefficiencies.

Current process:
- Stages: [LIST YOUR PIPELINE STAGES]
- Tools: [CRM, ENGAGEMENT PLATFORM, etc.]
- Team size: [REPS, MANAGERS]
- Average sales cycle: [DAYS]
- Win rate: [%]

Audit areas:
1. Stage conversion rates (where do deals die?)
2. Time in stage (where do deals stall?)
3. Activity metrics (are reps doing the right things?)
4. Data quality (what's missing or wrong?)
5. Tool utilization (what's not being used?)
6. Handoff points (SDR to AE, AE to CS)

Output:
- Leakage report by stage
- Recommended process changes
- Automation opportunities
- Training needs identified
- Quick wins vs. longer-term fixes`,
  },
  {
    id: 'revops-dashboard-design',
    title: 'Sales Dashboard Design',
    description: 'Design dashboards for reps, managers, and execs',
    category: 'revops',
    tags: ['dashboard', 'metrics', 'reporting'],
    difficulty: 'intermediate',
    prompt: `Help me design sales dashboards for different audiences.

Context:
- Sales motion: [INBOUND / OUTBOUND / HYBRID]
- Team structure: [SDR → AE / FULL CYCLE / POD]
- Key business metrics: [ARR / BOOKINGS / etc.]
- Current reporting gaps: [WHAT'S MISSING]

Design dashboards for:
1. Rep Dashboard (daily driver)
2. Manager Dashboard (team health)
3. Exec Dashboard (business health)

For each dashboard:
- 5-7 key metrics
- Why each metric matters
- How to calculate it
- Target/benchmark
- Drill-down options

Keep it focused - more metrics = less focus.`,
  },
];

// CSM Prompts
export const csmPrompts: Prompt[] = [
  {
    id: 'csm-qbr-prep',
    title: 'QBR Preparation Framework',
    description: 'Prepare for a quarterly business review',
    category: 'csm',
    tags: ['qbr', 'review', 'presentation'],
    difficulty: 'intermediate',
    prompt: `Help me prepare a QBR for a customer.

Customer context:
- Company: [CUSTOMER NAME]
- Contract value: [ARR]
- Tenure: [HOW LONG A CUSTOMER]
- Health score: [IF YOU TRACK]
- Key stakeholders: [WHO WILL ATTEND]
- Renewal date: [WHEN]
- Expansion opportunity: [IF ANY]

QBR needs to cover:
1. Value delivered (metrics, outcomes, ROI)
2. Product usage and adoption
3. Support ticket trends
4. Roadmap alignment (what's coming they'll care about)
5. Success plan for next quarter
6. Open items and risks
7. Expansion discussion (if appropriate)

Format: Slide outline with talking points for each section.
Include questions to ask them (make it two-way).`,
  },
  {
    id: 'csm-health-score',
    title: 'Customer Health Score Design',
    description: 'Design a customer health scoring model',
    category: 'csm',
    tags: ['health-score', 'churn', 'retention'],
    difficulty: 'advanced',
    prompt: `Help me design a customer health score model.

Context:
- Product type: [WHAT YOU SELL]
- Customer base: [NUMBER OF CUSTOMERS]
- Current churn rate: [%]
- Data available: [USAGE DATA / SUPPORT / NPS / etc.]
- Historical churn patterns: [WHAT YOU'VE NOTICED]

Health score components to consider:
1. Product usage (login frequency, feature adoption, depth)
2. Engagement (meetings, responses, executive sponsorship)
3. Support (ticket volume, sentiment, escalations)
4. Financial (payment history, growth/contraction)
5. Survey data (NPS, CSAT)
6. External signals (company health, news)

Output:
- Weighted scoring model
- Data sources needed
- Score thresholds (healthy/at-risk/critical)
- Playbooks per segment
- Leading indicators vs. lagging`,
  },
  {
    id: 'csm-churn-save',
    title: 'Churn Save Playbook',
    description: 'Save an at-risk customer from churning',
    category: 'csm',
    tags: ['churn', 'save', 'retention'],
    difficulty: 'advanced',
    prompt: `Help me save a customer who's at risk of churning.

Customer situation:
- Company: [CUSTOMER NAME]
- ARR: [VALUE]
- Tenure: [HOW LONG]
- Why they're at risk: [WHAT HAPPENED / WHAT THEY SAID]
- Key contact: [NAME, TITLE]
- Decision maker: [NAME, TITLE]
- Renewal date: [WHEN]
- Competitive threat: [IF ANY]

Churn save playbook:
1. Root cause analysis (is it fixable?)
2. Executive sponsor engagement (do we need to escalate?)
3. Quick wins (what can we do immediately?)
4. Recovery plan (what does success look like?)
5. Commercial options (discounts, terms, scope change)
6. Exit interview plan (if we can't save)

Generate:
- Talk track for the save conversation
- Email to request exec meeting
- 30-day recovery plan
- Concessions we could offer (and what to get in return)`,
  },
  {
    id: 'csm-expansion-email',
    title: 'Expansion Opportunity Email',
    description: 'Email to introduce an upsell or cross-sell',
    category: 'csm',
    tags: ['expansion', 'upsell', 'cross-sell'],
    difficulty: 'intermediate',
    prompt: `Write an email to introduce an expansion opportunity.

Context:
- Customer: [COMPANY NAME]
- Contact: [NAME, TITLE]
- Current product: [WHAT THEY HAVE]
- Expansion opportunity: [WHAT YOU WANT TO SELL]
- Why now: [TRIGGER / TIMING]
- Value they've gotten: [RESULTS SO FAR]

Email should:
1. Lead with their success (not your product)
2. Connect to a business goal they have
3. Introduce the expansion naturally
4. Quantify the additional value
5. Propose a specific next step
6. Not feel salesy (you're their CSM, not a rep)

Keep it conversational - this is a relationship, not a transaction.`,
  },
  {
    id: 'csm-handoff-doc',
    title: 'Customer Handoff Document',
    description: 'Document for handing off a customer to a new CSM',
    category: 'csm',
    tags: ['handoff', 'transition', 'documentation'],
    difficulty: 'beginner',
    prompt: `Create a customer handoff document for a CSM transition.

Customer:
- Company: [NAME]
- ARR: [VALUE]
- Industry: [VERTICAL]
- Tenure: [HOW LONG]
- Health: [GOOD / AT RISK / etc.]
- Renewal date: [WHEN]

Document needs:
1. Key contacts (names, roles, communication preferences)
2. Business context (why they bought, what they're trying to achieve)
3. Product usage (what they use, what they don't)
4. Relationship history (key moments, good and bad)
5. Open items (pending issues, promised deliverables)
6. Growth opportunities (expansion, advocates)
7. Watch-outs (sensitivities, past issues, politics)

Include specific advice for the new CSM on how to build relationship.`,
  },
];

// Helper to get prompts by role
export function getRolePrompts(role: string): Prompt[] {
  switch (role) {
    case 'sdr':
      return sdrPrompts;
    case 'ae':
      return aePrompts;
    case 'sales-manager':
      return salesManagerPrompts;
    case 'founder':
      return founderPrompts;
    case 'revops':
      return revopsPrompts;
    case 'csm':
      return csmPrompts;
    default:
      return [];
  }
}

// Workflow data
export const workflows: PromptCategory[] = [
  {
    slug: 'prospecting',
    name: 'Prospecting',
    description: 'Find and qualify ideal customers',
    icon: 'search',
    count: 20,
  },
  {
    slug: 'outreach',
    name: 'Outreach',
    description: 'Multi-channel outbound sequences',
    icon: 'send',
    count: 25,
  },
  {
    slug: 'discovery',
    name: 'Discovery',
    description: 'Uncover pain and qualify opportunities',
    icon: 'message-circle',
    count: 20,
  },
  {
    slug: 'demo',
    name: 'Demo & Presentation',
    description: 'Show value and differentiate',
    icon: 'presentation',
    count: 15,
  },
  {
    slug: 'proposal',
    name: 'Proposal & Pricing',
    description: 'Create compelling business cases',
    icon: 'file-text',
    count: 15,
  },
  {
    slug: 'negotiation',
    name: 'Negotiation & Close',
    description: 'Navigate procurement and close deals',
    icon: 'handshake',
    count: 15,
  },
  {
    slug: 'expansion',
    name: 'Expansion & Renewal',
    description: 'Grow existing accounts',
    icon: 'trending-up',
    count: 15,
  },
];

// Workflow Prompts
export const prospectingPrompts: Prompt[] = [
  {
    id: 'wf-icp-definition',
    title: 'ICP Definition Framework',
    description: 'Define your ideal customer profile',
    category: 'prospecting',
    tags: ['icp', 'targeting', 'segmentation'],
    difficulty: 'intermediate',
    prompt: `Help me define my Ideal Customer Profile (ICP).

Context:
- My product: [WHAT YOU SELL]
- Best customers today: [DESCRIBE YOUR TOP 3-5]
- Worst customers: [WHO CHURNED OR WAS A BAD FIT]
- Deal size target: [ACV RANGE]
- Sales cycle goal: [LENGTH]

ICP needs to define:
1. Firmographics (size, industry, geography, growth stage)
2. Technographics (tech stack, tools they use)
3. Buying triggers (events that create need)
4. Stakeholders (titles involved in buying)
5. Pain indicators (signals they have the problem)
6. Disqualifiers (red flags that mean bad fit)

Output a one-page ICP doc I can share with my team.`,
  },
  {
    id: 'wf-account-research',
    title: 'Account Research Template',
    description: 'Research a target account before outreach',
    category: 'prospecting',
    tags: ['research', 'account', 'intel'],
    difficulty: 'beginner',
    prompt: `Research [COMPANY NAME] and give me a briefing for sales outreach.

I need:
1. Company overview (what they do, size, funding, growth)
2. Recent news (last 6 months)
3. Key executives (names, backgrounds, LinkedIn)
4. Tech stack (what tools they likely use)
5. Potential pain points (based on their stage/industry)
6. Competitors they might use
7. Trigger events (why now might be good timing)
8. Conversation starters (hooks for outreach)

My product: [WHAT YOU SELL]
Target persona: [TITLE I'M REACHING]

Format as a one-pager I can reference before calling.`,
  },
  {
    id: 'wf-lead-scoring',
    title: 'Lead Scoring Model',
    description: 'Build a lead scoring model for prioritization',
    category: 'prospecting',
    tags: ['scoring', 'prioritization', 'qualification'],
    difficulty: 'advanced',
    prompt: `Help me build a lead scoring model.

Context:
- Lead sources: [INBOUND / OUTBOUND / EVENTS / etc.]
- Current volume: [LEADS PER MONTH]
- Conversion rate: [MQL TO SQL / SQL TO OPP]
- Sales team capacity: [REPS AND BANDWIDTH]
- What makes a good lead: [YOUR BEST LEADS]

Scoring model needs:
1. Demographic score (firmographic fit)
2. Behavioral score (engagement and intent signals)
3. Score thresholds (hot/warm/cold or MQL/SQL)
4. Routing rules (who gets which leads)
5. Score decay (how scores change over time)

Output:
- Scoring rubric with points per criteria
- Threshold definitions
- Routing logic
- Process for score calibration`,
  },
];

export const outreachPrompts: Prompt[] = [
  {
    id: 'wf-multi-channel-sequence',
    title: 'Multi-Channel Sequence',
    description: 'Build a sequence across email, phone, and LinkedIn',
    category: 'outreach',
    tags: ['sequence', 'multi-channel', 'cadence'],
    difficulty: 'intermediate',
    prompt: `Create a multi-channel outreach sequence.

Context:
- Target persona: [TITLE at COMPANY TYPE]
- My product: [WHAT YOU SELL]
- Key pain point: [MAIN PROBLEM YOU SOLVE]
- Best case study: [PROOF POINT]
- Sequence length: [2-3 WEEKS]

Channels to use:
- Email (primary)
- LinkedIn (connection + messages)
- Phone (calls + voicemails)

Create a 12-touch sequence that:
1. Starts with email (low friction)
2. Adds LinkedIn on Day 2
3. Introduces phone on Day 4
4. Varies the angle each week
5. Ends with a clear breakup

For each touch:
- Channel and timing
- Subject/hook
- Key message
- CTA`,
  },
  {
    id: 'wf-personalization-framework',
    title: 'Email Personalization at Scale',
    description: 'Framework for personalizing outreach at scale',
    category: 'outreach',
    tags: ['personalization', 'email', 'scale'],
    difficulty: 'intermediate',
    prompt: `Help me personalize outreach at scale.

Context:
- Volume goal: [EMAILS PER DAY/WEEK]
- Team size: [NUMBER OF SDRs]
- Current personalization: [WHAT YOU DO TODAY]
- Data available: [WHAT YOU KNOW ABOUT PROSPECTS]

Create a tiered personalization framework:
1. Tier 1 (Top accounts): Full custom research
2. Tier 2 (Good fit): Industry/role customization
3. Tier 3 (Volume): Segment-based variables

For each tier:
- Time investment per email
- Personalization elements to include
- Templates and snippets
- Quality checks

Goal: Maximum relevance per minute invested.`,
  },
  {
    id: 'wf-subject-line-test',
    title: 'Email Subject Line Generator',
    description: 'Generate and test email subject lines',
    category: 'outreach',
    tags: ['email', 'subject-line', 'testing'],
    difficulty: 'beginner',
    prompt: `Generate email subject lines for this campaign.

Context:
- Target persona: [TITLE]
- Industry: [INDUSTRY]
- Pain point: [WHAT YOU SOLVE]
- Tone: [PROFESSIONAL / CASUAL / DIRECT]

Generate 10 subject lines in these styles:
1. Curiosity gap (opens a loop)
2. Benefit-driven (what they get)
3. Pain-driven (what they avoid)
4. Question format (engages them)
5. Personalized (uses their name/company)
6. Number/stat (specific and concrete)
7. Social proof (reference customers)
8. Urgency (time-sensitive)
9. Direct ask (no games)
10. Pattern interrupt (unexpected)

For each subject line:
- Why it might work
- When to use it
- A/B test suggestion`,
  },
  {
    id: 'wf-follow-up-templates',
    title: 'Follow-Up Email Templates',
    description: 'Templates for different follow-up scenarios',
    category: 'outreach',
    tags: ['follow-up', 'templates', 'email'],
    difficulty: 'beginner',
    prompt: `Create follow-up email templates for these scenarios.

Context:
- My product: [WHAT YOU SELL]
- My value prop: [KEY BENEFIT]

Generate templates for:
1. After no response to first email (Day 3)
2. After meeting request ignored (Day 5)
3. After they opened but didn't reply (Day 7)
4. After they clicked a link (same day)
5. After voicemail left (next day)
6. After LinkedIn connection (Day 2)
7. After referral introduction (Day 1)
8. After trade show/event (Day 1)
9. After their competitor news (same day)
10. Final breakup email (Day 14)

Each template should:
- Be under 75 words
- Have a clear subject line
- Reference the previous touch
- Add new value (not just "following up")
- Have a specific CTA`,
  },
  {
    id: 'wf-cold-call-scripts',
    title: 'Cold Call Script Library',
    description: 'Scripts for different cold call scenarios',
    category: 'outreach',
    tags: ['cold-call', 'phone', 'scripts'],
    difficulty: 'intermediate',
    prompt: `Create cold call scripts for different scenarios.

Context:
- My product: [WHAT YOU SELL]
- Target title: [WHO I'M CALLING]
- Average call goal: [BOOK MEETING / QUALIFY / INFO GATHER]

Generate scripts for:
1. Gatekeeper navigation (getting past the EA)
2. Direct connect opener (they picked up)
3. Referral-based call (someone recommended)
4. Follow-up to email call (they received your email)
5. Event-triggered call (after their news/announcement)
6. Competitor displacement call (they use competitor)

Each script includes:
- Opening line (first 10 seconds)
- Value statement (next 20 seconds)
- Interest gauge question
- Common objection responses
- Meeting ask
- Voicemail version (if they don't answer)`,
  },
  {
    id: 'wf-linkedin-sequences',
    title: 'LinkedIn Outreach Sequences',
    description: 'Multi-touch LinkedIn message sequences',
    category: 'outreach',
    tags: ['linkedin', 'social-selling', 'sequence'],
    difficulty: 'intermediate',
    prompt: `Create LinkedIn outreach sequences.

Context:
- Target persona: [TITLE at COMPANY TYPE]
- My product: [WHAT YOU SELL]
- LinkedIn activity level: [ACTIVE / OCCASIONAL / RARE POSTER]
- Mutual connections: [YES/NO]

Create 3 different sequences:

Sequence 1: Connection + Message (for active LinkedIn users)
- Connection request
- Day 1 message
- Day 3 follow-up
- Day 7 value add

Sequence 2: Content-First (for thought leader types)
- Engage with their content (comment strategy)
- Connection request after engagement
- Message referencing their content

Sequence 3: Mutual Connection Path
- Identify mutual connection angle
- Soft introduction request
- Direct follow-up

For each message:
- Character count (must be under LinkedIn limits)
- Why it works
- Common responses and how to handle`,
  },
  {
    id: 'wf-objection-response-bank',
    title: 'Outreach Objection Response Bank',
    description: 'Responses to common outreach objections',
    category: 'outreach',
    tags: ['objections', 'responses', 'outreach'],
    difficulty: 'intermediate',
    prompt: `Create an objection response bank for outreach.

Context:
- My product: [WHAT YOU SELL]
- Price range: [BALLPARK]
- Main competitor: [PRIMARY COMPETITOR]

Generate responses for these common objections:

1. "Not interested"
2. "Send me some info"
3. "We already have a solution"
4. "No budget"
5. "Call me next quarter"
6. "How did you get my info?"
7. "I'm not the right person"
8. "We're too small/big for this"
9. "Just email me"
10. "I don't take cold calls"

For each objection:
- Phone response (real-time)
- Email response (written)
- The psychology behind their objection
- Red flag that means stop vs. just pushback`,
  },
];

export const discoveryPrompts: Prompt[] = [
  {
    id: 'wf-discovery-framework',
    title: 'Discovery Call Framework',
    description: 'Complete framework for running discovery calls',
    category: 'discovery',
    tags: ['discovery', 'questions', 'qualification'],
    difficulty: 'intermediate',
    prompt: `Create a discovery call framework for my sales team.

Context:
- Product: [WHAT YOU SELL]
- ICP: [IDEAL CUSTOMER]
- Average deal size: [ACV]
- Sales cycle: [LENGTH]
- Qualification criteria: [BANT / MEDDPICC / etc.]

Framework needs:
1. Opening (rapport, agenda, permission)
2. Situation questions (current state)
3. Problem questions (pain exploration)
4. Impact questions (quantification)
5. Future state questions (desired outcome)
6. Process questions (decision making)
7. Closing (summary, next steps)

Include:
- Specific questions for each section
- Follow-up prompts
- Red flags to listen for
- Note-taking template`,
  },
  {
    id: 'wf-pain-quantification',
    title: 'Pain Quantification Questions',
    description: 'Questions to quantify the cost of the problem',
    category: 'discovery',
    tags: ['pain', 'quantification', 'roi'],
    difficulty: 'advanced',
    prompt: `Help me quantify the cost of my prospect's problem.

Context:
- Prospect: [COMPANY and SITUATION]
- Problem they have: [THE PAIN]
- My solution: [WHAT YOU SELL]
- Likely impact areas: [TIME / MONEY / RISK]

Generate questions that uncover:
1. Time wasted (hours per week, people involved)
2. Money lost (direct costs, opportunity cost)
3. Risk exposure (what could go wrong)
4. Downstream impact (effects on other teams/metrics)
5. Strategic cost (competitive disadvantage)

For each area:
- Opening question
- Follow-up to quantify
- How to calculate the number together
- Benchmark data to reference`,
  },
  {
    id: 'wf-stakeholder-mapping',
    title: 'Stakeholder Mapping Session',
    description: 'Map the buying committee in discovery',
    category: 'discovery',
    tags: ['stakeholders', 'buying-committee', 'mapping'],
    difficulty: 'advanced',
    prompt: `Help me map the stakeholders in this opportunity.

Context:
- Company: [PROSPECT]
- Deal size: [VALUE]
- Current contact: [NAME, TITLE]
- Departments affected: [WHO USES YOUR PRODUCT]

Generate questions to identify:
1. Economic Buyer (who has budget authority)
2. Technical Buyer (who evaluates technically)
3. User Buyer (who will use it daily)
4. Champion (who wants you to win)
5. Coach (who will give you inside info)
6. Blocker (who might say no)

For each stakeholder type:
- Discovery questions to identify them
- How to get introduced to them
- What they care about
- How to win them over
- Warning signs they're against you`,
  },
  {
    id: 'wf-current-state-deep-dive',
    title: 'Current State Assessment',
    description: 'Deep dive into their current situation',
    category: 'discovery',
    tags: ['current-state', 'assessment', 'questions'],
    difficulty: 'intermediate',
    prompt: `Generate current state assessment questions.

Context:
- Prospect's likely current solution: [WHAT THEY USE TODAY]
- My product: [WHAT I SELL]
- Problem area: [WHAT THEY'RE TRYING TO SOLVE]

Questions to understand:
1. Process (how do they do this today, step by step)
2. Tools (what software/systems do they use)
3. People (who's involved, how many)
4. Time (how long does it take)
5. Satisfaction (what works, what doesn't)
6. History (have they tried to fix this before)
7. Workarounds (what do they do to cope)
8. Metrics (how do they measure success today)

For each question:
- The question to ask
- Follow-up probes
- What their answer reveals
- How to tie it back to your solution`,
  },
  {
    id: 'wf-future-state-visioning',
    title: 'Future State Visioning',
    description: 'Help prospects envision their ideal future state',
    category: 'discovery',
    tags: ['future-state', 'vision', 'questions'],
    difficulty: 'intermediate',
    prompt: `Create future state visioning questions.

Context:
- Prospect: [COMPANY]
- Problem area: [WHAT THEY'RE SOLVING]
- My solution: [WHAT I SELL]

Generate questions that help them visualize:
1. What does success look like in 12 months?
2. How would they know the problem is solved?
3. What would their team be able to do that they can't today?
4. What metrics would be different?
5. How would their day/week change?
6. What would stakeholders say about the improvement?
7. What would they do with time/resources freed up?

For each question:
- How to phrase it naturally
- Follow-up to make it tangible
- How to connect their vision to your product
- Warning signs their vision doesn't fit your solution`,
  },
  {
    id: 'wf-competitive-discovery',
    title: 'Competitive Intelligence Discovery',
    description: 'Uncover competitive landscape in discovery',
    category: 'discovery',
    tags: ['competitive', 'discovery', 'intelligence'],
    difficulty: 'advanced',
    prompt: `Generate questions to understand the competitive landscape.

Context:
- My product: [WHAT I SELL]
- Main competitors: [WHO WE COMPETE WITH]
- Prospect: [COMPANY]

Questions to uncover:
1. Are they evaluating alternatives? (without being paranoid)
2. What solutions have they looked at before?
3. Why didn't previous solutions work?
4. What criteria are they using to evaluate?
5. Who's involved in the evaluation?
6. What's their timeline?
7. What would make them choose us vs. others?

For each question:
- Natural way to ask it
- How to handle "yes we're looking at X"
- Red flags that we're losing
- How to differentiate without trash-talking`,
  },
  {
    id: 'wf-decision-process-mapping',
    title: 'Decision Process Discovery',
    description: 'Map their buying process and timeline',
    category: 'discovery',
    tags: ['decision-process', 'buying-process', 'timeline'],
    difficulty: 'intermediate',
    prompt: `Generate questions to map their decision process.

Context:
- Deal size: [VALUE]
- Company size: [EMPLOYEES]
- Typical sales cycle: [YOUR AVERAGE]

Questions to understand:
1. How have they bought similar solutions before?
2. Who needs to be involved in this decision?
3. What's their evaluation process?
4. What approvals are needed?
5. Is there a specific timeline or deadline?
6. What could slow this down?
7. What happens if they don't decide?
8. What's the procurement/legal process?

For each stage of their process:
- Questions to ask
- Who you should be talking to
- Documents they might need
- Typical timeline
- How to accelerate without being pushy`,
  },
];

export const negotiationPrompts: Prompt[] = [
  {
    id: 'wf-negotiation-prep',
    title: 'Negotiation Preparation Checklist',
    description: 'Prepare for a deal negotiation',
    category: 'negotiation',
    tags: ['negotiation', 'preparation', 'close'],
    difficulty: 'advanced',
    prompt: `Help me prepare for a negotiation on this deal.

Deal context:
- Company: [PROSPECT]
- Deal size: [VALUE]
- Competition: [WHO ELSE]
- Champion: [YOUR ALLY]
- Economic buyer: [DECISION MAKER]
- Their timeline: [URGENCY]
- What they've pushed back on: [OBJECTIONS]

Preparation needed:
1. BATNA analysis (theirs and ours)
2. Zone of possible agreement (ZOPA)
3. Our walk-away point
4. Concessions we can offer
5. What we want in return for each concession
6. Anchoring strategy
7. Objection responses

Output a negotiation prep sheet I can use in the meeting.`,
  },
  {
    id: 'wf-procurement-nav',
    title: 'Procurement Navigation Guide',
    description: 'Navigate procurement and legal review',
    category: 'negotiation',
    tags: ['procurement', 'legal', 'redlines'],
    difficulty: 'advanced',
    prompt: `Help me navigate procurement/legal review on this deal.

Context:
- Company: [PROSPECT]
- Deal size: [VALUE]
- Their procurement process: [WHAT YOU KNOW]
- Contract redlines: [ISSUES THEY RAISED]
- Timeline pressure: [WHEN THEY NEED TO CLOSE]
- Our flexibility: [WHAT WE CAN/CAN'T CHANGE]

Help me with:
1. Common procurement tactics and how to handle
2. Response to their redlines
3. When to escalate vs. concede
4. How to maintain deal momentum
5. Language for "this is standard" pushback
6. Mutual value trade-offs

Generate a procurement navigation plan with specific responses.`,
  },
  {
    id: 'wf-discount-response',
    title: 'Discount Request Response',
    description: 'Respond to discount requests strategically',
    category: 'negotiation',
    tags: ['discount', 'pricing', 'negotiation'],
    difficulty: 'intermediate',
    prompt: `Help me respond to this discount request.

Context:
- Our price: [LIST PRICE]
- Their ask: [WHAT THEY WANT - % OFF OR SPECIFIC NUMBER]
- Deal size: [TOTAL VALUE]
- Our authority: [WHAT I CAN OFFER]
- Their leverage: [WHY THEY THINK THEY DESERVE IT]
- Our leverage: [WHY THEY NEED US]

Generate responses for different scenarios:
1. Hard no (we don't discount)
2. Trade for something (what we want in return)
3. Structure differently (annual vs. monthly, longer term)
4. Remove scope (reduce what they get)
5. Delay discount (first year full, then discount)
6. Value-add instead (give more, not cheaper)

For each approach:
- Script for how to say it
- What to ask for in return
- How to frame it as a win for them
- When to use this approach vs. others`,
  },
  {
    id: 'wf-closing-techniques',
    title: 'Closing Technique Scripts',
    description: 'Scripts for different closing techniques',
    category: 'negotiation',
    tags: ['closing', 'techniques', 'scripts'],
    difficulty: 'advanced',
    prompt: `Generate closing technique scripts for this deal.

Context:
- Deal: [DESCRIBE THE OPPORTUNITY]
- Stage: [WHERE WE ARE]
- Sticking points: [WHAT'S HOLDING THEM BACK]
- Timeline: [WHEN THEY NEED TO DECIDE]

Generate scripts for these closes:

1. Summary Close
   "Based on everything we discussed..."

2. Assumptive Close
   Assume the sale, discuss implementation

3. Timeline Close
   Work backwards from their go-live

4. Options Close
   Give them two ways to say yes

5. Value Summary Close
   Recap ROI before asking

6. Scarcity Close
   Pricing valid until, limited slots, etc.

7. Trial Close
   "If we could... would you..."

8. Direct Ask
   Simply ask for the business

For each technique:
- Exact words to use
- When this works best
- Warning signs not to use it
- How to recover if they say no`,
  },
  {
    id: 'wf-stakeholder-negotiation',
    title: 'Multi-Stakeholder Negotiation',
    description: 'Navigate negotiations with multiple stakeholders',
    category: 'negotiation',
    tags: ['stakeholders', 'negotiation', 'complex-deals'],
    difficulty: 'advanced',
    prompt: `Help me navigate a multi-stakeholder negotiation.

Context:
- Company: [PROSPECT]
- Stakeholders involved:
  * [NAME 1, TITLE]: [THEIR INTEREST]
  * [NAME 2, TITLE]: [THEIR INTEREST]
  * [NAME 3, TITLE]: [THEIR INTEREST]
- Deal size: [VALUE]
- Current issues: [WHAT EACH STAKEHOLDER WANTS]

For each stakeholder:
1. What they care about (priorities)
2. What they might block on
3. How to align your solution to their needs
4. Language that resonates with them

Then create:
- Meeting strategy (who to meet, in what order)
- How to create consensus
- How to handle conflicting stakeholder needs
- Escalation path if stuck
- Coalition building strategy`,
  },
  {
    id: 'wf-contract-redline-responses',
    title: 'Contract Redline Responses',
    description: 'Respond to common contract redlines',
    category: 'negotiation',
    tags: ['contract', 'legal', 'redlines'],
    difficulty: 'advanced',
    prompt: `Help me respond to these contract redlines.

Context:
- Deal size: [VALUE]
- Prospect company: [NAME AND SIZE]
- Our standard flexibility: [WHAT WE CAN TYPICALLY ADJUST]

Generate responses for common redlines:

1. Unlimited liability ask
2. Indemnification expansion
3. Termination for convenience
4. SLA with financial penalties
5. Data deletion on termination
6. Audit rights
7. Most favored nation pricing
8. Auto-renewal removal
9. Cap on price increases
10. Escrow requirements

For each redline:
- Why they're asking (their concern)
- Our position (what's reasonable)
- Counter-proposal language
- When to escalate vs. concede
- Trade we could ask for in exchange`,
  },
];

// Helper to get prompts by workflow
export function getWorkflowPrompts(workflow: string): Prompt[] {
  switch (workflow) {
    case 'prospecting':
      return prospectingPrompts;
    case 'outreach':
      return outreachPrompts;
    case 'discovery':
      return discoveryPrompts;
    case 'negotiation':
      return negotiationPrompts;
    default:
      return [];
  }
}

// Methodology Prompts
export const meddpiccPrompts: Prompt[] = [
  {
    id: 'meddpicc-qualification',
    title: 'MEDDPICC Deal Qualification',
    description: 'Qualify a deal using MEDDPICC framework',
    category: 'meddpicc',
    tags: ['qualification', 'enterprise', 'meddpicc'],
    difficulty: 'intermediate',
    prompt: `Help me qualify this deal using MEDDPICC.

Deal context:
- Company: [PROSPECT]
- Opportunity: [WHAT THEY'RE BUYING]
- Deal size: [VALUE]
- Stage: [CURRENT STAGE]

For each letter, tell me:
1. What I know
2. What I need to find out
3. Questions to ask
4. Red flags to watch for

M - Metrics: [WHAT BUSINESS OUTCOMES DO THEY EXPECT?]
E - Economic Buyer: [WHO HAS BUDGET AUTHORITY?]
D - Decision Criteria: [HOW WILL THEY EVALUATE?]
D - Decision Process: [WHAT ARE THE STEPS TO PURCHASE?]
P - Paper Process: [LEGAL/PROCUREMENT REQUIREMENTS?]
I - Identify Pain: [WHAT'S THE COMPELLING PROBLEM?]
C - Champion: [WHO'S YOUR INTERNAL ADVOCATE?]
C - Competition: [WHO ELSE ARE THEY EVALUATING?]

Output a MEDDPICC scorecard with gaps highlighted.`,
  },
  {
    id: 'meddpicc-champion-test',
    title: 'Champion Validation Test',
    description: 'Test if your champion is a real champion',
    category: 'meddpicc',
    tags: ['champion', 'validation', 'meddpicc'],
    difficulty: 'advanced',
    prompt: `Help me validate if [CONTACT NAME] is a true champion.

Context:
- Their title: [TITLE]
- What they've done: [ACTIONS THEY'VE TAKEN]
- What they've said: [COMMITMENTS THEY'VE MADE]
- Deal stage: [WHERE WE ARE]

Champion criteria (they must have all 3):
1. POWER: Can they influence the decision?
2. ACCESS: Can they get you to the economic buyer?
3. WILL: Are they actively selling for you internally?

Test questions:
- Has the champion given you information you couldn't get otherwise?
- Has the champion coached you on how to win?
- Has the champion taken personal risk by advocating?
- Has the champion arranged access to power?
- Would the champion meet you outside of work hours?

Assess this champion and tell me what to do next.`,
  },
];

export const spinPrompts: Prompt[] = [
  {
    id: 'spin-question-generator',
    title: 'SPIN Question Generator',
    description: 'Generate SPIN questions for your product',
    category: 'spin',
    tags: ['spin', 'questions', 'discovery'],
    difficulty: 'intermediate',
    prompt: `Generate SPIN questions for my sales conversations.

Context:
- My product: [WHAT YOU SELL]
- Target persona: [WHO YOU SELL TO]
- Main problems we solve: [TOP 3 PAIN POINTS]
- Typical objections: [COMMON PUSHBACK]

Generate 5 questions for each category:

SITUATION (establish context):
- Questions about their current state
- Non-threatening, fact-finding

PROBLEM (uncover difficulties):
- Questions that surface pain
- Focus on challenges and frustrations

IMPLICATION (develop seriousness):
- Questions that expand the problem
- Connect to business impact

NEED-PAYOFF (envision solution):
- Questions that make them articulate benefits
- Let them sell themselves

Include transitions between each phase.`,
  },
];

export const challengerPrompts: Prompt[] = [
  {
    id: 'challenger-insight',
    title: 'Challenger Commercial Insight',
    description: 'Develop a commercial teaching insight',
    category: 'challenger',
    tags: ['challenger', 'insight', 'teaching'],
    difficulty: 'advanced',
    prompt: `Help me develop a Challenger-style commercial insight.

Context:
- My industry: [YOUR MARKET]
- My product: [WHAT YOU SELL]
- Target buyer: [WHO YOU SELL TO]
- Common assumption: [WHAT THEY BELIEVE TODAY]

A good commercial insight should:
1. Challenge their current thinking
2. Lead to your unique strength
3. Be defensible with data
4. Create urgency to act
5. Resonate emotionally

Framework:
- "Most [buyers] believe [common assumption]..."
- "But our research shows [surprising insight]..."
- "The implication is [business impact]..."
- "The best companies are [doing something different]..."
- "Which is exactly why [your solution matters]..."

Generate a teaching pitch I can use to reframe conversations.`,
  },
];

// Helper to get prompts by methodology
export function getMethodologyPrompts(methodology: string): Prompt[] {
  switch (methodology) {
    case 'meddpicc':
      return meddpiccPrompts;
    case 'spin':
      return spinPrompts;
    case 'challenger':
      return challengerPrompts;
    default:
      return [];
  }
}
