import Image from 'next/image'
import { TechStatusPanel } from '@/components/marketing/TechStatusPanel'
import { STATUS_COMPONENTS, COMPLIANCE_CREDENTIALS } from '@/lib/mockData'
import { Wifi, Cpu, LayoutDashboard, FileCheck } from 'lucide-react'

export const metadata = {
  title: 'AMCORN Technology Platform | IoT · ML Dispatch · Compliance Portal · Multi-Sector',
  description: 'Real-time IoT environmental monitoring, ML-predicted service intervals, and structured compliance documentation — built for data centres, pharmaceutical cleanrooms, and clinical facilities.',
}

const TECH_FEATURES = [
  {
    icon: Wifi,
    title: 'IoT Sensor Network',
    badge: 'Real-Time',
    description: 'AMCORN installs particulate counters, air quality monitors, temperature and humidity sensors, and occupancy detectors throughout your facility. Data streams continuously into your client portal - so you have real-time visibility of environmental conditions, not just a snapshot from the last scheduled visit.',
    details: [
      { label: 'Sensor types', value: 'Particulate (PM0.1–PM10), Temperature, Humidity, Occupancy, Air quality (VOC/CO₂)' },
      { label: 'Data retention', value: 'Raw data 7 days · 1-minute averages 90 days · Hourly averages 2 years' },
      { label: 'Alert logic', value: 'Threshold breach triggers automated job dispatch within your defined response window' },
    ],
  },
  {
    icon: Cpu,
    title: 'ML Dispatch Engine',
    badge: 'Predictive',
    description: "AMCORN's machine learning engine analyses your sensor telemetry, historical clean data, facility occupancy patterns, and SLA commitments to predict the optimal cleaning intervention - before conditions degrade, not after. Jobs are dispatched automatically when the model identifies elevated risk.",
    details: [
      { label: 'Inputs', value: 'Sensor telemetry · Historical job data · Occupancy patterns · Seasonal variance' },
      { label: 'Output', value: 'Predicted service date with confidence score · Auto-dispatch to AMCORN operative team' },
      { label: 'Override', value: 'Clients can adjust, postpone, or escalate any dispatch via the portal' },
    ],
  },
  {
    icon: LayoutDashboard,
    title: 'Client Compliance Portal',
    badge: 'Live Dashboard',
    description: 'The AMCORN portal gives procurement leads, facilities managers, and operational teams a single dashboard across every facility on contract. Real-time sensor status, live job tracking, SLA performance rings, compliance report archive, and one-click export for audit preparation.',
    details: [
      { label: 'Portal features', value: 'Real-time facility map · Job dispatch queue · SLA tracker with RAG status · Analytics · Report archive' },
      { label: 'Export', value: 'One-click audit pack generation · Tamper-evident PDFs · Permanently stored' },
      { label: 'Access', value: 'Microsoft Entra ID / Google SSO - no separate password to manage' },
    ],
  },
  {
    icon: FileCheck,
    title: 'Digital Compliance Reporting',
    badge: '24hr Delivery',
    description: 'Every AMCORN clean generates a post-clean compliance report delivered within 24 hours. Reports are structured specifically to satisfy Uptime Institute Tier certification audits, ISO 27001 facilities management requirements, PCI DSS physical security controls, and insurer evidence requests.',
    details: [
      { label: 'Report contents', value: 'Particle counts by zone · Operative clearance records · Photographic evidence · COSHH register · ESD records' },
      { label: 'Standards', value: 'Uptime Institute · ISO 27001 · PCI DSS · Insurer evidence requests' },
      { label: 'Format', value: 'Timestamped, tamper-evident PDF - stored permanently in your portal' },
    ],
  },
]

export default function TechnologyPage() {
  return (
    <div className="pt-[var(--nav-h)]">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="mb-20 grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="kicker mb-4">The platform</p>
            <h1 className="text-5xl font-black tracking-tight mb-6">
              Cleaning becomes a<br />
              <span className="text-gradient-accent">measurable, manageable asset</span>
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
              AMCORN combines sensor recommendations, job tracking, service interval logic, and compliance documentation so facilities teams can manage cleaning as an operational control, not an afterthought.
            </p>
            <p className="mt-5 text-lg text-[var(--color-text-secondary)] max-w-2xl">
              Originally built for data centre environments, the AMCORN platform is now being extended into GMP-regulated life sciences facilities and CQC-registered healthcare environments — applying the same IoT monitoring, ML dispatch, and compliance documentation architecture to the specific regulatory requirements of each new sector.
            </p>
          </div>
          <div className="media-frame aspect-[16/10] overflow-hidden">
            <Image
              src="/media/iot-sensor.jpg"
              alt="IoT environmental sensor monitoring temperature and humidity beside data centre equipment"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* 4 tech features */}
        <div className="space-y-6 mb-20">
          {TECH_FEATURES.map(({ icon: Icon, title, badge, description, details }) => (
            <div key={title} className="glass rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-bg-elevated)] border border-[var(--color-border)] flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[var(--color-cta)]" />
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold text-[var(--color-cta)] bg-[rgba(14,165,233,0.08)] border border-[rgba(14,165,233,0.2)]">
                      {badge}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3">{title}</h2>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed">{description}</p>
                </div>
                <div className="space-y-4">
                  {details.map((d) => (
                    <div key={d.label}>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-1">{d.label}</p>
                      <p className="text-sm text-[var(--color-text-secondary)]">{d.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance credentials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-3">Credentials</p>
            <h2 className="text-4xl font-black tracking-tight">The credentials that protect your operations</h2>
            <p className="text-[var(--color-text-secondary)] mt-4 max-w-2xl mx-auto">
              Every accreditation we hold was purpose-built for the environments we operate in.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {COMPLIANCE_CREDENTIALS.map((c) => (
              <div key={c.badge} className="glass rounded-2xl p-6 hover:border-[var(--color-text-muted)] transition-colors duration-200">
                <div className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-[var(--color-bg-elevated)] text-[var(--color-accent)] border border-[rgba(230,57,70,0.3)] mb-4">
                  {c.badge}
                </div>
                <h3 className="font-bold text-white text-sm mb-2">{c.title}</h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Platform status */}
        <div className="glass rounded-2xl p-8 flex flex-col lg:flex-row items-center gap-8 justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-2">Portal preview</p>
            <h3 className="text-xl font-bold text-white">Sample reporting format</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">Preview values demonstrate the dashboard model. Live client telemetry is visible only inside authorised accounts.</p>
          </div>
          <TechStatusPanel components={STATUS_COMPONENTS} />
        </div>
      </div>
    </div>
  )
}
