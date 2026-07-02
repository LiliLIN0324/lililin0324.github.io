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
    id: 'kg-aaai-philadelphia',
    title: 'Knowledge Graph Generation from Urban Planning Texts',
    subtitle: 'Poster presentation at 39th AAAI Workshop - AI for Urban Planning',
    event: '39th AAAI Workshop - AI for Urban Planning',
    location: 'Philadelphia, PA, USA',
    date: 'February 28 - March 3, 2025',
    format: 'Poster',
    image: '/data/fig/AAAI2026.jpg',
    summary: 'A poster stop that connected text mining, planning knowledge extraction, and questions from urban AI researchers.',
    news: 'This poster presentation introduced an early version of my knowledge graph pipeline for urban planning texts. The discussions were especially useful for clarifying how planning concepts can be structured, filtered, and linked across documents, and how the method can become a reusable research infrastructure rather than a one-off demo.',
    highlights: [
      'Presented the text-to-graph workflow',
      'Discussed entity extraction and relation design',
      'Received feedback on reproducible annotation rules',
    ],
  },
  {
    id: 'kg-cupum-london',
    title: 'Knowledge Graph Generation from Urban Planning Texts',
    subtitle: 'Oral presentation at CUPUM',
    event: 'Computational Urban Planning and Urban Management Conference (CUPUM)',
    location: 'London, UK',
    date: 'June 23 - 27, 2025',
    format: 'Oral',
    image: '/data/fig/kg_figure.jpg',
    summary: 'An oral session that pushed the work from a static poster into a sharper methodological narrative.',
    news: 'At CUPUM I presented the same research as a more compact oral story, focusing on the problem statement, the graph construction logic, and the potential for urban policy reading support. The session helped me refine the research framing for an international planning audience.',
    highlights: [
      'Strengthened the oral narrative',
      'Explained the graph construction logic',
      'Collected comments on planning applications',
    ],
  },
  {
    id: 'kg-iacp-xiamen',
    title: 'Knowledge Graph Generation from Urban Planning Texts',
    subtitle: 'Oral presentation at IACP Annual Conference',
    event: '19th International Association for China Planning Conference (IACP)',
    location: 'Xiamen, China',
    date: 'July 3 - 7, 2025',
    format: 'Oral',
    image: '/data/fig/global-5.jpg',
    summary: 'The China planning audience offered a different lens on how the method could connect theory, policy, and local planning data.',
    news: 'This talk shifted the focus toward how knowledge graphs can support planning knowledge organization and discussion. Questions from the audience were particularly valuable for thinking about data sources, domain coverage, and how the method might scale to broader Chinese-language planning texts.',
    highlights: [
      'Reframed the method for a planning audience',
      'Discussed data scope and domain transfer',
      'Got questions on future Chinese-language corpora',
    ],
  },
  {
    id: 'heat-icua-vancouver',
    title: 'Local Climate Zone and Urban Heat Resilience: An Empirical Study in New York',
    subtitle: 'Oral presentation at ICUA',
    event: '52nd International Conference on Urban Affairs (ICUA)',
    location: 'Vancouver, Canada',
    date: 'April 15 - 19, 2025',
    format: 'Oral',
    image: '/data/fig/LST_heatmap.png',
    summary: 'A presentation centered on heat resilience, climate zoning, and the empirical logic behind the NYC study.',
    news: 'In Vancouver I shared the NYC heat resilience study with a stronger emphasis on local climate zones, empirical evidence, and how spatial statistics can support climate-adaptive planning. The talk was useful for connecting urban morphology with concrete resilience discussions.',
    highlights: [
      'Presented the NYC LCZ study',
      'Connected morphology with heat resilience',
      'Received feedback on spatial scaling',
    ],
  },
  {
    id: 'heat-acsp-minneapolis',
    title: 'Reveal nonlinear relationships between urban form factors and extreme heat with an explainable machine learning approach',
    subtitle: 'Oral presentation at ACSP',
    event: '65th Association of Collegiate Schools of Planning Annual Conference (ACSP)',
    location: 'Minneapolis, MN, USA',
    date: 'October 23 - 25, 2025',
    format: 'Oral',
    image: '/data/fig/heatmapper-1.png',
    summary: 'This talk emphasized explainable machine learning as a way to reveal non-linear heat relationships without losing interpretability.',
    news: 'The ACSP presentation focused on why urban form variables often act nonlinearly and why explainability matters when translating machine learning outputs into planning insights. The discussion helped me sharpen the policy relevance of the work and how to communicate model behavior more clearly.',
    highlights: [
      'Explained the non-linear modeling strategy',
      'Highlighted interpretability for planners',
      'Connected model output to planning action',
    ],
  },
  {
    id: 'heat-aaai-singapore',
    title: 'Assessing Nonlinear Impacts of Urban Form on Heat Resilience Across Scales Using Machine Learning',
    subtitle: 'Poster presentation at 39th AAAI Workshop - AI for Urban Planning',
    event: '39th AAAI Workshop - AI for Urban Planning',
    location: 'Singapore',
    date: 'January 26, 2026',
    format: 'Poster',
    image: '/data/fig/heatmapper-2.png',
    summary: 'A poster version of the heat resilience work, tuned for quick visual reading and deeper one-on-one discussion.',
    news: 'In Singapore the poster helped me show the multi-scale structure of the heat resilience research in a compact way. It was a good format for conversations about variable selection, scale effects, and how to keep the analysis rigorous while still readable for a broad AI audience.',
    highlights: [
      'Presented the multi-scale heat study',
      'Discussed scale effects and variable design',
      'Collected feedback on poster storytelling',
    ],
  },
  {
    id: 'heat-iacp-xian',
    title: 'Nonlinear Impacts of Urban Form on Urban Heat Islands: A Machine Learning Analysis Across Scales and Weather Conditions in Seoul',
    subtitle: 'Oral presentation at IACP Annual Conference',
    event: '20th International Association for China Planning (IACP)',
    location: 'Xi\'an, China',
    date: 'July 10 - 13, 2026',
    format: 'Oral',
    image: '/data/fig/photogeomap.png',
    summary: 'A talk that broadened the heat island work across scales and weather conditions with a planning-oriented message.',
    news: 'This presentation focused on the Seoul case and how urban heat island behavior changes under different scales and weather conditions. The audience response was helpful for strengthening the comparative logic and for thinking about how to present multi-factor analysis with less noise.',
    highlights: [
      'Focused on Seoul across scales',
      'Compared weather-condition effects',
      'Refined the comparative framing',
    ],
  },
  {
    id: 'neurotopia-udik-seoul',
    title: 'Decentralized future urban design based on the biological characteristics of neurons',
    subtitle: 'Oral presentation at UDIK Autumn Conference',
    event: 'Urban Design Institute of Korea (UDIK) Autumn Conference',
    location: 'Seoul, South Korea',
    date: 'October 10, 2024',
    format: 'Oral',
    image: '/data/fig/photogeo.png',
    summary: 'An earlier urban design talk that helped anchor the broader research narrative around future-oriented urban systems.',
    news: 'This talk explored a more speculative design direction, using neuronal characteristics as a conceptual basis for decentralized urban form. It remains an important part of my work because it connects design imagination with computational thinking.',
    highlights: [
      'Presented a speculative design concept',
      'Linked biology and urban form',
      'Opened a broader research narrative',
    ],
  },
];

