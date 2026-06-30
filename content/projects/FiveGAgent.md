---
date: '2025-06-15'
title: '5GAgent — LLM-Guided 5G Protocol Fuzzing'
github: 'https://github.com/glitch401/5GAgent'
external: ''
tech:
  - LangChain
  - LangGraph
  - Ollama
  - srsRAN
  - NetworkX
  - FastAPI
showInProjects: true
---

An autonomous agent that uses large language models to extract Finite State Machines from 3GPP 5G protocol specifications and generate adversarial test cases for security fuzzing. The agent pipeline includes PDF extraction from specification documents, semantic FSM construction using LLMs, and automated test case generation that targets edge cases in protocol state transitions. Integrates with the srsRAN 5G testbed for real-world execution and validation.
