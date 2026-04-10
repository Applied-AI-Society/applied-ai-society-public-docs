---
sidebar_position: 4
title: "Ramp: Glass"
---

# Ramp: Glass

*700 employees. 350 shared skills. 99% AI adoption. And then they built the infrastructure to actually make it useful.*

---

## The Problem

Ramp hit 99% adoption of AI tools across the company. On paper, mission accomplished. In practice, most people were stuck.

The models were not the bottleneck. The people were not the bottleneck. The [harness](/docs/concepts/harness-engineering) was the bottleneck. Terminal windows, npm installs, MCP configurations, environment setup: all of it was too much for most employees to configure on their own. The few who pushed through had wildly different setups with no way to share what they had learned.

Ramp had created urgency without providing infrastructure. The result: AI's true upside was limited to the people who already knew how to configure it. Everyone else was driving a Ferrari with the handbrake on.

So they built Glass, an internal AI productivity suite designed to make every employee a power user without the pain of configuring their own environment.

---

## The Principles

Glass was built around three principles that align closely with how AAS thinks about applied AI adoption:

**1. Do not limit anyone's upside.** The default approach for non-technical users is to simplify: put the product on rails, offer fewer options, make it foolproof. Ramp rejected that. Their power users thrive on multi-window workflows, deep integrations, scheduled automations, persistent memory, and reusable skills. The goal was not to remove complexity but to make it invisible while preserving full capability. This is [harness engineering](/docs/concepts/harness-engineering) at the organizational level.

**2. One person's breakthrough should become everyone's baseline.** The biggest failure was not that people could not figure things out. It was that everyone had to figure things out alone. A workflow discovered by one person did not help anyone else. Glass needed to compound individual wins into organizational capability. This is the [Raise the Floor](/docs/concepts/raise-the-floor) principle in action.

**3. The product is the enablement.** Becoming effective with AI is a skill. People improve through repetition and experimentation, but the product can accelerate that curve by suggesting the right skill at the right time and showing what "good" looks like in the moment. Ramp's conclusion: no amount of workshops can match a targeted nudge while you are already doing the work. The people who got the most value were not the ones who attended training sessions. They were the ones who installed a skill on day one and immediately got a result.

---

## What They Built

### Everything Connects on Day One

Glass comes auto-configured on install. Employees sign in once via SSO and every internal tool becomes available: Salesforce, Gong, Slack, Notion, Linear, Snowflake, plus Ramp's own internal products. No setup. No configuration. No tickets to IT.

This is the unsexy foundation that makes everything else possible. When a sales rep asks Glass to pull context from a Gong call, enrich it with Salesforce data, and draft a follow-up, it works because everything is already connected. This is [minimum viable infrastructure](/docs/concepts/minimum-viable-infrastructure) done right: the baseline is high enough that people can start getting value immediately.

### Shared Skills Through the Dojo

The biggest innovation is their skill marketplace, called the Dojo. Skills are markdown files (exactly the [instruction files](/docs/concepts/instruction-files) pattern) that teach an agent how to perform a specific task.

When someone on the sales team figures out the best way to analyze Gong calls, break down competitive mentions, and draft battlecards, they package it as a skill and give that superpower to every rep on the team. A CX engineer builds a Zendesk investigation workflow that pulls ticket history, checks account health, and suggests resolution paths. Through the Dojo, the entire support team levels up overnight.

Over 350 skills have been shared company-wide. They are Git-backed, versioned, and reviewed like code. The marketplace is the flywheel: every skill shared [raises the floor](/docs/concepts/raise-the-floor) for everyone.

To help people find the right skills, the Dojo includes a built-in AI guide called the Sensei. It looks at which tools you have connected, what role you are in, and what you have been working on, then recommends the skills most likely to be useful. A new account manager does not need to browse a catalog of 350 skills. The Sensei surfaces the five that matter most on day one.

### Persistent Memory

When users first open Glass, the system builds a full memory layer based on their authenticated connections. Every chat session has context on the people they work with, their active projects, relevant Slack channels, Notion documents, and Linear tickets. The agent enters each conversation with the context the user expects.

A synthesis pipeline runs every 24 hours, mining previous sessions and connected tools for updates. Glass adapts to the user's world without them having to re-explain things every session. This is [context engineering](/docs/concepts/context-engineering) and [compounding docs](/docs/concepts/compounding-docs) at the organizational scale.

### Always-On Automation

Glass turns your laptop into a server. You can schedule automations that run daily, weekly, or on custom cron, and post results directly to Slack. A finance team lead pulls yesterday's spend anomalies every morning at 8am and posts a summary to the team channel.

You can also create Slack-native assistants that listen and respond in channels using your full Glass setup: integrations, memory, and skills included. An ops team built one that answers vendor policy questions by pulling from Notion docs and Snowflake data in an afternoon.

