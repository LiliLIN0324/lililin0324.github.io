import {
  projects,
  productProjects,
  gameProjects,
  aiProjects,
  platformProjects,
  tutorialProjects,
} from './projects'

/**
 * Site id → R2 folder, when they differ.
 * Card and hero URLs are built only from this map (then the icon folder, then the site id).
 */
export const R2_SLUG_BY_SITE_ID: Record<string, string> = {
  'early-campus-experience': 'perslearn',
  'guangzhou-xinyuan-tech': 'guangzhou-xinyuan',
  '72-hour-game-jam': 'game-jam',
  'urban-heat-resilience-machine-learning': 'urban-heat-resilience-ml',
  'peace-elite-hust-campus': 'peace-elite-hust',
  'prompt-engineering-agentic-rag': 'agentic-rag',
}

/** Public bucket. Cover videos are objects at the bucket root, not under fig/. */
export const R2_BASE = 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev'

/**
 * First live `<video src>` in each work's markdown, keyed by site slug.
 * Every URL here returned HTTP 206 on a ranged GET (the object exists).
 * Omitted on purpose — the file 404s, so the card stays on the still:
 *   scendance → Scendance.mp4
 *   hongqiqu → hongqiqu_1.mp4, hongqiqu_2.mp4
 * Works with several live clips use the first one, matching the old homepage.
 */
export const VIDEO_BY_SLUG: Record<string, string> = {
  'riffle-ai-game-generation-tool': `${R2_BASE}/Riffle.mp4`,
  genstyle: `${R2_BASE}/genstyle.mp4`,
  'genshot-AI-video-generation-tool': `${R2_BASE}/Genshot.mp4`,
  anyreal: `${R2_BASE}/AnyReal.mp4`,
  'dragon-diffussion': `${R2_BASE}/DragonDiffusion-Demo.mp4`,
  'early-campus-experience': `${R2_BASE}/1037pinpin.mp4`,
  'epstein-mystery-archive': `${R2_BASE}/epstein.mp4`,
  'guangzhou-xinyuan-tech': `${R2_BASE}/bilibili_2.mp4`,
  'bmw-meta-island': `${R2_BASE}/BMW%26TJ_1.mp4`,
  'peace-elite-hust-campus': `${R2_BASE}/%E7%BB%BF%E6%B4%B2%E9%AB%98%E6%A0%A1_1.mp4`,
  '72-hour-game-jam': `${R2_BASE}/NamelessRoad.mp4`,
  'prompt-engineering-agentic-rag': `${R2_BASE}/agentic-rag.mp4`,
  'knowledge-graph-urban-planning': `${R2_BASE}/KnowledgeGraph.mp4`,
  'urban-heat-resilience-machine-learning': `${R2_BASE}/GBDT2.mp4`,
  'participatory-urban-regeneration-empowered-by-artificial-intelligence': `${R2_BASE}/PARTICIPATORY%20URBAN%20REGENERATION%20EMPOWERED%20BY%20ARTIFICAL%20INTELLIGENCE.mp4`,
  'local-climate-zones-urban-heat-resilience': `${R2_BASE}/Local%20Climate%20Zone.mp4`,
  'campus-public-space-vitality-modeling': `${R2_BASE}/campus-public-space-vitality-modeling.mp4`,
  neurotopia: `${R2_BASE}/Neurotopia.mp4`,
  'chicken-utopia': `${R2_BASE}/ChickenUtopia.mp4`,
}

export const FIG = `${R2_BASE}/fig`
export const MUJING_URL = 'https://mujing-universe.pages.dev/'
export const EMAIL = 'lili0324@snu.ac.kr'

export type WorkGroup = '产品' | '游戏' | '城市与 AI' | '笔记'

