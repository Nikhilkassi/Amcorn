import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Critical Environment Cleaning Insights | AMCORN',
  description: 'Technical notes on data centre cleaning, contamination risk, audit evidence, cooling efficiency, and supplier onboarding.',
}

const INSIGHTS = [
  {
    title: 'What procurement should ask before appointing a data hall cleaning supplier',
    category: 'Supplier onboarding',
    date: 'Procurement note',
    image: '/media/audit-reporting.jpg',
    alt: 'Cleanroom operative reviewing an audit report in a data centre',
    summary: 'The documents, controls, and evidence routes that separate a specialist critical-environment supplier from a generic facilities contractor.',
    points: ['RAMS and COSHH before mobilisation', 'Insurance schedule and access model', 'Reference route for confidential facilities'],
  },
  {
    title: 'Why plenum contamination becomes a cooling-risk problem',
    category: 'Data hall operations',
    date: 'Technical explainer',
    image: '/media/raised-floor-cleaning.jpg',
    alt: 'Operative cleaning below a raised floor in a server environment',
    summary: 'Raised floor dust is not cosmetic. It affects airflow, cooling efficiency, sensor reliability, and the quality of evidence available during audits.',
    points: ['Zone-by-zone particle readings', 'Airflow and thermal impact', 'Post-clean monitoring recommendations'],
  },
  {
    title: 'How to make cleaning evidence useful for ISO 27001 and insurer review',
    category: 'Compliance evidence',
    date: 'Audit readiness',
    image: '/media/iot-sensor.jpg',
    alt: 'Environmental sensor beside data centre equipment',
    summary: 'A good report does more than confirm attendance. It should show what was cleaned, what was measured, who entered site, and what changed afterward.',
    points: ['Operative and access trail', 'Photographic evidence', 'Product, ESD, and exception records'],
  },
]

export default function InsightsPage() {
  return (
    <div className="pt-[var(--nav-h)]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-16 max-w-3xl">
          <p className="kicker mb-4">Insights</p>
          <h1 className="mb-5 text-5xl font-black tracking-tight">
            Technical notes for teams protecting critical infrastructure.
          </h1>
          <p className="text-lg leading-relaxed text-[var(--color-text-secondary)]">
            Practical guidance for facilities, procurement, compliance, and operations teams evaluating specialist data centre cleaning suppliers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {INSIGHTS.map((item) => (
            <article key={item.title} className="ticked flex flex-col border border-[var(--line)] bg-[var(--panel)]">
              <div className="media-frame aspect-[16/10] overflow-hidden border-x-0 border-t-0">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="brand-mono border border-[var(--line)] px-2 py-1 text-[10px] text-[var(--grey-2)]">{item.category}</span>
                  <span className="brand-mono text-[10px] text-[var(--grey-2)]">{item.date}</span>
                </div>
                <h2 className="mb-3 text-xl font-black text-[var(--paper)]">{item.title}</h2>
                <p className="mb-5 text-sm leading-relaxed text-[var(--grey-1)]">{item.summary}</p>
                <ul className="mt-auto space-y-2 border-t border-[var(--line)] pt-5">
                  {item.points.map((point) => (
                    <li key={point} className="grid grid-cols-[8px_1fr] gap-3 text-xs leading-relaxed text-[var(--grey-1)]">
                      <span className="mt-1.5 h-2 w-2 bg-[var(--red-bright)]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border border-[var(--line)] bg-[var(--ink-2)] p-8">
          <p className="brand-mono mb-3 text-[var(--grey-2)]">Need a supplier pack?</p>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-black">Get the documents your procurement team will ask for.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--grey-1)]">
                AMCORN can provide a checklist, supplier onboarding pack, and assessment route before commercial engagement.
              </p>
            </div>
            <Link href="/contact" className="industrial-button flex-shrink-0">
              Request pack <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
