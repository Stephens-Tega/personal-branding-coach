"use client";

import Image from "next/image";

const previewImages = [
  {
    src: "/images/WhatsApp%20Image%202026-02-05%20at%2012.18.52%20PM.jpeg",
    alt: "Preview of the Clarity Blueprint guide cover",
  },
  {
    src: "/images/WhatsApp%20Image%202026-02-05%20at%2012.18.53%20PM.jpeg",
    alt: "Preview of an inside page from the Clarity Blueprint guide",
  },
] as const;

const blueprintBenefits = [
  {
    title: "Reconnect with your identity",
    description: "Come back to the woman you are beneath the pressure and noise.",
  },
  {
    title: "Understand purpose clearly",
    description: "See what matters most and why this season is asking something new of you.",
  },
  {
    title: "Gain direction for your next aligned step",
    description: "Move forward with practical clarity instead of guesswork or comparison.",
  },
] as const;

export default function ClarityBlueprint() {
  const cardClassName =
    "motion-card rounded-2xl border border-white/20 bg-white/10 p-8 text-white shadow-lg backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/15 hover:shadow-xl dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/15";

  return (
    <section
      id="clarity"
      className="relative overflow-hidden bg-linear-to-r from-brand-purple via-purple-700 to-[#2f1241] px-6 py-20 dark:from-[#2a1238] dark:via-brand-purple dark:to-[#100915]"
      data-aos="fade-right"
    >
      <div
        aria-hidden="true"
        className="gradient-orb pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-brand-yellow/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="gradient-orb gradient-orb-reverse pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-white/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <h2 className="mx-auto mb-6 max-w-4xl text-center font-bold leading-tight">
          <span className="mb-4 block bg-linear-to-r from-brand-yellow via-white to-brand-cream bg-clip-text text-sm font-semibold tracking-[0.24em] text-transparent md:text-base">
            HERE&apos;S MY GIFT FOR YOU:
          </span>
          <span className="block bg-linear-to-r from-brand-yellow via-white to-brand-cream bg-clip-text text-3xl text-transparent drop-shadow-md md:text-5xl">
            The Clarity Blueprint: A Step-by-Step Guide to Identity, Purpose,
            and Meaningful Living
          </span>
        </h2>

        <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-white/90">
          A free guided resource created to help you reset, hear yourself
          clearly, and take your next aligned step with confidence.
        </p>

        <div className="mb-10 flex flex-col items-center justify-center gap-4 py-2 md:flex-row md:gap-6">
          {previewImages.map((image, index) => (
            <div
              key={image.src}
              data-aos="fade-up"
              data-aos-delay={index * 90}
              className="motion-card motion-media rounded-3xl border border-white/20 bg-white/10 p-2 shadow-lg backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-40 w-44 overflow-hidden rounded-2xl md:h-52 md:w-60">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 11rem, 15rem"
                  className="motion-image object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <ul className="mb-12 grid gap-8 md:grid-cols-3" role="list">
          {blueprintBenefits.map((benefit, index) => (
            <li
              key={benefit.title}
              data-aos="fade-up"
              data-aos-delay={120 + index * 70}
              className={cardClassName}
            >
              <div className="flex items-start gap-3">
                <div
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-brand-purple"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m5 13 4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="mb-2 pt-1 text-lg font-semibold leading-snug">
                    {benefit.title}
                  </p>
                  <p className="text-sm leading-relaxed text-white/85">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p className="mb-12 text-center text-lg italic text-white/90">
          No pressure or noise. Just clarity.
        </p>

        <div className="flex justify-center">
          <a
            href="https://docs.google.com/forms/d/1aC0N8jywgx-Xvw6exwJpxlUr8NEmxYKy4p53pwjpwyI/viewform"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open the Clarity Blueprint form in a new tab"
            className="motion-button inline-block min-h-11 rounded-lg bg-brand-yellow px-10 py-3 text-lg font-bold text-brand-purple shadow-[0_16px_40px_rgba(248,213,28,0.18)] transition hover:bg-brand-yellow/90 md:py-4"
          >
            Get the Free Clarity Blueprint
          </a>
        </div>
      </div>
    </section>
  );
}
