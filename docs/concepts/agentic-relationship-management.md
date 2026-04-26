---
sidebar_position: 105.3
title: "Agentic Relationship Management"
description: "The active practice that turns your PRM from a database into a deal pipeline. Your Jarvis interviews you about the people who matter, ingests every conversation automatically, and prompts you to follow up before things slip. The highest-leverage thing most practitioners are not doing yet."
---

# Agentic Relationship Management

*If [PRM](/docs/concepts/prm) is the data, ARM is the practice. The interview-driven build-out, the automated capture, the prompts that surface the right call to make on Tuesday morning. Most [applied AI practitioners](/docs/concepts/applied-ai-practitioner) are testing five new AI tools this week. The single highest-leverage move is to stop and turn their existing network into something their [Jarvis](/docs/concepts/personal-agentic-os) can reason over.*

---

## What It Is

Agentic Relationship Management (ARM) is the practice of using your Jarvis to actively maintain, deepen, and activate the relationships that matter to your life and work.

[PRM](/docs/concepts/prm) is the substrate: one file per person, transcripts per conversation, artifacts per move, all cross-referenced. ARM is what you do on top of it. Three things, woven together:

1. **Interview-driven build-out.** Your Jarvis interrogates you about the people you care about, top-down (most important first), one at a time, until your top fifty are real files with real context.
2. **Automated capture.** Meeting recorders ([Granola](/docs/playbooks/practitioner/prm/auto-syncing-granola-notes), voice memos, call recordings) feed your `meeting-transcripts/` folder without you copy-pasting anything. Every conversation lands. Your `people/` files update.
3. **Activation prompts.** Your Jarvis tells you, unprompted: "You have not talked to your mom in six weeks, follow up about her surgery." "Maya's startup just raised, send a note." "Given everyone in your network and what they want, here are three deals you could broker this month."

Without all three, the loop does not close. PRM by itself is a folder of dead files. Capture without build-out is noise. Activation without capture is hallucination.

---

## The Build-Out Gate

This is the part most people skip. The argument is simple: if your top fifty relationships are not legible to your Jarvis as files, none of the rest works.

Not deal-making. Not pre-meeting prep. Not introductions. Not follow-ups. Not the [latent leverage](/docs/concepts/latent-leverage) sitting dormant in your network. None of it. Your Jarvis can only reason over what it can read, and a relationship that lives only in your head is invisible to your agent the same way it is invisible to a new assistant on day one.

The gate is the build-out itself. You cross it before you touch any other Jarvis use case in the relationship category. Practically, this means:

- Sit with your Jarvis. Ask it to interview you about the five most influential people in your life right now. Answer in voice. Let it write the files.
- Repeat for the next ten. Then the next thirty-five.
- For each person: who they are, what they want, what you have built together, what is unresolved, what you owe them, what they owe you, when you last spoke, what would be the right next move.
- Done in one sitting if you are dense and focused. Done over a week if you have a lot of relationships worth doing right.

After the build-out, every other ARM move compounds. Before it, every other ARM move is just LARP.

---

## Capture Is The Other Pillar

The build-out alone gets stale within a month. The reason is conversations: every meeting you have changes the file, and if you do not capture meetings into the workspace automatically, your `people/` files drift into fiction.

This is why the capture pipeline is load-bearing, not optional. The minimum viable shape:

