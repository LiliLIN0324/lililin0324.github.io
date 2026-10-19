import { R2_BASE } from '../data/catalog'

/** Dragon Diffusion demo parts, in playback order. Part 1 is the cover clip. */
export const DRAGON_DEMO_SEQUENCE = [
  `${R2_BASE}/fig/dragon-diffusion/cover.mp4`,
  `${R2_BASE}/fig/dragon-diffusion/DragonDiffusion-Demo_(2).mp4`,
  `${R2_BASE}/fig/dragon-diffusion/DragonDiffusion-Demo_(3).mp4`,
] as const

/** 1-based part index, or 0 when this clip is not in the demo sequence. */
export function dragonDemoPart(src: string | undefined): number {
  if (!src) return 0
  const index = DRAGON_DEMO_SEQUENCE.indexOf(src as (typeof DRAGON_DEMO_SEQUENCE)[number])
  return index === -1 ? 0 : index + 1
}

function nextInPlaylist(current: HTMLVideoElement): HTMLVideoElement | null {
  const playlist = current.dataset.playlist
  const part = Number(current.dataset.part || '0')
  if (!playlist || !part) return null
  const next = current.ownerDocument.querySelector(
    `video[data-playlist="${CSS.escape(playlist)}"][data-part="${part + 1}"]`,
  )
  return next instanceof HTMLVideoElement ? next : null
}

/** Buffer the following part while this one is playing. */
export function preloadDragonDemoNext(current: HTMLVideoElement) {
  const next = nextInPlaylist(current)
  if (next && next.preload !== 'auto') next.preload = 'auto'
}

/**
 * When a demo part ends, start the next one. The older DragonDiffusion.mp4
 * clip is not in this playlist, so it stays put until someone plays it.
 */
export function playDragonDemoNext(current: HTMLVideoElement) {
  const playlist = current.dataset.playlist
  const next = nextInPlaylist(current)
  if (!playlist || !next) return
  current.ownerDocument
    .querySelectorAll<HTMLVideoElement>(`video[data-playlist="${CSS.escape(playlist)}"]`)
    .forEach(video => {
      if (video !== next && !video.paused) video.pause()
    })
  const box = next.getBoundingClientRect()
  const inView = box.top >= 0 && box.bottom <= window.innerHeight
  if (!inView) next.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  next.play().catch(() => {})
}
