---
sidebar_label: "Training the Workshop"
title: "Training the Personal Agentic OS Workshop: A Guide for Instructors"
description: "How to run a Personal Agentic OS workshop. Logistics, format, pacing, common issues, and lessons learned from real sessions."
---

# Training the Personal Agentic OS Workshop

*A playbook for anyone who wants to teach other people how to set up their Personal Agentic OS (what some people affectionately call the "Minimum Viable Jarvis," a nod to Tony Stark's AI). Open source, evolving in real time based on actual workshop sessions.*

---

## Why This Playbook Exists

The [Supersuit Up Workshop](/docs/workshops/supersuit-up) tutorial is designed to be self-paced. But in practice, having an instructor makes an enormous difference. Every machine is slightly different. People hit edge cases (a Windows PowerShell permission error, an old Node.js version, a corporate firewall, an outdated laptop) that are too niche to document but take an experienced person 30 seconds to debug.

The instructor is the person who gets participants across the finish line. Without one, a significant percentage of people will get stuck at installation and never make it to the part that actually changes their life: the user profile interview and the strategic blocker plan. The tutorial is the map. The instructor is the guide who keeps people moving when the terrain gets rough.

This playbook captures what we are learning in real time about how to run these workshops effectively.

---

## Format

### Group Size

**8 people maximum.** You need to be able to help everyone individually when they get stuck. With more than 8, you will have people waiting too long for help and losing momentum. If you have more interest than seats, run multiple sessions.

### Setup

- **Big TV or monitor** at the front where you can screen share. Everyone should be huddled close enough to read code on the screen.
- **Your own laptop** connected to the TV, running your own Personal Agentic OS in Claude Code. You will be demoing live throughout.
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

The most powerful thing you can do as an instructor is **use your own Personal Agentic OS in real time** while teaching. When a participant asks a question, answer it by talking to Claude Code on the big screen. When someone gives feedback about the tutorial, update the tutorial live using your system. This is not a bug; it is the demo. You are showing them what a mature Personal Agentic OS workflow looks like: speak, the system routes it, review the changes, push.

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

1. A working Personal Agentic OS workspace on their computer (the starter repo, open in VS Code, Claude Code running)
2. A `user/USER.md` file from the interview that captures who they are
3. A strategic blocker plan in `artifacts/` that gives them an actionable path forward
4. The visceral experience of voice-to-text into Claude Code and seeing it route information into files

The relationship files and decision records (Steps 4C and 4D) are bonuses. The core win is the user profile and the strategic plan.

---

## The Speed Run: Get Them to the Aha Moment Fast

The full workshop walks people through installation, configuration, and setup. That is the right approach for a group session where everyone learns the whole stack. But there is a faster path when you are working one-on-one with a client or student and want them talking to their AI as fast as possible.

The principle: **the instructor does all the installation. The student does all the thinking.**

Installation is not where the aha moment lives. The aha moment lives in the user profile interview, where the AI reflects their thinking back to them and they realize this thing actually knows them. Every minute spent debugging Node.js versions is a minute stolen from that moment.

### The Protocol

**Before the session (15-20 min, instructor only):**

1. Install Node.js, Git, and VS Code on their machine (or verify they are installed)
2. Install Claude Code (or Hermes) and authenticate
3. Clone the [starter repo](https://github.com/Applied-AI-Society/minimum-viable-jarvis) and open it in VS Code
4. Set up voice-to-text (Superwhisper or Wispr Flow)
5. Run one test command in the terminal to confirm everything works
6. If the student has any existing documents about themselves (LinkedIn, bio, personal website, previous strategic docs), drop them into the `user/` folder

The student's machine should be ready to go before they sit down. When they open their laptop, they see VS Code with the workspace open and an agent ready to talk.

**With the student (30-45 min):**

1. **Explain what they are looking at** (2 min). "This is your workspace. These folders are your brain. The AI reads them. Let me show you."
2. **Run the user profile interview** (15-20 min). Tell the agent to read the skill file and start the interview. The student talks (voice-to-text). The agent asks questions. The student answers. This is where the magic happens. They are seeing their own thinking reflected back to them by an intelligent system for the first time.
3. **Generate the strategic blocker plan** (10 min). The agent takes everything from the interview and produces an actionable plan. The student reads it and realizes: "This thing just synthesized my situation better than I could have articulated it myself."
4. **Show them the daily workflow** (5 min). Open the terminal, brain dump something, show how the agent routes it to the right file. "This is what you do every day. Talk, let it route, review."

**After the session:**

They now have a working system with their actual data in it. The installation barrier is gone. The aha moment happened. From here, they build the habit on their own. You check in a week later to see if they are doing daily brain dumps.

### Why This Works

[Ramp learned the same lesson](/docs/case-studies/ramp-glass): "The people who got the most value were not the ones who attended training sessions. They were the ones who installed a skill on day one and immediately got a result." The speed run is the same insight applied to one-on-one onboarding. Remove every barrier between the person and their first real result. The product teaches faster than any explanation.

The full workshop is still the right format for group sessions where people need to learn the stack. The speed run is for when you have someone's laptop in front of you and 45 minutes to change how they think about AI forever.

---

## Lessons Learned (From Real Sessions)

*This section is updated after each workshop. Dates indicate when the lesson was added.*

### March 30, 2026: First Workshop (Austin, TX)

**Participants need reassurance that the tools are safe and free.** One participant pasted the entire tutorial into Claude and asked "Is this all safe to install? What does each tool cost?" before downloading anything. This is smart behavior. Encourage it. The cost/safety table at the top of the tutorial was added because of this feedback.

**Voice-to-text is a revelation for non-technical people.** Install it first (Step 1A) so they can use it for the rest of the workshop. WhisperFlow's auto-reformatting is a crowd-pleaser.

**The clauded alias is confusing if you do not explain the tradeoff clearly.** People hear "dangerously" and get nervous. Explain it as: "Claude is being overly polite by asking permission for everything. This flag tells it to just do its job. You can always switch back."

**Old computers are a real issue.** One participant had a 10-year-old laptop. Everything took longer. Be honest about this upfront rather than letting them feel like they are doing something wrong.

**Windows users need extra help.** PowerShell can throw unexpected permission errors. Be prepared to debug these live. You cannot document every possible Windows edge case.

**Iterate the tutorial in real time.** Update the public docs during the workshop based on feedback. This is the meta-demo: you are using your Personal Agentic OS to improve the material in front of the participants. They see the system in action.

**One participant canceled ChatGPT during the workshop.** The vendor lock-in framing (your files are yours, you can walk away any time) resonated strongly. People care about sovereignty once you frame it clearly.

**The "ask Claude to guess" moment is powerful.** During the user profile interview, when someone does not know the answer to a question, telling them to ask Claude "what do you think, based on what you already know about me?" produces genuine insight. The agent reflects their own thinking back to them in a way they did not expect.

## Testimonials

, real estate entrepreneur, recorded immediately after the March 31 2026 workshop:

<iframe width="315" height="560" src="https://www.youtube.com/embed/gFJIVm-wvhc" title=" Workshop Testimonial" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

March 31 2026 workshop participant:

<iframe width="315" height="560" src="https://www.youtube.com/embed/4K0K6_wiOus" title="Workshop Testimonial" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

---

## Running Your Own Workshop

If you want to run a Personal Agentic OS workshop in your community, here is the minimum you need:

1. **Complete the [Supersuit Up Workshop](/docs/workshops/supersuit-up) tutorial yourself first.** You need to have a working system with at least a few weeks of usage to demo credibly.
2. **A space with a big screen** and seating for up to 8 people.
3. **A video call link** for remote participants (optional but recommended).
4. **3.5 to 4 hours** of uninterrupted time.
5. **Familiarity with both Mac and Windows** terminal basics so you can debug installation issues.

You do not need to be an engineer. You need to be someone who has done this and can help others through the rough spots.

If you run a workshop, share what you learned. Update this playbook by contributing to the [Applied AI Society](https://docs.appliedaisociety.org) or dropping your notes in the [Discord](https://discord.gg/K7uWJBMFaN).

---

## Further Reading

- [Supersuit Up Workshop](/docs/workshops/supersuit-up): The tutorial you are teaching
- [Starter Repo](https://github.com/Applied-AI-Society/minimum-viable-jarvis): The forkable workspace participants clone
- [Agentic OS Trainer](/docs/roles/agentic-os-trainer): The role description and progression framework
- [Personal Agentic OS](/docs/concepts/personal-agentic-os): The concept you are teaching
- [Harness Engineering](/docs/concepts/harness-engineering): Why Claude Code is a harness, not the only option
- [The Question Bank](/docs/sovereign-agentic-business-os/question-bank): High-leverage questions for deeper user profile interviews
- [Game Design](/docs/concepts/game-design): The framing for how humans define objectives for their agents
- [Applied AI Live](/docs/playbooks/chapter-leader/applied-ai-live): How to run Applied AI events (the workshop fits as a format)
