---
sidebar_label: "Training the MVJ Workshop"
title: "Training the MVJ Workshop: A Guide for Instructors"
description: "How to run a Minimum Viable Jarvis workshop. Logistics, format, pacing, common issues, and lessons learned from real sessions."
---

# Training the MVJ Workshop

*A playbook for anyone who wants to teach other people how to set up their Minimum Viable Jarvis. Open source, evolving in real time based on actual workshop sessions.*

---

## Why This Playbook Exists

The [Minimum Viable Jarvis](/docs/playbooks/practitioner/minimum-viable-jarvis) tutorial is designed to be self-paced. But in practice, having an instructor makes an enormous difference. Every machine is slightly different. People hit edge cases (a Windows PowerShell permission error, an old Node.js version, a corporate firewall, an outdated laptop) that are too niche to document but take an experienced person 30 seconds to debug.

The instructor is the person who gets participants across the finish line. Without one, a significant percentage of people will get stuck at installation and never make it to the part that actually changes their life: the user profile interview and the strategic blocker plan. The tutorial is the map. The instructor is the guide who keeps people moving when the terrain gets rough.

This playbook captures what we are learning in real time about how to run these workshops effectively.

---

## Format

### Group Size

**8 people maximum.** You need to be able to help everyone individually when they get stuck. With more than 8, you will have people waiting too long for help and losing momentum. If you have more interest than seats, run multiple sessions.

### Setup

- **Big TV or monitor** at the front where you can screen share. Everyone should be huddled close enough to read code on the screen.
- **Your own laptop** connected to the TV, running your own Jarvis in Claude Code. You will be demoing live throughout.
- **A mix of in-person and online is fine.** Use a video call with screen share for remote participants. Have them unmute to ask questions.

### Duration

**3.5 to 4 hours.** This is the baseline even with an experienced instructor. Do not try to compress it. People need time to install tools, get stuck, get unstuck, do the user profile interview, and create their strategic blocker plan.

A rough pacing guide:

| Block | Time | What Happens |
|-------|------|--------------|
| Intro and strategic thinking | 20 min | Why this matters. "You are the bottleneck." Have people identify their top strategic blocker. |
| Phase 1: Install tools | 45-60 min | Voice-to-text, Node.js, Claude Code, clauded alias. This is where most debugging happens. |
| Phase 2: Set up workspace | 30-40 min | VS Code, Git/GitHub, clone the starter repo, open in VS Code. |
| Break | 10 min | People need this. |
| Phase 3: Conceptual framing | 15 min | Chief of staff model, security note. Can be woven into the intro instead. |
| Phase 4: Build the business OS | 60-75 min | User profile interview (the main event), strategic blocker plan, relationship files, decision record, system briefing. |
| Wrap-up and Q&A | 15 min | What they built, what comes next, how to keep going. |

---

## The Instructor's Role

### Live Demo, Not Just Lecture

The most powerful thing you can do as an instructor is **use your own Jarvis in real time** while teaching. When a participant asks a question, answer it by talking to Claude Code on the big screen. When someone gives feedback about the tutorial, update the tutorial live using your Jarvis. This is not a bug; it is the demo. You are showing them what a mature Jarvis workflow looks like: speak, the system routes it, review the changes, push.

### Debug, Don't Prescribe

Every participant's machine is different. Your job is not to anticipate every possible error. Your job is to sit next to someone when they are stuck and figure it out with them. Common issues you will encounter:

- `npm: command not found` (they skipped Node.js installation)
- Windows PowerShell execution policy blocking scripts
- Old laptops (8-10+ years) struggling with modern tooling
- Claude Code first-launch flow confusing people (theme selection, terminal setup)
- People not closing and reopening their terminal after installing something
- Git not installed on Mac (rare but happens when Xcode CLI tools are missing)

### Set the Frame Early

Before anyone touches a keyboard, spend time on the strategic framing:

1. **"You are the bottleneck."** This is empowering, not critical. The tools are not the problem. Their strategic clarity is.
2. **Have everyone identify their top strategic blocker.** Give them 5-10 minutes of quiet thinking time. This becomes the input for Step 4B (the strategic plan), which is the payoff of the whole workshop.
3. **The chief of staff metaphor.** Tools, context, SOPs. This gives people a mental model for why they are installing all this stuff.

