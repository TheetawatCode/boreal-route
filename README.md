# Boreal Route

**Boreal Route** is a fictional northern-lights expedition booking and operations platform. It is designed as a portfolio-quality web application for showcasing the decisions behind premium travel discovery, trip planning, availability, and day-of-departure coordination.

The product treats aurora travel as a real operational problem—not a generic booking template. A traveller needs confidence in an unfamiliar journey; a guide team needs a clear view of departures, people, vehicles, and weather-led decisions.

## Product focus

- Editorial discovery for small-group northern-lights expeditions
- Clear expedition, itinerary, departure, capacity, and preparation details
- A simulated booking journey that never processes a real payment
- A traveller view of upcoming trip details and booking status
- An operations workspace for departure calendars, rosters, guide and vehicle allocation, and weather decisions
- Role-aware demo views for traveller, guide, and operations manager

## Scope and non-goals

This project deliberately optimizes for a credible, well-tested product slice.

**In scope**

- Responsive public discovery and expedition-detail experiences
- Typed fictional data and deterministic availability rules
- Simulated booking, confirmation, and itinerary states
- An accessible, responsive operations workspace
- Focused unit and component tests, production build checks, and browser reflow review

**Not in scope**

- Real payments, traveller accounts, travel insurance, or production reservations
- Live weather, maps, email, CRM, or third-party booking integrations
- Real personal data, authentication providers, or database access in the initial milestones
- A content-management system, multi-currency, or a full back-office suite

## Planned stack

- Next.js App Router and React
- TypeScript and Tailwind CSS
- pnpm
- Vitest and Testing Library as interactive features arrive
- Typed fixtures first; PostgreSQL and Prisma only when a later milestone genuinely needs persistence

## Route map

| Route | Purpose |
| --- | --- |
| `/` | Editorial introduction and expedition discovery |
| `/expeditions` | Searchable expedition index |
| `/expeditions/[slug]` | Expedition story, itinerary, and departure selection |
| `/book/[departureId]` | Simulated booking flow |
| `/trips` | Traveller booking and itinerary view |
| `/operations` | Operations overview for departure readiness |
| `/operations/departures/[id]` | Departure roster and allocation details |

## Data model outline

The first implementation will use typed fixtures for:

- **Destination** — region, season, terrain, and visual story
- **Expedition** — title, duration, difficulty, itinerary, inclusions, and gallery direction
- **Departure** — expedition date range, capacity, booking status, and weather readiness
- **Guide** and **Vehicle** — availability and allocation
- **Traveller** and **Booking** — fictional participant and confirmation data
- **Weather decision** — a clear operational status, rationale, and timestamp

## Accessibility commitments

- Semantic landmarks, a logical heading hierarchy, and visible keyboard focus
- Native controls where they provide the best behaviour; labelled custom interactions where needed
- Status updates and booking feedback announced without unexpected focus movement
- Reduced-motion support and no information conveyed by colour alone
- Reflow checks down to 320 px with no horizontal overflow

## Testing strategy

Each milestone will add tests nearest to its risk: deterministic availability and booking rules, interactive form states, operations status rendering, and recovery paths. Every milestone is also checked with linting, TypeScript, a production build, and a local browser review at desktop and narrow mobile widths.

## Milestone plan

1. **Foundation** — product brief, design direction, project hygiene, and a branded shell.
2. **Discovery** — typed expedition fixtures, editorial home, discovery index, and expedition details.
3. **Booking** — selection, capacity rules, simulated confirmation, and traveller itinerary states.
4. **Operations** — departure readiness, rosters, allocations, and weather-decision workflows.
5. **Hardening** — accessibility/performance audit, metadata, CI, deployment preparation, and case study.

## Local development

```bash
pnpm dev
pnpm lint
pnpm typecheck
pnpm build
```

Milestone 0 intentionally has no Git remote, deployment configuration, booking implementation, database, or external service integration.
