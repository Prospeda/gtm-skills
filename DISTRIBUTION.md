# GTM Skills Distribution Workflow

## Quick Start

```bash
# Step 1: Preview content
node scripts/distribute.js --list          # See all drafts
node scripts/distribute.js --preview twitter 1   # Preview specific draft

# Step 2: Copy content, paste into Buffer GUI
# Open https://publish.buffer.com

# Step 3 (optional): Run enhancers before posting
node scripts/distribute.js --enhance twitter 1
```

---

## Progress & Roadmap

### Current Status: Buffer GUI (Manual)
- ✅ Content drafts ready (2 Twitter, 2 LinkedIn, 2 Reddit)
- ✅ CLI tool for preview/enhance
- ✅ `/distribute` slash command
- ✅ LinkedIn timing guard (blocks 8am-5:30pm EST)
- ⏸️ Buffer API blocked (they deprecated new developer apps)

### Future: Pure API Integration
When we want full automation:

| Platform | API Status | Setup Required |
|----------|------------|----------------|
| Twitter/X | Available | developer.twitter.com → Create app → Get OAuth tokens |
| LinkedIn | Available | linkedin.com/developers → Create app → OAuth 2.0 flow |
| Reddit | Restricted | PRAW library, but posting APIs are limited |
| Buffer | ❌ Blocked | No longer accepting new developer apps |

**Next steps for API automation:**
1. [ ] Set up Twitter Developer account ($100/mo for basic API)
2. [ ] Build OAuth flow for Twitter posting
3. [ ] Add thread support (post all tweets in sequence)
4. [ ] LinkedIn API integration (complex but doable)
5. [ ] Consider alternatives: Typefully API, Hypefury API

**For now:** Buffer GUI works perfectly. Copy → Paste → Schedule.

---

## The Story Angle

**Core narrative:** "I built an agentic sales stack that transforms how AEs work. Here's the open-source prompt library that powers it."

**Key points to hit:**
- 2,500+ prompts, fully open source
- Built programmatically (pSEO angle for tech audience)
- Solves real AE pain: research, personalization, follow-up
- Not a product pitch - genuine resource sharing

---

## Platform Tones

### Twitter/X Tone
- **Vibe:** Builder sharing work, slightly irreverent, dense value
- **Format:** Thread (7-10 tweets), hook + substance + resource
- **Audience:** Sales tech builders, SDR/AE practitioners, AI enthusiasts
- **What works:** Specificity, contrarian takes, "here's exactly how" energy

### LinkedIn Tone
- **Vibe:** Professional but human, insight-led, generous expertise
- **Format:** Single post with line breaks, story arc, soft CTA
- **Audience:** Sales leaders, RevOps, GTM executives
- **What works:** Pattern interrupts, relatable pain, actionable frameworks

### Reddit Tone
- **Vibe:** Peer sharing genuinely useful thing, zero self-promotion smell
- **Format:** Text post, context → problem → solution → resource
- **Audience:** Skeptical practitioners who hate being sold to
- **What works:** "I made this, thought you'd find it useful" energy

---

## Content Drafts

### TWITTER THREAD - Draft 1

