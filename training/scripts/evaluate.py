#!/usr/bin/env python3
"""
GTM Skills Model Evaluation

Benchmark the fine-tuned model on sales tasks.

Usage:
    python scripts/evaluate.py --model models/gtm-sales-lora
    python scripts/evaluate.py --model gtm-skills/llama-3.1-gtm-sales --from-hub
"""

import argparse
import json
from pathlib import Path
from typing import Dict, List
from dataclasses import dataclass, asdict

import torch
from transformers import AutoModelForCausalLM, AutoTokenizer
from peft import PeftModel
from tqdm import tqdm


@dataclass
class EvalResult:
    """Result of a single evaluation."""
    task: str
    prompt: str
    response: str
    metrics: Dict[str, float]


# Evaluation tasks
EVAL_TASKS = {
    "cold_email": {
        "description": "Generate cold outreach emails",
        "prompts": [
            "Write a cold email to Sarah Chen, VP of Sales at Acme Corp. They recently raised Series B funding. We help SaaS companies reduce sales cycles by 30%.",
            "Draft an outreach email to Marcus Johnson, Head of Revenue at TechFlow. Context: They just hired 10 new SDRs. We provide sales training.",
            "Create a cold email for Elena Rodriguez, CRO at DataSync. They announced a new product launch. We help with go-to-market strategy.",
        ],
        "criteria": {
            "has_subject": "Contains a subject line",
            "under_100_words": "Body is under 100 words",
            "has_cta": "Has a clear call-to-action",
            "personalized": "References specific context",
            "no_fluff": "No generic openers like 'I hope this finds you well'",
        },
    },
    "discovery": {
        "description": "Generate discovery questions",
        "prompts": [
            "Generate MEDDPICC discovery questions for a VP of Engineering evaluating data integration solutions.",
            "What SPIN questions should I ask a Head of Sales about their forecasting process?",
            "Create Challenger-style discovery questions for a CFO evaluating expense management tools.",
        ],
        "criteria": {
            "open_ended": "Questions are open-ended (not yes/no)",
            "relevant": "Questions relate to the context",
            "structured": "Follows a logical flow",
            "uncovers_pain": "Includes pain-focused questions",
            "has_metrics": "Includes questions about metrics/impact",
        },
    },
    "objection_handling": {
        "description": "Handle sales objections",
        "prompts": [
            'The prospect said "We don\'t have budget right now." How should I respond?',
            'Handle this objection: "We\'re already using a competitor and happy with them."',
            'The prospect says "Send me some information." What\'s the best response?',
        ],
        "criteria": {
            "acknowledges": "Acknowledges the objection",
            "not_defensive": "Doesn't argue or get defensive",
            "asks_questions": "Asks clarifying questions",
            "reframes": "Reframes the objection positively",
            "offers_next_step": "Provides a clear next step",
        },
    },
    "linkedin": {
        "description": "LinkedIn outreach messages",
        "prompts": [
            "Write a LinkedIn connection request to James Wilson, Sales Director at CloudFirst. We both spoke at SaaStr.",
            "Draft an InMail to Priya Patel, VP of Marketing at ScaleUp Inc. They recently launched a new product.",
            "Create a LinkedIn message to a VP of Sales who just changed jobs.",
        ],
        "criteria": {
            "under_300_chars": "Under 300 characters (for connection requests)",
            "personalized": "References something specific",
            "value_focused": "Mentions potential value",
            "has_cta": "Has a clear call-to-action",
            "professional": "Professional tone",
        },
    },
}


