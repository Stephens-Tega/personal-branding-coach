import type { Metadata } from "next";
import "./globals.css";
import AOSProvider from "../components/AOSProvider";

export const metadata: Metadata = {
  title: "Women's Identity & Clarity Coach",
  description:
    "Coaching, clarity frameworks, and community support for women rediscovering identity, purpose, and aligned living.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  try {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch(e){}
})();
          `,
          }}
        />
      </head>

      <body className="antialiased">
        <AOSProvider />
        {children}
      </body>
    </html>
  );
}
