import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsAppFab from "../../components/WhatsAppFab";
import ProofGallery from "../../components/ProofGallery";
import {
  proofCredentials,
  proofTestimonials,
} from "../../data/proofContent";

export const metadata: Metadata = {
  title: "Proof | Women's Identity & Clarity Coach",
  description:
    "Credentials, certifications, and transformation stories that reinforce Uju Ruth Stevens' coaching credibility.",
};

const waNumber = "2348062501417";

export default function ProofPage() {
  return (
    <>
      <div className="page-enter flex min-h-screen flex-col text-foreground">
        <Header waNumber={waNumber} />

        <main className="flex-1 bg-zinc-50 dark:bg-[#0b0810]">
          <div className="landing-content-wide px-5 pt-6 sm:px-6 sm:pt-8">
            <Link
              href="/"
              className="motion-button inline-flex min-h-11 items-center gap-2 rounded-full border border-brand-purple/12 bg-white/80 px-4 py-2 text-sm font-semibold text-brand-purple shadow-sm hover:bg-white dark:border-brand-yellow/15 dark:bg-white/5 dark:text-brand-yellow dark:hover:bg-white/10"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to Home
            </Link>
          </div>

          <section className="relative overflow-hidden px-5 py-16 sm:px-6 sm:py-20">
            <div
              aria-hidden="true"
              className="gradient-orb pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-brand-purple/10 blur-3xl dark:bg-brand-purple/18"
            />
            <div
              aria-hidden="true"
              className="gradient-orb gradient-orb-reverse pointer-events-none absolute right-0 top-24 h-64 w-64 rounded-full bg-brand-yellow/12 blur-3xl dark:bg-brand-yellow/10"
            />

            <div className="landing-content-wide relative">
              <span className="mb-5 inline-flex rounded-full border border-brand-purple/12 bg-white/80 px-5 py-2.5 text-sm font-semibold tracking-[0.24em] text-brand-purple shadow-sm dark:border-brand-yellow/15 dark:bg-white/5 dark:text-brand-yellow">
                PROOF
              </span>

              <h1 className="max-w-4xl text-5xl font-bold leading-tight text-brand-purple sm:text-6xl dark:text-white">
                Proof of training, credibility, and the transformation stories
                behind the work.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
                This page gathers both professional credentials and real client
                transformation posters so visitors can see the depth behind the
                coaching, clarity work, and mentorship journey.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="rounded-full border border-brand-purple/12 bg-white/80 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
                  3 credentials
                </div>
                <div className="rounded-full border border-brand-yellow/18 bg-brand-yellow/10 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm dark:border-brand-yellow/25 dark:bg-brand-yellow/10 dark:text-zinc-100">
                  4 transformation posters
                </div>
              </div>
            </div>
          </section>

          <div className="landing-content-wide px-5 pb-20 sm:px-6">
            <ProofGallery
              sectionId="credentials"
              eyebrow="CREDENTIALS"
              title="Training and certifications that reinforce the work"
              description="These credentials help establish the professional development, leadership training, and coaching foundations behind the guidance offered on this site."
              items={proofCredentials}
              category="credential"
            />

            <ProofGallery
              sectionId="testimonials"
              eyebrow="TRANSFORMATION STORIES"
              title="Poster-style stories from women who found clarity"
              description="These poster testimonials capture how women describe the clarity, confidence, direction, and message refinement they experienced through the work."
              items={proofTestimonials}
              category="testimonial"
            />

            <section className="motion-card mt-16 rounded-[2rem] border border-brand-purple/10 bg-white px-6 py-10 text-center shadow-[0_24px_80px_rgba(81,12,102,0.08)] dark:border-white/10 dark:bg-white/5 dark:shadow-[0_24px_80px_rgba(0,0,0,0.34)] sm:px-8">
              <h2 className="text-3xl font-bold text-brand-purple dark:text-brand-yellow">
                Ready to move from proof to your own next step?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
                If this work resonates with you, start with the Clarity
                Blueprint or reach out directly for a conversation.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/#clarity"
                  className="motion-button inline-flex min-h-11 items-center justify-center rounded-lg bg-brand-purple px-6 py-3 font-semibold text-white shadow-[0_16px_40px_rgba(81,12,102,0.18)] transition hover:bg-brand-purple/90"
                >
                  Start with the Clarity Blueprint
                </Link>
                <Link
                  href="/#contact"
                  className="motion-button inline-flex min-h-11 items-center justify-center rounded-lg border border-brand-purple/15 bg-white px-6 py-3 font-semibold text-brand-purple transition hover:bg-brand-cream/70 dark:border-brand-yellow/20 dark:bg-white/5 dark:text-brand-yellow dark:hover:bg-white/10"
                >
                  Contact Uju
                </Link>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>

      <WhatsAppFab waNumber={waNumber} />
    </>
  );
}
