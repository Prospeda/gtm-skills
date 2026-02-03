# GTM Skill for OpenClaw

Agentic SDR in your terminal. Research, write, call, close.

## Install

```bash
npx clawdhub install gtm-skills/gtm
```

## Commands

### Research
```bash
gtm prospect Sarah Chen at Acme Corp   # Full prospecting flow
gtm scout acme.com                      # Research company
gtm scout "series B fintech"            # Find prospects
gtm enrich sarah@acme.com               # Get contact profile
```

### Write
```bash
gtm email sarah@acme.com                # Cold email
gtm email sarah@acme.com --challenger   # With tonality
gtm sequence sarah@acme.com             # 5-email sequence
gtm reply "not interested right now"    # Handle reply
gtm linkedin Sarah Chen                 # LinkedIn message
gtm followup "sent proposal 3 days ago" # Follow-up
```

### Call
```bash
gtm call Sarah Chen                     # Cold call script
gtm voicenote Sarah                     # Voice note script
gtm discovery "VP Sales at Series B"    # Discovery questions
```

### Close
```bash
gtm objection "we use a competitor"     # Handle objection
gtm proposal Acme Corp                  # Proposal outline
gtm battlecard Outreach                 # Competitive intel
gtm prep Acme Corp                      # Meeting prep
gtm close "verbal yes, stalled"         # Closing strategies
```

## Tonalities

| Flag | Style |
|------|-------|
| `--direct` | No fluff (default) |
| `--blunt` | Shortest possible |
| `--challenger` | Teach and push back |
| `--exec` | C-suite brevity |
| `--friendly` | Warm and personable |
| `--hormozi` | Value-stacking |
| `--voss` | Tactical empathy |

```bash
gtm email sarah@acme.com --blunt
gtm email sarah@acme.com --challenger
```

## Example Session

```
> gtm prospect Sarah Chen at Acme Corp

═══════════════════════════════════════════════════════════════
PROSPECT BRIEF: Sarah Chen | VP Sales | Acme Corp
═══════════════════════════════════════════════════════════════

COMPANY
───────
Acme Corp - B2B SaaS, sales enablement platform
150 employees, Series B ($25M), growing fast

SIGNALS
───────
• Hiring 5 SDRs this month
• New VP Sales (Sarah) started 3 months ago
• Using Salesforce + Outreach

CONTACT
───────
Sarah Chen
VP of Sales at Acme Corp
Previously: Director of Sales at Datadog (3 years)
Stanford MBA

ANGLE
─────
SDR ramp time - scaling team fast, needs quick wins as new leader

═══════════════════════════════════════════════════════════════
COLD EMAIL
═══════════════════════════════════════════════════════════════

Subject: SDR ramp

Sarah - saw you're hiring 5 SDRs.

Quick question: how are you thinking about ramp time as you
scale? Most VPs I talk to underestimate the cost.

We helped your old team at Datadog cut ramp from 6 months to 3.

15 min to see if relevant?

═══════════════════════════════════════════════════════════════
```

## Philosophy

1. **Specific > Generic** - Reference real details
2. **Short > Long** - Respect their time
3. **Value > Pitch** - Give before asking
4. **Curious > Pushy** - Questions over statements
5. **Persistent > Passive** - Follow up until clear no

## Links

- [GTM Skills](https://gtm-skills.com)
- [Tonalities](https://gtm-skills.com/free-tools/tonalities)
- [Full Prompt Library](https://gtm-skills.com/prompts)
