import React, { useState } from 'react';

const BASE = 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/previous-archi-work';

interface Section {
  title: string;
  images: string[];
}

const SECTIONS: Section[] = [
  {
    title: '海底避难所 · born from the sea',
    images: [
      `${BASE}/海底避难所.jpg`,
    ],
  },
  {
    title: '石头城 · the piled ark',
    images: [
      `${BASE}/piledark.jpg`,
      `${BASE}/piledark_1.jpg`,
      `${BASE}/piledark_2.jpg`,
    ],
  },
  {
    title: '东湖书吧 · flowing box',
    images: [
      `${BASE}/东湖书吧_1.jpg`,
      `${BASE}/东湖书吧_2.jpg`,
    ],
  },
  {
    title: '孵化器 · incubator',
    images: [
      `${BASE}/孵化器.jpg`,
      `${BASE}/孵化器_bake.png`,
      `${BASE}/孵化器_1.jpg`,
      `${BASE}/孵化器_2.jpg`,
      `${BASE}/孵化器_3.jpg`,
      `${BASE}/孵化器_4.jpg`,
    ],
  },
  {
    title: '居住区 · residential area',
    images: [
        `${BASE}/居住区.jpg`,
        `${BASE}/居住区_(1).jpg`,
        `${BASE}/居住区_(2).jpg`,
        `${BASE}/居住区_(3).jpg`,
        `${BASE}/居住区_(4).jpg`,
        `${BASE}/居住区_(5).jpg`,
        `${BASE}/居住区_(6).jpg`,
        `${BASE}/居住区_(7).jpg`,
        `${BASE}/居住区_(8).jpg`,
        `${BASE}/居住区_(9).jpg`,
        `${BASE}/居住区_(10).jpg`,
        `${BASE}/居住区_(11).jpg`,
        `${BASE}/居住区_(12).jpg`,
        `${BASE}/居住区_(13).jpg`,
        `${BASE}/居住区_(14).jpg`,
        `${BASE}/居住区_(15).jpg`,
        `${BASE}/居住区_(16).jpg`,
    ],
  },
  {
    title: '城市绿脊高层建筑设计 · urban green roof high-rise design',
    images: [
      `${BASE}/城市绿脊.jpg`,
      `${BASE}/城市绿脊_(1).jpg`,
      `${BASE}/城市绿脊_(2).jpg`,
      `${BASE}/城市绿脊_(3).jpg`,
      `${BASE}/城市绿脊_(4).jpg`,
      `${BASE}/城市绿脊_(5).jpg`,
      `${BASE}/城市绿脊_(6).jpg`,
      `${BASE}/城市绿脊_(7).jpg`,
      `${BASE}/城市绿脊_(8).jpg`,
      `${BASE}/城市绿脊_(9).jpg`,
      `${BASE}/城市绿脊_(10).jpg`,
      `${BASE}/城市绿脊_(11).jpg`,
      `${BASE}/城市绿脊_(12).jpg`,
      `${BASE}/城市绿脊_(13).jpg`,
      `${BASE}/城市绿脊_(14).jpg`,
    ],
  },
  {
    title: '露营地 · campsite',
    images: [
      `${BASE}/露营地.jpg`,
    ],
  },
  {
    title: '真实建造 · real construction',
    images: [
      `${BASE}/浮亭_1.jpg`,
      `${BASE}/浮亭_2.jpg`,
      `${BASE}/浮亭_宣传册子_(1).png`,
      `${BASE}/浮亭_宣传册子_(2).png`,
      `${BASE}/浮亭_宣传册子_(3).png`,
      `${BASE}/浮亭_宣传册子_(4).png`,
      `${BASE}/浮亭_宣传册子_(5).png`,
      `${BASE}/浮亭_宣传册子_(6).png`,
      `${BASE}/浮亭_宣传册子_(7).png`,
      `${BASE}/浮亭_宣传册子_(8).png`,
    ],
  },
  {
    title: '图书馆 · library',
    images: [
      `${BASE}/图书馆.jpg`,
    ],
  },
  {
    title: '武当山古建测绘 · wudang ancient architecture survey',
    images: [
      `${BASE}/武当山.jpg`,
    ],
  },
];

const CollapsibleSection: React.FC<{ section: Section }> = ({ section }) => {
  const [open, setOpen] = useState(false);
  const hasMore = section.images.length > 1;

  return (
    <div className="mb-10 border border-rule bg-surface">
      {/* Section header */}
      <h2 className="px-5 py-4 text-lg font-bold tracking-tight text-ink md:px-7">
        {section.title}
      </h2>

      {/* First image — always visible */}
      <div className="border-t border-rule">
        <img
          src={section.images[0]}
          alt={section.title}
          className="h-auto w-full object-cover"
        />
      </div>

      {/* Collapsible rest */}
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

const PreviousArchiWork: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 md:px-0 md:py-12">
      {SECTIONS.map((section, i) => (
        <CollapsibleSection key={i} section={section} />
      ))}
    </div>
  );
};

export default PreviousArchiWork;
