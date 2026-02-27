"use client";

import { useState, useRef, useEffect } from "react";
import SocialLinks from "./SocialLinks";
import Spinner from "./Spinner";

export default function ContactForm({ waNumber }: { waNumber: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [emailStatus, setEmailStatus] = useState<null | { emailed: boolean; error?: string }>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Auto-scroll to success message
  useEffect(() => {
    if (submitted && successRef.current) {
      setTimeout(() => {
        successRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Submit failed');
      setSubmitted(true);
      setEmailStatus({ emailed: !!data.emailed, error: data?.error || data?.errorMessage || null });
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
      setTimeout(() => setSubmitted(false), 8000);
    } catch (err) {
      setSubmitted(true);
      setEmailStatus({ emailed: false, error: 'Failed to submit. Please try again.' });
      setTimeout(() => setSubmitted(false), 8000);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="w-full" data-aos="fade-up">
      <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-zinc-100">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-brand-purple">Get in touch</h3>
          <p className="text-sm text-zinc-600">Have a question or want to collaborate? I'd love to hear from you.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="sr-only" htmlFor="name">Name</label>
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
                className={`w-full px-4 py-3 md:py-2 rounded-lg border text-black placeholder-zinc-500 focus:outline-none focus:ring-2 transition ${
                  errors.name
                    ? "border-red-300 bg-red-50 focus:ring-red-500"
                    : "border-zinc-200 bg-zinc-50 focus:ring-brand-purple focus:bg-white"
                }`}
              />
              {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="sr-only" htmlFor="email">Email</label>
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
                className={`w-full px-4 py-3 md:py-2 rounded-lg border text-black placeholder-zinc-500 focus:outline-none focus:ring-2 transition ${
                  errors.email
                    ? "border-red-300 bg-red-50 focus:ring-red-500"
                    : "border-zinc-200 bg-zinc-50 focus:ring-brand-purple focus:bg-white"
                }`}
              />
              {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label className="sr-only" htmlFor="message">Message</label>
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
              className={`w-full px-4 py-3 md:py-2 rounded-lg border text-black placeholder-zinc-500 focus:outline-none focus:ring-2 transition resize-none ${
                errors.message
                  ? "border-red-300 bg-red-50 focus:ring-red-500"
                  : "border-zinc-200 bg-zinc-50 focus:ring-brand-purple focus:bg-white"
              }`}
            />
            {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="w-full min-h-11 px-6 py-3 rounded-lg bg-brand-purple text-white font-semibold hover:bg-brand-purple/90 disabled:opacity-60 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
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
            <div className="text-sm text-zinc-600 mb-3">Or connect with me on social media:</div>
            <SocialLinks
              links={[
                { name: "LinkedIn", url: "https://www.linkedin.com/in/ujuruthstevens", icon: "linkedin" as const },
                { name: "Facebook", url: "https://www.facebook.com/share/14VMKrM2Ncf/", icon: "facebook" as const },
                { name: "YouTube", url: "https://www.youtube.com/@UjuRuthStevens", icon: "youtube" as const },
                { name: "TikTok", url: "https://tiktok.com/@ujuruthstevens", icon: "tiktok" as const },
              ]}
            />
          </div>
        </form>
        {submitted && emailStatus?.emailed && (
          <div ref={successRef} className="mt-4 p-5 rounded-lg bg-green-50 border-2 border-green-300 text-green-700 text-sm animate-in fade-in slide-in-from-bottom duration-500 shadow-md">
            <div className="flex items-start gap-3">
              <span className="text-lg font-bold">✓</span>
              <div>
                <p className="font-bold text-base">Message sent successfully!</p>
                <p className="text-xs mt-2">A confirmation email has been sent to <strong>{email}</strong>. I'll get back to you soon.</p>
              </div>
            </div>
          </div>
        )}

        {submitted && emailStatus && !emailStatus.emailed && (
          <div ref={successRef} className="mt-4 p-5 rounded-lg bg-red-50 border-2 border-red-300 text-red-700 text-sm animate-in fade-in slide-in-from-bottom duration-500 shadow-md">
            <div className="flex items-start gap-3">
              <span className="text-lg font-bold">✕</span>
              <div>
                <p className="font-bold text-base">Email delivery failed</p>
                <p className="text-xs mt-2">Please try again or contact me directly on WhatsApp for immediate assistance.</p>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
    </section>
  );
}
