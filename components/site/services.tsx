import {
  AppWindow,
  BarChart3,
  Brush,
  GraduationCap,
  Layout,
  MessageSquareText,
  Palette,
  Receipt,
  Server,
} from 'lucide-react'
import { Reveal, SectionLabel, SplitText, SpotlightCard } from './motion'

const groups = [
  {
    phase: 'Build',
    tagline: 'Products and platforms',
    items: [
      { icon: AppWindow, title: 'Application development', body: 'Web and mobile apps built to your specification.' },
      { icon: Layout, title: 'Web design', body: 'Sites that convert, not just exist.' },
      { icon: Server, title: 'Web hosting', body: 'Managed, monitored infrastructure.' },
    ],
  },
  {
    phase: 'Grow',
    tagline: 'Be found, then be chosen',
    items: [
      { icon: Palette, title: 'Brand identity', body: 'Logo, voice and a visual system.' },
      { icon: Brush, title: 'Graphic design', body: 'Collateral across every channel.' },
      { icon: BarChart3, title: 'SEO and SEM', body: 'Search visibility that compounds.' },
    ],
  },
  {
    phase: 'Run',
    tagline: 'Operations that keep going',
    items: [
      { icon: MessageSquareText, title: 'Bulk messaging', body: 'SMS, voice, WhatsApp and RCS at scale.' },
      { icon: Receipt, title: 'Industry ERP and billing', body: 'School and retail systems.' },
      { icon: GraduationCap, title: 'Corporate training', body: 'Upskilling for your own team.' },
    ],
  },
]

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="relative py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionLabel>Services</SectionLabel>
          <SplitText
            as="h2"
            text="Nine capabilities, arranged the way projects actually flow"
            highlight={['flow']}
            className="font-display mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
          />
          <Reveal delay={200}>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Most clients start with something to build, then need to be found, then need it to run day to day. We
              cover all three, so nothing gets handed off.
            </p>
          </Reveal>
          <Reveal delay={300} className="mt-10 hidden gap-3 lg:flex">
            {groups.map((g, i) => (
              <span
                key={g.phase}
                className="font-display rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"
              >
                <span className="text-primary">0{i + 1}</span> {g.phase}
              </span>
            ))}
          </Reveal>
        </div>

        <div className="flex flex-col gap-16">
          {groups.map((group, gi) => (
            <div key={group.phase}>
              <Reveal className="flex items-end justify-between gap-4 border-b border-border pb-5">
                <div>
                  <p className="text-sm text-muted-foreground">{group.tagline}</p>
                  <h3 className="font-display mt-1 text-3xl font-semibold md:text-4xl">{group.phase}</h3>
                </div>
                <span className="font-display text-outline text-6xl font-bold md:text-7xl" aria-hidden="true">
                  0{gi + 1}
                </span>
              </Reveal>
              <ul className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {group.items.map((item, i) => (
                  <Reveal as="li" key={item.title} delay={i * 110}>
                    <SpotlightCard className="group h-full overflow-hidden rounded-2xl border border-border bg-card/60 p-6 transition-colors hover:border-primary/50">
                      <span className="inline-flex size-11 items-center justify-center rounded-xl bg-secondary text-accent transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                        <item.icon className="size-5" aria-hidden="true" />
                      </span>
                      <h4 className="font-display mt-6 text-lg font-semibold">{item.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                    </SpotlightCard>
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
