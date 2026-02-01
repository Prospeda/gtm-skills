---
name: gtm-battlecards
description: Competitive intelligence and battlecards. Win against any competitor with trap questions and landmines.
homepage: https://gtm-skills.com/battlecards
metadata: {"openclaw":{"emoji":"⚔️","requires":{"bins":["curl"]}}}
---

# GTM Battlecards

Win competitive deals with battlecards, trap questions, and strategic positioning.

## Battlecard Template

```markdown
# Battlecard: [Competitor Name]

## Quick Facts
- **Founded:** {year}
- **HQ:** {location}
- **Funding:** {amount, investors}
- **Size:** {employees}
- **Target Market:** {segments}

## How We Win

### Our Strengths vs Them
| Area | Us | Them |
|------|-----|------|
| {area 1} | ✅ {advantage} | ❌ {weakness} |
| {area 2} | ✅ {advantage} | ❌ {weakness} |
| {area 3} | ✅ {advantage} | ❌ {weakness} |

### Their Strengths vs Us
| Area | Them | Us |
|------|------|-----|
| {area 1} | ✅ {strength} | How we counter: {response} |
| {area 2} | ✅ {strength} | How we counter: {response} |

## Trap Questions

Questions to ask prospects that expose competitor weaknesses:

1. "How important is {area where we're strong} to you?"
2. "Have you asked them about {specific capability they lack}?"
3. "What's their approach to {thing we do better}?"
4. "When you evaluated {competitor}, did they show you {feature they don't have}?"

## Landmines

Plant these ideas early to create doubt later:

1. "{Competitor} is known for {weakness}. Make sure to ask them how they handle that."
2. "Some companies in this space struggle with {area}. Worth asking about."
3. "The hidden cost with solutions like {competitor} is usually {cost}."

## When They Bring Up Competitor

### "We're also looking at [Competitor]"
```
"Great - they're solid at {acknowledge strength}.
The main difference is {key differentiator}.
Specifically, when it comes to {their priority}, we {advantage}.
What matters most to you between those?"
```

### "Competitor is cheaper"
```
"They might be on the sticker price.
Have you factored in {hidden cost 1} and {hidden cost 2}?
When we compare total cost, most customers find we're
actually {comparable/cheaper} when you account for {factors}."
```

### "Competitor has feature X"
```
"They do. Here's how we think about it differently:
{our philosophy/approach}.
The feedback we get is that {our approach} leads to {better outcome}.
What's driving the need for that specific feature?"
```

## Objection Responses

### "Competitor has more customers"
```
"They've been around longer, so that makes sense.
What I'd ask is - are those customers similar to you?
We've focused specifically on {your target segment} because {reason}.
[Customer similar to them] chose us over {competitor} because {reason}."
```

### "Competitor is the market leader"
```
"They have great brand recognition.
The question is whether 'market leader' means 'best fit for you.'
Companies like [customer] switched from them to us because {reason}.
What's driving your evaluation right now?"
```

### "Analyst report ranks them higher"
```
"Analyst reports are one data point.
They often weight {criteria} heavily, which favors {competitor}.
For companies like yours that care about {different criteria},
we consistently outperform. Worth talking to [reference]?"
```

## Competitive Positioning

### How to Position Against [Competitor Type]

**Legacy/Enterprise Players:**
- "They're great if you have 6 months and a big team to implement"
- "Built for a different era - before {modern requirement}"
- "You're paying for features designed for Fortune 500s"

**Cheap/Simple Tools:**
- "Perfect if your needs are basic - do you plan to grow?"
- "You get what you pay for in {critical area}"
- "Works until you need {capability they lack}"

**Point Solutions:**
- "Great at {one thing}, but then you need 5 other tools"
- "How do you see that integrating with {other needs}?"
- "Total cost of ownership includes all the glue between tools"

**New Startups:**
- "Innovative approach, but who's supporting them if things break?"
- "Are they going to be around in 3 years?"
- "How battle-tested is their {critical capability}?"

## Win/Loss Analysis Prompts

After a competitive deal, analyze:

```
1. Why did we win/lose?
   - Price? Features? Relationships? Timing?

2. What did competitor do well?
   - Messaging? Demo? Pricing strategy?

3. What could we have done better?
   - Earlier engagement? Different positioning?

4. What new intel did we gather?
   - Pricing? Features? Roadmap? Weaknesses?
```

## Competitive Intel Sources

| Source | What to Look For |
|--------|------------------|
| G2/Capterra reviews | Complaints, praise, comparisons |
| Job postings | Tech stack, team size, priorities |
| LinkedIn | Employee growth, churn, posts |
| Press releases | Funding, partnerships, features |
| Their blog | Positioning, roadmap hints |
| Webinars | How they sell, what they emphasize |
| Customer calls | What prospects say about them |

## Quick Reference: Common Competitors

```bash
# Get battlecard for specific competitor
curl -s "https://gtm-skills.com/api/v1/prompts?category=battlecards&competitor=salesforce" | jq '.'
```

## Links

- [All battlecards](https://gtm-skills.com/battlecards)
- [Competitive positioning](https://gtm-skills.com/prompts/competitive)
- [Win/loss templates](https://gtm-skills.com/prompts/win-loss)
