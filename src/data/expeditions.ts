export type ExpeditionDifficulty = "Gentle" | "Moderate" | "Demanding";

export type ExpeditionVisualTone = "luminous" | "glacier" | "ember";

export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
};

export type ExpeditionReadiness = {
  label: string;
  description: string;
  capacityNote: string;
};

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
  itinerary: readonly ItineraryDay[];
  inclusions: readonly string[];
  preparation: readonly string[];
  readiness: ExpeditionReadiness;
};

export type DiscoveryQuery = {
  region?: string | readonly string[];
  duration?: string | readonly string[];
};

export type DiscoveryFilters = {
  region: string | null;
  durationNights: number | null;
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
    itinerary: [
      {
        day: 1,
        title: "Arrive into the islands",
        description:
          "Settle into the harbour-side cabin, meet the guide team, and take a first weather-led walk along the water.",
      },
      {
        day: 2,
        title: "Follow the coastal light",
        description:
          "Travel between quiet fishing villages and a sheltered coastal trail, with the evening route set after the latest forecast review.",
      },
      {
        day: 3,
        title: "Hold the night open",
        description:
          "A slower day for rest, photography, or the sauna before a flexible night-sky window away from the busiest roads.",
      },
      {
        day: 4,
        title: "Cross back with the weather",
        description:
          "A final short outing if conditions allow, followed by a considered return to the regional airport.",
      },
    ],
    inclusions: [
      "Four nights in a shared coastal cabin room",
      "Guide-led route planning and nightly weather briefings",
      "Local ground transport during the expedition",
    ],
    preparation: [
      "Bring insulated layers suitable for standing outside at night",
      "Expect uneven coastal ground and short walks in winter conditions",
      "Keep the final evening flexible for the clearest available window",
    ],
    readiness: {
      label: "Route plan ready",
      description:
        "The coast-to-cabin route is designed with sheltered alternatives when wind or road conditions shift.",
      capacityNote: "Small group plan · up to 8 travellers",
    },
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
    itinerary: [
      {
        day: 1,
        title: "Meet the southern coast",
        description:
          "Arrive at the lodge, settle in, and orient around the shifting light and road conditions of the southeast coast.",
      },
      {
        day: 2,
        title: "Lagoons and black sand",
        description:
          "Spend the day between glacier lagoons and the shoreline, with long pauses built in for the winter weather.",
      },
      {
        day: 3,
        title: "A day held lightly",
        description:
          "Choose a gentle local excursion or a quiet lodge day, then follow the clearest evening route after the forecast briefing.",
      },
      {
        day: 4,
        title: "Warm water, late light",
        description:
          "A restorative daytime stop and a second night-sky window shaped around cloud movement and local visibility.",
      },
      {
        day: 5,
        title: "Return through the coast",
        description:
          "Travel back toward Reykjavík with time reserved for a final roadside stop when conditions are right.",
      },
    ],
    inclusions: [
      "Five nights in a small countryside lodge",
      "Guide-led glacier lagoon and coastline visits",
      "One warm-water recovery session",
    ],
    preparation: [
      "Pack waterproof outer layers and warm gloves for exposed coastlines",
      "Plan for unhurried walks on mostly level, uneven surfaces",
      "Bring a day bag for flexible route changes and overnight essentials",
    ],
    readiness: {
      label: "Weather-aware itinerary",
      description:
        "Each daytime stop has a weather-led alternative, protecting space for the best available evening conditions.",
      capacityNote: "Small group plan · up to 10 travellers",
    },
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
    itinerary: [
      {
        day: 1,
        title: "Northbound to Finnmark",
        description:
          "Meet in Alta, review the field plan, and travel to a remote lodge beyond the brighter town lights.",
      },
      {
        day: 2,
        title: "Forest travel basics",
        description:
          "Build confidence with guide-led snow travel and a short route through winter forest before the first night watch.",
      },
      {
        day: 3,
        title: "Fjord weather window",
        description:
          "Move toward the coast when wind and visibility align, using the smaller group to keep decisions nimble.",
      },
      {
        day: 4,
        title: "A quiet day in the field",
        description:
          "A measured day for rest, local navigation, and a second route choice shaped by the afternoon forecast.",
      },
      {
        day: 5,
        title: "Deep-night lookout",
        description:
          "Travel to the clearest available lookout with time for warm drinks, patient observation, and a safe return to the lodge.",
      },
      {
        day: 6,
        title: "Return with field notes",
        description:
          "A final debrief and return journey to Alta, carrying a clearer understanding of how the route came together.",
      },
    ],
    inclusions: [
      "Six nights in a remote winter lodge",
      "Guide-led snow travel and route safety briefings",
      "Expedition transport between field locations",
    ],
    preparation: [
      "Be comfortable with longer winter days and uneven snow-covered terrain",
      "Bring a headlamp, insulated boots, and a thermos-ready outer layer system",
      "Discuss any mobility or cold-weather concerns before joining this route",
    ],
    readiness: {
      label: "Field route prepared",
      description:
        "The guide team holds multiple forest and fjord options, with the final choice made from current local conditions.",
      capacityNote: "Small group plan · up to 6 travellers",
    },
  },
];

export function getExpeditionBySlug(slug: string): Expedition | undefined {
  return expeditions.find((expedition) => expedition.slug === slug);
}

export const discoveryRegions = ["Iceland", "Norway"] as const;

export const discoveryDurations = [4, 5, 6] as const;

function firstQueryValue(value: string | readonly string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export function parseDiscoveryFilters(query: DiscoveryQuery): DiscoveryFilters {
  const region = firstQueryValue(query.region);
  const duration = Number(firstQueryValue(query.duration));

  return {
    region: discoveryRegions.includes(region as (typeof discoveryRegions)[number])
      ? region
      : null,
    durationNights: discoveryDurations.includes(
      duration as (typeof discoveryDurations)[number],
    )
      ? duration
      : null,
  };
}

export function filterExpeditions(
  source: readonly Expedition[],
  filters: DiscoveryFilters,
): Expedition[] {
  return source.filter((expedition) => {
    const matchesRegion = !filters.region || expedition.country === filters.region;
    const matchesDuration =
      !filters.durationNights || expedition.durationNights === filters.durationNights;

    return matchesRegion && matchesDuration;
  });
}
