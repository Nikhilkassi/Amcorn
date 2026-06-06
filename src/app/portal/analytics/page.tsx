import { AnalyticsDashboard } from '@/components/portal/AnalyticsDashboard'
import { ANALYTICS_DATA } from '@/lib/mockData'

export default function AnalyticsPage() {
  const latest = ANALYTICS_DATA[ANALYTICS_DATA.length - 1]
  const prev   = ANALYTICS_DATA[ANALYTICS_DATA.length - 2]

  const kpis = [
    { label: 'Clean Frequency', value: `${latest.cleanFrequency}%`, delta: latest.cleanFrequency - prev.cleanFrequency, suffix: 'pts' },
    { label: 'Occupancy Rate', value: `${latest.occupancy}%`, delta: latest.occupancy - prev.occupancy, suffix: 'pts' },
    { label: 'Cost per m²', value: `£${latest.costPerSqm.toFixed(2)}`, delta: prev.costPerSqm - latest.costPerSqm, suffix: '£ saved' },
    { label: 'Operative Util.', value: `${latest.utilisation}%`, delta: latest.utilisation - prev.utilisation, suffix: 'pts' },
  ]

  return (
    <div className="p-8">
      <h1 className="text-2xl font-black text-white tracking-tight mb-8">Analytics</h1>

      {/* KPI row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {kpis.map((k) => (
          <div key={k.label} className="glass ticked p-5">
            <p className="brand-mono text-[var(--color-text-muted)] mb-2">{k.label}</p>
            <p className="text-3xl font-black text-white mb-1">{k.value}</p>
            <p className={`text-xs font-semibold ${k.delta >= 0 ? 'text-[var(--color-green)]' : 'text-[var(--color-red)]'}`}>
              {k.delta >= 0 ? '+' : ''}{k.delta.toFixed(1)} {k.suffix} vs prev month
            </p>
          </div>
        ))}
      </div>

      <AnalyticsDashboard />
    </div>
  )
}
