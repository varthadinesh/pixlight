'use client'

import { ArrowUpRight, Check } from 'lucide-react'
import Image from 'next/image'
import { Reveal, SectionLabel, SplitText, useScrollProgress } from './motion'

const products = [
  {
    name: 'EduVeda',
    motto: 'Teach. Manage. Grow.',
    body: 'An education platform for schools and colleges: admissions, fees, attendance, examinations and parent communication in one system.',
    points: [
      'Admissions, academic year and class management',
      'Fees, attendance, gradebook and notifications',
      'Role-based access for office, faculty and parents',
    ],
    image: '/images/eduveda.png',
  },
  {
    name: 'BillVeda',
    motto: 'Bill. Track. Grow.',
    body: 'Invoicing, inventory, payments and day-end reports for retail and specialised counters.',
    points: ['Products, billing and customer records', 'Stock, returns and adjustments', 'Roles and end-of-day business reports'],
    image: '/images/billveda.png',
  },
  {
    name: 'ComVeda',
    motto: 'Connect. Engage. Grow.',
    body: 'Campaigns across SMS, WhatsApp, voice and RCS, with templates, delivery tracking and reports.',
    points: ['SMS, WhatsApp, voice and RCS', 'Campaigns, templates and APIs', 'Delivery and communication reports'],
    image: '/images/comveda.png',
  },
]

function ProductCard({ product, index, total }: { product: (typeof products)[number]; index: number; total: number }) {
  const ref = useScrollProgress<HTMLDivElement>('view')
  const isLast = index === total - 1

  return (
    <div ref={ref} className="sticky h-[88svh]" style={{ top: `calc(5rem + ${index * 1.75}rem)` }}>
      <article
        className="grid h-full origin-top overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-black/40 md:grid-cols-2"
        style={{
          transform: isLast ? undefined : 'scale(calc(1 - max(var(--p) - 0.5, 0) * 0.12))',
          filter: isLast ? undefined : 'brightness(calc(1 - max(var(--p) - 0.5, 0) * 0.8))',
        }}
      >
        <div className="flex flex-col justify-between gap-8 p-7 md:p-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-display text-sm text-primary">0{index + 1}</span>
              <span className="h-px w-10 bg-primary/50" />
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Flagship product</span>
            </div>
            <h3 className="font-display mt-6 text-5xl font-semibold tracking-tight md:text-7xl">{product.name}</h3>
            <p className="font-display mt-3 text-lg text-accent md:text-xl">{product.motto}</p>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">{product.body}</p>
          </div>
          <div>
            <ul className="flex flex-col gap-3">
              {product.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="size-3" aria-hidden="true" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              Request a demo
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
        <div className="relative hidden overflow-hidden md:block">
          <Image
            src={product.image}
            alt={`${product.name} product interface`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            style={{ transform: 'scale(calc(1.18 - var(--p) * 0.18)) translateY(calc((var(--p) - 0.5) * -6%))' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-card via-card/10 to-transparent" />
        </div>
      </article>
    </div>
  )
}

export function Products() {
  return (
    <section id="products" aria-labelledby="products-title" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel>Products</SectionLabel>
            <SplitText
              as="h2"
              text="Systems engineered around one industry"
              highlight={['one', 'industry']}
              className="font-display mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
            />
          </div>
          <Reveal delay={200}>
            <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
              They work alone, or together. Each one is in production and supported by the team that built it.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col gap-10 pb-[6vh]">
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} total={products.length} />
          ))}
        </div>
      </div>
    </section>
  )
}
