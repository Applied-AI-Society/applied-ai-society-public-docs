---
sidebar_position: 117
title: "Jarvis Workspace"
---

# Jarvis Workspace

*The cockpit. A single window where the file tree and the agentic terminal share the same context, and both the human and the agent can see everything the work requires.*

---

## What It Is, Operationally

A Jarvis workspace is a concrete physical setup:

- **One window** (usually VS Code) opened on your Jarvis folder as the project root.
- **File tree on the left** showing `user/`, `people/`, `artifacts/`, `meeting-transcripts/`, `.agents/skills/`, `CLAUDE.md`, `AGENTS.md`, and `README.md`.
- **Integrated terminal at the bottom** with your agentic harness (Claude Code, Codex, Hermes) running.
- **The agent has context** because the harness reads `CLAUDE.md` or `AGENTS.md` on session start, which points it at `user/USER.md`, your [PRM](/docs/concepts/prm) structure, and your skill library.

A window, a tree, a terminal, and context. Those four elements together are what make a Jarvis session different from a chat window.

## The Anatomy

Every Jarvis workspace ships with the same load-bearing pieces:

- **`user/USER.md`**: who you are, what you are building, how you make decisions. The agent reads this first.
- **`people/`**: your [PRM](/docs/concepts/prm). One file per person who matters.
- **`artifacts/`**: strategic docs, decision records, plans. The institutional memory of your operation.
- **`meeting-transcripts/`**: conversation records. Raw material for everything downstream.
- **`.agents/skills/`**: skill files (SOPs) that let the agent run repeatable workflows on demand.
- **`CLAUDE.md` / `AGENTS.md`**: the [instruction files](/docs/concepts/instruction-files) that tell the agent how to operate inside this workspace.
- **`README.md`**: the human-facing map.

Together this is your [context lake](/docs/concepts/context-lake). The workspace is the way you access it.

## Two Patterns

### Pattern 1: Single-Repo Workspace

Open one folder (your Jarvis repo) as the VS Code root. The agent sees this workspace and nothing else. This is the default, and the one that ships with the [Supersuit Up Workshop](/docs/workshops/supersuit-up).

Simple. Contained. Portable across machines. Good for most users starting out.

### Pattern 2: Parent-Folder Workspace

Open a parent folder (e.g., `~/Documents/github-repos/`) that contains multiple repos as siblings: your Jarvis, your business documents repo, your product repo, your public docs repo, and so on. The agent running in the terminal can read across all of them.

This is the higher-leverage setup once you operate across multiple contexts. A single agent session can pull from your Jarvis people file, read a spec in another repo, and update both without you copy-pasting between windows. Human and agent see every file the work requires in one tree.

The tradeoff: wider context is usually a feature, and it means the agent has more surface area to act on. Only run this pattern if you trust the agent's permission posture and you are paying attention to what it changes.

## Why This Matters

The workspace is the physical version of [Personal Agentic OS](/docs/concepts/personal-agentic-os). Without it, "build your Jarvis" stays abstract. With it, the instruction is concrete: open this window, talk to this terminal, and the system you built runs.

Most productivity tools isolate the human from the file system and the file system from the agent. A Jarvis workspace reunites them. You, your files, and your agent operating from the same cockpit.

## How to Open Yours

The [Supersuit Up Workshop](/docs/workshops/supersuit-up) walks through setting up your first single-repo workspace end to end. Once that is running, you can open a parent folder instead any time you want the wider view. The files, skills, and instruction files all still work the same way.

---

## Further Reading

- [Personal Agentic OS](/docs/concepts/personal-agentic-os): the system your workspace is the cockpit for
- [Context Lake](/docs/concepts/context-lake): what lives inside the workspace
- [PRM](/docs/concepts/prm): the relationship layer (`people/`, transcripts, artifacts)
- [Instruction Files](/docs/concepts/instruction-files): `CLAUDE.md`, `AGENTS.md`, and the skill files that configure the cockpit
- [Supersuit Up Workshop](/docs/workshops/supersuit-up): the full setup walkthrough