export interface WorkItem {
  slug: string
  routeType: string
  href: string
  title: string
  subtitle: string
  group: WorkGroup
  yearLabel: string
  /** Card / index blurb. Genshot is the literal placeholder "TODO". */
  description: string
  tech: string[]
  category: string
  abstract: string
  challenge: string
  solution: string
  content: string
  images: string[]
  icon: string
  r2: string
  hasDemo: boolean
  demoOnly: boolean
  /** Present only when the markdown states a first-person role. */
  role?: string
  /** 1-based position in the 28-work catalog. Notes are numbered within notes. */
  no: number
}

type RawProject = {
  id: string
  slug: string
  title: string
  category: string
  year: string
  description: string
  tech: string[]
  hasDemo: boolean
  details: {
    abstract: string
    description: string
    challenge: string
    solution: string
    logo: string
    icon: string
    image: string[]
    content: string
    demoOnly: boolean
  }
}

/** Approved card titles. Subtitles split from frontmatter, with the Chinese forms used in the design. */
const COPY: Record<string, { title: string; sub: string; desc?: string }> = {
  scendance: { title: '幕景 Scendance', sub: 'AI 活动布置工作台' },
  'riffle-ai-game-generation-tool': { title: 'Riffle', sub: 'AI 游戏生成工具' },
  genstyle: { title: 'Genstyle', sub: '每日穿搭灵感' },
  // TODO: Genshot's frontmatter description was copied from Dragon Diffusion.
  // Subtitle is a placeholder taken from the title, not a verified product blurb.
  'genshot-AI-video-generation-tool': { title: 'Genshot', sub: 'AI 视频生成工具', desc: 'TODO' },
  'bazi-fengshui-analysis': { title: '洛书八字', sub: 'Bazi · 风水分析应用' },
  anyreal: { title: 'AnyReal', sub: 'AI 虚拟影棚' },
  'dragon-diffussion': { title: 'Dragon Diffusion', sub: 'AI 创意生产平台' },
  'early-campus-experience': { title: '1037拼拼 & PersLEARN', sub: '早期校园产品' },
  litflow: { title: 'LitFlow', sub: 'Research Hub' },
  'epstein-mystery-archive': { title: 'Epstein Mystery Archive', sub: '档案平台' },
  kittylovecarrots: { title: '指萝卜', sub: '个人开发微信小游戏' },
  'guangzhou-xinyuan-tech': { title: '广州心源科技', sub: 'Bilibili 游戏子公司实习' },
  'bmw-meta-island': { title: '一杯咖啡的游戏旅程', sub: '同济 × BMW 联合挑战营' },
  'peace-elite-hust-campus': { title: '和平精英 × 华中科技大学', sub: '绿洲世界高校共建' },
  '72-hour-game-jam': { title: '无名之路', sub: '腾讯 × 华科 72 小时极限开发' },
  'prompt-engineering-agentic-rag': { title: 'Agentic RAG', sub: '城市规划知识库' },
  'knowledge-graph-urban-planning': { title: '城市规划文本知识图谱', sub: '多模型评测' },
  'urban-heat-resilience-machine-learning': { title: 'Urban Heat Resilience', sub: '可解释机器学习' },
  'participatory-urban-regeneration-empowered-by-artificial-intelligence': { title: '参与式城市更新', sub: 'AI 赋能' },
  'local-climate-zones-urban-heat-resilience': { title: 'Local Climate Zones', sub: '城市热韧性' },
  heatmapper: { title: 'HeatMapper', sub: '全球热监测' },
  'cluster-visualizer-3d': { title: 'Cluster Visualizer 3D', sub: '全球空间聚类' },
  'previous-planning-research': { title: 'Previous Planning Research', sub: '研究综述' },
  'campus-public-space-vitality-modeling': { title: '校园公共空间活力建模', sub: 'Urban Sensing' },
  neurotopia: { title: 'Neurotopia', sub: '神经元式城市设计' },
  hongqiqu: { title: '红旗渠遗产价值评估', sub: '' },
  'chicken-utopia': { title: 'Chicken Utopia', sub: '小鸡乌托邦' },
  'previous-archi-work': { title: '建筑作品集', sub: 'Previous Archi Work' },
}

