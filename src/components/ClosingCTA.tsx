"use client";

interface ClosingCTAProps {
  waNumber: string;
}

export default function ClosingCTA({ waNumber }: ClosingCTAProps) {
  return (
    <section className="w-full bg-white px-6 py-20 dark:bg-[#120d18]" data-aos="fade-up">
      <div className="motion-card mx-auto max-w-4xl rounded-4xl border border-brand-purple/10 bg-brand-cream/60 px-8 py-12 text-center shadow-[0_24px_80px_rgba(81,12,102,0.08)] dark:border-white/10 dark:bg-white/5 dark:shadow-[0_24px_80px_rgba(0,0,0,0.32)]">
        <h2 className="mb-8 text-4xl font-bold text-brand-purple dark:text-brand-yellow">You don&apos;t need to have it all figured out.</h2>
        <p className="mb-12 text-2xl font-semibold text-zinc-700 dark:text-zinc-200">
          You only need clarity for your next step.
        </p>
        
        <p className="mb-12 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          When you&apos;re ready, this is a safe place to begin.
        </p>
        
        <a
          href={`https://wa.me/${waNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="motion-button inline-block min-h-11 rounded-lg bg-brand-purple px-12 py-3 text-lg font-bold text-white shadow-[0_16px_40px_rgba(81,12,102,0.18)] transition hover:bg-brand-purple/90 md:py-4"
        >
          Book a Free Clarity Session
        </a>
      </div>
    </section>
  );
}
