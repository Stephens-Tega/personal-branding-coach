"use client";

import { useEffect, useState } from "react";

interface HeroProps {
  waNumber: string;
}

export default function Hero({ waNumber }: HeroProps) {
  return (
    <section className="w-full py-20 px-6 bg-linear-to-br from-brand-cream via-white to-brand-cream">
      <div className="max-w-7xl mx-auto">
        {/* Main Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Text Content */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-brand-purple mb-6 leading-tight">
              You can look successful and still feel lost.
            </h1>
            <p className="text-xl text-zinc-700 mb-4 font-medium">
              That doesn't mean you're failing, it means you're out of alignment.
            </p>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              I'm <span className="font-bold text-brand-purple">A. Uju Ruth Stevens</span>, a Women's Identity & Clarity Coach.
            </p>
            <p className="text-lg text-zinc-700 mb-8 leading-relaxed">
              I help women in transitioning and rediscovering their identity and rebuild their lives, relationships, and wealth within purpose, for legacy and generational impact.
            </p>
            <a href="#clarity" className="bg-brand-purple text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition inline-block">
              Start with clarity
            </a>
          </div>

          {/* Right: Image slider */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl relative">
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
    const t = setInterval(() => setIndex((i) => (i + 1) % images.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative bg-black/5 h-72 sm:h-80 md:h-96 lg:h-112 overflow-hidden">
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${i === index ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={`/images/${src}`}
            alt={`Slide ${i + 1}`}
            className="max-w-full max-h-full"
          />
        </div>
      ))}

      <div className="absolute left-3 top-1/2 -translate-y-1/2">
        <button
          aria-label="Previous slide"
          onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
          className="bg-white/80 p-2 rounded-full shadow hover:bg-white"
        >
          ‹
        </button>
      </div>

      <div className="absolute right-3 top-1/2 -translate-y-1/2">
        <button
          aria-label="Next slide"
          onClick={() => setIndex((i) => (i + 1) % images.length)}
          className="bg-white/80 p-2 rounded-full shadow hover:bg-white"
        >
          ›
        </button>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full ${i === index ? "bg-white" : "bg-white/60"}`}
          />
        ))}
      </div>
    </div>
  );
}
