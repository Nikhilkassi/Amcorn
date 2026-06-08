'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PeakMark, Wordmark } from '@/components/brand/BrandMark'

type NavItem = {
  href?: string
  label: string
  badge?: string
  muted?: boolean
}

const SERVICE_LINKS: NavItem[] = [
  { href: '/services/raised-floor-cleaning', label: 'Raised Floor Cleaning' },
  { href: '/services/active-equipment-cleaning', label: 'Active Equipment Cleaning' },
  { href: '/services/crac-crah-cleaning', label: 'CRAC / CRAH Unit Cleaning' },
  { href: '/services/secure-government-defence', label: 'Secure Facility Cleaning' },
  { href: '/services/post-construction-clean', label: 'Post-Construction Clean' },
  { href: '/services/scheduled-maintenance', label: 'Maintenance Programmes' },
  { label: 'Expanding 2026', muted: true },
  { href: '/services/life-sciences', label: 'Life Sciences Cleaning', badge: '2026' },
  { href: '/services/healthcare', label: 'Healthcare Facilities', badge: '2026' },
  { href: '/contact', label: 'GMP Cleanroom Audit', badge: 'From £950' },
]

const COMPANY_LINKS: NavItem[] = [
  { href: '/about', label: 'About' },
  { href: '/technology', label: 'Technology Platform' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/insights', label: 'Insights' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<'services' | 'company' | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const serviceActive = pathname.startsWith('/services')
  const companyActive = COMPANY_LINKS.some((link) => link.href === pathname)

  const renderDropdownLink = (item: NavItem) => {
    if (item.muted) {
      return (
        <li key={item.label} className="px-3 pb-1 pt-2">
          <span className="brand-mono text-[var(--color-text-muted)]">{item.label}</span>
        </li>
      )
    }

    return (
      <li key={`${item.href}-${item.label}`}>
        <Link
          href={item.href ?? '#'}
          onClick={() => setOpenMenu(null)}
          className={cn(
            'flex items-center justify-between gap-3 px-3 py-2 text-sm font-semibold transition-colors cursor-pointer',
            pathname === item.href
              ? 'bg-[var(--red)] text-[var(--paper)]'
              : 'text-[var(--color-text-secondary)] hover:bg-[var(--panel)] hover:text-white'
          )}
        >
          <span>{item.label}</span>
          {item.badge && (
            <span className="brand-mono shrink-0 border border-[var(--line)] px-1.5 py-0.5 text-[9px] text-[var(--grey-2)]">
              {item.badge}
            </span>
          )}
        </Link>
      </li>
    )
  }

  const renderMobileLink = (item: NavItem) => {
    if (item.muted) {
      return (
        <p key={item.label} className="brand-mono pt-2 text-[var(--color-text-muted)]">
          {item.label}
        </p>
      )
    }

    return (
      <Link
        key={`${item.href}-${item.label}`}
        href={item.href ?? '#'}
        onClick={() => setMobileOpen(false)}
        className="py-2.5 text-sm font-bold uppercase text-[var(--color-text-secondary)] hover:text-white transition-colors cursor-pointer"
      >
        <span className="inline-flex items-center gap-2">
          {item.label}
          {item.badge && (
            <span className="brand-mono border border-[var(--line)] px-1.5 py-0.5 text-[9px] text-[var(--grey-2)]">
              {item.badge}
            </span>
          )}
        </span>
      </Link>
    )
  }

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 border-b transition-all duration-300',
        scrolled
          ? 'bg-[rgba(5,5,5,0.92)] border-[var(--line-strong)]'
          : 'bg-[rgba(5,5,5,0.72)] border-[var(--line)]'
      )}
      style={{ height: 'var(--nav-h)' }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <PeakMark className="h-8 w-8 flex-shrink-0" />
          <Wordmark tone="red" className="h-7 w-auto transition-opacity group-hover:opacity-85" priority />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu('services')}
            onMouseLeave={() => setOpenMenu((current) => (current === 'services' ? null : current))}
          >
            <button
              type="button"
              onClick={() => setOpenMenu((current) => (current === 'services' ? null : 'services'))}
              onFocus={() => setOpenMenu('services')}
              className={cn(
                'inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold uppercase transition-colors duration-150 cursor-pointer',
                serviceActive
                  ? 'text-[var(--paper)] bg-[var(--red)]'
                  : 'text-[var(--grey-1)] hover:text-[var(--paper)] hover:bg-[var(--panel)]'
              )}
              aria-expanded={openMenu === 'services'}
              aria-haspopup="menu"
            >
              Services <ChevronDown size={13} />
            </button>
            <AnimatePresence>
              {openMenu === 'services' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.16 }}
                  className="absolute left-0 top-full mt-3 w-[330px] border border-[var(--line)] bg-[rgba(5,5,5,0.96)] p-2 shadow-2xl shadow-black/40"
                >
                  <ul>{SERVICE_LINKS.map(renderDropdownLink)}</ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/technology"
            className={cn(
              'px-3 py-2 text-xs font-bold uppercase transition-colors duration-150 cursor-pointer',
              pathname === '/technology'
                ? 'text-[var(--paper)] bg-[var(--red)]'
                : 'text-[var(--grey-1)] hover:text-[var(--paper)] hover:bg-[var(--panel)]'
            )}
          >
            Platform
          </Link>

          <Link
            href="/insights"
            className={cn(
              'px-3 py-2 text-xs font-bold uppercase transition-colors duration-150 cursor-pointer',
              pathname === '/insights'
                ? 'text-[var(--paper)] bg-[var(--red)]'
                : 'text-[var(--grey-1)] hover:text-[var(--paper)] hover:bg-[var(--panel)]'
            )}
          >
            Insights
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu('company')}
            onMouseLeave={() => setOpenMenu((current) => (current === 'company' ? null : current))}
          >
            <button
              type="button"
              onClick={() => setOpenMenu((current) => (current === 'company' ? null : 'company'))}
              onFocus={() => setOpenMenu('company')}
              className={cn(
                'inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold uppercase transition-colors duration-150 cursor-pointer',
                companyActive
                  ? 'text-[var(--paper)] bg-[var(--red)]'
                  : 'text-[var(--grey-1)] hover:text-[var(--paper)] hover:bg-[var(--panel)]'
              )}
              aria-expanded={openMenu === 'company'}
              aria-haspopup="menu"
            >
              Company <ChevronDown size={13} />
            </button>
            <AnimatePresence>
              {openMenu === 'company' && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.16 }}
                  className="absolute right-0 top-full mt-3 w-[250px] border border-[var(--line)] bg-[rgba(5,5,5,0.96)] p-2 shadow-2xl shadow-black/40"
                >
                  <ul>{COMPANY_LINKS.map(renderDropdownLink)}</ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/portal/dashboard"
            className="text-xs font-bold uppercase text-[var(--grey-1)] hover:text-[var(--paper)] transition-colors cursor-pointer"
          >
            Portal Preview
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-1.5 px-4 py-2 gradient-accent text-white text-xs font-bold uppercase hover:opacity-90 transition-opacity cursor-pointer"
          >
            Get a Quote
            <ChevronRight size={14} />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="fixed right-5 top-5 z-[60] lg:hidden text-[var(--color-text-secondary)] hover:text-white transition-colors cursor-pointer p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden bg-[var(--ink)] border-t border-[var(--line)] px-6 py-4 flex flex-col gap-2"
          >
            <p className="brand-mono text-[var(--color-text-muted)]">Services</p>
            {SERVICE_LINKS.map(renderMobileLink)}
            <div className="h-px bg-[var(--color-border)] my-2" />
            <p className="brand-mono text-[var(--color-text-muted)]">Company</p>
            {COMPANY_LINKS.map(renderMobileLink)}
            <div className="h-px bg-[var(--color-border)] my-2" />
            <Link
              href="/portal/dashboard"
              onClick={() => setMobileOpen(false)}
              className="py-2.5 text-sm font-bold uppercase text-[var(--color-text-secondary)] hover:text-white transition-colors cursor-pointer"
            >
              Portal Preview
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-1 flex items-center justify-center gap-1.5 py-3 gradient-accent text-white text-sm font-bold uppercase cursor-pointer"
            >
              Get a Quote <ChevronRight size={14} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
