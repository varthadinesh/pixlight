'use client'

import { ArrowUpRight, Smartphone } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { SectionLabel, useScrollProgress } from './motion'

const sites = [
  { category: 'Interior studio', name: 'Sathyam Interior', domain: 'sathyaminterior.com' },
  { category: 'Academy coaching', name: 'Chalapathi IIT NEET Academy', domain: 'chalapathiiitneetacademy.com' },
  { category: 'Higher education', name: 'CCPY', domain: 'ccpy.ac.in' },
  { category: 'School', name: 'Sri Chaturya School', domain: 'srichaturyaschool.com' },
  { category: 'Institution', name: 'City', domain: 'city.ac.in' },
  { category: 'Business website', name: 'Earning Eagles', domain: 'earningeagles.com' },
  { category: 'Payments', name: 'OnTMPay', domain: 'ontmpay.com' },
]

export function Work() {
  const sectionRef = useScrollProgress<HTMLElement>('pin')
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return
    const measure = () => {
      const distance = Math.max(track.scrollWidth - window.innerWidth, 0)
      section.style.setProperty('--dist', `${distance}px`)
      section.style.height = `${distance + window.innerHeight}px`
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(track)
    window.addEventListener('resize', measure)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [sectionRef])

  return (
    <section id="work" ref={sectionRef} aria-labelledby="work-title" className="relative">
      <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden">
        <div
          ref={trackRef}
          className="flex w-max items-stretch gap-5 px-5 will-change-transform md:gap-6 md:px-8"
          style={{ transform: 'translate3d(calc(var(--p, 0) * var(--dist, 0px) * -1), 0, 0)' }}
        >
          <div className="flex w-[82vw] shrink-0 flex-col justify-center pr-6 sm:w-[60vw] lg:w-[34vw]">
            <SectionLabel>Our work</SectionLabel>
            <h2
              id="work-title"
              className="font-display mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
            >
              Websites and institutions <span className="text-primary">we have shipped</span>
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">
              Each of these is live. The same team will design and launch the next one.
            </p>
          </div>

          <article className="relative h-[68svh] w-[82vw] shrink-0 overflow-hidden rounded-3xl border border-border sm:w-[60vw] lg:w-[44vw]">
            <Image src="/images/pointer-team.png" alt="The Pointer team delivering a school ERP" fill sizes="50vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
              <p className="text-xs uppercase tracking-[0.25em] text-accent">Live ERPs</p>
              <h3 className="font-display mt-3 text-2xl font-semibold md:text-4xl">Institution systems already running</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                Administrators, faculty and families use them for admissions, fees, academics and everyday
                communication — built for the academic calendar, not a generic template.
              </p>
            </div>
          </article>

          <article className="relative h-[68svh] w-[82vw] shrink-0 overflow-hidden rounded-3xl border border-border sm:w-[50vw] lg:w-[30vw]">
            <Image src="/images/purple-valley.png" alt="Purple Valley school app on an Android phone" fill sizes="40vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-accent">
                <Smartphone className="size-3.5" aria-hidden="true" /> On Google Play
              </p>
              <h3 className="font-display mt-3 text-2xl font-semibold md:text-4xl">Purple Valley</h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                A school mobile application we built and published, used daily by parents and the institution.
              </p>
            </div>
          </article>

          <ul className="grid h-[68svh] shrink-0 grid-flow-col grid-rows-2 gap-5 md:gap-6">
            {sites.map((site, i) => (
              <li key={site.domain} className="w-[70vw] sm:w-[40vw] lg:w-[22vw]">
                <a
                  href={`https://${site.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-6 transition-colors hover:border-primary/60 md:p-7"
                >
                  <span
                    className="absolute -right-10 -top-10 size-40 rounded-full bg-primary/20 blur-3xl transition-transform duration-700 group-hover:scale-150"
                    aria-hidden="true"
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{site.category}</span>
                    <span className="font-display text-sm text-primary">0{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold md:text-2xl">{site.name}</h3>
                    <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors group-hover:text-accent">
                      {site.domain}
                      <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-10 flex w-full max-w-7xl items-center gap-4 px-5 md:px-8" aria-hidden="true">
          <span className="font-display text-xs text-muted-foreground">Drag scroll</span>
          <span className="relative h-px flex-1 bg-foreground/15">
            <span className="absolute inset-y-0 left-0 w-full origin-left bg-primary" style={{ transform: 'scaleX(var(--p, 0))' }} />
          </span>
        </div>
      </div>
    </section>
  )
}
