---
sidebar_position: 11
title: "Git"
---

# Git

*Version control. Tracks every change to every file in your workspace, forever, for free.*

---

## What it is

Git is a free, open-source version control system. Every time you change a file in a Git-tracked folder, Git can snapshot that change along with a short message about what and why. You can view the history, revert to any previous state, branch into parallel experiments, and merge those back.

It was originally written by Linus Torvalds (the creator of Linux) and is the de facto standard for source control in software development. It runs entirely on your computer. You do not need an internet connection or an account to use it.

## Why the workshops use it

Your Personal Agentic OS is a folder full of files. Git gives that folder an infinite undo history, audit log, and safety net. You can push the state of the repo to GitHub (your cloud backup), pull it down on another machine, and keep working from exactly where you left off. If anything goes sideways, you can `git log` to see what happened, and `git revert` to step back.

Git is also what makes agent-driven edits safe. If your agent writes something that turns out to be wrong, Git lets you see the diff and roll back cleanly.

## Git vs GitHub

- **Git** runs on your computer. It tracks changes.
- **GitHub** is a website where you can upload a copy of your Git-tracked project for backup, collaboration, and discovery.

You need Git. GitHub is strongly recommended but technically optional.

## Is this safe?

Yes. Git is open source, has been around for over 20 years, and is installed on billions of machines.

## Install

```bash title="Terminal (Mac)"
brew install git
```

```powershell title="PowerShell (Windows)"
winget install Git.Git
```

```bash title="Terminal (Linux)"
sudo apt install git    # Debian/Ubuntu
sudo dnf install git    # Fedora
```

On most Macs, Git is already installed. Check first with `git --version` and skip the install if you see a version number.

## Verify

```bash title="Terminal"
git --version
```

## Official site

[git-scm.com](https://git-scm.com)

## Further reading

For a full introduction, [GitHub's own guide](https://docs.github.com/en/get-started/start-your-journey/about-github-and-git) is excellent.