```
HOOK (Tweet 1):
I mass quit traditional sales. Got my AE team off research hamster wheels.

Built an agentic stack instead. Open-sourced the whole prompt library.

2,500+ prompts. Here's how it works: 🧵

---

Tweet 2:
The old AE workflow is broken:

→ 30 min researching one account
→ Copy-paste the same email template
→ "Personalize" by adding their name
→ Wonder why reply rates suck

We fixed this with 3 agents.

---

Tweet 3:
AGENT 1: Research

Pulls 10-K filings, news, LinkedIn, job postings.
Outputs a 1-page brief per account in seconds.

Not summaries. Actual sales angles:
- Trigger events
- Pain indicators
- Champion candidates
- Competitive intel

---

Tweet 4:
AGENT 2: Personalization

Takes research brief → generates messaging.

Not "Hi {first_name}" garbage.

Real personalization:
- References their Q3 earnings call
- Connects to their hiring patterns
- Speaks to their specific tech stack

---

Tweet 5:
AGENT 3: Execution

Orchestrates the sequence.
Human approves before send.

Handles:
- Multi-channel timing
- Reply classification
- Meeting booking
- Follow-up logic

---

Tweet 6:
The prompts behind these agents?

I packaged all of them.

2,500+ prompts organized by:
- Industry (SaaS, FinTech, Healthcare...)
- Role (SDR, AE, CSM...)
- Workflow (Research, Outreach, Discovery...)

Every combination has specific prompts.

---

Tweet 7:
Examples:

"SaaS AE Discovery Questions" - 15 prompts
"FinTech Objection Handling" - 12 prompts
"Healthcare MEDDPICC Qualification" - 10 prompts

Not generic. Industry + role + workflow specific.

---

Tweet 8:
Why open source this?

Because the prompts aren't the moat.

The moat is:
- Your ICP knowledge
- Your use cases
- Your iteration speed

The prompts are just the starting point.

---

Tweet 9:
Grab them here:

github.com/Prospeda/gtm-skills

Or browse the site:
gtm-skills.com/prompts

MIT license. Copy, modify, build on top.

If you use them, tell me what works.

---

Tweet 10:
Building something similar?

Reply with your stack. Curious what others are running.

Especially interested in:
- What research sources you use
- How you handle human-in-the-loop
- Your biggest automation wins
```

### TWITTER THREAD - Draft 2 (More Technical)

```
HOOK:
Built a pSEO system that generated 420 sales prompt pages automatically.

Each page ranks for long-tail keywords like "SaaS SDR cold email MEDDPICC"

Here's the architecture: 🧵

---

Tweet 2:
The insight:

Sales people search for specific combinations:
- "fintech AE discovery questions"
- "healthcare objection handling"
- "manufacturing cold email templates"

One page can't rank for all of these.
420 pages can.

---

Tweet 3:
The data model:

8 industries × 6 roles × 6 workflows = 288 combinations

Each combination gets:
- Unique URL
- Generated prompts
- Industry-specific context
- Internal links to related pages

---

Tweet 4:
The prompt generation:

Not GPT slop. Structured templates with variables:

```
function getPrompts(industry, role, workflow) {
  // Inject industry.painPoints
  // Inject role.activities
  // Inject workflow.stages
  // Return 5 contextual prompts
}
```

---

Tweet 5:
The stack:

- Next.js 16 with App Router
- generateStaticParams() for all combinations
- Dynamic sitemap generation
- Vercel for hosting

Build time: 44 seconds for 500+ pages.

---

Tweet 6:
SEO mechanics:

Each page has:
- Unique title: "{Industry} {Role} {Workflow} Prompts"
- Meta description with keywords
- Schema markup
- Internal links to adjacent combinations

Google sees 420 unique, indexable pages.

---

Tweet 7:
Early results (2 weeks in):

- 421 pages indexed
- Ranking for 50+ long-tail keywords
- 0 paid promotion

Waiting to see if Google keeps them indexed or flags as programmatic.

---

Tweet 8:
The whole thing is open source:

github.com/Prospeda/gtm-skills

/src/data/pseo.ts - all the data
/src/app/prompts/[...slug] - the dynamic route

Fork it. Build your own pSEO system.

---

Tweet 9:
What's next:

- Tracking which pages rank
- Doubling down on winners
- Adding more combinations (tonality × use case)

Will share results in 30 days.

Follow if you want the update.
```

---

### LINKEDIN POST - Draft 1

```
I rebuilt how my AE team works.

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

Curious if anyone else is running agent-based systems.
```

---

### LINKEDIN POST - Draft 2 (Story-Led)

```
Last month an AE on my team booked 12 meetings in one week.

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

Genuine question - trying to learn from what others are testing.
```

---

### REDDIT r/sales - Draft 1

```
TITLE: I open-sourced 2,500+ sales prompts organized by industry/role/workflow - free to use

---

Hey r/sales,

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

Not trying to sell anything. No email capture or gated content. Just a resource I found useful and figured others might too.
```

---

### REDDIT r/sales - Draft 2 (Problem-Led)

