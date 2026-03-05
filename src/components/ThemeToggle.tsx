"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') {
        setTheme(stored);
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
      }
    } catch (e) {
      // ignore localStorage errors
    } finally {
      setMounted(true);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', theme);
    } catch (e) {
      // ignore
    }
  }, [theme, mounted]);

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle color mode"
      className="p-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
    >
      {mounted ? (theme === 'dark' ? '🌙' : '☀️') : null}
    </button>
  );
}