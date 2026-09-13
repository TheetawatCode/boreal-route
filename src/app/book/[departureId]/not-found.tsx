import Link from "next/link";

export default function DepartureNotFound() {
  return (
    <div className="min-h-screen bg-[#07111f] text-[#f6f7f4]">
      <main className="mx-auto flex min-h-screen max-w-6xl items-center px-5 py-16 sm:px-8 lg:px-12">
        <section className="relative max-w-3xl overflow-hidden border border-white/15 p-7 sm:p-12">
          <div className="aurora-haze pointer-events-none absolute -right-48 -top-48 size-[30rem] opacity-70" />
          <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-[#78d7c0]">
            Departure unavailable
          </p>
          <h1 className="relative mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
            This departure cannot be reviewed.
          </h1>
          <p className="relative mt-6 max-w-xl text-lg leading-8 text-[#c7d0d8]">
            It may be full, still awaiting a weather decision, or outside the
            current collection. Return to the expedition index to choose another route.
          </p>
          <Link
            href="/expeditions"
            className="relative mt-8 inline-flex border border-[#78d7c0] px-5 py-3 text-sm font-semibold text-[#f6f7f4] outline-offset-4 transition-colors hover:bg-[#78d7c0] hover:text-[#07111f] focus-visible:outline-2 focus-visible:outline-[#f6f7f4]"
          >
            View all expeditions
          </Link>
        </section>
      </main>
    </div>
  );
}
