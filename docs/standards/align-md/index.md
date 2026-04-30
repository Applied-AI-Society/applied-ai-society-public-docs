---
sidebar_position: 1
title: ALIGN.md Spec (v0.1)
---

# ALIGN.md Specification v0.1

<!-- last_updated: 2026-04-05 -->
<!-- version: 0.1 -->

ALIGN.md is a file format for teaching AI agents how to evaluate alignment between organizations, people, or entities. Someone pastes your ALIGN.md into their agent and says “evaluate whether we should work together.” The agent reads both parties' ALIGN.md files and returns an honest assessment.

## The Problem

Partnership evaluation is slow, biased, and expensive. The current process looks like this:

1. Someone sends a pitch deck. It's marketing, not truth.
2. You take calls. You read between the lines. You try to assess fit.
3. Months pass. You build trust, invest time, start collaborating.
4. Misalignment surfaces. Different values. Different goals. Different definitions of success.
5. The partnership ends or limps along. Time and trust are lost.

The problem isn't that people are dishonest. It's that the format (pitch decks, intro calls, LinkedIn profiles) rewards presenting the best version of yourself rather than the most accurate version. The uncomfortable truths that kill partnerships at month six never make it into the intro email.

The goal is simple: truncate the amount of time it takes before you know what the first pilot project to partner on is. When you meet someone you vibe with, you should know tactically how you can mutually benefit each other. Not in three months. Now.

ALIGN.md is not a replacement for human intuition. You're not going to send someone your ALIGN.md unless your intuition already says it's worth exploring. This just skips you to the step of: what exactly do you need help with? And if your agent can't answer that question, you haven't communicated to it who you are and what your priorities are. Most people don't even know what they want to do next. Most people don't know what's next for their company. Your agent should always know how it can be most helpful to you in getting to the next step of your journey. If it doesn't, you need to get clear on who you are and what you're building first.

## The Solution

A machine-readable document that honestly describes who you are, what you value, what you bring, what you look for, and what makes you walk away. Published at the org or person level. Designed for agents to read, compare, and evaluate.

ALIGN.md makes bilateral alignment checking possible. When both parties publish, their agents can cross-reference values, dealbreakers, and priorities before anyone takes a call. The goal isn't to replace human judgment. It's to make the initial filter faster and more honest.

## How It Differs from Other Agent Files

