"use client";

import { useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Header({ waNumber }: { waNumber: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm py-4 sticky top-0 z-40">
      <div className="landing-container px-6 max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-md bg-brand-purple flex items-center justify-center text-white font-bold">Cs</div>
          <div>
            <div className="font-semibold">Women's Identity & Clarity Coach</div>
            <div className="text-xs text-zinc-500">Clarity • Identity • Legacy</div>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2 text-sm">
          <a href="#clarity" className="text-zinc-700 hover:text-purple-800 hover:underline transition font-medium py-1 px-2">The Clarity Blueprint</a>
          <a href="#work" className="text-zinc-700 hover:text-purple-800 hover:underline transition font-medium py-1 px-2">Ways to Work with Me</a>
        </nav>

        {/* Message icon, WhatsApp, then Mobile menu button (always visible) */}
        <div className="flex items-center gap-2">
          <a href="#contact" aria-label="Get in touch" className="rounded-full border p-2 text-sm inline-flex items-center gap-2 text-zinc-700 hover:bg-zinc-100 transition">
            <svg className="w-4 h-4 text-zinc-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M21 8v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8" />
              <polyline points="3 8 12 13 21 8" />
            </svg>
            <span className="hidden md:inline text-sm">Message</span>
          </a>

          <a href={`https://wa.me/${waNumber}?text=Hello%20I%20am%20interested%20in%20your%20services`} target="_blank" rel="noopener noreferrer" className="rounded-full border px-4 py-2 text-sm inline-flex items-center gap-2 text-green-600 hover:bg-green-100 transition">
            <WhatsAppIcon size={18} />
            <span className="hidden sm:inline">Contact</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-zinc-100 rounded transition"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4">
          <nav className="flex flex-col gap-3 text-sm">
            <a href="#clarity" className="text-zinc-700 hover:text-purple-800 hover:underline transition font-medium" onClick={() => setMobileMenuOpen(false)}>The Clarity Blueprint</a>
              <a href="#work" className="text-zinc-700 hover:text-purple-800 hover:underline transition font-medium" onClick={() => setMobileMenuOpen(false)}>Ways to Work with Me</a>
          </nav>
        </div>
      )}
    </header>
  );
}
