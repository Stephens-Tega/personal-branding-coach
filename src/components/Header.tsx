"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import ThemeToggle from "./ThemeToggle";

export default function Header({ waNumber }: { waNumber: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const clarityHref = isHomePage ? "#clarity" : "/#clarity";
  const workHref = isHomePage ? "#work" : "/#work";
  const contactHref = isHomePage ? "#contact" : "/#contact";

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/80 py-3 sm:py-4 backdrop-blur-md shadow-sm dark:border-white/10 dark:bg-zinc-950/80 dark:shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
      <div className="landing-container mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        {/* Logo */}
        <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4 md:flex-none">
          <Image
            src="/images/1000148404.jpg.jpeg"
            alt="Logo"
            width={40}
            height={40}
            className="h-9 w-9 shrink-0 rounded-md object-cover sm:h-10 sm:w-10"
          />
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold text-zinc-800 sm:text-base dark:text-zinc-100">
              Women&apos;s Identity &amp; Clarity Coach
            </div>

            <div className="hidden text-xs text-zinc-600 sm:block dark:text-zinc-400">
              Clarity &bull; Identity &bull; Legacy
            </div>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-3 text-sm font-medium md:flex">
          <a
            href={clarityHref}
            className="px-2 py-1 text-zinc-700 transition hover:text-brand-purple hover:underline dark:text-zinc-300 dark:hover:text-brand-yellow"
          >
            The Clarity Blueprint
          </a>

          <a
            href={workHref}
            className="px-2 py-1 text-zinc-700 transition hover:text-brand-purple hover:underline dark:text-zinc-300 dark:hover:text-brand-yellow"
          >
            Ways to Work with Me
          </a>

          <a
            href="/proof"
            className="px-2 py-1 text-zinc-700 transition hover:text-brand-purple hover:underline dark:text-zinc-300 dark:hover:text-brand-yellow"
          >
            Proof
          </a>
        </nav>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2">
          {/* Message */}
          <a
            href={contactHref}
            aria-label="Get in touch"
            className="motion-button inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 p-2 text-zinc-700 transition hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 8v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8" />
              <polyline points="3 8 12 13 21 8" />
            </svg>

            <span className="hidden md:inline text-sm">Message</span>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${waNumber}?text=Hello%20I%20am%20interested%20in%20your%20services`}
            target="_blank"
            rel="noopener noreferrer"
            className="motion-button inline-flex min-h-10 items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700 transition hover:bg-green-100 sm:px-4 dark:border-green-900 dark:bg-green-950/30 dark:text-green-300 dark:hover:bg-green-900/50"
          >
            <WhatsAppIcon size={18} />
            <span className="hidden sm:inline">Contact</span>
          </a>

          {/* Theme toggle */}
          <div className="hidden md:flex">
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="motion-button rounded-full border border-zinc-200 bg-white/70 p-2 transition hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 md:hidden"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-5 h-5 text-zinc-700 dark:text-zinc-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-zinc-200 bg-white/90 px-4 py-4 sm:px-6 dark:border-white/10 dark:bg-[rgba(14,11,20,0.95)] md:hidden"
        >
          <nav className="flex flex-col gap-3 text-sm font-medium">
            <a
              href={clarityHref}
              className="text-zinc-700 transition hover:text-brand-purple hover:underline dark:text-zinc-300 dark:hover:text-brand-yellow"
              onClick={() => setMobileMenuOpen(false)}
            >
              The Clarity Blueprint
            </a>

            <a
              href={workHref}
              className="text-zinc-700 transition hover:text-brand-purple hover:underline dark:text-zinc-300 dark:hover:text-brand-yellow"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ways to Work with Me
            </a>

            <a
              href="/proof"
              className="text-zinc-700 transition hover:text-brand-purple hover:underline dark:text-zinc-300 dark:hover:text-brand-yellow"
              onClick={() => setMobileMenuOpen(false)}
            >
              Proof
            </a>
          </nav>

          <div className="mt-4">
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
