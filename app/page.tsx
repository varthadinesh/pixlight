import { CtaFooter } from '@/components/site/cta-footer'
import { Header } from '@/components/site/header'
import { Hero } from '@/components/site/hero'
import { Impact } from '@/components/site/impact'
import { Platform } from '@/components/site/platform'
import { Products } from '@/components/site/products'
import { Roadmap } from '@/components/site/roadmap'
import { Showcase } from '@/components/site/showcase'
import { Solutions } from '@/components/site/solutions'
import { Testimonials } from '@/components/site/testimonials'
import { Trusted } from '@/components/site/trusted'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trusted />
        <Impact />
        <Products />
        <Platform />
        <Showcase />
        <Solutions />
        <Roadmap />
        <Testimonials />
      </main>
      <CtaFooter />
    </>
  )
}
