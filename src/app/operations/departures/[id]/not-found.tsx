import Link from "next/link";

export default function OperationsDepartureNotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#102536] px-5 py-12 text-[#f6f7f4]">
      <section className="max-w-xl border border-white/20 bg-[#07111f]/70 p-8 sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#78d7c0]">Demo operations view</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">This departure coordination record is unavailable.</h1>
        <p className="mt-6 leading-7 text-[#c7d0d8]">The identifier may be unknown or outside the current fictional departure collection. Return to the operations board to choose another record.</p>
        <Link href="/operations" className="mt-8 inline-flex border border-[#f6f7f4] px-5 py-3 text-sm font-semibold outline-offset-4 hover:bg-[#f6f7f4] hover:text-[#07111f] focus-visible:outline-2 focus-visible:outline-[#78d7c0]">View operations board</Link>
      </section>
    </main>
  );
}
