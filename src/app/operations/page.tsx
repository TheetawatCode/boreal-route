import type { Metadata } from "next";
import Link from "next/link";

import { OperationsDepartureList } from "@/components/operations-departure-list";
import { SiteHeader } from "@/components/site-header";
import {
  filterOperationalDepartures,
  getOperationalDepartures,
  getOperationsMetrics,
  operationsReadinesses,
  operationsWeatherDecisions,
  parseOperationsFilters,
  type OperationsQuery,
} from "@/data/operations";

export const metadata: Metadata = {
  title: "Demo operations",
  description: "A fictional Boreal Route operations-manager departure readiness workspace.",
  alternates: { canonical: "/operations" },
};

type OperationsPageProps = {
  searchParams: Promise<OperationsQuery>;
};

export default async function OperationsPage({ searchParams }: OperationsPageProps) {
  const filters = parseOperationsFilters(await searchParams);
  const departures = getOperationalDepartures();
  const results = filterOperationalDepartures(departures, filters);
  const metrics = getOperationsMetrics(departures);
  const activeFilters = [filters.readiness, filters.weatherDecision].filter(Boolean);
  const hasActiveFilters = activeFilters.length > 0;

  return (
    <div className="min-h-screen bg-[#f6f7f4] text-[#07111f]">
      <SiteHeader />
      <main>
        <section className="overflow-hidden bg-[#102536] text-[#f6f7f4]">
          <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-12 lg:items-end lg:px-12">
            <div className="aurora-haze pointer-events-none absolute -right-48 -top-56 size-[34rem] opacity-50" />
            <div className="relative lg:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#78d7c0]">Demo operations view</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-balance sm:text-7xl">Departure readiness, without the noise.</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#c7d0d8] sm:text-xl">A fictional coordination view for weather-led route decisions and small-group allocation. It is not connected to real travellers or live operations.</p>
            </div>
            <p className="relative border-l-2 border-[#78d7c0] pl-5 text-sm leading-6 text-[#c7d0d8] lg:col-span-4">Read-only demo data · no sign-in required · no operational changes can be made here</p>
          </div>
        </section>

        <section className="border-b border-[#bdcbd2] bg-[#eaf0ef]">
          <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:px-12">
            <form action="/operations" className="grid gap-6 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
              <div>
                <label htmlFor="readiness" className="text-xs font-semibold uppercase tracking-[0.16em] text-[#416f88]">Readiness</label>
                <select id="readiness" name="readiness" defaultValue={filters.readiness ?? ""} className="mt-3 w-full border border-[#8da2ad] bg-[#f6f7f4] px-4 py-3 text-base text-[#07111f] outline-offset-2 focus-visible:outline-2 focus-visible:outline-[#416f88]">
                  <option value="">All readiness states</option>
                  {operationsReadinesses.map((readiness) => <option key={readiness} value={readiness}>{readiness}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="weather" className="text-xs font-semibold uppercase tracking-[0.16em] text-[#416f88]">Weather decision</label>
                <select id="weather" name="weather" defaultValue={filters.weatherDecision ?? ""} className="mt-3 w-full border border-[#8da2ad] bg-[#f6f7f4] px-4 py-3 text-base text-[#07111f] outline-offset-2 focus-visible:outline-2 focus-visible:outline-[#416f88]">
                  <option value="">All weather decisions</option>
                  {operationsWeatherDecisions.map((weatherDecision) => <option key={weatherDecision} value={weatherDecision}>{weatherDecision}</option>)}
                </select>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button type="submit" className="border border-[#07111f] bg-[#07111f] px-5 py-3 text-sm font-semibold text-[#f6f7f4] outline-offset-4 transition-colors hover:bg-[#416f88] focus-visible:outline-2 focus-visible:outline-[#416f88]">Update view</button>
                {hasActiveFilters ? <Link href="/operations" className="px-1 py-3 text-sm font-semibold text-[#28465b] underline decoration-[#8dbae7] underline-offset-4 outline-offset-4 hover:text-[#07111f] focus-visible:outline-2 focus-visible:outline-[#416f88]">Clear filters</Link> : null}
              </div>
            </form>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <div className="grid gap-4 sm:grid-cols-3">
            <article className="border border-[#bdcbd2] bg-white p-6"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#416f88]">Ready departures</p><p className="mt-4 text-4xl font-semibold tracking-[-0.05em]">{metrics.readyDepartures}</p><p className="mt-2 text-sm leading-6 text-[#425467]">Routes cleared for the current fixture window.</p></article>
            <article className="border border-[#bdcbd2] bg-white p-6"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#416f88]">Weather watch</p><p className="mt-4 text-4xl font-semibold tracking-[-0.05em]">{metrics.weatherWatchDepartures}</p><p className="mt-2 text-sm leading-6 text-[#425467]">Departure awaiting a weather-led decision.</p></article>
            <article className="border border-[#bdcbd2] bg-white p-6"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#416f88]">Allocation attention</p><p className="mt-4 text-4xl font-semibold tracking-[-0.05em]">{metrics.allocationsNeedingAttention}</p><p className="mt-2 text-sm leading-6 text-[#425467]">Guide or vehicle plans that need a decision.</p></article>
          </div>

          <div className="mt-14 border-b border-[#bdcbd2] pb-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#416f88]">Departure board</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">{results.length} departure{results.length === 1 ? "" : "s"} in view</h2>
            <p role="status" aria-atomic="true" className="mt-4 max-w-2xl text-sm leading-6 text-[#425467]">{hasActiveFilters ? `Showing ${results.length} departure${results.length === 1 ? "" : "s"} for ${activeFilters.join(" · ")}.` : "Showing all fictional departures and their current fixture-derived readiness."}</p>
          </div>

          {results.length ? <OperationsDepartureList departures={results} /> : (
            <section aria-labelledby="no-results-heading" className="mt-8 max-w-2xl border border-[#bdcbd2] bg-white p-8 sm:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#416f88]">No shared operational state</p>
              <h2 id="no-results-heading" className="mt-4 text-3xl font-semibold tracking-[-0.045em]">These filters do not meet on a current departure.</h2>
              <p className="mt-4 leading-7 text-[#425467]">Try another readiness or weather decision, or return to the full demo board.</p>
              <Link href="/operations" className="mt-7 inline-flex border border-[#07111f] px-5 py-3 text-sm font-semibold text-[#07111f] outline-offset-4 transition-colors hover:bg-[#07111f] hover:text-[#f6f7f4] focus-visible:outline-2 focus-visible:outline-[#416f88]">View all departures</Link>
            </section>
          )}
        </section>
      </main>
    </div>
  );
}
