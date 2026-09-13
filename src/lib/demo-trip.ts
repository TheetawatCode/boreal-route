import {
  getBookableDepartureContext,
  type DepartureContext,
} from "@/data/expeditions";

export const demoTripStorageKey = "boreal-route.demo-trip";

export type DemoTrip = {
  departureId: string;
  partySize: number;
  reference: string;
  createdAt: string;
};

type NewDemoTrip = Pick<DemoTrip, "departureId" | "partySize" | "createdAt">;

function departureReferenceSegment(departureId: string) {
  const [route, ...date] = departureId.split("-");

  return `${route.slice(0, 3).toUpperCase()}-${date.join("")}`;
}

export function getDemoReference(departureId: string, partySize: number) {
  return `BR-${departureReferenceSegment(departureId)}-${String(partySize).padStart(2, "0")}`;
}

export function createDemoTrip({ departureId, partySize, createdAt }: NewDemoTrip): DemoTrip {
  return {
    departureId,
    partySize,
    reference: getDemoReference(departureId, partySize),
    createdAt,
  };
}

export function isDemoTrip(value: unknown): value is DemoTrip {
  if (!value || typeof value !== "object") {
    return false;
  }

  const trip = value as Record<string, unknown>;

  return (
    typeof trip.departureId === "string" &&
    Number.isInteger(trip.partySize) &&
    (trip.partySize as number) > 0 &&
    typeof trip.reference === "string" &&
    typeof trip.createdAt === "string"
  );
}

export function saveDemoTrip(storage: Storage, trip: DemoTrip) {
  storage.setItem(demoTripStorageKey, JSON.stringify(trip));
}

export function readDemoTrip(storage: Storage): DemoTrip | null {
  const value = storage.getItem(demoTripStorageKey);

  if (!value) {
    return null;
  }

  try {
    const parsed: unknown = JSON.parse(value);
    return isDemoTrip(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function clearDemoTrip(storage: Storage) {
  storage.removeItem(demoTripStorageKey);
}

export function getDemoTripContext(trip: DemoTrip): DepartureContext | null {
  const context = getBookableDepartureContext(trip.departureId);

  return context && trip.partySize <= context.departure.remainingSpaces ? context : null;
}
