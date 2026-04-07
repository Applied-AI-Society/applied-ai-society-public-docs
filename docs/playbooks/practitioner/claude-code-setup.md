---
sidebar_label: "Claude Code Setup"
title: "Setting Up Claude Code"
description: "A practical guide to installing and configuring Claude Code as the harness for your Personal Agentic OS."
---

# Setting Up Claude Code

*Claude Code is Anthropic's terminal-based AI agent. It reads your files, writes files, runs commands, and operates inside your workspace. This guide gets it running as the engine for your [Personal Agentic OS](/docs/concepts/personal-agentic-os).*

---

## Why Claude Code

Claude Code is the most capable commercial AI coding agent available. It reads your entire workspace as context, executes multi-step tasks autonomously, and supports persistent [instruction files](/docs/concepts/instruction-files) (CLAUDE.md) that shape how it operates. For building a Personal Agentic OS, it has three advantages:

1. **Deep context window.** Claude Code reads all the files in your workspace. Your user profile, relationship files, artifacts, skill files, meeting transcripts. It sees everything and operates from that full picture.
2. **Persistent instructions.** The CLAUDE.md file at the root of your workspace tells Claude Code how to behave, what conventions to follow, and what skills are available. It reads this file at the start of every session. This is how you train your Jarvis.
3. **Tool use.** Claude Code can run shell commands, search the web, read files, write files, and execute scripts. It is not a chatbot. It is an agent that can take action on your behalf.

The tradeoff: Claude Code requires a paid Anthropic subscription (Claude Max at $100/mo or $200/mo, or API usage). If cost is a constraint, see the [Hermes Setup](/docs/playbooks/practitioner/hermes-setup) guide for a zero-cost alternative that uses open source models. Both harnesses work with the same Personal Agentic OS folder structure. Your files are portable.

---

## Prerequisites

You need three things installed before Claude Code:

**1. Node.js** (version 18 or higher)

