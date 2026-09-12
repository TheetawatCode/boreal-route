import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/site-header";
import { expeditions, getExpeditionBySlug } from "@/data/expeditions";

type ExpeditionDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return expeditions.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ExpeditionDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const expedition = getExpeditionBySlug(slug);

  if (!expedition) {
    return {
      title: "Expedition not found | Boreal Route",
      description: "The requested Boreal Route expedition could not be found.",
    };
  }

  return {
    title: `${expedition.title} | Boreal Route`,
    description: expedition.summary,
  };
}

export default async function ExpeditionDetailPage({
  params,
}: ExpeditionDetailPageProps) {
  const { slug } = await params;
  const expedition = getExpeditionBySlug(slug);

  if (!expedition) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f6f7f4] text-[#07111f]">
      <SiteHeader />
      <main>
        <section className="overflow-hidden bg-[#07111f] text-[#f6f7f4]">
          <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20 lg:grid lg:grid-cols-12 lg:gap-8 lg:px-12 lg:py-24">
            <div className="aurora-haze pointer-events-none absolute -left-40 -top-48 size-[36rem] opacity-75" />
            <div className="relative lg:col-span-8">
              <Link
                href="/expeditions"
                className="inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-[#8dbae7] underline decoration-[#78d7c0] underline-offset-4 outline-offset-4 hover:text-[#f6f7f4] focus-visible:outline-2 focus-visible:outline-[#78d7c0]"
              >
                All expeditions
              </Link>
              <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-[#78d7c0]">
                {expedition.region} · {expedition.country}
              </p>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-balance sm:text-7xl">
                {expedition.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#c7d0d8] sm:text-xl">
                {expedition.summary}
              </p>
            </div>

            <dl className="relative mt-12 grid gap-x-8 gap-y-7 border-t border-white/20 pt-7 text-sm sm:grid-cols-2 lg:col-span-4 lg:mt-0 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8dbae7]">
                  Duration
                </dt>
                <dd className="mt-2 text-[#f6f7f4]">{expedition.durationNights} nights</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8dbae7]">
                  Season
                </dt>
                <dd className="mt-2 text-[#f6f7f4]">{expedition.season}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8dbae7]">
                  Pace
                </dt>
                <dd className="mt-2 text-[#f6f7f4]">{expedition.difficulty}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8dbae7]">
                  Group
                </dt>
                <dd className="mt-2 text-[#f6f7f4]">{expedition.groupSize}</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="border-b border-[#bdcbd2] bg-[#eaf0ef]">
          <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#416f88]">
              Route character
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-[#28465b]">
              {expedition.highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-[#416f88]">✦</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-12 lg:gap-8 lg:px-12">
          <section aria-labelledby="itinerary-heading" className="lg:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#416f88]">
              The rhythm of the route
            </p>
            <h2 id="itinerary-heading" className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              Day by day
            </h2>
            <ol className="mt-10 space-y-0 border-t border-[#bdcbd2]">
              {expedition.itinerary.map((item) => (
                <li key={item.day} className="grid gap-4 border-b border-[#bdcbd2] py-7 sm:grid-cols-[5rem_1fr] sm:gap-8">
                  <p className="font-mono text-sm text-[#416f88]">Day {item.day}</p>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.035em]">{item.title}</h3>
                    <p className="mt-3 max-w-2xl leading-7 text-[#425467]">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <aside className="space-y-10 lg:col-span-4 lg:pl-8">
            <section aria-labelledby="readiness-heading" className="border border-[#8da2ad] bg-white p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#416f88]">
                Departure readiness
              </p>
              <h2 id="readiness-heading" className="mt-4 text-2xl font-semibold tracking-[-0.035em]">
                {expedition.readiness.label}
              </h2>
              <p role="status" className="mt-4 flex gap-3 leading-7 text-[#425467]">
                <span aria-hidden="true" className="mt-0.5 text-[#416f88]">●</span>
                {expedition.readiness.description}
              </p>
              <p className="mt-5 border-t border-[#dce2e5] pt-5 text-sm font-medium text-[#28465b]">
                {expedition.readiness.capacityNote}
              </p>
              <button
                type="button"
                disabled
                aria-describedby="booking-deferred"
                className="mt-7 w-full cursor-not-allowed bg-[#dce2e5] px-5 py-3 text-sm font-semibold text-[#667985]"
              >
                Booking opens later
              </button>
              <p id="booking-deferred" className="mt-3 text-sm leading-6 text-[#425467]">
                Departure selection and simulated booking arrive in a later milestone.
              </p>
            </section>

            <section aria-labelledby="included-heading">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#416f88]">
                Included
              </p>
              <h2 id="included-heading" className="mt-3 text-2xl font-semibold tracking-[-0.035em]">
                What the route holds
              </h2>
              <ul className="mt-5 space-y-4 border-t border-[#bdcbd2] pt-5 leading-7 text-[#425467]">
                {expedition.inclusions.map((inclusion) => (
                  <li key={inclusion} className="flex gap-3">
                    <span aria-hidden="true" className="text-[#416f88]">✓</span>
                    {inclusion}
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>

        <section className="border-t border-[#bdcbd2] bg-[#10243a] text-[#f6f7f4]">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-20">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#78d7c0]">
                Preparation
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em]">
                Travel ready, not over-scripted.
              </h2>
            </div>
            <ul className="grid gap-5 border-t border-white/20 pt-6 text-sm leading-6 text-[#c7d0d8] sm:grid-cols-3 lg:col-span-8 lg:border-t-0 lg:pt-0">
              {expedition.preparation.map((item, index) => (
                <li key={item}>
                  <p className="font-mono text-xs text-[#8dbae7]">0{index + 1}</p>
                  <p className="mt-3">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-[#f6f7f4]">
          <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:px-12">
            <Link
              href="/expeditions"
              className="inline-flex border border-[#07111f] px-5 py-3 text-sm font-semibold text-[#07111f] outline-offset-4 transition-colors hover:bg-[#07111f] hover:text-[#f6f7f4] focus-visible:outline-2 focus-visible:outline-[#416f88]"
            >
              Back to expedition index
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/15 bg-[#07111f] text-[#c7d0d8]">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 text-sm sm:flex-row sm:items-end sm:justify-between sm:px-8 lg:px-12">
          <p className="max-w-md">Boreal Route is a fictional expedition platform created as a portfolio project.</p>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#8dbae7]">
            Discovery · Availability · Booking · Operations
          </p>
        </div>
      </footer>
    </div>
  );
}
