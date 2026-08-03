import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Route params are singular ('tutorial'), which the previous mapping missed —
// the Tutorial index rendered as "Selected Platform".
const TYPE_LABEL: Record<string, string> = {
  design: 'Products',
  game: 'Games',
  planning: 'Planning',
  platform: 'Platform',
  tutorial: 'Tutorials',
  research: 'Research',
};

const PlaceholderThumb = ({ className }: { className?: string }) => (
  <div className="flex h-full w-full items-center justify-center text-ink-3/50">
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.4} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  </div>
);

const DemoLink = ({ to, className = '' }: { to: string; className?: string }) => (
  <Link to={to} className={`btn-accent ${className}`}>
    Demo
  </Link>
);

/* ---------------------------------------------------------------------------
   Portfolio PDF flip-through. Currently disabled via SHOW_PORTFOLIO_PDF but
   kept intact so it can be switched back on.
   --------------------------------------------------------------------------- */
const SHOW_PORTFOLIO_PDF = false;
const TOTAL_PDF_PAGES = 55;

const PDF_PAGE_HINTS: Record<number, { text: string; link: string }> = {
  2: { text: 'Self-introduction', link: '/about' },
  5: { text: 'View Early Campus Experience', link: '/design/early-campus-experience' },
  11: { text: 'View Early Campus Experience', link: '/design/early-campus-experience' },
  21: { text: 'View Dragon Diffusion Project', link: '/design/dragon-diffussion' },
  27: { text: 'View Genstyle Project', link: '/design/genstyle' },
  43: { text: 'View Luoshu Project', link: '/design/bazi-fengshui-analysis' },
  48: { text: 'View Genshot Project', link: '/design/genshot' },
};

const PortfolioPdf = () => {
  const [pdfPage, setPdfPage] = useState(1);
  const hint = PDF_PAGE_HINTS[pdfPage];

  return (
    <div className="mb-12">
      <div className="section-head">
        <p className="eyebrow">Portfolio PDF</p>
        <p className="eyebrow nums-tabular">
          Page {pdfPage} <span className="mx-1 text-rule">/</span> {TOTAL_PDF_PAGES}
        </p>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <button
          onClick={() => setPdfPage(p => Math.max(1, p - 1))}
          disabled={pdfPage <= 1}
          aria-label="Previous page"
          className="icon-btn shrink-0 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>

        <div className="relative flex-1 overflow-hidden border border-rule bg-surface-2" style={{ aspectRatio: '4 / 2.8' }}>
          <iframe
            key={pdfPage}
            src={`https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/lili_ui_portfolio.pdf#page=${pdfPage}&view=Fit&scrollbar=0&toolbar=0&navpanes=0`}
            title="Portfolio PDF"
            className="pointer-events-none absolute inset-0 h-[110%] w-[110%] border-0"
            style={{ transform: 'translate(-2.5%, -5%)' }}
          />
        </div>

        <button
          onClick={() => setPdfPage(p => Math.min(TOTAL_PDF_PAGES, p + 1))}
          disabled={pdfPage >= TOTAL_PDF_PAGES}
          aria-label="Next page"
          className="icon-btn shrink-0 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-1">
        {Array.from({ length: TOTAL_PDF_PAGES }).map((_, index) => {
          const pageNum = index + 1;
          const isActive = pdfPage === pageNum;
          const pageHint = PDF_PAGE_HINTS[pageNum];
          return (
            <button
              key={pageNum}
              onClick={() => setPdfPage(pageNum)}
              title={pageHint ? pageHint.text : `Page ${pageNum}`}
              aria-label={pageHint ? pageHint.text : `Page ${pageNum}`}
              className={`h-1.5 transition-all duration-300 ${
                isActive ? 'w-6 bg-ink' : pageHint ? 'w-1.5 bg-accent' : 'w-1.5 bg-rule hover:bg-ink-3'
              }`}
            />
          );
        })}
      </div>

      {hint && (
        <div className="mt-4 flex justify-center">
          <Link to={hint.link} className="btn-accent">
            {hint.text}
            <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
        </div>
      )}
    </div>
  );
};

/* ---------------------------------------------------------------------------
   Index rows / cards
   --------------------------------------------------------------------------- */
