import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {
  EMAIL,
  type CoverSource,
  type WorkItem,
  coverSources,
  coverVideo,
  heroSources,
  loadManifest,
  subscribeManifest,
} from '../data/catalog'

export function useManifestRevision() {
  const [revision, setRevision] = useState(0)
  useEffect(() => {
    loadManifest()
    return subscribeManifest(() => setRevision(value => value + 1))
  }, [])
  return revision
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReduced(media.matches)
    apply()
    media.addEventListener('change', apply)
    return () => media.removeEventListener('change', apply)
  }, [])
  return reduced
}

function useFrame(sources: CoverSource[]) {
  const [index, setIndex] = useState(0)
  const key = sources.map(source => source.src).join('|')
  useEffect(() => { setIndex(0) }, [key])
  const current = sources[index]
  const failed = !current
  const advance = () => setIndex(value => value + 1)
  return { current, failed, advance }
}

/**
 * Muted looping cover. Stays invisible until the first frame is ready so a
 * failed or not-yet-loaded file never paints a black rectangle over the still.
 * Pauses when the frame leaves the scrolling pane.
 */
function useCoverVideo(src: string | undefined) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLVideoElement>(null)
  const [failed, setFailed] = useState(false)
  const [ready, setReady] = useState(false)
  const active = Boolean(src) && !reduced && !failed

  useEffect(() => {
    setFailed(false)
    setReady(false)
  }, [src, reduced])

  useEffect(() => {
    const el = ref.current
    if (!el || !active) return
    el.muted = true
    const root = document.querySelector('main > section')
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0]
      if (!entry) return
      if (entry.isIntersecting) el.play().catch(() => {})
      else el.pause()
    }, { root: root instanceof HTMLElement ? root : null, threshold: 0.2 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [active, src])

  return {
    ref,
    active,
    ready,
    fail: () => setFailed(true),
    markReady: () => setReady(true),
  }
}

function CoverVideo({ src, poster }: { src: string; poster?: string }) {
  const video = useCoverVideo(src)
  if (!video.active) return null
  return (
    <video
      ref={video.ref}
      src={src}
      poster={poster}
      muted
      autoPlay
      loop
      playsInline
      preload="metadata"
      disablePictureInPicture
      data-cover-video=""
      style={{ opacity: video.ready ? 1 : 0 }}
      onCanPlay={video.markReady}
      onError={video.fail}
    />
  )
}

export function Cover({ work, showGo = true }: { work: WorkItem; showGo?: boolean }) {
  useManifestRevision()
  const sources = coverSources(work)
  const { current, failed, advance } = useFrame(sources)
  if (failed || !current) {
    return (
      <div className="im miss" data-cover="type">
        <span className="mt">{work.title}</span>
        <span className="ml">{work.group}</span>
        {showGo && <span className="go">查看 →</span>}
      </div>
    )
  }
  const clip = coverVideo(work)
  return (
    <div className={`im ${current.logo ? 'logo' : ''}`} data-cover={clip ? 'video' : current.logo ? 'logo' : 'photo'}>
      <img
        src={current.src}
        srcSet={current.logo ? undefined : current.srcSet}
        sizes={current.srcSet ? '(max-width: 768px) 92vw, 40vw' : undefined}
        alt=""
        onError={advance}
      />
      {clip ? <CoverVideo src={clip} poster={current.logo ? undefined : current.src} /> : null}
      {showGo && <span className="go">查看 →</span>}
    </div>
  )
}

export function HeroFrame({ work, mobile }: { work: WorkItem; mobile: boolean }) {
  useManifestRevision()
  const sources = heroSources(work, mobile)
  const { current, failed, advance } = useFrame(sources)
  if (failed || !current) {
    return (
      <div className="frame miss" data-cover="type">
        <strong>{work.title}</strong>
      </div>
    )
  }
  const clip = coverVideo(work)
  return (
    <div className="frame" data-cover={clip ? 'video' : 'photo'}>
      <img src={current.src} alt="" onError={advance} />
      {clip ? <CoverVideo src={clip} poster={current.src} /> : null}
    </div>
  )
}

export function WorkCard({ work, no, large = false }: { work: WorkItem; no?: number; large?: boolean }) {
  const label = String(no ?? work.no).padStart(2, '0')
  return (
    <Link to={work.href} className={large ? 'card lg' : 'card'}>
      <Cover work={work} />
      <div className="cap">
        <span className="no">{label}</span>
        <h3>
          <span className="ttl">{work.title}</span>
          {work.subtitle ? <em>{work.subtitle}</em> : null}
        </h3>
        <span className="yr">{work.yearLabel}</span>
        {work.description ? <p className="blurb">{work.description}</p> : null}
        <div className="tag"><span>{work.group}</span></div>
      </div>
    </Link>
  )
}

export function SectionHead({
  n, title, en, right,
}: { n: string; title: string; en?: string; right?: ReactNode }) {
  return (
    <div className="shead">
      <span className="n">{n}</span>
      <h2>{title}{en ? <em>{en}</em> : null}</h2>
      <div className="r">{right}</div>
    </div>
  )
}

export function SiteFooter() {
  const top = () => {
    const node = document.querySelector('main > section')
    if (node instanceof HTMLElement) node.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <footer className="foot">
      <div className="grid12 fr">
        <div className="c1"><span className="sq" /></div>
        <div className="c2">
          <span className="lab">联系</span>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
        <div className="c3">
          <span className="lab">社交</span>
          <div><a href="https://www.instagram.com/lililin_portfolio/" target="_blank" rel="noopener">Instagram ↗</a></div>
          <div><a href="https://github.com/lililin0324" target="_blank" rel="noopener">GitHub ↗</a></div>
          <div><a href="https://www.linkedin.com/in/lililin0324" target="_blank" rel="noopener">LinkedIn ↗</a></div>
        </div>
        <div className="c5">
          <span className="lab">© 2026</span>
          <div>林丽丽</div>
          <button type="button" className="lnk" onClick={top} style={{ color: '#fff', marginTop: 12 }}>回到顶部 ↑</button>
        </div>
      </div>
      <div className="big">Lili Lin</div>
    </footer>
  )
}

export function pad(n: number) {
  return String(n).padStart(2, '0')
}
