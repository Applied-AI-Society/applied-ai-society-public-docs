---
sidebar_position: 3
title: "Update Your MVJ Fork to Get Granola Sync"
---

# Update Your MVJ Fork to Get Granola Sync

*A short upgrade guide for Jarvisees who cloned the [Minimum Viable Jarvis](https://github.com/Applied-AI-Society/minimum-viable-jarvis) template before the Granola sync skill shipped. Pull the new skill in, test it on your own meetings, tell Gary if anything breaks.*

---

## Why this guide exists

The `sync-granola` skill is new. It pulls recent [Granola](https://granola.ai) meetings into your `meeting-transcripts/` folder so your Jarvis can run `/process-transcript` on a week of conversations at once. If you forked MVJ before April 2026, your workspace does not have it yet.

This is the safe upgrade path. Three steps: pull, test, report.

If you want the full picture of how Granola sync fits into the [PRM](/docs/concepts/prm), read [Auto-Syncing Granola Notes](/docs/playbooks/practitioner/prm/auto-syncing-granola-notes) first. This guide is just the upgrade.

---

## Prerequisites

- Your own MVJ fork cloned locally and working.
- [Granola](https://granola.ai) installed and signed in on the same Mac as your Jarvis workspace. Mac only for now (the skill reads a macOS-specific auth path).
- A clean working tree in your MVJ repo. Commit or stash any in-progress changes before you start, otherwise the upstream merge will refuse to run.

---

## Step 1: Pull the new skill from upstream

In your MVJ workspace, ask your Jarvis:

> "Sync with upstream."

The `sync-with-upstream` skill already ships in your fork. It will:

1. Verify (or add) the `upstream` remote pointing at the AAS template, with the push URL disabled so you cannot accidentally push to it.
2. Fetch the latest commits and show you a preview of what is coming, including any new skills (it reads each new SKILL.md and describes what it does).
3. Wait for you to confirm before merging.
4. Merge the upstream changes into your `main` branch.
5. Resolve any conflicts with you, file by file. Conflicts only happen in shared root files (`README.md`, `CLAUDE.md`, `AGENTS.md`) or in default skills you customized. Your `user/`, `people/`, `artifacts/`, and `meeting-transcripts/` are untouched.
6. Push the merge to your origin fork.

When the merge lands, you should see `sync-granola` called out in your Jarvis's summary of new skills. To double-check, run:

```bash
ls .agents/skills/sync-granola
```

You should see `SKILL.md`, a `scripts/` directory, and a `state/` directory. If any of those are missing, the merge did not complete cleanly. Stop and tell Gary.

---

## Step 2: Test it on your real Granola

In your Jarvis terminal, ask:

> "Sync my Granola notes."

The skill will:

1. Check that Granola is installed and signed in (it reads `~/Library/Application Support/Granola/supabase.json`).
2. Run a dry-run preview of what would be imported from the last 7 days. Look at the list before confirming.
3. **First time only:** ask whether you want to import all of your existing Granola meetings or start fresh from today forward. If you have months of old meetings you do not want to backfill, choose start fresh. The skill marks them as already-synced so future runs only pick up new ones.
4. Pull the confirmed meetings into `meeting-transcripts/YYYY-MM-DD-slug.md` files, each with frontmatter that includes the Granola URL, attendees, and AI summary.
5. Offer to run `/process-transcript` on the new files.

You can also do a no-commit dry run yourself:

```bash
node .agents/skills/sync-granola/scripts/sync.mjs --check
```

That prints what it would do and exits without writing any files.

---

## Step 3: Tell Gary if anything breaks

This skill is new and it runs against the Granola desktop app's local auth, which means there are real-world configurations we have not seen yet. If something goes sideways, send Gary a quick message with:

- The exact prompt or command you ran.
- What you expected to happen.
- What actually happened (paste the error output if there is one).
- Your macOS version and Granola desktop app version.

Likely failure modes worth flagging:

- **"Granola does not seem to be installed or signed in on this machine."** Means the skill could not find `~/Library/Application Support/Granola/supabase.json`. Open Granola, sign in, try again. If the file exists and you still see this error, tell Gary.
- **Nothing imports.** Either there are no new meetings in your lookback window, or the dedup is being too aggressive. Try `node .agents/skills/sync-granola/scripts/sync.mjs --days 30 --check` to widen the window. If a meeting you know exists still does not show up, tell Gary.
- **A meeting imported with scrambled speaker labels.** Granola tags audio by source (microphone vs system). The skill maps those to `**You:**` and the attendee's name. If the labels look wrong, save a copy of the file and send it to Gary.
- **Anything else odd.** Ship the receipts (commands, output, file contents) to Gary. This skill is on-demand specifically so failures show up loudly the first time, instead of silently rotting in the background.

---

## What the daily flow looks like after this

Once `sync-granola` is in and tested, your loop gets simpler:

1. Have meetings in Granola (which you already do).
2. At the end of the day or week, say "sync my Granola notes" to your Jarvis.
3. Confirm the preview. Files land in `meeting-transcripts/`.
4. Say "process these transcripts." Your `people/` files and `artifacts/` update accordingly.

Three minutes for a week of meetings. No copy-pasting, no clicking around in Granola's web UI.

---

## Further reading

- [Auto-Syncing Granola Notes](/docs/playbooks/practitioner/prm/auto-syncing-granola-notes): The full tutorial, including the manual fallback for voice memos and wearable recorders.
- [Capturing Conversations](/docs/tools/capturing-conversations): Tool-by-tool overview of meeting recorders.
- [PRM (Personal Relationship Management)](/docs/concepts/prm): The concept this whole flow feeds.
- [Minimum Viable Jarvis](https://github.com/Applied-AI-Society/minimum-viable-jarvis): The template repo that ships both `sync-with-upstream` and `sync-granola`.
