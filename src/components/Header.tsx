"use client";

import WhatsAppIcon from "./WhatsAppIcon";

export default function Header({ waNumber }: { waNumber: string }) {
  return (
    <header className="py-6">
      <div className="landing-container px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-md bg-brand-purple flex items-center justify-center text-white font-bold">P</div>
          <span className="font-semibold">Personal Branding Coach</span>
        </div>
        <nav className="flex items-center gap-4">
          <a href="#contact" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-md bg-brand-yellow flex items-center justify-center text-brand-purple">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
                <path d="M22 12v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
          </a>

          <a
            href={`https://wa.me/${waNumber}?text=Hello%20I%20am%20interested%20in%20your%20services`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border px-4 py-2 text-sm inline-flex items-center gap-2 text-green-600 hover:bg-green-50 transition"
          >
            <WhatsAppIcon size={18} />
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
