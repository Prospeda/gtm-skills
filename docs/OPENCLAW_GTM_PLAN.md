# OpenClaw GTM Skills - Ultimate Guide Plan

> **Goal:** Become THE definitive GTM toolkit for OpenClaw users
> **Target:** 10+ skills on ClawHub, featured in awesome-openclaw-skills
> **Timeline:** 1 week sprint

---

## Why This Matters

- OpenClaw has **68,000+ GitHub stars** - massive distribution
- ClawHub is the npm/PyPI of AI agents - discovery built-in
- Sales/GTM is underserved - only 1 "sales-toolkit" skill exists
- First-mover advantage on agentic sales tooling
- Every skill links back to gtm-skills.com

---

## The GTM Skills Suite (10 Skills)

### 1. `gtm-prompts` (Core)
**Description:** Access 2,500+ battle-tested GTM prompts from gtm-skills.com

```yaml
---
name: gtm-prompts
description: Access 2,500+ battle-tested B2B sales prompts. Cold emails, discovery questions, objection handling, and more.
homepage: https://gtm-skills.com
metadata: {"openclaw":{"emoji":"🎯","requires":{"bins":["curl"]}}}
---
```

**Capabilities:**
- Search prompts by category (cold_email, discovery, objection, etc.)
- Get personalized recommendations based on context
- Copy prompts with one command
- Track which prompts work (outcome reporting)

---

### 2. `gtm-cold-email`
**Description:** Generate hyper-personalized cold emails using GTM Skills templates

```yaml
---
name: gtm-cold-email
description: Generate personalized cold emails that get responses. Uses GTM Skills proven templates.
homepage: https://gtm-skills.com/prompts/cold-email
metadata: {"openclaw":{"emoji":"📧","requires":{"bins":["curl"]}}}
---
```

**Capabilities:**
- Generate cold emails from prospect context
- Multiple templates: first touch, follow-up, breakup
- Personalization using LinkedIn/company data
- A/B test subject lines

---

### 3. `gtm-linkedin`
**Description:** LinkedIn outreach messages that get connections

```yaml
---
name: gtm-linkedin
description: Write LinkedIn messages that get accepted. Connection requests, InMails, and follow-ups.
homepage: https://gtm-skills.com/prompts/linkedin
metadata: {"openclaw":{"emoji":"💼","requires":{"bins":["curl"]}}}
---
```

**Capabilities:**
- Connection request messages (under 300 chars)
- InMail templates
- Engagement comments for prospects' posts
- Follow-up sequences

---

### 4. `gtm-discovery`
**Description:** MEDDPICC, SPIN, and Challenger discovery questions

```yaml
---
name: gtm-discovery
description: Generate discovery questions using MEDDPICC, SPIN, Challenger, and other proven frameworks.
homepage: https://gtm-skills.com/prompts/discovery
metadata: {"openclaw":{"emoji":"🔍","requires":{"bins":["curl"]}}}
---
```

**Capabilities:**
- Framework-specific questions (MEDDPICC, SPIN, Challenger)
- Persona-specific questions (VP Sales, CTO, CFO)
- Industry-specific variations
- Pain discovery sequences

---

### 5. `gtm-objections`
**Description:** Handle any sales objection with proven responses

```yaml
---
name: gtm-objections
description: Handle sales objections like a pro. Budget, timing, competition, and 50+ more scenarios.
homepage: https://gtm-skills.com/prompts/objection-handling
metadata: {"openclaw":{"emoji":"🛡️","requires":{"bins":["curl"]}}}
---
```

**Capabilities:**
- 50+ objection templates
- Context-aware responses
- Acknowledge → Clarify → Reframe pattern
- Role-play practice mode

---

### 6. `gtm-meeting-prep`
**Description:** Prepare for any sales meeting in 60 seconds

```yaml
---
name: gtm-meeting-prep
description: Generate meeting briefs, agendas, and talking points for discovery calls, demos, and negotiations.
homepage: https://gtm-skills.com/prompts/meeting-prep
metadata: {"openclaw":{"emoji":"📋","requires":{"bins":["curl"]}}}
---
```

**Capabilities:**
- Discovery call agendas
- Demo talking points
- Executive briefings
- Negotiation prep

---

### 7. `gtm-research`
**Description:** Research prospects and accounts before outreach

```yaml
---
name: gtm-research
description: Research prospects, companies, and industries for personalized outreach. Combines multiple data sources.
homepage: https://gtm-skills.com
metadata: {"openclaw":{"emoji":"🔬","requires":{"bins":["curl"]}}}
---
```

**Capabilities:**
- Company research (funding, news, hiring)
- Prospect research (role, background, posts)
- Industry trends
- Competitive landscape

---

### 8. `gtm-voice`
**Description:** Voice call scripts and talk tracks

```yaml
---
name: gtm-voice
description: Cold call scripts, voicemail drops, and conversation guides for phone-based prospecting.
homepage: https://gtm-skills.com/voice-templates
metadata: {"openclaw":{"emoji":"📞","requires":{"bins":["curl"]}}}
---
```

