import Image from 'next/image'
import { ServiceCard } from '@/components/marketing/ServiceCard'
import { SERVICES } from '@/lib/mockData'

export const metadata = {
  title: 'Critical Environment Cleaning Services | AMCORN',
  description: 'Raised floor, active equipment, CRAC unit, secure facility and post-construction cleaning for UK data centres and technology infrastructure.',
}

export default function ServicesPage() {
  const buyingRoutes = [
    ['One-off remediation', 'For contamination events, construction handover, cooling degradation, or overdue specialist cleaning.'],
    ['Scheduled maintenance', 'Quarterly, biannual, or custom programmes with repeat reporting and operational cadence.'],
    ['Multi-site programme', 'Central account management, standardised reporting, and facility-level scope controls.'],
  ]

  return (
    <div className="pt-[var(--nav-h)]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">Six specialist disciplines</p>
            <h1 className="text-5xl font-black tracking-tight mb-4 max-w-3xl">
              Every service built for environments that{' '}
              <span className="text-gradient-accent">cannot afford failure</span>
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
              Six specialist disciplines. Each performed by certified operatives using ESD-safe equipment, environment-appropriate chemistry, and protocol-driven documentation - with monitoring recommendations between visits.
            </p>
          </div>
          <div className="media-frame aspect-[16/10] overflow-hidden">
            <Image
              src="/media/raised-floor-cleaning.jpg"
              alt="Cleanroom operative using HEPA equipment during raised floor cleaning in a data hall"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {buyingRoutes.map(([title, body]) => (
            <div key={title} className="border border-[var(--line)] bg-[var(--panel)] p-5">
              <p className="brand-mono mb-3 text-[var(--grey-2)]">Buying route</p>
              <h2 className="mb-2 text-lg font-black text-[var(--paper)]">{title}</h2>
              <p className="text-sm leading-relaxed text-[var(--grey-1)]">{body}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SERVICES.map((s) => <ServiceCard key={s.id} service={s} featured />)}
        </div>
      </div>
    </div>
  )
}
