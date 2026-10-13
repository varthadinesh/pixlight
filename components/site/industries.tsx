const industries = [
  'Schools and colleges',
  'Retail and billing',
  'Logistics',
  'Healthcare',
  'Real estate',
  'Manufacturing',
  'Corporate training',
]

function Row({ reverse = false, outline = false }: { reverse?: boolean; outline?: boolean }) {
  const items = [...industries, ...industries]
  return (
    <div className="mask-fade-x flex overflow-hidden">
      <ul
        className={`flex shrink-0 items-center gap-10 pr-10 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
      >
        {items.map((name, i) => (
          <li key={`${name}-${i}`} className="flex items-center gap-10" aria-hidden={i >= industries.length}>
            <span
              className={`font-display whitespace-nowrap text-4xl font-semibold tracking-tight md:text-6xl ${
                outline ? 'text-outline' : 'text-foreground'
              }`}
            >
              {name}
            </span>
            <span className="size-3 rotate-45 rounded-sm bg-primary" aria-hidden="true" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Industries() {
  return (
    <section id="industries" aria-labelledby="industries-title" className="relative py-20 md:py-28">
      <h2 id="industries-title" className="mb-10 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
        Built for
      </h2>
      <div className="flex flex-col gap-6 md:gap-8">
        <Row />
        <Row reverse outline />
      </div>
    </section>
  )
}
