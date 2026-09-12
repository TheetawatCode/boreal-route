import type { Expedition } from "@/data/expeditions";

const visualToneClasses: Record<Expedition["visualTone"], string> = {
  luminous: "from-[#10243a] via-[#18414e] to-[#78d7c0]/70",
  glacier: "from-[#253f5c] via-[#8dbae7]/70 to-[#f6f7f4]",
  ember: "from-[#171a29] via-[#403348] to-[#e7b85d]/75",
};

type ExpeditionCardProps = {
  expedition: Expedition;
};

export function ExpeditionCard({ expedition }: ExpeditionCardProps) {
  const titleId = `expedition-${expedition.slug}`;

  return (
    <article
      aria-labelledby={titleId}
      className="group grid overflow-hidden rounded-sm border border-[#10243a] bg-white shadow-[0_20px_60px_rgb(7_17_31_/_0.08)]"
    >
      <div
        aria-hidden="true"
        className={`relative min-h-64 overflow-hidden bg-linear-to-br ${visualToneClasses[expedition.visualTone]}`}
      >
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(ellipse_at_50%_100%,rgb(7_17_31_/_0.88),transparent_70%)]" />
        <div className="absolute inset-x-7 bottom-8 flex items-end justify-between border-b border-white/45 pb-3 text-xs font-medium uppercase tracking-[0.16em] text-white/90">
          <span>{expedition.region}</span>
          <span>{expedition.country}</span>
        </div>
      </div>

      <div className="flex flex-col p-6 sm:p-7">
        <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#416f88]">
          <span>{expedition.season}</span>
          <span>{expedition.groupSize}</span>
        </div>
        <h3
          id={titleId}
          className="mt-5 text-3xl font-semibold tracking-[-0.045em] text-[#07111f]"
        >
          {expedition.title}
        </h3>
        <p className="mt-4 text-base leading-7 text-[#425467]">
          {expedition.summary}
        </p>

        <dl className="mt-7 flex gap-7 border-t border-[#dce2e5] pt-5 text-sm text-[#28465b]">
          <div>
            <dt className="sr-only">Duration</dt>
            <dd>
              {expedition.durationNights} night
              {expedition.durationNights === 1 ? "" : "s"}
            </dd>
          </div>
          <div>
            <dt className="sr-only">Pace</dt>
            <dd>{expedition.difficulty} pace</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
