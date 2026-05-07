---
sidebar_position: 4
title: "Example: create-or-update-google-doc (Flavor B)"
---

# Annotated Example: create-or-update-google-doc

The [garysheng/curated-jarvis-integrations](https://github.com/garysheng/curated-jarvis-integrations) bank ships an [integration recipe](/docs/concepts/integration-recipe) at `integrations/create-or-update-google-doc/` for wiring any personal AI agent up to publish Google Docs from markdown. Its `INTEGRATE.md` is the reference INTEGRATE.md for **Flavor B: Service Into Personal Agentic OS**.

You can read the live recipe at [github.com/garysheng/curated-jarvis-integrations/tree/main/integrations/create-or-update-google-doc](https://github.com/garysheng/curated-jarvis-integrations/tree/main/integrations/create-or-update-google-doc).

This page walks through what makes it effective, section by section.

## The Title

```markdown
# create-or-update-google-doc
```

Names exactly what the agent is being given the ability to do. Verb-action shape, kebab-case. Matches the folder name and the SKILL.md `name:` field exactly. Skip the marketing version ("Google Docs Integration") in favor of the operational verb.

## The Opening Paragraph

```markdown
Wire your Jarvis up to Google Docs so it can create, update, and
share documents from markdown without leaving the terminal.
```

One sentence. Names the surface (Google Docs), the capability (create / update / share from markdown), and the constraint (without leaving the terminal). The agent now knows the goal before reading any setup details.

## What This Gives You (Shared Spine: "What You're Building")

```markdown
- Your Jarvis can create a new Google Doc from a markdown file in your harness
- Your Jarvis can update an existing Google Doc with new content
- Your Jarvis can set sharing permissions ("anyone with link", folder-scoped, or private)
- Markdown formatting (headings, bold, italic, lists, code, tables, links, images) survives the trip
```

The shared spine's "What You're Building" section is conventionally renamed **"What This Gives You"** in Flavor B. The shape is identical: a short list of capabilities the operator's harness will gain after install. The framing matches the Flavor B audience (an operator extending their own Jarvis) instead of the Flavor A audience (a coding agent integrating a library into a codebase).

## Why This Recipe

```markdown
Pasting markdown into a Google Doc usually gives you raw asterisks
and hashtags, not formatted text. The native File → Upload path is
hit-or-miss. This recipe uses the Google Docs API directly via OAuth,
so the formatting comes through cleanly and the doc is created with
proper headings, lists, and styling.

The OAuth dance is handled by the gog CLI, which you authenticate
once and forget about. Tokens live in macOS Keychain.
```

Two paragraphs that name the failure mode of naive approaches and explain the recipe's chosen path. Honest about the tradeoff: this is the right path because the alternatives have specific problems. The "Why" exists so an operator skimming three competing recipes can pick the one that matches their needs without running all three.

## Prerequisites (Flavor B Required)

```markdown
- macOS (the gog CLI's OAuth flow uses Keychain; Linux works with minor adjustments)
- Node.js 18 or newer
- A Google account
- The gog CLI installed
```

The accounts, runtimes, and CLIs the agent's machine needs before setup can begin. This section is what distinguishes Flavor B from Flavor A: a Flavor A agent is already inside the target codebase and can scan it. A Flavor B agent is wiring an external service into the operator's machine, so the recipe has to declare what that machine needs first.

## Setup (Flavor B Required)

```markdown
### 1. Install gog

\`\`\`bash
brew install saucelabs/tap/gog
\`\`\`

### 2. Authorize the docs service

\`\`\`bash
gog auth add you@example.com --services docs
\`\`\`

### 3. Drop this folder into your Jarvis

\`\`\`bash
cp -r integrations/create-or-update-google-doc ~/.claude/skills/create-or-update-google-doc
\`\`\`

### 4. Set your email environment variable

\`\`\`bash
export GOG_EMAIL=you@example.com
\`\`\`

### 5. Verify

\`\`\`bash
node integrations/create-or-update-google-doc/scripts/auth.mjs
\`\`\`

If you see an access token printed, you are wired up.
```

Numbered, concrete, copy-pasteable. Notice the placeholder discipline: every personal-info slot uses `you@example.com` instead of a real email. The verify step is the shared-spine "Verification" requirement: a concrete command and a concrete success criterion ("you see an access token printed").

## Usage From Your Jarvis (Flavor B Required)

```markdown
Once your Jarvis can see this skill (via SKILL.md), trigger phrases like:

- "create a google doc with these contents"
- "update the google doc"
- "make a google doc titled X"

…will produce a properly-formatted Google Doc and return the URL.
See [SKILL.md](./SKILL.md) for the full flag reference.
```

The trigger phrases couple the recipe to the SKILL.md it ships alongside. A Flavor B integration is always a pair: `INTEGRATE.md` (this file, agent-readable narrative + setup) plus `SKILL.md` (drop-in skill definition the agent's harness reads to route trigger phrases). Neither file is complete without the other.

## Common Gotchas (Flavor B Required)

```markdown
- Token cache stale: If you see auth errors, delete scripts/.token-cache.json and try again.
- gog credentials missing: If ~/Library/Application Support/gogcli/credentials.json doesn't exist, run gog auth add again.
- Wrong email in keyring: Make sure GOG_EMAIL matches exactly the email you authorized.
- Permissions on the new doc: New docs are private by default. Pass --share anyone or use --folder <id>.
- Updating instead of creating: Always pass --update <doc-id> when updating an existing doc.
```

Real failure modes from running the recipe end-to-end. Each entry names the symptom and the fix. The agent that hits any of these errors at install time can read this section and self-recover instead of escalating to the operator.

## Last Verified (Flavor B Required)

```markdown
2026-05-06 on macOS, Node 22, gog CLI 0.5.x.
```

The most important Flavor B addition. Service-into-Jarvis recipes wrap external CLIs and MCPs that ship and break independently. The date and version pinning let any future operator (and any future agent reading this recipe) see at a glance whether the recipe is current.

The standard for staleness: an INTEGRATE.md older than 6 months should be treated as potentially stale. Any operator updating the recipe must bump this date.

## Alternatives (Flavor B Required)

```markdown
- Google Workspace CLI (googleworkspace/cli): Google's own command-line tool. Heavier (covers Drive, Sheets, Calendar, Gmail, etc.) but the official path. Worth using if you want one CLI for the whole Workspace surface.
- Native Google Docs upload: File → Upload accepts .md files. Quick for one-shot use but formatting is hit-or-miss.
- Copy-paste from your editor: Cmd+A, Cmd+C, paste into a new Google Doc. Lowest friction; works for short artifacts.
```

At least one alternative path. Flavor B recipes wrap external tooling that has competitors; an honest recipe lists the closest competitors with their tradeoffs so the operator can pick whichever fits their volume and risk tolerance.

This is also a hedge against the underlying primary path going stale. If `gog` ever ships a breaking change or stops being maintained, the alternatives section names the next path the operator can adopt without rewriting the recipe.

## Maintainer (Flavor B Required)

```markdown
Stewarded by [@garysheng](https://github.com/garysheng). Open an
issue or PR if anything in this recipe breaks.
```

The named human who keeps the recipe current. Flavor B recipes live in public banks where many recipes share a repo. The maintainer field tells the operator picking up the recipe who to ping when the underlying tooling shifts.

## What This Example Demonstrates

The pattern that makes the recipe work end to end:

1. **Verb-action title** matching the folder name and SKILL.md `name:` field.
2. **One paragraph** orienting the agent to what the wiring delivers.
3. **Prereqs declared upfront** so the agent does not start setup with a missing dependency.
4. **Numbered setup steps** with placeholder discipline (no real emails, tokens, or paths).
5. **Verify command** with a concrete success criterion.
6. **Common gotchas** sourced from real install runs, not imagined.
7. **Dated** so future readers know whether to trust it.
8. **Alternatives + maintainer** so the recipe survives churn in the underlying tools.

Copy this shape for any Flavor B recipe. The names of the sections are not load-bearing; the spine and the discipline are.

---

*This file documents Flavor B of the [INTEGRATE.md standard](/docs/standards/integrate-md). For the original Flavor A example (library into codebase), see the [CESP example](./example).*
