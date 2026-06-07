import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, FileCheck, ShieldCheck, Wifi } from 'lucide-react'
import { ServiceCard } from '@/components/marketing/ServiceCard'
import { SERVICES } from '@/lib/mockData'

export const metadata = {
  title: 'GMP Cleanroom & Life Sciences Cleaning | AMCORN',
  description: "AMCORN's IoT-monitored, protocol-documented cleaning expanding into pharmaceutical cleanrooms, biotech facilities, and GMP-regulated environments in 2026. Assessment programme now open.",
}

const featureCards = [
  {
    icon: Wifi,
    title: 'IoT Environmental Monitoring',
    body: 'Particulate counters, temperature, humidity, and differential pressure sensors — installed in your cleanroom and reporting continuously into your AMCORN portal. Real-time data between every scheduled clean. Threshold breach triggers automatic intervention dispatch.',
  },
  {
    icon: FileCheck,
    title: 'GMP-Structured Documentation',
    body: 'Every clean produces a completed batch record: operative ID, time, particle counts by zone, chemical lot numbers, deviations noted. Delivered digitally within 2 hours of clean completion. Formatted for your site master file and MHRA inspection readiness.',
  },
  {
    icon: ShieldCheck,
    title: 'Protocol-Driven Operative Model',
    body: 'Operatives trained and assessed against a written competency framework aligned to EU GMP Annex 1. Site-specific Written Cleaning Protocols reviewed with your QA team before first clean. Qualification records provided before any operative enters your controlled area.',
  },
]

const targetEnvironments = [
  'Pharmaceutical Manufacturing',
  'Biotech Research Facilities',
  'Medical Device Manufacturing',
  'CDMO / Contract Manufacturing',
  'Hospital Pharmacy Aseptic Suites',
  'University Research Labs',
  'ISO Class 5–8 Cleanrooms',
  'Grade A–D GMP Areas',
]

const launchSteps = [
  {
    step: '01',
    title: 'Cleanroom Readiness Audit',
    description: '4-hour site assessment. Written gap analysis against ISO 14644 and GMP Annex 1. Delivered within 5 working days.',
  },
  {
    step: '02',
    title: 'Protocol Development',
    description: 'Site-specific Written Cleaning Protocol drafted with your QA team. Reviewed, approved, version-controlled.',
  },
  {
    step: '03',
    title: 'Certified Programme Launch',
    description: 'IoT sensors installed. Operatives qualified. First certified clean completed with full batch record documentation.',
  },
]

const credentials = [
  'ISO 14644-1',
  'EU GMP Annex 1 2026',
  'MHRA-Aligned Protocols 2026',
  'ISO 9001',
  'COSHH Compliant',
  'ESD Safe',
  'Cyber Essentials',
]

