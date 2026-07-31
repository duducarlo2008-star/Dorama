'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'
import { Reveal } from './reveal'

const faqs = [
  {
    q: 'Preciso pagar de novo depois?',
    a: 'Não. É um único pagamento e o acesso é vitalício. Nada de mensalidade, nada de cobrança por episódio.',
  },
  {
    q: 'Os doramas são dublados em português?',
    a: 'Sim! Todo o acervo é 100% dublado em português para você assistir de forma confortável, sem precisar ler legendas.',
  },
  {
    q: 'Em quais dispositivos posso assistir?',
    a: 'Você assiste no celular, tablet, notebook ou na TV. Basta acessar sua conta e continuar de onde parou em qualquer aparelho.',
  },
  {
    q: 'Tem anúncios durante os episódios?',
    a: 'Nenhum. A experiência é limpa e sem propaganda, do primeiro ao último episódio.',
  },
  {
    q: 'Como funciona a garantia?',
    a: 'Você tem 7 dias para testar tudo. Se não gostar, é só pedir o reembolso e devolvemos 100% do valor.',
  },
  {
    q: 'Como recebo o acesso após o pagamento?',
    a: 'O acesso é liberado imediatamente após a confirmação do pagamento, direto no seu e-mail. Em poucos minutos você já está maratonando.',
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal variant="blur" className="text-center">
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Tudo que você precisa saber antes de liberar seu acesso.
          </p>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={item.q} variant="up" delay={i * 0.04}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    isOpen ? 'border-primary/40 bg-card' : 'border-border bg-white/[0.02]'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-semibold sm:text-lg">
                      {item.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border transition-transform duration-300 ${
                        isOpen ? 'rotate-45 bg-primary text-primary-foreground' : 'text-muted-foreground'
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-5 pb-5 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
