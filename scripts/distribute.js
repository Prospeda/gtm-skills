#!/usr/bin/env node

/**
 * GTM Skills Distribution Script
 *
 * Preview and prepare content for Buffer GUI.
 * Copy output → Paste into publish.buffer.com
 *
 * Usage:
 *   node scripts/distribute.js --list              # See all drafts
 *   node scripts/distribute.js --preview twitter 1 # Preview draft (copy-ready)
 *   node scripts/distribute.js --enhance twitter 1 # Get enhancer prompts
 *   node scripts/distribute.js --copy twitter 1    # Output raw content to copy
 *
 * IMPORTANT: LinkedIn is BLOCKED during work hours (8am-5:30pm EST)
 *
 * STATUS: Buffer API deprecated. Using GUI workflow.
 * FUTURE: Twitter API, LinkedIn API direct integration
 */

// ============================================
// CONFIGURATION
// ============================================

const CONFIG = {
  // LinkedIn timing restrictions (EST)
  linkedin: {
    blockedStart: 8,    // 8:00 AM EST
    blockedEnd: 17.5,   // 5:30 PM EST
    allowedWindows: [
      { start: 6, end: 7.75, label: 'Early morning (6:00-7:45 AM EST)' },
      { start: 17.75, end: 21, label: 'Early evening (5:45-9:00 PM EST)' }
    ]
  },
  // Optimal posting times
  defaultTimes: {
    twitter: { hour: 9, minute: 0 },      // 9:00 AM EST
    linkedin: { hour: 6, minute: 30 },    // 6:30 AM EST (early morning)
    reddit: { hour: 10, minute: 0 }       // 10:00 AM EST (manual)
  }
};

// ============================================
// CONTENT DRAFTS
// ============================================

