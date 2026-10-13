'use client'

import { Reveal, SectionLabel, SplitText, useScrollProgress } from './motion'

const steps = [
  { title: 'Discover', body: 'We map how the business runs today and where it loses time.' },
  { title: 'Design', body: 'Screens and flows you can react to before anything is built.' },
  { title: 'Build', body: 'Working software at each milestone.' },
  { title: 'Support', body: 'Direct access to the people who built it, after launch.' },
]

export function Process() {
  const ref = useScrollProgress<HTMLDivElement>('view')

  return (
    <section id="process" aria-labelledby="process-title" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel>Process</SectionLabel>
        <SplitText
          as="h2"
          text="From first conversation to a system you keep using"
          highlight={['keep', 'using']}
          className="font-display mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
        />

        <div ref={ref} className="relative mt-16 md:mt-20">
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-foreground/10 md:block" aria-hidden="true">
            <div
              className="h-full origin-left bg-gradient-to-r from-primary to-accent"
              style={{ transform: 'scaleX(calc((var(--p) - 0.2) * 2.2))' }}
            />
          </div>
          <ol className="grid gap-10 md:grid-cols-4 md:gap-8">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 140} className="relative">
                <span className="font-display relative z-10 inline-flex size-10 items-center justify-center rounded-full border border-primary bg-background text-sm text-primary">
                  0{i + 1}
                </span>
                <h3 className="font-display mt-6 text-2xl font-semibold">{step.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
