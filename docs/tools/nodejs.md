---
sidebar_position: 13
title: "Node.js"
---

# Node.js

*The JavaScript runtime. Required by many agentic tools, and installing it also gives you `npm` for one-line installs of hundreds of developer tools.*

---

## What it is

Node.js is an open-source JavaScript runtime built on Chrome's V8 engine. It lets you run JavaScript code outside the browser (on your computer, on a server, or inside a command-line tool). Installing Node.js also installs `npm`, the Node Package Manager, which is how you install any JavaScript-based tool globally in one command.

## Why the workshops use it

Many modern developer tools (including the npm-based install path for Claude Code) are distributed through npm. Installing Node.js once gives you `npm`, and `npm` gives you one-line installs for hundreds of tools.

If you use the Claude Code native installer (the Mac/Linux `install.sh` or the Windows PowerShell script), you do not strictly need Node.js for Claude Code itself. You will likely want `npm` anyway for other tools in the applied-AI ecosystem.

## Is this safe?

Yes. Node.js is governed by the OpenJS Foundation, used by essentially every major tech company, and one of the most heavily audited open-source projects in existence. The installers distributed from nodejs.org are official binaries.

## Install

```bash title="Terminal (Mac)"
brew install node
```

```powershell title="PowerShell (Windows)"
winget install OpenJS.NodeJS.LTS
```

Or download the LTS installer directly from [nodejs.org](https://nodejs.org) for any platform and run it.

## Verify

```bash title="Terminal"
node --version
npm --version
```

Both should print version numbers.

## Which version

Use **LTS** (Long-Term Support). LTS is the right choice for almost everyone. Only pick the "Current" version if a specific tool you depend on needs a newer version.

## Official site

[nodejs.org](https://nodejs.org)
