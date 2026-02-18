import React, { useEffect, useState } from 'react'
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

  // 鼠标滚轮 → 切牌
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      setCurrentIndex(prev => {
        if (e.deltaY > 0) return Math.min(prev + 1, maxIndex)
        return Math.max(prev - 1, 0)
      })
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [maxIndex])

  return (
    <div className="p-4 md:p-6 lg:p-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex justify-between items-end border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-6 md:mb-8">
        <h2 className="text-lg md:text-xl font-medium text-neutral-900 dark:text-neutral-100">All Projects</h2>
        <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
          {currentIndex + 1} / {allProjects.length}
        </span>
      </div>

      {/* 卡牌舞台 */}
      <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden z-10">

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
