import type { Metadata, Viewport } from 'next'
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

// Set this to your production origin so og:image resolves to an absolute URL.
const SITE_URL = 'https://amcorn.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'AMCORN - Critical Environment Cleaning | Data Centres · AI Facilities · UK',
  description:
    'ISO-14644 certified specialist cleaning for UK data centres, server rooms and AI compute facilities. IoT-monitored. DV-cleared. Digital compliance reports within 24 hours.',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/brand/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/brand/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/brand/favicon-32x32.png',
    apple: [{ url: '/brand/apple-touch-icon.png', sizes: '180x180' }],
  },
  openGraph: {
    title: 'AMCORN - Critical Environment Cleaning',
    description:
      'ISO-14644 certified specialist cleaning for UK data centres, server rooms and AI compute. IoT-monitored. DV-cleared.',
    type: 'website',
    url: SITE_URL,
    siteName: 'AMCORN',
    images: [
      {
        url: '/brand/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AMCORN - Critical Environment Cleaning',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AMCORN - Critical Environment Cleaning',
    description:
      'ISO-14644 certified specialist cleaning for UK data centres, server rooms and AI compute. IoT-monitored. DV-cleared.',
    images: ['/brand/og-image.jpg'],
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
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
