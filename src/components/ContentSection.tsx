import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  contentCategories,
  contentYears,
  projectIntro,
  type ContentItem,
  type ContentCategory,
} from '../data/content'

/* Timeline geometry — the icons sit centred on the row rule, so the rule's
   offset has to be derived from the tile height rather than hard-coded twice. */
const TILE_REM = 4 // h-16
const PAD_TOP_REM = 1 // pt-4 on the timeline column
const RULE_TOP = `calc(${PAD_TOP_REM}rem + ${TILE_REM / 2}rem - 1.5px)`

/* The popover is centred on its tile with `left-1/2` plus half its own width
   pulled back to the left. It must NOT use `-translate-x-1/2` for that:
   `animate-rise-in` animates `transform` with fill-mode:both, so its final
   `transform: none` outlives the animation and cancels the centring. A
   negative margin is equivalent and immune to it. */
const POPOVER_REM = 16 // w-64
const POPOVER_SHIFT = `-${POPOVER_REM / 2}rem`

/** Logos are square-ish app icons; hide the tile's contents if one 404s. */
const hideOnError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.visibility = 'hidden'
}

/** A modified click (new tab, download…) should navigate straight away. */
const isModified = (e: React.MouseEvent) => e.metaKey || e.ctrlKey || e.shiftKey || e.altKey

/* ---------------------------------------------------------------------------
   Shared click contract: the first click opens the intro card, a second click
   on the same card follows the link.
   --------------------------------------------------------------------------- */
const useExpandable = () => {
  const [activeKey, setActiveKey] = useState<string | null>(null)
  const rootRef = useRef<HTMLElement | null>(null)

  // Escape, or a click anywhere outside the section, closes the open card.
  useEffect(() => {
    if (!activeKey) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveKey(null)
    }
    const onPointerDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setActiveKey(null)
    }
    window.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onPointerDown)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onPointerDown)
    }
  }, [activeKey])

  const onClick = (key: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isModified(e)) return
    if (activeKey !== key) {
      e.preventDefault()
      setActiveKey(key)
    }
  }

  return { activeKey, setActiveKey, rootRef, onClick }
}

/* ---------------------------------------------------------------------------
   The intro card — 时间 + 简介, reused by both the desktop popover and the
   mobile in-card expansion.
   --------------------------------------------------------------------------- */
const IntroBody: React.FC<{ item: ContentItem; color: string; compact?: boolean }> = ({
  item,
  color,
  compact = false,
}) => {
  const intro = projectIntro(item.href)
  return (
    <>
      <span
        className={`block font-bold tracking-tight text-ink ${compact ? 'text-xs' : 'text-sm'}`}
      >
        {intro?.title ?? item.name}
      </span>
      <span className="mt-1 block font-mono text-[10px] uppercase tracking-eyebrow text-ink-3">
        {intro?.year ?? String(item.year)}
        {intro?.category ? ` · ${intro.category}` : ''}
      </span>
      {intro?.description && (
        <span
          className={`mt-2 block leading-relaxed text-ink-2 ${
            compact ? 'text-[11px]' : 'text-xs'
          }`}
        >
          {intro.description}
        </span>
      )}
      {!compact && (
        <span className="mt-2.5 block text-[10px] font-medium" style={{ color }}>
          再点一次进入项目 →
        </span>
      )}
    </>
  )
}

/* ---------------------------------------------------------------------------
   Desktop tile + popover
   --------------------------------------------------------------------------- */
const IconTile: React.FC<{
  item: ContentItem
  color: string
  expanded: boolean
  onExpandClick: (e: React.MouseEvent<HTMLAnchorElement>) => void
}> = ({ item, color, expanded, onExpandClick }) => (
  <Link
    to={item.href}
    onClick={onExpandClick}
    aria-expanded={expanded}
    aria-label={`${item.name}（${item.year}）`}
    className="group relative flex w-16 shrink-0 flex-col items-center"
  >
    {/* Tile — the expanded state keeps the hover lift so the open card still
        reads as the one you're pointing at. */}
    <span
      className={`flex h-16 w-16 items-center justify-center rounded-xl border bg-surface p-1.5 shadow-lift transition-all duration-300 ease-editorial group-hover:-translate-y-1 ${
        expanded ? '-translate-y-1 border-transparent' : 'border-rule'
      }`}
      style={
        expanded ? { boxShadow: `0 0 0 2px ${color}, 0 18px 44px -22px rgba(0,0,0,0.4)` } : undefined
      }
    >
      <img
        src={item.logo}
        alt=""
        onError={hideOnError}
        className="h-full w-full rounded-lg object-cover"
      />
    </span>

    <span
      className={`mt-2.5 max-w-[7rem] truncate rounded-full border px-2 py-0.5 text-[11px] font-medium transition-colors duration-200 ${
        expanded
          ? 'border-rule-strong bg-surface text-ink'
          : 'border-rule bg-surface-2 text-ink-2 group-hover:border-rule-strong group-hover:text-ink'
      }`}
    >
      {item.name}
    </span>

    {expanded && (
      <span
        className="absolute bottom-full left-1/2 z-20 mb-3 w-64 rounded-lg border border-rule bg-surface p-3 text-left shadow-lift-lg animate-rise-in"
        style={{ marginLeft: POPOVER_SHIFT }}
      >
        <IntroBody item={item} color={color} />
        {/* Caret */}
        <span
          className="absolute -bottom-[5px] left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 border-b border-r border-rule bg-surface"
          aria-hidden="true"
        />
      </span>
    )}
  </Link>
)

