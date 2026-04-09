---
sidebar_position: 47
title: "The Sorting Hat"
---

# The Sorting Hat

*You are your own talent manager. AI should handle the sorting so you can focus on the commitments you already have.*

---

## The Problem

As you become more visible, more capable, or more connected, the inbound grows. New people. New opportunities. New asks. Every one of them requires a decision: yes or no? And if yes, in what capacity?

Most people handle this with gut instinct and whatever mental bandwidth they have left at the end of the day. The result is predictable: they say yes to things they should have said no to, they miss things they should have said yes to, and they spend an enormous amount of cognitive energy just triaging instead of doing the work that matters.

The core issue is not intelligence. It is compute. Your brain is running sorting algorithms on every inbound, and it is doing it with a processor that is also trying to write a proposal, prepare for a meeting, and remember to call someone back. The sorting never gets your best thinking because it is competing with everything else.

---

## The Concept

The most fundamental bucket in your life is **yes or no**. Yes, do I partner with this person? Do I take this meeting? Do I invest time here? No, and why? Every other sorting decision flows downstream from that binary.

A sorting hat is an AI system that takes an inbound (a person, an opportunity, a request) and recommends where it fits in your world. It does not make the final decision. You do. But it gets you 80% of the way there by doing the research, applying your principles, and presenting a recommendation you can approve or override in seconds instead of minutes.

The human's job is not to do the sorting. The human's job is to be confident in the principles that govern the sorting. If you are clear on what you say yes to and why, AI can apply those principles at scale. If you are not clear, no amount of compute will help. The sorting hat forces you to articulate what you actually believe about where your time should go.

---

## What Makes a Good Sorting Hat

**1. Well-defined buckets.**

You need to know what your buckets are before AI can sort anything into them. For an individual, this might be your [pillars](/docs/concepts/personal-agentic-os): the distinct projects, roles, or commitments that make up your professional life. For a team, it might be entities, product lines, or partnership types.

The buckets do not need to be perfect. They need to exist. You can refine them as you go. But if you have not defined them, you are asking AI to sort things into a pile, which is just a fancier way of doing nothing.

**2. Principles that govern routing.**

Each bucket has criteria. What kind of person or opportunity belongs here? What signals indicate fit? What disqualifies someone? These principles are yours. They come from your values, your experience, your strategy. AI cannot invent them for you. But once you write them down, AI can apply them at scale.

**This is the hardest part, and the most important.** Bad principles produce worse outcomes than no sorting at all. If your criteria overfit to surface-level signals (job title, follower count, how polished their pitch is), you will systematically filter out the people who would have mattered most and let in the people who look good on paper but add nothing. The principles need to come from somewhere deeper than metrics. What do you actually value? What does alignment feel like when it is real? What patterns have you seen in the partnerships that worked vs. the ones that drained you? The best sorting principles are rooted in lived experience and honest self-knowledge, not in optimization logic. (For one framework on designing from principles rather than KPIs, see [divine principle-first design](https://faithwalk.garysheng.com/perspectives/divine-principle-first-design).)

This is [game design](/docs/concepts/game-design) applied to your inbox. You are designing the rules of a sorting game. The objectives are clear routing. The guardrails are your non-negotiables. The scoring is whether the recommendation matches what you would have decided if you had unlimited time to think about it.

**3. Full context about the inbound.**

A sorting hat is only as good as the context it has. If someone sends you a DM and all you give the AI is "John wants to connect," the recommendation will be generic. If the AI can read your [context lake](/docs/concepts/context-lake) (relationship files, transcripts, project docs), look up the person's background, and cross-reference against your principles, the recommendation becomes specific and useful.

This is why the Personal Agentic OS is a prerequisite. The sorting hat is not a standalone tool. It is a capability that emerges when your AI already knows your world.

**4. A human reviewing the output.**

The sorting hat recommends. The human decides. This is not a delegation of judgment. It is a compression of the time it takes to exercise judgment. You go from "let me think about this for 20 minutes" to "let me review this recommendation for 30 seconds." The quality of the decision stays the same. The cost drops by an order of magnitude.

---

## Why This Matters Now

If you are a knowledge worker with a growing network, you are already drowning in sorting decisions. You just might not call it that. Every email you take too long to respond to, every LinkedIn message you leave on read, every "let me think about it" that turns into a ghost: those are all failed sorts.

If you are a creator, artist, or public figure, the problem is existential. Celebrities close their DMs because they have zero capacity to sort through everything. Talent managers exist because humans cannot scale triage. But most people do not have talent managers. They are their own talent manager, and they are bad at it because they are also trying to do the actual work.

The sorting hat is the applied AI solution. Your principles stay human. The compute becomes infinite.

---

## The Deeper Pattern

The sorting hat is actually one instance of a more fundamental pattern: offloading the 80% of cognitive work that is synthesis, not creativity.

Most decisions are not hard. They are expensive. They require gathering context, comparing options, applying criteria, and producing a recommendation. Each individual step is straightforward. The cost is in the accumulation: doing it hundreds of times a day across dozens of contexts.

AI is perfect for this. Not because it is smarter than you. Because it does not get tired, it does not forget your principles between decisions, and it can hold your entire context lake in working memory while you cannot.

The sorting hat for people and opportunities is the most visible application. But the same pattern applies to:
- **Content routing.** Where does this piece of truth go? Which wiki, which project, which file?
- **Priority sorting.** Of the 15 things on your plate, which three should you do today?
- **Communication triage.** Which messages need a response, which need a forward, which need nothing?

In each case, the human designs the game. The AI plays it. The human reviews the output. The cycle repeats, and the system gets better because the principles get sharper with every review.

---

## Getting Started

The implementation is a [skill file](/docs/concepts/instruction-files). A skill file is a markdown document that tells your AI agent how to perform a specific task. Your sorting hat skill file contains your buckets, your principles, and the instructions for how to evaluate an inbound. When you invoke it, the agent reads the skill, reads the context about the person or opportunity, and produces a recommendation.

This is not a separate app. It is a file in your workspace that your harness knows how to execute.

Here is how to build one:

1. **Define your buckets.** Write down 3 to 5 categories that cover where people and opportunities fit in your life. Keep it simple.
2. **Write your principles.** For each bucket, write 2 to 3 sentences about what belongs there and what does not. This is the part that matters most. Take your time.
3. **Create the skill file.** A markdown file in your skills directory that tells the agent: read the inbound context, look up the person, apply these principles, recommend a bucket and a next action. The file is the sorting hat.
4. **Test it.** Next time someone new enters your world, invoke the skill. Review the recommendation. Did it match what you would have decided?
5. **Refine.** When the recommendation is wrong, update the principles in the skill file. The sorting hat learns by you sharpening the criteria, not by magic. Every correction makes the file better.

---

## Further Reading

- [Game Design](/docs/concepts/game-design): The meta-skill behind designing any AI system, including a sorting hat
- [Personal Agentic OS](/docs/concepts/personal-agentic-os): The foundation that makes a sorting hat possible
- [Context Lake](/docs/concepts/context-lake): The accumulated context that gives the sorting hat its power
- [Zero-Question Assessments](/docs/concepts/zero-question-assessments): A related pattern where AI assesses people from existing context instead of asking them questions
- [Context Overflow](/docs/concepts/context-overflow): The problem the sorting hat solves
