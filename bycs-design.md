# CSS / Style Analysis of https://www.bycs.de/index.html

## Overall Design Style

The site uses a **modern public-sector / educational platform design system** characterized by:

- Clean and minimal visual language
- Strong focus on usability and accessibility
- Large content blocks and cards
- Responsive layouts
- Clear visual hierarchy
- Blue-and-white branding
- Content-first presentation
- Spacious whitespace usage

The visual design prioritizes clarity over decoration, which is common in government and educational digital services.

---

## Color Palette

### Primary Colors

```css
:root {
  --primary-blue: #005ca9;
  --primary-blue-dark: #004b8b;
  --white: #ffffff;
}
```

### Secondary Colors

```css
:root {
  --gray-100: #f5f7fa;
  --gray-200: #e6e9ed;
  --gray-500: #6b7280;
  --gray-900: #1f2937;
}
```

### Design Characteristics

- White backgrounds
- Blue accent color
- Dark gray typography
- Light gray section backgrounds
- High contrast for accessibility

---

## Typography

### Font Style

The typography appears to use a modern sans-serif stack:

```css
body {
  font-family:
    Inter,
    Roboto,
    "Source Sans Pro",
    Arial,
    sans-serif;
}
```

### Heading Scale

```css
h1 {
  font-size: 2.5rem;
  font-weight: 700;
}

h2 {
  font-size: 2rem;
  font-weight: 600;
}

h3 {
  font-size: 1.375rem;
  font-weight: 600;
}

body {
  font-size: 1rem;
  line-height: 1.6;
}
```

### Typography Characteristics

- Large headings
- Generous line-height
- Strong contrast
- Readability-focused hierarchy

---

## Layout System

### Container

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;
}
```

### Grid Layout

```css
.grid {
  display: grid;
  gap: 24px;
}

.grid-cards {
  grid-template-columns:
    repeat(auto-fit, minmax(300px, 1fr));
}
```

### Flex Usage

```css
.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

---

## Hero Section

The homepage hero area appears to use a carousel/slider structure.

### Possible Structure

```css
.hero {
  min-height: 500px;
  display: flex;
  align-items: center;
}

.hero-content {
  max-width: 700px;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
}
```

### Visual Characteristics

- Large background imagery
- Prominent headline
- Supporting text
- CTA button
- Navigation controls
- Pagination indicators

---

## Card Components

Cards are a major design pattern throughout the site.

### Typical Card Style

```css
.card {
  background: white;
  border-radius: 12px;
  padding: 24px;

  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.08);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}
```

### Hover State

```css
.card:hover {
  transform: translateY(-4px);

  box-shadow:
    0 10px 24px rgba(0, 0, 0, 0.12);
}
```

### Usage

- User role navigation
- Information panels
- Resource links
- Support content
- Application listings

---

## Buttons

### Primary Button

```css
.btn-primary {
  background: #005ca9;
  color: white;

  padding:
    12px 24px;

  border-radius: 8px;

  font-weight: 600;

  text-decoration: none;
}
```

### Hover State

```css
.btn-primary:hover {
  background: #004b8b;
}
```

### Secondary Button

```css
.btn-secondary {
  background: transparent;
  border: 2px solid #005ca9;
  color: #005ca9;
}
```

---

## Navigation

### Header Navigation

```css
.header {
  position: sticky;
  top: 0;

  background: white;

  z-index: 1000;

  border-bottom:
    1px solid #e5e7eb;
}
```

### Navigation Items

```css
.nav-link {
  color: #1f2937;

  font-weight: 500;

  transition:
    color 0.2s ease;
}

.nav-link:hover {
  color: #005ca9;
}
```

---

## Spacing System

The site uses generous whitespace.

### Suggested Scale

```css
:root {
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 48px;
  --space-xl: 80px;
  --space-2xl: 120px;
}
```

### Section Spacing

```css
.section {
  padding:
    80px 0;
}
```

---

## Accessibility Features

Accessibility appears to be a key design goal.

### Focus Styles

```css
:focus-visible {
  outline: 3px solid #005ca9;
  outline-offset: 2px;
}
```

### Touch Targets

```css
button,
a {
  min-height: 44px;
}
```

### Characteristics

- Keyboard navigation support
- High contrast
- Large click targets
- Semantic structure
- Screen-reader considerations

---

## Responsive Design

### Desktop

```css
.cards {
  grid-template-columns:
    repeat(3, 1fr);
}
```

### Tablet

```css
@media (max-width: 1024px) {
  .cards {
    grid-template-columns:
      repeat(2, 1fr);
  }
}
```

### Mobile

```css
@media (max-width: 768px) {
  .cards {
    grid-template-columns:
      1fr;
  }

  .hero-title {
    font-size: 2rem;
  }
}
```

---

## Visual Patterns

### Repeated Components

1. Hero carousel
2. Information cards
3. Call-to-action buttons
4. Search interface
5. Footer navigation
6. Support panels
7. User-role cards
8. Content sections
9. Logo areas
10. Accessibility controls

---

## Design Keywords

```text
Educational Platform
Government Portal
Accessibility First
Card-Based Layout
Blue-and-White Branding
Modern Sans Serif Typography
Responsive Design
Content-Centric
Minimalist Interface
High Usability
```

---

## Approximate Design Tokens

```css
:root {
  --primary: #005ca9;
  --primary-dark: #004b8b;

  --background: #ffffff;
  --surface: #f5f7fa;

  --text-primary: #1f2937;
  --text-secondary: #6b7280;

  --radius-sm: 8px;
  --radius-md: 12px;

  --shadow-sm:
    0 4px 12px rgba(0, 0, 0, 0.08);

  --shadow-md:
    0 10px 24px rgba(0, 0, 0, 0.12);

  --container: 1200px;
}
```

---

## Technical Recreation Stack

```text
HTML5
CSS Grid
Flexbox
SCSS
BEM Naming Convention
Inter / Source Sans Pro
Swiper.js (Carousel)
WCAG 2.1 AA Compliance
Responsive-First Development
```

## Summary

The ByCS homepage follows a modern public-service design language emphasizing:

- Accessibility
- Clarity
- Strong information hierarchy
- Card-based content organization
- Blue-and-white institutional branding
- Responsive layouts
- Large whitespace and readable typography

The overall aesthetic is closer to a government digital service platform than a commercial marketing website.