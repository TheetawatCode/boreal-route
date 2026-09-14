# Boreal Route

Live demo: https://boreal-route.vercel.app

[![Validate](https://github.com/TheetawatCode/boreal-route/actions/workflows/ci.yml/badge.svg)](https://github.com/TheetawatCode/boreal-route/actions/workflows/ci.yml)

Boreal Route is a fictional northern-lights expedition platform built as a portfolio project. It demonstrates an editorial travel-discovery experience alongside deliberately small, credible full-stack-adjacent workflows: fixture-derived availability, a browser-local booking simulation, traveller itinerary recovery, and read-only operations coordination.

## Product problem

Aurora travel is a planning problem shaped by weather, limited capacity, route alternatives, and clear expectations—not a generic “buy now” travel listing. Boreal Route gives travellers confidence before committing to an unfamiliar winter journey, while making the operational decisions behind each departure legible.

## Key workflows

- Discover three distinct fictional expeditions, filter by region and duration, then recover gracefully from an empty result.
- Read an expedition itinerary, compare fixture-derived departure readiness and capacity, and review only selectable departures.
- Run a simulated booking review with a native capacity-limited party-size control and transparent fixture-derived price estimate.
- Confirm a simulation that stores only a departure ID, party size, deterministic demo reference, and timestamp in browser localStorage; view or clear it from `/trips`.
- Review departure readiness in a read-only operations board, filter by readiness or weather decision, and drill into a coordination detail view.

## Technical decisions

- **Next.js App Router + TypeScript:** route metadata, static params for fixture-backed detail pages, `next/image`, and server-rendered URL-filtered views.
- **Typed fixtures as the domain layer:** expeditions, departures, price components, capacity, weather decisions, allocation summaries, and coordination timelines derive all interface state without a database.
- **Minimal client state:** the booking simulation stores no names, contact details, passport data, payment details, or any other personal data.
- **Local imagery:** four original generated PNG assets live in `public/images/`; their brief, dimensions, byte sizes, alt-text intent, and constraints are documented in [docs/image-brief.md](docs/image-brief.md).
- **Delivery checks:** GitHub Actions validates Node 24 and pinned pnpm 12.4.1 using frozen-lockfile install, tests, lint, typecheck, and production build.

## Accessibility and quality evidence

- Semantic landmarks, logical heading order, native selects and buttons, labelled forms, visible keyboard focus, text-based status signals, polite confirmation feedback, and recovery states.
- Global reduced-motion safeguards disable nonessential animation and transition timing.
- Focused Vitest + Testing Library coverage for fixture logic, capacity rules, simulated-state derivation, route recovery, filters, operations attention guidance, and image alt semantics.
- Each milestone is validated with tests, lint, TypeScript, production build, `git diff --check`, and desktop/320px Localhost review.

## Simulation boundaries

Boreal Route has no real bookings, payments, traveller accounts, authentication, database, external APIs, analytics, remote deployment, or personal-data collection. The booking and operations views are explicitly fictional and read-only where appropriate.

The current public demo uses the Vercel default domain: [boreal-route.vercel.app](https://boreal-route.vercel.app). `metadataBase`, canonical URLs, and `sitemap.ts` use that hostname; they should be updated if a custom domain is adopted later.

## Route map

| Route | Purpose |
| --- | --- |
| `/` | Editorial product introduction and featured expeditions |
| `/expeditions` | URL-filtered expedition discovery index |
| `/expeditions/[slug]` | Expedition story, image, itinerary, and departure selection |
| `/book/[departureId]` | Capacity-safe simulated booking review |
| `/trips` | Browser-local simulated traveller itinerary and recovery |
| `/operations` | Read-only fictional departure readiness board |
| `/operations/departures/[id]` | Read-only departure coordination detail |

## Local development

Use the Node version in `.nvmrc` and the pinned pnpm version in `package.json`.

```bash
pnpm install --frozen-lockfile
pnpm dev
pnpm test
pnpm lint
pnpm typecheck
pnpm build
```
