---
sidebar_label: "The Personal Agentic OS Workshop"
title: "The Personal Agentic OS Workshop"
description: "A step-by-step guide to building your Personal Agentic OS for legacy, strategic clarity, and compounding context."
---

# The Personal Agentic OS Workshop

*A step-by-step guide to setting up the simplest system that gives you AI-augmented recall, strategic clarity, and compounding context. Some people affectionately call this the "Minimum Viable Jarvis" (a nod to Tony Stark's AI). Whatever you call it, by the end of this guide you will have your own Personal Agentic OS, whose utility you can then compound daily.*

**Time estimate:** 3.5 to 4 hours to complete everything in this guide, even with some prior technical experience. If you are completely new to the terminal and have never installed developer tools before, expect the upper end.

**The value of an instructor:** This guide is designed to be self-paced, but having someone experienced walk you through it in person makes a significant difference. Every machine is slightly different. You will hit edge cases (a Windows PowerShell permission error, an old Python version conflict, a corporate firewall blocking a download) that are too niche to document here but take 30 seconds for an experienced person to debug. An instructor gets you across the finish line instead of stuck at Step 1B for an hour. If you have access to an [Applied AI Society](https://docs.appliedaisociety.org) workshop or know someone who has done this before, take advantage of that. If not, this guide plus Hermes itself (which can help you debug installation issues) will get you there.

---

## Why This Matters

You have a dozen inboxes. Discord, Telegram, iMessage, email, Slack, LinkedIn, X, Instagram, phone calls, in-person conversations. Right now, you probably have 50 open threads across 12 platforms. No human brain can track all of that. And the honest truth is: you're dropping balls. We all are.

The thing nobody tells you about leveling up as a professional or leader is that the job changes underneath you. At a certain point, the most important work is no longer doing the work. It's defining reality, setting objectives, and evaluating whether the system is working. You shift from working *in* the business to working *on* the business. Meta work becomes the work. This shift from execution to design is what we call [game design](/docs/concepts/game-design): the discipline of defining objectives, rules, guardrails, and scoring for the AI agents in your system.

Here is the uncomfortable truth: **you are the bottleneck.** Not the tools. Not the AI. You. The quality of your strategic thinking, the clarity of your communication, and your willingness to document what you actually know are the limiting factors. That is not a criticism. It is empowering. Because if you are the bottleneck, you are also the one who can unblock everything. And AI can help you see your own thinking more clearly, pressure-test your strategy, and refine your plans in ways that used to require an expensive advisor or a very patient co-founder.

Meta thinking is the new thinking. The highest-leverage skill you can develop right now is not execution. It is the ability to design your business as a system: the objectives, the rules, the guardrails, the scoring. Execution is increasingly commoditized. Your ability to define what should be executed is not.

Here's the key insight behind everything that follows: **the truth in your head is not the truth.** Not operationally. Not for AI. Not for your team. The truth that matters is the truth that exists in documents that AI can read and act on. If it's only in your head, it might as well not exist. It's unsearchable. Your brain has no search bar, no version history, and no way for an AI to read it.

Your [Sovereign Agentic Business OS](/docs/sovereign-agentic-business-os) is the persistent memory your AI draws on. The MVP Personal Agentic OS is the simplest possible version of that business OS. Not the end state. The starting point.

For the full philosophy behind why documented truth matters, see [Legacy](/docs/legacy) and [Why It Matters](/docs/legacy/why-it-matters). This playbook is the practical "how to start" companion to those ideas.

---

## Phase 1: Install Your Tools

Most of what you need is free or cheap. The entire stack can be running in under 30 minutes.

**Before you start:** if you are unfamiliar with any of these tools and want to verify they are safe and legitimate, that is smart. You can paste the link to this tutorial into any AI chat (ChatGPT, Claude, Gemini) and ask: "Is this all safe to install? What does each tool cost? What are the advantages?" It will walk you through every tool listed here. Spoiler: almost everything is free and open source. The one potential cost is LLM API usage, which depends on your provider and how much you use it.

Here is the cost breakdown upfront:

| Tool | Cost | Notes |
|------|------|-------|
| [Hermes Agent](https://hermes-agent.nousresearch.com) | Free, open source | Installed via one-line installer. Handles all dependencies automatically. |
| [OpenRouter](https://openrouter.ai) | Free tier available | High-powered models on a free tier — Qwen 3.6 Plus, Gemma, and more. No credit card required. Paid models like Claude (~$200/mo) are optional. |
| [VS Code](https://code.visualstudio.com) | Free, open source | Made by Microsoft |
| [Git](https://git-scm.com) | Free, open source | Version control |
| [GitHub](https://github.com) | Free | Paid tiers exist but you do not need them |
| [Superwhisper](https://superwhisper.com) | Free tier available | Voice-to-text, fully local |
| [Wispr Flow](https://wisprflow.ai) | ~$10/mo | Voice-to-text, cloud-based |
| [Granola](https://granola.ai) | Free tier available | Meeting transcription (optional) |

### Step 1A: Voice-to-Text

The bottleneck between thought and text must be removed. This is not just about speed (though speaking is 3 to 5x faster than typing). It is about flow states.

When you are typing, part of your brain is thinking about typing. You are compressing what you would otherwise say because the friction of getting it out is too high. You edit yourself mid-thought. You lose threads. You stay in the analytical, word-by-word part of your brain instead of the big-picture, strategic part.

When you speak, you stay in flow. Your brain operates at its best capacity. Ideas connect to other ideas. Two hours fly by and you realize you just produced a massive amount of high-quality thinking. That is the state you want to be in when you are working with your Personal Agentic OS.

Two solid options:

- **[Superwhisper](https://superwhisper.com/)**: Fully local, privacy-focused. Your audio never leaves your machine. Great if sovereignty matters to you (and it should).
- **[Wispr Flow](https://wisprflow.ai)** (~$10/mo): System-wide dictation that works across any application. Slightly more polished UX. One great feature: it auto-reformats what you say. If you stumble, say "oh wait," or restart a sentence, it cleans all of that up. It adds line breaks and structure to your raw speech. The output is surprisingly clean.

Either works. You hold a key, you talk, you release, and the text appears wherever your cursor is. It works with every application that has a text input: your terminal, a browser, Slack, email, a Google Doc, anything. Wherever your mouse clicks into a text box, that is where the transcription goes. Wispr Flow also keeps a history of everything you have dictated, so you can go back and copy-paste a previous dictation into a different app if needed. Once you install it and start using it, it works everywhere. Even whispering works, which matters if you are in a co-working space or a meeting. The point is that you can speak naturally and get text. For more on the role of voice transcription in legacy, see [Voice Transcriber](/docs/legacy/voice-transcriber).

### Step 1B: Choose and Install Your Harness

Your terminal-based AI agent is the engine of your Personal Agentic OS. Important distinction: the harness on its own is not the system. Your Personal Agentic OS is the combination of your file structure, your documented context, and how you use the harness to operate on all of it. Your files are yours. You could switch to a different tool tomorrow and keep everything.

**Why not just use ChatGPT, Gemini, or any other chatbot?** The big AI platforms want you locked into their ecosystem. Your conversation history lives on their servers. Your context resets every session or is trapped behind their interface. You cannot export it, version-control it, or run a different AI on top of it.

The Personal Agentic OS approach is the opposite. Your files live on your computer. They are plain markdown. Any AI tool can read them. You are not a user of someone else's platform. You are the operator of your own system.

**This tutorial is not an ad for any AI company.** When choosing your harness, find the one that maximizes a good balance of **utility, cost, and sovereignty**. We have dedicated setup guides for the three most popular options:

| Harness | Cost | Best For | Setup Guide |
|---------|------|----------|-------------|
| **Hermes** | Free (open source models) | Zero-cost setup, always-on agents, cron jobs | [Hermes Setup](/docs/playbooks/practitioner/hermes-setup) |
| **Claude Code** | $100-200/mo (Anthropic) | Deep context, strong reasoning | [Claude Code Setup](/docs/playbooks/practitioner/claude-code-setup) |
| **OpenAI Codex** | Free with ChatGPT Plus/Pro | If you already pay for ChatGPT | [Codex Setup](/docs/playbooks/practitioner/codex-setup) |

Other harnesses work too: [OpenCode](https://github.com/opencode-ai/opencode), Cursor, and more. They all read files and run commands. The overall usage patterns (brain dumps, user profiles, skill files, relationship files) work with any harness that can read your workspace. Check the [AI Dev Tool Power Rankings](https://blog.logrocket.com/ai-dev-tool-power-rankings/) or [Best AI Coding Agents comparison](https://www.faros.ai/blog/best-ai-coding-agents-2026) for current rankings.

The competitive pressure between American companies, Chinese labs, and the open source community is driving quality up and cost down at a pace that benefits you. Today's default might be one tool. Tomorrow it might be something else. Your files do not care. That is what sovereignty means in this context. For a deeper dive, see [Sovereign Agentic Business OS](/docs/sovereign-agentic-business-os) and [The Lock-In Is Coming](/docs/concepts/the-lock-in-is-coming).

**The rest of this tutorial uses Hermes as the default** because it is free and open source. If you chose Claude Code or Codex, follow your setup guide above and then rejoin this tutorial at Step 1C. The workspace setup and daily usage are identical across harnesses.

**Install Hermes:**

```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```

The installer handles everything automatically: Python, Node.js, ripgrep, ffmpeg, the repo clone, virtual environment, and the global `hermes` command. After installation, reload your shell:

```bash
source ~/.zshrc  # or source ~/.bashrc
```

Then configure your model:

```bash
hermes model
```

Select OpenRouter as your provider and enter your API key (free tier, no credit card). You can also use Anthropic, OpenAI, or any other provider — but OpenRouter gives you Qwen 3.6 Plus and other capable models for free.

**First launch:** Type `hermes` in your terminal. If this is your first time, Hermes will walk you through its setup flow. Follow the prompts to authenticate and pick your preferences.

:::tip[Optional: YOLO mode]
By default, Hermes asks permission before doing anything potentially dangerous. If you find approval prompts annoying, run `hermes --yolo` to bypass them, or type `/yolo` inside a session to toggle it on and off. Entirely optional.
:::

---

## Why Hermes Is Different

Hermes is not just another AI coding agent. It is **Claude Code and OpenClaw in one tool**:

- **AI coding agent** — reads files, writes files, runs commands, operates inside your workspace
- **Always-on agent** — runs cron jobs, manages messaging platforms, maintains persistent memory
- **Works when your terminal session is gone** — the gateway keeps running, cron jobs fire, messages get delivered. The agent grows the longer it runs.

[Nous Research](https://nousresearch.com) is an AI research company known for the Hermes model family. They build frontier open source AI models, and now they build full agent infrastructure. Hermes Agent is their answer to closed, platform-locked AI systems.

For context: before switching to Hermes, the Applied AI Society ran on OpenClaw + Claude at ~$200/mo in API costs. Cron jobs were timing out. Four out of six active jobs were failing. The agent was broken and costing money for it to break. After migrating to Hermes + Qwen 3.6 via OpenRouter's free tier, the monthly inference cost dropped to zero — with better reliability, same capabilities, and the full skill architecture preserved.

That is what Hermes makes possible: an agent system with zero marginal cost per message. Run the heartbeat. Run the triage. Run the morning briefing with deeper context. The economic friction is gone. You stop optimizing for API cost and start optimizing for capability.

---

## Phase 2: Set Up Your Personal Agentic OS Workspace

### Step 2A: VS Code

Visual Studio Code is your window into the file system. Download it for free from [https://code.visualstudio.com](https://code.visualstudio.com).

**If you have never used a terminal before:** the terminal is the text-based interface to your computer. When you see windows and icons on your screen, that is a graphical layer on top of what is really happening, which is your computer sitting in a folder, ready to execute actions. The terminal gives you direct access to that. You don't need to be fluent. You just need to be willing to open it. You will open the terminal inside VS Code in Step 2C.

### Step 2B: Git and GitHub

**What is the difference between Git and GitHub?** Git is a tool that runs on your computer. It tracks changes to your files over time, like an infinite undo history that also records *what* changed, *when*, and *why*. GitHub is a website (github.com) where you can store a copy of your Git-tracked files in the cloud, so they are backed up and accessible from anywhere. Think of Git as the engine and GitHub as the garage where you park your car. You need Git. GitHub is strongly recommended but technically optional. For a deeper explanation, [GitHub's own guide](https://docs.github.com/en/get-started/start-your-journey/about-github-and-git) is excellent.

**Installing Git:**

- **macOS:** Git often comes pre-installed. Open your terminal and type `git --version`. If it prints a version number, you are good. If not, install it from [https://git-scm.com/downloads/mac](https://git-scm.com/downloads/mac) or via Homebrew: `brew install git`.
- **Windows:** Download the installer from [https://git-scm.com/downloads/win](https://git-scm.com/downloads/win). Run it and accept the defaults.

**Setting up GitHub:**

1. Create a free account at [https://github.com](https://github.com) if you do not have one.
2. Install the GitHub CLI so you can interact with GitHub from your terminal. On **macOS**: `brew install gh` (if you have Homebrew) or download from [https://cli.github.com](https://cli.github.com). On **Windows**: download the installer from [https://cli.github.com](https://cli.github.com).
3. Log in by typing `gh auth login` in your terminal and following the prompts.

### Step 2C: Clone and Open Your Workspace

We have created a starter repo with the default folder structure for your Personal Agentic OS. You are going to use Hermes to clone it to your computer. This is a good first rep of telling Hermes to do something for you.

**Use Hermes to clone and personalize the repo:**

1. Open any terminal on your computer (you do not need to be in any particular folder).
2. Type `hermes` to start a Hermes session.
3. Tell it something like:

> "Clone the repo at github.com/Applied-AI-Society/minimum-viable-jarvis into a folder that makes sense on my computer for storing projects. If I don't have a folder for that yet, create one. After cloning, ask me what I want to name my workspace and what my name is, then rename the folder and update all the files (AGENTS.md, README, etc.) to reflect my name and workspace name."

Hermes will figure out the right location for your operating system. On Mac, it might put it in `~/Documents/github-repos/` or `~/Projects/`. On Windows, it might use `C:\Users\YourName\Documents\`. Then it will ask you two quick questions:

- **What do you want to call your workspace?** Pick something that feels like yours. Your name, your company name, a codename. Examples: `sarah-command-center`, `apex-os`, `my-jarvis`. This becomes the folder name and shows up in your file tree every day, so make it something you like.
- **What is your name?** So it can personalize the AGENTS.md and any starter files with your identity.

Hermes will rename the folder, update the internal files, and personalize the workspace so it feels like yours from the first moment. This is your system, not a generic template.

4. Once the clone and personalization is done, note the folder path that Hermes tells you it cloned into. You will need this in a moment.
5. Type `/exit` to quit the Hermes session.

**Open the workspace in VS Code:**

1. Open VS Code.
2. Go to File > Open Folder (or `Ctrl+K Ctrl+O` on Windows, `Cmd+O` on Mac).
3. Navigate to the folder that Hermes just cloned and select it.
4. Now open the terminal inside VS Code. This is important: you want the terminal to be scoped to your workspace folder.
   - **Mac:** Terminal > New Terminal from the menu bar, or press `` Ctrl+` ``
   - **Windows:** Terminal > New Terminal from the menu bar, or press `` Ctrl+` ``
5. In the VS Code terminal, type `hermes`. Hermes is now running inside your workspace and can see all the starter files.

You are now in the cockpit. The left panel shows your file tree. The bottom panel is Hermes in your terminal. The right panel is for viewing whatever file you are working on.

**If you do not have Git installed or prefer to start from scratch**, you can skip the clone and tell Hermes to create the folders for you instead. Start a Hermes session and say:

> "Create a folder for my Personal Agentic OS in a good location on my computer. Ask me what I want to name it and what my name is. Set up subfolders for user, people, artifacts, meeting-transcripts, and skills. Create an AGENTS.md file personalized with my name that instructs you on how to operate as my chief of staff."

The starter repo comes with five folders. Together, these form your [context lake](/docs/concepts/context-lake): the persistent memory layer that makes your Personal Agentic OS genuinely useful.

- **user/** for your profile, voice, and anything that helps your Personal Agentic OS understand who you are
- **people/** for relationship files (one per person)
- **artifacts/** for strategic documents, decision records, status updates, and plans
- **meeting-transcripts/** for raw or processed transcripts from conversations
- **skills/** for SOPs that define repeatable tasks for your AI agent

It also includes an `AGENTS.md` file that gives Hermes instructions on how to operate within your workspace (this is what makes Hermes understand the structure of your business OS from the first session), and a skill file that will interview you on your first session to create your `user/USER.md` profile.

### Step 2D: Meeting Transcription (Optional)

Tools like [Granola](https://granola.ai/) run in the background during meetings and give you a transcript afterward. This becomes raw material for your business OS. Not every meeting needs to be transcribed, but the important ones should be captured so you can extract insights and commitments later.

---

## Phase 3: Understand What Makes This Work

### Step 3A: The Chief of Staff Mental Model

Think of your AI agent as a chief of staff. What does a chief of staff need to be genuinely helpful?

**Tools.** When your chief of staff can swipe your credit card, that is like giving your agent a tool. When they can access your calendar, that is a tool. Without tools, your agent is just a conversationalist. With tools, it can actually get things done: send emails, schedule meetings, look things up, run scripts.

**Context about you.** Your goals. Your decision-making style. Your risk tolerance. Your priorities. Your relationships and who matters in your network. The more your agent knows about the most important things in your life and business, the more it can act on your behalf without you having to correct it constantly. Without this context, you are just screaming into the void.

**Standard operating procedures.** Humans have SOPs. Agents have skill files: markdown documents that clearly describe exactly what the agent should do for a given task. Step by step, in plain English, often mixed with specific commands or scripts to run. You can co-write these with the agent (it knows how to talk to itself). Over time, your library of skill files turns your agent from a general-purpose assistant into a specialist that knows your operation.

**A real example:** The [Applied AI Society](https://docs.appliedaisociety.org) is, as of March 2026, operated by one person. One. That one person runs events, writes newsletters, manages partnerships, creates strategic documents, drafts social media posts across platforms, processes meeting transcripts, maintains a CRM of hundreds of relationships, and publishes documentation. The way this is possible is a Personal Agentic OS with deep context.

For example, there is a skill file called `aas-social-post` that drafts social media posts for X and LinkedIn. When it runs, it does not produce generic AI content. It has access to every past post, every brand guideline, every event recap, every strategy document, and every relationship file in the system. So it knows what the organization sounds like, what has already been posted, what is being promoted right now, and who to reference. The output sounds like it was written by the person running the org, because the agent has enough context to actually represent them. That is the difference between a chatbot and a Personal Agentic OS. Context compounds. One person plus a deeply contextualized AI chief of staff can do what used to require a team.

The MVP Personal Agentic OS is about building your [context lake](/docs/concepts/context-lake): the structured collection of markdown files that contains everything your AI needs to know about you, your operation, and your world. Getting the truth about your relationships, your thinking, and your decisions into files that AI can read is the foundation. The tools and skill files come later as you grow the system.

### Step 3B: A Note on Security

As you connect more tools to your agent (email, calendar, file systems, payment processors), the surface area for things going wrong increases. This is worth being thoughtful about.

The principle is simple: **human in the loop for anything consequential.** Your agent can draft every email, but a human reviews before sending. It can prepare financial reports, but a human approves before money moves. It can suggest meeting responses, but a human confirms before commitments are made.

The risk is not that AI is malicious. The risk is that it is confidently wrong, or that someone finds a way to inject instructions into content your agent processes (a technique called prompt injection). If your agent is reading emails and acting on them without oversight, a carefully crafted email could theoretically trick it into doing something you did not intend.

Start with read-only connections and work your way up. Connect your calendar so the agent can see your schedule before you give it permission to modify it. Let it read your email before you let it send on your behalf. Build trust incrementally, the same way you would with a new hire. The MVP as described in this guide is inherently safe: it is just files on your computer. The security considerations become more important as you expand into connected tools and automated workflows.

---

## Phase 4: Build Your First Personal Agentic OS

This is what a first session looks like. Five exercises, about an hour total. By the end, you will have a working business OS with real data in it, a clear picture of your top strategic blocker, and an actionable plan for getting unblocked.

### Step 4A: "Who Am I?" (15 minutes)

This is the most important first step. Before your Personal Agentic OS can help you with anything, it needs to know who you are. Think about it like briefing a new chief of staff. If you were hiring the best possible team partner, someone with full access to your life who could execute on everything you are doing, what would you want them to know?

**The recommended approach: brief your AI directly.** If you already have documents that capture who you are (a bio, a personal website, a LinkedIn profile, previous strategic docs, a blog, a wiki, anything), drop them into the `user/` folder or paste them into the terminal and tell your AI:

> "Here is everything about me. Read all of it and create a USER.md that captures who I am, what I care about, how I make decisions, and what I am working on right now."

This is faster and richer than any interview because the truth is already documented. Your AI reads it, synthesizes it, and creates a comprehensive profile in minutes. You review, correct, and approve. Done.

The more context you give upfront, the less your AI has to guess. If you have been [wikimaxxing](https://garysheng.com/wiki/wikimaxxing), writing strategic docs, or documenting your thinking anywhere, bring all of it in. Your AI should know you the way a chief of staff who has worked with you for years would know you.

**The backup approach: the interview.** If you do not have existing documents to draw from, the starter repo includes a skill file that will guide your AI through an interview with you.

Tell your AI:

> "Read the skill file at skills/create-user-profile.md and run it."

It will interview you one question at a time. It will ask about who you are, what you care about, how you make decisions, the current state of your operation, and your biggest strategic blocker. Use voice-to-text. Speak naturally. Do not overthink your answers.

Either way, at the end your AI will save a `user/USER.md` file that captures everything. This file is the foundation of your Personal Agentic OS. Every future conversation will be informed by it.

If you get stuck on a question and do not know the answer, just ask your AI: "Based on what you already know about me, what do you think?" It will offer its best guess, and you confirm or correct. This often surfaces insights you would not have articulated on your own.

**The moment:** Your Personal Agentic OS now knows who you are. Not the LinkedIn version. The real version. Your goals, your values, your decision-making style, and the thing that is actually blocking you right now. This alone makes every future interaction 10x more useful.

The `user/` folder is not limited to `USER.md`. You can add any file that helps your Personal Agentic OS understand you better. For example, a `user/voice-profile.md` that captures your writing style, your tone, how you handle conflict, how you communicate with different audiences. That way, anything your system writes on your behalf actually sounds like you. The principle is: the whole folder is about the agent getting to know who you are. Customize it to whatever matters for your situation.

### Step 4B: "What's My Plan?" (15 minutes)

At the end of the user profile interview, Hermes will ask if you want to think through your strategic blocker. Say yes.

This is the payoff. Hermes now has deep context on who you are, what you are working on, and what is in the way. It will help you break your blocker into actionable steps and save the result as a strategic plan in `artifacts/`.

If you skipped this during the interview, you can trigger it yourself:

> "Based on my user profile, help me create a strategic plan for getting past my biggest blocker. Save it as an artifact."

**The moment:** You walked in with a vague sense of being stuck. You are walking out with a concrete, written plan. Not generic advice from an AI that does not know you. A plan built from your actual context, your actual constraints, and your actual goals. This is what a Personal Agentic OS does.

**Now make it real.** Open a new Google Doc. Open your strategy markdown file in VS Code, select all the text, and copy it. In Google Docs, right-click and choose **"Paste from Markdown"** (or go to Edit > Paste from Markdown). Your strategy will appear beautifully formatted with headers, bold text, and bullet points. You now have a professional strategic document you can share with a partner, hand off to an employee, send to an investor, or use as a brief for any agent. You created it in 15 minutes. That is the aha moment. This is what AI-augmented strategic thinking actually feels like.

**Then watch what happens next.** You send that strategy doc to your CTO, your partner, your advisor. You get on a call to discuss it. They say "actually, I think we should approach the pricing differently" and "this timeline is unrealistic, here is what is realistic" and "you are missing a section on distribution." Normal conversation. Normally, the next step would be painful: someone has to go back, write comments, make edits, reconcile versions.

Instead: take the call transcript (from Granola, or a voice memo, or even rough notes), drop it into your terminal, and tell your AI:

> "Here is the transcript from my call with [name] about the strategy doc. Apply their feedback as edits to the strategy. Update the markdown file."

Your AI reads the transcript, understands the feedback, and rewrites the strategy doc incorporating everything. Neither of you had to write a single comment. Neither of you had to sit in a Google Doc making tracked changes. The boring work took zero time.

This is the real shift. Your job as a leader is not editing documents. Your job is to network, build relationships, have strategic conversations, meditate, read something inspiring, have time for divine downloads. The document work happens in the background, powered by the conversations you are already having.

### Step 4C: "Who Do I Know?" (10 minutes)

Create 3 to 5 relationship files for key people in your professional life. Use voice-to-text to dictate into Hermes. For each person, capture:

- **Name and role**
- **How you met**
- **What you're working on together** (if anything)
- **Last meaningful interaction**
- **Anything you want to remember** (their kid's name, that project they mentioned, the thing they're excited about)

Tell Hermes to create a file for each person in the `people/` directory (already set up in the starter repo from Step 2C). The format doesn't matter much right now. What matters is that these people now exist in your system.

**The moment:** These people now exist in structured form that AI can reference. You will never forget a detail about them again. The next time you have a meeting with one of them, your business OS can brief you on everything you know.

### Step 4D: "What Do I Want Built?" (15 minutes)

This is the exercise that changes how you think about delegation forever.

Pick something you want to see built, created, or executed. A product idea. A marketing campaign. An event. A new workflow. A business initiative. Anything you have been carrying in your head but have not fully specified yet.

Tell your AI:

> "Interview me about this idea. Ask me hard questions. Push me to be specific. I want to end up with a comprehensive brief that I could hand to someone and they would know exactly what I want."

Your AI will ask you things you had not thought to answer. What is the target audience? What does success look like? What are the constraints? What has been tried before? What is the budget? What is the timeline? Who needs to be involved? What are the risks?

This is not your AI telling you what to build. It is your AI forcing you to think more deeply about what you already want to build. The interview process surfaces assumptions you did not know you were making. It fills gaps that would have become confusion later. It produces a document that answers the questions your teammate, employee, contractor, or co-founder would have asked you anyway.

At the end, your AI saves the brief as a markdown file in `artifacts/`. Paste it into Google Docs (Edit > Paste from Markdown) and you have a professional spec you can hand off immediately.

Do this for every major thing you want built. One interview, one artifact, one markdown file in your `artifacts/` folder. Over time, this folder becomes a library of everything you are building, have built, and want to build. Your AI can reference all of it. Your team can reference all of it. Nothing stays trapped in your head.

**The moment:** You realize that 15 minutes of being interviewed by your AI produced a clearer, more complete brief than hours of trying to write it yourself from scratch. And the person receiving it has half the questions they would have had otherwise.

### Step 4E: "What Did I Actually Decide?" (10 minutes)

Create a strategic document capturing one major decision you have made recently. Dictate the story:

- **The situation**: What was the context?
- **The options**: What were you choosing between?
- **The discernment process**: How did you think it through? Who did you consult? What factors mattered most?
- **The decision**: What did you decide?
- **The aftermath**: How did it play out? Would you make the same call again?

**The moment:** When your team (or future you) asks "why did we do it this way?", you point them here. The truth is managed. No more relitigating settled decisions from memory.

### Step 4F: "My System Talks Back" (10 minutes)

Now ask Hermes to generate a briefing from everything you've created. Something like:

> "Based on everything in this workspace, give me a briefing. Who am I? What's my strategic plan? Who are my key relationships? What decisions have I made? What should I be paying attention to?"

Watch what comes back. It won't be perfect. But it will be useful. And it will be drawn from *your* truth, not from generic training data.

**The moment:** Imagine this briefing after 30 days of adding to your business OS. After 90 days. After a year. Every conversation, every decision, every relationship, compounding into an increasingly rich and useful context. That's the trajectory you just started.

---

## Phase 5: The Daily Workflow

Once your MVP Personal Agentic OS is set up, the default interaction pattern is simple: you speak, the system listens and routes.

### Step 5A: Open Your Workspace

**The fast way (Mac):** Right-click on the VS Code icon in your Dock. You will see a list of recently opened projects. Click your workspace name. Done. This is the fastest way to get back into your Personal Agentic OS every day. No navigating folders, no remembering file paths.

**The manual way:** Open VS Code, go to File > Open Recent, and select your workspace. Or File > Open Folder and navigate to it.

Once your workspace is open, open the terminal within VS Code (Terminal > New Terminal). Type `hermes` to start Hermes.

**Resuming a previous session:** If you had a session going yesterday and want to pick up where you left off, type `hermes` and then `/resume`. You will see a list of recent sessions. Pick the one with the most kilobytes (that is the session with the most context). Use the arrow keys to select it and press Enter. You are back where you were, with all the context from your last session intact.

### Step 5B: Brain Dump

Start talking. Voice-to-text into the terminal. Just dump whatever is on your mind. It might be a meeting debrief, a strategic thought, an update on a relationship, a new idea, a decision you need to make. Do not worry about structure. Just say what is true.

### Step 5C: Let Hermes Route It

Based on what you said, Hermes determines which existing documents to update, whether new documents need to be created, and how to maintain coherence across everything.

### Step 5D: Review the Changes

Look at what Hermes did. Approve, correct, or refine. This is you being the "dictator of truth" for your operation. The AI proposes; you approve.

### Step 5E: Repeat

Over time, Hermes learns the structure of your business OS and keeps everything consistent. Cross-references stay accurate. Outdated information gets flagged.

The brain dump is the lowest-friction way to keep your business OS current. You don't need to think about where information goes. You just need to say what's true, and the system handles the rest.

---

## Phase 6: Common Pitfalls (From Real Sessions)

These are real issues that come up when people set up their MVP Personal Agentic OS for the first time. Knowing about them in advance saves frustration.

**Old computers will struggle.** If your laptop is 8 to 10+ years old, expect installations to take longer, and some tools may have compatibility issues that nobody on the development team is prioritizing. This is just the practical reality of how software companies allocate engineering resources. Everything in this guide will work on Windows, Mac, and Linux, but if your machine is very old, consider upgrading when you can. The MVP does not require a powerful computer, but a reasonably modern one (last 5 years or so) will save you a lot of frustration.

**Remap your Caps Lock key.** Make it a Control key. This is a small thing that makes terminal life dramatically better. On macOS: System Settings, Keyboard, Keyboard Shortcuts, Modifier Keys. You'll thank yourself.

**Hermes sometimes times out on long operations.** This is normal. Just resume the session. Your files are already saved. Nothing is lost.

**The multiple-choice UI in Hermes can be confusing.** When Hermes presents options, it can feel like you need to pick from a menu. You can tell it to default to free text input instead. Just say "don't give me multiple choice, I'll tell you what I want."

**Understand the yolo mode tradeoff.** See the optional note in Phase 1. You can run `hermes --yolo` or type `/yolo` inside a session to toggle approval prompts.

**Voice transcription quality can vary.** Apple's built-in dictation can regress across OS updates. If you notice accuracy dropping, switch to Superwhisper or Wispr Flow as your primary and keep the other as backup.

**Don't try to make it perfect on day one.** The MVP is a scaffold. It will be messy at first. That's fine. The structure will emerge as you use it. Resist the urge to spend three hours designing the perfect folder hierarchy before you've written a single document. Start writing. Reorganize later.

---

## Phase 7: Growing From MVP to Full Business OS

The MVP is the seed. Here's what the growth trajectory looks like.

### Step 7A: Week 1

- Add 5 more relationship files. Start with the people you interact with most.
- Write your `PRINCIPLES.md`: the core decision rules you operate by. What do you value? What are your non-negotiables? What heuristics guide your judgment?
- Process one real conversation (a meeting, a call, a brainstorm) through the system. See what it's like to capture and route real information.

### Step 7B: Month 1

- Regular brain dumps are becoming habit. You speak into the system at least a few times a week.
- Your artifact library is growing: status updates, decision records, relationship files, strategic notes.
- You're starting to see the compounding effect. Your [context lake](/docs/concepts/context-lake) is deepening. Hermes's briefings are getting noticeably more useful because there's more context to draw from.

### Step 7C: Month 3

- The system knows enough about you, your operation, and your relationships to generate genuinely useful briefings and catch things you'd miss.
- You're spending less time trying to remember things and more time making decisions. The recall problem is largely solved.
- You start to feel the shift: the system is not just a tool you use. It's a thinking partner that operates from your context.

### Step 7D: The Organizational Expansion

When you're ready to bring other people in, the business OS scales with access controls:

- **Each person gets a role-scoped view.** Not everyone needs to see everything. The intern doesn't need board-level strategy docs. The sales lead doesn't need HR records.
- **AI agents that act on behalf of team members** only have access to documents relevant to their role. This is where the [Sovereign Agentic Business OS principles](/docs/sovereign-agentic-business-os/principles) around identity and access management become critical.
- **The vision:** a living "company bible" (see [Start Your Company Bible](/docs/legacy/start-your-company-bible)) that everyone, human and AI, operates from. Continuously updated. Version-controlled. The single source of truth for how your organization works.

---

## Phase 8: The Meta Work Shift

Here's the part that feels counterintuitive at first: as your business OS matures, your day starts to look less and less like "work" in the traditional sense.

Low-level execution is increasingly handled by AI. The human's job becomes meta work: defining reality, setting objectives, curating truth, evaluating whether the system is producing good outcomes. Think of it like game design. You are designing the game (the objectives, the rules, the guardrails) and the AI agents are the players executing within those constraints.

A productive day might involve very little typing and a lot of thinking, conversing, and refining the system. You might spend an hour voice-dumping insights from three conversations, review the updated documents, approve the changes, and then ask your business OS to generate a strategic brief. That's not laziness. That is the highest-leverage use of human attention in a world where execution costs are collapsing.

The question is no longer "how do I get all this work done?" It's "am I defining reality accurately enough that the system can do good work on my behalf?"

That's the shift. And it starts with the MVP Personal Agentic OS.

---

## Further Reading

- [Sovereign Agentic Business OS](/docs/sovereign-agentic-business-os): The full philosophy behind building your own AI operations hub
- [Legacy](/docs/legacy): The framework for documenting and organizing the truth your business OS draws on
- [Start Your Company Bible](/docs/legacy/start-your-company-bible): Scaling legacy across an organization
- [Make Your Company Refactorable](/docs/legacy/make-your-company-refactorable): Making your operation grep-able and editable by AI agents
- [Voice Transcriber](/docs/legacy/voice-transcriber): Deeper dive on the voice-to-text tools that power the brain dump workflow
- [The Question Bank](/docs/sovereign-agentic-business-os/question-bank): High-leverage questions to program into your business OS
- [Training the Workshop](/docs/playbooks/practitioner/training-the-workshop): If you want to teach others how to set up their Personal Agentic OS
- [Harness Engineering](/docs/concepts/harness-engineering): Why the code wrapped around an AI model matters as much as the model itself, and why harnesses will soon improve themselves
- [Personal Agentic OS](/docs/concepts/personal-agentic-os): The concept behind the system you are building

---

*The best time to start your business OS was a year ago. The second best time is today. Open a terminal. Start talking. The system will grow from there.*
