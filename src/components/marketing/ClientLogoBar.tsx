const CLIENT_SLOTS = [
  { label: 'Tier III Colocation Operator', width: 'w-[148px]' },
  { label: 'Central Government Department', width: 'w-[176px]' },
  { label: 'AI Compute Facility', width: 'w-[124px]' },
  { label: 'Financial Services Infrastructure', width: 'w-[180px]' },
  { label: 'NHS Data Centre', width: 'w-[132px]' },
  { label: 'Telecommunications Exchange', width: 'w-[168px]' },
]

export function ClientLogoBar() {
  return (
    <section className="border-b border-[var(--line)] bg-[var(--ink)]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
          Trusted in critical environments across the UK
        </p>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {CLIENT_SLOTS.map(({ label, width }) => (
            <div key={label} className="min-w-0">
              <div className={`${width} h-10 max-w-full bg-[var(--grey-2)] opacity-40`} aria-hidden="true" />
              <p className="mt-3 text-xs leading-relaxed text-[var(--color-text-muted)]">{label}</p>
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
