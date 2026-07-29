"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting until mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-lg border border-slate-200 bg-slate-100/50 dark:border-slate-800 dark:bg-slate-900/50" />
    );
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Theme"
      className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200/80 bg-white/80 text-slate-700 shadow-sm transition-all duration-300 hover:border-slate-300 hover:text-slate-900 focus:outline-none dark:border-slate-800/80 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:text-slate-100"
    >
      <span className="sr-only">Toggle theme</span>
      <div className="relative h-5 w-5 overflow-hidden">
        {/* Sun Icon */}
        <Sun
          className={`absolute inset-0 h-5 w-5 transform transition-transform duration-500 ease-spring ${
            isDark ? "rotate-90 scale-0" : "rotate-0 scale-100"
          }`}
        />
        {/* Moon Icon */}
        <Moon
          className={`absolute inset-0 h-5 w-5 transform transition-transform duration-500 ease-spring ${
            isDark ? "rotate-0 scale-100" : "-rotate-90 scale-0"
          }`}
        />
      </div>
    </button>
  );
}
