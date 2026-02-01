#!/usr/bin/env python3
"""
GTM Skills Model Training Script

Fine-tunes a base LLM on GTM Skills data using LoRA.

Usage:
    python scripts/train.py
    python scripts/train.py --config configs/llama-3.1-8b.yaml
    python scripts/train.py --config configs/mistral-7b.yaml
"""

import os
import json
import argparse
from pathlib import Path
from typing import Dict, Any
import yaml

import torch
from datasets import load_dataset
from transformers import (
    AutoModelForCausalLM,
    AutoTokenizer,
    BitsAndBytesConfig,
    TrainingArguments,
)
from peft import LoraConfig, get_peft_model, prepare_model_for_kbit_training
from trl import SFTTrainer


def load_config(config_path: str) -> Dict[str, Any]:
    """Load and merge configuration files."""
    with open(config_path) as f:
        config = yaml.safe_load(f)

    # Handle inheritance
    if "_base_" in config:
        base_path = Path(config_path).parent / config["_base_"]
        with open(base_path) as f:
            base_config = yaml.safe_load(f)
        # Merge: config overrides base
        merged = deep_merge(base_config, config)
        del merged["_base_"]
        return merged

    return config


def deep_merge(base: dict, override: dict) -> dict:
    """Deep merge two dictionaries."""
    result = base.copy()
    for key, value in override.items():
        if key in result and isinstance(result[key], dict) and isinstance(value, dict):
            result[key] = deep_merge(result[key], value)
        else:
            result[key] = value
    return result


def setup_quantization(config: Dict) -> BitsAndBytesConfig:
    """Set up quantization configuration."""
    quant_config = config.get("model", {}).get("quantization", {})

    if not quant_config:
        return None

    return BitsAndBytesConfig(
        load_in_4bit=quant_config.get("load_in_4bit", True),
        bnb_4bit_compute_dtype=getattr(torch, quant_config.get("bnb_4bit_compute_dtype", "bfloat16")),
        bnb_4bit_quant_type=quant_config.get("bnb_4bit_quant_type", "nf4"),
        bnb_4bit_use_double_quant=quant_config.get("bnb_4bit_use_double_quant", True),
    )


def setup_lora(config: Dict) -> LoraConfig:
    """Set up LoRA configuration."""
    lora_config = config.get("lora", {})

    return LoraConfig(
        r=lora_config.get("r", 16),
        lora_alpha=lora_config.get("lora_alpha", 32),
        lora_dropout=lora_config.get("lora_dropout", 0.05),
        target_modules=lora_config.get("target_modules", ["q_proj", "v_proj"]),
        bias=lora_config.get("bias", "none"),
        task_type=lora_config.get("task_type", "CAUSAL_LM"),
    )


def load_model_and_tokenizer(config: Dict):
    """Load the base model and tokenizer."""
    model_config = config.get("model", {})
    model_name = model_config.get("name", "meta-llama/Llama-3.1-8B-Instruct")

    print(f"Loading model: {model_name}")

    # Quantization
    bnb_config = setup_quantization(config)

    # Load tokenizer
    tokenizer = AutoTokenizer.from_pretrained(
        model_name,
        trust_remote_code=model_config.get("trust_remote_code", True),
    )

    # Configure tokenizer
    tokenizer_config = config.get("tokenizer", {})
    tokenizer.padding_side = tokenizer_config.get("padding_side", "right")

    if tokenizer.pad_token is None:
        tokenizer.pad_token = tokenizer.eos_token

    # Load model
    model = AutoModelForCausalLM.from_pretrained(
        model_name,
        quantization_config=bnb_config,
        device_map=model_config.get("device_map", "auto"),
        trust_remote_code=model_config.get("trust_remote_code", True),
        torch_dtype=getattr(torch, model_config.get("torch_dtype", "bfloat16")),
    )

    # Prepare for training
    if bnb_config:
        model = prepare_model_for_kbit_training(model)

    # Apply LoRA
    lora_config = setup_lora(config)
    model = get_peft_model(model, lora_config)

    # Print trainable parameters
    trainable_params = sum(p.numel() for p in model.parameters() if p.requires_grad)
    total_params = sum(p.numel() for p in model.parameters())
    print(f"Trainable parameters: {trainable_params:,} / {total_params:,} ({100 * trainable_params / total_params:.2f}%)")

    return model, tokenizer


