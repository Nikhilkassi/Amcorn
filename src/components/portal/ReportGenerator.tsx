'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, Download, Loader2, CheckCircle2, Calendar } from 'lucide-react'
import { ReportDownloadButton } from '@/components/portal/ReportDownloadButton'

const REPORT_TYPES = [
  { id: 'sla', label: 'SLA Compliance Report', desc: 'Monthly breakdown of all SLA commitments vs actuals' },
  { id: 'air', label: 'Air Quality Report', desc: 'CO₂, VOC, and PM2.5 trends with annotation events' },
  { id: 'cost', label: 'Cost Analysis Report', desc: 'Cost per m², service frequency, and savings summary' },
  { id: 'jobs', label: 'Job Completion Report', desc: 'All completed and verified jobs with operative breakdown' },
]

const DATE_RANGES = [
  { id: 'last-month', label: 'Last month' },
  { id: 'last-quarter', label: 'Last quarter' },
  { id: 'ytd', label: 'Year to date' },
  { id: 'custom', label: 'Custom range' },
]

type JobState = 'idle' | 'queued' | 'generating' | 'done'

export function ReportGenerator() {
  const [selectedType, setSelectedType] = useState('sla')
  const [dateRange, setDateRange] = useState('last-month')
  const [jobState, setJobState] = useState<JobState>('idle')
  const [progress, setProgress] = useState(0)

  const generate = async () => {
    setJobState('queued')
    setProgress(0)
    await new Promise((r) => setTimeout(r, 600))
    setJobState('generating')

    for (let p = 0; p <= 100; p += 10) {
      await new Promise((r) => setTimeout(r, 180))
      setProgress(p)
    }
    setJobState('done')
  }

  const reset = () => { setJobState('idle'); setProgress(0) }
  const selectedReport = REPORT_TYPES.find((report) => report.id === selectedType) ?? REPORT_TYPES[0]
  const selectedRange = DATE_RANGES.find((range) => range.id === dateRange) ?? DATE_RANGES[0]

  return (
    <div className="space-y-6">
      {/* Report type */}
      <div>
        <p className="brand-mono text-[var(--color-text-muted)] mb-3">Report Type</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {REPORT_TYPES.map((r) => (
            <button
              key={r.id}
              onClick={() => setSelectedType(r.id)}
              className={`text-left px-4 py-3 border transition-colors duration-150 cursor-pointer ${
                selectedType === r.id
                  ? 'border-[var(--color-accent)] bg-[rgba(230,57,70,0.06)]'
                  : 'border-[var(--color-border)] bg-[var(--color-bg-elevated)] hover:border-[var(--color-text-muted)]'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <FileText size={13} className={selectedType === r.id ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-muted)]'} />
                <span className="text-xs font-semibold text-white">{r.label}</span>
              </div>
              <p className="text-[11px] text-[var(--color-text-muted)]">{r.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Date range */}
      <div>
        <p className="brand-mono text-[var(--color-text-muted)] mb-3">
          <Calendar size={11} className="inline mr-1.5" />
          Date Range
        </p>
        <div className="flex flex-wrap gap-2">
          {DATE_RANGES.map((r) => (
            <button
              key={r.id}
              onClick={() => setDateRange(r.id)}
              className={`px-4 py-2 text-xs font-bold uppercase transition-colors duration-150 cursor-pointer border ${
                dateRange === r.id
                  ? 'border-[var(--red)] text-[var(--paper)] bg-[rgba(147,30,34,0.32)]'
                  : 'border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-text-muted)] bg-[var(--color-bg-elevated)]'
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {/* Generate */}
      <AnimatePresence mode="wait">
        {jobState === 'idle' && (
          <motion.button
            key="btn"
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={generate}
            className="industrial-button w-full"
          >
            <FileText size={15} /> Generate PDF Report
          </motion.button>
        )}

        {(jobState === 'queued' || jobState === 'generating') && (
          <motion.div
            key="progress"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="glass ticked p-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <Loader2 size={16} className="text-[var(--color-cta)] animate-spin" />
              <span className="text-sm text-[var(--color-text-secondary)]">
                {jobState === 'queued' ? 'Job queued…' : 'Generating report…'}
              </span>
              <span className="ml-auto text-sm font-bold text-white">{progress}%</span>
            </div>
            <div className="h-2 bg-[var(--color-bg-elevated)] overflow-hidden">
              <motion.div
                className="h-full bg-[var(--color-cta)]"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.div>
        )}

        {jobState === 'done' && (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            className="glass ticked p-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 size={18} className="text-[var(--color-green)]" />
              <span className="text-sm font-semibold text-white">Report ready</span>
            </div>
            <div className="flex gap-3">
              <ReportDownloadButton
                reportName={`${selectedReport.label} - ${selectedRange.label}`}
                reportDate={new Date().toLocaleDateString('en-GB')}
                className="industrial-button flex-1"
              >
                <Download size={14} /> Download PDF
              </ReportDownloadButton>
              <button
                onClick={reset}
                className="px-5 py-2.5 border border-[var(--color-border)] text-sm font-bold uppercase text-[var(--color-text-secondary)] hover:text-white transition-colors cursor-pointer"
              >
                New Report
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
