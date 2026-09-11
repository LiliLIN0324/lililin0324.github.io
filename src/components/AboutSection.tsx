import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type ConferenceMoment = {
  id: string;
  title: string;
  subtitle: string;
  event: string;
  location: string;
  date: string;
  format: string;
  image: string;
  summary: string;
  news: string;
  highlights: string[];
};

const conferenceMoments: ConferenceMoment[] = [
  {
    id: 'kg-aaai-philadelphia', title: 'Knowledge Graph Generation from Urban Planning Texts',
    subtitle: 'Poster presentation at 39th AAAI Workshop - AI for Urban Planning',
    event: '39th AAAI Workshop - AI for Urban Planning', location: 'Philadelphia, PA, USA',
    date: 'February 28 - March 3, 2025', format: 'Poster', image: 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/AAAI2026.jpg',
    summary: 'A poster stop that connected text mining, planning knowledge extraction, and questions from urban AI researchers.',
    news: 'This poster presentation introduced an early version of my knowledge graph pipeline for urban planning texts. The discussions were especially useful for clarifying how planning concepts can be structured, filtered, and linked across documents, and how the method can become a reusable research infrastructure rather than a one-off demo.',
    highlights: ['Presented the text-to-graph workflow', 'Discussed entity extraction and relation design', 'Received feedback on reproducible annotation rules'],
  },
  {
    id: 'kg-cupum-london', title: 'Knowledge Graph Generation from Urban Planning Texts',
    subtitle: 'Oral presentation at CUPUM',
    event: 'Computational Urban Planning and Urban Management Conference (CUPUM)', location: 'London, UK',
    date: 'June 23 - 27, 2025', format: 'Oral', image: 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/kg_figure.jpg',
    summary: 'An oral session that pushed the work from a static poster into a sharper methodological narrative.',
    news: 'At CUPUM I presented the same research as a more compact oral story, focusing on the problem statement, the graph construction logic, and the potential for urban policy reading support. The session helped me refine the research framing for an international planning audience.',
    highlights: ['Strengthened the oral narrative', 'Explained the graph construction logic', 'Collected comments on planning applications'],
  },
  {
    id: 'kg-iacp-xiamen', title: 'Knowledge Graph Generation from Urban Planning Texts',
    subtitle: 'Oral presentation at IACP Annual Conference',
    event: '19th International Association for China Planning Conference (IACP)', location: 'Xiamen, China',
    date: 'July 3 - 7, 2025', format: 'Oral', image: 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/global-5.jpg',
    summary: 'The China planning audience offered a different lens on how the method could connect theory, policy, and local planning data.',
    news: 'This talk shifted the focus toward how knowledge graphs can support planning knowledge organization and discussion. Questions from the audience were particularly valuable for thinking about data sources, domain coverage, and how the method might scale to broader Chinese-language planning texts.',
    highlights: ['Reframed the method for a planning audience', 'Discussed data scope and domain transfer', 'Got questions on future Chinese-language corpora'],
  },
  {
    id: 'heat-icua-vancouver', title: 'Local Climate Zone and Urban Heat Resilience: An Empirical Study in New York',
    subtitle: 'Oral presentation at ICUA',
    event: '52nd International Conference on Urban Affairs (ICUA)', location: 'Vancouver, Canada',
    date: 'April 15 - 19, 2025', format: 'Oral', image: 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/LST_heatmap.png',
    summary: 'A presentation centered on heat resilience, climate zoning, and the empirical logic behind the NYC study.',
    news: 'In Vancouver I shared the NYC heat resilience study with a stronger emphasis on local climate zones, empirical evidence, and how spatial statistics can support climate-adaptive planning. The talk was useful for connecting urban morphology with concrete resilience discussions.',
    highlights: ['Presented the NYC LCZ study', 'Connected morphology with heat resilience', 'Received feedback on spatial scaling'],
  },
  {
    id: 'heat-acsp-minneapolis', title: 'Reveal nonlinear relationships between urban form factors and extreme heat with an explainable machine learning approach',
    subtitle: 'Oral presentation at ACSP',
    event: '65th Association of Collegiate Schools of Planning Annual Conference (ACSP)', location: 'Minneapolis, MN, USA',
    date: 'October 23 - 25, 2025', format: 'Oral', image: 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper-1.png',
    summary: 'This talk emphasized explainable machine learning as a way to reveal non-linear heat relationships without losing interpretability.',
    news: 'The ACSP presentation focused on why urban form variables often act nonlinearly and why explainability matters when translating machine learning outputs into planning insights. The discussion helped me sharpen the policy relevance of the work and how to communicate model behavior more clearly.',
    highlights: ['Explained the non-linear modeling strategy', 'Highlighted interpretability for planners', 'Connected model output to planning action'],
  },
  {
    id: 'heat-aaai-singapore', title: 'Assessing Nonlinear Impacts of Urban Form on Heat Resilience Across Scales Using Machine Learning',
    subtitle: 'Poster presentation at 39th AAAI Workshop - AI for Urban Planning',
    event: '39th AAAI Workshop - AI for Urban Planning', location: 'Singapore',
    date: 'January 26, 2026', format: 'Poster', image: 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/heatmapper-2.png',
    summary: 'A poster version of the heat resilience work, tuned for quick visual reading and deeper one-on-one discussion.',
    news: 'In Singapore the poster helped me show the multi-scale structure of the heat resilience research in a compact way. It was a good format for conversations about variable selection, scale effects, and how to keep the analysis rigorous while still readable for a broad AI audience.',
    highlights: ['Presented the multi-scale heat study', 'Discussed scale effects and variable design', 'Collected feedback on poster storytelling'],
  },
  {
    id: 'heat-iacp-xian', title: 'Nonlinear Impacts of Urban Form on Urban Heat Islands: A Machine Learning Analysis Across Scales and Weather Conditions in Seoul',
    subtitle: 'Oral presentation at IACP Annual Conference',
    event: '20th International Association for China Planning (IACP)', location: "Xi'an, China",
    date: 'July 10 - 13, 2026', format: 'Oral', image: 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photogeomap.png',
    summary: 'A talk that broadened the heat island work across scales and weather conditions with a planning-oriented message.',
    news: 'This presentation focused on the Seoul case and how urban heat island behavior changes under different scales and weather conditions. The audience response was helpful for strengthening the comparative logic and for thinking about how to present multi-factor analysis with less noise.',
    highlights: ['Focused on Seoul across scales', 'Compared weather-condition effects', 'Refined the comparative framing'],
  },
  {
    id: 'neurotopia-udik-seoul', title: 'Decentralized future urban design based on the biological characteristics of neurons',
    subtitle: 'Oral presentation at UDIK Autumn Conference',
    event: 'Urban Design Institute of Korea (UDIK) Autumn Conference', location: 'Seoul, South Korea',
    date: 'October 10, 2024', format: 'Oral', image: 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/photogeo.png',
    summary: 'An earlier urban design talk that helped anchor the broader research narrative around future-oriented urban systems.',
    news: 'This talk explored a more speculative design direction, using neuronal characteristics as a conceptual basis for decentralized urban form. It remains an important part of my work because it connects design imagination with computational thinking.',
    highlights: ['Presented a speculative design concept', 'Linked biology and urban form', 'Opened a broader research narrative'],
  },
];

