export type ExpeditionDifficulty = "Gentle" | "Moderate" | "Demanding";

export type ExpeditionVisualTone = "luminous" | "glacier" | "ember";

export type Expedition = {
  slug: string;
  title: string;
  region: string;
  country: string;
  durationNights: number;
  difficulty: ExpeditionDifficulty;
  season: string;
  groupSize: string;
  summary: string;
  visualTone: ExpeditionVisualTone;
  highlights: readonly string[];
};

export const expeditions: readonly Expedition[] = [
  {
    slug: "lofoten-night-crossing",
    title: "Lofoten Night Crossing",
    region: "Lofoten Islands",
    country: "Norway",
    durationNights: 4,
    difficulty: "Moderate",
    season: "January — March",
    groupSize: "8 travellers",
    summary:
      "A small-group island crossing shaped around quiet harbours, coastal trails, and the clearest hours after dark.",
    visualTone: "luminous",
    highlights: ["Coastal cabin base", "Night-sky briefings", "Flexible route windows"],
  },
  {
    slug: "vatnajokull-after-light",
    title: "Vatnajökull After Light",
    region: "Southeast Iceland",
    country: "Iceland",
    durationNights: 5,
    difficulty: "Gentle",
    season: "November — February",
    groupSize: "10 travellers",
    summary:
      "Glacier lagoons, black-sand coastlines, and a slower itinerary designed to keep the next clear sky within reach.",
    visualTone: "glacier",
    highlights: ["Glacier lagoon access", "Warm-water recovery", "Weather-led pacing"],
  },
  {
    slug: "arctic-circle-field-notes",
    title: "Arctic Circle Field Notes",
    region: "Finnmark",
    country: "Norway",
    durationNights: 6,
    difficulty: "Demanding",
    season: "February — April",
    groupSize: "6 travellers",
    summary:
      "For travellers who want more terrain: a field-led route through exposed fjords, winter forests, and deep night.",
    visualTone: "ember",
    highlights: ["Remote lodge nights", "Guide-led snow travel", "Smallest group size"],
  },
];

export function getExpeditionBySlug(slug: string): Expedition | undefined {
  return expeditions.find((expedition) => expedition.slug === slug);
}
