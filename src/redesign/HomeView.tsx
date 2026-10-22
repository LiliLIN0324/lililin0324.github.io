import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MUJING_URL,
  WORK_COUNT,
  featured,
  groupCounts,
  heroSlides,
  works,
  worksInGroup,
  type WorkGroup,
  type WorkItem,
} from '../data/catalog'
import { HeroFrame, SectionHead, SiteFooter, WorkCard, pad, useReducedMotion } from './ui'
import './redesign.css'

const FILTERS: { id: 'all' | WorkGroup; label: string; count: number }[] = [
  { id: 'all', label: '全部', count: WORK_COUNT },
  { id: '产品', label: '产品', count: groupCounts['产品'] },
  { id: '游戏', label: '游戏', count: groupCounts['游戏'] },
  { id: '城市与 AI', label: '城市与 AI', count: groupCounts['城市与 AI'] },
]

const LOGO_GROUPS = ['产品', '游戏', '城市与 AI'] as const

function LogoTile({ work }: { work: WorkItem }) {
  const [failed, setFailed] = useState(false)
  return (
    <Link to={work.href} className="lt" title={`${work.title} · ${work.subtitle}`} aria-label={work.title}>
      <span className={failed || !work.icon ? 'lt-pic miss' : 'lt-pic'}>
        {failed || !work.icon
          ? <i>{work.title.slice(0, 2)}</i>
          : <img src={work.icon} alt="" loading="lazy" onError={() => setFailed(true)} />}
      </span>
      <span className="lt-name">{work.title}</span>
    </Link>
  )
}

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

