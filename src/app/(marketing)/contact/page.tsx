import { QuoteRequestForm } from '@/components/marketing/QuoteRequestForm'
import { FileText, Mail, Shield } from 'lucide-react'

export const metadata = {
  title: 'Request a Site Assessment | AMCORN Critical Environment Cleaning',
  description: 'Request a site assessment for your data centre, pharmaceutical cleanroom, or healthcare facility. AMCORN responds within one business day. No obligation.',
}

export default function ContactPage() {
  return (
    <div className="pt-[var(--nav-h)]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left: info */}
          <div className="min-w-0 lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">Get in touch</p>
            <h1 className="text-4xl font-black tracking-tight mb-4">
              Request a site assessment
            </h1>
            <p className="mb-8 max-w-xl text-[var(--color-text-secondary)] leading-relaxed">
              Tell us about your facility and we&apos;ll respond within one business day with a proposed scope and indicative pricing. No obligation, no sales calls without permission.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: Mail,     label: 'info@amcorn.com',                       desc: 'General enquiries and assessment requests' },
                { icon: FileText, label: 'Supplier pack on request',              desc: 'RAMS, COSHH, insurance schedule, onboarding documents' },
                { icon: Shield,   label: 'References after mutual NDA',           desc: 'Named references handled during procurement' },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-bg-elevated)] border border-[var(--color-border)] flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-[var(--color-text-secondary)]" />
                  </div>
                  <div className="min-w-0">
                    <p className="break-words text-sm text-white">{label}</p>
                    <p className="break-words text-xs leading-relaxed text-[var(--color-text-muted)]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust signals */}
            <div className="glass rounded-xl p-5 space-y-3">
              {[
                'Response within 1 business day',
                'No sales calls without permission',
                'All enquiries treated confidentially',
                'DV-cleared enquiries handled separately',
              ].map((t) => (
                <div key={t} className="flex items-center gap-2.5">
                  <Shield size={12} className="text-[var(--color-green)] flex-shrink-0" />
                  <span className="text-xs text-[var(--color-text-secondary)]">{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3 glass rounded-2xl p-8">
            <p className="mb-6 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              Assessing a pharmaceutical or life sciences facility? Please select &apos;Life sciences or pharmaceutical facility&apos; above — our assessment process for GMP environments differs from standard critical environment scoping.
            </p>
            <QuoteRequestForm />
          </div>
        </div>
      </div>
    </div>
  )
}
