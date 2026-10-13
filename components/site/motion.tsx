'use client'

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

function useInView<T extends Element>(threshold = 0.2) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}

/**
 * Writes scroll progress (0..1) to the element as the CSS variable `--p`
 * without re-rendering. `pin` measures progress through a tall sticky section,
 * `view` measures from entering the viewport bottom to leaving the top.
 */
export function useScrollProgress<T extends HTMLElement>(mode: 'pin' | 'view' = 'pin') {
  const ref = useRef<T>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    let frame = 0
    const update = () => {
      frame = 0
      const rect = node.getBoundingClientRect()
      const vh = window.innerHeight
      const raw =
        mode === 'pin' ? -rect.top / Math.max(rect.height - vh, 1) : (vh - rect.top) / (vh + rect.height)
      node.style.setProperty('--p', Math.min(Math.max(raw, 0), 1).toFixed(4))
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [mode])

  return ref
}

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: ElementType
}) {
  const { ref, visible } = useInView<HTMLDivElement>(0.15)
  return (
    <Tag
      ref={ref}
      data-visible={visible}
      className={cn('reveal', className)}
      style={{ '--delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}

export function SplitText({
  text,
  className,
  as: Tag = 'span',
  baseDelay = 0,
  highlight = [],
}: {
  text: string
  className?: string
  as?: ElementType
  baseDelay?: number
  highlight?: string[]
}) {
  const { ref, visible } = useInView<HTMLElement>(0.3)
  const words = text.split(' ')
  return (
    <Tag
      ref={ref}
      data-visible={visible}
      aria-label={text}
      className={className}
      style={{ '--base': `${baseDelay}ms` } as CSSProperties}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} aria-hidden="true" className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <span
            className={cn('split-word', highlight.includes(word) && 'text-primary')}
            style={{ '--i': i } as CSSProperties}
          >
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </span>
        </span>
      ))}
    </Tag>
  )
}

export function Counter({
  value,
  prefix = '',
  suffix = '',
  duration = 1800,
  className,
}: {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}) {
  const { ref, visible } = useInView<HTMLSpanElement>(0.4)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!visible) return
    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setDisplay(Math.round(value * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [visible, value, duration])

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {prefix}
      {display.toLocaleString('en-US')}
      {suffix}
    </span>
  )
}

export function SpotlightCard({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn('spotlight', className)}
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`)
        e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`)
      }}
    >
      {children}
    </div>
  )
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="font-display inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-primary">
      <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
      {children}
    </p>
  )
}