const stats = [
  { value: '8', label: 'Talks' },
  { value: '5', label: 'Cities' },
  { value: '3', label: 'Countries' },
  { value: '2', label: 'Formats' },
];

const competencies = [
  { zh: '城市气候与韧性', en: 'Urban Climate & Resilience' },
  { zh: 'AI 辅助城市规划', en: 'AI-Assisted Urban Planning' },
  { zh: '机器学习与数据分析', en: 'Machine Learning & Data Analysis' },
  { zh: '空间统计与 GIS', en: 'Spatial Statistics & GIS' },
  { zh: 'React / Next.js 生态', en: 'React / Next.js Ecosystem' },
  { zh: 'TypeScript 架构', en: 'TypeScript Architecture' },
  { zh: 'WebGL / Three.js 3D 可视化', en: 'WebGL / Three.js' },
  { zh: 'UI 设计系统', en: 'UI Systems Design' },
];

type AwardImage = { file: string; label?: string };
type AwardItem = { name: string; year: string; images?: AwardImage[] };

const CERT_BASE = 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/certificate/';
const certUrl = (file: string) => `${CERT_BASE}${encodeURIComponent(file)}`;

const awards: { category: string; items: AwardItem[] }[] = [
  {
    category: '奖学金与荣誉 · Scholarships & Honors',
    items: [
      { name: '优秀外国人研究奖学金', year: '2024', images: [{ file: '优秀外国人研究奖学金2024.jpg' }] },
      { name: '优秀毕业生', year: '2024' },
      { name: '国家励志奖学金', year: '2020', images: [{ file: '国家励志奖学金2020.jpg' }] },
      { name: '国家励志奖学金', year: '2021', images: [{ file: '国家励志奖学金2021.jpg' }] },
      { name: '国家励志奖学金', year: '2022', images: [{ file: '国家励志奖学金2022.jpg' }] },
      { name: '国家励志奖学金', year: '2023', images: [{ file: '国家励志奖学金2023.jpg' }] },
      { name: '学习优秀奖学金', year: '2020', images: [{ file: '学习优秀奖学金-2020.jpg' }] },
      { name: '自强奖学金', year: '2023', images: [{ file: '自强奖学金2023.jpg' }] },
      { name: '三好学生', year: '2021', images: [{ file: '三好学生2021.jpg' }] },
      { name: '三好学生', year: '2023', images: [{ file: '三好学生2023.jpg' }] },
      { name: '优秀学生干部', year: '2022', images: [{ file: '优秀学生干部2022.jpg' }] },
      { name: '优秀共青团员', year: '2020', images: [{ file: '优秀共青团员2020.jpg' }] },
      { name: '优秀共青团员', year: '2022', images: [{ file: '优秀共青团员2022.jpg' }] },
    ],
  },
  {
    category: '竞赛奖项 · Competitions',
    items: [
      { name: '腾讯游戏极限开发挑战赛 金奖', year: '2021', images: [{ file: '腾讯华科Gamejams金奖2021.jpg' }] },
      { name: 'eVolo 摩天大楼建筑竞赛 编辑部推荐奖', year: '2022', images: [{ file: 'evolo摩天大楼竞赛2022.jpg' }] },
      { name: '“互联网+”大学生创新创业大赛 武汉市银奖 / 湖北省铜奖', year: '2022', images: [
        { file: '互联网+省赛市赛名单2022.jpg', label: '武汉市银奖 / 湖北省铜奖名单' },
        { file: '互联网+省赛铜奖2022.jpg', label: '省赛铜奖证书' },
      ] },
      { name: '中央国际玻璃国际建筑设计竞赛 佳作奖', year: '2023', images: [{ file: '中央国际玻璃竞赛2023.jpg' }] },
      { name: '米兰设计周省级一等奖', year: '2023', images: [{ file: '米兰设计周2023.jpg' }] },
      { name: '亚洲设计学年奖 银奖、铜奖、优秀奖', year: '2023' },
    ],
  },
  {
    category: '项目与其他 · Projects & Recognition',
    items: [
      { name: '国家级大创项目《红旗渠类山地灌渠工程遗产价值判定与数字化平台构建》', year: '2023' },
      { name: 'Digital Futures workshop 参与证书', year: '2023', images: [{ file: 'digitalfuture2023.jpg' }] },
      { name: '最佳跨界融合奖 · 同济 AI4CITIES 工作坊', year: '2025', images: [{ file: 'AI4CITIES最佳跨界融合奖.jpg' }] },
    ],
  },
];

