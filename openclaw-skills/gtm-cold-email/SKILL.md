---
name: gtm-cold-email
description: Generate personalized cold emails that get responses. Uses proven templates from GTM Skills.
homepage: https://gtm-skills.com/prompts/cold-email
metadata: {"openclaw":{"emoji":"📧","requires":{"bins":["curl"]}}}
---

# GTM Cold Email

Generate hyper-personalized cold emails using battle-tested templates.

## Quick Generate

Ask naturally:
```
"Write a cold email to Sarah Chen, VP of Sales at Acme Corp.
They just raised Series B funding. We help reduce sales cycles by 30%."
```

## Email Types

### First Touch
Initial outreach - short, personalized, clear CTA.

**Template:**
```
Subject: Quick question about {pain_point}

Hi {first_name},

{personalization_hook}

Quick question: {relevant_question}

We've helped companies like {similar_company} {result}.

Worth a 15-min chat?

{signature}
```

**Example:**
```
Subject: Quick question about SDR ramp time

Hi Sarah,

Saw Acme just closed Series B - congrats on the momentum.

Quick question: with the growth ahead, how are you thinking about ramping new reps faster?

We've helped teams like Datadog cut ramp time from 6 months to 3.

Worth a 15-min chat to see if there's a fit?

Best,
Alex
```

### Follow-Up (Day 3)
```
Subject: Re: Quick question about {pain_point}

Hi {first_name},

Following up on my note below.

{new_value_add_or_insight}

Would {day} at {time} work for a quick call?

{signature}
```

### Follow-Up (Day 7)
```
Subject: {company} + {your_company}

Hi {first_name},

Wanted to share something relevant - {insight_or_case_study}.

{one_line_connection_to_their_situation}

Open to a quick chat this week?

{signature}
```

### Breakup Email
```
Subject: Should I close your file?

Hi {first_name},

I've reached out a few times and haven't heard back.

I'm guessing {timing/priority/fit} isn't right.

If things change, I'm here. Either way, I'll stop filling your inbox.

All the best,
{signature}
```

## Personalization Triggers

Use these hooks based on prospect context:

| Trigger | Hook Example |
|---------|--------------|
| Funding | "Congrats on the Series B..." |
| New role | "Saw you just joined as VP..." |
| Hiring | "Noticed you're hiring 10 SDRs..." |
| Product launch | "The new feature looks great..." |
| Earnings | "Strong Q3 numbers..." |
| Event | "Enjoyed your talk at SaaStr..." |
| Content | "Your post about X resonated..." |
| Mutual connection | "Alex mentioned you're thinking about..." |

## Subject Line Formulas

High-performing patterns:

```
Quick question about {their_priority}
{mutual_connection} suggested I reach out
Congrats on {recent_news}
{their_company} + {your_company}
Idea for {their_goal}
{competitor} vs {your_company}
Saw your post about {topic}
```

## What NOT to Do

❌ "I hope this email finds you well"
❌ "I wanted to reach out because..."
❌ "We're the leading provider of..."
❌ "I'd love to pick your brain"
❌ Emails over 100 words
❌ Multiple CTAs
❌ Attachments on first touch

## Generate with Context

```bash
curl -X POST "https://gtm-skills.com/api/v1/prompts/recommend" \
  -H "Content-Type: application/json" \
  -d '{
    "context": "VP of Sales, Series B SaaS, hiring SDRs",
    "goal": "book discovery call",
    "channel": "email",
    "type": "first_touch"
  }'
```

## A/B Test Subject Lines

For any prospect, generate 3 subject line variations:

```
You: Give me 3 subject lines for Sarah Chen, VP Sales at Acme

1. "Quick question about SDR productivity"
2. "Congrats on the Series B, Sarah"
3. "Acme + [Your Company] - quick sync?"
```

## Links

- [Cold email templates](https://gtm-skills.com/prompts/cold-email)
- [Subject line formulas](https://gtm-skills.com/prompts/subject-lines)
- [Follow-up sequences](https://gtm-skills.com/prompts/follow-up)
