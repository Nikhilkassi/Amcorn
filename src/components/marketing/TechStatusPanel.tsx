'use client'
import { cn } from '@/lib/utils'
import type { StatusComponent } from '@/types'

const STATUS_CONFIG = {
  operational: { label: 'Operational', color: 'var(--color-green)', dot: 'bg-[var(--color-green)]' },
  degraded:    { label: 'Degraded',    color: 'var(--color-amber)', dot: 'bg-[var(--color-amber)]' },
  outage:      { label: 'Outage',      color: 'var(--color-red)',   dot: 'bg-[var(--color-red)]' },
}

function StatusDot({ status }: { status: StatusComponent['status'] }) {
  const cfg = STATUS_CONFIG[status]
  return (
    <span className="relative flex h-2 w-2 flex-shrink-0">
      {status === 'operational' && (
        <span
          className={cn('animate-ping absolute inline-flex h-full w-full rounded-full opacity-75', cfg.dot)}
        />
      )}
      <span className={cn('relative inline-flex rounded-full h-2 w-2', cfg.dot)} />
    </span>
  )
}

export function TechStatusPanel({ components }: { components: StatusComponent[] }) {
  const allOp = components.every((c) => c.status === 'operational')

  return (
    <div className="glass ticked w-full max-w-xs p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="brand-mono text-[var(--color-text-muted)]">
          Portal Preview
        </span>
        <span className={cn('text-xs font-bold uppercase', allOp ? 'text-[var(--color-green)]' : 'text-[var(--color-amber)]')}>
          {allOp ? 'Sample Data' : 'Review Required'}
        </span>
      </div>
      <div className="space-y-2.5">
        {components.map((c) => (
          <div key={c.name} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <StatusDot status={c.status} />
              <span className="text-xs text-[var(--color-text-secondary)] truncate">{c.name}</span>
            </div>
            <span className="text-xs text-[var(--color-text-muted)] tabular-nums flex-shrink-0">
              {c.uptime.toFixed(1)}%
            </span>
          </div>
        ))}
      </div>
      <p className="mt-3 border-t border-[var(--line)] pt-3 text-[10px] leading-relaxed text-[var(--color-text-muted)]">
        Preview values demonstrate portal reporting format. Live client data appears only in authorised accounts.
      </p>
    </div>
  )
}
