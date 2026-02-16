import React, { useState, useEffect, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { scrollToSection } from './utils';
import { getDemoComponent } from './DemoLoader';
import { tutorialCodeContent } from './tutorialCodeContent';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const ProjectDetailView = ({ data, type }: { data: any[], type: string }) => {
  const { id } = useParams();
  const [viewMode, setViewMode] = useState<'details' | 'demo'>('details');
  const [isTocCollapsed, setIsTocCollapsed] = useState(false);
  const project = data.find(p => p.slug === id);

  // Extract headings from markdown content
  const extractHeadings = (content: string) => {
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const headings: { level: number; text: string; id: string }[] = [];
    let match;
    
    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      headings.push({ level, text, id });
    }
    
    return headings;
  };

  const headings = project?.details?.content ? extractHeadings(project.details.content) : [];

  const scrollToHeading = (headingId: string) => {
    const element = document.getElementById(headingId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.includes('demo')) {
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
    <div className="flex flex-col animate-in slide-in-from-right-4 duration-500 h-screen">
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

                    {project.details.content && (
                      <section id="content">
                        <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-100">
                          Content
                        </h3>
                        <div className="text-base md:text-lg leading-relaxed text-neutral-800 prose prose-neutral max-w-none">
                          <ReactMarkdown 
                            remarkPlugins={[remarkGfm]}
                            components={{
                              table: ({children}) => (
                                <table className="min-w-full border-collapse border border-neutral-300">
                                  {children}
                                </table>
                              ),
                              thead: ({children}) => (
                                <thead className="bg-neutral-50">
                                  {children}
                                </thead>
                              ),
                              th: ({children}) => (
                                <th className="border border-neutral-300 px-3 py-2 text-left font-semibold text-neutral-900 text-sm">
                                  {children}
                                </th>
                              ),
                              td: ({children}) => (
                                <td className="border border-neutral-300 px-3 py-2 text-neutral-700 text-sm">
                                  {children}
                                </td>
                              ),
                              h1: ({children, ...props}) => {
                                const text = typeof children === 'string' ? children : children?.toString() || '';
                                const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                                return <h1 id={id} className="text-2xl font-bold mb-4 text-neutral-900" {...props}>{children}</h1>;
                              },
                              h2: ({children, ...props}) => {
                                const text = typeof children === 'string' ? children : children?.toString() || '';
                                const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                                return <h2 id={id} className="text-xl font-bold mb-6 mt-8 text-neutral-800" {...props}>{children}</h2>;
                              },
                              h3: ({children, ...props}) => {
                                const text = typeof children === 'string' ? children : children?.toString() || '';
                                const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                                return <h3 id={id} className="text-lg font-semibold mb-4 mt-6 text-neutral-800" {...props}>{children}</h3>;
                              },
                              h4: ({children, ...props}) => {
                                const text = typeof children === 'string' ? children : children?.toString() || '';
                                const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                                return <h4 id={id} className="text-base font-semibold mb-3 mt-4 text-neutral-700" {...props}>{children}</h4>;
                              },
                              h5: ({children, ...props}) => {
                                const text = typeof children === 'string' ? children : children?.toString() || '';
                                const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                                return <h5 id={id} className="text-sm font-semibold mb-2 mt-3 text-neutral-700" {...props}>{children}</h5>;
                              },
                              h6: ({children, ...props}) => {
                                const text = typeof children === 'string' ? children : children?.toString() || '';
                                const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                                return <h6 id={id} className="text-xs font-semibold mb-2 mt-2 text-neutral-600" {...props}>{children}</h6>;
                              },
                              p: ({children, ...props}) => (
                                <p className="mb-4 leading-relaxed" {...props}>{children}</p>
                              ),
                              a: ({children, href, ...props}) => (
                                <a 
                                  href={href} 
                                  className="text-blue-600 hover:text-blue-800 underline decoration-1 hover:decoration-2 transition-all duration-200 font-medium" 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  {...props}
                                >
                                  {children}
                                </a>
                              ),
                              img: ({src, alt, ...props}) => {
                                // Check if the image is in a table by looking at the parent context
                                const isInTable = props.className?.includes('h-32') || 
                                                alt?.includes('BCR') || 
                                                alt?.includes('BHV') || 
                                                alt?.includes('SVF') ||
                                                alt?.includes('NDVI') ||
                                                alt?.includes('EV') ||
                                                alt?.includes('WR') ||
                                                alt?.includes('Dist_');
                                
                                if (isInTable) {
                                  // Small images in tables
                                  return (
                                    <img 
                                      src={src} 
                                      alt={alt} 
                                      className="max-w-full h-32 object-cover rounded-lg shadow-sm" 
                                      {...props}
                                    />
                                  );
                                } else {
                                  // Full-width standalone images
                                  return (
                                    <img 
                                      src={src} 
                                      alt={alt} 
                                      className="w-full max-w-full h-auto rounded-lg shadow-md my-6" 
                                      {...props}
                                    />
                                  );
                                }
                              },
                            }}
                          >
                            {project.details.content}
                          </ReactMarkdown>
                        </div>
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
                  </div>

                <div className="md:col-span-12 lg:col-span-4 hidden lg:block">
                  <div className="sticky top-24 bg-neutral-50 border border-neutral-200 rounded-lg overflow-hidden">
                    <div className="flex items-center justify-between p-4 border-b border-neutral-200">
                      <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                        Contents
                      </h3>
                      <button
                        onClick={() => setIsTocCollapsed(!isTocCollapsed)}
                        className="text-neutral-400 hover:text-neutral-600 transition-colors"
                      >
                        <svg 
                          className={`w-4 h-4 transform transition-transform ${isTocCollapsed ? 'rotate-90' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>

                    <div className={`${isTocCollapsed ? 'max-h-0' : 'max-h-96'} overflow-hidden transition-all duration-300`}>
                      <div className="p-4 space-y-2 overflow-y-auto max-h-80">
                        {/* Overview Section */}
                        <div className="space-y-1">
                          <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2">Overview</h4>
                          {project.details.abstract && (
                            <button
                              onClick={() => scrollToSection("abstract")}
                              className="text-sm text-neutral-600 hover:text-neutral-900 hover:bg-white px-2 py-1 rounded transition-all w-full text-left text-left"
                            >
                              Abstract
                            </button>
                          )}
                        </div>

                        {/* Content Section */}
                        {headings.length > 0 && (
                          <div className="space-y-1 mt-4">
                            <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2">Content Sections</h4>
                            {headings.map((heading, index) => (
                              <button
                                key={index}
                                onClick={() => scrollToHeading(heading.id)}
                                className={`text-sm hover:text-neutral-900 hover:bg-white px-2 py-1 rounded transition-all w-full text-left block ${
                                  heading.level === 1 ? 'font-semibold text-neutral-800' :
                                  heading.level === 2 ? 'font-medium text-neutral-700 ml-2' :
                                  heading.level === 3 ? 'text-neutral-600 ml-4' :
                                  heading.level === 4 ? 'text-neutral-600 ml-6' :
                                  heading.level === 5 ? 'text-neutral-500 ml-8' :
                                  'text-neutral-500 ml-10'
                                }`}
                              >
                                {heading.text}
                              </button>
                            ))}
                          </div>
                        )}

                        {/* Methodology Section */}
                        <div className="space-y-1 mt-4">
                          <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2">Methodology</h4>
                          {project.details.solution && (
                            <button
                              onClick={() => scrollToSection("methodology")}
                              className="text-sm text-neutral-600 hover:text-neutral-900 hover:bg-white px-2 py-1 rounded transition-all w-full text-left"
                            >
                              Approach
                            </button>
                          )}
                          {project.details.challenge && (
                            <button
                              onClick={() => scrollToSection("challenges")}
                              className="text-sm text-neutral-600 hover:text-neutral-900 hover:bg-white px-2 py-1 rounded transition-all w-full text-left"
                            >
                              Challenges
                            </button>
                          )}
                        </div>

                        {/* Resources Section */}
                        <div className="space-y-1 mt-4">
                          <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2">Resources</h4>
                          {(project.details.code || project.details.codeComponent || tutorialCodeContent[project.slug]) && (
                            <button
                              onClick={() => scrollToSection("code")}
                              className="text-sm text-neutral-600 hover:text-neutral-900 hover:bg-white px-2 py-1 rounded transition-all w-full text-left"
                            >
                              Code Example
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        ) : (
          <div className="w-full h-full bg-neutral-100 relative">
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
