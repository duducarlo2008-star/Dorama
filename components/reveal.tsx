'use client'

import { motion, type Variants } from 'motion/react'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  /** animation style */
  variant?: 'up' | 'blur' | 'scale'
  as?: 'div' | 'section' | 'li'
}

const variantsMap: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  },
  blur: {
    hidden: { opacity: 0, y: 24, filter: 'blur(14px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    show: { opacity: 1, scale: 1 },
  },
}

export function Reveal({
  children,
  className,
  delay = 0,
  variant = 'up',
  as = 'div',
}: RevealProps) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={variantsMap[variant]}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
