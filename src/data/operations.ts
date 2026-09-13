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

export function getOperationsDepartureContext(id: string) {
  return getOperationalDepartures().find(({ departure }) => departure.id === id);
}

export function getDepartureAttentionGuidance(context: DepartureContext) {
  const { allocation, readiness } = context.departure;
  const guidance: string[] = [];

  if (readiness === "Weather watch") {
    guidance.push("Hold the final route decision until the next local weather review, then release the guide and vehicle hold.");
  }

  if (readiness === "Full") {
    guidance.push("Capacity is fully allocated in this demo. Keep the departure closed and use this record for coordination reference only.");
  }

  if (
    allocation.status === "Needs attention" ||
    !allocation.guideSummary.trim() ||
    !allocation.vehicleSummary.trim()
  ) {
    guidance.push("Confirm a complete guide and vehicle allocation before treating the departure as operationally aligned.");
  }

  return guidance;
}

export function getOperationsBackHref(query: OperationsQuery) {
  const filters = parseOperationsFilters(query);
  const params = new URLSearchParams();

  if (filters.readiness) params.set("readiness", filters.readiness);
  if (filters.weatherDecision) params.set("weather", filters.weatherDecision);

  const search = params.toString();
  return search ? `/operations?${search}` : "/operations";
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
