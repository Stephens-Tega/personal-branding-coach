"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import ThemeToggle from "./ThemeToggle";

const observedSectionIds = ["clarity", "work", "contact"] as const;

type ObservedSectionId = (typeof observedSectionIds)[number];
type NavKey = "home" | "clarity" | "work" | "proof";

export default function Header({ waNumber }: { waNumber: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuRendered, setMobileMenuRendered] = useState(false);
  const [activeSection, setActiveSection] =
    useState<ObservedSectionId | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const brandTitle = "Women's Identity & Clarity Coach";
  const mobileMenuTransitionMs = 280;
  const isHomePage = pathname === "/";
  const clarityHref = isHomePage ? "#clarity" : "/#clarity";
  const workHref = isHomePage ? "#work" : "/#work";
  const contactHref = isHomePage ? "#contact" : "/#contact";
  const isContactActive = isHomePage && activeSection === "contact";
  const menuTransitionStyle = {
    transitionDuration: "var(--motion-duration-medium)",
    transitionTimingFunction: "var(--motion-ease-emphasized)",
  };

  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    const sections = observedSectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const visibleSections = new Map<ObservedSectionId, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id as ObservedSectionId;

          if (entry.isIntersecting) {
            visibleSections.set(sectionId, entry.intersectionRatio);
          } else {
            visibleSections.delete(sectionId);
          }
        });

        let nextActiveSection: ObservedSectionId | null = null;
        let highestRatio = 0;

        observedSectionIds.forEach((sectionId) => {
          const ratio = visibleSections.get(sectionId) ?? 0;

          if (ratio > highestRatio) {
            highestRatio = ratio;
            nextActiveSection = sectionId;
          }
        });

        if (nextActiveSection) {
          setActiveSection(nextActiveSection);
        }
      },
      {
        rootMargin: "-22% 0px -58% 0px",
        threshold: [0.15, 0.35, 0.55, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isHomePage]);

  useEffect(() => {
    const handleScroll = () => {
      const nextIsScrolled = window.scrollY > 18;
      setIsScrolled((current) =>
        current === nextIsScrolled ? current : nextIsScrolled,
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen || !mobileMenuRendered) {
      return;
    }

    const closeTimeout = window.setTimeout(() => {
      setMobileMenuRendered(false);
    }, mobileMenuTransitionMs);

    return () => window.clearTimeout(closeTimeout);
  }, [mobileMenuOpen, mobileMenuRendered, mobileMenuTransitionMs]);

  useEffect(() => {
    if (!mobileMenuRendered) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuRendered]);

  const isNavActive = (key: NavKey) => {
    if (isHomePage) {
      return activeSection === key;
    }

    if (pathname === "/proof") {
      return key === "proof";
    }

    return key === "home";
  };

  const getDesktopNavItemClassName = (isActive: boolean) =>
    `relative inline-flex min-h-10 items-center px-4 py-2 text-sm font-medium tracking-[0.01em] transition-colors before:absolute before:right-4 before:bottom-1.5 before:left-4 before:h-[2px] before:origin-center before:rounded-full before:content-[''] before:transition-transform before:duration-300 ${
      isActive
        ? "text-brand-purple before:scale-x-100 before:bg-brand-purple dark:text-brand-yellow dark:before:bg-brand-yellow"
        : "text-zinc-600 hover:text-brand-purple before:scale-x-0 before:bg-brand-purple/70 hover:before:scale-x-100 dark:text-zinc-300 dark:hover:text-brand-yellow dark:before:bg-brand-yellow/70"
    }`;

  const getMobileNavItemClassName = (isActive: boolean) =>
    `motion-button group flex items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-sm font-medium shadow-[0_10px_22px_rgba(17,12,24,0.05)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/20 dark:focus-visible:ring-brand-yellow/20 ${
      isActive
        ? "border-brand-purple/18 bg-brand-purple/8 text-brand-purple hover:border-brand-purple/24 hover:bg-brand-purple/[0.1] dark:border-brand-yellow/22 dark:bg-brand-yellow/10 dark:text-brand-yellow dark:hover:border-brand-yellow/30 dark:hover:bg-brand-yellow/[0.14]"
        : "border-zinc-200/80 bg-white/72 text-zinc-700 hover:border-brand-purple/20 hover:bg-brand-purple/[0.045] hover:text-brand-purple dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:border-brand-yellow/20 dark:hover:bg-brand-yellow/[0.08] dark:hover:text-brand-yellow"
    }`;

  const getMobileIconClassName = (isActive: boolean) =>
    `flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
      isActive
        ? "bg-brand-purple/10 text-brand-purple group-hover:bg-brand-purple/14 dark:bg-brand-yellow/12 dark:text-brand-yellow dark:group-hover:bg-brand-yellow/[0.18]"
        : "bg-zinc-100 text-zinc-600 group-hover:bg-brand-purple/10 group-hover:text-brand-purple dark:bg-white/8 dark:text-zinc-300 dark:group-hover:bg-brand-yellow/[0.12] dark:group-hover:text-brand-yellow"
    }`;

  const getMobileArrowClassName = (isActive: boolean) =>
    `transition-colors ${
      isActive
        ? "text-brand-purple dark:text-brand-yellow"
        : "text-zinc-400 group-hover:text-brand-purple dark:text-zinc-500 dark:group-hover:text-brand-yellow"
    }`;

  const messageButtonClassName = `motion-button inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-medium shadow-sm backdrop-blur transition ${
    isContactActive
      ? "border-brand-purple/18 bg-brand-purple/[0.07] text-brand-purple hover:bg-brand-purple/[0.12] dark:border-brand-yellow/20 dark:bg-brand-yellow/10 dark:text-brand-yellow dark:hover:bg-brand-yellow/[0.14]"
      : "border-zinc-200/80 bg-white/72 text-zinc-700 hover:border-zinc-300 hover:bg-white dark:border-white/10 dark:bg-white/[0.06] dark:text-zinc-200 dark:hover:bg-white/[0.1]"
  }`;

  const whatsappButtonClassName =
    "motion-button inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#1f8f54] px-4 py-2 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(31,143,84,0.24)] transition hover:bg-[#197645] dark:bg-[#22a563] dark:hover:bg-[#1d8e54]";

  const openMobileMenu = () => {
    setMobileMenuRendered(true);
    window.requestAnimationFrame(() => {
      setMobileMenuOpen(true);
    });
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const toggleMobileMenu = () => {
    if (mobileMenuOpen) {
      closeMobileMenu();
      return;
    }

    openMobileMenu();
  };

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        isScrolled
          ? "border-zinc-200/70 bg-white/88 shadow-[0_18px_40px_rgba(17,12,24,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-[rgba(10,8,15,0.86)] dark:shadow-[0_18px_44px_rgba(0,0,0,0.34)]"
          : "border-zinc-200/80 bg-white/76 shadow-[0_10px_26px_rgba(17,12,24,0.04)] backdrop-blur-lg dark:border-white/10 dark:bg-[rgba(11,8,16,0.78)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.28)]"
      }`}
    >
      <div
        className={`landing-container relative flex items-center justify-between gap-3 px-4 sm:px-6 xl:grid xl:grid-cols-[minmax(18rem,1fr)_auto_minmax(18rem,1fr)] xl:items-center xl:gap-6 xl:px-8 ${
          isScrolled ? "py-2.5 sm:py-3" : "py-3 sm:py-4"
        }`}
      >
        <Link
          href="/"
          aria-label="Go to home page"
          title={brandTitle}
          className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4 xl:min-w-[20rem] xl:flex-none xl:justify-self-start"
        >
          <Image
            src="/images/1000148404.jpg.jpeg"
            alt="Logo"
            width={44}
            height={44}
            priority
            style={{
              width: isScrolled ? 36 : 44,
              height: "auto",
            }}
            className="shrink-0 rounded-md object-cover transition-[width] duration-300"
          />

          <div className="min-w-0">
            <div
              title={brandTitle}
              className="truncate text-sm font-semibold tracking-[0.01em] text-zinc-800 sm:text-base dark:text-zinc-100"
            >
              {brandTitle}
            </div>

            <div
              className={`hidden overflow-hidden text-[0.68rem] font-medium uppercase tracking-[0.22em] text-zinc-500 transition-[max-height,opacity,transform] duration-300 sm:block dark:text-zinc-400 ${
                isScrolled
                  ? "max-h-0 translate-y-1 opacity-0"
                  : "max-h-5 translate-y-0 opacity-100"
              }`}
            >
              Clarity &bull; Identity &bull; Legacy
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-zinc-200/75 bg-white/60 px-1.5 py-1 shadow-[0_18px_40px_rgba(17,12,24,0.05)] backdrop-blur-xl xl:flex xl:justify-self-center dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[0_18px_44px_rgba(0,0,0,0.3)]">
          {!isHomePage && (
            <Link
              href="/"
              aria-current={isNavActive("home") ? "location" : undefined}
              className={getDesktopNavItemClassName(isNavActive("home"))}
            >
              Home
            </Link>
          )}

          <a
            href={clarityHref}
            aria-current={isNavActive("clarity") ? "location" : undefined}
            className={getDesktopNavItemClassName(isNavActive("clarity"))}
          >
            Blueprint
          </a>

          <a
            href={workHref}
            aria-current={isNavActive("work") ? "location" : undefined}
            className={getDesktopNavItemClassName(isNavActive("work"))}
          >
            Work With Me
          </a>

          <Link
            href="/proof"
            aria-current={isNavActive("proof") ? "location" : undefined}
            className={getDesktopNavItemClassName(isNavActive("proof"))}
          >
            Proof
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-2 xl:justify-self-end">
          <a
            href={contactHref}
            aria-label="Send a message"
            className={`${messageButtonClassName} hidden xl:inline-flex`}
          >
            <svg
              className="h-4 w-4"
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
            <span>Message</span>
          </a>

          <a
            href={`https://wa.me/${waNumber}?text=Hello%20I%20am%20interested%20in%20your%20services`}
            target="_blank"
            rel="noopener noreferrer"
            className={whatsappButtonClassName}
          >
            <WhatsAppIcon size={18} />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          <div className="hidden xl:flex">
            <ThemeToggle />
          </div>

          <button
            onClick={toggleMobileMenu}
            className="motion-button rounded-full border border-zinc-200/80 bg-white/72 p-2.5 shadow-sm transition hover:bg-white dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] xl:hidden"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="relative block h-5 w-5 text-zinc-700 dark:text-zinc-200">
              <span
                className={`absolute left-0 top-1/2 h-[1.8px] w-5 rounded-full bg-current transition-[transform,opacity] ${
                  mobileMenuOpen
                    ? "translate-y-0 rotate-45 opacity-100"
                    : "-translate-y-[6px] opacity-100"
                }`}
                style={menuTransitionStyle}
              />
              <span
                className={`absolute left-0 top-1/2 h-[1.8px] w-5 -translate-y-1/2 rounded-full bg-current transition-[transform,opacity] ${
                  mobileMenuOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                }`}
                style={menuTransitionStyle}
              />
              <span
                className={`absolute left-0 top-1/2 h-[1.8px] w-5 rounded-full bg-current transition-[transform,opacity] ${
                  mobileMenuOpen
                    ? "translate-y-0 -rotate-45 opacity-100"
                    : "translate-y-[5px] opacity-100"
                }`}
                style={menuTransitionStyle}
              />
            </span>
          </button>
        </div>

        {mobileMenuRendered && (
          <>
            <button
              type="button"
              aria-label="Close mobile menu"
              onClick={closeMobileMenu}
              tabIndex={mobileMenuOpen ? 0 : -1}
              className={`absolute left-1/2 top-full z-40 h-[100dvh] w-screen -translate-x-1/2 bg-[rgba(9,7,14,0.08)] transition-opacity dark:bg-[rgba(2,2,6,0.34)] xl:hidden ${
                mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              style={menuTransitionStyle}
            />

            <div
              id="mobile-menu"
              className={`absolute inset-x-4 top-full z-50 mt-3 transition-[opacity,transform] xl:hidden sm:inset-x-6 ${
                mobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-2 opacity-0 pointer-events-none"
              }`}
              style={menuTransitionStyle}
            >
              <div
                className={`overflow-hidden rounded-[1.75rem] border border-zinc-200/80 bg-white/92 p-3 shadow-[0_28px_70px_rgba(17,12,24,0.16)] backdrop-blur-xl transition-[transform,opacity,box-shadow] dark:border-white/10 dark:bg-[rgba(15,11,22,0.94)] dark:shadow-[0_30px_70px_rgba(0,0,0,0.44)] ${
                  mobileMenuOpen
                    ? "scale-100 opacity-100"
                    : "scale-[0.985] opacity-0 shadow-[0_18px_44px_rgba(17,12,24,0.1)] dark:shadow-[0_20px_46px_rgba(0,0,0,0.36)]"
                }`}
                style={menuTransitionStyle}
              >
              <div className="mb-3 flex items-center gap-3">
                <a
                  href={contactHref}
                  onClick={closeMobileMenu}
                  className={`${messageButtonClassName} w-full`}
                >
                  <svg
                    className="h-4 w-4"
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
                  <span>Message</span>
                </a>

                <ThemeToggle />
              </div>

              <nav className="grid gap-2 text-sm font-medium">
                {!isHomePage && (
                  <Link
                    href="/"
                    className={getMobileNavItemClassName(isNavActive("home"))}
                    onClick={closeMobileMenu}
                  >
                    <span className="flex items-center gap-3">
                    <span className={getMobileIconClassName(isNavActive("home"))}>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="M3 10.5 12 3l9 7.5" />
                          <path d="M5 9.5V21h14V9.5" />
                        </svg>
                    </span>
                    <span>Home</span>
                  </span>
                  <span className={getMobileArrowClassName(isNavActive("home"))}>
                    &rarr;
                  </span>
                  </Link>
                )}

                <a
                  href={clarityHref}
                  className={getMobileNavItemClassName(isNavActive("clarity"))}
                  onClick={closeMobileMenu}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={getMobileIconClassName(isNavActive("clarity"))}
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
                        <path d="M12 3v18" />
                        <path d="M5 7.5h8a3.5 3.5 0 1 1 0 7H5Z" />
                        <path d="M5 14.5h9a3.5 3.5 0 1 1 0 7H5Z" />
                      </svg>
                    </span>
                    <span>Blueprint</span>
                  </span>
                  <span className={getMobileArrowClassName(isNavActive("clarity"))}>
                    &rarr;
                  </span>
                </a>

                <a
                  href={workHref}
                  className={getMobileNavItemClassName(isNavActive("work"))}
                  onClick={closeMobileMenu}
                >
                  <span className="flex items-center gap-3">
                    <span className={getMobileIconClassName(isNavActive("work"))}>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M4 7h16" />
                        <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
                        <path d="M5 7v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7" />
                      </svg>
                    </span>
                    <span>Work With Me</span>
                  </span>
                  <span className={getMobileArrowClassName(isNavActive("work"))}>
                    &rarr;
                  </span>
                </a>

                <Link
                  href="/proof"
                  className={getMobileNavItemClassName(isNavActive("proof"))}
                  onClick={closeMobileMenu}
                >
                  <span className="flex items-center gap-3">
                    <span className={getMobileIconClassName(isNavActive("proof"))}>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M12 3 4 7v6c0 5 3.4 7.8 8 9 4.6-1.2 8-4 8-9V7l-8-4Z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </span>
                    <span>Proof</span>
                  </span>
                  <span className={getMobileArrowClassName(isNavActive("proof"))}>
                    &rarr;
                  </span>
                </Link>
              </nav>
            </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
