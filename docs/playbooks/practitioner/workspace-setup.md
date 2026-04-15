---
title: "Set Up Your Workspace"
---

# Set Up Your Workspace

*Create your private Jarvis workspace from the Minimum Viable Jarvis template without ever leaving your harness. One prompt, done.*

---

This is the canonical setup flow, referenced by [Claude Code Setup](/docs/playbooks/practitioner/claude-code-setup), [Hermes Setup](/docs/playbooks/practitioner/hermes-setup), [Codex Setup](/docs/playbooks/practitioner/codex-setup), and the [Supersuit Up Workshop](/docs/workshops/supersuit-up). It assumes your harness is installed and you have the GitHub CLI (`gh`) authenticated.

## Why a Template, Not a Clone

We maintain the [Minimum Viable Jarvis starter](https://github.com/Applied-AI-Society/minimum-viable-jarvis) as a **GitHub template repository**. You create your own private copy from it. You never clone our repo directly.

Why it matters:

- **Your repo is private.** On your GitHub account from the first commit.
- **You cannot accidentally push upstream.** You are not a collaborator on the template.
- **Future template updates are easy to pull.** We add a safety-disabled upstream remote so you can pull new skills and improvements without any risk of pushing back.
- **Git history is preserved.** You can merge upstream updates cleanly.

## Prerequisites

- A working harness: [Claude Code](/docs/playbooks/practitioner/claude-code-setup), [Hermes](/docs/playbooks/practitioner/hermes-setup), or [Codex](/docs/playbooks/practitioner/codex-setup)
- [GitHub CLI](https://cli.github.com/) installed (`brew install gh` on Mac, `winget install GitHub.cli` on Windows)
- GitHub CLI authenticated: `gh auth status` should show a logged-in user. If not: `gh auth login` and follow the prompts.

## The Setup Flow (One Prompt)

Launch your harness in **any directory** (it does not matter which, since the first thing it will do is navigate to your projects folder):

- **Claude Code:** `claude`
- **Hermes:** `hermes`
- **Codex:** `codex`

Paste this prompt:

```text
Set up my private Jarvis workspace. Specifically:

1. Ask me what I want to name my workspace. Suggest names like my-jarvis, apex-os, <my-name>-command-center. This becomes both the GitHub repo name and the local folder name.
2. Ensure a sensible projects folder exists on my machine. Mac: ~/Documents/github-repos/. Windows: C:\Users\<me>\Documents\github-repos\. Create it if missing.
3. From inside that projects folder, run: gh repo create <workspace-name> --template Applied-AI-Society/minimum-viable-jarvis --private --clone. This creates a new private repo on my GitHub account from the template and clones it locally in one command.
4. cd into the new cloned folder. Add an upstream remote with a disabled push URL so I can pull future template updates without ever accidentally pushing back:
   - git remote add upstream https://github.com/Applied-AI-Society/minimum-viable-jarvis.git
   - git remote set-url --push upstream DISABLED
5. Report the final folder path to me.
```

Your harness will execute every step via the GitHub CLI and `git`. You stay in the terminal the whole time.

## Then Let Onboard Take Over

**Do not personalize the files yourself.** The template ships with an `onboard` skill that does this for you, and it will evolve over time as we improve the flow.

Exit your current session (`/exit` or Ctrl+D) and launch your harness again **from inside the new workspace folder** (not its parent). Skill auto-discovery and `AGENTS.md` routing only work when the current working directory is the workspace root.

```bash
cd <your-workspace-path>    # e.g., cd ~/Documents/github-repos/my-jarvis
claude                       # or: hermes, codex
```

If you prefer VS Code: use `code <workspace-path>` (pointing at the workspace folder, not its parent), then open the integrated terminal. Verify with `pwd` (Mac/Linux) or `cd` (Windows) before launching the harness. Then type `/` in the harness session — you should see the built-in skills (`/onboard`, `/sync-with-upstream`, etc.). If you don't, you're in the wrong folder.

The repo's `AGENTS.md` sees that `user/USER.md` does not yet exist and auto-runs the `onboard` skill on your first session in that workspace. It will:

- Ask you to import any existing AI conversation history (ChatGPT exports, Claude conversations, docs about yourself)
- Interview you to build `user/USER.md`: who you are, what you value, what you are building, your 90-day vision
- Walk you through a strategic interview on the thing that matters most right now
- Save the output to `artifacts/` so you walk away with a real plan

You did not write any of this logic into the tutorial. It lives in the skill, which ships with the repo and updates with every template release.

## Pulling Future Template Updates

We will keep shipping new skills, improved scripts, and template refinements. To pull them into your workspace at any time, just ask your harness:

```text
Sync with upstream.
```

The repo ships with a `sync-with-upstream` skill that:
- Fetches from the upstream template
- Shows you what is new (especially any new skills) before merging
- Handles conflicts gracefully (your personal files are never touched)
- Pushes the merge to your private `origin`

You cannot accidentally push to the template. The push URL is `DISABLED` and you are not a collaborator.

## Troubleshooting

- **`gh: command not found`** — install and authenticate: `brew install gh && gh auth login` (Mac) or `winget install GitHub.cli && gh auth login` (Windows).
- **`gh auth login` asks a lot of questions** — choose HTTPS, authenticate via browser, the defaults are fine.
- **Your harness cannot run `gh`** — make sure your harness was launched in a shell that has `gh` on its PATH. Close and reopen the terminal after installing `gh` so the new PATH is picked up.
- **`onboard` does not auto-run** — make sure you launched your harness **inside** the workspace folder, not from its parent directory. Harnesses read the nearest `AGENTS.md` / `CLAUDE.md` in the current working directory.
- **Claude Code does not see slash commands like `/onboard` (Windows only)** — the template ships a `.claude/skills` symlink that points at `.agents/skills/`. On Mac/Linux and on modern Git for Windows (with `core.symlinks=true`) this works out of the box. If your clone shows `.claude/skills` as a one-line text file instead of a working link, run the included fallback script from the workspace root:
  ```bash
  powershell -ExecutionPolicy Bypass -File scripts/setup-claude-skills-windows.ps1
  ```
  This creates a directory junction from `.claude/skills` to `.agents/skills/` so Claude Code discovers the skills. It does not require admin rights.
- **Hermes does not auto-register slash commands from your workspace** — that is expected. By default Hermes only auto-registers skills from `~/.hermes/skills/`. See the [Hermes Setup doc](/docs/playbooks/practitioner/hermes-setup) for adding your workspace's `.agents/skills/` to Hermes's `external_dirs` config if you want slash-command discovery. Natural-language triggers (via `AGENTS.md` routing) work regardless.

## What You Now Have

- A private Jarvis workspace on your GitHub account, named whatever you wanted
- A local clone in your projects folder
- An upstream remote wired for pulling future template updates, with the push URL safety-disabled
- A `user/USER.md` populated by `onboard` on your first session in the workspace
- The full set of [built-in skills](https://github.com/Applied-AI-Society/minimum-viable-jarvis/tree/main/.agents/skills) ready to use: `onboard`, `create-user-profile`, `think-through-it`, `process-braindump`, `prep-for-meeting`, `process-transcript`, `create-skill`, `sync-with-upstream`

You are ready to build.

---

## Further Reading

- [Supersuit Up Workshop](/docs/workshops/supersuit-up): The full guided workshop this setup flow lives inside
- [Claude Code Setup](/docs/playbooks/practitioner/claude-code-setup): Install Claude Code as your harness
- [Hermes Setup](/docs/playbooks/practitioner/hermes-setup): Install Hermes as your harness
- [Codex Setup](/docs/playbooks/practitioner/codex-setup): Install Codex as your harness
- [Personal Agentic OS](/docs/concepts/personal-agentic-os): What you are building
- [Learn the Harness, Not the Wrapper](/docs/concepts/learn-the-harness-not-the-wrapper): Why this pattern matters