def load_training_data(config: Dict, tokenizer):
    """Load and prepare training data."""
    data_config = config.get("data", {})

    train_path = data_config.get("train_path", "data/processed/train.jsonl")
    val_path = data_config.get("val_path", "data/processed/val.jsonl")

    print(f"Loading training data from {train_path}")

    # Load datasets
    dataset = load_dataset(
        "json",
        data_files={
            "train": train_path,
            "validation": val_path,
        }
    )

    def format_conversation(example):
        """Format a conversation for training."""
        messages = example["conversations"]

        # Apply chat template
        text = tokenizer.apply_chat_template(
            messages,
            tokenize=False,
            add_generation_prompt=False,
        )

        return {"text": text}

    # Format datasets
    train_dataset = dataset["train"].map(format_conversation)
    val_dataset = dataset["validation"].map(format_conversation)

    print(f"Training samples: {len(train_dataset)}")
    print(f"Validation samples: {len(val_dataset)}")

    return train_dataset, val_dataset


def setup_training_args(config: Dict) -> TrainingArguments:
    """Set up training arguments."""
    train_config = config.get("training", {})

    return TrainingArguments(
        output_dir=train_config.get("output_dir", "models/gtm-sales-lora"),
        num_train_epochs=train_config.get("num_epochs", 3),
        per_device_train_batch_size=train_config.get("per_device_train_batch_size", 4),
        per_device_eval_batch_size=train_config.get("per_device_eval_batch_size", 4),
        gradient_accumulation_steps=train_config.get("gradient_accumulation_steps", 4),
        learning_rate=train_config.get("learning_rate", 2e-4),
        weight_decay=train_config.get("weight_decay", 0.01),
        warmup_ratio=train_config.get("warmup_ratio", 0.03),
        lr_scheduler_type=train_config.get("lr_scheduler_type", "cosine"),
        optim=train_config.get("optim", "paged_adamw_8bit"),
        max_grad_norm=train_config.get("max_grad_norm", 0.3),
        bf16=train_config.get("bf16", True),
        tf32=train_config.get("tf32", True),
        logging_steps=train_config.get("logging_steps", 10),
        eval_strategy="steps",
        eval_steps=train_config.get("eval_steps", 100),
        save_steps=train_config.get("save_steps", 500),
        save_total_limit=train_config.get("save_total_limit", 3),
        report_to=train_config.get("report_to", "none"),
        run_name=train_config.get("run_name", "gtm-skills-training"),
        push_to_hub=False,
    )


def train(config: Dict):
    """Run the training loop."""
    print("=" * 50)
    print("GTM Skills Model Training")
    print("=" * 50)

    # Load model and tokenizer
    model, tokenizer = load_model_and_tokenizer(config)

    # Load data
    train_dataset, val_dataset = load_training_data(config, tokenizer)

    # Training arguments
    training_args = setup_training_args(config)

    # Data config
    data_config = config.get("data", {})
    max_seq_length = data_config.get("max_seq_length", 4096)

    # Create trainer
    trainer = SFTTrainer(
        model=model,
        train_dataset=train_dataset,
        eval_dataset=val_dataset,
        tokenizer=tokenizer,
        args=training_args,
        max_seq_length=max_seq_length,
        dataset_text_field="text",
        packing=False,
    )

    # Train
    print("\nStarting training...")
    trainer.train()

    # Save the final model
    output_dir = training_args.output_dir
    print(f"\nSaving model to {output_dir}")
    trainer.save_model(output_dir)
    tokenizer.save_pretrained(output_dir)

    # Save training config
    config_path = Path(output_dir) / "training_config.yaml"
    with open(config_path, "w") as f:
        yaml.dump(config, f)

    print("\nTraining complete!")
    print(f"Model saved to: {output_dir}")

    return trainer


def main():
    parser = argparse.ArgumentParser(description="Train GTM Skills model")
    parser.add_argument(
        "--config",
        type=str,
        default="configs/llama-3.1-8b.yaml",
        help="Path to configuration file",
    )
    parser.add_argument(
        "--resume",
        type=str,
        default=None,
        help="Path to checkpoint to resume from",
    )
    args = parser.parse_args()

    # Change to training directory
    script_dir = Path(__file__).parent.parent
    os.chdir(script_dir)

    # Load config
    config = load_config(args.config)

    # Train
    trainer = train(config)

    print("\n" + "=" * 50)
    print("Next steps:")
    print("=" * 50)
    print("1. Test the model:")
    print("   python scripts/inference.py --model models/gtm-sales-lora")
    print("")
    print("2. Evaluate the model:")
    print("   python scripts/evaluate.py --model models/gtm-sales-lora")
    print("")
    print("3. Upload to Hugging Face:")
    print("   python scripts/export.py --model models/gtm-sales-lora --push")


if __name__ == "__main__":
    main()
