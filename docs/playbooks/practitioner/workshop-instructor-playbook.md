---
sidebar_label: "Workshop Instructor Playbook"
title: "Running a Personal Agentic OS Workshop: Instructor Playbook"
description: "How to run a Personal Agentic OS workshop. Who it is for, who it is not for, logistics, format, pacing, and lessons learned from real sessions."
---

# Running a Personal Agentic OS Workshop

*A playbook for anyone who wants to teach other people how to set up their Personal Agentic OS (what some people affectionately call the “Minimum Viable Jarvis,” a nod to Tony Stark's AI). Open source, evolving in real time based on actual workshop sessions.*

---

## Why This Playbook Exists

The [Supersuit Up Workshop](/docs/workshops/supersuit-up) tutorial is designed to be self-paced. But in practice, having an instructor makes an enormous difference. Every machine is slightly different. People hit edge cases (a Windows PowerShell permission error, an old Node.js version, a corporate firewall, an outdated laptop) that are too niche to document but take an experienced person 30 seconds to debug.

The instructor is the person who gets participants across the finish line. Without one, a significant percentage of people will get stuck at installation and never make it to the part that actually changes their life: the user profile interview and the strategic blocker plan. The tutorial is the map. The instructor is the guide who keeps people moving when the terrain gets rough.

This playbook captures what we are learning in real time about how to run these workshops effectively.

---

## Who the Workshop Is For

Workshop energy is one of the biggest predictors of whether participants walk out transformed or polite. Curate the room. The two audiences we actively design for:

### Non-Technical Business Leaders

Business owners, operators, executives, and founders in non-software industries. People whose primary value creation is strategy and communication, not shipping code. For this audience, a [Personal Agentic OS](/docs/concepts/personal-agentic-os) is a 10x on exactly the skills they already get paid for: better strategy, faster drafts, sharper decision-making, a persistent second brain that keeps the thread across every client and quarter.

We have run these with leaders from real estate, healthcare, legal, coaching, and professional services. They leave supercharged. The frame lands because they can see within the first hour that their existing judgment plus this infrastructure is a different person than they walked in as.

### Non-Technical Students

Students who plan to make their money in roles other than full-time software engineering. For this audience, the workshop is career infrastructure. They arrive without industry experience and leave with fluency in the tools every employer is trying to figure out right now. That is what they can bring into a first job that a senior hire often cannot: real facility with the new stack.

For a student, "be the AI person who can supercharge an existing business" is a credible, high-leverage path. The workshop gives them the concrete skills and the confidence to walk into a room and be that person.

### What "Non-Technical" Means Here

"Non-technical" does not mean tech-averse. Anyone can vibe-code today, and many workshop participants will dabble. What we mean is: people whose primary money-making focus is not building software applications as an engineer. A real-estate broker who occasionally ships a little internal tool is still, for the purpose of this workshop, a non-technical business leader. The frame we are teaching is how a Personal Agentic OS amplifies a non-engineering operator.

---

## Who the Workshop Is Not For

There is also a readiness dimension to this that sits underneath the audience call. See [sustained commercial success](/docs/concepts/sustained-commercial-success) for the prerequisites (meta-awareness, humility, bottleneck self-awareness, strategic direction) that the workshop assumes a participant brings into the room. Without those, even the right audience does not get the full activation.

Beyond readiness, the most common non-fit is a familiar one.

Software engineers and developers.

Their default energy in this specific room is corrosive. Some of them do benefit personally from the content, and a room full of them reliably kills the activation dynamic for the non-technical cohort. That is the real constraint, and it is worth defending.

### The Specific Failure Mode

A developer who already uses AI assumes that what they are doing is "using AI correctly." They have read the docs, they have their IDE set up, they use Copilot or Cursor daily. From inside that frame, a Personal Agentic OS workshop looks like something they already know. That certainty leaks into the room as incurious energy, and incurious energy in a workshop of non-technical learners is lethal.

The non-technical participants are being asked to do something that looks hard to them and feels vulnerable. They need a room where everyone is learning together, where nobody is signaling that this is trivial. One confidently-bored engineer in the corner and the whole cohort's courage drops a notch.

### Why the Energy Call Is Real

- **Most non-technical people have never opened a terminal.** They do not know where it is. They will stare at a blinking cursor with the full emotional weight of "I am not a tech person" on their shoulders. Their room needs patience, enthusiasm, and zero condescension.
- **Most of them think a vendor desktop wrapper is what "advanced AI use" looks like.** It is not. See [learn the harness, not the wrapper](/docs/concepts/learn-the-harness-not-the-wrapper). The workshop is where that revelation lands, and the revelation requires room permission to be new at something.
- **The developer's "I already know AI" frame is often the thing that most needs updating.** Using ChatGPT as a glorified Google, or using Copilot inside an IDE, is a tiny slice of what a Personal Agentic OS actually does. That update happens in rooms where everyone is learning together. A room of confident engineers is the wrong shape for it.

### The Curation Move

When a developer asks to attend, have a direct conversation about what they would actually get from it. Many self-select out once they hear the frame. Some self-select in with the right humility, and those are welcome. A filter that fails open toward room-energy-hygiene is the right filter.

### Developers As a Separate Community

Developers still belong in the Applied AI Society ecosystem. Their highest contribution is upstream: refining the open-source curriculum, stress-testing the harnesses, building new skills, surfacing edge cases. They help us discover what is true about AI. They are closer to researchers and curriculum contributors than the main recipients of an activation workshop.

Route them to [hackathons](/docs/playbooks/chapter-leader/running-a-hackathon), practitioner guilds, or open-source contribution. The workshop is for the person who needs activation. The hackathon is for the person already operating.

---

## Pre-Workshop Readiness

The most-common avoidable failure mode is a participant who shows up with a machine that cannot install the tooling. Catching this 24 hours early is the difference between a smooth session and one where one or two people quietly fall behind and never recover. Send this checklist to every confirmed participant in the 24-to-48 hours before the workshop.

### Hardware minimums

- **Mac (recommended).** Any Apple Silicon MacBook (M1 or newer) from the last four years. 8GB RAM will work; 16GB is more comfortable for a day of Claude Code plus VS Code plus a browser plus a video call.
- **Windows.** A modern laptop from the last three to four years with at least 16GB RAM. Older machines will technically install the tools but will feel slow and will burn instructor time on timeouts and lag.
- **Linux.** Works but expect more edge cases around audio (voice-to-text) and terminal behavior. Plan for extra debugging time.
- **Intel Macs older than 2020.** Often viable but slow. Warn the participant that the session may feel heavy on their machine and that upgrading to Apple Silicon within the next year is worth it for the AI work they are about to do.
- **Chromebooks / iPads / phones.** Not viable for this workshop. They need an actual laptop running macOS, Windows, or Linux.

### Software readiness

- **OS up to date.** macOS and Windows both ship security updates that break Claude Code installs if the OS is more than a year behind. Tell participants to run the OS updater the day before.
- **Admin rights on the machine.** They need to be able to install software. Corporate-managed laptops with locked-down install policies will not work. If someone is unsure, they should try installing a small free app the day before as a test.
- **A recent version of Chrome or Arc.** Some install flows open a browser. Safari sometimes works, sometimes does not.
- **Zoom desktop app installed and signed in** (for remote sessions), with macOS Accessibility permission granted. See the Setup section above.

### Accounts ready

- **A GitHub account** (free). They should be able to log in before arrival.
- **Claude billing set up or credit on hand.** Claude Code requires a Claude account. A $20 Claude Pro subscription or a small API-credit top-up covers the workshop. Tell them to set this up the day before so they are not wrestling with billing while the rest of the room is building.
- **A laptop charger.** Four hours of Claude Code on Wi-Fi drains a battery.

### Environment

- **Stable Wi-Fi.** The workshop downloads tooling and talks to Anthropic's API continuously. A weak connection kills the experience.
- **A quiet-enough room they can hear themselves think.** They will be voice-dumping into Claude Code during the user-profile-interview segment. A crowded coffee shop is not a workshop venue.

### The day-of "am I ready?" check

Give participants a one-line test they can run the morning of the workshop: *"Open your terminal (Cmd+Space → type Terminal on Mac, or search Terminal on Windows). Type `node --version` and press Enter. If you see a number, you are ready. If you see command not found, flag it in the WhatsApp group when you arrive and we will fix it first thing."* That one-line filter catches most of the issues before the session opens.

If your Antler / co-working / venue host will be attending, send them the same checklist. One of the most awkward moments in a workshop is when your kind host is the one whose laptop will not install the tooling.

---

## Format

### Group Size

**8 people maximum.** You need to be able to help everyone individually when they get stuck. With more than 8, you will have people waiting too long for help and losing momentum. If you have more interest than seats, run multiple sessions.

### Setup

- **Big TV or monitor** at the front where you can screen share. Everyone should be huddled close enough to read code on the screen.
- **Your own laptop** connected to the TV, running your own Personal Agentic OS in Claude Code. You will be demoing live throughout.
- **A mix of in-person and online is fine.** Use a video call with screen share for remote participants. Have them unmute to ask questions.
- **For remote sessions, Zoom is strongly recommended** because of its remote control feature. It lets you take over a participant's screen for 10 seconds to click the right button or navigate the right menu, then hand it back. That single capability is the difference between a smooth online workshop and a frustrating one, especially with non-technical learners.
  - **Have participants prepare before the session.** The browser version of Zoom does not support being controlled. Each participant needs to:
    1. [Download and install the Zoom desktop app](https://zoom.us/download) (not the browser version) on the computer they will use during the workshop.
    2. On macOS, open **System Settings → Privacy & Security → Accessibility** and enable Zoom. macOS requires this for any app that controls the mouse and keyboard. Without it, Zoom's remote control silently does nothing.
    3. Sign in to the Zoom app before the workshop starts so there is no last-minute account friction.
  - **During the session**, the participant screen-shares and then you click **View Options → Request Remote Control** on your side. They see a prompt and click Approve. You can only control them while they are actively screen sharing, and they can revoke at any time by pressing Escape or stopping the share. Full flow: [Zoom support article on remote control](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0065790).
  - **One limitation:** you cannot copy-paste *onto* the participant's machine through remote control. Send snippets to paste via WhatsApp, Telegram, or the Zoom chat instead, and let them copy from there.

### Duration

**3.5 to 4 hours.** This is the baseline even with an experienced instructor. Do not try to compress it. People need time to install tools, get stuck, get unstuck, do the user profile interview, and create their strategic blocker plan.

A rough pacing guide:

| Block | Time | What Happens |
|-------|------|--------------|
| Intro and strategic thinking | 20 min | Why this matters. “You are the bottleneck.” Have people identify their top strategic blocker. |
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

### The Real-Time Wiki Demo (Required)

There is one specific form of live demo that should be a required segment: **create or update a real public wiki post in front of the room, from a real conversation happening in the room**. The canonical example: at the TIME100 NYC workshop (April 2026), the lead instructor used a personal Jarvis, mid-workshop, to create the entire Use Cases sidebar section and the Dealmaking use case page at [docs.appliedaisociety.org](https://docs.appliedaisociety.org), from the conversation that was happening with the attendees about their own dealmaking. By the end of the session, a new page existed on the live public site, shipped by the very system they were learning to set up.

This demo is load-bearing because it collapses the entire value proposition into a single visible artifact in under twenty minutes:

- **The system listens.** Transcript auto-captured through a voice-to-text tool.
- **The system thinks.** The skill file routes the raw transcript through the appropriate creation/update flow.
- **The system produces real artifacts.** A new markdown file. Sidebar updated. Cross-links added. Build passes.
- **The system ships.** Committed and pushed to GitHub, Vercel auto-deploys, the page is live.
- **The operator stayed strategic.** The human decided what the use case should be about. The human did not type a single thing during the ship. This is [strategy is the new execution](/docs/concepts/strategy-is-the-new-execution) made visceral.

You do not have to use the AAS public docs as the target. Any real output that lives in the world afterward works: updating your own company wiki, creating a real one-pager for a client, updating a README. The point is that the thing you ship during the workshop is not a toy; it is a real artifact with a URL you will actually use.

Prepare by wiring your own Jarvis with a skill that handles the create-or-update flow for whichever system you are shipping into. If you do not have that skill yet, build it before your next workshop. It is the single most leveraged piece of instructor infrastructure you can invest in.

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

1. **“You are the bottleneck.”** This is empowering, not critical. The tools are not the problem. Their strategic clarity is.
2. **Have everyone identify their top strategic blocker.** Give them 5-10 minutes of quiet thinking time. This becomes the input for Step 4B (the strategic plan), which is the payoff of the whole workshop.
3. **The chief of staff metaphor.** Tools, context, SOPs. This gives people a mental model for why they are installing all this stuff. **Make this interactive.** Ask the room directly: *"If you wanted to take a one-month vacation and have a human chief of staff run your business while you were gone, what would they need to know about you?"* Let two or three participants answer out loud. They will say things like *calendar, priorities, relationships, what I care about, how I write, my taste, the history of past decisions*. That list is exactly the list of files a Personal Agentic OS needs. You are not lecturing the answer; the room is discovering it. This is the cleanest on-ramp to [Externalize Your Brain](/docs/concepts/externalize-your-brain) and the single best warmup for the Step 4B user profile interview.

### Key Teaching Moments

Over enough sessions, a handful of analogies and framings consistently unlock the "oh, I get it" moment for non-technical participants. Keep these in your teaching toolbox and deploy them when you see eyes glaze.

**The mind, the body, and the harness.** When you need to explain what a harness (Claude Code, Hermes, Codex) actually is and why it matters, use this: *"Humans have a mind, whatever you want to call it. The body is the harness. A floating mind by itself is just a ghost. It cannot reach out and interact with anything. The body is what lets the mind drink water, pick up a pen, sit at a table with another person. Claude is the mind. Claude Code is the body. Claude Code is what makes Claude fly."* This lands for people who have never thought about why the wrapper around the model matters. It also explains in one image why vendor desktop apps that do not give you a real harness are a half-product.

**Markdown as open-standard DOCX.** For participants who are intimidated by "markdown files," tell them: *"Markdown files are basically docx files, except they are an open standard. Microsoft owns the docx format. Nobody owns markdown. The whole AI-native world adopted markdown because everyone can read it, everyone can write it, and no vendor can take it away."* Demystifies the format and smuggles in a lesson about sovereignty.

**Skill files as digital SOPs.** If they run a business, they already know what SOPs (standard operating procedures) are. Tell them: *"A skill file is a digital SOP. You already document how you close out the restaurant, how you onboard a client, how you run a weekly review. A skill file is the same thing, written to your agent instead of to a human. Same content, different reader."* Maps the new concept onto one they already trust.

**The slop factory warning.** Concrete, visceral, lands the "not every capability is worth using" point: *"Just because you can generate a random image of yourself on a horse does not mean you should. Applied AI is the daily discipline of wielding AI to serve yourself, the people around you, and the world you care about. Images of you on a horse are not serving anyone. That is a [slop factory](/docs/concepts/slop-factory)."*

### Canonical Vocabulary to Land

A mature workshop introduces specific AAS-canon terms and lets them start working inside participants' thinking during the session. The following three consistently earn their keep in a room of non-technical leaders and creative operators. Use them verbatim, link to the concept docs in your follow-up, and resist the urge to paraphrase them into something softer.

- **[Latent leverage](/docs/concepts/latent-leverage).** The gap between the relationships a participant has already built and the deals those relationships can already produce. Almost every serious operator in the room will recognize themselves in the definition. It reframes "I have built a lot of trust" into "I am sitting on an undeployed asset." The archetype to describe: the super-connector with more relationships in their field than almost anyone on the planet, all of it sitting in their head, waiting for a system that can search it.
- **[Angels in the attributes](/docs/concepts/angels-in-the-attributes).** The positive inversion of "the devil is in the details." Names the ungoogleable edge intelligence (what a counterparty actually wants under the public image) that determines whether deals land and relationships deepen. Lands the point that LLMs trained on the public web cannot touch this layer, only your own [PRM](/docs/concepts/prm) can.

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

1. **Explain what they are looking at** (2 min). “This is your workspace. These folders are your brain. The AI reads them. Let me show you.”
2. **Interview them about something they are actually puzzling over** (15-20 min). Not a generic profile. Ask them: “What is the thing you are trying to figure out right now that matters most for your business, your career, or your growth?” Then tell the agent to interview them about that. The student talks (voice-to-text). The agent asks hard follow-up questions, pushes for specificity, surfaces assumptions they did not know they were making. This is where the magic happens. They are [seeing their own thinking](/docs/concepts/see-your-own-thinking) reflected back to them by an intelligent system for the first time, on a problem they actually care about.
3. **Generate an actionable plan from the interview** (10 min). The agent takes everything from the conversation and produces a concrete plan for the thing they are puzzling over. The student reads it and realizes: “This thing just synthesized my situation better than I could have articulated it myself.” Paste it into a Google Doc (Edit > Paste from Markdown) and they walk away with a professional strategic document they can share with a partner, investor, or team member. Created in 30 minutes from a conversation.
4. **Show them the daily workflow** (5 min). Open the terminal, brain dump something, show how the agent routes it to the right file. “This is what you do every day. Talk, let it route, review.”

**After the session:**

They now have a working system with their actual data in it. The installation barrier is gone. The aha moment happened. From here, they build the habit on their own. You check in a week later to see if they are doing daily brain dumps.

### Why This Works

[Ramp learned the same lesson](/docs/case-studies/ramp-glass): “The people who got the most value were not the ones who attended training sessions. They were the ones who installed a skill on day one and immediately got a result.” The speed run is the same insight applied to one-on-one onboarding. Remove every barrier between the person and their first real result. The product teaches faster than any explanation.

The full workshop is still the right format for group sessions where people need to learn the stack. The speed run is for when you have someone's laptop in front of you and 45 minutes to change how they think about AI forever.

---

## Lessons Learned (From Real Sessions)

*This section is updated after each workshop. Dates indicate when the lesson was added.*

### March 30, 2026: First Workshop (Austin, TX)

**Participants need reassurance that the tools are safe and free.** One participant pasted the entire tutorial into Claude and asked “Is this all safe to install? What does each tool cost?” before downloading anything. This is smart behavior. Encourage it. The cost/safety table at the top of the tutorial was added because of this feedback.

**Voice-to-text is a revelation for non-technical people.** Install it first (Step 1A) so they can use it for the rest of the workshop. WhisperFlow's auto-reformatting is a crowd-pleaser.

**The clauded alias is confusing if you do not explain the tradeoff clearly.** People hear “dangerously” and get nervous. Explain it as: “Claude is being overly polite by asking permission for everything. This flag tells it to just do its job. You can always switch back.”

**Old computers are a real issue.** One participant had a 10-year-old laptop. Everything took longer. Be honest about this upfront rather than letting them feel like they are doing something wrong.

**Windows users need extra help.** PowerShell can throw unexpected permission errors. Be prepared to debug these live. You cannot document every possible Windows edge case.

**Iterate the tutorial in real time.** Update the public docs during the workshop based on feedback. This is the meta-demo: you are using your Personal Agentic OS to improve the material in front of the participants. They see the system in action.

**One participant canceled ChatGPT during the workshop.** The vendor lock-in framing (your files are yours, you can walk away any time) resonated strongly. People care about sovereignty once you frame it clearly.

**The “ask Claude to guess” moment is powerful.** During the user profile interview, when someone does not know the answer to a question, telling them to ask Claude “what do you think, based on what you already know about me?” produces genuine insight. The agent reflects their own thinking back to them in a way they did not expect.

### March 31, 2026: Remote 1-on-1 Session with a Non-Technical Participant

*Lessons from a session with someone who had never used a terminal and primarily uses a computer for basic office tasks. Conducted entirely over Zoom.*

**Start with Cursor, not the terminal.** For someone who has never opened a terminal, jumping straight into Claude Code is too much. Start with [Cursor](https://cursor.com) instead: it is free for the first few prompts, has a visual file tree, and has a built-in AI chat. The familiar interface builds confidence. Once they grasp that they are talking to AI and it is modifying files, transitioning to the terminal is a much smaller leap.

**Guide every click, then step back.** In the beginning, narrate everything: “Click this folder. Now type this command. See that output? That means it worked.” Do not assume anything is obvious. This phase feels slow, but it is the foundation. The goal is to reach the moment they understand they are supposed to talk to the agent, not to you. Once that clicks, they start asking the agent instead of asking you. You are no longer the teacher. The agent is. You are just there to make sure they do not get lost.

**Three demo exercises that work.** Before diving into the full Personal Agentic OS setup (user profile, strategic blocker, etc.), run three quick practical demos to build confidence and show what is possible:

1. **An email.** Ask the agent to draft a professional email for something real in their life. The simplest demo, the most immediately practical. They see it produce something they would actually use, in seconds.
2. **A report.** Ask the agent to create a formatted document: a summary, an analysis, meeting notes. Shows it can handle structure, not just short messages.
3. **A website.** Ask the agent to create a simple webpage and open it in the browser. The biggest “wow” moment. For someone who thinks websites require a professional developer and hundreds of dollars, watching the agent build one in 60 seconds is paradigm-shifting.

**Use problems as teaching moments.** Consider intentionally setting up a demo that you know will hit a missing dependency. When something breaks, the workflow is: encounter the error, paste it into the agent, ask it to explain and fix it. The real skill you are teaching is not “how to build a website” but “when something breaks, talk to the agent.” That is the inflection point.

**Zoom remote control makes online sessions dramatically easier.** When a participant cannot find the right button or navigate a menu, taking control of their screen for 10 seconds is faster and clearer than any verbal instruction. Strongly recommended for remote sessions with non-technical participants. See the Setup section above for the copy-paste workaround.

**The real metric is whether they grasped the method.** The demos are means, not ends. Success is when the participant understands the loop: prototype idea, encounter a problem, ask the agent, follow the steps, iterate.

### April 23, 2026: TIME100 NYC Afternoon Session (Antler VC, Flatiron)

*A three-hour afternoon session at Antler VC in Flatiron, led by an AAS instructor, with a small group of non-technical leaders met or referred through the TIME100 Summit. Most lessons from this session are already absorbed into the playbook above. These are the remaining ones worth naming.*

**The live wiki demo can be created from a real participant conversation.** Mid-workshop, the instructor used their Jarvis to create an entire new Use Cases section of the AAS public docs based on the dealmaking conversation that was happening in the room. The artifact existed on the live site by the end of the session. This is the most powerful single demo the workshop has produced and should now be a required segment. See "The Real-Time Wiki Demo" above.

**New canon can emerge live.** Two AAS-canonical terms crystallized during this session (latent leverage and angels in the attributes) and have since been promoted to their own concept pages. When a participant's situation surfaces a framing that feels load-bearing, capture it in the moment and commit to writing it up after. The workshop is a vocabulary-forging venue, not just a transmission one.

**One participant drove the strongest proof point of the day.** A music artist in the room had been gaslit by his label and suspected streaming-platform piracy. Within an hour of building his first Jarvis, he ran a metadata audit on his own streams and found seven pirates attributing millions of plays to his name. The recovered context produced immediate commercial leverage he could hand to his legal team. Proof points at this caliber cannot be scripted, but they can be invited: make sure at least one participant is ready to bring a real live blocker to the session.

**The hardware checklist would have saved the host.** The Antler host who graciously gave us the room ended up being one of the participants whose machine had install issues. The pre-workshop readiness checklist (added above this section) is directly a response to this.

**Schedule Part 2 before people leave.** Multiple participants asked for follow-up time as they were packing up. A scheduled weekend co-working Zoom was committed to on the spot. The commitment has now been promoted to a standard workshop practice. See "Schedule a Part 2 follow-up Zoom" above.

## Testimonials

, real estate entrepreneur, recorded immediately after the March 31 2026 workshop:

<iframe width="315" height="560" src="https://www.youtube.com/embed/gFJIVm-wvhc" title=" Workshop Testimonial" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

March 31 2026 workshop participant:

<iframe width="315" height="560" src="https://www.youtube.com/embed/4K0K6_wiOus" title="Workshop Testimonial" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

---

## Build a Cohort Community Every Time You Run This

A workshop is the birth of a micro-community. The people in the room just spent four hours getting Jarvised together. They now share a vocabulary, a mental model, a set of recent screen-shares, and (if you do your job) real questions they want to keep answering together. Treat that as the asset it is.

### Spin up a WhatsApp group for every cohort

For each workshop or cohort, create a dedicated WhatsApp group and invite every participant before the build phase begins. The group is the persistent layer that turns "people who came to a workshop" into "a community that keeps upskilling together."

**Why WhatsApp specifically:**

- **It is deliberately hard to automate.** WhatsApp does not have a general-purpose public API the way Slack, Discord, or Telegram do. That is a feature. It keeps the group human. No bots, no scraping, no aggregation tools sucking up your cohort's conversations for training data. For a community built on sovereignty and real relationships, this is the right default.
- **It is already on everyone's phone.** Zero-friction install. Notifications that are actually read.
- **It is intimate by design.** Group sizes stay small enough that conversations have signal. Everyone sees every message.

**When to introduce it:**

Put a **QR code for the WhatsApp group invite on a slide in every workshop deck you ever run**, between the agenda slide and the "Let's build" slide. Have participants scan it right before the hands-on work begins, so the group is on their phone throughout the build. This is the moment they will have the most questions, and this is the cohort they want to be asking those questions in.

**What to put in the group:**

- Short welcome and norms ("ask anything, share wins, drop interesting links, this room is a safe space for applied-AI field notes").
- A pinned link back to the [Supersuit Up Workshop](/docs/workshops/supersuit-up) tutorial.
- Periodic check-ins from you as the trainer over the following weeks: a prompt a week, a useful skill file, an open question about what people have built since.

**After the workshop:**

Post the WhatsApp link one more time in whatever channel invited people (Luma, email, Discord). Anyone who missed it during the live session should have a way in. The cohort should stay active for at least a few weeks while the system is compounding for each person.

### Schedule a "Part 2" follow-up Zoom before the room clears

Activating a Jarvis in a single session is the start of a relationship, not the end of one. Every workshop we run produces a handful of participants who need a second touchpoint: install edge cases that did not surface until they got home, a strategic blocker conversation that got started but was not finished, a specific use case they want to build but could not within the session's time budget. **Make the follow-up session a standard commitment, not an ad-hoc request.**

The pattern that works:

- **Name the Part 2 before participants leave the room.** On a closing slide or in the WhatsApp group, announce the date and time of the follow-up Zoom co-working session the same way you announced the workshop. One week out is usually right. Two hours is enough. The session is open to the cohort and nobody else.
- **Frame it as co-working, not a class.** Participants come with their own laptop open, their own blocker in hand, and the instructor (plus anyone else from the cohort willing to help) debugs and builds alongside them. No curriculum. No slides. Just operators in a room working on their real thing with a trainer available.
- **Offer a single 1:1 slot for anyone who still needs it.** Some participants need a focused thirty minutes with the instructor to cross a specific hurdle. Give everyone a calendar link that offers one 30-minute slot within the week after the workshop. Most will not use it. The ones who do are exactly the ones who get the most out of the program.
- **Repeat monthly for cohort alumni.** Once you have run a few workshops, roll the Part 2s into a standing monthly co-working session for all alumni. This is where the cohort-level community becomes a genuine ongoing practice community, and where graduating a chapter becomes the natural next move. See [starting a chapter](/docs/playbooks/chapter-leader/starting-a-chapter).

The commitment has a secondary effect: it changes how you run the live workshop. Knowing there is a Part 2 gives you permission to not finish everything in the room. Participants know they will get another touchpoint. You can teach for depth on the key activation moments rather than racing through every single feature. The workshop becomes the first of two sessions, not the only one.

### This is the pattern, not the exception

Every cohort gets its own group. The group is the mechanism by which one workshop turns into an ongoing micro-community of applied-AI practitioners in your city, your company, or your network, rather than overhead to be minimized. Over time, several cohorts may want to merge into a single running group or graduate to a [local chapter](/docs/playbooks/chapter-leader/starting-a-chapter). That is exactly how scenes grow.

---

## Running Your Own Workshop

If you want to run a Personal Agentic OS workshop in your community, here is the minimum you need:

1. **Complete the [Supersuit Up Workshop](/docs/workshops/supersuit-up) tutorial yourself first.** You need to have a working system with at least a few weeks of usage to demo credibly.
2. **A space with a big screen** and seating for up to 8 people.
3. **A video call link** for remote participants (optional but recommended).
4. **3.5 to 4 hours** of uninterrupted time.
5. **Familiarity with both Mac and Windows** terminal basics so you can debug installation issues.
6. **A fresh WhatsApp group** with an invite QR code on a slide, ready to go before the build phase. (See "Build a Cohort Community" above.)
7. **A remote-control workflow you can walk participants through on the fly.** For remote sessions, being able to briefly take control of a participant's screen is the difference between unstuck-in-a-minute and stuck-for-an-hour. See [Remote Control for Coaching](/docs/tools/remote-control) for the shortlist (Zoom, Google Meet + Chrome Remote Desktop, Tuple, RustDesk) and the safety checklist for both sides.

You do not need to be an engineer. You need to be someone who has done this and can help others through the rough spots.

If you run a workshop, share what you learned. Update this playbook by contributing to the [Applied AI Society](https://docs.appliedaisociety.org) or dropping your notes in the [Discord](https://discord.gg/K7uWJBMFaN).

---

## Further Reading

- [Supersuit Up Workshop](/docs/workshops/supersuit-up): The tutorial you are teaching
- [Starter Repo](https://github.com/Applied-AI-Society/minimum-viable-jarvis): The forkable workspace participants clone
- [Agentic OS Trainer](/docs/roles/agentic-os-trainer): The role description and progression framework
- [Personal Agentic OS](/docs/concepts/personal-agentic-os): The concept you are teaching
- [Harness Engineering](/docs/concepts/harness-engineering): Why Claude Code is a harness, not the only option
- [The Question Bank](/docs/concepts/sovereign-agentic-business-os/question-bank): High-leverage questions for deeper user profile interviews
- [Game Design](/docs/concepts/game-design): The framing for how humans define objectives for their agents
- [Applied AI Live](/docs/playbooks/chapter-leader/applied-ai-live): How to run Applied AI events (the workshop fits as a format)
- [Remote Control for Coaching](/docs/tools/remote-control): How trainer and participant set up their machines so remote help actually works
