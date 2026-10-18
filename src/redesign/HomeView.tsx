import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  EMAIL,
  MUJING_URL,
  NOTE_COUNT,
  WORK_COUNT,
  featured,
  groupCounts,
  heroSlides,
  works,
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
  const current = heroSlides[slide] || heroSlides[0]
  const rows = (filter === 'all' ? works : works.filter(work => work.group === filter)).slice(0, mobile ? 4 : 10)

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
          {current && (
            <div className="cap">
              <b>{pad(slide + 1)} / {pad(heroSlides.length)}</b>
              <span>{current.title} · {current.group} · {current.yearLabel}</span>
            </div>
          )}
        </div>
        <div className="info">
          <div className="info-grid">
            <div className="info-main">
              <h1>Lili Lin<small>林丽丽</small></h1>
              <p className="sub">AI 产品设计、游戏与交互，以及 AI × 城市研究。</p>
              <p className="meta">首尔大学 城市与区域规划　·　华中科技大学 建筑学</p>
            </div>
            <div className="side side-desk">
              <div>
                <div className="kicker">正在展示</div>
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
            <div className="kicker">正在展示</div>
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
          <div className="scrollhint desk-only" aria-hidden="true"><span>SCROLL</span><b /></div>
        </div>
      </section>

      <section className="sec w" id="featured">
        <SectionHead
          n="01"
          title="精选作品"
          en="Selected"
          right={<><span>{pad(featured.length)} / {WORK_COUNT}</span><Link to="/work"><b>全部作品 →</b></Link></>}
        />
        <div className="grid12 feat">
          {featured.map((work, index) => {
            const slot = ['a', 'b', 'c', 'd', 'e', 'f'][index]
            const large = index === 0 || index === 5
            return (
              <div className={slot} key={work.slug}>
                <WorkCard work={work} no={index + 1} large={large} />
              </div>
            )
          })}
          <div className="st">
            <div className="big">{WORK_COUNT}<sup>件作品</sup></div>
            <ul>
              <li><span>产品</span><b>{groupCounts['产品']}</b></li>
              <li><span>游戏</span><b>{groupCounts['游戏']}</b></li>
              <li><span>城市与 AI</span><b>{groupCounts['城市与 AI']}</b></li>
              <li><Link to="/tutorial">笔记</Link><b>{NOTE_COUNT}</b></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sec w" id="index">
        <SectionHead n="02" title="全部作品" en="Index" right={<span>名录顺序</span>} />
        <div className="toolbar" style={{ position: 'static' }}>
          <div className="filters">
            {FILTERS.map(item => (
              <button key={item.id} type="button" className={filter === item.id ? 'on' : ''} onClick={() => setFilter(item.id)}>
                {item.label}<sup>{item.count}</sup>
              </button>
            ))}
          </div>
          <div className="viewtog">
            <button type="button" className={mode === 'list' ? 'on' : ''} onClick={() => setMode('list')}>列表</button>
            <button type="button" className={mode === 'grid' ? 'on' : ''} onClick={() => setMode('grid')}>网格</button>
          </div>
        </div>
        {mode === 'list' ? <IndexTable items={rows} /> : (
          <div className="cards">
            {rows.map(work => <WorkCard key={work.href} work={work} />)}
          </div>
        )}
        <div className="more">
          <span className="lab">显示 {rows.length} / {WORK_COUNT}</span>
          <Link className="lnk" to="/work">查看全部 {WORK_COUNT} 件作品 →</Link>
        </div>
      </section>

      <section className="sec" id="elsewhere">
        <div className="w">
          <SectionHead n="03" title="相关项目" en="Elsewhere" right={<span>外部站点</span>} />
        </div>
        <div className="mj">
          <img className="pan" src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/xihu-panorama/01.jpg" alt="" />
          <div className="shade" />
          <div className="box">
            <div className="lab"><span className="sq" /> 幕景宇宙 · 另一个官方站点</div>
            <h3>幕景宇宙</h3>
            <p>幕景宇宙是独立于本作品集的另一个官方站点。</p>
            <div className="row2">
              <a className="btn" href={MUJING_URL} target="_blank" rel="noopener">幕景宇宙官网 ↗</a>
            </div>
          </div>
        </div>
      </section>

      <section className="sec w" id="about-teaser">
        <SectionHead n="04" title="关于" en="About" right={<Link to="/about"><b>关于我 →</b></Link>} />
        <div className="grid12 ab">
          <div className="pic">
            <img src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/lili/lili_01.png" alt="林丽丽" />
          </div>
          <div className="txt">
            <blockquote>我喜欢设计，也喜欢写代码。对我而言，产品、设计与技术并不是彼此独立的领域，而是构建好产品的不同语言。</blockquote>
            <div className="facts">
              <div><span className="lab">教育</span>首尔大学 城市与区域规划<br />华中科技大学 建筑学</div>
              <div><span className="lab">学术报告</span>8 场 · AAAI Workshop、CUPUM、ACSP、IACP 等</div>
              <div>
                <span className="lab">链接</span>
                <a href="https://www.instagram.com/lililin_portfolio/" target="_blank" rel="noopener">Instagram ↗</a>
                {'　'}
                <a href="https://github.com/lililin0324" target="_blank" rel="noopener">GitHub ↗</a>
                <br />
                <a href="https://www.linkedin.com/in/lililin0324" target="_blank" rel="noopener">LinkedIn ↗</a>
                {'　'}
                <a href={`mailto:${EMAIL}`}>邮件</a>
              </div>
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
