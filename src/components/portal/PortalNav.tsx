'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard, Building2, BarChart3, FileText,
  Settings, LogOut, Bell, Wifi
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useFacilityStore } from '@/store/facilityStore'
import { PeakMark, Wordmark } from '@/components/brand/BrandMark'

const NAV = [
  { href: '/portal/dashboard',  icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/portal/facilities', icon: Building2,        label: 'Facilities' },
  { href: '/portal/analytics',  icon: BarChart3,        label: 'Analytics' },
  { href: '/portal/reports',    icon: FileText,          label: 'Reports' },
]

export function PortalNav() {
  const pathname = usePathname()
  const connectionStatus = useFacilityStore((s) => s.connectionStatus)

  return (
    <aside className="fixed inset-x-0 top-0 z-40 flex h-16 border-b border-[var(--line)] bg-[var(--ink)] lg:inset-y-0 lg:right-auto lg:h-auto lg:w-[260px] lg:flex-col lg:border-b-0 lg:border-r">
      {/* Logo */}
      <div className="flex h-16 min-w-[220px] items-center gap-3 border-r border-[var(--line)] px-5 lg:border-b lg:border-r-0">
        <PeakMark className="h-7 w-7 flex-shrink-0" />
        <Wordmark tone="red" className="h-5 w-auto" priority />
        <span className="brand-mono ml-auto border border-[var(--line)] bg-[var(--panel)] px-1.5 py-0.5 text-[10px] text-[var(--color-text-muted)]">Portal</span>
      </div>

      {/* Nav items */}
      <nav className="flex flex-1 items-center gap-1 overflow-x-auto px-3 py-2 lg:block lg:space-y-1 lg:overflow-y-auto lg:py-5">
        <p className="brand-mono hidden px-3 text-[10px] text-[var(--color-text-muted)] mb-3 lg:block">Navigation</p>
        {NAV.map(({ href, icon: Icon, label }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-2 whitespace-nowrap px-3 py-2.5 text-sm font-bold uppercase transition-colors duration-150 cursor-pointer lg:gap-3',
                active
                  ? 'bg-[var(--red)] text-white'
                  : 'text-[var(--color-text-secondary)] hover:bg-[var(--panel)] hover:text-white'
              )}
            >
              <Icon size={16} className={active ? 'text-[var(--color-accent)]' : ''} />
              {label}
            </Link>
          )
        })}
      </nav>

      {/* Connection status */}
      <div className="hidden px-5 py-3 border-t border-[var(--color-border)] items-center gap-2 lg:flex">
        <Wifi size={12} className={cn(
          connectionStatus === 'connected' ? 'text-[var(--color-green)]' :
          connectionStatus === 'error' ? 'text-[var(--color-red)]' : 'text-[var(--color-amber)]'
        )} />
        <span className="text-[11px] text-[var(--color-text-muted)] capitalize">{connectionStatus}</span>
      </div>

      {/* Bottom actions */}
      <div className="hidden px-3 pb-4 space-y-0.5 border-t border-[var(--color-border)] pt-3 lg:block">
        <Link href="/portal/notifications" className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-bold uppercase text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-elevated)] hover:text-white transition-colors duration-150 cursor-pointer">
          <Bell size={16} /> Notifications
        </Link>
        <Link href="/portal/settings" className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-bold uppercase text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-elevated)] hover:text-white transition-colors duration-150 cursor-pointer">
          <Settings size={16} /> Settings
        </Link>
        <Link href="/" className="flex items-center gap-3 px-3 py-2.5 text-sm font-bold uppercase text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-elevated)] hover:text-white transition-colors duration-150 cursor-pointer">
          <LogOut size={16} /> Back to Site
        </Link>
      </div>
    </aside>
  )
}
