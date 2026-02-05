"use client";

import { useState } from "react";
import SocialLinks from "./SocialLinks";

export default function ContactForm({ waNumber }: { waNumber: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [emailStatus, setEmailStatus] = useState<null | { emailed: boolean; error?: string }>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !message) return alert("Please fill all fields.");
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
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="w-full">
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
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-zinc-50 text-black placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:bg-white transition"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-zinc-50 text-black placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:bg-white transition"
              />
            </div>
          </div>

          <div>
            <label className="sr-only" htmlFor="message">Message</label>
            <textarea
              id="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-zinc-50 text-black placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:bg-white transition resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="w-full px-6 py-3 rounded-lg bg-brand-purple text-white font-semibold hover:bg-brand-purple/90 disabled:opacity-60 transition"
            >
              {submitting ? "Sending..." : "Send Message"}
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
          <div className="mt-4 p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 text-sm">
            ✓ Message sent! I'll get back to you soon.
          </div>
        )}

        {submitted && emailStatus && !emailStatus.emailed && (
          <div className="mt-4 p-4 rounded-lg bg-yellow-50 border border-yellow-200 text-yellow-800 text-sm">
            ⚠ Message saved but email could not be sent. The submission is stored locally. {emailStatus.error ? `Error: ${emailStatus.error}` : ''}
          </div>
        )}
      </div>
      </div>
    </section>
  );
}
