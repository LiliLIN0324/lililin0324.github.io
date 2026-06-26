import React, { useState, useEffect, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDemoComponent } from './DemoLoader';
import { tutorialCodeContent } from './tutorialCodeContent';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import ImageCarousel from './ImageCarousel'; // 导入 ImageCarousel 组件

const SmartIframe = ({ src, ...props }) => {
  const [canEmbed, setCanEmbed] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleLoad = () => {
    setCanEmbed(true);
    setChecked(true);
  };

  const handleError = () => {
    setCanEmbed(false);
    setChecked(true);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!checked) {
        setCanEmbed(false);
        setChecked(true);
      }
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [checked]);

  return (
    <>
      <iframe
        src={src}
        onLoad={handleLoad}
        onError={handleError}
        style={{ display: 'none' }}
        title="detector"
      />

      {!checked && (
        <div className="w-full my-4">
          <a 
            href={src} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            访问链接
          </a>
        </div>
      )}

      {checked && canEmbed && (
        <div className="w-full my-6">
          <iframe 
            src={src}
            className="w-full h-96 rounded-lg shadow-md border border-neutral-200"
            allowFullScreen
            {...props}
          />
        </div>
      )}

      {checked && !canEmbed && (
        <div className="w-full my-4">
          <a 
            href={src} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            访问链接
          </a>
        </div>
      )}
    </>
  );
};

