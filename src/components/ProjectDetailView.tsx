import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDemoComponent } from './DemoLoader';
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

/* Collapsed list shows a few stacked thumbs. One extra success tells us
   the catalog is longer, without downloading every later file up front. */
const LIST_PREVIEW = 3;

const galleryModeButton = (selected: boolean) =>
  `px-3 py-1.5 text-[12px] transition-colors duration-200 ${selected ? 'bg-ink text-canvas' : 'text-ink-3 hover:text-ink'}`;

/* Frontmatter galleries used to be repeated as a wall of markdown images.
   Default is a vertical expand/collapse list of stacked thumbs. A second
   mode pages one image at a time. Files that fail to load never occupy a cell.
   Either way, a click still opens the lightbox. */
const ProjectGallery = ({ images }: { images: string[] }) => {
  const [mode, setMode] = useState<'expand' | 'flip'>('expand');
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const [page, setPage] = useState(0);
  const [tick, setTick] = useState(0);
  const statusRef = useRef<Map<string, 'ok' | 'bad'>>(new Map());

  const revealAll = mode === 'expand' && expanded;
  const imagesKey = images.join('\n');

  useEffect(() => {
    let cancelled = false;
    let activeLoads = 0;
    let cursor = 0;
    const status = statusRef.current;
    const inflight: HTMLImageElement[] = [];
    const CONCURRENCY = 4;

    const okCount = () => images.reduce((count, src) => count + (status.get(src) === 'ok' ? 1 : 0), 0);

    const target = () => {
      if (revealAll) return Number.POSITIVE_INFINITY;
      if (mode === 'flip') return page + 2;
      return LIST_PREVIEW + 1;
    };

    const pump = () => {
      if (cancelled) return;
      while (activeLoads < CONCURRENCY && cursor < images.length) {
        if (okCount() >= target()) break;
        const src = images[cursor++];
        if (status.has(src)) continue;
        activeLoads++;
        const img = new Image();
        inflight.push(img);
        const finish = (result: 'ok' | 'bad') => {
          status.set(src, result);
          if (cancelled) return;
          activeLoads--;
          setTick(value => value + 1);
          pump();
        };
        img.onload = () => finish(img.naturalWidth > 0 ? 'ok' : 'bad');
        img.onerror = () => finish('bad');
        img.src = src;
      }
    };

    pump();
    return () => {
      cancelled = true;
      inflight.forEach(img => {
        img.onload = null;
        img.onerror = null;
      });
    };
    // Restart when the URL list, mode, or how far we need to read changes.
    // imagesKey (not the array identity) is the catalog key: the parent builds
    // a new array on every render.
  }, [imagesKey, revealAll, mode, page]); // eslint-disable-line react-hooks/exhaustive-deps

  const good = images.filter(src => statusRef.current.get(src) === 'ok');
  const fullyKnown = images.every(src => statusRef.current.has(src));
  const pageIndex = good.length === 0 ? 0 : Math.min(page, good.length - 1);
  const visible = revealAll ? good : good.slice(0, LIST_PREVIEW);
  const canExpand = good.length > LIST_PREVIEW;
  const waitingForNext = mode === 'flip' && !fullyKnown && page >= good.length && good.length > 0;

  useEffect(() => {
    if (fullyKnown && good.length > 0 && page > good.length - 1) {
      setPage(good.length - 1);
    }
  }, [fullyKnown, good.length, page]);

  const markBad = (src: string) => {
    if (statusRef.current.get(src) === 'bad') return;
    statusRef.current.set(src, 'bad');
    setTick(value => value + 1);
  };

  const stepPage = (delta: number) => {
    setPage(current => {
      const last = Math.max(0, good.length - 1);
      const index = Math.min(current, last);
      const next = index + delta;
      if (next < 0) return 0;
      if (delta > 0) {
        if (next < good.length) return next;
        if (!fullyKnown) return good.length;
        return index;
      }
      return Math.min(next, last);
    });
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) return;

      if (active !== null) {
        if (event.key === 'Escape') setActive(null);
        if (event.key === 'ArrowRight') setActive(index => (index === null ? index : Math.min(good.length - 1, index + 1)));
        if (event.key === 'ArrowLeft') setActive(index => (index === null ? index : Math.max(0, index - 1)));
        return;
      }

      if (mode !== 'flip' || good.length < 1) return;
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
  }, [active, mode, good.length, fullyKnown, page]);

  if (tick < 0) return null;
  if (fullyKnown && good.length === 0) return null;

  const countLabel = good.length === 0
    ? ''
    : fullyKnown
      ? `${good.length} images`
      : `${good.length}+`;
  const flipLabel = good.length === 0
    ? ''
    : fullyKnown
      ? `${pageIndex + 1} / ${good.length}`
      : `${pageIndex + 1} / ${good.length}+`;

  return (
    <section id="gallery" className="mt-12">
      <div className="section-head mb-5">
        <p className="eyebrow">Gallery</p>
        <div className="flex flex-wrap items-center gap-3">
          {images.length > 1 && (
            <div className="flex border border-rule" role="group" aria-label="Gallery layout">
              <button type="button" aria-pressed={mode === 'expand'} onClick={() => setMode('expand')} className={galleryModeButton(mode === 'expand')}>下拉展开</button>
              <button type="button" aria-pressed={mode === 'flip'} onClick={() => setMode('flip')} className={galleryModeButton(mode === 'flip')}>左右翻页</button>
            </div>
          )}
          {(mode === 'flip' ? flipLabel : countLabel) && (
            <p className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-3">
              {mode === 'flip' ? flipLabel : countLabel}
            </p>
          )}
        </div>
      </div>

      {mode === 'expand' ? (
        <>
          {visible.length > 0 ? (
            <ol className="border border-rule bg-surface">
              {visible.map((src, index) => (
                <li key={src} className="border-b border-rule last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setActive(good.indexOf(src))}
                    className="flex w-full items-center gap-3 px-3 py-3 text-left transition-colors hover:bg-surface-2 md:gap-4 md:px-4"
                  >
                    <span className="w-8 shrink-0 font-mono text-[11px] text-ink-3">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <img
                      src={src}
                      alt=""
                      className="min-w-0 max-h-64 w-auto max-w-full object-contain"
                      onError={() => markBad(src)}
                    />
                  </button>
                </li>
              ))}
            </ol>
          ) : (
            <p className="border border-rule px-4 py-6 text-center font-mono text-[11px] uppercase tracking-eyebrow text-ink-3">
              Loading
            </p>
          )}

          {canExpand && (
            <button
              type="button"
              onClick={() => setExpanded(open => !open)}
              aria-expanded={expanded}
              className="flex w-full items-center justify-center gap-2 border border-t-0 border-rule px-5 py-3 font-mono text-[11px] uppercase tracking-eyebrow text-ink-3 transition-colors hover:bg-surface-2 hover:text-ink"
            >
              {expanded ? 'Collapse' : fullyKnown ? `Show all ${good.length}` : 'Show all'}
              <svg className={`h-3 w-3 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          )}
        </>
      ) : (
        <div className="border border-rule bg-surface">
          <div className="relative bg-surface-2">
            {good[pageIndex] ? (
              <button
                type="button"
                onClick={() => setActive(pageIndex)}
                className="block w-full"
                aria-label={flipLabel ? `Image ${flipLabel}` : `Image ${pageIndex + 1}`}
              >
                <img
                  src={good[pageIndex]}
                  alt=""
                  className="mx-auto max-h-[70vh] w-full object-contain"
                  onError={() => markBad(good[pageIndex])}
                />
              </button>
            ) : (
              <p className="px-4 py-16 text-center font-mono text-[11px] uppercase tracking-eyebrow text-ink-3">
                Loading
              </p>
            )}
            <button
              type="button"
              aria-label="Previous image"
              disabled={pageIndex === 0 || good.length === 0}
              onClick={() => stepPage(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 border border-rule bg-canvas/90 px-3 py-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink transition-colors hover:bg-ink hover:text-canvas disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-canvas/90 disabled:hover:text-ink"
            >
              Prev
            </button>
            <button
              type="button"
              aria-label="Next image"
              disabled={good.length === 0 || (pageIndex >= good.length - 1 && (fullyKnown || waitingForNext))}
              onClick={() => stepPage(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 border border-rule bg-canvas/90 px-3 py-2 font-mono text-[11px] uppercase tracking-eyebrow text-ink transition-colors hover:bg-ink hover:text-canvas disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-canvas/90 disabled:hover:text-ink"
            >
              Next
            </button>
          </div>
          <p className="border-t border-rule px-4 py-3 text-center font-mono text-[12px] tracking-eyebrow text-ink" aria-live="polite">
            {flipLabel || '—'}
          </p>
        </div>
      )}

      {active !== null && good[active] && (
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
          {good.length > 1 && (
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
            src={good[active]}
            alt=""
            className="max-h-[85vh] max-w-[90vw] object-contain"
            onClick={event => event.stopPropagation()}
            onError={() => markBad(good[active])}
          />
          {good.length > 1 && (
            <button
              type="button"
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 border border-canvas/30 px-3 py-2 font-mono text-[11px] uppercase tracking-eyebrow text-canvas hover:bg-canvas hover:text-ink md:right-6"
              onClick={event => { event.stopPropagation(); setActive(index => (index === null ? index : Math.min(good.length - 1, index + 1))); }}
            >
              Next
            </button>
          )}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[11px] uppercase tracking-eyebrow text-canvas/70">
            {active + 1} / {good.length}
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

  const DETAILS_MARK = '<!-- details -->';
  const rawContent = String(project.details.content || '');
  const splitAt = rawContent.indexOf(DETAILS_MARK);
  const lead = (splitAt === -1 ? rawContent : rawContent.slice(0, splitAt)).trim();
  const details = splitAt === -1 ? '' : rawContent.slice(splitAt + DETAILS_MARK.length).trim();

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
          <div className="mx-auto max-w-5xl">
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

            {/* Narrative first, then the gallery, then optional deeper detail. */}
            {lead && (
              <section id="content">
                <div className="prose-custom text-base leading-relaxed text-ink-2">
                  <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={proseComponents}>
                    {lead}
                  </ReactMarkdown>
                </div>
              </section>
            )}

            <ProjectGallery
              key={project.slug}
              images={(project.details.image ?? []).filter((url: string) => url && !String(project.details.content || '').includes(url))}
            />

            {details && (
              <section id="details" className="mt-12">
                <div className="section-head mb-8">
                  <p className="eyebrow">细节</p>
                  <p className="font-mono text-[11px] uppercase tracking-eyebrow text-ink-3">Methods</p>
                </div>
                <div className="prose-custom text-base leading-relaxed text-ink-2">
                  <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={proseComponents}>
                    {details}
                  </ReactMarkdown>
                </div>
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
