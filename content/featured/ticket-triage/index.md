---
date: '2'
title: 'AI Ticket Triage, Fully Local'
cover: './cover.png'
external: 'https://github.com/glitch401/p1-seafoam-cicada'
github: 'https://github.com/glitch401/p1-seafoam-cicada'
cta: ''
tech:
  - LangGraph
  - Ollama
  - Qwen3
  - FastAPI
  - LangSmith
---

Support queues die by a thousand lookups: find the order, check the policy, draft the reply. This agent does the boring parts, and it does them without sending a single byte to the cloud.

LangGraph manages state through sticky threads that pin each conversation to its Order ID, Qwen3 runs locally over Ollama, and every decision is traced in LangSmith so I can see exactly why the agent wrote what it wrote. A Next.js chat UI sits on top.
