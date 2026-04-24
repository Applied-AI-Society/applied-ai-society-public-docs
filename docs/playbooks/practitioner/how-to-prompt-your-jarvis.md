---
sidebar_position: 14
title: "How To Prompt Your Jarvis"
---

# How To Prompt Your Jarvis

*Most "prompting" advice is the smallest lever in the system. The real game is upstream: how much your Jarvis already knows about you, what tools it can use, and whether it has been configured to push back instead of agree. The actual prompt is the last word in a conversation that started months ago.*

---

## The Reframe

Open a fresh chat with a public LLM, type a question, get a generic answer. Conclude that AI is not that impressive. This is the most common path to underwhelmed.

The mistake is treating the prompt as the unit of work. The prompt is the *trigger*. The unit of work is the entire context stack standing behind it: who your Jarvis already knows you to be, what files it can read, what skills it can run, what tools it can execute, what intellectual posture it has been told to take.

When two practitioners type the same words into their agents and get wildly different results, the difference is almost never in the words. It is in everything that loaded before the words were typed.

The implication is uncomfortable but freeing: if you want better outputs, do not get better at writing prompts. Get better at building the system the prompt runs against.

---

## CRIT: A Good Place To Start, And Where It Stops

If you want a tactical starting point on the prompt itself, the cleanest framework going around right now is **CRIT** (Context, Role, Interview, Task), popularized by [Geoff Woods](https://www.linkedin.com/in/geoffwoodscompoundeffect/), author of *The AI-Driven Leader*. The four moves:

- **Context.** Give the AI your world. Who you are, what you are working on, who your audience is, what your constraints are. The paragraph that sets the table.
- **Role.** Tell the AI who to be. "Act as a strategy coach." "Act as a senior brand designer." "Act as an editor who pushes back on weak claims." Assigning a role shifts the agent from a search engine into a specific kind of collaborator.
- **Interview.** Before giving the task, instruct the agent to ask you a small number of clarifying questions, one at a time, until it understands what you actually want. (Geoff's recommended phrasing: *"Ask me no more than three questions, one at a time, to clarify what I'm trying to achieve."*) This is the move most people skip and it is where most of the lift comes from.
- **Task.** Then, and only then, the assignment itself. Short, clear, slightly uncomfortable. "Give me three non-obvious actions" beats "give me ideas."

Internalize CRIT. It will lift the floor of every prompt you write. If you do nothing else from this page, do CRIT.

What this page adds: CRIT is a framework for the prompt. The prompt is the visible tip. Below the waterline are five layers of context engineering, every one of which has more leverage than the four CRIT moves on their own. CRIT in a fresh chat window with no context underneath it still produces fresh-chat-window output. CRIT on top of a healthy Personal Agentic OS produces work that feels like it came from someone who has known you for a year.

The five layers, in order of leverage:

---

## Layer 1: Your Personal Agentic OS

This is the foundation. Everything else compounds on top of it.

Your [Personal Agentic OS](/docs/concepts/personal-agentic-os) is the persistent context your Jarvis loads at the start of every session. The shape that matters most:

- **A `CLAUDE.md` (or `AGENTS.md`) at your workspace root** that tells your Jarvis who you are, what you are working on, what your conventions are, and how it should behave with you. This file is the difference between an agent that has to ask "what's your role?" and an agent that already knows.
- **A `user/USER.md`** that captures your background, your preferences, the people in your orbit, and your operational reality at a higher resolution than any single chat could carry. Pull years of prior chat history into it (see [Export Your AI History](/docs/playbooks/practitioner/export-your-ai-history)) so your Jarvis starts from years of accumulated context, not zero.
- **A [PRM](/docs/concepts/prm)** with a relationship file for every meaningful person in your work. When you mention someone in a prompt, your Jarvis can read their file and know exactly who they are to you, what you have done together, and what is current.
- **A [context lake](/docs/concepts/context-lake)** of meeting notes, transcripts, decisions, and active project state. The more of your operational reality lives in files your agent can read, the less you need to recapitulate in a prompt.

When this layer is healthy, every prompt you type lands inside a rich, pre-loaded picture of your life. A two-line prompt to a well-contexted Jarvis outperforms a two-page prompt to a fresh chat window. The two-pager is doing the work the OS should already have done.

This is also why hallucination rates drop dramatically inside a real Personal Agentic OS. The agent is not guessing about who you are or what you mean. It is reading.

---

## Layer 2: Your Harness And Its Tools

Pick a harness that can read files, run commands, and execute real actions. Open the catalog: [Claude Code](/docs/tools/tool-setups/claude-code-setup), [Codex](/docs/tools/tool-setups/codex-setup), [Hermes](/docs/tools/tool-setups/hermes-setup). These are not chat windows. They are agentic harnesses with the capacity to actually do work in your environment.

Then give your Jarvis the tools it needs to execute the kinds of work you actually want done.

- **File operations** are usually free. Reading and writing files in your workspace requires no special setup beyond installing the harness.
- **Web access** (search, fetch, scrape) is usually one configuration step.
- **Cross-app actions** (sending email, adding calendar events, creating images, generating slide decks, deploying websites) require giving your agent a tool or MCP server for each capability. The [Supersuit Up workshop](/docs/workshops/supersuit-up) walks through which permissions to grant for the most common cases.

The principle: every category of work you want your Jarvis to perform corresponds to a tool you need to plug in. An agent without a calendar tool cannot manage your calendar no matter how well you prompt it. An agent without an image generator cannot make images. An agent without deploy access cannot ship. The leverage from a great prompt is bounded by the tools the agent has at its disposal.

This is the [permission surface](/docs/concepts/the-permission-surface) of your Jarvis: the set of actions it is actually able to take in the real world. Expand the surface intentionally, with eyes open about what you are authorizing.

---

## Layer 3: Skill Files

A [skill file](/docs/concepts/instruction-files) is a reusable block of context plus instructions plus tool access, packaged so that one trigger phrase or one slash command runs the whole thing.

When you find yourself writing the same kind of prompt twice, promote it to a skill. The third time you need it, the skill runs and you do not have to remember the structure. Over months, your skill library becomes a fleet of pre-baked workflows your Jarvis can execute on demand: a daily briefing skill, a meeting recap skill, a draft-and-publish skill, a research dossier skill, an outreach skill, a deploy skill.

Skills are the level above prompts. They make the right behavior the default and the wrong behavior require effort, instead of the other way around. See also [Interview Prompts](/docs/concepts/interview-prompts) for the canonical pattern of a skill that interviews you for what it needs instead of asking you to fill in placeholders.

---

## Layer 4: Per-Session Priming

This is what most people mean when they say "prompting," and it does matter. Inside a single session, before you ask for anything serious:

- **Drag in the files that matter.** The relationship file for the person involved. The strategic doc for the project. The transcript of the relevant meeting. Your Jarvis can read in seconds what would take you ten minutes to summarize.
- **Voice-dump the framing.** Speak ninety seconds of context instead of typing one paragraph. Capture the situation, the goal, what is at stake, what you have already tried, what you want to avoid.
- **Define what good looks like.** State the success criterion plainly so the agent can self-check. "I'll know this draft is right when [X]." "Done means [Y]."

This is the [priming](/docs/playbooks/practitioner/priming-your-jarvis) discipline. It is per-session work that compounds with every layer underneath it. A two-minute priming routine on top of a healthy Personal Agentic OS produces outputs that look like magic.

---

## Layer 5: The Prompt Text Itself

Now, finally, the words you type. By the time you get here, the four layers above have done most of the work. The prompt's job is small: nudge the system in a specific direction.

This is where CRIT lives. Use it as the structure: a Context paragraph (often shorter than a fresh-chat-CRIT, because the OS already carries most of it), a Role assignment, an instruction to Interview you, then the Task itself.

A few moves that compound on top of CRIT once it is your default:

- **Be specific about the output.** Format, length, tone, structure. "Draft a three-paragraph email" beats "draft an email."
- **Name the constraints.** What must be true. What must never happen. What is a non-negotiable.
- **Name the audience.** Who is going to read or use this. Their context, their patience, their expertise level.
- **Ask for the trade-offs.** "Tell me what you would have to leave out to do this in half the words" is more useful than "make it shorter."
- **Push for a draft, not a discussion.** Most of the time you want the agent to produce the artifact, not deliberate about whether it can. Ask for the draft. Iterate from a real thing.

These are tactical, learnable, and useful. They are also still the smallest lever in the stack.

For a concrete, end-to-end example of what all five layers look like composed into a single brief (file tags, public layer, inside layer, power map, CRIT structure, interview instruction), see the worked music-industry deal proposal in [Dealmaking](/docs/use-cases/dealmaking#a-worked-example-music-industry-deal-proposal).

---

## Make Interviewing The Default, Not The Exception

CRIT puts "Interview" in the prompt. That is good. Better is to make interrogation the default behavior of every session, so you do not have to remember to ask for it.

Your first prompt is rarely your final context. The fastest way to close that gap permanently is to configure your Jarvis to interview you on every non-trivial request, regardless of whether the prompt explicitly asked for it.

Add a section to your workspace `CLAUDE.md` (or equivalent) that explicitly instructs your Jarvis to act interrogative, skeptical, and non-sycophantic. Something like:

```
## How I want you to behave

- Ask me clarifying questions before any non-trivial work, especially
  when the brief is ambiguous, missing constraints, or a single answer
  could go in multiple meaningfully different directions.
- Push back when my reasoning is weak, my assumptions are unsupported,
  or my plan has obvious holes. Do not flatter or hedge.
- Be skeptical of my first framing. Offer the strongest counter you can
  steelman. Ask "what would have to be true for this to be wrong?"
- Refuse to be sycophantic. "That's a great question" is not allowed.
  "I notice you may be assuming X. Is that intentional?" is.
- When I propose a solution, ask whether the underlying problem is
  the right one before you start solving the proposed one.
```

This single block changes the texture of every conversation you have with your agent. You are no longer being agreed with. You are being interrogated by an interlocutor that has read your files and knows enough about you to challenge you specifically. That is iron sharpening iron, and it is the only relationship with an AI that produces real upgrades to your work.

For the prompt-pattern version of this same discipline (an instruction in the prompt itself that asks the agent to interview you for missing variables), see [Interview Prompts](/docs/concepts/interview-prompts).

---

## What Prompting Is Actually About

Strip the labels off and you find one underlying skill: getting what you want out of a computer interaction. People call it prompting, [intent engineering](/docs/concepts/intent-engineering), [context engineering](/docs/concepts/context-engineering), [spec writing](/docs/concepts/spec-writing). They all point at the same activity from different angles. The labels are useful, but the underlying work is to compress your intent into a form that an extraordinarily capable, extraordinarily literal system can act on faithfully.

The compression is easier when the system already shares most of the context with you. So the highest-leverage move is almost never to write a better prompt. It is to invest, daily, in the system the prompt is going to run against.

---

## The Bottom Line

1. **The prompt is the smallest lever.** Most of the leverage lives in the four layers below it.
2. **Build the Personal Agentic OS first.** A two-line prompt to a well-contexted Jarvis beats a two-page prompt to a fresh chat. Daily discipline.
3. **Plug in the tools you need.** Your agent's permission surface bounds what it can do, no matter how good the words are.
4. **Promote repeated patterns to skill files.** Anything you prompt twice should become a skill on the third occurrence.
5. **Prime every session.** Drag in the files. Voice-dump the framing. Define what good looks like. Then ask.
6. **Use CRIT as the structure for every non-trivial prompt.** Context, Role, Interview, Task. Internalize it, then move on. The output difference vs. unstructured prompting is large and immediate.
7. **Configure your Jarvis to interview and push back.** Iron sharpening iron. No sycophancy. The CLAUDE.md block above is the entry point.
8. **Treat your first prompt as a first draft of the brief, not the final brief.** Let your Jarvis ask for what it needs.

The compound effect of getting all five layers right is enormous. Practitioners who treat prompting as a craft, isolated from the OS underneath, plateau quickly. Practitioners who treat the whole stack as the craft compound for years.

---

## Further Reading

- [Priming Your Jarvis](/docs/playbooks/practitioner/priming-your-jarvis): The per-session discipline of dragging in files, voice-dumping framing, and defining success before you ask.
- [Personal Agentic OS](/docs/concepts/personal-agentic-os): The foundation. The persistent system that makes every prompt land inside a pre-loaded picture of your life.
- [Context Engineering](/docs/concepts/context-engineering): The discipline of curating the information state your agent operates inside.
- [Intent Engineering](/docs/concepts/intent-engineering): Making your intent explicit and durable in the system, not just in your head.
- [The Spec Is the Product](/docs/concepts/spec-writing): For anything serious, the spec is upstream of the prompt and outweighs it.
- [Interview Prompts](/docs/concepts/interview-prompts): The pattern for prompts that get the agent to interview you instead of asking you to pre-fill placeholders.
- [Instruction Files](/docs/concepts/instruction-files): The structural form. CLAUDE.md, SKILL.md, AGENTS.md.
- [The Permission Surface](/docs/concepts/the-permission-surface): The set of actions your agent can actually take. Bounds the leverage of every prompt.
- [Train Your Agent](/docs/concepts/train-your-agent): The compounding daily practice that makes your Jarvis a better collaborator over time.
- [Tool Setups](/docs/tools/tool-setups): The setup tutorials for the harnesses (Claude Code, Codex, Hermes), git, and the workspace bootstrap.
