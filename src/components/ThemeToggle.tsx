import React, { useState } from 'react'

// The `dark` class is applied by the pre-paint script in index.html, so state
// is seeded from the DOM rather than re-deciding it here (which would flash).
const readInitialTheme = () =>
  typeof document !== 'undefined' &&
  document.documentElement.classList.contains('dark')

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(readInitialTheme)

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {
      /* private mode — the toggle still works for this session */
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="icon-btn"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? '切换到日间模式' : '切换到夜间模式'}
    >
      {isDark ? (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  )
}
