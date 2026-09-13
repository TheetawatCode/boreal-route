import Link from "next/link";

import {
  getPricePerTraveller,
  type DepartureContext,
} from "@/data/expeditions";

type BookingReviewProps = {
  context: DepartureContext;
  partySize: number;
};

function formatPrice(amount: number, currency: DepartureContext["departure"]["price"]["currency"]) {
  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function BookingReview({ context, partySize }: BookingReviewProps) {
  const { departure, expedition } = context;
  const { price } = departure;
  const pricePerTraveller = getPricePerTraveller(departure);
  const total = pricePerTraveller * partySize;
  const partyOptions = Array.from(
    { length: departure.remainingSpaces },
    (_, index) => index + 1,
  );

  return (
    <div className="min-h-screen bg-[#f6f7f4] text-[#07111f]">
      <main>
        <section className="border-b border-white/15 bg-[#07111f] text-[#f6f7f4]">
          <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8 lg:px-12">
            <Link
              href={`/expeditions/${expedition.slug}`}
              className="inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-[#8dbae7] underline decoration-[#78d7c0] underline-offset-4 outline-offset-4 hover:text-[#f6f7f4] focus-visible:outline-2 focus-visible:outline-[#78d7c0]"
            >
              Back to {expedition.title}
            </Link>
          </div>
        </section>

        <section className="overflow-hidden bg-[#07111f] text-[#f6f7f4]">
          <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:px-12">
            <div className="aurora-haze pointer-events-none absolute -right-48 -top-56 size-[34rem] opacity-70" />
            <div className="relative lg:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#78d7c0]">
                Booking review · simulation only
              </p>
              <h1 className="mt-5 text-5xl font-semibold tracking-[-0.06em] text-balance sm:text-7xl">
                Review your route before anything is real.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#c7d0d8] sm:text-xl">
                This is a fictional planning review. No booking, payment, or
                traveller details are collected at this stage.
              </p>
            </div>
            <div className="relative border-t border-white/20 pt-6 text-sm text-[#c7d0d8] lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8dbae7]">
                Selected departure
              </p>
              <p className="mt-3 text-xl font-semibold text-[#f6f7f4]">{expedition.title}</p>
              <p className="mt-2">{departure.dateRange}</p>
            </div>
          </div>
        </section>

        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:px-12">
          <section aria-labelledby="party-heading" className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#416f88]">
              Your review
            </p>
            <h2 id="party-heading" className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              Choose a party size.
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-[#425467]">
              Party size is limited by this departure’s current fictional space
              count. Updating the review does not reserve a place.
            </p>

            <form action={`/book/${departure.id}`} className="mt-9 border-y border-[#bdcbd2] py-7">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div className="w-full max-w-xs">
                  <label
                    htmlFor="party"
                    className="text-xs font-semibold uppercase tracking-[0.16em] text-[#416f88]"
                  >
                    Travellers
                  </label>
                  <select
                    id="party"
                    name="party"
                    defaultValue={partySize}
                    className="mt-3 w-full border border-[#8da2ad] bg-white px-4 py-3 text-base text-[#07111f] outline-offset-2 focus-visible:outline-2 focus-visible:outline-[#416f88]"
                  >
                    {partyOptions.map((option) => (
                      <option key={option} value={option}>
                        {option} traveller{option === 1 ? "" : "s"}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="border border-[#07111f] bg-[#07111f] px-5 py-3 text-sm font-semibold text-[#f6f7f4] outline-offset-4 transition-colors hover:bg-[#416f88] focus-visible:outline-2 focus-visible:outline-[#416f88]"
                >
                  Update review
                </button>
              </div>
              <p role="status" className="mt-5 flex gap-3 text-sm leading-6 text-[#28465b]">
                <span aria-hidden="true" className="text-[#416f88]">●</span>
                {departure.remainingSpaces} spaces currently available. This review
                includes {partySize} traveller{partySize === 1 ? "" : "s"} and
                does not hold space.
              </p>
            </form>

            <section aria-labelledby="departure-heading" className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#416f88]">
                Departure summary
              </p>
              <h2 id="departure-heading" className="mt-3 text-2xl font-semibold tracking-[-0.035em]">
                {departure.dateRange}
              </h2>
              <dl className="mt-5 grid gap-5 border-t border-[#bdcbd2] pt-5 sm:grid-cols-3">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#667985]">Capacity</dt>
                  <dd className="mt-2 text-[#28465b]">{departure.capacity} travellers</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#667985]">Spaces remaining</dt>
                  <dd className="mt-2 text-[#28465b]">{departure.remainingSpaces} spaces</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[#667985]">Readiness</dt>
                  <dd className="mt-2 text-[#28465b]">{departure.readiness}</dd>
                </div>
              </dl>
            </section>
          </section>

          <aside aria-labelledby="price-heading" className="lg:col-span-5 lg:pl-8">
            <div className="border border-[#8da2ad] bg-white p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#416f88]">
                Transparent estimate
              </p>
              <h2 id="price-heading" className="mt-4 text-3xl font-semibold tracking-[-0.045em]">
                Review total
              </h2>
              <dl className="mt-7 space-y-4 border-y border-[#dce2e5] py-5 text-sm text-[#425467]">
                <div className="flex items-baseline justify-between gap-5">
                  <dt>Accommodation and guiding × {partySize}</dt>
                  <dd>{formatPrice(price.accommodationAndGuiding * partySize, price.currency)}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-5">
                  <dt>Route logistics × {partySize}</dt>
                  <dd>{formatPrice(price.routeLogistics * partySize, price.currency)}</dd>
                </div>
              </dl>
              <div className="mt-6 flex items-end justify-between gap-5">
                <p className="text-sm font-semibold text-[#28465b]">Fictional estimated total</p>
                <p className="text-3xl font-semibold tracking-[-0.045em] text-[#07111f]">
                  {formatPrice(total, price.currency)}
                </p>
              </div>
              <p className="mt-6 border-t border-[#dce2e5] pt-5 text-sm leading-6 text-[#425467]">
                The estimate is derived from fixture data only. It is not a
                payment request and will not be saved.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
