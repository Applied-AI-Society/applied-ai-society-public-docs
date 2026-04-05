---
sidebar_label: "Hermes Setup"
title: "Setting Up Hermes Agent"
description: "A detailed guide to installing, configuring, and getting the most out of Hermes Agent as your personal AI agent."
---

# Setting Up Hermes Agent

[Hermes Agent](https://hermes-agent.nousresearch.com) is an open source, CLI-first AI agent by Nous Research. It reads your files, writes your files, runs commands, manages scheduled tasks, and integrates with messaging platforms. It is the engine behind the Personal Agentic OS.

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

- **OpenRouter** — single API key, access to hundreds of models. Good starting point.
- **Anthropic** — direct access to Claude models. Use a Claude API key.
- **OpenAI** — GPT models. Use your OpenAI API key.
- **Local models** — run models on your own hardware via local inference servers. Zero data leaves your machine.

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

- **terminal** — run shell commands (always enabled)
- **file** — read, write, search, and patch files (always enabled)
- **execute_code** — run Python scripts with tool access
- **web** — web search and page extraction
- **browser** — browser automation via Browserbase
- **delegate_task** — spawn subagents for parallel work
- **memory** — persistent long-term memory
- **skill\_manage** — create and manage skills

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

**`hermes: command not found`** — Reload your shell (`source ~/.zshrc`) or check that `$HOME/.local/bin` is on your PATH.

**API key not set** — Run `hermes model` to configure your provider, or `hermes config set OPENROUTER_API_KEY your_key`.

**Missing config after update** — Run `hermes config check` and `hermes config migrate`.

**General diagnostics** — Run `hermes doctor` to see exactly what is missing and how to fix it.

## Further Reading

- [Hermes Agent Documentation](https://hermes-agent.nousresearch.com)
- [GitHub Repository](https://github.com/NousResearch/hermes-agent)
- [MVP Personal Agentic OS](/docs/playbooks/practitioner/mvp-personal-agentic-os) — The full workshop guide
