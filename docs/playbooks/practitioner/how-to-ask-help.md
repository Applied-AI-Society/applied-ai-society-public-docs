---
sidebar_position: 6
title: "How To Ask For Help"
---

# How To Ask For Help

*The protocol for getting unstuck fast in your workshop's group chat. Most asks die because they did not ship enough context. This is the fix.*

---

## A note for trainers

If you are running a Jarvis workshop or instructing a cohort, set up a group chat for your students before the workshop ends. Whatever channel fits your group: WhatsApp, Signal, Telegram, Discord, an email thread, your own internal Slack. Pick one and pin the link to your post-workshop materials. Without a shared channel, "ask for help" defaults to nothing and people quietly fall off.

This doc is the asking-protocol for whichever channel you set up.

## Why this matters

You are getting stuck on something. Someone in the group probably knows the fix in 30 seconds. The blocker is almost never that no one knows. The blocker is that the question lands in the channel without enough context to act on, so it gets a clarifying reply instead of a solution, and three round-trips later the day is gone.

A 90-second investment in context up front saves hours of back-and-forth.

## Bundle the context into one link

The goal is that a helper can open ONE link and have everything they need to act. Fragmented context (a chat message + a separate screenshot + another follow-up + a stray voice note) makes helpers do work to reassemble the picture. That friction is what kills asks.

Put it all in one place. Pick the simplest container that fits your issue and put every relevant piece of context inside it:

- **A Loom (recommended for most issues).** Loom captures screen + voice + camera in one shareable link. Reproduce the problem on screen while narrating what you were trying to do, what you expected, and what happened. 60 to 120 seconds. Install from [loom.com](https://loom.com) if you do not have it. The single most leverage-dense container available to you.
- **A shared doc (Google Doc, Notion page, or a markdown file in your own repo).** Best when the issue is conceptual, multi-step, or has a lot of text to share. Include: a headline summary, your attempted prompt(s), the actual output, embedded screenshots, links to relevant files in your repo, and any voice note or short recording inside the doc. One link, everything in it.
- **A single-frame screenshot with a typed caption** is acceptable only when the issue is genuinely visible in one frame and one sentence describes it. Use sparingly. Most issues need more.

What goes inside whichever container you pick:

1. **Screen capture of the problem reproducing.** Video for stateful issues, screenshot for static ones.
2. **The exact prompt or command you ran.** Copy-paste, do not paraphrase.
3. **The exact output or error.** Copy-paste, do not summarize.
4. **What you expected.** One sentence.
5. **What you have already tried.** Skip if you have not tried anything; just say so.
6. **Voice or written narration.** Whichever is faster for you.

If you are on a Mac and have not set up Loom, do that today. Install from [loom.com](https://loom.com), grant screen recording and microphone permissions, pin the icon to your menu bar.

## The chat message itself stays short

The bundled link does the heavy lifting. The chat message that points to the link should be one or two sentences plus the link:

> Stuck on `clauded` not being recognized in my terminal. Full context here: `[your Loom link]`

That is it. A helper opens the link, sees the screen capture + the exact error + your prompt + what you expected, and replies with the fix. No round-trips.

## Good ask vs. bad ask

**Bad:** "claude is broken"

**Bad:** five separate messages over twenty minutes, each with one fragment of context, sent one after another into the channel.

**Good:** "Stuck on `clauded` not being recognized. Full context: `[your Loom link]`". The Loom shows you typing the command, the error, and your verbal narration of what you were trying to do.

The bundled version takes 90 seconds to record. Someone replies in 30 seconds with the alias setup, and you are unstuck.

## Where to ask

The group chat your trainer set up. Post directly to the channel. Threads are fine for follow-ups, but the initial ask should be top-level so everyone sees it.

If your question is sensitive (client info, NDA-bound material, anything you would not say in front of the whole group), DM your trainer directly. Default to the group otherwise. Public asks compound: someone else has the same blocker tomorrow, and your question plus the answer is now searchable history.

## Pay it forward

If you see a question in the group you can answer in 60 seconds, do it. The group works because operators help each other. Every answer you give pays back the answer you received last week.

The community is the moat. The cheat sheet, the docs, the workshops, all of it sharpens because operators teach each other in the group, then those teachings flow back into the docs.

## Quick links

- [Post-Workshop Cheat Sheet](post-workshop-cheat-sheet.md): the one-pager you should already have bookmarked
- [Restart Your Jarvis](restart-your-jarvis.md): when something breaks and you want a clean slate before asking
- [Get Jarvised](/docs/get-jarvised): the canonical invitation page
