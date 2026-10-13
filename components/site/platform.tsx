import { Boxes, Cpu, Database, Rocket, Sparkles } from 'lucide-react'
import { Counter, Reveal, SectionLabel, SplitText } from './motion'

const nodes = [
  { id: 'src', label: 'Postgres source', icon: Database, x: 4, y: 12 },
  { id: 'evt', label: 'Event stream', icon: Boxes, x: 4, y: 62 },
  { id: 'ai', label: 'Prism model', icon: Sparkles, x: 38, y: 37 },
  { id: 'fn', label: 'Edge function', icon: Cpu, x: 70, y: 12 },
  { id: 'out', label: 'Deploy', icon: Rocket, x: 70, y: 62 },
]

const edges = [
  'M 22 20 C 32 20, 30 45, 40 45',
  'M 22 70 C 32 70, 30 45, 40 45',
  'M 58 45 C 66 45, 62 20, 72 20',
  'M 58 45 C 66 45, 62 70, 72 70',
]

const steps = [
  { n: '01', title: 'Build in Canvas', body: 'Connect sources, models, and services in one graph.' },
  { n: '02', title: 'Migrate a workload', body: 'Move any production workload from a legacy stack.' },
  { n: '03', title: 'Get credits back', body: '100% of eligible migration spend, up to $100,000.' },
]

export function Platform() {
  return (
    <section id="platform" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <SectionLabel>Build with Canvas</SectionLabel>
            </Reveal>
            <h2 className="font-display mt-5 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
              <SplitText text="Your whole stack, in one editable graph." highlight={['editable', 'graph.']} />
            </h2>
            <Reveal delay={200}>
              <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
                Connect references, data, models, and output in a single canvas. Complex production systems become easy to
                plan, adjust, and rerun — with every change versioned.
              </p>
            </Reveal>

            <Reveal delay={300} className="mt-10 rounded-2xl border border-primary/30 bg-primary/5 p-6">
              <p className="font-display text-5xl font-semibold tracking-tight text-primary md:text-6xl">
                <Counter value={100} suffix="%" />
              </p>
              <p className="mt-2 font-medium">Migration credits back, up to $100,000</p>
              <p className="mt-1 text-sm text-muted-foreground">For teams moving to Northlight before December 31.</p>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-border bg-card/60 p-4 sm:aspect-[16/12]">
              <div
                className="absolute inset-0 opacity-40 [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:22px_22px]"
                aria-hidden="true"
              />
              <div className="absolute left-4 top-4 flex gap-1.5" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-muted-foreground/30" />
                <span className="size-2.5 rounded-full bg-muted-foreground/30" />
                <span className="size-2.5 rounded-full bg-primary" />
              </div>

              <svg viewBox="0 0 100 90" preserveAspectRatio="none" className="absolute inset-0 size-full" aria-hidden="true">
                {edges.map((d, i) => (
                  <g key={d}>
                    <path d={d} fill="none" stroke="var(--border)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                    <path
                      d={d}
                      fill="none"
                      stroke="var(--primary)"
                      strokeWidth="2"
                      strokeDasharray="6 18"
                      vectorEffect="non-scaling-stroke"
                      className="animate-flow"
                      style={{ animationDelay: `${i * 0.25}s` }}
                    />
                  </g>
                ))}
              </svg>

              {nodes.map((node, i) => {
                const Icon = node.icon
                const isCore = node.id === 'ai'
                return (
                  <div
                    key={node.id}
                    className="absolute animate-float"
                    style={{ left: `${node.x}%`, top: `${node.y}%`, animationDelay: `${i * 0.7}s` }}
                  >
                    <div
                      className={
                        isCore
                          ? 'relative flex items-center gap-2 rounded-xl border border-primary bg-primary px-3 py-2.5 text-xs font-medium text-primary-foreground shadow-[0_0_40px_-4px_var(--primary)] sm:text-sm'
                          : 'flex items-center gap-2 rounded-xl border border-border bg-background/90 px-3 py-2.5 text-xs backdrop-blur-md sm:text-sm'
                      }
                    >
                      {isCore && <span className="absolute inset-0 animate-pulse-ring rounded-xl border border-primary" aria-hidden="true" />}
                      <Icon className="size-4" />
                      <span className="whitespace-nowrap">{node.label}</span>
                    </div>
                  </div>
                )
              })}

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-border bg-background/80 px-4 py-2.5 text-xs backdrop-blur-md">
                <span className="flex items-center gap-2 text-muted-foreground">
                  <span className="relative flex size-2">
                    <span className="absolute inset-0 animate-ping rounded-full bg-primary" />
                    <span className="relative size-2 rounded-full bg-primary" />
                  </span>
                  Pipeline running
                </span>
                <span className="font-display tabular-nums">v4.2.1 · 38ms</span>
              </div>
            </div>
          </Reveal>
        </div>

        <ol className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 120} className="group bg-background p-8 transition-colors hover:bg-card">
              <span className="font-display text-sm text-primary">{step.n}</span>
              <h3 className="font-display mt-6 text-2xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.body}</p>
              <span className="mt-6 block h-px w-0 bg-primary transition-all duration-700 group-hover:w-full" aria-hidden="true" />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
