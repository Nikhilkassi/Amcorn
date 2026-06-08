'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

type HomepageResult = {
  client: string
  sector: string
  metric: string
  metricLabel: string
  description: string
  href?: string
}

interface HomepageResultsSectionProps {
  results: HomepageResult[]
}

function splitMetric(metric: string) {
  const match = metric.match(/^(\d+)(.*)$/)
  if (!match) return { value: 0, suffix: metric }
  return { value: Number(match[1]), suffix: match[2] }
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

export function HomepageResultsSection({ results }: HomepageResultsSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null)
  const metrics = useMemo(() => results.map((result) => splitMetric(result.metric)), [results])
  const [displayValues, setDisplayValues] = useState(() => metrics.map((metric, index) => (index === 0 || index === 2 ? 0 : metric.value)))
  const [pulseZero, setPulseZero] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        const starts = metrics.map((metric, index) => (index === 0 || index === 2 ? 0 : metric.value))
        const targets = metrics.map((metric) => metric.value)
        const startTime = performance.now()
        const duration = 1200

        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1)
          const eased = easeOutCubic(progress)
          setDisplayValues(metrics.map((metric, index) => {
            if (index !== 0 && index !== 2) return metric.value
            return Math.round(starts[index] + (targets[index] - starts[index]) * eased)
          }))

          if (progress < 1) {
            requestAnimationFrame(tick)
          }
        }

        setPulseZero(true)
        requestAnimationFrame(tick)
        observer.disconnect()
      },
      { threshold: 0.25 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [metrics])

  return (
    <section ref={sectionRef} className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">Results</p>
        <h2 className="text-4xl font-black tracking-tight">Proven across every critical sector</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {results.map((result, index) => (
          <div key={result.client} className="glass rounded-2xl p-6">
            <div className="mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">{result.sector}</span>
            </div>
            <div className="mb-4">
              <span className={`inline-block text-5xl font-black text-gradient-accent ${index === 1 && pulseZero ? 'result-metric-pulse' : ''}`}>
                {index === 0 || index === 2 ? displayValues[index] : result.metric}
                {index === 0 || index === 2 ? metrics[index].suffix : ''}
              </span>
              <span className="ml-2 text-sm text-[var(--color-text-secondary)]">{result.metricLabel}</span>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">{result.description}</p>
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-xs font-semibold text-[var(--color-text-muted)]">{result.client}</p>
              <span className="brand-mono border border-[var(--line)] px-2 py-1 text-[10px] text-[var(--grey-2)]">Evidence under NDA</span>
            </div>
            {result.href && (
              <Link href={result.href} className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-secondary)] hover:text-white transition-colors cursor-pointer">
                Register interest <ArrowUpRight size={14} />
              </Link>
            )}
          </div>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-[var(--color-text-muted)]">
        Results shown are from AMCORN&apos;s active client programmes. Sector labels are illustrative. Named references and full data sets available under NDA during supplier assessment.
      </p>
      <div className="text-center mt-10">
        <Link href="/case-studies" className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-secondary)] hover:text-white transition-colors cursor-pointer">
          Read full case studies <ArrowUpRight size={14} />
        </Link>
      </div>
    </section>
  )
}
