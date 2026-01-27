import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CopyButton } from '@/components/copy-button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chris Voss Tonality | FBI Negotiation for Sales',
  description: 'Write like Chris Voss. Tactical empathy, calibrated questions, labeling emotions. Copy-paste prompts from Never Split the Difference.',
  openGraph: {
    title: 'The Chris Voss Approach to Sales Communication',
    description: 'FBI hostage negotiation techniques adapted for B2B sales. Tactical empathy and calibrated questions.',
  },
};

const prompts = [
  {
    id: 'voss-cold-email',
    title: 'Re-Engagement Email Prompt',
    description: 'Bring cold leads back with Voss techniques',
    prompt: `Write a re-engagement email using Chris Voss negotiation techniques.

Context:
- Contact: [NAME at COMPANY]
- Last interaction: [WHAT HAPPENED / HOW LONG AGO]
- What I'm selling: [YOUR PRODUCT]
- Why they went cold: [YOUR THEORY]

Chris Voss Email Rules:
- Use a no-oriented question in the subject line
- Open with a label ("It seems like..." / "It sounds like...")
- Acknowledge the elephant in the room
- Use "I'm afraid..." softeners
- Ask calibrated "How" or "What" questions
- Give them permission to say no
- Mirror their likely concerns

Subject line options:
- "Have you given up on [project/goal]?"
- "Is [solution type] no longer a priority?"
- "Have I lost you?"

The email should make them feel understood, not chased.`,
  },
  {
    id: 'voss-discovery',
    title: 'Tactical Empathy Discovery Prompt',
    description: 'Uncover real emotional drivers with FBI techniques',
    prompt: `Generate discovery questions using Chris Voss negotiation psychology.

Context:
- Prospect: [NAME, TITLE at COMPANY]
- Industry: [THEIR INDUSTRY]
- What I'm selling: [YOUR PRODUCT]
- Known situation: [WHAT YOU KNOW]

Chris Voss Discovery Techniques:

1. LABELS (statements that identify emotions):
- "It seems like..."
- "It sounds like..."
- "It looks like..."

2. MIRRORS (repeat last 1-3 words as a question):
- Them: "We've been struggling with this for months."
- You: "For months?"

3. CALIBRATED QUESTIONS (How/What questions):
- "How does this affect your team?"
- "What happens if this doesn't get solved?"
- "How would you like me to proceed?"

4. NO-ORIENTED QUESTIONS:
- "Would it be ridiculous to think that..."
- "Is it a bad idea to..."
- "Have you given up on..."

Generate a discovery call script with:
- 3 opening labels
- 5 calibrated questions (How/What)
- 2 no-oriented questions
- Instructions on when to mirror

The goal is to make them feel deeply understood while uncovering their real pain.`,
  },
  {
    id: 'voss-objection',
    title: 'Objection Handling with Labels',
    description: 'Defuse objections using tactical empathy',
    prompt: `Help me respond to this objection using Chris Voss techniques:

Objection: "[THE OBJECTION THEY RAISED]"

Context:
- My product: [WHAT I'M SELLING]
- Their company: [COMPANY NAME]
- Relationship status: [WARM/COLD/NEGOTIATING]

Chris Voss Objection Framework:

1. LABEL THE EMOTION (don't argue):
- "It sounds like you're concerned about..."
- "It seems like [X] is really important to you..."

2. PAUSE (let the label land - count to 4)

3. ASK A CALIBRATED QUESTION:
- "How would you like me to address that?"
- "What would need to change for this to work?"

4. USE STRATEGIC NO:
- "Would it be horrible if we..."
- "Is it a crazy idea to..."

5. ACCUSATION AUDIT (get ahead of negatives):
- "You're probably thinking..."
- "You might feel like..."

Generate a response that:
- Opens with a label
- Includes an accusation audit
- Asks a calibrated question
- Never argues or gets defensive
- Makes them feel heard, not sold`,
  },
  {
    id: 'voss-negotiation',
    title: 'Price Negotiation Prompt',
    description: 'Handle pricing conversations with Voss psychology',
    prompt: `Help me navigate this pricing conversation using Chris Voss techniques.

Context:
- My price: [YOUR PRICE]
- Their budget: [WHAT THEY SAID / YOUR ASSUMPTION]
- What they've said: "[THEIR EXACT WORDS ABOUT PRICE]"
- My flexibility: [WHAT YOU CAN/CAN'T MOVE ON]

Chris Voss Pricing Techniques:

1. THE LATE-NIGHT FM DJ VOICE:
- Slow down. Lower your voice. Be calm.
- Confidence comes from tone, not words.

2. CALIBRATED QUESTIONS:
- "How am I supposed to do that?"
- "What are we trying to accomplish here?"
- "How does this fit with your budget constraints?"

3. THE ACCUSATION AUDIT:
- "You're probably thinking we're too expensive..."
- "I know it seems like a big number..."

4. ANCHORING WITH "NO":
- "Is $[higher price] out of the question?"
- "Would it be impossible to do $[your price]?"

5. NON-ROUND NUMBERS:
- $47,850 feels more calculated than $48,000

Generate:
1. An accusation audit about price
2. 3 calibrated questions to understand their constraints
3. A reframe that focuses on value, not price
4. A "no-oriented" anchor

Never justify. Never defend. Make them explain their constraints.`,
  },
  {
    id: 'voss-linkedin',
    title: 'LinkedIn with No-Oriented Questions',
    description: 'LinkedIn outreach using Voss techniques',
    prompt: `Write a LinkedIn message using Chris Voss techniques.

Context:
- Target: [NAME, TITLE at COMPANY]
- Why I'm reaching out: [SPECIFIC REASON]
- What I offer: [MY VALUE PROP]

Chris Voss LinkedIn Rules:
- Use a no-oriented question
- Open with a label or mirror
- Keep it very short (under 40 words)
- Make it easy to say no (which paradoxically gets more yeses)
- No pitch - just open a conversation

Examples of no-oriented openers:
- "Would it be ridiculous to think..."
- "Is it a bad idea to ask about..."
- "Have you completely ruled out..."

The message should feel like you're giving them an easy out, which makes them more likely to engage.`,
  },
];

