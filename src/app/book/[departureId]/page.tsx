import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BookingReview } from "@/components/booking-review";
import {
  departures,
  getBookableDepartureContext,
  getSafePartySize,
  isDepartureSelectable,
  type BookingQuery,
} from "@/data/expeditions";

type BookingReviewPageProps = {
  params: Promise<{ departureId: string }>;
  searchParams: Promise<BookingQuery>;
};

export async function generateStaticParams() {
  return departures
    .filter(isDepartureSelectable)
    .map(({ id: departureId }) => ({ departureId }));
}

export async function generateMetadata({
  params,
}: BookingReviewPageProps): Promise<Metadata> {
  const { departureId } = await params;
  const context = getBookableDepartureContext(departureId);

  if (!context) {
    return {
      title: "Departure unavailable | Boreal Route",
      description: "The requested Boreal Route departure is not available for review.",
    };
  }

  return {
    title: `Review ${context.expedition.title} | Boreal Route`,
    description: `Fictional booking review for the ${context.departure.dateRange} departure of ${context.expedition.title}.`,
  };
}

export default async function BookingReviewPage({
  params,
  searchParams,
}: BookingReviewPageProps) {
  const { departureId } = await params;
  const context = getBookableDepartureContext(departureId);

  if (!context) {
    notFound();
  }

  const partySize = getSafePartySize(
    await searchParams,
    context.departure.remainingSpaces,
  );

  return <BookingReview context={context} partySize={partySize} />;
}
