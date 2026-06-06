import { AlertTriangle, CheckCircle2, FileText, Wifi } from 'lucide-react'

const NOTIFICATIONS = [
  {
    icon: AlertTriangle,
    title: 'Plenum particulate threshold exceeded',
    body: 'Canary Wharf Hall B requires inspection. Dispatch recommendation queued for review.',
    tone: 'var(--color-red)',
    time: '4m ago',
  },
  {
    icon: FileText,
    title: 'Compliance report delivered',
    body: 'Raised Floor Clean - May 2026 is ready in the reports workspace.',
    tone: 'var(--color-green)',
    time: '1hr ago',
  },
  {
    icon: Wifi,
    title: 'Sensor heartbeat restored',
    body: 'Manchester Plenum Zone 1 returned to normal telemetry cadence.',
    tone: 'var(--color-green)',
    time: '3hr ago',
  },
  {
    icon: CheckCircle2,
    title: 'CRAC coil clean verified',
    body: 'ISO Class 7 maintained after post-clean particle count.',
    tone: 'var(--color-green)',
    time: '5hr ago',
  },
]

export default function NotificationsPage() {
  return (
    <div className="p-8">
      <h1 className="mb-2 text-2xl font-black text-white">Notifications</h1>
      <p className="mb-8 text-sm text-[var(--color-text-muted)]">Operational alerts and report events from the AMCORN portal demo.</p>

      <div className="glass ticked divide-y divide-[var(--color-border-dim)] overflow-hidden">
        {NOTIFICATIONS.map(({ icon: Icon, title, body, tone, time }) => (
          <div key={title} className="grid grid-cols-[36px_1fr_auto] gap-4 px-5 py-4">
            <div className="flex h-9 w-9 items-center justify-center border border-[var(--line)] bg-[var(--ink)]">
              <Icon size={15} style={{ color: tone }} />
            </div>
            <div>
              <p className="text-sm font-bold text-white">{title}</p>
              <p className="mt-1 text-xs leading-relaxed text-[var(--color-text-secondary)]">{body}</p>
            </div>
            <span className="brand-mono text-[10px] text-[var(--color-text-muted)]">{time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
