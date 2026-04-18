---
sidebar_position: 14
title: "VS Code"
---

# Visual Studio Code

*The text editor we recommend for working with your Personal Agentic OS. Free, cross-platform, and pairs beautifully with Claude Code.*

---

## What it is

Visual Studio Code (VS Code) is a free, open-source code editor made by Microsoft. It shows you a file tree on the left, the file you are editing in the middle, and an integrated terminal at the bottom. For working on your Personal Agentic OS, that layout is ideal: you can see the markdown files your agent creates and updates, and talk to your agent in the terminal at the same time.

## Why the workshops use it

When your agent edits a file, you want to see what changed. When your agent creates a new file, you want to find it quickly in the file tree. When you want to run a command, you want the terminal right there. VS Code puts all three in one window.

VS Code is not the only option. Zed, Cursor, and a plain terminal all work. We default to VS Code in the workshops because it is free, cross-platform, and familiar to most people.

## Is this safe?

Yes. VS Code is open source and made by Microsoft. You can install it from the official site and it runs locally on your computer. If you want a fully open-source build with no Microsoft telemetry, use [VSCodium](https://vscodium.com), a community rebuild of the same source.

## Install

Download from [code.visualstudio.com](https://code.visualstudio.com).

Or via package manager:

```bash title="Terminal (Mac)"
brew install --cask visual-studio-code
```

```powershell title="PowerShell (Windows)"
winget install Microsoft.VisualStudioCode
```

## Verify

Open VS Code. Go to File > Open Folder, point it at your workspace folder, and the file tree should appear on the left. Open the integrated terminal (`` Cmd+` `` on Mac or `` Ctrl+` `` on Windows/Linux) and the terminal opens inside VS Code.

## Official site

[code.visualstudio.com](https://code.visualstudio.com)
