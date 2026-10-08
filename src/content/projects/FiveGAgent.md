---
date: '2025-11-01'
title: '5GAgent'
github: 'https://github.com/glitch401/5GAgent'
external: ''
featured: true
started: 'November 2025'
tech:
  - Python
  - LangGraph
  - vLLM
  - LoRA
  - NetworkX
---

An LLM-driven tester for 5G protocols: it reads 3GPP specifications, builds a state-machine graph, proposes adversarial message sequences, and runs them against a real testbed. I started it in November 2025. This is a sneak peek, and the full story comes later.

## The loop

1. Read the spec. Thousands of pages of PDF become text, tables and a message catalogue.
2. Build a graph. A language model extracts the protocol's states and transitions.
3. Generate. The model walks paths through the graph and writes concrete sequences, steered by a playbook of attack patterns.
4. Run on hardware. Sequences execute on a physical testbed so the behaviour is real.
5. Score and learn. A deterministic oracle labels each result, and good ones feed back into the generator through fine-tuning.

## Notes from the build

- [My Stateful Memory Made the Fuzzer Worse](/writing/stateful-memory-made-my-fuzzer-worse/)
- [Four Results I Had to Retract](/writing/four-results-i-had-to-retract/)

Specific findings, targets and results are not published here.
