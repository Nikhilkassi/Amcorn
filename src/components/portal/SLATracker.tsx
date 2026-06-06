'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { SLACommitment } from '@/types'

const STATUS_COLOR: Record<SLACommitment['status'], string> = {
  GREEN: 'var(--color-green)',
  AMBER: 'var(--color-amber)',
  RED:   'var(--color-red)',
}

const RADIUS = 28
const CIRC = 2 * Math.PI * RADIUS

function SLARing({ sla }: { sla: SLACommitment }) {
  const [expanded, setExpanded] = useState(false)
  const [animated, setAnimated] = useState(false)
  const ref = useRef<SVGCircleElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 100)
    return () => clearTimeout(t)
  }, [])

  const offset = CIRC - (CIRC * (animated ? sla.compliancePercent : 0)) / 100

  return (
    <div>
      <button
        onClick={() => setExpanded((v) => !v)}
        className="group flex flex-col items-center gap-2 cursor-pointer focus:outline-none"
        aria-expanded={expanded}
      >
        <div className="relative w-[72px] h-[72px]">
          <svg viewBox="0 0 72 72" className="w-full h-full -rotate-90">
            <circle
              cx="36" cy="36"
              r={RADIUS}
              className="sla-ring-track"
            />
            <circle
              ref={ref}
              cx="36" cy="36"
              r={RADIUS}
              className="sla-ring-fill"
              stroke={STATUS_COLOR[sla.status]}
              strokeDasharray={CIRC}
              strokeDashoffset={offset}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-black text-white tabular-nums">
              {Math.round(sla.compliancePercent)}%
            </span>
          </div>
        </div>
        <p className="text-[11px] font-medium text-[var(--color-text-secondary)] group-hover:text-white transition-colors text-center leading-snug max-w-[80px]">
          {sla.name}
        </p>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden mt-2"
          >
            <div className="glass ticked p-4 text-xs">
              <div className="flex justify-between mb-1.5">
                <span className="text-[var(--color-text-muted)]">Target</span>
                <span className="text-white font-semibold">{sla.targetFrequencyPerMonth}× / month</span>
              </div>
              <div className="flex justify-between mb-1.5">
                <span className="text-[var(--color-text-muted)]">Actual</span>
                <span className="font-semibold" style={{ color: STATUS_COLOR[sla.status] }}>
                  {sla.actualCompletions}×
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--color-text-muted)]">Status</span>
                <span className="font-bold capitalize" style={{ color: STATUS_COLOR[sla.status] }}>
                  {sla.status}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function SLATracker({ slaCommitments }: { slaCommitments: SLACommitment[] }) {
  return (
    <div className="flex flex-wrap gap-6 justify-around">
      {slaCommitments.map((sla) => <SLARing key={sla.id} sla={sla} />)}
    </div>
  )
}
