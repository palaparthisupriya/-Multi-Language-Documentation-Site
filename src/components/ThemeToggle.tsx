'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      data-testid="theme-toggle"
      onClick={() => setIsDark(!isDark)}
      className="p-2 border rounded bg-gray-200 dark:bg-gray-800 dark:text-white"
    >
      {isDark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}
