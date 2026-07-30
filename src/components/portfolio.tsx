      {/* Portfolio PDF Section */}
      <div className="mb-10 md:mb-12">
        <div className="flex justify-between items-end border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-6">
          <h2 className="text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-100">Portfolio PDF</h2>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
              Pages {pdfPage}-{Math.min(pdfPage + 1, totalPdfPages)} / {totalPdfPages}
            </span>
            <div className="flex gap-1">
              <button
                onClick={() => setPdfPage(prev => Math.max(1, prev - 2))}
                disabled={pdfPage <= 1}
                className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 disabled:opacity-30 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setPdfPage(prev => Math.min(totalPdfPages, prev + 2))}
                disabled={pdfPage >= totalPdfPages - 1}
                className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 disabled:opacity-30 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <a 
              href="https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/lili_planning_portfolio.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              title="Open in new window"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* 两页并排显示区域 - 使用 AnimatePresence 实现翻页效果 */}
        <div className="max-w-5xl mx-auto relative group/pdf">
          <div className="grid grid-cols-2 gap-0 relative overflow-hidden px-10">
            <AnimatePresence mode="wait">
              <motion.div 
                key={`page-container-${pdfPage}`}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="grid grid-cols-2 gap-0 col-span-2"
              >
                {/* 左侧页 */}
                <div className="relative aspect-[0.98/1.4] bg-neutral-100 dark:bg-neutral-800 rounded-l-lg overflow-hidden shadow-md border-y border-l border-neutral-200 dark:border-neutral-700">
                  <iframe
                    src={`https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/lili_planning_portfolio.pdf#page=${pdfPage}&view=Fit&scrollbar=0&toolbar=0&navpanes=0`}
                    className="absolute w-[105%] h-[105%] pointer-events-none" // 稍微增加溢出量
                    title={`Portfolio PDF Page ${pdfPage}`}
                    style={{ 
                      border: 'none', 
                      maxWidth: 'none',
                      left: '-1%', // 向左偏移 1% 裁剪掉自带黑边
                      top: '-0.4%',  // 向上偏移 1% 裁剪掉自带黑边
                      transform: 'none'
                    }}
                  />
                  <div className="absolute inset-0 bg-transparent z-10" />
                </div>

                {/* 右侧页 */}
                <div className="relative aspect-[0.98/1.4] bg-neutral-100 dark:bg-neutral-800 rounded-r-lg overflow-hidden shadow-md border-y border-r border-neutral-200 dark:border-neutral-700">
                  {pdfPage + 1 <= totalPdfPages ? (
                    <>
                      <iframe
                        src={`https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/lili_planning_portfolio.pdf#page=${pdfPage + 1}&view=Fit&scrollbar=0&toolbar=0&navpanes=0`}
                        className="absolute w-[105%] h-[103%] pointer-events-none"
                        title={`Portfolio PDF Page ${pdfPage + 1}`}
                        style={{ 
                          border: 'none', 
                          maxWidth: 'none',
                          left: '-1%', // 向左偏移 1% 裁剪掉自带黑边
                          top: '-0.4%',
                          transform: 'none'
                        }}
                      />
                      <div className="absolute inset-0 bg-transparent z-10" />
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-neutral-400 font-mono text-sm">
                      END
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* 左右翻页按钮 - 悬浮在两侧 */}
            <button
              onClick={() => setPdfPage(prev => Math.max(1, prev - 2))}
              disabled={pdfPage <= 1}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 dark:bg-neutral-800/80 shadow-lg hover:bg-white dark:hover:bg-neutral-700 flex items-center justify-center transition-all z-20 disabled:opacity-0"
            >
              <svg className="w-5 h-5 text-neutral-700 dark:text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setPdfPage(prev => Math.min(totalPdfPages, prev + 2))}
              disabled={pdfPage >= totalPdfPages - 1}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 dark:bg-neutral-800/80 shadow-lg hover:bg-white dark:hover:bg-neutral-700 flex items-center justify-center transition-all z-20 disabled:opacity-0"
            >
              <svg className="w-5 h-5 text-neutral-700 dark:text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* 页码指示器 */}
        <div className="flex justify-center gap-1 mt-6 flex-wrap">
          {Array.from({ length: Math.ceil(totalPdfPages / 2) }).map((_, index) => {
            const startPage = index * 2 + 1
            const isActive = pdfPage === startPage || pdfPage === startPage - 1
            return (
              <button
                key={index}
                onClick={() => setPdfPage(startPage)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-neutral-800 dark:bg-neutral-200 w-6'
                    : 'bg-neutral-300 dark:bg-neutral-600 w-2 hover:bg-neutral-400'
                }`}
                title={`Pages ${startPage}-${Math.min(startPage + 1, totalPdfPages)}`}
              />
            )
          })}
        </div>
      </div>