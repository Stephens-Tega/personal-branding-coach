"use client";

export default function MyStory() {
  return (
    <section
      id="story"
      className="relative isolate w-full bg-cover bg-center px-6 py-20"
      style={{ backgroundImage: "url('/images/1000148420.jpg.jpeg')" }}
      data-aos="fade-left"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-white/20 dark:bg-zinc-950/60"
      />

      <div className="landing-content-medium relative">
        <div className="motion-card rounded-3xl border border-white/60 bg-white/80 p-8 shadow-[0_24px_80px_rgba(17,12,24,0.18)] backdrop-blur-sm dark:border-white/10 dark:bg-[rgba(18,14,26,0.84)] dark:shadow-[0_24px_90px_rgba(0,0,0,0.45)]">
          <h2 className="mb-12 text-center text-4xl font-bold text-brand-purple dark:text-brand-yellow">
            MY STORY
          </h2>

          <div className="space-y-8 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            <p>
              The vision to help women discover who they are was planted in my
              heart in 2008.
            </p>

            <p>But life happened.</p>

            <p>
              Responsibilities, expectations, and challenges slowly pulled me
              away from myself. I looked accomplished on the outside, yet
              inside I felt disconnected, unfulfilled, and unsure of who I
              truly was.
            </p>

            <p>
              Through lived experiences, faith, and intentional realignment, I
              found my way back to clarity and identity.
            </p>

            <p>
              Along that journey, women kept coming to me informally. They
              shared their confusion, their marriages, their transitions, their
              questions. And clarity followed our conversations.
            </p>

            <p>In 2024, I fully aligned with this calling.</p>

            <p className="text-xl font-semibold text-brand-purple dark:text-brand-yellow">
              Today, I don&apos;t help women from theory or textbooks.
            </p>

            <p className="text-xl font-semibold text-brand-purple dark:text-brand-yellow">
              I guide them from lived experience, spiritual alignment, and
              proven clarity framework.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
