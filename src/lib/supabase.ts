import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Only create client if we have valid URL
export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseUrl.includes('supabase')
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

// Server-side client with service role
export function createServerClient(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

  if (!url || !url.includes('supabase') || !serviceKey) {
    return null;
  }

  return createClient(url, serviceKey);
}
