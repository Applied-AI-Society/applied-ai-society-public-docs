---
title: "Why VS Code, Not Chat UIs"
---

# Why VS Code, Not Chat UIs

*If chat UIs are friendlier, why do we teach the harder path? Because chat UIs cap your upside and files are the first principle.*

---

## The Question I Get Most

Somewhere in almost every [Supersuit Up workshop](/docs/workshops/supersuit-up), an attendee asks some version of this:

> "I'm having a hard time with the VS Code interface. It feels unusual. Claude.ai is just friendlier. Is it because I'm not technical? Do I just need to power through?"

It is a great question. The friction is real. Here is the honest answer.

You are not being asked to become a developer. You are being asked to take **one step** into the developer world so you can see the first principles that every serious AI user is going to need in the next decade. The friction is temporary. What you build on the other side of it is not.

---

## Why We Teach VS Code

VS Code is a file viewer that happens to be beloved by developers. That is all it is to us.

The reasons we use it:

1. **You are going to have a lot of files.** Your [Personal Agentic OS](/docs/concepts/personal-agentic-os) is a workspace full of markdown: your user profile, your relationship dossiers, your meeting transcripts, your strategic documents, your skills. You need something that makes browsing, opening, and editing many files fast. Every serious IDE does this. VS Code does it better than most, for free, and with a plugin for everything (PDF viewers, web views, database browsers, you name it).
2. **It is agent-ready.** Claude Code, Hermes, Codex, Cursor, OpenCode: they all plug into a VS Code-style workspace natively. The moment you graduate from one harness to the next, you do not change environments. You change the agent.
3. **It makes your files first-class citizens.** The left sidebar is a living directory of your [operational reality](/docs/concepts/operational-reality). When you build the habit of seeing your files at a glance, you start trusting the system and using it faster.

VS Code is the vehicle. Your files are the cargo. The cargo is what matters.

---

## Why Not Just Use Claude.ai (Or ChatGPT, Or Gemini)?

Chat UIs are genuinely friendlier. They are also a trap.

**They are vendor-specific.** You are learning Anthropic's UI (or OpenAI's, or Google's). If the vendor changes the interface, raises prices, rate-limits you, or rolls out a worse version of Projects, you are at their mercy. [The lock-in is coming](/docs/concepts/the-lock-in-is-coming). Every hyperscaler has the same incentive: pull you deeper into their platform until switching is unthinkable.

**They wall off your data.** Yes, the chat remembers your conversations. No, you cannot easily export those conversations as files that another AI can read tomorrow. You do not own your own context. The vendor does.

**They cap your upside.** You are learning Claude, or ChatGPT, or Gemini. Not AI. The skills you build inside a specific chat UI do not transfer to a different vendor or an open-source harness. The skills you build in a file-based workspace transfer everywhere, because the files are what matter, not the chat around them. See [the chat is not the product](/docs/concepts/the-chat-is-not-the-product).

**They are constrained abstractions.** Chat projects are simplified wrappers over the same first principles we teach: context, skills, memory. They just hide those principles from you so you never learn them. People who understand the principles underneath are 10x more powerful than people who only understand the wrapper.

The line I keep coming back to:

> **You don't want to be learning Claude. You want to be learning AI.**

---

## "But It's Ugly"

Fair. VS Code is an IDE. It looks like an IDE. Lots going on.

The good news:

- **Install a theme.** There are thousands. Make it as light, dark, or colorful as you want.
- **Install plugins.** PDF viewer, markdown preview, web previewer, whatever you need. VS Code becomes whatever you want it to be.
- **Hide what you don't use.** Menus, debugger, git sidebar: all collapsible.
- **Your daily surface is small.** You use the file viewer on the left and the integrated terminal on the bottom. That's it. Two panes. The rest is optional.

It takes about a week of regular use before the environment starts to feel native. That is the whole learning curve.

---

## Where This Is Going

Here is the prediction: people will build custom Jarvis viewers for specific roles. Finance-team Jarvis viewers. Chief-of-staff Jarvis viewers. Marketing-team Jarvis viewers. [Ramp's Glass](/docs/case-studies/ramp-glass) is already a concrete example: a unified internal platform wrapping a company's skills and workflows in a beautifully custom UI on top of shared files and agents.

The reason they can build custom viewers is that everything underneath is plain files. The files do not care what interface reads them. When the UI on top changes, the files stay.

If you learn a vendor's chat UI, your skills die the day that UI changes. If you learn files, your skills persist forever, because every future UI is a wrapper over the same underlying thing.

This is the essence of [personal software](/docs/concepts/personal-software): the custom, hyper-specific interfaces people will build for their own workflows once the substrate (files and agents) is solid.

---

## The Scarcity Angle

A practical note. There is a hard materials constraint emerging behind all the frontier AI vendors: GPU shortages, CPU shortages, data-center buildouts hitting physical limits, even occasional acts of sabotage. Demand is vertical. Supply is not.

If you are running your entire AI workflow inside one vendor's chat UI, you are a user who can be rate-limited, throttled, or priced out on the vendor's schedule, not yours. If you are running your workflow on files you own, you swap harnesses in an afternoon when a better (or cheaper, or faster) one ships. The difference in resilience is substantial.

See [the sovereignty stack](/docs/concepts/the-sovereignty-stack) for the full map.

---

## Sovereignty Is The Point

The whole reason the [Applied AI Society](/docs/about) exists is to help you build your own [Personal Agentic OS](/docs/concepts/personal-agentic-os) on sovereign foundations. The workshop is a means to that end. VS Code is a means to that end. Claude Code is a means to that end.

What we are actually teaching you: **how to own your operational reality in a format that outlives any single vendor.**

That is a different product than "how to be a great Claude user." The first is portable. The second is rented.

---

## Stick With It

If you are in the first week of VS Code and it feels clunky, you are right on schedule. The clunky feeling fades. The files you are building in your workspace will outlast three generations of vendor UIs.

One step into the developer world. That is all we are asking. You can go as deep as you want from there, or you can stop there and still be 10x ahead of people who only know the chat window.

The friction is real. The upside is uncapped.

---

## Further Reading

- [Personal Agentic OS](/docs/concepts/personal-agentic-os): The workspace VS Code is reading
- [The Sovereignty Stack](/docs/concepts/the-sovereignty-stack): Every layer of your digital life and where you are dependent
- [The Lock-In Is Coming](/docs/concepts/the-lock-in-is-coming): Why every hyperscaler has the same incentive
- [The Chat Is Not the Product](/docs/concepts/the-chat-is-not-the-product): Chat windows versus persistent files
- [Personal Software](/docs/concepts/personal-software): Custom UIs wrapping shared files
- [Operational Reality](/docs/concepts/operational-reality): What your files should contain
- [Ramp: Glass](/docs/case-studies/ramp-glass): A concrete example of a custom Jarvis viewer at scale
- [Supersuit Up Workshop](/docs/workshops/supersuit-up): Where we walk you through setting this up
- [Claude Code Setup](/docs/playbooks/practitioner/claude-code-setup): The harness that sits on top of VS Code