**Capabilities:**
- Cold call openers
- Voicemail scripts (under 30 seconds)
- Gatekeeper navigation
- Call-to-meeting conversion

---

### 9. `gtm-battlecards`
**Description:** Competitive intelligence and battlecards

```yaml
---
name: gtm-battlecards
description: Win against competitors with battlecards, trap questions, and landmine positioning.
homepage: https://gtm-skills.com/battlecards
metadata: {"openclaw":{"emoji":"⚔️","requires":{"bins":["curl"]}}}
---
```

**Capabilities:**
- Competitor comparisons
- Trap questions to ask
- Landmines to set
- Win/loss analysis

---

### 10. `gtm-sequences`
**Description:** Multi-touch outreach sequences

```yaml
---
name: gtm-sequences
description: Complete outreach sequences combining email, LinkedIn, and phone touches over 14-21 days.
homepage: https://gtm-skills.com
metadata: {"openclaw":{"emoji":"🔄","requires":{"bins":["curl"]}}}
---
```

**Capabilities:**
- 5-touch email sequences
- Multi-channel cadences
- Re-engagement sequences
- Event-triggered follow-ups

---

## Directory Structure

```
openclaw-skills/
├── README.md                    # "The Ultimate GTM Toolkit for OpenClaw"
├── gtm-prompts/
│   └── SKILL.md
├── gtm-cold-email/
│   └── SKILL.md
├── gtm-linkedin/
│   └── SKILL.md
├── gtm-discovery/
│   └── SKILL.md
├── gtm-objections/
│   └── SKILL.md
├── gtm-meeting-prep/
│   └── SKILL.md
├── gtm-research/
│   └── SKILL.md
├── gtm-voice/
│   └── SKILL.md
├── gtm-battlecards/
│   └── SKILL.md
└── gtm-sequences/
    └── SKILL.md
```

---

## Implementation Steps

### Phase 1: Core Skills (Day 1-2)
1. Create `openclaw-skills/` directory in gtm-skills repo
2. Implement `gtm-prompts` skill (API integration)
3. Implement `gtm-cold-email` skill
4. Implement `gtm-linkedin` skill
5. Test locally with OpenClaw

### Phase 2: Discovery & Objections (Day 3)
6. Implement `gtm-discovery` skill
7. Implement `gtm-objections` skill
8. Implement `gtm-meeting-prep` skill

### Phase 3: Advanced Skills (Day 4)
9. Implement `gtm-research` skill
10. Implement `gtm-voice` skill
11. Implement `gtm-battlecards` skill
12. Implement `gtm-sequences` skill

### Phase 4: Polish & Publish (Day 5)
13. Create comprehensive README
14. Publish all skills to ClawHub
15. Submit PR to awesome-openclaw-skills
16. Create /openclaw page on gtm-skills.com
17. Announce on social

---

## API Endpoints Needed

The skills will call our existing API + new endpoints:

| Endpoint | Purpose | Status |
|----------|---------|--------|
| `GET /api/v1/prompts` | List prompts | Exists |
| `GET /api/v1/prompts?category=X` | Filter by category | Exists |
| `POST /api/v1/prompts/recommend` | Get recommendations | Exists |
| `GET /api/v1/voice/templates` | Voice templates | Exists |
| `POST /api/v1/generate/cold-email` | Generate cold email | NEW |
| `POST /api/v1/generate/linkedin` | Generate LinkedIn msg | NEW |
| `POST /api/v1/generate/discovery` | Generate questions | NEW |

---

## Marketing Plan

### ClawHub Listing
- Title: "GTM Skills - The Ultimate Sales Toolkit"
- Description: Professional sales prompts for cold email, LinkedIn, discovery, and more
- Tags: sales, gtm, b2b, cold-email, linkedin, prospecting

### awesome-openclaw-skills PR
- Add under "Productivity" or create new "Sales & GTM" category
- Include all 10 skills with descriptions

### Landing Page (/openclaw)
- Hero: "OpenClaw + GTM Skills = Agentic Sales"
- Quick install: `npx clawdhub install gtm-skills/gtm-prompts`
- Demo video showing skills in action
- Links to all individual skills

### Launch Announcement
- Twitter/X thread showing skills in action
- LinkedIn post targeting sales professionals
- Reddit: r/sales, r/salesengineering, r/openclaw
- Hacker News if timed with OpenClaw release

---

## Success Metrics

| Metric | Target (30 days) |
|--------|------------------|
| ClawHub installs | 1,000+ |
| GitHub stars (from backlinks) | +100 |
| gtm-skills.com traffic | +50% |
| API calls from OpenClaw | 10,000+ |

---

## Competitive Advantage

1. **First comprehensive GTM suite** - Others have single tools
2. **2,500+ prompts** - Massive library vs one-off templates
3. **API-backed** - Always up-to-date, not static files
4. **Community-driven** - Leaderboard integration
5. **Multi-framework** - MEDDPICC, SPIN, Challenger all in one

---

## Notes

- All skills should work offline with cached prompts
- Include examples in every SKILL.md
- Link to gtm-skills.com for extended functionality
- Consider premium tier for advanced features later
