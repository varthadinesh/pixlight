import Image from 'next/image'
import { ArrowUpRight, Check } from 'lucide-react'
import { Reveal, SectionLabel, SplitText, SpotlightCard } from './motion'

const products = [
  {
    name: 'Canvas',
    kicker: 'Workflow orchestration',
    image: '/images/product-canvas.png',
    body: 'Design pipelines, agents, and services in one editable graph. Rerun any node, version every change.',
    points: ['Visual node editor', 'Git-native versioning', 'One-click rollbacks'],
  },
  {
    name: 'Beacon',
    kicker: 'Real-time observability',
    image: '/images/product-beacon.png',
    body: 'Traces, logs, and metrics stitched into a single signal — with anomaly detection before users notice.',
    points: ['Sub-second alerting', 'AI root-cause analysis', 'OpenTelemetry native'],
  },
  {
    name: 'Prism',
    kicker: 'AI data platform',
    image: '/images/product-prism.png',
    body: 'Split raw data into governed, model-ready streams. Train, evaluate, and deploy without leaving your stack.',
    points: ['Vector + SQL in one', 'Fine-grained governance', 'Bring any model'],
  },
]

export function Products() {
  return (
    <section id="products" className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <SectionLabel>Products</SectionLabel>
            </Reveal>
            <h2 className="font-display mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">
              <SplitText text="Three products. One frequency." highlight={['One', 'frequency.']} />
            </h2>
          </div>
          <Reveal delay={200}>
            <p className="max-w-sm leading-relaxed text-muted-foreground">
              Use them alone or together. Every Northlight product shares the same identity, data layer, and APIs.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-5 lg:grid-cols-3">
          {products.map((product, i) => (
            <Reveal as="li" key={product.name} delay={i * 150}>
              <SpotlightCard className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/60 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_30px_80px_-30px_color-mix(in_oklch,var(--primary)_45%,transparent)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image || '/placeholder.svg'}
                    alt={`${product.name} product visual`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full border border-border bg-background/60 px-3 py-1 text-xs backdrop-blur-md">
                    {product.kicker}
                  </span>
                  <span className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition-all duration-500 group-hover:rotate-45 group-hover:opacity-100">
                    <ArrowUpRight className="size-5" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-3xl font-semibold tracking-tight">
                    Northlight <span className="text-primary">{product.name}</span>
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{product.body}</p>
                  <ul className="mt-6 space-y-2.5 border-t border-border pt-6 text-sm">
                    {product.points.map((point) => (
                      <li key={point} className="flex items-center gap-3">
                        <span className="flex size-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                          <Check className="size-3" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
