"use client";

const audienceItems = [
  {
    title: "Outwardly successful, inwardly disconnected",
    description:
      "You feel lost or frustrated even though your life looks fine from the outside.",
  },
  {
    title: "Walking through a major transition",
    description:
      "You are navigating change in your identity, relationships, work, or direction.",
  },
  {
    title: "Aware there is more within you",
    description:
      "You sense there is more in you, but you need space and clarity to name it well.",
  },
  {
    title: "Ready to make aligned decisions",
    description:
      "You want to move with intention in life and relationships instead of reacting to pressure.",
  },
  {
    title: "Tired of noise, pressure, and comparison",
    description:
      "You want honest clarity without pretending, performing, or forcing your next step.",
  },
] as const;

export default function WhoThisIsFor() {
  const cardClassName =
    "motion-card group rounded-3xl border border-brand-purple/12 bg-white/88 p-7 shadow-[0_22px_60px_rgba(34,20,41,0.08)] backdrop-blur-sm transition hover:border-brand-purple/20 hover:shadow-[0_28px_70px_rgba(34,20,41,0.12)] dark:border-white/10 dark:bg-[rgba(18,14,25,0.88)] dark:shadow-[0_22px_60px_rgba(0,0,0,0.34)] dark:hover:border-brand-yellow/25 dark:hover:bg-[rgba(22,18,31,0.94)]";
  const numberBadgeClassName =
    "relative flex h-14 w-14 shrink-0 flex-col items-center justify-center overflow-hidden rounded-[1.15rem] border border-brand-purple/15 bg-white/85 shadow-[0_12px_30px_rgba(81,12,102,0.14)] transition duration-300 group-hover:-translate-y-0.5 group-hover:rotate-2 dark:border-brand-yellow/20 dark:bg-white/6 dark:shadow-[0_14px_34px_rgba(0,0,0,0.35)]";
  const numberDividerClassName =
    "h-px flex-1 bg-linear-to-r from-brand-purple/60 to-transparent dark:from-brand-yellow/55";

  return (
    <section
      className="relative overflow-hidden bg-brand-cream px-6 py-20 dark:bg-[#0f0a15] dark:text-zinc-100"
      data-aos="fade-up"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-linear-to-b from-white/70 via-white/20 to-transparent dark:from-brand-purple/15 dark:via-brand-purple/6"
      />
      <div
        aria-hidden="true"
        className="gradient-orb pointer-events-none absolute -left-10 top-20 h-56 w-56 rounded-full bg-brand-purple/10 blur-3xl dark:bg-brand-purple/24"
      />
      <div
        aria-hidden="true"
        className="gradient-orb gradient-orb-reverse pointer-events-none absolute right-0 bottom-0 h-64 w-64 rounded-full bg-brand-yellow/12 blur-3xl dark:bg-brand-yellow/10"
      />

      <div className="landing-content-medium relative">
        <div className="mb-14 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end">
          <div data-aos="fade-right">
            <span className="mb-5 inline-flex rounded-full border border-brand-purple/12 bg-white/70 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-brand-purple shadow-sm dark:border-brand-yellow/15 dark:bg-white/5 dark:text-brand-yellow">
              WHO THIS IS FOR
            </span>

            <h2 className="max-w-3xl text-4xl font-bold leading-tight text-brand-purple dark:text-white md:text-5xl">
              This is for the woman who knows something deeper needs to align.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-200">
              This space is for women, single or married, who are ready to
              come back to themselves, hear clearly again, and move forward
              from conviction instead of confusion.
            </p>
          </div>

          <div
            data-aos="fade-left"
            className="motion-card rounded-3xl border border-brand-yellow/20 bg-white/72 p-7 shadow-[0_20px_60px_rgba(81,12,102,0.08)] backdrop-blur-sm dark:border-brand-yellow/18 dark:bg-white/6 dark:shadow-[0_20px_60px_rgba(0,0,0,0.32)]"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-purple/70 dark:text-brand-yellow/85">
              A gentle truth
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-100">
              You do not need more noise. You need the kind of clarity that
              helps you name what is true, release what is heavy, and respond
              to this season with peace.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {audienceItems.map((item, index) => (
            <article
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 75}
              className={`${cardClassName} ${index === audienceItems.length - 1 ? "md:col-span-2" : ""}`}
            >
              <div className="mb-5 flex items-center gap-4">
                <div className={numberBadgeClassName}>
                  <div
                    aria-hidden="true"
                    className="absolute inset-1.25 rounded-[0.95rem] bg-linear-to-br from-brand-purple via-[#6d1887] to-[#2f1241] dark:from-brand-yellow/18 dark:via-brand-yellow/10 dark:to-brand-purple/35"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-brand-yellow/90 shadow-[0_0_12px_rgba(248,213,28,0.75)] dark:bg-brand-yellow"
                  />
                  <span className="relative text-[0.52rem] font-semibold uppercase tracking-[0.18em] text-white/70 dark:text-brand-yellow/70">
                    No.
                  </span>
                  <span className="relative text-base font-bold leading-none text-white dark:text-brand-yellow">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div aria-hidden="true" className={numberDividerClassName} />
              </div>

              <h3 className="mb-3 text-xl font-semibold leading-snug text-brand-purple dark:text-white">
                {item.title}
              </h3>

              <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-200">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay={260}
          className="motion-card mx-auto mt-10 max-w-3xl rounded-3xl border border-brand-purple/12 bg-white/82 p-8 text-center shadow-[0_20px_60px_rgba(81,12,102,0.08)] backdrop-blur-sm dark:border-white/10 dark:bg-[rgba(20,16,28,0.88)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.36)]"
        >
          <p className="text-xl font-semibold italic text-brand-purple dark:text-brand-yellow">
            If you&apos;re here, your heart already knows why.
          </p>
        </div>
      </div>
    </section>
  );
}
