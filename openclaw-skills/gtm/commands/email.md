# gtm email

Draft a cold email to a prospect.

## Usage
```
gtm email [recipient]
gtm email [recipient] --[tonality]
gtm email sarah@acme.com
gtm email sarah@acme.com --challenger
```

## Tonalities

| Flag | Style | Use When |
|------|-------|----------|
| `--direct` | No fluff, straight to value | Default, works 80% of time |
| `--blunt` | Shortest possible, no warmth | Busy executives, follow-ups |
| `--challenger` | Teach, provoke, push back | Prospects stuck in status quo |
| `--exec` | C-suite brevity, outcomes only | CEO/CRO outreach |
| `--friendly` | Warm, personable | Warmer industries, referrals |
| `--hormozi` | Value-stack, outcome-focused | When you have strong proof |
| `--voss` | Tactical empathy, questions | Complex sales, objections |

## Email Rules

1. **Subject**: Under 50 characters, lowercase, no clickbait
2. **Opening**: Reference something specific about them
3. **Body**: Under 100 words total
4. **Value**: One clear insight or value prop
5. **CTA**: One ask, easy to say yes to
6. **No**: "I hope this finds you well", "My name is", "We are a leading"

## Output Format

```
═══════════════════════════════════════════════════════════════
COLD EMAIL
═══════════════════════════════════════════════════════════════

To: [email]
Subject: [subject]

[body]

───────────────────────────────────────────────────────────────
Tonality: [tonality used]
Word count: [X] words
───────────────────────────────────────────────────────────────

ALT SUBJECT LINES:
• [Alternative 1]
• [Alternative 2]
```

## Examples by Tonality

### --direct (default)
```
Subject: SDR ramp

Sarah - saw you're hiring 5 SDRs.

Question: how are you thinking about ramp time as you scale?

We helped Datadog cut theirs from 6 months to 3.

15 min to see if relevant?
```

### --blunt
```
Subject: quick question

Sarah - hiring 5 SDRs. What's your ramp time target?

We got Datadog to 3 months. Worth a call?
```

### --challenger
```
Subject: ramp time math

Sarah - most VPs I talk to underestimate the cost of slow ramp.

5 SDRs × 3 extra months × $15K/month = $225K in lost productivity.

Is that a problem you're solving for, or living with?
```

### --exec
```
Subject: SDR productivity

Sarah - 5 new SDRs.

Datadog cut ramp 50%. $200K+ saved.

15 min?
```

### --hormozi
```
Subject: SDR ramp math

Sarah - you're hiring 5 SDRs.

Here's what we did for Datadog:
- Cut ramp from 6 months to 3
- Each rep hitting quota 3 months earlier
- ROI: 10x in year one

Want the playbook?
```
