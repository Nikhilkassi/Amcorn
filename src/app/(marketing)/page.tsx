import { HeroSection } from '@/components/marketing/HeroSection'
import { ScrollingTicker } from '@/components/marketing/ScrollingTicker'
import { ServiceCard } from '@/components/marketing/ServiceCard'
import { ProcessTimeline } from '@/components/marketing/ProcessTimeline'
import { MethodMediaSection } from '@/components/marketing/MethodMediaSection'
import { TrustProofSection } from '@/components/marketing/TrustProofSection'
import { SERVICES, CASE_STUDIES, TARGET_MARKETS } from '@/lib/mockData'
import Link from 'next/link'
import { ArrowUpRight, CheckCircle2, Download, FileCheck2, LockKeyhole, PoundSterling, ShieldCheck } from 'lucide-react'

export const metadata = {
  title: 'AMCORN - Critical Environment Cleaning | Data Centres · AI Facilities · UK',
  description: 'ISO-14644 certified specialist cleaning for UK data centres, server rooms and AI compute. IoT-monitored. DV-cleared. Digital compliance reports within 24 hours.',
}

export default function HomePage() {
  const proofStrip = [
    { icon: FileCheck2, label: 'Supplier pack', value: 'RAMS, COSHH, insurance, method statement' },
    { icon: LockKeyhole, label: 'Reference path', value: 'Named references released after mutual NDA' },
    { icon: PoundSterling, label: 'Budget signal', value: 'Indicative scope and cost route after assessment' },
    { icon: ShieldCheck, label: 'Secure access', value: 'Clearance requirements confirmed before mobilisation' },
  ]

  return (
    <>
      <HeroSection />
      <ScrollingTicker />

      <section className="border-b border-[var(--line)] bg-[var(--ink)]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-[var(--line)] px-6 md:grid-cols-4 md:divide-x md:divide-y-0">
          {proofStrip.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex gap-3 py-5 md:px-4">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center border border-[var(--line)] bg-[var(--panel)]">
                <Icon size={16} className="text-[var(--red-bright)]" />
              </span>
              <span>
                <span className="brand-mono block text-[var(--grey-2)]">{label}</span>
                <span className="block text-sm leading-relaxed text-[var(--grey-1)]">{value}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">Services</p>
            <h2 className="text-4xl font-black tracking-tight max-w-2xl">
              Every service built for environments that{' '}
              <span className="text-gradient-accent">cannot afford failure</span>
            </h2>
            <p className="mt-4 max-w-2xl text-[var(--grey-1)]">
              From raised floor plenum work to active equipment and secure facilities, each discipline is scoped around risk, access, documentation, and continuity.
            </p>
          </div>
          <Link
            href="/services"
            className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-secondary)] hover:text-white transition-colors cursor-pointer flex-shrink-0"
          >
            All services <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} service={s} featured={i === 0} />
          ))}
        </div>
      </section>

      <MethodMediaSection />

      {/* Why AMCORN differentiators */}
      <section className="py-24 bg-[var(--color-bg-surface)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">Why AMCORN</p>
            <h2 className="text-4xl font-black tracking-tight">
              We built the thing nobody else<br />bothered to build.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Built for one environment only', body: 'AMCORN does not clean offices. Every piece of training, equipment, protocol, and technology exists for one purpose: keeping critical technology infrastructure clean and running.' },
              { title: 'IoT monitoring between every visit', body: "Most cleaning companies leave when the job is done. AMCORN's IoT sensors stay. You have real-time visibility of your environment between every scheduled clean - and automatic dispatch if conditions deteriorate." },
              { title: 'ML that predicts problems before they happen', body: 'Our machine learning engine analyses sensor telemetry, occupancy patterns, and service history to recommend the right intervention at the right time. You stop cleaning on a calendar and start cleaning on data.' },
              { title: 'Documentation you can use in any audit', body: 'Every clean produces a compliance report designed to satisfy Uptime Institute, ISO 27001, PCI DSS, and insurer requirements. A structured, tamper-evident dossier - not a signed timesheet.' },
              { title: 'Security clearance managed end to end', body: 'We maintain a DV and SC-cleared operative pool because our clients require it. Clearance applications, renewals, and NSV compliance are handled by AMCORN - not handed back to you.' },
              { title: 'Multi-site, one portal', body: 'For operators with multiple facilities: one portal, one account manager, one consolidated compliance programme. No chasing multiple contacts, no disconnected reporting.' },
            ].map((d) => (
              <div key={d.title} className="glass rounded-2xl p-6 hover:border-[var(--color-text-muted)] transition-colors duration-200">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 size={16} className="text-[var(--color-green)] flex-shrink-0 mt-0.5" />
                  <h3 className="font-bold text-white text-sm">{d.title}</h3>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed pl-7">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustProofSection />

      {/* Case studies */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">Results</p>
          <h2 className="text-4xl font-black tracking-tight">Proven across every critical sector</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((cs) => (
            <div key={cs.client} className="glass rounded-2xl p-6">
              <div className="mb-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">{cs.sector}</span>
              </div>
              <div className="mb-4">
                <span className="text-5xl font-black text-gradient-accent">{cs.metric}</span>
                <span className="ml-2 text-sm text-[var(--color-text-secondary)]">{cs.metricLabel}</span>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">{cs.description}</p>
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-xs font-semibold text-[var(--color-text-muted)]">{cs.client}</p>
                <span className="brand-mono border border-[var(--line)] px-2 py-1 text-[10px] text-[var(--grey-2)]">Evidence under NDA</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/case-studies" className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-secondary)] hover:text-white transition-colors cursor-pointer">
            Read full case studies <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      {/* Who we serve */}
      <section className="py-24 bg-[var(--color-bg-surface)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">Who we serve</p>
            <h2 className="text-4xl font-black tracking-tight">Built for operators who cannot afford failure</h2>
            <p className="text-[var(--color-text-secondary)] mt-4 max-w-2xl mx-auto">
              AMCORN works with facilities, infrastructure, and operations teams responsible for keeping critical technology infrastructure running 24/7/365.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TARGET_MARKETS.map((m) => (
              <div key={m.sector} className="glass rounded-xl p-5 hover:border-[var(--color-text-muted)] transition-colors duration-200">
                <p className="font-semibold text-white text-sm mb-2">{m.sector}</p>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline />

      {/* CTA band */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 hero-grid-bg opacity-30 pointer-events-none" aria-hidden />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-4">Get started</p>
            <h2 className="text-4xl font-black tracking-tight mb-4">
              Request a site assessment
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-8 max-w-lg mx-auto">
              Tell us about your facility and we&apos;ll respond within one business day with a proposed scope and indicative pricing. No obligation, no sales calls without permission.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-accent text-white font-semibold hover:opacity-90 transition-opacity cursor-pointer"
              >
                Request a Site Assessment <ArrowUpRight size={16} />
              </Link>
              <a
                href="/downloads/amcorn-procurement-checklist.txt"
                download
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[var(--color-border)] text-[var(--color-text-secondary)] font-semibold hover:text-white hover:border-[var(--color-text-muted)] transition-colors cursor-pointer"
              >
                Download Checklist <Download size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
