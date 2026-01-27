import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CopyButton } from '@/components/copy-button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hemingway Tonality | Radically Brief Sales Writing',
  description: 'Write like Hemingway. Short sentences. Strong verbs. No adverbs. Copy-paste prompts for clear, confident sales communication.',
  openGraph: {
    title: 'The Hemingway Approach to Sales Communication',
    description: 'Radically brief, clear, confident. The Iceberg Theory applied to B2B sales.',
  },
};

const prompts = [
  {
    id: 'hemingway-cold-email',
    title: 'Cold Email Prompt',
    description: 'Write a cold email with Hemingway brevity',
    prompt: `Write a cold email in the Hemingway style.

Context:
- Recipient: [NAME, TITLE at COMPANY]
- Their situation: [WHAT YOU KNOW ABOUT THEM]
- My product: [WHAT I'M SELLING]
- Key benefit: [ONE MAIN VALUE PROP]

Hemingway Rules:
- Short sentences. One idea per sentence.
- Strong verbs. No adverbs. ("He ran" not "He ran quickly")
- Show, don't tell. Facts over adjectives.
- The Iceberg Theory: 90% is below the surface. Don't explain everything.
- Extreme confidence through simplicity.
- No hedge words (might, could, perhaps, just)
- No filler (I wanted to reach out, I hope this finds you well)

Word limits:
- Subject: 4 words max
- Email body: Under 50 words
- One clear CTA

The brevity itself signals confidence. If your product was weak, you'd need more words to sell it.`,
  },
  {
    id: 'hemingway-discovery',
    title: 'Discovery Questions Prompt',
    description: 'Ask questions with Hemingway directness',
    prompt: `Generate discovery questions in the Hemingway style.

Context:
- Prospect: [NAME, TITLE at COMPANY]
- Industry: [THEIR INDUSTRY]
- What I'm selling: [YOUR PRODUCT]
- What I need to learn: [KEY UNKNOWNS]

Hemingway Question Rules:
- One question at a time. Never compound questions.
- Short questions get longer answers.
- Use silence after asking. Don't fill the space.
- Ask about facts, not feelings. ("What happened?" not "How did that make you feel?")
- Direct is respectful. Vagueness wastes their time.

Generate 10 questions that:
- Are under 10 words each
- Start with What, When, Who, How much, or How many
- Can't be answered with yes/no
- Get to the core of their problem

Example:
- Bad: "Can you tell me a little bit about your current process and how you feel about it?"
- Good: "Walk me through your current process."`,
  },
  {
    id: 'hemingway-objection',
    title: 'Objection Handling Prompt',
    description: 'Handle objections with confident brevity',
    prompt: `Help me respond to this objection in Hemingway style:

Objection: "[THE OBJECTION THEY RAISED]"

Context:
- My product: [WHAT I'M SELLING]
- Their company: [COMPANY NAME]
- The truth: [WHY THIS OBJECTION DOESN'T HOLD]

Hemingway Objection Rules:
- Acknowledge in one sentence max
- State the counter-fact directly
- Provide one piece of evidence
- End with forward motion
- Total response: Under 40 words

Structure:
1. [One sentence acknowledgment]
2. [The counter-truth]
3. [One proof point]
4. [Next step]

Do not:
- Over-explain
- Apologize
- Hedge with "I understand, but..."
- Use multiple examples (one strong one beats three weak ones)

Confidence comes from brevity. If you believed your response, you wouldn't need many words.`,
  },
  {
    id: 'hemingway-linkedin',
    title: 'LinkedIn Message Prompt',
    description: 'LinkedIn outreach with Hemingway economy',
    prompt: `Write a LinkedIn message in the Hemingway style.

Context:
- Target: [NAME, TITLE at COMPANY]
- Why I'm reaching out: [SPECIFIC REASON]
- What I offer: [MY VALUE PROP]

Hemingway LinkedIn Rules:
- Under 25 words total
- No greeting beyond their name
- One sentence about them
- One sentence about why
- Period at the end, not a question mark
- No "I'd love to connect" or "Hope you're well"

The message should look like it was written by someone who doesn't have time for pleasantries because they're too busy doing important work.

Example:
"Sarah - Saw your post on pipeline efficiency. We helped Acme cut their sales cycle by 40%. Worth a conversation."`,
  },
  {
    id: 'hemingway-proposal',
    title: 'Proposal Summary Prompt',
    description: 'Write a proposal executive summary with Hemingway clarity',
    prompt: `Write an executive summary in Hemingway style.

Context:
- Prospect: [COMPANY NAME]
- Their problem: [THE CORE ISSUE]
- My solution: [WHAT I'M PROPOSING]
- Key outcome: [MAIN RESULT THEY'LL GET]
- Investment: [PRICE/COMMITMENT]

Hemingway Executive Summary Rules:
- Open with their situation in one sentence
- State the problem in one sentence
- State the solution in one sentence
- State the outcome in one sentence
- State the investment in one sentence
- Total: 5 sentences, under 100 words

No:
- Background or context
- Company history
- Feature lists
- Superlatives (best, leading, innovative)
- Hedge language

Write like you're carving words into stone. Every word costs something.`,
  },
];