export const AboutSection = () => {
  const [activeMoment, setActiveMoment] = useState<ConferenceMoment | null>(null);

  useEffect(() => {
    if (!activeMoment) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveMoment(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeMoment]);

  return (
    <div className="p-4 md:p-6 lg:p-10 animate-in fade-in slide-in-from-bottom-4">
      <h2 className="text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-100 border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-6 md:mb-8">About Me</h2>
      <div className="font-light text-base md:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed max-w-none">
        <p className="text-base md:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed mb-4 md:mb-6 font-light">
          I am Lili Lin, a Master's student at Seoul National University in the City Energy Lab, where my research focuses on <span className="font-medium border-b border-neutral-300 dark:border-neutral-600">AI-assisted urban planning</span>, especially on <span className="font-medium border-b border-neutral-300 dark:border-neutral-600">urban heat environments</span>. I received my Bachelor's degree in Architecture from Huazhong University of Science and Technology.
        </p>
        <p className="text-base md:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed mb-4 md:mb-6 font-light">
          In my current researches, I use machine learning models and statistic analysis to understand how environmental factors influence climate-related risks. Using Landsat 8 and spatial regression to quantified how Local Climate Zones affect urban heat resilience in NYC and LA; Examined the MAUP problem using GBDT and PDP analyses to reveal non-linear relationships between urban form, land cover, and heat exposure across multiple spatial scales in Seoul.
        </p>
        <p className="text-base md:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed mb-4 md:mb-6 font-light">
          I am also <span className="font-medium border-b border-neutral-300 dark:border-neutral-600">UI&UX designer and front-end developer</span> passionate about creating intuitive digital experiences. I have designed and developed several web applications and design systems. My technical skills include React, TypeScript, Three.js, Figma.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-12 border-t border-neutral-100 dark:border-neutral-800 pt-6 md:pt-8">
          <div>
            <h4 className="font-mono text-xs text-neutral-400 dark:text-neutral-500 uppercase mb-4">Core Competencies</h4>
            <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <li>Urban Climate & Resilience</li>
              <li>AI-Assisted Urban Planning</li>
              <li>Machine Learning & Data Analysis</li>
              <li>Spatial Statistics & GIS</li>
              <li>React / Next.js ecosystem</li>
              <li>TypeScript Architecture</li>
              <li>WebGL / Three.js</li>
              <li>UI Systems Design</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 md:mt-12 border-t border-neutral-100 dark:border-neutral-800 pt-6 md:pt-8">
          <div className="flex flex-col gap-3 md:gap-4 mb-5 md:mb-6">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h4 className="font-mono text-xs text-neutral-400 dark:text-neutral-500 uppercase">Conference Presentations</h4>
              <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">Click any card for the news note</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 p-4">
                <div className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">8</div>
                <div className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mt-1">talks</div>
              </div>
              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 p-4">
                <div className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">5</div>
                <div className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mt-1">cities</div>
              </div>
              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 p-4">
                <div className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">3</div>
                <div className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mt-1">countries</div>
              </div>
              <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 p-4">
                <div className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">2</div>
                <div className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mt-1">formats</div>
              </div>
            </div>
          </div>

          <div className="columns-1 md:columns-2 xl:columns-3 gap-4 space-y-4">
            {conferenceMoments.map((moment) => (
              <button
                key={moment.id}
                type="button"
                onClick={() => setActiveMoment(moment)}
                className="group block w-full break-inside-avoid overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={moment.image}
                    alt={moment.title}
                    className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />
                  <div className="absolute left-4 right-4 bottom-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.24em] text-white backdrop-blur-sm">
                        {moment.format}
                      </span>
                      <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.24em] text-white backdrop-blur-sm">
                        {moment.location}
                      </span>
                    </div>
                    <h5 className="text-lg font-semibold text-white leading-snug">{moment.title}</h5>
                    <p className="mt-2 text-sm leading-6 text-neutral-200">{moment.summary}</p>
                    <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.24em] text-neutral-300">
                      <span>{moment.date}</span>
                      <span className="opacity-80">Open story</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeMoment && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/75 backdrop-blur-md px-4 py-6"
          onClick={() => setActiveMoment(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-white/10 bg-white dark:bg-neutral-950 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveMoment(null)}
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-lg transition-colors hover:bg-white dark:bg-neutral-900/90 dark:text-neutral-100 dark:hover:bg-neutral-800"
              aria-label="Close conference news"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative bg-neutral-100 dark:bg-neutral-900">
                <img src={activeMoment.image} alt={activeMoment.title} className="h-full w-full object-cover max-h-[420px] lg:max-h-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/0 to-transparent" />
                <div className="absolute left-0 right-0 bottom-0 p-6 text-white">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.24em] backdrop-blur-sm">
                      {activeMoment.format}
                    </span>
                    <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.24em] backdrop-blur-sm">
                      {activeMoment.date}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold leading-tight">{activeMoment.title}</h3>
                  <p className="mt-2 text-sm text-neutral-200">{activeMoment.subtitle}</p>
                </div>
              </div>

              <div className="p-6 md:p-8 lg:p-10">
                <div className="mb-5 flex flex-wrap gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                  <span className="rounded-full border border-neutral-200 dark:border-neutral-800 px-3 py-1">{activeMoment.event}</span>
                  <span className="rounded-full border border-neutral-200 dark:border-neutral-800 px-3 py-1">{activeMoment.location}</span>
                </div>

                <p className="text-base md:text-lg leading-relaxed text-neutral-800 dark:text-neutral-200">
                  {activeMoment.news}
                </p>

                <div className="mt-8">
                  <h4 className="text-sm font-mono uppercase tracking-[0.24em] text-neutral-400 dark:text-neutral-500 mb-3">News highlights</h4>
                  <ul className="space-y-3">
                    {activeMoment.highlights.map((item) => (
                      <li key={item} className="flex gap-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-4 py-3 text-sm text-neutral-700 dark:text-neutral-300">
                        <span className="mt-1 h-2 w-2 rounded-full bg-neutral-900 dark:bg-neutral-100 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
