import Link from "next/link";

import type { DepartureContext } from "@/data/expeditions";

type OperationsDepartureDetailProps = {
  context: DepartureContext;
  attentionGuidance: readonly string[];
  operationsHref: string;
};

export function OperationsDepartureDetail({
  context,
  attentionGuidance,
  operationsHref,
}: OperationsDepartureDetailProps) {
  const { departure, expedition } = context;

  return (
    <div className="min-h-screen bg-[#f6f7f4] text-[#07111f]">
      <main>
        <section className="border-b border-white/15 bg-[#102536] text-[#f6f7f4]">
          <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8 lg:px-12">
            <Link href={operationsHref} className="inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-[#8dbae7] underline decoration-[#78d7c0] underline-offset-4 outline-offset-4 hover:text-[#f6f7f4] focus-visible:outline-2 focus-visible:outline-[#78d7c0]">Back to operations board</Link>
          </div>
        </section>

        <section className="overflow-hidden bg-[#102536] text-[#f6f7f4]">
          <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:px-12">
            <div className="aurora-haze pointer-events-none absolute -right-48 -top-56 size-[34rem] opacity-50" />
            <div className="relative lg:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#78d7c0]">Departure coordination · read only demo</p>
              <h1 className="mt-5 text-5xl font-semibold tracking-[-0.06em] text-balance sm:text-7xl">{expedition.title}</h1>
              <p className="mt-5 text-lg text-[#c7d0d8]">{departure.dateRange} · {expedition.region}, {expedition.country}</p>
            </div>
            <p role="status" className="relative border-l-2 border-[#78d7c0] pl-5 text-sm leading-6 text-[#c7d0d8] lg:col-span-4">Readiness: {departure.readiness}. Weather decision: {departure.weatherDecision}. Allocation: {departure.allocation.status}.</p>
          </div>
        </section>

        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:px-12">
          <div className="space-y-12 lg:col-span-8">
            {attentionGuidance.length ? (
              <section aria-labelledby="attention-heading" className="border-l-4 border-[#ad7a36] bg-[#fff8e9] p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#796034]">Attention required</p>
                <h2 id="attention-heading" className="mt-3 text-3xl font-semibold tracking-[-0.045em]">Keep this departure in view.</h2>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-[#5d4b29]">{attentionGuidance.map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true">—</span>{item}</li>)}</ul>
              </section>
            ) : (
              <section aria-labelledby="aligned-heading" className="border-l-4 border-[#4f8a7a] bg-[#edf7f3] p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2e665a]">Operationally aligned</p>
                <h2 id="aligned-heading" className="mt-3 text-3xl font-semibold tracking-[-0.045em]">No fixture-led attention is open.</h2>
                <p className="mt-4 leading-7 text-[#315c54]">The route, weather decision, and listed allocations are aligned for this fictional departure window.</p>
              </section>
            )}

            <section aria-labelledby="timeline-heading">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#416f88]">Readiness timeline</p>
              <h2 id="timeline-heading" className="mt-3 text-3xl font-semibold tracking-[-0.045em]">The decisions behind the departure.</h2>
              <ol className="mt-7 space-y-5 border-l border-[#bdcbd2] pl-6">{departure.coordination.readinessTimeline.map((checkpoint, index) => <li key={checkpoint.label} className="relative"><span aria-hidden="true" className="absolute -left-[2.05rem] top-0 flex size-4 items-center justify-center rounded-full border border-[#416f88] bg-[#f6f7f4] text-[0.55rem] font-semibold text-[#416f88]">{index + 1}</span><h3 className="font-semibold text-[#07111f]">{checkpoint.label}</h3><p className="mt-2 leading-7 text-[#425467]">{checkpoint.detail}</p></li>)}</ol>
            </section>

            <section aria-labelledby="checklist-heading">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#416f88]">Departure-day checklist</p>
              <h2 id="checklist-heading" className="mt-3 text-3xl font-semibold tracking-[-0.045em]">A short, practical handoff.</h2>
              <ul className="mt-6 space-y-4 border-t border-[#bdcbd2] pt-6">{departure.coordination.departureDayChecklist.map((item, index) => <li key={item} className="flex gap-4 leading-7 text-[#425467]"><span aria-hidden="true" className="font-semibold text-[#416f88]">{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ul>
            </section>
          </div>

          <aside className="space-y-6 lg:col-span-4 lg:pl-8">
            <section aria-labelledby="manifest-heading" className="border border-[#8da2ad] bg-white p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#416f88]">Traveller manifest</p>
              <h2 id="manifest-heading" className="mt-4 text-2xl font-semibold tracking-[-0.035em]">Capacity, without personal data.</h2>
              <p className="mt-5 leading-7 text-[#425467]">{departure.coordination.travellerManifestSummary}</p>
              <dl className="mt-6 grid gap-4 border-t border-[#dce2e5] pt-5 text-sm"><div><dt className="font-semibold text-[#28465b]">Capacity</dt><dd className="mt-1 text-[#425467]">{departure.capacity} travellers</dd></div><div><dt className="font-semibold text-[#28465b]">Spaces remaining</dt><dd className="mt-1 text-[#425467]">{departure.remainingSpaces} spaces</dd></div></dl>
            </section>

            <section aria-labelledby="weather-heading" className="border border-[#8da2ad] bg-white p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#416f88]">Weather decision</p>
              <h2 id="weather-heading" className="mt-4 text-2xl font-semibold tracking-[-0.035em]">{departure.weatherDecision}</h2>
              <p className="mt-5 leading-7 text-[#425467]">{departure.coordination.weatherRationale}</p>
            </section>

            <section aria-labelledby="allocation-heading" className="border border-[#8da2ad] bg-white p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#416f88]">Allocations</p>
              <h2 id="allocation-heading" className="mt-4 text-2xl font-semibold tracking-[-0.035em]">Guides and vehicle.</h2>
              <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-[#667985]">Assigned guides</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-[#425467]">{departure.coordination.guides.map((guide) => <li key={guide}>{guide}</li>)}</ul>
              <dl className="mt-6 space-y-4 border-t border-[#dce2e5] pt-5 text-sm"><div><dt className="font-semibold text-[#28465b]">Guide plan</dt><dd className="mt-1 leading-6 text-[#425467]">{departure.allocation.guideSummary}</dd></div><div><dt className="font-semibold text-[#28465b]">Vehicle plan</dt><dd className="mt-1 leading-6 text-[#425467]">{departure.allocation.vehicleSummary}</dd></div></dl>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}
