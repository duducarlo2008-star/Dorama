import { Reveal } from './reveal'
import { Popcorn, Languages, Ban, Tv, Smartphone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Benefit = {
  icon: LucideIcon
  title: string
  desc: string
}

const benefits: Benefit[] = [
  {
    icon: Popcorn,
    title: 'Milhares de Doramas',
    desc: 'Um acervo gigante de séries coreanas, chinesas e minisséries para maratonar sem fim.',
  },
  {
    icon: Languages,
    title: '100% Dublado',
    desc: 'Tudo em português para você relaxar e curtir a história sem ler legenda.',
  },
  {
    icon: Ban,
    title: 'Sem anúncios',
    desc: 'Nada de propaganda interrompendo o momento mais emocionante do episódio.',
  },
  {
    icon: Tv,
    title: 'Qualidade Premium',
    desc: 'Imagem nítida em alta definição, com aquele visual de plataforma de cinema.',
  },
  {
    icon: Smartphone,
    title: 'Assista em qualquer lugar',
    desc: 'No celular, tablet, notebook ou TV. Sua maratona vai com você aonde for.',
  },
]

export function BenefitsSection() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal variant="blur" className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Tudo que você precisa em{' '}
            <span className="text-primary">um só acervo.</span>
          </h2>
          <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">
            Feito para quem ama dorama e cansou de ser cobrada a cada episódio.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} variant="up" delay={i * 0.06}>
              <BenefitCard {...b} />
            </Reveal>
          ))}
          <Reveal variant="up" delay={benefits.length * 0.06}>
            <div className="glass flex h-full flex-col justify-center rounded-2xl p-6">
              <p className="font-display text-4xl font-extrabold text-primary">
                R$10
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Um único pagamento hoje libera{' '}
                <span className="text-foreground">todos esses benefícios para sempre.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function BenefitCard({ icon: Icon, title, desc }: Benefit) {
  return (
    <div className="group glass h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 to-accent/10 ring-1 ring-inset ring-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <h3 className="font-display text-lg font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
    </div>
  )
}
