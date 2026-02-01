# GTM Skills for OpenClaw

> **The Ultimate Sales Toolkit for Agentic Prospecting**

Turn your OpenClaw into a sales machine. 10 skills, 2,500+ prompts, battle-tested by top performers.

```bash
# Install the complete suite
npx clawdhub install gtm-skills/gtm-prompts
npx clawdhub install gtm-skills/gtm-cold-email
npx clawdhub install gtm-skills/gtm-linkedin
npx clawdhub install gtm-skills/gtm-discovery
npx clawdhub install gtm-skills/gtm-objections
npx clawdhub install gtm-skills/gtm-meeting-prep
npx clawdhub install gtm-skills/gtm-research
npx clawdhub install gtm-skills/gtm-voice
npx clawdhub install gtm-skills/gtm-battlecards
npx clawdhub install gtm-skills/gtm-sequences
```

---

## The Skills

| Skill | Description | Use Case |
|-------|-------------|----------|
| [gtm-prompts](./gtm-prompts) | Access 2,500+ battle-tested prompts | "Find me a cold email template for VPs" |
| [gtm-cold-email](./gtm-cold-email) | Generate personalized cold emails | "Write a cold email to Sarah at Acme Corp" |
| [gtm-linkedin](./gtm-linkedin) | LinkedIn outreach that gets accepted | "Draft a connection request for this VP of Sales" |
| [gtm-discovery](./gtm-discovery) | MEDDPICC, SPIN, Challenger questions | "Generate MEDDPICC questions for a CFO" |
| [gtm-objections](./gtm-objections) | Handle any objection | "They said they don't have budget" |
| [gtm-meeting-prep](./gtm-meeting-prep) | Meeting briefs and agendas | "Prepare me for tomorrow's discovery call" |
| [gtm-research](./gtm-research) | Prospect and company research | "Research this company before my call" |
| [gtm-voice](./gtm-voice) | Cold call scripts and voicemails | "Give me a cold call opener for CTOs" |
| [gtm-battlecards](./gtm-battlecards) | Competitive intelligence | "How do we compare to Competitor X?" |
| [gtm-sequences](./gtm-sequences) | Multi-touch outreach cadences | "Build a 5-touch sequence for enterprise" |

---

## Quick Examples

### Generate a Cold Email
```
You: Write a cold email to Jennifer Martinez, VP of Revenue at CloudScale.
     They just raised Series C and are hiring 20 SDRs.

OpenClaw: [Uses gtm-cold-email skill]

Subject: Congrats on the Series C, Jennifer

Hi Jennifer,

Saw CloudScale just closed Series C - congrats on the momentum.

With 20 new SDRs ramping, you're probably thinking about how to get them
productive fast. We've helped teams like Datadog cut ramp time by 40%.

Worth a 15-min chat to see if there's a fit?

Best,
[Your name]
```

### Handle an Objection
```
You: The prospect said "We're already using Competitor X and happy with them"

OpenClaw: [Uses gtm-objections skill]

Great response:

"That's great to hear - Competitor X is solid for [use case]. Out of
curiosity, what made you choose them originally?"

[Wait for response, then:]

"Makes sense. The reason I reached out is that companies like [similar
customer] came to us specifically because [key differentiator]. Would it
be worth a quick look to see if that's relevant to where you're headed?"

The key is to not attack the competitor - validate their choice, then
plant a seed about what they might be missing.
```

### Prepare for a Meeting
```
You: I have a discovery call with DataSync tomorrow.
     They're a Series B fintech, 200 employees.
     Meeting with the VP of Engineering.

OpenClaw: [Uses gtm-meeting-prep skill]

## Meeting Brief: DataSync

**Company:** DataSync (Series B Fintech, 200 employees)
**Contact:** VP of Engineering
**Meeting Type:** Discovery Call

### Agenda (45 min)
1. Intros & rapport (3 min)
2. Their current situation (10 min)
3. Challenges & priorities (15 min)
4. Our approach + relevant examples (10 min)
5. Q&A + next steps (7 min)

### Discovery Questions
- What prompted you to take this meeting now?
- Walk me through your current process for [area]
- What happens if this doesn't get solved this quarter?
- Who else needs to be involved in evaluating solutions?

### Things to Highlight
- Case study: [Similar fintech] saw [result]
- Our [differentiator] for engineering teams

### Watch Out For
- VPs of Eng often care most about implementation timeline
- Common objection: "Our team can build this ourselves"
```

---

## Why GTM Skills?

### 2,500+ Prompts
Not generic templates - real prompts used by top performers at companies like Salesforce, HubSpot, and Gong.

### Framework Coverage
MEDDPICC, SPIN, Challenger, Sandler, Gap Selling - all the methodologies in one place.

### Always Current
API-backed skills stay up to date. New prompts added weekly from the community.

### Battle-Tested
Every prompt is rated by the community. See what actually works.

---

## How It Works

GTM Skills connect to the [gtm-skills.com](https://gtm-skills.com) API to fetch prompts and generate content. No API key required for basic usage.

```
Your Request → OpenClaw → GTM Skills API → Response
```

The skills use:
- `GET /api/v1/prompts` - Search and filter prompts
- `POST /api/v1/prompts/recommend` - Get contextual recommendations
- Prompt templates for generation

---

## Installation

### Install All Skills
```bash
# One by one
npx clawdhub install gtm-skills/gtm-prompts
npx clawdhub install gtm-skills/gtm-cold-email
# ... etc

# Or clone and copy
git clone https://github.com/Prospeda/gtm-skills
cp -r gtm-skills/openclaw-skills/* ~/.openclaw/skills/
```

### Manual Installation
Copy any skill folder to `~/.openclaw/skills/`:
```bash
cp -r gtm-prompts ~/.openclaw/skills/
```

---

## Contributing

Found a better way to handle an objection? Have a killer cold email template?

1. Fork this repo
2. Add your improvement
3. Submit a PR

Or submit directly to [gtm-skills.com/leaderboard](https://gtm-skills.com/leaderboard)

---

## Links

- **Website:** [gtm-skills.com](https://gtm-skills.com)
- **API Docs:** [gtm-skills.com/developers](https://gtm-skills.com/developers)
- **Prompt Library:** [gtm-skills.com/prompts](https://gtm-skills.com/prompts)
- **Community:** [gtm-skills.com/community](https://gtm-skills.com/community)

---

## License

MIT - Use these skills however you want.

---

*Built by [Prospeda](https://prospeda.com) - The GTM Operating System for Agentic Sales*