const DRAFTS = {
  twitter: {
    1: {
      name: "Agentic Stack Story",
      thread: [
        "I quit traditional sales. Got my AE team off research hamster wheels.\n\nBuilt an agentic stack instead. Open-sourced the whole prompt library.\n\n2,500+ prompts. Here's how it works: 🧵",
        "The old AE workflow is broken:\n\n→ 30 min researching one account\n→ Copy-paste the same email template\n→ \"Personalize\" by adding their name\n→ Wonder why reply rates suck\n\nWe fixed this with 3 agents.",
        "AGENT 1: Research\n\nPulls 10-K filings, news, LinkedIn, job postings.\nOutputs a 1-page brief per account in seconds.\n\nNot summaries. Actual sales angles:\n- Trigger events\n- Pain indicators\n- Champion candidates\n- Competitive intel",
        "AGENT 2: Personalization\n\nTakes research brief → generates messaging.\n\nNot \"Hi {first_name}\" garbage.\n\nReal personalization:\n- References their Q3 earnings call\n- Connects to their hiring patterns\n- Speaks to their specific tech stack",
        "AGENT 3: Execution\n\nOrchestrates the sequence.\nHuman approves before send.\n\nHandles:\n- Multi-channel timing\n- Reply classification\n- Meeting booking\n- Follow-up logic",
        "The prompts behind these agents?\n\nI packaged all of them.\n\n2,500+ prompts organized by:\n- Industry (SaaS, FinTech, Healthcare...)\n- Role (SDR, AE, CSM...)\n- Workflow (Research, Outreach, Discovery...)\n\nEvery combination has specific prompts.",
        "Examples:\n\n\"SaaS AE Discovery Questions\" - 15 prompts\n\"FinTech Objection Handling\" - 12 prompts\n\"Healthcare MEDDPICC Qualification\" - 10 prompts\n\nNot generic. Industry + role + workflow specific.",
        "Why open source this?\n\nBecause the prompts aren't the moat.\n\nThe moat is:\n- Your ICP knowledge\n- Your use cases\n- Your iteration speed\n\nThe prompts are just the starting point.",
        "Grab them here:\n\ngithub.com/Prospeda/gtm-skills\n\nOr browse the site:\ngtm-skills.com/prompts\n\nMIT license. Copy, modify, build on top.\n\nIf you use them, tell me what works.",
        "Building something similar?\n\nReply with your stack. Curious what others are running.\n\nEspecially interested in:\n- What research sources you use\n- How you handle human-in-the-loop\n- Your biggest automation wins"
      ]
    },
    2: {
      name: "Technical pSEO Build",
      thread: [
        "Built a pSEO system that generated 420 sales prompt pages automatically.\n\nEach page ranks for long-tail keywords like \"SaaS SDR cold email MEDDPICC\"\n\nHere's the architecture: 🧵",
        "The insight:\n\nSales people search for specific combinations:\n- \"fintech AE discovery questions\"\n- \"healthcare objection handling\"\n- \"manufacturing cold email templates\"\n\nOne page can't rank for all of these.\n420 pages can.",
        "The data model:\n\n8 industries × 6 roles × 6 workflows = 288 combinations\n\nEach combination gets:\n- Unique URL\n- Generated prompts\n- Industry-specific context\n- Internal links to related pages",
        "The stack:\n\n- Next.js 16 with App Router\n- generateStaticParams() for all combinations\n- Dynamic sitemap generation\n- Vercel for hosting\n\nBuild time: 44 seconds for 500+ pages.",
        "SEO mechanics:\n\nEach page has:\n- Unique title: \"{Industry} {Role} {Workflow} Prompts\"\n- Meta description with keywords\n- Schema markup\n- Internal links to adjacent combinations\n\nGoogle sees 420 unique, indexable pages.",
        "Early results (2 weeks in):\n\n- 421 pages indexed\n- Ranking for 50+ long-tail keywords\n- 0 paid promotion\n\nWaiting to see if Google keeps them indexed or flags as programmatic.",
        "The whole thing is open source:\n\ngithub.com/Prospeda/gtm-skills\n\n/src/data/pseo.ts - all the data\n/src/app/prompts/[...slug] - the dynamic route\n\nFork it. Build your own pSEO system.",
        "What's next:\n\n- Tracking which pages rank\n- Doubling down on winners\n- Adding more combinations\n\nWill share results in 30 days.\n\nFollow if you want the update."
      ]
    }
  },
  linkedin: {
    1: {
      name: "AE Workflow Transformation",
      content: `I rebuilt how my AE team works.

Not with a new CRM.
Not with another sales tool.
With prompts.

Here's what I mean:

—

The average AE spends 30 minutes researching a single account.

They pull up LinkedIn. Scan the 10-K. Read some news articles. Try to find an angle.

Then they write an email that says "I noticed your company is growing..."

That's not personalization. That's wasted motion.

—

So I built a different system.

Three AI agents that handle the grunt work:

1. Research Agent - pulls data, identifies triggers, maps stakeholders
2. Personalization Agent - turns research into specific messaging
3. Execution Agent - manages sequences with human approval

The AE focuses on conversations. The agents handle the prep.

—

The prompts powering these agents?

I packaged them into an open-source library.

2,500+ prompts organized by:
• Industry (SaaS, FinTech, Healthcare, Manufacturing...)
• Role (SDR, AE, CSM, Sales Manager...)
• Workflow (Research, Outreach, Discovery, Negotiation...)

Every combination has tailored prompts.

—

Why give this away?

Because the prompts are the starting point, not the destination.

Your edge comes from:
• How you customize them to your ICP
• The iteration cycles you run
• The data you feed into them

The prompts just accelerate the starting line.

—

If you're building agentic sales workflows, grab them:

gtm-skills.com/prompts

GitHub: github.com/Prospeda/gtm-skills

MIT license. Use however you want.

—

What's your current research workflow look like?

Curious if anyone else is running agent-based systems.`
    },
    2: {
      name: "12 Meetings Story",
      content: `Last month an AE on my team booked 12 meetings in one week.

Same territory. Same product. Same quota.

The difference: she stopped doing research manually.

Here's the shift:

—

Before:
• 25 min researching each account
• Generic "personalization"
• 3-4 meetings per week
• Constant context switching

After:
• Research agent preps accounts overnight
• She reviews briefs in 2 minutes each
• Writes genuinely personalized outreach
• 12 meetings. Same effort.

—

The research agent isn't magic.

It's a prompt + data sources + structure.

It pulls:
• Recent news and funding
• Job postings (hiring = pain signals)
• 10-K mentions of strategic priorities
• LinkedIn for stakeholder mapping

Outputs a 1-page brief with actual sales angles.

—

I've open-sourced all the prompts behind this system.

2,500+ prompts for:
• Account research
• Personalization by industry
• Discovery questions
• Objection handling
• Follow-up sequences

Organized by role, industry, and workflow.

—

Not selling anything here.

Just sharing what worked.

If you're experimenting with AI in your sales workflow, these might save you time:

gtm-skills.com

—

What's working in your outbound right now?

Genuine question - trying to learn from what others are testing.`
    }
  },
  reddit: {
    1: {
      name: "r/sales Value Share",
      subreddit: "sales",
      title: "I open-sourced 2,500+ sales prompts organized by industry/role/workflow - free to use",
      content: `Hey r/sales,

I've been building out an agentic workflow for my AE team and ended up creating a ton of prompts in the process. Figured I'd package them up and share.

**What it is:**

A library of 2,500+ prompts organized by:
- Industry (SaaS, FinTech, Healthcare, Manufacturing, etc.)
- Role (SDR, AE, CSM, Sales Manager, etc.)
- Workflow (Research, Cold Outreach, Discovery, Objection Handling, etc.)

Every combination has specific prompts. So "SaaS AE Discovery Questions" is different from "Healthcare AE Discovery Questions."

**Why I made it:**

I was tired of generic prompt libraries that had stuff like "Write a cold email" with no context. Real sales work is specific - the questions you ask a healthcare CIO are different from a SaaS CTO.

So I built prompts that account for industry pain points, buyer personas, and workflow stages.

**Examples:**

- Research prompts that pull specific data points per industry
- Cold email templates that reference industry-specific triggers
- Discovery questions tailored to different buyer types
- Objection handling for common pushbacks in each vertical

**How to use it:**

Browse: gtm-skills.com/prompts
GitHub: github.com/Prospeda/gtm-skills

MIT license - copy, modify, use however you want.

**What I'm looking for:**

Feedback, honestly. What's missing? What industries or workflows should I add?

If you use any of these, let me know what works and what doesn't.

---

Not trying to sell anything. No email capture or gated content. Just a resource I found useful and figured others might too.`
    },
    2: {
      name: "r/ChatGPT Technical",
      subreddit: "ChatGPT",
      title: "I built a system that generates 2,500+ unique prompt pages programmatically - here's how",
      content: `Wanted to share a project I just finished.

**The concept:**

Instead of one page with "sales prompts," I built a system that generates unique pages for every combination of:
- 8 industries (SaaS, FinTech, Healthcare...)
- 6 roles (SDR, AE, CSM...)
- 6 workflows (Research, Outreach, Discovery...)

That's 288 unique pages, each with tailored prompts for that specific combination.

**Why this works better:**

"SaaS SDR Cold Outreach prompts" is a different need than "Healthcare AE Discovery prompts."

By generating specific pages, each one can:
- Reference industry-specific pain points
- Include role-appropriate language
- Match the workflow stage

**The stack:**

Next.js with dynamic routes + generateStaticParams().

**Results:**

- 420+ pages generated in 44 seconds
- Each page has unique, contextual prompts
- All indexed by Google

**Links:**

Open source: github.com/Prospeda/gtm-skills
Browse: gtm-skills.com/prompts

If you're building something similar, happy to answer questions about the architecture.`
    }
  }
};

