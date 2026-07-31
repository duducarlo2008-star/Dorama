import { Reveal } from './reveal'
import { CtaButton } from './cta-button'
import { Infinity as InfinityIcon, BadgeCheck, ShieldCheck } from 'lucide-react'

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero-bg.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[140px]" />

      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal variant="blur">
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Sua próxima maratona começa por{' '}
            <span className="text-primary">R$10.</span>
          </h2>
        </Reveal>
        <Reveal variant="up" delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Um pagamento. Acesso para sempre. Milhares de doramas dublados esperando
            por você agora mesmo.
          </p>
        </Reveal>
        <Reveal variant="scale" delay={0.2}>
          <div className="mt-10 flex flex-col items-center gap-5">
            <CtaButton className="w-full text-lg sm:w-auto">
              SIM, QUERO ASSISTIR TUDO POR R$10
            </CtaButton>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <InfinityIcon className="h-4 w-4 text-success" /> Acesso vitalício
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BadgeCheck className="h-4 w-4 text-success" /> Pagamento único
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-success" /> 7 dias de garantia
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