export default function LifeSciencesServicePage() {
  const related = SERVICES.slice(0, 3)

  return (
    <div className="pt-[var(--nav-h)]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-20 grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-[rgba(230,57,70,0.1)] text-[var(--color-accent)] border border-[rgba(230,57,70,0.2)]">
                GMP-Aligned · 2026 Launch
              </span>
            </div>
            <h1 className="mb-6 max-w-3xl text-5xl font-black tracking-tight">
              Critical environment cleaning, now entering life sciences.
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)]">
              AMCORN&apos;s IoT monitoring and compliance documentation platform is expanding into GMP-regulated pharmaceutical cleanrooms, biotech research facilities, and medical device manufacturing environments. Assessment programme open now.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-accent text-white text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
              >
                Register Interest <ArrowRight size={14} />
              </Link>
              <Link
                href="/technology"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--color-border)] text-[var(--color-text-secondary)] text-sm font-semibold hover:text-white hover:border-[var(--color-text-muted)] transition-colors cursor-pointer"
              >
                How the platform works <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          <div className="media-frame aspect-[16/10] overflow-hidden">
            <Image
              src="/images/hero-life-sciences.jpg"
              alt="Operatives in cleanroom gowning suits working inside a pharmaceutical cleanroom"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
          </div>
        </div>

        <section className="mb-20 grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="kicker mb-4">The gap in the market</p>
            <h2 className="text-4xl font-black tracking-tight">
              GMP cleanrooms are cleaned by generalists. That is the problem.
            </h2>
          </div>
          <div className="space-y-5 text-[var(--color-text-secondary)] leading-relaxed">
            <p>
              Pharmaceutical and biotech facilities operating under EU GMP Annex 1 and ISO 14644 require cleaning to be performed to a written, version-controlled protocol — documented to batch record standard, evidenced with pre and post particle counts, and executable by operatives whose competency is formally assessed. The regulatory requirement is explicit. The available supply of cleaning providers who genuinely meet it is not.
            </p>
            <p>
              Most pharmaceutical sites either rely on in-house cleaning teams without independent certification, or contract generalist FM companies who list pharmaceutical cleaning as a service without the underpinning QMS integration, operative qualification framework, or real-time environmental monitoring that a MHRA inspection actually requires. AMCORN is building the specialist alternative.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <div className="mb-10">
            <p className="kicker mb-4">The platform, applied to life sciences</p>
            <h2 className="text-4xl font-black tracking-tight">The same technology. A new compliance layer.</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {featureCards.map(({ icon: Icon, title, body }) => (
              <div key={title} className="glass rounded-2xl p-6 hover:border-[var(--color-text-muted)] transition-colors duration-200">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-bg-elevated)] border border-[var(--color-border)]">
                  <Icon size={18} className="text-[var(--color-cta)]" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="mb-10">
            <p className="kicker mb-4">Target environments</p>
            <h2 className="text-4xl font-black tracking-tight">Built for GMP-regulated facilities</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {targetEnvironments.map((environment) => (
              <span
                key={environment}
                className="brand-mono border border-[var(--line)] bg-[var(--panel)] px-3 py-2 text-[10px] text-[var(--grey-1)]"
              >
                {environment}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="kicker mb-4">Assessment programme</p>
              <h2 className="text-4xl font-black tracking-tight">We are onboarding assessment clients now.</h2>
            </div>
            <div>
              <p className="mb-8 text-[var(--color-text-secondary)] leading-relaxed">
                AMCORN&apos;s life sciences cleaning programme launches in H2 2026. We are currently conducting Cleanroom Readiness Audits — a 4-hour site assessment that benchmarks your current cleaning operation against ISO 14644 and GMP Annex 1 requirements and produces a written gap analysis. Audit clients who proceed to a cleaning contract receive the audit fee credited against their first programme invoice.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-accent text-white text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
              >
                Request a Cleanroom Readiness Audit <ArrowRight size={14} />
              </Link>
              <p className="mt-3 text-xs text-[var(--color-text-muted)]">
                Audit fee: £950. Credited in full against first programme contract.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {launchSteps.map((step) => (
              <div key={step.step} className="ticked relative flex flex-col border border-[var(--line)] bg-[var(--panel)] p-5">
                <div className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center border border-[var(--line-strong)] bg-[var(--ink)]">
                  <span className="brand-mono text-[var(--color-accent)]">{step.step}</span>
                </div>
                <h3 className="mb-3 font-black text-white">{step.title}</h3>
                <p className="text-xs leading-relaxed text-[var(--color-text-secondary)]">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="mb-10">
            <p className="kicker mb-4">Applicable standards</p>
            <h2 className="text-4xl font-black tracking-tight">Credentials aligned to controlled environments</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {credentials.map((credential) => (
              <div key={credential} className="glass rounded-2xl p-5 hover:border-[var(--color-text-muted)] transition-colors duration-200">
                <div className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-[var(--color-bg-elevated)] text-[var(--color-accent)] border border-[rgba(230,57,70,0.3)]">
                  {credential}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="mb-8 text-2xl font-bold">Related Services</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {related.map((service) => <ServiceCard key={service.id} service={service} />)}
          </div>
        </section>

        <section>
          <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 hero-grid-bg opacity-30 pointer-events-none" aria-hidden />
            <div className="relative">
              <h2 className="mb-4 text-4xl font-black tracking-tight">Ready to assess your cleanroom?</h2>
              <p className="mx-auto mb-8 max-w-lg text-[var(--color-text-secondary)]">
                Tell us about your facility. We respond within one business day with a proposed audit scope. No obligation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-accent text-white font-semibold hover:opacity-90 transition-opacity cursor-pointer"
              >
                Request Assessment <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