// ============================================
// LINKEDIN TIMING GUARD
// ============================================

function getESTHour() {
  const now = new Date();
  const estTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/New_York' }));
  return estTime.getHours() + estTime.getMinutes() / 60;
}

function isLinkedInBlocked(scheduledTime = null) {
  const hour = scheduledTime
    ? new Date(scheduledTime).getHours() + new Date(scheduledTime).getMinutes() / 60
    : getESTHour();

  return hour >= CONFIG.linkedin.blockedStart && hour < CONFIG.linkedin.blockedEnd;
}

function getNextLinkedInWindow() {
  const hour = getESTHour();

  if (hour < CONFIG.linkedin.blockedStart) {
    return { time: '6:30 AM EST', label: 'This morning' };
  } else if (hour >= CONFIG.linkedin.blockedEnd) {
    return { time: '6:00 PM EST', label: 'This evening' };
  } else {
    return { time: '6:00 PM EST', label: 'This evening (after work hours)' };
  }
}

function validateLinkedInTiming(requestedTime) {
  if (isLinkedInBlocked(requestedTime)) {
    const next = getNextLinkedInWindow();
    return {
      valid: false,
      message: `🚫 BLOCKED: LinkedIn posting is restricted during work hours (8 AM - 5:30 PM EST).\n\n` +
               `Suggested alternative: ${next.time} (${next.label})\n\n` +
               `Allowed windows:\n` +
               `  • Early morning: 6:00 AM - 7:45 AM EST\n` +
               `  • Early evening: 5:45 PM - 9:00 PM EST`
    };
  }
  return { valid: true };
}