export const ProjectDetailView = ({ data, type }: { data: any[], type: string }) => {
  const { id } = useParams();
  const [viewMode, setViewMode] = useState<'details' | 'demo'>('details');
  const project = data.find(p => p.slug === id);

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
      <div className="sticky top-0 z-5 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 px-4 md:px-6 py-3 md:py-4 flex justify-between items-center shrink-0">
        <div className="flex items-center gap-4 md:gap-6">
          <Link to={`/${type}`} className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors uppercase tracking-wider">← Index</Link>
          <div className="h-4 w-px bg-neutral-200 dark:bg-neutral-700 hidden md:block"></div>
          <h2 className="text-xs md:text-sm font-bold text-neutral-900 dark:text-neutral-100 truncate max-w-[120px] md:max-w-[200px]">{project.title}</h2>
        </div>
        <div className="flex bg-neutral-100 dark:bg-neutral-800 p-1 rounded-sm border border-neutral-200 dark:border-neutral-700">
          <button onClick={() => setViewMode('details')} className={`px-2 md:px-3 py-1 text-xs font-mono ${viewMode === 'details' ? 'bg-white dark:bg-neutral-700 shadow-sm' : 'text-neutral-500 dark:text-neutral-400'}`}>DOCS</button>
          {project.hasDemo && (
            <button onClick={() => setViewMode('demo')} className={`px-2 md:px-3 py-1 text-xs font-mono flex items-center gap-2 ${viewMode === 'demo' ? 'bg-white dark:bg-neutral-700 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-neutral-500 dark:text-neutral-400'}`}>
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative rounded-full h-2 w-2 bg-blue-500"></span></span>
              DEMO
            </button>
          )}
        </div>
      </div>
      <div className={`flex-1 ${viewMode === 'details' ? 'overflow-y-auto' : 'overflow-hidden'}`}>
        {viewMode === 'details' ? (
          <div className="flex flex-col p-4 md:p-6 lg:p-10 w-full h-full max-w-7xl mx-auto">
             <div className="mb-8 md:mb-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech: string, index: number) => (
                    <span key={index} className="px-2 py-1 text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 rounded-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                  <span className="font-mono text-xs uppercase tracking-wide">NO. {project.id}</span>
                  <span className="text-neutral-300 dark:text-neutral-600">|</span>
                  <span>{project.year}</span>
                  <span className="text-neutral-300 dark:text-neutral-600">|</span>
                  <span>{project.category}</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-light mb-6 text-neutral-900 dark:text-neutral-100 tracking-tight">{project.title}</h1>
                <div className="bg-gradient-to-r from-neutral-50 dark:from-neutral-800 to-white dark:to-neutral-900 border-l-4 border-neutral-900 dark:border-neutral-500 p-6 md:p-8 rounded-r-lg">
                  <p className="font-serif text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                    "{project.description}"
                  </p>
                </div>
             </div>
                <div className="w-full flex-grow">
                  <div className="space-y-8 md:space-y-10 max-w-4xl mx-auto">
                    {project.details.abstract && (
                      <section id="abstract">
                        <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4 pb-2 border-b border-neutral-100 dark:border-neutral-800">
                          Abstract
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed text-neutral-800 dark:text-neutral-200 whitespace-normal">
                          {project.details.abstract}
                        </p>
                      </section>
                    )}

                    {project.details.challenge && (
                      <section id="challenges">
                        <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4 pb-2 border-b border-neutral-100 dark:border-neutral-800">
                          Challenges
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed text-neutral-800 dark:text-neutral-200 whitespace-normal">
                          {project.details.challenge}
                        </p>
                      </section>
                    )}

                    {project.details.solution && (
                      <section id="methodology">
                        <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4 pb-2 border-b border-neutral-100 dark:border-neutral-800">
                          Methodology
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed text-neutral-800 dark:text-neutral-200 whitespace-normal">
                          {project.details.solution}
                        </p>
                      </section>
                    )}

                    {project.details.content && (
                      <section id="content">
                        <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4 pb-2 border-b border-neutral-100 dark:border-neutral-800">
                          Content
                        </h3>
                        <div className="text-base md:text-lg leading-relaxed text-neutral-800 dark:text-neutral-200 prose prose-neutral dark:prose-invert max-w-none">
                          <ReactMarkdown 
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                            components={{
                              iframe: ({src, title, ...props}) => {
                                return <SmartIframe src={src} title={title || "Embedded content"} {...props} />;
                              },
                              imagecarousel: ({ images, captions }: { images?: string; captions?: string }) => {
                                const urls = (images || '').split(',').map(s => s.trim()).filter(Boolean);
                                const captionList = captions ? captions.split('|').map(s => s.trim()) : undefined;
                                return <ImageCarousel images={urls} captions={captionList} />;
                              },
                              imageCarousel: ({ images, captions }: { images?: string; captions?: string }) => {
                                const urls = (images || '').split(',').map(s => s.trim()).filter(Boolean);
                                const captionList = captions ? captions.split('|').map(s => s.trim()) : undefined;
                                return <ImageCarousel images={urls} captions={captionList} />;
                              },
                              table: ({children}) => (
                                <table className="min-w-full border-collapse border border-neutral-300 dark:border-neutral-600">
                                  {children}
                                </table>
                              ),
                              thead: ({children}) => (
                                <thead className="bg-neutral-50 dark:bg-neutral-800">
                                  {children}
                                </thead>
                              ),
                              th: ({children}) => (
                                <th className="border border-neutral-300 dark:border-neutral-600 px-3 py-2 text-left font-semibold text-neutral-900 dark:text-neutral-100 text-sm">
                                  {children}
                                </th>
                              ),
                              td: ({children}) => (
                                <td className="border border-neutral-300 dark:border-neutral-600 px-3 py-2 text-neutral-700 dark:text-neutral-300 text-sm">
                                  {children}
                                </td>
                              ),
                              h1: ({children, ...props}) => {
                                const text = typeof children === 'string' ? children : children?.toString() || '';
                                const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                                return <h1 id={id} className="text-2xl font-bold mb-4 text-neutral-900 dark:text-neutral-100" {...props}>{children}</h1>;
                              },
                              h2: ({children, ...props}) => {
                                const text = typeof children === 'string' ? children : children?.toString() || '';
                                const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                                return <h2 id={id} className="text-xl font-bold mb-6 mt-8 text-neutral-800 dark:text-neutral-200" {...props}>{children}</h2>;
                              },
                              h3: ({children, ...props}) => {
                                const text = typeof children === 'string' ? children : children?.toString() || '';
                                const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                                return <h3 id={id} className="text-lg font-semibold mb-4 mt-6 text-neutral-800 dark:text-neutral-200" {...props}>{children}</h3>;
                              },
                              h4: ({children, ...props}) => {
                                const text = typeof children === 'string' ? children : children?.toString() || '';
                                const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                                return <h4 id={id} className="text-base font-semibold mb-3 mt-4 text-neutral-700 dark:text-neutral-300" {...props}>{children}</h4>;
                              },
                              h5: ({children, ...props}) => {
                                const text = typeof children === 'string' ? children : children?.toString() || '';
                                const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                                return <h5 id={id} className="text-sm font-semibold mb-2 mt-3 text-neutral-700 dark:text-neutral-300" {...props}>{children}</h5>;
                              },
                              h6: ({children, ...props}) => {
                                const text = typeof children === 'string' ? children : children?.toString() || '';
                                const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                                return <h6 id={id} className="text-xs font-semibold mb-2 mt-2 text-neutral-600 dark:text-neutral-400" {...props}>{children}</h6>;
                              },
                              p: ({children, ...props}) => (
                                <p className="mb-4 leading-relaxed" {...props}>{children}</p>
                              ),
                              a: ({children, href, ...props}) => (
                                <a 
                                  href={href} 
                                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline decoration-1 hover:decoration-2 transition-all duration-200 font-medium" 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  {...props}
                                >
                                  {children}
                                </a>
                              ),
                              img: ({src, alt, ...props}) => {
                                const isInTable = props.className?.includes('h-32') || 
                                                  alt?.includes('BCR') || 
                                                  alt?.includes('BHV') || 
                                                  alt?.includes('SVF') ||
                                                  alt?.includes('NDVI') ||
                                                  alt?.includes('EV') ||
                                                  alt?.includes('WR') ||
                                                  alt?.includes('Dist_');
                                if (isInTable) {
                                  return (
                                    <img 
                                      src={src} 
                                      alt={alt} 
                                      className="max-w-full h-32 object-cover rounded-lg shadow-sm" 
                                      {...props}
                                    />
                                  );
                                } else {
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
                        <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-4 pb-2 border-b border-neutral-100 dark:border-neutral-800">
                          Code Example
                        </h3>
                        <div className="bg-neutral-900 dark:bg-neutral-800 text-neutral-100 dark:text-neutral-100 p-6 rounded-lg overflow-x-auto">
                          <pre className="text-sm font-mono leading-relaxed">
                            <code>{tutorialCodeContent[project.slug] || project.details.codeComponent || `// Code file: ${project.details.code}`}</code>
                          </pre>
                        </div>
                      </section>
                    )}
                  </div>
                </div>
          </div>
        ) : (
          <div className="w-full h-full bg-neutral-100 dark:bg-neutral-900 relative">
            <Suspense fallback={<div className="absolute inset-0 flex items-center justify-center text-neutral-400 dark:text-neutral-500 font-mono">Loading demo...</div>}>
              {(() => {
                const DemoComponent = getDemoComponent(project.slug);
                if (!DemoComponent) {
                  return <div className="absolute inset-0 flex items-center justify-center text-neutral-400 dark:text-neutral-500 font-mono">DEMO NOT AVAILABLE</div>;
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
