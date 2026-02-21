---
sidebar_position: 1
title: INTEGRATE.md Spec (v0.1)
---

# INTEGRATE.md Specification v0.1

INTEGRATE.md is a file format for teaching AI coding agents how to wire a library's capabilities into an existing codebase. The agent reads the file, scans the target project, and executes the integration steps autonomously.

## How It Differs from Other Agent Files

| File | Purpose | Audience | Maintained by |
|---|---|---|---|
| [CLAUDE.md](https://docs.anthropic.com/en/docs/claude-code/memory#claudemd-files) | How to behave in this repo | Agent working inside the repo | [Anthropic](https://anthropic.com) |
| [AGENTS.md](https://openagents.com) | How to behave in this repo (multi-agent) | Agent working inside the repo | [OpenAgents](https://openagents.com) |
| [llms.txt](https://llmstxt.org) | What this project is and does | Agent learning about the project | [llmstxt.org](https://llmstxt.org) |
| [install.md](https://github.com/nicholascelesworthy/install.md) | How to install this tool | Agent setting up dependencies | [Nicholas Celesworthy](https://github.com/nicholascelesworthy) |
| [SKILL.md](https://github.com/anthropics/claude-code/blob/main/docs/skills.md) | How to perform a capability | Agent executing a task | [Anthropic](https://anthropic.com) |
| **[INTEGRATE.md](https://docs.appliedaisociety.org/standards/integrate-md)** | **How to wire this library into a codebase** | **Agent integrating a library into an unknown project** | **[Applied AI Society](https://appliedaisociety.org)** |

The key difference: INTEGRATE.md assumes the agent is working in a codebase it already understands, and needs to add capabilities from an external library. The agent knows the target. It needs to learn the source.

## Required Sections

Every INTEGRATE.md must include these sections, in this order.

### 1. H1 Title

Name the library and what's being wired up. Be specific about the outcome.

```markdown
# Add CESP Sound Pack Support to This CLI
```

Not "CESP Integration Guide." Not "Getting Started with CESP." State what the agent is building.

### 2. What You're Building

One paragraph describing the end state. What will the codebase do after integration that it doesn't do now? This orients the agent before it reads any implementation details.

```markdown
When this CLI does something notable (starts up, finishes a task, hits an error),
it should play a sound from the user's installed sound pack.
```

### 3. Read the Codebase First

A directive telling the agent to scan the target project before writing any code. Name the specific patterns it should look for.

```markdown
Read this codebase. Find the event system (command lifecycle, hooks,
callbacks, event emitters -- whatever this CLI uses).
```

This prevents the agent from blindly pasting boilerplate without understanding what it's integrating into.

### 4. Integration Steps

Numbered, imperative, concrete steps. Each step should describe what to do, not explain why. Use tables for concept mappings. Use fenced code blocks for exact commands or file contents.

```markdown
## CESP Event Categories

Map this CLI's internal events to these standard categories:

| Category | When to emit |
|---|---|
| session.start | CLI launches, new session begins |
| task.complete | Work finished successfully |
| task.error | Something failed |
```

### 5. Verification

A concrete test command and expected result. The agent should be able to run this and know whether integration succeeded.

```markdown
## Quick Test

Install a pack and test:

mycli sounds install peon

Now use your CLI -- you should hear "Something need doing?" on start.
```

## Optional Sections

These are useful but not required:

- **Quick Path** -- A shortcut for the simplest case (e.g., bundling one pack instead of supporting a registry)
- **Cross-Platform Notes** -- Platform-specific commands or behaviors
- **Configuration** -- Settings the integration should expose
- **Links** -- Spec URLs, registries, reference implementations

## What to Omit

INTEGRATE.md is not documentation. Leave out:

- Marketing copy or feature comparisons
- Changelogs or version history
- Full API reference (link to it instead)
- Installation instructions (that's install.md's job)
- Tutorials or explanations aimed at humans

The audience is an agent that already has context on the target codebase. Give it the mapping, not the pitch.

## Formatting Rules

- **Imperative voice.** "Create a module" not "You should create a module."
- **Tables for mappings.** When showing how library concepts map to codebase patterns, use tables.
- **Fenced code blocks** for exact commands, file contents, and code snippets.
- **Short sentences.** Agents parse structure better than prose.

## Skeleton Template

Copy this as a starting point:

````markdown
# Add [Library] Support to This [Project Type]

You are adding [library] support to this [project type]. [One sentence on what the library does and why it matters here.]

## What You're Building

[One paragraph describing the end state after integration.]

## Read the Codebase First

Read this codebase. Find [specific patterns to look for] (e.g., event systems, route handlers, config files, plugin architectures). Understand how this project is structured before writing any integration code.

## [Core Concept Mapping]

Map this [project type]'s internal [events/routes/models] to these [library] categories:

| [Library Concept] | When to use |
|---|---|
| concept.one | [When this maps to something in the target codebase] |
| concept.two | [When this maps to something else] |

## [Data Format / Schema]

[Show the key data structures the agent needs to work with.]

```json
{
  "example": "manifest or config"
}
```

## Quick Start: Just Want [Simplest Case]?

[Shortcut for the minimal integration. Skip the full setup.]

## [Full Integration Steps]

[Numbered steps for the complete integration.]

## Implementation Checklist

1. Read the codebase and identify [what to look for]
2. Create a [module/file] that handles [responsibilities]
3. Wire [target codebase events] into [library concepts]
4. Add configuration ([list settings])
5. Test it: [concrete test command and expected result]

## Quick Test

[Exact commands to verify the integration works.]

## Links

- [Spec/docs URL]
- [Registry/package URL]
- [Reference implementation URL]
````

## Publishing Your INTEGRATE.md

### README Reference

Your project's README.md should link to the INTEGRATE.md file. This is how developers (and their agents) discover it. Add a section like:

```markdown
## Integration

Want to add [library] support to your project? Copy the contents of
[INTEGRATE.md](./INTEGRATE.md) into your AI coding agent and let it
handle the wiring.
```

The INTEGRATE.md file does the heavy lifting. The README just points to it.

### Surfacing on Your Website

If your project has a marketing site or docs site, render the INTEGRATE.md content there too. The file in the repo is the source of truth. The website is a distribution channel.

The pattern:

1. Keep `INTEGRATE.md` at the repo root. This is where agents and developers find it on GitHub.
2. Have your site read that file at build time and render it on a page like `/integrate`.
3. The README links to both: the raw file for agents, the rendered page for humans browsing the site.

This way you maintain one copy of the integration instructions. The site stays in sync automatically on every deploy.

The [OpenPeon project](https://openpeon.com/integrate) does this: the `/integrate` page reads `INTEGRATE.md` from the repo root at build time and renders it as a copyable code block. One file, two surfaces, zero drift.

## Add INTEGRATE.md to Your Project

Practicing what we preach: here's an INTEGRATE.md-style block for creating INTEGRATE.md files. Copy it into your AI coding agent with your repo open. It will read the spec, study the example, scan your codebase, and draft an INTEGRATE.md for you.

````markdown
# Write an INTEGRATE.md for This Project

Before writing anything, read these three pages in order:

1. The INTEGRATE.md spec: https://docs.appliedaisociety.org/standards/integrate-md
2. The writing guide: https://docs.appliedaisociety.org/standards/integrate-md/writing-guide
3. The annotated CESP example: https://docs.appliedaisociety.org/standards/integrate-md/example

Now read this codebase. Understand what it does, what its core concepts are, and how another project would wire it in.

Then create an `INTEGRATE.md` at the repo root following the spec you just read.
````

## Version Note

This is v0.1. It's intentionally minimal. We're documenting what works in practice (see the [CESP example](./example)) rather than designing a comprehensive format upfront. As more libraries publish INTEGRATE.md files, the spec will evolve based on real usage patterns.
