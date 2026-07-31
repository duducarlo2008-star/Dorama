'use client'

import { useEffect, useState } from 'react'
import { Play } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CtaButton } from './cta-button'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-border bg-background/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-b from-[#ff3b30] to-[#e50914] shadow-[0_6px_20px_-6px_rgba(229,9,20,0.9)]">
            <Play className="h-4 w-4 fill-current text-primary-foreground" />
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight">
            Dora<span className="text-primary">Play</span>
          </span>
        </a>

        <CtaButton size="md" className="hidden sm:inline-flex">
          Liberar acesso
        </CtaButton>
      </div>
    </header>
  )
}