/* ---- Close icon reused across modals ---- */
const X = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ZoomIcon = () => (
  <svg className="h-3.5 w-3.5 opacity-60 transition group-hover:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <circle cx="11" cy="11" r="7" />
    <path strokeLinecap="round" d="M21 21l-4.35-4.35M8 11h6M11 8v6" />
  </svg>
);

const Chevron = ({ dir }: { dir: 'left' | 'right' }) => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    {dir === 'left'
      ? <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      : <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />}
  </svg>
);

export const AboutSection = () => {
  const [activeMoment, setActiveMoment] = useState<ConferenceMoment | null>(null);

  useEffect(() => {
    if (!activeMoment) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActiveMoment(null); };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [activeMoment]);

  const [activeAward, setActiveAward] = useState<AwardItem | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!activeAward) return;
    const count = activeAward.images?.length ?? 0;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveAward(null);
      if (count > 1 && e.key === 'ArrowLeft') setActiveImage(i => (i - 1 + count) % count);
      if (count > 1 && e.key === 'ArrowRight') setActiveImage(i => (i + 1) % count);
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [activeAward]);

  return (
    <div className="shell animate-rise-in py-8 md:py-12">
      <div className="mx-auto max-w-5xl">
        {/* ---- Section head ---- */}
        <div className="section-head">
          <p className="eyebrow">About / Bio</p>
        </div>

        <h1 className="mt-5 text-display-sm">关于我</h1>
        <h1 className="mt-5 text-display-sm">About Me</h1>

        <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-2 md:text-lg">
          <p>
            我是林丽丽，毕业于<strong className="font-semibold text-ink">首尔大学城市与区域规划专业</strong>，拥有<strong className="font-semibold text-ink">华中科技大学建筑学</strong>背景。
          </p>
          <p>
            我关注 <strong className="font-semibold text-ink">AI 与产品创新</strong>，喜欢从用户需求出发，将复杂的技术转化为直观、易用的产品体验。过去的实践涵盖 AI 视频、AI 图像、AI 电商等多模态产品，也参与过产品策划、AI Workflow、交互设计与前端开发。
          </p>
          <p>
            与此同时，我持续探索 <strong className="font-semibold text-ink">AI × 城市 × 空间</strong> 的交叉领域，研究城市气候、城市形态、空间统计与机器学习，并尝试将数据、AI 与设计结合起来解决真实世界的问题。
          </p>
          <p>
            我喜欢设计，也喜欢写代码。对我而言，产品、设计与技术并不是彼此独立的领域，而是构建好产品的不同语言。
          </p>
        </div>

        {/* ---- Competencies ---- */}
        <div className="mt-12 border-t border-rule pt-10 md:mt-16 md:pt-12">
          <p className="eyebrow">Core Competencies</p>
          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
            {competencies.map((c, i) => (
              <div key={c.en} className="group border-t border-rule pt-4 transition-colors hover:border-accent">
                <span className="font-mono text-xs tabular-nums text-ink-3 transition-colors group-hover:text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="mt-2.5 text-sm font-semibold leading-snug text-ink">{c.zh}</div>
                <div className="mt-1 text-xs text-ink-3">{c.en}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ---- Awards & Honors ---- */}
        <div className="mt-12 border-t border-rule pt-10 md:mt-16 md:pt-12">
          <p className="eyebrow">Awards & Honors</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink md:text-3xl">获奖与荣誉</h2>
          <div className="mt-6 grid gap-10 md:grid-cols-3 md:gap-8">
            {awards.map(group => (
              <div key={group.category}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">{group.category}</h3>
                <ul className="mt-4 space-y-3 border-t border-rule pt-4">
                  {group.items.map(item => {
                    const hasImages = !!item.images && item.images.length > 0;
                    return (
                      <li key={`${item.name}-${item.year}`}>
                        {hasImages ? (
                          <button
                            type="button"
                            onClick={() => { setActiveAward(item); setActiveImage(0); }}
                            className="group flex w-full items-baseline justify-between gap-3 text-left text-sm leading-snug"
                          >
                            <span className="text-ink-2 underline decoration-dotted decoration-current underline-offset-4 transition group-hover:text-ink">
                              {item.name}
                            </span>
                            <span className="flex shrink-0 items-center gap-1.5 font-medium tabular-nums text-ink">
                              {item.year}
                              <ZoomIcon />
                            </span>
                          </button>
                        ) : (
                          <div className="flex items-baseline justify-between gap-3 text-sm leading-snug">
                            <span className="text-ink-2">{item.name}</span>
                            <span className="shrink-0 font-medium tabular-nums text-ink">{item.year}</span>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>

      {activeAward && activeAward.images && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm md:p-12"
          onClick={() => setActiveAward(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="关闭"
            onClick={() => setActiveAward(null)}
            className="absolute right-4 top-4 z-10 rounded-full border border-white/20 p-2 text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            <X />
          </button>

          {activeAward.images.length > 1 && (
            <button
              type="button"
              aria-label="上一张"
              onClick={(e) => { e.stopPropagation(); setActiveImage(i => (i - 1 + activeAward.images!.length) % activeAward.images!.length); }}
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 p-2 text-white/80 transition hover:bg-white/10 hover:text-white md:left-8"
            >
              <Chevron dir="left" />
            </button>
          )}
          {activeAward.images.length > 1 && (
            <button
              type="button"
              aria-label="下一张"
              onClick={(e) => { e.stopPropagation(); setActiveImage(i => (i + 1) % activeAward.images!.length); }}
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 p-2 text-white/80 transition hover:bg-white/10 hover:text-white md:right-8"
            >
              <Chevron dir="right" />
            </button>
          )}

          <figure className="relative max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={certUrl(activeAward.images[activeImage].file)}
              alt={`${activeAward.name} ${activeAward.year}`}
              className="max-h-[80vh] w-auto max-w-full rounded-md object-contain shadow-2xl"
            />
            <figcaption className="mt-3 text-center text-sm">
              <span className="text-white/90">{activeAward.name}</span>
              <span className="text-white/50"> · {activeAward.year}</span>
              {activeAward.images[activeImage].label && (
                <span className="text-white/50"> · {activeAward.images[activeImage].label}</span>
              )}
              {activeAward.images.length > 1 && (
                <span className="text-white/50"> · {activeImage + 1} / {activeAward.images.length}</span>
              )}
            </figcaption>
          </figure>
        </div>,
        document.body,
      )}

    </div>
  );
};
