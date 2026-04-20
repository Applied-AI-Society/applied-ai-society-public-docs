---
sidebar_position: 119
title: "Forkable Is the New Sticky"
---

# Forkable Is the New Sticky

*Big SaaS won for twenty years by accumulating long-tail features nobody else would rebuild. Agents rebuild them in an afternoon. The new moat is how easy you make it for customers to fork your product and stay paying you anyway.*

*Synthesizing Theo Browne's April 2026 argument for [open-sourcing your apps](https://www.youtube.com/watch?v=G1xqTjoihfo) and Mitchell Hashimoto's April 2026 essay "The Building Block Economy."*

---

## The Old Moat

Salesforce has a thousand features. Any given customer uses about fifty. Twenty-five of those fifty are the same across most customers. The other twenty-five are weird and bespoke, used by almost nobody else.

That last twenty-five is the moat. A competitor can build the twenty-five everyone uses, then loses every deal because they are missing the one obscure feature a given customer refuses to live without. Multiply that across a million customers and the long tail becomes uncrossable. You cannot hire enough engineers to rebuild the random surface that the incumbent accumulated over twenty years.

This is why Salesforce, ServiceNow, SAP, Retool, and every other category leader has won. The long tail of features was the wall.

## Why The Moat Is Collapsing

Agents now rebuild long-tail features in hours. A competitor's agent reads your docs, infers the behavior from your UI, and ports it into theirs. The cost of matching an incumbent's feature set used to be ten engineer-years. It is now a weekend of [harness engineering](/docs/concepts/harness-engineering).

It gets worse for the incumbent. Customers increasingly do not need a vendor to build the missing feature for them. A motivated user with an agent will build it themselves the moment the code is in front of them. The long-tail moat was always fragile. Agents just exposed how fragile.

## The Building Block Economy

Mitchell Hashimoto (creator of Terraform and Ghosty) named the replacement in April 2026: *the building block economy*. The most effective way to build software right now is no longer a high-quality mainline app. It is a set of well-designed components that other people assemble, remix, and extend, usually with the help of agents.

His receipt: Ghosty the terminal reached a million daily users in eighteen months. `libghostty`, the core terminal binding layer that Ghosty itself is built on (published as a separate open-source library), passed multiple million daily users in *two months* after that. The building block outgrew the product it was born from, by an order of magnitude, five times faster. Builders and agents reached for the component the moment it was exposed.

This maps directly onto what [Agent-Accessible Products](/docs/concepts/agent-accessible-products) already predicted: the agents pick the tools, and agents prefer open source to proprietary. Independent research labs keep finding this under every condition they test. If the default harness any hyperagent in the world uses is going to prefer the open version of your category, then closed-source is a structural disadvantage that compounds every quarter.

## The Fork Rate

Theo Browne's T3 Code (an open-source GUI wrapper around Claude Code, Codex, and other CLIs) is a live example of the new dynamic. Roughly 16,000 weekly users. Roughly 1,500 forks on GitHub. Ten percent of weekly users have forked the codebase and customized it.

Some of those forks are throwaway. Some are serious. One user, Emanuel, rebuilt chunks of T3 Code in his own fork ("DP Code"): split chat, multiple concurrent chats, a custom queuing system, a handoff feature, and integrations from CMUX. He shared the whole thing publicly. Theo gets to cherry-pick the best ideas and bring them back to mainline. The community did the R&D.

Ten-percent fork rate on a new dev tool was not a category three years ago. It is only possible because two costs dropped at the same time: shipping open-source code (always cheap) and modifying it to fit your needs (used to be expensive, now an afternoon with an agent).

## Forkable As Stickiness

The old stickiness was feature lock-in. The customer could not leave because they used a feature no competitor had.

The new stickiness is the inverse. The customer stays because they can make the product into whatever they want, without asking you. You shipped the core. You host the infrastructure they do not want to run themselves (databases, payments, auth, email, servers). They own the layer they interact with. Any missing feature, they (or their agent) adds. They never file a feature request, never wait on your roadmap, never seriously consider leaving. Leaving would mean abandoning their own customizations.

Vercel is the early pattern for this in infrastructure. You write the code. Vercel hosts it, serves it, handles the edge and rendering layer. Anything Vercel does not do, you plug in from somewhere else via your own code. Supabase for auth. Convex for backend. Cloudflare for the firewall. Vercel does not try to be everything. It is the place your code runs, and your code is yours.

Applied to an application rather than infrastructure: the customer pays the vendor to host the backend and ship the core. Their deployment is a fork on a custom subdomain. When they want a feature, they tell an agent in the app and it modifies their fork. They never needed the vendor to prioritize them. [Personal Software](/docs/concepts/personal-software) becomes the default surface even for multi-tenant products.

## The Commercialization Shape

The question Mitchell stopped short of answering is how you actually make money when the code is open. The emerging answer has three surfaces that can be priced:

1. **The infrastructure.** Databases, file storage, auth, queues, email, servers. The stuff customers do not want to run themselves. This is the most stable source of revenue and the hardest to fork your way out of.
2. **The default-good experience.** The polished, well-maintained mainline build, deployed for you. Most customers, most of the time, will use the vendor's default rather than fork. The fork option is what keeps them paying. They rarely exercise it.
3. **The migration service.** When the upstream ships changes, the vendor reapplies the customer's fork-level changes cleanly and hands back the migrated build. Customers will happily pay for this in perpetuity. It is the hardest part of running a fork.

