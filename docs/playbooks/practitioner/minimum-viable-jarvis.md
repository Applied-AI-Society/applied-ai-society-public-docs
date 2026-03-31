---
sidebar_label: "Minimum Viable Jarvis"
title: "The Minimum Viable Jarvis: Setting Up Your AI Business OS"
description: "A step-by-step guide to building your personal AI-operated business OS for legacy, strategic clarity, and compounding context."
---

# The Minimum Viable Jarvis

*A step-by-step guide to setting up the simplest system that gives you AI-augmented recall, strategic clarity, and compounding context.*

---

## Why This Matters

You have a dozen inboxes. Discord, Telegram, iMessage, email, Slack, LinkedIn, X, Instagram, phone calls, in-person conversations. Right now, you probably have 50 open threads across 12 platforms. No human brain can track all of that. And the honest truth is: you're dropping balls. We all are.

The thing nobody tells you about leveling up as a professional or leader is that the job changes underneath you. At a certain point, the most important work is no longer doing the work. It's defining reality, setting objectives, and evaluating whether the system is working. You shift from working *in* the business to working *on* the business. Meta work becomes the work. This shift from execution to design is what we call [game design](/docs/concepts/game-design): the discipline of defining objectives, rules, guardrails, and scoring for the AI agents in your system.

Here is the uncomfortable truth: **you are the bottleneck.** Not the tools. Not the AI. You. The quality of your strategic thinking, the clarity of your communication, and your willingness to document what you actually know are the limiting factors. That is not a criticism. It is empowering. Because if you are the bottleneck, you are also the one who can unblock everything. And AI can help you see your own thinking more clearly, pressure-test your strategy, and refine your plans in ways that used to require an expensive advisor or a very patient co-founder.

Meta thinking is the new thinking. The highest-leverage skill you can develop right now is not execution. It is the ability to design your business as a system: the objectives, the rules, the guardrails, the scoring. Execution is increasingly commoditized. Your ability to define what should be executed is not.

Here's the key insight behind everything that follows: **the truth in your head is not the truth.** Not operationally. Not for AI. Not for your team. The truth that matters is the truth that exists in documents that AI can read and act on. If it's only in your head, it might as well not exist. It's ungreppable. It's unsearchable. It's locked in wet storage with a terrible API.

Your [Sovereign Agentic Business OS](/docs/sovereign-agentic-business-os) is the persistent memory your AI draws on. The Minimum Viable Jarvis (MVJ) is the simplest possible version of that business OS. Not the end state. The starting point.

For the full philosophy behind why documented truth matters, see [Legacy](/docs/legacy) and [Why It Matters](/docs/legacy/why-it-matters). This playbook is the practical "how to start" companion to those ideas.

---

## Phase 1: Install Your Tools

You need five things. Most of them are free or cheap. The entire stack can be running in under 30 minutes.

### Step 1A: Voice-to-Text

The bottleneck between thought and text must be removed. This is not just about speed (though speaking is 3 to 5x faster than typing). It is about flow states.

When you are typing, part of your brain is thinking about typing. You are compressing what you would otherwise say because the friction of getting it out is too high. You edit yourself mid-thought. You lose threads. You stay in the analytical, word-by-word part of your brain instead of the big-picture, strategic part.

When you speak, you stay in flow. Your brain operates at its best capacity. Ideas connect to other ideas. Two hours fly by and you realize you just produced a massive amount of high-quality thinking. That is the state you want to be in when you are working with your Jarvis.

Two solid options:

