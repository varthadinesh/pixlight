import { Composer } from '@/components/site/composer'
import { CtaFooter } from '@/components/site/cta-footer'
import { Header } from '@/components/site/header'
import { Hero } from '@/components/site/hero'
import { Industries } from '@/components/site/industries'
import { Process } from '@/components/site/process'
import { Products } from '@/components/site/products'
import { Services } from '@/components/site/services'
import { Work } from '@/components/site/work'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Industries />
        <Products />
        <Services />
        <Work />
        <Composer />
        <Process />
      </main>
      <CtaFooter />
    </>
  )
}
