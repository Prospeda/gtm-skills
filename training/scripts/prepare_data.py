#!/usr/bin/env python3
"""
GTM Skills Training Data Preparation

Converts GTM Skills prompts into conversational training format.
Generates synthetic conversations from prompt templates.

Usage:
    python scripts/prepare_data.py
    python scripts/prepare_data.py --include-custom
    python scripts/prepare_data.py --output data/processed
"""

import json
import random
import argparse
from pathlib import Path
from typing import List, Dict, Any
from dataclasses import dataclass, asdict
import yaml

# Sample prompt categories and their system prompts
CATEGORIES = {
    "cold_email": {
        "system": "You are an expert at writing cold emails that get responses. Write short, personalized emails with clear CTAs.",
        "user_templates": [
            "Write a cold email to {name}, {title} at {company}. They recently {trigger}. We help companies {value_prop}.",
            "Draft an outreach email to {name} at {company}. Context: {context}. Goal: {goal}.",
            "Create a cold email for a {title} at a {industry} company. Focus on {pain_point}.",
        ],
    },
    "discovery": {
        "system": "You are an expert at asking discovery questions using MEDDPICC and SPIN frameworks.",
        "user_templates": [
            "Generate discovery questions for a {title} at a {industry} company evaluating {solution_type}.",
            "What questions should I ask to uncover pain around {pain_area}?",
            "Create MEDDPICC questions for a deal with {company} in the {stage} stage.",
        ],
    },
    "objection_handling": {
        "system": "You handle sales objections with empathy. Acknowledge, clarify, and reframe.",
        "user_templates": [
            'The prospect said "{objection}". How should I respond?',
            'Handle this objection: "{objection}". Context: {context}.',
            "Prospect objected about {objection_type}. What's the best response?",
        ],
    },
    "linkedin_outreach": {
        "system": "You write LinkedIn messages that get connections and responses. Keep them under 300 characters.",
        "user_templates": [
            "Write a LinkedIn connection request to {name}, {title} at {company}.",
            "Draft a LinkedIn message to {name} about {topic}. We have {connection_reason} in common.",
            "Create an InMail to a {title} in {industry}. Mention {trigger}.",
        ],
    },
    "meeting_prep": {
        "system": "You prepare comprehensive meeting briefs and talking points for sales calls.",
        "user_templates": [
            "Prepare talking points for a {meeting_type} with {company}. They're in {industry}.",
            "Create an agenda for a discovery call with {name}, {title} at {company}.",
            "What should I cover in a demo for {company}? They care about {priorities}.",
        ],
    },
}

# Sample variable values for generating synthetic data
SAMPLE_DATA = {
    "names": ["Sarah Chen", "Marcus Johnson", "Elena Rodriguez", "James Wilson", "Priya Patel"],
    "titles": ["VP of Sales", "Head of Revenue", "Sales Director", "CRO", "VP of Marketing"],
    "companies": ["Acme Corp", "TechFlow", "DataSync", "CloudFirst", "ScaleUp Inc"],
    "industries": ["SaaS", "FinTech", "Healthcare", "E-commerce", "Manufacturing"],
    "triggers": [
        "raised Series B funding",
        "hired 10 new sales reps",
        "launched a new product",
        "expanded to Europe",
        "announced a partnership",
    ],
    "pain_points": [
        "slow sales cycles",
        "low conversion rates",
        "poor forecasting accuracy",
        "rep ramp time",
        "pipeline visibility",
    ],
    "objections": [
        "We don't have budget right now",
        "We're already using a competitor",
        "Now isn't a good time",
        "I need to talk to my team",
        "Send me some information",
    ],
    "value_props": [
        "reduce sales cycles by 30%",
        "increase conversion rates",
        "improve forecast accuracy to 95%",
        "ramp reps in half the time",
        "get real-time pipeline visibility",
    ],
}


@dataclass
class Conversation:
    """A single training conversation."""
    conversations: List[Dict[str, str]]
    metadata: Dict[str, Any]


def load_config(config_path: str = "configs/base.yaml") -> dict:
    """Load training configuration."""
    with open(config_path) as f:
        return yaml.safe_load(f)


def fill_template(template: str, data: dict = SAMPLE_DATA) -> str:
    """Fill a template with random sample data."""
    result = template
    for key, values in data.items():
        placeholder = "{" + key.rstrip("s") + "}"  # names -> {name}
        if placeholder in result:
            result = result.replace(placeholder, random.choice(values))
        # Also try plural form
        placeholder_plural = "{" + key + "}"
        if placeholder_plural in result:
            result = result.replace(placeholder_plural, random.choice(values))

    # Handle remaining placeholders with generic values
    import re
    remaining = re.findall(r'\{(\w+)\}', result)
    for placeholder in remaining:
        result = result.replace("{" + placeholder + "}", f"[{placeholder}]")

    return result