```
TITLE: Spent 6 months building prompts for my sales team - sharing the full library (free)

---

Context: I run a small sales team and got frustrated with how much time we spent on repetitive tasks - research, writing first drafts of emails, prepping for discovery calls.

So I started building prompts. A lot of them.

After 6 months, I had 2,500+ prompts organized by industry, role, and workflow. Decided to open-source the whole thing.

**The problem I was solving:**

Generic prompts suck. "Write a cold email to a prospect" doesn't help when you're selling compliance software to healthcare CFOs.

So I built prompts that are specific:
- Industry context (pain points, buyers, regulations)
- Role context (what SDRs need vs what AEs need)
- Workflow context (research vs outreach vs discovery)

**What's in there:**

- 8 industries × 6 roles × 6 workflows = hundreds of specific combinations
- Each combination has 5-10 prompts
- Prompts for research, personalization, qualification, objection handling, follow-up

**Example:**

Instead of "Write a discovery question," you get:

"Create 10 discovery questions for a healthcare CFO focused on compliance costs, reimbursement pressures, and EHR integration challenges. Include questions about their decision process and timeline."

**Link:**

gtm-skills.com/prompts

Or the GitHub: github.com/Prospeda/gtm-skills

No signup, no email capture, no catch. MIT license.

**Ask:**

What prompts would be useful that aren't in there? Happy to add more if there's demand for specific industries or workflows.
```

---

### REDDIT r/ChatGPT - Draft 1

```
TITLE: I built a system that generates 2,500+ unique prompt pages programmatically - here's how

---

Wanted to share a project I just finished.

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

**How I built it:**

Next.js with dynamic routes. The data structure looks like:

```javascript
industries = [{ slug: 'saas', painPoints: [...], buyers: [...] }]
roles = [{ slug: 'sdr', activities: [...] }]
workflows = [{ slug: 'cold-outreach', stages: [...] }]

// Generate prompts by injecting context
function generatePrompts(industry, role, workflow) {
  // Returns 5-10 contextual prompts
}
```

The `generateStaticParams()` function creates all combinations at build time.

**Results:**

- 420+ pages generated in 44 seconds
- Each page has unique, contextual prompts
- All indexed by Google

**The prompts themselves:**

Open source: github.com/Prospeda/gtm-skills
Browse: gtm-skills.com/prompts

If you're building something similar (prompt libraries, pSEO systems), happy to answer questions about the architecture.
```

---

## Copywriting Enhancers

### Enhancer #1: Three Adversarial Personas

Before posting, run content through:

**The Ruthless Competitor:**
> "You're a competing sales tool's CMO. Find every weakness, every claim to counter, every angle to attack."

**The Cynical Consumer:**
> "You've been burned by 47 similar promises. What triggers your BS detector? What would crack your skepticism?"

**The Distracted Scroller:**
> "You're on your phone at 11pm, half-watching Netflix. You'll give this 0.8 seconds. What stops your thumb?"

**Synthesis:** Any element that fails ANY persona gets rebuilt.

---

### Enhancer #2: Objection Gauntlet

> "Have the most skeptical [target persona] list every objection, doubt, or reason they'd stop reading. Address each within the copy. Repeat until objection rate < 10%."

---

### Enhancer #3: Specificity Audit

> "Replace any vague statement with concrete specificity: numbers, timeframes, mechanisms, sensory details. If a line could apply to any competitor, it's not specific enough."

---

### Enhancer #4: Voice Authenticity Test

> "Read aloud as if speaking to a customer at a coffee shop. Flag any phrase that sounds written rather than spoken, any corporate-speak, any line that glazes eyes."

---

## Adding New Prompt Styles

To add a new copywriting style, append to this section:

### [STYLE NAME]

**When to use:** [context]

**The prompt:**
```
[Your enhancer prompt here]
```

**Example output:**
```
[Before/after example]
```

---

## How to Post (Buffer GUI)

### Step-by-Step

1. **Preview your content**
   ```bash
   node scripts/distribute.js --preview twitter 1
   ```

