import Link from "next/link";

import type { DepartureContext } from "@/data/expeditions";

type OperationsDepartureListProps = {
  departures: readonly DepartureContext[];
};

export function OperationsDepartureList({ departures }: OperationsDepartureListProps) {
  return (
    <ul className="mt-8 grid gap-5" aria-label="Departure readiness list">
      {departures.map(({ departure, expedition }) => (
        <li key={departure.id} className="border border-[#bdcbd2] bg-white p-6 sm:p-7">
          <div className="flex flex-col gap-5 border-b border-[#dce2e5] pb-5 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#416f88]">
                {departure.dateRange}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-[#07111f]">
                {expedition.title}
              </h3>
              <p className="mt-2 text-sm text-[#425467]">{expedition.region} · {expedition.country}</p>
            </div>
            <p role="status" className="max-w-sm border-l-2 border-[#416f88] pl-4 text-sm leading-6 text-[#28465b]">
              Readiness: {departure.readiness}. Weather decision: {departure.weatherDecision}. Allocation: {departure.allocation.status}.
            </p>
          </div>

          <dl className="grid gap-5 pt-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#667985]">Capacity</dt>
              <dd className="mt-2 text-sm leading-6 text-[#28465b]">{departure.capacity} travellers · {departure.remainingSpaces} spaces remaining</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#667985]">Weather decision</dt>
              <dd className="mt-2 text-sm leading-6 text-[#28465b]">{departure.weatherDecision}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#667985]">Guide allocation</dt>
              <dd className="mt-2 text-sm leading-6 text-[#28465b]">{departure.allocation.guideSummary}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#667985]">Vehicle allocation</dt>
              <dd className="mt-2 text-sm leading-6 text-[#28465b]">{departure.allocation.vehicleSummary}</dd>
            </div>
          </dl>

          <Link
            href={`/operations/departures/${departure.id}`}
            className="mt-6 inline-flex text-sm font-semibold text-[#28465b] underline decoration-[#416f88] underline-offset-4 outline-offset-4 hover:text-[#07111f] focus-visible:outline-2 focus-visible:outline-[#416f88]"
          >
            View departure coordination
          </Link>
        </li>
      ))}
    </ul>
  );
}
