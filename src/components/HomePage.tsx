import React, { useEffect, useState, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import {
  projects,
  designProjects,
  gameProjects,
  aiProjects,
  platformProjects,
  tutorialProjects,
} from '../data/projects'
import { CityWalkSection } from './CityWalkSection'

const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'design', label: 'Product' },
  { key: 'game', label: 'Game' },
  { key: 'ai', label: 'AI' },
  { key: 'planning', label: 'Planning' },

  { key: 'platform', label: 'Platform' },
  { key: 'tutorial', label: 'Tutorial' },
] as const

const CATEGORY_IMAGE: Record<string, string> = {
  all: 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/lili/lili_01.png',
  design: 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/lili/lili_05.png',
  planning: 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/lili/lili_06.png',
  game: 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/lili/lili_03.png',
  ai: 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/lili/lili_07.png',
  platform: 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/lili/lili_11.png',
  tutorial: 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/fig/lili/lili_04.png',
}

const CATEGORY_BLURB: Record<string, React.ReactNode> = {
  all: <>这是我在<strong className="font-semibold text-ink">设计、开发、游戏、AI 和城市规划</strong>领域的项目。</>,
  design: <>这是我在<strong className="font-semibold text-ink">产品</strong>领域的项目。</>,
  planning: <>这是我在<strong className="font-semibold text-ink">城市规划</strong>领域的项目。</>,
  game: <>这是我在<strong className="font-semibold text-ink">游戏</strong>领域的项目。</>,
  ai: <>这是我在<strong className="font-semibold text-ink">AI</strong>领域的项目。</>,
  platform: <>这是我在<strong className="font-semibold text-ink">平台开发</strong>领域的项目。</>,
  tutorial: <>这是我在<strong className="font-semibold text-ink">教程</strong>领域的项目。</>,
}

