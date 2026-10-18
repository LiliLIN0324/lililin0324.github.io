import { useEffect, useId, useRef, useState, type RefObject } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  EMAIL,
  MUJING_URL,
  NOTE_COUNT,
  WORK_COUNT,
  findWork,
  groupCounts,
  worksInGroup,
  type WorkGroup,
} from '../data/catalog'
import { pad, useReducedMotion } from './ui'

const GROUPS: WorkGroup[] = ['产品', '游戏', '城市与 AI']
const IG = 'https://www.instagram.com/lililin_portfolio/'
const GH = 'https://github.com/lililin0324'
const LI = 'https://www.linkedin.com/in/lililin0324'

export type Place =
  | { kind: 'home' }
  | { kind: 'about' }
  | { kind: 'notes'; slug?: string }
  | { kind: 'works'; group?: WorkGroup; slug?: string }
  | { kind: 'other' }

export function locate(pathname: string): Place {
  const path = pathname.replace(/\/$/, '') || '/'
  if (path === '/') return { kind: 'home' }
  if (path === '/about') return { kind: 'about' }
  if (path === '/tutorial' || path.startsWith('/tutorial/')) {
    return { kind: 'notes', slug: findWork(path)?.slug }
  }
  if (path === '/work') return { kind: 'works' }
  const work = findWork(path)
  if (work && work.group !== '笔记') return { kind: 'works', group: work.group, slug: work.slug }
  if (path.startsWith('/product') || path.startsWith('/platform')) return { kind: 'works', group: '产品' }
  if (path.startsWith('/game')) return { kind: 'works', group: '游戏' }
  if (path.startsWith('/ai') || path.startsWith('/planning')) return { kind: 'works', group: '城市与 AI' }
  return { kind: 'other' }
}