const ListRow = ({ project, type, index }: { project: any; type: string; index: number }) => (
  <li className="group border-b border-rule transition-colors duration-300 hover:bg-surface">
    <div className="flex items-center gap-4 py-4 md:gap-6 md:py-5">
      <span className="nums-tabular hidden w-10 shrink-0 self-start pt-1 text-lg font-bold leading-none tracking-masthead text-ink-3/60 transition-colors group-hover:text-accent-text sm:block">
        {String(index + 1).padStart(2, '0')}
      </span>

      <Link to={`/${type}/${project.slug}`} className="flex min-w-0 flex-1 items-center gap-4 md:gap-6">
        <div className="h-16 w-16 shrink-0 overflow-hidden border border-rule bg-surface-2 md:h-20 md:w-20">
          {project.details.logo
            ? <img src={project.details.logo} alt="" className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105" onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
            : <PlaceholderThumb className="h-7 w-7" />}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-bold tracking-tight text-ink md:text-lg lg:text-xl">
            <span className="wipe-underline">{project.title}</span>
          </h3>
          <p className="mt-1 truncate text-sm text-ink-2">{project.description}</p>
        </div>

        <div className="hidden shrink-0 flex-wrap justify-end gap-1.5 lg:flex lg:max-w-[16rem]">
          {project.tech?.slice(0, 3).map((t: string) => <span key={t} className="chip">{t}</span>)}
        </div>

        <span className="eyebrow nums-tabular hidden w-12 shrink-0 text-right md:block">{project.year}</span>
      </Link>

      {project.hasDemo && <DemoLink to={`/${type}/${project.slug}#demo`} className="shrink-0" />}
    </div>
  </li>
);

const GridCard = ({ project, type, index }: { project: any; type: string; index: number }) => (
  <article className="group flex flex-col border border-rule bg-surface transition-colors duration-300 hover:border-rule-strong">
    <Link to={`/${type}/${project.slug}`} className="flex flex-1 flex-col">
      <div className="aspect-square w-full overflow-hidden border-b border-rule bg-surface-2">
        {project.details.logo
          ? <img src={project.details.logo} alt="" className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.05]" onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
          : <PlaceholderThumb className="h-10 w-10" />}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-baseline justify-between gap-3">
          <span className="nums-tabular text-sm font-bold tracking-masthead text-ink-3/70 transition-colors group-hover:text-accent-text">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="eyebrow nums-tabular">{project.year}</span>
        </div>

        <h3 className="mt-2.5 line-clamp-2 text-base font-bold leading-snug tracking-tight text-ink md:text-lg">
          <span className="wipe-underline">{project.title}</span>
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-2">{project.description}</p>

        {project.tech?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 2).map((t: string) => <span key={t} className="chip">{t}</span>)}
          </div>
        )}
      </div>
    </Link>

    {project.hasDemo && (
      <div className="border-t border-rule p-3">
        <DemoLink to={`/${type}/${project.slug}#demo`} className="w-full" />
      </div>
    )}
  </article>
);

export const ProjectListView = ({ data, type }: { data: any[], type: string }) => {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('grid');
  const label = TYPE_LABEL[type] ?? 'Works';

  return (
    <div className="shell animate-rise-in py-8 md:py-12">
      {type === 'design' && SHOW_PORTFOLIO_PDF && <PortfolioPdf />}

      <div className="section-head">
        <p className="eyebrow">{type} / Index</p>
        <p className="eyebrow nums-tabular">{String(data.length).padStart(2, '0')} Entries</p>
      </div>

      <div className="mt-5 flex flex-wrap items-end justify-between gap-4 border-b border-rule pb-5">
        <h1 className="text-display-sm">Selected {label}</h1>

        <div className="flex shrink-0 border border-rule" role="group" aria-label="View mode">
          {(['grid', 'list'] as const).map(mode => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              aria-pressed={viewMode === mode}
              className={`px-3 py-1.5 font-mono text-[10px] uppercase tracking-eyebrow transition-colors duration-200 ${
                viewMode === mode ? 'bg-ink text-canvas' : 'text-ink-3 hover:text-ink'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {viewMode === 'list' ? (
        <ul className="mt-2 border-t border-rule">
          {data.map((project, index) => (
            <ListRow key={project.slug} project={project} type={type} index={index} />
          ))}
        </ul>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((project, index) => (
            <GridCard key={project.slug} project={project} type={type} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};
