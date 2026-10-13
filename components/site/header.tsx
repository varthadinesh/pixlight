'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

const nav = [
  { href: '#products', label: 'Products' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#compose', label: 'Compose' },
  { href: '#process', label: 'Process' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(window.scrollY > 24)
      barRef.current?.style.setProperty('--p', String(max > 0 ? window.scrollY / max : 0))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled || open ? 'border-b border-border bg-background/75 backdrop-blur-xl' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 md:h-18 md:px-8">
        <a href="#top" className="flex items-center rounded-lg bg-white px-2.5 py-1.5" aria-label="Pointer IT Solutions home">
          <Image src="/images/pointer-logo.png" alt="Pointer IT Solutions" width={112} height={38} className="h-7 w-auto md:h-8" priority />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            Get a quote
          </a>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="flex flex-col gap-1 px-5 pb-6 lg:hidden">
          {[...nav, { href: '#contact', label: 'Get a quote' }].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display rounded-xl px-3 py-3 text-lg hover:bg-foreground/5"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}

      <div
        ref={barRef}
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-primary"
        style={{ transform: 'scaleX(var(--p, 0))' }}
      />
    </header>
  )
}
