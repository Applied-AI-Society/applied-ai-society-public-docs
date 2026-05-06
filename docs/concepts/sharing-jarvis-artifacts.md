---
sidebar_position: 99
title: "Sharing Jarvis Artifacts"
---

# Sharing Jarvis Artifacts

*Your Jarvis produces markdown by default. Getting that artifact in front of other humans, and pulling their feedback back into the system, is its own discipline.*

---

## The Question

A practitioner finishes a session with their Jarvis and ends up with something good: a strategy memo, a proposal, a brief, a piece of writing. The artifact lives as a markdown file on their machine. Now they want to share it with someone, get feedback, or distribute it as a polished document.

How do you turn that markdown file into a Google Doc, a Notion page, or a PDF without losing the thread?

The answer is two movements: get the artifact OUT to a shareable surface, and get the feedback BACK IN to the source of truth.

## Movement One: Get The Artifact Out

The default artifact is a markdown file. Markdown is the lingua franca of [agentic harnesses](/docs/concepts/harness-engineering): plain text, version-controllable, easy for any agent to read and edit. But markdown is not a sharing format. To share, pick the surface that fits the goal.

### Three Common Destinations

**Google Docs** is the best surface for collaborative feedback. Comments, suggested edits, real-time collaboration. If you want a person to mark up your doc and tell you what they think, this is the default.

**Notion** is good for raw markdown content, internal team workspaces, and wikis. Notion's clipboard handling preserves headings, lists, and code blocks reasonably well. If you are building up a body of internal knowledge that lives alongside other team docs, Notion is the natural home.

**PDF** is for archival, attachments, and print-quality distribution. You usually do not export to PDF from raw markdown; you export from Google Docs (File → Download → PDF) or Notion (Export → PDF) once the formatting is clean.

### The Universal Manual Method

The lowest-friction way to get markdown into any surface, no tools required:

1. Open the markdown file in your editor or file viewer.
2. Select all (Cmd+A on Mac, Ctrl+A on Windows).
3. Copy (Cmd+C or Ctrl+C).
4. Open a new Google Doc or Notion page.
5. Paste.

Both Google Docs and Notion render pasted markdown reasonably well, though formatting can drift on edge cases (nested lists, complex tables, code fences). Spot-check the output and clean up anything that did not transfer.

### Native Upload Paths

For longer documents, the native import paths are usually cleaner than the clipboard:

- **Google Docs**: File → Upload accepts `.md` files. Quality varies; the upload sometimes preserves formatting and sometimes flattens it to plain text.
- **Notion**: Import → Markdown handles `.md` files well. Headings, lists, and code blocks usually survive the import intact.

### Share Permissions Are Load-Bearing

The biggest mistake people make: they share a doc and the recipient cannot open it.

- If you want feedback, the recipient needs at least **comment access**.
- If you want distribution, set link sharing to **anyone with the link can view**.
- If you are sharing inside an org, double-check the org's default sharing rules.

Five seconds of permission-checking saves the email exchange where the person says "I cannot open this."

### Advanced: Terminal-Native Paths

If you are deeper into the [applied AI discipline](/docs/concepts/applied-ai-practice) and want your Jarvis to publish artifacts directly without leaving the terminal, there is a more advanced path. A growing ecosystem of CLIs and MCP servers lets your harness create, update, and share documents on Google or Notion programmatically.

Some currently popular options as of 2026:

- **Google Workspace CLI** (`googleworkspace/cli`): Google's official command-line tool for Drive, Docs, Sheets, and more. Lets your agent create properly-formatted Google Docs from markdown without the "raw asterisks and hashtags" problem that plagues naive uploads.
- **`gog` CLI**: a lightweight community wrapper around the Google Docs API that handles OAuth via macOS Keychain. Often used as the backbone of personal Jarvis skills that publish to Google Docs.
- **Notion's official hosted MCP** (`mcp.notion.com/mcp`): Notion's actively maintained MCP server. Connects in a single command from Claude Code or other MCP-aware agents and lets your Jarvis push and pull Notion content directly.
- **`makenotion/notion-mcp-server`**: Notion's open-source MCP server, installable as a Claude Code plugin.
- **Markdown-to-Notion CLIs** like `md2notion` and `Mk Notes`: focused tools for syncing local markdown trees to Notion.

These are not required. Most practitioners ship plenty of artifacts using the manual copy-paste method. The advanced path is for people whose workflow has enough volume that automating the publish step earns its keep.

## Movement Two: Get The Feedback Back In

Sharing the artifact is half the loop. The other half is closing the loop: every piece of feedback should update the source artifact, not just live in a comment thread on a doc nobody opens again.

This is the part that separates practitioners who [compound](/docs/concepts/compounding-docs) from those who do not. Most people lose feedback because they never bring it home.

### The Round-Trip Workflow

When someone gives you feedback on the shared doc, you have several capture surfaces, all of which feed your Jarvis:

- **A call**: record the conversation, transcribe it, hand the transcript to your harness with the context "this is feedback on the X artifact, integrate the relevant changes."
- **A voice note**: same as a call. Transcribe, feed in.
- **Inline comments and suggested edits in Google Docs or Notion**: take screenshots of each comment in context. Drag the screenshots into your harness chat alongside the artifact. Ask your agent to apply the feedback.
- **Text feedback (Slack, email, DMs)**: paste it into your harness with the relevant artifact path.

The pattern in every case is the same: the feedback ends up in your harness, with enough context for the agent to know which artifact it applies to, and the agent updates the artifact at the source.

### Why The Round-Trip Matters

If feedback only lives in a Google Doc comment, it is going to evaporate. The comment will get resolved, the doc will get archived, and three months from now the only version of the artifact your agent can see is the one before the feedback ever arrived.

The discipline is: **the source-of-truth artifact in your [Personal Agentic OS](/docs/concepts/personal-agentic-os) reflects every piece of feedback you have ever taken seriously.** That is what makes the artifact get sharper over time. That is what makes your agent's understanding of the topic deeper every cycle.

A polished Google Doc is a snapshot. The markdown file in your harness is the living artifact. Keep them in sync, and the snapshot will always be ahead of where you started.

## The Practitioner's Move

The full loop, every time:

1. **Produce** the artifact in your harness as markdown.
2. **Publish** to the surface that fits the goal: Google Doc for feedback, Notion for team context, PDF for distribution.
3. **Set permissions** so the recipient can actually do what you need them to do.
4. **Collect feedback** in whatever form it arrives.
5. **Integrate** the feedback into the source artifact in your harness.
6. **Repeat** as the artifact gets sharper.

The artifact in your harness is the canonical version. Everything outside is a derivative meant for a specific human at a specific moment. When you internalize that, sharing stops being a stressful one-shot and becomes a casual loop you run as often as the work demands.

---

## Further Reading

- [Capture, Process, Compound](/docs/concepts/capture-process-compound): The general loop that this is a special case of
- [Compounding Docs](/docs/concepts/compounding-docs): Why every artifact should accumulate value over time
- [Harness Engineering](/docs/concepts/harness-engineering): The harness that produces and updates the artifacts
- [Externalize Your Brain](/docs/concepts/externalize-your-brain): The deeper habit underneath this practice
- [Signalmaxxing](/docs/concepts/signalmaxxing): Keeping your knowledge base high-signal as artifacts pile up
