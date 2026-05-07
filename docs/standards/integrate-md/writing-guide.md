---
sidebar_position: 2
title: Writing Guide
---

# Writing an INTEGRATE.md

This guide covers practical advice for authoring an effective INTEGRATE.md. The [spec](./index.md) defines the format. This page helps you write one that actually works.

The advice below applies to both flavors (Library Into Codebase, Service Into Personal Agentic OS) unless a section is explicitly labeled. Flavor-specific tips are grouped under their own headings near the bottom.

## Start from the Verification Test

Write your Quick Test section first. What command should the agent run to prove the integration works? What output confirms success?

Work backwards from there. Every section in your INTEGRATE.md should contribute to making that test pass. If a section doesn't help the agent reach that outcome, cut it.

## Map Your Concepts to Unknown Patterns

Your library has its own vocabulary. The target codebase has different vocabulary for similar things. Your job is to bridge the gap.

Bad:
```markdown
Register a CESP event emitter in your application lifecycle.
```

Good:
```markdown
Find this CLI's event system (command lifecycle, hooks, callbacks,
event emitters -- whatever it uses). Map those events to CESP categories.
```

The first version assumes the agent knows what a “CESP event emitter” means in context. The second tells it what to look for in whatever codebase it's working in.

## Don't Assume Language or Framework

INTEGRATE.md targets any codebase. Your examples can show specific languages (agents understand code), but your instructions should be language-agnostic.

Bad:
```markdown
Add this to your package.json dependencies.
```

Good:
```markdown
Add the CESP module to your project's dependencies using whatever
package manager this project uses.
```

If your library only supports one language, say so upfront. But keep the integration steps focused on what to do, not how a specific framework does it.

## Give the Agent Decision Points, Not Decisions

Agents work best when you describe the tradeoff and let them choose based on the target codebase.

Bad:
```markdown
Store packs in ~/.mylib/packs/.
```

Good:
```markdown
Pick a storage path for packs. Common patterns:
- ~/.yourclitool/packs/ (CLI-specific)
- ./sounds/ (bundled in repo)
- Wherever makes sense for this tool
```

The agent knows the target project's conventions. Let it apply them.

## Writing for Flavor B (Service Into Personal Agentic OS)

Flavor B recipes wrap external CLIs and MCPs that ship and break independently. The discipline is different from Flavor A in three places:

### Pin Versions In "Last Verified"

Do not just write the date. Include the OS, runtime version, and primary CLI/MCP version you tested with.

Bad:

```markdown
## Last Verified

2026-05-06.
```

Good:

```markdown
## Last Verified

2026-05-06 on macOS, Node 22, gog CLI 0.5.x.
```

The version pinning is what lets a future operator reading your recipe diagnose breakage when a newer CLI version ships incompatibly.

### Sanitize Personal Info In Setup Commands

Every shell command must use placeholders for emails, tokens, and paths. Real credentials never go in a published recipe. The convention:

- Emails: `you@example.com`
- Tokens: `<your-token>`
- Doc IDs / file IDs: `<doc-id>`

Operators copy-pasting your recipe should be able to swap one variable for their own value, not edit twelve lines.

### Always List Alternatives

A Flavor B recipe wraps a chosen path through a competitive ecosystem. The Alternatives section is mandatory, not optional. List at least one other tool that could deliver the same capability with a different tradeoff.

This protects future operators when your primary CLI ships a breaking change. The alternatives section names the next path they can adopt without rewriting the recipe.

### Name A Maintainer

A library author at a known GitHub handle. Operators picking up the recipe need a single human to ping when the underlying tooling shifts or a gotcha surfaces that the recipe missed.

### Common Gotchas Are Not Optional

Flavor B recipes wire OAuth flows, env vars, and Keychain entries. Things go wrong. The first time you run the recipe end-to-end on a fresh machine is when you find the gotchas. Capture them in the recipe immediately. Skipping this section is how recipes get a reputation for "almost working."

## Writing for Flavor A (Library Into Codebase)

Flavor A recipes assume the agent is already inside the target codebase. The discipline below is about teaching that agent to map your library's vocabulary onto whatever it finds.

### Map Your Concepts to Unknown Patterns

Already covered above. The key Flavor A move: parenthetical lists of patterns the agent should look for, not assumptions about which pattern the codebase uses.

### Don't Assume Language or Framework

Already covered above. Flavor B recipes can name the runtime explicitly (Node 18+); Flavor A recipes typically cannot.

## Common Mistakes

### Writing for Humans Instead of Agents

INTEGRATE.md is not a tutorial. Don't explain concepts. Don't provide context about why your library exists. Don't include “Getting Started” sections that walk through prerequisites.

The agent already has context. It needs the mapping.

### Skipping the Quick Path

Most integrations have a simple case and a full case. If someone just wants the basics, give them a shortcut. This prevents agents from over-engineering a simple integration.

### Vague Verification

“Test that it works” is not verification. "Run `mycli sounds install peon`, then start the CLI. You should hear audio on startup" is verification. The agent needs to know exactly what success looks like.

### Bundling Install Instructions

If your library requires installation, that belongs in install.md. INTEGRATE.md assumes the library is already available. Don't mix the two concerns.

### Too Much Detail on Internals

Link to your API docs. Don't reproduce them. The agent can fetch reference material if it needs it. INTEGRATE.md should contain the integration logic, not the library's full surface area.

## Checklist Before Publishing

### Shared Spine (both flavors)

- [ ] Does the file start with `<!-- last_updated: YYYY-MM-DD -->`?
- [ ] Does the H1 title state what's being built (Flavor A) or what skill is being installed (Flavor B)?
- [ ] Does "What You're Building" / "What This Gives You" describe the end state in one paragraph?
- [ ] Does verification include a concrete command and expected result?
- [ ] Is the file free of marketing copy, changelogs, and install instructions for adjacent tools?
- [ ] Does the file end with the standard footer linking back to the spec?

### Flavor A only (Library Into Codebase)

- [ ] Does the file tell the agent to read the codebase before writing code?
- [ ] Are integration steps numbered and imperative?
- [ ] Are concept mappings shown as tables?
- [ ] Can an agent in a codebase it's never seen follow these steps?

### Flavor B only (Service Into Personal Agentic OS)

- [ ] Does Prerequisites list every account, runtime, and CLI the operator's machine needs?
- [ ] Does Setup use placeholders for personal info (`you@example.com`, `<token>`)?
- [ ] Does "Last Verified" include OS + runtime version + primary CLI version, not just a date?
- [ ] Does Alternatives list at least one other path with its tradeoff?
- [ ] Does Common Gotchas reflect real failure modes from running the recipe end-to-end?
- [ ] Is a Maintainer named with a real GitHub handle?
- [ ] Does the folder name match the SKILL.md `name:` field exactly?
