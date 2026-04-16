---
sidebar_position: 1
title: "Specs"
---

# Specs

*Public design specifications for the systems we wish existed. Train yourself to think from divine first principles, not from the catalog of what is already on the shelf.*

---

## What This Section Is

A **spec** here is a written design for a system, a workflow, or a user experience that solves a real problem from the ground up. It describes what the experience should feel like, what guarantees it should make, and what the underlying mechanics should do. It does not commit to a specific platform, vendor, or stack.

Specs are short. They are opinionated. They name the problem first, then describe the experience, then sketch the mechanism. The implementation is left to the team that picks them up.

We publish specs for two reasons:

1. **To put solid designs into the commons.** Not every problem needs to be re-thought from scratch by every team. A well-written spec can be forked, adapted, and shipped in many forms.
2. **To teach the discipline of designing from first principles.** Most builders today reach for an existing platform first, then bend their problem to fit it. That order is backwards. The spec comes first. The platform is a downstream choice.

---

## Divine First Principle Design

The phrase we keep using around here is **divine first principle design**. Two ideas pressed together:

**First principle design** is the engineering discipline of asking: *if I designed this system from scratch, ignoring everything that currently exists, what would actually serve the people on both sides best?* It is the rigor of refusing to be fooled by the path-dependent shape of legacy products.

**Divine** is the qualifier that pulls the design above mere optimization. It asks: *what would honor the dignity of every person involved? What would create genuine win-win? What is the design that honors everyone touched by it, not just the design that maximizes engagement metrics?* It is the willingness to refuse extractive defaults even when they would be profitable.

A divine first principle spec starts from the human reality, names what would actually be good for everyone touched by the system, and then describes the mechanism that would make it so. The right platform falls out of that. Not the other way around.

For the broader case on why specs are the load-bearing artifact in the AI era, see [The Spec Is the Product](/docs/concepts/spec-writing). For the related discipline of encoding purpose into systems, see [Intent Engineering](/docs/concepts/intent-engineering).

---

## How to Use These

You can read a spec here for any of the following reasons:

- **As a template.** Copy its structure to write your own spec for an unrelated problem.
- **As inspiration.** Steal the design directly if it fits your domain.
- **As a fork point.** Implement it yourself, in your own stack, with your own variations.
- **As critique fuel.** Disagree with the design and write a better one. We welcome PRs that propose alternative specs.

Every spec here should be readable by both a serious technologist and a serious operator. If a spec is too jargon-heavy for the operator or too hand-wavy for the technologist, it has not been written well enough yet.

---

## Specs So Far

1. **[Practitioner Matching](/docs/specs/practitioner-matching)**: A talent-allocation system where projects upload unlimited verified context, practitioners upload unlimited verified context, and the matching is a ranked list with the rationale exposed. Built to demonstrate what a context-rich, divine first principle alternative to the resume-and-cover-letter platform model looks like.

If you want to contribute a spec for a problem worth designing for openly, [open a PR](https://github.com/Applied-AI-Society/applied-ai-society-public-docs) or post in the [AAS Discord](https://discord.gg/K7uWJBMFaN).

---

## Why This Discipline Matters Right Now

We are in a season where the existing platform layer is going to get re-thought from the ground up. Every category has products built on assumptions from a pre-AI, pre-context-rich world. A team that can think clearly from first principles has a structural advantage over a team that defaults to the existing catalog.

Spec-writing is the muscle that produces that advantage. Read these. Write your own. Treat the spec as the artifact that matters most. The world will have plenty of capable executors. The scarce resource is people who can describe what should be built well enough that capable executors can ship it.
