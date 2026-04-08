---
sidebar_position: 46
title: "The Judgment Line"
---

# The Judgment Line

*LLMs handle judgment. Code handles everything else.*

---

## The Rule

Every task in an agentic system falls on one side of a line.

**Above the line:** synthesis, prioritization, drafting, reasoning, interpretation, deciding what matters. Work where the answer depends on context, nuance, or taste. This is what LLMs are for.

**Below the line:** reading files, calling APIs, sending messages, comparing timestamps, transforming data, moving things between systems. Work where the answer is deterministic. This is what scripts are for.

The rule: never push below-the-line work through an LLM.

---

## Why This Matters

When you route deterministic work through an LLM, things break in unpredictable ways. The model might add a timestamp wrong, skip a file it was supposed to read, hallucinate an API response, or silently drop a step it found uninteresting. These failures are invisible until they cause real damage, because the system looked like it was working.

Worse: you stop trusting the system. Once you catch an LLM getting a date comparison wrong or mangling a data transformation, you start double-checking everything. That defeats the purpose. The whole point of building an agentic system is to stop doing the work yourself.

The fix is layer separation. Code does what code is good at: reliable, repeatable, verifiable execution. The LLM does what the LLM is good at: reading a situation and making a call. When you get this separation right, the system becomes something you actually depend on rather than something you babysit.

---

## What This Looks Like

**Email triage.** Code pulls emails from the API, parses headers, extracts metadata, checks timestamps, deduplicates. The LLM reads the content and decides what needs your attention, what can wait, and what to ignore. Code handles retrieval. The LLM handles judgment.

**Meeting prep.** Code queries your calendar, fetches prior notes from the file system, pulls recent email threads with the attendees. The LLM synthesizes all of it into a brief: what matters, what to bring up, what to watch for. Code handles assembly. The LLM handles synthesis.

**Task management.** Code reads task files, compares due dates, identifies what is overdue, checks which items have rolled forward for five consecutive days. The LLM looks at the full picture and decides what to flag as urgent, what to deprioritize, and what to say in the evening summary. Code handles state. The LLM handles prioritization.

**Research.** Code fetches RSS feeds, scrapes pages, downloads PDFs, extracts text. The LLM reads the content and decides what is relevant, what is noise, and how it connects to what you are working on. Code handles collection. The LLM handles curation.

The pattern is always the same: code assembles the inputs, the LLM applies judgment, code executes the output.

---

## The Common Mistake

Most people building agentic systems make the same error: they give the LLM a broad instruction ("check my email and handle anything important") and let it figure out the mechanics. The LLM then has to handle both the judgment ("is this important?") and the plumbing ("connect to Gmail, parse MIME, extract attachments"). It will get the judgment right most of the time and the plumbing wrong some of the time, and you will not know which failures are which.

The fix is not to constrain the LLM. It is to give it less to do. Write the plumbing in code. Hand the LLM clean inputs. Let it do what it is actually good at.

---

## The Trust Equation

A system you trust is a system you use. A system you use is a system that compounds.

Trust comes from predictability. The deterministic parts of your system should be perfectly predictable because they are code. The judgment parts should be predictably good because the LLM is only being asked to do LLM-shaped work with clean inputs.

When both layers are doing what they are designed for, the system earns your trust faster. When they are blurred together, every failure could be either layer, and debugging becomes guesswork.

A smaller system you trust will always beat a bigger one you route around. The judgment line is how you build the smaller system.

---

## Further Reading

- [Harness Engineering](/docs/concepts/harness-engineering): The broader architecture that the judgment line operates within
- [Anatomy of a Harness](/docs/concepts/anatomy-of-a-harness): How Claude Code implements this separation in practice
- [Self-Improving Systems](/docs/concepts/self-improving-systems): Systems that get the layer separation right can improve themselves
- [The Four Levels of Applied AI for Existing Businesses](/docs/concepts/four-levels-of-applied-ai-for-existing-businesses): Level 4 (Build) is where the judgment line becomes a daily design decision
