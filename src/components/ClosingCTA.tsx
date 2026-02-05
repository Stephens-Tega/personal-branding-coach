"use client";

interface ClosingCTAProps {
  waNumber: string;
}

export default function ClosingCTA({ waNumber }: ClosingCTAProps) {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-brand-purple mb-8">You don't need to have it all figured out.</h2>
        <p className="text-2xl font-semibold text-zinc-700 mb-12">
          You only need clarity for your next step.
        </p>
        
        <p className="text-lg text-zinc-600 mb-12 leading-relaxed">
          When you're ready, this is a safe place to begin.
        </p>
        
        <a
          href={`https://wa.me/${waNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-purple text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition"
        >
          Book a Free Clarity Session
        </a>
      </div>
    </section>
  );
}
