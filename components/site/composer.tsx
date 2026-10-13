'use client'

import { AppWindow, ArrowRight, GraduationCap, Globe, MessageSquareText, Receipt, Search } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Reveal, SectionLabel, SplitText } from './motion'

const modules = [
  { id: 'website', label: 'Website', icon: Globe },
  { id: 'app', label: 'Mobile app', icon: AppWindow },
  { id: 'messaging', label: 'Messaging · ComVeda', icon: MessageSquareText },
  { id: 'billing', label: 'Billing · BillVeda', icon: Receipt },
  { id: 'erp', label: 'School ERP · EduVeda', icon: GraduationCap },
  { id: 'search', label: 'SEO & search', icon: Search },
]

const steps = [
  { title: 'Choose modules', body: 'Website, mobile app, messaging, billing, school ERP, search.' },
  { title: 'Watch it connect', body: 'The preview shows the stack you assembled.' },
  { title: 'Send the stack', body: 'One click opens a message to our team with your choices filled in.' },
]

export function Composer() {
  const [selected, setSelected] = useState<string[]>(['website', 'messaging'])

  const toggle = (id: string) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]))

  const chosen = modules.filter((m) => selected.includes(m.id))
  const mailto = `mailto:sales@pointerits.com?subject=${encodeURIComponent(
    'Solution enquiry from pointerits.com',
  )}&body=${encodeURIComponent(`Hi Pointer team,\n\nI'd like to discuss this stack:\n${chosen.map((m) => `- ${m.label}`).join('\n')}\n\nThanks!`)}`

  return (
    <section id="compose" aria-labelledby="compose-title" className="relative overflow-hidden py-24 md:py-36">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/40 blur-[140px]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <SectionLabel>Playground</SectionLabel>
          <SplitText
            as="h2"
            text="Compose your own system, then send it to us"
            highlight={['send']}
            className="font-display mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
          />
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.15fr]">
          <Reveal className="flex flex-col gap-8">
            <ol className="flex flex-col gap-5">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="font-display inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-primary/40 text-sm text-primary">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <fieldset>
              <legend className="mb-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">Pick modules</legend>
              <div className="flex flex-wrap gap-2.5">
                {modules.map((m) => {
                  const active = selected.includes(m.id)
                  return (
                    <button
                      key={m.id}
                      type="button"
                      aria-pressed={active}
                      onClick={() => toggle(m.id)}
                      className={cn(
                        'inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm transition-all duration-300',
                        active
                          ? 'border-primary bg-primary text-primary-foreground shadow-[0_0_30px_-8px] shadow-primary'
                          : 'border-border bg-card/50 text-muted-foreground hover:border-primary/50 hover:text-foreground',
                      )}
                    >
                      <m.icon className="size-4" aria-hidden="true" />
                      {m.label}
                    </button>
                  )
                })}
              </div>
            </fieldset>

            <a
              href={chosen.length ? mailto : undefined}
              aria-disabled={!chosen.length}
              className={cn(
                'group inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:scale-[1.03]',
                !chosen.length && 'pointer-events-none opacity-40',
              )}
            >
              Discuss this solution
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>

          <Reveal delay={150}>
            <div
              className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl border border-border bg-card/60 sm:aspect-[4/3]"
              aria-live="polite"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60" aria-hidden="true" />
              <div
                className="absolute size-[70%] rounded-full border border-dashed border-primary/30"
                style={{ animation: 'orbit 40s linear infinite' }}
                aria-hidden="true"
              />

              <div className="relative z-10 flex flex-col items-center gap-2 rounded-2xl border border-primary/50 bg-background px-6 py-4 text-center shadow-[0_0_60px_-10px] shadow-primary">
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Your stack</span>
                <span className="font-display text-lg font-semibold">
                  {chosen.length} module{chosen.length === 1 ? '' : 's'}
                </span>
              </div>

              {modules.map((m, i) => {
                const active = selected.includes(m.id)
                const angle = (i / modules.length) * Math.PI * 2 - Math.PI / 2
                const x = Math.cos(angle) * 36
                const y = Math.sin(angle) * 34
                return (
                  <div key={m.id}>
                    <svg className="absolute inset-0 size-full" aria-hidden="true">
                      <line
                        x1="50%"
                        y1="50%"
                        x2={`${50 + x}%`}
                        y2={`${50 + y}%`}
                        stroke="var(--primary)"
                        strokeWidth="1.5"
                        strokeDasharray="6 6"
                        className="animate-flow transition-opacity duration-500"
                        style={{ opacity: active ? 0.8 : 0 }}
                      />
                    </svg>
                    <div
                      className={cn(
                        'absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-xl border px-3 py-2 text-xs font-medium transition-all duration-500',
                        active
                          ? 'scale-100 border-primary/60 bg-secondary text-foreground opacity-100'
                          : 'scale-75 border-border bg-card text-muted-foreground opacity-30',
                      )}
                      style={{ left: `${50 + x}%`, top: `${50 + y}%` }}
                    >
                      <m.icon className="size-3.5 text-accent" aria-hidden="true" />
                      <span className="hidden sm:inline">{m.label.split(' · ')[0]}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
