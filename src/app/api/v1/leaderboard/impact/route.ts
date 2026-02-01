import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'edge';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new NextResponse(null, { headers: corsHeaders });
}

/**
 * GET /api/v1/leaderboard/impact
 *
 * Returns impact statistics and top performing prompts by revenue
 *
 * Query params:
 * - timeframe: 'all' | 'month' | 'week' (default: 'all')
 * - limit: number (default: 10)
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const timeframe = searchParams.get('timeframe') || 'all';
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 50);

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      // Return mock data if Supabase not configured
      return NextResponse.json({
        stats: {
          total_revenue: 2847500,
          total_outcomes: 1247,
          meetings_booked: 523,
          deals_won: 89,
          replies_received: 635,
          demos_completed: 156,
          proposals_sent: 203,
        },
        top_prompts: [
          {
            id: '1',
            title: 'MEDDPICC Discovery Framework',
            category: 'discovery',
            total_revenue: 892000,
            outcome_count: 47,
          },
          {
            id: '2',
            title: 'Executive Cold Email for Series A',
            category: 'outreach',
            total_revenue: 654000,
            outcome_count: 89,
          },
        ],
        testimonials: [
          {
            id: '1',
            prompt_title: 'MEDDPICC Discovery Framework',
            outcome_type: 'deal_won',
            outcome_value: 125000,
            testimonial: 'Used this framework for a complex enterprise deal.',
            is_verified: true,
            created_at: new Date().toISOString(),
          },
        ],
        timeframe,
      }, {
        headers: {
          ...corsHeaders,
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        },
      });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    // Build date filter
    let dateFilter = '';
    const now = new Date();
    if (timeframe === 'week') {
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      dateFilter = weekAgo.toISOString();
    } else if (timeframe === 'month') {
      const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      dateFilter = monthAgo.toISOString();
    }

    // Fetch aggregate stats
    let statsQuery = supabase
      .from('prompt_outcomes')
      .select('outcome_type, outcome_value');

    if (dateFilter) {
      statsQuery = statsQuery.gte('created_at', dateFilter);
    }

    const { data: outcomes, error: statsError } = await statsQuery;

    if (statsError) {
      console.error('Stats query error:', statsError);
    }

    // Calculate stats
    const stats = {
      total_revenue: 0,
      total_outcomes: outcomes?.length || 0,
      meetings_booked: 0,
      deals_won: 0,
      replies_received: 0,
      demos_completed: 0,
      proposals_sent: 0,
    };

    outcomes?.forEach((outcome) => {
      if (outcome.outcome_value) {
        stats.total_revenue += outcome.outcome_value;
      }
      switch (outcome.outcome_type) {
        case 'meeting_booked':
          stats.meetings_booked++;
          break;
        case 'deal_won':
          stats.deals_won++;
          break;
        case 'reply_received':
          stats.replies_received++;
          break;
        case 'demo_completed':
          stats.demos_completed++;
          break;
        case 'proposal_sent':
          stats.proposals_sent++;
          break;
      }
    });

    // Fetch top prompts by revenue
    const { data: topPrompts, error: promptsError } = await supabase
      .from('leaderboard_prompts')
      .select(`
        id,
        title,
        category,
        prompt_outcomes (
          outcome_value,
          outcome_type
        )
      `)
      .eq('status', 'approved')
      .limit(limit);

    if (promptsError) {
      console.error('Top prompts query error:', promptsError);
    }

    // Calculate revenue per prompt and sort
    const promptsWithRevenue = (topPrompts || [])
      .map((prompt: any) => ({
        id: prompt.id,
        title: prompt.title,
        category: prompt.category,
        total_revenue: (prompt.prompt_outcomes || []).reduce(
          (sum: number, o: any) => sum + (o.outcome_value || 0),
          0
        ),
        outcome_count: (prompt.prompt_outcomes || []).length,
      }))
      .filter((p: any) => p.total_revenue > 0)
      .sort((a: any, b: any) => b.total_revenue - a.total_revenue)
      .slice(0, limit);

    // Fetch recent testimonials
    const { data: testimonials, error: testimonialsError } = await supabase
      .from('prompt_outcomes')
      .select(`
        id,
        prompt_id,
        outcome_type,
        outcome_value,
        testimonial,
        is_verified,
        created_at,
        leaderboard_prompts (
          title
        )
      `)
      .eq('is_public', true)
      .not('testimonial', 'is', null)
      .order('created_at', { ascending: false })
      .limit(10);

    if (testimonialsError) {
      console.error('Testimonials query error:', testimonialsError);
    }

    const formattedTestimonials = (testimonials || []).map((t: any) => ({
      id: t.id,
      prompt_id: t.prompt_id,
      prompt_title: t.leaderboard_prompts?.title || 'Unknown Prompt',
      outcome_type: t.outcome_type,
      outcome_value: t.outcome_value,
      testimonial: t.testimonial,
      is_verified: t.is_verified,
      created_at: t.created_at,
    }));

    return NextResponse.json(
      {
        stats,
        top_prompts: promptsWithRevenue,
        testimonials: formattedTestimonials,
        timeframe,
      },
      {
        headers: {
          ...corsHeaders,
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        },
      }
    );
  } catch (error) {
    console.error('Impact API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500, headers: corsHeaders }
    );
  }
}
