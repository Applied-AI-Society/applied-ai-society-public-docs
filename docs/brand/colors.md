---
sidebar_position: 1
title: Colors
---

# Color Palette

The Applied AI Society color system. Warm, natural, and intentionally not techy.

Our palette draws from nature: sunrise oranges, cream skies, olive hills. No neon. No gradients that scream "futuristic." Just colors that make you feel good.

---

## Primary Orange

Our signature color. Warm, energetic, and trendy. Orange stands out without being aggressive. It's having a moment in fashion and design. Used for CTAs, links, and key highlights.

| Color | Hex | CSS Variable |
|-------|-----|--------------|
| Orange | `#E67B35` | `--aais-orange` |
| Orange Light | `#F09550` | `--aais-orange-light` |
| Orange Dark | `#C95F1C` | `--aais-orange-dark` |

---

## Amber & Gold

Warm accent tones for gradients and secondary highlights.

| Color | Hex | CSS Variable |
|-------|-----|--------------|
| Amber | `#D4A017` | `--aais-amber` |
| Gold | `#E8B923` | `--aais-gold` |

---

## Cream Backgrounds

Warm and human. Pure white feels clinical. Dark backgrounds feel dystopian. Cream splits the difference: soft, approachable, and easy on the eyes.

| Color | Hex | CSS Variable |
|-------|-----|--------------|
| Cream | `#FAF7F1` | `--aais-cream` |
| Cream Dark | `#F5F0E6` | `--aais-cream-dark` |
| Cream Darker | `#EDE7DA` | `--aais-cream-darker` |

---

## Olive Green

The rolling hills. Think Windows XP. Green pastures make us feel calm and grounded. This is intentional. AI doesn't have to feel cold and mechanical. Our olive greens remind people that technology can be part of a natural, positive progression.

| Color | Hex | CSS Variable |
|-------|-----|--------------|
| Olive | `#5B6E4D` | `--aais-olive` |
| Olive Light | `#7A8F6A` | `--aais-olive-light` |
| Olive Dark | `#3F4D36` | `--aais-olive-dark` |

---

## Text Colors

Readable, accessible text hierarchy.

| Color | Hex | CSS Variable |
|-------|-----|--------------|
| Text Dark | `#1A1A1A` | `--aais-text-dark` |
| Text Medium | `#4A4A4A` | `--aais-text-medium` |
| Text Light | `#6B6B6B` | `--aais-text-light` |

---

## Gradients

Key gradient combinations used throughout the brand.

### Primary Button
```css
linear-gradient(135deg, #E67B35 0%, #D4A017 100%)
```
Used for primary CTAs and important actions.

### Orange Section
```css
linear-gradient(135deg, #E67B35 0%, #C95F1C 100%)
```
Background for highlighted content sections.

### Cream Background
```css
linear-gradient(180deg, #FAF7F1 0%, #F5F0E6 100%)
```
Subtle depth for page backgrounds.

### Sun Glow
```css
radial-gradient(circle, #E8B923 40%, #D4A017 100%)
```
Radial gradient for decorative sun elements.

---

## Usage Guidelines

### Primary Actions
Use **Orange (#E67B35)** for buttons, links, and interactive elements that need attention.

### Backgrounds
Use **Cream (#FAF7F1)** as the primary background. Use darker creams for cards and sections.

### Text
Use **Text Dark (#1A1A1A)** for headings, **Text Medium (#4A4A4A)** for body copy.

### Accents
Use **Olive (#5B6E4D)** sparingly for variety. Great for icons and decorative elements.

---

## CSS Variables

All colors are available as CSS custom properties for easy theming.

```css
:root {
  /* Primary Orange */
  --aais-orange: #E67B35;
  --aais-orange-light: #F09550;
  --aais-orange-dark: #C95F1C;
  
  /* Amber & Gold */
  --aais-amber: #D4A017;
  --aais-gold: #E8B923;
  
  /* Cream Backgrounds */
  --aais-cream: #FAF7F1;
  --aais-cream-dark: #F5F0E6;
  --aais-cream-darker: #EDE7DA;
  
  /* Olive Green */
  --aais-olive: #5B6E4D;
  --aais-olive-light: #7A8F6A;
  --aais-olive-dark: #3F4D36;
  
  /* Text Colors */
  --aais-text-dark: #1A1A1A;
  --aais-text-medium: #4A4A4A;
  --aais-text-light: #6B6B6B;
}
```
