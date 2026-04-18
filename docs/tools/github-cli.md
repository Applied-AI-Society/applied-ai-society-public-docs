---
sidebar_position: 12
title: "GitHub CLI"
---

# GitHub CLI

*The `gh` command. Lets your terminal (and your agent) authenticate with GitHub and run GitHub operations without leaving the terminal.*

---

## What it is

GitHub CLI is the official command-line client for GitHub, made by GitHub. You authenticate once (`gh auth login`) and from then on any GitHub operation (create a repo, clone a repo, open a pull request, invite a collaborator, check CI status) can happen directly from your terminal.

## Why the workshops use it

The Minimum Viable Jarvis template creates your workspace by asking your agent to run `gh repo create --template --private --clone`. That single command creates a private repo on your GitHub account from our template, clones it locally, and wires up the remote. Without `gh`, this becomes a 15-step web UI flow.

`gh` is also what lets the starter repo's hourly sync script push your workspace changes to GitHub without ever prompting you for credentials.

## Is this safe?

Yes. GitHub CLI is open source and maintained by GitHub. The authentication flow (`gh auth login`) opens GitHub's official website in your browser to confirm access and stores the resulting token locally on your computer. You can revoke the token any time from your GitHub account settings.

## Install

```bash title="Terminal (Mac)"
brew install gh
```

```powershell title="PowerShell (Windows)"
winget install GitHub.cli
```

For Linux, see the [official install instructions](https://github.com/cli/cli/blob/trunk/docs/install_linux.md) for your distribution.

## Authenticate (first-time walkthrough)

Once `gh` is installed, authenticate once:

```bash title="Terminal"
gh auth login
```

`gh` will walk you through a series of questions in the terminal. The defaults are the right answer for almost everyone. Here is exactly what you will see and what to do at each step:

1. **"Where do you use GitHub?"** — Use the up/down arrow keys to move, press **Enter** to select. Select **GitHub.com**.
2. **"What is your preferred protocol for Git operations on this host?"** (HTTPS or SSH) — Just press **Enter** to accept the default (**HTTPS**).
3. **"Authenticate Git with your GitHub credentials?"** — Press **Enter** to accept the default (**Yes**).
4. **"How would you like to authenticate GitHub CLI?"** — Use arrow keys to select **Login with a web browser**, then press **Enter**.
5. **"First copy your one-time code:"** — `gh` prints a one-time code that looks like `ABCD-1234` (eight characters and a dash). **Drag your mouse across the code to highlight it, then copy** (Cmd+C on Mac, Ctrl+C on Windows/Linux). Then press **Enter** to open GitHub in your browser.
6. In the browser, on the **Device Activation** screen, click **Continue**.
7. Paste the code (**Cmd+V** on Mac, **Ctrl+V** on Windows/Linux) into the field and click **Continue**.
8. Click **Authorize GitHub**.
9. You should see **"Congratulations, you're all set!"** in the browser. Return to the terminal. `gh` will report that it logged in as your username.

You only need to do this once per machine.

## Verify

```bash title="Terminal"
gh auth status
```

## Official site

[cli.github.com](https://cli.github.com)
