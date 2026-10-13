'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { Reveal, SectionLabel, SplitText } from './motion'

const milestones = [
  { date: 'Oct 13', title: 'Early access opens', body: 'Lumen OS 4.0 beta available to all Cloud workspaces.' },
  { date: 'Oct 31', title: 'Launch keynote', body: 'Live reveal of Canvas 3, Beacon AI, and Prism Edge.' },
  { date: 'Nov 15', title: 'Partner program', body: 'Northlight Labs cohort selections are announced.' },
  { date: 'Dec 31', title: 'Migration window closes', body: 'Last day to qualify for 100% migration credits.' },
]

export function Roadmap() {
  const ref = useRef<HTMLOListElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const start = window.innerHeight * 0.75
      const value = (start - rect.top) / rect.height
      setProgress(Math.min(Math.max(value, 0), 1))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="roadmap" className="py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-[1fr_1.3fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <SectionLabel>Roadmap</SectionLabel>
          </Reveal>
          <h2 className="font-display mt-5 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            <SplitText text="The launch timeline." highlight={['timeline.']} />
          </h2>
          <Reveal delay={200}>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              Key dates for the Lumen OS 4.0 release. Subscribe to get notified when each milestone goes live.
            </p>
          </Reveal>
        </div>

        <ol ref={ref} className="relative pl-10">
          <span className="absolute bottom-0 left-[7px] top-0 w-px bg-border" aria-hidden="true" />
          <span
            className="absolute left-[7px] top-0 w-px bg-primary shadow-[0_0_12px_var(--primary)]"
            style={{ height: `${progress * 100}%` }}
            aria-hidden="true"
          />
          {milestones.map((m, i) => {
            const reached = progress >= (i + 0.2) / milestones.length
            return (
              <li key={m.title} className="relative pb-16 last:pb-0">
                <span
                  className={cn(
                    'absolute -left-10 top-1.5 flex size-[15px] items-center justify-center rounded-full border transition-all duration-500',
                    reached ? 'border-primary bg-primary shadow-[0_0_20px_var(--primary)]' : 'border-border bg-background',
                  )}
                  aria-hidden="true"
                />
                <Reveal delay={i * 80}>
                  <p className={cn('font-display text-sm uppercase tracking-widest transition-colors', reached ? 'text-primary' : 'text-muted-foreground')}>
                    {m.date}, 2026
                  </p>
                  <h3 className="font-display mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{m.title}</h3>
                  <p className="mt-3 max-w-md text-muted-foreground">{m.body}</p>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
