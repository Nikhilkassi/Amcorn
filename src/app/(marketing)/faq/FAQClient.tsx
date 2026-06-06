'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { FAQ_ITEMS } from '@/lib/mockData'
import Link from 'next/link'
import { cn } from '@/lib/utils'

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
      className="border-b border-[var(--color-border)] last:border-0"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group"
        aria-expanded={open}
      >
        <span className="font-semibold text-white text-sm leading-snug group-hover:text-[var(--color-text-primary)] transition-colors">
          {q}
        </span>
        <ChevronDown
          size={16}
          className={cn(
            'flex-shrink-0 text-[var(--color-text-muted)] transition-transform duration-300',
            open && 'rotate-180'
          )}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQClient() {
  return (
    <>
      <div className="glass rounded-2xl px-8 divide-y divide-[var(--color-border)] mb-16">
        {FAQ_ITEMS.map((item, i) => (
          <FAQItem key={item.q} q={item.q} a={item.a} index={i} />
        ))}
      </div>

      <div className="text-center glass rounded-2xl p-10">
        <h2 className="text-2xl font-bold text-white mb-3">Didn&apos;t find what you were looking for?</h2>
        <p className="text-[var(--color-text-secondary)] mb-6 text-sm">
          Our team responds to all enquiries within one business day. For security-cleared facility questions, please indicate this in your message.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-accent text-white font-semibold hover:opacity-90 transition-opacity cursor-pointer"
        >
          Contact Us <ArrowRight size={16} />
        </Link>
      </div>
    </>
  )
}
