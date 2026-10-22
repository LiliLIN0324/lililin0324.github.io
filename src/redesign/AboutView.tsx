import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { EMAIL, MUJING_URL } from '../data/catalog'
import { SectionHead, SiteFooter } from './ui'
import './redesign.css'

const competencies = [
  '城市气候与韧性',
  'AI 辅助城市规划',
  '机器学习与数据分析',
  '空间统计与 GIS',
  'React / Next.js 生态',
  'TypeScript 架构',
  'WebGL / Three.js 3D 可视化',
  'UI 设计系统',
]

const talks = [
  { date: '2026.07', event: 'IACP 第 20 届年会', city: '西安', title: 'Nonlinear Impacts of Urban Form on Urban Heat Islands — Seoul', format: '口头报告' },
  { date: '2026.01', event: '39th AAAI Workshop · AI for Urban Planning', city: '新加坡', title: 'Assessing Nonlinear Impacts of Urban Form on Heat Resilience Across Scales', format: '海报' },
  { date: '2025.10', event: 'ACSP 第 65 届年会', city: '明尼阿波利斯', title: 'Nonlinear relationships between urban form and extreme heat (XAI)', format: '口头报告' },
  { date: '2025.07', event: 'IACP 第 19 届年会', city: '厦门', title: 'Knowledge Graph Generation from Urban Planning Texts', format: '口头报告' },
  { date: '2025.06', event: 'CUPUM', city: '伦敦', title: 'Knowledge Graph Generation from Urban Planning Texts', format: '口头报告' },
  { date: '2025.04', event: 'ICUA 第 52 届', city: '温哥华', title: 'Local Climate Zone and Urban Heat Resilience — New York', format: '口头报告' },
  { date: '2025.02', event: '39th AAAI Workshop · AI for Urban Planning', city: '费城', title: 'Knowledge Graph Generation from Urban Planning Texts', format: '海报' },
  { date: '2024.10', event: 'UDIK 秋季学术会议', city: '首尔', title: 'Decentralized future urban design based on neurons', format: '口头报告' },
]

type Award = { name: string; year: string; file?: string; files?: { file: string; label?: string }[] }

const CERT = 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/certificate/'
const scholarships: Award[] = [
  { name: '优秀外国人研究奖学金', year: '2024', file: '优秀外国人研究奖学金2024.jpg' },
  { name: '中国近现代科学家助学金', year: '2024', file: '中国近现代科学家助学金.jpg' },
  { name: '国家励志奖学金', year: '2020', file: '国家励志奖学金2020.jpg' },
  { name: '国家励志奖学金', year: '2021', file: '国家励志奖学金2021.jpg' },
  { name: '国家励志奖学金', year: '2022', file: '国家励志奖学金2022.jpg' },
  { name: '国家励志奖学金', year: '2023', file: '国家励志奖学金2023.jpg' },
  { name: '学习优秀奖学金', year: '2020', file: '学习优秀奖学金-2020.jpg' },
  { name: '自强奖学金', year: '2023', file: '自强奖学金2023.jpg' },
]
const honors: Award[] = [
  { name: '优秀毕业生', year: '2024', file: '优秀毕业生.jpg' },
  { name: '三好学生', year: '2021', file: '三好学生2021.jpg' },
  { name: '三好学生', year: '2023', file: '三好学生2023.jpg' },
  { name: '优秀学生干部', year: '2022', file: '优秀学生干部2022.jpg' },
  { name: '优秀共青团员', year: '2020', file: '优秀共青团员2020.jpg' },
  { name: '优秀共青团员', year: '2022', file: '优秀共青团员2022.jpg' },
  { name: '全国计算机等级考试三级 · 网络技术', year: '2022', file: '计算机三级等级证明2022.jpg' },
]
const competitions: Award[] = [
  { name: '亚洲设计学年奖 银奖、铜奖、优秀奖', year: '2023' },
  { name: '米兰设计周省级一等奖', year: '2023', file: '米兰设计周2023.jpg' },
  { name: '中央国际玻璃国际建筑设计竞赛 佳作奖', year: '2023', file: '中央国际玻璃竞赛2023.jpg' },
  { name: '“互联网+”大学生创新创业大赛 武汉市银奖 / 湖北省铜奖', year: '2022', files: [
    { file: '互联网+省赛市赛名单2022.jpg', label: '武汉市银奖 / 湖北省铜奖名单' },
    { file: '互联网+省赛铜奖2022.jpg', label: '省赛铜奖证书' },
  ] },
  { name: 'eVolo 摩天大楼建筑竞赛 编辑部推荐奖', year: '2022', file: 'evolo摩天大楼竞赛2022.jpg' },
  { name: '腾讯游戏极限开发挑战赛 金奖', year: '2021', file: '腾讯华科Gamejams金奖2021.jpg' },
]
const projects: Award[] = [
  { name: '最佳跨界融合奖 · 同济 AI4CITIES 工作坊', year: '2025', file: 'AI4CITIES最佳跨界融合奖.jpg' },
  { name: '国家级大创项目《红旗渠类山地灌渠工程遗产价值判定与数字化平台构建》', year: '2023' },
  { name: 'Digital Futures workshop 参与证书', year: '2023', file: 'digitalfuture2023.jpg' },
  { name: 'ITC 青年论坛', year: '2022', file: 'ITC青年论坛2022.jpg' },
]

