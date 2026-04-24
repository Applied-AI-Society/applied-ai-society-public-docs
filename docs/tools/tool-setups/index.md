---
sidebar_position: 99
title: "Tool Setups"
description: "Setup tutorials for the harnesses and adjacent tools you'll use to run a Personal Agentic OS. Pick a harness, follow its setup, set up git, then run the workspace bootstrap."
---

# Tool Setups

*Step-by-step setup tutorials for the harnesses and adjacent tools that the workshops install on your machine. Sibling to the [Tools Reference](/docs/tools) pages, which describe what each tool is. These pages walk you through configuring each one for your Personal Agentic OS.*

---

## Pick A Harness

You only need one harness. All three read the same workspace folder structure and skill files, so your work is portable across them.

- [**Claude Code Setup**](/docs/tools/tool-setups/claude-code-setup). Anthropic's commercial harness. Strongest reasoning, simplest setup, requires a paid Anthropic subscription. The default we teach in [Supersuit Up](/docs/workshops/supersuit-up).
- [**Codex Setup**](/docs/tools/tool-setups/codex-setup). OpenAI's open source harness. Good fit if you already pay for ChatGPT Plus or Pro.
- [**Hermes Setup**](/docs/tools/tool-setups/hermes-setup). Free, open source harness using open source models. Zero-cost path with always-on agents and cron support.

For the framing of why a harness is the most important piece (not the model), see [Learn The Harness, Not The Wrapper](/docs/concepts/learn-the-harness-not-the-wrapper) and [Anatomy Of A Harness](/docs/concepts/anatomy-of-a-harness).

---

## Then Set Up Git And Your Workspace

- [**First Git Setup**](/docs/tools/tool-setups/first-git-setup). Version control basics for your workspace. Required before the workspace bootstrap.
- [**Set Up Your Workspace**](/docs/tools/tool-setups/workspace-setup). The canonical one-prompt flow. Launch your harness, paste one prompt, and it uses `gh` to create a private Jarvis repo on your GitHub account from the [Minimum Viable Jarvis template](https://github.com/Applied-AI-Society/minimum-viable-jarvis), clone it, wire the upstream remote, and let the built-in `onboard` skill personalize it.

This flow is shared across all three harnesses, so the workspace itself stays portable no matter which one you launched it from.

---

## What Comes After Setup

Once your harness, git, and workspace are running:

- [**Export Your AI History**](/docs/playbooks/practitioner/export-your-ai-history). One-time bootstrap. Pull years of ChatGPT, Claude, and Gemini history into your `user/USER.md` so your Jarvis knows you from day one.
- [**Priming Your Jarvis**](/docs/playbooks/practitioner/priming-your-jarvis). Daily discipline. The reflex of dragging files into the chat and voice-dumping framing before you ask for anything real.
- [**Using The Docs With Your Jarvis**](/docs/playbooks/practitioner/using-the-docs-with-your-jarvis). Give your Personal Agentic OS access to the full AAS knowledge base.
