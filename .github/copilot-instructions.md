# Copilot Instructions for ByCS MFE

## Build, Test, and Lint Commands

### Development
```bash
yarn dev
# Starts Vite dev server at http://localhost:5174
```

### Build
```bash
yarn build
# Runs TypeScript type checking (tsc -b), then builds with Vite
# Output: dist/ folder (configured for GitHub Pages at /mfe-bycs/)
```

### Linting
```bash
yarn lint
# ESLint check across entire codebase

yarn lint:fix
# ESLint with auto-fix for style issues
```

### Preview
```bash
yarn preview
# Preview production build locally at port 5174
```

**Note:** No test runner is configured. The project is a presentation layer without automated tests.

## Architecture Overview

This is a **React Module Federation micro-frontend (MFE)** built with Vite. It visualizes class retention data for German schools (Klassenwiederholung).

### Key Structure
- **Entry:** `src/main.tsx` mounts `App` component
- **Module Federation:** Configured in `vite.config.ts`
  - Exposes: `./BycsApp` → `src/App.tsx`
  - Shared: React and React-DOM
  - Built for remote consumption at `/dist/remoteEntry.js`
  - Deployed to GitHub Pages path: `/mfe-bycs/`

### Application Flow
1. **App.tsx** - Main component managing view switching and year selection
2. **Views** - Each view is a separate page component:
   - `HeroPage` - Homepage/welcome view
   - `RetentionPage` - Class retention by school year
   - `TrendPage` - Retention trends over time
   - `SexPage` - Retention split by gender
   - `MigrationPage` - Retention by migration background
   - `InfoPage` - About the application
3. **Components** - Reusable UI components in `src/components/`
   - `charts/` - Data visualization (BarPlot, LineChart, StackedBarChart)
   - `controls/` - UI controls (YearSelect, etc.)
   - Data components are stateful and handle their own data loading

### Data & Config
- **retention.ts** - School year definitions and data types
- **config/** - Application configuration
  - `chartConfig.ts` - Chart rendering options
  - `interpretationContent.tsx` - Content for data interpretation cards
- **utils/** - Helper functions
  - `yearCalculations.ts` - Date/year calculations
  - `dataValidation.ts` - Input validation
  - `findingsGenerator.ts` - Dynamic insight generation

### Error Handling
- `ErrorBoundary.tsx` wraps all major views to catch React errors
- All error boundaries log and display graceful fallbacks

## Key Conventions

### Code Style
- **Formatter:** Prettier with these settings:
  - No semicolons
  - Single quotes
  - 2-space indentation
  - Trailing commas (ES5)
  - Line width: 100 characters
  - Arrow functions always get parentheses
- **Linter:** ESLint with TypeScript, React Hooks, and React Refresh plugins

### Naming & Structure
- **CSS:** BEM-like naming with prefix `class-retention-mfe__`
  - Example: `class-retention-mfe__panel`, `class-retention-mfe__view-tab--active`
  - All styling is scoped through this prefix to avoid conflicts
- **Constants:** Centralized in `src/constants.ts`
  - `VIEW_OPTIONS` - Navigation tabs
  - `VIEW_METADATA` - Page titles (German labels)
  - `CLASS_NAMES` - All CSS class selectors
  - `ARIA_LABELS` - Accessibility labels
- **Types:** Prefer `as const` for literal types (see retention.ts for SCHOOL_YEARS)

### Language & Accessibility
- **User-facing labels:** German (de-DE)
- **Accessibility:** ARIA labels required for interactive elements
- **Focus styles:** Built into CSS (consider keyboard navigation)

### Component Patterns
- **Functional components only** (React 19)
- **Hooks for state:** useState, no external state management
- **Props:** Strongly typed with TypeScript interfaces
- **Data fetching:** Typically done in `useEffect` in component or loaded from config
- **Chart components:** Accept data as props, use config objects for rendering options

## Design Consistency

The app implements a **modern public-sector/educational design system**:
- Primary color (blue): `#264D7F` (class-retention-accent in CSS)
- Clean, minimal interface prioritizing usability
- Generous whitespace and accessible typography
- Refer to `bycs-design.md` for detailed design tokens and patterns

## Deployment

- **Base path:** `/mfe-bycs/` (set in vite.config.ts, critical for GitHub Pages)
- **Output:** `dist/remoteEntry.js` for module federation consumption
- **CSS Code Split:** Disabled (`cssCodeSplit: false`)
- **Build target:** `esnext` with no minification

## TypeScript Configuration

- Separate configs: `tsconfig.app.json` and `tsconfig.node.json`
- Referenced from main `tsconfig.json`
- Use strict mode for type safety