function imagesOf(item: Award) {
  if (item.files?.length) return item.files
  if (item.file) return [{ file: item.file }]
  return []
}

export function AboutView() {
  const [open, setOpen] = useState<Award | null>(null)
  const [frame, setFrame] = useState(0)
  const [moreTalks, setMoreTalks] = useState(false)
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)')
    const apply = () => setMobile(media.matches)
    apply()
    media.addEventListener('change', apply)
    return () => media.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const shownTalks = mobile && !moreTalks ? talks.slice(0, 4) : talks
  const shots = open ? imagesOf(open) : []

  return (
    <div className="swiss">
      <section className="w ah">
        <div className="grid12">
          <h1>关于</h1>
          <div className="pic">
            <img src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/lili/lili_01.png" alt="林丽丽" />
          </div>
          <p className="lead">我喜欢设计，也喜欢写代码。</p>
        </div>
        <div className="grid12 bio">
          <div className="l"><span className="lab">林丽丽 · Lili Lin</span></div>
          <div className="t">
            <p>我是林丽丽，毕业于首尔大学城市与区域规划专业，拥有华中科技大学建筑学背景。</p>
            <p>我关注 AI 与产品创新，喜欢从用户需求出发，将复杂的技术转化为直观、易用的产品体验。过去的实践涵盖 AI 视频、AI 图像、AI 电商等多模态产品，也参与过产品策划、AI Workflow、交互设计与前端开发。</p>
            <p>与此同时，我持续探索 AI × 城市 × 空间的交叉领域，研究城市气候、城市形态、空间统计与机器学习，并尝试将数据、AI 与设计结合起来解决真实世界的问题。</p>
            <p>我喜欢设计，也喜欢写代码。对我而言，产品、设计与技术并不是彼此独立的领域，而是构建好产品的不同语言。</p>
          </div>
          <div className="r">
            <span className="lab">教育</span>
            <div>首尔大学<br />城市与区域规划</div>
            <div style={{ marginTop: 14 }}>华中科技大学<br />建筑学</div>
          </div>
        </div>

        <div className="blk">
          <SectionHead n="01" title="方向与能力" en="Competencies" />
          <div className="grid12 comp">
            {competencies.map((item, index) => (
              <div key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</div>
            ))}
          </div>
        </div>

        <div className="blk">
          <SectionHead n="02" title="学术报告" en="Talks" right={<span>8 场 · 2024–2026</span>} />
          <div className="tk">
            {shownTalks.map(talk => (
              <div className="r" key={talk.date + talk.event}>
                <span className="d">{talk.date}</span>
                <span className="e">{talk.event}</span>
                <span className="c">{talk.city}</span>
                <span className="tt">{talk.title}</span>
                <span className="f">{talk.format}</span>
              </div>
            ))}
          </div>
          {mobile && (
            <button type="button" className="lnk" style={{ marginTop: 16 }} onClick={() => setMoreTalks(value => !value)}>
              {moreTalks ? '收起' : `展开其余 ${talks.length - 4} 场`}
            </button>
          )}
        </div>

        <div className="blk">
          <SectionHead n="03" title="奖学金与荣誉" en="Scholarships & Honors" right={<span>带 ⊕ 的条目可点开证书</span>} />
          <div className="grid12 aw">
            <div className="col">
              <h3>奖学金<em>Scholarships</em></h3>
              {scholarships.map(item => (
                <AwardRow key={`${item.name}-${item.year}`} item={item} onOpen={award => { setOpen(award); setFrame(0) }} />
              ))}
            </div>
            <div className="col">
              <h3>荣誉<em>Honors</em></h3>
              {honors.map(item => (
                <AwardRow key={`${item.name}-${item.year}`} item={item} onOpen={award => { setOpen(award); setFrame(0) }} />
              ))}
            </div>
          </div>
        </div>

        <div className="blk">
          <SectionHead n="04" title="竞赛与项目" en="Awards" right={<span>带 ⊕ 的条目可点开证书</span>} />
          <div className="grid12 aw">
            <div className="col">
              <h3>竞赛奖项<em>Competitions</em></h3>
              {competitions.map(item => (
                <AwardRow key={`${item.name}-${item.year}`} item={item} onOpen={award => { setOpen(award); setFrame(0) }} />
              ))}
            </div>
            <div className="col">
              <h3>项目与其他<em>Projects</em></h3>
              {projects.map(item => (
                <AwardRow key={`${item.name}-${item.year}`} item={item} onOpen={award => { setOpen(award); setFrame(0) }} />
              ))}
            </div>
          </div>
        </div>

        <div className="blk">
          <SectionHead n="05" title="链接" en="Links" />
          <div className="lk">
            <a href="https://www.instagram.com/lililin_portfolio/" target="_blank" rel="noopener"><b>Instagram</b><span>instagram.com/lililin_portfolio</span><i>↗</i></a>
            <a href="https://github.com/lililin0324" target="_blank" rel="noopener"><b>GitHub</b><span>github.com/lililin0324</span><i>↗</i></a>
            <a href="https://www.linkedin.com/in/lililin0324" target="_blank" rel="noopener"><b>LinkedIn</b><span>linkedin.com/in/lililin0324</span><i>↗</i></a>
            <a href={`mailto:${EMAIL}`}><b>邮件</b><span>{EMAIL}</span><i>↗</i></a>
          </div>
        </div>

        <div className="grid12 mjs">
          <div className="im">
            <img src="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/xihu-panorama/01.jpg" alt="" />
          </div>
          <div className="tx">
            <div>
              <span className="lab"><span className="sq" /> 另见 · 外部站点</span>
              <h3>幕景宇宙</h3>
              <p>幕景宇宙是独立于本作品集的另一个官方站点。</p>
            </div>
            <a className="btn" href={MUJING_URL} target="_blank" rel="noopener" style={{ alignSelf: 'flex-start' }}>幕景宇宙官网 ↗</a>
          </div>
        </div>
      </section>
      <SiteFooter />
      {open && shots[frame] && createPortal(
        <div className="lightbox" onClick={() => setOpen(null)} role="dialog" aria-modal="true">
          <button type="button" className="x" aria-label="关闭" onClick={() => setOpen(null)}>×</button>
          <figure onClick={event => event.stopPropagation()}>
            <img src={`${CERT}${encodeURIComponent(shots[frame].file)}`} alt={open.name} />
            <figcaption>
              {open.name} · {open.year}
              {shots.length > 1 ? ` · ${frame + 1} / ${shots.length}` : ''}
              {shots.length > 1 && (
                <button type="button" className="lnk" style={{ color: '#fff', marginLeft: 12 }} onClick={() => setFrame(value => (value + 1) % shots.length)}>下一张</button>
              )}
            </figcaption>
          </figure>
        </div>,
        document.body,
      )}
    </div>
  )
}

function AwardRow({ item, onOpen }: { item: Award; onOpen: (item: Award) => void }) {
  const zoom = imagesOf(item).length > 0
  if (!zoom) {
    return (
      <div className="it" style={{ cursor: 'default' }}>
        <b>{item.year}</b><span>{item.name}</span><i />
      </div>
    )
  }
  return (
    <button type="button" className="it" onClick={() => onOpen(item)}>
      <b>{item.year}</b><span>{item.name}</span><i>⊕</i>
    </button>
  )
}
