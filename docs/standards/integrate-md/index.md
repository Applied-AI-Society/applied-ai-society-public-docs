---
sidebar_position: 1
title: INTEGRATE.md Spec (v0.2)
---

# INTEGRATE.md Specification v0.2

INTEGRATE.md is a file format for teaching AI agents how to wire one system into another. The agent reads the file and executes the integration steps autonomously.

The format works in two flavors that share the same spine:

- **Flavor A: Library Into Codebase.** A library author publishes an INTEGRATE.md so a coding agent in any target codebase can wire the library in. (The original v0.1 use case. Reference: [CESP example](./example).)
- **Flavor B: Service Into Personal Agentic OS.** An [integration recipe](https://docs.appliedaisociety.org/docs/concepts/integration-recipe) maintainer publishes an INTEGRATE.md so a personal AI agent can install the recipe and start taking that action with that service. (Reference: [create-or-update-google-doc example](./example-jarvis-recipe).)

Both flavors are runnable, dated, and forkable. Both target an agent rather than a human reader. The spine is the same; the flavor-specific sections differ.

## How It Differs from Other Agent Files

| File | Purpose | Audience | Maintained by |
|---|---|---|---|
| [CLAUDE.md](https://docs.anthropic.com/en/docs/claude-code/memory#claudemd-files) | How to behave in this repo | Agent working inside the repo | [Anthropic](https://anthropic.com) |
| [AGENTS.md](https://openagents.com) | How to behave in this repo (multi-agent) | Agent working inside the repo | [OpenAgents](https://openagents.com) |
| [llms.txt](https://llmstxt.org) | What this project is and does | Agent learning about the project | [llmstxt.org](https://llmstxt.org) |
| [install.md](https://github.com/nicholascelesworthy/install.md) | How to install this tool | Agent setting up dependencies | [Nicholas Celesworthy](https://github.com/nicholascelesworthy) |
| [SKILL.md](https://github.com/anthropics/claude-code/blob/main/docs/skills.md) | How to perform a capability | Agent executing a task | [Anthropic](https://anthropic.com) |
| **[INTEGRATE.md](https://docs.appliedaisociety.org/docs/standards/integrate-md)** | **How to wire one system into another** | **Agent performing the integration** | **[Applied AI Society](https://appliedaisociety.org)** |

The key difference: INTEGRATE.md assumes the agent is going to take action, not just learn or behave. It is the connective tissue between two named systems.

## Required Metadata

Every INTEGRATE.md must start with a `last_updated` date. This is how agents know whether the integration instructions are current. Tooling changes. APIs break. CLIs ship. An INTEGRATE.md without a date is untrustworthy. An INTEGRATE.md older than 6 months should be treated as potentially stale.

```markdown
<!-- last_updated: 2026-05-06 -->
```

Place this as the first line of the file, before any content. Use ISO 8601 format (YYYY-MM-DD). Update it every time you change the integration steps.

## Required Sections: Shared Spine

Every INTEGRATE.md, regardless of flavor, must include these three sections.

### 1. H1 Title

Name what's being wired up. Be specific about the outcome.

**Flavor A example:**

```markdown
# Add CESP Sound Pack Support to This CLI
```

**Flavor B example:**

```markdown
# create-or-update-google-doc
```

State what the agent is building or what capability it is gaining. Skip generic titles like "Integration Guide" or "Getting Started."

### 2. What You're Building

One paragraph describing the end state. What will the system do after integration that it does not do now? This orients the agent before it reads any implementation details.

**Flavor A example:**

```markdown
When this CLI does something notable (starts up, finishes a task,
hits an error), it should play a sound from the user's installed
CESP sound pack.
```

**Flavor B example:**

```markdown
Wire your Jarvis up to Google Docs so it can create, update, and
share documents from markdown without leaving the terminal.
```

In Flavor B, this section is conventionally titled **"What This Gives You."** Same shape, different framing for the operator audience.

### 3. Verification

A concrete test command and expected result. The agent should be able to run this and know whether integration succeeded.

**Flavor A example:**

```markdown
Install a pack and test:

mycli sounds install peon

Now use your CLI. You should hear "Something need doing?" on start.
```

**Flavor B example:**

```markdown
Run the auth helper to verify your token chain:

node scripts/auth.mjs

If you see an access token printed, you are wired up.
```

## Flavor A: Library Into Codebase

In addition to the shared spine, Flavor A requires:

### Read the Codebase First

A directive telling the agent to scan the target project before writing any code. Name the specific patterns it should look for.

```markdown
Read this codebase. Find the event system (command lifecycle, hooks,
callbacks, event emitters, whatever this CLI uses).
```

This prevents the agent from blindly pasting boilerplate without understanding what it is integrating into.

### Integration Steps

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

### Skeleton Template (Flavor A)

Copy this as a starting point:

````markdown
<!-- last_updated: YYYY-MM-DD -->

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

## Flavor B: Service Into Personal Agentic OS

In addition to the shared spine, Flavor B requires:

### Prerequisites

The accounts, runtimes, CLIs, and credentials the agent's machine must have available before setup can begin.

```markdown
- macOS
- Node.js 18 or newer
- A Google account
- The `gog` CLI installed
```

This section is Flavor-B-specific. Library-into-codebase recipes assume the agent already has the target codebase open. Service-into-Jarvis recipes have to specify what the agent's environment needs first.

### Setup

Numbered, concrete shell commands. Include the auth flow (browser-based OAuth, token paste, env var setup).

```markdown
### 1. Install gog

\`\`\`bash
brew install saucelabs/tap/gog
\`\`\`

### 2. Authorize the docs service

\`\`\`bash
gog auth add you@example.com --services docs
\`\`\`

### 3. Set the email environment variable

\`\`\`bash
export GOG_EMAIL=you@example.com
\`\`\`
```

Use placeholders for personal info (`you@example.com`, `<your-token>`). Never hardcode real credentials or emails.

### Usage From Your Jarvis

What trigger phrases activate the recipe. This couples the recipe to the SKILL.md it ships alongside.

```markdown
Once your Jarvis can see this skill (via SKILL.md), trigger phrases like:

- "create a google doc with these contents"
- "update the google doc"
- "make a google doc titled X"

…will produce a properly-formatted Google Doc and return the URL.
```

### Common Gotchas

Real failure modes from end-to-end testing. Be specific. Include the error message and the fix.

```markdown
- **Token cache stale**: If you see auth errors, delete `scripts/.token-cache.json` and try again.
- **Wrong email in keyring**: Make sure `GOG_EMAIL` matches exactly the email you authorized.
- **Permissions on the new doc**: New docs are private by default. Pass `--share anyone` to share.
```

### Alternatives

At least one alternative path. Lets the operator pick what fits them.

```markdown
- **[Google Workspace CLI](https://github.com/googleworkspace/cli)**: Google's own command-line tool. Heavier (covers Drive, Sheets, Calendar, Gmail) but the official path.
- **Native Google Docs upload**: File → Upload accepts `.md` files. Quick for one-shot use; formatting is hit-or-miss.
```

### Maintainer

Who stewards this recipe. The operator picking it up needs to know who to ping when something breaks.

```markdown
Stewarded by [@garysheng](https://github.com/garysheng). Open an issue or PR if anything in this recipe breaks.
```

### Skeleton Template (Flavor B)

Copy this as a starting point:

````markdown
<!-- last_updated: YYYY-MM-DD -->

# [skill-name-in-kebab-case]

[One sentence on what wiring this gives the operator.]

## What This Gives You

- [Capability one your Jarvis gains]
- [Capability two]
- [Capability three]

## Why This Recipe

[The default failure mode. The recipe's chosen path and why it's the right tradeoff right now.]

## Prerequisites

- [OS / runtime requirements]
- [Accounts / API keys / OAuth scopes]
- [Other CLIs the recipe builds on]

## Setup

### 1. [First step name]

\`\`\`bash
[concrete command]
\`\`\`

### 2. [Second step name]

\`\`\`bash
[concrete command, with placeholders for personal info]
\`\`\`

### 3. Verify

\`\`\`bash
[smoke-test command]
\`\`\`

If you see [expected output], you are wired up.

## Usage From Your Jarvis

Once your Jarvis can see this skill (via SKILL.md), trigger phrases like:

- "[trigger phrase one]"
- "[trigger phrase two]"

…will [the action]. See [SKILL.md](./SKILL.md) for the full flag reference.

## Common Gotchas

- **[Failure mode one]**: [the fix]
- **[Failure mode two]**: [the fix]

## Last Verified

YYYY-MM-DD on [OS], [runtime version], [primary CLI/MCP version].

## Alternatives

- **[Alternative one]**: [what it is, when to prefer it].
- **[Alternative two]**: [what it is, when to prefer it].

## Maintainer

Stewarded by [@username](https://github.com/username). Open an issue or PR if anything in this recipe breaks.
````

## Optional Sections

These are useful but not required, in either flavor:

- **Quick Path**: A shortcut for the simplest case (e.g., bundling one pack instead of supporting a registry; copy-paste path instead of full CLI install).
- **Cross-Platform Notes**: Platform-specific commands or behaviors.
- **Configuration**: Settings the integration should expose.
- **Links**: Spec URLs, registries, reference implementations.

## What to Omit

INTEGRATE.md is not documentation. Leave out:

- Marketing copy or feature comparisons
- Changelogs or version history
- Full API reference (link to it instead)
- Installation instructions for adjacent tools (that's install.md's job)
- Tutorials or explanations aimed at humans

The audience is an agent that already has context on what it is trying to accomplish. Give it the mapping, not the pitch.

## Formatting Rules

- **Imperative voice.** "Create a module" beats "You should create a module."
- **Tables for mappings.** When showing how concepts in one system map to concepts in another, use tables.
- **Fenced code blocks** for exact commands, file contents, and code snippets.
- **Short sentences.** Agents parse structure better than prose.
- **No em dashes.** Use colons, parentheses, or separate sentences.

## Publishing Your INTEGRATE.md

### README Reference

Your project's README.md should link to the INTEGRATE.md file. This is how developers (and their agents) discover it.

**Flavor A README snippet:**

```markdown
## Integration

Want to add [library] support to your project? Copy the contents of
[INTEGRATE.md](./INTEGRATE.md) into your AI coding agent and let it
handle the wiring.
```

**Flavor B README snippet:**

```markdown
## Install

Want to install this recipe in your own Jarvis? See
[INTEGRATE.md](./INTEGRATE.md) for the full setup, or hand the file
to your agent and let it walk you through.
```

### Surfacing on Your Website

If your project has a marketing site or docs site, render the INTEGRATE.md content there too. The file in the repo is the source of truth. The website is a distribution channel.

The pattern:

1. Keep `INTEGRATE.md` at the repo root (Flavor A) or inside the recipe folder (Flavor B). This is where agents and developers find it on GitHub.
2. Have your site read that file at build time and render it on a page like `/integrate` or `/recipes/<name>`.
3. The README links to both: the raw file for agents, the rendered page for humans browsing the site.

This way you maintain one copy of the integration instructions. The site stays in sync automatically on every deploy.

The [OpenPeon project](https://openpeon.com/integrate) does this for Flavor A: the `/integrate` page reads `INTEGRATE.md` from the repo root at build time and renders it as a copyable code block. The [curated-jarvis-integrations](https://github.com/garysheng/curated-jarvis-integrations) bank does the equivalent for Flavor B at the folder level: every recipe folder ships its own `INTEGRATE.md` next to a drop-in `SKILL.md`.

## Add INTEGRATE.md to Your Project

Practicing what we preach: here's an INTEGRATE.md-style block for creating INTEGRATE.md files. Copy it into your AI coding agent with your repo open. It will read the spec, study the appropriate example, scan your codebase or recipe folder, and draft an INTEGRATE.md for you.

### For Flavor A (library author)

````markdown
# Write an INTEGRATE.md for This Library

Before writing anything, read these three pages in order:

1. The INTEGRATE.md spec: https://docs.appliedaisociety.org/docs/standards/integrate-md
2. The writing guide: https://docs.appliedaisociety.org/docs/standards/integrate-md/writing-guide
3. The annotated CESP example (Flavor A): https://docs.appliedaisociety.org/docs/standards/integrate-md/example

Now read this codebase. Understand what it does, what its core concepts are, and how another project would wire it in.

Then create an `INTEGRATE.md` at the repo root following the Flavor A spec you just read.
````

### For Flavor B (recipe maintainer)

````markdown
# Write an INTEGRATE.md for This Recipe

Before writing anything, read these three pages in order:

1. The INTEGRATE.md spec: https://docs.appliedaisociety.org/docs/standards/integrate-md
2. The writing guide: https://docs.appliedaisociety.org/docs/standards/integrate-md/writing-guide
3. The annotated create-or-update-google-doc example (Flavor B): https://docs.appliedaisociety.org/docs/standards/integrate-md/example-jarvis-recipe

Now read this recipe folder. Understand what action it performs, what services it touches, what auth it needs, and what an operator's machine must have available.

Then create an `INTEGRATE.md` inside the recipe folder following the Flavor B spec you just read. Pair it with a `SKILL.md` that names the trigger phrases.
````

## Standard Footer

Every INTEGRATE.md should end with a link back to the spec. This is how the standard spreads: someone's agent reads your INTEGRATE.md, sees the spec link, and now their human knows the format exists.

```markdown
---

*This file follows the [INTEGRATE.md standard](https://docs.appliedaisociety.org/docs/standards/integrate-md),
an open format for teaching AI agents how to wire one system into another.
Publish your own: https://docs.appliedaisociety.org/docs/standards/integrate-md*
```

## Version Note

This is v0.2. The spec evolves based on real usage:

- **v0.1** covered Flavor A only (library into codebase). Reference implementation: the CESP / OpenPeon example.
- **v0.2** generalizes the spec to cover both flavors after observing the recipe shape stabilize in the wild via [garysheng/curated-jarvis-integrations](https://github.com/garysheng/curated-jarvis-integrations). The shared spine (H1, "What You're Building," Verification, `last_updated`) is unchanged. New Flavor B sections (Prerequisites, Setup, Usage From Your Jarvis, Common Gotchas, Alternatives, Maintainer) are documented alongside the original Flavor A sections (Read the Codebase First, Integration Steps).

We're documenting what works in practice rather than designing a comprehensive format upfront. As more libraries and recipes publish INTEGRATE.md files, the spec will continue to evolve based on real usage patterns.

## Further Reading

- [INTEGRATE.md Writing Guide](./writing-guide): How to write your own INTEGRATE.md for either flavor.
- [Example: CESP (Flavor A)](./example): Library-into-codebase, sound packs for any CLI.
- [Example: create-or-update-google-doc (Flavor B)](./example-jarvis-recipe): Service-into-Jarvis, Google Docs publishing recipe.
- [Integration Recipe (concept)](/docs/concepts/integration-recipe): The broader concept Flavor B is the spec for.
