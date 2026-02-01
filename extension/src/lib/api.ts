// GTM Skills API client for the extension

const API_BASE = 'https://gtm-skills.com/api/v1';

export interface Prompt {
  id: string;
  title: string;
  description: string;
  prompt: string;
  category: string;
  subcategory?: string;
  tags: string[];
  difficulty?: string;
}

export interface RecommendedPrompt extends Prompt {
  relevance_score: number;
  relevance_reason: string;
}

export interface RecommendContext {
  deal_stage?: string;
  persona?: string;
  industry?: string;
  company_size?: string;
  context?: string;
}

// Cache for API responses
const cache = new Map<string, { data: unknown; timestamp: number }>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

function getCacheKey(endpoint: string, params: Record<string, string>): string {
  return `${endpoint}?${new URLSearchParams(params).toString()}`;
}

async function fetchWithCache<T>(
  endpoint: string,
  params: Record<string, string> = {}
): Promise<T> {
  const cacheKey = getCacheKey(endpoint, params);
  const cached = cache.get(cacheKey);

  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data as T;
  }

  const url = new URL(`${API_BASE}${endpoint}`);
  Object.entries(params).forEach(([key, value]) => {
    if (value) url.searchParams.set(key, value);
  });

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  const data = await response.json();
  cache.set(cacheKey, { data, timestamp: Date.now() });

  return data as T;
}

export async function getRecommendations(
  context: RecommendContext,
  limit: number = 5
): Promise<RecommendedPrompt[]> {
  const params: Record<string, string> = {
    limit: limit.toString(),
  };

  if (context.deal_stage) params.deal_stage = context.deal_stage;
  if (context.persona) params.persona = context.persona;
  if (context.industry) params.industry = context.industry;
  if (context.company_size) params.company_size = context.company_size;
  if (context.context) params.context = context.context;

  const response = await fetchWithCache<{ data: RecommendedPrompt[] }>(
    '/prompts/recommend',
    params
  );

  return response.data;
}

export async function getPrompts(
  category?: string,
  limit: number = 20
): Promise<Prompt[]> {
  const params: Record<string, string> = {
    limit: limit.toString(),
  };

  if (category) params.category = category;

  const response = await fetchWithCache<{ data: Prompt[] }>('/prompts', params);
  return response.data;
}

export async function searchPrompts(query: string): Promise<Prompt[]> {
  const response = await fetchWithCache<{ data: Prompt[] }>('/prompts', {
    search: query,
    limit: '10',
  });
  return response.data;
}

// Detect industry from company name/domain
export function detectIndustry(company: string): string | undefined {
  const lowerCompany = company.toLowerCase();

  const industryKeywords: Record<string, string[]> = {
    saas: ['software', 'saas', 'cloud', 'tech', 'ai', 'data', 'platform', 'app'],
    fintech: ['bank', 'finance', 'fintech', 'payment', 'lending', 'insurance', 'invest'],
    healthcare: ['health', 'medical', 'hospital', 'pharma', 'biotech', 'care'],
    ecommerce: ['shop', 'store', 'retail', 'commerce', 'market'],
    manufacturing: ['manufact', 'industrial', 'factory', 'production'],
  };

  for (const [industry, keywords] of Object.entries(industryKeywords)) {
    if (keywords.some((k) => lowerCompany.includes(k))) {
      return industry;
    }
  }

  return undefined;
}

// Detect persona/role from title
export function detectPersona(title: string): string | undefined {
  const lowerTitle = title.toLowerCase();

  if (lowerTitle.includes('ceo') || lowerTitle.includes('founder') || lowerTitle.includes('owner')) {
    return 'founder';
  }
  if (lowerTitle.includes('cto') || lowerTitle.includes('vp eng') || lowerTitle.includes('engineering')) {
    return 'cto';
  }
  if (lowerTitle.includes('cfo') || lowerTitle.includes('finance')) {
    return 'cfo';
  }
  if (lowerTitle.includes('vp sales') || lowerTitle.includes('sales director') || lowerTitle.includes('head of sales')) {
    return 'vp-sales';
  }
  if (lowerTitle.includes('sdr') || lowerTitle.includes('bdr') || lowerTitle.includes('sales development')) {
    return 'sdr';
  }
  if (lowerTitle.includes('account executive') || lowerTitle.includes('ae')) {
    return 'ae';
  }
  if (lowerTitle.includes('marketing')) {
    return 'marketing';
  }
  if (lowerTitle.includes('product')) {
    return 'product';
  }

  return undefined;
}
