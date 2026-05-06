---
sidebar_position: 8
title: Getting Things Done
---

# Getting Things Done

How to use IDE as a command center for chapter operations.

---

## The Idea

Running a chapter involves a lot of moving parts: documentation, outreach, event logistics, content creation, coordination. The typical approach is fragmented. Slack for comms. Notion for docs. Email for outreach. Google Drive for files. Each tool has its own context, and you're constantly context-switching.

There's a better way.

**Use IDE as a command center.** Put everything in one workspace. Let an AI agent with full context help you move fast.

---

## Why IDE

IDE is an AI-powered code editor, but it's not just for code. It's a workspace where:

- **All your context lives in one place:** Docs, playbooks, meeting notes, artifacts, work logs. The agent sees everything.
- **You can issue commands:** Custom commands like `/create-artifact` or `/process-transcript` automate repetitive work.
- **MCP servers extend capabilities:** Connect to external tools and APIs. Browse the web. Interact with services.
- **You move faster:** Instead of switching between 5 apps, you work in one environment with an agent that knows your full context.

---

## The Core Principle: Accessible Context

The single most important idea behind this approach is **accessible context**. If the agent can't see it, it can't help you with it.

Most people's work lives are scattered across a dozen tools. Notes in Notion. Strategy in Google Docs. Contacts in a spreadsheet. Meeting notes in an email thread. Tasks in Asana. Each tool is a silo. None of them talk to each other. And no agent has the full picture.

When you consolidate everything into a workspace that an AI agent can read, something changes. The agent stops being a generic chatbot and starts being a collaborator that actually knows your situation.

Your workspace becomes the single source of truth for your chapter. Not a random Google Doc that three people have different versions of. Not a Slack thread that gets buried. Markdown files in a structured repo that the agent can read, search, and update.

### What belongs in the workspace

Put anything the agent might need context on:

- **Playbooks and docs:** How you run events, find venues, do outreach
- **Meeting notes:** Transcripts and summaries from calls
- **People files:** Who you're working with, what they care about, last interaction
- **Work logs:** What you did today, what's next
- **Artifacts:** Strategy docs, memos, retrospectives
- **Tasks:** What needs to happen and who's on it

### What changes when context is accessible

Without accessible context, every interaction with an AI starts from zero. You explain your situation, your goals, your constraints. Every time.

With accessible context, you say things like:

- *“Draft an outreach email to the venue we talked about in last week's meeting”* (and the agent already knows the venue, the conversation, and your chapter's pitch).
- *“Process this transcript and update the relevant people files”* (and the agent knows your CRM structure and where to put things).
- *“What did we decide about the February event format?”* (and the agent can search your meeting notes and give you the answer).

The agent becomes useful not because it's smarter, but because it has the context to actually help.

### How to set this up

1. **Create a workspace folder:** Make a single folder (e.g., `applied-ai-society-workspace`) that will hold everything.
2. **Clone all the repos into it:** Clone `applied-ai-society`, your chapter's private content repo, and `applied-ai-live-slides` side by side inside that folder. Each repo has its own `.git` and is version-controlled independently. That's intentional. Public docs, private content, and event slides have different audiences and different access controls. But they all live in one folder so the agent can see across them.
3. **Open the workspace folder in IDE:** Open the parent folder, not an individual repo. The agent needs to see the full tree across all repos to be effective.
3. **Add a `CLAUDE.md`:** This is the agent's instruction manual. It tells the agent what the workspace contains, where things live, and how to behave. Think of it as onboarding docs for your AI collaborator.
4. **Structure your files:** Use folders and naming conventions that make things findable. The agent can search, but good structure means better results.
5. **Keep it updated:** A workspace with stale information is worse than no workspace. Process your transcripts. Update your logs. The discipline of maintaining the workspace is what makes it powerful.

### The `CLAUDE.md` file

This is worth calling out specifically. The `CLAUDE.md` file at the root of your workspace is the first thing the agent reads. It should contain:

- A map of the repo structure
- Key file paths and what they contain
- Brand rules or style guidelines
- Available custom commands
- Any constraints or preferences

Think of it as the difference between hiring someone and just pointing them at a desk versus hiring someone, giving them an onboarding doc, and walking them through how the team works. Same person, wildly different effectiveness.

### Real-World Proof

At Applied AI Live #1, the guest speaker confirmed late morning that he'd be arriving later than planned. Because everything lived in one AI-readable workspace, the organizer was able to edit the slides, the run-of-show, and organizational artifacts all at once. One environment, full context. No app-switching, no re-explaining context to the AI. That's the accessible context advantage in practice. When your workspace is the single source of truth, last-minute changes become manageable instead of chaotic.

---

## What This Looks Like in Practice

Here are examples of workflows we run through IDE:

- Creating and updating playbooks
- Processing meeting transcripts into structured notes
- Generating problem briefs from pre-calls
- Drafting outreach messages
- Updating work logs
- Coordinating across internal and public documentation

---

## Getting Started

If you're a chapter leader and want to try this approach:

1. Clone the Applied AI Society workspace
2. Open it in IDE
3. Explore the existing commands in `.cursor/commands/`
4. Start issuing commands and see what happens
