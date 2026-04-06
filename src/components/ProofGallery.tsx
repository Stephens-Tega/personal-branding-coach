"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import type { ProofCategory, ProofItem } from "../data/proofContent";

interface ProofGalleryProps {
  sectionId: string;
  eyebrow: string;
  title: string;
  description: string;
  items: readonly ProofItem[];
  category: ProofCategory;
}

export default function ProofGallery({
  sectionId,
  eyebrow,
  title,
  description,
  items,
  category,
}: ProofGalleryProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const activeItem = useMemo(
    () => items.find((item) => item.id === selectedId) ?? null,
    [items, selectedId],
  );

  useEffect(() => {
    if (selectedId === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedId(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedId]);

  const isCredential = category === "credential";
  const sectionClassName = isCredential
    ? "mb-16"
    : "";
  const gridClassName = isCredential
    ? "grid gap-6 md:grid-cols-2 xl:grid-cols-3"
    : "grid gap-6 md:grid-cols-2";
  const sectionBadgeClassName = isCredential
    ? "border-brand-purple/12 bg-white/75 text-brand-purple dark:border-brand-yellow/15 dark:bg-white/5 dark:text-brand-yellow"
    : "border-brand-yellow/22 bg-brand-yellow/10 text-brand-yellow dark:border-brand-yellow/22 dark:bg-brand-yellow/10 dark:text-brand-yellow";
  const imageFrameClassName = isCredential
    ? "bg-white dark:bg-[#18131f]"
    : "bg-white dark:bg-[#16111d]";
  const openButtonText = isCredential ? "Open credential" : "Open poster";

  return (
    <>
      <section id={sectionId} className={sectionClassName}>
        <div className="mb-10 flex flex-col items-center text-center">
          <span
            className={`mb-4 inline-flex rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.24em] shadow-sm ${sectionBadgeClassName}`}
          >
            {eyebrow}
          </span>
          <h2 className="max-w-3xl text-3xl font-bold leading-tight text-brand-purple sm:text-4xl dark:text-white">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-300">
            {description}
          </p>
        </div>

        <div className={gridClassName}>
          {items.map((item, index) => (
            <article
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 70}
              className="motion-card overflow-hidden rounded-[1.75rem] border border-brand-purple/10 bg-white/80 p-3 shadow-lg transition hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_18px_50px_rgba(0,0,0,0.28)]"
            >
              <div className="mb-3 flex items-center justify-between gap-3 px-1 pt-1">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple/70 dark:text-brand-yellow/80">
                  {item.label}
                </p>
                <span className="rounded-full bg-brand-cream/70 px-3 py-1 text-[0.65rem] font-medium text-zinc-600 shadow-sm dark:bg-white/8 dark:text-zinc-300">
                  {isCredential ? "Verified" : "Real story"}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setSelectedId(item.id)}
                className={`motion-media block w-full overflow-hidden rounded-[1.25rem] border border-brand-purple/8 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition hover:border-brand-purple/20 dark:border-white/8 dark:hover:border-brand-yellow/20 ${imageFrameClassName}`}
                aria-label={`Open ${item.title}`}
              >
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 767px) 92vw, (max-width: 1279px) 44vw, 32rem"
                  className="motion-image h-auto w-full object-contain"
                />
              </button>

              <div className="px-2 pt-4 pb-2">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                  {item.subtitle}
                </p>
                <h3 className="text-xl font-semibold leading-snug text-brand-purple dark:text-white">
                  {item.title}
                </h3>
                {item.meta && (
                  <p className="mt-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    {item.meta}
                  </p>
                )}
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {item.description}
                </p>
                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setSelectedId(item.id)}
                    className="motion-button rounded-full border border-brand-purple/12 bg-white/80 px-3 py-1.5 text-xs font-semibold text-brand-purple shadow-sm hover:bg-white dark:border-brand-yellow/15 dark:bg-white/6 dark:text-brand-yellow dark:hover:bg-white/10"
                  >
                    {openButtonText}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {activeItem && (
        <div
          className="fixed inset-0 z-[90] bg-black/70 p-4 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={() => setSelectedId(null)}
        >
          <div
            className="mx-auto flex h-full w-full max-w-3xl items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative w-full rounded-[1.75rem] border border-white/15 bg-[#120d18] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.4)] sm:p-4">
              <button
                type="button"
                onClick={() => setSelectedId(null)}
                className="motion-button absolute top-3 right-3 z-10 rounded-full bg-black/55 p-2 text-white backdrop-blur hover:bg-black/70"
                aria-label="Close proof image"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>

              <div className="mb-4 pr-12 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
                  {activeItem.subtitle}
                </p>
                <h3 className="mt-2 text-2xl font-semibold leading-tight">
                  {activeItem.title}
                </h3>
                {activeItem.meta && (
                  <p className="mt-2 text-sm text-white/70">{activeItem.meta}</p>
                )}
              </div>

              <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/5">
                <Image
                  src={activeItem.imageSrc}
                  alt={activeItem.title}
                  width={activeItem.width}
                  height={activeItem.height}
                  sizes="(max-width: 767px) 94vw, 54rem"
                  className="h-auto max-h-[78vh] w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
