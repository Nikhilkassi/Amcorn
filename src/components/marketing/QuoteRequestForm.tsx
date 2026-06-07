'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const FORM_SCHEMA = z.object({
  company: z.string().min(2, 'Company name required'),
  name: z.string().min(2, 'Your name required'),
  jobTitle: z.string().min(1, 'Job title required'),
  email: z.string().email('Valid email address required'),
  phone: z.string().optional(),
  facilityType: z.string().min(1, 'Please select a facility type'),
  facilityCount: z.string().min(1, 'Please select the number of facilities'),
  hasCurrentProgramme: z.string().min(1, 'Please select your current programme status'),
  message: z.string().optional(),
  referralSource: z.string().optional(),
})

type FormData = z.infer<typeof FORM_SCHEMA>

const FACILITY_TYPES = [
  'Colocation data centre',
  'Hyperscale or cloud campus',
  'Government or defence facility',
  'Financial services infrastructure',
  'AI or HPC compute facility',
  'Life sciences or pharmaceutical facility',
  'NHS or healthcare data centre',
  'Telecommunications exchange',
  'Corporate server room',
  'Other',
]

const FACILITY_COUNTS = ['1', '2–5', '6–20', '20+']
const PROGRAMME_OPTIONS = ['Yes — scheduled programme', 'Ad hoc only', 'Nothing currently in place']
const REFERRAL_OPTIONS = ['Google search', 'LinkedIn', 'Industry event', 'Referral', 'Other']

function Label({ children }: { children: React.ReactNode }) {
  return <label className="block text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">{children}</label>
}

function Input({ error, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { error?: string }) {
  return (
    <div>
      <input
        {...props}
        className={cn(
          'w-full px-4 py-3 rounded-lg bg-[var(--color-bg-elevated)] border text-sm text-white placeholder-[var(--color-text-muted)] outline-none transition-colors duration-150',
          error ? 'border-[var(--color-red)]' : 'border-[var(--color-border)] focus:border-[var(--color-cta)]'
        )}
      />
      {error && <p className="mt-1.5 text-xs text-[var(--color-red)]">{error}</p>}
    </div>
  )
}

function Select({ error, children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement> & { error?: string }) {
  return (
    <div>
      <select
        {...props}
        className={cn(
          'w-full px-4 py-3 rounded-lg bg-[var(--color-bg-elevated)] border text-sm text-white outline-none transition-colors duration-150 cursor-pointer',
          error ? 'border-[var(--color-red)]' : 'border-[var(--color-border)] focus:border-[var(--color-cta)]'
        )}
      >
        {children}
      </select>
      {error && <p className="mt-1.5 text-xs text-[var(--color-red)]">{error}</p>}
    </div>
  )
}

function Textarea({ error, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: string }) {
  return (
    <div>
      <textarea
        {...props}
        className={cn(
          'w-full px-4 py-3 rounded-lg bg-[var(--color-bg-elevated)] border text-sm text-white placeholder-[var(--color-text-muted)] outline-none transition-colors duration-150 resize-none',
          error ? 'border-[var(--color-red)]' : 'border-[var(--color-border)] focus:border-[var(--color-cta)]'
        )}
      />
      {error && <p className="mt-1.5 text-xs text-[var(--color-red)]">{error}</p>}
    </div>
  )
}

export function QuoteRequestForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(FORM_SCHEMA),
  })

  const onSubmit = async () => {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle2 size={48} className="text-[var(--color-green)] mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Assessment Request Received</h3>
        <p className="text-[var(--color-text-secondary)] text-sm max-w-sm">
          Our team will review your requirements and respond within one business day with a proposed scope and indicative pricing. No sales calls without your permission.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label>Company Name</Label>
        <Input {...register('company')} placeholder="Acme Infrastructure Ltd" error={errors.company?.message} />
      </div>

      <div>
        <Label>Your Name</Label>
        <Input {...register('name')} placeholder="Jane Smith" error={errors.name?.message} />
      </div>

      <div>
        <Label>Job Title</Label>
        <Input {...register('jobTitle')} placeholder="Head of Facilities" error={errors.jobTitle?.message} />
      </div>

      <div>
        <Label>Email Address</Label>
        <Input {...register('email')} type="email" placeholder="jane@company.com" error={errors.email?.message} />
      </div>

      <div>
        <Label>Phone Number</Label>
        <Input {...register('phone')} type="tel" placeholder="+44 20 0000 0000" />
      </div>

      <div>
        <Label>Facility Type</Label>
        <Select {...register('facilityType')} error={errors.facilityType?.message}>
          <option value="" disabled>Select facility type…</option>
          {FACILITY_TYPES.map((type) => <option key={type} value={type}>{type}</option>)}
        </Select>
      </div>

      <div>
        <Label>Number of Facilities</Label>
        <Select {...register('facilityCount')} error={errors.facilityCount?.message}>
          <option value="" disabled>Select…</option>
          {FACILITY_COUNTS.map((count) => <option key={count} value={count}>{count}</option>)}
        </Select>
      </div>

      <div>
        <Label>Current Cleaning Programme?</Label>
        <Select {...register('hasCurrentProgramme')} error={errors.hasCurrentProgramme?.message}>
          <option value="" disabled>Select…</option>
          {PROGRAMME_OPTIONS.map((option) => <option key={option} value={option}>{option}</option>)}
        </Select>
      </div>

      <div>
        <Label>Tell us about your facility and key challenges</Label>
        <Textarea
          {...register('message')}
          rows={4}
          placeholder="Facility size, current pain points, upcoming audits, specific compliance requirements…"
          error={errors.message?.message}
        />
      </div>

      <div>
        <Label>How did you hear about AMCORN?</Label>
        <Select {...register('referralSource')} error={errors.referralSource?.message}>
          <option value="">Select…</option>
          {REFERRAL_OPTIONS.map((option) => <option key={option} value={option}>{option}</option>)}
        </Select>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 px-5 py-3 rounded-xl gradient-accent text-white text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-60"
      >
        {loading ? <><Loader2 size={15} className="animate-spin" /> Submitting…</> : 'Request Site Assessment →'}
      </button>

      <p className="text-xs text-[var(--color-text-muted)]">
        Response within 1 business day · No sales calls without permission · All enquiries treated confidentially · DV-cleared enquiries handled separately
      </p>
    </form>
  )
}
