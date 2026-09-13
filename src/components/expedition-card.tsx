import Image from "next/image";
import Link from "next/link";

import type { Expedition } from "@/data/expeditions";

type ExpeditionCardProps = {
  expedition: Expedition;
};

export function ExpeditionCard({ expedition }: ExpeditionCardProps) {
  const titleId = `expedition-${expedition.slug}`;

  return (
    <Link
      href={`/expeditions/${expedition.slug}`}
      aria-label={`View ${expedition.title}`}
      className="group block outline-offset-4 focus-visible:outline-2 focus-visible:outline-[#416f88]"
    >
      <article
        aria-labelledby={titleId}
        className="grid overflow-hidden rounded-sm border border-[#10243a] bg-white shadow-[0_20px_60px_rgb(7_17_31_/_0.08)]"
      >
        <div className="relative aspect-[3/2] overflow-hidden bg-[#10243a]">
          <Image
            src={expedition.image.src}
            alt={expedition.image.alt}
            width={expedition.image.width}
            height={expedition.image.height}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-[#07111f]/80 via-transparent to-[#07111f]/10" />
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
            className="mt-5 text-3xl font-semibold tracking-[-0.045em] transition-colors group-hover:text-[#416f88]"
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
    </Link>
  );
}
