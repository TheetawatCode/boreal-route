export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] px-5 py-6 text-[#f6f7f4] sm:px-8 sm:py-10">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-6xl flex-col border border-white/15 p-5 sm:min-h-[calc(100vh-5rem)] sm:p-8 lg:p-12">
        <header className="flex items-center justify-between border-b border-white/15 pb-5 text-xs font-medium uppercase tracking-[0.22em] text-[#c7d0d8]">
          <span className="text-[#f6f7f4]">Boreal Route</span>
          <span>Foundation / 01</span>
        </header>

        <section className="relative flex flex-1 items-center py-16 sm:py-24">
          <div className="aurora-haze pointer-events-none absolute -right-36 top-0 size-[32rem] opacity-80" />
          <div className="relative max-w-4xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#78d7c0]">
              Northern lights expeditions
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.06em] text-balance sm:text-7xl lg:text-8xl">
              Find the night worth travelling for.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#c7d0d8] sm:text-xl">
              A fictional booking and operations workspace for journeys shaped
              by weather, people, and precise planning.
            </p>
          </div>
        </section>

        <footer className="grid gap-6 border-t border-white/15 pt-5 text-sm text-[#c7d0d8] sm:grid-cols-[1fr_auto] sm:items-end">
          <p className="max-w-md">
            Milestone 0 is complete. Product scope, design direction, and
            delivery foundations are ready for what comes next.
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#8dbae7]">
            Discovery · Availability · Booking · Operations
          </p>
        </footer>
      </div>
    </main>
  );
}
