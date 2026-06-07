'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Download, FileCheck2, ShieldCheck } from 'lucide-react'
import { PeakMark, Wordmark } from '@/components/brand/BrandMark'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
}
const EASE = [0.22, 1, 0.36, 1] as const
const item = {
  hidden:  { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.68, ease: EASE } },
}

const PROOF_POINTS = [
  'RAMS and COSHH pack supplied before mobilisation',
  'Named references available after mutual NDA',
  'Indicative scope and budget within one business day',
]

const PROCUREMENT_CUES = [
  { icon: ShieldCheck, label: 'Secure access', value: 'SC/DV-capable teams confirmed per site' },
  { icon: FileCheck2, label: 'Evidence pack', value: 'Particle counts, photos, ESD and product records' },
]

const HERO_TRUST_TICKER =
  'ISO 14644 Certified  ·  IoT Sensor Network  ·  ML Dispatch Engine  ·  DV-Cleared Operatives  ·  24hr Compliance Reports  ·  Uptime Institute Ready  ·  GMP-Aligned  ·  CQC-Aware  ·  Cyber Essentials Certified  ·  £10M Public Liability  ·  SC-Cleared Operatives  ·  ESD-Safe Equipment  ·  Sub-1μm Particle Reporting  ·  Zero Disruption Methodology'

export function HeroSection() {
  return (
    <section className="relative min-h-[86svh] overflow-hidden bg-[var(--ink)] pt-[var(--nav-h)]">
      <video className="hero-bg-video" autoPlay muted loop preload="metadata" playsInline poster="/images/hero-fallback.jpg" aria-hidden="true">
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.94)_0%,rgba(5,5,5,0.76)_42%,rgba(5,5,5,0.38)_100%)]" aria-hidden />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,var(--ink)_0%,rgba(5,5,5,0)_34%,rgba(5,5,5,0)_100%)]" aria-hidden />
      <div className="absolute inset-0 hero-grid-bg pointer-events-none opacity-60" aria-hidden />
      <PeakMark className="peak-watermark right-[-9vw] bottom-[-18vw] w-[58vw] max-w-[760px]" />

      <motion.div
        variants={container}
        initial={false}
        animate="visible"
        className="relative mx-auto flex min-h-[calc(86svh-var(--nav-h))] w-full max-w-7xl flex-col justify-between px-6 py-8 sm:py-10"
      >
        <motion.div variants={item} className="flex flex-wrap items-center justify-between gap-3 text-[var(--grey-1)]">
          <span className="brand-mono">AMCORN / Critical Environment Cleaning</span>
          <span className="brand-mono">Data centres / AI compute / Secure sites</span>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 py-10 lg:grid-cols-[minmax(0,0.98fr)_minmax(300px,420px)] lg:items-end">
          <div className="min-w-0">
            <motion.div variants={item} className="mb-8">
              <Wordmark tone="red" className="w-[72vw] max-w-[720px] sm:w-full" priority />
            </motion.div>

            <motion.p variants={item} className="kicker mb-5">Engineered for uptime</motion.p>
            <motion.h1
              variants={item}
              className="max-w-[10ch] text-4xl font-black leading-none text-[var(--paper)] sm:max-w-4xl sm:text-5xl lg:text-7xl"
            >
              The UK&apos;s critical environment compliance platform.
            </motion.h1>

            <motion.p variants={item} className="mt-5 max-w-[38rem] text-base leading-relaxed text-[var(--grey-1)] sm:text-lg">
              IoT-monitored. ML-dispatched. Audit-documented.<br />
              Built for environments where contamination is not an option.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="industrial-button">
                Request site assessment <ArrowRight size={16} />
              </Link>
              <a href="/downloads/amcorn-procurement-checklist.txt" download className="industrial-button secondary">
                Procurement checklist <Download size={16} />
              </a>
            </motion.div>
            <div className="hero-trust-ticker mt-6" aria-hidden="true">
              <div className="hero-trust-ticker-track">
                <span>{HERO_TRUST_TICKER}</span>
                <span>{HERO_TRUST_TICKER}</span>
              </div>
            </div>
          </div>

          <motion.aside variants={item} className="ticked border border-[var(--line)] bg-[rgba(5,5,5,0.7)] p-5">
            <p className="brand-mono mb-4 text-[var(--grey-2)]">Procurement-ready proof</p>
            <div className="space-y-3">
              {PROOF_POINTS.map((point) => (
                <div key={point} className="grid grid-cols-[8px_1fr] gap-3">
                  <span className="mt-1.5 h-2 w-2 bg-[var(--red-bright)]" />
                  <p className="text-sm leading-snug text-[var(--grey-1)]">{point}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 grid gap-3 border-t border-[var(--line)] pt-5">
              {PROCUREMENT_CUES.map(({ icon: Icon, label, value }) => (
                <div key={label} className="grid grid-cols-[34px_1fr] gap-3">
                  <span className="flex h-8 w-8 items-center justify-center border border-[var(--line)] bg-[var(--ink)]">
                    <Icon size={15} className="text-[var(--red-bright)]" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase text-[var(--paper)]">{label}</span>
                    <span className="block text-xs leading-relaxed text-[var(--grey-2)]">{value}</span>
                  </span>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </motion.div>
    </section>
  )
}