// ============================================
// BUFFER API
// ============================================

async function bufferRequest(endpoint, method = 'GET', data = null) {
  const token = process.env.BUFFER_ACCESS_TOKEN;

  if (!token) {
    throw new Error(
      'BUFFER_ACCESS_TOKEN not set.\n\n' +
      'To get your token:\n' +
      '1. Go to https://buffer.com/developers/apps\n' +
      '2. Create an app or use existing\n' +
      '3. Get your access token\n' +
      '4. Run: export BUFFER_ACCESS_TOKEN="your_token"'
    );
  }

  return new Promise((resolve, reject) => {
    const url = new URL(`https://api.bufferapp.com/1/${endpoint}`);
    url.searchParams.append('access_token', token);

    const options = {
      hostname: url.hostname,
      path: url.pathname + url.search,
      method: method,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(body));
        } catch (e) {
          resolve(body);
        }
      });
    });

    req.on('error', reject);

    if (data) {
      req.write(new URLSearchParams(data).toString());
    }

    req.end();
  });
}

async function getBufferProfiles() {
  return bufferRequest('profiles.json');
}

async function getBufferPendingUpdates(profileId) {
  return bufferRequest(`profiles/${profileId}/updates/pending.json`);
}

async function scheduleBufferPost(profileId, text, scheduledAt = null) {
  const data = {
    profile_ids: profileId,
    text: text,
    now: scheduledAt ? 'false' : 'true'
  };

  if (scheduledAt) {
    data.scheduled_at = Math.floor(new Date(scheduledAt).getTime() / 1000);
  }

  return bufferRequest('updates/create.json', 'POST', data);
}

// ============================================
// CLI COMMANDS
// ============================================

async function listDrafts() {
  console.log('\n📝 AVAILABLE DRAFTS\n');
  console.log('═'.repeat(50));

  for (const [platform, drafts] of Object.entries(DRAFTS)) {
    console.log(`\n${platform.toUpperCase()}`);
    console.log('─'.repeat(40));

    for (const [num, draft] of Object.entries(drafts)) {
      const wordCount = draft.thread
        ? draft.thread.join(' ').split(/\s+/).length
        : draft.content.split(/\s+/).length;

      console.log(`  [${num}] ${draft.name}`);
      console.log(`      ${draft.thread ? draft.thread.length + ' tweets' : wordCount + ' words'}`);
      if (draft.subreddit) console.log(`      r/${draft.subreddit}`);
    }
  }

  // Show LinkedIn timing note
  console.log('\n' + '═'.repeat(50));
  console.log('⚠️  LINKEDIN TIMING RESTRICTION');
  console.log('   Posts blocked: 8:00 AM - 5:30 PM EST');
  console.log('   Allowed: 6-7:45 AM or 5:45-9 PM EST');
  console.log('═'.repeat(50) + '\n');
}

