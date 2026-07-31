import { Reveal } from './reveal'

export function EmotionalSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal variant="scale" className="order-2 lg:order-1">
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[32px] bg-gradient-to-tr from-primary/20 to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-[28px] border border-border">
              <img
                src="/images/emotional-frustrated.png"
                alt="Mulher frustrada olhando para o celular à noite no sofá"
                className="aspect-[4/5] w-full object-cover sm:aspect-square"
              />
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal variant="blur">
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Eu sei exatamente o que acontece com você
              <span className="text-primary">...</span>
            </h2>
          </Reveal>

          <Reveal variant="up" delay={0.1}>
            <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Você encontra um dorama incrível, se apaixona pela história... e no
                melhor momento aparece aquele aviso:{' '}
                <span className="font-semibold text-foreground">
                  &ldquo;pague R$10 para desbloquear o próximo episódio&rdquo;.
                </span>
              </p>
              <p>
                Aí vem o próximo. E o próximo. Sem perceber, você já gastou{' '}
                <span className="font-semibold text-accent">
                  mais de R$200 em episódios soltos
                </span>{' '}
                — e continua sem ter nada de verdade nas mãos.
              </p>
              <p>
                É cansativo, é frustrante e parece que esses apps foram feitos só
                para{' '}
                <span className="font-semibold text-foreground">
                  sugar seu dinheiro pouco a pouco.
                </span>{' '}
                Você merece assistir em paz.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
