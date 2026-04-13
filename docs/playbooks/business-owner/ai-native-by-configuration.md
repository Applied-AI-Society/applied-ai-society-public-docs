---
sidebar_position: 4
title: "AI-Native by Configuration, Not Construction"
---

# AI-Native by Configuration, Not Construction

*You do not have to build Glass to get Glass. The same outcomes are now available as configuration on top of mature agent platforms. One person, a few days, no infrastructure team required.*

---

## The Question the Ramp Story Raises

We have a full [case study on Ramp's Glass](/docs/case-studies/ramp-glass), the internal AI suite they built from scratch to close their harness gap and make their 700 employees actually productive with AI. Reusable skills, org-wide knowledge, scheduled automations, Slack-native assistants, 99% adoption, 1,500 apps shipped in six weeks. The outcome is the kind of thing every business owner reading that case study wants for their own team.

The obvious follow-up question is: **do I need an engineering team of my own to build a Glass before my company can work like Ramp does?**

No. You do not. The harness layer has already commoditized, and the business-owner move in 2026 is to get this operational in days on top of an existing agent platform, not to spend six months building a custom internal suite.

---

## What Ships As Configuration Now

Nader Dabit (formerly DevRel at Edge & Node, AWS; now Growth at Cognition) wrote a clear walkthrough in April 2026 of exactly what is available off-the-shelf inside [Devin](https://devin.ai), Cognition's AI teammate platform. Every layer Ramp built custom ships as configuration:

| Glass Built | Devin Configures (or equivalent) |
|---|---|
| Auto-configured tool integrations | Native connectors + MCP Marketplace (GitHub, Slack, Jira, Linear, Notion, Sentry, Datadog, PostgreSQL, Stripe, HubSpot, Salesforce, BigQuery, and 100+ more via one-click OAuth) |
| Reusable skills library | `SKILL.md` files in repos (open [Agent Skills standard](https://github.com/anthropics/skills/tree/main/AGENT_SKILLS.md)), auto-indexed across all connected repositories |
| Persistent organizational memory | Org-wide Knowledge entries with triggers, scoped at org / enterprise / repo level |
| Playbooks and templates | Org-wide prompt templates with macros (`!investigate`, `!deploy-checklist`, etc.) |
| Scheduled automations | Cron-based scheduled sessions (Managed Devins for parallel work, notifications to Slack) |
| Slack-native assistant | Tag `@Devin` in any channel, inline keywords like `!ask`, `!deep`, `!dana`, `!fast` |
| Enterprise-wide standards | Enterprise Knowledge, Enterprise Playbooks, Golden Snapshots propagating across all orgs |

Source: [Nader Dabit, "How to Make a Company AI-Native (without building anything)," X, April 2026](https://x.com/dabit3/status/2043712692536349175).

The point is not that Devin specifically is the only right answer. The point is that this stack is now a commodity: Devin, Claude Code, Cursor, and adjacent platforms all ship increasingly similar primitives. **What took Ramp a dedicated engineering team six months in 2025 is a weekend configuration job for most companies in 2026.**

---

## The Stack, Demystified

Here is what actually goes into making a company AI-native by configuration. Every item is one person, one session, one check-box away:

1. **Integrations.** Connect your company's real tools (source control, ticketing, CRM, observability, databases, communications). Most are one-click OAuth. Internal tools can be wired in via MCP with a few lines of config.
2. **Skills (`SKILL.md` files).** The unit of shared procedure. When someone figures out the right way to investigate a production error, deploy to staging, or scaffold a service, they commit a `SKILL.md` and it becomes available to every future agent session across the company. See [Instruction Files](/docs/concepts/instruction-files) for the underlying concept.
3. **Knowledge.** The context your AI needs to stop being generic. "MRR is stored in cents." "Never deploy on Fridays after 3 pm." "Active user means at least one event in the past 30 days." Written once, recalled automatically on every relevant task.
4. **Playbooks.** Named prompt templates (`!quarterly-review`, `!onboarding-audit`) that anyone can invoke to run a standard procedure.
5. **Scheduled sessions.** Cron-driven recurring work: daily health digests, weekly dependency updates, Monday morning metrics reports, nightly smoke tests. None of it requires someone to remember to start it.
6. **Chat-native placement.** The assistant lives where your team already lives (Slack, Teams, Linear) instead of in a separate browser tab they have to remember to open.

Every one of these is additive. A skill committed today is available to every person and every session from that point forward. That is the [Raise the Floor](/docs/concepts/raise-the-floor) dynamic, now available as configuration.

---

## Why This Matters for Business Owners in 2026

**The build-vs-configure tradeoff has flipped.** In 2025, if you wanted Glass-level outcomes you had to build Glass. That meant a dedicated engineering investment, a platform team, and a willingness to maintain internal tooling indefinitely. Most companies could not afford it. The ones that could (Ramp, a handful of tech-forward incumbents) pulled away fast.

In 2026, the floor moved up. The baseline agent platforms now ship the primitives. One operator inside your company can set up integrations, write the first batch of skills, populate knowledge, wire up scheduled sessions, and hand the team a working system in a few days. No infrastructure to build. No ongoing tooling team. Just refinement as your team uses it.

The business implications:

- **Time-to-AI-native went from quarters to days.** If you are not operational by end of month, you are choosing not to be.
- **The leverage is in the operator, not the platform.** Picking the right person to do the configuration work matters more than picking the right vendor. See [Hiring Practitioners](/docs/playbooks/business-owner/hiring-practitioners).
- **The compounding is immediate.** Day one you ship one skill. Day seven you have twenty. Day ninety you have a shared knowledge base that makes every new hire productive on their first login.
- **The cost of delay is measured in organizational capability, not just dollars.** Every month you wait, your competitors who started in April are 60 days further ahead on the compounding curve. See [Your Two Futures](/docs/philosophy/your-two-futures).

---

## The Service Opportunity for Practitioners

Nader's post makes one other point that we want to repeat loudly for the practitioner side of the AAS community: **this is a real service engagement, and a valuable one.**

If you are a practitioner, consultant, or agency, you can stand up this entire stack for a client in a defined engagement window:
- Connect their tools
- Write skills tailored to their workflows
- Configure their knowledge base
- Set up scheduled automations
- Hand them a working system
- Train one or two internal champions to keep adding to it

That is a deliverable a serious mid-market company will pay real money for, and none of it requires you to write custom software. See the [Practitioner playbooks](/docs/playbooks/practitioner) for pricing, scoping, and the Minimum Viable Jarvis pattern that anchors this engagement model.

---

## When Should You Still Build Custom

Configuration is the right answer for 99% of companies. The exceptions:

- Enterprises at a scale where a custom platform pays for itself in a year (Ramp's bar). If you are running 700+ people with velocity culture and the engineering team to sustain the build, Glass-style custom infra unlocks things configuration cannot match.
- Companies whose primary product involves an agentic layer that is the product itself, not internal tooling.
- Industries with regulatory or security constraints that force custom provisioning.

For everyone else, configuration wins on time-to-value, cost, and maintainability. The Ramp case study is worth reading as the north star. It is not worth reading as the mandatory path.

---

## Further Reading

- [Ramp: Glass](/docs/case-studies/ramp-glass): The case study. What they built and why. Read this first to understand the ceiling of what AI-native looks like.
- [Harness Engineering](/docs/concepts/harness-engineering): Why the harness is the bottleneck, not the model. The principle that makes configuration-over-construction work.
- [Instruction Files](/docs/concepts/instruction-files): `SKILL.md`, `AGENTS.md`, and the shared-procedure unit.
- [Raise the Floor](/docs/concepts/raise-the-floor): Why every skill committed is immediately available to everyone. The compounding mechanic.
- [The Self-Improving Enterprise](/docs/concepts/self-improving-enterprise): What this stack makes possible at the organizational level.
- [Hiring Practitioners](/docs/playbooks/business-owner/hiring-practitioners): Picking the right operator to do the configuration work.
- [Personal Agentic OS](/docs/concepts/personal-agentic-os): The individual-scale analogue of this company-scale configuration.

---

## Source

Nader Dabit, "How to Make a Company AI-Native (without building anything)," originally published on X in April 2026. Post describes how every capability Ramp built into Glass ships as configuration inside Devin. Quotes and table adapted from the post with attribution.
