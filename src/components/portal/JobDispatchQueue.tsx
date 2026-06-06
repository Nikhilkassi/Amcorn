'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { Job, JobStatus } from '@/types'
import { Clock, User, AlertCircle } from 'lucide-react'

const COLUMNS: { status: JobStatus; label: string }[] = [
  { status: 'scheduled',   label: 'Scheduled' },
  { status: 'en_route',    label: 'En Route' },
  { status: 'in_progress', label: 'In Progress' },
  { status: 'complete',    label: 'Complete' },
  { status: 'verified',    label: 'Verified' },
]

const PRIORITY_COLOR: Record<Job['priority'], string> = {
  low:    'var(--color-text-muted)',
  normal: 'var(--color-cta)',
  high:   'var(--color-accent)',
}

function JobCard({ job }: { job: Job }) {
  return (
    <motion.div
      layout
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="glass ticked p-3 cursor-pointer hover:border-[var(--line-strong)] transition-colors duration-150"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <p className="text-xs font-semibold text-white leading-snug">{job.title}</p>
        {job.priority === 'high' && <AlertCircle size={12} style={{ color: PRIORITY_COLOR.high }} className="flex-shrink-0 mt-0.5" />}
      </div>
      <p className="text-[10px] text-[var(--color-text-muted)] mb-2">{job.facilityName}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-[10px] text-[var(--color-text-secondary)]">
          <Clock size={10} /> {job.scheduledAt}
        </div>
        <div className="flex items-center gap-1 text-[10px] text-[var(--color-text-muted)]">
          <User size={10} /> {job.operative}
        </div>
      </div>
      <div className="mt-2 h-0.5" style={{ background: PRIORITY_COLOR[job.priority], opacity: 0.8 }} />
    </motion.div>
  )
}

export function JobDispatchQueue({ jobs }: { jobs: Job[] }) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {COLUMNS.map((col) => {
        const colJobs = jobs.filter((j) => j.status === col.status)
        return (
          <div key={col.status} className="flex-shrink-0 w-[200px]">
            <div className="flex items-center justify-between mb-3">
              <p className="brand-mono text-[var(--color-text-muted)]">{col.label}</p>
              <span className={cn(
                'brand-mono border border-[var(--line)] px-1.5 py-0.5 text-[10px]',
                colJobs.length > 0
                  ? 'bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)]'
                  : 'text-[var(--color-text-muted)]'
              )}>
                {colJobs.length}
              </span>
            </div>
            <div className="space-y-2 min-h-[80px]">
              <AnimatePresence>
                {colJobs.map((job) => <JobCard key={job.id} job={job} />)}
              </AnimatePresence>
              {colJobs.length === 0 && (
                <div className="flex items-center justify-center h-20 border border-dashed border-[var(--color-border-dim)]">
                  <span className="text-[10px] text-[var(--color-text-muted)]">Empty</span>
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
