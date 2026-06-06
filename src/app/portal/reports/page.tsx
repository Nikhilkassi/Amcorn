import { ReportGenerator } from '@/components/portal/ReportGenerator'
import { ReportDownloadButton } from '@/components/portal/ReportDownloadButton'
import { FileText } from 'lucide-react'

const PAST_REPORTS = [
  { name: 'SLA Compliance - May 2026', date: '01 Jun 2026', size: '412 KB' },
  { name: 'Air Quality Report - May 2026', date: '01 Jun 2026', size: '284 KB' },
  { name: 'Cost Analysis - Q1 2026', date: '01 Apr 2026', size: '628 KB' },
  { name: 'SLA Compliance - Apr 2026', date: '01 May 2026', size: '394 KB' },
]

export default function ReportsPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-black text-white tracking-tight mb-8">Reports</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Generator */}
        <div>
          <h2 className="brand-mono text-[var(--color-text-secondary)] mb-4">Generate New Report</h2>
          <div className="glass ticked p-6">
            <ReportGenerator />
          </div>
        </div>

        {/* Past reports */}
        <div>
          <h2 className="brand-mono text-[var(--color-text-secondary)] mb-4">Past Reports</h2>
          <div className="glass ticked overflow-hidden">
            <div className="divide-y divide-[var(--color-border-dim)]">
              {PAST_REPORTS.map((r) => (
                <div key={r.name} className="flex items-center gap-4 px-5 py-4 hover:bg-[var(--color-bg-elevated)] transition-colors duration-150">
                  <FileText size={16} className="text-[var(--color-text-muted)] flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">{r.name}</p>
                    <p className="text-xs text-[var(--color-text-muted)]">{r.date} · {r.size}</p>
                  </div>
                  <ReportDownloadButton
                    reportName={r.name}
                    reportDate={r.date}
                    className="p-2 hover:bg-[var(--color-bg)] transition-colors duration-150 cursor-pointer text-[var(--color-text-muted)] hover:text-white"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
