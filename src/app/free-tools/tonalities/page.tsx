import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GTM Tonalities | Write Like Jobs, Bezos, Voss & More',
  description: '5 battle-tested writing styles for sales. Steve Jobs, Jeff Bezos, Chris Voss, Hemingway & Cormac McCarthy approaches with copy-paste prompts.',
};

const tonalities = [
  {
    slug: 'steve-jobs',
    name: 'Steve Jobs',
    tagline: 'Brutally Direct',
    description: 'Product-obsessed, emotionally intense. Short declarative sentences. No corporate jargon.',
    color: 'from-zinc-500 to-zinc-700',
    quote: '"I\'m sure you realize the asymmetry in the financial resources of our respective companies..."',
  },
  {
    slug: 'jeff-bezos',
    name: 'Jeff Bezos',
    tagline: 'Customer Obsessed',
    description: 'Data-driven narratives, the six-pager philosophy. Working backwards from the customer.',
    color: 'from-orange-500 to-yellow-500',
    quote: 'The famous "?" email that triggers deep-dive investigations.',
  },
  {
    slug: 'chris-voss',
    name: 'Chris Voss',
    tagline: 'Tactical Empathy',
    description: 'FBI negotiation techniques. Calibrated questions, labeling emotions, no-oriented questions.',
    color: 'from-blue-500 to-cyan-500',
    quote: '"Have you given up on this project?" - 80%+ response rate.',
  },
  {
    slug: 'hemingway',
    name: 'Hemingway',
    tagline: 'Radically Brief',
    description: 'Short sentences. Strong verbs. Show, don\'t tell. The Iceberg Theory.',
    color: 'from-green-500 to-emerald-500',
    quote: '"Our software simplifies your workflow. Your team will be more productive."',
  },
  {
    slug: 'cormac-mccarthy',
    name: 'Cormac McCarthy',
    tagline: 'Sparse & Powerful',
    description: 'Biblical cadence, stark imagery. Framing as inevitable truth, not opinion.',
    color: 'from-red-500 to-rose-500',
    quote: '"And the market had turned. And the old ways were no longer true..."',
  },
];

const situationTable = [
  { situation: 'Cold outreach to technical founder', tonality: 'Hemingway or Steve Jobs' },
  { situation: 'Complex enterprise proposal', tonality: 'Jeff Bezos' },
  { situation: 'Negotiating final terms', tonality: 'Chris Voss' },
  { situation: 'Re-engaging a cold lead', tonality: 'Chris Voss' },
  { situation: 'Transformational deal with visionary CEO', tonality: 'Cormac McCarthy' },
  { situation: 'Premium product positioning', tonality: 'Steve Jobs' },
  { situation: 'Handling objections', tonality: 'Chris Voss' },
  { situation: 'Cutting through bureaucracy', tonality: 'Steve Jobs or Hemingway' },
];

export default function TonalitiesPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/free-tools" className="hover:text-foreground transition-colors">
            Free Tools
          </Link>
          <span>/</span>
          <span className="text-foreground">Tonalities</span>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-orange-500/30 text-orange-400">
            5 Writing Styles
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Write Like the Masters
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Battle-tested communication styles from legends who changed how we sell.
            Copy the prompt, paste into Claude, transform your writing.
          </p>
        </div>

        {/* Tonality Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {tonalities.map((tonality) => (
            <Link
              key={tonality.slug}
              href={`/free-tools/tonalities/${tonality.slug}`}
              className="group relative p-6 rounded-xl border border-border bg-card hover:border-orange-500/50 transition-all overflow-hidden"
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tonality.color}`} />

              <div className="mb-4">
                <h2 className="text-xl font-bold text-foreground group-hover:text-orange-400 transition-colors">
                  {tonality.name}
                </h2>
                <p className="text-sm text-orange-400">{tonality.tagline}</p>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                {tonality.description}
              </p>

              <p className="text-xs text-zinc-500 italic mb-4 line-clamp-2">
                {tonality.quote}
              </p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-orange-400 transition-colors">
                <span>View prompts</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* When to Use Which */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">When to Use Which</h2>
          <div className="max-w-3xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Situation</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Recommended Tonality</th>
                </tr>
              </thead>
              <tbody>
                {situationTable.map((row, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-3 px-4 text-sm">{row.situation}</td>
                    <td className="py-3 px-4 text-sm text-orange-400">{row.tonality}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-8 rounded-xl bg-zinc-900">
          <h2 className="text-2xl font-bold text-white mb-4">
            Want AI That Writes in These Tonalities?
          </h2>
          <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
            Prospeda automatically applies the right tonality for each situation.
            Cold email to a founder? It uses Hemingway. Negotiating terms? Chris Voss.
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
