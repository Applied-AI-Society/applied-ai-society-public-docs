---
sidebar_position: 2
sidebar_label: "Supersuit Up"
title: "The Supersuit Up Workshop"
description: "Build your Personal Agentic OS (aka Jarvis Yourself). A step-by-step guide to AI-augmented recall, strategic clarity, and compounding context."
---

# The Supersuit Up Workshop

*Build your Personal Agentic OS. Some people call this “Jarvising Yourself” (a nod to Tony Stark's AI). Whatever you call it, by the end of this guide you will have your own AI system that knows who you are, what you are building, and how you think, and gets smarter every day you use it.*

:::tip Think you (or someone you care about) should get Jarvised?
This page is the open-source playbook. If you or someone in your life would benefit from getting Jarvised in person (live workshop) or 1:1 with an AAS practitioner, send them to **[Get Jarvised](/docs/get-jarvised)** for the three paths.
:::

**Time estimate:** 3.5 to 4 hours to complete everything in this guide, even with some prior technical experience. If you are completely new to the terminal and have never installed developer tools before, expect the upper end.

:::tip[Bookmark this page before you start]
You will be flipping between this page, your terminal, your browser, and your editor for the next few hours. Bookmark this workshop in your browser now (Cmd+D on Mac, Ctrl+D on Windows) so you can always jump back. Every link on this site opens in a new tab by default, so you will not lose your place when you click one.
:::

**The value of in-person help:** This guide is designed to be self-paced, but having a trained applied AI engineer walk you through it in person makes a significant difference. Every machine is slightly different. You will hit edge cases (a Windows PowerShell permission error, a Node.js version conflict, a corporate firewall blocking a download) that are too niche to document here but take 30 seconds for an experienced person to debug. An instructor gets you across the finish line instead of stuck at Step 1B for an hour.

The [Applied AI Society](https://appliedaisociety.org) runs Supersuit Up workshops with trained practitioners who have helped hundreds of people through this process. If you want to attend one or request a workshop for your team, school, or community, visit [appliedaisociety.org](https://appliedaisociety.org) or join the [Discord](https://discord.gg/K7uWJBMFaN).

If neither option is available to you right now, this guide plus your AI agent (which can help you debug installation issues) will get you there.

---

## Why This Matters

Most people use AI the way they use Google: type a question, get an answer, move on. That is the casual side. This workshop is about crossing to the pro side. That crossing is [the difference between marginal improvement and orders-of-magnitude improvement](/docs/applied-ai-practice#beyond-the-chat-window). If you get your whole system set up, your life can look completely different. We cannot emphasize this enough.

You have a dozen inboxes. Discord, Telegram, iMessage, email, Slack, LinkedIn, X, Instagram, phone calls, in-person conversations. Right now, you probably have 50 open threads across 12 platforms. No human brain can track all of that. And the honest truth is: you're dropping balls. We all are.

The thing nobody tells you about leveling up as a professional or leader is that the job changes underneath you. At a certain point, the most important work is no longer doing the work. It's defining reality, setting objectives, and evaluating whether the system is working. You shift from working *in* the business to working *on* the business. Meta work becomes the work. This shift from execution to design is what we call [game design](/docs/concepts/game-design): the discipline of defining objectives, rules, guardrails, and scoring for the AI agents in your system.

Here is the uncomfortable truth: **[you are the bottleneck](/docs/concepts/you-are-the-bottleneck).** Not the tools. Not the AI. You. The quality of your strategic thinking, the clarity of your communication, and your willingness to document what you actually know are the limiting factors. That frame is empowering, because if you are the bottleneck, you are also the one who can unblock everything. And AI can help you see your own thinking more clearly, pressure-test your strategy, and refine your plans in ways that used to require an expensive advisor or a very patient co-founder.

Most people running complex operations are walking around with what we call [creative congestion](/docs/concepts/creative-congestion): too many ideas, relationships, and decisions stuck in one head, with no system to offload them. A Personal Agentic OS is the relief valve.

Meta thinking is the new thinking. The highest-leverage skill you can develop right now is the ability to design your business as a system: the objectives, the rules, the guardrails, the scoring. Execution is increasingly commoditized. Defining what should be executed is where your leverage lives.

Here's the key insight behind everything that follows: **the truth in your head is not the truth.** Not operationally. Not for AI. Not for your team. The truth that matters is the truth that exists in documents that AI can read and act on. If it's only in your head, it might as well not exist. It's unsearchable. Your brain has no search bar, no version history, and no way for an AI to read it.

Your [Sovereign Agentic Business OS](/docs/concepts/sovereign-agentic-business-os) is the persistent memory your AI draws on. The Personal Agentic OS is the simplest possible version of that business OS. Not the end state. The starting point.

For the full philosophy behind why documented truth matters, see [Legacy](/docs/concepts/legacy) and [Why It Matters](/docs/concepts/legacy/why-it-matters). This playbook is the practical “how to start” companion to those ideas.

---

## Phase 0: Before You Start (Do This the Night Before)

This phase takes zero technical skill but saves you hours of frustration. Do all of this **before** you sit down to build your system. If you are attending an in-person workshop, do this the night before so you show up ready to build, not sitting around waiting for a 2-hour OS update.

### Update your operating system

Claude Code and other developer tools require a recent OS. If you are behind on updates, this alone can take 1 to 2 hours.

- **Mac:** Apple menu > System Settings > General > Software Update. You need macOS 13.0 (Ventura) or later. macOS 15 (Sequoia) is recommended.
- **Windows:** Settings > Windows Update > Check for updates. You need Windows 10 1809+ or Windows 11.
- **Linux:** Run your package manager's upgrade process (`sudo apt update && sudo apt upgrade` on Ubuntu/Debian).

Plug in your charger and let it finish. Do not start the workshop with a pending OS update.

### Check your hardware

If your computer is more than 5 to 6 years old, the workshop will be slower and more frustrating than it needs to be. AI tools benefit from modern hardware. If you are considering an upgrade, a MacBook Air with 16 GB of RAM (starting around $1,000) is a strong default that will serve you well for years. It is a genuine investment in your future. You need at least 4 GB of RAM and a 64-bit processor (x64 or ARM64).

### Get your accounts ready

You will be signing up for several tools during the workshop. Having these decisions made in advance means fewer interruptions:

- **Pick the email you want to use.** If you are using Gmail, make sure you are logged into the right account in your browser before you start. You do not want to accidentally create accounts under the wrong email.
- **Have a working credit card ready.** Most tools in this workshop have free tiers or free trials, but nearly all of them require a credit card on file, even for the free tier. If you do not have a card ready, you will get stuck at signup screens. (You can look for completely free alternatives, but they take longer to set up and often have a worse experience.)
- **Create a GitHub account.** Go to [github.com](https://github.com) and sign up if you do not already have one. You will need this for version control and backup. Do this now so it is not a speed bump later.

### Set up your environment

- **Good Wi-Fi is essential.** You will be downloading tools, cloning repos, and making API calls. Do this from a home with reliable internet, not a random cafe with spotty Wi-Fi.
- **Close unnecessary apps.** Free up RAM and screen space. You want your terminal, VS Code, and a browser. That is it.
- **Block 3 to 4 hours of uninterrupted time.** This is not something you do in 20-minute increments between meetings. Protect the block.

---

## Phase 1: Install Your Tools

Most of what you need is free or cheap. The entire stack can be running in under 30 minutes if your machine already has developer basics and you completed Phase 0. If this is your first time installing developer tools, budget an extra 15 to 20 minutes for the prerequisites below.

**Before you start:** if you are unfamiliar with any of these tools and want to verify they are safe and legitimate, that is smart. You can paste the link to this tutorial into any AI chat (ChatGPT, Claude, Gemini) and ask: “Is this all safe to install? What does each tool cost? What are the advantages?” It will walk you through every tool listed here.

Here is the cost breakdown upfront:

| Tool | Cost | Notes |
|------|------|-------|
| [Claude Code](https://docs.anthropic.com/en/docs/claude-code) | Included with Claude Max ($100/mo) or Pro ($20/mo with usage limits) | Recommended. All-in-one: AI agent + subscription, no API keys needed. |
| [VS Code](https://code.visualstudio.com) | Free, open source | Made by Microsoft |
| [Node.js](https://nodejs.org) | Free, open source | Required to install Claude Code |
| [Git](https://git-scm.com) | Free, open source | Version control |
| [GitHub](https://github.com) | Free | Paid tiers exist but you do not need them |
| [Superwhisper](https://superwhisper.com) | Free tier available | Voice-to-text, fully local |
| [Wispr Flow](https://wisprflow.ai) | ~$10/mo | Voice-to-text, cloud-based |
| [Granola](https://granola.ai) | Free tier available | Meeting transcription (optional) |

### Step 0: Prerequisites

Before you can install your AI agent, you need a few foundational tools. If you already have these, skip ahead.

:::info[Terminal survival guide: read this once, you will thank yourself later]
The terminal looks scary if you have never used it. It is just a text interface to your computer. A few rules make it feel much less mysterious:

- **When you are asked for a password, your typing is invisible.** No dots, no asterisks, no cursor moving. Type your laptop's admin password (the one you use to log in, **not** your Apple ID) and press Enter. It worked. This confuses almost every first-time user.
- **Silent success is the norm.** Many commands finish with no output. If a command runs and returns to a new prompt with no error, it worked. You do not need to see a "done" message.
- **Some installs take several minutes.** The first `xcode-select --install` on a Mac pulls down roughly 10 GB and can take 10 to 30 minutes. `brew install ...` and `npm install ...` are usually faster, but any of them can sit with no visible progress for a while. Let them run. They are not frozen.
- **The Tab key auto-completes.** Start typing a folder or filename, press Tab, and the terminal fills in the rest. Press Tab twice if there are multiple matches and it shows you the options.
- **Control+C (Mac, Linux, and Windows) cancels the current command.** Use it if something is stuck or you want to stop.
- **Stuck? Copy the error message into your AI chat and ask for help.** This is the most important skill. The terminal spits out an error, you paste it into Claude / ChatGPT / your Jarvis, and it tells you exactly what to do. You do not need to know what the error means to get past it.
:::

:::tip[About the code blocks below]
Every code block on this page is a **terminal command**. Open the terminal (Terminal app on Mac, PowerShell or Command Prompt on Windows), click the copy icon on the top-right of the code block, paste it into your terminal, and press Enter.

Each tool below links to a reference page in our [Tools](/docs/tools) section if you want to know more about what you are installing before you run anything.
:::

**macOS:**

1. **[Homebrew](/docs/tools/homebrew)**: the package manager for Mac. It is how you install almost every other developer tool on a Mac in one line. Open Terminal and run:

   ```bash title="Terminal"
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

   Follow the prompts. After it finishes, it will tell you to run two extra commands to add Homebrew to your PATH. **Run those, then open a new Terminal tab (Cmd+T) or window before continuing.** The new tab picks up the updated PATH so the `brew` command actually works. If `brew --version` fails in your current tab, you skipped this step.

2. **[Node.js](/docs/tools/nodejs)**: the JavaScript runtime that gives you `npm`, which installs many developer tools (including Claude Code if you use the npm install path). Run:

   ```bash title="Terminal"
   brew install node
   ```

3. **[Git](/docs/tools/git)**: version control. Tracks every change to every file in your workspace. Check if you already have it:

   ```bash title="Terminal"
   git --version
   ```

   If you see a version number, skip to the next step. If you get `command not found`:

   ```bash title="Terminal"
   brew install git
   ```

4. **[GitHub CLI](/docs/tools/github-cli)**: the `gh` command. Required. It handles GitHub authentication for your workspace and is what lets the built-in hourly sync script push your work to GitHub without prompting.

   ```bash title="Terminal"
   brew install gh
   gh auth login
   ```

   `gh auth login` is an interactive walkthrough. The defaults are the right answer almost every time. When in doubt, just press **Enter**. The full step-by-step (with the exact prompts, the arrow-key navigation, and the one-time browser code flow) is on the [GitHub CLI tool page](/docs/tools/github-cli#authenticate-first-time-walkthrough).

**Windows:**

:::caution[Run PowerShell as Administrator]
On Windows, several install commands fail if PowerShell is **not** running as Administrator. Right-click PowerShell and choose **Run as Administrator** before continuing. You may also need to allow script execution for the session: `Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned`. If an install fails with an "access denied" or "execution policy" error, this is the fix.
:::

1. **[Node.js](/docs/tools/nodejs)**: the JavaScript runtime that gives you `npm`. Download the LTS installer from [nodejs.org](https://nodejs.org) and run it. Accept the defaults. Or via WinGet:

   ```powershell title="PowerShell"
   winget install OpenJS.NodeJS.LTS
   ```

2. **[Git](/docs/tools/git)**: version control. Download from [git-scm.com/downloads/win](https://git-scm.com/downloads/win) and run the installer. Accept the defaults. Or via WinGet:

   ```powershell title="PowerShell"
   winget install Git.Git
   ```

3. **[GitHub CLI](/docs/tools/github-cli)**: the `gh` command. Required (same reason as on Mac).

   ```powershell title="PowerShell"
   winget install GitHub.cli
   gh auth login
   ```

   `gh auth login` is an interactive walkthrough. The defaults are the right answer almost every time. When in doubt, just press **Enter**. The full step-by-step (with the exact prompts, the arrow-key navigation, and the one-time browser code flow) is on the [GitHub CLI tool page](/docs/tools/github-cli#authenticate-first-time-walkthrough).

**Verify everything works:** Open a fresh terminal and run:

```bash title="Terminal"
node --version
npm --version
git --version
gh --version
```

All four should print version numbers. If any fail, the tool is not installed correctly. Ask your AI (ChatGPT, Claude, Gemini) to help you debug: paste the error message and it will tell you exactly what to do.

### Step 1A: Voice-to-Text

The bottleneck between thought and text must be removed. This is not just about speed (though speaking is 3 to 5x faster than typing). It is about flow states.

When you are typing, part of your brain is thinking about typing. You are compressing what you would otherwise say because the friction of getting it out is too high. You edit yourself mid-thought. You lose threads. You stay in the analytical, word-by-word part of your brain instead of the big-picture, strategic part.

When you speak, you stay in flow. Your brain operates at its best capacity. Ideas connect to other ideas. Two hours fly by and you realize you just produced a massive amount of high-quality thinking. That is the state you want to be in when you are working with your Personal Agentic OS.

Two solid options:

- **[Superwhisper](https://superwhisper.com/)** (macOS only): Fully local, privacy-focused. Your audio never leaves your machine. Great if sovereignty matters to you (and it should).
- **[Wispr Flow](https://wisprflow.ai)** (~$10/mo, macOS + Windows): System-wide dictation that works across any application. Slightly more polished UX. One great feature: it auto-reformats what you say. If you stumble, say “oh wait,” or restart a sentence, it cleans all of that up. It adds line breaks and structure to your raw speech. The output is surprisingly clean.

**Windows and Linux users:** Superwhisper is macOS only right now, so Wispr Flow is your default on Windows. Linux users can look at open-source alternatives like [whisper.cpp](https://github.com/ggerganov/whisper.cpp) wrappers.

Either works on Mac. You hold a key, you talk, you release, and the text appears wherever your cursor is. It works with every application that has a text input: your terminal, a browser, Slack, email, a Google Doc, anything. Wherever your mouse clicks into a text box, that is where the transcription goes. Wispr Flow also keeps a history of everything you have dictated, so you can go back and copy-paste a previous dictation into a different app if needed. Once you install it and start using it, it works everywhere. Even whispering works, which matters if you are in a co-working space or a meeting. The point is that you can speak naturally and get text. For more on the role of voice transcription in legacy, see [Voice Transcriber](/docs/concepts/legacy/voice-transcriber).

### Step 1B: Choose and Install Your Harness

Your terminal-based AI agent (the [agentic harness](/docs/concepts/agentic-harness)) is the engine of your Personal Agentic OS. The harness on its own is not the system. Your Personal Agentic OS is the combination of your file structure, your documented context, and how you use the harness to operate on all of it.

**Why not just use ChatGPT or Gemini in a browser?** Browser-based AI resets its memory every conversation. It cannot read your files, run commands, or operate on your workspace. A terminal-based harness can. It reads your documents, creates files, updates your system, and remembers context across sessions. That is the difference between a chatbot and an operating system.

**We recommend Claude Code as the default.** It is the simplest setup: one subscription, no API keys to manage, strong reasoning, and a good user experience. If cost is a concern or you want to explore alternatives, we have setup guides for other options below.

| Harness | Cost | Best For | Setup Guide |
|---------|------|----------|-------------|
| **Claude Code** (recommended) | Included with Claude Max ($100/mo) or Pro ($20/mo with limits) | Simplest setup, strong reasoning, no API keys needed | [Claude Code Setup](/docs/tools/tool-setups/claude-code-setup) |
| **Hermes** | Free (open source models) | Zero-cost setup, always-on agents, cron jobs | [Hermes Setup](/docs/tools/tool-setups/hermes-setup) |
| **OpenAI Codex** | Free with ChatGPT Plus/Pro | If you already pay for ChatGPT | [Codex Setup](/docs/tools/tool-setups/codex-setup) |

Other harnesses work too: [OpenCode](https://github.com/opencode-ai/opencode), Cursor, and more. The usage patterns in this tutorial (brain dumps, user profiles, skill files, relationship files) work with any harness that can read your workspace. Your files are plain markdown on your computer. You can switch tools at any time and keep everything.

**The rest of this tutorial uses Claude Code as the default.** If you chose Hermes or Codex, follow your setup guide above and rejoin at Phase 2. The workspace setup and daily usage are identical across harnesses.

**Install Claude Code:**

Make sure you completed Step 0 (Node.js must be installed). Then run:

```bash
npm install -g @anthropic-ai/claude-code
```

**First launch:** Type `claude` in your terminal. On first run, it will ask you to log in with your Anthropic account. Follow the prompts to authenticate. Once logged in, you are ready to go.

:::caution[Windows: `claude` not recognized in PowerShell or VS Code terminal]
If `claude --version` errors with something like `The term 'claude' is not recognized`, PowerShell cannot find the executable. The Claude Code native installer drops the binary into a versioned folder that is not on your PATH by default (typically `C:\Users\<you>\AppData\Roaming\Claude\claude-code\<version>\claude.exe`).

Fix it by adding that folder to your User PATH. In an **Administrator PowerShell**:

```powershell title="PowerShell (Admin)"
$claudeDir = (Get-ChildItem "$env:APPDATA\Claude\claude-code" -Directory | Sort-Object Name -Descending | Select-Object -First 1).FullName
[Environment]::SetEnvironmentVariable(
  "Path",
  [Environment]::GetEnvironmentVariable("Path", "User") + ";$claudeDir",
  "User"
)
```

Then **close and reopen VS Code** so new terminals pick up the updated PATH. `claude --version` should now work in any shell.

Heads up: the path includes the version number, so this may need to be re-run after a Claude Code upgrade. If you prefer a stable fix, ask your AI to create a versionless symlink and put *that* on PATH instead.
:::

:::tip[Approval prompts]
By default, Claude Code asks permission before making changes to your files or running commands. This is a good safety net while you are learning. As you get comfortable, you can adjust the permission mode to allow more actions automatically.
:::

---

## Phase 2: Set Up Your Personal Agentic OS Workspace

What you are about to build is a **[Jarvis Workspace](/docs/concepts/jarvis-workspace)**: one window with your file tree on the left, an agentic terminal on the right, and an agent that knows who you are through your `user/USER.md`, `CLAUDE.md` / `AGENTS.md`, and your [PRM](/docs/concepts/prm). That is the cockpit. This phase gets it running on your machine.

### Step 2A: VS Code

Visual Studio Code is your window into the file system. Download it for free from [https://code.visualstudio.com](https://code.visualstudio.com).

**If you have never used a terminal before:** the terminal is the text-based interface to your computer. When you see windows and icons on your screen, that is a graphical layer on top of what is really happening, which is your computer sitting in a folder, ready to execute actions. The terminal gives you direct access to that. You don't need to be fluent. You just need to be willing to open it. You will open the terminal inside VS Code in Step 2C.

### Step 2B: Git and GitHub

If you completed Step 0, Git is already installed. If not, go back and do that now.

**What is the difference between Git and GitHub?** Git is a tool that runs on your computer. It tracks changes to your files over time, like an infinite undo history that also records *what* changed, *when*, and *why*. GitHub is a website (github.com) where you can store a copy of your Git-tracked files in the cloud, so they are backed up and accessible from anywhere. Think of Git as the engine and GitHub as the garage where you park your car. You need Git. GitHub is strongly recommended but technically optional. For a deeper explanation, [GitHub's own guide](https://docs.github.com/en/get-started/start-your-journey/about-github-and-git) is excellent.

**Setting up GitHub:**

1. You should already have a GitHub account from Phase 0 and the GitHub CLI (`gh`) installed and authenticated from Step 0. If you skipped ahead, install it now: `brew install gh` on Mac, `winget install GitHub.cli` on Windows.
2. Verify you are logged in: `gh auth status`. If not, run `gh auth login` and follow the prompts.

### Step 2C: Create and Open Your Workspace

Now for your first rep of telling your AI agent to do something meaningful for you.

**Go to the canonical [Set Up Your Workspace](/docs/tools/tool-setups/workspace-setup) doc and follow the single-prompt flow there.** In a nutshell: you launch `claude` in any directory, paste one prompt, and Claude Code uses the GitHub CLI (`gh`) to create a private Jarvis repo on your GitHub account from the [Minimum Viable Jarvis template](https://github.com/Applied-AI-Society/minimum-viable-jarvis), clone it locally, and wire an upstream remote with a disabled push URL (so you can pull future template updates but never accidentally push back).

Then you launch Claude Code **from inside** the new workspace folder. The repo's built-in `onboard` skill auto-runs on that first session: it imports any existing AI history, interviews you to build `user/USER.md`, and produces a strategic artifact from the thing that matters most to you right now. You walk out of that session with a real personalized workspace, not a generic template.

When that is done, note the folder path. You will need it in a moment. Type `/exit` to quit the session.

Why we keep this in a single canonical doc: the setup flow is identical for every harness (Claude Code, Hermes, Codex) and evolves with the template. One doc, no drift.

**Open the workspace in VS Code:**

:::caution[Open the right folder]
Open **the workspace folder you just created** (e.g., `~/Documents/github-repos/my-jarvis/`). **Do not open the parent `github-repos/` folder.** Your skills live at `.agents/skills/` inside the workspace, and Claude Code only auto-discovers them when the workspace folder is the root that VS Code and the integrated terminal see. If you open the parent, `/onboard`, `/sync-with-upstream`, etc. will not appear as slash commands.
:::

1. Open VS Code.
2. Go to File > Open Folder (or `Ctrl+K Ctrl+O` on Windows, `Cmd+O` on Mac).
3. Navigate **into** your projects folder (e.g., `~/Documents/github-repos/`), then select the specific workspace folder that was just cloned (the one with your chosen name, e.g., `my-jarvis`). Click Open. VS Code's title bar should now show the workspace name, and the left sidebar should list the workspace's top-level folders (`user/`, `people/`, `artifacts/`, etc.) and files (`AGENTS.md`, `CLAUDE.md`, `README.md`).
4. Now open the terminal inside VS Code. It will automatically be scoped to your workspace folder.
   - **Mac:** Terminal > New Terminal from the menu bar, or press `` Ctrl+` ``
   - **Windows:** Terminal > New Terminal from the menu bar, or press `` Ctrl+` ``
5. In the VS Code terminal, type `pwd` (Mac/Linux) or `cd` (Windows) to verify you're inside the workspace folder and not its parent. Then type `claude`. Your agent is now running inside your workspace and can see the starter files and skills.

**Sanity check.** Once `claude` is running, type `/` to open the slash command menu. You should see `/onboard`, `/create-user-profile`, `/sync-with-upstream`, and the other built-in skills. If you only see Claude's bundled commands (like `/help`, `/compact`), you opened the wrong folder. Close Claude Code, close VS Code, and re-open with the specific workspace folder selected.

You are now in the cockpit. The left panel shows your file tree. The bottom panel is your agent in the terminal. The right panel is for viewing whatever file you are working on.

:::tip[Create a `clauded` shortcut]
You will be opening this workspace and launching Claude Code often. Create a shell shortcut so you can do it in one command from anywhere.

**Mac / Linux / WSL (zsh or bash):** add this to your `~/.zshrc` (Mac) or `~/.bashrc` (Linux / WSL):

```bash title="~/.zshrc or ~/.bashrc"
clauded() { cd "$1" && claude; }
```

Reload your shell: `source ~/.zshrc`. Now `clauded ~/Documents/github-repos/my-jarvis` from any terminal navigates to your workspace and starts Claude Code in one shot.

**Windows PowerShell:** add a function to your PowerShell profile. If you do not have one yet, create it with `New-Item -Path $PROFILE -Type File -Force`, then open it (`notepad $PROFILE`) and add:

```powershell title="$PROFILE"
function clauded { param($Path) Set-Location $Path; claude }
```

Reload: `. $PROFILE`. Now `clauded C:\Users\you\github-repos\my-jarvis` navigates and starts Claude Code in one shot.

Replace the path with wherever your workspace lives.
:::

**If you prefer to start from scratch** without cloning, you can tell your agent to create the folders for you instead:

```text
Create a folder for my Personal Agentic OS in a good location on my computer. Ask me what I want to name it and what my name is. Set up subfolders for user, people, artifacts, meeting-transcripts, and skills. Create an AGENTS.md file personalized with my name that instructs you on how to operate as my chief of staff.
```

The starter repo comes with five folders. Together, these form your [context lake](/docs/concepts/context-lake): the persistent memory layer that makes your Personal Agentic OS genuinely useful.

- **user/** for your profile, voice, and anything that helps your Personal Agentic OS understand who you are
- **people/** for relationship files (one per person)
- **artifacts/** for strategic documents, decision records, status updates, and plans
- **meeting-transcripts/** for raw or processed transcripts from conversations
- **skills/** for SOPs that define repeatable tasks for your AI agent

It also includes an `AGENTS.md` file that gives your agent instructions on how to operate within your workspace (this is what makes it understand the structure of your business OS from the first session), and a skill file that will interview you on your first session to create your `user/USER.md` profile.

### Step 2D: Turn On Hourly Sync

Your workspace is **already** a private repo on your GitHub account. Step 2C created it from the template via `gh repo create --template --private --clone`, which means there is nothing to push manually. Just turn on hourly sync so your work stays backed up and any machine you use stays current.

From inside your workspace, run the cron installer that ships in the starter repo.

**Mac / Linux:**

```bash title="Terminal"
bash scripts/install-sync-cron.sh
```

That registers a cron entry that runs `scripts/sync.sh` every hour. The script commits anything new, pulls remote changes, and pushes. It writes to `.jarvis-sync.log`.

**Windows:** `crontab` does not exist on Windows, so use the shipped Task Scheduler installer instead. In a PowerShell terminal inside your workspace:

```powershell title="PowerShell"
powershell -ExecutionPolicy Bypass -File .\scripts\install-sync-task-windows.ps1
```

That registers a Task Scheduler task named `JarvisSync-<your-workspace>` that runs `scripts/sync.sh` (via Git Bash) every hour. Logs go to the same `.jarvis-sync.log` as on Mac and Linux. Requires Git for Windows (which ships `bash.exe` and is already a prerequisite).

Either way, once hourly sync is running:

- Your work is backed up continuously.
- You can jump between machines and keep going (just `git pull` first).
- If you invite a collaborator (`gh repo edit --add-collaborator <username>`), their changes show up in your workspace automatically.

To remove the sync later:
- **Mac / Linux:** `bash scripts/uninstall-sync-cron.sh`
- **Windows:** `powershell -ExecutionPolicy Bypass -File .\scripts\uninstall-sync-task-windows.ps1`

### Step 2E: Meeting Transcription (Optional)

Tools like [Granola](https://granola.ai/) run in the background during meetings and give you a transcript afterward. This becomes raw material for your business OS. Not every meeting needs to be transcribed, but the important ones should be captured so you can extract insights and commitments later.

### Step 2F: (Optional) Importing an Existing Folder of Markdown

Many people come to this workshop already having a folder of markdown they wrote for Claude Cowork, ChatGPT Projects, or a similar setup: dossiers on people, draft strategies, meeting summaries, project specs. That material is gold. Do not recreate it. Bring it in.

You have two options. Decide based on what fits your situation.

**Option 1: Import into your Jarvis workspace.** Copy the files into the right subfolders of your workspace (`people/`, `artifacts/`, `meeting-transcripts/`, whatever fits). From then on the files live inside your workspace, get version-controlled by Git, get synced to GitHub via the hourly cron, and are part of your sovereign context lake.

- **Pros:** Versioned. Portable across machines. Backed up through your GitHub sync. Always available to your Jarvis in every session. Part of your long-term knowledge compounding.
- **Cons:** Your workspace repo gets bulkier. If the folder is huge or contains content you specifically want to keep siloed (deeply personal notes, sensitive client material under a different NDA, etc.), that weight is now inside your Jarvis.

**Option 2: Reference an external folder.** Keep the folder where it is. Tell your Jarvis "there's a folder at `~/Documents/my-old-claude-work/`, read it when relevant." Your agent can read files from anywhere on your computer.

- **Pros:** Nothing to move. Keeps sensitive or bulky content outside your versioned workspace.
- **Cons:** Not versioned by your Jarvis. Not backed up through GitHub sync. If you switch machines, you have to move that folder separately. Over time, drift risk: your Jarvis's understanding of "who Alex is" might live partly in the external folder and partly in `people/alex.md`, and it is easy to lose track of which is source of truth.

**Our recommendation:** **Import.** Unless you have a specific reason not to (size, sensitivity, or a folder actively owned by some other system), import wins. Version control is load-bearing for the whole Jarvis mental model. The point of this system is that everything that matters about you and your operation lives in one place you own, with full history.

**How to actually do it:**

In your Jarvis session, paste something like this (drag the folder from Finder or File Explorer directly into the terminal to auto-append the full path where indicated):

```text title="Paste into Claude Code"
I have a folder of existing markdown at [drag the folder in here so the path auto-appends].
It is full of files I used to use with Claude Cowork / ChatGPT Projects / etc.:
dossiers on people, strategy docs, meeting notes, and so on.

Please: (1) look at the structure and read a sample of the files to understand what
is there. (2) Propose a plan for how to import them into my Jarvis workspace
(which files should go in people/, artifacts/, meeting-transcripts/, skills/, etc.).
(3) Show me the plan before moving anything so I can approve.
```

Your agent will scan the folder, propose a migration plan, and wait for your go-ahead. This is how to onboard years of existing context in under an hour.

:::note[About context overflow, because this is the question everyone asks]
If you end up with hundreds of files in your workspace, does that blow out the context window? No. Your Jarvis does **not** load every file on every session. For a given request (say, "assemble a deal proposal for Alex"), your agent pulls only the files relevant to that task: Alex's dossier from `people/`, the skill file that handles deal proposals from `skills/`, your principles from `user/`, and so on.

Your workspace is *designed* to grow into hundreds or thousands of files over time. That is the point. Each file is a tool your agent reaches for when it is the right one. Every dossier, every strategy doc, every skill file adds capability without adding session-time cost, because they only enter context when they matter. See [Context Engineering](/docs/concepts/context-engineering) and [Context Lake](/docs/concepts/context-lake) for the full picture.
:::

---

## Phase 3: Understand What Makes This Work

### Step 3A: The Chief of Staff Mental Model

Think of your AI agent as a chief of staff. What does a chief of staff need to be genuinely helpful?

**Tools.** When your chief of staff can swipe your credit card, that is like giving your agent a tool. When they can access your calendar, that is a tool. Without tools, your agent is just a conversationalist. With tools, it can actually get things done: send emails, schedule meetings, look things up, run scripts.

**Context about you.** Your goals. Your decision-making style. Your risk tolerance. Your priorities. Your relationships and who matters in your network. The more your agent knows about the most important things in your life and business, the more it can act on your behalf without you having to correct it constantly. Without this context, you are just screaming into the void.

**Standard operating procedures.** Humans have SOPs. Agents have skill files: markdown documents that clearly describe exactly what the agent should do for a given task. Step by step, in plain English, often mixed with specific commands or scripts to run. You can co-write these with the agent (it knows how to talk to itself). Over time, your library of skill files turns your agent from a general-purpose assistant into a specialist that knows your operation.

**A real example:** The [Applied AI Society](https://docs.appliedaisociety.org) is, as of March 2026, operated by one person. One. That one person runs events, writes newsletters, manages partnerships, creates strategic documents, drafts social media posts across platforms, processes meeting transcripts, maintains a CRM of hundreds of relationships, and publishes documentation. The way this is possible is a Personal Agentic OS with deep context.

For example, there is a skill file called `aas-social-post` that drafts social media posts for X and LinkedIn. When it runs, it does not produce generic AI content. It has access to every past post, every brand guideline, every event recap, every strategy document, and every relationship file in the system. So it knows what the organization sounds like, what has already been posted, what is being promoted right now, and who to reference. The output sounds like it was written by the person running the org, because the agent has enough context to actually represent them. That is the difference between a chatbot and a Personal Agentic OS. Context compounds. One person plus a deeply contextualized AI chief of staff can do what used to require a team.

The Personal Agentic OS is about building your [context lake](/docs/concepts/context-lake): the structured collection of markdown files that contains everything your AI needs to know about you, your operation, and your world. Getting the truth about your relationships, your thinking, and your decisions into files that AI can read is the foundation. The tools and skill files come later as you grow the system.

### Step 3B: Your Agent Has Amnesia (The Memento Pattern)

Here is the single most important mental model in this whole workshop. Internalize it and everything else snaps into place.

**Have you seen the movie *Memento*?** The main character wakes up every morning with no memory of who he is or what he was doing. He has to rebuild his context every day using sticky notes he left himself, photos, tattoos on his body. The sticky notes are the only reason he can function at all.

Your AI agent is Leonard from *Memento*. Every new session starts blank. It does not remember who you are. It does not remember your business. It does not remember yesterday's decision. It does not remember where your files live.

**What saves you is that you have left your agent breadcrumbs**, in the form of files it reads every time it wakes up:

- **`AGENTS.md`** (or `CLAUDE.md`) at the root of your workspace. This is the first file every harness reads on every session. It tells your agent what this workspace is, what your folder structure means, and where to find the important files.
- **`user/USER.md`**: who you are, what you are building, how you make decisions. The agent reads this so it can represent you accurately.
- **`people/*.md`**: one file per person who matters. The agent looks these up when a relationship is relevant.
- **`artifacts/*.md`**: your strategic documents, plans, decisions. The agent reads these when the current task is about something you already thought through.
- **`skills/*.md`**: your standard operating procedures. The agent activates these when you ask it to do recurring work.

If you get nothing else from this workshop, get this: **do not assume your agent has common sense about what lives where or what your priorities are.** It does not. Your files are the sticky notes. The quality of those files is the quality of what your agent can do for you.

**Advanced pattern: the data map.** Once you have hundreds of files, you can write a short `data-map.md` that describes the layout (what is in `people/`, what is in `artifacts/`, where the current strategic priorities live) and reference it from `AGENTS.md`. Practitioners with mature workspaces often keep one and force their agent to read it at the start of every session. Not necessary on day one. As your workspace grows, it becomes load-bearing.

---

### Step 3C: A Note on Security

As you connect more tools to your agent (email, calendar, file systems, payment processors), the surface area for things going wrong increases. This is worth being thoughtful about.

The principle is simple: **human in the loop for anything consequential.** Your agent can draft every email, but a human reviews before sending. It can prepare financial reports, but a human approves before money moves. It can suggest meeting responses, but a human confirms before commitments are made.

The risk is not that AI is malicious. The risk is that it is confidently wrong, or that someone finds a way to inject instructions into content your agent processes (a technique called prompt injection). If your agent is reading emails and acting on them without oversight, a carefully crafted email could theoretically trick it into doing something you did not intend.

Start with read-only connections and work your way up. Connect your calendar so the agent can see your schedule before you give it permission to modify it. Let it read your email before you let it send on your behalf. Build trust incrementally, the same way you would with a new hire. The MVP as described in this guide is inherently safe: it is just files on your computer. The security considerations become more important as you expand into connected tools and automated workflows.

---

## Phase 4: Build Your First Personal Agentic OS

This is what a first session looks like. Five exercises, about an hour total. By the end, you will have a working business OS with real data in it, a clear picture of your top strategic blocker, and an actionable plan for getting unblocked.

:::warning[Do not fall in love with your folder structure]
When Notion came out, plenty of smart people spent hours optimizing their databases and sub-pages and templates. The work that never happened was the work that was supposed to get done *with* Notion.

The same trap exists here. Resist the urge to over-architect your folder structure before you have any files in it. The starter template already gives you `user/`, `people/`, `artifacts/`, `meeting-transcripts/`, and `skills/`. That is plenty. Add a file, see what happens, refactor as needed. Your agent is very good at helping you reorganize later. It is not here to hand-decorate a perfect Notion workspace.

**Fall in love with accomplishing your mission faster.** That is the only thing worth optimizing for.
:::

:::tip[Drag files, do not type paths]
You almost never need to type a file path in your Claude Code prompt. Drag files or folders directly from your desktop, Finder, File Explorer, or the VS Code sidebar into the terminal, and Claude Code auto-appends the full path where your cursor is. Works for a single file, multiple files, or a whole folder. Practice this on your first session. Once it is muscle memory, referencing anything on your machine costs zero friction.
:::

### Step 4A: “Who Am I?” (15 minutes)

This is the most important first step. Before your Personal Agentic OS can help you with anything, it needs to know who you are. Think about it like briefing a new chief of staff. If you were hiring the best possible team partner, someone with full access to your life who could execute on everything you are doing, what would you want them to know?

**The fastest and richest way to bootstrap `user/USER.md` is to export your existing AI history** (ChatGPT, Claude, or Gemini) and let your new Jarvis synthesize a filtered profile from it. Years of conversations already contain a detailed picture of you. Don't answer questions from scratch when the truth is already documented.

**Go to the canonical [Export Your AI History](/docs/playbooks/practitioner/export-your-ai-history) doc** for the vendor-confirmed export steps (ChatGPT, Claude, Gemini), the sensitive-info filter, the synthesis prompt, and the two fallback approaches (ask-your-old-AI-directly or start-from-a-live-interview).

The short version of what you are going to do:

1. Export your chat history from your most-used AI (15-30 min wait for the email with your download link)
2. Drop the unzipped export on your Desktop (not inside your Jarvis workspace)
3. In your Jarvis session, tell it to read the export, filter out anything personal or sensitive, and synthesize a professional `user/USER.md`
4. Review the output line by line, remove anything you would not want a collaborator to see, then save it to `user/USER.md`
5. Delete the raw export from your machine

Either way, at the end your Jarvis will have saved `user/USER.md`. This file is the foundation of your Personal Agentic OS. Every future conversation will be informed by it.

If you get stuck on any question during a live interview, just ask your Jarvis: *“Based on what you already know about me, what do you think?”* It will offer its best guess, and you confirm or correct. This often surfaces insights you would not have articulated on your own.

**The moment:** Your Personal Agentic OS now knows who you are. Not the LinkedIn version. The real version. Your goals, your values, your decision-making style, and the thing that is actually blocking you right now. This alone makes every future interaction 10x more useful.

The `user/` folder is not limited to `USER.md`. You can add any file that helps your Personal Agentic OS understand you better. For example, a `user/voice-profile.md` that captures your writing style, your tone, how you handle conflict, how you communicate with different audiences. That way, anything your system writes on your behalf actually sounds like you. The principle is: the whole folder is about the agent getting to know who you are. Customize it to whatever matters for your situation.

### Step 4B: “What's My Plan?” (15 minutes)

Now that your AI knows who you are, tell it about the thing you are most stuck on. The framing that matters here is [**The Unlock Question**](/docs/concepts/the-unlock-question):

> *What is the thing that, if I addressed it, would unlock my next level?*

Your Jarvis is built to run this interview. The starter repo ships a `get-unlocked` skill (auto-discovered as a slash command in Claude Code; see the Codex setup guide for Codex-specific invocation since slash commands work differently there):

```text
/get-unlocked
```

Or in natural language:

```text
Help me think through what I'm most stuck on.
```

This is the payoff. Your AI now has deep context on who you are, what you are working on, and what is in the way. It will interview you about the real blocker, push for specificity, catch you when you are reaching for the *controllable* hard problem instead of the *uncertain* one (the avoidance trap named in the [The Unlock Question](/docs/concepts/the-unlock-question)), and produce an actionable plan saved to `artifacts/`.

If you skipped this during the interview, you can trigger it yourself:

```text
Based on my user profile, help me create a strategic plan for getting past my biggest blocker. Save it as an artifact.
```

**The moment:** You walked in with a vague sense of being stuck. You are walking out with a concrete, written plan. Not generic advice from an AI that does not know you. A plan built from your actual context, your actual constraints, and your actual goals. This is what a Personal Agentic OS does.

**Now make it real.** Open a new Google Doc. Open your strategy markdown file in VS Code, select all the text, and copy it. In Google Docs, right-click and choose **“Paste from Markdown”** (or go to Edit > Paste from Markdown). Your strategy will appear beautifully formatted with headers, bold text, and bullet points. You now have a professional strategic document you can share with a partner, hand off to an employee, send to an investor, or use as a brief for any agent. You created it in 15 minutes. That is the aha moment. This is what AI-augmented strategic thinking actually feels like.

**Then watch what happens next.** You send that strategy doc to your CTO, your partner, your advisor. You get on a call to discuss it. They say “actually, I think we should approach the pricing differently” and “this timeline is unrealistic, here is what is realistic” and “you are missing a section on distribution.” Normal conversation. Normally, the next step would be painful: someone has to go back, write comments, make edits, reconcile versions.

Instead: take the call transcript (from Granola, or a voice memo, or even rough notes). Paste this prompt into your terminal, then **drag the transcript file from Finder or File Explorer into the terminal** to auto-append its full path at the end, then hit enter:

```text
Apply the feedback from the call transcript (path at the end of this message) to my strategy doc. Update the markdown file in artifacts/ directly.

Transcript path:
```

Your AI reads the transcript, understands the feedback, and rewrites the strategy doc incorporating everything. Neither of you had to write a single comment. Neither of you had to sit in a Google Doc making tracked changes. The boring work took zero time.

This is the real shift. Your job as a leader is not editing documents. Your job is to network, build relationships, have strategic conversations, meditate, read something inspiring, have time for divine downloads. The document work happens in the background, powered by the conversations you are already having.

### Step 4C: “Who Do I Know?” (10 minutes)

Create 3 to 5 relationship files for key people in your professional life. Use voice-to-text to dictate into your agent. For each person, capture:

- **Name and role**
- **How you met**
- **What you're working on together** (if anything)
- **Last meaningful interaction**
- **Anything you want to remember** (their kid's name, that project they mentioned, the thing they're excited about)

Tell your agent to create a file for each person in the `people/` directory (already set up in the starter repo from Step 2C). The format doesn't matter much right now. What matters is that these people now exist in your system.

**The moment:** These people now exist in structured form that AI can reference. You will never forget a detail about them again. The next time you have a meeting with one of them, your business OS can brief you on everything you know.

### Step 4D: “What Do I Want Built?” (15 minutes)

This is the exercise that changes how you think about delegation forever.

Pick something you want to see built, created, or executed. A product idea. A marketing campaign. An event. A new workflow. A business initiative. Anything you have been carrying in your head but have not fully specified yet.

Tell your AI:

```text
Interview me about this idea. Ask me hard questions. Push me to be specific. I want to end up with a comprehensive brief that I could hand to someone and they would know exactly what I want.
```

Your AI will ask you things you had not thought to answer. What is the target audience? What does success look like? What are the constraints? What has been tried before? What is the budget? What is the timeline? Who needs to be involved? What are the risks?

The interview forces you to think more deeply about what you already want to build. It surfaces assumptions you did not know you were making. It fills gaps that would have become confusion later. It produces a document that answers the questions your teammate, employee, contractor, or co-founder would have asked you anyway.

At the end, your AI saves the brief as a markdown file in `artifacts/`. Paste it into Google Docs (Edit > Paste from Markdown) and you have a professional spec you can hand off immediately.

Do this for every major thing you want built. One interview, one artifact, one markdown file in your `artifacts/` folder. Over time, this folder becomes a library of everything you are building, have built, and want to build. Your AI can reference all of it. Your team can reference all of it. Nothing stays trapped in your head.

**The moment:** You realize that 15 minutes of being interviewed by your AI produced a clearer, more complete brief than hours of trying to write it yourself from scratch. And the person receiving it has half the questions they would have had otherwise.

### Step 4E: “What Did I Actually Decide?” (10 minutes)

Create a strategic document capturing one major decision you have made recently. Dictate the story:

- **The situation**: What was the context?
- **The options**: What were you choosing between?
- **The discernment process**: How did you think it through? Who did you consult? What factors mattered most?
- **The decision**: What did you decide?
- **The aftermath**: How did it play out? Would you make the same call again?

**The moment:** When your team (or future you) asks “why did we do it this way?”, you point them here. The truth is managed. No more relitigating settled decisions from memory.

### Step 4F: “My System Talks Back” (10 minutes)

Now ask your agent to generate a briefing from everything you've created. Something like:

> “Based on everything in this workspace, give me a briefing. Who am I? What's my strategic plan? Who are my key relationships? What decisions have I made? What should I be paying attention to?”

Watch what comes back. It won't be perfect. But it will be useful. And it will be drawn from *your* truth, not from generic training data.

**The moment:** Imagine this briefing after 30 days of adding to your business OS. After 90 days. After a year. Every conversation, every decision, every relationship, compounding into an increasingly rich and useful context. That's the trajectory you just started.

---

## Phase 5: The Daily Workflow

Once your Personal Agentic OS is set up, the default interaction pattern is simple: you speak, the system listens and routes.

### Step 5A: Open Your Workspace (and How to Pick Up Where You Left Off)

The cockpit you set up in Phase 2 is three things together: a file viewer (e.g. VS Code) open to your workspace folder, a terminal scoped to that folder, and your harness running inside that terminal. Coming back to your Jarvis is just putting those three things back together.

**Full procedure lives at the canonical [Restart Your Jarvis](/docs/playbooks/practitioner/restart-your-jarvis) playbook.** It covers both paths back in (file viewer first or terminal first), how to choose between resuming the previous conversation and starting fresh, running multiple Jarvis sessions in the same window, and how to exit cleanly. Bookmark that page; you will use it daily.

The harness-specific commands (launch, resume, exit) live in your harness's setup guide: [Claude Code](/docs/tools/tool-setups/claude-code-setup), [Hermes](/docs/tools/tool-setups/hermes-setup), or [Codex](/docs/tools/tool-setups/codex-setup).

### Step 5B: Brain Dump

Start talking. Voice-to-text into the terminal. Just dump whatever is on your mind. It might be a meeting debrief, a strategic thought, an update on a relationship, a new idea, a decision you need to make. Do not worry about structure. Just say what is true.

### Step 5C: Let Your Agent Route It

Based on what you said, your agent determines which existing documents to update, whether new documents need to be created, and how to maintain coherence across everything.

### Step 5D: Review the Changes

Look at what your agent did. Approve, correct, or refine. This is you being the “dictator of truth” for your operation. The AI proposes; you approve.

### Step 5E: Repeat

Over time, your agent learns the structure of your business OS and keeps everything consistent. Cross-references stay accurate. Outdated information gets flagged.

The brain dump is the lowest-friction way to keep your business OS current. You don't need to think about where information goes. You just need to say what's true, and the system handles the rest.

### Step 5F: Use the System to Improve the System

The highest-leverage habit you can build is asking your Jarvis to help you improve your Jarvis.

- **Stuck on an install or error?** Paste the error into your agent and ask what to do next. Don't Google. Don't bang your head against the wall.
- **Noticed you do the same task three times this week?** Ask your agent to write a skill file for it. You describe what you did; it writes the SOP in plain English. Next time, you invoke the skill and it runs the work.
- **Feeling like your `user/USER.md` is stale?** Drop a few recent meeting transcripts or a brain dump into your agent and ask it to update your profile with what has changed.
- **Folder structure feels off?** Ask your agent to propose a reorganization. Review the plan. Say yes.

You plus a Jarvis that is continually self-improving is a different creature than you plus a static tool. The loop is: use → notice friction → ask the system to reduce the friction → use again. That is the compounding part nobody talks about when they show you a ChatGPT window.

---

## Phase 6: Common Pitfalls (From Real Sessions)

These are real issues that come up when people set up their Personal Agentic OS for the first time. Knowing about them in advance saves frustration.

**Old computers will struggle.** If your laptop is 8 to 10+ years old, expect installations to take longer, and some tools may have compatibility issues that nobody on the development team is prioritizing. This is just the practical reality of how software companies allocate engineering resources. Everything in this guide will work on Windows, Mac, and Linux, but if your machine is very old, consider upgrading when you can. The MVP does not require a powerful computer, but a reasonably modern one (last 5 years or so) will save you a lot of frustration.

**Remap your Caps Lock key.** Make it a Control key. This is a small thing that makes terminal life dramatically better. On macOS: System Settings, Keyboard, Keyboard Shortcuts, Modifier Keys. You'll thank yourself.

**Approval prompts can feel slow at first.** Claude Code asks permission before making file changes or running commands. This is a safety feature. As you get comfortable, you can adjust permissions. Type `/permissions` in a session to see your options.

**Voice transcription quality can vary.** Apple's built-in dictation can regress across OS updates. If you notice accuracy dropping, switch to Superwhisper or Wispr Flow as your primary and keep the other as backup.

**Don't try to make it perfect on day one.** The MVP is a scaffold. It will be messy at first. That's fine. The structure will emerge as you use it. Resist the urge to spend three hours designing the perfect folder hierarchy before you've written a single document. Start writing. Reorganize later.

---

## Phase 7: Growing From MVP to Full Business OS

The MVP is the seed. Here's what the growth trajectory looks like.

### Step 7A: Week 1

- Add 5 more relationship files. Start with the people you interact with most.
- Write your `PRINCIPLES.md`: the core decision rules you operate by. What do you value? What are your non-negotiables? What heuristics guide your judgment?
- Process one real conversation (a meeting, a call, a brainstorm) through the system. See what it's like to capture and route real information.

### Step 7B: Month 1

- Regular brain dumps are becoming habit. You speak into the system at least a few times a week.
- Your artifact library is growing: status updates, decision records, relationship files, strategic notes.
- You're starting to see the compounding effect. Your [context lake](/docs/concepts/context-lake) is deepening. Your agent's briefings are getting noticeably more useful because there's more context to draw from.

### Step 7C: Month 3

- The system knows enough about you, your operation, and your relationships to generate genuinely useful briefings and catch things you'd miss.
- You're spending less time trying to remember things and more time making decisions. The recall problem is largely solved.
- You start to feel the shift: the system is not just a tool you use. It's a thinking partner that operates from your context.

### Step 7D: The Organizational Expansion

When you're ready to bring other people in, the business OS scales with access controls:

- **Each person gets a role-scoped view.** Not everyone needs to see everything. The intern doesn't need board-level strategy docs. The sales lead doesn't need HR records.
- **AI agents that act on behalf of team members** only have access to documents relevant to their role. This is where the [Sovereign Agentic Business OS principles](/docs/concepts/sovereign-agentic-business-os/principles) around identity and access management become critical.
- **The vision:** a living “company bible” (see [Start Your Company Bible](/docs/concepts/legacy/start-your-company-bible)) that everyone, human and AI, operates from. Continuously updated. Version-controlled. The single source of truth for how your organization works.

---

## Phase 8: The Meta Work Shift

Here's the part that feels counterintuitive at first: as your business OS matures, your day starts to look less and less like “work” in the traditional sense.

Low-level execution is increasingly handled by AI. The human's job becomes meta work: defining reality, setting objectives, curating truth, evaluating whether the system is producing good outcomes. Think of it like game design. You are designing the game (the objectives, the rules, the guardrails) and the AI agents are the players executing within those constraints.

A productive day might involve very little typing and a lot of thinking, conversing, and refining the system. You might spend an hour voice-dumping insights from three conversations, review the updated documents, approve the changes, and then ask your business OS to generate a strategic brief. That's not laziness. That is the highest-leverage use of human attention in a world where execution costs are collapsing.

The question is no longer “how do I get all this work done?” It's “am I defining reality accurately enough that the system can do good work on my behalf?”

That's the shift. And it starts with the Supersuit Up workshop.

---

## Further Reading

- [Sovereign Agentic Business OS](/docs/concepts/sovereign-agentic-business-os): The full philosophy behind building your own AI operations hub
- [Legacy](/docs/concepts/legacy): The framework for documenting and organizing the truth your business OS draws on
- [Start Your Wiki](/docs/playbooks/practitioner/start-your-wiki): The tutorial for building the personal or organizational wiki that sits at the heart of your Personal Agentic OS
- [Start Your Company Bible](/docs/concepts/legacy/start-your-company-bible): Scaling legacy across an organization
- [Make Your Company Refactorable](/docs/concepts/legacy/make-your-company-refactorable): Making your operation grep-able and editable by AI agents
- [Voice Transcriber](/docs/concepts/legacy/voice-transcriber): Deeper dive on the voice-to-text tools that power the brain dump workflow
- [The Question Bank](/docs/concepts/sovereign-agentic-business-os/question-bank): High-leverage questions to program into your business OS
- [Workshop Instructor Playbook](/docs/playbooks/practitioner/workshop-instructor-playbook): If you want to teach others how to set up their Personal Agentic OS
- [Agentic Harness](/docs/concepts/agentic-harness): What a harness is, the major harnesses in 2026, and why the harness matters more than the model
- [Harness Engineering](/docs/concepts/harness-engineering): Why the code wrapped around an AI model matters as much as the model itself, and why harnesses will soon improve themselves
- [Personal Agentic OS](/docs/concepts/personal-agentic-os): The concept behind the system you are building
- [Creative Congestion](/docs/concepts/creative-congestion): The condition a Personal Agentic OS exists to relieve
- [You Are the Bottleneck](/docs/concepts/you-are-the-bottleneck): Why no hire, tool, or multiplier can fix you if you are the bottleneck, and what to do instead

---

*The best time to start your business OS was a year ago. The second best time is today. Open a terminal. Start talking. The system will grow from there.*
