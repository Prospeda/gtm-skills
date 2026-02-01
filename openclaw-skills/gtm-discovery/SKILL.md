---
name: gtm-discovery
description: Generate discovery questions using MEDDPICC, SPIN, Challenger, and other proven sales frameworks.
homepage: https://gtm-skills.com/prompts/discovery
metadata: {"openclaw":{"emoji":"🔍","requires":{"bins":["curl"]}}}
---

# GTM Discovery

Master discovery calls with framework-driven questions that uncover real pain.

## MEDDPICC Questions

### Metrics
```
- How are you currently measuring success in this area?
- What would a 20% improvement mean for the business?
- What metrics does your leadership care most about?
- How do you track ROI on initiatives like this?
```

### Economic Buyer
```
- Who ultimately signs off on investments like this?
- Walk me through your approval process
- Who else needs to be involved in this decision?
- What does [economic buyer] care most about?
```

### Decision Criteria
```
- What are your top 3 priorities when evaluating solutions?
- What would make this a "must have" vs "nice to have"?
- How important is [specific capability] vs [other capability]?
- What's worked well with tools you've bought before?
```

### Decision Process
```
- Walk me through how you've made similar decisions
- What's the typical timeline for a purchase like this?
- Who needs to be involved at each stage?
- What could slow this down or speed it up?
```

### Paper Process
```
- What does procurement look like at [company]?
- Are there security or legal reviews required?
- What's the typical contract process?
- Any budget cycles we should be aware of?
```

### Identify Pain
```
- What's the biggest challenge you're facing with [area]?
- How long has this been a problem?
- What happens if you don't solve this?
- What have you tried before?
```

### Champion
```
- Who internally is most passionate about solving this?
- Who would benefit most from a solution?
- Is there someone who's driven initiatives like this before?
- Who would be our go-to person for feedback?
```

### Competition
```
- What other options are you considering?
- What do you like about [competitor]?
- Have you used anything like this before?
- What would make us stand out vs alternatives?
```

## SPIN Questions

### Situation (Current State)
```
- Walk me through your current process for [area]
- How many people are involved in [process]?
- What tools are you using today?
- How long have you been doing it this way?
```

### Problem (Pain Points)
```
- What's the biggest frustration with the current approach?
- Where do things break down?
- What takes longer than it should?
- What do your team members complain about most?
```

### Implication (Impact)
```
- What does that cost you in terms of [time/money/resources]?
- How does this affect your team's morale?
- What opportunities are you missing because of this?
- If this continues, what happens in 6 months?
```

### Need-Payoff (Value)
```
- If you could solve this, what would that mean for [metric]?
- How would your team's day-to-day change?
- What would you do with the time/money saved?
- What becomes possible that isn't today?
```

## Challenger Questions

### Teach (Reframe Their Thinking)
```
- Have you considered that [counterintuitive insight]?
- What if the real issue isn't [obvious problem] but [root cause]?
- Companies like [peer] are seeing [trend] - is that on your radar?
- The data shows [insight] - how does that match your experience?
```

### Tailor (Connect to Their Priorities)
```
- Given your focus on [priority], how does [insight] apply?
- For someone in your role, the biggest lever is usually [X] - agree?
- What would [CEO/board] say is the #1 priority right now?
- How does this connect to your [specific initiative]?
```

### Take Control (Guide the Process)
```
- Based on what you've shared, here's what I'd recommend...
- Let me suggest a different way to think about this...
- The most successful customers do [X] first - does that make sense?
- I'd push back on that approach - here's why...
```

## Persona-Specific Questions

### VP of Sales
```
- What's your biggest pipeline challenge right now?
- How accurate is your forecast?
- What's your average ramp time for new reps?
- Where are deals getting stuck?
```

### VP of Marketing
```
- How do you measure marketing's impact on revenue?
- What's your biggest lead quality challenge?
- How aligned are you with sales on definitions?
- What's your CAC trend looking like?
```

### CTO / VP Engineering
```
- What's your biggest technical debt challenge?
- How do you balance build vs buy?
- What's the timeline pressure on this?
- Who needs to sign off on integrations?
```

### CFO
```
- How do you evaluate ROI on initiatives like this?
- What's the payback period you typically need?
- How does this fit into budget planning?
- What financial metrics matter most?
```

### CEO
```
- What's keeping you up at night?
- What's the board focused on?
- Where's the biggest gap vs plan?
- What would move the needle most?
```

## Discovery Call Structure

```
1. Rapport & Agenda (3 min)
   "Thanks for taking the time. My goal is to understand your
   situation and see if there's a fit. Sound good?"

2. Situation Questions (10 min)
   Current state, tools, team, process

3. Problem Questions (10 min)
   Challenges, frustrations, gaps

4. Implication Questions (10 min)
   Impact, cost, consequences

5. Need-Payoff Questions (5 min)
   Value of solving, priorities

6. Next Steps (2 min)
   Summarize, agree on action
```

## Generate Custom Questions

```bash
curl -X POST "https://gtm-skills.com/api/v1/prompts/recommend" \
  -H "Content-Type: application/json" \
  -d '{
    "context": "VP of Engineering at fintech startup",
    "framework": "MEDDPICC",
    "category": "discovery"
  }'
```

## Links

- [MEDDPICC templates](https://gtm-skills.com/prompts/meddpicc)
- [SPIN questions](https://gtm-skills.com/prompts/spin)
- [Challenger playbook](https://gtm-skills.com/prompts/challenger)
