# gtm prospect

Full prospecting flow for a specific person at a company.

## Usage
```
gtm prospect [name] at [company]
gtm prospect Sarah Chen at Acme Corp
gtm prospect John, VP Sales at Beta Inc
```

## What You Do

1. **Research the Company**
   - What they do
   - Size, funding stage, growth signals
   - Technology stack
   - Recent news or changes

2. **Research the Contact**
   - Current role and responsibilities
   - Career background
   - LinkedIn activity
   - Mutual connections or interests

3. **Identify the Angle**
   - What pain points are likely?
   - What signals suggest timing is right?
   - What's the hook?

4. **Draft Outreach**
   - Personalized cold email
   - LinkedIn connection request
   - Call script outline

5. **Suggest Next Steps**
   - Best channel to start
   - Sequence recommendation
   - Timing suggestions

## Output Format

```
═══════════════════════════════════════════════════════════════
PROSPECT BRIEF: [Name] | [Title] | [Company]
═══════════════════════════════════════════════════════════════

COMPANY
───────
[Company overview, size, stage, what they do]

SIGNALS
───────
• [Signal 1 - e.g., Hiring 5 SDRs]
• [Signal 2 - e.g., Series B last month]
• [Signal 3 - e.g., New VP Sales started]

CONTACT
───────
[Name]
[Title] at [Company]
[Brief background - previous roles, education, etc.]

ANGLE
─────
[Why reach out now, what pain point to target]

═══════════════════════════════════════════════════════════════
COLD EMAIL
═══════════════════════════════════════════════════════════════

Subject: [Subject line]

[Email body]

═══════════════════════════════════════════════════════════════
LINKEDIN CONNECTION
═══════════════════════════════════════════════════════════════

[Connection request - 300 chars max]

═══════════════════════════════════════════════════════════════
NEXT STEPS
═══════════════════════════════════════════════════════════════

1. [First action]
2. [Second action]
3. [Third action]
```

## Tonality Flags

Add a tonality flag to change the email style:

```
gtm prospect Sarah at Acme --challenger
gtm prospect Sarah at Acme --blunt
gtm prospect Sarah at Acme --exec
```
