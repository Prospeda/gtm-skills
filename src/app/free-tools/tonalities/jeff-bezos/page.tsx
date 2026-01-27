import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CopyButton } from '@/components/copy-button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jeff Bezos Tonality | Customer-Obsessed Sales Writing',
  description: 'Write like Jeff Bezos. Customer-obsessed, data-driven narratives, the six-pager philosophy. Copy-paste prompts for proposals and strategic selling.',
  openGraph: {
    title: 'The Jeff Bezos Approach to Sales Communication',
    description: 'Customer-obsessed, data-driven narratives. Based on Amazon six-pager memos and the famous question mark email method.',
  },
};

const prompts = [
  {
    id: 'bezos-proposal',
    title: 'Six-Pager Proposal Prompt',
    description: 'Write a proposal using Bezos narrative structure',
    prompt: `Write a proposal in the Jeff Bezos six-pager style.

Context:
- Customer: [COMPANY NAME]
- Their goal: [WHAT THEY'RE TRYING TO ACHIEVE]
- Current state: [HOW THEY DO IT TODAY]
- My solution: [WHAT I'M PROPOSING]
- Key data points: [RELEVANT METRICS/NUMBERS]

Bezos Six-Pager Rules:
- Start with the customer's goal, not your product
- Narrative prose, not bullet points (complete sentences, complete thoughts)
- Data woven into the story, not dumped in tables
- "Working backwards" structure: Start with the press release of success
- Address the elephant in the room directly
- Include the FAQ section (anticipate their questions)
- End with clear next steps

Structure:
1. The Customer Situation (where they are)
2. The Vision (where they could be)
3. The Approach (how we get there)
4. The Evidence (why this will work)
5. The Investment (what it takes)
6. FAQs (objections answered)
7. Next Steps

Write in a way that your champion can hand this document to their CEO and it sells itself.`,
  },
  {
    id: 'bezos-question-mark',
    title: 'Question Mark Email Prompt',
    description: 'Drive accountability with the Bezos "?" technique',
    prompt: `Help me write a follow-up email using the Bezos "?" technique.

Context:
- Original issue: [WHAT HAPPENED/WHAT'S STUCK]
- Who needs to act: [PERSON/TEAM]
- Desired outcome: [WHAT YOU NEED TO HAPPEN]
- Timeline: [URGENCY LEVEL]

The Bezos "?" Email Philosophy:
- Sometimes a single "?" forward is more powerful than paragraphs
- It signals: "I saw this. I expect action. Report back."
- Use sparingly for maximum impact
- The brevity implies urgency and importance

Generate two versions:
1. The pure "?" forward (for internal team, high trust)
2. A slightly expanded version (for external/client situations)

The goal is to drive accountability without micromanaging. The "?" says "I trust you to handle this, but I'm watching."`,
  },
  {
    id: 'bezos-discovery',
    title: 'Customer-Obsessed Discovery Prompt',
    description: 'Discovery questions that work backwards from the customer',
    prompt: `Generate discovery questions using the Bezos "working backwards" method.

Context:
- Prospect: [COMPANY NAME]
- Their industry: [INDUSTRY]
- What I'm selling: [YOUR PRODUCT/SERVICE]
- What I know so far: [ANY INTEL]

Bezos Discovery Philosophy:
- Start with their customer's experience, not their operations
- Understand the "press release" they want to write in 1-2 years
- Find the metrics that matter to THEIR customers
- Uncover the data they wish they had
- Identify the decisions they can't make today

Generate questions in these categories:
1. Their Customer (who are they serving, what do those customers want)
2. The Vision (what does success look like in 2 years)
3. The Gaps (what's preventing that success today)
4. The Data (what would they measure if they could)
5. The Decision (what would unlock action)

Questions should reveal their "Day 1" thinking vs "Day 2" complacency.`,
  },
  {
    id: 'bezos-objection',
    title: 'Data-Driven Objection Response',
    description: 'Handle objections with Bezos-level customer focus',
    prompt: `Help me respond to this objection using Bezos customer-obsession:

Objection: "[THE OBJECTION THEY RAISED]"

Context:
- My product: [WHAT I'M SELLING]
- Their company: [COMPANY NAME]
- Their customers: [WHO THEY SERVE]

Bezos Objection Handling Rules:
- Reframe everything through their customer's lens
- Use data and anecdotes together (numbers + stories)
- "Disagree and commit" - acknowledge the concern, then move forward
- Long-term thinking beats short-term concerns
- "Are they right?" - genuinely consider if the objection is valid

Response structure:
1. Acknowledge the concern genuinely
2. Reframe through customer impact
3. Provide data that supports your position
4. Share a relevant customer story
5. Propose a "working backwards" exercise together

The response should make them think about their customers, not about the objection.`,
  },
];