2. **Open Buffer**
   - Go to [publish.buffer.com](https://publish.buffer.com)
   - Make sure Twitter + LinkedIn are connected

3. **Create post**
   - Click "Create" or the compose button
   - Select the platform (Twitter or LinkedIn)
   - Paste the content from the preview

4. **Schedule**
   - **Twitter:** Tuesday-Thursday, 9:00 AM EST
   - **LinkedIn:** Tuesday-Thursday, 6:30 AM or 6:00 PM EST (NOT during work hours!)
   - **Reddit:** Post directly on reddit.com (Buffer doesn't support)

5. **For Twitter threads**
   - Paste first tweet
   - Click "Add to thread" for each subsequent tweet
   - Or use Twitter's native composer for better thread UX

### LinkedIn Timing Rules

```
🚫 BLOCKED: 8:00 AM - 5:30 PM EST (work hours)

✅ ALLOWED:
   • Early morning: 6:00 AM - 7:45 AM EST
   • Early evening: 5:45 PM - 9:00 PM EST
```

**Why?** LinkedIn during work hours looks like you're not working. Early AM = "thought leader grinding before work." Evening = "reflecting on the day."

---

## Future: Direct API Integration

Buffer deprecated their API for new apps. When we want full automation:

### Twitter API v2
```bash
# Requires: developer.twitter.com account (~$100/mo for basic)
npm install twitter-api-v2
```

```javascript
const { TwitterApi } = require('twitter-api-v2');

const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
});

async function postThread(tweets) {
  let lastTweetId = null;
  for (const tweet of tweets) {
    const response = await client.v2.tweet({
      text: tweet,
      reply: lastTweetId ? { in_reply_to_tweet_id: lastTweetId } : undefined
    });
    lastTweetId = response.data.id;
  }
}
```

### LinkedIn API
```javascript
// Requires: linkedin.com/developers app + OAuth 2.0
const axios = require('axios');

async function postToLinkedIn(accessToken, authorId, text) {
  return axios.post('https://api.linkedin.com/v2/ugcPosts', {
    author: `urn:li:person:${authorId}`,
    lifecycleState: 'PUBLISHED',
    specificContent: {
      'com.linkedin.ugc.ShareContent': {
        shareCommentary: { text },
        shareMediaCategory: 'NONE'
      }
    },
    visibility: { 'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC' }
  }, {
    headers: { 'Authorization': `Bearer ${accessToken}` }
  });
}
```

### Reddit
Manual posting only. Reddit's API restricts automated posts for new apps.

---

## Launch Checklist

### Pre-Launch (Day Before)
- [ ] Final review of all drafts
- [ ] Run through copywriting enhancers
- [ ] Test all links (gtm-skills.com, GitHub)
- [ ] Prepare images/screenshots if needed
- [ ] Set up Buffer queue OR API credentials

### Launch Day
- [ ] 9:00 AM EST - Post Twitter thread
- [ ] 9:30 AM EST - Post LinkedIn
- [ ] 10:00 AM EST - Post to r/sales
- [ ] 10:30 AM EST - Post to r/ChatGPT (if doing)
- [ ] Monitor engagement, reply to comments

### Post-Launch
- [ ] Engage with every comment (first 2 hours critical)
- [ ] Cross-reference: "Also shared on Twitter if you want to RT"
- [ ] Track: impressions, clicks, GitHub stars
- [ ] Note what resonates for future content

---

## Metrics to Track

| Platform | Metric | Target |
|----------|--------|--------|
| Twitter | Impressions | 50K+ |
| Twitter | Profile visits | 500+ |
| LinkedIn | Impressions | 20K+ |
| LinkedIn | Comments | 50+ |
| Reddit | Upvotes | 100+ |
| GitHub | Stars (delta) | +50 |
| Site | Traffic (24h) | 1K+ |

---

## Notes

- Reddit is most sensitive to self-promotion. Lead with value, mention link casually
- Twitter threads perform best with strong hook + substance in first 3 tweets
- LinkedIn algorithm favors comments in first hour - engage aggressively
- Best posting times: Tuesday-Thursday, 9-11am EST

---

*Last updated: 2026-01-29*