### Success Criteria

A participant has succeeded if they leave with:

1. A working Jarvis workspace on their computer (the starter repo, open in VS Code, Claude Code running)
2. A `user/USER.md` file from the interview that captures who they are
3. A strategic blocker plan in `artifacts/` that gives them an actionable path forward
4. The visceral experience of voice-to-text into Claude Code and seeing it route information into files

The relationship files and decision records (Steps 4C and 4D) are bonuses. The core win is the user profile and the strategic plan.

---

## Lessons Learned (From Real Sessions)

*This section is updated after each workshop. Dates indicate when the lesson was added.*

### March 30, 2026: First Workshop (Austin, TX)

**Participants need reassurance that the tools are safe and free.** One participant pasted the entire tutorial into Claude and asked "Is this all safe to install? What does each tool cost?" before downloading anything. This is smart behavior. Encourage it. The cost/safety table at the top of the tutorial was added because of this feedback.

**Voice-to-text is a revelation for non-technical people.** Install it first (Step 1A) so they can use it for the rest of the workshop. WhisperFlow's auto-reformatting is a crowd-pleaser.

**The clauded alias is confusing if you do not explain the tradeoff clearly.** People hear "dangerously" and get nervous. Explain it as: "Claude is being overly polite by asking permission for everything. This flag tells it to just do its job. You can always switch back."

**Old computers are a real issue.** One participant had a 10-year-old laptop. Everything took longer. Be honest about this upfront rather than letting them feel like they are doing something wrong.

**Windows users need extra help.** PowerShell can throw unexpected permission errors. Be prepared to debug these live. You cannot document every possible Windows edge case.

**Iterate the tutorial in real time.** Update the public docs during the workshop based on feedback. This is the meta-demo: you are using your Jarvis to improve the material in front of the participants. They see the system in action.

**One participant canceled ChatGPT during the workshop.** The vendor lock-in framing (your files are yours, you can walk away any time) resonated strongly. People care about sovereignty once you frame it clearly.

**The "ask Claude to guess" moment is powerful.** During the user profile interview, when someone does not know the answer to a question, telling them to ask Claude "what do you think, based on what you already know about me?" produces genuine insight. The agent reflects their own thinking back to them in a way they did not expect.

---

## Running Your Own Workshop

If you want to run an MVJ workshop in your community, here is the minimum you need:

1. **Complete the MVJ tutorial yourself first.** You need to have a working Jarvis with at least a few weeks of usage to demo credibly.
2. **A space with a big screen** and seating for up to 8 people.
3. **A video call link** for remote participants (optional but recommended).
4. **3.5 to 4 hours** of uninterrupted time.
5. **Familiarity with both Mac and Windows** terminal basics so you can debug installation issues.

You do not need to be an engineer. You need to be someone who has done this and can help others through the rough spots.

If you run a workshop, share what you learned. Update this playbook by contributing to the [Applied AI Society](https://docs.appliedaisociety.org) or dropping your notes in the [Discord](https://discord.gg/K7uWJBMFaN).

---

## Further Reading

- [The Minimum Viable Jarvis](/docs/playbooks/practitioner/minimum-viable-jarvis): The tutorial you are teaching
- [Starter Repo](https://github.com/Applied-AI-Society/minimum-viable-jarvis): The forkable workspace participants clone
- [Jarvis Trainer](/docs/roles/jarvis-trainer): The role description and progression framework
- [Personal Jarvis](/docs/concepts/personal-jarvis): The concept you are teaching
- [Harness Engineering](/docs/concepts/harness-engineering): Why Claude Code is a harness, not the only option
- [The Question Bank](/docs/sovereign-agentic-business-os/question-bank): High-leverage questions for deeper user profile interviews
- [Game Design](/docs/concepts/game-design): The framing for how humans define objectives for their agents
- [Applied AI Live](/docs/playbooks/chapter-leader/applied-ai-live): How to run Applied AI events (the MVJ workshop fits as a format)
