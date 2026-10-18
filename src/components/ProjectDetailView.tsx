import React, { useState, useEffect, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDemoComponent } from './DemoLoader';
import { tutorialCodeContent } from './tutorialCodeContent';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import ImageCarousel from './ImageCarousel';

const SmartIframe = ({ src, ...props }: { src: string; [key: string]: any }) => {
  const [canEmbed, setCanEmbed] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => { if (!checked) { setCanEmbed(false); setChecked(true); } }, 3000);
    return () => clearTimeout(timeoutId);
  }, [checked]);

  return (
    <>
      <iframe src={src} onLoad={() => { setCanEmbed(true); setChecked(true); }} onError={() => { setCanEmbed(false); setChecked(true); }} style={{ display: 'none' }} title="detector" />
      {!checked && (
        <div className="my-4 w-full">
          <a href={src} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            Open link
          </a>
        </div>
      )}
      {checked && canEmbed && (
        <div className="my-6 w-full border border-rule bg-surface-2">
          <iframe src={src} className="h-96 w-full border-0" allowFullScreen {...props} />
        </div>
      )}
      {checked && !canEmbed && (
        <div className="my-4 w-full">
          <a href={src} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            Open link
          </a>
        </div>
      )}
    </>
  );
};

/* ---- shared markdown components ---- */
const proseComponents = {
  iframe: ({ src, title, ...props }: any) => <SmartIframe src={src} title={title || 'Embedded content'} {...props} />,
  imagecarousel: ({ images, captions }: { images?: string; captions?: string }) => {
    const urls = (images || '').split(',').map(s => s.trim()).filter(Boolean);
    const captionList = captions ? captions.split('|').map(s => s.trim()) : undefined;
    return <ImageCarousel images={urls} captions={captionList} />;
  },
  table: ({ children }: any) => (
    <div className="my-6 overflow-x-auto border border-rule">
      <table className="min-w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }: any) => <thead className="border-b border-rule bg-surface-2">{children}</thead>,
  th: ({ children }: any) => <th className="border-r border-rule px-3 py-2 text-left font-mono text-[10px] uppercase tracking-eyebrow text-ink-2 last:border-r-0">{children}</th>,
  td: ({ children }: any) => <td className="border-r border-t border-rule px-3 py-2 text-ink-2 last:border-r-0">{children}</td>,
  h1: ({ children, ...props }: any) => {
    const text = typeof children === 'string' ? children : children?.toString() || '';
    const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
    return <h1 id={id} className="mt-10 mb-5 text-xl font-bold tracking-tight text-ink first:mt-0" {...props}>{children}</h1>;
  },
  h2: ({ children, ...props }: any) => {
    const text = typeof children === 'string' ? children : children?.toString() || '';
    const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
    return <h2 id={id} className="mt-8 mb-4 text-lg font-bold tracking-tight text-ink" {...props}>{children}</h2>;
  },
  h3: ({ children, ...props }: any) => {
    const text = typeof children === 'string' ? children : children?.toString() || '';
    const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
    return <h3 id={id} className="mt-6 mb-3 text-base font-bold text-ink" {...props}>{children}</h3>;
  },
  h4: ({ children, ...props }: any) => <h4 className="mt-5 mb-2 text-sm font-semibold text-ink" {...props}>{children}</h4>,
  h5: ({ children, ...props }: any) => <h5 className="mt-4 mb-2 text-sm font-semibold text-ink-2" {...props}>{children}</h5>,
  h6: ({ children, ...props }: any) => <h6 className="mt-3 mb-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink-3" {...props}>{children}</h6>,
  p: ({ children, ...props }: any) => {
    // Image-only paragraph — no bottom margin so consecutive images sit tight
    const childArray = React.Children.toArray(children);
    const isImageOnly = childArray.length === 1 && (childArray[0] as any)?.type === 'img';
    return <p className={isImageOnly ? 'mb-0 leading-relaxed text-ink-2' : 'mb-4 leading-relaxed text-ink-2'} {...props}>{children}</p>;
  },
  a: ({ children, href, ...props }: any) => (
    <a href={href} className="text-accent-text underline decoration-1 underline-offset-2 transition-colors hover:text-ink" target="_blank" rel="noopener noreferrer" {...props}>{children}</a>
  ),
  img: ({ src, alt, ...props }: any) => {
    const isInTable = alt?.match(/BCR|BHV|SVF|NDVI|EV|WR|Dist_/);
    return isInTable
      ? <img src={src} alt={alt} className="h-32 max-w-full border border-rule object-cover" onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} {...props} />
      : <img src={src} alt={alt} className="my-0 h-auto w-full border border-rule object-cover" onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} {...props} />;
  },
};

const GALLERY_PREVIEW = 6;

