'use client'

import { motion } from 'motion/react'
import { Star, BadgeCheck, Infinity as InfinityIcon } from 'lucide-react'
import { CtaButton } from './cta-button'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36">
      {/* cinematic backdrop */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero-bg.png"
          alt=""
          aria-hidden="true"
          width={1024}
          height={1024}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </div>
      {/* soft glow accent (single, modest blur to keep compositor memory low) */}
      <div className="pointer-events-none absolute -left-16 top-24 -z-10 h-56 w-56 rounded-full bg-primary/25 blur-[70px]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-noise opacity-[0.04]" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24">
        {/* LEFT */}
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-5 inline-flex max-w-fit items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground lg:mx-0"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Chega de ser explorada por apps que cobram por episódio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Pare de gastar{' '}
            <span className="text-primary">R$10 a cada nova série.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
          >
            Destrave o acesso <strong className="text-foreground">vitalício</strong> a
            todos os Doramas e Minisséries que você ama por um único pagamento de{' '}
            <strong className="text-foreground">R$10</strong>. Assista aos
            lançamentos mais quentes, totalmente dublados em português, sem anúncios
            e sem mensalidades.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col items-center gap-4 lg:items-start"
          >
            <CtaButton className="w-full sm:w-auto">
              QUERO LIBERAR MEU ACESSO AGORA
            </CtaButton>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground lg:justify-start">
              <span className="inline-flex items-center gap-1.5">
                <InfinityIcon className="h-4 w-4 text-success" /> Acesso vitalício
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BadgeCheck className="h-4 w-4 text-success" /> Pagamento único
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="flex text-[#e5c07b]">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </span>
                +12 mil assinantes
              </span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — TV mockup + floating posters */}
        <HeroVisual />
      </div>
    </section>
  )
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-md lg:max-w-none"
    >
      {/* glow behind TV */}
      <div className="absolute inset-x-10 top-10 -z-10 h-3/4 rounded-[32px] bg-primary/20 blur-[60px]" />

      {/* TV / device frame */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0d0d] p-2 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]">
        <div className="relative h-full w-full overflow-hidden rounded-[20px]">
          <img
            src="/images/poster-romance-1.png"
            alt="Cena de um dorama de romance em destaque no catálogo DoraPlay"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                Em alta agora
              </p>
              <p className="font-display text-lg font-bold">Chuva de Amor</p>
              <p className="text-[11px] text-muted-foreground">Dublado • Ep. 1</p>
            </div>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-black shadow-lg">
              <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4 fill-current">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* floating poster top-right */}
      <div className="animate-float-slow absolute -right-3 -top-8 w-24 overflow-hidden rounded-xl border border-white/10 shadow-2xl sm:w-28">
        <img
          src="/images/poster-billionaire-1.png"
          alt="Pôster de dorama sobre bilionários"
          className="h-full w-full object-cover"
        />
      </div>

      {/* floating poster mid-left (kept clear of the caption) */}
      <div className="animate-float-slower absolute -left-6 top-1/4 w-20 overflow-hidden rounded-xl border border-white/10 shadow-2xl sm:w-24">
        <img
          src="/images/poster-chinese-1.png"
          alt="Pôster de drama histórico chinês"
          className="h-full w-full object-cover"
        />
      </div>

      {/* glass stat card */}
      <div className="glass animate-float-slow absolute -bottom-6 right-2 rounded-2xl px-4 py-3 shadow-xl">
        <p className="font-display text-xl font-extrabold text-success">+3.000</p>
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
          títulos dublados
        </p>
      </div>
    </motion.div>
  )
}
