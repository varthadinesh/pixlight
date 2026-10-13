const companies = ['Vertex', 'Quantra', 'Helios Bank', 'Orbitly', 'Mediq', 'Arcfield', 'Stratus', 'Nimbus Air', 'Kairo', 'Polaris']

export function Trusted() {
  return (
    <section id="trusted" aria-label="Trusted by" className="border-y border-border py-10">
      <p className="mb-8 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
        Powering product teams at 12,000+ companies
      </p>
      <div className="mask-fade-x group flex overflow-hidden">
        <ul className="flex w-max shrink-0 animate-marquee items-center gap-16 pr-16 group-hover:[animation-play-state:paused]">
          {[...companies, ...companies].map((name, i) => (
            <li
              key={`${name}-${i}`}
              aria-hidden={i >= companies.length}
              className="font-display whitespace-nowrap text-2xl font-semibold tracking-tight text-muted-foreground/60 transition-colors hover:text-foreground"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
