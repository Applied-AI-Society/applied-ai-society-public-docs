---
sidebar_position: 2
title: Typography
---

# Typography

Fonts used across the Applied AI Society brand.

---

## Wordmark Fonts

The "Applied AI Live" wordmark uses two distinct fonts:

### "APPLIED AI" — Helvetica Neue Bold

A bold, geometric sans-serif. Clean lines, uniform stroke width, modern appearance.

- **Font:** Helvetica Neue Bold
- **Fallback:** Arial Bold
- **Style:** All caps
- **Color on light backgrounds:** `#1A1A1A` (Text Dark)
- **Color on dark backgrounds:** `#FFFFFF` (White)

### "Live" — Brush Script

A casual, hand-drawn brush-script font. Mimics quick brush strokes. Adds warmth and energy.

- **Style:** Custom brush script
- **Color:** `#E67B35` (Orange)

The contrast between the structured "APPLIED AI" and the organic "Live" represents the blend of technical rigor and human creativity.

---

## Body & UI Fonts

For documentation, web interfaces, and printed materials:

| Use | Font | Weight |
|-----|------|--------|
| Headings | Space Grotesk | 600–700 |
| Body text | DM Sans | 400–500 |
| Code | Fira Code or system monospace | 400 |

### Space Grotesk

A geometric sans-serif with a technical feel. Good for headings and display text.

- **Source:** [Google Fonts](https://fonts.google.com/specimen/Space+Grotesk)
- **Weights used:** SemiBold (600), Bold (700)

### DM Sans

A clean, readable sans-serif for body copy. Slightly geometric but friendly.

- **Source:** [Google Fonts](https://fonts.google.com/specimen/DM+Sans)
- **Weights used:** Regular (400), Medium (500)

---

## Loading Fonts

For web projects, include via Google Fonts:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet">
```

Or in CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Space+Grotesk:wght@600;700&display=swap');

body {
  font-family: 'DM Sans', sans-serif;
}

h1, h2, h3 {
  font-family: 'Space Grotesk', sans-serif;
}
```

---

## Typography Guidelines

1. **Don't use too many weights.** Stick to 2-3 per font family.
2. **Headings in Space Grotesk, body in DM Sans.** Keep it consistent.
3. **For the wordmark, use official assets.** Don't try to recreate it with system fonts.
