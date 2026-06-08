import Link from 'next/link'
import { PeakMark, Wordmark } from '@/components/brand/BrandMark'

const LINKS = {
  Services: [
    { label: 'Raised Floor Cleaning',        href: '/services/raised-floor-cleaning' },
    { label: 'Active Equipment Cleaning',     href: '/services/active-equipment-cleaning' },
    { label: 'CRAC/CRAH Unit Cleaning',       href: '/services/crac-crah-cleaning' },
    { label: 'Secure Facility Cleaning',      href: '/services/secure-government-defence' },
    { label: 'Post-Construction Clean',       href: '/services/post-construction-clean' },
    { label: 'Maintenance Programmes',        href: '/services/scheduled-maintenance' },
    { label: 'Life Sciences Cleaning',         href: '/services/life-sciences' },
    { label: 'Healthcare Facilities',          href: '/services/healthcare' },
    { label: 'GMP Cleanroom Audit',            href: '/contact' },
  ],
  Company: [
    { label: 'About AMCORN',                  href: '/about' },
    { label: 'Technology Platform',           href: '/technology' },
    { label: 'Case Studies',                  href: '/case-studies' },
    { label: 'Insights',                      href: '/insights' },
    { label: 'FAQ',                           href: '/faq' },
    { label: 'Contact',                       href: '/contact' },
  ],
  Portal: [
    { label: 'Portal Preview',                href: '/portal/dashboard' },
    { label: 'Request Portal Access',         href: '/contact' },
    { label: 'Platform Status',               href: '/technology' },
  ],
  Compliance: [
    { label: 'ISO 14644-1',                   href: '/technology' },
    { label: 'DV/SC Clearance',               href: '/technology' },
    { label: 'IEC 61340 ESD',                 href: '/technology' },
    { label: 'COSHH',                         href: '/technology' },
    { label: 'Cyber Essentials',              href: '/technology' },
    { label: 'Insurance Schedule',            href: '/contact' },
  ],
}

const COMPLIANCE_BADGES = [
  'ISO 14644',
  'ESD Safe',
  'DV Cleared',
  'Cyber Essentials',
  'IEC 61340',
  'GMP-Aligned',
  'CQC-Aware',
]

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
]

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--line)] bg-[var(--ink)]">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="mb-14">
          <Wordmark tone="red" className="w-full max-w-[680px]" />
        </div>
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <PeakMark className="h-8 w-8" />
              <span className="font-bold text-lg">AMCORN</span>
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed max-w-xs mb-6">
              The UK&apos;s critical environment compliance platform — IoT-monitored, ML-dispatched, audit-documented. Serving data centres, life sciences, and healthcare infrastructure.
            </p>
            {/* Compliance badges */}
            <div className="flex flex-wrap gap-2">
              {COMPLIANCE_BADGES.map((b) => (
                <span
                  key={b}
                  className="brand-mono border border-[var(--line)] bg-[var(--panel)] px-2 py-1 text-[10px] text-[var(--color-text-muted)]"
                >
                  {b}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-5">
              <span className="pulse-dot" />
              <span className="text-xs text-[var(--color-text-muted)]">Portal preview available</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([title, links]) => (
            <div key={title}>
              <p className="brand-mono text-[var(--color-text-muted)] mb-4">{title}</p>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors duration-150 cursor-pointer"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            &copy; {new Date().getFullYear()} AMCORN Ltd / Registered in England & Wales
          </p>
          <div className="flex items-center gap-4">
            {LEGAL_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="text-xs text-[var(--color-text-muted)] hover:text-white transition-colors cursor-pointer">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
