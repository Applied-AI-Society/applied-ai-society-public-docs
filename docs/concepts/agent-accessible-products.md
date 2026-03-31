---
sidebar_position: 17
title: "Agent-Accessible Products"
---

# Agent-Accessible Products

*If agents cannot use your product, agents will replace your product.*

---

## The Shift

Every application on your computer used to be designed for a human clicking buttons in a graphical interface. That era is ending.

AI agents live in the command line. They operate by reading text, executing commands, and parsing structured output. When an agent needs to schedule a meeting, it does not open Google Calendar and click around. It calls an API. When it needs to deploy code, it does not click buttons in a dashboard. It runs a CLI command.

The companies that survive the agentic transition are the ones making their products usable by agents, not just humans. The ones that do not will watch agents route around them entirely.

## What "Agent-Accessible" Means

An agent-accessible product exposes its core functionality through interfaces that agents can use programmatically:

**CLI (Command Line Interface).** A terminal command that does what the button in your app does. `stripe charge create --amount 5000 --currency usd` instead of clicking through a payment form. `vercel deploy` instead of dragging files into a dashboard. `gh pr create` instead of navigating GitHub's web UI.

**API (Application Programming Interface).** An HTTP endpoint that accepts structured input and returns structured output. Every SaaS product has a web interface. The ones that matter also have an API that does everything the web interface does.

**MCP (Model Context Protocol).** The emerging standard for AI agents to discover and use tools. An MCP server tells an agent what capabilities are available, what inputs they need, and what outputs they produce. Think of it as a menu that agents can read.

**Structured output.** When your product returns data, it should be parseable. JSON, not HTML. Markdown, not PDFs. Plain text, not screenshots. If an agent has to screenshot your UI and use computer vision to read it, you have already lost.

## Why This Is Urgent

Agents are increasingly the ones deciding which tools get used. When a human tells their [Personal Jarvis](/docs/concepts/personal-jarvis) "schedule a meeting with Sarah next Tuesday," the agent picks the tool. If your calendar product has a CLI or API, the agent uses it. If your calendar product is a web-only GUI with no programmatic access, the agent uses a competitor that does have one.

This is already happening:

- Developers choose Vercel over competitors partly because `vercel deploy` is a single command
- Stripe dominates payments partly because its API is legendary
- GitHub won over alternatives partly because the `gh` CLI makes every operation scriptable
- Anthropic built Claude Code as a CLI first, not a desktop app, because that is where agents live

The pattern is clear: the products that win in the agentic economy are the ones that treat CLI and API access as first-class, not as an afterthought bolted on for "power users."

## What to Do If You Build a Product

1. **CLI-ify everything.** Every action a human can take in your GUI should be available as a terminal command. `--help` flag. `--json` for machine-readable output. Text in, text out.

2. **API-ify everything.** Every action should be available as an HTTP endpoint. Document it. Make it consistent. If a human can do it by clicking, an agent should be able to do it by calling.

3. **Support structured output.** JSON by default. Markdown for human-readable content. Never trap data inside proprietary formats that agents cannot parse.

4. **Consider MCP.** Publish an MCP server so agents can discover your product's capabilities without reading documentation. This is the emerging standard and early adopters will have an advantage.

5. **Design for composability.** The output of your tool should be parseable as input by another tool. Agents chain tools together. If your tool's output is a pretty-printed table that cannot be piped, you are breaking the chain.

## What to Do If You Use a Product

When choosing tools for your operation, ask: "Can an agent use this?" If the answer is no, that tool has an expiration date. Prefer products with CLIs, APIs, and open data formats. Your [Personal Jarvis](/docs/concepts/personal-jarvis) can only be as capable as the tools it can access.

This is also why the [MVJ architecture](/docs/playbooks/practitioner/minimum-viable-jarvis) uses plain markdown files instead of proprietary apps. Markdown is the most agent-accessible format there is. Any tool can read it. Any agent can write it. No vendor lock-in. No API key required.

---

## Further Reading

- [Personal Jarvis](/docs/concepts/personal-jarvis): The system that uses agent-accessible tools
- [Harness Engineering](/docs/concepts/harness-engineering): How agents interact with tools through harnesses
- [Make Your Company Refactorable](/docs/legacy/make-your-company-refactorable): The organizational version of agent-accessibility
- [The Self-Improving Enterprise](/docs/concepts/self-improving-enterprise): Where agent-accessible products lead at the business level
- [The Minimum Viable Jarvis](/docs/playbooks/practitioner/minimum-viable-jarvis): Why plain markdown beats proprietary formats
