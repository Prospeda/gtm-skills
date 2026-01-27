import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CopyButton } from '@/components/copy-button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cormac McCarthy Tonality | Powerful, Visceral Sales Writing',
  description: 'Write like Cormac McCarthy. Sparse punctuation, biblical cadence, stark imagery. Copy-paste prompts for transformational deals.',
  openGraph: {
    title: 'The Cormac McCarthy Approach to Sales Communication',
    description: 'Sparse, powerful, poetic. Biblical cadence and stark imagery for unforgettable sales messaging.',
  },
};

const prompts = [
  {
    id: 'mccarthy-cold-email',
    title: 'Cold Email Prompt',
    description: 'Write a cold email with McCarthy gravitas',
    prompt: `Write a cold email in the Cormac McCarthy style.

Context:
- Recipient: [NAME, TITLE at COMPANY]
- Their market situation: [WHAT'S HAPPENING IN THEIR INDUSTRY]
- The transformation I offer: [WHAT CHANGES WITH MY PRODUCT]
- Why now matters: [THE URGENCY]

Cormac McCarthy Rules:
- Sparse punctuation. No quotation marks. Minimal commas.
- Polysyndeton: Use "and" to connect long clauses (builds rhythm)
- Stark, concrete imagery: blood, bone, steel, data, capital, dust
- Biblical rhythm and cadence
- Frame as inevitable truth, not opinion
- Present tense for immediacy
- No corporate jargon - only elemental words

Tone: Prophetic. Like you're describing something that has already happened in the future.

The email should feel like it was carved in stone. Like the words themselves carry weight.
It should make them stop scrolling. Make them feel something.

This is for high-stakes, transformational positioning. Not everyday outreach.`,
  },
  {
    id: 'mccarthy-market-shift',
    title: 'Market Disruption Narrative',
    description: 'Frame market change with McCarthy inevitability',
    prompt: `Write a market disruption narrative in the Cormac McCarthy style.

Context:
- The old way: [HOW THINGS USED TO BE DONE]
- What changed: [THE DISRUPTION/SHIFT]
- The new reality: [HOW THINGS WORK NOW]
- Those who adapted: [SUCCESS EXAMPLES]
- Those who didn't: [FAILURE EXAMPLES]
- Where my product fits: [YOUR ROLE IN THIS]

Cormac McCarthy Market Narrative Rules:
- The old way is dead. State it as fact.
- Use "And" at the start of sentences for biblical cadence
- Concrete imagery: maps that no longer match the territory, gates, darkness, light
- The competitors are not "competition" - they are at the gates
- Frame your product as the inevitable choice, not a sales pitch
- No hedge words. No "might" or "could" or "potentially"

Structure:
1. The world that was (past tense, brief)
2. The turn (present tense, the moment of change)
3. The new landscape (present tense, stark description)
4. The choice (what they must decide)

This is for visionary founders and CEOs who respond to big-picture thinking.`,
  },
  {
    id: 'mccarthy-objection',
    title: 'Objection Response Prompt',
    description: 'Handle objections with McCarthy weight',
    prompt: `Help me respond to this objection in Cormac McCarthy style:

Objection: "[THE OBJECTION THEY RAISED]"

Context:
- My product: [WHAT I'M SELLING]
- Their company: [COMPANY NAME]
- The deeper truth: [WHAT THEY'RE REALLY AFRAID OF]

Cormac McCarthy Objection Rules:
- Don't argue with the objection. Transcend it.
- Name the fear underneath the objection
- Use elemental language: time, change, survival, choice
- Frame the decision as inevitable, not optional
- Short paragraphs. Let silence do the work.
- No defense. No apology. Only truth.

The response should make the objection feel small compared to the larger forces at play.
It should reframe the conversation from "should we buy" to "can we afford not to."

Use sparingly. This is for high-stakes moments with visionary buyers.`,
  },
  {
    id: 'mccarthy-vision',
    title: 'Vision Statement Prompt',
    description: 'Articulate a vision with McCarthy power',
    prompt: `Write a vision statement in the Cormac McCarthy style.

Context:
- Company/Product: [YOUR COMPANY OR PRODUCT]
- The problem you're solving: [THE CORE ISSUE]
- The world you're building: [THE VISION]
- Who benefits: [YOUR CUSTOMERS]
- What you believe: [YOUR CORE CONVICTION]

Cormac McCarthy Vision Rules:
- No mission statement language. No "leverage" or "synergy" or "empower"
- Elemental words only: build, break, rise, fall, forge, hold
- Biblical structure: And... And... And...
- The vision is not aspirational - state it as if it's already true
- Stark imagery of before and after
- No "we believe" - just state the truth
- End with an image, not a statement

The vision should feel like prophecy. Like you're describing something you've already seen.

This is for company founding documents, major fundraising, or transformational positioning.`,
  },
  {
    id: 'mccarthy-linkedin',
    title: 'LinkedIn Post Prompt',
    description: 'Write a LinkedIn post with McCarthy weight',
    prompt: `Write a LinkedIn post in the Cormac McCarthy style.

Context:
- Topic: [WHAT YOU WANT TO SAY]
- Your experience: [RELEVANT BACKGROUND]
- The insight: [THE CORE TRUTH]
- Who should care: [YOUR AUDIENCE]

Cormac McCarthy LinkedIn Rules:
- No hashtags. No emojis. No "Agree?" at the end.
- Short paragraphs. One sentence each is fine.
- Polysyndeton for rhythm (And... And... And...)
- Concrete imagery from your industry
- Frame observations as eternal truths, not hot takes
- No calls to action. The post itself is the action.

The post should stand alone. It should feel like it could have been written a hundred years ago
and will still be true a hundred years from now.

This style works best for posts about:
- Industry shifts and change
- Hard truths about your field
- Moments of clarity or insight
- The nature of work, building, or selling`,
  },
];

