---
sidebar_position: 33
title: "Lossy AI Telephone"
---

# Lossy AI Telephone

*You are already playing this game. You just haven't named it yet.*

---

## The Pattern

Here is what happens on most teams right now:

1. You have an idea. You tell your AI assistant.
2. The AI drafts an email or document. Maybe it misunderstands something. Maybe you don't review it carefully. Maybe you don't even know exactly what you want to say yet.
3. You send it.
4. The other person receives it. They copy and paste the whole thing into their AI. "What does he mean by this?"
5. Their AI interprets your AI's output. Another layer of compression. Another opportunity for drift.
6. They respond, through their AI, back to you.
7. You paste their response into your AI. "What is she saying?"

Back and forth. Each pass losing fidelity. Each AI adding its own interpretation, its own assumptions, its own drift. The original intent gets compressed, distorted, and reconstructed at every step.

This is lossy AI telephone.

## Why It Is Worse Than It Looks

Think about audio compression. A song recorded in a studio is a massive file: uncompressed, lossless, every detail preserved. You compress it into an MP3 so everyone can listen to it. Most people can't hear the difference. But if you took that MP3, compressed it again, and again, and again, passing it through different codecs each time? By the fifth pass, it sounds like garbage.

That is what is happening to your ideas when they pass through multiple AI systems. Each pass is a lossy compression. Each AI is a different codec. The truth degrades with every hop.

And here is the part most people miss: **most people don't even review what their AI sends.** First of all, many people don't know exactly what they want to say. That's already a bad start. But even the ones who do know often let the AI rephrase it, don't read the rephrasing, and send it. The misunderstanding is baked in before the recipient even opens it.

## The Skeuomorphic Trap

This is collaboration cargo cult. Everyone is using AI. Things are moving faster than before. It feels productive. But the underlying workflow is still the old pattern: draft, send, receive, interpret, respond. The AI just made each step happen faster.

Faster telephone is still telephone. Faster lossy compression is still lossy. You are not collaborating. You are playing a game of broken telephone at higher speed.

This is a [skeuomorphic](https://en.wikipedia.org/wiki/Skeuomorph) way of working. It preserves the shape of old collaboration (email threads, document handoffs, meeting recaps) while missing the entirely new paradigm that AI actually enables.

## The Fix: The Agentic Project OS

The answer is not better AI email. The answer is to stop passing information back and forth entirely.

Every serious project should have an **agentic project OS**: a shared workspace where everyone on the project, including their AI agents, operates from the same source of truth.

What does this look like in practice?

- A shared repository of markdown files. Not a Google Doc. Not a Notion page. A folder with structured files that any AI agent can read and operate on.
- An [instruction file](/docs/concepts/instruction-files) (CLAUDE.md, AGENTS.md, or equivalent) that tells every agent on the project: "Here is the mission. Here is the current state. Here is your job."
- Shared context: project goals, task lists, decisions made, decisions pending. All in plain text. All version-controlled. All accessible to every team member and their agents simultaneously.
- A permission surface that determines who can see and edit what. Not everyone needs access to everything. But the information they do share should be the actual source of truth, not a lossy copy of it.

This is a collective [Personal Agentic OS](/docs/concepts/personal-agentic-os). A shared Personal Agentic OS for the project. Instead of each person talking to their own AI about what the other person's AI said, everyone's AI reads from and writes to the same files.

## Why This Works

When you share the same source files:

- **No compression.** The truth is in the markdown. Nobody's AI is interpreting somebody else's AI's interpretation. Everyone reads the original.
- **No drift.** When someone updates a decision, it updates in one place. Not in a chain of emails where half the team is working from an outdated version.
- **Full context.** Every agent on the project has the complete picture. Not the lossy summary that got forwarded three times.
- **Async by default.** You don't need a meeting to "get aligned." The alignment lives in the shared files. Update them when your thinking changes. Everyone stays in sync automatically.

This is what [compounding docs](/docs/concepts/compounding-docs) looks like at the team level. The documentation is not a byproduct of the work. It is the work surface itself.

## The Documentation Test

Here is a principle that sounds extreme until you think about it: **every project you work on needs to be so well documented that if you passed away tomorrow, someone else could pick it up without losing any information.**

If your project cannot survive your absence, it is not a project. It is a hobby tied to your ego. That sounds harsh. It is meant to.

Serious projects, the kind that serve a mission bigger than any individual, require documentation that is truthful, useful, and complete. Not every piece of information in the world. Just the edge information: the decisions, the reasoning, the current state, the next steps. Everything an intelligent person (or agent) would need to continue the work.

If you are not doing this, you are building something fragile. And fragile things break at the worst possible time.

## The Transition

You do not have to rebuild everything overnight. Start with one project:

1. Create a shared folder with markdown files
2. Add an instruction file that explains what the project is and how to work on it
3. Move your project's truth out of email threads and chat messages and into structured documents
4. Have your collaborators point their AI agents at the shared folder instead of pasting your emails into ChatGPT

That is it. That is the transition from lossy AI telephone to an agentic project OS.

Every project that matters should have a [harness](/docs/concepts/harness-engineering). Every harness should have shared context. Every collaborator should be working from the same source of truth.

Stop playing telephone. Start sharing the source code.

---

## Further Reading

- [Instruction Files](/docs/concepts/instruction-files): The file that tells your agents what to do
- [Harness Engineering](/docs/concepts/harness-engineering): Building the system around the AI
- [Personal Agentic OS](/docs/concepts/personal-agentic-os): The individual version of the agentic OS
- [Compounding Docs](/docs/concepts/compounding-docs): Documentation as a compounding asset
- [Context Engineering](/docs/concepts/context-engineering): The discipline of curating the right information
- [The Soul Harness](/docs/concepts/the-soul-harness): Liberating vs. predatory systems at the life level
