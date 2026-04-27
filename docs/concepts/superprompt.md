---
sidebar_position: 27
title: "Superprompt"
---

# Superprompt

*A prompt that activates the full context and utility of your Jarvis. The unit of work in the agentic era. The words plus everything they ride on.*

---

## What It Is

A **superprompt** is a prompt that lands inside an activated [Personal Agentic OS](/docs/concepts/personal-agentic-os): a Jarvis that already knows who you are, what you are working on, and which tools, skills, and files it has access to. The text you type is small. The system the text runs against is large. That combination is what produces output most people associate with "real" AI.

Anything else is a regular prompt. Words typed into a fresh chat window with nothing loaded behind them. The model is brilliant. The system around it is empty. The output is generic, no matter how well-crafted the words are.

The distinction is not stylistic. It is structural. A superprompt and a regular prompt look almost identical on screen. They produce categorically different work.

---

## Why The Word Matters

Most prompting advice optimizes the wrong layer. "Better prompt structure," "better wording," "better framing" all assume the system the prompt runs against is fixed. It is not. The system is the highest-leverage layer in the stack, and almost nobody works on it.

Naming the activated form of the prompt makes the distinction conscious. When practitioners write *prompt*, they mean the words. When they write *superprompt*, they mean the words plus:

- The [Personal Agentic OS](/docs/concepts/personal-agentic-os) that loaded at session start
- The [tools and permissions](/docs/concepts/the-permission-surface) the agent can actually use
- The [skill files](/docs/concepts/instruction-files) the agent can invoke
- The [priming](/docs/playbooks/practitioner/priming-your-jarvis) at the front of the message: dragged-in files, voice-dumped framing, success criteria
- The actual prompt text, often shaped by [CRIT](/docs/playbooks/practitioner/how-to-prompt-your-jarvis#crit-a-good-place-to-start-and-where-it-stops): Context, Role, Interview, Task

A regular prompt invokes only the last item. A superprompt invokes all five. That is the difference.

---

## What A Superprompt Looks Like

Two practitioners type the same eight words: *"draft the follow-up to last night's call."*

**Practitioner A** types it into a fresh ChatGPT window. The model has no idea what call, who was on it, what was discussed, what voice the practitioner uses, or what platform the message will land in. It produces a generic follow-up email template with placeholders.

**Practitioner B** types it into a Jarvis with a populated [PRM](/docs/concepts/prm), a [context lake](/docs/concepts/context-lake) of meeting transcripts, a CLAUDE.md that captures their voice, and a skill that drafts follow-ups in their preferred channel. The agent reads last night's transcript, opens the relationship file for the person on the call, checks recent threads to match tone, drafts the message in the right channel, and asks one clarifying question before sending.

The two outputs are not in the same category. The eight words are. The system underneath them is not.

---

## Anatomy

A typical superprompt rides on five layers, in order of leverage:

1. **The Personal Agentic OS.** A workspace with a CLAUDE.md / AGENTS.md, a USER.md, a PRM, and a [context lake](/docs/concepts/context-lake) of meeting notes and project files. Loads automatically at session start. Carries years of accumulated context.
2. **The harness and its tools.** [Claude Code](/docs/tools/tool-setups/claude-code-setup), [Codex](/docs/tools/tool-setups/codex-setup), [Hermes](/docs/tools/tool-setups/hermes-setup), with file access, web access, and any cross-app tools (calendar, email, image generation, deploy) plugged in. The [permission surface](/docs/concepts/the-permission-surface) bounds what any superprompt can accomplish.
3. **Skill files.** Reusable interview prompts and workflows, invoked by slash command or keyword. Daily briefing, meeting recap, draft-and-publish, research dossier. The third time you write the same kind of prompt, promote it to a [skill](/docs/concepts/instruction-files).
4. **Per-session priming.** Dragged-in files, voice-dumped framing, explicit success criteria. Often rides at the front of the actual prompt rather than as a separate setup turn. See [Priming Your Jarvis](/docs/playbooks/practitioner/priming-your-jarvis).
5. **The prompt text.** Usually shaped by CRIT. Short. Specific about output. Pushes for a draft, not a discussion.

If any layer is missing or weak, the superprompt degrades toward a regular prompt. The five layers compound. A two-line superprompt to a fully activated Jarvis routinely outperforms a two-page prompt to a fresh chat.

---

## How To Tell Them Apart

A few diagnostic questions for any prompt you are about to send:

- **Does the agent know who I am?** If you have to explain your role, your industry, or your stakes, you are working at fresh-chat level.
- **Does the agent know what I am working on?** If you have to describe the project, the deal, or the deliverable from scratch, the OS layer is not carrying its weight.
- **Can the agent take the action I am describing?** If the answer requires a tool the agent does not have, you are bounded by the permission surface, not by your prompt-craft.
- **Have I done this kind of prompt before?** If yes, and there is no skill for it yet, you are leaking leverage. Promote it.
- **Did I drag in the relevant files, or am I describing them in prose?** Description is slow and lossy. Reading is fast and faithful.

If most answers point at "the system already knows," you are writing a superprompt. If most point at "I have to recapitulate everything in the message," you are writing a regular prompt.

---

## Why This Is The Practitioner's Skill

The [practitioner's](/docs/concepts/applied-ai-practitioner) job is to set up the system that makes superprompts possible. Anyone can demo a clever prompt. A practitioner builds the OS, plugs in the tools, writes the skills, and shapes the priming discipline so that simple prompts produce extraordinary output, every day, for the person being [Jarvised](/docs/get-jarvised).

That is also why the prompt-engineering era ended. The leverage moved upstream. The unit of work is no longer the prompt. It is the superprompt: the integrated stack the prompt runs against.

When you say *write me a better prompt*, the high-leverage answer is rarely a better string of words. It is a better system underneath the words.

---

## The Bottom Line

The prompt is the trigger. The superprompt is the trigger plus the activated system. Build the system, and your prompts get small. Skip the system, and your prompts have to do all the work, and they cannot.

If you take one move from this page: stop calling activated, contexted, tool-equipped prompts the same thing as fresh-chat-window words. Different category, different name, different leverage.

---

## Further Reading

- [How To Prompt Your Jarvis](/docs/playbooks/practitioner/how-to-prompt-your-jarvis): The five layers of context engineering that turn a prompt into a superprompt, with CRIT and the canonical CLAUDE.md interrogation block.
- [Priming Your Jarvis](/docs/playbooks/practitioner/priming-your-jarvis): The per-session discipline that lives inside every superprompt.
- [Personal Agentic OS](/docs/concepts/personal-agentic-os): The foundation layer that does most of the work.
- [Context Engineering](/docs/concepts/context-engineering): The discipline of curating the information state your superprompts run against.
- [Intent Engineering](/docs/concepts/intent-engineering): Encoding purpose so the system optimizes for the right goals before any prompt is typed.
- [Interview Prompts](/docs/concepts/interview-prompts): The pattern that turns a thin brief into a rich one without requiring a longer prompt.
- [The Permission Surface](/docs/concepts/the-permission-surface): The set of actions your agent can take. Bounds what any superprompt can accomplish.
- [Instruction Files](/docs/concepts/instruction-files): Where the persistent layers of a superprompt live: CLAUDE.md, SKILL.md, AGENTS.md.
- [Train Your Agent](/docs/concepts/train-your-agent): The compounding daily practice that makes every future superprompt better.
