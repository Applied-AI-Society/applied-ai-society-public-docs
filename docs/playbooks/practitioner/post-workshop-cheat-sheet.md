---
sidebar_position: 5
title: "Post-Workshop Cheat Sheet"
---

# Post-Workshop Cheat Sheet

*Bookmark this. The one-pager you come back to between workshops while the muscle memory builds.*

---

## The startup sequence

Every session, in order:

1. **Open Wispr Flow** (only if you want voice dictation). It only works while running. Confirm it is active in the menu bar.
2. **Open Visual Studio Code.** Cmd+Space, type `Visual Studio Code`, press Enter. Spotlight Search opens it.
3. **Close the side chat panel** if VS Code's built-in AI chat is showing. You do not want it competing with your harness.
4. **Open a terminal in VS Code.** `Terminal > New Terminal`, or `` Cmd+` `` to toggle.
5. **Start your harness.** Type `clauded` and press Enter. (If `clauded` is not recognized, see the alias setup below.)
6. **Speak your prompt.** With Wispr Flow active, your speech transcribes into the terminal.

If you are typing instead of speaking, skip step 1 and just type your prompt in step 6.

## Key shortcuts

| What you want | How |
|---|---|
| Open the markdown preview side-by-side with the source | `Cmd+Shift+V` |
| Open a file from the terminal output in the IDE | Cmd+click the file path |
| Open Spotlight Search (Mac) | `Cmd+Space` |
| Toggle the integrated terminal | `` Cmd+` `` |
| Open another parallel Jarvis session | Click the `+` icon at the top of the terminal panel |
| Name a terminal by task | Right-click the terminal label, pick **Rename**. Type `strategy-doc`, `research-pass`, `daily-recap`, etc. |
| Quick-open any file by name | `Cmd+P` |
| Open the VS Code command palette | `Cmd+Shift+P` |
| Stop a running Claude / Codex session | `Ctrl+C` (Mac and Windows both) |

## If `clauded` is not set up yet

`clauded` is a shell alias that runs Claude Code with permission prompts off. Set it up once:

1. Open `~/.zshrc` (e.g., `code ~/.zshrc` from the terminal).
2. Add this line:
   ```bash
   alias clauded="claude --dangerously-skip-permissions"
   ```
3. Save. Restart your terminal (or run `source ~/.zshrc`).
4. Type `clauded` to verify.

If you are using OpenAI's harness instead of Anthropic's, the equivalent command is `codex`. Same idea: type the harness name, the harness opens in the terminal, you operate from there.

## Where your Jarvis lives

The repository (the folder full of folders you are operating on) is stored locally at:

```
~/Documents/github-repos/<your-repo-name>
```

Everything you and your Jarvis create or edit gets recorded in that local folder. **It is not on GitHub until you push it.**

To back up to GitHub AND pull in template updates:

```
/sync-with-upstream
```

`/sync-with-upstream` is a [skill file](/docs/concepts/instruction-files) shipped in the [Minimum Viable Jarvis](/docs/concepts/minimum-viable-jarvis) template. Type it as a slash command inside your Claude Code session (or say "sync with upstream" in plain language). It pushes your local commits to your private GitHub remote and pulls any new improvements from the MVJ upstream template without touching your personal files.

## Daily rhythm (suggested)

- **Morning:** open Wispr Flow + VS Code + Claude Code. Voice-dump whatever is on your mind from yesterday and overnight.
- **During the day:** spawn a new terminal (`+`) for each major project. Rename the tab. Keep them separate so the Jarvises do not step on each other.
- **End of day:** run `/sync-with-upstream` to back up your day's work and pull any template updates.

## When you get stuck

Post in the group chat your workshop trainer set up. Read [How To Ask For Help](how-to-ask-help.md) before posting. Short version: include a screen recording or screenshot, your full prompt, and what you expected vs. what happened.

## Quick links

- [Get Jarvised](/docs/get-jarvised): the canonical invitation page
- [Personal Agentic OS](/docs/concepts/personal-agentic-os): what your Jarvis actually is
- [Understanding Why The GUI Is Becoming Legacy](/docs/concepts/understanding-why-the-gui-is-becoming-legacy): why this all moved into the terminal in the first place
- [VS Code](/docs/tools/vscode): full editor reference
- [How To Ask For Help](how-to-ask-help.md): the protocol when you get stuck
- [Restart Your Jarvis](restart-your-jarvis.md): when something breaks and you need a clean slate