export function HomeView() {
  const reduced = useReducedMotion()
  const mobile = useMobile()
  const [slide, setSlide] = useState(0)
  const [paused, setPaused] = useState(false)
  const [filter, setFilter] = useState<(typeof FILTERS)[number]['id']>('all')
  const [mode, setMode] = useState<'list' | 'grid'>('list')
  const filterRef = useRef<HTMLDivElement>(null)
  const current = heroSlides[slide] || heroSlides[0]
  const filtered = filter === 'all' ? works : works.filter(work => work.group === filter)
  const rows = filter === 'all' ? filtered.slice(0, mobile ? 4 : 10) : filtered

  useEffect(() => {
    if (reduced || paused || heroSlides.length < 2) return
    const timer = window.setInterval(() => {
      setSlide(value => (value + 1) % heroSlides.length)
    }, 6000)
    return () => window.clearInterval(timer)
  }, [reduced, paused, slide])

  const scrollToWorks = () => {
    document.getElementById('featured')?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
  }

  const chooseFilter = (next: (typeof FILTERS)[number]['id']) => {
    setFilter(next)
    requestAnimationFrame(() => {
      filterRef.current?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
    })
  }

  return (
    <div className="swiss">
      <section
        className="fold"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="hero">
          {current && (
            <Link to={current.href} className="hit" aria-label={current.title}>
              <HeroFrame key={current.slug + String(mobile)} work={current} mobile={mobile} />
            </Link>
          )}
        </div>
        <div className="info">
          <div className="info-grid">
            <div className="info-main">
              <h1>Lili Lin<small>林丽丽</small></h1>
              <p className="sub">AI 产品设计、游戏与交互，以及 AI × 城市研究。</p>
            </div>
            <div className="side side-desk">
              <div>
                <div className="kicker">正在展示 {pad(slide + 1)} / {pad(heroSlides.length)}</div>
                {current && <div className="now">{current.title}{current.subtitle ? <em>{current.subtitle}</em> : null}</div>}
                <div className="prog">
                  {heroSlides.map((item, index) => (
                    <button
                      key={item.slug}
                      type="button"
                      className={index === slide ? 'on' : ''}
                      aria-label={item.title}
                      onClick={() => setSlide(index)}
                    >
                      {index === slide && !reduced ? <i key={slide} /> : null}
                    </button>
                  ))}
                </div>
              </div>
              <button type="button" className="btn" onClick={scrollToWorks}>浏览作品 <i>↓</i></button>
            </div>
          </div>
          <div className="mob-only" style={{ marginTop: 20 }}>
            <div className="kicker">正在展示 {pad(slide + 1)} / {pad(heroSlides.length)}</div>
            {current && <div className="now">{current.title}{current.subtitle ? <em>{current.subtitle}</em> : null}</div>}
            <div className="prog">
              {heroSlides.map((item, index) => (
                <button key={item.slug} type="button" className={index === slide ? 'on' : ''} onClick={() => setSlide(index)} aria-label={item.title}>
                  {index === slide && !reduced ? <i key={`m${slide}`} /> : null}
                </button>
              ))}
            </div>
            <button type="button" className="btn block" style={{ width: '100%', marginTop: 18 }} onClick={scrollToWorks}>浏览作品 <i>↓</i></button>
          </div>
        </div>
      </section>

      <section className="sec w" id="featured">
        <SectionHead n="01" title="精选作品" en="Selected" />
        <div className="feat">
          {featured.map((work, index) => (
            <WorkCard key={work.slug} work={work} no={index + 1} />
          ))}
        </div>
      </section>

      <section className="sec w" id="index">
        <SectionHead n="02" title="全部作品" en="Index" />
        <div className="logowall">
          <span className="kicker">图标索引<em>Logo Index</em></span>
          {LOGO_GROUPS.map(group => {
            const items = worksInGroup(group)
            return (
              <div className="logorow" key={group}>
                <div className="logorow-label">
                  <b>{group}</b>
                </div>
                <div className="logorow-items">
                  {items.map(work => <LogoTile key={work.href} work={work} />)}
                </div>
              </div>
            )
          })}
        </div>
        <div className="filterbar" ref={filterRef}>
          <div className="filterbar-top">
            <span className="kicker">分类检索<em>Filter</em></span>
            <div className="viewtog">
              <button type="button" className={mode === 'list' ? 'on' : ''} onClick={() => setMode('list')}>列表</button>
              <button type="button" className={mode === 'grid' ? 'on' : ''} onClick={() => setMode('grid')}>网格</button>
            </div>
          </div>
          <div className="filterbar-row">
            <div className="chips">
              {FILTERS.map(item => (
                <button
                  key={item.id}
                  type="button"
                  className={filter === item.id ? 'on' : ''}
                  aria-pressed={filter === item.id}
                  onClick={() => chooseFilter(item.id)}
                >
                  {item.label}<sup>{item.count}</sup>
                </button>
              ))}
            </div>
          </div>
        </div>
        {mode === 'list' ? <IndexTable items={rows} /> : (
          <div className="cards">
            {rows.map(work => <WorkCard key={work.href} work={work} />)}
          </div>
        )}
        <div className="more">
          <Link className="lnk" to="/work">完整名录 →</Link>
        </div>
      </section>

      <section className="sec" id="elsewhere">
        <div className="w">
          <SectionHead n="03" title="相关项目" en="Elsewhere" />
        </div>
        <div className="mj">
          <img className="pan" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/xihu-panorama/01.jpg" alt="" />
          <div className="shade" />
          <div className="box">
            <h3>幕景宇宙</h3>
            <div className="row2">
              <a className="btn" href={MUJING_URL} target="_blank" rel="noopener">前往官网 ↗</a>
            </div>
          </div>
        </div>
      </section>

      <section className="sec w" id="about-teaser">
        <SectionHead n="04" title="关于" en="About" right={<Link to="/about"><b>完整介绍 →</b></Link>} />
        <div className="grid12 ab">
          <div className="pic">
            <img src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/lili/lili_01.png" alt="林丽丽" />
          </div>
          <div className="txt">
            <blockquote>我喜欢设计，也喜欢写代码。产品、设计与技术，是构建好产品的三种语言。</blockquote>
            <div className="facts">
              <div><span className="lab">教育</span>首尔大学 城市与区域规划<br />华中科技大学 建筑学</div>
              <div><span className="lab">学术报告</span>8 场 · AAAI Workshop、CUPUM、ACSP、IACP 等</div>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}

export function IndexTable({ items }: { items: WorkItem[] }) {
  return (
    <div className="idx">
      <div className="row hd">
        <span className="no">No.</span>
        <span className="t">作品</span>
        <span className="c">类别</span>
        <span className="d">简介</span>
        <span className="y">年份</span>
      </div>
      {items.map(work => (
        <Link key={work.href} to={work.href} className="row">
          <span className="no">{pad(work.no)}</span>
          <span className="t">{work.title}{work.subtitle ? <em>{work.subtitle}</em> : null}</span>
          <span className="c">{work.group}</span>
          <span className="d">{work.description}</span>
          <span className="y">{work.yearLabel}</span>
        </Link>
      ))}
    </div>
  )
}
