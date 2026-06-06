const SETTINGS = [
  { label: 'Report delivery SLA', value: '24 hours' },
  { label: 'Alert escalation', value: 'Facilities lead + account manager' },
  { label: 'Sensor data retention', value: '90 days detailed / 2 years aggregate' },
  { label: 'Security clearance mode', value: 'DV and SC operative pool enabled' },
]

export default function SettingsPage() {
  return (
    <div className="p-8">
      <h1 className="mb-2 text-2xl font-black text-white">Settings</h1>
      <p className="mb-8 text-sm text-[var(--color-text-muted)]">Portal configuration summary for the AMCORN demo account.</p>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {SETTINGS.map((setting) => (
          <div key={setting.label} className="glass ticked p-5">
            <p className="brand-mono mb-3 text-[var(--color-text-muted)]">{setting.label}</p>
            <p className="text-lg font-black text-white">{setting.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
