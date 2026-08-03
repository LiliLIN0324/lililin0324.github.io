import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import '/index.css';

import { projects, designProjects, tutorialProjects, platformProjects, gameProjects } from './src/data/projects';
import { ProjectListView } from './src/components/ProjectListView';
import { ProjectDetailView } from './src/components/ProjectDetailView';
import { AboutSection } from './src/components/AboutSection';
import { ContactSection } from './src/components/ContactSection';
import { SocialLink } from './src/components/SocialLink';
import { HomePage } from './src/components/HomePage';
import { ThemeToggle } from './src/components/ThemeToggle';
import ClusteringGeoMap from './src/clusteringeomap';

const NAV_TABS = [
  { key: '', label: 'Home' },
  { key: 'design', label: 'Design' },
  { key: 'game', label: 'Game' },
  { key: 'planning', label: 'Planning' },
  { key: 'platform', label: 'Platform' },
  { key: 'tutorial', label: 'Tutorial' },
  { key: 'about', label: 'About' },
];

/* Pip positions on a 3x3 grid, indexed 0-8 left-to-right, top-to-bottom. */
const DICE_PIPS: Record<number, number[]> = {
  1: [4],
  2: [0, 8],
  3: [0, 4, 8],
  4: [0, 2, 6, 8],
  5: [0, 2, 4, 6, 8],
  6: [0, 2, 3, 5, 6, 8],
};

/* Faces 1 and 4 are red on a standard Chinese die. */
const DiceFace = ({ value, transform }: { value: number; transform: string }) => (
  <div
    className="absolute inset-0 grid grid-cols-3 grid-rows-3 border border-neutral-400 bg-white p-[2px]"
    style={{ transform, backfaceVisibility: 'hidden' }}
  >
    {Array.from({ length: 9 }).map((_, i) => (
      <span key={i} className="flex items-center justify-center">
        {DICE_PIPS[value].includes(i) && (
          <span
            className="block h-[2.5px] w-[2.5px] rounded-full"
            style={{ background: value === 1 || value === 4 ? '#cc2a18' : '#171717' }}
          />
        )}
      </span>
    ))}
  </div>
);

