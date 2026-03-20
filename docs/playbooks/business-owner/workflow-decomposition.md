---
sidebar_position: 6
title: "Workflow Decomposition Guide"
---

# Workflow Decomposition Guide

## The Goal

Draw your entire business in one linear workflow, from the moment a lead enters your world to the moment value is delivered. If you can't draw it, you don't fully understand your business yet. And if you don't understand it, you can't automate it, improve it, or hand it to anyone (human or AI) and expect consistent results.

## Step 1: The Big Picture

Start with the 5–7 major stages of your operation. Don't overthink it. For a content business, it might look like:

```
Idea → Research → Script → Shoot → Edit → Package → Publish → Measure
```

For a service business:
```
Lead → Qualify → Scope → Deliver → Follow-up → Referral
```

For home services:
```
Inquiry → Estimate → Schedule → Execute → Invoice → Review
```

Write yours down. This is your spine.

## Step 2: Actions Per Stage

Under each stage, list every actual action someone performs. Not what they *say* they do, but what they *actually* do. This is usually 6–7 actions per stage.

**Example: "Edit" stage for a podcast/video business:**
1. Receive raw transcript from recording
2. Segment transcript by speaker changes
3. Identify when the conversation shifts to a new caller
4. For each segment, find the highest-tension moment
5. Restructure clip to open with the highest-tension moment
6. Remove all filler words (ums, ahs, repeated phrases)
7. Identify the 3–4 key data points needed for the host's insight
8. Collapse everything except the key points and the insight delivery
9. Export final clip

That's nine actions for one stage. Each is specific. Each has a clear input and output.

## Step 3: Sub-Actions

Take each action and ask: "What does someone actually *do* to accomplish this?"

**Example: "Find the highest-tension moment" becomes:**
1. Read the full transcript segment
2. Look for disagreement, surprise, or emotional language
3. Look for questions that challenge assumptions
4. Score each candidate moment on a 1–5 tension scale
5. Select the highest-scoring moment
6. Note the timestamp

*Now* you have something an AI agent can execute.

## Step 4: Keep Reducing

Continue decomposing until you reach actions that can't be broken down further. These irreducible actions are your **automation targets.**

The rule: if an action contains the word "and," it's probably two actions. "Review the transcript and find the best moment" is two steps, not one.

## Step 5: Classify Each Action

For every irreducible action, mark it:

| Symbol | Meaning | Example |
|--------|---------|---------|
| 🤖 | **Fully automatable now** | Remove filler words from transcript |
| 🤝 | **Human + AI together** | Score tension moments (AI proposes, human approves) |
| 👤 | **Human only (for now)** | Record the original conversation |
| ⏳ | **Automatable soon** | Voice-based customer intake calls |

This classification becomes your automation roadmap. Start with the 🤖 items (they're free wins). Then move to 🤝 items where AI handles the heavy lifting and a human makes the final call.

## Worked Example: Content Production Pipeline

Here's what the full decomposition looks like for a media company's content workflow:

**Stage 1: Ideation**
1. 🤖 Scan community/platform for trending topics in your niche
2. 🤖 Pull performance data from last 30 days of content
3. 🤖 Cross-reference trending topics with your competency list
4. 🤝 Select the intersection (AI proposes top 5, human picks)

**Stage 2: Scripting**
1. 🤖 Generate templated outline based on selected topic
2. 🤝 Fill in specific examples and stories (AI drafts, human refines)
3. 🤝 Write hook and opening (AI generates 5 options, human selects)

**Stage 3: Packaging**
1. 🤖 Generate 10 headline variations
2. 🤖 Generate thumbnail concepts based on headline
3. 🤝 Select best headline + thumbnail combination

**Stage 4: Production**
1. 👤 Record the content
2. 🤖 Transcribe and segment
3. 🤖 Remove filler, identify key moments
4. 🤝 Assemble final edit (AI proposes cut, human approves)

**Stage 5: Distribution**
1. 🤖 Format for each platform (vertical, square, landscape)
2. 🤖 Schedule based on optimal posting times
3. 🤖 Generate platform-specific captions
4. 🤖 Post and log

**Stage 6: Measurement**
1. 🤖 Pull engagement metrics at 24h, 48h, 7d
2. 🤖 Compare against baseline performance
3. 🤖 Feed results back into ideation scoring model

That's one business function (content) fully decomposed. Now do this for every function: sales, customer success, operations, finance, HR.

## Common Mistakes

- **Decomposing from memory instead of observation.** Watch someone actually do the work. People skip steps they've internalized.
- **Stopping too early.** "Edit the video" is not an action. It's a stage containing 10+ actions.
- **Trying to automate everything at once.** Start with the 🤖 items. Get wins. Build confidence. Then tackle 🤝 items.
- **Ignoring the connective tissue.** The handoff between stages is often where things break. Map those too.

See also: [Situation Map](/docs/playbooks/business-owner/situation-map) · [The Roles-to-Workflows Shift](/docs/concepts/roles-to-workflows) · [Observable Behavior Engineering](/docs/concepts/observable-behavior-engineering)
