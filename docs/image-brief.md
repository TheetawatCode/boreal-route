# Boreal Route image brief

## Direction

All assets are original, licence-safe editorial winter photographs for this fictional portfolio project. They use moonlit blues, deep near-black skies, snow and rock texture, and a restrained natural aurora. Scenes must feel physically credible and calm: no logos, watermarks, embedded text, branded gear, exaggerated neon aurora, unsafe activity, or recognisable commercial properties.

## Asset plan

| Asset | Intended placement | Composition and target ratio | Alt-text intent |
| --- | --- | --- | --- |
| `boreal-route-hero` | Homepage hero | Wide landscape, target 16:9. A dark Lofoten shoreline and mountain silhouette under a subtle aurora, with clear negative space on the left for the existing headline. Decorative; empty alt text. |
| `lofoten-night-crossing` | Lofoten card and detail page | Wide landscape, target 3:2. Snow-dusted fishing harbour and steep island ridge under believable green aurora; a tiny distant human figure only if natural. Describe the harbour, ridge, and aurora. |
| `vatnajokull-after-light` | Vatnajökull card and detail page | Wide landscape, target 3:2. Moonlit glacier lagoon, low ice forms, black-sand shore, soft cloudy aurora. Describe the lagoon, ice, shore, and sky. |
| `arctic-circle-field-notes` | Finnmark card and detail page | Wide landscape, target 3:2. Remote winter forest opening toward a quiet fjord, warm distant lodge glow and restrained aurora. Describe forest, fjord, lodge light, and sky. |

## Integration constraints

- Use `next/image` with explicit intrinsic dimensions, `sizes`, and `object-cover` so all image regions hold stable aspect ratios without layout shift.
- Homepage hero image is decorative and must not compete with or obscure the existing headline; use a dark overlay and maintain text contrast.
- Expedition images are meaningful editorial route content and receive precise destination-specific alt text.
- Keep images local under `public/images/`; record final format, dimensions, and byte sizes in the asset inventory after generation.

## Asset inventory

| Asset | Local path | Format | Dimensions | Byte size |
| --- | --- | --- | --- | --- |
| Homepage hero | `public/images/boreal-route-hero.png` | PNG | 1672 × 941 | 1,910,394 bytes |
| Lofoten | `public/images/lofoten-night-crossing.png` | PNG | 1536 × 1024 | 2,315,697 bytes |
| Vatnajökull | `public/images/vatnajokull-after-light.png` | PNG | 1536 × 1024 | 2,375,348 bytes |
| Finnmark | `public/images/arctic-circle-field-notes.png` | PNG | 1536 × 1024 | 2,787,312 bytes |
