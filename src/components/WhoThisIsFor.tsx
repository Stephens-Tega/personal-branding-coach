"use client";

export default function WhoThisIsFor() {
  return (
    <section className="w-full py-20 px-6 bg-brand-cream">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-brand-purple mb-12 text-center">WHO THIS IS FOR</h2>
        
        <p className="text-xl text-zinc-700 mb-10 text-center">
          This space is for women, single or married, who:
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl p-8 border-l-4 border-brand-purple">
            <p className="text-lg text-zinc-700">
              <span className="font-bold text-brand-purple">•</span> Feel lost or frustrated despite outward success
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 border-l-4 border-brand-purple">
            <p className="text-lg text-zinc-700">
              <span className="font-bold text-brand-purple">•</span> Are navigating life transitions
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 border-l-4 border-brand-purple">
            <p className="text-lg text-zinc-700">
              <span className="font-bold text-brand-purple">•</span> Sense there is more within them
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 border-l-4 border-brand-purple">
            <p className="text-lg text-zinc-700">
              <span className="font-bold text-brand-purple">•</span> Want to make aligned decisions in life and relationships
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 border-l-4 border-brand-purple md:col-span-2">
            <p className="text-lg text-zinc-700">
              <span className="font-bold text-brand-purple">•</span> Desire clarity without pressure or comparison
            </p>
          </div>
        </div>
        
        <p className="text-center text-xl font-semibold text-brand-purple italic">
          If you're here, your heart already knows why.
        </p>
      </div>
    </section>
  );
}