def load_model(model_path: str, from_hub: bool = False):
    """Load the model for evaluation."""
    if from_hub:
        base_model = "meta-llama/Llama-3.1-8B-Instruct"
        print(f"Loading from Hugging Face: {model_path}")

        tokenizer = AutoTokenizer.from_pretrained(base_model)
        model = AutoModelForCausalLM.from_pretrained(
            base_model,
            torch_dtype=torch.bfloat16,
            device_map="auto",
        )
        model = PeftModel.from_pretrained(model, model_path)
    else:
        model_path = Path(model_path)
        print(f"Loading from local: {model_path}")

        # Try to get base model from config
        config_path = model_path / "training_config.yaml"
        if config_path.exists():
            import yaml
            with open(config_path) as f:
                config = yaml.safe_load(f)
            base_model = config.get("model", {}).get("name", "meta-llama/Llama-3.1-8B-Instruct")
        else:
            base_model = "meta-llama/Llama-3.1-8B-Instruct"

        tokenizer = AutoTokenizer.from_pretrained(model_path)
        model = AutoModelForCausalLM.from_pretrained(
            base_model,
            torch_dtype=torch.bfloat16,
            device_map="auto",
        )
        model = PeftModel.from_pretrained(model, model_path)

    if tokenizer.pad_token is None:
        tokenizer.pad_token = tokenizer.eos_token

    model.eval()
    return model, tokenizer


def generate_response(model, tokenizer, prompt: str, system_prompt: str = None) -> str:
    """Generate a response from the model."""
    if system_prompt is None:
        system_prompt = "You are an expert B2B sales professional."

    messages = [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": prompt},
    ]

    input_text = tokenizer.apply_chat_template(
        messages, tokenize=False, add_generation_prompt=True
    )
    inputs = tokenizer(input_text, return_tensors="pt").to(model.device)

    with torch.no_grad():
        outputs = model.generate(
            **inputs,
            max_new_tokens=512,
            temperature=0.7,
            top_p=0.9,
            do_sample=True,
            pad_token_id=tokenizer.pad_token_id,
        )

    response = tokenizer.decode(outputs[0], skip_special_tokens=True)

    # Extract assistant response
    if "assistant" in response.lower():
        parts = response.split("assistant")
        if len(parts) > 1:
            response = parts[-1].strip()

    return response.strip()


def evaluate_response(response: str, task: str, criteria: Dict[str, str]) -> Dict[str, float]:
    """Evaluate a response against criteria (heuristic evaluation)."""
    metrics = {}

    # Task-specific heuristics
    if task == "cold_email":
        metrics["has_subject"] = 1.0 if "subject:" in response.lower() else 0.0
        words = len(response.split())
        metrics["under_100_words"] = 1.0 if words < 120 else (0.5 if words < 150 else 0.0)
        metrics["has_cta"] = 1.0 if any(cta in response.lower() for cta in ["?", "call", "chat", "meet", "15 min"]) else 0.0
        metrics["no_fluff"] = 0.0 if "hope this finds you" in response.lower() else 1.0
        metrics["personalized"] = 1.0 if any(x in response.lower() for x in ["series", "raised", "hired", "launched"]) else 0.5

    elif task == "discovery":
        questions = response.count("?")
        metrics["open_ended"] = min(1.0, questions / 5)
        metrics["has_metrics"] = 1.0 if any(x in response.lower() for x in ["measure", "metric", "percent", "number", "how much"]) else 0.0
        metrics["structured"] = 1.0 if any(x in response for x in ["1.", "2.", "-", "*"]) else 0.5
        metrics["uncovers_pain"] = 1.0 if any(x in response.lower() for x in ["challenge", "problem", "pain", "struggle", "issue"]) else 0.0

    elif task == "objection_handling":
        metrics["acknowledges"] = 1.0 if any(x in response.lower() for x in ["understand", "hear", "appreciate", "makes sense"]) else 0.0
        metrics["not_defensive"] = 0.0 if any(x in response.lower() for x in ["but actually", "you're wrong", "that's not true"]) else 1.0
        metrics["asks_questions"] = 1.0 if "?" in response else 0.0
        metrics["reframes"] = 1.0 if any(x in response.lower() for x in ["what if", "would it help", "consider"]) else 0.5
        metrics["offers_next_step"] = 1.0 if any(x in response.lower() for x in ["next", "follow", "schedule", "call", "meet"]) else 0.0

    elif task == "linkedin":
        char_count = len(response)
        metrics["under_300_chars"] = 1.0 if char_count < 300 else (0.5 if char_count < 500 else 0.0)
        metrics["professional"] = 0.0 if any(x in response.lower() for x in ["!!!", "lol", "haha"]) else 1.0
        metrics["has_cta"] = 1.0 if "?" in response else 0.5
        metrics["value_focused"] = 1.0 if any(x in response.lower() for x in ["help", "value", "benefit", "learn"]) else 0.5

    return metrics


