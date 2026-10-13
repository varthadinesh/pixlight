import { ArrowRight } from 'lucide-react'
import { Logo } from './header'
import { Reveal, SplitText } from './motion'

const columns = [
  { title: 'Products', links: ['Canvas', 'Beacon', 'Prism', 'Pricing'] },
  { title: 'Company', links: ['About', 'Careers', 'Press', 'Contact'] },
  { title: 'Resources', links: ['Docs', 'Changelog', 'Status', 'Security'] },
]

export function CtaFooter() {
  return (
    <>
      <section id="contact" className="px-5 py-20 md:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-primary/30 bg-card px-6 py-24 text-center md:py-32">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute left-1/2 top-0 h-80 w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-[120px]" />
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
          </div>
          <h2 className="font-display relative mx-auto max-w-4xl text-balance text-5xl font-semibold tracking-tighter md:text-7xl">
            <SplitText text="Ready to ship at light speed?" highlight={['light', 'speed?']} />
          </h2>
          <Reveal delay={300} className="relative">
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              Start free in minutes, or talk with our team about an enterprise rollout and migration credits.
            </p>
            <form className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row" action="#contact">
              <label htmlFor="email" className="sr-only">
                Work email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@company.com"
                className="h-12 flex-1 rounded-full border border-input bg-background/60 px-5 text-sm outline-none backdrop-blur-md placeholder:text-muted-foreground focus:border-primary"
              />
              <button
                type="submit"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Book a demo
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.5fr_repeat(3,1fr)] md:px-8">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Product-first software for teams that refuse to slow down.
            </p>
          </div>
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-sm font-medium">{col.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#top" className="transition-colors hover:text-primary">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="overflow-hidden">
          <p
            className="font-display select-none text-center text-[22vw] font-semibold leading-[0.8] tracking-tighter text-foreground/[0.04]"
            aria-hidden="true"
          >
            Northlight
          </p>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 border-t border-border px-5 py-6 text-xs text-muted-foreground sm:flex-row md:px-8">
          <p>© 2026 Northlight Systems, Inc. All rights reserved.</p>
          <p>Privacy · Terms · Cookies</p>
        </div>
      </footer>
    </>
  )
}
