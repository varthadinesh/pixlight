'use client'

import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import { Reveal, SplitText, useScrollProgress } from './motion'

const contacts = [
  { icon: Mail, label: 'sales@pointerits.com', href: 'mailto:sales@pointerits.com' },
  { icon: Mail, label: 'info@pointerits.com', href: 'mailto:info@pointerits.com' },
  { icon: Phone, label: '+91 77801 99652', href: 'tel:+917780199652' },
  { icon: MapPin, label: 'Hyderabad, Telangana, India' },
]

const links = [
  { title: 'Products', items: ['EduVeda', 'BillVeda', 'ComVeda'] },
  { title: 'Services', items: ['Application development', 'Web design', 'Bulk messaging', 'SEO and SEM'] },
  { title: 'Company', items: ['About', 'Work', 'Careers', 'Contact'] },
]

export function CtaFooter() {
  const wordRef = useScrollProgress<HTMLDivElement>('view')

  return (
    <footer id="contact" className="relative overflow-hidden border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="relative overflow-hidden rounded-[2rem] bg-secondary p-8 md:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 size-96 rounded-full bg-primary/40 blur-[100px]" aria-hidden="true" />
          <div className="relative grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
              <SplitText
                as="h2"
                text="Tell us the friction. We will size a plan that fits."
                highlight={['friction.']}
                className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
              />
              <Reveal delay={200}>
                <p className="mt-6 max-w-lg leading-relaxed text-secondary-foreground/75">
                  Sketch it in the studio, compose it in the playground, or send the requirement. We reply within one
                  working day.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="mailto:sales@pointerits.com?subject=Quote%20request"
                    className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
                  >
                    Get a quote
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="tel:+917780199652"
                    className="inline-flex items-center rounded-full border border-foreground/25 px-6 py-3.5 text-sm font-medium transition-colors hover:bg-foreground/10"
                  >
                    Call the team
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={300}>
              <ul className="flex flex-col gap-3">
                {contacts.map((c) => (
                  <li key={c.label}>
                    {c.href ? (
                      <a href={c.href} className="flex items-center gap-3 rounded-2xl bg-background/40 px-5 py-4 text-sm transition-colors hover:bg-background/70">
                        <c.icon className="size-4 text-accent" aria-hidden="true" />
                        {c.label}
                      </a>
                    ) : (
                      <span className="flex items-center gap-3 rounded-2xl bg-background/40 px-5 py-4 text-sm">
                        <c.icon className="size-4 text-accent" aria-hidden="true" />
                        {c.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <span className="inline-flex rounded-lg bg-white px-3 py-2">
              <Image src="/images/pointer-logo.png" alt="Pointer IT Solutions" width={140} height={48} className="h-9 w-auto" />
            </span>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Software, ERP and digital solutions from Hyderabad. We reach. You send. Jet SMS, with jet speed.
            </p>
          </div>
          {links.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h3 className="font-display text-sm font-semibold">{group.title}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li key={item}>
                    <a href="#top" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      <div ref={wordRef} className="overflow-hidden" aria-hidden="true">
        <p
          className="font-display whitespace-nowrap text-center text-[22vw] font-bold leading-[0.8] tracking-tighter text-foreground/[0.06]"
          style={{ transform: 'translateX(calc((0.6 - var(--p)) * 30%))' }}
        >
          POINTER
        </p>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-5 py-6 text-xs text-muted-foreground md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Pointer IT Solutions (OPC) Private Limited. All rights reserved.</p>
          <p>Founded 2011 · Hyderabad</p>
        </div>
      </div>
    </footer>
  )
}
