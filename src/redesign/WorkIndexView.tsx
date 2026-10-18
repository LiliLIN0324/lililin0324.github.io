import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  NOTE_COUNT,
  WORK_COUNT,
  groupCounts,
  notes,
  works,
  type WorkGroup,
  type WorkItem,
} from '../data/catalog'
import { IndexTable } from './HomeView'
import { SectionHead, SiteFooter, WorkCard } from './ui'
import './redesign.css'

type Scope = 'all' | 'product' | 'game' | 'ai' | 'planning' | 'notes'

const FILTERS: { id: 'all' | WorkGroup; label: string; count: number }[] = [
  { id: 'all', label: '全部', count: WORK_COUNT },
  { id: '产品', label: '产品', count: groupCounts['产品'] },
  { id: '游戏', label: '游戏', count: groupCounts['游戏'] },
  { id: '城市与 AI', label: '城市与 AI', count: groupCounts['城市与 AI'] },
]

const COPY: Record<Scope, { title: string; count: number; intro: string }> = {
  all: {
    title: '作品',
    count: WORK_COUNT,
    intro: '产品、游戏与城市研究三条线的全部项目。点击卡片进入详情，详情页底部可直接翻到下一件。',
  },
  product: {
    title: '产品',
    count: works.filter(work => work.routeType === 'product').length,
    intro: '产品项目。全部 28 件在作品名录。',
  },
  game: {
    title: '游戏',
    count: works.filter(work => work.routeType === 'game').length,
    intro: '游戏设计、实习与独立开发。',
  },
  ai: {
    title: 'AI',
    count: works.filter(work => work.routeType === 'ai').length,
    intro: 'AI 与城市研究交叉的项目。',
  },
  planning: {
    title: 'Planning',
    count: works.filter(work => work.routeType === 'planning').length,
    intro: '城市规划与建筑设计项目。',
  },
  notes: {
    title: '笔记',
    count: NOTE_COUNT,
    intro: '教程笔记，不计入 28 件作品。',
  },
}

function itemsFor(scope: Scope, filter: 'all' | WorkGroup): WorkItem[] {
  if (scope === 'notes') return notes
  if (scope === 'product') return works.filter(work => work.routeType === 'product')
  if (scope === 'game') return works.filter(work => work.routeType === 'game')
  if (scope === 'ai') return works.filter(work => work.routeType === 'ai')
  if (scope === 'planning') return works.filter(work => work.routeType === 'planning')
  if (filter === 'all') return works
  return works.filter(work => work.group === filter)
}

export function WorkIndexView({ scope = 'all' }: { scope?: Scope }) {
  const [filter, setFilter] = useState<'all' | WorkGroup>('all')
  const [mode, setMode] = useState<'grid' | 'list'>('grid')
  const [shown, setShown] = useState(12)
  const sentinel = useRef<HTMLDivElement>(null)
  const copy = COPY[scope]
  const items = useMemo(() => itemsFor(scope, filter), [scope, filter])
  const visible = items.slice(0, shown)

  useEffect(() => { setShown(12) }, [filter, scope])

  useEffect(() => {
    const node = sentinel.current
    if (!node) return
    const root = document.querySelector('main > section')
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setShown(value => Math.min(items.length, value + 12))
      }
    }, { root: root instanceof HTMLElement ? root : null, rootMargin: '480px' })
    observer.observe(node)
    return () => observer.disconnect()
  }, [items.length, shown])

  return (
    <div className="swiss">
      <section className="w ph">
        <div className="grid12">
          <h1>{copy.title}<sup>{copy.count}</sup></h1>
          <p className="intro">{copy.intro}</p>
        </div>
        <div className="toolbar">
          {scope === 'all' ? (
            <div className="filters">
              {FILTERS.map(item => (
                <button key={item.id} type="button" className={filter === item.id ? 'on' : ''} onClick={() => setFilter(item.id)}>
                  {item.label}<sup>{item.count}</sup>
                </button>
              ))}
            </div>
          ) : (
            <div className="filters">
              <span className="lab">{visible.length} / {items.length}</span>
              {scope !== 'notes' && <Link to="/work">全部 {WORK_COUNT} 件作品 →</Link>}
            </div>
          )}
          <div className="viewtog">
            <button type="button" className={mode === 'grid' ? 'on' : ''} onClick={() => setMode('grid')}>网格</button>
            <button type="button" className={mode === 'list' ? 'on' : ''} onClick={() => setMode('list')}>列表</button>
          </div>
        </div>
        {mode === 'grid' ? (
          <div className="cards">
            {visible.map(work => <WorkCard key={work.href} work={work} />)}
          </div>
        ) : (
          <IndexTable items={visible} />
        )}
        <div ref={sentinel} />
        {shown < items.length && <p className="lab" style={{ marginTop: 28 }}>继续滚动以加载其余 {items.length - shown} 件</p>}
        {scope === 'notes' && (
          <div style={{ marginTop: 48 }}>
            <SectionHead n="—" title="作品" en="Works" right={<Link to="/work"><b>{WORK_COUNT} 件 →</b></Link>} />
          </div>
        )}
      </section>
      <SiteFooter />
    </div>
  )
}
