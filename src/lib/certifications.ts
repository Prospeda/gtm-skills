/**
 * GTM Skills Certification System
 *
 * Certification levels, course content, and progress tracking.
 */

// Types
export interface CertificationLevel {
  id: string;
  level: number;
  name: string;
  slug: string;
  description: string;
  modules_required: number;
  assessment_pass_score: number;
  github_star_required: boolean;
  prompts_required: number;
  votes_required: number;
  badge_color: string;
}

export interface CertificationModule {
  id: string;
  level_id: string;
  module_number: number;
  title: string;
  slug: string;
  description: string;
  content_type: 'lesson' | 'quiz' | 'practical';
  content: ModuleContent;
  estimated_minutes: number;
  resources?: Resource[];
}

export interface ModuleContent {
  markdown?: string;
  quiz?: QuizQuestion[];
  practical?: PracticalTask;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct_index: number;
  explanation: string;
}

export interface PracticalTask {
  title: string;
  description: string;
  requirements: string[];
  submission_type: 'prompt' | 'link' | 'text';
}

export interface Resource {
  title: string;
  url: string;
  type: 'article' | 'video' | 'template' | 'tool';
}

export interface UserCertification {
  id: string;
  user_email: string;
  level_id: string;
  status: 'enrolled' | 'in_progress' | 'assessment' | 'completed' | 'expired';
  modules_completed: number;
  current_module_id?: string;
  assessment_score?: number;
  assessment_attempts: number;
  github_starred: boolean;
  prompts_submitted: number;
  votes_received: number;
  completed_at?: string;
  certificate_id?: string;
  enrolled_at: string;
}

// Certification Levels
export const CERTIFICATION_LEVELS: CertificationLevel[] = [
  {
    id: 'level-1',
    level: 1,
    name: 'GTM Skills Practitioner',
    slug: 'practitioner',
    description: 'Master the fundamentals of agentic sales. Learn to use prompts effectively in your GTM workflow.',
    modules_required: 5,
    assessment_pass_score: 80,
    github_star_required: true,
    prompts_required: 0,
    votes_required: 0,
    badge_color: '#f59e0b', // amber
  },
  {
    id: 'level-2',
    level: 2,
    name: 'GTM Skills Professional',
    slug: 'professional',
    description: 'Advanced agentic sales techniques. Create and share effective prompts with the community.',
    modules_required: 10,
    assessment_pass_score: 85,
    github_star_required: true,
    prompts_required: 5,
    votes_required: 50,
    badge_color: '#8b5cf6', // violet
  },
  {
    id: 'level-3',
    level: 3,
    name: 'GTM Skills Expert',
    slug: 'expert',
    description: 'Industry-recognized expertise. Lead the community and shape best practices.',
    modules_required: 0,
    assessment_pass_score: 0,
    github_star_required: true,
    prompts_required: 100,
    votes_required: 0,
    badge_color: '#10b981', // emerald
  },
];

