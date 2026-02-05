"use client";

export default function SocialProofs() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-brand-purple mb-12 text-center">SOCIAL PROOFS</h2>
        
        <p className="text-xl text-zinc-600 text-center mb-16">
          Here are transformational stories from women who've walked this clarity journey.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="bg-brand-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="w-full h-80 overflow-hidden rounded-t-2xl bg-zinc-300">
                <picture className="w-full h-full block">
                  <source srcSet={`/images/testimonial-${index}.jpg`} type="image/jpeg" />
                  <img src={`/images/testimonial-${index}.svg`} alt={`Testimonial ${index}`} className="w-full h-full" />
                </picture>
              </div>
              <div className="p-6">
                <p className="text-zinc-700 italic mb-4">
                  "Their story of clarity and transformation will inspire your journey."
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