Sovereignty-wise: customers who insist on self-hosting can do so and stop paying. That is a small fraction. The large fraction keeps paying because the infrastructure and the migration service are worth more than the subscription fee every month.

## `patch.md` and Self-Forking Software

Theo's other contribution is a concrete architectural proposal he calls `patch.md`. Same shape as `CLAUDE.md`, `AGENTS.md`, and the other [instruction files](/docs/concepts/instruction-files) that configure agentic systems. The job of `patch.md` is to describe, in plain English, every customization the user has made to their fork.

When the upstream ships an update, the flow is:

1. Pull the latest changes from mainline.
2. If they apply cleanly, the user is migrated.
3. If they do not apply cleanly, an agent uses `patch.md` to reapply the user's customizations on top of the new mainline, resolving conflicts as it goes.
4. The user reviews, confirms, and ships.

The "Update" button becomes an agent-mediated migration instead of a binary overwrite. Self-forking, self-customizing, self-healing.

This is where the argument becomes concrete for builders. If you are designing a product today, the decision is not only whether to open source the code. It is whether to design the product so the user's customizations are first-class artifacts the product itself knows how to preserve. That design choice is what turns open source from a risk profile into a durable moat.

## What It Means For Applied AI Practitioners

If you are deciding whether to open-source a product you are building, the calculus in 2026 is different from the calculus in 2022:

- **Agents will pick the open alternative by default.** Closed source is working against the grain of the default tooling every hyperagent in the world uses.
- **The long-tail feature moat is not defendable.** You cannot outrun agents cloning your surface. You can outrun them by shipping a better building block that the ecosystem prefers to theirs.
- **Your customers are going to fork regardless.** If the code is closed, they will reimplement it from scratch in-house or route around you. If the code is open, you get to see what they built and bring the best ideas back to mainline.
- **Stickiness lives in infrastructure and migration now, not features.** Shift the moat away from the UI and into the parts of the stack customers cannot economically run themselves.

The real risks stay real. Security exposure grows. Self-hosting cannibalizes some paid hosting. Competitors clone faster. These costs are smaller than the cost of losing the next decade of customer-built R&D because your code was behind a login.

If you are consulting with business owners on what to build, this is the conversation to have. [Liberation Architecture](/docs/concepts/liberation-architecture) and [Agent-Accessible Products](/docs/concepts/agent-accessible-products) already pointed here. Forkable-by-default is the next step: design the product so the customer's fork is a feature, not a failure mode.

## The Sovereignty Alignment

The business argument turns out to be the sovereignty argument, re-derived from the opposite direction.

Customers owning their code is [The Lock-In Is Coming](/docs/concepts/the-lock-in-is-coming) inverted. The vendor chooses up-front not to lock the customer in, and the market rewards them for it. Customers owning their customizations is [The Soul Harness](/docs/concepts/the-soul-harness) applied to the products they use. Agents preferring open alternatives is [The Sovereignty Stack](/docs/concepts/the-sovereignty-stack) becoming the default market preference, not just a movement.

The [Applied AI Society](https://appliedaisociety.org) has been arguing for sovereignty on principle. Theo and Mitchell are arguing for the same shape on business grounds. They converge on the same recommendation: build the thing customers can take away from you, and they will choose not to.

---

## Further Reading

**Internal:**

- [Agent-Accessible Products](/docs/concepts/agent-accessible-products): The product-design layer of this argument. CLIs, APIs, MCP. If agents cannot use your product, agents will replace your product.
- [The Lock-In Is Coming](/docs/concepts/the-lock-in-is-coming): The counter-force. Every VC-backed hyperscaler eventually moves to close in. Forkable-by-default is the counter-strategy.
- [The Sovereignty Stack](/docs/concepts/the-sovereignty-stack): The full stack customers are increasingly unwilling to rent. Forkable products are the application-layer answer.
- [The Soul Harness](/docs/concepts/the-soul-harness): Predatory vs. liberating systems. Forkable products are the structural form of a liberating harness.
- [Liberation Architecture](/docs/concepts/liberation-architecture): Wrap, do not replace. Forkable-by-default extends the same logic from enterprise legacy systems to your own new products.
- [Build What Big AI Won't](/docs/concepts/build-what-big-ai-wont): The other half of the strategic landscape. Big AI absorbs the unabsorbable. Forkable, opinionated, community-owned products are harder to absorb.
- [Personal Software](/docs/concepts/personal-software): The per-customer endpoint. Every customer running a fork is, in effect, running personal software with a vendor-maintained core.
- [Instruction Files](/docs/concepts/instruction-files): The file family `patch.md` would join. `CLAUDE.md`, `AGENTS.md`, and now `patch.md` as the encoding of your fork-level intent.
- [Harness Engineering](/docs/concepts/harness-engineering): The discipline that makes a weekend-fork feasible in the first place.

**External:**

- Theo Browne, "[the business case for OPEN SOURCING your apps](https://www.youtube.com/watch?v=G1xqTjoihfo)" (April 2026): The origin argument for this piece, including the T3 Code fork-rate data and the `patch.md` proposal.
- Mitchell Hashimoto, "The Building Block Economy" (April 2026): The framing that the factory of software is now agentic, imports are up, exports are up, and mainline apps are becoming a different kind of product.