| File | Purpose | Audience | Maintained by |
|---|---|---|---|
| [CLAUDE.md](https://docs.anthropic.com/en/docs/claude-code/memory#claudemd-files) | How to behave in this repo | Agent working inside the repo | [Anthropic](https://anthropic.com) |
| [AGENTS.md](https://openagents.com) | How to behave in this repo (multi-agent) | Agent working inside the repo | [OpenAgents](https://openagents.com) |
| [SKILL.md](https://github.com/anthropics/claude-code/blob/main/docs/skills.md) | How to perform a capability | Agent executing a task | [Anthropic](https://anthropic.com) |
| [INTEGRATE.md](/docs/standards/integrate-md) | How to wire this library into a codebase | Agent integrating a library | [Applied AI Society](https://appliedaisociety.org) |
| **[ALIGN.md](/docs/standards/align-md)** | **Are we aligned? Should we work together?** | **Agent evaluating a potential partnership** | **[Applied AI Society](https://appliedaisociety.org)** |

The key difference: the other files are about what to do. ALIGN.md is about whether to do it together. It's relational, not technical.

- `CLAUDE.md` / `AGENTS.md` = how to behave here (internal)
- `INTEGRATE.md` = how to wire this in (technical)
- `SKILL.md` = how to do this thing (capability)
- `ALIGN.md` = are we aligned? (relational)

## Optional YAML Frontmatter

In addition to the `last_updated` HTML comment, ALIGN.md supports an optional YAML frontmatter header for machine-readable structured data. This is useful if you want agents to parse your file without guessing:

```markdown
---
title: "Your Organization Name"
last_updated: 2026-04-05
version: 0.1
entity_type: organization  # or: individual
key_priorities:
  - University partnerships
  - Certification program
  - Austin as Applied AI capital
dealbreakers:
  - Vendor lock-in requirements
  - Enterprise paywalls on foundational knowledge
---
```

This is entirely optional. The markdown sections are the canonical format. Frontmatter is a convenience layer for agents that prefer structured data.

## Required Metadata

Every ALIGN.md must start with a `last_updated` date. This is how agents know whether the file is current. An ALIGN.md without a date is untrustworthy. An ALIGN.md older than 6 months should be treated as stale.

```markdown
<!-- last_updated: 2026-04-05 -->
```

Place this as the first line of the file, before any content. Use ISO 8601 format (YYYY-MM-DD). Update it every time you change anything in the file, especially the Current Priorities section.

## Required Sections

Every ALIGN.md must include these sections, in this order.

### 1. Identity

Who you are. One paragraph. No marketing speak. State what your organization does, how long it's existed, what stage it's at. If you're a person, state your roles and affiliations.

```markdown
# Identity

Applied AI Society is a community and educational organization making the world
applied AI literate. Founded in 2025. Pre-revenue, community-funded. Based in
Austin, TX with chapters forming at universities across the US.
```

Not a tagline. Not a mission statement. Just the facts of who you are right now.

### 2. Mission

What you're trying to accomplish. The North Star metric or goal. This should be concrete enough that someone could measure progress.

```markdown
# Mission

Make the world applied AI literate. North Star metric: number of people who
complete AAS certification and can demonstrate applied AI competence in their
domain.
```

### 3. Values

Non-negotiable principles. Be specific, not generic. “We value integrity” is useless. “We will not partner with organizations that train AI on unconsented data” is useful.

Every value should be testable. If you can't imagine a scenario where it would cost you something, it's not a real value. It's a platitude.

```markdown
# Values

- Sovereignty over convenience. We will not build systems that create
  dependency on any single vendor, including us.
- Open source by default. Our curriculum, tools, and standards are public.
- Signal over noise. We'd rather publish one useful thing than ten
  impressive-sounding things.
- Permissionless knowledge. No gatekeeping. No paywalls on foundational
  literacy.
```

### 4. Capabilities

What you bring to the table. Concrete, not aspirational. Only list what you can deliver today. If it's in development, say so.

```markdown
# Capabilities

- Applied AI curriculum covering agents, context engineering, and harness design
- 500+ active community members across 8 university chapters
- Event infrastructure (Applied AI Live series, hackathons)
- Standards development (INTEGRATE.md, ALIGN.md)
- In development: certification program, corporate training pilot
```

### 5. Looking For

What kinds of alignment you seek. Partner archetypes, collaboration types, specific needs. Be specific about what a good partner looks like so agents can match efficiently.

```markdown
# Looking For

- University partners who want to bring applied AI literacy to their students
- Community partners who run meetups, hackathons, or study groups
- Sovereignty-aligned sponsors (no hyperscaler dependency, open source friendly)
- Practitioners who want to teach what they've built
```

### 6. Dealbreakers

What makes you walk away. Be explicit. This is the most important section in the entire file.

The test: if something would kill a partnership six months in, put it here now. Don't soften it. Don't frame it diplomatically. State it plainly. The whole point of ALIGN.md is to surface these before anyone invests time.

```markdown
# Dealbreakers

- Partnerships that require exclusive vendor lock-in
- Organizations that gate foundational knowledge behind enterprise pricing
- Partners who want brand control or co-branding approval rights over
  our content
- Relationships where we'd be a marketing channel rather than a genuine
  collaborator
- Anyone building what we'd call a "life harness" -- systems designed to
  capture and extract rather than liberate and empower
```

See the AAS concept page on [the life harness](/docs/concepts/the-life-harness) for context on that last point.

### 7. Current Priorities

What you're focused on right now. This section is temporal and should be updated quarterly. It tells potential partners what's on your plate and where collaboration would have the most impact.

```markdown
# Current Priorities (Q2 2026)

- Landing first university keystone partnership
- Launching corporate upskilling pilot
- Austin as Applied AI capital initiative
- Course content development and certification framework
- Incorporation and legal structure
```

### 8. How to Engage

The first step. Be specific about how someone should reach out and what happens next. If the reader is an agent, it should know the exact procedure. If a human, they should know what to send and where to send it.

```markdown
# How to Engage

- **Discord:** open a thread in the #partnerships channel of our [Discord](https://discord.gg/K7uWJBMFaN) with subject "ALIGN check"
- **DM:** @AppliedAISoc on X
- **Or publish your own:** Include a link to your ALIGN.md in any outreach. We'll run a bilateral evaluation and get back to you with the results.

If we don't have an ALIGN.md yet and you send yours, we'll do our best to evaluate it manually. The point is to start the honest conversation, not wait for perfect infrastructure.
```

#### What If They Don't Have an ALIGN.md?

This will be the normal case for a while. Most people you evaluate won't have published one yet. That's fine. Your agent should prompt you with the key questions from your ALIGN.md -- dealbreakers, what you're looking for, what matters right now -- and help you evaluate them manually. The spec makes the process explicit even when the counterparty hasn't adopted it.

If you want to encourage them to publish one, send them a link to this spec. ALIGN.md adoption spreads through bilateral evaluation: someone receives your ALIGN.md, reads it, realizes it's useful, and publishes their own.

## Optional Sections

These are useful but not required.

### Core Values

For organizations or individuals operating with deeply held convictions. Include the ones that would affect partnership decisions. Many organizations and leaders operate from frameworks that shape their priorities and boundaries. Making these explicit prevents misunderstanding later.

```markdown
# Core Values

Bright Harvest Collective operates from a deep mission orientation.
Every major decision is held in deep deliberation first. Partners do not need to share
this conviction, and they should know it shapes the Collective's priorities
and timelines.
```

### Network

Key relationships and communities you're part of. This helps agents identify shared connections and community overlap.

```markdown
# Network

- OpenTeams and the Open Teams Incubator (Founding Sponsors)
- Antler (Austin venue partner for Applied AI Live and Supersuit Up workshops)
- PromptLab (collaboration with Steven Tran / Soundcheck)
- University chapters at UT Austin, Georgia Tech, and others forming
```

### References

Links to deeper context. Other ALIGN.md files, public documentation, relevant websites.

```markdown
# References

- Full public docs: https://docs.appliedaisociety.org
- INTEGRATE.md spec: https://docs.appliedaisociety.org/docs/standards/integrate-md
- Philosophy and canon: https://docs.appliedaisociety.org/docs/philosophy
```

## The Union Principle

A person's ALIGN.md is a synthesis of their organizations' ALIGN.md files.

If someone runs an education nonprofit, co-founded a software company, and chairs a civic coalition, their personal ALIGN.md references all three. Someone evaluating "should we work with this person?" gets the full picture: the educational mission, the technical capabilities, and the civic framework that shapes their decisions.

This means a person's ALIGN.md will often be longer and more nuanced than any single organization's. That's correct. People are more complex than orgs. The union principle captures that complexity honestly.

When writing a personal ALIGN.md:
- Synthesize, don't copy-paste. The personal file should read as a coherent whole, not a list of org descriptions.
- Surface tensions. If your orgs have different priorities, say so. That's useful information for a potential partner.
- Declare which hats you're wearing. “For AAS partnerships, email X. For other collaborations, email Y.”

## Privacy Tiers

Not everything belongs in a public ALIGN.md. Some strategic information (specific pipeline targets, proprietary partnership criteria, internal scoring rubrics) would give away your playbook if published. The spec supports two tiers:

**Public ALIGN.md** lives at your website root (`/ALIGN.md`). This is what agents and strangers fetch. It should contain your identity, mission, values, general capabilities, what you're looking for, dealbreakers, and how to engage. Think of it as what you'd say on stage if someone asked “what are you about and who should work with you?”

**Private ALIGN.md** lives in your internal docs, your agent's context, or shared on request. This is where you put specific partnership targets, scoring rubrics, internal evaluation criteria, names of people you're actively pursuing, and strategic priorities you don't want competitors to see.

The public file is the handshake. The private file is the strategy. Both follow the same format. The public file links to the spec. The private file never gets published.

When someone sends you their ALIGN.md, your agent reads it against your private file (the full evaluation criteria), not just the public one. This means your public ALIGN.md can be honest about values and dealbreakers without telegraphing your specific moves.

## Where It Lives

In a repo: `ALIGN.md` at the root. This is where agents and developers find it on GitHub.

On a website: `/ALIGN.md` at the root. This is where agents fetching public information find it.

Both is ideal. The repo file is the source of truth. The website file is a distribution channel.

## Design Principles

**Honesty over marketing.** Include the uncomfortable stuff. The dealbreakers, the deep convictions, the things that make some partners a bad fit. If your ALIGN.md reads like a pitch deck, you've missed the point.

**Specificity over platitudes.** “We value diversity” tells an agent nothing. “We require that partner organizations have published DEI commitments with measurable goals” tells it exactly what to check. Concrete examples, not generic values.

**Currency over permanence.** Update quarterly, especially Current Priorities. An ALIGN.md from two years ago is worse than no ALIGN.md. The temporal sections are what make bilateral evaluation useful in real time.

**Machine-readability.** Clean markdown, clear headers, bullet points. Agents parse structure better than prose. Keep sections distinct. Don't bury dealbreakers in paragraph form inside the Values section.

**Bilateral by design.** ALIGN.md works when one party publishes. It works dramatically better when both do. The format is designed so two agents can cross-reference sections: your Dealbreakers against their Values, your Looking For against their Capabilities, your Mission against their Mission. Encourage partners to publish their own.

## Self-Reflection Tips

A good ALIGN.md requires knowing yourself first. If you have no idea what you want to do next, no document format will help. But if you want to write one and are struggling with clarity:

- **Start with dealbreakers.** These are usually the easiest to name. What has killed your partnerships before? What are you absolutely not willing to compromise on? Start there.
- **Write your Mission as a measurement.** If you can't measure it, you don't have a mission -- you have a slogan. “Make the world applied AI literate, measured by people who complete our certification and demonstrate competence” is a mission. “Empower people through AI” is not.
- **Ask yourself what would cost you money.** Real values cost something. If a value sounds good but you can't imagine a scenario where it would make you turn down revenue or a partnership, it is not a value. It is decoration.
- **Update quarterly.** An ALIGN.md is a living document. Current Priorities will change. Capabilities will grow. If it has been more than six months since your last update, treat it as untrustworthy.
- **Tensions are honest.** If your org has competing priorities or internal disagreements, say so. That is more valuable than a clean narrative that hides the mess.

## Template

A blank ALIGN.md template lives in the Applied AI Society GitHub:

```bash
curl -O https://raw.githubusercontent.com/Applied-AI-Society/applied-ai-society-public-docs/main/docs/standards/align-md/template.md
```

You can also [view the raw template](/docs/standards/align-md/template) for a formatted version.

Copy it to your repo root, fill it out, and start using it immediately.

## Write Your Own ALIGN.md

Copy this into your AI coding agent. It will read the spec, study the example, and draft an ALIGN.md for you.

````markdown
# Write an ALIGN.md for This Organization

Before writing anything, read these three pages in order:

1. The ALIGN.md spec: https://docs.appliedaisociety.org/docs/standards/align-md
2. The writing guide: https://docs.appliedaisociety.org/docs/standards/align-md/writing-guide
3. The reference example: https://docs.appliedaisociety.org/docs/standards/align-md/example

Now interview me about my organization. Ask about identity, mission, values,
capabilities, what I'm looking for, dealbreakers, and current priorities.

Then create an `ALIGN.md` at the repo root following the spec you just read.
Focus on honesty and specificity. Push me on the Dealbreakers section.
````

## Evaluate a Potential Partner

Copy this into your agent when someone sends you their ALIGN.md (or any partnership document). It will cross-reference against yours and return a structured assessment.

````markdown
# Evaluate Alignment with a Potential Partner

Read my ALIGN.md (pasted below or at [your ALIGN.md URL]).

Now read the potential partner's document (pasted below or at [their URL]).

Cross-reference these sections:
1. Their Values against my Dealbreakers (any triggers?)
2. My Values against their Dealbreakers (any triggers?)
3. Their Capabilities against my Looking For (what matches?)
4. My Capabilities against their Looking For (what matches?)
5. Their Mission against my Mission (complementary or competing?)
6. Their Current Priorities against mine (timing alignment?)

Output:
- Dealbreakers triggered (if any): stop here
- Alignment score (1-10): 1 means no overlap, 10 means near-perfect fit
- Top 3 alignment points (strongest overlaps)
- Top 3 gaps or risks
- Suggested first pilot project (based on the intersection of their
  capabilities and my current priorities)
- Recommendation: Pursue / Explore / Pass
````

## Standard Footer

Every ALIGN.md should end with a link back to the spec. This is how the standard spreads: someone's agent fetches your ALIGN.md, sees the spec link, and now their human knows the concept exists.

```markdown
---

*This file follows the [ALIGN.md standard](https://docs.appliedaisociety.org/docs/standards/align-md),
an open format for agent-readable alignment evaluation. Publish your own ALIGN.md
so we can do bilateral evaluation: https://docs.appliedaisociety.org/docs/standards/align-md*
```

## Version Note

This is v0.1. It's intentionally minimal. We're publishing based on what we've learned from evaluating partnerships at AAS, where misalignment surfaced late and cost real time. As more organizations publish ALIGN.md files, the spec will evolve based on real usage patterns.

## Further Reading

- [ALIGN.md Example](/docs/standards/align-md/example): A worked example showing what a complete ALIGN.md looks like in practice.
- [ALIGN.md Writing Guide](/docs/standards/align-md/writing-guide): How to write your own ALIGN.md, including common mistakes to avoid.
