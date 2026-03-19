---
sidebar_label: "Minimum Viable Jarvis"
title: "The Minimum Viable Jarvis: Setting Up Your AI Command Center"
description: "A step-by-step guide to building your personal AI-operated command center for legacy, strategic clarity, and compounding context."
---

# The Minimum Viable Jarvis

*A step-by-step guide to setting up the simplest system that gives you AI-augmented recall, strategic clarity, and compounding context.*

---

## Why This Matters

You have a dozen inboxes. Discord, Telegram, iMessage, email, Slack, LinkedIn, X, Instagram, phone calls, in-person conversations. Right now, you probably have 50 open threads across 12 platforms. No human brain can track all of that. And the honest truth is: you're dropping balls. We all are.

The thing nobody tells you about leveling up as a professional or leader is that the job changes underneath you. At a certain point, the most important work is no longer doing the work. It's defining reality, setting objectives, and evaluating whether the system is working. You shift from working *in* the business to working *on* the business. Meta work becomes the work. This shift from execution to design is what we call [game design](/docs/concepts/game-design): the discipline of defining objectives, rules, guardrails, and scoring for the AI agents in your system.

Here's the key insight behind everything that follows: **the truth in your head is not the truth.** Not operationally. Not for AI. Not for your team. The truth that matters is the truth that exists in documents that AI can read and act on. If it's only in your head, it might as well not exist. It's ungreppable. It's unsearchable. It's locked in wet storage with a terrible API.

Your [Sovereign Command Center](/docs/sovereign-command-centers) is the persistent memory your AI draws on. The Minimum Viable Jarvis (MVJ) is the simplest possible version of that command center. Not the end state. The starting point.

For the full philosophy behind why documented truth matters, see [Legacy](/docs/legacy) and [Why It Matters](/docs/legacy/why-it-matters). This playbook is the practical "how to start" companion to those ideas.

---

## The Setup Stack

You need five things. Most of them are free or cheap. The entire stack can be running in under 30 minutes.

### Voice-to-Text

The bottleneck between thought and text must be removed. You think faster than you type, and most of your best insights happen when you're talking, not when you're sitting at a keyboard.

Two solid options:

