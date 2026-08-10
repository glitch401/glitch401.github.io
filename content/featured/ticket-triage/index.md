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

Support queues die by a thousand lookups. Find the order, check the policy, draft the reply. This agent does the boring parts, and it never sends a byte to the cloud.

LangGraph keeps state in sticky threads pinned to Order IDs, Qwen3 runs on my own hardware through Ollama, and LangSmith traces every step so I can see why the agent wrote what it wrote. There's a Next.js chat UI on top.