const GALLERY_VIDEOS = [
  { src: 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/kitty-0317.mp4', title: 'Kitty Video' },
  { src: 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/%E5%BE%AE%E4%BF%A1%E8%A7%86%E9%A2%912026-02-09_184301_354.mp4', title: 'Kitty Video 2' },
  { src: 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/20260225-192100.mp4', title: 'Riffle Loading 1' },
  { src: 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video3.mp4', title: 'Video Title 3' },
  { src: 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video4.mp4', title: 'Video Title 4' },
  { src: 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video5.mp4', title: 'Video Title 5' },
  { src: 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video6.mp4', title: 'Video Title 6' },
  { src: 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video7.mp4', title: 'Video Title 7' },
  { src: 'https://pub-3209bcb7fc36444a914deb0e70ceca92.r2.dev/video8.mp4', title: 'Video Title 8' },
]

const ChevronLeft = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
)
const ChevronRight = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
)

const DICE_PIPS: Record<number, number[]> = {
  1: [4], 2: [0, 8], 3: [0, 4, 8], 4: [0, 2, 6, 8], 5: [0, 2, 4, 6, 8], 6: [0, 2, 3, 5, 6, 8],
}
const DiceFace = ({ value, transform }: { value: number; transform: string }) => (
  <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 border border-neutral-400 bg-white p-[2px]" style={{ transform, backfaceVisibility: 'hidden' }}>
    {Array.from({ length: 9 }).map((_, i) => (
      <span key={i} className="flex items-center justify-center">
        {DICE_PIPS[value].includes(i) && (
          <span className="block h-[2.5px] w-[2.5px] rounded-full" style={{ background: value === 1 || value === 4 ? '#cc2a18' : '#171717' }} />
        )}
      </span>
    ))}
  </div>
)

export const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const projectsByType = {
    all: [
      ...designProjects.map(p => ({ ...p, type: 'design' })),
      ...gameProjects.map(p => ({ ...p, type: 'game' })),
      ...aiProjects.map(p => ({ ...p, type: 'ai' })),
      ...projects.map(p => ({ ...p, type: 'planning' })),
      ...platformProjects.map(p => ({ ...p, type: 'platform' })),
      ...tutorialProjects.map(p => ({ ...p, type: 'tutorial' })),
    ],
    design: designProjects.map(p => ({ ...p, type: 'design' })),
    planning: projects.map(p => ({ ...p, type: 'planning' })),
    game: gameProjects.map(p => ({ ...p, type: 'game' })),
    ai: aiProjects.map(p => ({ ...p, type: 'ai' })),
    platform: platformProjects.map(p => ({ ...p, type: 'platform' })),
    tutorial: tutorialProjects.map(p => ({ ...p, type: 'tutorial' })),
  }

  const countFor = (key: string) =>
    projectsByType[key as keyof typeof projectsByType].length

  const allProjects = projectsByType[selectedCategory as keyof typeof projectsByType] ?? projectsByType.all
  const maxIndex = Math.max(0, allProjects.length - 1)

  const [currentIndex, setCurrentIndex] = useState(0)
  const currentLiliImage = CATEGORY_IMAGE[selectedCategory] ?? CATEGORY_IMAGE.all

  const selectCategory = (key: string) => {
    setSelectedCategory(key)
    setCurrentIndex(0)
  }

  /* ---------------- Stage media helpers ---------------- */
  // Extract <video> src URLs from markdown content.
  const extractVideos = (content: string): string[] => {
    if (!content) return []
    const re = /<video[^>]+src="([^"]+)"/gi
    return Array.from(content.matchAll(re), m => m[1])
  }

  const getHeroMedia = (project: any): { src: string; isVideo: boolean } | null => {
    if (!project) return null
    const videos = extractVideos(project.details?.content ?? '')
    if (videos.length > 0) return { src: videos[0], isVideo: true }
    const imgs = project.details?.image as string[] | undefined
    if (imgs?.length) return { src: imgs[0], isVideo: false }
    if (project.details?.logo) return { src: project.details.logo, isVideo: false }
    return null
  }

  const getHeroImage = (project: any): string | null => {
    if (!project) return null
    const imgs = project.details?.image as string[] | undefined
    if (imgs?.length) return imgs[0]
    return project.details?.logo ?? null
  }

  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length]
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length]
  const prevSideImg = getHeroImage(prevProject)
  const nextSideImg = getHeroImage(nextProject)

  const [stageImageIndex, setStageImageIndex] = useState(0)
  const [stageMuted, setStageMuted] = useState(false)
  const stageVideoRef = useRef<HTMLVideoElement>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const currentProject = allProjects[currentIndex]

  // Green panels: other images from the SAME current project flanking the center.
  const sameProjectImages: string[] = currentProject?.details?.image ?? []
  const greenLeft = sameProjectImages.length >= 2
    ? sameProjectImages[(stageImageIndex - 1 + sameProjectImages.length) % sameProjectImages.length]
    : null
  const greenRight = sameProjectImages.length >= 3
    ? sameProjectImages[(stageImageIndex + 1) % sameProjectImages.length]
    : (sameProjectImages.length === 2 ? sameProjectImages[(stageImageIndex + 1) % 2] : null)
  useEffect(() => { setStageImageIndex(0); setStageMuted(false) }, [currentIndex, selectedCategory])

  /* ---------------- Dice ---------------- */
  const [diceRotation, setDiceRotation] = useState({ x: 0, y: 0 })
  const rollDice = () => {
    setDiceRotation(prev => ({
      x: prev.x + 720 + Math.round(Math.random() * 360),
      y: prev.y + 720 + Math.round(Math.random() * 360),
    }))
    setTimeout(() => selectProject(Math.floor(Math.random() * allProjects.length)), 900)
  }

  const projectVideos = extractVideos(currentProject?.details?.content ?? '')
  const projectImages: string[] = currentProject?.details?.image ?? []
  // Videos first, then images. Fall back to logo.
  const stageMediaItems = [...projectVideos, ...projectImages]
  const stageSrc = stageMediaItems.length > 0
    ? stageMediaItems[stageImageIndex % stageMediaItems.length]
    : currentProject?.details?.logo
  const isStageVideo = projectVideos.length > 0 && stageImageIndex < projectVideos.length
  // Always an image for the blurred trapezoid background.
  const blurSrc = projectImages.length > 0 ? projectImages[0] : currentProject?.details?.logo

  // Advance to next media — for images this is timer-driven, for videos it's
  // triggered by onEnded on the <video> element.
  const advanceStageMedia = () => {
    setStageImageIndex(prev => (prev + 1) % (stageMediaItems.length || 1))
  }

  // Clear any running timer, then for images-only start a 5 s auto-advance.
  useEffect(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null }
    // Only auto-advance when the current item is NOT a video.
    if (isStageVideo || stageMediaItems.length <= 1) return
    timerRef.current = setInterval(advanceStageMedia, 5000)
    return () => {
      if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null }
    }
  }, [currentIndex, selectedCategory, isStageVideo, stageMediaItems.length])

  const toggleStageAudio = () => {
    const video = stageVideoRef.current
    if (!video) return
    video.muted = !video.muted
    setStageMuted(!video.muted)
  }

  /* ---------------- Filmstrip cards ---------------- */
  const filmstripRef = useRef<HTMLDivElement>(null)
  const DRAG_THRESHOLD = 3
  const dragRef = useRef({ isDown: false, isDragging: false, startX: 0, scrollLeft: 0 })

  const onFilmstripPointerDown = (e: React.PointerEvent) => {
    dragRef.current = { isDown: true, isDragging: false, startX: e.clientX, scrollLeft: filmstripRef.current?.scrollLeft ?? 0 }
  }

  const onFilmstripPointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current.isDown) return
    const dx = e.clientX - dragRef.current.startX
    if (!dragRef.current.isDragging && Math.abs(dx) < DRAG_THRESHOLD) return
    // Only capture the pointer once a real drag starts — taps pass through to buttons.
    if (!dragRef.current.isDragging) {
      dragRef.current.isDragging = true
      filmstripRef.current?.setPointerCapture(e.pointerId)
    }
    e.preventDefault()
    filmstripRef.current!.scrollLeft = dragRef.current.scrollLeft - dx
  }

  const onFilmstripPointerUp = (_e: React.PointerEvent) => {
    if (dragRef.current.isDragging) {
      filmstripRef.current?.releasePointerCapture(_e.pointerId)
    }
    dragRef.current = { isDown: false, isDragging: false, startX: 0, scrollLeft: 0 }
  }

  const selectProject = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-scroll filmstrip to keep active card visible
  useEffect(() => {
    const el = filmstripRef.current
    if (!el) return
    const card = el.children[currentIndex] as HTMLElement | null
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }, [currentIndex])

  /* ---------------- Vertical video gallery ---------------- */
  const galleryRef = useRef<HTMLDivElement>(null)
  const galleryVideoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const [activeVideoIndex, setActiveVideoIndex] = useState(0)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [galleryEdges, setGalleryEdges] = useState({ start: true, end: false })
  const [videoHasAudio, setVideoHasAudio] = useState<Record<number, boolean>>({})

  const advanceGallery = (index: number) => {
    const next = index % GALLERY_VIDEOS.length
    setActiveVideoIndex(next)
    // Scroll horizontally only — never trigger vertical page jump.
    const el = galleryRef.current
    if (el) {
      const card = el.children[next] as HTMLElement | null
      if (card) el.scrollTo({ left: card.offsetLeft - el.offsetWidth / 2 + (card as HTMLElement).offsetWidth / 2, behavior: 'smooth' })
    }
  }

  // Auto-play the active video whenever it changes.
  useEffect(() => {
    const video = galleryVideoRefs.current[activeVideoIndex]
    if (!video) return
    video.currentTime = 0
    video.play().catch(() => {})
  }, [activeVideoIndex])

  // Native scroll-snap rather than a transform offset: the visible column count
  // changes per breakpoint, and this can never overshoot past the last item.
  const syncGallery = useCallback(() => {
    const el = galleryRef.current
    if (!el) return
    const item = el.firstElementChild as HTMLElement | null
    const itemWidth = item?.offsetWidth || 1
    setGalleryIndex(Math.round(el.scrollLeft / itemWidth))
    setGalleryEdges({
      start: el.scrollLeft <= 1,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 1,
    })
  }, [])

  useEffect(() => {
    syncGallery()
    window.addEventListener('resize', syncGallery)
    return () => window.removeEventListener('resize', syncGallery)
  }, [syncGallery])

  const scrollGallery = (direction: -1 | 1) => {
    const el = galleryRef.current
    if (!el) return
    const item = el.firstElementChild as HTMLElement | null
    el.scrollBy({ left: direction * (item?.offsetWidth || el.clientWidth / 2), behavior: 'smooth' })
  }

  // Audio-track detection is inconsistent across engines, so try each vendor
  // hook in turn and assume audio only as a last resort.
  const checkAudioTracks = (video: HTMLVideoElement, index: number) => {
    const v = video as any
    const mark = (hasAudio: boolean) =>
      setVideoHasAudio(prev => (prev[index] === hasAudio ? prev : { ...prev, [index]: hasAudio }))

    if (v.audioTracks?.length) {
      mark(Array.from(v.audioTracks).some((t: any) => t.enabled))
      return
    }
    if ('mozHasAudio' in v) {
      mark(Boolean(v.mozHasAudio))
      return
    }
    if (typeof v.webkitAudioDecodedByteCount === 'number' && v.webkitAudioDecodedByteCount > 0) {
      mark(true)
      return
    }
    if (v.readyState >= 3) {
      // Chromium reports decoded byte counts only after it starts decoding.
      setTimeout(() => mark(v.webkitAudioDecodedByteCount > 0 || v.mozHasAudio === true), 500)
      return
    }
    mark(true)
  }

  return (
    <div className="animate-rise-in pb-16">
      {/* ============================ STAGE ============================ */}
      {stageSrc && (
        <section className="relative w-full overflow-hidden border-b border-neutral-800" style={{ background: 'linear-gradient(to bottom, #3f3f3f 100%, #0a0a0a 100%)' }}>
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.07]" aria-hidden="true" />
          <div className="absolute inset-0 z-20 pointer-events-none" style={{ boxShadow: 'inset 0 0 140px 50px rgba(0,0,0,0.75)' }} aria-hidden="true" />

          {/* Framework: 3:4 · trapezoid · 4:3 · trapezoid · 3:4 */}
          <div className="relative mx-auto flex w-full max-w-12xl items-stretch px-0 py-6 md:py-0">
            {/* ▸ Left 3:4 — prev project */}
            <button
              onClick={() => selectProject((currentIndex - 1 + allProjects.length) % allProjects.length)}
              className="group relative z-10 hidden w-[11%] h-[80%] shrink-0 md:block"
              title={prevProject?.title}
            >
              <div className="aspect-[1/3] w-full overflow-hidden border border-white/[0.06] bg-white/[0.03]">
                {prevSideImg && <img src={prevSideImg} alt="" onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} className="absolute inset-0 h-full w-full object-cover opacity-40 transition-opacity group-hover:opacity-65" />}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                  <p className="truncate text-center font-mono text-[9px] uppercase tracking-eyebrow text-white/50">{prevProject?.title}</p>
                </div>
              </div>
            </button>

            {/* ▸ Left trapezoid — blurred center image, right-angle */}
            <div className="relative z-10 hidden flex-1 overflow-hidden md:block" aria-hidden="true">
              <div className="h-full w-full" style={{ clipPath: 'polygon(0 0%, 100% 0%, 100% 86%, 0 100%)' }}>
                <img src={blurSrc} alt="" className="absolute inset-0 h-full w-full object-cover blur-xl scale-125 opacity-30" onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
              </div>
            </div>

            {/* ▸ Center 16:9 — current project */}
            <div className="relative z-20 flex h-auto w-full shrink-0 flex-col md:h-[98%] md:w-[50%]">
              <div className="aspect-video max-h-[70vh] w-full overflow-hidden border border-white/[0.08]" style={{ boxShadow: '0 0 70px -10px rgba(0,0,0,0.5)' }}>
                {isStageVideo ? (
                  <video ref={el => { stageVideoRef.current = el }} key={stageSrc} src={stageSrc} autoPlay muted={stageMuted} playsInline onEnded={advanceStageMedia} className="absolute inset-0 h-full w-full object-cover animate-rise-in" />
                ) : (
                  <img key={stageSrc} src={stageSrc} alt={currentProject?.title ?? ''} className="absolute inset-0 h-full w-full object-cover animate-rise-in" onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
                )}
                {isStageVideo && (
                  <button onClick={toggleStageAudio} className="absolute bottom-2 right-2 z-30 flex h-8 w-8 items-center justify-center border border-white/30 bg-black/55 text-white/80 hover:border-white hover:text-white" title={stageMuted ? 'Unmute' : 'Mute'}>
                    {stageMuted ? (
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /><path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" /></svg>
                    ) : (
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
                    )}
                  </button>
                )}
              </div>
            </div>

            {/* ▸ Right trapezoid — blurred center image, right-angle */}
            <div className="relative z-10 hidden flex-1 overflow-hidden md:block" aria-hidden="true">
              <div className="h-full w-full" style={{ clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 86%)' }}>
                <img src={blurSrc} alt="" className="absolute inset-0 h-full w-full object-cover blur-xl scale-125 opacity-30" onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
              </div>
            </div>

            {/* ▸ Right 3:4 — next project */}
            <button
              onClick={() => selectProject((currentIndex + 1) % allProjects.length)}
              className="group relative z-10 hidden w-[11%]  h-[80%] shrink-0 md:block"
              title={nextProject?.title}
            >
              <div className="aspect-[1/3] w-full overflow-hidden border border-white/[0.06] bg-white/[0.03]">
                {nextSideImg && <img src={nextSideImg} alt="" onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} className="absolute inset-0 h-full w-full object-cover opacity-40 transition-opacity group-hover:opacity-65" />}
                <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                  <p className="truncate text-center font-mono text-[9px] uppercase tracking-eyebrow text-white/50">{nextProject?.title}</p>
                </div>
              </div>
            </button>
          </div>


        </section>
      )}

      {/* ============================ WORKS INDEX ============================ */}
      <section className="shell pt-10 md:pt-0">

        {/* Section title */}
        <div className="flex items-center justify-between gap-2 mb-2 py-2 md:mb-4 overflow-hidden">
          <div className="flex items-baseline gap-3 min-w-0">
            <p className="text-sm font-bold text-ink truncate">{currentProject?.title}</p>
            <p className="eyebrow shrink-0">{currentProject?.type} · {currentProject?.year}</p>
          </div>
          <div className="flex items-center gap-3 shrink-0 min-w-0">
            {stageMediaItems.length > 1 && (
              <span className="flex items-center gap-1.5 overflow-x-auto hide-scrollbar max-w-[80px] sm:max-w-[200px]">
                {stageMediaItems.map((_, i) => (
                  <button key={i} onClick={() => setStageImageIndex(i)} aria-label={`Media ${i + 1}`} className={`h-1.5 shrink-0 rounded-full transition-all duration-300 ${i === stageImageIndex ? 'w-6 bg-accent' : 'w-1.5 bg-rule hover:bg-ink-3'}`} />
                ))}
              </span>
            )}
            <button
              onClick={rollDice}
              className="btn-ghost shrink-0 !px-2"
              title="Roll a random project"
            >
              <span className="h-5 w-5" style={{ perspective: '120px' }}>
                <span
                  className="relative block h-full w-full transition-transform duration-[900ms] ease-out"
                  style={{ transform: `rotateX(${diceRotation.x}deg) rotateY(${diceRotation.y}deg)`, transformStyle: 'preserve-3d' }}
                >
                  <DiceFace value={1} transform="translateZ(10px)" />
                  <DiceFace value={6} transform="rotateY(180deg) translateZ(10px)" />
                  <DiceFace value={3} transform="rotateY(-90deg) translateZ(10px)" />
                  <DiceFace value={4} transform="rotateY(90deg) translateZ(10px)" />
                  <DiceFace value={2} transform="rotateX(90deg) translateZ(10px)" />
                  <DiceFace value={5} transform="rotateX(-90deg) translateZ(10px)" />
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* Filter rail */}
        <div className="mt-4 -mx-1 flex overflow-x-auto hide-scrollbar border-b border-rule">
          {CATEGORIES.map(cat => {
            const isActive = selectedCategory === cat.key
            return (
              <button
                key={cat.key}
                onClick={() => selectCategory(cat.key)}
                aria-pressed={isActive}
                className={`relative shrink-0 px-3.5 pb-3 pt-1 font-mono text-[11px] uppercase tracking-eyebrow transition-colors duration-200 ${
                  isActive ? 'text-ink' : 'text-ink-3 hover:text-ink'
                }`}
              >
                {cat.label}
                <span className="ml-1.5 nums-tabular text-ink-3">{countFor(cat.key)}</span>
                <span
                  className={`absolute inset-x-2 bottom-0 h-[3px] origin-left bg-accent transition-transform duration-300 ease-editorial ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                  aria-hidden="true"
                />
              </button>
            )
          })}
        </div>

        {/* ---- Filmstrip cards ---- */}
        <div className="mt-5 flex items-center gap-2">
          <button
            onClick={() => selectProject(Math.max(0, currentIndex - 1))}
            disabled={currentIndex <= 0}
            aria-label="Previous project"
            className="icon-btn shrink-0 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft />
          </button>

          <div
            ref={filmstripRef}
            className="flex flex-1 gap-2 overflow-x-auto hide-scrollbar py-2 cursor-grab active:cursor-grabbing select-none touch-pan-y"
            onPointerDown={onFilmstripPointerDown}
            onPointerMove={onFilmstripPointerMove}
            onPointerUp={onFilmstripPointerUp}
            onPointerLeave={onFilmstripPointerUp}
          >
            {allProjects.map((project, index) => {
              const isActive = index === currentIndex
              return (
                <button
                  key={`${project.type}-${project.slug}`}
                  onClick={() => selectProject(index)}
                  className={`group flex shrink-0 items-center gap-3 border px-3 py-2.5 transition-all duration-200 ${
                    isActive
                      ? 'border-rule-strong bg-surface shadow-lift'
                      : 'border-rule bg-surface-2 hover:border-rule-strong hover:bg-surface'
                  }`}
                  style={{ minWidth: '220px', maxWidth: '280px' }}
                >
                  <span className={`nums-tabular text-lg font-bold leading-none tracking-masthead transition-colors ${
                    isActive ? 'text-accent-text' : 'text-ink-3/60 group-hover:text-ink-3'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="h-10 w-10 shrink-0 overflow-hidden border border-rule bg-surface-2">
                    <img
                      src={project.details.logo}
                      alt=""
                      className="h-full w-full object-cover"
                      onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
                    />
                  </div>
                  <div className="min-w-0 text-left">
                    <p className="truncate text-sm font-bold tracking-tight text-ink">
                      {project.title}
                    </p>
                    <p className="eyebrow">{project.type} · {project.year}</p>
                  </div>
                </button>
              )
            })}
          </div>

          <button
            onClick={() => selectProject(Math.min(maxIndex, currentIndex + 1))}
            disabled={currentIndex >= maxIndex}
            aria-label="Next project"
            className="icon-btn shrink-0 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronRight />
          </button>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <p className="eyebrow nums-tabular">
            {String(currentIndex + 1).padStart(2, '0')}
            <span className="mx-1.5 text-rule">/</span>
            {String(allProjects.length).padStart(2, '0')}
          </p>
          <Link
            to={`/${currentProject?.type}/${currentProject?.slug}`}
            className="font-mono text-[11px] uppercase tracking-eyebrow text-accent-text transition-colors hover:text-ink"
          >
            View details →
          </Link>
        </div>
      </section>

      {/* ============================ INTRO ============================ */}
      <section className="shell border-t border-rule py-10 md:py-0">
        <div className="max-w-12xl">
            <p className="mt-4 max-w-3xl text-lg text-ink">
              你好！我是林丽丽，欢迎来到我的作品集。
            </p>
            <p className="mt-4 max-w-measure text-base leading-relaxed text-ink-2">
              {CATEGORY_BLURB[selectedCategory] ?? CATEGORY_BLURB.all}
            </p>
        </div>
      </section>

      {/* ============================ CITY WALKS ============================ */}
      <CityWalkSection />

      {/* ============================ VIDEO GALLERY ============================ */}
      <section className="shell pt-12 md:pt-16">
        <div className="section-head">
          <p className="eyebrow">Motion</p>
          <p className="eyebrow nums-tabular">
            {String(activeVideoIndex + 1).padStart(2, '0')}
            <span className="mx-1.5 text-rule">/</span>
            {String(GALLERY_VIDEOS.length).padStart(2, '0')}
          </p>
        </div>

        <div className="mt-5 flex items-end justify-between gap-4">
          <h2 className="text-display-sm">Video Gallery</h2>
          <div className="flex shrink-0 gap-2">
            <button
              onClick={() => scrollGallery(-1)}
              disabled={galleryEdges.start}
              aria-label="Scroll gallery left"
              className="icon-btn disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => scrollGallery(1)}
              disabled={galleryEdges.end}
              aria-label="Scroll gallery right"
              className="icon-btn disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div
          ref={galleryRef}
          onScroll={syncGallery}
          className="mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto hide-scrollbar scroll-smooth md:gap-4"
        >
          {GALLERY_VIDEOS.map((video, index) => {
            const isActive = index === activeVideoIndex
            return (
              <figure
                key={video.src}
                className={`group relative w-[62%] shrink-0 snap-start sm:w-[40%] md:w-[30%] lg:w-[23%] ${
                  isActive ? 'ring-1 ring-accent ring-offset-2 ring-offset-canvas' : ''
                }`}
                onMouseEnter={e => {
                  const v = e.currentTarget.querySelector('video')
                  if (v && !isActive) v.play().catch(() => {})
                }}
                onMouseLeave={e => {
                  const v = e.currentTarget.querySelector('video')
                  if (v && !isActive) v.pause()
                }}
              >
                <div className="relative aspect-[9/16] overflow-hidden border border-rule bg-surface-2">
                  <video
                    ref={el => { galleryVideoRefs.current[index] = el }}
                    className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
                    src={video.src}
                    muted
                    playsInline
                    preload="metadata"
                    onCanPlay={e => checkAudioTracks(e.currentTarget, index)}
                    onEnded={() => { if (isActive) advanceGallery(index + 1) }}
                  />

                  {/* Active badge */}
                  {isActive && (
                    <span className="absolute left-2 top-2 flex items-center gap-1 border border-white/30 bg-black/60 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-eyebrow text-white">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                      Now
                    </span>
                  )}

                  {videoHasAudio[index] && (
                    <span
                      className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center bg-black/55 text-white"
                      title="Has audio"
                    >
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                    </span>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <figcaption className="mt-2.5 flex items-baseline gap-2">
                  <span className="eyebrow nums-tabular shrink-0">{String(index + 1).padStart(2, '0')}</span>
                  <span className="truncate text-sm text-ink-2">{video.title}</span>
                </figcaption>
              </figure>
            )
          })}
        </div>
      </section>
    </div>
  )
}
