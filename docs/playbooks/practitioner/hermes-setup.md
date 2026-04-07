---
sidebar_label: "Hermes Setup"
title: "Setting Up Hermes Agent"
description: "A detailed guide to installing, configuring, and getting the most out of Hermes Agent, the open source agent that replaces Claude Code and OpenClaw in one tool."
---

# Setting Up Hermes Agent

[Hermes Agent](https://hermes-agent.nousresearch.com) is an open source autonomous AI agent by [Nous Research](https://nousresearch.com), a research company that builds frontier open source AI models (the Hermes model family) and now full agent infrastructure. Hermes is named after the AI model line they are known for.

## Why Hermes

Hermes is Claude Code and OpenClaw in one tool. It gives you the AI coding agent that reads files, writes files, runs commands, and operates inside your workspace, plus the always-on agent that runs cron jobs, manages messaging platforms, maintains persistent memory, and keeps working when your terminal session is gone.

For context: before Hermes, the Applied AI Society ran on OpenClaw + Claude (~$200/mo in API costs). Cron jobs were timing out. Skills were scattered across three directories, half invisible to the primary agent. Four out of six active cron jobs were failing. The agent was broken and costing $200/month for it to be broken.

The migration to Hermes + Qwen 3.6 via OpenRouter's free tier brought the monthly inference cost to zero. Same cron jobs. Same Telegram delivery. Same skills. Same memory. Same triage. Better reliability.

That is what Hermes makes possible: an agent system with zero marginal cost per message. Run the heartbeat, the triage, the morning briefing with deeper context, additional subagents for research. The economic friction is gone. You stop optimizing for API cost and start optimizing for capability.

## Quick Install

Linux, macOS, or WSL2:

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

Then reload your shell:

```bash
source ~/.zshrc  # or source ~/.bashrc
```

The installer handles everything automatically: Python 3.11, Node.js, ripgrep, ffmpeg, the repo clone, virtual environment, and the global `hermes` command.

## Configure Your LLM Provider

Run:

```bash
hermes model
```

You can use any LLM provider. Here are the most common options:

- **OpenRouter.** Single API key, access to hundreds of models. Good starting point.
- **Anthropic.** Direct access to Claude models. Use a Claude API key.
- **OpenAI.** GPT models. Use your OpenAI API key.
- **Local models.** Run models on your own hardware via local inference servers. Zero data leaves your machine.

Follow the prompts to select your provider and enter your API key.

## First Launch

```bash
hermes
```

Hermes walks you through a setup flow on first launch. Follow the prompts to authenticate and pick your preferences.

## Optional: YOLO Mode

By default, Hermes asks permission before running commands it considers dangerous. If you find approval prompts slow you down:

- Run `hermes --yolo` to bypass all approval prompts
- Type `/yolo` inside a running session to toggle it on or off
- Add an alias: `alias hermesd="hermes --yolo"` to your shell config for convenience

Use safe mode when working with credentials or production systems.

## Configuring Tools

Hermes comes with a large set of built-in tools. You can enable or disable them:

```bash
hermes tools
```

Common toolsets:

- **terminal.** Run shell commands (always enabled).
- **file.** Read, write, search, and patch files (always enabled).
- **execute_code.** Run Python scripts with tool access.
- **web.** Web search and page extraction.
- **browser.** Browser automation via Browserbase.
- **delegate_task.** Spawn subagents for parallel work.
- **memory.** Persistent long-term memory.
- **skill\_manage.** Create and manage skills.

Toggle toolsets on or off per platform with `hermes tools`.

## Switching Models

Change your provider or model at any time:

```bash
hermes model
```

Or set it on the command line:

```bash
hermes --model qwen/qwen3.6-plus:free
```

## Useful Commands

| Command | What it does |
|---|---|
| `hermes` | Start an interactive session |
| `hermes chat "your message"` | One-shot chat without entering interactive mode |
| `hermes model` | Change LLM provider and model |
| `hermes tools` | Enable or disable toolsets |
| `hermes setup` | Full configuration wizard |
| `hermes config` | Set individual config values |
| `hermes gateway setup` | Set up messaging platforms (Telegram, Discord, etc.) |
| `hermes doctor` | Run diagnostics to verify the installation |
| `hermes status` | Check your current configuration |
| `hermes version` | Check installed version |
| `/resume` | Pick up a previous session with full context |
| `/yolo` | Toggle approval prompts inside a session |
| `/exit` | End the session |

## Updating

```bash
cd ~/.hermes/hermes-agent
git pull
source venv/bin/activate
pip install -e ".[all]"
```

Or re-run the installer:

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

## Troubleshooting

**`hermes: command not found`:** Reload your shell (`source ~/.zshrc`) or check that `$HOME/.local/bin` is on your PATH.

**API key not set:** Run `hermes model` to configure your provider, or `hermes config set OPENROUTER_API_KEY your_key`.

**Missing config after update:** Run `hermes config check` and `hermes config migrate`.

**General diagnostics:** Run `hermes doctor` to see exactly what is missing and how to fix it.

## Further Reading

- [Hermes Agent Documentation](https://hermes-agent.nousresearch.com)
- [GitHub Repository](https://github.com/NousResearch/hermes-agent)
- [MVP Personal Agentic OS](/docs/playbooks/practitioner/mvp-personal-agentic-os): The full workshop guide
- [Claude Code Setup](/docs/playbooks/practitioner/claude-code-setup): Alternative harness using Anthropic's commercial agent
- [Codex Setup](/docs/playbooks/practitioner/codex-setup): Alternative harness using OpenAI's open source agent
