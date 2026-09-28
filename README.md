# Gen AI Learning Journey

Hands-on code and notes from my Gen AI cohort. Each folder covers one concept: what I learned, what I built, and what broke along the way.

> **Status legend:** ✅ Done · 🚧 In progress · 📝 Planned

## Topics

| # | Topic | What it covers | Status |
|---|-------|----------------|--------|
| 01 | [Tokenization](./01-tokenization) | How text becomes tokens, and why it affects cost and context | 📝 |
| 02 | [Prompting](./02-prompting) | Prompt patterns, structured outputs, few-shot examples | 📝 |
| 03 | [Agents](./03-agents) | Tool-calling loops built from scratch | 📝 |
| 04 | [Agent SDK](./04-agent-sdk) | Building agents with an SDK instead of raw loops | 📝 |
| 05 | [RAG](./05-rag) | Chunking, embeddings, vector search, answer generation | 📝 |
| 06 | [Advanced RAG](./06-advanced-rag) | Reranking, hybrid search, query rewriting | 📝 |
| 07 | [Vectorless RAG](./07-vectorless-rag) | Retrieval without embeddings | 📝 |
| 08 | [Memory](./08-memory) | Short-term and long-term memory for agents | 📝 |
| 09 | [Inngest Workflows](./09-inngest-workflows) | Durable, event-driven workflows for AI steps | 📝 |
| 10 | [MCP](./10-mcp) | Building and using Model Context Protocol servers | 📝 |
| 11 | [Claude Skills](./11-claude-skills) | Packaging reusable instructions as skills | 📝 |

## Capstone projects

| Project | Combines | Status |
|---------|----------|--------|
| _Coming soon_ | Agent + RAG + Memory + MCP + Inngest | 📝 |

## Repo structure

```
.
├── 01-tokenization/
│   ├── README.md
│   ├── package.json
│   ├── .env.example
│   ├── index.js
│   └── ...
├── 02-prompting/
├── ...
├── .gitignore
└── README.md
```

Every folder is self-contained, so you can clone the repo and run just one topic.

## Getting started

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>/<topic-folder>

# Install dependencies
npm install

# Add your own keys
cp .env.example .env

# Run (Node 20.6+ can load .env natively)
node --env-file=.env index.js
```

**Requirements:** Node.js 20 or later.

## API keys and secrets

No real keys are committed to this repo. Each folder that needs credentials includes a `.env.example` with placeholder names. Copy it to `.env` and fill in your own values.

## Tech stack

- **Language / runtime:** JavaScript (Node.js 20+, ES modules)
- **Models / APIs:** Anthropic Claude _(add others as you use them)_
- **Tools:** Inngest, MCP, _(add vector DBs, frameworks, etc.)_

## Learning log

A short running log of what clicked and what didn't.

- _YYYY-MM-DD:_ Started the repo. First topic: tokenization.

## About

Built by [Your Name](https://github.com/<your-username>). Feedback and suggestions are welcome via issues.