const relatedTonalities = [
  { slug: 'steve-jobs', name: 'Steve Jobs', tagline: 'Brutally Direct' },
  { slug: 'jeff-bezos', name: 'Jeff Bezos', tagline: 'Customer Obsessed' },
  { slug: 'hemingway', name: 'Hemingway', tagline: 'Radically Brief' },
  { slug: 'cormac-mccarthy', name: 'Cormac McCarthy', tagline: 'Sparse & Powerful' },
];

export default function ChrisVossPage() {
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
          <span className="text-foreground">Chris Voss</span>
        </div>

        {/* Hero */}
        <div className="mb-12">
          <Badge variant="outline" className="mb-4 border-blue-500/30 text-blue-400">
            Tonality
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tactical Empathy
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            The Chris Voss approach: FBI negotiation techniques adapted for B2B sales.
          </p>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-zinc-400">
            "Have you given up on this project?"
            <cite className="block text-sm mt-2 not-italic">— Subject line with 80%+ response rate</cite>
          </blockquote>
        </div>

        {/* Philosophy */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">The Philosophy</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground">
              Chris Voss spent 24 years as an FBI hostage negotiator before teaching these techniques to
              salespeople. His approach from "Never Split the Difference" is built on tactical empathy -
              understanding someone's perspective without necessarily agreeing with it.
            </p>
            <p className="text-muted-foreground mt-4">
              The key insight: people need to feel understood before they'll listen. Labels, mirrors,
              and calibrated questions make prospects feel heard. No-oriented questions ("Have you given up...")
              give them permission to say no, which paradoxically makes them more likely to say yes.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-3">Key Techniques</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <strong>Labels:</strong> "It seems like..." / "It sounds like..."
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <strong>Calibrated Questions:</strong> "How" and "What" questions that can't be answered with yes/no
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <strong>No-Oriented Questions:</strong> "Have you given up on..." / "Is it ridiculous to think..."
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <strong>Mirroring:</strong> Repeat the last 1-3 words as a question
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <strong>Accusation Audit:</strong> Get ahead of negatives they might be thinking
              </li>
            </ul>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <h4 className="font-semibold text-green-400 mb-2">When to Use</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Negotiating price or terms</li>
                <li>• Handling objections</li>
                <li>• Re-engaging cold leads</li>
                <li>• Discovery calls</li>
                <li>• Guarded or skeptical prospects</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
              <h4 className="font-semibold text-red-400 mb-2">When NOT to Use</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Simple transactional requests</li>
                <li>• When you need to be direct/urgent</li>
                <li>• Technical product discussions</li>
                <li>• When overused (feels manipulative)</li>
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
              <h4 className="font-semibold text-red-400 mb-2 text-sm">Before (Generic Follow-up)</h4>
              <p className="text-sm text-muted-foreground">
                Subject: Following up<br/><br/>
                "Hi Sarah, just wanted to follow up on my last email. Did you have a chance to review our proposal?
                Let me know if you have any questions. Looking forward to hearing from you!"
              </p>
            </div>
            <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
              <h4 className="font-semibold text-green-400 mb-2 text-sm">After (Voss Style)</h4>
              <p className="text-sm text-muted-foreground">
                Subject: Have you given up on this?<br/><br/>
                "Sarah - It seems like the timing might not be right for this project.
                I'm afraid I may have missed something important about your situation.
                What would need to change for this to make sense?"
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
            Let Prospeda Negotiate For You
          </h2>
          <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
            Prospeda automatically applies Chris Voss techniques when re-engaging cold leads,
            handling objections, or navigating price conversations.
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
