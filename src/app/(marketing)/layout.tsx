import { Navbar } from '@/components/marketing/Navbar'
import { Footer } from '@/components/marketing/Footer'
import { CookiePreferences } from '@/components/marketing/CookiePreferences'
import { StructuredData } from '@/components/marketing/StructuredData'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StructuredData />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <CookiePreferences />
    </>
  )
}