/** Catalog order matches the approved index (category, then recency within the group). */
const WORK_ORDER = [
  'scendance',
  'riffle-ai-game-generation-tool',
  'genstyle',
  'genshot-AI-video-generation-tool',
  'bazi-fengshui-analysis',
  'anyreal',
  'dragon-diffussion',
  'early-campus-experience',
  'litflow',
  'epstein-mystery-archive',
  'kittylovecarrots',
  'guangzhou-xinyuan-tech',
  'bmw-meta-island',
  'peace-elite-hust-campus',
  '72-hour-game-jam',
  'prompt-engineering-agentic-rag',
  'knowledge-graph-urban-planning',
  'urban-heat-resilience-machine-learning',
  'participatory-urban-regeneration-empowered-by-artificial-intelligence',
  'local-climate-zones-urban-heat-resilience',
  'heatmapper',
  'cluster-visualizer-3d',
  'previous-planning-research',
  'campus-public-space-vitality-modeling',
  'neurotopia',
  'hongqiqu',
  'chicken-utopia',
  'previous-archi-work',
]

export const FEATURED_SLUGS = [
  'riffle-ai-game-generation-tool',
  'anyreal',
  'neurotopia',
  'kittylovecarrots',
  'bazi-fengshui-analysis',
  'peace-elite-hust-campus',
]

/** Four homepage hero frames. Neurotopia is first; it is the only project with hero.jpg / hero-m.jpg. */
export const HERO_SLUGS = [
  'neurotopia',
  'riffle-ai-game-generation-tool',
  'anyreal',
  'kittylovecarrots',
]

const GROUP_BY_ROUTE: Record<string, WorkGroup> = {
  product: '产品',
  platform: '产品',
  game: '游戏',
  ai: '城市与 AI',
  planning: '城市与 AI',
  tutorial: '笔记',
}

