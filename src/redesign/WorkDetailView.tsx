import { Suspense, useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { findBySlug, nextWork, type WorkItem } from '../data/catalog'
import { getDemoComponent } from '../components/DemoLoader'
import { HeroFrame, SiteFooter, pad, Cover } from './ui'
import { dragonDemoPart, playDragonDemoNext, preloadDragonDemoNext } from './dragonDemoSequence'
import './redesign.css'

function useMobile() {
  const [mobile, setMobile] = useState(false)
  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)')
    const apply = () => setMobile(media.matches)
    apply()
    media.addEventListener('change', apply)
    return () => media.removeEventListener('change', apply)
  }, [])
  return mobile
}

function articleText(work: WorkItem) {
  let text = work.content || ''
  text = text.replace(/!\[[^\]]*\]\(([^)]+)\)/g, (full, url: string) => (
    work.images.includes(url.trim()) ? '' : full
  ))
  text = text.replace(/^https?:\/\/\S+\.(?:jpg|jpeg|png|webp|gif)\s*$/gim, '')
  return text.trim()
}

export function WorkDetailView({ routeType }: { routeType: string }) {
  const { id } = useParams()
  const work = findBySlug(id, routeType)
  const mobile = useMobile()
  const [demo, setDemo] = useState(false)
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setDemo(Boolean(work?.demoOnly))
    setOpen(false)
    setProgress(0)
  }, [work?.href, work?.demoOnly])

  useEffect(() => {
    const scroller = document.querySelector('main > section')
    if (!(scroller instanceof HTMLElement)) return
    const onScroll = () => {
      const max = scroller.scrollHeight - scroller.clientHeight
      setProgress(max <= 0 ? 0 : scroller.scrollTop / max)
    }
    onScroll()
    scroller.addEventListener('scroll', onScroll, { passive: true })
    return () => scroller.removeEventListener('scroll', onScroll)
  }, [work?.href, demo])

  const body = useMemo(() => (work ? articleText(work) : ''), [work])
  const images = work?.images || []
  const preview = open ? images : images.slice(0, 3)
  const hidden = Math.max(0, images.length - 3)

  if (!work) {
    return (
      <div className="swiss w" style={{ padding: '64px 48px' }}>
        <p className="lab">未找到</p>
        <h1 style={{ font: '700 64px/1 var(--disp)', marginTop: 12 }}>没有这件作品</h1>
        <Link to="/work" className="lnk">← 返回作品</Link>
      </div>
    )
  }

  const intro = work.slug === 'genshot-AI-video-generation-tool'
    ? 'TODO'
    : (work.abstract || work.description)
  const next = nextWork(work)
  const backTo = work.group === '笔记' ? '/tutorial' : `/${work.routeType}`
  const Demo = work.hasDemo ? getDemoComponent(work.slug) : undefined

  if (demo && Demo) {
    return (
      <div className="swiss">
        <div className="demo-bar">
          <button type="button" className="lnk" onClick={() => setDemo(false)}>← 返回介绍</button>
          <span className="lab">{work.title}</span>
        </div>
        <div className="demo-frame">
          <Suspense fallback={<p className="lab" style={{ padding: 24 }}>Loading demo…</p>}>
            <Demo />
          </Suspense>
        </div>
      </div>
    )
  }

  const facts: { dt: string; dd: string }[] = []
  if (work.tech.length) facts.push({ dt: '技术', dd: work.tech.join(' · ') })
  if (work.yearLabel) facts.push({ dt: '年份', dd: work.yearLabel })
  if (work.group) facts.push({ dt: '类别', dd: `${work.group}${work.category ? ` · ${work.category}` : ''}` })
  if (work.role) facts.push({ dt: '角色', dd: work.role })

  return (
    <div className="swiss">
      <div className="read" aria-hidden="true"><i style={{ width: `${Math.round(progress * 100)}%` }} /></div>
      <div className="dhero">
        <HeroFrame work={work} mobile={mobile} />
        {images.length > 0 && <div className="cap" style={{ position: 'absolute', left: 48, bottom: 20, color: '#fff', font: '500 12px/1 Inter, sans-serif', letterSpacing: '.06em' }}>图 01 / {pad(images.length)}</div>}
      </div>
      <section className="w dh">
        <div className="grid12">
          <div className="crumb">
            <Link to={work.group === '笔记' ? '/tutorial' : '/work'}>{work.group === '笔记' ? '笔记' : '作品'}</Link>
            <span>/</span>
            <Link to={backTo}>{work.group}</Link>
            <span>/</span>
            <b>{work.title}</b>
          </div>
          <h1>{work.title}</h1>
          {work.subtitle ? <p className="sub">{work.subtitle}</p> : null}
          <div className="meta">
            <b>{pad(work.no)}</b>
            <span>{work.group}{work.category ? ` · ${work.category}` : ''}</span>
            <span>{work.yearLabel}</span>
          </div>
          {work.hasDemo && Demo && (
            <div className="act">
              <button type="button" className="btn" onClick={() => setDemo(true)}>打开 Demo <i>↗</i></button>
              <span className="lab">在本页运行</span>
            </div>
          )}
        </div>

        <div className="grid12 db">
          {intro ? <p className="intro">{intro}</p> : <div />}
          {facts.length > 0 && (
            <dl>
              {facts.map(fact => (
                <div key={fact.dt}><dt>{fact.dt}</dt><dd>{fact.dd}</dd></div>
              ))}
            </dl>
          )}
        </div>

        {(work.challenge || work.solution) && (
          <div className="grid12 cs">
            {work.challenge && (
              <div className="k"><div className="n">01</div><h3>挑战</h3><p>{work.challenge}</p></div>
            )}
            {work.solution && (
              <div className="k"><div className="n">02</div><h3>方案</h3><p>{work.solution}</p></div>
            )}
          </div>
        )}

        {body && (
          <div className="prose">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                img: ({ src, alt }) => <img src={src} alt={alt || ''} onError={event => { (event.target as HTMLImageElement).style.display = 'none' }} />,
                video: ({ src, poster, node: _node, ...props }: any) => {
                  const part = dragonDemoPart(typeof src === 'string' ? src : undefined)
                  return (
                    <video
                      {...props}
                      src={src}
                      poster={poster || images[0]}
                      controls
                      playsInline
                      preload="metadata"
                      data-playlist={part ? 'dragon-demo' : undefined}
                      data-part={part ? String(part) : undefined}
                      onPlay={event => {
                        props.onPlay?.(event)
                        if (part) preloadDragonDemoNext(event.currentTarget)
                      }}
                      onEnded={event => {
                        props.onEnded?.(event)
                        if (part) playDragonDemoNext(event.currentTarget)
                      }}
                    />
                  )
                },
              }}
            >
              {body}
            </ReactMarkdown>
          </div>
        )}

        {preview.length > 0 && (
          <div className="gal">
            {preview[0] && (
              <figure className="fig">
                <img src={preview[0]} alt="" onError={event => { (event.target as HTMLImageElement).style.display = 'none' }} />
                <figcaption><span>图 {pad(1)}</span><span>{pad(1)} / {pad(images.length)}</span></figcaption>
              </figure>
            )}
            {preview.length > 1 && (
              <div className="grid12 two">
                {preview.slice(1, 3).map((src, index) => (
                  <figure className="fig" key={src}>
                    <img src={src} alt="" loading="lazy" onError={event => { (event.target as HTMLImageElement).style.display = 'none' }} />
                    <figcaption><span>图 {pad(index + 2)}</span><span>{pad(index + 2)} / {pad(images.length)}</span></figcaption>
                  </figure>
                ))}
              </div>
            )}
            {open && preview.slice(3).map((src, index) => (
              <figure className="fig" key={src} style={{ marginTop: 24 }}>
                <img src={src} alt="" loading="lazy" onError={event => { (event.target as HTMLImageElement).style.display = 'none' }} />
                <figcaption><span>图 {pad(index + 4)}</span><span>{pad(index + 4)} / {pad(images.length)}</span></figcaption>
              </figure>
            ))}
            {!open && hidden > 0 && (
              <div style={{ marginTop: 28, display: 'flex', justifyContent: 'center' }}>
                <button type="button" className="lnk" onClick={() => setOpen(true)}>展开其余 {hidden} 张图 ↓</button>
              </div>
            )}
          </div>
        )}

        <div className="grid12 pn">
          <div className="back">
            <span className="lab">目录</span>
            <Link className="lnk" to={work.group === '笔记' ? '/tutorial' : '/work'}>← 返回{work.group === '笔记' ? '笔记' : '作品'}</Link>
          </div>
          <Link className="nx" to={next.href}>
            <div>
              <span className="lab">下一件 →</span>
              <h4>{next.title}</h4>
              <p>{next.subtitle ? `${next.subtitle} · ` : ''}{next.yearLabel}</p>
            </div>
            <div className="th"><Cover work={next} showGo={false} /></div>
          </Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