- **Meeting recorder** ([Granola](https://granola.ai) is our default for video calls) wired into your workspace via a sync skill. See [Auto-Syncing Granola Notes](/docs/playbooks/practitioner/prm/auto-syncing-granola-notes).
- **Voice memos and wearable recorders** (iPhone Voice Memos, Plaud, Limitless) routed through TurboScribe (or a local equivalent) into the same `meeting-transcripts/` folder.
- **Phone calls** captured via your phone's built-in call recording when you need them.

One destination, multiple on-ramps. After each conversation lands, your Jarvis runs `/process-transcript`, updates the relevant `people/` files, surfaces commitments and follow-ups, and creates artifacts where the conversation produced a strategic move worth its own document.

Without this pipeline, you are typing relationship updates by hand at 11 PM. You will not. The pipeline is what makes the practice survive the week.

See [Capturing Conversations](/docs/tools/capturing-conversations) for the full tool-by-tool guide.

---

## The Anti-Pattern: The Tools Loop

The most common failure mode for a practitioner with a Jarvis is the tools loop. You spend a week trying the new AI video generator. The next week, a new image model. The next week, a new agent framework. Each tool is mildly useful, none of it compounds, and the actual highest-leverage asset you own (your network of trusted people, accumulated over years) sits unmapped and inactive.

The diagnostic question: when is the last time your Jarvis told you something useful about a person in your life? If the answer is "it cannot, because none of them are in there," you are in the loop. The loop will not break by trying a sixth video tool.

Break it by building out the top five. Then the next ten. Then wiring up the capture pipeline. After that, the tools you actually need become obvious, because you will be evaluating each one against an actual question ("does this make my relationships more activated?") rather than novelty.

---

## The Ordained-Craftsman Gate

ARM only works for people who already invest in real relationships. AI is excellent at saving you time on things you already do well, because you can recognize quality output and tweak the prompts until it gets there. AI is dangerous when you do not even know what quality looks like, because you will accept slop and not see it.

The same logic applies to relationships. Your Jarvis cannot generate a relationship for you. It can only help you stop dropping the ball on the ones you have already built. If you have not put real time into knowing the people in your network, ARM will not save you. Build the relationships first. Then let the agent help you keep them.

---

## Why This Is The Highest-Leverage Practice

For [hyperagents](/docs/concepts/hyperagency) operating in any field that runs on trust (which is most of them: culture, capital, hospitality, ministry, policy, media, tech, sports, hospitality), the relationships are the asset. The deals, the introductions, the collaborations, the unexpected calls that change a year, all of it flows through who you know and how well you know them.

Most of those relationships hold [latent leverage](/docs/concepts/latent-leverage) that has never been activated. Deals that should happen because you know the right two people but do not, because nobody is thinking of your network as a pipeline. ARM is the practice that turns it into one. Quietly, without performing, without spamming, without burning trust. Just by making your network legible to an agent that can hold the whole map at once.

This is also why the pattern matters at the [community](/docs/concepts/community-of-practice) scale. A scene of practitioners who are each running ARM on their own networks, and who can broker introductions across each other's maps, is materially different from a scene of individuals trying tools in isolation. Cultural capital, made operational.

---

## Where To Start

This week:

1. Open your Jarvis. Tell it: "Interview me about my five most influential relationships right now. One at a time. Save each as a file in `people/`."
2. Wire up your meeting capture. If you use Granola, follow [Auto-Syncing Granola Notes](/docs/playbooks/practitioner/prm/auto-syncing-granola-notes). If you do not, set up [TurboScribe](/docs/tools/capturing-conversations) for whatever audio source you do use.
3. After your next batch of meetings, run `/process-transcript` and watch your `people/` files come alive.

This month:

4. Expand the build-out to your top fifty.
5. Ask your Jarvis: "Given everyone in `people/`, who am I overdue to reach out to? What would the move be for each one?" Run this weekly. Treat the answers like a real to-do list.
6. Ask your Jarvis: "What deals are sitting latent in my network that I have not activated?" Be honest about which ones you actually want to make happen.

The work is not glamorous. It is the most important work most practitioners are not doing.

---

## Further Reading

- [PRM (Personal Relationship Management)](/docs/concepts/prm): The data substrate ARM operates on.
- [Latent Leverage](/docs/concepts/latent-leverage): The dormant value in your network that ARM activates.
- [Being Someone's Go-To Person](/docs/concepts/being-someones-go-to-person): The role you grow into when ARM is real.
- [Capture, Process, Compound](/docs/concepts/capture-process-compound): The deeper rhythm ARM is one expression of.
- [Capturing Conversations](/docs/tools/capturing-conversations): The full tool-by-tool guide for the capture pipeline.
- [Auto-Syncing Granola Notes](/docs/playbooks/practitioner/prm/auto-syncing-granola-notes): The most common automated capture path, set up step by step.
- [Priming Your Jarvis](/docs/playbooks/practitioner/priming-your-jarvis): How to use the network you have built in real prompts before meetings.