export function r2Folder(slug: string, icon?: string): string {
  if (R2_SLUG_BY_SITE_ID[slug]) return R2_SLUG_BY_SITE_ID[slug]
  const fromIcon = icon?.match(/\/fig\/([^/]+)\//)?.[1]
  return fromIcon || slug
}

function firstSentence(text: string): string {
  const clean = text.replace(/\s+/g, ' ').trim()
  if (!clean) return ''
  const cut = clean.split(/(?<=[。！？.])/)[0]
  return (cut || clean).trim()
}

/** `2023.10-2024.9` → `2023–2024`; `2025-present` / ongoing → `2025–`. */
export function formatYear(raw: string): string {
  const years = Array.from(raw.matchAll(/(20\d{2})/g), m => m[1])
  if (years.length === 0) return raw.trim()
  const ongoing = /present|ongoing|on\s*going|进行/i.test(raw)
  const first = years[0]
  const last = years[years.length - 1]
  if (first === last) return ongoing ? `${first}–` : first
  return `${first}–${last}`
}

function splitTitle(title: string): { title: string; sub: string } {
  const parts = title.split(/\s[-—–]\s/)
  if (parts.length >= 2) {
    return { title: parts[0].trim(), sub: parts.slice(1).join(' - ').trim() }
  }
  return { title: title.trim(), sub: '' }
}

/**
 * Role line only when the article itself says what the author did.
 * Status is not inferred from "ongoing" or similar year text.
 */
export function extractRole(content: string): string | undefined {
  const plain = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ')
  const patterns = [
    /我主要担任[^。！？]{2,180}/,
    /我担任[^。！？]{2,180}/,
    /我主要负责[^。！？]{2,180}/,
    /我参与了[^。]{0,100}负责[^。！？]{2,140}/,
  ]
  for (const pattern of patterns) {
    const match = plain.match(pattern)
    if (match) return match[0].replace(/\s+/g, ' ').trim()
  }
  return undefined
}

function tag(list: RawProject[], routeType: string) {
  return list.map(project => ({ project, routeType }))
}

const tagged = [
  ...tag(productProjects as RawProject[], 'product'),
  ...tag(platformProjects as RawProject[], 'platform'),
  ...tag(gameProjects as RawProject[], 'game'),
  ...tag(aiProjects as RawProject[], 'ai'),
  ...tag(projects as RawProject[], 'planning'),
  ...tag(tutorialProjects as RawProject[], 'tutorial'),
]

function toWork(entry: { project: RawProject; routeType: string }, no: number): WorkItem {
  const { project, routeType } = entry
  const copy = COPY[project.slug]
  const split = splitTitle(project.title || project.slug)
  const icon = project.details.icon || project.details.logo || ''
  // TODO: Genshot description in the markdown was Dragon Diffusion's sentence. Never surface it.
  const sourced = project.description || firstSentence(project.details.abstract) || firstSentence(project.details.solution)
  const description = project.slug === 'genshot-AI-video-generation-tool' ? 'TODO' : sourced
  const role = extractRole(project.details.content || '')
  return {
    slug: project.slug,
    routeType,
    href: `/${routeType}/${project.slug}`,
    title: copy?.title || split.title,
    subtitle: copy?.sub ?? split.sub,
    group: GROUP_BY_ROUTE[routeType] || '产品',
    yearLabel: formatYear(String(project.year || '')),
    description,
    tech: Array.isArray(project.tech) ? project.tech : [],
    category: project.category || '',
    abstract: project.details.abstract || '',
    challenge: project.details.challenge || '',
    solution: project.details.solution || '',
    content: project.details.content || '',
    images: Array.isArray(project.details.image) ? project.details.image : [],
    icon,
    r2: r2Folder(project.slug, icon),
    hasDemo: Boolean(project.hasDemo),
    demoOnly: Boolean(project.details.demoOnly),
    role,
    no,
  }
}

const bySlug = new Map(tagged.map(entry => [entry.project.slug, entry]))

function ordered(slugs: string[], routeType?: string): WorkItem[] {
  const entries = slugs
    .map(slug => bySlug.get(slug))
    .filter((entry): entry is { project: RawProject; routeType: string } => Boolean(entry))
    .filter(entry => (routeType ? entry.routeType === routeType : entry.routeType !== 'tutorial'))
  return entries.map((entry, index) => toWork(entry, index + 1))
}

/** 28 works. Tutorials are not included. Platform projects are part of this 28. */
export const works: WorkItem[] = ordered(WORK_ORDER)

/** 9 notes. They stay on /tutorial and never enter the works grid. */
export const notes: WorkItem[] = (tutorialProjects as RawProject[]).map((project, index) =>
  toWork({ project, routeType: 'tutorial' }, index + 1),
)

export const WORK_COUNT = works.length
export const NOTE_COUNT = notes.length

export const featured: WorkItem[] = FEATURED_SLUGS
  .map(slug => works.find(work => work.slug === slug))
  .filter((work): work is WorkItem => Boolean(work))

export const heroSlides: WorkItem[] = HERO_SLUGS
  .map(slug => works.find(work => work.slug === slug))
  .filter((work): work is WorkItem => Boolean(work))

export function worksInGroup(group: WorkGroup): WorkItem[] {
  return works.filter(work => work.group === group)
}

export const groupCounts = {
  产品: worksInGroup('产品').length,
  游戏: worksInGroup('游戏').length,
  '城市与 AI': worksInGroup('城市与 AI').length,
  笔记: notes.length,
} as const

/**
 * JUMP dice targets: one detail path per work.
 * Notes are excluded. The two platform *projects* stay in the pool because they are part of the 28;
 * the dice does not open the Platform or Tutorial section indexes.
 */
export const diceWorkPaths: string[] = works.map(work => work.href)

export function findWork(pathname: string): WorkItem | undefined {
  const path = pathname.replace(/\/$/, '') || '/'
  return works.find(work => work.href === path) || notes.find(work => work.href === path)
}

export function nextWork(current: WorkItem): WorkItem {
  const list = current.group === '笔记' ? notes : works
  const index = list.findIndex(work => work.slug === current.slug && work.routeType === current.routeType)
  return list[(index + 1 + list.length) % list.length]
}

export interface CoverSource {
  src: string
  logo?: boolean
  srcSet?: string
}

export interface ManifestMedia {
  card?: string
  card_s?: string
  hero?: string
  hero_m?: string
}

const CDN = R2_BASE

/** Tried in order. The public bucket did not serve these at build time; the chain below still works. */
export const MANIFEST_URLS = [
  `${FIG}/manifest.json`,
  `${CDN}/manifest.json`,
  `${CDN}/fig/manifest.json`,
]

/** No card.jpg. Logo exists, but the card should be the typographic title, not that logo. */
const TITLE_FALLBACK_SLUGS = new Set(['previous-planning-research'])

let manifestByKey = new Map<string, ManifestMedia>()
let manifestLoaded = false
const manifestListeners = new Set<() => void>()

function asUrl(value: unknown, folder: string, file: string): string | undefined {
  if (value === true) return `${FIG}/${folder}/${file}`
  if (typeof value !== 'string' || !value.trim()) return undefined
  const raw = value.trim()
  if (/^https?:\/\//i.test(raw)) return raw
  if (raw.startsWith('/')) return `${CDN}${raw}`
  if (raw.startsWith('fig/')) return `${CDN}/${raw}`
  return `${FIG}/${folder}/${raw.replace(/^\.\//, '')}`
}

function remember(key: string | undefined, media: ManifestMedia) {
  if (!key) return
  const prev = manifestByKey.get(key) || {}
  manifestByKey.set(key, { ...prev, ...media })
}

/** Accepts a list or a slug-keyed object. Reads `card` and `card_s` (also hero / hero_m). */
export function ingestManifest(data: unknown) {
  const visit = (node: unknown, keyHint?: string) => {
    if (!node || typeof node !== 'object') return
    if (Array.isArray(node)) {
      node.forEach(item => visit(item))
      return
    }
    const record = node as Record<string, unknown>
    const slug = String(record.slug || record.id || record.folder || record.r2 || keyHint || '')
    const folder = r2Folder(slug, typeof record.icon === 'string' ? record.icon : undefined)
    const media: ManifestMedia = {
      card: asUrl(record.card, folder, 'card.jpg'),
      card_s: asUrl(record.card_s ?? record.cardS, folder, 'card-s.jpg'),
      hero: asUrl(record.hero, folder, 'hero.jpg'),
      hero_m: asUrl(record.hero_m ?? record.heroM, folder, 'hero-m.jpg'),
    }
    if (media.card || media.card_s || media.hero || media.hero_m) {
      remember(slug, media)
      remember(folder, media)
    }
    for (const [key, value] of Object.entries(record)) {
      if (value && typeof value === 'object') visit(value, key)
    }
  }
  visit(data)
  manifestLoaded = true
  manifestListeners.forEach(listener => listener())
}

export function subscribeManifest(listener: () => void) {
  manifestListeners.add(listener)
  return () => { manifestListeners.delete(listener) }
}

export function manifestMedia(work: WorkItem): ManifestMedia | undefined {
  return manifestByKey.get(work.slug) || manifestByKey.get(work.r2)
}

let manifestPromise: Promise<void> | null = null

export function loadManifest(): Promise<void> {
  if (manifestPromise) return manifestPromise
  manifestPromise = (async () => {
    for (const url of MANIFEST_URLS) {
      try {
        const response = await fetch(url)
        if (!response.ok) continue
        const data = await response.json()
        ingestManifest(data)
        return
      } catch {
        /* try the next URL, then the file-name chain */
      }
    }
    manifestLoaded = true
    manifestListeners.forEach(listener => listener())
  })()
  return manifestPromise
}

export function isManifestLoaded() {
  return manifestLoaded
}

function dedupe(sources: CoverSource[]): CoverSource[] {
  const seen = new Set<string>()
  return sources.filter(source => {
    if (!source.src || seen.has(source.src)) return false
    seen.add(source.src)
    return true
  })
}

/** Same pattern as the v1 homepage: `<video ... src="...">` in the markdown body. */
export function extractVideos(content: string): string[] {
  if (!content) return []
  const re = /<video[^>]+src="([^"]+)"/gi
  return Array.from(content.matchAll(re), match => match[1])
}

