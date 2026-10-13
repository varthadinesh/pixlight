import Image from 'next/image'
import { ArrowRight, Play } from 'lucide-react'
import { Countdown } from './countdown'
import { Reveal, SplitText } from './motion'
import type { CSSProperties } from 'react'

const beams = [
  { r: -32, w: 2, d: 0 },
  { r: -18, w: 6, d: 1.2 },
  { r: -6, w: 3, d: 2.4 },
  { r: 4, w: 10, d: 0.6 },
  { r: 14, w: 2, d: 1.8 },
  { r: 26, w: 5, d: 3 },
  { r: 38, w: 2, d: 2 },
]

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-svh items-center overflow-hidden pb-36 pt-32">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="animate-slow-zoom object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_75%)]" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full" aria-hidden="true">
        {beams.map((beam, i) => (
          <span
            key={i}
            className="absolute left-1/2 top-[-10%] h-[120%] origin-top animate-beam bg-gradient-to-b from-primary/80 via-primary/10 to-transparent blur-[2px]"
            style={
              {
                '--r': `${beam.r}deg`,
                width: `${beam.w}px`,
                animationDelay: `${beam.d}s`,
              } as CSSProperties
            }
          />
        ))}
        <div className="absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />
      </div>

      <div className="grain pointer-events-none absolute inset-0 -z-10 opacity-[0.06] mix-blend-overlay" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl px-5 text-center md:px-8">
        <Reveal className="flex justify-center">
          <a
            href="#roadmap"
            className="group inline-flex items-center gap-3 rounded-full border border-border bg-background/40 py-1.5 pl-1.5 pr-4 text-xs backdrop-blur-md transition-colors hover:border-primary/50 sm:text-sm"
          >
            <span className="rounded-full bg-primary px-2.5 py-0.5 font-medium text-primary-foreground">New</span>
            <span className="text-muted-foreground">Lumen OS 4.0 launches Oct 31, 2026</span>
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>

        <h1 className="font-display mx-auto mt-8 max-w-5xl text-balance text-5xl font-semibold leading-[0.95] tracking-tighter sm:text-7xl lg:text-8xl">
          <SplitText text="Find your frequency." className="block" />
          <SplitText text="Ship at light speed." className="block text-primary" baseDelay={300} />
        </h1>

        <Reveal delay={600}>
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Northlight builds the product suite behind modern engineering teams — a visual orchestration canvas,
            real-time observability, and an AI data platform that turns signal into shipped software.
          </p>
        </Reveal>

        <Reveal delay={800} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#products"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground shadow-[0_0_40px_-8px_var(--primary)] transition-transform hover:scale-[1.03]"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Explore products</span>
            <ArrowRight className="relative size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#showcase"
            className="group inline-flex items-center gap-3 rounded-full border border-border bg-background/40 px-6 py-3.5 font-medium backdrop-blur-md transition-colors hover:border-foreground/40"
          >
            <span className="flex size-6 items-center justify-center rounded-full bg-foreground text-background transition-transform group-hover:scale-110">
              <Play className="size-3 fill-current" />
            </span>
            Watch the keynote
          </a>
        </Reveal>

        <Reveal delay={1000} className="mt-16">
          <Countdown target="2026-10-31T23:59:00Z" />
        </Reveal>
      </div>

      <a
        href="#trusted"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground md:flex"
      >
        Scroll
        <span className="relative h-10 w-px overflow-hidden bg-border">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-[marquee-reverse_1.8s_linear_infinite] bg-primary" />
        </span>
      </a>
    </section>
  )
}
