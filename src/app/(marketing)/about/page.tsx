import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { COMPLIANCE_CREDENTIALS } from '@/lib/mockData'

export const metadata = {
  title: 'About AMCORN | UK Critical Environment Cleaning Platform',
  description: "AMCORN is the UK's specialist critical environment cleaning and compliance platform — serving data centres, life sciences facilities, and healthcare environments with IoT monitoring, ML dispatch, and audit-ready documentation.",
}

const sectorCards = [
  {
    title: 'Data Centres',
    body: 'Live since launch. IoT-monitored, Uptime Institute-ready, DV-cleared. Protecting colocation operators, hyperscale campuses, AI compute facilities, and government infrastructure.',
  },
  {
    title: 'Life Sciences',
    body: 'Expanding H2 2026. GMP-documented, MHRA-aligned, ISO 14644 classified. For pharmaceutical manufacturers, biotech facilities, and CDMO environments.',
    badge: '2026',
  },
  {
    title: 'Healthcare',
    body: 'Expanding 2026. CQC-structured, IPC-aligned, HTM-referenced. For surgical treatment centres, diagnostic imaging facilities, and private hospital groups.',
    badge: '2026',
  },
]

const credentials = [
  ...COMPLIANCE_CREDENTIALS,
  {
    badge: 'EU GMP Annex 1 (in progress)',
    title: 'Sterile Manufacturing Contamination Control',
    description: 'AMCORN is extending its documentation model into GMP-regulated life sciences environments with procedures aligned to Annex 1 contamination control expectations.',
  },
  {
    badge: 'NHS National Standards 2021 (in progress)',
    title: 'Healthcare Cleanliness Standard',
    description: 'AMCORN is aligning healthcare cleaning records to the NHS National Standards of Healthcare Cleanliness 2021 for CQC-registered environments.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-[var(--nav-h)]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <section className="mb-20 max-w-4xl">
          <h1 className="mb-6 text-5xl font-black tracking-tight">
            We built the compliance platform that critical environments actually need.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)]">
            AMCORN was founded on a simple observation: the environments with the most to lose from contamination were being cleaned by companies with the least ability to document it. We built the alternative.
          </p>
        </section>

        <section className="mb-20 grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-4xl font-black tracking-tight">What we saw. What we built.</h2>
          </div>
          <div className="space-y-5 text-[var(--color-text-secondary)] leading-relaxed">
            <p>
              Data centres, pharmaceutical cleanrooms, and clinical facilities share a common problem. The consequences of contamination are severe — thermal events, batch failures, CQC enforcement notices, audit non-conformances. But the cleaning supply chain serving these environments was built for offices, not for regulated infrastructure.
            </p>
            <p>
              Cleaning rotas. Signed timesheets. Calendar-based schedules with no visibility of what was actually happening in the environment between visits. No sensor data. No ML-predicted intervention. No documentation that could survive a serious audit.
            </p>
            <p>
              AMCORN was built to fix this. We developed an IoT sensor network, a machine learning dispatch engine, a digital compliance portal, and a certified operative model — and wrapped them around a cleaning programme designed specifically for regulated, high-stakes environments. We started in data centres. We are now expanding into life sciences and healthcare.
            </p>
          </div>
        </section>

        <section className="mb-20 grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-4xl font-black tracking-tight">Technology first. Cleaning second.</h2>
          </div>
          <div>
            <p className="mb-5 text-[var(--color-text-secondary)] leading-relaxed">
              Most cleaning companies lead with their people. We lead with our platform — because the platform is what makes our people&apos;s work auditable, predictable, and defensible. The IoT sensors, the ML engine, the compliance portal, and the operative certification model are not marketing. They are the operating system that every clean runs on.
            </p>
            <Link
              href="/technology"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-secondary)] hover:text-white transition-colors cursor-pointer"
            >
              See how the platform works <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        <section className="mb-20">
          <div className="mb-10">
            <h2 className="text-4xl font-black tracking-tight">One operating model. Applied to three critical sectors.</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {sectorCards.map((card) => (
              <div key={card.title} className="glass rounded-2xl p-6 hover:border-[var(--color-text-muted)] transition-colors duration-200">
                <div className="mb-4 flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white">{card.title}</h3>
                  {card.badge && (
                    <span className="brand-mono border border-[var(--line)] bg-[var(--ink)] px-2 py-1 text-[10px] text-[var(--grey-2)]">
                      {card.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-black tracking-tight">The credentials that underpin everything we do.</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {credentials.map((credential) => (
              <div key={credential.badge} className="glass rounded-2xl p-6 hover:border-[var(--color-text-muted)] transition-colors duration-200">
                <div className="mb-4 inline-flex items-center rounded-full border border-[rgba(230,57,70,0.3)] bg-[var(--color-bg-elevated)] px-2.5 py-1 text-xs font-bold text-[var(--color-accent)]">
                  {credential.badge}
                </div>
                <h3 className="mb-2 text-sm font-bold text-white">{credential.title}</h3>
                <p className="text-xs leading-relaxed text-[var(--color-text-secondary)]">{credential.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 hero-grid-bg opacity-30 pointer-events-none" aria-hidden />
            <div className="relative">
              <h2 className="mb-4 text-4xl font-black tracking-tight">Work with us.</h2>
              <p className="mx-auto mb-8 max-w-lg text-[var(--color-text-secondary)]">
                If you operate a critical environment and you need a cleaning programme that produces evidence, not paperwork — we should talk.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-accent text-white font-semibold hover:opacity-90 transition-opacity cursor-pointer"
              >
                Request a Site Assessment <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
