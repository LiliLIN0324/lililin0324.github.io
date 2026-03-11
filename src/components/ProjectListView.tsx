import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const ProjectListView = ({ data, type }: { data: any[], type: string }) => {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('grid');
  const [pdfPage, setPdfPage] = useState(1);
  const totalPdfPages = 55; // TODO: 请根据实际PDF页数修改
  
  // Page hint configuration: page number -> { hint text, link }
  const pageHints: Record<number, { text: string; link: string }> = {
    2: { text: "Self-introduction", link: "/about" },
    5: { text: "View 1037pinpin Project", link: "/design/1037pinpin" },
    11: { text: "View Perslearn Project", link: "/design/perslearn" },
    21: { text: "View Dragon Diffusion Project", link: "/design/dragon-diffussion" },
    27: { text: "View Genstyle Project", link: "/design/genstyle" },
    43: { text: "View Luoshu Project", link: "/design/bazi-fengshui-analysis" },
    48: { text: "View Genshot Project", link: "/design/genshot" },
  }

  return (
    <div className="p-4 md:p-6 lg:p-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* PDF Viewer + Projects Side by Side - 只在 design 类型显示 */}
      {type === 'design' ? (
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* 左侧：PDF Viewer */}
          <div className="flex-1 lg:flex-shrink-0 lg:w-[55%]">
            <div className="flex justify-between items-end border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-4">
              <h2 className="text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-100">Portfolio PDF</h2>
              <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                Page {pdfPage} / {totalPdfPages}
              </span>
            </div>
            
            {/* PDF 显示区域 */}
            <div className="relative flex items-center justify-center gap-2">
              {/* 左翻页按钮 */}
              <button
                onClick={() => setPdfPage(prev => Math.max(1, prev - 1))}
                disabled={pdfPage <= 1}
                className="flex-shrink-0 w-10 h-10 rounded-full bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-300 border border-neutral-200 dark:border-neutral-700"
              >
                <svg className="w-5 h-5 text-neutral-700 dark:text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* PDF 显示区域 */}
              <div 
                className="relative flex-1 bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-hidden shadow-2xl border border-neutral-300 dark:border-neutral-600" 
                style={{ aspectRatio: '4/2.8' }}
              >
                <iframe
                  key={pdfPage}
                  src={`https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/lili_ui_portfolio.pdf#page=${pdfPage}&view=Fit&scrollbar=0&toolbar=0&navpanes=0`}
                  className="w-full h-full"
                  title="Portfolio PDF"
                  style={{ 
                    border: 'none',
                    overflow: 'hidden',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                  }}
                />
                {/* 遮罩层隐藏滚动条 */}
                <div 
                  className="absolute right-0 top-0 bottom-0 w-4 bg-neutral-100 dark:bg-neutral-800 z-10"
                  style={{ pointerEvents: 'none' }}
                />
                <div 
                  className="absolute left-0 right-0 bottom-0 h-4 bg-neutral-100 dark:bg-neutral-800 z-10"
                  style={{ pointerEvents: 'none' }}
                />
              </div>
              
              {/* 右翻页按钮 */}
              <button
                onClick={() => setPdfPage(prev => Math.min(totalPdfPages, prev + 1))}
                disabled={pdfPage >= totalPdfPages}
                className="flex-shrink-0 w-10 h-10 rounded-full bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-300 border border-neutral-200 dark:border-neutral-700"
              >
                <svg className="w-5 h-5 text-neutral-700 dark:text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* 页码指示器 */}
            <div className="flex justify-center gap-1 mt-4 flex-wrap">
              {Array.from({ length: totalPdfPages }).map((_, index) => {
                const pageNum = index + 1
                const isActive = pdfPage === pageNum
                const hasHint = pageHints[pageNum]
                
                return (
                  <button
                    key={index}
                    onClick={() => setPdfPage(pageNum)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-neutral-800 dark:bg-neutral-200 w-6'
                        : hasHint
                          ? 'bg-blue-500 w-1.5 hover:bg-blue-600'
                          : 'bg-neutral-300 dark:bg-neutral-600 w-1.5 hover:bg-neutral-400'
                    }`}
                    title={hasHint ? pageHints[pageNum].text : `Page ${pageNum}`}
                  />
                )
              })}
            </div>
            
            {/* 页面跳转提示 */}
            {pageHints[pdfPage] && (
              <div className="mt-3 flex justify-center">
                <Link
                  to={pageHints[pdfPage].link}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-full transition-colors shadow-md hover:shadow-lg"
                >
                  <span>{pageHints[pdfPage].text}</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            )}
          </div>
          
          {/* 右侧：项目列表 */}
          <div className="flex-1 lg:w-[45%]">
            <div className="flex justify-between items-end border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-4">
              <h2 className="text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-100">Selected Designs</h2>
              <div className="flex items-center gap-2">
                <div className="flex bg-neutral-100 dark:bg-neutral-800 p-1 rounded-sm border border-neutral-200 dark:border-neutral-700">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`px-2 py-1 text-xs font-mono ${viewMode === 'grid' ? 'bg-white dark:bg-neutral-700 shadow-sm' : 'text-neutral-500 dark:text-neutral-400'}`}
                  >
                    GRID
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`px-2 py-1 text-xs font-mono ${viewMode === 'list' ? 'bg-white dark:bg-neutral-700 shadow-sm' : 'text-neutral-500 dark:text-neutral-400'}`}
                  >
                    LIST
                  </button>
                </div>
                <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">Idx: {data.length}</span>
              </div>
            </div>
            
            {/* 项目列表内容 - 高度与 PDF 区域一致 */}
            <div 
              className="overflow-y-auto" 
              style={{ aspectRatio: '4/2.7' }}
            >
              {viewMode === 'list' ? (
                <div className="space-y-0">
                  {data.map((project) => (
                    <div 
                      key={project.slug} 
                      className="group relative border border-neutral-200 dark:border-neutral-700 p-3 hover:border-neutral-900 dark:hover:border-neutral-500 transition-all duration-300 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:shadow-sm"
                    >
                      <div className="flex flex-row gap-3 items-center flex-1">
                        <Link 
                          to={`/${type}/${project.slug}`}
                          className="flex-grow min-w-0 w-full flex flex-row gap-3 items-center"
                        >
                          <div className="flex-shrink-0 w-12 h-12 border border-neutral-100 dark:border-neutral-700 overflow-hidden bg-neutral-50 dark:bg-neutral-800">
                            {project.details.logo ? (
                              <img src={project.details.logo} alt={project.title} className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-neutral-300 dark:text-neutral-600">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              </div>
                            )}
                          </div>
                          <div className="flex-grow min-w-0">
                            <div className="flex justify-between items-start mb-1">
                              <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500">NO. {project.id}</span>
                              <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">{project.year}</span>
                            </div>
                            <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 mb-0.5 group-hover:text-blue-600 truncate">{project.title}</h3>
                            <p className="text-neutral-500 dark:text-neutral-400 text-xs line-clamp-1">{project.description}</p>
                          </div>
                        </Link>
                        {project.hasDemo && (
                          <button 
                            onClick={() => {
                              window.location.href = `#/${type}/${project.slug}#demo`;
                            }}
                            className="flex-shrink-0 px-2 py-1 text-xs font-mono bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-sm"
                          >
                            DEMO
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  {data.map((project) => (
                    <div 
                      key={project.slug} 
                      className="group relative border border-neutral-200 dark:border-neutral-700 p-3 hover:border-neutral-900 dark:hover:border-neutral-500 transition-all duration-300 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:shadow-sm flex flex-col"
                    >
                      <Link 
                        to={`/${type}/${project.slug}`}
                        className="flex flex-col h-full"
                      >
                        <div className="flex-shrink-0 w-full aspect-square border border-neutral-100 dark:border-neutral-700 overflow-hidden bg-neutral-50 dark:bg-neutral-800 mb-2">
                          {project.details.logo ? (
                            <img src={project.details.logo} alt={project.title} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-neutral-300 dark:text-neutral-600">
                              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                          )}
                        </div>
                        <div className="flex-grow min-w-0">
                          <div className="flex justify-between items-start mb-1">
                            <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500">NO. {project.id}</span>
                            <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">{project.year}</span>
                          </div>
                          <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 mb-0.5 group-hover:text-blue-600 line-clamp-2">{project.title}</h3>
                          <p className="text-neutral-500 dark:text-neutral-400 text-xs line-clamp-2">{project.description}</p>
                        </div>
                      </Link>
                      {project.hasDemo && (
                        <button 
                          onClick={() => {
                            window.location.href = `#/${type}/${project.slug}#demo`;
                          }}
                          className="flex-shrink-0 w-full mt-2 px-2 py-1 text-xs font-mono bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-sm"
                        >
                          DEMO
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* 非 design 类型的原有布局 */
        <div className="flex justify-between items-end border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-6 md:mb-8">
          <h2 className="text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-100">Selected {type === 'research' ? 'Researches' : type === 'game' ? 'Games' : type === 'planning' ? 'Planning' :  type === 'tutorials'?'Tutorials':'Platform'}</h2>
          <div className="flex items-center gap-4">
            <div className="flex bg-neutral-100 dark:bg-neutral-800 p-1 rounded-sm border border-neutral-200 dark:border-neutral-700">
              <button 
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1 text-xs font-mono ${viewMode === 'grid' ? 'bg-white dark:bg-neutral-700 shadow-sm' : 'text-neutral-500 dark:text-neutral-400'}`}
              >
                GRID
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`px-3 py-1 text-xs font-mono ${viewMode === 'list' ? 'bg-white dark:bg-neutral-700 shadow-sm' : 'text-neutral-500 dark:text-neutral-400'}`}
              >
                LIST
              </button>
            </div>
            <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">Idx: {data.length}</span>
          </div>
        </div>
      )}
      
      {/* 非 design 类型的项目列表 */}
      {type !== 'design' && (
        viewMode === 'list' ? (
          <div className="space-y-4">
            {data.map((project) => (
              <div 
                key={project.slug} 
                className="group relative border border-neutral-200 dark:border-neutral-700 p-4 md:p-6 hover:border-neutral-900 dark:hover:border-neutral-500 transition-all duration-300 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:shadow-sm"
              >
                <div className="flex flex-row gap-4 md:gap-6 items-center flex-1">
                  <Link 
                    to={`/${type}/${project.slug}`}
                    className="flex-grow min-w-0 w-full flex flex-row gap-4 md:gap-6 items-center"
                  >
                    <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 border border-neutral-100 dark:border-neutral-700 overflow-hidden bg-neutral-50 dark:bg-neutral-800">
                      {project.details.logo ? (
                        <img src={project.details.logo} alt={project.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-neutral-300 dark:text-neutral-600">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500">NO. {project.id}</span>
                        <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">{project.year}</span>
                      </div>
                      <h3 className="text-base md:text-lg lg:text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-1 group-hover:text-blue-600 truncate">{project.title}</h3>
                      <p className="text-neutral-500 dark:text-neutral-400 text-sm line-clamp-1">{project.description}</p>
                    </div>
                  </Link>
                  {project.hasDemo && (
                    <button 
                      onClick={() => {
                        window.location.href = `#/${type}/${project.slug}#demo`;
                      }}
                      className="flex-shrink-0 px-3 py-2 text-xs font-mono bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-sm"
                    >
                      DEMO
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {data.map((project) => (
              <div 
                key={project.slug} 
                className="group relative border border-neutral-200 dark:border-neutral-700 p-4 md:p-6 hover:border-neutral-900 dark:hover:border-neutral-500 transition-all duration-300 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:shadow-sm flex flex-col"
              >
                <Link 
                  to={`/${type}/${project.slug}`}
                  className="flex flex-col h-full"
                >
                  <div className="flex-shrink-0 w-full aspect-square border border-neutral-100 dark:border-neutral-700 overflow-hidden bg-neutral-50 dark:bg-neutral-800 mb-4">
                    {project.details.logo ? (
                      <img src={project.details.logo} alt={project.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-neutral-300 dark:text-neutral-600">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500">NO. {project.id}</span>
                      <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">{project.year}</span>
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-1 group-hover:text-blue-600 line-clamp-2">{project.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm line-clamp-2">{project.description}</p>
                  </div>
                </Link>
                {project.hasDemo && (
                  <button 
                    onClick={() => {
                      window.location.href = `#/${type}/${project.slug}#demo`;
                    }}
                    className="flex-shrink-0 w-full mt-4 px-3 py-2 text-xs font-mono bg-blue-600 text-white hover:bg-blue-700 transition-colors rounded-sm"
                  >
                    DEMO
                  </button>
                )}
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};
