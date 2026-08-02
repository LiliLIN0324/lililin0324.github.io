import React, { useState } from 'react';

const BASE = 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/hongqiqu';

interface Section {
  title: string;
  images: string[];
}

const SECTIONS: Section[] = [
  {
    title: '分水岭前合影',
    images: [
      `${BASE}/分水岭前合影.JPG`,
    ],
  },
  {
    title: '学业提升 · 大创项目暑期实践',
    images: [
      `${BASE}/学业提升-大创项目暑期实践.JPG`,
      `${BASE}/学业提升-大创项目暑期实践2.JPG`,
      `${BASE}/学业提升-大创项目暑期实践3.jpg`,
    ],
  },
];

const CollapsibleSection: React.FC<{ section: Section }> = ({ section }) => {
  const [open, setOpen] = useState(false);
  const hasMore = section.images.length > 1;

  return (
    <div className="mb-10 border border-rule bg-surface">
      <h2 className="px-5 py-4 text-lg font-bold tracking-tight text-ink md:px-7">
        {section.title}
      </h2>

      <div className="border-t border-rule">
        <img
          src={section.images[0]}
          alt={section.title}
          className="h-auto w-full object-cover"
        />
      </div>

      {hasMore && (
        <>
          <div
            className={`overflow-hidden transition-all duration-500 ease-editorial ${
              open ? 'max-h-[9999px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            {section.images.slice(1).map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${section.title} ${i + 2}`}
                className="h-auto w-full border-t border-rule object-cover"
              />
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="flex w-full items-center justify-center gap-2 border-t border-rule px-5 py-3 font-mono text-[11px] uppercase tracking-eyebrow text-ink-3 transition-colors hover:bg-surface-2 hover:text-ink"
          >
            {open ? (
              <>
                <span>收起</span>
                <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
              </>
            ) : (
              <>
                <span>展开查看更多 ({section.images.length - 1} 张)</span>
                <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </>
            )}
          </button>
        </>
      )}
    </div>
  );
};

const Hongqiqu: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 md:px-0 md:py-12">
      {SECTIONS.map((section, i) => (
        <CollapsibleSection key={i} section={section} />
      ))}
    </div>
  );
};

export default Hongqiqu;
