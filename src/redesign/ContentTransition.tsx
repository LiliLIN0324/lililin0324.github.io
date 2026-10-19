import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { findWork, WORK_COUNT } from '../data/catalog'
import { pad } from './ui'
import './redesign.css'

/**
 * Route-change curtain. Mounted only while the 760ms animation plays.
 * An idle `.curtain` (translateY(100%), #0e0e0e) used to sit one viewport
 * down inside the scrollport and paint a solid black band over #featured.
 */
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

  if (!play) return null

  return (
    <div className="curtain go" aria-hidden="true">
      <i className="line" />
      {label}
    </div>
  )
}
