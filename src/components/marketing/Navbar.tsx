'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PeakMark, Wordmark } from '@/components/brand/BrandMark'

const NAV_LINKS = [
  { href: '/services',      label: 'Services' },
  { href: '/services/life-sciences', label: 'Life Sciences', badge: '2026' },
  { href: '/services/healthcare', label: 'Healthcare', badge: '2026' },
  { href: '/contact',       label: 'GMP Audit', badge: 'From £950' },
  { href: '/about',         label: 'About' },
  { href: '/technology',    label: 'Technology Platform' },
  { href: '/case-studies',  label: 'Case Studies' },
  { href: '/insights',      label: 'Insights' },
  { href: '/faq',           label: 'FAQ' },
  { href: '/contact',       label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

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
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                'px-3 py-2 text-xs font-bold uppercase transition-colors duration-150 cursor-pointer',
                pathname === l.href
                  ? 'text-[var(--paper)] bg-[var(--red)]'
                  : 'text-[var(--grey-1)] hover:text-[var(--paper)] hover:bg-[var(--panel)]'
              )}
            >
              <span className="inline-flex items-center gap-1.5">
                {l.label}
                {'badge' in l && (
                  <span className="brand-mono border border-[var(--line)] px-1.5 py-0.5 text-[9px] text-[var(--grey-2)]">
                    {l.badge}
                  </span>
                )}
              </span>
            </Link>
          ))}
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
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 text-sm font-bold uppercase text-[var(--color-text-secondary)] hover:text-white transition-colors cursor-pointer"
              >
                <span className="inline-flex items-center gap-2">
                  {l.label}
                  {'badge' in l && (
                    <span className="brand-mono border border-[var(--line)] px-1.5 py-0.5 text-[9px] text-[var(--grey-2)]">
                      {l.badge}
                    </span>
                  )}
                </span>
              </Link>
            ))}
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
