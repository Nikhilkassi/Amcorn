'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft, CheckCircle2, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const step1Schema = z.object({
  company:       z.string().min(2, 'Company name required'),
  facilityType:  z.string().min(1, 'Please select a facility type'),
  facilityCount: z.string().min(1, 'Please select'),
  hasCurrentProgramme: z.string().min(1, 'Please select'),
})
const step2Schema = z.object({
  message: z.string().min(10, 'Please tell us a little about your facility (min 10 characters)'),
})
const step3Schema = z.object({
  name:     z.string().min(2, 'Full name required'),
  jobTitle: z.string().min(1, 'Job title required'),
  email:    z.string().email('Valid work email required'),
  phone:    z.string().optional(),
})

const FULL_SCHEMA = step1Schema.merge(step2Schema).merge(step3Schema)
type FormData = z.infer<typeof FULL_SCHEMA>

const FACILITY_TYPES = [
  'Colocation data centre',
  'Hyperscale / cloud campus',
  'Government / defence facility',
  'Financial services infrastructure',
  'AI / HPC compute facility',
  'NHS / healthcare data centre',
  'Telecommunications exchange',
  'Corporate server room',
  'Other',
]

const EASE = [0.22, 1, 0.36, 1] as const
const slideVariant = (dir: number) => ({
  initial: { opacity: 0, x: dir * 40 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.35, ease: EASE } },
  exit:    { opacity: 0, x: dir * -40, transition: { duration: 0.2 } },
})

const STEP_LABELS = ['Your Facility', 'Requirements', 'Your Details']

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

export function QuoteRequestForm() {
  const [step, setStep] = useState(1)
  const [dir, setDir] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, trigger, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(FULL_SCHEMA),
  })

  const goNext = async () => {
    const fields: (keyof FormData)[][] = [
      ['company', 'facilityType', 'facilityCount', 'hasCurrentProgramme'],
      ['message'],
    ]
    const valid = await trigger(fields[step - 1] as (keyof FormData)[])
    if (valid) { setDir(1); setStep((s) => s + 1) }
  }
  const goBack = () => { setDir(-1); setStep((s) => s - 1) }

  const onSubmit = async () => {
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
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
    <div>
      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3].map((n) => (
          <div key={n} className="flex items-center gap-2">
            <div className={cn(
              'w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-colors duration-300',
              step >= n
                ? 'gradient-accent text-white'
                : 'bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)] border border-[var(--color-border)]'
            )}>{n}</div>
            {n < 3 && <div className={cn('h-px w-8 transition-colors duration-300', step > n ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-border)]')} />}
          </div>
        ))}
        <span className="ml-auto text-xs text-[var(--color-text-muted)]">{STEP_LABELS[step - 1]}</span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait" custom={dir}>
          {/* Step 1: Facility info */}
          {step === 1 && (
            <motion.div key="s1" {...slideVariant(dir)} className="space-y-4">
              <div>
                <Label>Company Name</Label>
                <Input {...register('company')} placeholder="Acme Infrastructure Ltd" error={errors.company?.message} />
              </div>
              <div>
                <Label>Facility Type</Label>
                <Select {...register('facilityType')} error={errors.facilityType?.message}>
                  <option value="">Select facility type…</option>
                  {FACILITY_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                </Select>
              </div>
              <div>
                <Label>Number of Facilities</Label>
                <Select {...register('facilityCount')} error={errors.facilityCount?.message}>
                  <option value="">Select…</option>
                  {['1', '2–5', '6–20', '20+'].map((n) => <option key={n} value={n}>{n}</option>)}
                </Select>
              </div>
              <div>
                <Label>Current Cleaning Programme?</Label>
                <Select {...register('hasCurrentProgramme')} error={errors.hasCurrentProgramme?.message}>
                  <option value="">Select…</option>
                  <option value="yes">Yes - we have a scheduled programme</option>
                  <option value="adhoc">Ad hoc only - we call when needed</option>
                  <option value="no">No - nothing in place currently</option>
                </Select>
              </div>
            </motion.div>
          )}

          {/* Step 2: Requirements */}
          {step === 2 && (
            <motion.div key="s2" {...slideVariant(dir)} className="space-y-4">
              <div>
                <Label>Tell us about your facility and what you need</Label>
                <textarea
                  {...register('message')}
                  rows={6}
                  placeholder="Describe your environment - floor area, number of racks, cooling infrastructure, access restrictions, compliance requirements, any current issues you're looking to address..."
                  className={cn(
                    'w-full px-4 py-3 rounded-lg bg-[var(--color-bg-elevated)] border text-sm text-white placeholder-[var(--color-text-muted)] outline-none transition-colors duration-150 resize-none',
                    errors.message ? 'border-[var(--color-red)]' : 'border-[var(--color-border)] focus:border-[var(--color-cta)]'
                  )}
                />
                {errors.message && <p className="mt-1.5 text-xs text-[var(--color-red)]">{errors.message.message}</p>}
              </div>
              <div className="glass rounded-xl p-4">
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                  All enquiries are treated confidentially. If your facility requires DV or SC-cleared operatives, please mention this - we&apos;ll confirm our cleared operative availability as part of our response.
                </p>
              </div>
            </motion.div>
          )}

          {/* Step 3: Contact */}
          {step === 3 && (
            <motion.div key="s3" {...slideVariant(dir)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Full Name</Label>
                  <Input {...register('name')} placeholder="Jane Smith" error={errors.name?.message} />
                </div>
                <div>
                  <Label>Job Title</Label>
                  <Input {...register('jobTitle')} placeholder="Head of Facilities" error={errors.jobTitle?.message} />
                </div>
              </div>
              <div>
                <Label>Work Email</Label>
                <Input {...register('email')} type="email" placeholder="jane@company.com" error={errors.email?.message} />
              </div>
              <div>
                <Label>Phone (optional)</Label>
                <Input {...register('phone')} type="tel" placeholder="+44 20 0000 0000" />
              </div>
              <p className="text-xs text-[var(--color-text-muted)]">
                Response within 1 business day · No sales calls without permission · All enquiries treated confidentially
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex gap-3 mt-8">
          {step > 1 && (
            <button
              type="button"
              onClick={goBack}
              className="flex items-center gap-1.5 px-5 py-3 rounded-xl border border-[var(--color-border)] text-sm font-medium text-[var(--color-text-secondary)] hover:text-white hover:border-[var(--color-text-muted)] transition-colors duration-150 cursor-pointer"
            >
              <ChevronLeft size={15} /> Back
            </button>
          )}
          {step < 3 ? (
            <button
              type="button"
              onClick={goNext}
              className="flex-1 flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl gradient-accent text-white text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
            >
              Next <ChevronRight size={15} />
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading}
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl gradient-accent text-white text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-60"
            >
              {loading ? <><Loader2 size={15} className="animate-spin" /> Submitting…</> : 'Request Site Assessment'}
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
