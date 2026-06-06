import type { Metadata } from 'next'
import { Archivo, Space_Grotesk, Space_Mono } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'AMCORN - Critical Environment Cleaning | Data Centres · AI Facilities · UK',
  description:
    'ISO-14644 certified specialist cleaning for UK data centres, server rooms and AI compute facilities. IoT-monitored. DV-cleared. Digital compliance reports within 24 hours.',
  openGraph: {
    title: 'AMCORN - Critical Environment Cleaning',
    description:
      'ISO-14644 certified specialist cleaning for UK data centres, server rooms and AI compute. IoT-monitored. DV-cleared.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="ink"
      data-display="archivo"
      data-marks="on"
      data-scroll-behavior="smooth"
      className={`${archivo.variable} ${spaceGrotesk.variable} ${spaceMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
