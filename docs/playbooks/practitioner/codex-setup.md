---
sidebar_label: "Codex Setup"
title: "Setting Up OpenAI Codex"
description: "A practical guide to installing and configuring OpenAI Codex CLI as the harness for your Personal Agentic OS."
---

# Setting Up OpenAI Codex

*Codex is OpenAI's open source terminal agent. It reads your files, runs commands, and operates inside your workspace. This guide gets it running as the engine for your [Personal Agentic OS](/docs/concepts/personal-agentic-os).*

---

## Why Codex

Codex is OpenAI's answer to the terminal agent category. It is lightweight, open source ([GitHub](https://github.com/openai/codex)), and works with your existing ChatGPT subscription or OpenAI API key. If you are already paying for ChatGPT Plus or Pro, Codex is included at no extra cost.

It is one of several harnesses that work for building a Personal Agentic OS. Others include [Claude Code](/docs/playbooks/practitioner/claude-code-setup), [Hermes](/docs/playbooks/practitioner/hermes-setup), OpenCode, and Cursor. All of them read the same folder structure and skill files. Your files are portable across any harness.

---

## Prerequisites

**Node.js** (version 22 or higher)

Codex requires a newer Node than most other tools. Download from [nodejs.org](https://nodejs.org) or install via nvm:

```bash
nvm install 22
nvm use 22
```

Verify:

```bash
node --version
```

You also need **Git** ([git-scm.com](https://git-scm.com)) and optionally **VS Code** ([code.visualstudio.com](https://code.visualstudio.com)).

---

## Install Codex

**Option A: npm**

```bash
npm install -g @openai/codex
```

**Option B: Homebrew (macOS)**

```bash
brew install --cask codex
```

Verify:

```bash
codex --version
```

---

## Authenticate

Launch Codex:

```bash
codex
```

You will be prompted to sign in with your ChatGPT account or enter an OpenAI API key. If you have a ChatGPT Plus or Pro subscription, sign in with your account. No separate API billing needed.

---

## Set Up Your Workspace

Clone the starter repo:

```bash
git clone https://github.com/Applied-AI-Society/minimum-viable-jarvis.git my-jarvis
cd my-jarvis
```

This gives you the standard folder structure:

```
my-jarvis/
  user/              # Your profile, voice, preferences
  people/            # One file per person in your life and business
  artifacts/         # Strategic documents, decision records, plans
  meeting-transcripts/  # Raw or processed conversation transcripts
  skills/            # SOPs for your agent (repeatable workflows)
  CLAUDE.md          # Agent instructions (works with any harness that reads instruction files)
```

The CLAUDE.md file contains system instructions that tell the agent how to operate as your Jarvis. Codex reads markdown instruction files in your workspace. If Codex uses a different instruction file convention (like AGENTS.md), you can copy the contents over. The instructions are plain text and work across harnesses.

---

## First Session

Open your workspace in the terminal and launch Codex:

```bash
cd my-jarvis
codex
```

Tell Codex about yourself. The starter repo includes a `skills/create-user-profile.md` skill that walks through building your `user/USER.md` profile. You can reference it directly: "Read the create-user-profile skill and interview me."

This profile becomes the foundation. Every future session builds on it.

---

## Daily Usage

Same patterns as any harness. Talk to your agent:

- **Brain dump.** "I just had coffee with Marcus. He runs a construction company in Dallas, 40 employees. Interested in AI for project management." Codex creates or updates `people/marcus.md`.
- **Strategic thinking.** "Help me think through whether to take on this client." Codex pulls from your user profile, principles, and current situation.
- **Process a transcript.** Paste a meeting transcript and say "process this." Codex saves it, extracts participants, updates relationship files.
- **Build a skill.** "I want to standardize how I prep for client calls." Codex helps you write a skill file in `skills/`.

---

## Codex vs Claude Code vs Hermes

| | Codex | Claude Code | Hermes |
|---|---|---|---|
| **Cost** | Free with ChatGPT Plus/Pro ($20-200/mo) or API | Claude Max ($100-200/mo) or API | Free (open source models via OpenRouter free tier) |
| **Model** | GPT-4.1, o3, o4-mini | Claude Opus, Sonnet | Any provider (Qwen, Claude, GPT, local) |
| **Open source** | Yes | No | Yes |
| **Always-on agents** | No | No | Yes (gateway, cron jobs, Telegram) |
| **Instruction file** | AGENTS.md | CLAUDE.md | AGENTS.md |
| **Node.js requirement** | 22+ | 18+ | Installed automatically |

All three read the same workspace folder structure. Pick the one that fits your situation. You can switch later without losing anything.

---

## Tips

**Git checkpoint before tasks.** Codex can modify your files. Create a commit before giving it a big task so you can revert if needed: `git add -A && git commit -m "checkpoint"`.

**Voice input.** Install [Superwhisper](https://superwhisper.com) (free, local) or [Wispr Flow](https://wisprflow.ai) (~$10/mo) for dictation. Speaking is 3 to 5x faster than typing.

**Your files are sovereign.** Everything is plain markdown on your machine. If you switch from Codex to Claude Code or Hermes tomorrow, your files come with you. That is the whole point of the [Personal Agentic OS architecture](/docs/concepts/personal-agentic-os).

---

## Troubleshooting

**`codex: command not found`:** Restart your terminal. Check that npm's global bin is on your PATH: `npm config get prefix`.

**Node version too old:** Codex requires Node 22+. Run `node --version`. Upgrade via [nodejs.org](https://nodejs.org) or `nvm install 22`.

**Authentication issues:** Run `codex` and follow the sign-in prompts. Works with ChatGPT account or OpenAI API key.

**Windows:** Codex works best in WSL2. Install WSL2 first, then follow Linux instructions inside your WSL terminal. See the [Windows guide](https://developers.openai.com/codex/windows).

---

## Further Reading

- [OpenAI Codex Documentation](https://developers.openai.com/codex/quickstart): Official quickstart
- [GitHub Repository](https://github.com/openai/codex): Source code and issues
- [Supersuit Up Workshop](/docs/workshops/supersuit-up): The full self-paced tutorial
- [Claude Code Setup](/docs/playbooks/practitioner/claude-code-setup): Alternative harness from Anthropic
- [Hermes Setup](/docs/playbooks/practitioner/hermes-setup): Zero-cost open source alternative
- [Harness Engineering](/docs/concepts/harness-engineering): Why the wrapper matters as much as the model
- [Hyperagency](/docs/concepts/hyperagency): What becomes possible when your system compounds