const relatedTonalities = [
  { slug: 'steve-jobs', name: 'Steve Jobs', tagline: 'Brutally Direct' },
  { slug: 'jeff-bezos', name: 'Jeff Bezos', tagline: 'Customer Obsessed' },
  { slug: 'chris-voss', name: 'Chris Voss', tagline: 'Tactical Empathy' },
  { slug: 'cormac-mccarthy', name: 'Cormac McCarthy', tagline: 'Sparse & Powerful' },
];

export default function HemingwayPage() {
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
          <span className="text-foreground">Hemingway</span>
        </div>

        {/* Hero */}
        <div className="mb-12">
          <Badge variant="outline" className="mb-4 border-green-500/30 text-green-400">
            Tonality
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Radically Brief
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            The Hemingway approach: Short sentences. Strong verbs. Show, don't tell.
          </p>
          <blockquote className="border-l-4 border-green-500 pl-4 italic text-zinc-400">
            "Our software simplifies your workflow. Your team will be more productive."
            <cite className="block text-sm mt-2 not-italic">— Two sentences. Twelve words. Done.</cite>
          </blockquote>
        </div>

        {/* Philosophy */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">The Philosophy</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground">
              Ernest Hemingway won the Nobel Prize with prose so spare it changed literature.
              His "Iceberg Theory" says 90% stays below the surface. You don't explain.
              You show. Readers (and prospects) are smart enough to fill in the gaps.
            </p>
            <p className="text-muted-foreground mt-4">
              In sales, this translates to extreme confidence. When you use fewer words,
              you signal that your product doesn't need elaborate explanation. Technical
              buyers and busy executives respond to this. They're drowning in noise.
              Brevity is a gift.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-3">Key Principles</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-green-400">•</span>
                Short, declarative sentences. One idea per sentence.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">•</span>
                Strong, simple verbs. No adverbs.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">•</span>
                Show, don't tell. Facts over adjectives.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">•</span>
                The Iceberg Theory: 90% below the surface.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">•</span>
                Extreme confidence through simplicity.
              </li>
            </ul>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <h4 className="font-semibold text-green-400 mb-2">When to Use</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Technical audiences (engineers, devs)</li>
                <li>• Busy C-level executives</li>
                <li>• Cutting through complexity</li>
                <li>• Premium/confident positioning</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
              <h4 className="font-semibold text-red-400 mb-2">When NOT to Use</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Complex enterprise proposals</li>
                <li>• When rapport-building matters</li>
                <li>• Highly regulated industries</li>
                <li>• When details are legally required</li>
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
          <h2 className="text-2xl font-bold mb-6">Before & After</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
              <h4 className="font-semibold text-red-400 mb-2 text-sm">Before (Bloated)</h4>
              <p className="text-sm text-muted-foreground">
                "We will quickly and efficiently streamline your inefficient workflow processes,
                enabling your team to be significantly more productive and allowing them to focus
                on what really matters most to your business objectives and strategic goals."
              </p>
              <p className="text-xs text-zinc-500 mt-2">41 words</p>
            </div>
            <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
              <h4 className="font-semibold text-green-400 mb-2 text-sm">After (Hemingway)</h4>
              <p className="text-sm text-muted-foreground">
                "Our software simplifies your workflow. Your team will be more productive."
              </p>
              <p className="text-xs text-zinc-500 mt-2">12 words</p>
            </div>
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
            Let Prospeda Write Like Hemingway
          </h2>
          <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
            Prospeda cuts the fluff automatically. Technical founders, busy executives,
            no-nonsense buyers - they get messages that respect their time.
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