- **[Superwhisper](https://superwhisper.com/)**: Fully local, privacy-focused. Your audio never leaves your machine. Great if sovereignty matters to you (and it should).
- **[Wispr Flow](https://wispr.flow)** (~$10/mo): System-wide dictation that works across any application. Slightly more polished UX. One great feature: it auto-reformats what you say. If you stumble, say "oh wait," or restart a sentence, it cleans all of that up. It adds line breaks and structure to your raw speech. The output is surprisingly clean.

Either works. You hold a key, you talk, you release, and the text appears wherever your cursor is. Even whispering works, which matters if you are in a co-working space or a meeting. The point is that you can speak naturally and get text. For more on the role of voice transcription in legacy, see [Voice Transcriber](/docs/legacy/voice-transcriber).

### Step 1B: Claude Code

Your terminal-based AI interface. This is the engine of the Jarvis. Important distinction: Claude Code on its own is not the Jarvis. The Jarvis is the combination of your file structure, your documented context, and how you use Claude Code to operate on all of it. Claude Code is simply the best engine for a Jarvis right now, but your files are yours. You could switch to a different AI tool tomorrow and keep everything.

#### Step 1B-i: Prerequisites (Node.js and npm)

If you have never installed anything from the command line before, you will need to install Node.js first. Node.js comes bundled with npm (Node Package Manager), which is the tool you use to install Claude Code.

**If you try to run the install command below and see `npm: command not found`, this is why.** You need Node.js installed first.

**macOS:**

The easiest option is to download the installer from [https://nodejs.org](https://nodejs.org). Run the `.pkg` file and follow the prompts. Done.

Alternatively, if you prefer using the terminal, you can install via Homebrew. If you do not have Homebrew yet, install it first by opening Terminal (search "Terminal" in Spotlight or find it in Applications > Utilities) and pasting this command:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Follow the prompts. Once Homebrew is installed, install Node.js:

```bash
brew install node
```

**Windows:**

First, find your terminal. Search "Command Prompt" or "PowerShell" in the Start menu. Both come pre-installed on every Windows 10 and 11 machine. On Windows 11, you may also have "Windows Terminal" which is a nicer wrapper around both. Any of these will work.

Then install Node.js:

1. Go to [https://nodejs.org](https://nodejs.org)
2. Download the LTS (Long Term Support) version
3. Run the installer. Accept the defaults. It will install both Node.js and npm.
4. **Important:** Close and reopen your terminal after installing. The terminal needs to restart to recognize the new commands.

**Verify it worked** by typing this in your terminal:
```bash
node --version
npm --version
```

If both commands print a version number, you are ready to install Claude Code.

#### Step 1B-ii: Installing Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

You will want a Claude Max subscription (~$100/mo) for meaningful daily usage.

**Why the CLI and not the desktop app?** Claude has a desktop app with a nice window, but it is a wrapper around the CLI, and the CLI updates far faster. Claude Code's CLI might update three times in a single session. The desktop app does not keep up, which means it is often buggy or missing features. The CLI auto-updates and is always current. Use the CLI in your terminal.

#### Step 1B-iii: The `--dangerously-skip-permissions` Flag

By default, Claude Code asks your permission before it does anything: creating a file, editing a file, running a command. Every. Single. Time. This is the safe, responsible design. And it will drive you absolutely crazy if you are trying to get real work done.

In practice, nearly every developer and power user runs Claude Code with the `--dangerously-skip-permissions` flag, which tells it to just do things without asking. The tradeoff is real: you are giving it permission to modify your files, run commands, and make changes without a confirmation step. But the productivity difference is enormous. With the flag, you stay in flow. Without it, you are clicking "approve" dozens of times per session.

The recommended approach is to create an alias so you have both options:

```bash
# Add this to your shell config (~/.zshrc on Mac, ~/.bashrc on Linux)
alias clauded="claude --dangerously-skip-permissions"
```

After adding this, restart your terminal (or run `source ~/.zshrc`). Now you have two commands:

- `claude` for when you want the safe mode with permission prompts
- `clauded` for when you trust the operation and want to stay in flow

**When to use which:**
- Use `clauded` for your day-to-day work: brain dumps, document creation, strategic thinking, updating your business OS. This is 95% of the time.
- Use `claude` (safe mode) when you are doing something sensitive, like working with credentials, making changes to production systems, or any operation where you want to review each step before it happens.

Claude Code is not a chatbot. It reads your files, writes your files, runs commands, and operates within the context of your entire workspace. It is the brain that draws on everything in your business OS.

### Step 1C: VS Code

Visual Studio Code is your window into the file system. Download it for free from [https://code.visualstudio.com](https://code.visualstudio.com).

**If you have never used a terminal before:** the terminal is the text-based interface to your computer. When you see windows and icons on your screen, that is a graphical layer on top of what is really happening, which is your computer sitting in a folder, ready to execute actions. The terminal gives you direct access to that. You don't need to be fluent. You just need to be willing to open it.

Open your terminal within VS Code (Terminal > New Terminal, or `` Ctrl+` ``) so you can see file changes in real time as Claude Code creates and modifies documents. The split view (terminal on the bottom, file explorer on the left, document preview on the right) is the cockpit of your business OS.

### Step 1D: Git and GitHub

Version control is not optional. Create a private repository for your business OS. Git gives you something that no other tool does: a complete history of not just *what* changed but *when* and *why*. Every commit is a timestamped record of how your thinking evolved.

For the full case for why source control is the right home for your truth, see [Why Legacy Matters](/docs/legacy/why-it-matters).

### Step 1E: Meeting Transcription (Optional)

Tools like [Granola](https://granola.ai/) run in the background during meetings and give you a transcript afterward. This becomes raw material for your business OS. Not every meeting needs to be transcribed, but the important ones should be captured so you can extract insights and commitments later.

---

## Phase 2: Understand What Makes This Work

### Step 2A: The Chief of Staff Mental Model

Think of your AI agent as a chief of staff. What does a chief of staff need to be genuinely helpful?

**Tools.** When your chief of staff can swipe your credit card, that is like giving your agent a tool. When they can access your calendar, that is a tool. Without tools, your agent is just a conversationalist. With tools, it can actually get things done: send emails, schedule meetings, look things up, run scripts.

**Context about you.** Your goals. Your decision-making style. Your risk tolerance. Your priorities. Your relationships and who matters in your network. The more your agent knows about the most important things in your life and business, the more it can act on your behalf without you having to correct it constantly. Without this context, you are just screaming into the void.

**Standard operating procedures.** Humans have SOPs. Agents have skill files: markdown documents that clearly describe exactly what the agent should do for a given task. Step by step, in plain English, often mixed with specific commands or scripts to run. You can co-write these with the agent (it knows how to talk to itself). Over time, your library of skill files turns your agent from a general-purpose assistant into a specialist that knows your operation.

The Minimum Viable Jarvis is about setting up the context layer: getting the truth about your operation, your relationships, and your thinking into files that AI can read. The tools and skill files come later as you grow the system.

### Step 2B: A Note on Security

As you connect more tools to your agent (email, calendar, file systems, payment processors), the surface area for things going wrong increases. This is worth being thoughtful about.

The principle is simple: **human in the loop for anything consequential.** Your agent can draft every email, but a human reviews before sending. It can prepare financial reports, but a human approves before money moves. It can suggest meeting responses, but a human confirms before commitments are made.

The risk is not that AI is malicious. The risk is that it is confidently wrong, or that someone finds a way to inject instructions into content your agent processes (a technique called prompt injection). If your agent is reading emails and acting on them without oversight, a carefully crafted email could theoretically trick it into doing something you did not intend.

Start with read-only connections and work your way up. Connect your calendar so the agent can see your schedule before you give it permission to modify it. Let it read your email before you let it send on your behalf. Build trust incrementally, the same way you would with a new hire. The MVJ as described in this guide is inherently safe: it is just files on your computer. The security considerations become more important as you expand into connected tools and automated workflows.

---

## Phase 3: Build Your First Business OS

This is what a first session looks like. Four exercises, about an hour total. By the end, you'll have a working business OS with real data in it and a visceral sense of what this system can become.

### Step 3A: "Who Do I Know?" (10 minutes)

Create 3 to 5 relationship files for key people in your professional life. Use voice-to-text to dictate into Claude Code. For each person, capture:

- **Name and role**
- **How you met**
- **What you're working on together** (if anything)
- **Last meaningful interaction**
- **Anything you want to remember** (their kid's name, that project they mentioned, the thing they're excited about)

Tell Claude Code to create a file for each person in a `people/` directory. The format doesn't matter much right now. What matters is that these people now exist in your system.

**The moment:** These people now exist in structured form that AI can reference. You will never forget a detail about them again. The next time you have a meeting with one of them, your business OS can brief you on everything you know.

### Step 3B: "What's Actually True About My Operation?" (15 minutes)

Dictate a `STATUS.md` file. Just talk. Let Claude Code structure it. Cover:

- **Current state**: What are you working on right now? What's the honest situation?
- **Key decisions and why**: What have you decided recently, and what was the reasoning?
- **What's blocked**: Where are you stuck? What's in the way?
- **Sources of truth**: Where does important information currently live? (Specific Slack channels, Google Docs, Notion pages, someone's head)
- **Next milestones**: What are you trying to accomplish in the next 2 to 4 weeks?

**The moment:** This is likely the first time the ground truth of your operation exists outside your head in structured form. Read it back. It will feel clarifying in a way that thinking about it never does. Writing forces precision that thinking alone does not.

### Step 3C: "What Did I Actually Decide?" (10 minutes)

Create a strategic document capturing one major decision you've made recently. Dictate the story:

- **The situation**: What was the context?
- **The options**: What were you choosing between?
- **The discernment process**: How did you think it through? Who did you consult? What factors mattered most?
- **The decision**: What did you decide?
- **The aftermath**: How did it play out? Would you make the same call again?

**The moment:** When your team (or future you) asks "why did we do it this way?", you point them here. The truth is managed. No more relitigating settled decisions from memory.

### Step 3D: "My System Talks Back" (10 minutes)

Now ask Claude Code to generate a briefing from everything you've created. Something like:

> "Based on everything in this workspace, give me a briefing. Who are my key relationships? What's the current state of my operation? What decisions have I made and what's still unresolved? What should I be paying attention to?"

Watch what comes back. It won't be perfect. But it will be useful. And it will be drawn from *your* truth, not from generic training data.

**The moment:** Imagine this briefing after 30 days of adding to your business OS. After 90 days. After a year. Every conversation, every decision, every relationship, compounding into an increasingly rich and useful context. That's the trajectory you just started.

---

## Phase 4: The Daily Workflow

Once your MVJ is set up, the default interaction pattern is simple: you speak, the system listens and routes.

### Step 4A: Open Your Workspace

Open your business OS folder in VS Code. Open the terminal within VS Code (Terminal > New Terminal). Navigate to your business OS folder and start Claude Code (type `clauded` or `claude`).

### Step 4B: Brain Dump

Start talking. Voice-to-text into the terminal. Just dump whatever is on your mind. It might be a meeting debrief, a strategic thought, an update on a relationship, a new idea, a decision you need to make. Do not worry about structure. Just say what is true.

### Step 4C: Let Claude Code Route It

Based on what you said, Claude Code determines which existing documents to update, whether new documents need to be created, and how to maintain coherence across everything.

### Step 4D: Review the Changes

Look at what Claude Code did. Approve, correct, or refine. This is you being the "dictator of truth" for your operation. The AI proposes; you approve.

### Step 4E: Repeat

Over time, Claude Code learns the structure of your business OS and keeps everything consistent. Cross-references stay accurate. Outdated information gets flagged.

The brain dump is the lowest-friction way to keep your business OS current. You don't need to think about where information goes. You just need to say what's true, and the system handles the rest.

---

## Phase 5: Common Pitfalls (From Real Sessions)

These are real issues that come up when people set up their MVJ for the first time. Knowing about them in advance saves frustration.

**Slow internet makes tool installation painful.** Claude Code downloads a binary during installation. If your connection is spotty, this can time out or hang. Make sure you have a solid connection for the initial setup.

**Claude Code sometimes times out on long operations.** This is normal. Just resume the session. Your files are already saved. Nothing is lost.

**The multiple-choice UI in Claude Code can be confusing.** When Claude Code presents options, it can feel like you need to pick from a menu. You can tell it to default to free text input instead. Just say "don't give me multiple choice, I'll tell you what I want."

**Remap your Caps Lock key.** Make it a Control key. This is a small thing that makes terminal life dramatically better. On macOS: System Settings, Keyboard, Keyboard Shortcuts, Modifier Keys. You'll thank yourself.

**Understand the "dangerously skip permissions" tradeoff.** See the Claude Code installation section above for the full explanation of the `--dangerously-skip-permissions` flag and the `clauded` alias. Short version: use `clauded` for day-to-day work, use `claude` for sensitive operations.

**Voice transcription quality can vary.** Apple's built-in dictation can regress across OS updates. If you notice accuracy dropping, switch to Superwhisper or Wispr Flow as your primary and keep the other as backup.

**Don't try to make it perfect on day one.** The MVJ is a scaffold. It will be messy at first. That's fine. The structure will emerge as you use it. Resist the urge to spend three hours designing the perfect folder hierarchy before you've written a single document. Start writing. Reorganize later.

---

## Phase 6: Growing From MVJ to Full Business OS

The MVJ is the seed. Here's what the growth trajectory looks like.

### Step 6A: Week 1

- Add 5 more relationship files. Start with the people you interact with most.
- Write your `PRINCIPLES.md`: the core decision rules you operate by. What do you value? What are your non-negotiables? What heuristics guide your judgment?
- Process one real conversation (a meeting, a call, a brainstorm) through the system. See what it's like to capture and route real information.

### Step 6B: Month 1

- Regular brain dumps are becoming habit. You speak into the system at least a few times a week.
- Your artifact library is growing: status updates, decision records, relationship files, strategic notes.
- You're starting to see the compounding effect. Claude Code's briefings are getting noticeably more useful because there's more context to draw from.

### Step 6C: Month 3

- The system knows enough about you, your operation, and your relationships to generate genuinely useful briefings and catch things you'd miss.
- You're spending less time trying to remember things and more time making decisions. The recall problem is largely solved.
- You start to feel the shift: the system is not just a tool you use. It's a thinking partner that operates from your context.

### Step 6D: The Organizational Expansion

When you're ready to bring other people in, the business OS scales with access controls:

- **Each person gets a role-scoped view.** Not everyone needs to see everything. The intern doesn't need board-level strategy docs. The sales lead doesn't need HR records.
- **AI agents that act on behalf of team members** only have access to documents relevant to their role. This is where the [Sovereign Agentic Business OS principles](/docs/sovereign-agentic-business-os/principles) around identity and access management become critical.
- **The vision:** a living "company bible" (see [Start Your Company Bible](/docs/legacy/start-your-company-bible)) that everyone, human and AI, operates from. Continuously updated. Version-controlled. The single source of truth for how your organization works.

---

## Phase 7: The Meta Work Shift

Here's the part that feels counterintuitive at first: as your business OS matures, your day starts to look less and less like "work" in the traditional sense.

Low-level execution is increasingly handled by AI. The human's job becomes meta work: defining reality, setting objectives, curating truth, evaluating whether the system is producing good outcomes. Think of it like game design. You are designing the game (the objectives, the rules, the guardrails) and the AI agents are the players executing within those constraints.

A productive day might involve very little typing and a lot of thinking, conversing, and refining the system. You might spend an hour voice-dumping insights from three conversations, review the updated documents, approve the changes, and then ask your business OS to generate a strategic brief. That's not laziness. That is the highest-leverage use of human attention in a world where execution costs are collapsing.

The question is no longer "how do I get all this work done?" It's "am I defining reality accurately enough that the system can do good work on my behalf?"

That's the shift. And it starts with the Minimum Viable Jarvis.

---

## Further Reading

- [Sovereign Agentic Business OS](/docs/sovereign-agentic-business-os): The full philosophy behind building your own AI operations hub
- [Legacy](/docs/legacy): The framework for documenting and organizing the truth your business OS draws on
- [Start Your Company Bible](/docs/legacy/start-your-company-bible): Scaling legacy across an organization
- [Make Your Company Refactorable](/docs/legacy/make-your-company-refactorable): Making your operation grep-able and editable by AI agents
- [Voice Transcriber](/docs/legacy/voice-transcriber): Deeper dive on the voice-to-text tools that power the brain dump workflow
- [The Question Bank](/docs/sovereign-agentic-business-os/question-bank): High-leverage questions to program into your business OS

---

*The best time to start your business OS was a year ago. The second best time is today. Open a terminal. Start talking. The system will grow from there.*
