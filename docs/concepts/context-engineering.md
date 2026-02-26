---
sidebar_position: 2
title: "Context Engineering"
---

# Context Engineering

*The skill that separates “AI is okay” from “AI changed how I work.” And the one most people are skipping.*

---

## What It Is

Context engineering is the discipline of curating the right information state for an AI system to operate within. Not crafting a single prompt (that's prompt engineering). Not encoding organizational purpose (that's [intent engineering](./intent-engineering)). Context engineering sits between the two: it's about making sure the agent has the right knowledge, at the right time, structured in the right way.

Anthropic named this discipline in late 2025 when they observed that the highest-performing AI deployments weren't the ones with the best prompts. They were the ones with the best information architecture: RAG pipelines, MCP servers, structured knowledge bases, and carefully curated context files that gave agents a rich, accurate picture of what they needed to know.

The principle is simple. The execution is not.

---

## Why It Matters

Here's what most people do with AI: they open a chat window, type a question, and get a generic answer. Then they say “AI is okay but not that useful for my specific work.”

The problem isn't the model. The problem is the model knows nothing about them, their projects, their preferences, their constraints, or what they've already tried. It's like hiring a brilliant consultant and refusing to brief them.

Context engineering fixes this. When you give an agent structured, relevant context about the situation it's operating in, the output quality changes dramatically. Not incrementally. Categorically.

This applies at every scale:

**Personal scale.** An individual maintaining structured notes about their projects, thinking, and goals can pass those into an agent session and get output that feels like a thinking partner, not a generic chatbot. (See Vin's Obsidian + Claude Code workflow in [Further Reading](#further-reading) for a vivid example of this.)

**Team scale.** A small team that maintains a shared knowledge base (project briefs, decision logs, client context) can give agents enough context to draft communications, scope features, and prepare meeting briefs that actually reflect the team's real situation.

**Organizational scale.** A company that structures its institutional knowledge so agents can access it (customer data, product specs, operational procedures, past decisions) can deploy agents that operate with genuine organizational awareness, not just generic capability.

At every level, the pattern is the same: the quality of agent output is directly proportional to the quality of context you feed it.

---

## The Economics of Context

Context isn't free. Every file you load into an agent session costs tokens. Every token costs money. This is where context engineering becomes a real discipline rather than just “give the AI more stuff.”

A naive approach: load everything. Give the agent your entire vault, your full project history, every meeting transcript. The output will be rich, but the session will be slow and expensive. If you're running this daily, the costs compound.

A thoughtful approach: load the minimum sufficient context for the task at hand. Structure your knowledge so you can load the right slice at the right time. A morning planning session needs your calendar, recent daily notes, and active project briefs. A deep creative session needs your idea files and domain-specific notes. A client meeting prep needs the relationship file and recent communications.

Practitioners who help clients set up personal AI systems need to think about this explicitly:
- What context is essential for each type of task?
- How should files be structured so you load the right subset, not everything?
- What's the monthly token cost of running an agent with deep context daily?
- Where's the line between “enough context to be useful” and “so much context it's slow and expensive”?

The best context architecture is one where the right information is always within reach, but you're not paying to load irrelevant files on every session.

---

## Context Engineering vs. Prompt Engineering vs. Intent Engineering

These three disciplines form a stack. Each one operates at a different level.

**Prompt engineering** is about crafting the right instruction for a single interaction. It's individual, session-based, and synchronous. “How do I word this so the AI gives me what I want?”

**Context engineering** is about curating the right information state across interactions. It's structural and persistent. “What does the agent need to know about my situation to be genuinely useful?”

**Intent engineering** is about encoding purpose so agents optimize for the right goals autonomously. It's organizational and strategic. “When this agent makes a decision without me, what should it optimize for?”

Most people are stuck at prompt engineering. They're crafting better and better instructions for an agent that has no idea who they are, what they're working on, or what matters to them. Moving to context engineering is the single highest-impact shift most people can make right now.

Intent engineering is the frontier. It's the hardest, least-built discipline, and the most consequential for organizations deploying agents at scale. [Read more about intent engineering →](./intent-engineering)

---

## What Good Context Architecture Looks Like

There's no single right way to structure context, but patterns are emerging.

**Markdown files as the foundation.** Plain text, version-controllable, readable by any agent. Tools like Obsidian add inter-linking between files, which gives agents visibility into how concepts relate to each other. But even a well-organized folder of markdown files is a massive upgrade over nothing.

**Context files per domain.** A file describing each major project, client, or area of focus. Updated regularly. Contains the current state, key decisions, open questions, and relevant constraints. When you start an agent session about that domain, you load that file.

**Daily notes as a running log.** Short entries capturing what happened, what you're thinking about, what shifted. Over time, this becomes a searchable history of your thinking and priorities that agents can mine for patterns.

**Separation between human-written and agent-written content.** Some practitioners maintain a strict rule: agents never write into the knowledge base. The knowledge base is the human's thinking. Agents read from it and write output elsewhere. This prevents agent-generated patterns from contaminating the human's own reflection, which matters if you're using agents as thinking partners.

---

## For Practitioners

If you do applied AI work, context engineering is a core skill. Here's why:

Most clients who say “AI isn't useful for my business” actually mean “I tried ChatGPT for 10 minutes without giving it any context about my business.” The practitioner's job is to build the context layer that makes AI genuinely useful for that specific client.

This is where real value lives. Anyone can show a client a cool AI demo. A practitioner who sets up structured context so the client's agents actually understand their business, their customers, their constraints, and their goals is doing work that compounds over time. Every file added to the knowledge base makes every future agent session better.

If you're helping an executive set up a personal AI business OS, you're doing context engineering. If you're building a team knowledge base that agents can query, you're doing context engineering. If you're structuring a company's institutional knowledge for agent access, you're doing context engineering.

The skill is the same at every scale. The stakes get higher as you go up.

---

## Further Reading

- [Game Design](./game-design): The umbrella discipline that composes context and intent engineering into a coherent system
- [Intent Engineering](./intent-engineering): The next discipline in the stack, encoding organizational purpose
- [Superprompt](./superprompt): The unit of work that emerges when context engineering is real. The activated prompt, riding on a fully loaded Jarvis
- [How I Use Obsidian + Claude Code to Run My Life](https://www.youtube.com/watch?v=6MBq1paspVU) (Greg Isenberg + Internet Vin): The best public demonstration of personal-scale context engineering we've seen. Vin walks through his full Obsidian + Claude Code setup including custom commands for daily planning, idea generation, pattern detection, and self-reflection, all powered by a well-maintained vault of context files.
- [Anatomy of a Harness](./anatomy-of-a-harness): How Claude Code implements layered context assembly in production (the engineering behind this concept)
- [Externalize Your Brain](/docs/concepts/externalize-your-brain): The prerequisite practice that builds the information state context engineering curates
- [The Applied AI Economy](/docs/playbooks/practitioner/applied-ai-economy): Where context engineering fits in the broader landscape of practitioner skills
