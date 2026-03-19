---
sidebar_position: 3
title: "Game Design"
---

# Game Design

*The meta-skill of the AI era. Not playing the game. Designing it.*

---

## From Player to Coach

Jordaaan Hill frames the shift happening right now as a move from player to coach. When you're a player, your value comes from execution. When you're a coach, your value comes from strategy, from seeing patterns across the whole field, from making decisions about who plays where and why.

AI is rapidly absorbing the execution layer. Drafting, researching, building, testing, responding. Increasingly done by agents. The human's job is shifting from playing the game to designing the game. And this shift is not optional. The people who resist it don't avoid the change. They just experience it as disruption rather than opportunity.

---

## What Is a Game?

A game is a well-engineered system. When you deploy AI agents, you are designing a game for them to play in. That game has four components:

**Objectives.** What does winning look like? Not vague aspirations like “increase customer satisfaction,” but agent-actionable goals: what signals indicate success, what data sources contain those signals, what actions is the agent authorized to take? This is the domain of [intent engineering](./intent-engineering).

**Rules.** What are the boundaries of play? Decision logic, delegation frameworks, resolution hierarchies. When a customer request conflicts with a policy, here is the resolution hierarchy. When data suggests one action but the customer expressed a different preference, here is the decision logic.

**Guardrails.** What must never happen? Safety constraints, compliance requirements, values that cannot be traded away for efficiency. These are the hard limits that the agent cannot override regardless of what the objectives suggest.

**Scoring.** How do you know if the game is working? Feedback loops, metrics, drift detection. When an agent makes a decision, was it aligned with your intent? How do you know? How do you correct drift over time?

The quality of these four components determines whether your agents create value or drift toward the wrong destination.

---

## The Naismith Principle

James Naismith didn't play basketball. He invented basketball. He defined the court, the rules, the objectives, and the scoring. Then other people played the game.

That's the posture. You are not the one dribbling the ball. You are the one deciding that the ball exists, that there's a hoop, and that putting the ball through the hoop is worth points. The design of the system is where the leverage lives.

A productive day in this paradigm might involve very little typing and a lot of thinking. You might spend two hours testing ideas, refining a system, poking at edge cases. You might write a single document that redefines how your agents approach an entire category of work. And then you might take a walk. That is not laziness. That is the highest-leverage use of human attention in an era where execution is increasingly automated.

---

## The Meta-Skill

[Context engineering](./context-engineering) tells agents what to know. [Intent engineering](./intent-engineering) tells agents what to want. Game design is the discipline of composing both into a coherent system.

Think of it this way:

- Context engineering is building the agent's knowledge base. The information architecture.
- Intent engineering is encoding your organization's purpose into decision-making infrastructure.
- Game design is the act of combining these into a system where agents operate with genuine organizational awareness and aligned goals.

A mediocre model with an extraordinarily well-designed game will outperform a frontier model dropped into a poorly designed one. The race is not a model race. It's a game design race. Who can define what they actually want, with enough clarity and structure that AI can deliver it?

---

## For Practitioners

When you're helping a client deploy AI, you're not configuring a tool. You're designing a game.

The client who says “AI isn't useful for my business” usually means: nobody designed a game for the agent to play. It got a prompt. Maybe some context. It did not get objectives, rules, guardrails, or scoring. It played a game with no rules and produced results nobody wanted.

The practitioner's job is to work with the client to design the game. That means:

1. **Define objectives** that are agent-actionable, not just human-readable aspirations.
2. **Establish rules** that encode organizational values into decision boundaries.
3. **Set guardrails** that protect what matters, even when efficiency suggests otherwise.
4. **Build scoring** that closes the feedback loop so you can detect and correct drift.

This is where real value lives. Anyone can demo an AI tool. A practitioner who designs a well-engineered game for a client's agents is doing work that compounds over time. Every improvement to the game makes every future agent interaction better.

---

## Further Reading

- [Intent Engineering](./intent-engineering): The discipline of encoding organizational purpose, the objectives layer of game design
- [Context Engineering](./context-engineering): The discipline of curating the right information state, the knowledge layer of game design
- [Hyperagency](/docs/concepts/hyperagency): The philosophical foundation for why designing the game is now the work
- Hill, Jordaaan. The “player to coach” framework for understanding the shift from execution to systems design
- Naismith, James. Inventor of basketball, and an analogy for designing the game rather than playing it