const VERIFIED_VIDEO_URLS = new Set(Object.values(VIDEO_BY_SLUG))

/**
 * Cover clip for a work. Only a markdown `<video src>` that is also in
 * VIDEO_BY_SLUG (HTTP-verified). A 404 such as Scendance.mp4 returns undefined
 * so the still chain is used instead of an empty black frame.
 */
export function coverVideo(work: Pick<WorkItem, 'slug' | 'content'>): string | undefined {
  const found = extractVideos(work.content)
  const listed = VIDEO_BY_SLUG[work.slug]
  if (listed && found.includes(listed)) return listed
  return found.find(src => VERIFIED_VIDEO_URLS.has(src))
}

/**
 * Prefer manifest `card` / `card_s` when that file is present.
 * Otherwise card.jpg → logo.jpg → 01.jpg (always .jpg) → the project's icon.
 * previous-planning-research has no card and uses the title block directly.
 * Scendance has no live cover video; poster.jpg is the still when it exists,
 * then card.jpg. logo.jpg and the 01–26 sequence are not required.
 */
export function coverSources(work: WorkItem): CoverSource[] {
  if (TITLE_FALLBACK_SLUGS.has(work.slug)) return []
  const base = `${FIG}/${work.r2}`
  const media = manifestMedia(work)
  const card = media?.card || `${base}/card.jpg`
  const cardSmall = media?.card_s || `${base}/card-s.jpg`
  const sources: CoverSource[] = []
  if (work.slug === 'scendance') sources.push({ src: `${base}/poster.jpg` })
  sources.push(
    { src: card, srcSet: `${cardSmall} 800w, ${card} 1600w` },
    { src: `${base}/logo.jpg`, logo: true },
    { src: `${base}/01.jpg` },
  )
  if (work.icon && !sources.some(source => source.src === work.icon)) {
    sources.push({ src: work.icon, logo: /logo\.(jpg|png|webp)$/i.test(work.icon) })
  }
  return dedupe(sources)
}

