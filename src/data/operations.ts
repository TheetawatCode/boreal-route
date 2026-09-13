import {
  departures,
  getExpeditionBySlug,
  type DepartureContext,
  type DepartureReadiness,
  type WeatherDecision,
} from "@/data/expeditions";

export type OperationsQuery = {
  readiness?: string | readonly string[];
  weather?: string | readonly string[];
};

export type OperationsFilters = {
  readiness: DepartureReadiness | null;
  weatherDecision: WeatherDecision | null;
};

export const operationsReadinesses = ["Ready", "Weather watch", "Full"] as const;
export const operationsWeatherDecisions = ["Cleared", "Monitoring", "Closed"] as const;

function firstQueryValue(value: string | readonly string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export function parseOperationsFilters(query: OperationsQuery): OperationsFilters {
  const readiness = firstQueryValue(query.readiness);
  const weatherDecision = firstQueryValue(query.weather);

  return {
    readiness: operationsReadinesses.includes(readiness as DepartureReadiness)
      ? (readiness as DepartureReadiness)
      : null,
    weatherDecision: operationsWeatherDecisions.includes(weatherDecision as WeatherDecision)
      ? (weatherDecision as WeatherDecision)
      : null,
  };
}

export function getOperationalDepartures(): DepartureContext[] {
  return departures.flatMap((departure) => {
    const expedition = getExpeditionBySlug(departure.expeditionSlug);
    return expedition ? [{ departure, expedition }] : [];
  });
}

export function filterOperationalDepartures(
  source: readonly DepartureContext[],
  filters: OperationsFilters,
) {
  return source.filter(({ departure }) =>
    (!filters.readiness || departure.readiness === filters.readiness) &&
    (!filters.weatherDecision || departure.weatherDecision === filters.weatherDecision),
  );
}

export function getOperationsMetrics(source: readonly DepartureContext[]) {
  return {
    readyDepartures: source.filter(({ departure }) => departure.readiness === "Ready").length,
    weatherWatchDepartures: source.filter(({ departure }) => departure.readiness === "Weather watch").length,
    allocationsNeedingAttention: source.filter(
      ({ departure }) => departure.allocation.status === "Needs attention",
    ).length,
  };
}
