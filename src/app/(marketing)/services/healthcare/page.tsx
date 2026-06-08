import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, ClipboardCheck, Clock4, ShieldCheck } from 'lucide-react'
import { ServiceCard } from '@/components/marketing/ServiceCard'
import { SERVICES } from '@/lib/mockData'

export const metadata = {
  title: 'Clinical Facility & Healthcare Infrastructure Cleaning | AMCORN',
  description: 'CQC-compliant cleaning for private hospitals, surgical treatment centres, diagnostic imaging facilities, and clinical data infrastructure — IoT-monitored, audit-documented, IPC-aware.',
}

const featureCards = [
  {
    icon: ClipboardCheck,
    title: 'CQC-Structured Documentation',
    body: 'Every clean produces records structured against the NHS National Standards of Healthcare Cleanliness 2021 and CQC Key Lines of Enquiry for safe environments. Your Registered Manager receives documentation they can open in front of an inspector.',
  },
  {
    icon: ShieldCheck,
    title: 'IPC-Aligned Cleaning Protocols',
    body: 'Cleaning protocols written and reviewed against relevant Health Technical Memoranda — HTM 01-01 for decontamination environments, HTM 01-05 for dental surgical settings. Colour-coded equipment, correct dilution ratios, and zone-specific procedures documented at operative level.',
  },
  {
    icon: Clock4,
    title: 'Outbreak and Pre-Inspection Response',
    body: 'Terminal cleans for confirmed or suspected infection events, dispatched within 4 hours. Pre-inspection deep cleans available on 24 hours notice. Annual retainer clients are prioritised in all emergency dispatch queues.',
  },
]

const targetEnvironments = [
  'Independent Surgical Treatment Centres',
  'Private Diagnostic Imaging Centres',
  'CQC-Registered Specialist Clinics',
  'Cosmetic and Aesthetic Surgery Facilities',
  'Private Dental Surgical Practices',
  'NHS-Commissioned Independent Providers',
  'Private Hospital Groups',
]

const includedItems = [
  'CQC-structured post-clean completion records',
  'NHS National Standards of Healthcare Cleanliness 2021 alignment',
  'Colour-coded equipment and zone-specific protocols',
  'Chemical dilution records and COSHH documentation',
  'IoT air quality and environmental monitoring between visits',
  'Pre-inspection and outbreak terminal clean availability',
  'IPC advisory support via retained clinical lead',
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Clinical & Healthcare Facility Cleaning',
  provider: {
    '@type': 'Organization',
    name: 'AMCORN Ltd',
  },
  description: 'CQC-structured cleaning for private surgical centres and diagnostic imaging facilities with IPC-aligned protocols.',
  areaServed: 'GB',
  serviceType: 'Healthcare Facility Cleaning',
}

export default function HealthcareServicePage() {
  const related = SERVICES.slice(0, 3)

  return (
    <div className="pt-[var(--nav-h)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-20 grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-[rgba(230,57,70,0.1)] text-[var(--color-accent)] border border-[rgba(230,57,70,0.2)]">
                CQC-Aware · IPC-Aligned
              </span>
            </div>
            <h1 className="mb-6 max-w-3xl text-5xl font-black tracking-tight">
              Clinical environment cleaning. Documented for your auditor.
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)]">
              AMCORN brings IoT monitoring, protocol-driven cleaning, and CQC-structured compliance documentation to private healthcare facilities — surgical treatment centres, diagnostic imaging, and clinical infrastructure — where infection prevention and audit readiness are non-negotiable.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-accent text-white text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
              >
                Request a Compliance Audit <ArrowRight size={14} />
              </Link>
              <Link
                href="/technology"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--color-border)] text-[var(--color-text-secondary)] text-sm font-semibold hover:text-white hover:border-[var(--color-text-muted)] transition-colors cursor-pointer"
              >
                Our Technology Platform <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          <div className="media-frame aspect-[16/10] overflow-hidden">
            <Image
              src="/images/hero-healthcare.jpg"
              alt="Clean clinical corridor in a private healthcare facility"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[rgba(3,6,8,0.3)]" aria-hidden />
            <div className="absolute inset-0 hero-grid-bg opacity-20" aria-hidden />
          </div>
        </div>

        <section className="mb-20 grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="kicker mb-4">The compliance gap</p>
            <h2 className="text-4xl font-black tracking-tight">
              Private healthcare is growing faster than its cleaning standards.
            </h2>
          </div>
          <div className="space-y-5 text-[var(--color-text-secondary)] leading-relaxed">
            <p>
              The UK private healthcare sector recorded 939,000 non-NHS inpatient admissions in 2024 — a third consecutive year of record volumes. New surgical treatment centres, diagnostic imaging facilities, and specialist clinics are opening across the country. Every one of them is subject to CQC registration and inspection. Most cleaning contracts at these sites are held by generalist FM companies whose documentation would not survive a serious CQC review.
            </p>
            <p>
              The CQC&apos;s inspection framework is explicit about what it expects from cleaning in a clinical environment — evidence of IPC-compliant procedures, colour-coded equipment protocols, chemical dilution records, and staff competency documentation. AMCORN produces all of this as a standard output of every scheduled clean.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <div className="mb-10">
            <p className="kicker mb-4">What we bring</p>
            <h2 className="text-4xl font-black tracking-tight">Clinical cleaning with compliance built in.</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {featureCards.map(({ icon: Icon, title, body }) => (
              <div key={title} className="glass rounded-2xl p-6 hover:border-[var(--color-text-muted)] transition-colors duration-200">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-bg-elevated)] border border-[var(--color-border)]">
                  <Icon size={18} className="text-[var(--color-cta)]" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="mb-10">
            <p className="kicker mb-4">Who this is for</p>
            <h2 className="text-4xl font-black tracking-tight">Built for CQC-registered environments</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {targetEnvironments.map((environment) => (
              <span
                key={environment}
                className="brand-mono border border-[var(--line)] bg-[var(--panel)] px-3 py-2 text-[10px] text-[var(--grey-1)]"
              >
                {environment}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-20 grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-4xl font-black tracking-tight">What&apos;s included in every programme</h2>
            <ul className="mb-10 space-y-3">
              {includedItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[var(--color-green)] flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)]">{item}</span>
                </li>
              ))}
            </ul>
            <div className="glass rounded-2xl p-6">
              <p className="mb-2 text-sm font-semibold text-white">Every visit includes a digital compliance report</p>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Delivered within 24 hours. CQC-structured documentation, operative records, photographic evidence, and IPC compliance records — formatted for your Registered Manager and CQC audit file.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="mb-8 text-2xl font-bold">Related Services</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {related.map((service) => <ServiceCard key={service.id} service={service} />)}
          </div>
        </section>

        <section>
          <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 hero-grid-bg opacity-30 pointer-events-none" aria-hidden />
            <div className="relative">
              <h2 className="mb-4 text-4xl font-black tracking-tight">Start with a compliance audit.</h2>
              <p className="mx-auto mb-8 max-w-2xl text-[var(--color-text-secondary)]">
                A CQC Cleaning Compliance Audit benchmarks your current cleaning operation against the NHS National Standards and CQC inspection criteria. Written gap analysis delivered within 5 working days. £595 per facility, credited against first programme contract.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-accent text-white font-semibold hover:opacity-90 transition-opacity cursor-pointer"
              >
                Book a Compliance Audit <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
