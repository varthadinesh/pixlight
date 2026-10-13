'use client'

import Lenis from 'lenis'
import { useEffect } from 'react'

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ lerp: 0.09, anchors: { offset: -72 }, autoRaf: true })
    return () => lenis.destroy()
  }, [])
  return null
}