/**
 * Homepage / detail hero.
 * Neurotopia's R2 folder is `neurotopia` (same as the site id; logo lives at fig/neurotopia/logo.jpg).
 * hero.jpg (2400×1000) and hero-m.jpg (1080×1200) are requested only for that project.
 */
export function heroSources(work: WorkItem, mobile: boolean): CoverSource[] {
  if (TITLE_FALLBACK_SLUGS.has(work.slug)) return []
  const base = `${FIG}/${work.r2}`
  const media = manifestMedia(work)
  const sources: CoverSource[] = []
  if (work.r2 === 'neurotopia') {
    const desktop = media?.hero || `${base}/hero.jpg`
    const phone = media?.hero_m || `${base}/hero-m.jpg`
    sources.push({ src: mobile ? phone : desktop })
    if (mobile) sources.push({ src: desktop })
  } else if (mobile && media?.hero_m) {
    sources.push({ src: media.hero_m })
  } else if (media?.hero) {
    sources.push({ src: media.hero })
  }
  sources.push(...coverSources(work))
  if (work.images[0]) sources.push({ src: work.images[0].replace(/01\.png$/i, '01.jpg') })
  return dedupe(sources)
}

export function findBySlug(slug: string | undefined, routeType?: string): WorkItem | undefined {
  if (!slug) return undefined
  const lists = routeType === 'tutorial' ? [notes] : [works, notes]
  for (const list of lists) {
    const found = list.find(work => work.slug === slug && (!routeType || work.routeType === routeType))
    if (found) return found
  }
  return undefined
}
