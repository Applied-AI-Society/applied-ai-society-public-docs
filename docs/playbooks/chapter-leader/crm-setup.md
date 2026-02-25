---
sidebar_position: 8
title: CRM Setup
---

# CRM Setup Guide

A guide for setting up Airtable as your CRM for managing outreach across different member types and channels.

Last Updated: January 26, 2026

---

## Table of Contents

- [Why Airtable](#why-airtable)
- [Pricing](#pricing)
- [Setup](#setup)
  - [Create Your Account](#create-your-account)
  - [Create Your Base](#create-your-base)
  - [Required Fields](#required-fields)
  - [Import Data](#import-data)
- [Outreach Options](#outreach-options)

---

## Why Airtable

Airtable is the go-to CRM for this system because:

- **Flexible:** Manage different outreach channels (LinkedIn, Twitter, Email) across various member types (applied AI practitioners, business owners, tool developers)
- **Affordable:** Free tier works for getting started; paid plans are reasonable
- **Extensions:** Easy deduping, data cleaning, and more built-in
- **Collaboration:** Multiple team members can work on the same base
- **API Access:** Integrates with automations and external tools

---

## Pricing

| Plan | Cost | Records per Base | Best For |
|------|------|------------------|----------|
| Free | $0 | 1,000 | Trial and basic setup |
| Team | $24/user/month | 50,000 | Big databases, automations, extensions|

**What requires a paid plan:**

- More than 1,000 records per base
- Automations (auto-emailing with conditions)
- Extensions (comfortable deduping, data enrichment)

**Note:** Only users with editor-level access count toward seat costs. Viewers are free.

---

## Setup

### Create Your Account

1. Go to [airtable.com](https://airtable.com)
2. Sign up with email or Google/SSO
3. Verify your email

### Create Your Base

1. Click the **three stripes** (☰) at the top left to expand the sidebar
2. Click the **Create** button at the bottom left corner
3. You'll see two options:
   - **Build an app with Omni:** Airtable's AI assistant
   - **Build an app on your own**

**Recommendation:** Click **"Build an app on your own"**. Omni usually creates some unnecessary tables/interfaces you'll likely need to customize or delete later.

A new base will be created with default fields.

### Required Fields

Set up these core fields first.

> **Tip:** Use camelCase for field names (e.g., `firstName` not `First Name`), it may be useful for automations later on.

**Rename the default "Name" field:**

| Field | Type | Notes |
|-------|------|-------|
| `firstName` | Single line text | Primary field. Rename from default "Name" so you can use it as variable in outreach automations. |

**Create these additional fields:**

| Field | Type | Notes |
|-------|------|-------|
| `lastName` | Single line text | |
| `email` | Email | |
| `city` | Single line text | |
| `state` | Single line text | |
| `country` | Single line text | |
| `memberType` | Single select | Options: `Tool Developer`, `Applied AI Practitioner`, `Business Owner`, `Other` |

**For manual outreach tracking:**

| Field | Type | Notes |
|-------|------|-------|
| `Outreach` | Checkbox | Mark when you've manually DM'd someone |

### Import Data

1. Click the **Add** button (with magic wand icon) at the bottom left of the database
2. A pop-up opens. Choose the **Data** section.
3. Select your import method:
   - **CSV:** Upload a .csv file
   - **Google Sheets:** Connect directly
   - **Excel:** Upload .xlsx file
   - **Paste table data:** Copy/paste from any spreadsheet
4. Map columns to your fields
5. Click **Import**

---

## Outreach Options

**Manual Outreach:**

Simply use a checkbox field called `Outreach` and mark it when you've messaged someone.

**Automated Outreach:**

Set up automations to reach out to contacts from Airtable via PhantomBuster. Each guide below specifies additional fields you'll need to create (profile URLs, status tracking, etc.) and how to set up filtered views.

- [LinkedIn Automation](/docs/playbooks/chapter-leader/linkedin-automation) 
- [Twitter Automation](/docs/playbooks/chapter-leader/twitter-automation) 

---

## See Also

- [LinkedIn Automation](/docs/playbooks/chapter-leader/linkedin-automation): LinkedIn DM automation setup
- [Twitter Automation](/docs/playbooks/chapter-leader/twitter-automation): Twitter DM automation setup
- [Tools](/docs/playbooks/chapter-leader/tools): Other chapter leader tools