// Level 1 Course Content
export const LEVEL_1_MODULES: CertificationModule[] = [
  {
    id: 'l1-m1',
    level_id: 'level-1',
    module_number: 1,
    title: 'Introduction to Agentic Sales',
    slug: 'intro-agentic-sales',
    description: 'Understand what agentic sales means and why it matters for modern GTM teams.',
    content_type: 'lesson',
    estimated_minutes: 15,
    content: {
      markdown: `
# Introduction to Agentic Sales

## What is Agentic Sales?

Agentic sales is the practice of using AI agents and prompts to augment human sales capabilities. Instead of replacing salespeople, agentic tools amplify what great reps already do well.

## The GTM Skills Philosophy

1. **Prompts are tools, not magic** - The best prompts encode proven sales frameworks
2. **Context is everything** - Generic prompts fail; personalized prompts convert
3. **Humans in the loop** - AI drafts, humans refine and send
4. **Measure what matters** - Track outcomes, not just activity

## Why This Matters Now

- Buyers are more informed than ever
- Personalization at scale is now possible
- The best reps are already using AI
- Those who don't adapt will fall behind

## What You'll Learn

By the end of this certification, you'll be able to:
- Write effective prompts for any sales scenario
- Customize prompts for your specific industry and buyer
- Use the GTM Skills library to accelerate your workflow
- Measure and improve prompt effectiveness

Let's get started.
      `,
    },
    resources: [
      { title: 'GTM Skills Prompt Library', url: '/prompts', type: 'tool' },
      { title: 'The Agentic Sales Playbook', url: '/agentic-bdr', type: 'article' },
    ],
  },
  {
    id: 'l1-m2',
    level_id: 'level-1',
    module_number: 2,
    title: 'Prompt Engineering Fundamentals',
    slug: 'prompt-engineering',
    description: 'Learn the core principles of writing effective sales prompts.',
    content_type: 'lesson',
    estimated_minutes: 20,
    content: {
      markdown: `
# Prompt Engineering for GTM

## The Anatomy of a Great Sales Prompt

Every effective prompt has four components:

### 1. Role Definition
Tell the AI who it should be:
\`\`\`
You are an experienced enterprise account executive
who specializes in selling to Fortune 500 CFOs.
\`\`\`

### 2. Context Setting
Provide the situation:
\`\`\`
The prospect is a VP of Finance at a $500M manufacturing company.
They recently announced a digital transformation initiative.
Their current pain points include manual reporting and slow close cycles.
\`\`\`

### 3. Task Specification
Be specific about what you want:
\`\`\`
Write a cold email that:
- Opens with a relevant trigger event
- Connects their initiative to our solution
- Asks for a 15-minute call
- Is under 100 words
\`\`\`

### 4. Output Format
Define the structure:
\`\`\`
Format the email with:
- Subject line (under 40 characters)
- Body text
- Signature placeholder
\`\`\`

## Common Mistakes to Avoid

1. **Being too vague** - "Write a good email" gives mediocre results
2. **Overloading context** - More isn't always better
3. **Forgetting the persona** - Who is this for?
4. **No success criteria** - How do you know it's good?

## The GTM Skills Approach

Our prompts follow the **RACE framework**:
- **R**ole: Who is the AI?
- **A**udience: Who is the recipient?
- **C**ontext: What's the situation?
- **E**xecution: What specifically should happen?
      `,
    },
    resources: [
      { title: 'RACE Framework Template', url: '/templates', type: 'template' },
    ],
  },
  {
    id: 'l1-m3',
    level_id: 'level-1',
    module_number: 3,
    title: 'Cold Outreach with Prompts',
    slug: 'cold-outreach',
    description: 'Master AI-assisted cold emails and LinkedIn messages.',
    content_type: 'lesson',
    estimated_minutes: 25,
    content: {
      markdown: `
# Cold Outreach Mastery

## The Problem with Generic Outreach

Average response rates:
- Generic cold email: 1-2%
- Personalized cold email: 5-8%
- AI-personalized at scale: 10-15%

The difference is **relevant personalization**.

## The Trigger-Based Approach

Great outreach starts with a trigger:

| Trigger Type | Example | Why It Works |
|--------------|---------|--------------|
| Funding | "Congrats on the Series B" | Shows you're paying attention |
| Hiring | "Saw you're hiring 5 SDRs" | Implies growth/pain |
| News | "Read about your expansion" | Timely and relevant |
| Content | "Loved your post on X" | Genuine engagement |
| Role change | "Congrats on the new role" | Natural conversation starter |

## Email Prompt Template

\`\`\`
Role: You are an SDR at [Company] selling [Product] to [Persona].

Context:
- Prospect: [Name], [Title] at [Company]
- Trigger: [Specific trigger event]
- Pain points this persona typically has: [List]
- Our value prop for this persona: [Statement]

Task: Write a cold email that:
1. Opens with the trigger (not "Hope you're well")
2. Bridges to a relevant pain point
3. Offers a specific insight or value
4. Asks for a 15-minute call with a specific reason
5. Total length: Under 100 words

Tone: Professional but human. No jargon. No "just wanted to reach out."
\`\`\`

## LinkedIn Message Template

\`\`\`
Write a LinkedIn connection request message that:
1. References something specific from their profile
2. Explains why connecting would be valuable
3. Does NOT pitch the product
4. Is under 300 characters

Prospect context: [Their role, company, recent activity]
\`\`\`

## Practice Exercise

Use the templates above with a real prospect. Test different triggers and measure response rates.
      `,
    },
    resources: [
      { title: 'Cold Email Prompts', url: '/prompts?category=outreach', type: 'tool' },
      { title: 'LinkedIn Message Templates', url: '/prompts?tag=linkedin', type: 'template' },
    ],
  },
  {
    id: 'l1-m4',
    level_id: 'level-1',
    module_number: 4,
    title: 'Discovery & Qualification',
    slug: 'discovery-qualification',
    description: 'Use AI to prepare for and execute better discovery calls.',
    content_type: 'lesson',
    estimated_minutes: 20,
    content: {
      markdown: `
# Discovery & Qualification with AI

## Pre-Call Research Prompt

Before every discovery call, run this prompt:

\`\`\`
Research brief for discovery call:

Company: [Name]
Contact: [Name, Title]
Website: [URL]

Generate:
1. Company overview (2-3 sentences)
2. Recent news or triggers (last 90 days)
3. Likely pain points for this role
4. Potential objections they might raise
5. Questions to uncover their current state
6. Questions to understand desired future state
\`\`\`

## MEDDPICC Discovery Questions

Use AI to generate MEDDPICC-aligned questions:

\`\`\`
Generate discovery questions for a [Title] at a [Company Type]:

For each MEDDPICC element, provide 2 questions:
- Metrics: How they measure success
- Economic Buyer: Who controls budget
- Decision Criteria: What matters in a vendor
- Decision Process: How they evaluate
- Paper Process: Procurement requirements
- Identify Pain: Current challenges
- Champion: Who will advocate internally
- Competition: Current solutions/alternatives

Make questions conversational, not interrogative.
\`\`\`

## Real-Time Call Support

During calls, use prompts for:

**Objection Handling:**
\`\`\`
Prospect just said: "[Exact objection]"
Context: [Where we are in the conversation]

Generate 2-3 response options that:
- Acknowledge their concern
- Reframe without being pushy
- Move the conversation forward
\`\`\`

**Summary Generation:**
\`\`\`
Call notes: [Paste notes]

Generate:
1. Executive summary (3 bullets)
2. Key pain points identified
3. Next steps agreed
4. Risk factors
5. Follow-up email draft
\`\`\`

## The Discovery Framework

Great discovery follows a pattern:
1. **Situation** - Current state
2. **Problem** - What's not working
3. **Implication** - Cost of inaction
4. **Need-Payoff** - Value of change

Use prompts to prepare questions for each stage.
      `,
    },
    resources: [
      { title: 'MEDDPICC Prompts', url: '/methodology/meddpicc', type: 'tool' },
      { title: 'Discovery Question Bank', url: '/prompts?tag=discovery', type: 'template' },
    ],
  },
  {
    id: 'l1-m5',
    level_id: 'level-1',
    module_number: 5,
    title: 'Assessment & Certification',
    slug: 'assessment',
    description: 'Test your knowledge and earn your certification.',
    content_type: 'quiz',
    estimated_minutes: 15,
    content: {
      quiz: [
        {
          id: 'q1',
          question: 'What are the four components of the RACE framework?',
          options: [
            'Research, Analyze, Create, Execute',
            'Role, Audience, Context, Execution',
            'Respond, Adapt, Convert, Engage',
            'Review, Assess, Communicate, Evaluate',
          ],
          correct_index: 1,
          explanation: 'RACE stands for Role, Audience, Context, and Execution - the four elements of an effective sales prompt.',
        },
        {
          id: 'q2',
          question: 'What is the recommended maximum length for a cold email?',
          options: [
            '50 words',
            '100 words',
            '200 words',
            '300 words',
          ],
          correct_index: 1,
          explanation: 'Cold emails should be under 100 words. Shorter emails have higher response rates.',
        },
        {
          id: 'q3',
          question: 'Which of these is NOT a good trigger for cold outreach?',
          options: [
            'Recent funding announcement',
            'New job posting',
            'Hope you are doing well',
            'Published article or post',
          ],
          correct_index: 2,
          explanation: '"Hope you are doing well" is not a trigger - it\'s filler. Good triggers show you\'ve done research.',
        },
        {
          id: 'q4',
          question: 'What does MEDDPICC help you do?',
          options: [
            'Write better cold emails',
            'Qualify and understand enterprise deals',
            'Negotiate pricing',
            'Handle objections',
          ],
          correct_index: 1,
          explanation: 'MEDDPICC is a qualification framework for understanding enterprise deals and their decision-making process.',
        },
        {
          id: 'q5',
          question: 'In the context of agentic sales, what should AI do?',
          options: [
            'Replace salespeople entirely',
            'Augment human capabilities',
            'Make all decisions autonomously',
            'Only handle administrative tasks',
          ],
          correct_index: 1,
          explanation: 'AI should augment human capabilities, not replace them. Humans remain in the loop for judgment and relationships.',
        },
        {
          id: 'q6',
          question: 'What makes personalized cold outreach more effective?',
          options: [
            'Using the prospect\'s first name',
            'Relevant triggers and specific context',
            'Longer, more detailed emails',
            'Sending at the right time of day',
          ],
          correct_index: 1,
          explanation: 'Relevant triggers and specific context show you understand the prospect\'s situation. Just using their name isn\'t true personalization.',
        },
        {
          id: 'q7',
          question: 'When should you use AI during a discovery call?',
          options: [
            'Never - calls should be fully human',
            'Only for pre-call research',
            'For pre-call research, real-time support, and post-call summaries',
            'Only for post-call summaries',
          ],
          correct_index: 2,
          explanation: 'AI can help at all stages: preparing for the call, handling objections in real-time, and summarizing key points afterward.',
        },
        {
          id: 'q8',
          question: 'What is the purpose of the "Role" component in a prompt?',
          options: [
            'To define what job the prospect has',
            'To tell the AI what persona to adopt',
            'To specify your own job title',
            'To list the stakeholders involved',
          ],
          correct_index: 1,
          explanation: 'The Role component tells the AI what persona to adopt (e.g., "You are an experienced enterprise AE").',
        },
        {
          id: 'q9',
          question: 'What is the primary requirement to earn the GTM Skills Practitioner badge?',
          options: [
            'Submit 5 prompts to the leaderboard',
            'Complete the 5 modules and pass the assessment',
            'Get 50 votes on your prompts',
            'Refer 10 new users',
          ],
          correct_index: 1,
          explanation: 'Level 1 (Practitioner) requires completing 5 modules, passing the assessment with 80%+, and starring the GitHub repo.',
        },
        {
          id: 'q10',
          question: 'What is the benefit of the trigger-based approach to outreach?',
          options: [
            'It\'s faster to write',
            'It shows you\'re paying attention and provides relevance',
            'It bypasses spam filters',
            'It works in any industry',
          ],
          correct_index: 1,
          explanation: 'Triggers demonstrate you\'ve done research and provide immediate relevance to the prospect\'s current situation.',
        },
      ],
    },
  },
];

/**
 * Get certification level by slug
 */
export function getCertificationLevel(slug: string): CertificationLevel | undefined {
  return CERTIFICATION_LEVELS.find((l) => l.slug === slug);
}

/**
 * Get modules for a certification level
 */
export function getCertificationModules(levelSlug: string): CertificationModule[] {
  const level = getCertificationLevel(levelSlug);
  if (!level) return [];

  switch (level.level) {
    case 1:
      return LEVEL_1_MODULES;
    default:
      return [];
  }
}

/**
 * Get a specific module by slug
 */
export function getModule(levelSlug: string, moduleSlug: string): CertificationModule | undefined {
  const modules = getCertificationModules(levelSlug);
  return modules.find((m) => m.slug === moduleSlug);
}

/**
 * Calculate quiz score
 */
export function calculateQuizScore(
  answers: Record<string, number>,
  questions: QuizQuestion[]
): { score: number; total: number; percentage: number } {
  let correct = 0;
  const total = questions.length;

  for (const question of questions) {
    if (answers[question.id] === question.correct_index) {
      correct++;
    }
  }

  return {
    score: correct,
    total,
    percentage: Math.round((correct / total) * 100),
  };
}
