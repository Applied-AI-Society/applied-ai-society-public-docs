# Applied AI Society Documentation

The open-source knowledge base for the Applied AI Society. Everything we know about making the world applied AI literate, documented publicly so anyone can use it.

**Live site**: [docs.appliedaisociety.org](https://docs.appliedaisociety.org)
**Main site**: [appliedaisociety.org](https://appliedaisociety.org)
**Portal**: [portal.appliedaisociety.org](https://portal.appliedaisociety.org)
**Discord**: [discord.gg/K7uWJBMFaN](https://discord.gg/K7uWJBMFaN)

Built with [Docusaurus 3](https://docusaurus.io/). 110+ docs and growing.

## What's In Here

### Philosophy and Principles
The worldview behind AAS. Why applied AI literacy matters, how we think about the economy, and what we stand for.
- **[Canon](https://docs.appliedaisociety.org/docs/philosophy/canon)**: 8 tenets that define the movement
- **[Principles](https://docs.appliedaisociety.org/docs/philosophy/principles)**: 5 operating rules for everything we do
- **[North Star](https://docs.appliedaisociety.org/docs/philosophy/north-star)**: The metric that matters
- **[Voices from the Frontier](https://docs.appliedaisociety.org/docs/philosophy/voices-from-the-frontier)**: Practitioners in their own words
- **[Why Field Notes](https://docs.appliedaisociety.org/docs/philosophy/why-field-notes)**: The practice of sharing what you learn

### Concepts
Mental models for understanding the applied AI economy. 70+ concept docs. The central ones:
- **[The New Flood](https://docs.appliedaisociety.org/docs/concepts/the-new-flood)**: The 2026 moment as a flood across four vectors, not a weather event.
- **[The Ark of One](https://docs.appliedaisociety.org/docs/concepts/the-ark-of-one)**: A sufficiently contexted, sovereignly designed Personal Agentic OS is an ark during this flood.
- **[The Elevator Economy](https://docs.appliedaisociety.org/docs/concepts/the-elevator-economy)**: No standing still. An elevator with a cut cable, not a K.
- **[Hyperagency](https://docs.appliedaisociety.org/docs/concepts/hyperagency)** and **[The Hyperagency Gap](https://docs.appliedaisociety.org/docs/concepts/the-hyperagency-gap)**: The state and the gap closing it is our mission.
- **[Personal Agentic OS](https://docs.appliedaisociety.org/docs/concepts/personal-agentic-os)**: The concrete system a Jarvised person builds and owns.
- **[The Sovereignty Stack](https://docs.appliedaisociety.org/docs/concepts/the-sovereignty-stack)**: Every layer, every dependency, every point of control.
- Plus Context Engineering, Intent Engineering, Game Design, The Encounter, Ignorance Debt, Activation, and many more.

### Roles
Emerging roles in the applied AI economy: AI Workflow Architect, AI Agent Consultant, Fractional AI Executive, AI Enablement Coach, Business OS Administrator, AI Transition Coach.

### Playbooks
Practical, step-by-step guides organized by role.

**Chapter Leader** (26 docs): Everything you need to start and run an AAS chapter.
- [Starting a Chapter](https://docs.appliedaisociety.org/docs/playbooks/chapter-leader/starting-a-chapter): The entry point
- [Launching on Campus](https://docs.appliedaisociety.org/docs/playbooks/chapter-leader/launching-on-campus): Event-first approach for university chapters
- [Event Formats](https://docs.appliedaisociety.org/docs/playbooks/chapter-leader/event-formats): Full catalog of event types
- [Applied AI Live](https://docs.appliedaisociety.org/docs/playbooks/chapter-leader/applied-ai-live): The flagship workshop format
- Plus: venue finding, photographer sourcing, speaker outreach, event promotion, content distribution, building partnerships, hosting, recording, CRM setup, LinkedIn/Twitter automation, hackathons, live architecture sessions, event descriptions, recaps, flyer generation, tools

**Practitioner** (7 docs): Guides for people doing applied AI client work.
- Applied AI Economy, ICP Clarity, Experimental Improvement, Pricing, Finding Clients, Pilot Pitch, MVP Personal Agentic OS

**Business Owner** (9 docs): Resources for operators looking to implement AI.
- Why AI, Quick Check, Situation Map, Pilot Scope, Beyond Automation, Hiring Practitioners, Workflow Decomposition, AI Readiness by Function, Don't Scale Slop

**Student / Explorer** (2 docs): For students and career changers navigating the AI economy.
- [Five Levels of Value](https://docs.appliedaisociety.org/docs/playbooks/student/five-levels-of-value): Framework for understanding where you sit

**Presenter** (1 doc): Guest speaker prep for Applied AI Live events.

### Applied AI Literacy
The source material mission: building the best open-source applied AI literacy content in the world.
- [Earthshot](https://docs.appliedaisociety.org/docs/applied-ai-practice/earthshot): The vision for applied AI literacy at scale

### Case Studies
Real-world AI implementation stories from practitioners across the AAS network.

### Legacy
A framework for how organizations should manage their knowledge in the AI age. Principles, processes, and tools.

### Sovereign Agentic Business OS
Principles and question bank for building businesses that run on AI agents while maintaining sovereignty.

### Standards
Documentation standards including the INTEGRATE.md spec for how repos should describe themselves to AI agents.

### Brand
Visual identity, colors, fonts, and AI image generation guidelines. The brand assets in `static/img/` are served via CDN and referenced by other AAS repos (slides, Remotion, portal).

### University Partnerships
How AAS partners with universities to bring applied AI literacy to campuses.

## AI Skills for Chapter Leaders (Coming Soon)

We are building open-source AI skills (starting with Claude Code) that make organizing events dramatically easier. Each skill wraps the playbooks that already exist in this repo. Event description writers, speaker outreach drafters, flyer generators, recap writers, sponsor pitch drafters. All open source, all improving as chapters use them.

## Documentation Structure

```
docs/
├── about/                    # What is Applied AI Society
├── applied-ai-literacy/      # Source material mission (Earthshot)
├── philosophy/               # Canon, principles, north star, field notes
├── concepts/                 # Mental models (9 concept docs)
├── roles/                    # Emerging AI economy roles (6 role docs)
├── case-studies/             # Real-world implementation stories
├── playbooks/
│   ├── chapter-leader/       # 26 docs: events, partnerships, tools, content, CRM
│   │   └── event-recaps/     # Post-event write-ups
│   ├── practitioner/         # 7 docs: client work, pricing, finding clients
│   ├── business-owner/       # 9 docs: AI implementation for operators
│   ├── student/              # 2 docs: navigating the AI economy
│   └── presenter/            # 1 doc: speaker prep
├── sovereign-agentic-business-os/  # AI-native business architecture
├── standards/                # INTEGRATE.md spec and writing guide
├── brand/                    # Visual identity, AI generation guide
├── university-partnerships.mdx
├── activate.mdx
└── code-of-conduct.md

static/img/
├── illustrations/            # Brand illustration bank (14 assets)
│   ├── scene-*.png           # People scenes (workshop, presentation, networking)
│   ├── icon-*.png            # Conceptual icons (compass, lightbulb, bridge, etc.)
│   └── wildflower*.png       # Accent elements
├── logos/                    # AAS logos and marks
└── ...                       # Other brand assets

scripts/
├── generate-recent-updates.sh  # Auto-populates homepage from git log
└── check-sidebar.sh            # Warns about docs missing from sidebar
```

## Quick Start

```bash
npm install
npm start       # Dev server at http://localhost:3000
npm run build   # Production build (runs prebuild checks)
```

## Adding New Documentation

1. Create your `.md` or `.mdx` file in the appropriate `docs/` subdirectory
2. Add YAML frontmatter with at minimum `sidebar_position` and `title`
3. **Register it in `sidebars.ts`**. New docs do NOT auto-appear in navigation. The prebuild check will warn about missing entries during `npm run build`
4. Follow brand rules: warm and human tone, no em dashes, no hype

## Brand Rules

- **Colors**: Orange `#E67B35`, Gold `#FFC14D`, Cream `#FAF7F1`, Olive `#5B6E4D`, Dark `#1A1A1A`
- **Tone**: Warm, human, practical. Not corporate, not hype.
- **No em dashes.** Use colons, parentheses, or separate sentences instead.
- **Illustrations**: Reuse existing assets in `static/img/illustrations/` before generating new ones. Use `nano-banana-pro` with `static/img/retro-ad-2026.png` as style reference for new illustrations.
- **Canonical vocabulary**: See the vocabulary table in [CLAUDE.md](./CLAUDE.md#canonical-vocabulary) for the preferred AAS terms (activation, Jarvising, elevator economy, New Flood, ark of one, fleet of arks, etc.) versus generics to avoid. When AAS leadership corrects a term, add the correction to that table.

Full brand guide: [docs/brand](https://docs.appliedaisociety.org/docs/brand)

## Asset CDN

Other AAS repos (slides, Remotion, portal) reference brand assets via `https://docs.appliedaisociety.org/img/` URLs. All files in `static/img/` are served at these paths. Do not move or rename assets without checking cross-repo references.

## Prebuild Scripts

Two scripts run automatically before every build:

1. **`scripts/generate-recent-updates.sh`**: Reads `git log` to find the 4 most recently created/modified docs. Writes `src/data/recentUpdates.json` for the homepage.
2. **`scripts/check-sidebar.sh`**: Warns about any `.md`/`.mdx` files not referenced in `sidebars.ts`.

## Contributing

This is an open-source project. If you are an AAS chapter leader, practitioner, or community member and you want to contribute:

1. Read the existing playbook for the area you want to improve
2. Fork this repo
3. Make your changes following the brand rules and doc structure above
4. Submit a PR

For questions, reach out on [Discord](https://discord.gg/K7uWJBMFaN).

## Links

- **Docs site**: [docs.appliedaisociety.org](https://docs.appliedaisociety.org)
- **Main site**: [appliedaisociety.org](https://appliedaisociety.org)
- **Portal**: [portal.appliedaisociety.org](https://portal.appliedaisociety.org)
- **Discord**: [discord.gg/K7uWJBMFaN](https://discord.gg/K7uWJBMFaN)
- **GitHub org**: [github.com/Applied-AI-Society](https://github.com/Applied-AI-Society)
- **Contribute**: [appliedaisociety.org/contribute](https://appliedaisociety.org/contribute)
