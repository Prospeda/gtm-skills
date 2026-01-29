import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Building2,
  Users,
  BookOpen,
  Workflow,
  Search,
} from 'lucide-react';
import type { Metadata } from 'next';
import { industries, roles, methodologies, workflows } from '@/data/pseo';

export const metadata: Metadata = {
  title: 'Browse All Prompts | 2,500+ GTM Prompts | GTM Skills',
  description: 'Browse 2,500+ sales and marketing prompts organized by industry, role, methodology, and workflow. Find the perfect prompt for any GTM scenario.',
  keywords: 'sales prompts, marketing prompts, cold email templates, discovery questions, meddpicc questions, spin selling questions, sdr prompts, ae prompts',
};

export default function PromptsIndexPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-orange-500/30 text-orange-400">
            <Search className="h-3 w-3 mr-1" />
            2,500+ Prompts
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Find the Perfect Prompt
          </h1>
          <p className="text-lg text-muted-foreground">
            Browse prompts by industry, role, methodology, or workflow.
            Every combination has tailored templates ready to copy.
          </p>
        </div>

        {/* Industry × Role Grid */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="h-6 w-6 text-blue-400" />
            <h2 className="text-2xl font-bold">By Industry + Role</h2>
            <Badge variant="secondary">{industries.length * roles.length} pages</Badge>
          </div>
          <p className="text-muted-foreground mb-6">
            Prompts tailored for specific roles selling into specific industries.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Industry</th>
                  {roles.map((role) => (
                    <th key={role.slug} className="text-center py-3 px-2 font-medium text-muted-foreground">
                      {role.shortName}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {industries.map((industry) => (
                  <tr key={industry.slug} className="border-b border-border/50 hover:bg-zinc-900/30">
                    <td className="py-3 px-4 font-medium">{industry.shortName}</td>
                    {roles.map((role) => (
                      <td key={role.slug} className="text-center py-3 px-2">
                        <Link
                          href={`/prompts/${industry.slug}/${role.slug}`}
                          className="inline-flex items-center justify-center w-8 h-8 rounded bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-colors"
                        >
                          →
                        </Link>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Industry × Methodology Grid */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-6 w-6 text-green-400" />
            <h2 className="text-2xl font-bold">By Industry + Methodology</h2>
            <Badge variant="secondary">{industries.length * methodologies.length} pages</Badge>
          </div>
          <p className="text-muted-foreground mb-6">
            Apply proven sales methodologies to specific industries.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Industry</th>
                  {methodologies.map((method) => (
                    <th key={method.slug} className="text-center py-3 px-2 font-medium text-muted-foreground">
                      {method.shortName}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {industries.map((industry) => (
                  <tr key={industry.slug} className="border-b border-border/50 hover:bg-zinc-900/30">
                    <td className="py-3 px-4 font-medium">{industry.shortName}</td>
                    {methodologies.map((method) => (
                      <td key={method.slug} className="text-center py-3 px-2">
                        <Link
                          href={`/prompts/${industry.slug}/${method.slug}`}
                          className="inline-flex items-center justify-center w-8 h-8 rounded bg-green-500/10 hover:bg-green-500/20 text-green-400 transition-colors"
                        >
                          →
                        </Link>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Role × Workflow Grid */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Workflow className="h-6 w-6 text-purple-400" />
            <h2 className="text-2xl font-bold">By Role + Workflow</h2>
            <Badge variant="secondary">{roles.length * workflows.length} pages</Badge>
          </div>
          <p className="text-muted-foreground mb-6">
            Workflow-specific prompts for each sales role.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">Role</th>
                  {workflows.map((workflow) => (
                    <th key={workflow.slug} className="text-center py-3 px-2 font-medium text-muted-foreground">
                      {workflow.shortName}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {roles.map((role) => (
                  <tr key={role.slug} className="border-b border-border/50 hover:bg-zinc-900/30">
                    <td className="py-3 px-4 font-medium">{role.shortName}</td>
                    {workflows.map((workflow) => (
                      <td key={workflow.slug} className="text-center py-3 px-2">
                        <Link
                          href={`/prompts/${role.slug}/${workflow.slug}`}
                          className="inline-flex items-center justify-center w-8 h-8 rounded bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 transition-colors"
                        >
                          →
                        </Link>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-16 p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400">{industries.length * roles.length}</div>
              <div className="text-sm text-muted-foreground">Industry + Role Pages</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400">{industries.length * methodologies.length}</div>
              <div className="text-sm text-muted-foreground">Industry + Method Pages</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">{roles.length * workflows.length}</div>
              <div className="text-sm text-muted-foreground">Role + Workflow Pages</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400">
                {(industries.length * roles.length) + (industries.length * methodologies.length) + (roles.length * workflows.length)}
              </div>
              <div className="text-sm text-muted-foreground">Total Prompt Pages</div>
            </div>
          </div>
        </section>

        {/* Popular Combinations */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Popular Combinations</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { href: '/prompts/saas/sdr', label: 'SaaS SDR Prompts', desc: 'Cold outreach for software sales' },
              { href: '/prompts/saas/meddpicc', label: 'MEDDPICC for SaaS', desc: 'Enterprise qualification' },
              { href: '/prompts/sdr/cold-outreach', label: 'SDR Cold Outreach', desc: 'Email and LinkedIn templates' },
              { href: '/prompts/fintech/ae', label: 'FinTech AE Prompts', desc: 'Discovery and closing' },
              { href: '/prompts/healthcare/meddpicc', label: 'MEDDPICC for Healthcare', desc: 'Complex sale qualification' },
              { href: '/prompts/ae/objection-handling', label: 'AE Objection Handling', desc: 'Common pushback responses' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="p-4 rounded-xl border border-border bg-card hover:border-orange-500/30 transition-colors"
              >
                <div className="font-semibold mb-1">{item.label}</div>
                <div className="text-sm text-muted-foreground">{item.desc}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            Can't Find What You Need?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Our library is constantly growing. Check out our other collections
            or let us know what prompts you'd like to see.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-tools/tonalities">
              <Button variant="outline" className="gap-2">
                24 Writing Tonalities
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a
              href="https://github.com/Prospeda/gtm-skills/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="gap-2">
                Request Prompts
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
