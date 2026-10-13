'use client'

import { ArrowDown, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Counter, SplitText, useScrollProgress } from './motion'

const stats = [
  { value: 2011, label: 'Founded in Hyderabad', plain: true },
  { value: 3, label: 'Flagship products in production' },
  { value: 9, label: 'Service lines under one roof' },
  { value: 1, label: 'Team from first call to support', suffix: ' team' },
]

function SignalMark() {
  return (
    <svg viewBox="0 0 40 30" className="h-6 w-8 text-primary" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M${8 + i * 3} ${22 - i * 7} L20 ${12 - i * 7} L${32 - i * 3} ${22 - i * 7}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ animation: 'chevron 1.8s ease-in-out infinite', animationDelay: `${(2 - i) * 0.22}s` }}
        />
      ))}
    </svg>
  )
}

export function Hero() {
  const ref = useScrollProgress<HTMLElement>('pin')

  return (
    <section id="top" ref={ref} className="relative isolate h-[200svh]" aria-labelledby="hero-title">
      <div className="sticky top-0 h-svh overflow-hidden">
        <div
          className="absolute inset-0 -z-10 overflow-hidden"
          style={{
            clipPath:
              'inset(calc(var(--p) * 9%) calc(var(--p) * 5%) calc(var(--p) * 9%) calc(var(--p) * 5%) round calc(var(--p) * 40px))',
          }}
        >
          <Image
            src="/images/pointer-hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="animate-slow-zoom object-cover"
            style={{ transformOrigin: 'center 60%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--background)_95%)]" />
        </div>

        <div
          className="mx-auto flex h-full max-w-7xl flex-col justify-center px-5 pt-16 md:px-8"
          style={{
            opacity: 'calc(1 - var(--p) * 1.8)',
            transform: 'translateY(calc(var(--p) * -14vh)) scale(calc(1 - var(--p) * 0.08))',
          }}
        >
          <div className="flex items-center gap-3">
            <SignalMark />
            <p className="font-display text-xs font-medium uppercase tracking-[0.3em] text-accent md:text-sm">
              Hyderabad · Product engineering since 2011
            </p>
          </div>

          <SplitText
            as="h1"
            text="Technology that gets out of the way"
            highlight={['out', 'of', 'the', 'way']}
            className="split-auto font-display mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            baseDelay={150}
          />

          <p
            className="reveal mt-7 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
            data-visible="true"
            style={{ '--delay': '700ms' } as React.CSSProperties}
          >
            Communication tools, digital presence and industry ERPs, assembled around how your business already works.
            See what is already live, then price the next piece before you talk to sales.
          </p>

          <div
            className="reveal mt-9 flex flex-wrap items-center gap-3"
            data-visible="true"
            style={{ '--delay': '900ms' } as React.CSSProperties}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_0_40px_-8px] shadow-primary transition-transform hover:scale-[1.03]"
            >
              Get a quote
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#compose"
              className="inline-flex items-center rounded-full border border-foreground/20 bg-foreground/5 px-6 py-3.5 text-sm font-medium backdrop-blur transition-colors hover:bg-foreground/10"
            >
              Try the playground
            </a>
            <span className="text-sm text-muted-foreground">No sign-up to start · Founder-led support</span>
          </div>
        </div>

        <div
          className="absolute inset-x-0 bottom-0"
          style={{ opacity: 'calc(1 - var(--p) * 2.5)' }}
        >
          <dl className="mx-auto grid max-w-7xl grid-cols-2 border-t border-border px-5 md:grid-cols-4 md:px-8">
            {stats.map((s, i) => (
              <div key={s.label} className="border-border py-5 pr-4 md:border-r md:py-6 md:pl-6 md:first:pl-0 md:last:border-r-0">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-semibold md:text-3xl">
                  {s.plain ? (
                    <Counter value={s.value} duration={1400 + i * 200} className="[&]:tabular-nums" />
                  ) : (
                    <Counter value={s.value} suffix={s.suffix} duration={1400 + i * 200} />
                  )}
                </dd>
                <dd className="mt-1 text-xs text-muted-foreground md:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          style={{ opacity: 'calc((var(--p) - 0.35) * 2.2)' }}
          aria-hidden="true"
        >
          <p
            className="font-display px-6 text-center text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
            style={{ transform: 'translateY(calc((1 - var(--p)) * 8vh))' }}
          >
            We reach. You send.
            <br />
            <span className="text-primary">Built to keep running.</span>
          </p>
        </div>

        <a
          href="#industries"
          className="absolute bottom-28 right-5 hidden flex-col items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground md:right-8 md:flex"
          style={{ opacity: 'calc(1 - var(--p) * 3)' }}
        >
          <span className="[writing-mode:vertical-rl]">Scroll</span>
          <span className="relative h-14 w-px overflow-hidden bg-foreground/15">
            <span className="absolute inset-x-0 top-0 h-1/2 bg-primary" style={{ animation: 'scroll-cue 1.6s ease-in-out infinite' }} />
          </span>
          <ArrowDown className="size-3.5" />
          <span className="sr-only">Scroll to content</span>
        </a>
      </div>
    </section>
  )
}
