import type { Metadata } from "next";
import Link from "next/link";

import { ExpeditionCard } from "@/components/expedition-card";
import { SiteHeader } from "@/components/site-header";
import {
  discoveryDurations,
  discoveryRegions,
  expeditions,
  filterExpeditions,
  parseDiscoveryFilters,
  type DiscoveryQuery,
} from "@/data/expeditions";

export const metadata: Metadata = {
  title: "Northern lights expeditions",
  description:
    "Explore fictional small-group northern-lights expeditions across Iceland and Norway.",
};

type ExpeditionIndexPageProps = {
  searchParams: Promise<DiscoveryQuery>;
};

function pluraliseExpeditions(count: number) {
  return `${count} expedition${count === 1 ? "" : "s"}`;
}

export default async function ExpeditionIndexPage({
  searchParams,
}: ExpeditionIndexPageProps) {
  const filters = parseDiscoveryFilters(await searchParams);
  const results = filterExpeditions(expeditions, filters);
  const activeFilters = [
    filters.region,
    filters.durationNights ? `${filters.durationNights} nights` : null,
  ].filter(Boolean);
  const hasActiveFilters = activeFilters.length > 0;

  return (
    <div className="min-h-screen bg-[#f6f7f4] text-[#07111f]">
      <SiteHeader />
      <main>
        <section className="overflow-hidden bg-[#07111f] text-[#f6f7f4]">
          <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            <div className="aurora-haze pointer-events-none absolute -right-44 -top-56 size-[34rem] opacity-75" />
            <p className="relative text-xs font-semibold uppercase tracking-[0.22em] text-[#78d7c0]">
              Expedition index
            </p>
            <h1 className="relative mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-balance sm:text-7xl">
              Find a route that leaves room for the night.
            </h1>
            <p className="relative mt-7 max-w-2xl text-lg leading-8 text-[#c7d0d8] sm:text-xl">
              Browse the current collection by country and by the amount of time
              you want to spend outside the ordinary.
            </p>
          </div>
        </section>

        <section className="border-b border-[#bdcbd2] bg-[#eaf0ef]">
          <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:px-12">
            <form action="/expeditions" className="grid gap-6 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
              <div>
                <label
                  htmlFor="region"
                  className="text-xs font-semibold uppercase tracking-[0.16em] text-[#416f88]"
                >
                  Region
                </label>
                <select
                  id="region"
                  name="region"
                  defaultValue={filters.region ?? ""}
                  className="mt-3 w-full border border-[#8da2ad] bg-[#f6f7f4] px-4 py-3 text-base text-[#07111f] outline-offset-2 focus-visible:outline-2 focus-visible:outline-[#416f88]"
                >
                  <option value="">All regions</option>
                  {discoveryRegions.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="duration"
                  className="text-xs font-semibold uppercase tracking-[0.16em] text-[#416f88]"
                >
                  Trip duration
                </label>
                <select
                  id="duration"
                  name="duration"
                  defaultValue={filters.durationNights?.toString() ?? ""}
                  className="mt-3 w-full border border-[#8da2ad] bg-[#f6f7f4] px-4 py-3 text-base text-[#07111f] outline-offset-2 focus-visible:outline-2 focus-visible:outline-[#416f88]"
                >
                  <option value="">Any duration</option>
                  {discoveryDurations.map((duration) => (
                    <option key={duration} value={duration}>
                      {duration} nights
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="border border-[#07111f] bg-[#07111f] px-5 py-3 text-sm font-semibold text-[#f6f7f4] outline-offset-4 transition-colors hover:bg-[#416f88] focus-visible:outline-2 focus-visible:outline-[#416f88]"
                >
                  Show routes
                </button>
                {hasActiveFilters ? (
                  <Link
                    href="/expeditions"
                    className="px-1 py-3 text-sm font-semibold text-[#28465b] underline decoration-[#8dbae7] underline-offset-4 outline-offset-4 hover:text-[#07111f] focus-visible:outline-2 focus-visible:outline-[#416f88]"
                  >
                    Clear filters
                  </Link>
                ) : null}
              </div>
            </form>
          </div>
        </section>

        <section className="bg-[#f6f7f4]">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
            <div className="flex flex-col justify-between gap-4 border-b border-[#bdcbd2] pb-7 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#416f88]">
                  Winter 2026 collection
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                  {pluraliseExpeditions(results.length)} found
                </h2>
              </div>
              <p role="status" aria-atomic="true" className="max-w-md text-sm leading-6 text-[#425467]">
                {hasActiveFilters
                  ? `Showing ${pluraliseExpeditions(results.length)} for ${activeFilters.join(" · ")}.`
                  : "Showing every current northern-lights expedition."}
              </p>
            </div>

            {results.length ? (
              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {results.map((expedition) => (
                  <ExpeditionCard key={expedition.slug} expedition={expedition} />
                ))}
              </div>
            ) : (
              <div className="mt-10 border border-[#bdcbd2] bg-white p-8 sm:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#416f88]">
                  No shared route window
                </p>
                <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.045em]">
                  These filters do not meet on a current expedition.
                </h2>
                <p className="mt-4 max-w-xl leading-7 text-[#425467]">
                  Try another duration or return to the full collection to see
                  every route currently available to explore.
                </p>
                <Link
                  href="/expeditions"
                  className="mt-7 inline-flex border border-[#07111f] px-5 py-3 text-sm font-semibold text-[#07111f] outline-offset-4 transition-colors hover:bg-[#07111f] hover:text-[#f6f7f4] focus-visible:outline-2 focus-visible:outline-[#416f88]"
                >
                  View all expeditions
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/15 bg-[#07111f] text-[#c7d0d8]">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 text-sm sm:flex-row sm:items-end sm:justify-between sm:px-8 lg:px-12">
          <p className="max-w-md">
            Boreal Route is a fictional expedition platform created as a
            portfolio project.
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#8dbae7]">
            Discovery · Availability · Booking · Operations
          </p>
        </div>
      </footer>
    </div>
  );
}
