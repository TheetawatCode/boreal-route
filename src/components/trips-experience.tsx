"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { SiteHeader } from "@/components/site-header";
import {
  clearDemoTrip,
  getDemoTripContext,
  readDemoTrip,
  type DemoTrip,
} from "@/lib/demo-trip";

type TripState =
  | { kind: "loading" }
  | { kind: "empty"; message?: string }
  | { kind: "stale"; trip: DemoTrip }
  | { kind: "ready"; trip: DemoTrip };

export function TripsExperience() {
  const [state, setState] = useState<TripState>({ kind: "loading" });

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const trip = readDemoTrip(window.localStorage);

      if (!trip) {
        setState({ kind: "empty" });
        return;
      }

      setState(getDemoTripContext(trip) ? { kind: "ready", trip } : { kind: "stale", trip });
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  function removeTrip(message: string) {
    clearDemoTrip(window.localStorage);
    setState({ kind: "empty", message });
  }

  const context = state.kind === "ready" ? getDemoTripContext(state.trip) : null;

  return (
    <div className="min-h-screen bg-[#f6f7f4] text-[#07111f]">
      <SiteHeader />
      <main>
        <section className="overflow-hidden bg-[#07111f] text-[#f6f7f4]">
          <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
            <div className="aurora-haze pointer-events-none absolute -right-48 -top-56 size-[34rem] opacity-70" />
            <div className="relative max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#78d7c0]">Traveller itinerary</p>
              <h1 className="mt-5 text-5xl font-semibold tracking-[-0.06em] text-balance sm:text-7xl">Your route, held lightly.</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#c7d0d8] sm:text-xl">
                A fictional itinerary stored only in this browser. Nothing here is a booking, payment, or reservation.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          {state.kind === "loading" ? (
            <p role="status" className="text-[#425467]">Loading your simulated trip…</p>
          ) : null}

          {state.kind === "empty" ? (
            <section aria-labelledby="empty-heading" className="max-w-2xl border border-[#bdcbd2] bg-white p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#416f88]">No simulated trip</p>
              <h2 id="empty-heading" className="mt-4 text-3xl font-semibold tracking-[-0.045em]">Your itinerary is waiting for a route.</h2>
              <p className="mt-5 leading-7 text-[#425467]">
                {state.message ?? "Choose a ready departure and confirm its simulated review to see the traveller itinerary here."}
              </p>
              <Link href="/expeditions" className="mt-7 inline-flex border border-[#07111f] bg-[#07111f] px-5 py-3 text-sm font-semibold text-[#f6f7f4] outline-offset-4 hover:bg-[#416f88] focus-visible:outline-2 focus-visible:outline-[#416f88]">Explore expeditions</Link>
            </section>
          ) : null}

          {state.kind === "stale" ? (
            <section aria-labelledby="stale-heading" className="max-w-2xl border border-[#d5b77e] bg-[#fff9eb] p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#796034]">Demo trip unavailable</p>
              <h2 id="stale-heading" className="mt-4 text-3xl font-semibold tracking-[-0.045em]">This saved route is no longer available.</h2>
              <p className="mt-5 leading-7 text-[#5d4b29]">The departure may be full, awaiting a weather decision, or no longer part of the fixture collection. Clear it before choosing another route.</p>
              <div className="mt-7 flex flex-wrap gap-4">
                <button type="button" onClick={() => removeTrip("The unavailable demo trip was cleared from this browser.")} className="border border-[#5d4b29] px-5 py-3 text-sm font-semibold text-[#5d4b29] outline-offset-4 hover:bg-[#5d4b29] hover:text-white focus-visible:outline-2 focus-visible:outline-[#416f88]">Clear demo trip</button>
                <Link href="/expeditions" className="inline-flex px-2 py-3 text-sm font-semibold text-[#28465b] underline decoration-[#416f88] underline-offset-4 outline-offset-4 focus-visible:outline-2 focus-visible:outline-[#416f88]">Explore expeditions</Link>
              </div>
            </section>
          ) : null}

          {state.kind === "ready" && context ? (
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
              <section aria-labelledby="trip-heading" className="lg:col-span-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#416f88]">Upcoming simulated departure</p>
                <h2 id="trip-heading" className="mt-4 text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">{context.expedition.title}</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#425467]">{context.expedition.summary}</p>
                <dl className="mt-9 grid gap-5 border-y border-[#bdcbd2] py-6 sm:grid-cols-3">
                  <div><dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#667985]">Departure</dt><dd className="mt-2 text-[#28465b]">{context.departure.dateRange}</dd></div>
                  <div><dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#667985]">Party size</dt><dd className="mt-2 text-[#28465b]">{state.trip.partySize} traveller{state.trip.partySize === 1 ? "" : "s"}</dd></div>
                  <div><dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#667985]">Readiness</dt><dd className="mt-2 text-[#28465b]">{context.departure.readiness} · {context.departure.remainingSpaces} spaces currently available</dd></div>
                </dl>
                <section aria-labelledby="preparation-heading" className="mt-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#416f88]">Preparation checklist</p>
                  <h3 id="preparation-heading" className="mt-3 text-2xl font-semibold tracking-[-0.035em]">Travel ready, not over-scripted.</h3>
                  <ul className="mt-6 space-y-4 border-t border-[#bdcbd2] pt-6">
                    {context.expedition.preparation.map((item, index) => <li key={item} className="flex gap-4 leading-7 text-[#425467]"><span aria-hidden="true" className="font-semibold text-[#416f88]">{String(index + 1).padStart(2, "0")}</span>{item}</li>)}
                  </ul>
                </section>
              </section>
              <aside aria-labelledby="reference-heading" className="lg:col-span-4 lg:pl-8">
                <div className="border border-[#8da2ad] bg-white p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#416f88]">Demo reference</p>
                  <h3 id="reference-heading" className="mt-4 text-2xl font-semibold tracking-[-0.035em]">{state.trip.reference}</h3>
                  <p className="mt-5 text-sm leading-6 text-[#425467]">Saved locally for this simulated experience. No payment is due and no place is reserved.</p>
                  <button type="button" onClick={() => removeTrip("Your demo trip was cleared from this browser.")} className="mt-7 w-full border border-[#07111f] px-4 py-3 text-sm font-semibold outline-offset-4 hover:bg-[#07111f] hover:text-white focus-visible:outline-2 focus-visible:outline-[#416f88]">Clear demo trip</button>
                </div>
              </aside>
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
}
