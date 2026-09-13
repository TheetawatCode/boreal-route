import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { OperationsDepartureDetail } from "@/components/operations-departure-detail";
import {
  getDepartureAttentionGuidance,
  getOperationsBackHref,
  getOperationalDepartures,
  getOperationsDepartureContext,
  type OperationsQuery,
} from "@/data/operations";

type OperationsDeparturePageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<OperationsQuery>;
};

export async function generateStaticParams() {
  return getOperationalDepartures().map(({ departure }) => ({ id: departure.id }));
}

export async function generateMetadata({ params }: OperationsDeparturePageProps): Promise<Metadata> {
  const { id } = await params;
  const context = getOperationsDepartureContext(id);

  if (!context) {
    return { title: "Departure unavailable | Boreal Route", description: "The requested demo operations departure could not be found." };
  }

  return {
    title: `${context.expedition.title} coordination | Boreal Route`,
    description: `Fictional operations coordination for the ${context.departure.dateRange} departure of ${context.expedition.title}.`,
  };
}

export default async function OperationsDeparturePage({ params, searchParams }: OperationsDeparturePageProps) {
  const { id } = await params;
  const context = getOperationsDepartureContext(id);

  if (!context) notFound();

  return <OperationsDepartureDetail context={context} attentionGuidance={getDepartureAttentionGuidance(context)} operationsHref={getOperationsBackHref(await searchParams)} />;
}
