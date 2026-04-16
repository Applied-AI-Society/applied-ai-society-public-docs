---
sidebar_position: 38
title: "Zero-Question Assessments"
---

# Zero-Question Assessments

*Your context lake already has the answers. Stop asking questions your files can answer for you.*

---

## The Old Way

You want to know what kind of leader you are. So you take a Myers-Briggs test. Or StrengthsFinder. Or DISC. Or Enneagram. You answer 50 to 200 questions, self-reporting how you think you behave. The system processes your answers and gives you a label.

The problems with this are well-documented:

**Self-report bias.** People answer how they want to be seen, not how they actually are. You say you are "open to feedback." Your transcripts show you get defensive every time someone pushes back on your strategy.

**Decontextualized questions.** "On a scale of 1 to 5, how comfortable are you with risk?" Comfortable with what kind of risk? Financial? Social? Spiritual? The question strips away the context that makes the answer meaningful.

**Snapshot in time.** You took the test on a Tuesday after a good meeting. You would have answered differently on a Thursday after a fight with your co-founder. The result is a frozen moment, not a living picture.

**Friction.** You have to sit down and take the quiz. Most people never do, or they do it once and never revisit it. The assessment decays the moment your life changes.

## The New Way

If you have a [context lake](/docs/concepts/context-lake), the answers to every personality question are already in your files. Not self-reported. Observed.

Your `USER.md` captures your values, goals, decision-making style, and risk tolerance. Your relationship files show how you actually relate to people. Your strategic documents reveal how you think through problems. Your meeting transcripts show how you communicate under pressure. Your principles file shows what you say matters. Your artifacts show what you actually did when it mattered.

A zero-question assessment reads all of this and derives insights that are:

- **Behavioral, not self-reported.** Based on what you actually did, not what you say you would do.
- **Longitudinal.** Months or years of context, not a 10-minute quiz.
- **Richly contextualized.** The AI sees the full picture: your words, your actions, your relationships, your decisions, your patterns across time.
- **Living.** Re-run the assessment as your context lake grows. The picture evolves with you.

## How It Works

A zero-question assessment is a [skill file](/docs/concepts/instruction-files) that tells your AI agent to:

1. **Scan your context lake.** Read user profiles, principles, relationship files, strategic documents, transcripts, decision records. Cast a wide net.
2. **Build an internal profile.** Synthesize patterns across all the data: how you lead, how you communicate, how you handle conflict, what you prioritize, where you are strong, where you are blind.
3. **Map to a framework.** Apply the profile against a predefined set of archetypes, types, or categories. Bible characters. Leadership styles. Team roles. Communication patterns. Anything.
4. **Generate the output.** A detailed, personalized assessment written specifically for this person, citing specific evidence from their own files.

No questions asked. No quiz taken. The assessment emerges from the truth that is already documented.

## Example: "Which Bible Character Are You?"

This is the assessment that makes the pattern click for people.

The skill reads your context lake and maps you to a Bible character archetype based on your actual life, not a multiple-choice quiz. The archetypes include:

- **David.** The warrior-worshipper. Creative, passionate, intimate with God. Rises from nothing. Falls hard. Repents harder.
- **Joseph.** The long-game strategist. Betrayed, imprisoned, patient. Ends up running everything because he never lost faith in the vision.
- **Moses.** The reluctant leader. Does not feel qualified. God uses him anyway. Liberates a nation.
- **Paul.** The converted zealot. Brilliant mind, radical transformation, tireless builder of infrastructure.
- **Daniel.** The faithful exile. Thrives in enemy territory without compromising. Political savvy combined with spiritual purity.
- **Nehemiah.** The builder-organizer. Sees broken walls, mobilizes people, rebuilds. The project manager of God.
- **Esther.** The positioned one. Placed in a position of influence for a specific divine purpose. "For such a time as this."
- **Abraham.** The faith pioneer. Leaves everything on a promise. Walks by faith, not sight.
- **Peter.** The impulsive loyalist. Bold, messy, passionate. Fails publicly. Gets back up. Becomes the rock.
- **Elijah.** The confronter. Takes on the establishment. Dramatic spiritual power. Also gets burned out.
- **Samson.** The gifted but undisciplined. Supernatural gifts, fatal weakness. Could have been unstoppable.

The AI reads your context lake, identifies your primary match and secondary matches, and writes a detailed explanation of why, citing specific patterns from your actual documented life. It also surfaces the shadow side of your archetype: the failure mode that your character's biblical story warns about.

This is not a party trick. It is a mirror. When the assessment is derived from your real data (how you actually make decisions, how you actually treat people, what you actually prioritize under pressure), the result lands differently than a generic quiz result ever could.

## The Design Pattern

The Bible character assessment is one instance of a broader pattern. Zero-question assessments can be built for anything:

