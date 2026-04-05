---
sidebar_label: "First Git Setup"
title: "First Git Setup"
description: "A step-by-step guide to setting up Git and GitHub authentication so you can version-control your Personal Agentic OS."
---

# First Git Setup

If you have never used Git or GitHub before, this guide will get you set up in about 10 minutes.

## What Is Git?

Git is a tool that runs on your computer and tracks changes to your files over time. Think of it as an infinite undo history that records *what* changed, *when*, and *why*. Every time you save work with Git, you can go back to that exact version later.

## What Is GitHub?

GitHub is a website (github.com) where you store a copy of your Git-tracked files in the cloud. Git is the engine, GitHub is the garage. You need Git. GitHub is strongly recommended but technically optional.

## Step 1: Install Git

**macOS:**

Git often comes pre-installed. Open your terminal and type:

```bash
git --version
```

If it prints a version number, you are good. If not, install it via Homebrew:

```bash
brew install git
```

Or download from [git-scm.com](https://git-scm.com/downloads/mac).

**Windows:**

Download the installer from [git-scm.com](https://git-scm.com/downloads/win). Run it and accept the defaults.

## Step 2: Set Your Identity

Git needs to know who you are so it can label your changes. Run these two commands:

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

Use the same email you plan to use for your GitHub account.

## Step 3: Create a GitHub Account

Go to [https://github.com](https://github.com) and create a free account if you do not have one.

## Step 4: Install the GitHub CLI

The GitHub CLI (`gh`) lets you interact with GitHub from your terminal:

```bash
brew install gh  # macOS (Homebrew)
```

On **Windows**, download the installer from [cli.github.com](https://cli.github.com).

## Step 5: Authenticate

```bash
gh auth login
```

Follow the prompts:

1. Choose **GitHub.com**
2. Choose **HTTPS** as the protocol
3. Choose **Login with a web browser** or **Paste an authentication token**
4. If using the browser flow, you will be redirected to GitHub to authorize. Copy the one-time code and paste it when prompted.

Verify it worked:

```bash
gh auth status
```

You should see a message confirming you are logged in.

## Step 6: Your First Commit

Create a test directory and make your first commit:

```bash
mkdir ~/test-git
cd ~/test-git
git init
echo "# My first repo" > README.md
git add README.md
git commit -m "Initial commit"
```

Then push it to a new GitHub repository:

```bash
gh repo create test-git --public --source=. --remote=upstream --push
```

Done. You just created a repository, committed a file, and pushed it to GitHub.

## Key Concepts

**Repository (repo):** A project folder that Git tracks. Every repo has a hidden `.git/` folder that stores the history.

**Remote:** A copy of your repo stored somewhere else (like GitHub). The default remote is usually called `origin` or `upstream`.

**Branch:** A parallel version of your code. The default branch is `main`. You can create branches for experiments without affecting `main`.

**Commit:** A snapshot of your files at a point in time. Each commit has a message describing what changed.

**Push:** Send your local commits to a remote repository (e.g., GitHub).

**Pull:** Download changes from a remote repository to your local machine.

## Common Commands

| Command | What it does |
|---|---|
| `git init` | Start tracking a folder with Git |
| `git add <file>` | Stage a file for commit |
| `git add .` | Stage all changed files |
| `git commit -m "message"` | Save a snapshot with a message |
| `git status` | Show what has changed |
| `git log` | Show commit history |
| `git push` | Send commits to a remote |
| `git pull` | Download remote changes |
| `git branch` | List branches |
| `git checkout -b <name>` | Create and switch to a new branch |
| `gh auth status` | Check GitHub authentication |
| `gh repo create` | Create a new repo on GitHub |

## Next Steps

Now that Git and GitHub are set up, you are ready to clone your [Personal Agentic OS workspace](/docs/playbooks/practitioner/mvp-personal-agentic-os#step-2c-clone-and-open-your-workspace).
