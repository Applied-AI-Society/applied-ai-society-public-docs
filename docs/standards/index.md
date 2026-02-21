---
sidebar_position: 5
title: Standards
---

# Agent File Standards

The AI coding agent ecosystem has quietly developed its own set of file conventions. Each one solves a different problem:

- **CLAUDE.md / AGENTS.md** tell an agent how to behave inside a repo. Conventions, rules, patterns.
- **llms.txt** helps an agent learn about a project. What it does, how it works, where to look.
- **SKILL.md** teaches an agent a specific capability. A recipe it can execute on demand.
- **install.md** walks an agent through installing a tool. Dependencies, binaries, config.

These conventions emerged organically. Different teams, different tools, different needs. But they work. And they keep working because they're simple, readable, and designed for agents first.

## What's Missing

Nobody has standardized the answer to: "How do I wire this library's capabilities into my project?"

That's not installation (getting the tool on your machine). It's not documentation (understanding what it does). It's integration: the concrete steps an agent needs to take to make a library work inside an existing, unknown codebase.

## What AAS Documents

Applied AI Society identifies emerging patterns in the agent tooling ecosystem and publishes lightweight specs so teams can build on shared conventions instead of reinventing them.

Our first standard is [INTEGRATE.md](./integrate-md/) -- a file format for teaching AI agents how to wire a library into any codebase.
