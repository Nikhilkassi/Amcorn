'use client'

import { useEffect, useRef } from 'react'
import { CheckCircle2 } from 'lucide-react'

const WHY_CARDS = [
  {
    title: 'Built only for critical environments',
    body: 'AMCORN does not clean offices. Every piece of training, equipment, protocol, and technology we operate exists for one purpose: keeping regulated, high-stakes technology and life-critical infrastructure clean, compliant, and running.',
  },
  {
    title: 'Your environment never goes unmonitored',
    body: 'Our IoT sensors stay in your facility between every scheduled clean. You have real-time visibility of particulate levels, temperature, and humidity — and automatic ML dispatch if conditions breach threshold. No other cleaning company does this.',
  },
  {
    title: 'We clean on data, not on a calendar',
    body: "Our machine learning engine analyses sensor telemetry, occupancy patterns, and service history to recommend the right intervention at the right time. Calendar-based cleaning programmes fail critical environments. Data-driven ones don't.",
  },
  {
    title: 'Documentation built for your auditor, not your inbox',
    body: 'Every clean produces a structured, tamper-evident compliance report within 24 hours — formatted for Uptime Institute, ISO 27001, PCI DSS, MHRA, and CQC requirements. A dossier your auditor can act on, not a signed timesheet.',
  },
  {
    title: 'Security clearance. Handled entirely by us.',
    body: 'We maintain a DV and SC-cleared operative pool because our clients require it. Clearance applications, renewals, and NSV compliance are managed by AMCORN. You receive the documentation. None of the overhead.',
  },
  {
    title: 'Every site. One platform.',
    body: 'One portal, one account manager, one consolidated compliance programme across every facility on contract. No chasing contacts. No disconnected reporting. Full multi-site visibility from a single dashboard.',
  },
]

export function WhyAmcornSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const cards = Array.from(section.querySelectorAll<HTMLElement>('.why-card-reveal'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          cards.forEach((card) => card.classList.add('is-visible'))
          observer.disconnect()
        })
      },
      { threshold: 0.18 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-[var(--color-bg-surface)] border-y border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">Why AMCORN</p>
          <h2 className="text-4xl font-black tracking-tight">
            We built the thing nobody else<br />bothered to build.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CARDS.map((card, index) => (
            <div
              key={card.title}
              className={`why-card-reveal why-card-delay-${index} glass rounded-2xl p-6 hover:border-[var(--color-text-muted)] transition-colors duration-200`}
            >
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 size={16} className="text-[var(--color-green)] flex-shrink-0 mt-0.5" />
                <h3 className="font-bold text-white text-sm">{card.title}</h3>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed pl-7">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
