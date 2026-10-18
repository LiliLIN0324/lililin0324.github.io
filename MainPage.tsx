import React, { useState, useEffect, useRef, useCallback, lazy, Suspense } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import '/index.css';

import { platformProjects } from './src/data/projects';
import { NOTE_COUNT, WORK_COUNT, diceWorkPaths, findWork } from './src/data/catalog';
import { ProjectListView } from './src/components/ProjectListView';
import { ProjectDetailView } from './src/components/ProjectDetailView';
import { ContactSection } from './src/components/ContactSection';
import { ThemeToggle } from './src/components/ThemeToggle';
import { HomeView } from './src/redesign/HomeView';
import { WorkIndexView } from './src/redesign/WorkIndexView';
import { WorkDetailView } from './src/redesign/WorkDetailView';
import { AboutView } from './src/redesign/AboutView';
import { ContentTransition } from './src/redesign/ContentTransition';
import { SiteDrawer, locate } from './src/redesign/SiteDrawer';
import './src/redesign/redesign.css';

const ClusteringGeoMap = lazy(() => import('./src/clusteringeomap'));

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
  const [barHidden, setBarHidden] = useState(false);
  const [onImage, setOnImage] = useState(true);
  const menuRef = useRef<HTMLButtonElement>(null);
  const [diceRotation, setDiceRotation] = useState({ x: 0, y: 0 });
  const CDN = 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/lili';
  const [currentImage, setCurrentImage] = useState(`${CDN}/lili_01.png`);
  const [randomQuote, setRandomQuote] = useState('Exploring the intersection of technology and creativity.');
  const location = useLocation();
  const navigate = useNavigate();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const activeTab = pathSegments[0] || '';

  const imageMap: Record<string, string> = {
    'product': `${CDN}/lili_05.png`,
    'platform': `${CDN}/lili_05.png`,
    'game': `${CDN}/lili_03.png`,
    'ai': `${CDN}/lili_07.png`,
    'planning': `${CDN}/lili_07.png`,
    'tutorial': `${CDN}/lili_04.png`,
    'about': `${CDN}/lili_02.png`,
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

  useEffect(() => {
    const root = document.documentElement
    const applyBar = () => {
      root.style.setProperty('--bar', window.matchMedia('(max-width: 768px)').matches ? '56px' : '64px')
    }
    applyBar()
    window.addEventListener('resize', applyBar)
    return () => window.removeEventListener('resize', applyBar)
  }, [])

  useEffect(() => {
    const scroller = document.querySelector('main > section')
    if (!(scroller instanceof HTMLElement)) return
    let last = scroller.scrollTop
    let hidden = false
    const tick = () => {
      const y = scroller.scrollTop
      const dy = y - last
      last = y
      if (dy > 0 && y > 120) hidden = true
      else if (dy < 0 || y <= 4) hidden = false
      setBarHidden(hidden)
      const bar = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--bar')) || 64
      const hero = document.querySelector('.swiss .fold > .hero, .swiss .dhero')
      const over = hero instanceof HTMLElement && hero.getBoundingClientRect().bottom > bar + 12
      setOnImage(over)
      document.documentElement.style.setProperty('--bar-offset', hidden ? '0px' : `${bar}px`)
    }
    tick()
    scroller.addEventListener('scroll', tick, { passive: true })
    return () => scroller.removeEventListener('scroll', tick)
  }, [location.pathname])

  const closeDrawer = useCallback(() => setIsPanelOpen(false), [])
  const place = locate(location.pathname)
  const bleed = location.pathname === '/' || Boolean(findWork(location.pathname) && !location.pathname.startsWith('/platform'))

  const rollDice = () => {
    setDiceRotation(prev => ({
      x: prev.x + 720 + Math.round(Math.random() * 360),
      y: prev.y + 720 + Math.round(Math.random() * 360),
    }));
    const pool = diceWorkPaths.filter(href => href !== location.pathname);
    const target = pool[Math.floor(Math.random() * pool.length)];
    if (target) setTimeout(() => navigate(target), 900);
  };

  const worksOn = place.kind === 'home' || place.kind === 'works'
  const notesOn = place.kind === 'notes'
  const aboutOn = place.kind === 'about'

  return (
    <div className="flex h-screen flex-col bg-canvas text-ink">
      <header className={`topbar ${onImage ? 'on-img' : 'on-solid'} ${barHidden ? 'away' : ''}`}>
        <button
          ref={menuRef}
          type="button"
          className={isPanelOpen ? 'hb x' : 'hb'}
          aria-expanded={isPanelOpen}
          aria-controls="site-drawer"
          aria-label={isPanelOpen ? '关闭侧栏' : '打开侧栏'}
          onClick={() => setIsPanelOpen(open => !open)}
        >
          <i /><i /><i />
        </button>
        <Link to="/" className="brand">
          <span className="sq" />
          Lili Lin<em>林丽丽</em>
        </Link>
        <nav aria-label="主要">
          <Link to="/work" className={worksOn ? 'on' : ''} aria-current={worksOn ? 'page' : undefined}>作品<sup>{WORK_COUNT}</sup></Link>
          <Link to="/tutorial" className={notesOn ? 'on' : ''} aria-current={notesOn ? 'page' : undefined}>笔记<sup>{NOTE_COUNT}</sup></Link>
          <Link to="/about" className={aboutOn ? 'on' : ''} aria-current={aboutOn ? 'page' : undefined}>关于</Link>
        </nav>
        <div className="right">
          <ThemeToggle className="topbar-toggle" />
          <button
            onClick={rollDice}
            className="btn-ghost !px-3"
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
        </div>
      </header>

      <SiteDrawer
        open={isPanelOpen}
        onClose={closeDrawer}
        avatar={currentImage}
        quote={randomQuote}
        returnFocus={menuRef}
      />

      <main className="relative flex min-h-0 flex-1 flex-row overflow-hidden">
        <section className="relative min-w-0 flex-1 overflow-y-auto">
          <ContentTransition />
          <div className={bleed ? 'bleed-frame' : 'under-bar'}>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/work" element={<WorkIndexView scope="all" />} />
            <Route path="/planning" element={<WorkIndexView scope="planning" />} />
            <Route path="/planning/:id" element={<WorkDetailView routeType="planning" />} />
            <Route path="/product" element={<WorkIndexView scope="product" />} />
            <Route path="/product/:id" element={<WorkDetailView routeType="product" />} />
            <Route path="/game" element={<WorkIndexView scope="game" />} />
            <Route path="/game/:id" element={<WorkDetailView routeType="game" />} />
            <Route path="/ai" element={<WorkIndexView scope="ai" />} />
            <Route path="/ai/:id" element={<WorkDetailView routeType="ai" />} />
            <Route path="/platform" element={<ProjectListView data={platformProjects} type="platform" />} />
            <Route path="/platform/:id" element={<ProjectDetailView data={platformProjects} type="platform" />} />
            <Route path="/tutorial" element={<WorkIndexView scope="notes" />} />
            <Route path="/tutorial/:id" element={<WorkDetailView routeType="tutorial" />} />
            <Route path="/clusteringeomap" element={<Suspense fallback={null}><ClusteringGeoMap /></Suspense>} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/contact" element={<ContactSection />} />
          </Routes>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainPage;
