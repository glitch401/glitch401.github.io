---
date: '2026-11-15'
title: 'astro-weights'
github: 'https://github.com/astro-weights/astro-weights'
external: 'https://astro-weights.dev/'
featured: true
started: 'November 2026'
tech:
  - Python
  - PyTorch
  - transformers
  - PEFT
  - LoRA
---

Small course corrections for open LLMs. I built and maintain this open-source library. An agent proposes small, targeted low-rank edits to a model's weights, and only the ones that hold up under paired tests are kept. Each kept edit is saved as a plain PEFT LoRA adapter, so it loads in transformers, vLLM or llama.cpp with no custom runtime, and dropping the adapter gives you the base model back.

## What 0.1 does

1. Builds low-rank edits and applies them to transformers models.
2. Saves and loads edits as standard LoRA adapters.
3. Finds difference-of-means directions, with a split-half check so a direction has to replicate before it counts.
4. Runs paired eval statistics, so an edit is judged against the unedited model on the same prompts.

It's pre-alpha: `pip install astro-weights` works, and the API will change before 1.0.

## Results from the approach

Two public models use this kind of edit: [qwen3.5-9B-terse](https://huggingface.co/glitch401/qwen3.5-9B-terse) answers MATH-500 problems with about 10% fewer tokens at unchanged accuracy (held-out, paired against the base model), and [qwen3.8-27B-terse](https://huggingface.co/glitch401/qwen3.8-27B-terse) with about 30% fewer.

## Links

- [Docs](https://astro-weights.dev/docs/)
- [PyPI](https://pypi.org/project/astro-weights/)
