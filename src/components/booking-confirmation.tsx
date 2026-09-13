"use client";

import Link from "next/link";
import { useState } from "react";

import {
  createDemoTrip,
  saveDemoTrip,
} from "@/lib/demo-trip";

type BookingConfirmationProps = {
  departureId: string;
  partySize: number;
};

export function BookingConfirmation({
  departureId,
  partySize,
}: BookingConfirmationProps) {
  const [reference, setReference] = useState<string | null>(null);

  function confirmDemoTrip() {
    if (reference) {
      return;
    }

    const trip = createDemoTrip({
      departureId,
      partySize,
      createdAt: new Date().toISOString(),
    });

    saveDemoTrip(window.localStorage, trip);
    setReference(trip.reference);
  }

  return (
    <section aria-labelledby="confirmation-heading" className="mt-10 border-t border-[#bdcbd2] pt-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#416f88]">
        Simulation step
      </p>
      <h2 id="confirmation-heading" className="mt-3 text-2xl font-semibold tracking-[-0.035em]">
        Save this simulated trip.
      </h2>
      <p className="mt-4 max-w-2xl leading-7 text-[#425467]">
        This stores only the selected departure, party size, demo reference, and
        timestamp in this browser. It does not reserve space or collect payment.
      </p>

      <button
        type="button"
        onClick={confirmDemoTrip}
        className="mt-6 border border-[#07111f] bg-[#07111f] px-5 py-3 text-sm font-semibold text-[#f6f7f4] outline-offset-4 transition-colors hover:bg-[#416f88] focus-visible:outline-2 focus-visible:outline-[#416f88]"
      >
        {reference ? "Simulated trip saved" : "Confirm simulated trip"}
      </button>

      {reference ? (
        <div className="mt-6 border border-[#78a99d] bg-[#edf7f3] p-5 text-[#173f38]">
          <p role="status" aria-live="polite" className="text-sm leading-6">
            Simulated trip saved. Your demo reference is {reference}. No place
            has been reserved.
          </p>
          <Link
            href="/trips"
            className="mt-4 inline-flex border border-[#173f38] px-4 py-2 text-sm font-semibold outline-offset-4 hover:bg-[#173f38] hover:text-white focus-visible:outline-2 focus-visible:outline-[#416f88]"
          >
            View traveller itinerary
          </Link>
        </div>
      ) : null}
    </section>
  );
}
