---
sidebar_position: 99
title: "Minimum Viable Jarvis"
---

# Minimum Viable Jarvis

*The open-source starter template for your [Personal Agentic OS](/docs/concepts/personal-agentic-os). One click to get your own private copy. Open it, run one command, and your Jarvis walks you through the rest.*

---

## What it is

The Minimum Viable Jarvis (MVJ) template is a structured workspace of plain markdown files that gives you AI-augmented recall, strategic clarity, and compounding context, from the first session forward. Your harness ([Claude Code](/docs/concepts/agentic-harness), Hermes, Codex, or whichever wins this quarter's tradeoff) reads the files in this workspace and operates from them. Every conversation makes the system smarter.

This is the on-ramp. You do not start from a blank folder. You start from a structure that already knows where people files go, where artifacts go, where transcripts go, where your skills live. By the time you finish your first session, you have a profile, a plan for your most important blocker, and a workspace your AI can keep building on.

The repo is public, free, and forkable: [github.com/Applied-AI-Society/minimum-viable-jarvis](https://github.com/Applied-AI-Society/minimum-viable-jarvis).

## What lives inside

```
your-jarvis/
├── CLAUDE.md                    # Points to AGENTS.md
├── AGENTS.md                    # Operating instructions for any AI agent
├── README.md                    # Setup + structure overview
├── user/
│   └── USER.md                  # Your profile (created on first session)
├── people/                      # One file per person in your life
├── artifacts/                   # Strategic documents, plans, decisions
├── meeting-transcripts/         # Processed transcripts from meetings
├── scripts/                     # Workspace automation
└── .agents/
    └── skills/                  # Canonical skills location
```

`AGENTS.md` is the [instruction file](/docs/concepts/instruction-files) the harness reads first. It tells your agent how to route inputs (a brain dump goes here, a transcript goes there, a person mention updates that file). `CLAUDE.md` is a thin pointer to `AGENTS.md` so Claude Code picks it up automatically.

The four data folders (`user/`, `people/`, `artifacts/`, `meeting-transcripts/`) are the substrate your agent reads from and writes to. Plain markdown. On your own disk. Portable across harnesses. *[See: [Skill File First, App Second](/docs/concepts/skill-file-first-app-second) for why this is the architecture.]*

## What ships in the skills folder

The template ships with a working library of [skill files](/docs/concepts/instruction-files) under `.agents/skills/`. Each one is a markdown file the harness can run as a slash command (`/onboard`, `/sync-with-upstream`, etc.) or as a natural-language phrase ("onboard me", "sync with upstream"):

| Skill | What it does |
|---|---|
| `/onboard` | First-session flow. Imports your AI history, builds your profile, interviews you on your most important blocker. |
| `/create-user-profile` | Builds or updates your profile through interview. |
| `/get-unlocked` | Strategic interview when you are stuck. Leads with the Unlock Question. |
| `/audit-my-week` | Pulls last 7 days of activity, reflects against priorities, saves a retrospective. |
| `/process-braindump` | Routes unstructured input (paste, voice transcript, meeting debrief) to the right files. |
| `/decongest` | Extracts a single stuck thought from your head into a clean artifact. The upstream practice that feeds every other skill. |
| `/prep-for-meeting` | Generates a meeting brief from people files, prior transcripts, and active projects. |
| `/process-transcript` | Extracts insights from a meeting transcript and updates the relevant people files. |
| `/sync-granola` | Imports recent meetings from Granola into `meeting-transcripts/`. |
| `/create-skill` | Walks you through creating a new skill of your own. |
| `/sync-with-upstream` | Backs up your work to your private GitHub repo and pulls upstream improvements from the MVJ template. |

The skills folder lives at `.agents/skills/` (vendor-neutral, the path Codex auto-discovers and Hermes recommends). For Claude Code, which auto-discovers `.claude/skills/`, the template ships a symlink so the same skills get picked up. You learn one skills folder. Every harness reads it.

## How to start

1. Install the prerequisites: [Node.js](https://nodejs.org), [Claude Code](https://docs.anthropic.com/en/docs/claude-code), [VS Code](/docs/tools/vscode), and the [GitHub CLI](https://cli.github.com).
2. Sign in to GitHub from the CLI: `gh auth login`.
3. Visit [the MVJ repo](https://github.com/Applied-AI-Society/minimum-viable-jarvis) and click **"Use this template"** → **"Create a new repository"**. Name it, set it private, click Create.
4. Clone your private copy locally. The convention is `~/Documents/github-repos/<repo-name>`.
5. Open it in VS Code: `code <repo-name>`.
6. Open the integrated terminal (`` Cmd+` ``) and run `clauded` (or `claude` if you have not set up the alias yet, see the [Post-Workshop Cheat Sheet](/docs/playbooks/practitioner/post-workshop-cheat-sheet)).
7. The first time you run it, your Jarvis automatically fires the `/onboard` skill. Follow the prompts. Drop your AI history (ChatGPT export, Claude export, LinkedIn) into `user/` if you have any. Answer the interview questions.
8. Turn on hourly auto-sync so your work is backed up to GitHub: `bash scripts/install-sync-cron.sh`.

By the end of step 7, you have a `user/USER.md` profile and an `artifacts/<plan>.md` for your most important blocker. The system knows who you are. Every future session starts there.

## Why the template matters

Three things change when you operate from a structured template instead of a blank folder:

**1. The agent already knows the routing rules.** Drop a brain dump and your agent already knows: people mentions update `people/`, strategic thinking goes to `artifacts/`, meeting recaps go to `meeting-transcripts/`, self-updates go to `user/USER.md`. You do not have to teach it where things live. The template did that already.

**2. The skills you need on day one are already there.** First session you can `/onboard`. End of week you can `/audit-my-week`. Stuck on something you can `/get-unlocked`. New person walks into your life you can ask the agent to update `people/firstname-lastname.md` and the convention is already set.

**3. The template gets better over time and you can pull updates.** As skills improve, as scripts get sharper, as AGENTS.md tightens, you pull those upstream improvements into your private workspace via `/sync-with-upstream` without losing any of your personal files. Your private workspace stays yours; the upstream template stays a moving baseline you can opt into.

## Vendor-neutral by design

The template does not couple you to one harness. The skills folder lives at `.agents/skills/` because that path:

- Is what [Codex auto-discovers by default](https://developers.openai.com/codex/skills)
- Is the example path [Hermes docs recommend for shared skill directories](https://hermes-agent.nousresearch.com/docs/user-guide/features/skills)
- Avoids branding the workspace around any single vendor

For Claude Code, which hardcodes auto-discovery to `.claude/skills/`, the template ships a symlink `.claude/skills → ../.agents/skills` so the same skill files appear automatically. *[See: [Learn The Harness, Not The Wrapper](/docs/concepts/learn-the-harness-not-the-wrapper) for why this matters.]*

You can swap Claude Code for Codex or Hermes on day 30 and your context garden, your skills, your routing rules all come with you. Vendor lock-in at the harness layer is a 2024 pattern. The template was designed past it.

## What the template is not

- **Not a chatbot.** The template is a persistent context substrate that compounds. A chatbot starts every conversation from zero. Your MVJ workspace starts every conversation from everything you have ever told it.
- **Not a SaaS product.** No login, no subscription, no platform. It is markdown files on your disk that an AI reads.
- **Not opinionated about what you build.** The template is shape, not content. What you put inside (your projects, your people, your plans, your skills) is yours.

## Where to go next

- [Post-Workshop Cheat Sheet](/docs/playbooks/practitioner/post-workshop-cheat-sheet): the one-pager you bookmark after running through the template once.
- [How To Ask For Help](/docs/playbooks/practitioner/how-to-ask-help): the protocol for getting unstuck in your trainer's group chat.
- [Personal Agentic OS](/docs/concepts/personal-agentic-os): the architecture MVJ implements.
- [Instruction Files](/docs/concepts/instruction-files): the deeper theory of why CLAUDE.md, AGENTS.md, and skill files are the new unit of programming.
- [Understanding Why The GUI Is Becoming Legacy](/docs/concepts/understanding-why-the-gui-is-becoming-legacy): the larger frame for why the workspace lives in markdown and the terminal.
- [Restart Your Jarvis](/docs/playbooks/practitioner/restart-your-jarvis): when something breaks and you want a clean slate.