Download from [nodejs.org](https://nodejs.org) and run the installer. Pick the LTS version. To verify:

```bash
node --version
```

If you see `v18.x.x` or higher, you are good.

**2. Git**

Download from [git-scm.com](https://git-scm.com) and run the installer. To verify:

```bash
git --version
```

**3. VS Code** (recommended, not required)

Download from [code.visualstudio.com](https://code.visualstudio.com). Claude Code runs in any terminal, but VS Code gives you a file explorer and terminal side by side, which makes it easy to see what your agent is doing.

---

## Install Claude Code

One command:

```bash
npm install -g @anthropic-ai/claude-code
```

Verify it installed:

```bash
claude --version
```

On first launch, Claude Code will walk you through authenticating with your Anthropic account.

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
  CLAUDE.md          # Instructions that tell Claude Code how to operate
```

The CLAUDE.md file is already configured. It tells Claude Code to act as your Jarvis: route brain dumps to the right folders, maintain cross-references between people and transcripts, and run the user profile interview on first session.

Open the workspace in VS Code:

```bash
code my-jarvis
```

---

## First Session

Open the terminal in VS Code (`` Ctrl+` `` or `` Cmd+` `` on Mac) and launch Claude Code:

```bash
claude
```

On your very first session, Claude Code will read the CLAUDE.md instructions and notice that `user/USER.md` does not exist. It will run the `create-user-profile` skill automatically: an interview that asks you about who you are, what you are building, your values, your current situation, and your 90-day vision. Answer honestly. This file becomes the foundation everything else builds on.

After the interview, your `user/USER.md` exists. Every future session starts with Claude Code reading that file plus everything else in your workspace. The more context you add over time, the more useful every session becomes.

---

## Daily Usage

The core loop is simple: talk to your Jarvis. Some examples of what to say:

**Brain dump.** "I just got off a call with Sarah. She is interested in partnering on the Austin event. She runs a design studio and has 15 years of experience. Her email is sarah@example.com." Claude Code will create or update a relationship file in `people/sarah.md` and link it to any relevant artifacts.

**Strategic thinking.** "I need to decide between two offers. Offer A is higher pay but a two-year commitment. Offer B is lower pay but I keep full ownership. Help me think through this." Claude Code will engage with your decision using context from your user profile, your principles, and your 90-day vision.

**Process a transcript.** Paste a meeting transcript (from [Granola](https://granola.ai), Otter, or manual notes) and say "process this transcript." Claude Code will save it, extract participants, update relationship files, and surface action items.

**Create a skill.** "I keep doing the same thing every time I prepare for a meeting. Can we turn that into a skill?" Claude Code will help you write a skill file in `skills/` that codifies the workflow so it runs the same way every time.

---

## Useful Aliases

Add these to your `~/.zshrc` or `~/.bashrc` for convenience:

```bash
# Launch Claude Code in dangerous mode (no approval prompts)
alias clauded="claude --dangerously-skip-permissions"

# Launch Claude Code in your Jarvis workspace from anywhere
alias jarvis="cd ~/my-jarvis && claude"
```

Use `clauded` when you trust the operations (brain dumps, file updates). Use `claude` when working with credentials or production systems.

---

## Tips

**Voice input changes everything.** Install [Superwhisper](https://superwhisper.com) (free, fully local) or [Wispr Flow](https://wisprflow.ai) (~$10/mo). Hold a key, talk, release. The text appears wherever your cursor is, including the Claude Code terminal. Speaking is 3 to 5x faster than typing and keeps you in flow state instead of editing yourself mid-thought.

**The system compounds.** Day one is thin. At 30 days, your Jarvis knows your key relationships, your strategic context, and your communication patterns well enough to draft emails in your voice. At 90 days, it briefs you before every meeting with full relationship history. The compounding effect is the entire point. Feed it daily.

**Your files are sovereign.** Everything is plain markdown on your computer, version-controlled with Git. If Anthropic changes their pricing or a better harness appears, you take your files and walk. No export wizard. No migration headache. The [Personal Agentic OS architecture](/docs/concepts/personal-agentic-os) is designed for this.

**Push to GitHub.** Initialize a private repo and push regularly. This gives you version history, backup, and the ability to access your workspace from multiple machines.

```bash
cd my-jarvis
git init
git add -A
git commit -m "Initial Jarvis setup"
gh repo create my-jarvis --private --push
```

---

## Troubleshooting

**`claude: command not found`** — Restart your terminal or run `source ~/.zshrc`. If still missing, check that npm's global bin directory is on your PATH: `npm config get prefix` should show a path, and `{that path}/bin` should be in your PATH.

**Authentication issues** — Run `claude` and follow the login prompts. You need an active Anthropic account with Claude Max or API access.

**Old Node.js version** — Claude Code requires Node 18+. Run `node --version` to check. If you need to upgrade, download the latest LTS from [nodejs.org](https://nodejs.org) or use `nvm install --lts`.

**Windows users** — Claude Code works best in WSL2 (Windows Subsystem for Linux). Install WSL2 first, then follow the Linux instructions inside your WSL terminal.

---

## Further Reading

- [MVP Personal Agentic OS Workshop](/docs/playbooks/practitioner/mvp-personal-agentic-os): The full self-paced tutorial covering the entire system
- [Hermes Setup](/docs/playbooks/practitioner/hermes-setup): Zero-cost alternative harness using open source models
- [Personal Agentic OS](/docs/concepts/personal-agentic-os): The concept behind what you just built
- [Harness Engineering](/docs/concepts/harness-engineering): Why the code around the model matters as much as the model
- [Instruction Files](/docs/concepts/instruction-files): How CLAUDE.md and skill files shape agent behavior
- [Externalize Your Brain](/docs/concepts/externalize-your-brain): Why you are the bottleneck and how this system fixes it
- [Hyperagency](/docs/concepts/hyperagency): What becomes possible when your system compounds