const MainPage = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [headerCollapsed, setHeaderCollapsed] = useState(false);
  const [diceRotation, setDiceRotation] = useState({ x: 0, y: 0 });
  const CDN = 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/lili';
  const [currentImage, setCurrentImage] = useState(`${CDN}/lili_01.png`);
  const [randomQuote, setRandomQuote] = useState('Exploring the intersection of technology and creativity.');
  const location = useLocation();
  const navigate = useNavigate();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const activeTab = pathSegments[0] || '';

  const imageMap: Record<string, string> = {
    'design': `${CDN}/lili_05.png`,
    'game': `${CDN}/lili_03.png`,
    'platform': `${CDN}/lili_11.png`,
    'tutorial': `${CDN}/lili_04.png`,
    'about': `${CDN}/lili_02.png`,
    'planning': `${CDN}/lili_06.png`
  };

  const randomImages = [
    `${CDN}/lili_01.png`,
    `${CDN}/lili_07.png`,
    `${CDN}/lili_08.png`,
    `${CDN}/lili_09.png`,
    `${CDN}/lili_10.png`,
    `${CDN}/lili_12.png`,
  ];

  const quotes = [
    "探索科技与创意的交汇点。",
    "把数据转化为有意义的故事。",
    "构建能激发灵感的数字体验。",
    "连接产品与开发的桥梁。",
    "创造在真实世界中落地的解决方案。",
    "热衷于地理空间技术与城市规划。"
  ];

  const pickRandom = <T,>(list: T[]) => list[Math.floor(Math.random() * list.length)];

  useEffect(() => {
    setCurrentImage(imageMap[activeTab] ?? pickRandom(randomImages));
    setRandomQuote(pickRandom(quotes));
  }, [activeTab]);

  const rollDice = () => {
    setDiceRotation(prev => ({
      x: prev.x + 720 + Math.round(Math.random() * 360),
      y: prev.y + 720 + Math.round(Math.random() * 360),
    }));
    const pages = ['design', 'game','planning',  'platform', 'tutorial', 'about'];
    setTimeout(() => navigate(`/${pickRandom(pages)}`), 900);
  };

  return (
    <div className="flex h-screen flex-col bg-canvas text-ink">
      <header className={`relative z-30 shrink-0 border-b border-rule bg-surface/85 backdrop-blur transition-all duration-300 ease-editorial ${headerCollapsed ? 'h-0 border-b-0 overflow-hidden opacity-0' : ''}`}>
        <div className="shell flex h-16 items-center justify-between gap-4">
          {/* Left group: wordmark + nav — always left-aligned so Home stays visible */}
          <div className="flex min-w-0 flex-1 items-center">
            <div className="flex min-w-0 items-center gap-3">
              <button
                onClick={() => setIsPanelOpen(!isPanelOpen)}
                className="icon-btn"
                aria-expanded={isPanelOpen}
                aria-label={isPanelOpen ? 'Hide profile panel' : 'Show profile panel'}
                title={isPanelOpen ? 'Hide profile panel' : 'Show profile panel'}
              >
                <span className="flex flex-col items-center justify-center gap-[3px]" aria-hidden="true">
                  <span className="block h-px w-4 bg-current transition-transform duration-300" />
                  <span className={`block h-px w-4 bg-current transition-opacity duration-300 ${isPanelOpen ? 'opacity-0' : 'opacity-100'}`} />
                  <span className="block h-px w-4 bg-current transition-transform duration-300" />
                </span>
              </button>

              <Link to="/" className="group flex min-w-0 items-baseline gap-2.5">
                <span className="truncate text-lg font-bold tracking-masthead md:text-xl">
                  林丽丽&nbsp;Lili&nbsp;Lin
                </span>
                <span className="hidden h-3 w-px bg-rule sm:block" aria-hidden="true" />
              </Link>
            </div>

            {/* Nav — scrolls horizontally when it runs out of room */}
            <nav className="-mx-1 flex min-w-0 overflow-x-auto hide-scrollbar">
              <ul className="flex shrink-0 items-stretch">
                {NAV_TABS.map((tab) => {
                  const isActive = activeTab === tab.key;
                  return (
                    <li key={tab.key || 'home'} className="flex">
                      <Link
                        to={`/${tab.key}`}
                        onClick={() => { if (window.innerWidth < 768) setIsPanelOpen(false); }}
                        aria-current={isActive ? 'page' : undefined}
                        className={`relative flex items-center px-3 text-sm font-medium transition-colors duration-200 md:px-4 ${
                          isActive ? 'text-ink' : 'text-ink-3 hover:text-ink'
                        }`}
                      >
                        {tab.label}
                        {/* Swiss active marker: accent rule on the top edge */}
                        <span
                          className={`absolute inset-x-2 top-0 h-[3px] origin-left bg-accent transition-transform duration-300 ease-editorial md:inset-x-3 ${
                            isActive ? 'scale-x-100' : 'scale-x-0'
                          }`}
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle />
            <button
              onClick={rollDice}
              className="btn-ghost hidden !px-3 sm:inline-flex"
              title="随机探索一个项目"
            >
              <span className="h-5 w-5" style={{ perspective: '120px' }}>
                <span
                  className="relative block h-full w-full transition-transform duration-[900ms] ease-out"
                  style={{
                    transform: `rotateX(${diceRotation.x}deg) rotateY(${diceRotation.y}deg)`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <DiceFace value={1} transform="translateZ(10px)" />
                  <DiceFace value={6} transform="rotateY(180deg) translateZ(10px)" />
                  <DiceFace value={3} transform="rotateY(-90deg) translateZ(10px)" />
                  <DiceFace value={4} transform="rotateY(90deg) translateZ(10px)" />
                  <DiceFace value={2} transform="rotateX(90deg) translateZ(10px)" />
                  <DiceFace value={5} transform="rotateX(-90deg) translateZ(10px)" />
                </span>
              </span>
              Jump
            </button>
            <button
              onClick={() => setHeaderCollapsed(true)}
              className="icon-btn hidden sm:inline-flex"
              title="Collapse header"
              aria-label="Collapse header"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
            </button>
          </div>
        </div>
      </header>

      {/* Expand trigger — only visible when header is collapsed */}
      {headerCollapsed && (
        <button
          onClick={() => setHeaderCollapsed(false)}
          className="group flex h-4 w-full items-center justify-center bg-surface/50 hover:bg-surface transition-colors duration-200"
          title="Expand header"
          aria-label="Expand header"
        >
          <svg className="h-3 w-3 text-ink-3 transition-colors group-hover:text-ink" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </button>
      )}

      <main className="relative flex min-h-0 flex-1 flex-row overflow-hidden">
        {/* Profile panel — one implementation for both breakpoints */}
        {isPanelOpen && (
          <aside className="z-20 h-full w-64 shrink-0 overflow-y-auto border-r border-rule bg-surface md:w-72">
            <div className="flex flex-col gap-8 p-5">
              {currentImage && (
                <img
                  src={currentImage}
                  alt="Lili's avatar"
                  className="w-full border border-rule bg-surface-2 object-contain"
                />
              )}

              <div className="space-y-3">
                <div>
                  <p className="eyebrow">Profile</p>
                  <h2 className="mt-2 text-xl font-bold tracking-masthead">Lili Lin</h2>
                  <p className="text-sm text-ink-2">林丽丽</p>
                </div>
                <hr className="hairline" />
                <p className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-3">
                  设计师 · 开发者 · 产品创作者
                </p>
                <p className="text-sm leading-relaxed text-ink-2">
                  创造有意义的数字体验，连接技术与创意。
                </p>
              </div>

              <div className="space-y-4">
                <hr className="hairline" />
                <p className="border-l-2 border-accent pl-3 text-sm italic leading-relaxed text-ink-2">
                  {randomQuote}
                </p>
                <div className="flex gap-2">
                  <SocialLink href="https://github.com/lililin0324" label="GH" />
                  <SocialLink href="mailto:lili0324@snu.ac.kr" label="EM" />
                  <SocialLink href="https://www.linkedin.com/in/lililin0324" label="LK" />
                </div>
              </div>
            </div>
          </aside>
        )}

        <section className="relative min-w-0 flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/planning" element={<ProjectListView data={projects} type="planning" />} />
            <Route path="/planning/:id" element={<ProjectDetailView data={projects} type="planning" />} />
            <Route path="/design" element={<ProjectListView data={designProjects} type="design" />} />
            <Route path="/design/:id" element={<ProjectDetailView data={designProjects} type="design" />} />
            <Route path="/game" element={<ProjectListView data={gameProjects} type="game" />} />
            <Route path="/game/:id" element={<ProjectDetailView data={gameProjects} type="game" />} />
            <Route path="/platform" element={<ProjectListView data={platformProjects} type="platform" />} />
            <Route path="/platform/:id" element={<ProjectDetailView data={platformProjects} type="platform" />} />
            <Route path="/tutorial" element={<ProjectListView data={tutorialProjects} type="tutorial" />} />
            <Route path="/tutorial/:id" element={<ProjectDetailView data={tutorialProjects} type="tutorial" />} />
            <Route path="/clusteringeomap" element={<ClusteringGeoMap />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/contact" element={<ContactSection />} />
          </Routes>
        </section>
      </main>
    </div>
  );
};

export default MainPage;
