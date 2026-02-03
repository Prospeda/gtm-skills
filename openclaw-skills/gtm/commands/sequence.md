# gtm sequence

Generate a multi-touch email sequence.

## Usage
```
gtm sequence [email]
gtm sequence [email] --touches [N]
gtm sequence sarah@acme.com
gtm sequence sarah@acme.com --touches 7
```

## Default: 5-Touch Sequence

| Touch | Day | Purpose |
|-------|-----|---------|
| 1 | 0 | Initial value prop |
| 2 | 3 | Different angle + social proof |
| 3 | 7 | Share insight or content |
| 4 | 10 | Brief follow-up, create urgency |
| 5 | 14 | Breakup email |

## Sequence Rules

1. **Each email stands alone** - Don't assume they read previous ones
2. **Vary the angle** - Don't repeat the same pitch
3. **Shorter over time** - Email 5 should be 2-3 sentences
4. **Different subject lines** - Never "Re:" fake threads
5. **Breakup works** - Often gets highest response rate

## Output Format

```
═══════════════════════════════════════════════════════════════
SEQUENCE: [email] | [N] touches over [X] days
═══════════════════════════════════════════════════════════════

TOUCH 1 | Day 0 | Initial Outreach
─────────────────────────────────────
Subject: [subject]

[body]

TOUCH 2 | Day 3 | Social Proof Angle
─────────────────────────────────────
Subject: [subject]

[body]

TOUCH 3 | Day 7 | Value Add
─────────────────────────────────────
Subject: [subject]

[body]

TOUCH 4 | Day 10 | Brief Follow-up
─────────────────────────────────────
Subject: [subject]

[body]

TOUCH 5 | Day 14 | Breakup
─────────────────────────────────────
Subject: [subject]

[body]

═══════════════════════════════════════════════════════════════
SEQUENCE NOTES
═══════════════════════════════════════════════════════════════

• Best send times: [suggestion]
• If they open but don't reply: [suggestion]
• If they click link: [suggestion]
```

## Example Sequence

**Touch 1 - Initial**
```
Subject: SDR ramp

Sarah - saw you're hiring 5 SDRs.

How are you thinking about ramp time as you scale?

We helped Datadog cut theirs from 6 months to 3.

15 min?
```

**Touch 2 - Social Proof**
```
Subject: what Gong did

Sarah - following up.

Separate thought: Gong had the same challenge when they scaled from 50 to 150 reps.

Their VP Sales said the #1 thing that worked was [specific tactic].

Want me to share the full breakdown?
```

**Touch 3 - Value Add**
```
Subject: SDR ramp data

Sarah - pulled some data you might find useful.

Average SDR ramp across 50 B2B SaaS companies: 5.2 months.
Top quartile: 2.8 months.

The difference? [key insight]

Worth 15 min to discuss?
```

**Touch 4 - Brief**
```
Subject: still relevant?

Sarah - bumping this.

Is SDR ramp time still a priority, or has something else taken over?

Either way, let me know and I'll adjust.
```

**Touch 5 - Breakup**
```
Subject: closing the loop

Sarah - I'll assume the timing isn't right.

If SDR ramp becomes a priority later, the data from Datadog and Gong is yours.

Just reply "interested" and I'll send it over.

All the best with the hiring.
```
