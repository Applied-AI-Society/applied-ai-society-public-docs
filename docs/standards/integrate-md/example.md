---
sidebar_position: 3
title: Example - CESP
---

# Annotated Example: CESP INTEGRATE.md

The [OpenPeon project](https://openpeon.com) publishes an INTEGRATE.md that teaches AI agents how to add sound pack support to any CLI. It's the reference implementation that informed the INTEGRATE.md spec.

You can see the live version at [openpeon.com/integrate](https://openpeon.com/integrate).

This page walks through what makes it effective.

## The Title

```markdown
# Add CESP Sound Pack Support to This CLI
```

States exactly what the agent is building. Not "CESP Integration" or "Sound Pack Setup." The title names the library (CESP), the capability (sound pack support), and the target (this CLI).

## The Opening Paragraph

```markdown
You are adding sound pack support to this CLI using the CESP open standard.
CESP lets any CLI tap into 90+ community sound packs.
```

One sentence orienting the agent: what it's doing and what standard it's following.

## What You're Building

```markdown
When this CLI does something notable (starts up, finishes a task,
hits an error, needs user input), it should play a sound from the
user's installed CESP sound pack.
```

One paragraph. Describes the end state. The agent now knows the goal before reading any implementation details.

## Read the Codebase First

```markdown
Read this codebase. Find the event system (command lifecycle, hooks,
callbacks, event emitters -- whatever this CLI uses). Understand how
events flow through the system before writing any integration code.
```

This gets its own section so the agent treats it as a distinct step, not something buried in the intro. The parenthetical list ("command lifecycle, hooks, callbacks, event emitters") gives the agent multiple patterns to search for. It doesn't assume the target codebase uses any specific pattern.

## The Concept Mapping Table

```markdown
| Category | When to emit |
|---|---|
| session.start | CLI launches, new session begins |
| task.complete | Work finished successfully |
| task.error | Something failed |
| input.required | Blocked waiting for user input or approval |
```

This is the core of the integration. CESP has categories. The target CLI has events. The table tells the agent how to bridge them. The "When to emit" column uses language that applies to any CLI, not CESP-specific terminology.

The file splits categories into "Core" (implement all 6) and "Extended" (optional). This gives the agent clear priorities.

## The Data Format Section

```json
{
  "cesp_version": "1.0",
  "categories": {
    "session.start": {
      "sounds": [
        { "file": "sounds/Hello.wav", "label": "Something need doing?" }
      ]
    }
  }
}
```

Shows the manifest format with a realistic example. The agent needs to parse this structure, so showing it concretely is better than describing it abstractly.

The section also specifies lookup order ("Check `categories[category]` first, then `category_aliases`, then skip silently") and path resolution rules. These are the kind of details agents need to get right.

## The Quick Path

```markdown
## Quick Start: Just Want One Pack?

Skip the registry entirely. Download the OG Warcraft Peon pack
and bundle it with your project.
```

This prevents over-engineering. If the target CLI just wants basic sound support, the agent can take this shortcut instead of implementing the full registry system. The quick path includes exact commands to download and place the files.

## Cross-Platform Audio

```bash
# macOS
nohup afplay -v 0.5 /path/to/sound.wav >/dev/null 2>&1 &

# Linux (try in order, use first available)
pw-play --volume=0.5 sound.wav    # PipeWire
paplay --volume=32768 sound.wav   # PulseAudio
```

Platform-specific commands in fenced code blocks. The agent can detect the target platform and pick the right approach. Each command includes volume control so the agent doesn't have to figure out each tool's volume flag.

## The Implementation Checklist

```markdown
1. Read the codebase and identify the event/lifecycle system
2. Create a CESP module that handles:
   - Pack discovery
   - Manifest loading and parsing
   - Category-to-sound resolution (with alias fallback)
   - Random sound selection with no-repeat
   - Cross-platform async audio playback
3. Wire events from this CLI's lifecycle into CESP categories
4. Add configuration (active pack, volume, mute)
5. Add a sounds install command
6. Test it
```

Numbered, imperative, ordered by dependency. Step 1 must happen before step 2. Step 3 depends on both. The checklist gives the agent a clear execution plan.

## The Verification

```markdown
## Quick Test

Install a pack and test:

mycli sounds install peon

Now use your CLI -- you should hear "Something need doing?" on start.
```

Concrete. Testable. The agent knows exactly what command to run and what result to expect. No ambiguity.

## What It Omits

The CESP INTEGRATE.md does not include:

- What CESP is or why it exists (the agent doesn't need the pitch)
- How to install any dependencies (that's a separate concern)
- Full API documentation (linked at the bottom instead)
- Changelog or version history
- Comparisons to other sound systems

Everything in the file serves one purpose: getting the agent from "codebase with no sound support" to "codebase with working CESP integration."
