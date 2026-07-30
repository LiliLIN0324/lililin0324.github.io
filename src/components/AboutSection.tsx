import React, { useEffect, useState } from 'react';

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
    date: 'February 28 - March 3, 2025', format: 'Poster', image: '/data/fig/AAAI2026.jpg',
    summary: 'A poster stop that connected text mining, planning knowledge extraction, and questions from urban AI researchers.',
    news: 'This poster presentation introduced an early version of my knowledge graph pipeline for urban planning texts. The discussions were especially useful for clarifying how planning concepts can be structured, filtered, and linked across documents, and how the method can become a reusable research infrastructure rather than a one-off demo.',
    highlights: ['Presented the text-to-graph workflow', 'Discussed entity extraction and relation design', 'Received feedback on reproducible annotation rules'],
  },
  {
    id: 'kg-cupum-london', title: 'Knowledge Graph Generation from Urban Planning Texts',
    subtitle: 'Oral presentation at CUPUM',
    event: 'Computational Urban Planning and Urban Management Conference (CUPUM)', location: 'London, UK',
    date: 'June 23 - 27, 2025', format: 'Oral', image: '/data/fig/kg_figure.jpg',
    summary: 'An oral session that pushed the work from a static poster into a sharper methodological narrative.',
    news: 'At CUPUM I presented the same research as a more compact oral story, focusing on the problem statement, the graph construction logic, and the potential for urban policy reading support. The session helped me refine the research framing for an international planning audience.',
    highlights: ['Strengthened the oral narrative', 'Explained the graph construction logic', 'Collected comments on planning applications'],
  },
  {
    id: 'kg-iacp-xiamen', title: 'Knowledge Graph Generation from Urban Planning Texts',
    subtitle: 'Oral presentation at IACP Annual Conference',
    event: '19th International Association for China Planning Conference (IACP)', location: 'Xiamen, China',
    date: 'July 3 - 7, 2025', format: 'Oral', image: '/data/fig/global-5.jpg',
    summary: 'The China planning audience offered a different lens on how the method could connect theory, policy, and local planning data.',
    news: 'This talk shifted the focus toward how knowledge graphs can support planning knowledge organization and discussion. Questions from the audience were particularly valuable for thinking about data sources, domain coverage, and how the method might scale to broader Chinese-language planning texts.',
    highlights: ['Reframed the method for a planning audience', 'Discussed data scope and domain transfer', 'Got questions on future Chinese-language corpora'],
  },
  {
    id: 'heat-icua-vancouver', title: 'Local Climate Zone and Urban Heat Resilience: An Empirical Study in New York',
    subtitle: 'Oral presentation at ICUA',
    event: '52nd International Conference on Urban Affairs (ICUA)', location: 'Vancouver, Canada',
    date: 'April 15 - 19, 2025', format: 'Oral', image: '/data/fig/LST_heatmap.png',
    summary: 'A presentation centered on heat resilience, climate zoning, and the empirical logic behind the NYC study.',
    news: 'In Vancouver I shared the NYC heat resilience study with a stronger emphasis on local climate zones, empirical evidence, and how spatial statistics can support climate-adaptive planning. The talk was useful for connecting urban morphology with concrete resilience discussions.',
    highlights: ['Presented the NYC LCZ study', 'Connected morphology with heat resilience', 'Received feedback on spatial scaling'],
  },
  {
    id: 'heat-acsp-minneapolis', title: 'Reveal nonlinear relationships between urban form factors and extreme heat with an explainable machine learning approach',
    subtitle: 'Oral presentation at ACSP',
    event: '65th Association of Collegiate Schools of Planning Annual Conference (ACSP)', location: 'Minneapolis, MN, USA',
    date: 'October 23 - 25, 2025', format: 'Oral', image: '/data/fig/heatmapper-1.png',
    summary: 'This talk emphasized explainable machine learning as a way to reveal non-linear heat relationships without losing interpretability.',
    news: 'The ACSP presentation focused on why urban form variables often act nonlinearly and why explainability matters when translating machine learning outputs into planning insights. The discussion helped me sharpen the policy relevance of the work and how to communicate model behavior more clearly.',
    highlights: ['Explained the non-linear modeling strategy', 'Highlighted interpretability for planners', 'Connected model output to planning action'],
  },
  {
    id: 'heat-aaai-singapore', title: 'Assessing Nonlinear Impacts of Urban Form on Heat Resilience Across Scales Using Machine Learning',
    subtitle: 'Poster presentation at 39th AAAI Workshop - AI for Urban Planning',
    event: '39th AAAI Workshop - AI for Urban Planning', location: 'Singapore',
    date: 'January 26, 2026', format: 'Poster', image: '/data/fig/heatmapper-2.png',
    summary: 'A poster version of the heat resilience work, tuned for quick visual reading and deeper one-on-one discussion.',
    news: 'In Singapore the poster helped me show the multi-scale structure of the heat resilience research in a compact way. It was a good format for conversations about variable selection, scale effects, and how to keep the analysis rigorous while still readable for a broad AI audience.',
    highlights: ['Presented the multi-scale heat study', 'Discussed scale effects and variable design', 'Collected feedback on poster storytelling'],
  },
  {
    id: 'heat-iacp-xian', title: 'Nonlinear Impacts of Urban Form on Urban Heat Islands: A Machine Learning Analysis Across Scales and Weather Conditions in Seoul',
    subtitle: 'Oral presentation at IACP Annual Conference',
    event: '20th International Association for China Planning (IACP)', location: "Xi'an, China",
    date: 'July 10 - 13, 2026', format: 'Oral', image: '/data/fig/photogeomap.png',
    summary: 'A talk that broadened the heat island work across scales and weather conditions with a planning-oriented message.',
    news: 'This presentation focused on the Seoul case and how urban heat island behavior changes under different scales and weather conditions. The audience response was helpful for strengthening the comparative logic and for thinking about how to present multi-factor analysis with less noise.',
    highlights: ['Focused on Seoul across scales', 'Compared weather-condition effects', 'Refined the comparative framing'],
  },
  {
    id: 'neurotopia-udik-seoul', title: 'Decentralized future urban design based on the biological characteristics of neurons',
    subtitle: 'Oral presentation at UDIK Autumn Conference',
    event: 'Urban Design Institute of Korea (UDIK) Autumn Conference', location: 'Seoul, South Korea',
    date: 'October 10, 2024', format: 'Oral', image: '/data/fig/photogeo.png',
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
  'Urban Climate & Resilience', 'AI-Assisted Urban Planning',
  'Machine Learning & Data Analysis', 'Spatial Statistics & GIS',
  'React / Next.js Ecosystem', 'TypeScript Architecture',
  'WebGL / Three.js', 'UI Systems Design',
];

/* ---- Close icon reused across modals ---- */
const X = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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
            我是林丽丽，首尔大学硕士生，华中科技大学本科生, 想做<strong className="font-semibold text-ink">AI 相关的产品</strong>.
            我的研究兴趣包括<strong className="font-semibold text-ink">城市气候韧性、城市规划知识图谱、空间统计与机器学习</strong>，并且我也对<strong className="font-semibold text-ink">产品设计、UI/UX和前端开发</strong>充满热情。
          </p>
          <p></p>

        </div>

        {/* ---- Competencies ---- */}
        <div className="mt-12 border-t border-rule pt-10 md:mt-16 md:pt-12">
          <p className="eyebrow">Core Competencies</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {competencies.map(c => <span key={c} className="chip">{c}</span>)}
          </div>
        </div>


      </div>

    </div>
  );
};
