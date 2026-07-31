import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { EmotionalSection } from '@/components/emotional-section'
import { SolutionSection } from '@/components/solution-section'
import { BenefitsSection } from '@/components/benefits-section'
import { CatalogSection } from '@/components/catalog-section'
import { PricingSection } from '@/components/pricing-section'
import { SocialProof } from '@/components/social-proof'
import { GuaranteeSection } from '@/components/guarantee-section'
import { FaqSection } from '@/components/faq-section'
import { FinalCta } from '@/components/final-cta'
import { StickyCta } from '@/components/sticky-cta'
import { Play } from 'lucide-react'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <EmotionalSection />
        <SolutionSection />
        <BenefitsSection />
        <CatalogSection />
        <PricingSection />
        <SocialProof />
        <GuaranteeSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
      {/* spacer so sticky mobile bar never covers footer */}
      <div className="h-20 sm:hidden" aria-hidden="true" />
    </>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:px-6">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-b from-[#ff3b30] to-[#e50914]">
            <Play className="h-3.5 w-3.5 fill-current text-primary-foreground" />
          </span>
          <span className="font-display text-base font-extrabold tracking-tight">
            Dora<span className="text-primary">Play</span>
          </span>
        </div>
        <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
          DoraPlay é um acervo de entretenimento. As imagens são ilustrativas. Este
          site não é afiliado a Netflix, HBO Max ou Apple TV+.
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} DoraPlay. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
