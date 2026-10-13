'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal, SectionLabel, SplitText } from './motion'

const solutions = [
  {
    n: '01',
    title: 'Financial Services',
    tags: 'Banking, Payments, Insurance, Trading',
    body: 'Settle in milliseconds, audit in seconds. Real-time risk scoring and compliant data lineage across every ledger.',
    image: '/images/solution-finance.png',
  },
  {
    n: '02',
    title: 'Healthcare & Life Sciences',
    tags: 'Providers, Biotech, Pharma, MedTech',
    body: 'Unify clinical and research data under strict governance, then train models that accelerate discovery.',
    image: '/images/solution-health.png',
  },
  {
    n: '03',
    title: 'Manufacturing & Industry',
    tags: 'Robotics, Supply Chain, Energy, Automotive',
    body: 'Stream telemetry from every machine, predict failures before they happen, and orchestrate the factory floor.',
    image: '/images/solution-industry.png',
  },
]

export function Solutions() {
  const [active, setActive] = useState(0)

  return (
    <section id="solutions" className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionLabel>Industries</SectionLabel>
        </Reveal>
        <h2 className="font-display mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">
          <SplitText text="Three directions. Every product." highlight={['Every', 'product.']} />
        </h2>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="relative hidden aspect-[4/5] overflow-hidden rounded-3xl border border-border lg:block">
            {solutions.map((s, i) => (
              <Image
                key={s.image}
                src={s.image || '/placeholder.svg'}
                alt={i === active ? `${s.title} illustration` : ''}
                fill
                sizes="50vw"
                className={cn(
                  'object-cover transition-all duration-[1000ms] ease-out',
                  i === active ? 'scale-100 opacity-100' : 'scale-110 opacity-0',
                )}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <p className="font-display absolute bottom-6 left-6 text-8xl font-semibold text-foreground/90">
              {solutions[active].n}
            </p>
          </div>

          <ul className="flex flex-col border-t border-border">
            {solutions.map((s, i) => {
              const isActive = i === active
              return (
                <li key={s.n} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    aria-expanded={isActive}
                    className="group flex w-full items-start gap-6 py-8 text-left"
                  >
                    <span className={cn('font-display pt-2 text-sm transition-colors', isActive ? 'text-primary' : 'text-muted-foreground')}>
                      {s.n}
                    </span>
                    <span className="flex-1">
                      <span
                        className={cn(
                          'font-display block text-3xl font-semibold tracking-tight transition-all duration-500 md:text-4xl',
                          isActive ? 'translate-x-2 text-foreground' : 'text-muted-foreground group-hover:text-foreground',
                        )}
                      >
                        {s.title}
                      </span>
                      <span className="mt-2 block text-sm text-muted-foreground">{s.tags}</span>
                      <span
                        className={cn(
                          'grid transition-all duration-500 ease-out',
                          isActive ? 'mt-5 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                        )}
                      >
                        <span className="min-h-0 overflow-hidden">
                          <span className="block max-w-md leading-relaxed text-muted-foreground">{s.body}</span>
                          <span className="mt-5 inline-flex items-center gap-2 text-sm text-primary">
                            Explore solution <ArrowRight className="size-4" />
                          </span>
                        </span>
                      </span>
                    </span>
                    <span
                      className={cn(
                        'mt-2 flex size-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500',
                        isActive ? 'rotate-[-45deg] border-primary bg-primary text-primary-foreground' : 'border-border',
                      )}
                      aria-hidden="true"
                    >
                      <ArrowRight className="size-4" />
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