const RowLabel: React.FC<{ category: ContentCategory; className?: string }> = ({
  category,
  className = '',
}) => (
  <Link to={category.listHref} className={`group block ${className}`}>
    <p className="text-sm font-bold leading-snug text-ink underline decoration-1 underline-offset-4 transition-colors group-hover:text-accent-text group-hover:decoration-accent-text">
      {category.zh}
    </p>
    <p className="text-sm font-bold leading-snug text-ink underline decoration-1 underline-offset-4 transition-colors group-hover:text-accent-text group-hover:decoration-accent-text">
      {category.en}
    </p>
  </Link>
)

export const ContentSection: React.FC = () => {
  const { activeKey, rootRef, onClick } = useExpandable()

  return (
    <section
      ref={rootRef as React.RefObject<HTMLElement>}
      className="shell border-t border-rule pt-12 md:pt-16"
    >
      {/* ---- Section head ---- */}
      <div className="section-head">
        <p className="eyebrow">Timeline</p>
        <p className="eyebrow nums-tabular">
          {contentYears[0]} — {contentYears[contentYears.length - 1]}
        </p>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <h2 className="font-serif text-4xl tracking-tight text-ink md:text-5xl">Content</h2>
        <p className="text-xs leading-relaxed text-ink-3 sm:text-right">
          * 点击图标查看项目简介，再点一次进入项目
          <br />* 点击下方文字标签跳转到作品集页面
        </p>
      </div>

      {/* ============================ DESKTOP TIMELINE ============================ */}
      <div className="mt-10 hidden md:block">
        {/* Year rail */}
        <div className="grid grid-cols-[9rem_repeat(5,minmax(0,1fr))] gap-x-2">
          <div />
          {contentYears.map(year => (
            <div key={year} className="nums-tabular text-center text-sm font-bold text-ink">
              {year}
            </div>
          ))}
        </div>

        {contentCategories.map(category => (
          <div
            key={category.zh}
            className="mt-10 grid grid-cols-[9rem_repeat(5,minmax(0,1fr))] gap-x-2"
          >
            <RowLabel category={category} className="pt-4" />

            <div className="relative col-span-5 pt-4">
              {/* Row rule — painted before the tiles so it passes behind them */}
              <div
                className="absolute left-0 right-0 h-[3px]"
                style={{ top: RULE_TOP, background: category.color }}
                aria-hidden="true"
              />
              <div className="relative grid grid-cols-5 gap-x-2">
                {contentYears.map(year => (
                  <div
                    key={year}
                    className="flex flex-wrap items-start justify-center gap-x-3 gap-y-5"
                  >
                    {category.items
                      .filter(item => item.year === year)
                      .map(item => (
                        <IconTile
                          key={item.name}
                          item={item}
                          color={category.color}
                          expanded={activeKey === item.name}
                          onExpandClick={onClick(item.name)}
                        />
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ============================ MOBILE CARDS ============================ */}
      <div className="mt-8 space-y-8 md:hidden">
        {contentCategories.map(category => (
          <div key={category.zh}>
            <div className="flex items-center gap-2.5 border-t border-rule pt-3">
              <span
                className="h-[3px] w-5 shrink-0"
                style={{ background: category.color }}
                aria-hidden="true"
              />
              <RowLabel category={category} />
            </div>

            <div className="mt-3 grid grid-cols-2 items-start gap-2.5 sm:grid-cols-3">
              {[...category.items]
                .sort((a, b) => a.year - b.year)
                .map(item => {
                  const expanded = activeKey === item.name
                  // The open card takes the full row so its intro has room.
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={onClick(item.name)}
                      aria-expanded={expanded}
                      className={`flex items-start gap-2.5 border bg-surface p-2 transition-colors ${
                        expanded
                          ? 'col-span-2 border-rule-strong sm:col-span-3'
                          : 'border-rule hover:border-rule-strong'
                      }`}
                    >
                      <img
                        src={item.logo}
                        alt=""
                        onError={hideOnError}
                        className="h-9 w-9 shrink-0 rounded-lg border border-rule object-cover"
                      />
                      {expanded ? (
                        <span className="min-w-0 flex-1">
                          <IntroBody item={item} color={category.color} compact />
                          <span
                            className="mt-2 block text-[10px] font-medium"
                            style={{ color: category.color }}
                          >
                            再点一次进入项目 →
                          </span>
                        </span>
                      ) : (
                        <span className="min-w-0">
                          <span className="block truncate text-xs font-semibold text-ink">
                            {item.name}
                          </span>
                          <span className="nums-tabular block text-[10px] text-ink-3">
                            {item.year}
                          </span>
                        </span>
                      )}
                    </Link>
                  )
                })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
