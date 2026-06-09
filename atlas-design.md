# at:las Design System Analysis

## Overview

A modern, accessibility-focused government/public-sector design system with a minimalist visual language emphasizing readability, hierarchy, and WCAG compliance.

---

## Typography

### Likely Font Family

Primary candidate:

```css
font-family:
  "Poppins",
  "Segoe UI",
  "Helvetica Neue",
  Arial,
  sans-serif;
```

### Characteristics

- Geometric sans-serif
- Large x-height
- Rounded terminals
- Strong legibility
- Modern governmental UX aesthetic

### Estimated Type Scale

| Element | Size | Weight |
|----------|----------|----------|
| Hero H1 | 72–80px | 700 |
| Page H1 | 56–64px | 700 |
| Section Heading | 24–32px | 700 |
| Body Text | 18–22px | 400 |
| Links | 18–22px | 400 |

---

## Color Palette

### Primary Brand Blue

```css
--primary: #0084C7;
```

Used for:

- Logo
- Hyperlinks
- Interactive elements

### Accessibility Toggle

```css
--accent: #1D3ED6;
```

### Text Color

```css
--text: #111111;
```

### Border Color

```css
--border: #3E3E3E;
```

### Background

```css
--background: #FAFAFA;
```

---

## Layout

### Container

```css
max-width: 1400px;
margin: 0 auto;
```

### Horizontal Spacing

```css
padding-left: 112px;
padding-right: 112px;
```

### Header

```css
height: 106px;
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: 1px solid #444;
```

---

## Spacing System

Likely based on an 8px grid.

### Spacing Scale

```css
--space-1: 8px;
--space-2: 16px;
--space-3: 24px;
--space-4: 32px;
--space-5: 48px;
--space-6: 64px;
--space-7: 96px;
```

### Typical Vertical Rhythm

```text
Title → Subtitle      32px
Section → Section     96px
Paragraph → Paragraph 32px
```

---

## Accessibility Features

### Typography

```text
Body text ≈ 20px
```

Benefits:

- Improved readability
- Reduced cognitive load
- Better accessibility compliance

### Contrast

Estimated:

```text
12:1+ contrast ratio
```

### Interaction

- Large touch targets
- High visibility links
- Strong hierarchy
- Minimal distractions

### Accessibility Mode

Likely supports:

- High contrast mode
- Dark mode
- Accessibility preferences

---

## Visual Design Principles

### Present

```text
✓ Large typography
✓ Strong hierarchy
✓ Minimal color usage
✓ Accessibility-first
✓ Clean whitespace
✓ Government-grade UX
```

### Avoided

```text
✗ Heavy shadows
✗ Decorative gradients
✗ Excessive animations
✗ Card-heavy layouts
✗ Visual clutter
```

---

## CSS Architecture (Estimated)

### Design Tokens

```css
:root {
  --primary: #0084c7;
  --accent: #1d3ed6;
  --text: #111111;
  --background: #fafafa;

  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-5: 48px;
  --space-6: 64px;
  --space-7: 96px;
}
```

---

## Reproduction Example

```css
body {
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  line-height: 1.6;
  color: #111111;
  background: #fafafa;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding-inline: 112px;
}

h1 {
  font-size: 72px;
  font-weight: 700;
  line-height: 1.1;
}

h2 {
  font-size: 56px;
  font-weight: 700;
}

h3 {
  font-size: 32px;
  font-weight: 700;
}

a {
  color: #0084c7;
  text-decoration: none;
}
```

---

## Framework Assessment

### Likely

```text
Custom Design System
SCSS or CSS Variables
Accessibility-focused architecture
```

### Unlikely

```text
Bootstrap
Material Design
Fluent UI
Tailwind default styling
```

---

## Confidence

| Finding | Confidence |
|----------|----------|
| Custom Design System | 90% |
| Accessibility-first Architecture | 95% |
| Not Bootstrap | 95% |
| Not Material Design | 95% |
| 8px Grid System | 85% |
| Poppins Font Family | 80% |

---

## Final Summary

The at:las portal appears to use a custom governmental design system centered around:

- Geometric sans-serif typography (likely Poppins)
- Large accessible text sizes
- Minimalist layout
- High contrast accessibility standards
- Spacious 8px-based spacing system
- Limited blue accent palette
- Strong information hierarchy
- Modern European public-sector UX conventions

Overall style:

"Accessibility-first Government SaaS with modern typography and minimalist visual design."