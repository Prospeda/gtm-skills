---
name: gtm-prompts
description: Access 2,500+ battle-tested B2B sales prompts. Cold emails, discovery questions, objection handling, LinkedIn outreach, and more.
homepage: https://gtm-skills.com
metadata: {"openclaw":{"emoji":"🎯","requires":{"bins":["curl"]}}}
---

# GTM Prompts

Access the largest library of B2B sales prompts - 2,500+ templates used by top performers.

## Search Prompts

Find prompts by category:

```bash
# List all categories
curl -s "https://gtm-skills.com/api/v1/prompts" | jq '.categories'

# Get cold email prompts
curl -s "https://gtm-skills.com/api/v1/prompts?category=cold-email" | jq '.prompts[:5]'

# Get discovery questions
curl -s "https://gtm-skills.com/api/v1/prompts?category=discovery" | jq '.prompts[:5]'

# Get objection handling
curl -s "https://gtm-skills.com/api/v1/prompts?category=objection-handling" | jq '.prompts[:5]'

# Search by keyword
curl -s "https://gtm-skills.com/api/v1/prompts?q=MEDDPICC" | jq '.prompts'
```

## Categories

| Category | Description | Count |
|----------|-------------|-------|
| `cold-email` | First-touch outreach emails | 400+ |
| `follow-up` | Follow-up sequences | 200+ |
| `linkedin` | Connection requests & InMails | 300+ |
| `discovery` | MEDDPICC, SPIN, Challenger questions | 500+ |
| `objection-handling` | Handle any objection | 300+ |
| `meeting-prep` | Agendas and talking points | 200+ |
| `closing` | Negotiation and close | 150+ |
| `voicemail` | Phone scripts | 100+ |
| `referral` | Ask for intros | 100+ |
| `breakup` | Final attempt emails | 50+ |

## Get Recommendations

Get contextual prompt recommendations:

```bash
curl -X POST "https://gtm-skills.com/api/v1/prompts/recommend" \
  -H "Content-Type: application/json" \
  -d '{
    "context": "VP of Sales at a Series B SaaS company",
    "goal": "book a discovery call",
    "channel": "email"
  }' | jq '.recommendations'
```

## Get a Specific Prompt

```bash
# Get prompt by ID
curl -s "https://gtm-skills.com/api/v1/prompts/cold-email-series-b" | jq '.'
```

## Top Rated Prompts

See what's working for the community:

```bash
# Get leaderboard
curl -s "https://gtm-skills.com/api/v1/leaderboard" | jq '.prompts[:10]'

# Get prompts with highest success rate
curl -s "https://gtm-skills.com/api/v1/leaderboard?sort=success_rate" | jq '.prompts[:5]'
```

## Report Outcomes

Track what works:

```bash
# Report a successful outcome
curl -X POST "https://gtm-skills.com/api/v1/prompts/cold-email-series-b/outcome" \
  -H "Content-Type: application/json" \
  -d '{"outcome": "meeting_booked", "value": 50000}'
```

## Example: Find the Right Prompt

```
You: I need to reach out to a CTO who just raised funding

OpenClaw: Let me search GTM Skills for relevant prompts...

Found 12 matching prompts:

1. "Series Funding Congratulations" (cold-email)
   Rating: 4.8/5 | 234 uses | 18% reply rate

2. "CTO Technical Value Prop" (cold-email)
   Rating: 4.6/5 | 189 uses | 15% reply rate

3. "Funding Trigger - Technical Buyer" (cold-email)
   Rating: 4.5/5 | 156 uses | 16% reply rate

Want me to show you the full template for any of these?
```

## Tips

- Use `category` filter first, then `q` for keyword search
- Check `success_rate` on leaderboard prompts
- Report outcomes to help the community
- Personalize templates - don't send verbatim

## Links

- [Browse all prompts](https://gtm-skills.com/prompts)
- [Community leaderboard](https://gtm-skills.com/leaderboard)
- [API documentation](https://gtm-skills.com/developers)
