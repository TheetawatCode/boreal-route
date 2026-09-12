# Boreal Route design direction

## Product character

Boreal Route should feel **cinematic, calm, and operationally capable**. The public experience earns confidence in an unfamiliar journey; the later operations views make logistics legible without turning the entire product into a dashboard.

The visual language is premium but grounded. It avoids a generic travel-marketplace look, faux-scientific interfaces, and excessive glowing aurora effects.

## Design tokens

| Role | Token | Use |
| --- | --- | --- |
| Night | `#07111F` | Primary canvas and navigation |
| Deep fjord | `#10243A` | Elevated dark surfaces |
| Snow | `#F6F7F4` | Editorial canvas and quiet panels |
| Fog | `#C7D0D8` | Secondary text and dividers |
| Aurora | `#78D7C0` | Small moments of readiness and emphasis |
| Ice blue | `#8DBAE7` | Links, dates, and secondary interaction |
| Signal amber | `#E7B85D` | Weather caution and limited availability |
| Signal red | `#D76B63` | Disruption and recovery states |

Use colour sparingly and pair every status colour with an icon and clear text.

## Typography and layout

- Use the supplied Geist family for a modern, neutral interface foundation.
- Editorial display text is large, tightly composed, and short; support it with readable sans-serif body copy.
- Prefer generous whitespace, thin rules, and carefully sized type over card-heavy layouts.
- Public pages use a 12-column desktop grid with content constrained to roughly 1200 px.
- Booking and operations pages use more compact spacing and a stable content rail, without losing the brand’s quiet visual rhythm.

## Components

- **Site header:** compact brand, clear discovery and traveller navigation, later role-aware operations entry.
- **Expedition card:** landscape-led story, duration, region, seasonal signal, and minimal availability cue.
- **Departure selector:** native-radio-first dates, capacity label, and status text.
- **Itinerary rail:** chronological, scannable day-by-day plan.
- **Capacity and weather indicators:** concise text plus icon; never colour-only.
- **Operations rows:** departures, guide allocation, vehicle readiness, and weather decision states shown as compact, accessible lists before adding dense tables.
- **Forms:** familiar labels, grouped controls, inline recovery guidance, and obvious confirmation states.

## Responsive behaviour

- Mobile is a considered single-column experience, not a compressed desktop view.
- Public imagery keeps deliberate aspect ratios and crops without obscuring essential product information.
- Discovery filters become stacked or horizontally scrollable only when a clear labelled alternative exists.
- Booking controls remain touch-friendly and preserve context as users move through selection steps.
- Operations summaries collapse into ordered sections before any dense data table is introduced.
- All views must reflow at 320 px without horizontal overflow.

## Image direction

Later assets should be original, licence-safe visuals: dark winter landscapes, warm cabin interiors, technical outerwear details, map-adjacent route textures, and human-scale moments of preparation. Use moonlit blues, near-black skies, snow texture, and restrained aurora green.

Avoid identifiable commercial brands, inaccurate wildlife claims, sensational neon skies, and imagery that presents risky outdoor activity without context. Decorative images have empty alt text; meaningful route, accessibility, or equipment content receives precise alt text.

## Motion and accessibility

- Motion is subtle: short opacity and position transitions only when they clarify hierarchy.
- Respect `prefers-reduced-motion`; no auto-playing or parallax-dependent content.
- Keep heading hierarchy, landmark structure, focus order, and visible focus treatment stable.
- Use live regions only for changes users need announced, such as capacity updates or booking confirmation.
- Test keyboard completion of the booking flow and recovery from unavailable departures.
