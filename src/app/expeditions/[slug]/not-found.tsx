import Link from "next/link";

import { SiteHeader } from "@/components/site-header";

export default function ExpeditionNotFound() {
  return (
    <div className="min-h-screen bg-[#07111f] text-[#f6f7f4]">
      <SiteHeader />
      <main className="mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl items-center px-5 py-16 sm:px-8 lg:px-12">
        <section className="relative max-w-3xl overflow-hidden border border-white/15 p-7 sm:p-12">
          <div className="aurora-haze pointer-events-none absolute -right-48 -top-48 size-[30rem] opacity-70" />
          <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-[#78d7c0]">
            Route not found
          </p>
          <h1 className="relative mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
            This route has not been charted.
          </h1>
          <p className="relative mt-6 max-w-xl text-lg leading-8 text-[#c7d0d8]">
            The expedition you requested is not part of the current collection.
            Return to the index to choose another northern route.
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
