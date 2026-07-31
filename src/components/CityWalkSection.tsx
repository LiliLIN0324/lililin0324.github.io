import React, { useState } from 'react'
import { cityWalks } from '../data/travel'

// Subtle gradient palettes for stamp placeholder backgrounds
const STAMP_PALETTES = [
  'from-amber-500/20 via-orange-400/10 to-yellow-500/20',
  'from-emerald-500/20 via-teal-400/10 to-cyan-500/20',
  'from-rose-500/20 via-pink-400/10 to-fuchsia-500/20',
  'from-sky-500/20 via-blue-400/10 to-indigo-500/20',
  'from-violet-500/20 via-purple-400/10 to-plum-500/20',
  'from-lime-500/20 via-green-400/10 to-emerald-500/20',
  'from-red-500/20 via-orange-400/10 to-amber-500/20',
  'from-cyan-500/20 via-teal-400/10 to-sky-500/20',
]

const CITY_EMOJI: Record<string, string> = {
  '上海': '🏙️', '东京': '🗼', '首尔': '🏯', '新加坡': '🌿',
  '明尼阿波利斯': '🌊', '剑桥': '🎓', '武汉': '🌸', '香港': '🌃',
}

const StampCard: React.FC<{ entry: typeof cityWalks[0]; index: number }> = ({ entry, index }) => {
  const [flipped, setFlipped] = useState(false)
  const palette = STAMP_PALETTES[index % STAMP_PALETTES.length]
  const emoji = CITY_EMOJI[entry.city] ?? '📍'

  return (
    <div
      className="relative cursor-pointer select-none"
      style={{ perspective: '800px' }}
      onClick={() => setFlipped(f => !f)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative w-full transition-transform duration-500 ease-editorial"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          aspectRatio: '3/4',
        }}
      >
        {/* ── Front face ── */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 border border-dashed border-rule bg-surface p-4"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Perforation dots — top */}
          <div className="absolute inset-x-3 top-2 flex justify-between">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} className="h-1.5 w-1.5 rounded-full bg-canvas" />
            ))}
          </div>
          {/* Perforation dots — bottom */}
          <div className="absolute inset-x-3 bottom-2 flex justify-between">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} className="h-1.5 w-1.5 rounded-full bg-canvas" />
            ))}
          </div>

          <span className="text-3xl">{emoji}</span>
          <p className="text-base font-bold tracking-tight text-ink">{entry.city}</p>
          <p className="eyebrow text-ink-3">{entry.country}</p>
          {entry.date && (
            <span className="mt-1 inline-block border border-rule px-2 py-0.5 font-mono text-[10px] uppercase tracking-eyebrow text-ink-3">
              {entry.date}
            </span>
          )}
          {/* Cancel mark — like a postmark */}
          <div className="absolute right-3 top-5 -rotate-12 opacity-30">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="17" stroke="currentColor" strokeWidth="1.5" className="text-ink-3" />
              <path d="M8 8l24 24M8 32L32 8" stroke="currentColor" strokeWidth="0.8" className="text-ink-3" />
            </svg>
          </div>
        </div>

        {/* ── Back face ── */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden border border-rule-strong bg-surface-2"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          {entry.photo ? (
            <img src={entry.photo} alt={entry.city} className="absolute inset-0 h-full w-full object-cover" />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${palette}`} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="relative z-10 px-4 text-center">
            <p className="text-lg font-bold tracking-tight text-white">{entry.city}</p>
            {entry.note && (
              <p className="mt-1.5 text-xs leading-relaxed text-white/70">{entry.note}</p>
            )}
          </div>
          {/* Stamp edge on back too for visual consistency */}
          <div className="absolute inset-2 border border-dashed border-white/10" />
        </div>
      </div>
    </div>
  )
}

export const CityWalkSection: React.FC = () => {
  return (
    <section className="shell border-t border-rule pt-12 md:pt-16">
      {/* Section header */}
      <div className="section-head">
        <p className="eyebrow">Wander</p>
        <p className="eyebrow nums-tabular">
          {String(cityWalks.length).padStart(2, '0')} cities
        </p>
      </div>

      <div className="mt-5 flex items-end justify-between gap-4">
        <h2 className="text-display-sm">City Walks</h2>
        <p className="max-w-xs text-right text-xs leading-relaxed text-ink-3">
          用脚步丈量城市，<br className="hidden sm:inline" />在每个街角发现故事。
        </p>
      </div>

      {/* Stamp card grid */}
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {cityWalks.map((entry, i) => (
          <StampCard key={entry.city} entry={entry} index={i} />
        ))}
      </div>
    </section>
  )
}
