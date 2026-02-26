---
sidebar_position: 7
title: Tools
---

# Chapter Leader Tools

A collection of tools that help run chapters efficiently. These aren't endorsements. They're just what's working for us right now.

---

## Meetup.com

**What it is:** Event discovery and RSVP platform with built-in audience.

**Website:** [meetup.com](https://meetup.com)

**What we use it for:**
- Event listings and RSVPs
- Organic discovery by people who attend similar events
- Building a chapter-specific audience over time

**Why it's useful:**
Meetup recommends your events to users who have attended similar meetups. This is free distribution. With zero extra marketing or ad spend, dozens of people have found Applied AI Society events just through Meetup's recommendation algorithm.

We run an **Applied AI Society network** on Meetup, which allows multiple chapters to operate under one umbrella. The Austin chapter is the first. When new chapters launch, they join the network.

**Tips:**
- Create your chapter's Meetup under the Applied AI Society network
- Keep event descriptions clear and focused on who should attend
- Meetup users expect consistency. Recurring events build momentum.
- You can use Meetup as your sole RSVP platform or pair it with something else

---

## Luma

**What it is:** Event page and RSVP platform with a polished UX.

**Website:** [lu.ma](https://lu.ma)

**What we use it for:**
- Beautiful event pages for sharing on social
- Clean check-in experience at the door
- Integration with calendar apps

**Why it's useful:**
Luma looks great. The event pages are modern and easy to share. If you're promoting on Twitter/X or LinkedIn, a Luma link feels more premium than a basic Meetup page.

**Trade-off:**
Luma doesn't have Meetup's built-in discovery algorithm. However, Luma does have **Featured Calendars** and **Local Events** on its [Discover page](https://lu.ma/discover). Submitting your event to relevant calendars (AI, Tech, your city) puts it in front of subscribers browsing those collections. See the [Luma Calendar Submissions](/docs/playbooks/chapter-leader/applied-ai-live#luma-calendar-submissions) guide for how to do this.

**Our approach:**
We use both. Meetup for discovery, Luma for a polished landing page when sharing directly. Chapter leaders can decide what works for them. If you only want one platform, Meetup is the priority because of organic reach.

---

## Gamma

**What it is:** AI-powered slide deck creator.

**Website:** [gamma.app](https://gamma.app)

**What we use it for:**
- Event presentations (speaker intros, sponsor slides, closing remarks)
- Internal decks for fellow organizers
- Quick pitch decks when talking to potential partners

**Why it's useful:**
Gamma generates polished slides fast. You describe what you want, it builds a first draft. Good for chapter leaders who need to create presentations but don't want to spend hours in PowerPoint or Google Slides.

**Tips:**
- Start with a rough outline, then let Gamma expand it
- Edit the output. It's a starting point, not a finished product
- Export to PDF for sharing or presenting offline

---

## Docusaurus

**What it is:** Documentation site framework built on React.

**Website:** [docusaurus.io](https://docusaurus.io)

**What we use it for:**
- This documentation site you're reading right now
- Playbooks, brand guidelines, case studies
- A single source of truth for chapter operations

**Why it's useful:**
Markdown-based, version controlled, easy to update. If you can write markdown, you can contribute to the docs. Built-in search, sidebar navigation, and dark mode support.

**Tips:**
- Clone the repo, make changes, push. That's it.
- Use `.mdx` files if you need React components in your docs
- The sidebar is configured in `sidebars.ts`

---

## Cursor

**What it is:** AI-powered code editor built on VS Code.

**Website:** [cursor.com](https://cursor.com)

**What we use it for:**
- Updating this documentation site
- Writing and editing communications
- Quick edits to markdown files
- Building out new playbooks and pages

**Why it's useful:**
Cursor's AI can help you write, edit, and refactor. Ask it to draft a section, fix a typo, or restructure a document. It understands the codebase context, so it can make changes that fit the existing style.

**Tips:**
- Use Cmd+K to ask the AI to edit selected text
- Use Cmd+L to chat with the AI about the codebase
- It works great for non-code tasks like documentation

---

## Airtable

**What it is:** Flexible database and CRM platform.

**Website:** [airtable.com](https://airtable.com)

**What we use it for:**
- Tracking outreach across LinkedIn, Twitter, and email
- Managing contact lists by member type (engineers, business owners, tool developers)
- Storing message status and history for automated campaigns
- Collaboration across chapter organizers

**Why it's useful:**
Airtable combines the simplicity of a spreadsheet with the power of a database. You can create filtered views, track status with single-select fields, and integrate with automation tools via API. The free tier works for getting started (1,000 records), and the Team plan ($24/user/month) unlocks automations and extensions.

**Tips:**
- Use camelCase for field names (e.g., `firstName` not `First Name`). This makes integration with automation tools easier
- Create filtered views for each outreach channel (e.g., "To Message (LinkedIn)")
- Only users with editor-level access count toward seat costs. Viewers are free.
- See the [CRM Setup](/docs/playbooks/chapter-leader/crm-setup) playbook for a complete setup guide

---

## PhantomBuster

**What it is:** Cloud-based automation tool for social media outreach.

**Website:** [phantombuster.com](https://phantombuster.com)

**What we use it for:**
- Automated LinkedIn DM campaigns
- Automated Twitter/X DM campaigns
- Scraping profile data from social platforms
- Scheduled outreach at safe volumes

**Why it's useful:**
PhantomBuster handles the repetitive work of sending personalized messages at scale. It reads from a Google Sheet (synced from Airtable), sends messages on a schedule, and outputs results that sync back to your CRM. You set it up once and it runs on autopilot.

**Pricing:**
- Free trial available (limited execution time)
- Starter plan: $69/month (20 hours execution time)
- Pro plan: $159/month (80 hours execution time)

**Safety Warning:**
Both LinkedIn and Twitter have limits on how many messages you can send. PhantomBuster shows recommended limits based on your account age and activity. Start slow, personalize your messages, and stay under the platform warnings. See the automation guides for safe settings.

**Tips:**
- Install the browser extension to connect your social accounts
- Use variables like `#firstName#` or `#twitterUsername#` for personalization
- Set up "Repeatedly" schedules during working hours (skip weekends)
- Monitor your accounts for warnings and reduce volume if needed
- See [LinkedIn Automation](/docs/playbooks/chapter-leader/linkedin-automation) and [Twitter Automation](/docs/playbooks/chapter-leader/twitter-automation) for complete setup guides

---

## Remotion (National Brand Infrastructure)

**What it is:** React-based framework for creating videos and static graphics programmatically.

**Website:** [remotion.dev](https://remotion.dev)

**What national uses it for:**
- Event flyers (square 1080x1080 PNGs)
- Event promo videos
- Brand intro bumpers
- Ambient event videos (looping visuals for the projector while people network or file in)

**Why it's useful:**
The repo comes with existing compositions for common chapter needs: event flyers, promo videos, brand bumpers, ambient event loops. You don't need to design anything from scratch. Clone the repo, swap your chapter's details (speaker names, dates, venue, co-host logos) into the props, and render. Brand colors, fonts, illustration assets, and layout rules are baked into the compositions, so everything stays on-brand automatically.

**How to use it:** Clone the repo, run `npm start` to open Remotion Studio, preview compositions live, and render. Pass custom props via CLI to generate variants without editing code. If you're not comfortable with a local dev setup, you can use the [brand guidelines](/docs/brand) to create assets with Canva, Gamma, or whatever tools you prefer.

**For reference:**
- See the [Generating Flyers](/docs/playbooks/chapter-leader/generating-flyers) playbook for how the system works
- The `EventFlyer` composition accepts props for co-host logos, agenda items, speaker attribution, date, and venue

---

## What's Next

We'll add more tools as we find them useful. If you're a chapter leader and you've found something that helps, let us know.
