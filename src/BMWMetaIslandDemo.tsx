import React from 'react';

const PREVIEW_IMAGE = 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/BMW&TJ.png';
const VIDEO_URL = '/data/demos/bmw-meta-island/BMWMetaIslandCombined.mp4';
const INSTAGRAM_URL = 'https://www.instagram.com/reel/DDm0kpCTWB6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==';

const BMWMetaIslandDemo: React.FC = () => {
  return (
    <div className="w-full h-full overflow-y-auto bg-neutral-950 text-neutral-100">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-10 py-6 md:py-8">
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_360px] gap-6 lg:gap-8 items-start">
          <div className="min-w-0 space-y-6">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 shadow-2xl overflow-hidden">
              <div className="px-4 py-3 border-b border-neutral-800 flex items-center justify-between bg-neutral-950/80">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-sm font-semibold tracking-wide text-neutral-200">BMW Meta Island Preview</span>
                </div>
                <span className="text-xs font-mono text-neutral-500">PREVIEW / VIDEO</span>
              </div>
              <div className="p-4 md:p-6 space-y-4">
                <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
                  这是 BMW Meta Island 的 demo 预览区域。这里保留项目截图和合并后的演示视频，用来快速感受项目的整体视觉和概念。
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={VIDEO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-100 hover:bg-neutral-800 transition-colors"
                  >
                    打开演示视频
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 shadow-2xl overflow-hidden">
              <div className="px-4 py-3 border-b border-neutral-800 bg-neutral-950/80 text-sm font-semibold text-neutral-200">
                Demo Video
              </div>
              <div className="p-4 md:p-6">
                <video
                  controls
                  playsInline
                  className="w-full rounded-xl border border-neutral-800 shadow-lg bg-black"
                  src={VIDEO_URL}
                />
              </div>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 shadow-2xl overflow-hidden">
              <div className="px-4 py-3 border-b border-neutral-800 flex items-center justify-between bg-neutral-950/80">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-pink-400" />
                  <span className="text-sm font-semibold text-neutral-200">Instagram Showcase</span>
                </div>
                <span className="text-xs font-mono text-neutral-500">BMW INS</span>
              </div>
              <div className="p-4 md:p-6 space-y-4">
                <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
                  这个 Instagram 帖子是 BMW 的官方/品牌社媒展示内容，可以作为 demo 的补充展示入口。
                </p>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-pink-500 px-4 py-2 text-sm font-medium text-neutral-950 hover:bg-pink-400 transition-colors"
                >
                  打开 Instagram 帖子
                </a>
              </div>
            </div>
          </div>

          <aside className="w-full xl:sticky xl:top-24 xl:self-start">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 shadow-2xl overflow-hidden">
              <div className="px-4 py-3 border-b border-neutral-800 flex items-center gap-2 bg-neutral-950/80">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                <span className="text-sm font-semibold text-neutral-200">Project Snapshot</span>
              </div>
              <a href={PREVIEW_IMAGE} target="_blank" rel="noopener noreferrer" className="block cursor-zoom-in">
                <img src={PREVIEW_IMAGE} alt="BMW Meta Island preview" className="block w-full h-auto" />
              </a>
              <div className="p-4 space-y-2 text-sm text-neutral-300 leading-relaxed">
                <p><span className="text-neutral-500">Project:</span> BMW Meta Island</p>
                <p><span className="text-neutral-500">Role:</span> Game Designer / Project Lead</p>
                <p><span className="text-neutral-500">Focus:</span> Metaverse branding, persona matching, O2O experience</p>
                <p className="text-neutral-500 text-xs pt-2">
                  点击预览图可以放大查看。
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BMWMetaIslandDemo;