- **Leadership style.** Based on how you actually lead in transcripts and decisions, not how you think you lead.
- **Communication style.** Based on your actual emails, messages, and meeting transcripts.
- **Risk profile.** Based on actual decisions documented in your artifacts.
- **Team role.** Based on how you operate in collaborative contexts documented in your files.
- **Blind spots.** Based on patterns across relationships and transcripts that you might not see yourself.
- **Spiritual gifts.** Based on where you naturally create the most impact according to your own records.

Each one follows the same architecture: scan the context lake, synthesize patterns, map to a framework, generate a personalized output.

## Why This Matters

Zero-question assessments are a killer application for the [context lake](/docs/concepts/context-lake). They give people a visceral, personal reason to build and maintain their context lake. The more you document, the more accurate your assessments become. The more accurate your assessments become, the more useful your [Personal Agentic OS](/docs/concepts/personal-agentic-os) feels. It creates a flywheel.

This is also a powerful demonstration tool for [workshops](/docs/playbooks/practitioner/training-the-workshop). After someone sets up their first context lake and populates it with a user profile, a few relationship files, and a strategic document, you run the Bible character assessment. They get a personalized, surprisingly accurate result derived from their own data. That is the moment they understand what a context lake is actually for.

Traditional assessments ask you questions to learn about you. Zero-question assessments read what you have already told the truth about. The second approach is better in every way, as long as you have been honest in your files. And that is the point: [legacy](/docs/concepts/legacy) is the foundation. The quality of your assessments is directly proportional to the quality of the truth in your context lake.

> **The best personality quiz is the one you never have to take. Your files already know who you are.**

---

## Try It: The Bible Character Assessment Skill

Copy the skill file below into your Personal Agentic OS workspace as `skills/bible-character-assessment.md` and tell your AI agent to run it. It will scan your context lake and tell you which Bible character you are.

<details>
<summary><strong>Click to expand the full skill file</strong></summary>

````markdown
# Bible Character Assessment

A zero-question personality assessment. Reads your context lake and maps you to a Bible character archetype.

## Instructions

1. Scan all markdown files in this workspace: user profiles, principles, relationship files, strategic documents, transcripts, decision records, journal entries.
2. Build a profile across these dimensions: leadership style, relationship to God, relationship to people, relationship to power, core strength, core vulnerability, response to adversity, what drives them, how they create change.
3. Map to one PRIMARY and 1-2 SECONDARY Bible character archetypes from the list below.
4. Write the result to `bible-character-assessment.md` at the workspace root.

## Archetypes

- **David.** Warrior-worshipper. Creative, passionate, intimate with God. Rises from nothing, falls when appetite goes unchecked.
- **Joseph.** Long-game strategist. Betrayed, imprisoned, patient. Ends up running the system. Forgives.
- **Moses.** Reluctant leader. Feels unqualified. God equips in real time. Liberates nations.
- **Paul.** Converted zealot. Radical transformation. Tireless infrastructure builder. Brilliant and suffering.
- **Daniel.** Faithful exile. Thrives in hostile territory without compromising. Politically savvy, spiritually pure.
- **Nehemiah.** Builder-organizer. Sees broken walls, mobilizes people, rebuilds. Prays AND plans.
- **Esther.** Positioned for purpose. "For such a time as this." Uses influence to save her people.
- **Abraham.** Faith pioneer. Leaves everything on a promise. Walks by faith when evidence is thin.
- **Peter.** Impulsive loyalist. Bold, messy. Fails publicly, gets restored. Becomes the rock.
- **Elijah.** Confronter. Takes on the establishment. Dramatic power followed by burnout.
- **Samson.** Gifted but undisciplined. Supernatural talent, fatal weakness. Could be unstoppable.
- **Ruth.** Faithful outsider. Loyal beyond reason. Joins a community not her own. Proven by action.

## Output Format

Write a personalized assessment with:
- Primary match with specific evidence from their files (not generic descriptions)
- Shadow warning personalized to what you observed
- 1-2 secondary matches
- A "What Your Files Reveal" synthesis of surprising patterns
- Note how many files were scanned and that accuracy improves as the context lake deepens

Be honest, not flattering. Cite specific files and patterns. This is a mirror, not a horoscope.
````

</details>

To run it, save the skill file to your workspace's `.agents/skills/bible-character-assessment/SKILL.md` (the canonical [skills location](/docs/playbooks/practitioner/workspace-setup) that Codex auto-discovers and Claude Code sees via the `.claude/skills` symlink). Then tell your AI agent:

```text
/bible-character-assessment
```

---

## Further Reading

- [Context Lake](/docs/concepts/context-lake): The knowledge base that makes zero-question assessments possible
- [Personal Agentic OS](/docs/concepts/personal-agentic-os): The system that runs the assessments
- [Instruction Files](/docs/concepts/instruction-files): How to build assessment skills
- [Compounding Docs](/docs/concepts/compounding-docs): Why the assessments get better over time
- [Legacy](/docs/concepts/legacy): The quality of the input determines the quality of the output
- [Capture, Process, Compound](/docs/concepts/capture-process-compound): The lifecycle that feeds the assessment
