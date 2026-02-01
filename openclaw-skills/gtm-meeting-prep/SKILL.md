---
name: gtm-meeting-prep
description: Prepare for any sales meeting in 60 seconds. Discovery calls, demos, negotiations, and executive briefings.
homepage: https://gtm-skills.com/prompts/meeting-prep
metadata: {"openclaw":{"emoji":"📋","requires":{"bins":["curl"]}}}
---

# GTM Meeting Prep

Never walk into a meeting unprepared. Get briefs, agendas, and talking points instantly.

## Quick Prep

Just provide the context:

```
"Prepare me for a discovery call with DataSync tomorrow.
Series B fintech, 200 employees.
Meeting with the VP of Engineering."
```

## Meeting Brief Template

```markdown
## Meeting Brief: {Company}

**Date:** {date}
**Type:** {Discovery / Demo / Negotiation / QBR}
**Attendees:** {names and titles}

### Company Context
- **Industry:** {industry}
- **Size:** {employees / revenue}
- **Stage:** {funding stage}
- **Recent News:** {relevant news}

### Attendee Background
- **{Name}:** {title}, {tenure}, {background}
- **LinkedIn:** {observations from profile}
- **Priorities:** {likely priorities based on role}

### Agenda
1. {topic} ({time})
2. {topic} ({time})
3. {topic} ({time})
4. {topic} ({time})
5. Next steps ({time})

### Discovery Questions
- {question 1}
- {question 2}
- {question 3}
- {question 4}
- {question 5}

### Value Props to Highlight
- {relevant value prop 1}
- {relevant value prop 2}
- {relevant case study}

### Potential Objections
- {likely objection 1} → {response}
- {likely objection 2} → {response}

### Success Criteria
- {what does a successful meeting look like?}
- {next step to aim for}
```

## Discovery Call Prep

```markdown
## Discovery Call: {Company}

**Goal:** Understand their situation, uncover pain, qualify opportunity

### Agenda (45 min)
1. Intros & rapport (3 min)
2. Their current situation (10 min)
3. Challenges & priorities (15 min)
4. Our approach + examples (10 min)
5. Q&A + next steps (7 min)

### Opening
"Thanks for taking the time, {name}. My goal today is to understand
your situation and see if there's a fit. I'll ask a lot of questions,
share a bit about how we've helped similar companies, and we can
decide together if it makes sense to continue. Sound good?"

### Situation Questions
- Walk me through your current process for {area}
- How many people are involved?
- What tools are you using today?

### Problem Questions
- What's your biggest challenge with {area}?
- What have you tried before?
- What's the impact when things don't work?

### Implication Questions
- What does that cost you in terms of {time/money/resources}?
- What happens if this doesn't get solved this quarter?

### Closing
"Based on what you've shared, I think there's a fit. Here's what I'd
suggest for next steps: {specific next step}. Does that work for you?"
```

## Demo Prep

```markdown
## Demo: {Company}

**Goal:** Show relevant capabilities, build vision, advance deal

### Pre-Demo Checklist
- [ ] Reviewed discovery notes
- [ ] Customized demo environment
- [ ] Prepared relevant use cases
- [ ] Tested all features to show
- [ ] Backup plan if tech fails

### Demo Flow (30 min)
1. Recap their situation (3 min)
2. Show {feature 1} → {their use case} (7 min)
3. Show {feature 2} → {their use case} (7 min)
4. Show {feature 3} → {their use case} (7 min)
5. Q&A + next steps (6 min)

### Key Messages
- "Based on what you told me about {pain}, this is how we solve it..."
- "Companies like {similar customer} use this to {outcome}..."
- "The reason this matters for you is..."

### Questions to Ask During Demo
- "Is this similar to how you'd use it?"
- "What would this change for your team?"
- "What questions does this raise?"

### Objections to Prepare For
- {likely objection 1}
- {likely objection 2}
- {likely objection 3}

### Close
"Based on what you've seen, does this solve the {pain} we discussed?
What would be the next step to move forward?"
```

## Negotiation Prep

```markdown
## Negotiation: {Company}

**Deal Size:** ${amount}
**Stage:** {stage}
**Decision Date:** {date}

### Our Position
- **Target:** ${target}
- **Walk-away:** ${minimum}
- **Key terms:** {must-haves}
- **Flexibilities:** {nice-to-haves we can trade}

### Their Position (Estimated)
- **Budget:** ${their budget}
- **Concerns:** {their concerns}
- **Leverage:** {what leverage do they have}

### Value Justification
- ROI calculation: {show the math}
- Comparable deals: {similar customer paid $X}
- Cost of inaction: {what they lose by not buying}

### Trade-Offs Ready
| If they ask for... | We can offer... | In exchange for... |
|--------------------|-----------------|-------------------|
| Lower price | 10% discount | Annual prepay |
| Payment terms | Net 60 | 2-year commitment |
| Extra features | Add module X | Case study rights |

### Red Lines
- {thing we won't do}
- {thing we won't do}

### Closing Phrases
- "If we can get to ${X}, can you commit today?"
- "What would it take to get this done this week?"
- "Let me see what I can do - can you get approval if I come back with {X}?"
```

## Executive Briefing Prep

```markdown
## Executive Briefing: {Company}

**Attendee:** {C-level name and title}
**Time:** 30 min (they'll cut it to 15)

### One-Page Summary
**The Problem:** {one sentence}
**Our Solution:** {one sentence}
**The Ask:** {one sentence}

### Executive Summary (if they only give you 5 min)
"We help companies like {peer} solve {problem} by {solution}.
They've seen {result}. We'd like to {specific ask}."

### Key Questions for Executives
- What's your top priority this year?
- How does {area} fit into that?
- What would success look like?
- Who else needs to be involved?

### What Executives Care About
- ROI and business impact
- Risk mitigation
- Speed to value
- Strategic alignment

### What to Avoid
- Technical details (unless they ask)
- Feature dumps
- Long intros about your company
- Reading from slides
```

## Quick Prep Commands

```bash
# Get meeting prep template
curl -s "https://gtm-skills.com/api/v1/prompts?category=meeting-prep&type=discovery" | jq '.prompts[0]'

# Get persona-specific questions
curl -s "https://gtm-skills.com/api/v1/prompts?category=discovery&persona=vp-sales" | jq '.prompts'
```

## Links

- [Meeting prep templates](https://gtm-skills.com/prompts/meeting-prep)
- [Discovery frameworks](https://gtm-skills.com/prompts/discovery)
- [Demo best practices](https://gtm-skills.com/prompts/demo)