async function previewDraft(platform, draftNum) {
  const draft = DRAFTS[platform]?.[draftNum];

  if (!draft) {
    console.log(`\n❌ Draft not found: ${platform} #${draftNum}`);
    console.log('   Run with --list to see available drafts\n');
    return;
  }

  console.log('\n' + '═'.repeat(60));
  console.log(`📄 ${platform.toUpperCase()} - Draft ${draftNum}: ${draft.name}`);
  console.log('═'.repeat(60) + '\n');

  if (draft.thread) {
    draft.thread.forEach((tweet, i) => {
      console.log(`[${i + 1}/${draft.thread.length}]`);
      console.log(tweet);
      console.log(`   (${tweet.length} chars)`);
      console.log('');
    });
  } else {
    if (draft.title) console.log(`Title: ${draft.title}\n`);
    console.log(draft.content);
    console.log(`\n   (${draft.content.length} chars, ~${Math.ceil(draft.content.split(/\s+/).length / 200)} min read)`);
  }

  console.log('\n' + '─'.repeat(60));
  console.log('Actions: --schedule, --enhance, or copy manually');
  console.log('─'.repeat(60) + '\n');
}

async function scheduleDraft(platform, draftNum, timeStr) {
  const draft = DRAFTS[platform]?.[draftNum];

  if (!draft) {
    console.log(`\n❌ Draft not found: ${platform} #${draftNum}\n`);
    return;
  }

  // LinkedIn timing check
  if (platform === 'linkedin') {
    const validation = validateLinkedInTiming(timeStr ? new Date(timeStr) : new Date());
    if (!validation.valid) {
      console.log('\n' + validation.message + '\n');
      return;
    }
  }

  // Reddit warning
  if (platform === 'reddit') {
    console.log('\n⚠️  Reddit cannot be scheduled via Buffer.');
    console.log('   Copy the content above and post manually to r/' + draft.subreddit);
    console.log('   Best time: Tuesday-Thursday, 10 AM EST\n');
    return;
  }

  console.log(`\n📤 Scheduling ${platform} draft ${draftNum}...`);

  try {
    const profiles = await getBufferProfiles();
    const profile = profiles.find(p =>
      p.service.toLowerCase() === platform.toLowerCase() ||
      (platform === 'twitter' && p.service === 'twitter')
    );

    if (!profile) {
      console.log(`\n❌ No ${platform} profile found in Buffer.`);
      console.log('   Connect your account at https://buffer.com\n');
      return;
    }

    const content = draft.thread ? draft.thread[0] : draft.content;
    const result = await scheduleBufferPost(profile.id, content, timeStr);

    if (result.success) {
      console.log(`\n✅ Scheduled successfully!`);
      console.log(`   Profile: ${profile.formatted_username}`);
      console.log(`   Time: ${result.update?.scheduled_at || 'Next available slot'}`);

      if (draft.thread && draft.thread.length > 1) {
        console.log(`\n⚠️  Note: Only first tweet scheduled.`);
        console.log(`   For full thread, use Twitter's native thread feature`);
        console.log(`   or schedule remaining tweets manually.`);
      }
    } else {
      console.log(`\n❌ Failed to schedule: ${result.message || 'Unknown error'}`);
    }
  } catch (err) {
    console.log(`\n❌ Error: ${err.message}\n`);
  }
}

async function checkBufferStatus() {
  console.log('\n📊 BUFFER QUEUE STATUS\n');

  try {
    const profiles = await getBufferProfiles();

    for (const profile of profiles) {
      console.log(`\n${profile.service.toUpperCase()}: @${profile.formatted_username}`);
      console.log('─'.repeat(40));

      const pending = await getBufferPendingUpdates(profile.id);

      if (pending.updates && pending.updates.length > 0) {
        pending.updates.slice(0, 3).forEach(update => {
          const preview = update.text.substring(0, 50) + (update.text.length > 50 ? '...' : '');
          console.log(`  📅 ${new Date(update.scheduled_at * 1000).toLocaleString()}`);
          console.log(`     "${preview}"`);
        });
        if (pending.updates.length > 3) {
          console.log(`  ... and ${pending.updates.length - 3} more`);
        }
      } else {
        console.log('  (No posts scheduled)');
      }
    }
  } catch (err) {
    console.log(`❌ Error: ${err.message}\n`);
  }

  console.log('\n');
}

