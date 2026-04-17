---
sidebar_position: 60
title: "Compound Drift"
---

# Compound Drift

*Every stage in an AI chain that is less than provably good compounds with the next. Mediocrity does not average out. It multiplies.*

---

## The mechanism

You chain transformations. Transcript goes into summarizer. Summary goes into blog draft. Draft goes into scheduler. Scheduler auto-publishes.

Each stage looks fine in isolation. The summary “captures the gist.” The draft “reads okay.” The schedule “fires on time.” You inspect the output at launch, approve it, and move on.

Then it runs a thousand times.

Small errors at each stage do not cancel out. They compound. The summary drops a crucial nuance. The draft invents a specific the summary glossed. The scheduler fires a post the source conversation never actually endorsed. The published piece bears almost no relationship to the conversation that seeded it. Your name is on it.

This is **compound drift**. It is the AI-era version of garbage in, garbage out, extended across a pipeline where every hop has its own chance to introduce garbage. The garbage is not constant. It accumulates.

## Why AI makes this worse than pre-AI pipelines

Traditional software pipelines have deterministic stages. If the transformer function is wrong, it is wrong the same way every time. You can unit-test it, fix it, and trust it.

AI stages are probabilistic. Each inference has variance. Each hallucination is a fresh one. The error floor is not zero. Worse, when you chain LLM calls, the downstream model treats the upstream output as ground truth. It has no way to notice that stage 2 invented a detail stage 1 never produced.

Compound drift is native to chained AI. Not a bug in a specific pipeline. A property of the architecture.

## The diagnostic

**Each step in your AI chain should be clearly provably good.**

If you cannot point at any stage and say “here is how I know this stage produces correct output, on the full distribution of inputs this stage sees,” then that stage is probably drifting. The chain is drifting faster.

Provably good does not mean “looks fine when I spot-checked a few outputs.” It means a real evaluation harness, a real distribution of test cases, a real pass rate you would bet money on.

## Examples you have probably seen

- **The meeting-notes-to-Substack pipeline.** Raw transcript → AI summary (loses nuance) → AI blog draft (invents specifics) → scheduled auto-publish. Six weeks in, your newsletter reads like it was written by someone who attended a different meeting.

- **The lead-qualification stack.** LinkedIn scrape → AI enrichment → AI ICP-fit score → auto-sequence → AI-written first message. Each stage adds small errors. Your outbound becomes generic garbage at scale, damaging your brand per-send.

- **The self-improving agent loop.** Agent generates output → agent critiques its own output → agent rewrites → agent passes to next agent. Drift compounds especially fast here because the critic shares the creator's blind spots.

- **The internal ops pipeline.** AI drafts the meeting notes → AI extracts action items → AI auto-assigns to team members → AI follows up. Team trusts the chain. Nobody remembers that the action items were invented in stage 2.

## The remedy

- **Evaluate per stage.** Build an evaluation harness for each transformation independently. Know the pass rate. Know the failure modes.
- **Checkpoint with humans where judgment matters.** The human gate does not have to be at every stage. It has to be at the stages where drift is invisible downstream.
- **Log inputs and outputs at every stage.** You cannot fix what you cannot see. Observability is not optional.
- **Prefer short chains over long ones.** Every hop is an opportunity for drift. Collapse stages that can be collapsed.
- **Version every stage.** When a model or prompt changes, re-evaluate downstream. Drift does not always come from your end.
- **Keep humans close to the outputs that ship externally.** The final output is where your reputation lives.

Compound drift is not solved by “trust the AI more.” It is solved by engineering each stage with the rigor you would apply to any other probabilistic system.

## The connection to Slop Factory

Compound drift is the mechanism. [Slop Factory](/docs/concepts/slop-factory) is the emergent system you become if you let the mechanism run unchecked. Compound drift is what is happening inside the box. Slop Factory is what the box becomes.

---

## Further Reading

- [Slop Factory](/docs/concepts/slop-factory): The emergent system that compound drift produces when nobody is watching
- [Don't Scale Slop](/docs/playbooks/business-owner/dont-scale-slop): The business-owner playbook on why automating broken workflows compounds the damage
- [The Slopacalypse](/docs/concepts/slopacalypse): Compound drift at industry scale
- [Lossy AI Telephone](/docs/concepts/lossy-ai-telephone): The team-collaboration version of the same mechanism
- [Observable Behavior Engineering](/docs/concepts/observable-behavior-engineering): The discipline that makes each stage provably good
- [The Judgment Line](/docs/concepts/the-judgment-line): Where humans belong in the chain and where they do not
