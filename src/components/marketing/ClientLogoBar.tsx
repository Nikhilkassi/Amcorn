const CLIENT_SLOTS = [
  { code: 'COLO', label: 'Tier III Colocation Operator', detail: 'Multi-site data hall programme' },
  { code: 'GOV', label: 'Central Government Department', detail: 'Cleared secure facility access' },
  { code: 'AI', label: 'AI Compute Facility', detail: 'High-density GPU environment' },
  { code: 'FIN', label: 'Financial Services Infrastructure', detail: 'Live critical systems estate' },
  { code: 'NHS', label: 'NHS Data Centre', detail: 'Healthcare continuity environment' },
  { code: 'TEL', label: 'Telecommunications Exchange', detail: 'Network infrastructure site' },
]

export function ClientLogoBar() {
  return (
    <section className="border-b border-[var(--line)] bg-[var(--ink)]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
          Trusted in critical environments across the UK
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {CLIENT_SLOTS.map(({ code, label, detail }) => (
            <div
              key={label}
              className="min-w-0 border border-[var(--line)] bg-[rgba(255,255,255,0.025)] p-4 transition-colors duration-200 hover:border-[var(--line-strong)] hover:bg-[rgba(255,255,255,0.045)]"
            >
              <p className="brand-mono mb-4 inline-flex border border-[var(--line)] px-2 py-1 text-[10px] text-[var(--red-bright)]">
                {code}
              </p>
              <p className="min-h-[44px] text-sm font-semibold leading-snug text-[var(--paper)]">{label}</p>
              <p className="mt-3 text-xs leading-relaxed text-[var(--color-text-muted)]">{detail}</p>
            </div>
          ))}
        </div>
        <p className="mt-7 text-sm text-[var(--color-text-secondary)]">
          Client names available under NDA during procurement.
        </p>
      </div>
    </section>
  )
}
