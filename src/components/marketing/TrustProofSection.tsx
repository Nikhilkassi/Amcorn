import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Download, FileCheck2, LockKeyhole, PoundSterling, ShieldCheck } from 'lucide-react'

const PROOF_CARDS = [
  {
    icon: FileCheck2,
    title: 'Evidence-led reporting',
    body: 'Every proposal can include the report structure your auditor will receive: zone-level readings, photographic evidence, product register, ESD records, and operative sign-off.',
  },
  {
    icon: LockKeyhole,
    title: 'Reference strategy without public logos',
    body: 'Where client confidentiality prevents public naming, AMCORN can release relevant named references during procurement after mutual NDA approval.',
  },
  {
    icon: ShieldCheck,
    title: 'Supplier onboarding pack',
    body: 'RAMS, insurance schedule, COSHH register, method statement, access requirements, and security clearance process are bundled for procurement teams.',
  },
  {
    icon: PoundSterling,
    title: 'Clear commercial path',
    body: 'You receive an indicative budget and mobilisation route after assessment, with scope separated into one-off remediation, scheduled maintenance, and sensor options.',
  },
]

const EVIDENCE_ROWS = [
  ['Before arrival', 'RAMS, COSHH, insurance schedule, access plan'],
  ['During works', 'Zone record, operative log, equipment checks, photos'],
  ['After works', 'Particle count summary, exceptions, recommendations'],
  ['For procurement', 'Reference route, mobilisation plan, contract scope'],
]

export function TrustProofSection() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--ink-2)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="kicker mb-4">Trust architecture</p>
            <h2 className="max-w-2xl text-4xl font-black sm:text-5xl">
              Proof designed for procurement, not decoration.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--grey-1)]">
              Critical facilities do not buy from pretty claims. They buy from evidence, access control, risk management, and a supplier pack that survives internal review.
            </p>

            <div className="media-frame mt-8 aspect-[16/10] overflow-hidden">
              <Image
                src="/media/audit-reporting.jpg"
                alt="Cleanroom operative reviewing an ISO compliance audit report beside data centre racks"
                fill
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {PROOF_CARDS.map(({ icon: Icon, title, body }) => (
                <div key={title} className="ticked border border-[var(--line)] bg-[var(--panel)] p-5">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center border border-[var(--line)] bg-[var(--ink)]">
                    <Icon size={18} className="text-[var(--red-bright)]" />
                  </div>
                  <h3 className="mb-2 text-base font-black text-[var(--paper)]">{title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--grey-1)]">{body}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 border border-[var(--line)] bg-[var(--ink)]">
              {EVIDENCE_ROWS.map(([label, value]) => (
                <div key={label} className="grid gap-2 border-b border-[var(--line)] p-4 last:border-b-0 sm:grid-cols-[160px_1fr]">
                  <span className="brand-mono text-[var(--grey-2)]">{label}</span>
                  <span className="text-sm leading-relaxed text-[var(--grey-1)]">{value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="industrial-button">
                Request supplier pack <ArrowRight size={16} />
              </Link>
              <a href="/downloads/amcorn-procurement-checklist.txt" download className="industrial-button secondary">
                Download checklist <Download size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
