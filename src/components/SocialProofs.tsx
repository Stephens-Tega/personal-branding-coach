"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

const testimonialImages = [
  { id: 1, label: "Testimonial 01" },
  { id: 2, label: "Testimonial 02" },
  { id: 3, label: "Testimonial 03" },
  { id: 4, label: "Testimonial 04" },
] as const;

export default function SocialProofs() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(
    null,
  );
  const activeTestimonial = useMemo(
    () =>
      testimonialImages.find(
        (testimonial) => testimonial.id === selectedTestimonial,
      ) ?? null,
    [selectedTestimonial],
  );

  useEffect(() => {
    if (selectedTestimonial === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedTestimonial(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedTestimonial]);

  return (
    <>
      <section
        className="w-full bg-white px-5 py-16 sm:px-6 sm:py-20 dark:bg-[#0d0912]"
        data-aos="fade-up"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col items-center text-center">
            <span className="mb-4 inline-flex rounded-full border border-brand-purple/12 bg-brand-cream/70 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-brand-purple shadow-sm dark:border-brand-yellow/15 dark:bg-white/5 dark:text-brand-yellow">
              SOCIAL PROOFS
            </span>
            <h2 className="max-w-3xl text-3xl font-bold leading-tight text-brand-purple sm:text-4xl dark:text-brand-yellow">
              Real women. Real clarity. Real transformation.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-300">
              These stories are shared as full testimonial posters, so each one
              opens larger when you tap or click it.
            </p>
          </div>

        <div className="grid justify-items-center gap-6 md:grid-cols-2">
          {testimonialImages.map((testimonial, index) => (
              <article
                key={testimonial.id}
                data-aos="fade-up"
                data-aos-delay={index * 70}
                className="motion-card w-full max-w-[20.5rem] overflow-hidden rounded-[1.75rem] border border-brand-purple/10 bg-brand-cream/75 p-3 shadow-lg transition hover:shadow-xl sm:max-w-[22.5rem] dark:border-white/10 dark:bg-white/5 dark:shadow-[0_18px_50px_rgba(0,0,0,0.28)]"
              >
                <div className="mb-3 flex items-center justify-between gap-3 px-1 pt-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-purple/70 dark:text-brand-yellow/80">
                    {testimonial.label}
                  </p>
                  <span className="rounded-full bg-white/70 px-3 py-1 text-[0.65rem] font-medium text-zinc-600 shadow-sm dark:bg-white/8 dark:text-zinc-300">
                    Tap to expand
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedTestimonial(testimonial.id)}
                  className="motion-media block w-full overflow-hidden rounded-[1.25rem] border border-brand-purple/8 bg-white/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition hover:border-brand-purple/20 dark:border-white/8 dark:bg-[#16111d] dark:hover:border-brand-yellow/20"
                  aria-label={`Open ${testimonial.label}`}
                >
                  <Image
                    src={`/images/testimonial-${testimonial.id}.jpg`}
                    alt={testimonial.label}
                    width={707}
                    height={1000}
                    sizes="(max-width: 767px) 92vw, (max-width: 1279px) 44vw, 32rem"
                    className="motion-image h-auto w-full object-contain"
                  />
                </button>

                <div className="flex items-center justify-between gap-3 px-2 pt-4 pb-1 text-sm">
                  <p className="text-zinc-600 dark:text-zinc-300">
                    Open the full poster to read it more comfortably.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedTestimonial(testimonial.id)}
                    className="motion-button shrink-0 rounded-full border border-brand-purple/12 bg-white/75 px-3 py-1.5 text-xs font-semibold text-brand-purple shadow-sm hover:bg-white dark:border-brand-yellow/15 dark:bg-white/6 dark:text-brand-yellow dark:hover:bg-white/10"
                  >
                    View
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {activeTestimonial && (
        <div
          className="fixed inset-0 z-[80] bg-black/70 p-4 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={activeTestimonial.label}
          onClick={() => setSelectedTestimonial(null)}
        >
          <div
            className="mx-auto flex h-full w-full max-w-2xl items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative w-full rounded-[1.75rem] border border-white/15 bg-[#120d18] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.4)] sm:p-4">
              <button
                type="button"
                onClick={() => setSelectedTestimonial(null)}
                className="motion-button absolute top-3 right-3 z-10 rounded-full bg-black/55 p-2 text-white backdrop-blur hover:bg-black/70"
                aria-label="Close testimonial"
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

              <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/5">
                <Image
                  src={`/images/testimonial-${activeTestimonial.id}.jpg`}
                  alt={activeTestimonial.label}
                  width={707}
                  height={1000}
                  sizes="(max-width: 767px) 94vw, 42rem"
                  className="h-auto max-h-[84vh] w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
