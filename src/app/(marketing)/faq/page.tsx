import { FAQClient } from './FAQClient'
import { FAQ_ITEMS } from '@/lib/mockData'

export const metadata = {
  title: 'FAQ | AMCORN Critical Environment Cleaning',
  description: 'Answers to common questions about AMCORN data centre cleaning, IoT monitoring, secure access, compliance reporting, and supplier onboarding.',
}

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
}

export default function FAQPage() {
  return (
    <div className="pt-[var(--nav-h)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">FAQ</p>
          <h1 className="text-5xl font-black tracking-tight mb-4">
            Questions we get asked before every first contract
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)]">
            Answers to the most common questions about our data centre cleaning services, IoT monitoring, DV clearance, and compliance reporting.
          </p>
        </div>

        <FAQClient />
      </div>
    </div>
  )
}
