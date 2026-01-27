import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CopyButton } from '@/components/copy-button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Steve Jobs Tonality | Brutally Direct Sales Writing',
  description: 'Write like Steve Jobs. Brutally direct, product-obsessed, emotionally intense. Copy-paste prompts for cold emails, discovery calls, and objection handling.',
  openGraph: {
    title: 'The Steve Jobs Approach to Sales Communication',
    description: 'Brutally direct, product-obsessed, emotionally intense. Based on internal Apple emails revealed through litigation.',
  },
};

const prompts = [
  {
    id: 'jobs-cold-email',
    title: 'Cold Email Prompt',
    description: 'Write a cold email with Steve Jobs directness',
    prompt: `Write a cold email in the Steve Jobs style.

Context:
- Recipient: [NAME, TITLE at COMPANY]
- Their situation: [WHAT YOU KNOW ABOUT THEM]
- My product: [WHAT I'M SELLING]
- Key differentiator: [WHAT MAKES IT SPECIAL]

Steve Jobs Rules:
- Short, declarative sentences. One idea per sentence.
- No corporate jargon. No filler words. No "I hope this finds you well."
- High emotional intensity - passion, urgency, even frustration if warranted
- Product as the hero. Let the work speak.
- Be willing to challenge their current approach directly
- Create urgency through vision, not artificial deadlines
- Subject line: 5 words max, no clickbait, states the point

The email should feel like it was written by someone who genuinely believes their product is better and respects the recipient enough to be direct about it.`,
  },
  {
    id: 'jobs-discovery',
    title: 'Discovery Call Prompt',
    description: 'Run a discovery call with Jobs-level directness',
    prompt: `Generate discovery call questions in the Steve Jobs style.

Context:
- Prospect: [COMPANY NAME]
- Their role: [TITLE]
- What they currently use: [COMPETITOR/CURRENT SOLUTION]
- My product: [WHAT I'M SELLING]

Steve Jobs Discovery Rules:
- Cut through politeness to get to truth
- Ask questions that challenge their assumptions
- Don't accept vague answers - push for specifics
- Be passionate about understanding their real problems
- Show genuine curiosity, not scripted interest
- Call out elephants in the room directly

Generate 8 questions that:
1. Challenge their status quo ("Why are you still using...")
2. Quantify the pain ("What does that cost you in...")
3. Expose the gap between where they are and where they could be
4. Are short and direct (no compound questions)`,
  },
  {
    id: 'jobs-objection',
    title: 'Objection Handling Prompt',
    description: 'Handle objections with Jobs-level conviction',
    prompt: `Help me respond to this objection using Steve Jobs directness:

Objection: "[THE OBJECTION THEY RAISED]"

Context:
- My product: [WHAT I'M SELLING]
- Their company: [COMPANY NAME]
- Why they're wrong: [THE TRUTH ABOUT THIS OBJECTION]

Steve Jobs Objection Rules:
- Don't apologize or be defensive
- Reframe the conversation around what matters
- Use asymmetry of conviction - you believe more than they doubt
- Short sentences. No hedging. No "I understand, but..."
- If they're wrong, tell them they're wrong (respectfully)
- Bring it back to the product and what it does
- Create a reality distortion field around your vision

The response should make them question their objection, not make me question my product.`,
  },
  {
    id: 'jobs-linkedin',
    title: 'LinkedIn Message Prompt',
    description: 'LinkedIn connection request with Jobs brevity',
    prompt: `Write a LinkedIn connection request in Steve Jobs style.

Context:
- Target: [NAME, TITLE at COMPANY]
- Why I'm reaching out: [SPECIFIC REASON]
- What I offer: [MY VALUE PROP]

Steve Jobs LinkedIn Rules:
- Under 50 words. Every word earns its place.
- No "I'd love to connect" - state what you want
- One clear reason to connect
- No flattery that isn't earned
- Direct about your intent
- Make them curious, not comfortable

The message should feel like it's from someone important who respects their time.`,
  },
];

const relatedTonalities = [
  { slug: 'jeff-bezos', name: 'Jeff Bezos', tagline: 'Customer Obsessed' },
  { slug: 'chris-voss', name: 'Chris Voss', tagline: 'Tactical Empathy' },
  { slug: 'hemingway', name: 'Hemingway', tagline: 'Radically Brief' },
  { slug: 'cormac-mccarthy', name: 'Cormac McCarthy', tagline: 'Sparse & Powerful' },
];

export default function SteveJobsPage() {
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
          <span className="text-foreground">Steve Jobs</span>
        </div>

        {/* Hero */}
        <div className="mb-12">
          <Badge variant="outline" className="mb-4 border-zinc-500/30 text-zinc-400">
            Tonality
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Brutally Direct
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            The Steve Jobs approach: Product-obsessed, emotionally intense, no corporate jargon.
          </p>
          <blockquote className="border-l-4 border-zinc-500 pl-4 italic text-zinc-400">
            "I'm sure you realize the asymmetry in the financial resources of our respective companies when you say: 'We will both just end up paying a lot of lawyers a lot of money.'"
            <cite className="block text-sm mt-2 not-italic">— Steve Jobs to Palm CEO</cite>
          </blockquote>
        </div>

        {/* Philosophy */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">The Philosophy</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground">
              The Steve Jobs tonality is based on internal Apple emails revealed through litigation.
              It's characterized by an almost uncomfortable level of directness - the kind that comes
              from someone who genuinely believes their product is better and respects you enough
              to tell you the truth.
            </p>
            <p className="text-muted-foreground mt-4">
              Jobs didn't use filler. He didn't soften. He stated facts, created urgency through
              vision, and let the product speak. When he needed leverage, he used it openly.
              When he believed something, he said it with conviction that made you question your doubts.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-3">Key Characteristics</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                Short, declarative sentences. One idea per sentence.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                No corporate jargon or filler words.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                High emotional intensity - passion, urgency, even frustration.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                Product as the hero. Let the work speak.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400">•</span>
                Willing to use power asymmetry as leverage.
              </li>
            </ul>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <h4 className="font-semibold text-green-400 mb-2">When to Use</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• High-stakes deals needing urgency</li>
                <li>• Cutting through bureaucracy</li>
                <li>• Premium product positioning</li>
                <li>• Product-focused technical buyers</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
              <h4 className="font-semibold text-red-400 mb-2">When NOT to Use</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Early relationship building</li>
                <li>• Consensus-driven organizations</li>
                <li>• When you lack product superiority</li>
                <li>• Risk-averse regulated industries</li>
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
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
              <h4 className="font-semibold text-red-400 mb-2 text-sm">Before (Generic)</h4>
              <p className="text-sm text-muted-foreground">
                "Hi John, I hope this email finds you well! I wanted to reach out because I noticed
                your company might be interested in solutions that could potentially help streamline
                your workflow processes. Would you be open to a quick call to discuss?"
              </p>
            </div>
            <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
              <h4 className="font-semibold text-green-400 mb-2 text-sm">After (Jobs Style)</h4>
              <p className="text-sm text-muted-foreground">
                "John - Your engineering team is wasting 20 hours a week on deployment.
                I can show you how Acme ships 10x faster with half the ops burden.
                15 minutes. Thursday?"
              </p>
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
            Let Prospeda Write Like Jobs For You
          </h2>
          <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
            Prospeda automatically applies the Steve Jobs tonality when the situation calls for it.
            Premium positioning, cutting through bureaucracy, high-stakes deals.
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
