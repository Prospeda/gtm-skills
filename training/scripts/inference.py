#!/usr/bin/env python3
"""
GTM Skills Model Inference

Test the fine-tuned model with sample prompts.

Usage:
    python scripts/inference.py
    python scripts/inference.py --model models/gtm-sales-lora
    python scripts/inference.py --prompt "Write a cold email to a VP of Sales"
    python scripts/inference.py --interactive
"""

import argparse
from pathlib import Path

import torch
from transformers import AutoModelForCausalLM, AutoTokenizer
from peft import PeftModel


# Sample test prompts
TEST_PROMPTS = [
    {
        "category": "cold_email",
        "prompt": "Write a cold email to Sarah Chen, VP of Sales at Acme Corp. They recently raised Series B funding. We help SaaS companies reduce sales cycles by 30%.",
    },
    {
        "category": "discovery",
        "prompt": "Generate MEDDPICC discovery questions for a VP of Engineering evaluating data integration solutions.",
    },
    {
        "category": "objection",
        "prompt": 'The prospect said "We don\'t have budget right now." How should I respond?',
    },
    {
        "category": "linkedin",
        "prompt": "Write a LinkedIn connection request to Marcus Johnson, Head of Revenue at TechFlow. We both attended SaaStr Annual.",
    },
]


def load_model(model_path: str, base_model: str = None):
    """Load the fine-tuned model."""
    model_path = Path(model_path)

    # Try to determine base model from config
    if base_model is None:
        config_path = model_path / "training_config.yaml"
        if config_path.exists():
            import yaml
            with open(config_path) as f:
                config = yaml.safe_load(f)
            base_model = config.get("model", {}).get("name", "meta-llama/Llama-3.1-8B-Instruct")
        else:
            base_model = "meta-llama/Llama-3.1-8B-Instruct"

    print(f"Loading base model: {base_model}")
    print(f"Loading adapter: {model_path}")

    # Load tokenizer
    tokenizer = AutoTokenizer.from_pretrained(model_path)
    if tokenizer.pad_token is None:
        tokenizer.pad_token = tokenizer.eos_token

    # Load base model
    model = AutoModelForCausalLM.from_pretrained(
        base_model,
        torch_dtype=torch.bfloat16,
        device_map="auto",
        trust_remote_code=True,
    )

    # Load LoRA adapter
    model = PeftModel.from_pretrained(model, model_path)
    model.eval()

    return model, tokenizer


def generate(
    model,
    tokenizer,
    prompt: str,
    system_prompt: str = None,
    max_new_tokens: int = 512,
    temperature: float = 0.7,
    top_p: float = 0.9,
) -> str:
    """Generate a response from the model."""

    # Default system prompt
    if system_prompt is None:
        system_prompt = "You are an expert B2B sales professional. Provide helpful, actionable advice."

    # Format as chat
    messages = [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": prompt},
    ]

    # Apply chat template
    input_text = tokenizer.apply_chat_template(
        messages,
        tokenize=False,
        add_generation_prompt=True,
    )

    # Tokenize
    inputs = tokenizer(input_text, return_tensors="pt").to(model.device)

    # Generate
    with torch.no_grad():
        outputs = model.generate(
            **inputs,
            max_new_tokens=max_new_tokens,
            temperature=temperature,
            top_p=top_p,
            do_sample=True,
            pad_token_id=tokenizer.pad_token_id,
        )

    # Decode
    response = tokenizer.decode(outputs[0], skip_special_tokens=True)

    # Extract just the assistant's response
    if "assistant" in response.lower():
        # Find the last assistant turn
        parts = response.split("assistant")
        if len(parts) > 1:
            response = parts[-1].strip()
            # Clean up any remaining markers
            for marker in ["<|eot_id|>", "</s>", "<|end|>"]:
                response = response.replace(marker, "")

    return response.strip()


def run_test_suite(model, tokenizer):
    """Run the model through test prompts."""
    print("\n" + "=" * 60)
    print("Running Test Suite")
    print("=" * 60)

    for i, test in enumerate(TEST_PROMPTS, 1):
        print(f"\n--- Test {i}: {test['category'].upper()} ---")
        print(f"Prompt: {test['prompt'][:100]}...")
        print()

        response = generate(model, tokenizer, test["prompt"])
        print(f"Response:\n{response}")
        print()


def interactive_mode(model, tokenizer):
    """Run in interactive mode."""
    print("\n" + "=" * 60)
    print("Interactive Mode")
    print("Type 'quit' to exit, 'test' to run test suite")
    print("=" * 60)

    while True:
        print()
        prompt = input("You: ").strip()

        if not prompt:
            continue

        if prompt.lower() == "quit":
            print("Goodbye!")
            break

        if prompt.lower() == "test":
            run_test_suite(model, tokenizer)
            continue

        response = generate(model, tokenizer, prompt)
        print(f"\nAssistant: {response}")


def main():
    parser = argparse.ArgumentParser(description="Test GTM Skills model")
    parser.add_argument(
        "--model",
        type=str,
        default="models/gtm-sales-lora",
        help="Path to fine-tuned model",
    )
    parser.add_argument(
        "--base-model",
        type=str,
        default=None,
        help="Base model name (auto-detected if not specified)",
    )
    parser.add_argument(
        "--prompt",
        type=str,
        default=None,
        help="Single prompt to test",
    )
    parser.add_argument(
        "--interactive",
        action="store_true",
        help="Run in interactive mode",
    )
    parser.add_argument(
        "--temperature",
        type=float,
        default=0.7,
        help="Generation temperature",
    )
    parser.add_argument(
        "--max-tokens",
        type=int,
        default=512,
        help="Maximum tokens to generate",
    )
    args = parser.parse_args()

    # Load model
    print("Loading model...")
    model, tokenizer = load_model(args.model, args.base_model)
    print("Model loaded!")

    if args.interactive:
        interactive_mode(model, tokenizer)
    elif args.prompt:
        print(f"\nPrompt: {args.prompt}")
        response = generate(
            model, tokenizer, args.prompt,
            temperature=args.temperature,
            max_new_tokens=args.max_tokens,
        )
        print(f"\nResponse:\n{response}")
    else:
        run_test_suite(model, tokenizer)


if __name__ == "__main__":
    main()
