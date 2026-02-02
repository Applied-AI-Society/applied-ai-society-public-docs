---
sidebar_position: 6
title: Generating Flyers
---

# Generating Flyers

Create brand-consistent event flyers using the Remotion-based flyer generator. Deterministic output, no design tools required.

---

## Quick Start

From the `applied-ai-society-remotion/` directory:

```bash
npm install
npm start          # Preview in Remotion Studio
npm run still:flyer # Render 1080x1080 PNG to out/event-flyer.png
```

---

## Customizing

Pass event details as JSON via `--props`:

```bash
npx remotion still EventFlyer out/flyer.png --props='{
  "coHostLogo": "aitx.png",
  "agendaItems": [
    { "text": "Talk by **AI Pioneer**", "speaker": "Travis Oliphant" },
    { "text": "**Live architecting** of an agentic solution\nfor a real business by", "speaker": "Jack Moffatt" }
  ],
  "dateLine": "Thursday, Feb 26th at 5:30 PM",
  "venueLine": "Antler VC HQ — Austin, TX"
}'
```

---

## Custom Size

The default output is 1080x1080 (square, good for Instagram and general use). Override with `--width` and `--height`:

```bash
# Open Graph / link preview (1200x630)
npx remotion still EventFlyer out/flyer-og.png --width=1200 --height=630

# Instagram Story (1080x1920)
npx remotion still EventFlyer out/flyer-story.png --width=1080 --height=1920
```

The composition scales to fit whatever dimensions you provide.

---

## Adding a Co-Host Logo

1. Drop the logo PNG into the `public/` directory (e.g., `public/partner-logo.png`)
2. Reference it in props:

```bash
npx remotion still EventFlyer out/flyer.png --props='{
  "coHostLogo": "partner-logo.png"
}'
```

The logo appears next to the Applied AI Society stacked logo at the top of the flyer.

---

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `coHostName` | `string` | `""` | Co-host organization name (currently unused visually, reserved for future use) |
| `coHostLogo` | `string` | `"aitx.png"` | Filename of co-host logo in `public/`. Set to `""` to hide. |
| `coHostCircleCrop` | `boolean` | `true` | Whether to circle-crop the co-host logo |
| `eventTitle` | `string` | _(none)_ | Custom title text. If omitted, the "Applied AI Live" SVG logo is used. |
| `agendaItems` | `AgendaItem[]` | _(see below)_ | Array of agenda items to display |
| `dateLine` | `string` | `"Thursday, Feb 26th at 5:30 PM"` | Date/time shown in the orange pill |
| `venueLine` | `string` | `"Antler VC HQ — Austin, TX"` | Venue shown in the orange pill |

### AgendaItem

| Field | Type | Description |
|-------|------|-------------|
| `text` | `string` | Description text. Supports `**bold**` markers and `\n` for line breaks. |
| `speaker` | `string` | Speaker name, rendered in orange after the text. |

---

## Tips

- **Preview first.** Run `npm start` to open Remotion Studio and see your flyer before rendering.
- **Bold text.** Wrap words in `**double asterisks**` inside `text` fields to render them bold.
- **No event title?** Omit `eventTitle` to use the default "Applied AI Live" SVG branding.
- **Custom event?** Set `eventTitle` to any string for non-Live events.
