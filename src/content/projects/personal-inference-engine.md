---
date: '2025-06-01'
title: 'Personal Inference Engine'
featured: true
started: 'Summer 2025'
tech:
  - llama.cpp
  - llama-swap
  - Tailscale
  - CUDA
  - Linux
---

A home GPU server with two consumer GPUs (an 8 GB card and a 24 GB card) that serves local models to my own automation projects, reachable from anywhere over Tailscale. I started it in summer 2025.

## The build

1. llama.cpp serves the models, behind llama-swap so a request loads the model it names. I moved to it from Ollama after a benchmark (see below).
2. One server process per GPU. Letting a single process split a model across both cards cost memory and caused models to evict each other.
3. Models are placed on purpose: small models on the 8 GB card, the 27B on the 24 GB card, with KV-cache quantization to fit longer contexts.
4. Tailscale makes the server a private endpoint on my other machines. Nothing is exposed to the public internet.
5. Power caps and a boot-history check keep the box stable under dual-GPU load.

## How it evolved

<figure class="fig timeline"><div class="fig-title">August 2025, in four entries</div><ol>
<li><span class="when">10 Aug</span><span>An Ollama upgrade cut resident memory by about 40%.</span></li>
<li><span class="when">13 Aug</span><span>Measured the GPU idle about 60% of the time.</span></li>
<li><span class="when">26 Aug</span><span>Two GPUs, and the first hard crashes under dual-GPU load.</span></li>
<li><span class="when">27 Aug</span><span>Benchmark showed llama.cpp 4.1x faster on the 9B model. Moved off Ollama.</span></li>
</ol></figure>

## Notes from running it

- [What Two GPUs at Home Taught Me](/writing/two-gpus-at-home/): an idle GPU, an 850 W supply and llama.cpp against Ollama.
- [Two Stores, One Truth](/writing/two-stores-one-truth/): a state bug that kept returning.
