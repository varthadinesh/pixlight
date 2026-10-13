'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '#products', label: 'Products' },
  { href: '#platform', label: 'Platform' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#customers', label: 'Customers' },
]

export function Logo() {
  return (
    <a href="#top" className="font-display flex items-center gap-2 text-lg font-semibold tracking-tight">
      <span className="relative flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
        <span className="absolute inset-0 animate-pulse-ring rounded-md bg-primary/60" aria-hidden="true" />
        <svg viewBox="0 0 24 24" className="relative size-4" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" strokeLinecap="round" />
        </svg>
      </span>
      Northlight
    </a>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(window.scrollY > 24)
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled ? 'border-b border-border bg-background/70 backdrop-blur-xl' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Logo />
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-muted-foreground">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="group relative transition-colors hover:text-foreground">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:block">
            Sign in
          </a>
          <a
            href="#contact"
            className="group hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            Book a demo
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="rounded-md p-2 md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>
      <div
        id="mobile-nav"
        className={cn(
          'grid overflow-hidden border-border bg-background/95 backdrop-blur-xl transition-all duration-500 md:hidden',
          open ? 'grid-rows-[1fr] border-b' : 'grid-rows-[0fr]',
        )}
      >
        <ul className="min-h-0 space-y-1 px-5">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)} className="font-display block py-3 text-2xl">
                {link.label}
              </a>
            </li>
          ))}
          <li className="pb-5 pt-2">
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">
              Book a demo
            </a>
          </li>
        </ul>
      </div>
      <div
        className="absolute bottom-0 left-0 h-px bg-primary shadow-[0_0_12px_var(--primary)]"
        style={{ width: `${progress * 100}%` }}
        aria-hidden="true"
      />
    </header>
  )
}
