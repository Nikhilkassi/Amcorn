import { CASE_STUDIES } from '@/lib/mockData'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Case Studies | AMCORN Critical Environment Cleaning',
  description: 'Representative AMCORN project outcomes for colocation, government, and AI compute environments, with named references handled during procurement.',
}

export default function CaseStudiesPage() {
  return (
    <div className="pt-[var(--nav-h)]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">Proof</p>
          <h1 className="text-5xl font-black tracking-tight mb-4">
            Results that speak for themselves
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
            Representative outcomes across the environments AMCORN is built for. Named references and supporting evidence can be released during procurement after mutual NDA approval.
          </p>
        </div>

        <div className="space-y-6 mb-20">
          {CASE_STUDIES.map((cs) => (
            <div key={cs.client} className="glass rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-2">{cs.sector}</p>
                  <div className="mb-2">
                    <span className="text-6xl font-black text-gradient-accent">{cs.metric}</span>
                    <span className="block text-sm text-[var(--color-text-secondary)] mt-1">{cs.metricLabel}</span>
                  </div>
                  <p className="text-xs font-semibold text-[var(--color-text-muted)] mt-4">{cs.client}</p>
                  <p className="brand-mono mt-3 inline-flex border border-[var(--line)] px-2 py-1 text-[10px] text-[var(--grey-2)]">Evidence under NDA</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">The Challenge</p>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{cs.challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">The Result</p>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{cs.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-[var(--color-text-muted)] text-center mb-12">
          Public client names are intentionally withheld for security and confidentiality. Reference calls, evidence summaries, and supplier documents are handled inside the procurement process.
        </p>

        <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 hero-grid-bg opacity-30 pointer-events-none" aria-hidden />
          <div className="relative">
            <h2 className="text-3xl font-black tracking-tight mb-4">Want results like these?</h2>
            <p className="text-[var(--color-text-secondary)] mb-8 max-w-lg mx-auto">
              Our team will survey your facility, benchmark current conditions, and show you exactly where IoT monitoring and certified cleaning can protect your uptime.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-accent text-white font-semibold hover:opacity-90 transition-opacity cursor-pointer"
            >
              Request a Site Assessment <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