For long-running tasks, Glass has a headless mode: kick off a task, walk away, approve permission requests from your phone. This is the [always-on agents](/docs/concepts/always-on-agents) pattern in production.

### Workspace, Not Chat Window

Most AI products give you a single conversation thread. Glass gives you a full workspace built around split panes. Tile multiple chat sessions side by side, open documents, data files, and code alongside your conversations. Drag tabs to rearrange, split horizontally or vertically, keep context visible while you work.

The layout persists across sessions. When you come back tomorrow, your workspace is exactly how you left it. This is [flow-state infra](/docs/concepts/flow-state-infra): the product is designed around how real work actually happens, not how chatbots assume it happens.

---

## Why They Built Instead of Bought

Ramp's reasoning for building in-house maps directly to the [sovereignty](/docs/concepts/the-sovereignty-stack) argument:

**Internal productivity is a moat.** The companies that make every employee effective with AI will move faster, serve customers better, and compound advantages their competitors cannot match. That makes internal AI infrastructure part of your moat. You do not hand your moat to a vendor.

**Speed.** When you own the tool, you see exactly where people get stuck and ship fixes the same day. Ramp has a Slack channel where users report issues, and the team triages them into tickets automatically, with most resolved in hours. You cannot do that while waiting on a vendor's roadmap.

**It informs the external product.** Many of the problems Ramp solves for internal users translate directly to customers. How do you build memory that actually helps? How do you enable people to build, distribute, and maintain effective skills? Solving these problems internally gives them conviction about what works before they ship it to customers.

---

## What This Validates

The Ramp story is significant because it validates, at corporate scale, several core AAS concepts:

| AAS Concept | Ramp Implementation |
|-------------|-------------------|
| [Harness Engineering](/docs/concepts/harness-engineering) | "The models are good enough, the harness isn't." The headline of the entire project. |
| [Instruction Files](/docs/concepts/instruction-files) | 350+ markdown skill files, Git-backed and versioned. |
| [Raise the Floor](/docs/concepts/raise-the-floor) | The Dojo skill marketplace. One person's breakthrough becomes everyone's baseline. |
| [Context Engineering](/docs/concepts/context-engineering) | Auto-built memory from authenticated connections. |
| [Always-On Agents](/docs/concepts/always-on-agents) | Scheduled automations, Slack assistants, headless mode. |
| [Flow-State Infra](/docs/concepts/flow-state-infra) | Workspace with split panes, persistent layout, inline rendering. |
| [The Sovereignty Stack](/docs/concepts/the-sovereignty-stack) | Built in-house because internal AI infra is a competitive moat. |
| [Self-Improving Enterprise](/docs/concepts/self-improving-enterprise) | The Dojo flywheel: every skill shared raises the floor for everyone. |
| [The Encounter](/docs/concepts/the-encounter) | "The product is the enablement." People learn by doing, not by attending workshops. |

---

## The Key Insight

The single most important thing Ramp learned: **every feature is secretly a lesson.**

Skills show you what great AI output looks like before you know how to ask for it yourself. Memory shows you that context is the difference between a generic answer and a useful one. Self-healing integrations show you that errors are not your fault. None of this was designed as education. But when you hand someone a tool that just works, they learn by doing. And they learn fast.

This is what happens to an organization when the floor rises for everyone at once. A CX team lead shares a skill and sixty reps level up overnight. A new hire's first session already knows their team, their projects, and their tools. Someone who has never opened a terminal is running scheduled automations that would have required an engineer six months ago.

The compounding is real. And Ramp is only at the beginning of it.

---

*Glass was built by Seb Goddijn, Shane Buchan, Cameron Leavenworth, Calvin Kipperman, Jay Sobel, and Caroline Horn at Ramp. Original article published on X by [Seb Goddijn](https://x.com/sebgoddijn) on April 9, 2026.*

---

## Further Reading

- [Raise the Floor](/docs/concepts/raise-the-floor): The principle Ramp embodies. One person's discovery becomes everyone's capability.
- [Harness Engineering](/docs/concepts/harness-engineering): The technical foundation. The models are good enough. The harness is what matters.
- [Instruction Files](/docs/concepts/instruction-files): The unit of shared knowledge. Ramp's Dojo runs on markdown skill files.
- [The Self-Improving Enterprise](/docs/concepts/self-improving-enterprise): Where the Dojo flywheel leads. Every skill shared makes the next one more useful.
- [The Sovereignty Stack](/docs/concepts/the-sovereignty-stack): Why Ramp built instead of bought. Own your infrastructure, own your moat.
- [The Encounter](/docs/concepts/the-encounter): Why the product teaches faster than any workshop.
