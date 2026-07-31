'use client'

import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

type CtaButtonProps = {
  children: ReactNode
  href?: string
  className?: string
  size?: 'md' | 'lg'
}

export function CtaButton({
  children,
  href = '#planos',
  className,
  size = 'lg',
}: CtaButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        'group relative inline-flex items-center justify-center overflow-hidden rounded-full font-display font-bold tracking-wide text-primary-foreground',
        'bg-gradient-to-b from-[#ff3b30] to-[#e50914]',
        'btn-glow transition-all duration-300 will-change-transform hover:scale-[1.03] active:scale-[0.98]',
        size === 'lg' ? 'px-8 py-4 text-base sm:text-lg' : 'px-6 py-3 text-sm',
        className,
      )}
    >
      {/* sheen sweep */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative z-10 text-balance text-center">{children}</span>
    </a>
  )
}