function focusable(root: HTMLElement) {
  return [...root.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')]
    .filter(el => el.getClientRects().length > 0)
}

export function SiteDrawer({
  open,
  onClose,
  avatar,
  quote,
  returnFocus,
}: {
  open: boolean
  onClose: () => void
  avatar: string
  quote: string
  returnFocus: RefObject<HTMLButtonElement | null>
}) {
  const reduced = useReducedMotion()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const place = locate(pathname)
  const titleId = useId()
  const panel = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(open)
  const [entered, setEntered] = useState(false)
  const [expanded, setExpanded] = useState<WorkGroup | null>(null)
  const wait = reduced ? 160 : 400
  const placeRef = useRef(place)
  placeRef.current = place
  const wasOpen = useRef(false)

  useEffect(() => {
    if (open) {
      const current = placeRef.current
      setExpanded(current.kind === 'works' ? current.group || null : null)
      setShown(true)
      const frame = requestAnimationFrame(() => setEntered(true))
      return () => cancelAnimationFrame(frame)
    }
    setEntered(false)
    const timer = window.setTimeout(() => setShown(false), wait)
    return () => window.clearTimeout(timer)
  }, [open, wait])

  useEffect(() => {
    if (!entered || !panel.current) return
    const closeBtn = panel.current.querySelector<HTMLElement>('[data-close]')
    closeBtn?.focus()
    const scroller = document.querySelector('main > section')
    const prev = scroller instanceof HTMLElement ? scroller.style.overflow : ''
    if (scroller instanceof HTMLElement) scroller.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }
      if (event.key !== 'Tab' || !panel.current) return
      const list = focusable(panel.current)
      if (list.length === 0) return
      const first = list[0]
      const last = list[list.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      if (scroller instanceof HTMLElement) scroller.style.overflow = prev
    }
  }, [entered, onClose])

  useEffect(() => {
    if (wasOpen.current && !open) returnFocus.current?.focus()
    wasOpen.current = open
  }, [open, returnFocus])

  const go = (href: string) => {
    onClose()
    window.setTimeout(() => navigate(href), wait)
  }

  if (!shown) return null

  const worksCurrent = place.kind === 'works'

  return (
    <>
      <button
        type="button"
        className={entered ? 'drawer-wash on' : 'drawer-wash'}
        aria-label="关闭侧栏"
        tabIndex={-1}
        onClick={onClose}
      />
      <div
        id="site-drawer"
        ref={panel}
        className={entered ? 'drawer on' : 'drawer'}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="top">
          <div className="brand" id={titleId}>
            <button type="button" className="hb x" data-close aria-label="关闭侧栏" onClick={onClose}>
              <i /><i /><i />
            </button>
            <span className="sq" />
            Lili Lin<em>林丽丽</em>
          </div>
          <button type="button" className="esc" onClick={onClose}>ESC</button>
        </div>

        <div className="pf">
          <div className="av">
            <img src={avatar} alt="" />
          </div>
          <div>
            <div className="lab">Profile</div>
            <h2>Lili Lin</h2>
            <p className="cn">林丽丽</p>
            <p className="role">设计师 · 开发者 · 产品创作者</p>
          </div>
        </div>

        <nav className="ix" aria-label="站点索引">
          <a
            className={worksCurrent ? 'it cur' : 'it'}
            href="#/work"
            onClick={event => { event.preventDefault(); go('/work') }}
          >
            <span className="no">01</span>
            <span className="nm">作品</span>
            <span className="ct">{WORK_COUNT}</span>
          </a>
          <div className="sub">
            {GROUPS.map(group => {
              const openGroup = expanded === group
              const here = place.kind === 'works' && place.group === group
              const slug = place.kind === 'works' ? place.slug : undefined
              return (
                <div key={group}>
                  <button
                    type="button"
                    className={openGroup ? 'cat open' : 'cat'}
                    aria-expanded={openGroup}
                    onClick={() => setExpanded(openGroup ? null : group)}
                  >
                    {here && !slug ? <i className="bar" /> : null}
                    <span className="cn">{group}</span>
                    <span className="ck">{groupCounts[group]}</span>
                    <span className="tg">{openGroup ? '−' : '+'}</span>
                  </button>
                  {openGroup && (
                    <div className="wks">
                      {worksInGroup(group).map(work => {
                        const current = slug === work.slug
                        return (
                          <a
                            key={work.href}
                            className={current ? 'wk cur' : 'wk'}
                            href={`#${work.href}`}
                            aria-current={current ? 'page' : undefined}
                            onClick={event => { event.preventDefault(); go(work.href) }}
                          >
                            <span className="no">{pad(work.no)}</span>
                            <span className="t">{work.title}</span>
                            <span className="y">{work.yearLabel}</span>
                          </a>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
          <a
            className={place.kind === 'notes' ? 'it cur' : 'it'}
            href="#/tutorial"
            aria-current={place.kind === 'notes' ? 'page' : undefined}
            onClick={event => { event.preventDefault(); go('/tutorial') }}
          >
            <span className="no">02</span>
            <span className="nm">笔记</span>
            <span className="ct">{NOTE_COUNT}</span>
          </a>
          <a
            className={place.kind === 'about' ? 'it cur' : 'it'}
            href="#/about"
            aria-current={place.kind === 'about' ? 'page' : undefined}
            onClick={event => { event.preventDefault(); go('/about') }}
          >
            <span className="no">03</span>
            <span className="nm">关于</span>
            <span className="ct" />
          </a>
          <a className="it ext" href={MUJING_URL} target="_blank" rel="noopener">
            <span className="no">04</span>
            <span className="nm">幕景宇宙官网 ↗</span>
          </a>
        </nav>

        <div className="ft">
          <p className="q">{quote}</p>
          <div className="ct2">
            <span className="lab">联系</span>
            <div className="ln"><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div>
            <span className="lab">社交</span>
            <div className="ln">
              <a href={IG} target="_blank" rel="noopener">Instagram ↗</a>
              <a href={GH} target="_blank" rel="noopener">GitHub ↗</a>
              <a href={LI} target="_blank" rel="noopener">LinkedIn ↗</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
