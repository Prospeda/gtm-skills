'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  Trophy,
  DollarSign,
  TrendingUp,
  Users,
  Calendar,
  MessageSquare,
  Sparkles,
  Send,
  Quote,
  ExternalLink,
  Filter,
} from 'lucide-react';

interface ImpactStats {
  total_revenue: number;
  total_outcomes: number;
  meetings_booked: number;
  deals_won: number;
  replies_received: number;
}

interface TopPrompt {
  id: string;
  title: string;
  category: string;
  total_revenue: number;
  outcome_count: number;
  testimonial_count: number;
}

interface Testimonial {
  id: string;
  prompt_id: string;
  prompt_title: string;
  outcome_type: string;
  outcome_value: number | null;
  testimonial: string;
  created_at: string;
  is_verified: boolean;
}

// Mock data - in production, fetch from API
const mockStats: ImpactStats = {
  total_revenue: 2847500,
  total_outcomes: 1247,
  meetings_booked: 523,
  deals_won: 89,
  replies_received: 635,
};

const mockTopPrompts: TopPrompt[] = [
  {
    id: '1',
    title: 'MEDDPICC Discovery Framework',
    category: 'discovery',
    total_revenue: 892000,
    outcome_count: 47,
    testimonial_count: 12,
  },
  {
    id: '2',
    title: 'Executive Cold Email for Series A',
    category: 'outreach',
    total_revenue: 654000,
    outcome_count: 89,
    testimonial_count: 23,
  },
  {
    id: '3',
    title: 'Competitor Displacement Playbook',
    category: 'objections',
    total_revenue: 445000,
    outcome_count: 34,
    testimonial_count: 8,
  },
  {
    id: '4',
    title: 'Technical Champion Email Sequence',
    category: 'outreach',
    total_revenue: 312000,
    outcome_count: 67,
    testimonial_count: 15,
  },
  {
    id: '5',
    title: 'ROI Calculator Script',
    category: 'ae',
    total_revenue: 278000,
    outcome_count: 28,
    testimonial_count: 6,
  },
];

const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    prompt_id: '1',
    prompt_title: 'MEDDPICC Discovery Framework',
    outcome_type: 'deal_won',
    outcome_value: 125000,
    testimonial: 'Used this framework for a complex enterprise deal. The structured approach helped me uncover the real decision criteria and we closed a 6-figure deal in 45 days.',
    created_at: '2026-01-28',
    is_verified: true,
  },
  {
    id: '2',
    prompt_id: '2',
    prompt_title: 'Executive Cold Email for Series A',
    outcome_type: 'meeting_booked',
    outcome_value: null,
    testimonial: 'Booked 3 meetings in my first week using this template. The personalization hooks are spot on.',
    created_at: '2026-01-25',
    is_verified: false,
  },
  {
    id: '3',
    prompt_id: '3',
    prompt_title: 'Competitor Displacement Playbook',
    outcome_type: 'deal_won',
    outcome_value: 89000,
    testimonial: 'We were losing deals to [Competitor]. This playbook helped us flip 3 competitive situations in Q4.',
    created_at: '2026-01-20',
    is_verified: true,
  },
];

function formatCurrency(value: number): string {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`;
  }
  if (value >= 1000) {
    return `$${(value / 1000).toFixed(0)}K`;
  }
  return `$${value}`;
}

function formatNumber(value: number): string {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K`;
  }
  return value.toString();
}

const outcomeIcons: Record<string, typeof Trophy> = {
  deal_won: Trophy,
  meeting_booked: Calendar,
  reply_received: MessageSquare,
  demo_completed: Sparkles,
  proposal_sent: Send,
};

const outcomeLabels: Record<string, string> = {
  deal_won: 'Deal Won',
  meeting_booked: 'Meeting Booked',
  reply_received: 'Reply Received',
  demo_completed: 'Demo Completed',
  proposal_sent: 'Proposal Sent',
};

