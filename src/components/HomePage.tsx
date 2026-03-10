import React, { useEffect, useState, useRef } from 'react'
import {
  projects,
  designProjects,
  gameProjects,
  platformProjects,
  tutorialProjects,
} from '../data/projects'

export const HomePage = () => {
  const allProjects = [
    ...projects.map(p => ({ ...p, type: 'planning' })),
    ...designProjects.map(p => ({ ...p, type: 'design' })),
    ...gameProjects.map(p => ({ ...p, type: 'game' })),
    ...platformProjects.map(p => ({ ...p, type: 'platform' })),
    ...tutorialProjects.map(p => ({ ...p, type: 'tutorial' })),
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = allProjects.length - 1

  // Banner 视频轮播状态
  const [bannerIndex, setBannerIndex] = useState(0)
  const bannerVideos = [
    {
      src: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/20260305-222003.mp4",
      title: "Welcome to My Portfolio",
      subtitle: "Explore my projects in urban planning, design, game development, and AI tutorials."
    },
    {
      src: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/20260304_heatmap_2.mp4",
      title: "Data Visualization",
      subtitle: "Interactive heatmaps and spatial analysis for urban research."
    }
  ]

  // Gallery 竖版视频轮播状态
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [videoAudioInfo, setVideoAudioInfo] = useState<Record<number, boolean>>({})
  
  const galleryVideos = [
    { src: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/%E5%BE%AE%E4%BF%A1%E8%A7%86%E9%A2%912026-02-09_184301_354.mp4", title: "Video Title 1" },
    { src: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/20260225-192100.mp4", title: "Video Title 2" },
    { src: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video3.mp4", title: "Video Title 3" },
    { src: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video4.mp4", title: "Video Title 4" },
    { src: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video5.mp4", title: "Video Title 5" },
    { src: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video6.mp4", title: "Video Title 6" },
    { src: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video7.mp4", title: "Video Title 7" },
    { src: "https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video8.mp4", title: "Video Title 8" },
  ]

  // 检测视频是否有音轨
  const checkAudioTracks = (video: HTMLVideoElement, index: number) => {
    const v = video as any
    
    console.log(`Checking audio for video ${index}:`, {
      audioTracks: v.audioTracks?.length,
      mozHasAudio: v.mozHasAudio,
      webkitAudioDecodedByteCount: v.webkitAudioDecodedByteCount,
      videoTracks: v.videoTracks?.length,
      readyState: v.readyState
    })
    
    // 方法1: 检测 audioTracks (现代浏览器，最准确)
    if (v.audioTracks && v.audioTracks.length > 0) {
      const hasAudio = Array.from(v.audioTracks).some((track: any) => track.enabled)
      console.log(`Video ${index} has audioTracks:`, hasAudio)
      setVideoAudioInfo(prev => ({ ...prev, [index]: hasAudio }))
      return
    }
    
    // 方法2: 检测 mozHasAudio (Firefox)
    if ('mozHasAudio' in v) {
      const hasAudio = v.mozHasAudio
      console.log(`Video ${index} mozHasAudio:`, hasAudio)
      setVideoAudioInfo(prev => ({ ...prev, [index]: hasAudio }))
      return
    }
    
    // 方法3: 检测 webkitAudioDecodedByteCount (Chrome/Safari)
    // 注意：这个属性在视频开始播放前可能是0或undefined
    const webkitAudioBytes = v.webkitAudioDecodedByteCount
    if (typeof webkitAudioBytes === 'number' && webkitAudioBytes > 0) {
      console.log(`Video ${index} webkitAudioDecodedByteCount:`, webkitAudioBytes)
      setVideoAudioInfo(prev => ({ ...prev, [index]: true }))
      return
    }
    
    // 方法4: 通过视频时长和文件大小推断
    // 如果视频加载完成但没有检测到音频，我们延迟再检查一次
    if (v.readyState >= 3) {
      // 延迟检查，给浏览器更多时间解码音频信息
      setTimeout(() => {
        const delayedWebkitAudio = v.webkitAudioDecodedByteCount
        const delayedMozAudio = v.mozHasAudio
        const hasAudio = delayedWebkitAudio > 0 || delayedMozAudio === true
        console.log(`Video ${index} delayed check:`, { delayedWebkitAudio, delayedMozAudio, hasAudio })
        setVideoAudioInfo(prev => ({ ...prev, [index]: hasAudio }))
      }, 500)
      return
    }
    
    // 默认假设有音频（大多数竖版视频都有声音）
    console.log(`Video ${index} default to has audio`)
    setVideoAudioInfo(prev => ({ ...prev, [index]: true }))
  }

  // 自动切换 banner 视频
  useEffect(() => {
    const timer = setInterval(() => {
      setBannerIndex(prev => (prev + 1) % bannerVideos.length)
    }, 8000) // 8秒切换一次
    return () => clearInterval(timer)
  }, [bannerVideos.length])

  // 鼠标滚轮 → 切牌（仅在卡牌区域）
  const cardStageRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const cardStage = cardStageRef.current
    if (!cardStage) return

    const handleWheel = (e: WheelEvent) => {
      // 检查滚轮事件是否发生在卡牌区域内
      const target = e.target as HTMLElement
      if (!cardStage.contains(target)) return

      e.preventDefault()

      setCurrentIndex(prev => {
        if (e.deltaY > 0) return Math.min(prev + 1, maxIndex)
        return Math.max(prev - 1, 0)
      })
    }

    // 在卡牌容器上监听滚轮事件，而不是全局 window
    cardStage.addEventListener('wheel', handleWheel, { passive: false })
    return () => cardStage.removeEventListener('wheel', handleWheel)
  }, [maxIndex])

  return (
    <div className="p-4 md:p-6 lg:p-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Video Banner - 轮播 */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden mb-8 md:mb-10 shadow-2xl">
        {/* 视频列表 */}
        {bannerVideos.map((video, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === bannerIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={video.src}
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        ))}
        
        {/* 视频遮罩层 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Banner 文字内容 */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            {bannerVideos[bannerIndex].title}
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-2xl">
            {bannerVideos[bannerIndex].subtitle}
          </p>
        </div>
        
        {/* 切换指示器 */}
        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 flex gap-2">
          {bannerVideos.map((_, index) => (
            <button
              key={index}
              onClick={() => setBannerIndex(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === bannerIndex 
                  ? 'bg-white w-6 md:w-8' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
        
        {/* 左右切换按钮 */}
        <button
          onClick={() => setBannerIndex(prev => (prev - 1 + bannerVideos.length) % bannerVideos.length)}
          className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-all duration-300 opacity-0 hover:opacity-100 group-hover:opacity-100"
          style={{ opacity: 0.7 }}
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setBannerIndex(prev => (prev + 1) % bannerVideos.length)}
          className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-all duration-300 opacity-0 hover:opacity-100 group-hover:opacity-100"
          style={{ opacity: 0.7 }}
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Video Gallery - 竖排视频轮播 */}
      <div className="mb-10 md:mb-12">
        <div className="flex justify-between items-end border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-6">
          <h2 className="text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-100">Video Gallery</h2>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
              {galleryIndex + 1} / {galleryVideos.length}
            </span>
            <div className="flex gap-1">
              <button
                onClick={() => setGalleryIndex(prev => (prev - 1 + galleryVideos.length) % galleryVideos.length)}
                className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setGalleryIndex(prev => (prev + 1) % galleryVideos.length)}
                className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* 竖排视频轮播区 - 一行显示4个 */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${galleryIndex * (100 / 4)}%)` }}
          >
            {galleryVideos.map((video, index) => (
              <div
                key={index}
                className="w-1/4 flex-shrink-0 px-2"
              >
                <div 
                  className="relative aspect-[9/16] rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 group cursor-pointer"
                  onMouseEnter={(e) => {
                    const video = e.currentTarget.querySelector('video');
                    if (video) {
                      video.play().catch(err => console.log('Video play failed:', err));
                    }
                  }}
                  onMouseLeave={(e) => {
                    const video = e.currentTarget.querySelector('video');
                    if (video) {
                      video.pause();
                    }
                  }}
                >
                  <video
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src={video.src}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onCanPlay={(e) => checkAudioTracks(e.currentTarget, index)}
                  />
                  {/* 音量图标 - 有声音时显示 */}
                  {videoAudioInfo[index] && (
                    <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/50 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs font-medium truncate">{video.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 指示器 */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: Math.ceil(galleryVideos.length / 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setGalleryIndex(index * 4)}
              className={`h-2 rounded-full transition-all duration-300 ${
                Math.floor(galleryIndex / 4) === index 
                  ? 'bg-neutral-800 dark:bg-neutral-200 w-6' 
                  : 'bg-neutral-300 dark:bg-neutral-600 w-2'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-end border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-6 md:mb-8">
        <h2 className="text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-100">All Projects</h2>
        <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
          {currentIndex + 1} / {allProjects.length}
        </span>
      </div>

      {/* 卡牌舞台 */}
      <div ref={cardStageRef} className="relative w-full h-[400px] flex items-center justify-center overflow-hidden z-10">

        {allProjects.map((project, index) => {
          const offset = index - currentIndex

          // 超出可见范围直接不渲染
          if (offset < -2 || offset > 3) return null

          const scale = 1 - Math.abs(offset) * 0.08
          const translateY = offset * 60
          const translateZ = -Math.abs(offset) * 120
          const rotateX = offset * -6
          const opacity = offset === 0 ? 1 : 0.5

          return (
            <div
              key={`${project.type}-${project.slug}`}
              className="absolute w-full max-w-7xl transition-all duration-500 ease-out"
              style={{
                transform: `
                  translateY(${translateY + 20}px)
                  translateZ(${translateZ}px)
                  rotateX(${rotateX}deg)
                  scale(${scale})
                `,
                opacity,
                zIndex: 100 - Math.abs(offset),
              }}
            >
              <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 shadow-lg">
                <div className="flex gap-6">
                  <div className="w-36 h-36 bg-neutral-100 dark:bg-neutral-800 overflow-hidden rounded-md flex-shrink-0">
                    <img
                      src={project.details.logo}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-mono px-2 py-1 bg-neutral-100 rounded">
                        {project.type.toUpperCase()}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-400">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-2">
                      {project.title}
                    </h3>

                    <p className="text-sm text-neutral-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech?.slice(0, 3).map((t, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-1 bg-blue-50 text-blue-700 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={`#/${project.type}/${project.slug}`}
                        className="px-4 py-2 text-xs font-mono bg-neutral-200 hover:bg-neutral-300 rounded"
                      >
                        VIEW
                      </a>

                      {(project as any).hasDemo && (
                        <a
                          href={`#/${project.type}/${project.slug}#demo`}
                          className="px-4 py-2 text-xs font-mono bg-blue-600 text-white hover:bg-blue-700 rounded"
                        >
                          DEMO
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}
