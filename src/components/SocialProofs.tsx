"use client";

import Link from "next/link";
import Image from "next/image";
import { proofPreviewItems } from "../data/proofContent";

export default function SocialProofs() {
  return (
    <section
      className="w-full bg-white px-5 py-16 sm:px-6 sm:py-20 dark:bg-[#0d0912]"
      data-aos="fade-up"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="mb-4 inline-flex rounded-full border border-brand-purple/12 bg-brand-cream/70 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-brand-purple shadow-sm dark:border-brand-yellow/15 dark:bg-white/5 dark:text-brand-yellow">
            PROOF &amp; CREDENTIALS
          </span>
          <h2 className="max-w-3xl text-3xl font-bold leading-tight text-brand-purple sm:text-4xl dark:text-brand-yellow">
            Training, certifications, and transformation stories in one place.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-300">
            Here is a preview of the credibility behind the work. Explore the
            dedicated proof page to see the full credentials and testimonial
            posters.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {proofPreviewItems.map((item, index) => {
            const href =
              item.category === "credential"
                ? "/proof#credentials"
                : "/proof#testimonials";

            return (
              <Link
                key={item.id}
                href={href}
                data-aos="fade-up"
                data-aos-delay={index * 70}
                className="motion-card group overflow-hidden rounded-[1.5rem] border border-brand-purple/10 bg-brand-cream/70 p-3 shadow-lg transition hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_18px_50px_rgba(0,0,0,0.28)]"
              >
                <div className="mb-3 flex items-center justify-between gap-3 px-1 pt-1">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-brand-purple/70 dark:text-brand-yellow/80">
                    {item.category === "credential"
                      ? "Credential"
                      : "Transformation"}
                  </p>
                  <span className="rounded-full bg-white/70 px-3 py-1 text-[0.65rem] font-medium text-zinc-600 shadow-sm dark:bg-white/8 dark:text-zinc-300">
                    View proof
                  </span>
                </div>

                <div className="motion-media overflow-hidden rounded-[1.15rem] border border-brand-purple/8 bg-white/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] dark:border-white/8 dark:bg-[#16111d]">
                  <div className="flex h-56 items-center justify-center p-3">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      width={item.width}
                      height={item.height}
                      sizes="(max-width: 767px) 88vw, (max-width: 1279px) 44vw, 18rem"
                      className="motion-image max-h-full w-auto object-contain"
                    />
                  </div>
                </div>

                <div className="px-2 pt-4 pb-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                    {item.subtitle}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-brand-purple dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/proof"
            className="motion-button inline-flex min-h-11 items-center justify-center rounded-lg bg-brand-purple px-8 py-3 font-semibold text-white shadow-[0_16px_40px_rgba(81,12,102,0.18)] transition hover:bg-brand-purple/90"
          >
            View All Proof
          </Link>
        </div>
      </div>
    </section>
  );
}
