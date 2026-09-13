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

export type DepartureReadiness = "Ready" | "Weather watch" | "Full";

export type WeatherDecision = "Cleared" | "Monitoring" | "Closed";

export type AllocationStatus = "Aligned" | "Needs attention" | "Not required";

export type DepartureAllocation = {
  guideSummary: string;
  vehicleSummary: string;
  status: AllocationStatus;
};

export type ReadinessCheckpoint = {
  label: string;
  detail: string;
};

export type DepartureCoordination = {
  travellerManifestSummary: string;
  weatherRationale: string;
  guides: readonly string[];
  readinessTimeline: readonly ReadinessCheckpoint[];
  departureDayChecklist: readonly string[];
};

export type Departure = {
  id: string;
  expeditionSlug: string;
  dateRange: string;
  capacity: number;
  remainingSpaces: number;
  readiness: DepartureReadiness;
  readinessDetail: string;
  weatherDecision: WeatherDecision;
  allocation: DepartureAllocation;
  coordination: DepartureCoordination;
  price: {
    accommodationAndGuiding: number;
    routeLogistics: number;
    currency: "EUR";
  };
};

export type DepartureContext = {
  departure: Departure;
  expedition: Expedition;
};

export type BookingQuery = {
  party?: string | readonly string[];
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

export const departures: readonly Departure[] = [
  {
    id: "lofoten-2026-02-12",
    expeditionSlug: "lofoten-night-crossing",
    dateRange: "12 — 16 February 2026",
    capacity: 8,
    remainingSpaces: 3,
    readiness: "Ready",
    readinessDetail: "Cabin, guide, and ground-route plan are aligned for the current weather window.",
    weatherDecision: "Cleared",
    allocation: {
      guideSummary: "Guide pair assigned · S. Nilsen + M. Berg",
      vehicleSummary: "2 winter vans confirmed",
      status: "Aligned",
    },
    coordination: {
      travellerManifestSummary: "5 travellers confirmed · 3 spaces still open · no traveller details shown in this demo.",
      weatherRationale: "The coastal forecast has a stable clear interval after 21:00, with sheltered harbour alternatives held for wind shifts.",
      guides: ["S. Nilsen · lead guide", "M. Berg · route support"],
      readinessTimeline: [
        { label: "Route plan", detail: "Sheltered coastal alternatives confirmed." },
        { label: "Weather decision", detail: "Cleared for the current fixture window." },
        { label: "Final briefing", detail: "Guide team to reconfirm at 16:00 on departure day." },
      ],
      departureDayChecklist: ["Confirm harbour pickup window", "Review wind threshold with guide pair", "Stage thermal drinks and spare layers"],
    },
    price: {
      accommodationAndGuiding: 2140,
      routeLogistics: 350,
      currency: "EUR",
    },
  },
  {
    id: "lofoten-2026-03-05",
    expeditionSlug: "lofoten-night-crossing",
    dateRange: "5 — 9 March 2026",
    capacity: 8,
    remainingSpaces: 0,
    readiness: "Full",
    readinessDetail: "This small-group departure has no remaining spaces.",
    weatherDecision: "Closed",
    allocation: {
      guideSummary: "Guide roster closed",
      vehicleSummary: "Vehicle allocation closed",
      status: "Not required",
    },
    coordination: {
      travellerManifestSummary: "8 spaces allocated · departure is full · no traveller details shown in this demo.",
      weatherRationale: "The public fixture window is closed because capacity is full; no further operating decision is required here.",
      guides: ["Roster closed for this full departure"],
      readinessTimeline: [
        { label: "Capacity", detail: "All eight spaces allocated." },
        { label: "Operations", detail: "Roster and vehicle planning closed in this demo." },
      ],
      departureDayChecklist: ["Keep closed departure record for reference", "Do not reopen capacity in this demo"],
    },
    price: {
      accommodationAndGuiding: 2140,
      routeLogistics: 350,
      currency: "EUR",
    },
  },
  {
    id: "vatnajokull-2026-01-22",
    expeditionSlug: "vatnajokull-after-light",
    dateRange: "22 — 27 January 2026",
    capacity: 10,
    remainingSpaces: 4,
    readiness: "Ready",
    readinessDetail: "Lodge and local drivers are confirmed, with weather alternatives held for every coastal day.",
    weatherDecision: "Cleared",
    allocation: {
      guideSummary: "Lead guide assigned · E. Jónsdóttir",
      vehicleSummary: "4×4 and driver confirmed",
      status: "Aligned",
    },
    coordination: {
      travellerManifestSummary: "6 travellers confirmed · 4 spaces still open · no traveller details shown in this demo.",
      weatherRationale: "Forecast confidence supports the lagoon route, with an inland alternative reserved if coastal wind increases.",
      guides: ["E. Jónsdóttir · lead guide", "Local driver · confirmed"],
      readinessTimeline: [
        { label: "Lodge", detail: "Countryside rooms confirmed." },
        { label: "Weather decision", detail: "Cleared with inland alternative held." },
        { label: "Vehicle", detail: "4×4 and driver allocated." },
      ],
      departureDayChecklist: ["Confirm lodge arrival list", "Check coastal road advisory", "Share final route window with driver"],
    },
    price: {
      accommodationAndGuiding: 2380,
      routeLogistics: 410,
      currency: "EUR",
    },
  },
  {
    id: "vatnajokull-2026-02-19",
    expeditionSlug: "vatnajokull-after-light",
    dateRange: "19 — 24 February 2026",
    capacity: 10,
    remainingSpaces: 2,
    readiness: "Weather watch",
    readinessDetail: "A local weather decision is still pending, so this departure is not available for review yet.",
    weatherDecision: "Monitoring",
    allocation: {
      guideSummary: "Guide held pending weather decision",
      vehicleSummary: "4×4 option on weather hold",
      status: "Needs attention",
    },
    coordination: {
      travellerManifestSummary: "8 travellers confirmed · 2 spaces still open · no traveller details shown in this demo.",
      weatherRationale: "A coastal wind system may narrow safe glacier-lagoon access. The final route decision remains pending the local afternoon forecast.",
      guides: ["E. Jónsdóttir · held pending decision", "Local driver · on weather hold"],
      readinessTimeline: [
        { label: "Lodge", detail: "Rooms and route alternatives held." },
        { label: "Weather decision", detail: "Monitoring local wind and visibility updates." },
        { label: "Allocation", detail: "Guide and 4×4 remain on hold pending decision." },
      ],
      departureDayChecklist: ["Review local wind forecast at 14:00", "Confirm lagoon or inland route", "Release guide and vehicle hold after decision"],
    },
    price: {
      accommodationAndGuiding: 2380,
      routeLogistics: 410,
      currency: "EUR",
    },
  },
  {
    id: "finnmark-2026-03-14",
    expeditionSlug: "arctic-circle-field-notes",
    dateRange: "14 — 20 March 2026",
    capacity: 6,
    remainingSpaces: 2,
    readiness: "Ready",
    readinessDetail: "The remote lodge, guide rota, and alternative field routes are ready for final review.",
    weatherDecision: "Cleared",
    allocation: {
      guideSummary: "Field guide pair assigned · A. Hansen + R. Sámi",
      vehicleSummary: "Expedition minibus confirmed",
      status: "Aligned",
    },
    coordination: {
      travellerManifestSummary: "4 travellers confirmed · 2 spaces still open · no traveller details shown in this demo.",
      weatherRationale: "Forest and fjord route options are both within the current safe operating window, allowing a final field choice after briefing.",
      guides: ["A. Hansen · field lead", "R. Sámi · route support"],
      readinessTimeline: [
        { label: "Lodge", detail: "Remote lodge and field equipment ready." },
        { label: "Weather decision", detail: "Cleared with forest fallback maintained." },
        { label: "Vehicle", detail: "Expedition minibus assigned." },
      ],
      departureDayChecklist: ["Check snow travel equipment", "Review fjord wind reading", "Load warm drinks and emergency kit"],
    },
    price: {
      accommodationAndGuiding: 2840,
      routeLogistics: 520,
      currency: "EUR",
    },
  },
  {
    id: "finnmark-2026-04-04",
    expeditionSlug: "arctic-circle-field-notes",
    dateRange: "4 — 10 April 2026",
    capacity: 6,
    remainingSpaces: 0,
    readiness: "Full",
    readinessDetail: "This small-group departure has no remaining spaces.",
    weatherDecision: "Closed",
    allocation: {
      guideSummary: "Guide roster closed",
      vehicleSummary: "Vehicle allocation closed",
      status: "Not required",
    },
    coordination: {
      travellerManifestSummary: "6 spaces allocated · departure is full · no traveller details shown in this demo.",
      weatherRationale: "The public fixture window is closed because capacity is full; this coordination record remains read-only.",
      guides: ["Roster closed for this full departure"],
      readinessTimeline: [
        { label: "Capacity", detail: "All six spaces allocated." },
        { label: "Operations", detail: "Roster and vehicle planning closed in this demo." },
      ],
      departureDayChecklist: ["Keep closed departure record for reference", "Do not reopen capacity in this demo"],
    },
    price: {
      accommodationAndGuiding: 2840,
      routeLogistics: 520,
      currency: "EUR",
    },
  },
];

export function getExpeditionBySlug(slug: string): Expedition | undefined {
  return expeditions.find((expedition) => expedition.slug === slug);
}

export function getDeparturesForExpedition(slug: string): Departure[] {
  return departures.filter((departure) => departure.expeditionSlug === slug);
}

export function getDepartureById(id: string): Departure | undefined {
  return departures.find((departure) => departure.id === id);
}

export function isDepartureSelectable(departure: Departure) {
  return departure.readiness === "Ready" && departure.remainingSpaces > 0;
}

export function getDepartureContext(id: string): DepartureContext | undefined {
  const departure = getDepartureById(id);

  if (!departure) {
    return undefined;
  }

  const expedition = getExpeditionBySlug(departure.expeditionSlug);

  return expedition ? { departure, expedition } : undefined;
}

export function getBookableDepartureContext(id: string): DepartureContext | undefined {
  const context = getDepartureContext(id);

  return context && isDepartureSelectable(context.departure) ? context : undefined;
}

export function getPricePerTraveller(departure: Departure) {
  return departure.price.accommodationAndGuiding + departure.price.routeLogistics;
}

export const discoveryRegions = ["Iceland", "Norway"] as const;

export const discoveryDurations = [4, 5, 6] as const;

function firstQueryValue(value: string | readonly string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export function getSafePartySize(query: BookingQuery, maximum: number) {
  const partySize = Number(firstQueryValue(query.party));

  return Number.isInteger(partySize) && partySize >= 1 && partySize <= maximum
    ? partySize
    : 1;
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
