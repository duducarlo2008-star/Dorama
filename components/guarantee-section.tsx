import { ShieldCheck } from 'lucide-react'
import { Reveal } from './reveal'

export function GuaranteeSection() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-[28px] border border-success/25 bg-card p-8 text-center sm:p-12">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-success/10 via-transparent to-transparent" />
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-success/15 ring-1 ring-inset ring-success/30">
              <ShieldCheck className="h-10 w-10 text-success" />
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              7 Dias de Garantia
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Teste o acervo completo sem medo. Se em até 7 dias você não amar a
              experiência, devolvemos{' '}
              <span className="font-semibold text-foreground">
                100% do seu dinheiro
              </span>
              . Simples assim — o risco é todo nosso.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
