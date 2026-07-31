'use client'

import { Play } from 'lucide-react'
import { catalogRows, type Poster } from '@/lib/catalog'
import { Reveal } from './reveal'

export function CatalogSection() {
  return (
    <section id="catalogo" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-[130px]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal variant="blur" className="max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            O catálogo
          </p>
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Um universo de histórias{' '}
            <span className="text-primary">esperando por você.</span>
          </h2>
          <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">
            Role para o lado e descubra só uma amostra do que está te esperando lá
            dentro.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 space-y-10">
        {catalogRows.map((row, i) => (
          <PosterRow key={row.category} category={row.category} items={row.items} index={i} />
        ))}
      </div>
    </section>
  )
}

function PosterRow({
  category,
  items,
  index,
}: {
  category: string
  items: Poster[]
  index: number
}) {
  return (
    <div>
      <div className="mx-auto mb-4 max-w-6xl px-4 sm:px-6">
        <h3 className="font-display text-lg font-bold sm:text-xl">
          {category}
        </h3>
      </div>
      <div className="hide-scrollbar flex gap-4 overflow-x-auto px-4 pb-4 sm:px-6 [scroll-padding-left:1rem]">
        {items.map((p, i) => (
          <PosterCard key={`${category}-${p.src}-${i}`} poster={p} priority={index === 0 && i < 4} />
        ))}
        <div className="w-2 shrink-0" aria-hidden="true" />
      </div>
    </div>
  )
}

function PosterCard({ poster, priority }: { poster: Poster; priority?: boolean }) {
  return (
    <div className="group relative aspect-[2/3] w-36 shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-xl transition-all duration-300 will-change-transform hover:z-10 hover:-translate-y-2 hover:scale-[1.06] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] sm:w-44">
      <img
        src={poster.src || '/placeholder.svg'}
        alt={`Pôster do dorama ${poster.title}`}
        loading={priority ? 'eager' : 'lazy'}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-80" />
      <div className="absolute inset-x-0 bottom-0 translate-y-2 p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
          <Play className="ml-0.5 h-4 w-4 fill-current" />
        </span>
        <p className="font-display text-sm font-bold leading-tight text-balance">
          {poster.title}
        </p>
        <p className="text-[11px] text-muted-foreground">Dublado • HD</p>
      </div>
    </div>
  )
}
