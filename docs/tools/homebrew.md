---
sidebar_position: 10
title: "Homebrew"
---

# Homebrew

*The package manager for macOS. It is how you install almost every other developer tool on a Mac in one line.*

---

## What it is

Homebrew (`brew`) is an open-source package manager for macOS and Linux. Think of it as an App Store for developer tools. When you run `brew install <something>`, it downloads that tool and puts it on your computer in a standard place, configured to work correctly. When you run `brew upgrade`, it updates everything you installed through it.

## Why the workshops use it

On a Mac, nearly every developer tool you will install (Node.js, Git, GitHub CLI, VS Code, and many more) is available through Homebrew in one command. Without it, each install becomes a separate download, drag, configure, update cycle. With it, one pattern for everything.

## Is this safe?

Yes. Homebrew is open source, widely trusted, and used by millions of developers. The install command we ask you to run is the official script from [brew.sh](https://brew.sh), pulled directly from Homebrew's GitHub repository over HTTPS. You can inspect the script yourself before running it. Homebrew does not collect personal data; it only installs the tools you explicitly request.

## Install

Run this in your terminal (on Mac: open the Terminal app; click the copy icon on the right of the block below, paste, press enter):

```bash title="Terminal"
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

After it finishes, Homebrew will print two extra commands to add `brew` to your shell's PATH. **Run those, then open a new terminal tab (Cmd+T)** so the new tab picks up the updated PATH.

## Verify

```bash title="Terminal"
brew --version
```

If you see a version number, you are good. If you get `command not found`, you skipped the PATH step above.

## Windows and Linux

Homebrew works on Linux, but Linux users typically use their native package manager (`apt`, `dnf`, `pacman`). Windows users should use [WinGet](https://learn.microsoft.com/en-us/windows/package-manager/winget/) instead, which is built into Windows 10 and 11. The workshops will point you to the right tool for your platform.

## Official site

[brew.sh](https://brew.sh)
