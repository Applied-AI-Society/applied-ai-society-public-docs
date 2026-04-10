---
sidebar_position: 13
title: "Using the Docs with Your Jarvis"
---

# Using the Docs with Your Jarvis

*How to give your Personal Agentic OS access to the full AAS knowledge base so it can reference concepts, playbooks, and frameworks whenever you need them.*

---

## Why This Matters

The [AAS public docs](https://docs.appliedaisociety.org) contain dozens of concepts, playbooks, and frameworks that represent the collective knowledge of the applied AI community. [Harness engineering](/docs/concepts/harness-engineering). [Context engineering](/docs/concepts/context-engineering). [The Four Levels](/docs/concepts/four-levels-of-applied-ai-for-existing-businesses). [Raise the Floor](/docs/concepts/raise-the-floor). [Crutching](/docs/concepts/crutching). All of it, documented in detail.

Right now, if you want to reference one of these concepts, you open a browser and search the site. That works. But your AI agent cannot do that unless you give it access.

When your [Personal Agentic OS](/docs/concepts/personal-agentic-os) can read the AAS docs directly, everything changes:

- You ask "what level am I operating at?" and your agent references the Four Levels framework with the actual definitions, not a hallucinated version.
- You braindump about a client engagement and your agent recognizes the pattern as [robot mode](/docs/concepts/robot-mode) and suggests the relevant playbook.
- You are writing a proposal and your agent pulls the exact language from the [sovereignty stack](/docs/concepts/the-sovereignty-stack) to articulate why your client should own their infrastructure.
- You are stuck on how to price an engagement and your agent references the [practitioner pricing guide](/docs/playbooks/practitioner/pricing) with the actual frameworks.

Your agent goes from "I know some general things about AI" to "I have the entire AAS knowledge base and can apply it to your specific situation." That is the difference between a chatbot and a [context-engineered](/docs/concepts/context-engineering) system.

---

## Option 1: Clone the Docs Locally (Recommended)

This gives your agent full access to every page as a local file it can read directly.

### Step 1: Clone the Repo

Open your terminal and run:

```bash
git clone https://github.com/Applied-AI-Society/applied-ai-society-public-docs.git
```

This downloads the entire docs site to your machine. The actual content lives in the `docs/` folder as plain markdown files. Your agent can read all of it.

### Step 2: Point Your Jarvis at It

In your Personal Agentic OS workspace, add a reference to the docs location. If you use Claude Code or HERMES, add a line to your `CLAUDE.md` or `AGENTS.md`:

```markdown
## Reference Material

The Applied AI Society public docs are cloned at `[your path]/applied-ai-society-public-docs/docs/`.
When I reference AAS concepts, playbooks, or frameworks, read the actual doc files rather than relying on your training data. The docs are updated frequently and contain the most current versions of all concepts.
```

Replace `[your path]` with wherever you cloned the repo.

### Step 3: Hello World Test

Ask your agent:

> "Read the AAS doc at [your path]/applied-ai-society-public-docs/docs/concepts/four-levels-of-applied-ai-for-existing-businesses.md and give me a summary of the four levels."

If it reads the file and gives you the actual four levels (Automate, Think, Unlock, Build) with the correct descriptions, you are set up. Your agent now has access to the entire AAS knowledge base.

### Step 4: Keep It Updated

The docs are updated regularly. Pull the latest periodically:

```bash
cd applied-ai-society-public-docs
git pull
```

Or set up a cron job to pull daily if you want it hands-free.

---

## Option 2: Use llms.txt (Quick and Lightweight)

If you do not want to clone the full repo, the AAS docs site serves machine-readable files at:

- **Index:** [docs.appliedaisociety.org/llms.txt](https://docs.appliedaisociety.org/llms.txt) — titles and descriptions of every page
- **Full content:** [docs.appliedaisociety.org/llms-full.txt](https://docs.appliedaisociety.org/llms-full.txt) — the complete text of every page concatenated into one file

You can download `llms-full.txt` and drop it into your workspace as a reference file. It is a single text file containing every doc. Your agent can search it for any concept.

```bash
curl -o aas-docs-full.txt https://docs.appliedaisociety.org/llms-full.txt
```

This is simpler but does not give you the folder structure or individual files. For most people, cloning the repo (Option 1) is better.

---

## Building Your Own Wiki

The AAS docs are a shared knowledge base. But you should also be building your own.

Your Personal Agentic OS should have a growing collection of your own frameworks, principles, and field notes. These are the things that are specific to you: your pricing philosophy, your client engagement process, your decision-making criteria, your industry knowledge. Things that the AAS docs do not cover because they are uniquely yours.

When your agent can reference both the AAS docs (shared community knowledge) AND your personal wiki (your edge knowledge), it operates at a level that neither source alone can provide. The AAS docs give it frameworks. Your wiki gives it your specific application of those frameworks.

This is [compounding docs](/docs/concepts/compounding-docs) in practice. Every file you add to either source makes every other file more useful.

### Where to Start

If you do not have a personal wiki yet:

1. **Create an `artifacts/` folder** in your Personal Agentic OS workspace (if you followed the [Supersuit Up workshop](/docs/workshops/supersuit-up), you already have one).
2. **Write one framework.** Pick something you explain to clients or colleagues regularly. How you evaluate opportunities. How you scope a project. How you think about pricing. Write it as a markdown file.
3. **Tell your agent about it.** Add a note in your instruction files that this folder contains your personal frameworks and it should reference them when relevant.
4. **Keep adding.** Every time you explain something well in a conversation, capture it. Every time you solve a problem in a new way, document the approach. Over time, your personal wiki becomes your [context lake](/docs/concepts/context-lake).

---

## Contributing Back

The AAS docs are open source. If you discover something useful, write a field note, or develop a framework that others could benefit from, you can contribute it back.

- **Open a pull request** on [GitHub](https://github.com/Applied-AI-Society/applied-ai-society-public-docs) with your addition
- **Share it in the [Discord](https://discord.gg/K7uWJBMFaN)** and someone can help get it into the docs
- **Bring it to an event** and we will work through it together

The docs are the community's shared brain. Every contribution [raises the floor](/docs/concepts/raise-the-floor) for everyone.

---

## Further Reading

- [Supersuit Up Workshop](/docs/workshops/supersuit-up): The full tutorial for building your Personal Agentic OS. Start here if you have not set one up yet.
- [Compounding Docs](/docs/concepts/compounding-docs): Why every document you add makes every other document more useful.
- [Context Engineering](/docs/concepts/context-engineering): The discipline of curating the right information state for your AI.
- [Permissionless Knowledge](/docs/concepts/permissionless-knowledge): The philosophy behind making the docs free and open.
- [Instruction Files](/docs/concepts/instruction-files): How to configure your agent to use reference material effectively.
