'use client'

import { useEffect, useState } from 'react'
import { Infinity as InfinityIcon } from 'lucide-react'

export function StickyCta() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/85 backdrop-blur-xl transition-all duration-300 sm:hidden ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="flex items-center gap-3 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <div className="shrink-0">
          <p className="font-display text-xl font-extrabold leading-none">
            R$10<span className="text-sm">,90</span>
          </p>
          <p className="inline-flex items-center gap-1 text-[10px] text-success">
            <InfinityIcon className="h-3 w-3" /> vitalício
          </p>
        </div>
        <a
          href="#planos"
          className="btn-glow flex-1 rounded-full bg-gradient-to-b from-[#ff3b30] to-[#e50914] px-4 py-3 text-center font-display text-sm font-bold text-primary-foreground active:scale-[0.98]"
        >
          LIBERAR MEU ACESSO
        </a>
      </div>
    </div>
  )
}
