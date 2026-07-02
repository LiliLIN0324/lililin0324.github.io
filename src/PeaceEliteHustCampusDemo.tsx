import React from 'react';

const ARTICLE_URL = 'https://mp.weixin.qq.com/s/IcG4OHyM48ZXQ3_6--Ii1w';
const PREVIEW_IMAGE = '/data/fig/GameforPeace&HUST.png';
const VIDEO_URL = 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/%E7%BB%BF%E6%B4%B2%E9%AB%98%E6%A0%A1_3.mp4';

const PeaceEliteHustCampusDemo: React.FC = () => {
  return (
    <div className="w-full h-full overflow-y-auto bg-neutral-950 text-neutral-100">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-10 py-6 md:py-8">
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_360px] gap-6 lg:gap-8 items-start">
          <div className="min-w-0 space-y-6">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 shadow-2xl overflow-hidden">
              <div className="px-4 py-3 border-b border-neutral-800 flex items-center justify-between bg-neutral-950/80">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-sm font-semibold tracking-wide text-neutral-200">Peace Elite HUST Campus Preview</span>
                </div>
                <span className="text-xs font-mono text-neutral-500">PREVIEW / ARTICLE</span>
              </div>
              <div className="p-4 md:p-6 space-y-4">
                <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
                  这是和平精英绿洲世界 × 华中科技大学共建项目的 demo 预览页。这里保留你自己的项目图和演示视频，方便快速浏览项目成果。
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={ARTICLE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-neutral-950 hover:bg-emerald-400 transition-colors"
                  >
                    打开公众号文章
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
          </div>

          <aside className="w-full xl:sticky xl:top-24 xl:self-start">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 shadow-2xl overflow-hidden">
              <div className="px-4 py-3 border-b border-neutral-800 flex items-center gap-2 bg-neutral-950/80">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                <span className="text-sm font-semibold text-neutral-200">Project Snapshot</span>
              </div>
              <a href={ARTICLE_URL} target="_blank" rel="noopener noreferrer" className="block cursor-zoom-in">
                <img src={PREVIEW_IMAGE} alt="Peace Elite HUST campus article preview" className="block w-full h-auto" />
              </a>
              <div className="p-4 space-y-2 text-sm text-neutral-300 leading-relaxed">
                <p><span className="text-neutral-500">Project:</span> 和平精英绿洲世界 × 华中科技大学高校共建</p>
                <p><span className="text-neutral-500">Role:</span> 建模 / 场景设计 / LOD 优化</p>
                <p><span className="text-neutral-500">Focus:</span> 南一楼数字化复原、校园数字文化资产</p>
                <p className="text-neutral-500 text-xs pt-2">
                  点击预览图可以打开公众号原文，点击演示视频可以直接观看第三段视频。
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PeaceEliteHustCampusDemo;
