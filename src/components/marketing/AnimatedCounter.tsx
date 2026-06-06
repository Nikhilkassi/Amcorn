'use client'
import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'
import type { Stat } from '@/types'

export function AnimatedCounter({ value, suffix = '', prefix = '', decimals = 0, label, duration = 2 }: Stat & { duration?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })
  const motionValue = useMotionValue(0)
  const displayValue = useTransform(motionValue, (v) => `${prefix}${v.toFixed(decimals)}${suffix}`)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(motionValue, value, {
      duration,
      ease: [0.16, 1, 0.3, 1] as const,
    })
    return controls.stop
  }, [isInView, value, duration, motionValue])

  return (
    <div ref={ref} className="flex min-w-[120px] flex-col gap-1">
      <motion.span className="font-[var(--font-display)] text-3xl font-black text-[var(--paper)] tabular-nums">
        {displayValue}
      </motion.span>
      <span className="brand-mono text-[var(--grey-2)]">{label}</span>
    </div>
  )
}