const relatedTonalities = [
  { slug: 'steve-jobs', name: 'Steve Jobs', tagline: 'Brutally Direct' },
  { slug: 'chris-voss', name: 'Chris Voss', tagline: 'Tactical Empathy' },
  { slug: 'hemingway', name: 'Hemingway', tagline: 'Radically Brief' },
  { slug: 'cormac-mccarthy', name: 'Cormac McCarthy', tagline: 'Sparse & Powerful' },
];

export default function JeffBezosPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/free-tools" className="hover:text-foreground transition-colors">
            Free Tools
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/free-tools/tonalities" className="hover:text-foreground transition-colors">
            Tonalities
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">Jeff Bezos</span>
        </div>

        {/* Hero */}
        <div className="mb-12">
          <Badge variant="outline" className="mb-4 border-orange-500/30 text-orange-400">
            Tonality
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Customer Obsessed
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            The Jeff Bezos approach: Data-driven narratives, working backwards, the six-pager philosophy.
          </p>
          <blockquote className="border-l-4 border-orange-500 pl-4 italic text-zinc-400">
            "?" — The entire email Bezos forwards to executives, triggering deep-dive investigations and systemic fixes.
            <cite className="block text-sm mt-2 not-italic">— The Bezos Question Mark Method</cite>
          </blockquote>
        </div>

        {/* Philosophy */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">The Philosophy</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground">
              The Bezos tonality is built on Amazon's six-pager memo format and the famous "question mark" email.
              It's obsessively customer-focused, weaving data into compelling narratives rather than dumping
              bullet points. Every communication works backwards from the customer outcome.
            </p>
            <p className="text-muted-foreground mt-4">
              This style equips your champion with a document they can hand to leadership. It anticipates
              objections, tells a complete story, and frames everything through the lens of customer impact.
              The "?" email shows that sometimes extreme brevity drives more action than detailed instructions.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-3">Key Characteristics</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                Narrative structure over bullet points (complete sentences, complete thoughts)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                "Working backwards" from the customer outcome
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                Data woven into compelling stories
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                The "?" email for driving accountability
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                Long-term thinking and strategic alignment
              </li>
            </ul>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <h4 className="font-semibold text-green-400 mb-2">When to Use</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Complex enterprise sales</li>
                <li>• Strategic partnership discussions</li>
                <li>• Equipping your champion</li>
                <li>• Responding to major customer issues</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
              <h4 className="font-semibold text-red-400 mb-2">When NOT to Use</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Quick transactional sales</li>
                <li>• When you lack customer data</li>
                <li>• Time-sensitive urgent requests</li>
                <li>• Simple product conversations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Prompts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Copy-Paste Prompts</h2>
          <div className="space-y-6">
            {prompts.map((prompt) => (
              <div
                key={prompt.id}
                className="p-6 rounded-xl border border-border bg-card"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{prompt.title}</h3>
                    <p className="text-sm text-muted-foreground">{prompt.description}</p>
                  </div>
                  <CopyButton text={prompt.prompt} />
                </div>
                <div className="bg-zinc-900 rounded-lg p-4 font-mono text-sm">
                  <pre className="text-zinc-300 whitespace-pre-wrap overflow-x-auto">
                    {prompt.prompt}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Example Output */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Example Output</h2>
          <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800">
            <h4 className="font-semibold text-orange-400 mb-3 text-sm">Six-Pager Opening (Bezos Style)</h4>
            <p className="text-sm text-zinc-300 leading-relaxed">
              "Acme Corp serves 50,000 small businesses who trust them to process payroll every two weeks.
              When payroll is late, those businesses lose employee trust. When it's wrong, they face compliance risk.
              Today, Acme's payroll accuracy sits at 94% - meaning 3,000 businesses experience an error every month.
              Each error takes 4.2 hours to resolve and costs Acme $180 in support overhead. More importantly,
              it costs their customer confidence in a system they depend on..."
            </p>
          </div>
        </div>

        {/* Related Tonalities */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Other Tonalities</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {relatedTonalities.map((tonality) => (
              <Link
                key={tonality.slug}
                href={`/free-tools/tonalities/${tonality.slug}`}
                className="group p-4 rounded-lg border border-border hover:border-orange-500/50 transition-colors flex items-center justify-between"
              >
                <div>
                  <h3 className="font-semibold group-hover:text-orange-400 transition-colors">
                    {tonality.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{tonality.tagline}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-8 rounded-xl bg-zinc-900">
          <h2 className="text-2xl font-bold text-white mb-4">
            Let Prospeda Write Like Bezos For You
          </h2>
          <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
            Prospeda automatically applies customer-obsessed narratives when the situation calls for it.
            Complex proposals, strategic partnerships, enterprise deals.
          </p>
          <a href="https://prospeda.com" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
              Try Prospeda Free
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
