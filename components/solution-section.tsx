import { Reveal } from './reveal'
import { posters } from '@/lib/catalog'
import { Search, Play } from 'lucide-react'

export function SolutionSection() {
  const grid = posters.slice(0, 8)
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal variant="blur" className="mx-auto max-w-2xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            A solução
          </p>
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Foi por isso que criamos nosso{' '}
            <span className="text-primary">Acervo Premium.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Um único lugar com <strong className="text-foreground">todos</strong> os
            seus Doramas e Minisséries favoritos — dublados, em alta qualidade e
            liberados para sempre. Sem paywall a cada episódio, sem mensalidade
            escondida.
          </p>
        </Reveal>

        <Reveal variant="scale" delay={0.1} className="mt-14">
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute -inset-4 -z-10 rounded-[36px] bg-gradient-to-tr from-primary/25 via-accent/10 to-transparent blur-3xl" />
            {/* App/library mockup */}
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0d0d] shadow-[0_50px_140px_-40px_rgba(0,0,0,0.95)]">
              {/* top bar */}
              <div className="flex items-center gap-3 border-b border-border px-5 py-4">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-white/15" />
                  <span className="h-3 w-3 rounded-full bg-white/15" />
                  <span className="h-3 w-3 rounded-full bg-white/15" />
                </div>
                <div className="ml-2 flex flex-1 items-center gap-2 rounded-full border border-border bg-white/5 px-3 py-1.5 text-xs text-muted-foreground">
                  <Search className="h-3.5 w-3.5" />
                  Buscar doramas, gêneros, atores...
                </div>
              </div>
              {/* poster grid */}
              <div className="grid grid-cols-4 gap-3 p-4 sm:gap-4 sm:p-6">
                {grid.map((p) => (
                  <div
                    key={p.src}
                    className="group relative aspect-[2/3] overflow-hidden rounded-lg border border-white/5"
                  >
                    <img
                      src={p.src || '/placeholder.svg'}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                      <Play className="h-6 w-6 fill-current text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