export default function ImpactDashboardPage() {
  const [stats, setStats] = useState<ImpactStats>(mockStats);
  const [topPrompts, setTopPrompts] = useState<TopPrompt[]>(mockTopPrompts);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(mockTestimonials);
  const [filter, setFilter] = useState<'all' | 'verified'>('all');

  const filteredTestimonials = filter === 'verified'
    ? testimonials.filter(t => t.is_verified)
    : testimonials;

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/leaderboard"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Leaderboard
          </Link>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Impact Dashboard
              </h1>
              <p className="text-muted-foreground">
                Real results from real sales teams using GTM Skills prompts
              </p>
            </div>
            <Badge variant="outline" className="w-fit">
              <TrendingUp className="w-3 h-3 mr-1" />
              Updated daily
            </Badge>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/20 rounded-xl p-6">
            <div className="flex items-center gap-2 text-green-400 mb-2">
              <DollarSign className="w-5 h-5" />
              <span className="text-sm font-medium">Revenue Influenced</span>
            </div>
            <div className="text-3xl font-bold">{formatCurrency(stats.total_revenue)}</div>
          </div>

          <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/20 rounded-xl p-6">
            <div className="flex items-center gap-2 text-orange-400 mb-2">
              <Trophy className="w-5 h-5" />
              <span className="text-sm font-medium">Deals Won</span>
            </div>
            <div className="text-3xl font-bold">{stats.deals_won}</div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/20 rounded-xl p-6">
            <div className="flex items-center gap-2 text-blue-400 mb-2">
              <Calendar className="w-5 h-5" />
              <span className="text-sm font-medium">Meetings Booked</span>
            </div>
            <div className="text-3xl font-bold">{formatNumber(stats.meetings_booked)}</div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/20 rounded-xl p-6">
            <div className="flex items-center gap-2 text-purple-400 mb-2">
              <Users className="w-5 h-5" />
              <span className="text-sm font-medium">Total Outcomes</span>
            </div>
            <div className="text-3xl font-bold">{formatNumber(stats.total_outcomes)}</div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Top Prompts by Revenue */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Top Revenue Drivers</h2>
              <Badge variant="secondary">By $ closed</Badge>
            </div>
            <div className="space-y-3">
              {topPrompts.map((prompt, index) => (
                <Link
                  key={prompt.id}
                  href={`/prompts/saas/${prompt.category}#${prompt.id}`}
                  className="block bg-secondary/50 border border-border rounded-xl p-4 hover:border-orange-500/50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400 font-bold text-sm">
                      #{index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm truncate">{prompt.title}</h3>
                      <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                        <span className="text-green-400 font-medium">
                          {formatCurrency(prompt.total_revenue)}
                        </span>
                        <span>{prompt.outcome_count} outcomes</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <Link href="/leaderboard?sort=revenue" className="block mt-4">
              <Button variant="outline" className="w-full">
                View All
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Testimonials */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Success Stories</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                    filter === 'all'
                      ? 'bg-orange-500 text-white'
                      : 'bg-secondary hover:bg-secondary/80'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilter('verified')}
                  className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                    filter === 'verified'
                      ? 'bg-orange-500 text-white'
                      : 'bg-secondary hover:bg-secondary/80'
                  }`}
                >
                  Verified
                </button>
              </div>
            </div>
            <div className="space-y-4">
              {filteredTestimonials.map((testimonial) => {
                const OutcomeIcon = outcomeIcons[testimonial.outcome_type] || Trophy;
                return (
                  <div
                    key={testimonial.id}
                    className="bg-secondary/30 border border-border rounded-xl p-5"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <Quote className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                      <p className="text-sm leading-relaxed">{testimonial.testimonial}</p>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="text-xs">
                          <OutcomeIcon className="w-3 h-3 mr-1" />
                          {outcomeLabels[testimonial.outcome_type]}
                        </Badge>
                        {testimonial.outcome_value && (
                          <span className="text-green-400 font-medium text-sm">
                            {formatCurrency(testimonial.outcome_value)}
                          </span>
                        )}
                        {testimonial.is_verified && (
                          <Badge className="bg-blue-500/20 text-blue-400 text-xs">
                            Verified
                          </Badge>
                        )}
                      </div>
                      <Link
                        href={`/prompts/saas/${testimonial.prompt_id}`}
                        className="text-xs text-muted-foreground hover:text-orange-400 transition-colors"
                      >
                        {testimonial.prompt_title}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-xl p-8">
          <Trophy className="w-12 h-12 text-orange-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Got a Win?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Share your success story and help other sales teams find the prompts that actually work.
            Big wins get featured on this page.
          </p>
          <Link href="/leaderboard">
            <Button className="bg-orange-500 hover:bg-orange-600">
              Report an Outcome
              <Trophy className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
