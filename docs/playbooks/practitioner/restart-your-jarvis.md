---
sidebar_position: 17
title: "Restart Your Jarvis"
description: "How to come back to your Personal Agentic OS after closing your file viewer or terminal: resume the previous conversation, or start fresh."
---

# Restart Your Jarvis

*You will close your laptop, walk away, and come back. You will close your file viewer by accident in the middle of a long thinking session. You will start a new day and want to get back to a strategy doc you were drafting last night. This is the path back in.*

This page is harness-agnostic. The exact launch, resume, and exit commands depend on which [agentic harness](/docs/concepts/agentic-harness) you use; each section links to the right setup guide.

---

## The Cockpit, As a Reminder

Your [Personal Agentic OS](/docs/concepts/personal-agentic-os) lives in your **workspace folder** on disk (the one you set up during [Supersuit Up](/docs/workshops/supersuit-up) Step 2C). The cockpit is three things together:

1. A file viewer (e.g. VS Code) open to that folder.
2. A terminal scoped to that folder.
3. Your harness running inside that terminal.

To "restart your Jarvis" is just to put those three things back together.

---

## Path 1: File Viewer First

Best when you want to read files, edit, and chat with your agent side by side.

1. Open VS Code (or whichever file viewer you prefer).
2. **File > Open Recent** and pick your Jarvis workspace (the folder named e.g. `my-jarvis`, **not** the parent `github-repos/`). If it is not in the recent list, use **File > Open Folder** and navigate to it.
3. Open the integrated terminal: `` Ctrl+` `` on Mac, Linux, or Windows. The terminal is automatically scoped to the workspace folder.
4. Launch your harness from that terminal. The exact command depends on which harness you installed; see your harness's setup guide:
   - [Claude Code Setup](/docs/tools/tool-setups/claude-code-setup)
   - [Hermes Setup](/docs/tools/tool-setups/hermes-setup)
   - [Codex Setup](/docs/tools/tool-setups/codex-setup)

:::caution[Open the right folder]
Open the **workspace folder itself** (e.g. `~/Documents/github-repos/my-jarvis/`), not the parent `github-repos/` folder. Skills live at `.agents/skills/` inside the workspace, and your harness only auto-discovers them when the workspace folder is the root your file viewer and terminal see. If you open the parent, your slash commands (`/onboard`, `/get-unlocked`, `/sync-with-upstream`, etc.) will not appear.
:::

## Path 2: Terminal First

Best when you just want to talk to your agent without the file tree open.

1. Open any terminal (Terminal app on Mac, PowerShell or Windows Terminal on Windows).
2. `cd` into your workspace folder, then run your harness's launch command. If you set up a one-shot launcher shortcut for your harness during workshop setup, that one command both navigates and launches.

Either way, you should see your harness's welcome screen with your workspace name in the title.

---

## Now: Resume or Start Fresh?

### Option A: Resume your most recent conversation

Best when you were mid-task and want to pick up exactly where you left off. Every major harness has a resume mechanism (typically a slash command, a CLI flag, or both). See your harness's setup guide for the exact command:

- [Claude Code Setup](/docs/tools/tool-setups/claude-code-setup)
- [Hermes Setup](/docs/tools/tool-setups/hermes-setup)
- [Codex Setup](/docs/tools/tool-setups/codex-setup)

Once resumed, the agent reloads the full conversation history and you can keep going as if you never closed it.

### Option B: Start a fresh session

Best when you are starting something new: a new strategic question, a different relationship, a different artifact. Just start typing. Your agent reads `AGENTS.md` and the relevant files in your workspace and answers from a clean slate.

Your context lives in the files, not in the chat history, so nothing is lost by starting fresh. The conversation is just where the work happens; the [context lake](/docs/concepts/context-lake) is where it persists.

---

## When To Deliberately Start Fresh Instead Of Resuming

- **You are switching topics.** You were drafting a strategy doc; now you want to debrief a meeting. A fresh session keeps each thread clean and easier to find later.
- **Things got tangled.** The agent went down a wrong path, you corrected it three times, and the back-and-forth is bloating the context window. A fresh session with a clean opening prompt is usually faster than untangling.
- **You finished the previous task.** A short session that produced one artifact and ended cleanly is its own bookmark. Start fresh next time and let your agent rediscover the artifact through your file tree.
- **The session feels stuck or confused.** If the agent is repeating itself, missing obvious context, or contradicting earlier turns, that usually means context has degraded. Fresh session, restate the goal, link the relevant files.

---

## Running Multiple Jarvis Sessions At Once In The Same File-Viewer Window

You can keep several harness sessions running on the same workspace, each in its own terminal pane. In VS Code, click the **+** icon in the terminal panel (or **Terminal > Split Terminal**) to open a second terminal alongside the first, launch your harness in it, and you have a second agent running on the same workspace.

Useful when one session is slowly grinding through a long task (a transcript import, a big artifact synthesis) and you want to start something else without interrupting it.

Two cautions when running parallel sessions on the same workspace:

- **Avoid having two sessions edit the same file at the same time.** Whichever writes last wins, and you can lose changes silently.
- **Use the hourly sync as your floor, not your ceiling.** If you make big changes in one session, commit before kicking off destructive work in another.

---

## Ending A Session

Use your harness's exit command (often `/exit`) to quit cleanly. Closing the terminal window also works. Either way your work is already on disk, so nothing is lost.

If you set up the hourly sync from Supersuit Up Step 2D, your work is also pushed to GitHub on the next cron tick, so you can resume on a different machine just by cloning your workspace and launching your harness inside it.

---

## Related

- [Supersuit Up Workshop](/docs/workshops/supersuit-up): The end-to-end first-time setup. This page is the daily-workflow companion.
- [How To Prompt Your Jarvis](/docs/playbooks/practitioner/how-to-prompt-your-jarvis): What to actually say once you are back inside.
- [Priming Your Jarvis](/docs/playbooks/practitioner/priming-your-jarvis): Getting your agent up to speed at the start of a session.
- [Agentic Harness](/docs/concepts/agentic-harness): What a harness is, and why your choice of harness matters less than how you use it.
