'use client'
import { useFacilityStore } from '@/store/facilityStore'
import { SensorMapOverlay } from '@/components/portal/SensorMapOverlay'
import { JobDispatchQueue } from '@/components/portal/JobDispatchQueue'
import { SLATracker } from '@/components/portal/SLATracker'
import { FACILITIES, JOBS, SLA_COMMITMENTS } from '@/lib/mockData'
import { Building2, Activity, CheckCircle2, AlertTriangle } from 'lucide-react'

function KPICard({ label, value, sub, icon: Icon, color }: {
  label: string; value: string; sub: string;
  icon: React.ElementType; color: string
}) {
  return (
    <div className="glass ticked p-5">
      <div className="flex items-start justify-between mb-3">
        <div className="w-9 h-9 border border-[var(--color-border)] flex items-center justify-center" style={{ background: `${color}12` }}>
          <Icon size={16} style={{ color }} />
        </div>
        <span className="brand-mono text-[10px] text-[var(--color-text-muted)]">{label}</span>
      </div>
      <p className="text-3xl font-black text-white mb-1">{value}</p>
      <p className="text-xs text-[var(--color-text-muted)]">{sub}</p>
    </div>
  )
}

export default function DashboardPage() {
  const selectedId = useFacilityStore((s) => s.selectedFacilityId)
  const setSelectedFacility = useFacilityStore((s) => s.setSelectedFacility)
  const facility = FACILITIES.find((f) => f.id === selectedId) ?? FACILITIES[0]

  const alertSensors = facility.sensors.filter((s) => s.status === 'alert').length
  const activeSensors = facility.sensors.filter((s) => s.status === 'active').length

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-white tracking-tight">{facility.name}</h1>
          <p className="text-sm text-[var(--color-text-muted)] mt-0.5">{facility.address}</p>
        </div>
        {/* Facility switcher */}
        <div className="flex gap-2">
          {FACILITIES.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedFacility(f.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors duration-150 cursor-pointer ${
                f.id === selectedId
                  ? 'border-[var(--color-accent)] text-white bg-[rgba(230,57,70,0.08)]'
                  : 'border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-white bg-[var(--color-bg-elevated)]'
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <KPICard label="Active Jobs" value={String(facility.activeJobCount)} sub="currently in progress" icon={Activity} color="var(--color-cta)" />
        <KPICard label="Active Sensors" value={String(activeSensors)} sub={`of ${facility.sensors.length} total`} icon={Building2} color="var(--color-green)" />
        <KPICard label="Alerts" value={String(alertSensors)} sub="require attention" icon={AlertTriangle} color={alertSensors > 0 ? 'var(--color-red)' : 'var(--color-green)'} />
        <KPICard label="Floor Area" value={`${(facility.floorArea / 1000).toFixed(1)}k`} sub="m² under management" icon={CheckCircle2} color="var(--color-text-muted)" />
      </div>

      {/* Map + SLA row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 glass ticked overflow-hidden" style={{ height: 320 }}>
          <div className="px-5 py-3 border-b border-[var(--color-border)] flex items-center justify-between">
            <p className="brand-mono text-[var(--color-text-muted)]">Floor Plan & Sensors</p>
            <span className="text-[10px] text-[var(--color-text-muted)]">Click sensor to inspect</span>
          </div>
          <div className="h-[calc(100%-41px)]">
            <SensorMapOverlay sensors={facility.sensors} />
          </div>
        </div>

        <div className="glass ticked p-5">
          <p className="brand-mono text-[var(--color-text-muted)] mb-5">SLA Compliance</p>
          <SLATracker slaCommitments={SLA_COMMITMENTS} />
        </div>
      </div>

      {/* Job dispatch */}
      <div className="glass ticked p-5">
        <p className="brand-mono text-[var(--color-text-muted)] mb-5">Job Dispatch Board</p>
        <JobDispatchQueue jobs={JOBS} />
      </div>
    </div>
  )
}
