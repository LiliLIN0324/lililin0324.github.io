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


const MainPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDiceSpinning, setIsDiceSpinning] = useState(false);
  const [diceRotation, setDiceRotation] = useState({ x: 0, y: 0 });
  const [currentImage, setCurrentImage] = useState('/data/fig/lili/lili_01.png');
  const [randomQuote, setRandomQuote] = useState('Exploring the intersection of technology and creativity.');
  const location = useLocation();
  const navigate = useNavigate();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const activeTab = pathSegments[0] || '';

  // 图片映射
  const imageMap = {
    'design': '/data/fig/lili/lili_05.png',
    'game': '/data/fig/lili/lili_03.png',
    'platform': '/data/fig/lili/lili_11.png',
    'tutorial': '/data/fig/lili/lili_04.png',
    'about': '/data/fig/lili/lili_02.png',
    'planning': '/data/fig/lili/lili_06.png'
  };

  // 随机图片列表
  const randomImages = [
    '/data/fig/lili/lili_01.png',
    '/data/fig/lili/lili_07.png',
    '/data/fig/lili/lili_08.png',
    '/data/fig/lili/lili_09.png',
    '/data/fig/lili/lili_10.png',
    '/data/fig/lili/lili_12.png',
  ];

  // 随机句子列表
  const quotes = [
    "Exploring the intersection of technology and creativity.",
    "Turning data into meaningful visual stories.",
    "Building digital experiences that inspire.",
    "Bridging the gap between design and development.",
    "Creating solutions that matter in the real world.",
    "Passionate about geospatial technology and urban planning."
  ];

  // 随机选择图片
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * randomImages.length);
    return randomImages[randomIndex];
  };

  // 随机选择句子
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  // 初始化时设置随机图片和句子
  useEffect(() => {
    // 根路径时使用随机图片
    if (activeTab === '') {
      setCurrentImage(getRandomImage());
    } else if (imageMap[activeTab]) {
      setCurrentImage(imageMap[activeTab]);
    } else {
      setCurrentImage(getRandomImage());
    }
    setRandomQuote(getRandomQuote());
  }, [activeTab]);



  return (
    <div className="h-screen p-0 bg-neutral-100 dark:bg-neutral-900 flex flex-col">
      <div className="w-full flex flex-col relative h-full">
        <header className="border-b border-neutral-200 dark:border-neutral-800 p-4 flex justify-between items-center bg-white dark:bg-neutral-900 z-30 shrink-0 relative">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-8 h-8 flex items-center justify-center border border-neutral-200 dark:border-neutral-700 text-[0px] text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
              aria-label={isMobileMenuOpen ? 'Hide profile panel' : 'Show profile panel'}
              title={isMobileMenuOpen ? 'Hide profile panel' : 'Show profile panel'}
            >
              <span className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                <span className="block w-3.5 h-px bg-neutral-500 dark:bg-neutral-400" />
                <span className="block w-3.5 h-px bg-neutral-500 dark:bg-neutral-400" />
                <span className="block w-3.5 h-px bg-neutral-500 dark:bg-neutral-400" />
              </span>
              ☰
            </button>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              Lili Lin <span className="text-neutral-300 dark:text-neutral-600 font-light mx-2">/</span> <span className="text-sm font-mono font-normal text-neutral-500 dark:text-neutral-400">PORTFOLIO</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden sm:flex gap-0">
                <Link
                  to="/"
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      setIsMobileMenuOpen(false)
                    }
                  }}
                  className={`px-4 py-3 text font-medium border-b-4 transition-all ${activeTab === '' ? 'border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-950': 'border-transparent text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800'}`}
                >
                <span>Home</span>
                </Link>
                {[
                  { key: 'design', label: 'Design', short: 'Design' },
                  { key: 'planning', label: 'Planning', short: 'Planning' },
                  { key: 'game', label: 'Game', short: 'G' },
                  { key: 'platform', label: 'Platform', short: 'P' },
                  { key: 'tutorial', label: 'Tutorial', short: 'T' },
                  { key: 'about', label: 'About', short: 'A' }
                ].map((tab) => (
                  <Link
                    key={tab.key}
                    to={`/${tab.key}`}
                    onClick={() => {
                      if (window.innerWidth < 768) {
                        setIsMobileMenuOpen(false)
                      }
                    }}
                    className={`px-4 py-3 text font-medium border-b-4 transition-all ${activeTab === tab.key ? 'border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-950': 'border-transparent text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800'}`}
                  >
                  <span>{tab.label}</span>
                  </Link>
                ))}
            </nav>

            <nav className="sm:hidden flex gap-0">
                <Link
                  to="/"
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      setIsMobileMenuOpen(false)
                    }
                  }}
                  className={`px-3 py-2 text-sm font-medium border-b-4 transition-all ${activeTab === '' ? 'border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-950': 'border-transparent text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800'}`}
                >
                <span>Home</span>
                </Link>
                {[
                  { key: 'design', label: 'Design' },
                  { key: 'planning', label: 'Planning' },
                  { key: 'game', label: 'Game' },
                  { key: 'platform', label: 'Platform' },
                  { key: 'tutorial', label: 'Tutorial' },
                  { key: 'about', label: 'About' }
                ].map((tab) => (
                  <Link
                    key={tab.key}
                    to={`/${tab.key}`}
                    onClick={() => {
                      if (window.innerWidth < 768) {
                        setIsMobileMenuOpen(false)
                      }
                    }}
                    className={`px-3 py-2 text-sm font-medium border-b-4 transition-all ${activeTab === tab.key ? 'border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-950': 'border-transparent text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800'}`}
                  >
                  <span>{tab.label}</span>
                  </Link>
                ))}
            </nav>
            <ThemeToggle />
            <button
              onClick={() => {
                setIsDiceSpinning(true);
                const newX = diceRotation.x + 360 * 2 + Math.random() * 360;
                const newY = diceRotation.y + 360 * 2 + Math.random() * 360;
                setDiceRotation({ x: newX, y: newY });
                
                setTimeout(() => {
                  const pages = ['planning', 'design', 'game', 'platform', 'tutorial', 'about'];
                  const randomPage = pages[Math.floor(Math.random() * pages.length)];
                  navigate(`/${randomPage}`);
                  setIsDiceSpinning(false);
                }, 1000);
              }}
              className="flex items-center gap-2 px-3 py-2 border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all"
              title="🎲 Explore a random project"
            >
              <div className="w-5 h-5" style={{ perspective: '100px' }}>
                <div 
                  className="w-full h-full relative transition-transform duration-1000 ease-out"
                  style={{ 
                    transform: `rotateX(${diceRotation.x}deg) rotateY(${diceRotation.y}deg)`,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Front - 1 */}
                  <div className="absolute w-full h-full bg-white border border-gray-400 rounded flex items-center justify-center" style={{ transform: 'translateZ(10px)' }}>
                    <div className="grid grid-cols-3  w-full h-full justify-center">
                      <div></div><div></div><div></div>
                      <div></div><div className="rounded-full justify-center" style={{ width: '5px', height: '5px', backgroundColor: '#dc2626' }}></div><div></div>
                      <div></div><div></div><div></div>
                    </div>
                  </div>
                  {/* Back - 6 */}
                  <div className="absolute w-full h-full bg-white border border-gray-400 rounded flex items-center justify-center" style={{ transform: 'rotateY(180deg) translateZ(10px)' }}>
                    <div className="grid grid-cols-3  w-full h-full justify-center"></div>
                    <div className="grid grid-cols-3  w-full h-full justify-center">
                      <div></div><div></div><div></div><div className="bg-gray-800 rounded-full justify-center" style={{ width: '4px', height: '4px' }}></div><div></div><div className="bg-gray-800 rounded-full justify-center" style={{ width: '4px', height: '4px' }}></div><div></div><div className="bg-gray-800 rounded-full justify-center" style={{ width: '4px', height: '4px' }}></div><div></div><div></div><div></div>
                    </div>
                    <div className="grid grid-cols-3  w-full h-full justify-center"></div>
                    <div className="grid grid-cols-3  w-full h-full justify-center">
                      <div></div><div></div><div></div><div className="bg-gray-800 rounded-full justify-center" style={{ width: '4px', height: '4px' }}></div><div></div><div className="bg-gray-800 rounded-full justify-center" style={{ width: '4px', height: '4px' }}></div><div></div><div className="bg-gray-800 rounded-full justify-center" style={{ width: '4px', height: '4px' }}></div><div></div><div></div><div></div>
                    </div>
                    <div className="grid grid-cols-3  w-full h-full justify-center"></div>

                  </div>
                  {/* Left - 3 */}
                  <div className="absolute w-full h-full bg-white border border-gray-400 rounded flex items-center justify-center" style={{ transform: 'rotateY(-90deg) translateZ(10px)' }}>
                    <div className="grid grid-cols-5  w-full h-full justify-center"></div>
                    <div className="grid grid-cols-5 marg w-full h-full justify-center">
                      <div></div>
                      <div className="bg-gray-800 rounded-full justify-center" style={{ width: '4px', height: '4px' }}></div><div></div><div></div>
                    </div>
                    <div className="grid grid-cols-5  w-full h-full justify-center">
                      <div></div><div></div><div className="bg-gray-800 rounded-full justify-center" style={{ width: '4px', height: '4px' }}></div><div></div>
                    </div>
                    <div className="grid grid-cols-5  w-full h-full justify-center">
                      <div></div><div></div><div></div><div></div><div></div><div></div><div className="bg-gray-800 rounded-full justify-center" style={{ width: '4px', height: '4px' }}></div><div></div>
                    </div>
                    <div className="grid grid-cols-5  w-full h-full justify-center"></div>
                  </div>
                  {/* Right - 4 */}
                  <div className="absolute w-full h-full bg-white border border-gray-400 rounded flex items-center justify-center" style={{ transform: 'rotateY(90deg) translateZ(10px)' }}>
                    <div className="grid grid-cols-1  w-full h-full justify-center"></div>
                    <div className="grid grid-cols-3  w-full h-full justify-center">
                      <div></div><div></div><div className="rounded-full justify-center" style={{ width: '4px', height: '4px', backgroundColor: '#dc2626' }}></div><div></div><div className="rounded-full justify-center" style={{ width: '4px', height: '4px', backgroundColor: '#dc2626' }}></div><div></div>
                    </div>
                    <div className="grid grid-cols-1  w-full h-full justify-center"></div>
                    <div className="grid grid-cols-3  w-full h-full justify-center">
                      <div></div><div></div><div className="rounded-full justify-center" style={{ width: '4px', height: '4px' , backgroundColor: '#dc2626'}}></div><div></div><div className=" rounded-full justify-center" style={{ width: '4px', height: '4px' , backgroundColor: '#dc2626'}}></div><div></div>
                    </div>
                    <div className="grid grid-cols-1  w-full h-full justify-center"></div>
                  </div>
                  {/* Top - 2 */}
                  <div className="absolute w-full h-full bg-white border-gray-400  justify-center rounded flex  p-0.5" style={{ transform: 'rotateX(90deg) translateZ(10px)' }}>
                    <div className="grid grid-cols-3 border w-full h-full justify-center">
                      <div></div><div></div><div className="bg-gray-800 rounded-full justify-center" style={{ width: '4px', height: '4px' }}></div><div></div><div className="bg-gray-800 rounded-full justify-center" style={{ width: '4px', height: '4px' }}></div><div></div>
                    </div>
                  </div>
                  
                   {/* Bottom - 5 */}
                  <div className="absolute w-full h-full bg-white border border-gray-400 rounded flex items-center justify-center" style={{ transform: 'rotateX(-90deg) translateZ(10px)' }}>
                    <div className="grid grid-cols-5  w-full h-full justify-center"></div>

                    <div className="grid grid-cols-3  w-full h-full justify-center">
                      <div></div><div></div><div className="bg-gray-800 rounded-full justify-center" style={{ width: '4px', height: '4px' }}></div><div><div></div></div><div className="bg-gray-800 rounded-full justify-center" style={{ width: '4px', height: '4px' }}></div><div></div>
                    </div>
                    <div className="grid grid-cols-3  w-full h-full justify-center">
                      <div></div><div></div><div></div><div></div><div className="bg-gray-800 rounded-full justify-center" style={{ width: '4px', height: '4px' }}></div><div></div><div></div><div></div>
                    </div>
                    <div className="grid grid-cols-3  w-full h-full justify-center">
                      <div></div><div></div><div className="bg-gray-800 rounded-full justify-center" style={{ width: '4px', height: '4px' }}></div><div><div></div></div><div className="bg-gray-800 rounded-full justify-center" style={{ width: '4px', height: '4px' }}></div><div></div>
                    </div>
                    <div className="grid grid-cols-5  w-full h-full justify-center"></div>

                  </div>
 

                </div>
              </div>
              <span className="text-sm font-medium">Jump</span>
            </button>
          </div>

        </header>

        <main className="flex flex-row flex-1 overflow-hidden relative">
          {/* 移动端侧边栏 - 根据状态显示/隐藏，占用空间 */}
          {isMobileMenuOpen && (
            <aside className="md:hidden border-r border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 w-64 pt-2 px-4 pb-4 flex-shrink-0 overflow-y-auto h-full z-20">
              {/* 移动端导航链接 - 移除了右上角的缩写导航 */}
              
              <div className="flex flex-col gap-6 w-full mt-4">
                {/* 图片显示 */}
                {currentImage && (
                  <div className="w-full flex justify-center py-4">
                    <img 
                      src={currentImage} 
                      alt="Lili's avatar" 
                      className="w-40 h-auto object-contain rounded-lg border border-neutral-100 dark:border-neutral-800 shadow-sm"
                      style={{ display: 'block', maxWidth: '100%' }}
                    />
                  </div>
                )}
                
                {/* 自我介绍和社交链接 - 竖线分隔格式 */}
                <div className="space-y-3">
                  <div className="text-center">
                    <h3 className="text-sm font-mono text-neutral-500 dark:text-neutral-400 mb-2">Lili Lin</h3>
                    <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-2">林丽丽</h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      Designer | Developer | Product Maker
                    </p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      Passionate about creating meaningful digital experiences that bridge technology and creativity.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800 text-center gap-4">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 italic mb-3">
                      "{randomQuote}"
                    </p>
                    {/* 社交媒体链接 - 竖线分隔，带图标 */}
                    <div className="flex items-center justify-center gap-2 text-xs">
                      <a href="https://github.com/lililin0324" className="flex items-center gap-1 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors" title="GitHub">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <span className="text-neutral-300 dark:text-neutral-600">|</span>
                      <a href="mailto:lili0324@snu.ac.kr" className="flex items-center gap-1 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors" title="Email">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </a>
                      <span className="text-neutral-300 dark:text-neutral-600">|</span>
                      <a href="https://www.linkedin.com/in/lililin0324" className="flex items-center gap-1 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors" title="LinkedIn">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          )}
          
          {/* 桌面端侧边栏 */}
          {isMobileMenuOpen && (
          <aside className="hidden md:flex border-r border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex-col w-64 p-4 overflow-y-auto h-full z-10 shrink-0">
            <div className="flex flex-col gap-6 w-full mt-4 black">
                {/* 图片显示 */}
                {currentImage && (
                  <div className="w-full flex justify-center py-4">
                    <img 
                      src={currentImage} 
                      alt="Lili's avatar" 
                      className="w-40 h-auto object-contain rounded-lg border border-neutral-100 dark:border-neutral-800 shadow-sm"
                      style={{ display: 'block', maxWidth: '100%' }}
                    />
                  </div>
                )}
                
                {/* 社交媒体链接 */}
                <div className="flex flex-col gap-2">
                  <SocialLink href="https://github.com/lililin0324" label="GH" />
                  <SocialLink href="mailto:lili0324@snu.ac.kr" label="EM" />
                  <SocialLink href="https://www.linkedin.com/in/lililin0324" label="LK" />
                </div>
                
                {/* 自我介绍和随机句子 */}
                <div className="mt-4 space-y-3">
                  <div className="text-center">
                    <h3 className="text-sm font-mono text-neutral-500 dark:text-neutral-400 mb-2">ABOUT</h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      I'm Lili, a designer and developer passionate about creating meaningful digital experiences that bridge technology and creativity.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 text-center">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 italic">
                      "{randomQuote}"
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          )}
            
            <section
              className="flex-1 relative w-full h-[calc(100vh-4rem)] overflow-y-auto"
            >
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
    </div>
  );
};

export default MainPage;
