import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CopyButton } from '@/components/copy-button';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Users,
  BookOpen,
  Workflow,
  ExternalLink,
} from 'lucide-react';
import type { Metadata } from 'next';
import {
  getPageFromSlug,
  getAllPromptSlugs,
  industries,
  roles,
  methodologies,
  workflows,
} from '@/data/pseo';

interface Props {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageFromSlug(slug);

  if (!page) {
    return { title: 'Not Found' };
  }

  return {
    title: `${page.title} | GTM Skills`,
    description: page.description,
    openGraph: {
      title: `${page.title} | GTM Skills`,
      description: page.description,
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllPromptSlugs();
  return slugs.map((slug) => ({ slug }));
}

function getRelatedPages(slugParts: string[]): { href: string; label: string }[] {
  const [first, second] = slugParts;
  const related: { href: string; label: string }[] = [];

  // Find what type of page this is and suggest related
  const industry = industries.find(i => i.slug === first);
  const role = roles.find(r => r.slug === second);
  const methodology = methodologies.find(m => m.slug === second);
  const roleFirst = roles.find(r => r.slug === first);
  const workflow = workflows.find(w => w.slug === second);

  if (industry && role) {
    // Industry-Role page: suggest other roles in same industry, same role in other industries
    const otherRoles = roles.filter(r => r.slug !== role.slug).slice(0, 2);
    const otherIndustries = industries.filter(i => i.slug !== industry.slug).slice(0, 2);

    otherRoles.forEach(r => {
      related.push({ href: `/prompts/${industry.slug}/${r.slug}`, label: `${industry.shortName} ${r.shortName}` });
    });
    otherIndustries.forEach(i => {
      related.push({ href: `/prompts/${i.slug}/${role.slug}`, label: `${i.shortName} ${role.shortName}` });
    });
  } else if (industry && methodology) {
    // Industry-Methodology: suggest other methodologies, same methodology in other industries
    const otherMethods = methodologies.filter(m => m.slug !== methodology.slug).slice(0, 2);
    const otherIndustries = industries.filter(i => i.slug !== industry.slug).slice(0, 2);

    otherMethods.forEach(m => {
      related.push({ href: `/prompts/${industry.slug}/${m.slug}`, label: `${m.shortName} for ${industry.shortName}` });
    });
    otherIndustries.forEach(i => {
      related.push({ href: `/prompts/${i.slug}/${methodology.slug}`, label: `${methodology.shortName} for ${i.shortName}` });
    });
  } else if (roleFirst && workflow) {
    // Role-Workflow: suggest other workflows, same workflow for other roles
    const otherWorkflows = workflows.filter(w => w.slug !== workflow.slug).slice(0, 2);
    const otherRoles = roles.filter(r => r.slug !== roleFirst.slug).slice(0, 2);

    otherWorkflows.forEach(w => {
      related.push({ href: `/prompts/${roleFirst.slug}/${w.slug}`, label: `${roleFirst.shortName} ${w.shortName}` });
    });
    otherRoles.forEach(r => {
      related.push({ href: `/prompts/${r.slug}/${workflow.slug}`, label: `${r.shortName} ${workflow.shortName}` });
    });
  }

  return related.slice(0, 4);
}

function getIcon(type: string) {
  switch (type) {
    case 'industry-role':
      return Building2;
    case 'industry-methodology':
      return BookOpen;
    case 'role-workflow':
      return Workflow;
    default:
      return Users;
  }
}

function getBadgeColor(type: string) {
  switch (type) {
    case 'industry-role':
      return 'border-blue-500/30 text-blue-400';
    case 'industry-methodology':
      return 'border-green-500/30 text-green-400';
    case 'role-workflow':
      return 'border-purple-500/30 text-purple-400';
    default:
      return 'border-zinc-500/30 text-zinc-400';
  }
}

function getTypeLabel(type: string) {
  switch (type) {
    case 'industry-role':
      return 'Industry + Role';
    case 'industry-methodology':
      return 'Industry + Methodology';
    case 'role-workflow':
      return 'Role + Workflow';
    default:
      return 'Prompts';
  }
}

export default async function PromptPage({ params }: Props) {
  const { slug } = await params;
  const page = getPageFromSlug(slug);

  if (!page) {
    notFound();
  }

  const Icon = getIcon(page.type || '');
  const relatedPages = getRelatedPages(slug);

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/prompts" className="hover:text-foreground transition-colors">
            Prompts
          </Link>
          <span>/</span>
          <span className="text-foreground">{page.title}</span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="outline" className={getBadgeColor(page.type || '')}>
              <Icon className="h-3 w-3 mr-1" />
              {getTypeLabel(page.type || '')}
            </Badge>
            <Badge variant="secondary">{page.prompts.length} Prompts</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {page.title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {page.description}
          </p>
        </div>

        {/* Context */}
        {page.industry && (
          <div className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 mb-8">
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-muted-foreground mb-1">Target Buyers</div>
                <div className="text-foreground">{page.industry.buyers.join(', ')}</div>
              </div>
              <div>
                <div className="text-muted-foreground mb-1">Key Pain Points</div>
                <div className="text-foreground">{page.industry.painPoints.join(', ')}</div>
              </div>
            </div>
          </div>
        )}

        {/* Prompts */}
        <div className="space-y-6 mb-12">
          {page.prompts.map((prompt, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="text-sm text-muted-foreground">
                  Prompt {index + 1}
                </div>
                <CopyButton text={prompt} label={`${page.title} - Prompt ${index + 1}`} />
              </div>
              <pre className="whitespace-pre-wrap text-sm text-foreground font-mono bg-zinc-900/50 p-4 rounded-lg overflow-x-auto">
                {prompt}
              </pre>
            </div>
          ))}
        </div>

        {/* Related Prompts */}
        {relatedPages.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold mb-4">Related Prompts</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {relatedPages.map((related) => (
                <Link
                  key={related.href}
                  href={related.href}
                  className="p-3 rounded-lg border border-border bg-card hover:border-zinc-700 transition-colors text-center text-sm"
                >
                  {related.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Browse More */}
        <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 mb-12">
          <h2 className="font-semibold mb-4">Browse More Prompts</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/industry" className="p-3 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors text-center">
              <Building2 className="h-5 w-5 mx-auto mb-2 text-blue-400" />
              <div className="text-sm">By Industry</div>
            </Link>
            <Link href="/role" className="p-3 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors text-center">
              <Users className="h-5 w-5 mx-auto mb-2 text-purple-400" />
              <div className="text-sm">By Role</div>
            </Link>
            <Link href="/methodology" className="p-3 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors text-center">
              <BookOpen className="h-5 w-5 mx-auto mb-2 text-green-400" />
              <div className="text-sm">By Methodology</div>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-500/10 via-red-500/5 to-transparent border border-orange-500/20 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Want These Prompts Running Automatically?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Prospeda turns these prompts into autonomous workflows—research,
            personalization, and outbound with human oversight.
          </p>
          <a
            href={`https://prospeda.com?utm_source=gtm-skills&utm_content=prompts-${slug.join('-')}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="gap-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
              Explore Prospeda
              <ExternalLink className="h-4 w-4" />
            </Button>
          </a>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex items-center justify-between">
          <Link href="/prompts">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              All Prompts
            </Button>
          </Link>
          <Link href="/tutorials">
            <Button variant="outline" className="gap-2">
              Learn to Build Agents
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
