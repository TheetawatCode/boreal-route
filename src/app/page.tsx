import { ExpeditionCard } from "@/components/expedition-card";
import { SiteHeader } from "@/components/site-header";
import { expeditions } from "@/data/expeditions";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6f7f4] text-[#07111f]">
      <SiteHeader />
      <main>
        <section className="overflow-hidden bg-[#07111f] text-[#f6f7f4]">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-12 lg:items-end lg:gap-8 lg:px-12 lg:py-28">
            <div className="relative lg:col-span-8">
              <div className="aurora-haze pointer-events-none absolute -left-36 -top-44 size-[32rem] opacity-80" />
              <p className="relative text-xs font-semibold uppercase tracking-[0.22em] text-[#78d7c0]">
                Northern lights expeditions
              </p>
              <h1 className="relative mt-7 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-balance sm:text-7xl lg:text-8xl">
                Leave the city. Find the northern sky.
              </h1>
              <p className="relative mt-8 max-w-2xl text-lg leading-8 text-[#c7d0d8] sm:text-xl">
                Small-group winter journeys designed around the places, people,
                and changing conditions that make a rare night possible.
              </p>
              <a
                href="#expeditions"
                className="relative mt-10 inline-flex items-center gap-3 border border-[#78d7c0] px-5 py-3 text-sm font-semibold text-[#f6f7f4] outline-offset-4 transition-colors hover:bg-[#78d7c0] hover:text-[#07111f] focus-visible:outline-2 focus-visible:outline-[#f6f7f4]"
              >
                Explore expeditions <span aria-hidden="true">↓</span>
              </a>
            </div>

            <aside className="grid gap-5 border-l border-white/15 pl-5 text-sm text-[#c7d0d8] sm:grid-cols-3 sm:border-l-0 sm:border-t sm:pt-5 sm:pl-0 lg:col-span-4 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pb-1 lg:pl-8 lg:pt-0">
              <p>
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-[#8dbae7]">
                  Regions
                </span>
                <span className="mt-2 block">Norway + Iceland</span>
              </p>
              <p>
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-[#8dbae7]">
                  Group size
                </span>
                <span className="mt-2 block">Six to ten travellers</span>
              </p>
              <p>
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-[#8dbae7]">
                  Guiding principle
                </span>
                <span className="mt-2 block">The forecast informs the route.</span>
              </p>
            </aside>
          </div>
        </section>

        <section id="approach" className="border-b border-[#dce2e5] bg-[#10243a] text-[#f6f7f4]">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12 lg:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#78d7c0] lg:col-span-3">
              A quieter kind of expedition
            </p>
            <div className="lg:col-span-8 lg:col-start-5">
              <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">
                A clear plan for the parts we can control, and room to follow
                the conditions we cannot.
              </h2>
              <div className="mt-10 grid gap-7 border-t border-white/20 pt-7 sm:grid-cols-3">
                {[
                  ["01", "Local rhythm", "More time in fewer places, with a calm base between nights outside."],
                  ["02", "Small groups", "Enough space for a guide to notice pace, weather, and what the group needs."],
                  ["03", "Operational care", "A practical view of every route, vehicle, and decision behind the scenes."],
                ].map(([number, title, description]) => (
                  <div key={number}>
                    <p className="font-mono text-xs text-[#8dbae7]">{number}</p>
                    <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#c7d0d8]">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="expeditions" className="scroll-mt-6 bg-[#f6f7f4]">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
            <div className="grid gap-6 border-b border-[#bdcbd2] pb-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#416f88]">
                  Winter 2026 collection
                </p>
                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-balance sm:text-6xl">
                  Choose your way into the night.
                </h2>
              </div>
              <p className="max-w-md text-base leading-7 text-[#425467] lg:col-span-4 lg:col-start-9">
                Three distinct routes, each with a different pace, landscape,
                and relationship to the changing northern weather.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {expeditions.map((expedition) => (
                <ExpeditionCard key={expedition.slug} expedition={expedition} />
              ))}
            </div>
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
