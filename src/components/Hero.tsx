"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-linear-to-br from-brand-cream via-white to-brand-yellow/20 px-5 py-16 sm:px-6 sm:py-20 dark:bg-zinc-950"
      data-aos="fade-up"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden dark:block dark:bg-linear-to-br dark:from-zinc-950 dark:via-zinc-950 dark:to-brand-purple/15"
      />
      <div
        aria-hidden="true"
        className="gradient-orb pointer-events-none absolute -top-16 -left-12 h-80 w-80 rounded-full bg-brand-purple/12 blur-3xl dark:bg-brand-purple/20"
      />
      <div
        aria-hidden="true"
        className="gradient-orb gradient-orb-reverse pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-brand-yellow/18 blur-3xl dark:bg-brand-yellow/10"
      />

      <div className="landing-content-wide relative z-10">
        <div className="mb-16 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="mb-6 max-w-2xl text-4xl leading-tight font-bold text-[#221129] sm:text-5xl dark:text-white lg:text-6xl">
              You can look successful and still feel{" "}
              <span className="bg-linear-to-r from-[#381149] via-brand-purple to-[#9B5E00] bg-clip-text text-transparent dark:from-brand-yellow dark:via-[#ffe38a] dark:to-[#f7c83a]">
                lost
              </span>
              .
            </h1>

            <p className="mb-4 text-lg font-medium text-zinc-700 sm:text-xl dark:text-zinc-200">
              That doesn&apos;t mean you&apos;re failing, it means you&apos;re
              out of alignment.
            </p>

            <p className="mb-8 text-base leading-relaxed text-zinc-700 sm:text-lg dark:text-zinc-200">
              I am{" "}
              <span className="font-bold text-brand-purple dark:text-brand-yellow">
                Uju Ruth Stevens
              </span>
              , a Women&apos;s Identity &amp; Clarity Coach.
            </p>

            <p className="mb-8 text-base leading-relaxed text-zinc-700 sm:text-lg dark:text-zinc-200">
              I help women in transition rediscover their identity and rebuild
              their lives, relationships, and wealth within purpose, for legacy
              and generational impact.
            </p>

            <a
              href="#clarity"
              className="motion-button inline-block min-h-11 w-full rounded-lg bg-brand-purple px-8 py-3 text-center font-semibold text-white shadow-[0_16px_40px_rgba(81,12,102,0.18)] transition hover:bg-brand-purple/90 sm:w-auto md:py-4"
            >
              Start with clarity
            </a>
          </div>

          <div className="flex justify-center">
            <div className="motion-media relative w-full max-w-[18rem] overflow-hidden rounded-3xl shadow-2xl sm:max-w-sm">
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider() {
  const images = [
    "1000148404.jpg.jpeg",
    "1000148405.jpg.jpeg",
    "1000148407.jpg.jpeg",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-84 overflow-hidden bg-black/5 dark:bg-white/5 sm:h-80 md:h-96 lg:h-112">
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === index ? "opacity-100" : "opacity-0"}`}
        >
          <div className="relative h-full w-full">
            <Image
              src={`/images/${src}`}
              alt={`Portrait slide ${i + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 24rem"
              className={`motion-image object-cover transition-transform duration-1400 ease-out ${i === index ? "scale-100" : "scale-105"}`}
              priority={i === 0}
            />
          </div>
        </div>
      ))}

      <div className="absolute top-1/2 left-3 -translate-y-1/2">
        <button
          aria-label="Previous slide"
          onClick={() =>
            setIndex((currentIndex) =>
              (currentIndex - 1 + images.length) % images.length,
            )
          }
          className="motion-button flex min-h-11 min-w-11 items-center justify-center rounded-full bg-white/80 p-2 text-black shadow transition hover:bg-white dark:bg-zinc-900/80 dark:text-white dark:hover:bg-zinc-700 md:p-3"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
      </div>

      <div className="absolute top-1/2 right-3 -translate-y-1/2">
        <button
          aria-label="Next slide"
          onClick={() =>
            setIndex((currentIndex) => (currentIndex + 1) % images.length)
          }
          className="motion-button flex min-h-11 min-w-11 items-center justify-center rounded-full bg-white/80 p-2 text-black shadow transition hover:bg-white dark:bg-zinc-900/80 dark:text-white dark:hover:bg-zinc-700 md:p-3"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="m9 6 6 6-6 6" />
          </svg>
        </button>
      </div>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((image, i) => (
          <button
            key={image}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`motion-button h-2 w-2 rounded-full ${i === index ? "bg-white dark:bg-zinc-200" : "bg-white/60 dark:bg-zinc-600"}`}
          />
        ))}
      </div>
    </div>
  );
}
