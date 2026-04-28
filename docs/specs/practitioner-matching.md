---
sidebar_position: 2
title: "Practitioner Matching Spec"
---

# Practitioner Matching Spec

*A first principle design for matching applied AI projects to the right practitioners, using unlimited verified context on both sides.*

<!-- last_updated: 2026-04-16 -->

---

## The Problem

People with applied AI projects (founders, operators, business owners, chapter leaders) constantly need to find the right practitioner: the right person with the right combination of skills, taste, availability, working style, and trustworthiness. The current options for finding that person are some of the worst-designed surfaces on the internet.

Specifically:

- **Job boards and freelance platforms** (Upwork, Toptal, etc.) reduce both sides to keyword-tagged résumés and short bios. The thin context guarantees mismatch.
- **LinkedIn** is optimized for visibility and signaling, not for actually doing the matching work.
- **Personal networks and DMs** depend on a single operator holding the matching graph in their head and burning hours playing matchmaker manually. This is the current best option, and it does not scale.

Every approach above wastes context. The operator with the project knows enormous detail about it. The practitioner has enormous detail about their own taste, capacity, and history. None of that detail makes it into the matching surface, so the matching itself is shallow and noisy.

---

## What This Spec Designs

A system where:

1. **The project owner uploads unlimited context** about the project. Goals, constraints, current state, prior attempts, the people involved, the budget, the timeline, the unspoken stuff that usually only comes out in the third call. All of it. As text, files, voice notes, transcripts, links.
2. **Practitioners maintain unlimited verified context** about themselves: skills, prior projects with outcomes, current availability, working style, the kinds of clients they thrive with, the kinds of projects they will refuse, their rates, their references, their unique edge.
3. **The matching surface is a ranked list** of practitioners for the project, with the rationale exposed in plain language for every match.
4. **The project owner reviews the ranked list, picks one or two, and gets warm-introduced** through whichever channel both parties prefer.

The matching is the experience. Everything else (context capture, profile maintenance, ranking, intro routing) exists to make the matching as accurate as possible.

---

## The First-Principles Design

### What “verified context” means

Context is verified when there is a **trustable trail back to its source**. Not because a human moderator approved it, but because the system can show where each claim came from.

Examples:

- A practitioner says they shipped a Stripe-to-QuickBooks integration. The verification is a link to the repo, a Loom of the demo, a one-line note from the client that signed off.
- A practitioner claims 20 hours a week of availability. The verification is the calendar API showing actual open blocks.
- A project owner says budget is $50K. The verification is an attached commitment letter or escrow funding.

Verification is asymmetric. Some claims are easy to verify (calendar availability, repo authorship). Others are harder (cultural fit, working style). The system surfaces the verification level on every claim. It does not pretend everything is equally verified.

### What “unlimited” actually means

Unlimited means **the system imposes no upper bound on how much context either side can submit**, and ranks more-context-rich profiles higher when their context is verified and recent. The reward for putting in the work to maintain a deep profile is showing up at the top of more matches.

Operationally, this likely means a per-user vector store plus a structured profile, both updated continuously. The user does not see this. They just see that the profile they keep current keeps producing good matches.

### Ranking, with the rationale exposed

The output is not “here is the practitioner who matched best.” It is **a ranked list of five to ten practitioners, each with a paragraph explaining why they are on the list**, what specifically about their context aligned with the project, and what the open questions or risks are.

The project owner reads the rationale. If the rationale is wrong, the project owner can correct it (one click) and the ranking re-runs with the correction in context. This is the project owner teaching the system in real time, not arguing with a black box.

### The introduction is high-stakes

When the project owner picks a practitioner, the system does not generate a templated intro email. It produces a draft that the project owner reviews and personalizes, sent through whichever channel both parties have opted into (LinkedIn, email, SMS, etc.). The first message has to be a real human move. The system optimizes for getting the right two humans across the threshold, not for owning the conversation after they cross it.

### Both sides get to refuse, with grace

A practitioner who appears at the top of a list can decline the match. A project owner who reviews a top ranked practitioner can pass. **Neither refusal is penalized.** The system records the why (when given), uses it to refine future ranking, and moves on. Optimizing for “yes rate” instead of fit is one of the failure modes of every existing platform. This system optimizes for fit.

---

## What Makes This Divine First Principle

A few specific design choices distinguish this from “Upwork but with AI”:

- **Both sides own their context.** Practitioner profiles and project specs are exportable, portable, and not locked in to the platform. (See [progressive sovereignty](/docs/concepts/progressive-sovereignty).)
- **Verified context is the load-bearing asset, not the engagement loop.** The system rewards the practitioner who keeps a deep, accurate, current profile, not the one who responds to notifications fastest.
- **The matching rationale is exposed and editable.** No black-box ranking. The operator can correct the system's understanding in plain language and watch the ranking respond.
- **Refusal is graceful on both sides.** No forced commitments, no penalty for passing.
- **The introduction is human.** The system produces a draft. The human sends the message. The relationship that follows is not surveilled by the platform.
- **It is not free.** Practitioners pay a small subscription to maintain their profile (covering inference costs and platform sustainability). Project owners pay a fee per match they accept. The economics are aligned with **good matching**, not with **maximum throughput**.

The conventional approach optimizes for the platform's engagement and lock-in. This design optimizes for **the project actually getting done well, by the right person, with as little wasted context as possible**.

---

## What This Is Not

This spec is **not** a recommendation to build a single monolithic platform. It is a description of a user experience that could be implemented:

- As a feature inside an existing community OS
- As a small bespoke tool used by one operator's network
- As a standalone product
- As a layer on top of LinkedIn, Discord, or another existing surface

The spec describes the **experience and the mechanism**. The implementation is the next team's call.

---

## What This Spec Demonstrates

If you read this spec and want to write your own (for any problem in any domain), the pattern to imitate is:

1. **Name the actual problem and the actual current options.** Be honest about why each fails.
2. **Describe the experience the system would create**, in the words of the people who would use it.
3. **Surface the design choices that make this not-just-a-clone**: the things you are doing differently because the existing options are wrong.
4. **Be specific about the trust mechanism** (here: verified context with traceable sources). Hand-wavy trust is not a spec.
5. **Name what the spec is not.** Refuse to over-specify the implementation.

That structure works for almost any first principle spec.

---

## Further Reading

- [The Spec Is the Product](/docs/concepts/spec-writing): Why specs are the load-bearing artifact in the AI era
- [Intent Engineering](/docs/concepts/intent-engineering): Encoding purpose into systems so they optimize for the right thing
- [Observable Behavior Engineering](/docs/concepts/observable-behavior-engineering): Translating intent into measurable actions
- [Personal Agentic OS](/docs/concepts/personal-agentic-os): The substrate that makes “unlimited verified context” actually possible per user
- [Progressive Sovereignty](/docs/concepts/progressive-sovereignty): Why both sides should own their context end-to-end
- [Being Someone's Go-To Person](/docs/concepts/being-someones-go-to-person): Who is on the practitioner side of this match
- [Finding Clients](/docs/playbooks/practitioner/finding-clients): The practitioner playbook this system would augment, not replace
