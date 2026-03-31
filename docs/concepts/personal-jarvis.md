---
sidebar_position: 15
title: "Personal Jarvis"
---

# Personal Jarvis

*A personal AI system that operates from your context, compounds over time, and is owned entirely by you.*

---

## The Concept

A Jarvis is not a chatbot. It is not an app you open to ask questions. It is a persistent, file-based system where you document the truth about your life and operation, and an AI [harness](/docs/concepts/harness-engineering) reads that truth and acts on it.

The name comes from the obvious place (Tony Stark's AI assistant), but the implementation is more mundane and more powerful than the fiction. A Jarvis is a folder on your computer with markdown files in it. That is it. The magic is in what those files contain and what happens when an AI agent can read all of them at once.

## What Makes It Different from a Chatbot

| | Chatbot | Jarvis |
|---|---|---|
| **Memory** | Resets every session (or limited to platform's memory feature) | Persistent files that compound forever |
| **Context** | Only knows what you type in that conversation | Knows your goals, relationships, decisions, principles, voice, and history |
| **Ownership** | Your data lives on someone else's server | Your files live on your computer, in plain markdown |
| **Portability** | Locked into one platform | Works with any AI tool that can read files |
| **Output** | Answers questions | Routes information, creates documents, maintains coherence across your entire operation |
| **Growth** | Does not get better over time | Gets dramatically more useful the more context it has |

## The Architecture

A Jarvis has five core components:

1. **User profile** (`user/USER.md`): Who you are, how you think, what you value, what is blocking you. The foundation everything else builds on.

2. **Relationship files** (`people/`): One file per person. What you know about them, your history together, what you are working on. Your AI can brief you before any meeting.

3. **Artifacts** (`artifacts/`): Strategic documents, decision records, status updates, plans. The documented truth of your operation.

4. **Transcripts** (`meeting-transcripts/`): Raw material from conversations. Your AI processes these to update relationship files and extract action items.

5. **Skill files** (`skills/`): SOPs for your AI agent. Repeatable workflows documented step by step so the agent can execute them reliably.

The AI [harness](/docs/concepts/harness-engineering) (currently Claude Code for most practitioners) reads all of these files and operates within that context. The harness is the engine. The files are the fuel. You can swap the engine any time. The fuel is yours.

## The Compounding Effect

A Jarvis on day one is barely useful. You have a few files, thin context, and the AI is mostly guessing.

A Jarvis at 30 days has enough relationship files, artifacts, and brain dumps that the AI starts catching things you would miss. Briefings become genuinely useful. Context from three weeks ago surfaces at exactly the right moment.

A Jarvis at 90 days knows your operation well enough to draft emails in your voice, prepare meeting agendas from relationship history, and generate strategic briefs that reflect your actual priorities rather than generic advice.

A Jarvis at a year is a second brain that remembers everything, never drops a ball, and gets better every day. The compounding effect is the entire point. Every brain dump, every transcript, every relationship update makes every future interaction more useful.

## The Sovereignty Principle

A Jarvis is sovereign by design. Your files are plain markdown on your computer. They are version-controlled with Git. They can be read by any AI tool. If the AI company you are using today triples their price, shuts down, or gets worse, you take your files and walk. No export wizard. No migration headache. No data hostage situation.

This is not a philosophical stance. It is an architectural decision. The [Sovereign Agentic Business OS](/docs/sovereign-agentic-business-os) principles go deeper on why this matters and how to think about it as your system grows.

## Getting Started

The [Minimum Viable Jarvis](/docs/playbooks/practitioner/minimum-viable-jarvis) tutorial walks you through setting up your first Jarvis in about 4 hours. The [starter repo](https://github.com/Applied-AI-Society/minimum-viable-jarvis) gives you the default folder structure to clone.

The [Jarvis Trainer](/docs/roles/jarvis-trainer) role describes the progression from first setup through increasingly deeper levels of integration.

---

## Further Reading

- [The Minimum Viable Jarvis](/docs/playbooks/practitioner/minimum-viable-jarvis): The setup tutorial
- [Harness Engineering](/docs/concepts/harness-engineering): Why the code around the model matters as much as the model
- [Sovereign Agentic Business OS](/docs/sovereign-agentic-business-os): The full sovereignty philosophy
- [Context Engineering](/docs/concepts/context-engineering): The discipline of curating what your AI knows
- [Game Design](/docs/concepts/game-design): Designing objectives, rules, and guardrails for your agents
