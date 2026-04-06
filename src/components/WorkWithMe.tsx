"use client";

export default function WorkWithMe() {
  const cardClassName =
    "motion-card rounded-2xl bg-white/80 p-8 shadow-lg transition hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_18px_50px_rgba(0,0,0,0.28)]";

  return (
    <section
      id="work"
      className="w-full bg-brand-cream px-6 py-20 dark:bg-[#0f0b14]"
      data-aos="fade-up"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-16 text-center text-4xl font-bold text-brand-purple dark:text-brand-yellow">
          WAYS TO WORK WITH ME
        </h2>

        <div className="mb-12 grid gap-8 md:grid-cols-3">
          <div data-aos="fade-up" data-aos-delay={40} className={`${cardClassName} border border-brand-purple/10 border-t-4 border-t-brand-purple`}>
            <h3 className="mb-4 text-2xl font-bold text-brand-purple dark:text-brand-yellow">
              Free 30-Minute Clarity Session
            </h3>
            <p className="mb-6 text-zinc-700 dark:text-zinc-200">
              An eye-opening session for women who feel lost or stuck.
            </p>
            <a
              href="#contact"
              className="motion-button inline-block w-full rounded-lg bg-brand-purple py-3 text-center font-semibold text-white transition hover:bg-brand-purple/90"
            >
              Book Free Session
            </a>
          </div>

          <div data-aos="fade-up" data-aos-delay={110} className={`${cardClassName} border border-brand-yellow/20 border-t-4 border-t-brand-yellow`}>
            <h3 className="mb-4 text-2xl font-bold text-brand-purple dark:text-brand-yellow">
              BrandHer Home Mentorship
            </h3>
            <p className="mb-6 text-zinc-700 dark:text-zinc-200">
              A signature coaching journey (group or one-on-one) where I walk
              women back to who they are and help them build legacy-rooted
              lives and brands.
            </p>
            <a
              href="https://wa.me/2348062501417?text=Hello%20I%20am%20interested%20in%20the%20BrandHer%20program"
              target="_blank"
              rel="noopener noreferrer"
              className="motion-button inline-block w-full rounded-lg bg-brand-purple py-3 text-center font-semibold text-white transition hover:bg-brand-purple/90"
            >
              Learn More
            </a>
          </div>

          <div data-aos="fade-up" data-aos-delay={180} className={`${cardClassName} border border-brand-purple/10 border-t-4 border-t-brand-purple`}>
            <h3 className="mb-4 text-2xl font-bold text-brand-purple dark:text-brand-yellow">
              Women on Global Stages (WGS)
            </h3>
            <p className="mb-6 text-zinc-700 dark:text-zinc-200">
              A global community where women grow in confidence, clarity, and
              voice.
            </p>
            <a
              href="https://chat.whatsapp.com/JuvcuZjNA5LGuldgI98u1w?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="motion-button inline-block min-h-11 w-full rounded-lg bg-brand-purple py-3 text-center font-semibold text-white transition hover:bg-brand-purple/90 md:py-4"
            >
              Join Community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
