import Image from 'next/image'
import { Play } from 'lucide-react'
import { Reveal, SectionLabel } from './motion'

const films = [
  {
    tag: 'Northlight Keynote',
    title: 'Lumen OS 4.0 — the full reveal',
    body: 'See how our platform team rebuilt the core runtime for 10x throughput.',
    image: '/images/showcase.png',
    duration: '24:10',
  },
  {
    tag: 'Engineering breakdown',
    title: 'Inside Canvas: from concept to production',
    body: 'Deconstructing a real customer workflow, node by node.',
    image: '/images/product-canvas.png',
    duration: '12:46',
  },
]

export function Showcase() {
  return (
    <section id="showcase" className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionLabel>Watch</SectionLabel>
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.6fr_1fr]">
          {films.map((film, i) => (
            <Reveal key={film.title} delay={i * 150}>
              <a
                href="#showcase"
                className="group relative block aspect-[4/3] overflow-hidden rounded-3xl border border-border lg:aspect-auto lg:h-[34rem]"
              >
                <Image
                  src={film.image || '/placeholder.svg'}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="relative flex size-20 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-500 group-hover:scale-110">
                    <span className="absolute inset-0 animate-pulse-ring rounded-full bg-primary/50" aria-hidden="true" />
                    <Play className="relative ml-1 size-7 fill-current" />
                    <span className="sr-only">Play {film.title}</span>
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest">
                    <span className="text-primary">{film.tag}</span>
                    <span className="text-muted-foreground">{film.duration}</span>
                  </div>
                  <h3 className="font-display mt-3 text-balance text-2xl font-semibold md:text-3xl">{film.title}</h3>
                  <p className="mt-2 max-w-md text-muted-foreground">{film.body}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
