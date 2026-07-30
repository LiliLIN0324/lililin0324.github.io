/** @type {import('tailwindcss').Config} */

// Semantic colors resolve through CSS variables declared in index.css, so
// `bg-surface` / `text-ink` already carry their dark-mode value and don't need
// a `dark:` twin. Raw `neutral-*` still works for older components.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`

export default {
  content: [
    "./index.html",
    "./MainPage.tsx",
    "./Root.tsx",
    "./IntroScreen.tsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: token('canvas'),
        surface: token('surface'),
        'surface-2': token('surface-2'),
        ink: token('ink'),
        'ink-2': token('ink-2'),
        'ink-3': token('ink-3'),
        rule: token('rule'),
        'rule-strong': token('rule-strong'),
        accent: token('accent'),
        'accent-text': token('accent-text'),
        'accent-ink': token('accent-ink'),
      },
      fontFamily: {
        // Swiss grotesque first, then per-glyph CJK fallback.
        sans: [
          'Inter', '"Helvetica Neue"', 'Helvetica', 'Arial',
          '"Segoe UI"', 'Roboto', '-apple-system', 'BlinkMacSystemFont',
          '"PingFang SC"', '"Hiragino Sans GB"', '"Microsoft YaHei"',
          'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"',
        ],
        mono: [
          '"JetBrains Mono"', '"SF Mono"', 'ui-monospace', 'Menlo',
          'Consolas', '"Liberation Mono"', 'monospace',
        ],
        serif: ['"Times New Roman"', 'Times', 'Georgia', '"Songti SC"', 'serif'],
      },
      fontSize: {
        // Editorial display scale — tight leading, negative tracking.
        eyebrow: ['0.6875rem', { lineHeight: '1', letterSpacing: '0.16em', fontWeight: '600' }],
        'display-sm': ['clamp(1.75rem, 3.2vw, 2.5rem)', { lineHeight: '1', letterSpacing: '-0.025em', fontWeight: '700' }],
        display: ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '0.92', letterSpacing: '-0.035em', fontWeight: '700' }],
        'display-lg': ['clamp(3.25rem, 11vw, 8.5rem)', { lineHeight: '0.86', letterSpacing: '-0.045em', fontWeight: '700' }],
      },
      letterSpacing: {
        masthead: '-0.045em',
        eyebrow: '0.16em',
      },
      maxWidth: {
        content: '90rem',
        measure: '38rem',
      },
      boxShadow: {
        lift: '0 1px 2px rgb(0 0 0 / 0.04), 0 10px 28px -12px rgb(0 0 0 / 0.14)',
        'lift-lg': '0 2px 4px rgb(0 0 0 / 0.05), 0 28px 56px -20px rgb(0 0 0 / 0.22)',
        deck: '0 18px 44px -22px rgb(0 0 0 / 0.35)',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'rise-in': {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'none' },
        },
        'wipe-in': {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
      },
      animation: {
        'rise-in': 'rise-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        'wipe-in': 'wipe-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
