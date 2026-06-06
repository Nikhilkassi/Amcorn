'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PROCESS_STEPS } from '@/lib/mockData'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}
const EASE = [0.22, 1, 0.36, 1] as const
const stepVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

export function ProcessTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-8%' })

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="kicker mb-3">Onboarding</p>
          <h2 className="text-4xl font-black">From survey to live in <span className="text-gradient-accent">5 steps</span></h2>
        </div>
        <span className="brand-mono text-[var(--grey-2)]">05 / PROCESS</span>
      </div>

      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative"
      >
        {/* Connector line */}
        <div className="hidden md:block absolute top-8 left-[calc(10%+16px)] right-[calc(10%+16px)] h-px bg-[var(--line)]" aria-hidden />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {PROCESS_STEPS.map((step) => (
            <motion.div key={step.step} variants={stepVariant} className="ticked relative flex flex-col border border-[var(--line)] bg-[var(--panel)] p-5">
              <div className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center border border-[var(--line-strong)] bg-[var(--ink)]">
                <span className="brand-mono text-[var(--color-accent)]">{step.step}</span>
              </div>
              <h3 className="font-black text-white mb-3">{step.title}</h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