def run_evaluation(model, tokenizer, output_dir: Path = None) -> Dict:
    """Run full evaluation suite."""
    results = []
    task_scores = {}

    print("\n" + "=" * 60)
    print("Running GTM Skills Model Evaluation")
    print("=" * 60)

    for task_name, task_config in tqdm(EVAL_TASKS.items(), desc="Tasks"):
        print(f"\n--- Evaluating: {task_name} ---")

        task_results = []
        task_metrics = []

        for prompt in task_config["prompts"]:
            # Generate response
            response = generate_response(model, tokenizer, prompt)

            # Evaluate
            metrics = evaluate_response(response, task_name, task_config["criteria"])
            task_metrics.append(metrics)

            result = EvalResult(
                task=task_name,
                prompt=prompt,
                response=response,
                metrics=metrics,
            )
            task_results.append(result)
            results.append(result)

        # Calculate task averages
        avg_metrics = {}
        for key in task_metrics[0].keys():
            avg_metrics[key] = sum(m[key] for m in task_metrics) / len(task_metrics)

        task_scores[task_name] = {
            "average": sum(avg_metrics.values()) / len(avg_metrics),
            "metrics": avg_metrics,
        }

        print(f"  Average score: {task_scores[task_name]['average']:.2f}")

    # Overall score
    overall_score = sum(t["average"] for t in task_scores.values()) / len(task_scores)

    summary = {
        "overall_score": overall_score,
        "task_scores": task_scores,
        "num_prompts": len(results),
    }

    # Save results
    if output_dir:
        output_dir = Path(output_dir)
        output_dir.mkdir(parents=True, exist_ok=True)

        # Save detailed results
        results_path = output_dir / "eval_results.json"
        with open(results_path, "w") as f:
            json.dump([asdict(r) for r in results], f, indent=2)
        print(f"\nDetailed results saved to {results_path}")

        # Save summary
        summary_path = output_dir / "eval_summary.json"
        with open(summary_path, "w") as f:
            json.dump(summary, f, indent=2)
        print(f"Summary saved to {summary_path}")

    return summary


def print_summary(summary: Dict):
    """Print evaluation summary."""
    print("\n" + "=" * 60)
    print("EVALUATION SUMMARY")
    print("=" * 60)

    print(f"\nOverall Score: {summary['overall_score']:.2f} / 1.00")
    print(f"Prompts Evaluated: {summary['num_prompts']}")

    print("\nTask Scores:")
    for task, scores in summary["task_scores"].items():
        print(f"\n  {task.upper()}: {scores['average']:.2f}")
        for metric, value in scores["metrics"].items():
            bar = "█" * int(value * 10) + "░" * (10 - int(value * 10))
            print(f"    {metric}: {bar} {value:.2f}")


def main():
    parser = argparse.ArgumentParser(description="Evaluate GTM Skills model")
    parser.add_argument(
        "--model",
        type=str,
        default="models/gtm-sales-lora",
        help="Path to model or Hugging Face repo",
    )
    parser.add_argument(
        "--from-hub",
        action="store_true",
        help="Load model from Hugging Face Hub",
    )
    parser.add_argument(
        "--output",
        type=str,
        default="eval_results",
        help="Output directory for results",
    )
    args = parser.parse_args()

    # Load model
    print("Loading model...")
    model, tokenizer = load_model(args.model, args.from_hub)
    print("Model loaded!")

    # Run evaluation
    summary = run_evaluation(model, tokenizer, Path(args.output))

    # Print summary
    print_summary(summary)


if __name__ == "__main__":
    main()
