'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Database, Server, Thermometer, Shield, Wrench, Calendar, ArrowUpRight
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Service } from '@/types'

const ICON_MAP: Record<string, React.ElementType> = {
  database:    Database,
  server:      Server,
  thermometer: Thermometer,
  shield:      Shield,
  wrench:      Wrench,
  calendar:    Calendar,
}

interface ServiceCardProps {
  service: Service
  featured?: boolean
}

export function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const Icon = ICON_MAP[service.icon] ?? Database

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={cn(
        'group ticked relative flex flex-col glass p-6 cursor-pointer overflow-hidden',
        'hover:border-[var(--line-strong)] transition-colors duration-200',
        featured && 'md:col-span-2'
      )}
    >
      <div
        className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-[var(--color-accent)] transition-all duration-300 ease-out"
        aria-hidden
      />

      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="w-11 h-11 bg-[var(--ink)] border border-[var(--line)] flex items-center justify-center flex-shrink-0">
          <Icon size={18} className="text-[var(--color-accent)]" />
        </div>
        <span className="brand-mono border border-[var(--line)] bg-[var(--ink)] px-2 py-1 text-[10px] text-[var(--grey-1)]">
          {service.techLabel}
        </span>
      </div>

      <h3 className="text-xl font-black text-white mb-3 group-hover:text-[var(--red-bright)] transition-colors">
        {service.name}
      </h3>
      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 flex-1">
        {service.description}
      </p>

      {featured && (
        <ul className="grid grid-cols-2 gap-1.5 mb-4">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
              <span className="w-1.5 h-1.5 bg-[var(--red-bright)] flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      )}

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--color-border-dim)]">
        <span className="brand-mono text-[10px] text-[var(--color-text-muted)]">
          {service.scopeLabel}
        </span>
        <Link
          href={`/services/${service.slug}`}
          className="flex items-center gap-1 text-xs font-bold uppercase text-[var(--color-text-muted)] group-hover:text-white transition-colors duration-150 cursor-pointer"
        >
          Learn more <ArrowUpRight size={12} />
        </Link>
      </div>
    </motion.div>
  )
}
