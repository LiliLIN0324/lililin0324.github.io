import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { findWork, WORK_COUNT } from '../data/catalog'
import { pad } from './ui'
import './redesign.css'

/** Curtain inside the scrolling pane. The top bar is outside this element. */
export function ContentTransition() {
  const { pathname } = useLocation()
  const [play, setPlay] = useState(false)
  const [label, setLabel] = useState('')
  const previous = useRef(pathname)

  useEffect(() => {
    const scroller = document.querySelector('main > section')
    if (scroller instanceof HTMLElement) scroller.scrollTop = 0
    if (previous.current === pathname) return
    previous.current = pathname
    const work = findWork(pathname)
    setLabel(work && work.group !== '笔记' ? `${pad(work.no)} / ${WORK_COUNT}  ${work.title}` : '')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setPlay(true)
    const timer = window.setTimeout(() => setPlay(false), reduced ? 160 : 760)
    return () => window.clearTimeout(timer)
  }, [pathname])

  return (
    <div className={play ? 'curtain go' : 'curtain'} aria-hidden="true">
      <i className="line" />
      {label}
    </div>
  )
}
