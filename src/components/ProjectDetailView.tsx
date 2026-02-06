import React, { useState, useEffect, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { scrollToSection } from './utils';
import { getDemoComponent } from './DemoLoader';
import { tutorialCodeContent } from './tutorialCodeContent';

export const ProjectDetailView = ({ data, type }: { data: any[], type: string }) => {
  const { id } = useParams();
  const [viewMode, setViewMode] = useState<'details' | 'demo'>('details');
  const project = data.find(p => p.slug === id);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.includes('#demo')) {
        setViewMode('demo');
      } else {
        setViewMode('details');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [id]);

  if (!project) return <div className="p-4 md:p-10 font-mono">PROJECT_NOT_FOUND</div>;

  return (
    <div className="flex flex-col animate-in slide-in-from-right-4 duration-500 min-h-screen">
      <div className="sticky top-0 z-5 bg-white/80 backdrop-blur-md border-b border-neutral-200 px-4 md:px-6 py-3 md:py-4 flex justify-between items-center shrink-0">
        <div className="flex items-center gap-4 md:gap-6">
          <Link to={`/${type}`} className="flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-neutral-900 transition-colors uppercase tracking-wider">← Index</Link>
          <div className="h-4 w-px bg-neutral-200 hidden md:block"></div>
          <h2 className="text-xs md:text-sm font-bold text-neutral-900 truncate max-w-[120px] md:max-w-[200px]">{project.title}</h2>
        </div>
        <div className="flex bg-neutral-100 p-1 rounded-sm border border-neutral-200">
          <button onClick={() => setViewMode('details')} className={`px-2 md:px-3 py-1 text-xs font-mono ${viewMode === 'details' ? 'bg-white shadow-sm' : 'text-neutral-500'}`}>DOCS</button>
          {project.hasDemo && (
            <button onClick={() => setViewMode('demo')} className={`px-2 md:px-3 py-1 text-xs font-mono flex items-center gap-2 ${viewMode === 'demo' ? 'bg-white text-blue-600 shadow-sm' : 'text-neutral-500'}`}>
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative rounded-full h-2 w-2 bg-blue-500"></span></span>
              DEMO
            </button>
          )}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {viewMode === 'details' ? (
          <div className="flex flex-col p-4 md:p-6 lg:p-10 w-full h-full max-w-7xl mx-auto">
             <div className="mb-8 md:mb-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech: string, index: number) => (
                    <span key={index} className="px-2 py-1 text-xs font-mono bg-neutral-100 text-neutral-600 border border-neutral-200 rounded-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                  <span className="font-mono text-xs uppercase tracking-wide">NO. {project.id}</span>
                  <span className="text-neutral-300">|</span>
                  <span>{project.year}</span>
                  <span className="text-neutral-300">|</span>
                  <span>{project.category}</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-light mb-6 text-neutral-900 tracking-tight">{project.title}</h1>
                <div className="bg-gradient-to-r from-neutral-50 to-white border-l-4 border-neutral-900 p-6 md:p-8 rounded-r-lg">
                  <p className="font-serif text-base md:text-lg text-neutral-700 leading-relaxed italic">
                    "{project.description}"
                  </p>
                </div>
             </div>
                <div className="grid md:grid-cols-12 gap-6 md:gap-8 w-full flex-grow">
                  <div className="md:col-span-12 lg:col-span-8 space-y-8 md:space-y-10">
                    {project.details.abstract && (
                      <section id="abstract">
                        <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-100">
                          Abstract
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed text-neutral-800 whitespace-normal">
                          {project.details.abstract}
                        </p>
                      </section>
                    )}

                    {project.details.content && (
                      <section id="content">
                        <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-100">
                          Content
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed text-neutral-800 whitespace-normal">
                          {project.details.content}
                        </p>
                      </section>
                    )}

                    {project.details.solution && (
                      <section id="methodology">
                        <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-100">
                          Methodology
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed text-neutral-800 whitespace-normal">
                          {project.details.solution}
                        </p>
                      </section>
                    )}

                    {project.details.challenge && (
                      <section id="challenges">
                        <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-100">
                          Challenges
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed text-neutral-800 whitespace-normal">
                          {project.details.challenge}
                        </p>
                      </section>
                    )}
                    {(project.details.code || project.details.codeComponent || tutorialCodeContent[project.slug]) && (
                      <section id="code">
                        <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-100">
                          Code Example
                        </h3>
                        <div className="bg-neutral-900 text-neutral-100 p-6 rounded-lg overflow-x-auto">
                          <pre className="text-sm font-mono leading-relaxed">
                            <code>{tutorialCodeContent[project.slug] || project.details.codeComponent || `// Code file: ${project.details.code}`}</code>
                          </pre>
                        </div>
                      </section>
                    )}
                    {project.details.image && project.details.image.length > 0 && (
                      <section id="images" className="space-y-6">
                        <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-100">          
                          Images
                        </h3>
                        <div className="space-y-6">
                          {project.details.image.map((imgSrc: string, index: number) => (
                            <div key={index} className="border border-neutral-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                              <img src={imgSrc} alt={`${project.title} - ${index + 1}`} className="w-full h-auto object-cover" />
                            </div>
                          ))}
                        </div>
                      </section>
                    )}
                  </div>

                <div className="md:col-span-12 lg:col-span-4 hidden lg:block">
                  <div className="sticky top-24 bg-neutral-50 border border-neutral-200 rounded-lg p-6">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-6 pb-3 border-b border-neutral-200">
                      Contents
                    </h3>

                    <ul className="space-y-3">
                      {project.details.abstract && (
                        <li>
                          <button
                            onClick={() => scrollToSection("abstract")}
                            className="text-sm text-neutral-700 hover:text-neutral-900 hover:bg-white px-3 py-2 rounded-md transition-all w-full text-left"
                          >
                            Abstract
                          </button>
                        </li>
                      )}
                      {project.details.content && (
                        <li>
                          <button
                            onClick={() => scrollToSection("content")}
                            className="text-sm text-neutral-700 hover:text-neutral-900 hover:bg-white px-3 py-2 rounded-md transition-all w-full text-left"
                          >
                            Content
                          </button>
                        </li>
                      )}
                      {project.details.solution && (
                        <li>
                          <button
                            onClick={() => scrollToSection("methodology")}
                            className="text-sm text-neutral-700 hover:text-neutral-900 hover:bg-white px-3 py-2 rounded-md transition-all w-full text-left"
                          >
                            Methodology
                          </button>
                        </li>
                      )}
                      {project.details.challenge && (
                        <li>
                          <button
                            onClick={() => scrollToSection("challenges")}
                            className="text-sm text-neutral-700 hover:text-neutral-900 hover:bg-white px-3 py-2 rounded-md transition-all w-full text-left"
                          >
                            Challenges
                          </button>
                        </li>
                      )}
                      {(project.details.code || project.details.codeComponent || tutorialCodeContent[project.slug]) && (
                        <li>
                          <button
                            onClick={() => scrollToSection("code")}
                            className="text-sm text-neutral-700 hover:text-neutral-900 hover:bg-white px-3 py-2 rounded-md transition-all w-full text-left"
                          >
                            Code Example
                          </button>
                        </li>
                      )}
                      {project.details.image && project.details.image.length > 0 && (
                        <li>
                          <button
                            onClick={() => scrollToSection("images")}
                            className="text-sm text-neutral-700 hover:text-neutral-900 hover:bg-white px-3 py-2 rounded-md transition-all w-full text-left"
                          >
                            Images
                          </button>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
             </div>
          </div>
        ) : (
          <div className="w-full h-[80vh] bg-neutral-100 relative">
            <Suspense fallback={<div className="absolute inset-0 flex items-center justify-center text-neutral-400 font-mono">Loading demo...</div>}>
              {(() => {
                const DemoComponent = getDemoComponent(project.slug);
                if (!DemoComponent) {
                  return <div className="absolute inset-0 flex items-center justify-center text-neutral-400 font-mono">DEMO NOT AVAILABLE</div>;
                }
                return <DemoComponent />;
              })()}
            </Suspense>
          </div>
        )}
      </div>
    </div>
  );
};