const relatedTonalities = [
  { slug: 'steve-jobs', name: 'Steve Jobs', tagline: 'Brutally Direct' },
  { slug: 'jeff-bezos', name: 'Jeff Bezos', tagline: 'Customer Obsessed' },
  { slug: 'chris-voss', name: 'Chris Voss', tagline: 'Tactical Empathy' },
  { slug: 'hemingway', name: 'Hemingway', tagline: 'Radically Brief' },
];

export default function CormacMcCarthyPage() {
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
          <span className="text-foreground">Cormac McCarthy</span>
        </div>

        {/* Hero */}
        <div className="mb-12">
          <Badge variant="outline" className="mb-4 border-red-500/30 text-red-400">
            Tonality
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sparse & Powerful
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            The Cormac McCarthy approach: Biblical cadence, stark imagery, inevitable truth.
          </p>
          <blockquote className="border-l-4 border-red-500 pl-4 text-zinc-400">
            <p className="italic">
              And the market had turned. And the old ways were no longer true. The maps they had were maps
              of a world that was gone and the competitors were at the gates and there was a darkness on the horizon.
            </p>
          </blockquote>
        </div>

        {/* Philosophy */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">The Philosophy</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground">
              Cormac McCarthy wrote novels that feel like the Old Testament set in the American West.
              No quotation marks. Minimal punctuation. Sentences connected by "and" that build like waves.
              His prose doesn't argue or persuade - it states truth with such weight that argument feels pointless.
            </p>
            <p className="text-muted-foreground mt-4">
              In sales, this style is nuclear. Use it rarely. When you need to be remembered. When the deal
              is transformational. When you're speaking to a visionary CEO who thinks in decades, not quarters.
              This tonality frames your product not as a purchase decision, but as an inevitable force.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-3">Key Characteristics</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span>
                Sparse punctuation. No quotation marks. Minimal commas.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span>
                Polysyndeton: "And... and... and..." builds biblical rhythm
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span>
                Stark, concrete imagery: blood, bone, steel, data, capital
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span>
                Biblical cadence and prophetic tone
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span>
                Framing as inevitable truth, not opinion or pitch
              </li>
            </ul>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <h4 className="font-semibold text-green-400 mb-2">When to Use</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• High-stakes transformational deals</li>
                <li>• Market disruption narratives</li>
                <li>• Visionary founders/CEOs</li>
                <li>• When you need to be remembered</li>
                <li>• Company vision statements</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
              <h4 className="font-semibold text-red-400 mb-2">When NOT to Use</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Everyday sales communication</li>
                <li>• Technical product discussions</li>
                <li>• Risk-averse or conservative buyers</li>
                <li>• When clarity trumps style</li>
                <li>• Frequently (loses power if overused)</li>
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
          <div className="p-6 rounded-lg bg-zinc-900 border border-zinc-800">
            <h4 className="font-semibold text-red-400 mb-4 text-sm">Market Shift Narrative (McCarthy Style)</h4>
            <div className="text-zinc-300 leading-relaxed space-y-4">
              <p>
                There was a time when sales teams built pipeline with volume. More calls. More emails. More bodies.
                And the metrics looked good on dashboards and the quotas were met and no one asked what happened
                to the leads that went dark.
              </p>
              <p>
                That time has passed.
              </p>
              <p>
                And now the buyers have grown wise and the inboxes overflow and the connect rates fall like winter light.
                And the companies that still play the volume game find themselves shouting into a void where no one listens
                and no one responds and the pipeline that once flowed runs dry.
              </p>
              <p>
                The tools have changed. The game has changed. And those who do not change with it will find themselves
                holding maps of a world that no longer exists.
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
            Let Prospeda Find the Right Words
          </h2>
          <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
            Prospeda knows when to deploy McCarthy's prophetic weight and when simpler is better.
            The AI matches the message to the moment.
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
