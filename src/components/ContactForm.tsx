"use client";

import { useEffect, useRef, useState } from "react";
import SocialLinks from "./SocialLinks";
import Spinner from "./Spinner";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [emailStatus, setEmailStatus] = useState<null | { emailed: boolean; error?: string }>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const inputBaseClasses =
    "w-full rounded-lg border px-4 py-3 text-zinc-900 placeholder-zinc-500 transition focus:outline-none focus:ring-2 md:py-2 dark:text-white dark:placeholder-zinc-400";
  const inputDefaultClasses =
    "border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-brand-purple dark:border-white/10 dark:bg-white/5 dark:focus:bg-white/10 dark:focus:ring-brand-yellow";
  const inputErrorClasses =
    "border-red-300 bg-red-50 text-red-950 focus:ring-red-500 dark:border-red-900 dark:bg-red-950/30 dark:text-white";

  const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  useEffect(() => {
    if (submitted && successRef.current) {
      setTimeout(() => {
        successRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 100);
    }
  }, [submitted]);

  const validateField = (field: string, value: string) => {
    const newErrors = { ...errors };

    if (field === "name") {
      if (!value.trim()) newErrors.name = "Name is required";
      else if (value.trim().length < 2) newErrors.name = "Name must be at least 2 characters";
      else delete newErrors.name;
    } else if (field === "email") {
      if (!value.trim()) newErrors.email = "Email is required";
      else if (!validateEmail(value)) newErrors.email = "Please enter a valid email";
      else delete newErrors.email;
    } else if (field === "message") {
      if (!value.trim()) newErrors.message = "Message is required";
      else if (value.trim().length < 10) newErrors.message = "Message must be at least 10 characters";
      else delete newErrors.message;
    }

    setErrors(newErrors);
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    validateField("name", name);
    validateField("email", email);
    validateField("message", message);

    if (Object.keys(errors).length > 0 || !name || !email || !message) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data?.error || "Submit failed");

      setSubmitted(true);
      setEmailStatus({
        emailed: !!data.emailed,
        error: data?.error || data?.errorMessage || null,
      });
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
      setTimeout(() => setSubmitted(false), 8000);
    } catch {
      setSubmitted(true);
      setEmailStatus({
        emailed: false,
        error: "Failed to submit. Please try again.",
      });
      setTimeout(() => setSubmitted(false), 8000);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="w-full bg-zinc-50 px-6 py-20 dark:bg-[#0c0911]"
      data-aos="fade-up"
    >
      <div className="mx-auto max-w-3xl">
        <div className="motion-card rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl dark:border-white/10 dark:bg-[rgba(18,14,26,0.86)] dark:shadow-[0_24px_90px_rgba(0,0,0,0.45)]">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-brand-purple dark:text-brand-yellow">
              Get in touch
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              Have a question or want to collaborate? I&apos;d love to hear from you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    validateField("name", e.target.value);
                  }}
                  placeholder="Your Name"
                  className={`${inputBaseClasses} ${errors.name ? inputErrorClasses : inputDefaultClasses}`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validateField("email", e.target.value);
                  }}
                  placeholder="Your Email"
                  className={`${inputBaseClasses} ${errors.email ? inputErrorClasses : inputDefaultClasses}`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                required
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  validateField("message", e.target.value);
                }}
                placeholder="Your Message"
                rows={6}
                className={`${inputBaseClasses} resize-none ${errors.message ? inputErrorClasses : inputDefaultClasses}`}
              />
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="motion-button flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-brand-purple px-6 py-3 font-semibold text-white shadow-[0_16px_40px_rgba(81,12,102,0.18)] transition hover:bg-brand-purple/90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Spinner size="sm" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>

            <div className="mt-4">
              <div className="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
                Or connect with me on social media:
              </div>
              <SocialLinks
                links={[
                  {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/ujuruthstevens",
                    icon: "linkedin" as const,
                  },
                  {
                    name: "Facebook",
                    url: "https://www.facebook.com/share/14VMKrM2Ncf/",
                    icon: "facebook" as const,
                  },
                  {
                    name: "YouTube",
                    url: "https://www.youtube.com/@UjuRuthStevens",
                    icon: "youtube" as const,
                  },
                  {
                    name: "TikTok",
                    url: "https://tiktok.com/@ujuruthstevens",
                    icon: "tiktok" as const,
                  },
                ]}
              />
            </div>
          </form>

          {submitted && emailStatus?.emailed && (
            <div
              ref={successRef}
              className="motion-card mt-4 rounded-lg border-2 border-green-300 bg-green-50 p-5 text-sm text-green-700 shadow-md animate-in fade-in slide-in-from-bottom duration-500 dark:border-green-800 dark:bg-green-950/30 dark:text-green-300"
            >
              <div className="flex items-start gap-3">
                <span className="text-lg font-bold">OK</span>
                <div>
                  <p className="text-base font-bold">Message sent successfully!</p>
                  <p className="mt-2 text-xs">
                    A confirmation email has been sent to <strong>{email}</strong>. I&apos;ll get back to you soon.
                  </p>
                </div>
              </div>
            </div>
          )}

          {submitted && emailStatus && !emailStatus.emailed && (
            <div
              ref={successRef}
              className="motion-card mt-4 rounded-lg border-2 border-red-300 bg-red-50 p-5 text-sm text-red-700 shadow-md animate-in fade-in slide-in-from-bottom duration-500 dark:border-red-900 dark:bg-red-950/30 dark:text-red-300"
            >
              <div className="flex items-start gap-3">
                <span className="text-lg font-bold">X</span>
                <div>
                  <p className="text-base font-bold">Email delivery failed</p>
                  <p className="mt-2 text-xs">
                    Please try again or contact me directly on WhatsApp for immediate assistance.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