function showEnhancerPrompt(platform, draftNum) {
  const draft = DRAFTS[platform]?.[draftNum];
  if (!draft) {
    console.log(`\n❌ Draft not found\n`);
    return;
  }

  const content = draft.thread ? draft.thread.join('\n\n---\n\n') : draft.content;

  console.log('\n' + '═'.repeat(60));
  console.log('🔍 COPYWRITING ENHANCER PROMPTS');
  console.log('═'.repeat(60));
  console.log('\nCopy these prompts into Claude/ChatGPT with your draft:\n');

  console.log('─'.repeat(60));
  console.log('1. ADVERSARIAL PERSONAS\n');
  console.log(`Run this content through three personas:

THE RUTHLESS COMPETITOR: Find every weakness to exploit.
THE CYNICAL CONSUMER: What triggers your BS detector?
THE DISTRACTED SCROLLER: 0.8 seconds of attention - what stops your thumb?

Content:
---
${content}
---

List specific critiques from each. What must be fixed?`);

  console.log('\n' + '─'.repeat(60));
  console.log('2. SPECIFICITY AUDIT\n');
  console.log(`Flag every vague statement. Rewrite with numbers, timeframes, or concrete details.

Content:
---
${content}
---`);

  console.log('\n' + '─'.repeat(60) + '\n');
}

// ============================================
// MAIN
// ============================================

function showHelp() {
  console.log(`
GTM Skills Distribution (Buffer GUI Workflow)

Usage:
  node distribute.js --list                Show all drafts
  node distribute.js --preview twitter 1   Preview a draft (formatted)
  node distribute.js --copy twitter 1      Raw content to copy/paste
  node distribute.js --enhance twitter 1   Get enhancer prompts

Workflow:
  1. Preview draft with --preview
  2. Copy content (or use --copy for raw output)
  3. Paste into publish.buffer.com
  4. Schedule and post!

LinkedIn Timing (ENFORCED):
  🚫 BLOCKED: 8:00 AM - 5:30 PM EST
  ✅ ALLOWED: 6:00-7:45 AM or 5:45-9:00 PM EST

Status:
  Buffer API deprecated - using GUI workflow
  Future: Direct Twitter/LinkedIn API integration
  `);
}

function copyDraft(platform, draftNum) {
  const draft = DRAFTS[platform]?.[draftNum];

  if (!draft) {
    console.log(`\n❌ Draft not found: ${platform} #${draftNum}\n`);
    return;
  }

  // LinkedIn timing warning
  if (platform === 'linkedin') {
    const validation = validateLinkedInTiming();
    if (!validation.valid) {
      console.log('\n⚠️  REMINDER: ' + validation.message.split('\n')[0]);
      console.log('   Schedule for 6:30 AM or 6:00 PM EST\n');
    }
  }

  console.log('\n' + '═'.repeat(60));
  console.log(`📋 COPY THIS → paste into Buffer`);
  console.log('═'.repeat(60) + '\n');

  if (draft.thread) {
    console.log('=== TWEET 1 (Post this first) ===\n');
    console.log(draft.thread[0]);
    console.log('\n=== REMAINING TWEETS (Add to thread) ===\n');
    draft.thread.slice(1).forEach((tweet, i) => {
      console.log(`--- Tweet ${i + 2} ---`);
      console.log(tweet);
      console.log('');
    });
  } else {
    if (draft.title) {
      console.log(`TITLE: ${draft.title}\n`);
      console.log('BODY:\n');
    }
    console.log(draft.content);
  }

  console.log('\n' + '═'.repeat(60));
  console.log('Next: Paste into publish.buffer.com → Schedule');
  console.log('═'.repeat(60) + '\n');
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes('--help')) {
    showHelp();
    return;
  }

  if (args.includes('--list')) {
    await listDrafts();
    return;
  }

  if (args.includes('--preview')) {
    const idx = args.indexOf('--preview');
    const platform = args[idx + 1];
    const draftNum = parseInt(args[idx + 2]);
    await previewDraft(platform, draftNum);
    return;
  }

  if (args.includes('--copy')) {
    const idx = args.indexOf('--copy');
    const platform = args[idx + 1];
    const draftNum = parseInt(args[idx + 2]);
    copyDraft(platform, draftNum);
    return;
  }

  if (args.includes('--enhance')) {
    const idx = args.indexOf('--enhance');
    const platform = args[idx + 1];
    const draftNum = parseInt(args[idx + 2]);
    showEnhancerPrompt(platform, draftNum);
    return;
  }

  showHelp();
}

main().catch(console.error);
