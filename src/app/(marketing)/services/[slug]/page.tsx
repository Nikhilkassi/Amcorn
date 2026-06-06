import { notFound } from 'next/navigation'
import { SERVICES } from '@/lib/mockData'
import { ServiceCard } from '@/components/marketing/ServiceCard'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: `${service.name} | AMCORN`,
    description: service.description,
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) notFound()

  const related = SERVICES.filter((s) => s.id !== service.id).slice(0, 3)

  return (
    <div className="pt-[var(--nav-h)]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-[rgba(230,57,70,0.1)] text-[var(--color-accent)] border border-[rgba(230,57,70,0.2)]">
                {service.techLabel}
              </span>
              <span className="text-xs text-[var(--color-text-muted)]">{service.scopeLabel}</span>
            </div>
            <h1 className="text-5xl font-black tracking-tight mb-6">{service.name}</h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-10">{service.description}</p>
            <h2 className="text-xl font-bold mb-5">What&apos;s included</h2>
            <ul className="space-y-3 mb-10">
              {service.features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[var(--color-green)] flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">{f}</span>
                </li>
              ))}
            </ul>
            <div className="glass rounded-2xl p-6">
              <p className="text-sm font-semibold text-white mb-2">Every visit includes a digital compliance report</p>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Delivered within 24 hours. Particle counts, operative records, photographic evidence, ISO classification - formatted for Uptime Institute, ISO 27001, and PCI DSS audits.
              </p>
            </div>
          </div>

          <div>
            <div className="glass rounded-2xl p-6 sticky top-[calc(var(--nav-h)+24px)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-2">Get a quote</p>
              <h3 className="text-lg font-bold text-white mb-3">Request a site assessment</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-6">
                Tell us about your facility and we&apos;ll respond within one business day. No obligation, no sales calls without permission.
              </p>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl gradient-accent text-white text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
              >
                Request a Site Assessment <ArrowRight size={14} />
              </Link>
              <div className="mt-4 pt-4 border-t border-[var(--color-border)] space-y-2">
                {['ISO-14644 certified', 'DV-cleared operatives available', '24hr compliance report delivery'].map((b) => (
                  <div key={b} className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
                    <CheckCircle2 size={12} className="text-[var(--color-green)]" /> {b}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.map((s) => <ServiceCard key={s.id} service={s} />)}
          </div>
        </div>
      </div>
    </div>
  )
}
