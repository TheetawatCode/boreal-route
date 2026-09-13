import type { Metadata } from "next";

import { TripsExperience } from "@/components/trips-experience";

export const metadata: Metadata = {
  title: "Your simulated trip",
  description: "A browser-local fictional Boreal Route traveller itinerary.",
};

export default function TripsPage() {
  return <TripsExperience />;
}