def generate_response(category: str, user_message: str) -> str:
    """Generate a synthetic response for training.

    In production, you might use an LLM to generate these.
    Here we use templates for reproducibility.
    """
    responses = {
        "cold_email": [
            """Subject: Quick question about {topic}

Hi {name},

I noticed {trigger} - congrats on the momentum.

Quick question: are you seeing {pain_point}?

We've helped companies like {similar_company} {result}.

Worth a 15-min chat to see if there's a fit?

Best,
[Your name]""",
        ],
        "discovery": [
            """Here are discovery questions for this situation:

**Metrics:**
1. How are you currently measuring success in this area?
2. What would improving by 20% mean for the business?

**Economic Buyer:**
3. Who else needs to be involved in this decision?
4. What's the approval process look like?

**Decision Criteria:**
5. What are your top 3 priorities when evaluating solutions?
6. How important is [specific capability]?

**Pain:**
7. What's the biggest challenge you're facing with [area]?
8. How long has this been an issue?

**Timeline:**
9. When do you need to have a solution in place?
10. What's driving that timeline?""",
        ],
        "objection_handling": [
            """Great response to this objection:

**Acknowledge:** "I completely understand - [validate their concern]."

**Clarify:** "Just so I understand, is it more about [aspect A] or [aspect B]?"

**Reframe:** "What I've heard from other [similar titles] is [relevant insight]. Would it help if we [specific next step]?"

**Trial close:** "If we could address [their concern], would it make sense to continue the conversation?"

The key is to not get defensive. Their objection often signals interest - they're engaging with the idea.""",
        ],
        "linkedin_outreach": [
            """Hi {name},

Saw your post about {topic} - really resonated with our approach at {company}.

We're helping {industry} teams with {value_prop}.

Open to connecting?""",
        ],
        "meeting_prep": [
            """## Meeting Brief: {company}

**Attendees:** {name}, {title}

**Agenda:**
1. Quick intros (2 min)
2. Their current situation (10 min)
3. Key challenges discussion (15 min)
4. Our approach + relevant examples (10 min)
5. Q&A + next steps (8 min)

**Key Questions to Ask:**
- What prompted you to take this meeting?
- Walk me through your current process for [area]
- What happens if this doesn't get solved?

**Things to Highlight:**
- Case study: {similar_company} saw {result}
- Our unique approach to {differentiator}

**Watch Out For:**
- [Title] often cares most about {priority}
- Common objection: {typical_objection}""",
        ],
    }

    templates = responses.get(category, responses["cold_email"])
    response = random.choice(templates)
    return fill_template(response)


def generate_conversations(
    num_samples: int = 500,
    categories: List[str] = None
) -> List[Conversation]:
    """Generate synthetic training conversations."""

    if categories is None:
        categories = list(CATEGORIES.keys())

    conversations = []
    samples_per_category = num_samples // len(categories)

    for category in categories:
        cat_config = CATEGORIES[category]

        for _ in range(samples_per_category):
            # Pick a random user template
            user_template = random.choice(cat_config["user_templates"])
            user_message = fill_template(user_template)

            # Generate response
            assistant_message = generate_response(category, user_message)

            conv = Conversation(
                conversations=[
                    {"role": "system", "content": cat_config["system"]},
                    {"role": "user", "content": user_message},
                    {"role": "assistant", "content": fill_template(assistant_message)},
                ],
                metadata={
                    "category": category,
                    "source": "synthetic",
                    "version": "1.0",
                }
            )
            conversations.append(conv)

    random.shuffle(conversations)
    return conversations


def load_gtm_prompts(prompts_dir: Path) -> List[Dict]:
    """Load existing GTM Skills prompts from the library."""
    prompts = []

    # Look for markdown files with prompts
    for md_file in prompts_dir.rglob("*.md"):
        try:
            content = md_file.read_text()
            # Extract prompts from markdown (simplified parsing)
            if "```" in content:
                # Has code blocks - likely prompt content
                prompts.append({
                    "file": str(md_file),
                    "content": content,
                    "category": md_file.parent.name,
                })
        except Exception as e:
            print(f"Warning: Could not read {md_file}: {e}")

    return prompts