- **[Superwhisper](https://superwhisper.com/)**: Fully local, privacy-focused. Your audio never leaves your machine. Great if sovereignty matters to you (and it should).
- **[Wispr Flow](https://wispr.flow)** (~$10/mo): System-wide dictation that works across any application. Slightly more polished UX.

Either works. The point is that you can speak naturally and get text. For more on the role of voice transcription in legacy, see [Voice Transcriber](/docs/legacy/voice-transcriber).

### Claude Code

Your terminal-based AI interface. This is the "Jarvis" part. Install it globally:

```bash
npm install -g @anthropic-ai/claude-code
```

You'll want a Claude Max subscription (~$100/mo) for meaningful daily usage. Claude Code is not a chatbot. It reads your files, writes your files, runs commands, and operates within the context of your entire workspace. It's the brain that draws on everything in your command center.

### VS Code

Visual Studio Code is your window into the file system. Open your terminal within VS Code so you can see file changes in real time as Claude Code creates and modifies documents. The split view (terminal on the bottom, file explorer on the left, document preview on the right) is the cockpit of your command center.

### Git and GitHub

Version control is not optional. Create a private repository for your command center. Git gives you something that no other tool does: a complete history of not just *what* changed but *when* and *why*. Every commit is a timestamped record of how your thinking evolved.

For the full case for why source control is the right home for your truth, see [Why Legacy Matters](/docs/legacy/why-it-matters).

### Optional: Meeting Transcription

Tools like [Granola](https://granola.ai/) run in the background during meetings and give you a transcript afterward. This becomes raw material for your command center. Not every meeting needs to be transcribed, but the important ones should be captured so you can extract insights and commitments later.

---

## The Hello World Progression

This is what a first session looks like. Four exercises, about an hour total. By the end, you'll have a working command center with real data in it and a visceral sense of what this system can become.

### Hello World 1: "Who Do I Know?" (10 minutes)

Create 3 to 5 relationship files for key people in your professional life. Use voice-to-text to dictate into Claude Code. For each person, capture:

- **Name and role**
- **How you met**
- **What you're working on together** (if anything)
- **Last meaningful interaction**
- **Anything you want to remember** (their kid's name, that project they mentioned, the thing they're excited about)

Tell Claude Code to create a file for each person in a `people/` directory. The format doesn't matter much right now. What matters is that these people now exist in your system.

**The moment:** These people now exist in structured form that AI can reference. You will never forget a detail about them again. The next time you have a meeting with one of them, your command center can brief you on everything you know.

### Hello World 2: "What's Actually True About My Operation?" (15 minutes)

Dictate a `STATUS.md` file. Just talk. Let Claude Code structure it. Cover:

- **Current state**: What are you working on right now? What's the honest situation?
- **Key decisions and why**: What have you decided recently, and what was the reasoning?
- **What's blocked**: Where are you stuck? What's in the way?
- **Sources of truth**: Where does important information currently live? (Specific Slack channels, Google Docs, Notion pages, someone's head)
- **Next milestones**: What are you trying to accomplish in the next 2 to 4 weeks?

**The moment:** This is likely the first time the ground truth of your operation exists outside your head in structured form. Read it back. It will feel clarifying in a way that thinking about it never does. Writing forces precision that thinking alone does not.

### Hello World 3: "What Did I Actually Decide?" (10 minutes)

Create a strategic document capturing one major decision you've made recently. Dictate the story:

- **The situation**: What was the context?
- **The options**: What were you choosing between?
- **The discernment process**: How did you think it through? Who did you consult? What factors mattered most?
- **The decision**: What did you decide?
- **The aftermath**: How did it play out? Would you make the same call again?

**The moment:** When your team (or future you) asks "why did we do it this way?", you point them here. The truth is managed. No more relitigating settled decisions from memory.

### Hello World 4: "My System Talks Back" (10 minutes)

Now ask Claude Code to generate a briefing from everything you've created. Something like:

> "Based on everything in this workspace, give me a briefing. Who are my key relationships? What's the current state of my operation? What decisions have I made and what's still unresolved? What should I be paying attention to?"

Watch what comes back. It won't be perfect. But it will be useful. And it will be drawn from *your* truth, not from generic training data.

**The moment:** Imagine this briefing after 30 days of adding to your command center. After 90 days. After a year. Every conversation, every decision, every relationship, compounding into an increasingly rich and useful context. That's the trajectory you just started.

---

## The Brain Dump Workflow

Once your MVJ is set up, the default interaction pattern is simple: you speak, the system listens and routes.

Here's what the daily workflow looks like:

1. **Open your command center** in VS Code with the terminal running Claude Code.
2. **Start talking.** Voice-to-text into the terminal. Just dump whatever is on your mind. It might be a meeting debrief, a strategic thought, an update on a relationship, a new idea, a decision you need to make.
3. **Claude Code routes the information.** Based on what you said, it determines which existing documents to update, whether new documents need to be created, and how to maintain coherence across everything.
4. **You review the changes.** Look at what Claude Code did. Approve, correct, or refine. This is you being the "dictator of truth" for your operation. The AI proposes; you approve.
5. **The system maintains coherence.** Over time, Claude Code learns the structure of your command center and keeps everything consistent. Cross-references stay accurate. Outdated information gets flagged.

The brain dump is the lowest-friction way to keep your command center current. You don't need to think about where information goes. You just need to say what's true, and the system handles the rest.

---

## Common Pitfalls (From Real Sessions)

These are real issues that come up when people set up their MVJ for the first time. Knowing about them in advance saves frustration.

**Slow internet makes tool installation painful.** Claude Code downloads a binary during installation. If your connection is spotty, this can time out or hang. Make sure you have a solid connection for the initial setup.

**Claude Code sometimes times out on long operations.** This is normal. Just resume the session. Your files are already saved. Nothing is lost.

**The multiple-choice UI in Claude Code can be confusing.** When Claude Code presents options, it can feel like you need to pick from a menu. You can tell it to default to free text input instead. Just say "don't give me multiple choice, I'll tell you what I want."

**Remap your Caps Lock key.** Make it a Control key. This is a small thing that makes terminal life dramatically better. On macOS: System Settings, Keyboard, Keyboard Shortcuts, Modifier Keys. You'll thank yourself.

**Understand the "dangerously skip permissions" tradeoff.** By default, Claude Code asks for permission before modifying files. For real productivity, many people create an alias (like `clauded`) that skips these prompts. This is faster but means Claude Code can modify files without asking. Use it when you trust the operation. Go back to the default when you're doing something sensitive.

**Voice transcription quality can vary.** Apple's built-in dictation can regress across OS updates. If you notice accuracy dropping, switch to Superwhisper or Wispr Flow as your primary and keep the other as backup.

**Don't try to make it perfect on day one.** The MVJ is a scaffold. It will be messy at first. That's fine. The structure will emerge as you use it. Resist the urge to spend three hours designing the perfect folder hierarchy before you've written a single document. Start writing. Reorganize later.

---

## Growing From MVJ to Full Command Center

The MVJ is the seed. Here's what the growth trajectory looks like.

### Week 1

- Add 5 more relationship files. Start with the people you interact with most.
- Write your `PRINCIPLES.md`: the core decision rules you operate by. What do you value? What are your non-negotiables? What heuristics guide your judgment?
- Process one real conversation (a meeting, a call, a brainstorm) through the system. See what it's like to capture and route real information.

### Month 1

- Regular brain dumps are becoming habit. You speak into the system at least a few times a week.
- Your artifact library is growing: status updates, decision records, relationship files, strategic notes.
- You're starting to see the compounding effect. Claude Code's briefings are getting noticeably more useful because there's more context to draw from.

### Month 3

- The system knows enough about you, your operation, and your relationships to generate genuinely useful briefings and catch things you'd miss.
- You're spending less time trying to remember things and more time making decisions. The recall problem is largely solved.
- You start to feel the shift: the system is not just a tool you use. It's a thinking partner that operates from your context.

### The Organizational Expansion

When you're ready to bring other people in, the command center scales with access controls:

- **Each person gets a role-scoped view.** Not everyone needs to see everything. The intern doesn't need board-level strategy docs. The sales lead doesn't need HR records.
- **AI agents that act on behalf of team members** only have access to documents relevant to their role. This is where the [Sovereign Command Center principles](/docs/sovereign-command-centers/principles) around identity and access management become critical.
- **The vision:** a living "company bible" (see [Start Your Company Bible](/docs/legacy/start-your-company-bible)) that everyone, human and AI, operates from. Continuously updated. Version-controlled. The single source of truth for how your organization works.

---

## The Meta Work Shift

Here's the part that feels counterintuitive at first: as your command center matures, your day starts to look less and less like "work" in the traditional sense.

Low-level execution is increasingly handled by AI. The human's job becomes meta work: defining reality, setting objectives, curating truth, evaluating whether the system is producing good outcomes. Think of it like game design. You are designing the game (the objectives, the rules, the guardrails) and the AI agents are the players executing within those constraints.

A productive day might involve very little typing and a lot of thinking, conversing, and refining the system. You might spend an hour voice-dumping insights from three conversations, review the updated documents, approve the changes, and then ask your command center to generate a strategic brief. That's not laziness. That is the highest-leverage use of human attention in a world where execution costs are collapsing.

The question is no longer "how do I get all this work done?" It's "am I defining reality accurately enough that the system can do good work on my behalf?"

That's the shift. And it starts with the Minimum Viable Jarvis.

---

## Further Reading

- [Sovereign Command Centers](/docs/sovereign-command-centers): The full philosophy behind building your own AI operations hub
- [Legacy](/docs/legacy): The framework for documenting and organizing the truth your command center draws on
- [Start Your Company Bible](/docs/legacy/start-your-company-bible): Scaling legacy across an organization
- [Make Your Company Refactorable](/docs/legacy/make-your-company-refactorable): Making your operation grep-able and editable by AI agents
- [Voice Transcriber](/docs/legacy/voice-transcriber): Deeper dive on the voice-to-text tools that power the brain dump workflow
- [The Question Bank](/docs/sovereign-command-centers/question-bank): High-leverage questions to program into your command center

---

*The best time to start your command center was a year ago. The second best time is today. Open a terminal. Start talking. The system will grow from there.*