const galleryModeButton = (selected: boolean) =>
  `px-3 py-1.5 text-[12px] transition-colors duration-200 ${selected ? 'bg-ink text-canvas' : 'text-ink-3 hover:text-ink'}`;

/* Frontmatter galleries used to be repeated as a wall of markdown images.
   Default is a short grid with a dropdown expand. A second mode pages
   one image at a time. Either way, a click still opens the lightbox. */
const ProjectGallery = ({ images }: { images: string[] }) => {
  const [mode, setMode] = useState<'expand' | 'flip'>('expand');
  const [expanded, setExpanded] = useState(false);
  const [failed, setFailed] = useState<Set<string>>(new Set());
  const [active, setActive] = useState<number | null>(null);
  const [page, setPage] = useState(0);

  const available = images.filter(src => !failed.has(src));
  const pageIndex = available.length === 0 ? 0 : Math.min(page, available.length - 1);
  const visible = expanded ? available : available.slice(0, GALLERY_PREVIEW);
  const hiddenCount = Math.max(0, available.length - GALLERY_PREVIEW);

  const stepPage = (delta: number) => {
    setPage(current => {
      const len = available.length;
      if (len <= 1) return 0;
      const index = Math.min(current, len - 1);
      const next = index + delta;
      if (next < 0 || next >= len) return index;
      return next;
    });
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) return;

      if (active !== null) {
        if (event.key === 'Escape') setActive(null);
        if (event.key === 'ArrowRight') setActive(index => (index === null ? index : Math.min(available.length - 1, index + 1)));
        if (event.key === 'ArrowLeft') setActive(index => (index === null ? index : Math.max(0, index - 1)));
        return;
      }

      if (mode !== 'flip' || available.length < 2) return;
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
      const gallery = document.getElementById('gallery');
      if (!gallery) return;
      const rect = gallery.getBoundingClientRect();
      if (rect.bottom <= 0 || rect.top >= window.innerHeight) return;
      event.preventDefault();
      stepPage(event.key === 'ArrowRight' ? 1 : -1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, mode, available.length]);

  if (available.length === 0) return null;

  const markFailed = (src: string) => {
    setFailed(prev => {
      if (prev.has(src)) return prev;
      const next = new Set(prev);
      next.add(src);
      return next;
    });
  };

  return (
    <section id="gallery" className="mt-12">
      <div className="section-head mb-5">
        <p className="eyebrow">Gallery</p>
        <div className="flex flex-wrap items-center gap-3">
          {available.length > 1 && (
            <div className="flex border border-rule" role="group" aria-label="Gallery layout">
              <button type="button" aria-pressed={mode === 'expand'} onClick={() => setMode('expand')} className={galleryModeButton(mode === 'expand')}>下拉展开</button>
              <button type="button" aria-pressed={mode === 'flip'} onClick={() => setMode('flip')} className={galleryModeButton(mode === 'flip')}>左右翻页</button>
            </div>
          )}
          <p className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-3">
            {mode === 'flip' ? `${pageIndex + 1} / ${available.length}` : `${available.length} images`}
          </p>
        </div>
      </div>

      {mode === 'expand' ? (
        <>
          <div className="grid grid-cols-2 gap-px border border-rule bg-rule md:grid-cols-3">
            {visible.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setActive(index)}
                className="group relative bg-surface text-left"
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="aspect-[4/3] h-auto w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                  onError={() => markFailed(src)}
                />
                <span className="pointer-events-none absolute bottom-2 right-2 bg-canvas/90 px-1.5 py-0.5 font-mono text-[10px] text-ink-3">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </button>
            ))}
          </div>

          {hiddenCount > 0 && (
            <button
              type="button"
              onClick={() => setExpanded(open => !open)}
              className="flex w-full items-center justify-center gap-2 border border-t-0 border-rule px-5 py-3 font-mono text-[11px] uppercase tracking-eyebrow text-ink-3 transition-colors hover:bg-surface-2 hover:text-ink"
            >
              {expanded ? 'Collapse' : `Show all ${available.length}`}
              <svg className={`h-3 w-3 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          )}
        </>
      ) : (
        <div className="border border-rule bg-surface">
          <div className="relative bg-surface-2">
            <button
              type="button"
              onClick={() => setActive(pageIndex)}
              className="block w-full"
              aria-label={`Image ${pageIndex + 1} of ${available.length}`}
            >
              <img
                src={available[pageIndex]}
                alt=""
                className="mx-auto aspect-[4/3] max-h-[70vh] w-full object-contain"
                onError={() => markFailed(available[pageIndex])}
              />
            </button>
            <button
              type="button"
              aria-label="Previous image"
              disabled={pageIndex === 0}
              onClick={() => stepPage(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 border border-rule bg-canvas/90 px-3 py-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink transition-colors hover:bg-ink hover:text-canvas disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-canvas/90 disabled:hover:text-ink"
            >
              Prev
            </button>
            <button
              type="button"
              aria-label="Next image"
              disabled={pageIndex >= available.length - 1}
              onClick={() => stepPage(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 border border-rule bg-canvas/90 px-3 py-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink transition-colors hover:bg-ink hover:text-canvas disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-canvas/90 disabled:hover:text-ink"
            >
              Next
            </button>
          </div>
          <p className="border-t border-rule px-4 py-3 text-center font-mono text-[12px] tracking-eyebrow text-ink" aria-live="polite">
            {pageIndex + 1} / {available.length}
          </p>
        </div>
      )}

      {active !== null && available[active] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 font-mono text-[11px] uppercase tracking-eyebrow text-canvas/80 hover:text-canvas"
            onClick={() => setActive(null)}
          >
            Close
          </button>
          {available.length > 1 && (
            <button
              type="button"
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 border border-canvas/30 px-3 py-2 font-mono text-[11px] uppercase tracking-eyebrow text-canvas hover:bg-canvas hover:text-ink md:left-6"
              onClick={event => { event.stopPropagation(); setActive(index => (index === null ? index : Math.max(0, index - 1))); }}
            >
              Prev
            </button>
          )}
          <img
            src={available[active]}
            alt=""
            className="max-h-[85vh] max-w-[90vw] object-contain"
            onClick={event => event.stopPropagation()}
            onError={() => markFailed(available[active])}
          />
          {available.length > 1 && (
            <button
              type="button"
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 border border-canvas/30 px-3 py-2 font-mono text-[11px] uppercase tracking-eyebrow text-canvas hover:bg-canvas hover:text-ink md:right-6"
              onClick={event => { event.stopPropagation(); setActive(index => (index === null ? index : Math.min(available.length - 1, index + 1))); }}
            >
              Next
            </button>
          )}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[11px] uppercase tracking-eyebrow text-canvas/70">
            {active + 1} / {available.length}
          </p>
        </div>
      )}
    </section>
  );
};

export const ProjectDetailView = ({ data, type }: { data: any[]; type: string }) => {
  const { id } = useParams();
  const project = data.find(p => p.slug === id);
  const [viewMode, setViewMode] = useState<'details' | 'demo'>(
    project?.hasDemo && project?.details?.demoOnly ? 'demo' : 'details'
  );
  const [overviewOpen, setOverviewOpen] = useState(false);

  useEffect(() => {
    const sync = () => {
      if (project?.hasDemo && project?.details?.demoOnly) {
        setViewMode('demo');
      } else if (window.location.hash.includes('demo') && project?.hasDemo) {
        setViewMode('demo');
      } else {
        setViewMode('details');
      }
    };
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, [id, project?.hasDemo, project?.details?.demoOnly]);

  if (!project) {
    return (
      <div className="shell flex h-full items-center justify-center py-20">
        <div className="text-center">
          <p className="eyebrow">Error</p>
          <p className="mt-3 text-display-sm">Project not found</p>
          <Link to="/" className="btn-ghost mt-6">← Back to index</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-rise-in pb-16">
      {/* ---- Sticky toolbar ---- */}
      <div className="sticky top-0 z-20 border-b border-rule bg-surface/85 backdrop-blur">
        <div className="shell flex h-14 items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-4">
            <Link to={`/${type}`} className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-3 transition-colors hover:text-ink">← Index</Link>
            <span className="hidden h-3 w-px bg-rule md:block" aria-hidden="true" />
            <h2 className="truncate text-sm font-bold tracking-tight text-ink">{project.title}</h2>
          </div>

          {!project.details?.demoOnly && (
            <div className="flex shrink-0 border border-rule" role="group" aria-label="View mode">
              <button onClick={() => setViewMode('details')} className={`px-3 py-1.5 font-mono text-[10px] uppercase tracking-eyebrow transition-colors duration-200 ${viewMode === 'details' ? 'bg-ink text-canvas' : 'text-ink-3 hover:text-ink'}`}>Docs</button>
              {project.hasDemo && (
                <button onClick={() => setViewMode('demo')} className={`flex items-center gap-2 px-3 py-1.5 font-mono text-[10px] uppercase tracking-eyebrow transition-colors duration-200 ${viewMode === 'demo' ? 'bg-accent text-accent-ink' : 'text-ink-3 hover:text-ink'}`}>
                  <span className="relative flex h-1.5 w-1.5"><span className="absolute h-full w-full animate-ping rounded-full bg-accent-ink/75" /><span className="relative h-1.5 w-1.5 rounded-full bg-accent-ink" /></span>
                  Demo
              </button>
            )}
          </div>
        )}
      </div>
    </div>

    {/* ---- Details view ---- */}
      {viewMode === 'details' ? (
        <div className="shell py-8 md:py-12">
          <div className="mx-auto max-w-4xl">
            {/* Meta */}
            {project.tech?.length > 0 && (
              <div className="mb-6 flex flex-wrap gap-1.5">
                {project.tech.map((tech: string, idx: number) => <span key={idx} className="chip">{tech}</span>)}
              </div>
            )}

            <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-eyebrow text-ink-3">
              <span>NO. {project.id}</span>
              <span className="text-rule" aria-hidden="true">/</span>
              <span>{project.year}</span>
              <span className="text-rule" aria-hidden="true">/</span>
              <span>{project.category}</span>
            </div>

            <h1 className="text-display-sm mb-6">{project.title}</h1>

            {/* ---- Collapsible overview ---- */}
            <details
              className="group mb-12 border border-rule bg-surface"
              open={overviewOpen}
              onToggle={e => setOverviewOpen((e.target as HTMLDetailsElement).open)}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 select-none md:px-7">
                <span className="eyebrow">Overview</span>
                <span className="font-mono text-[10px] uppercase tracking-eyebrow text-ink-3 transition-transform duration-300 group-open:rotate-180">
                  {overviewOpen ? 'Collapse' : 'Expand'} ▾
                </span>
              </summary>

              <div className="space-y-6 border-t border-rule px-5 pb-6 pt-5 md:px-7 md:pb-8 md:pt-6">
                {project.description && (
                  <div>
                    <p className="eyebrow mb-2">Description</p>
                    <p className="max-w-measure text-base leading-relaxed text-ink-2">{project.description}</p>
                  </div>
                )}

                {project.details.abstract && project.details.abstract !== project.description && (
                  <div>
                    <p className="eyebrow mb-2">Abstract</p>
                    <p className="max-w-measure text-base leading-relaxed text-ink-2">{project.details.abstract}</p>
                  </div>
                )}

                {project.details.challenge && (
                  <div>
                    <p className="eyebrow mb-2">Challenges</p>
                    <p className="max-w-measure text-base leading-relaxed text-ink-2">{project.details.challenge}</p>
                  </div>
                )}

                {project.details.solution && (
                  <div>
                    <p className="eyebrow mb-2">Methodology</p>
                    <p className="max-w-measure text-base leading-relaxed text-ink-2">{project.details.solution}</p>
                  </div>
                )}
              </div>
            </details>

            {/* ---- Content — the main event ---- */}
            {project.details.content && (
              <section id="content">
                <div className="section-head mb-8">
                  <p className="eyebrow">Content</p>
                </div>
                <div className="prose-custom text-base leading-relaxed text-ink-2">
                  <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={proseComponents}>
                    {project.details.content}
                  </ReactMarkdown>
                </div>
              </section>
            )}

            <ProjectGallery
              key={project.slug}
              images={(project.details.image ?? []).filter((url: string) => url && !String(project.details.content || '').includes(url))}
            />

            {(project.details.code || project.details.codeComponent || tutorialCodeContent[project.slug]) && (
              <section id="code" className="mt-12">
                <div className="section-head mb-5">
                  <p className="eyebrow">Code Example</p>
                </div>
                <pre className="overflow-x-auto border border-rule bg-ink p-5 font-mono text-[13px] leading-relaxed text-canvas md:p-7">
                  <code>{tutorialCodeContent[project.slug] || project.details.codeComponent || `// Code file: ${project.details.code}`}</code>
                </pre>
              </section>
            )}
          </div>
        </div>
      ) : project.details?.demoOnly ? (
        /* ---- Demo-only view (full scroll, no fixed height) ---- */
        <Suspense fallback={<div className="flex items-center justify-center py-20"><p className="eyebrow">Loading demo...</p></div>}>
          {(() => {
            const DemoComponent = getDemoComponent(project.slug);
            if (!DemoComponent) return <div className="flex items-center justify-center py-20"><p className="eyebrow">Demo not available</p></div>;
            return <DemoComponent />;
          })()}
        </Suspense>
      ) : (
        /* ---- Demo view ---- */
        <div className="h-[calc(100vh-3.5rem)] w-full bg-surface-2">
          <Suspense fallback={<div className="flex h-full items-center justify-center"><p className="eyebrow">Loading demo...</p></div>}>
            {(() => {
              const DemoComponent = getDemoComponent(project.slug);
              if (!DemoComponent) return <div className="flex h-full items-center justify-center"><p className="eyebrow">Demo not available</p></div>;
              return <DemoComponent />;
            })()}
          </Suspense>
        </div>
      )}
    </div>
  );
};
