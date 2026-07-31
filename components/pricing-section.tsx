import { Check, Infinity as InfinityIcon } from 'lucide-react'
import { Reveal } from './reveal'
import { CtaButton } from './cta-button'

const basicFeatures = [
  'Acesso vitalício ao acervo completo',
  'Milhares de doramas 100% dublados',
  'Sem anúncios e sem mensalidade',
  'Assista em qualquer dispositivo',
]

export function PricingSection() {
  return (
    <section id="planos" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/20 blur-[130px]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal variant="blur" className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Um preço que parece{' '}
            <span className="text-primary">erro de digitação.</span>
          </h2>
          <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">
            Escolha seu acesso. Pague uma única vez. Assista para sempre.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 flex max-w-md items-stretch justify-center">
          {/* MAIN PLAN */}
          <Reveal variant="up" className="w-full">
            <div className="relative flex h-full flex-col rounded-[28px] border border-border bg-card p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Acesso Vitalício
              </p>

              <div className="mt-6">
                <p className="text-sm text-muted-foreground">
                  Você pagaria mais de
                </p>
                <p className="font-display text-2xl font-bold text-muted-foreground line-through decoration-primary/70">
                  R$200/mês
                </p>
              </div>

              <div className="mt-4 flex items-end gap-2">
                <span className="text-base text-muted-foreground">Hoje apenas</span>
              </div>
              <div className="flex items-end gap-1">
                <span className="font-display text-2xl font-bold text-foreground">
                  R$
                </span>
                <span className="font-display text-6xl font-extrabold leading-none tracking-tight text-foreground">
                  10
                </span>
              </div>
              <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-success">
                <InfinityIcon className="h-4 w-4" /> Pagamento único • Acesso vitalício
              </p>

              <ul className="mt-8 space-y-3">
                {basicFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/15">
                      <Check className="h-3.5 w-3.5 text-success" />
                    </span>
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-1 items-end">
                <CtaButton href="https://kiwify.com.br" className="w-full">QUERO LIBERAR MEU ACESSO</CtaButton>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
