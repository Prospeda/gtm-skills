# GTM Skills for OpenClaw

> Research. Write. Send. Book. Track.

```bash
npx clawdhub install gtm-skills/gtm
```

---

## The Full Flow

```
gtm prospect Sarah Chen at Acme Corp
```

```
🔍 ENRICHING...
Sarah Chen | VP of Sales | Acme Corp
- Series B, $25M raised, 80 employees
- Hiring: 5 SDRs this week
- Tech: Salesforce, Outreach, Gong

📧 DRAFT:
Subject: SDR ramp time

Sarah - saw you're hiring 5 SDRs.

Question: how are you thinking about ramp time as you scale?

We helped Datadog cut theirs from 6 months to 3.

15 min to see if relevant?
→ calendly.com/you/15min

[Send Now] [Edit] [Schedule] [Log to CRM]
```

---

## Commands

### Generate
```
gtm email [person] at [company]    # Cold email
gtm reply [objection]              # Handle objection
gtm questions [persona]            # Discovery questions
gtm linkedin [person]              # Connection request
gtm prep [company]                 # Meeting brief
gtm call [persona]                 # Cold call script
gtm sequence [type]                # Multi-touch cadence
```

### Research
```
gtm enrich [person/company]        # Get prospect data
gtm research [company]             # Deep company intel
gtm signals [company]              # Buying signals
gtm battlecard [competitor]        # Competitive intel
```

### Execute
```
gtm send                           # Send email
gtm send --schedule "tomorrow 8am" # Schedule send
gtm book                           # Generate booking link
gtm log [activity]                 # Log to CRM
gtm remind [task] in [time]        # Set reminder
gtm track [deal] --stage [stage]   # Update pipeline
```

### Combo
```
gtm prospect [person] at [company] # Enrich → Draft → Send
gtm followup [person]              # History → Draft → Send
```

---

## Setup

```bash
# Enrichment (pick one)
export APOLLO_API_KEY=your_key
export CLAY_API_KEY=your_key
export CLEARBIT_API_KEY=your_key

# Booking
export CALENDLY_URL=calendly.com/you/15min
export CALCOM_URL=cal.com/you/15min

# CRM
export HUBSPOT_API_KEY=your_key
export SALESFORCE_TOKEN=your_token

# Email
export GMAIL_ENABLED=true
export OUTLOOK_ENABLED=true
```

---

## Tonalities

| Flag | Style |
|------|-------|
| `--direct` | No fluff (default) |
| `--blunt` | Shortest possible |
| `--challenger` | Push back, teach |
| `--exec` | C-suite brevity |
| `--friendly` | Add warmth |

---

## Frameworks

```
gtm questions --meddpicc [persona]
gtm questions --spin [persona]
gtm questions --challenger [persona]
```

---

## Links

- [gtm-skills.com/openclaw](https://gtm-skills.com/openclaw)
- [GitHub](https://github.com/Prospeda/gtm-skills)

MIT License
