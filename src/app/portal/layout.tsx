import { PortalNav } from '@/components/portal/PortalNav'

export const metadata = { title: 'Client Portal | AMCORN' }

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <PortalNav />
      <main className="min-h-screen overflow-auto pt-16 lg:ml-[260px] lg:pt-0">
        {children}
      </main>
    </div>
  )
}
