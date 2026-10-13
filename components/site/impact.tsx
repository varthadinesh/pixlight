import { ArrowRight } from 'lucide-react'
import { Counter, Reveal, SectionLabel, SplitText, SpotlightCard } from './motion'

const stats = [
  { value: 99, suffix: '.99%', label: 'Platform uptime', note: 'Across 14 regions' },
  { value: 4, suffix: 'B+', label: 'Events processed daily', note: 'Real-time ingest' },
  { value: 62, suffix: '%', label: 'Faster release cycles', note: 'Median customer gain' },
  { value: 180, suffix: '+', label: 'Native integrations', note: 'Cloud, data & DevOps' },
]

const pathway = [
  {
    step: '01',
    tag: 'Adopt',
    title: 'Northlight Cloud',
    body: 'Start free, scale to enterprise. Every product shares one identity, one data layer, and one bill.',
  },
  {
    step: '02',
    tag: 'Partner',
    title: 'Northlight Labs',
    body: 'An invite-only program pairing your architects with our engineers to co-build mission-critical systems.',
  },
]

export function Impact() {
  return (
    <section className="relative isolate overflow-hidden py-28 md:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center">
          <Reveal>
            <SectionLabel>What you get</SectionLabel>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-sm uppercase tracking-[0.3em] text-muted-foreground">Annual value delivered to customers</p>
          </Reveal>
          <p className="font-display text-shimmer mt-4 text-6xl font-semibold tracking-tighter sm:text-8xl lg:text-[10rem] lg:leading-none">
            <Counter value={300} prefix="$" suffix="M+" duration={2400} />
          </p>
        </div>

        <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal as="li" key={stat.label} delay={i * 100}>
              <SpotlightCard className="h-full rounded-2xl border border-border bg-card/60 p-6 transition-colors hover:border-primary/40">
                <p className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-4 font-medium">{stat.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.note}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </ul>

        <div className="mt-28 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <div>
            <Reveal>
              <SectionLabel>Beyond the product</SectionLabel>
            </Reveal>
            <h2 className="font-display mt-5 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
              <SplitText text="A pathway, not just a purchase." highlight={['pathway,']} />
            </h2>
            <Reveal delay={200}>
              <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                Northlight is the entry point into an ecosystem. Standout teams move forward from self-serve adoption to
                deep engineering partnership.
              </p>
            </Reveal>
          </div>
          <ol className="relative grid gap-4 md:grid-cols-2">
            {pathway.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 150}>
                <SpotlightCard className="group h-full rounded-2xl border border-border bg-card/60 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-5xl font-semibold text-muted-foreground/30 transition-colors group-hover:text-primary">
                      {item.step}
                    </span>
                    <span className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-display mt-10 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{item.body}</p>
                  <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm text-primary">
                    Learn more
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </SpotlightCard>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
