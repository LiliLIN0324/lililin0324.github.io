import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import './src/index.css';

import { projects, designProjects, tutorialProjects } from './src/data/projects';
import { ProjectListView } from './src/components/ProjectListView';
import { ProjectDetailView } from './src/components/ProjectDetailView';
import { TutorialSection } from './src/components/TutorialSection';
import { AboutSection } from './src/components/AboutSection';
import { ContactSection } from './src/components/ContactSection';
import { SocialLink } from './src/components/SocialLink';

const MainPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const activeTab = location.pathname.split('/')[1] || 'research';

  return (
    <div className="min-h-screen p-0 bg-neutral-100 flex flex-col">
      <div className="w-full bg-white border border-neutral-10 flex flex-col relative flex-1">
        <header className="border-b  p-4 flex justify-between items-center bg-white z-30 shrink-0">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-8 h-8 flex items-center justify-center border border-neutral-200 text-neutral-500 hover:text-neutral-900"
            >
              ☰
            </button>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-900">
              Lili Lin <span className="text-neutral-300 font-light mx-2">/</span> <span className="text-sm font-mono font-normal text-neutral-500">PORTFOLIO</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">

            <nav>
                {['research', 'design', 'tutorial', 'about'].map((tab) => (
                  <Link
                    key={tab}
                    to={`/${tab}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 text font-medium border-b-4 transition-all ${activeTab === tab ? 'border-neutral-900 text-neutral-900 bg-white': 'border-transparent text-neutral-500 hover:bg-neutral-200'}`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </Link>
                ))}
              </nav>
            </div>

        </header>

        {/* 移动端菜单 */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black/50 z-20">
            <div className="absolute left-0 top-0 h-full w-64 bg-white border-r border-neutral-200">
              <div className="p-4 border-b border-neutral-200 flex justify-between items-center">
                <h3 className="text-sm font-mono text-neutral-500">MENU</h3>
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-neutral-400 hover:text-neutral-900">×</button>
              </div>

              {/* Sidebar menu */}
              <nav className="flex flex-col gap-2 mt-4">
                <a
                  href="https://github.com/lililin0324"
                  className="px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-100 transition"
                >
                  GitHub
                </a>
                <a
                  href="mailto:lili0324@snu.ac.kr"
                  className="px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-100 transition"
                >
                  Email
                </a>
                <a
                  href="https://www.linkedin.com/in/lililin0324"
                  className="px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-100 transition"
                >
                  LinkedIn
                </a>
              </nav>
          
            </div>
          </div>
        )}

        <main className="flex flex-1 relative">
          <aside className={`hidden md:flex border-r border-neutral-200 bg-neutral-50/50 flex-col transition-all duration-500 ease-in-out relative ${isSidebarOpen ? 'w-80 p-6' : 'w-12 py-6 items-center'}`}>
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="absolute top-1/2 -right-3 w-6 h-12 bg-white border border-neutral-200 shadow-sm flex items-center justify-center text-neutral-400 hover:text-neutral-900 z-10 rounded-r-md">{isSidebarOpen ? '‹' : '›'}</button>
            <div className={`flex flex-col gap-4 w-full ${isSidebarOpen ? '' : 'items-center'}`}>
              <div className={`flex flex-col gap-2 ${isSidebarOpen ? '' : 'items-center'}`}>
                <SocialLink href="https://github.com/lililin0324" label="GH" />
                <SocialLink href="mailto:lili0324@snu.ac.kr" label="EM" />
                <SocialLink href="https://www.linkedin.com/in/lililin0324" label="LK" />
              </div>
            </div>
          </aside>

          <section className="flex-1 bg-white relative w-full h-full">
            <Routes>
              <Route path="/" element={<Navigate to="/research" replace />} />
              <Route path="/research" element={<ProjectListView data={projects} type="research" />} />
              <Route path="/research/:id" element={<ProjectDetailView data={projects} type="research" />} />
              <Route path="/design" element={<ProjectListView data={designProjects} type="design" />} />
              <Route path="/design/:id" element={<ProjectDetailView data={designProjects} type="design" />} />
              <Route path="/tutorial" element={<ProjectListView data={tutorialProjects} type="tutorial" />} />
              <Route path="/tutorial/:id" element={<ProjectDetailView data={tutorialProjects} type="tutorial" />} />
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
