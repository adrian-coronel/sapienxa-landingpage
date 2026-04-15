# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server at http://localhost:4200 (hot reload)
npm run build      # Production build → dist/
npm run watch      # Dev build in watch mode
npm test           # Run unit tests with Vitest
```

To run a single test file:
```bash
npx ng test --include="src/app/app.spec.ts"
```

## Architecture

**Sapienxa** is an Angular 21 landing page SPA for a B2B AI/automation company targeting Latam. It uses standalone components (no NgModules).

- **Entry point**: `src/main.ts` → bootstraps `App` via `bootstrapApplication()`
- **Root component**: `src/app/app.ts` — thin shell that renders `<router-outlet />`
- **App config**: `src/app/app.config.ts` — provides router and global error listeners
- **Routes**: `/` → `LandingPageComponent`

### Component tree

```
LandingPageComponent (src/app/landing-page/)
├── NavbarComponent       — sticky, scroll-aware, mobile drawer
├── HeroComponent         — canvas particle animation, dashboard SVG visual
├── MetricsComponent      — IntersectionObserver-triggered animated counters
├── BenefitsComponent     — 3 feature cards with hover lift + accent border
├── ServicesComponent     — 6 services with tab filter (all/ia/automatizacion/integracion)
├── TechnologiesComponent — grayscale→color grid (desktop) + marquee (mobile)
├── ProcessComponent      — 4-step vertical timeline with Schema.org HowTo
├── TestimonialsComponent — auto-rotating carousel (4.5s interval), pause on hover
├── ContactFormComponent  — Angular Reactive Forms, inline validation, success state
├── FooterComponent       — 4-column dark footer, Schema.org Organization
└── WhatsappFloatComponent — fixed FAB with popup, pulse stops after first interaction
```

### Key patterns

- All components: `ChangeDetectionStrategy.OnPush`, Angular signals for state
- Scroll animations: `.reveal` class in `styles.css`, toggled via `IntersectionObserver` to `.in`
- Global CSS variables in `styles.css` → `--c-primary`, `--c-secondary`, `--c-accent`, etc.
- Stagger delays: `.d1`–`.d6` classes extend `.reveal` transition-delay
- Hero canvas: particle network animation initialized in `ngAfterViewInit`, cleaned in `ngOnDestroy`
- No `@angular/animations` dependency — all transitions via CSS

### Tech Stack

| Layer | Tool |
|-------|------|
| Framework | Angular 21 (standalone components) |
| Build | Angular CLI + Vite |
| Styling | Tailwind CSS v4 (via PostCSS in `.postcssrc.json`) |
| Testing | Vitest + jsdom |
| Language | TypeScript 5.9 (strict mode) |

### Styling

Global styles import Tailwind in `src/styles.css`. Component styles use scoped CSS with CSS variables and oklch color definitions. The 650px breakpoint is the primary responsive breakpoint.

### Generating New Components

```bash
ng generate component <name>   # Creates standalone component in src/app/<name>/
ng generate --help             # Full list of schematics
```

### Build Budgets

- Initial bundle: warn at 500kB, error at 1MB
- Component styles: warn at 4kB, error at 8kB
