---
sidebar_position: 2
title: Writing Guide
---

# Writing an INTEGRATE.md

This guide covers practical advice for authoring an effective INTEGRATE.md. The [spec](./index.md) defines the format. This page helps you write one that actually works.

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

The first version assumes the agent knows what a "CESP event emitter" means in context. The second tells it what to look for in whatever codebase it's working in.

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

## Common Mistakes

### Writing for Humans Instead of Agents

INTEGRATE.md is not a tutorial. Don't explain concepts. Don't provide context about why your library exists. Don't include "Getting Started" sections that walk through prerequisites.

The agent already has context. It needs the mapping.

### Skipping the Quick Path

Most integrations have a simple case and a full case. If someone just wants the basics, give them a shortcut. This prevents agents from over-engineering a simple integration.

### Vague Verification

"Test that it works" is not verification. "Run `mycli sounds install peon`, then start the CLI. You should hear audio on startup" is verification. The agent needs to know exactly what success looks like.

### Bundling Install Instructions

If your library requires installation, that belongs in install.md. INTEGRATE.md assumes the library is already available. Don't mix the two concerns.

### Too Much Detail on Internals

Link to your API docs. Don't reproduce them. The agent can fetch reference material if it needs it. INTEGRATE.md should contain the integration logic, not the library's full surface area.

## Checklist Before Publishing

- [ ] Does the H1 title state what's being built?
- [ ] Does "What You're Building" describe the end state in one paragraph?
- [ ] Does the file tell the agent to read the codebase before writing code?
- [ ] Are integration steps numbered and imperative?
- [ ] Does verification include a concrete command and expected result?
- [ ] Is the file free of marketing copy, changelogs, and install instructions?
- [ ] Can an agent in a codebase it's never seen follow these steps?