def convert_prompts_to_conversations(prompts: List[Dict]) -> List[Conversation]:
    """Convert GTM Skills prompts to conversation format."""
    conversations = []

    for prompt in prompts:
        # Create a user message asking for this type of content
        category = prompt.get("category", "general")
        user_msg = f"Help me with {category.replace('-', ' ')} for B2B sales."

        # The prompt content becomes the assistant's response
        conv = Conversation(
            conversations=[
                {"role": "system", "content": CATEGORIES.get(category, CATEGORIES["cold_email"])["system"]},
                {"role": "user", "content": user_msg},
                {"role": "assistant", "content": prompt["content"][:2000]},  # Truncate long content
            ],
            metadata={
                "category": category,
                "source": "gtm-skills",
                "file": prompt.get("file", "unknown"),
            }
        )
        conversations.append(conv)

    return conversations


def save_dataset(
    conversations: List[Conversation],
    output_dir: Path,
    train_split: float = 0.9
) -> None:
    """Save conversations as JSONL files."""

    output_dir.mkdir(parents=True, exist_ok=True)

    # Split into train/val
    random.shuffle(conversations)
    split_idx = int(len(conversations) * train_split)
    train_data = conversations[:split_idx]
    val_data = conversations[split_idx:]

    # Save train
    train_path = output_dir / "train.jsonl"
    with open(train_path, "w") as f:
        for conv in train_data:
            f.write(json.dumps(asdict(conv)) + "\n")
    print(f"Saved {len(train_data)} training samples to {train_path}")

    # Save validation
    val_path = output_dir / "val.jsonl"
    with open(val_path, "w") as f:
        for conv in val_data:
            f.write(json.dumps(asdict(conv)) + "\n")
    print(f"Saved {len(val_data)} validation samples to {val_path}")

    # Save a small sample for quick testing
    sample_path = output_dir / "sample.jsonl"
    with open(sample_path, "w") as f:
        for conv in conversations[:10]:
            f.write(json.dumps(asdict(conv)) + "\n")
    print(f"Saved 10 samples to {sample_path}")


def main():
    parser = argparse.ArgumentParser(description="Prepare GTM Skills training data")
    parser.add_argument("--output", type=str, default="data/processed", help="Output directory")
    parser.add_argument("--num-synthetic", type=int, default=500, help="Number of synthetic samples")
    parser.add_argument("--include-custom", action="store_true", help="Include custom data from data/custom")
    parser.add_argument("--prompts-dir", type=str, default="../content", help="GTM Skills prompts directory")
    parser.add_argument("--seed", type=int, default=42, help="Random seed")
    args = parser.parse_args()

    random.seed(args.seed)
    output_dir = Path(args.output)

    print("=" * 50)
    print("GTM Skills Training Data Preparation")
    print("=" * 50)

    all_conversations = []

    # Generate synthetic conversations
    print(f"\nGenerating {args.num_synthetic} synthetic conversations...")
    synthetic = generate_conversations(num_samples=args.num_synthetic)
    all_conversations.extend(synthetic)
    print(f"  Generated {len(synthetic)} synthetic samples")

    # Load existing GTM Skills prompts if available
    prompts_dir = Path(args.prompts_dir)
    if prompts_dir.exists():
        print(f"\nLoading prompts from {prompts_dir}...")
        prompts = load_gtm_prompts(prompts_dir)
        if prompts:
            prompt_convs = convert_prompts_to_conversations(prompts)
            all_conversations.extend(prompt_convs)
            print(f"  Converted {len(prompt_convs)} prompts to conversations")

    # Load custom data if requested
    if args.include_custom:
        custom_dir = Path("data/custom")
        if custom_dir.exists():
            print(f"\nLoading custom data from {custom_dir}...")
            for jsonl_file in custom_dir.glob("*.jsonl"):
                with open(jsonl_file) as f:
                    for line in f:
                        data = json.loads(line)
                        conv = Conversation(**data)
                        all_conversations.append(conv)
            print(f"  Loaded custom data")

    # Save dataset
    print(f"\nSaving {len(all_conversations)} total conversations...")
    save_dataset(all_conversations, output_dir)

    # Print summary
    print("\n" + "=" * 50)
    print("Summary")
    print("=" * 50)
    categories = {}
    for conv in all_conversations:
        cat = conv.metadata.get("category", "unknown")
        categories[cat] = categories.get(cat, 0) + 1

    for cat, count in sorted(categories.items()):
        print(f"  {cat}: {count}")

    print(f"\nTotal: {len(all_conversations)} conversations")
    print(f"Output: {output_dir}")
    print("\nDone!")


if __name__ == "__main__":
    main()
