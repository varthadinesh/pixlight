import { Reveal, SectionLabel, SplitText } from './motion'

const quotes = [
  { quote: 'Canvas replaced four internal tools. Our platform team finally ships features instead of glue.', name: 'Maya Chen', role: 'VP Engineering, Helios Bank' },
  { quote: 'Beacon caught a cascading failure eleven minutes before our customers would have.', name: 'Daniel Okafor', role: 'SRE Lead, Orbitly' },
  { quote: 'Prism gave us governed training data in weeks, not quarters. It changed our AI roadmap.', name: 'Sofia Martins', role: 'Head of Data, Mediq' },
  { quote: 'The migration credits paid for the move. The productivity gains paid for everything after.', name: 'Arjun Patel', role: 'CTO, Kairo' },
  { quote: 'One identity, one data layer, one bill. Procurement has never been this simple.', name: 'Lena Vogel', role: 'CIO, Arcfield' },
  { quote: 'We went from monthly releases to shipping dozens of times a day.', name: 'Marcus Reid', role: 'Director of Product, Stratus' },
]

function QuoteCard({ q, hidden }: { q: (typeof quotes)[number]; hidden?: boolean }) {
  return (
    <figure
      aria-hidden={hidden}
      className="w-[22rem] shrink-0 rounded-2xl border border-border bg-card/60 p-7 transition-colors hover:border-primary/40"
    >
      <blockquote className="text-pretty leading-relaxed">{`\u201C${q.quote}\u201D`}</blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="font-display flex size-10 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
          {q.name
            .split(' ')
            .map((p) => p[0])
            .join('')}
        </span>
        <span>
          <span className="block text-sm font-medium">{q.name}</span>
          <span className="block text-xs text-muted-foreground">{q.role}</span>
        </span>
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  const rowA = quotes.slice(0, 3)
  const rowB = quotes.slice(3)
  return (
    <section id="customers" className="overflow-hidden py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
        <Reveal>
          <SectionLabel>Customers</SectionLabel>
        </Reveal>
        <h2 className="font-display mx-auto mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">
          <SplitText text="Teams that found their frequency." highlight={['frequency.']} />
        </h2>
      </div>
      <div className="mask-fade-x group mt-16 flex flex-col gap-5">
        <div className="flex w-max animate-marquee gap-5 pr-5 group-hover:[animation-play-state:paused]">
          {[...rowA, ...rowA, ...rowA, ...rowA].map((q, i) => (
            <QuoteCard key={`a-${i}`} q={q} hidden={i >= rowA.length} />
          ))}
        </div>
        <div className="flex w-max animate-marquee-reverse gap-5 pr-5 group-hover:[animation-play-state:paused]">
          {[...rowB, ...rowB, ...rowB, ...rowB].map((q, i) => (
            <QuoteCard key={`b-${i}`} q={q} hidden={i >= rowB.length} />
          ))}
        </div>
      </div>
    </section>
  )
}
