/**
 * GTM Skills Newsletter System
 *
 * Weekly newsletter automation and subscriber management.
 */

import { resend } from './resend';

// Types
export interface NewsletterIssue {
  id: string;
  issue_number: number;
  subject: string;
  preview_text?: string;
  prompt_of_week_id?: string;
  win_of_week_outcome_id?: string;
  tool_spotlight?: string;
  top_prompts?: PromptSummary[];
  new_prompts?: PromptSummary[];
  custom_sections?: CustomSection[];
  status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'failed';
  scheduled_for?: string;
  sent_at?: string;
  recipients_count: number;
  opens_count: number;
  clicks_count: number;
  created_at: string;
}

export interface PromptSummary {
  id: string;
  title: string;
  category: string;
  votes: number;
  copies: number;
}

export interface CustomSection {
  title: string;
  content: string;
  cta_text?: string;
  cta_url?: string;
}

export interface Subscriber {
  id: string;
  email: string;
  first_name?: string;
  referral_code: string;
  referred_by?: string;
  referral_count: number;
  source: string;
  subscribed_at: string;
  unsubscribed_at?: string;
}

/**
 * Generate newsletter HTML
 */
export function generateNewsletterHTML(issue: {
  issueNumber: number;
  date: string;
  promptOfWeek: PromptSummary;
  topPrompts: PromptSummary[];
  newPrompts: PromptSummary[];
  toolSpotlight?: { name: string; description: string; url: string };
}): string {
  const { issueNumber, date, promptOfWeek, topPrompts, newPrompts, toolSpotlight } = issue;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GTM Skills Weekly #${issueNumber}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #18181b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <!-- Header -->
    <div style="text-align: center; margin-bottom: 32px;">
      <h1 style="color: #ffffff; font-size: 24px; margin: 0 0 8px 0;">GTM SKILLS WEEKLY</h1>
      <p style="color: #71717a; font-size: 14px; margin: 0;">Issue #${issueNumber} | ${date}</p>
    </div>

    <!-- Prompt of the Week -->
    <div style="background-color: #27272a; border: 1px solid #3f3f46; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
      <p style="color: #f59e0b; font-size: 12px; font-weight: 600; margin: 0 0 12px 0; text-transform: uppercase;">🏆 Prompt of the Week</p>
      <h2 style="color: #ffffff; font-size: 18px; margin: 0 0 8px 0;">${promptOfWeek.title}</h2>
      <p style="color: #a1a1aa; font-size: 14px; margin: 0 0 16px 0;">${promptOfWeek.category} • ${promptOfWeek.votes} votes • ${promptOfWeek.copies} copies</p>
      <a href="https://gtm-skills.com/leaderboard?prompt=${promptOfWeek.id}" style="display: inline-block; background-color: #f59e0b; color: #000000; padding: 10px 20px; text-decoration: none; border-radius: 8px; font-weight: 500; font-size: 14px;">Copy This Prompt →</a>
    </div>

    <!-- Top Prompts -->
    <div style="margin-bottom: 24px;">
      <p style="color: #a1a1aa; font-size: 12px; font-weight: 600; margin: 0 0 12px 0; text-transform: uppercase;">📊 Leaderboard Update</p>
      <div style="background-color: #27272a; border: 1px solid #3f3f46; border-radius: 12px; padding: 16px;">
        ${topPrompts.map((p, i) => `
          <div style="display: flex; align-items: center; padding: 8px 0; ${i < topPrompts.length - 1 ? 'border-bottom: 1px solid #3f3f46;' : ''}">
            <span style="color: #71717a; font-size: 14px; width: 24px;">${i + 1}.</span>
            <span style="color: #ffffff; font-size: 14px; flex: 1;">${p.title}</span>
            <span style="color: #10b981; font-size: 12px;">+${p.votes}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- New Prompts -->
    ${newPrompts.length > 0 ? `
    <div style="margin-bottom: 24px;">
      <p style="color: #a1a1aa; font-size: 12px; font-weight: 600; margin: 0 0 12px 0; text-transform: uppercase;">🆕 New This Week</p>
      <div style="background-color: #27272a; border: 1px solid #3f3f46; border-radius: 12px; padding: 16px;">
        ${newPrompts.map((p) => `
          <div style="padding: 8px 0;">
            <a href="https://gtm-skills.com/leaderboard?prompt=${p.id}" style="color: #ffffff; text-decoration: none; font-size: 14px;">${p.title}</a>
            <span style="color: #71717a; font-size: 12px; margin-left: 8px;">${p.category}</span>
          </div>
        `).join('')}
      </div>
    </div>
    ` : ''}

    <!-- Tool Spotlight -->
    ${toolSpotlight ? `
    <div style="background-color: #1e1b4b; border: 1px solid #4c1d95; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
      <p style="color: #a78bfa; font-size: 12px; font-weight: 600; margin: 0 0 12px 0; text-transform: uppercase;">🔧 Tool Spotlight</p>
      <h3 style="color: #ffffff; font-size: 16px; margin: 0 0 8px 0;">${toolSpotlight.name}</h3>
      <p style="color: #a1a1aa; font-size: 14px; margin: 0 0 16px 0;">${toolSpotlight.description}</p>
      <a href="${toolSpotlight.url}" style="color: #a78bfa; font-size: 14px; text-decoration: none;">Learn more →</a>
    </div>
    ` : ''}

    <!-- Footer -->
    <div style="text-align: center; padding-top: 24px; border-top: 1px solid #3f3f46;">
      <p style="color: #71717a; font-size: 12px; margin: 0 0 8px 0;">
        <a href="https://gtm-skills.com" style="color: #71717a; text-decoration: none;">gtm-skills.com</a>
      </p>
      <p style="color: #52525b; font-size: 11px; margin: 0;">
        You're receiving this because you subscribed to GTM Skills.
        <a href="{{unsubscribe_url}}" style="color: #52525b;">Unsubscribe</a>
      </p>
    </div>
  </div>
</body>
</html>
  `;
}

/**
 * Send newsletter to subscribers
 */
export async function sendNewsletter(
  emails: string[],
  subject: string,
  htmlContent: string
): Promise<{ success: boolean; sent: number; failed: number }> {
  if (!resend) {
    console.log('Resend not configured, skipping newsletter');
    return { success: false, sent: 0, failed: emails.length };
  }

  let sent = 0;
  let failed = 0;

  // Send in batches of 100
  const batches = [];
  for (let i = 0; i < emails.length; i += 100) {
    batches.push(emails.slice(i, i + 100));
  }

  for (const batch of batches) {
    try {
      await resend.batch.send(
        batch.map((email) => ({
          from: 'GTM Skills <weekly@gtm-skills.com>',
          to: email,
          subject,
          html: htmlContent,
        }))
      );
      sent += batch.length;
    } catch (error) {
      console.error('Newsletter batch failed:', error);
      failed += batch.length;
    }
  }

  return { success: failed === 0, sent, failed };
}
