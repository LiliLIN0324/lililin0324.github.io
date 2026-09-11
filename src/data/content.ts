/**
 * 「Content」时间轴 —— 首页用年份 × 分类展示所有项目的一览图。
 * 点图标先就地展开一张简介卡片（时间 + 简介），再点一次才进项目详情页；
 * 下方文字标签直接进对应的作品集分类页。
 */

import {
  projects,
  designProjects,
  gameProjects,
  aiProjects,
  platformProjects,
  tutorialProjects,
} from './projects'

export interface ContentItem {
  /** 卡片与标签上显示的名字 */
  name: string
  year: number
  logo: string
  /** 站内项目详情页 */
  href: string
}

export interface ContentCategory {
  zh: string
  /** 行标签下方的那行英文 */
  en: string
  /** 文字标签跳转的作品集分类页 */
  listHref: string
  /** 时间轴横线的颜色 */
  color: string
  items: ContentItem[]
}

const FIG = 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig'
const logo = (dir: string) => `${FIG}/${dir}/logo.jpg`

/* ---------------------------------------------------------------------------
   Intro lookup. The timeline only carries a name and a year; the real 时间 and
   简介 live on the project record, so resolve them by href instead of
   duplicating the text here.
   --------------------------------------------------------------------------- */
export interface ProjectIntro {
  title: string
  /** 项目frontmatter 里的原始时间，比时间轴上的展示年份更精确 */
  year: string
  category: string
  description: string
}

const INTRO_BY_HREF = new Map<string, ProjectIntro>(
  [
    ...designProjects.map(p => ['design', p] as const),
    ...gameProjects.map(p => ['game', p] as const),
    ...aiProjects.map(p => ['ai', p] as const),
    ...projects.map(p => ['planning', p] as const),
    ...platformProjects.map(p => ['platform', p] as const),
    ...tutorialProjects.map(p => ['tutorial', p] as const),
  ].map(([type, p]) => [
    `/${type}/${p.slug}`,
    {
      title: p.title,
      year: p.year,
      category: p.category,
      description: p.description || p.details.abstract || '',
    },
  ]),
)

export const projectIntro = (href: string): ProjectIntro | undefined =>
  INTRO_BY_HREF.get(href)

export const contentYears = [2022, 2023, 2024, 2025, 2026]

export const contentCategories: ContentCategory[] = [
  {
    zh: '产品',
    en: 'Product',
    listHref: '/design',
    color: '#5ec5d4',
    items: [
      { name: 'Counting', year: 2022, logo: logo('counting'), href: '/design/early-campus-experience' },
      { name: '1037拼拼', year: 2022, logo: logo('1037pinpin'), href: '/design/early-campus-experience' },
      { name: 'PersLearn', year: 2023, logo: logo('perslearn'), href: '/design/early-campus-experience' },
    ],
  },
  {
    zh: 'AI 产品',
    en: 'AI Product',
    listHref: '/design',
    color: '#3f6fd8',
    items: [
      { name: '智图', year: 2023, logo: logo('dragon-diffusion'), href: '/design/dragon-diffussion' },
      { name: 'AnyReal', year: 2024, logo: logo('anyreal'), href: '/design/anyreal' },
      { name: 'Genshot', year: 2024, logo: logo('genshot'), href: '/design/genshot-AI-video-generation-tool' },
      { name: '洛书八字', year: 2025, logo: logo('bazi'), href: '/design/bazi-fengshui-analysis' },
      { name: 'Genstyle', year: 2025, logo: logo('genstyle'), href: '/design/genstyle' },
      { name: 'Riffle', year: 2026, logo: logo('riffle'), href: '/design/riffle-ai-game-generation-tool' },
    ],
  },
  {
    zh: '游戏 & 用户体验',
    en: 'Game & User Experience',
    listHref: '/game',
    color: '#9b5bc9',
    items: [
      { name: '无名之路', year: 2022, logo: logo('game-jam'), href: '/game/72-hour-game-jam' },
      { name: '和平精英', year: 2022, logo: logo('peace-elite-hust'), href: '/game/peace-elite-hust-campus' },
      { name: '宝马元宇宙', year: 2022, logo: logo('bmw-meta-island'), href: '/game/bmw-meta-island' },
      { name: 'Bilibili 实习', year: 2023, logo: logo('guangzhou-xinyuan'), href: '/game/guangzhou-xinyuan-tech' },
      { name: '微信小游戏', year: 2026, logo: logo('kittylovecarrots'), href: '/game/kittylovecarrots' },
    ],
  },
  {
    zh: 'AI 辅助城市规划',
    en: 'AI-aided Planning',
    listHref: '/ai',
    color: '#1b2c5e',
    items: [
      { name: '全球空间聚类', year: 2023, logo: logo('cluster-visualizer-3d'), href: '/planning/cluster-visualizer-3d' },
      { name: 'RAG 城市助手', year: 2024, logo: logo('agentic-rag'), href: '/ai/prompt-engineering-agentic-rag' },
      { name: '知识图谱', year: 2024, logo: logo('knowledge-graph-urban-planning'), href: '/ai/knowledge-graph-urban-planning' },
      { name: 'Diffusion 城市更新', year: 2025, logo: logo('participatory-urban-regeneration'), href: '/ai/participatory-urban-regeneration-empowered-by-artificial-intelligence' },
      { name: '机器学习城市热韧性', year: 2026, logo: logo('urban-heat-resilience-ml'), href: '/ai/urban-heat-resilience-machine-learning' },
    ],
  },
]
