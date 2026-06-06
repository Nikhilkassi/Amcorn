'use client'
import { useState } from 'react'
import { FACILITIES } from '@/lib/mockData'
import { SensorMapOverlay } from '@/components/portal/SensorMapOverlay'
import { Building2, Wifi, Briefcase } from 'lucide-react'

export default function FacilitiesPage() {
  const [selectedId, setSelectedId] = useState(FACILITIES[0].id)
  const facility = FACILITIES.find((f) => f.id === selectedId) ?? FACILITIES[0]

  return (
    <div className="p-8">
      <h1 className="text-2xl font-black text-white tracking-tight mb-8">Facilities</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sidebar list */}
        <div className="space-y-3">
          {FACILITIES.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedId(f.id)}
              className={`ticked w-full text-left glass p-5 transition-colors duration-150 cursor-pointer ${
                f.id === selectedId ? 'border-[var(--color-accent)]' : 'hover:border-[var(--color-text-muted)]'
              }`}
            >
              <p className="font-semibold text-white text-sm mb-1">{f.name}</p>
              <p className="text-xs text-[var(--color-text-muted)] mb-3">{f.address}</p>
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5 text-[11px] text-[var(--color-text-secondary)]">
                  <Wifi size={11} /> {f.sensors.length} sensors
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[var(--color-text-secondary)]">
                  <Briefcase size={11} /> {f.activeJobCount} active jobs
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[var(--color-text-secondary)]">
                  <Building2 size={11} /> {f.floorArea.toLocaleString()} m²
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Detail */}
        <div className="lg:col-span-2 space-y-4">
          <div className="glass ticked overflow-hidden" style={{ height: 320 }}>
            <div className="px-5 py-3 border-b border-[var(--color-border)]">
              <p className="brand-mono text-[var(--color-text-muted)]">
                {facility.name} - Floor Plan
              </p>
            </div>
            <div className="h-[calc(100%-41px)]">
              <SensorMapOverlay sensors={facility.sensors} />
            </div>
          </div>

          {/* Sensor table */}
          <div className="glass ticked overflow-hidden">
            <div className="px-5 py-3 border-b border-[var(--color-border)]">
              <p className="brand-mono text-[var(--color-text-muted)]">Sensor List</p>
            </div>
            <div className="divide-y divide-[var(--color-border-dim)]">
              {facility.sensors.map((s) => (
                <div key={s.id} className="flex items-center gap-4 px-5 py-3">
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${
                    s.status === 'active' ? 'bg-[var(--color-green)]' :
                    s.status === 'alert'  ? 'bg-[var(--color-red)]' :
                    s.status === 'idle'   ? 'bg-[var(--color-amber)]' :
                    'bg-[var(--color-border)]'
                  }`} />
                  <span className="text-sm text-white flex-1">{s.name}</span>
                  <span className="text-xs text-[var(--color-text-muted)] capitalize">{s.type.replace('_', ' ')}</span>
                  <span className="text-sm font-semibold text-white tabular-nums">
                    {typeof s.value === 'number' && s.type !== 'air_quality' ? s.value.toFixed(1) : Math.round(s.value)} {s.unit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
