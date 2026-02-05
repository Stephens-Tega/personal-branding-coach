"use client";

export default function WorkWithMe() {
  return (
    <section className="w-full py-20 px-6 bg-brand-cream">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-brand-purple mb-16 text-center">WAYS TO WORK WITH ME</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Free Clarity Session */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-brand-purple">
            <h3 className="text-2xl font-bold text-brand-purple mb-4">Free 30-Minute Clarity Session</h3>
            <p className="text-zinc-700 mb-6">
              An eye-opening session for women who feel lost or stuck.
            </p>
            <a href="#contact" className="w-full inline-block text-center bg-brand-purple text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
              Book Free Session
            </a>
          </div>
          
          {/* BrandHer Program */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-brand-yellow">
            <h3 className="text-2xl font-bold text-brand-purple mb-4">BrandHer Home Mentorship</h3>
            <p className="text-zinc-700 mb-6">
              A signature coaching journey (group or one-on-one) where I walk women back to who they are and help them build legacy-rooted lives and brands.
            </p>
            <a href="#clarity" className="w-full inline-block text-center bg-brand-purple text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
              Learn More
            </a>
          </div>
          
          {/* WGS Community */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border-t-4 border-brand-purple">
            <h3 className="text-2xl font-bold text-brand-purple mb-4">Women on Global Stages (WGS)</h3>
            <p className="text-zinc-700 mb-6">
              A global community where women grow in confidence, clarity, and voice.
            </p>
            <a
              href="https://chat.whatsapp.com/JuvcuZjNA5LGuldgI98u1w?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-block text-center bg-brand-purple text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
            >
              Join Community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
