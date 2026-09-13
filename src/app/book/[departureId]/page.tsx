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
      title: "Departure unavailable",
      description: "The requested Boreal Route departure is not available for review.",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `Review ${context.expedition.title}`,
    description: `Fictional booking review for the ${context.departure.dateRange} departure of ${context.expedition.title}.`,
    alternates: { canonical: `/book/${departureId}` },
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
