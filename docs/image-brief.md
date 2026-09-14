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

## Supporting detail-image plan

These three images are deliberate second story moments for their matching expedition detail pages only. They must remain distinct from the primary landscapes above, with no additional asset generation in this milestone.

| Asset | Purpose and intended placement | Composition and target ratio | Alt-text intent | Planned format and dimensions | Byte size |
| --- | --- | --- | --- | --- | --- |
| `lofoten-cabin-preparation` | Lofoten detail page, following the primary route image; a warm, grounded counterpoint to the harbour landscape. | Wide 3:2 interior/exterior threshold: an unbranded coastal cabin preparation table with folded insulated layers, map, thermos, and a snow-lit window. No people required. | Describe the quiet cabin preparation scene and identifiable expedition objects, without implying a brand. | PNG · 1536 × 1024 | Record after generation |
| `vatnajokull-weather-window` | Vatnajökull detail page, following the primary lagoon image; supports the weather-led route narrative. | Wide 3:2 daylight-blue scene: a guide-sized anonymous figure seen from behind beside a safe marked glacier-edge viewing route, looking toward layered ice and a low cloud break. | Describe the safe route, ice surface, cloud break, and carefully scaled human presence. | PNG · 1536 × 1024 | Record after generation |
| `finnmark-night-camp` | Finnmark detail page, following the primary forest-and-fjord image; supports field preparation and the calm camp rhythm. | Wide 3:2 twilight night-camp still life: unbranded tripod, lantern, snowshoes, and a low sheltered tent outside a dark treeline, with restrained stars or aurora. | Describe the field equipment, sheltered camp, treeline, and night sky without suggesting unsafe conditions. | PNG · 1536 × 1024 | Record after generation |

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
| Lofoten supporting detail | `public/images/lofoten-cabin-preparation.png` | PNG | 1536 × 1024 | 2,072,660 bytes |
| Vatnajökull supporting detail | `public/images/vatnajokull-weather-window.png` | PNG | 1536 × 1024 | 2,320,349 bytes |
| Finnmark supporting detail | `public/images/finnmark-night-camp.png` | PNG | 1536 × 1024 | 2,286,607 bytes |
