---
name: gtm-research
description: Research prospects and accounts before outreach. Company intel, prospect background, and personalization hooks.
homepage: https://gtm-skills.com
metadata: {"openclaw":{"emoji":"🔬","requires":{"bins":["curl"]}}}
---

# GTM Research

Research accounts and prospects to personalize your outreach and prep for calls.

## Quick Research

```
"Research Acme Corp before my call tomorrow"
"Find personalization hooks for Sarah Chen, VP of Sales at DataSync"
"What's happening at CloudFirst that I should know about?"
```

## Company Research

### What to Look For

| Signal | Where to Find | How to Use |
|--------|---------------|------------|
| Funding | Crunchbase, news | "Congrats on the Series B..." |
| Hiring | LinkedIn, careers page | "Saw you're hiring SDRs..." |
| Product launch | Blog, PR | "The new feature looks interesting..." |
| Leadership change | LinkedIn, news | "Congrats on the new role..." |
| Earnings | SEC filings, news | "Strong quarter..." |
| Partnerships | PR, blog | "Interesting partnership with X..." |
| Awards | PR, website | "Congrats on the G2 recognition..." |
| Events | LinkedIn, Eventbrite | "Saw you'll be at SaaStr..." |

### Company Research Template

```markdown
## Company: {Name}

### Overview
- **Website:** {url}
- **Industry:** {industry}
- **Size:** {employees}
- **Funding:** {stage, amount, investors}
- **Founded:** {year}
- **HQ:** {location}

### Recent News (Last 90 Days)
- {news item 1}
- {news item 2}
- {news item 3}

### Tech Stack
- {tool 1}
- {tool 2}
- {tool 3}
(Source: BuiltWith, Wappalyzer, job postings)

### Key People
- **CEO:** {name}
- **{Target Persona}:** {name}
- **Other Relevant:** {names}

### Hiring Signals
- {open roles relevant to your solution}
- {team size changes}

### Competitive Landscape
- **Competitors:** {list}
- **Positioning:** {how they differentiate}

### Potential Pain Points
- {inferred pain 1}
- {inferred pain 2}

### Personalization Hooks
- {specific hook for outreach}
- {specific hook for outreach}
```

## Prospect Research

### What to Look For

| Signal | Where to Find | How to Use |
|--------|---------------|------------|
| New role | LinkedIn | "Congrats on joining..." |
| Promotion | LinkedIn | "Congrats on the promotion..." |
| Post/article | LinkedIn, blog | "Your post about X resonated..." |
| Podcast appearance | Spotify, YouTube | "Enjoyed your episode on..." |
| Speaking | Event sites | "Great talk at SaaStr..." |
| Mutual connection | LinkedIn | "We're both connected to..." |
| Shared background | LinkedIn | "Fellow [school/company] alum..." |
| Interests | LinkedIn, Twitter | "Saw you're into [hobby]..." |

### Prospect Research Template

```markdown
## Prospect: {Name}

### Professional
- **Title:** {current title}
- **Company:** {company} ({tenure})
- **Previous:** {past companies}
- **Education:** {schools}
- **LinkedIn:** {url}

### Recent Activity
- {recent post/comment}
- {recent article}
- {recent event}

### Background Insights
- {career pattern}
- {areas of expertise}
- {likely priorities in current role}

### Mutual Connections
- {name} - {relationship}
- {name} - {relationship}

### Personalization Hooks
1. {hook 1 - most relevant}
2. {hook 2}
3. {hook 3}

### Likely Objections
- {based on their background, they might say...}

### Approach Recommendation
- {recommended angle for outreach}
```

## Research Commands

### Using Public APIs

```bash
# Company info from Clearbit (if you have API key)
curl -s "https://company.clearbit.com/v2/companies/find?domain=acme.com" \
  -H "Authorization: Bearer $CLEARBIT_API_KEY" | jq '.'

# News via Google News RSS
curl -s "https://news.google.com/rss/search?q=acme+corp" | head -100

# Tech stack via BuiltWith
curl -s "https://api.builtwith.com/free1/api.json?KEY=$BUILTWITH_KEY&LOOKUP=acme.com" | jq '.'
```

### LinkedIn Research Tips

Since there's no LinkedIn API for research, here's how to use it effectively:

1. **Check "About" section** - Often has priorities and focus areas
2. **Review recent posts** - Shows what they care about
3. **Look at activity** - Comments reveal interests
4. **Check mutual connections** - Warm intro opportunities
5. **Review career history** - Understand their journey
6. **Note education** - Alumni connection possible
7. **See recommendations** - Learn what others value about them

## Personalization Framework

### The P.E.R.S.O.N.A.L. Method

**P** - Position (new role, promotion)
**E** - Event (conference, webinar)
**R** - Recent news (funding, launch)
**S** - Shared connection (mutual, alumni)
**O** - Opinion (their content, posts)
**N** - News about company
**A** - Achievement (award, milestone)
**L** - Location (local, moved)

### Examples

| Signal | Personalization |
|--------|----------------|
| New VP of Sales role | "Congrats on the new role - exciting time to be building the sales org at [company]" |
| Posted about hiring challenges | "Your post about ramping SDRs resonated - we've seen similar challenges" |
| Company raised Series B | "Congrats on the Series B - sounds like you're scaling fast" |
| Mutual connection with Alex | "Alex mentioned you're thinking about [topic] - thought I'd reach out" |
| Spoke at SaaStr | "Enjoyed your session on [topic] - the point about [specific] really stuck" |

## Research Checklist

Before any outreach:

- [ ] Company website - recent news, blog
- [ ] LinkedIn company page - posts, updates
- [ ] Crunchbase - funding, investors
- [ ] LinkedIn profile - role, tenure, posts
- [ ] Google News - recent coverage
- [ ] Twitter/X - recent activity
- [ ] Mutual connections - intro opportunities
- [ ] Job postings - hiring signals

## Links

- [Research templates](https://gtm-skills.com/prompts/research)
- [Personalization hooks](https://gtm-skills.com/prompts/personalization)
- [Account planning](https://gtm-skills.com/prompts/account-planning)
