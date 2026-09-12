import Link from "next/link";

const navigationItems = [
  { href: "#expeditions", label: "Expeditions" },
  { href: "#approach", label: "Our approach" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-white/15 bg-[#07111f] text-[#f6f7f4]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-4 px-5 py-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f6f7f4] outline-offset-4 focus-visible:outline-2 focus-visible:outline-[#78d7c0]"
        >
          Boreal Route
        </Link>
        <nav aria-label="Primary navigation">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-[0.16em] text-[#c7d0d8] sm:gap-x-8">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="outline-offset-4 transition-colors hover:text-[#f6f7f4] focus-visible:outline-2 focus-visible:outline-[#78d7c0]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
