import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const METHOD_POINTS = [
  'Dry, ESD-safe methods around live hardware',
  'HEPA filtration and zone-by-zone containment',
  'Evidence captured for audit and insurer review',
  'Sensor recommendations for post-clean monitoring',
]

export function MethodMediaSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="kicker mb-4">Method in motion</p>
            <h2 className="max-w-3xl text-4xl font-black sm:text-5xl">
              The work is precise because the environment is unforgiving.
            </h2>
          </div>
          <Link href="/services/active-equipment-cleaning" className="hidden text-sm font-bold uppercase text-[var(--grey-1)] hover:text-[var(--paper)] sm:inline-flex">
            Active equipment method <ArrowRight size={15} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.18fr_0.82fr]">
          <div className="media-frame aspect-[16/9] overflow-hidden bg-[var(--ink)]">
            <video
              className="h-full w-full object-cover"
              src="/media/equipment-clean-loop.mp4"
              poster="/media/active-equipment-cleaning.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Close-up preview of ESD-safe active equipment cleaning"
            />
          </div>

          <div className="grid gap-5">
            <div className="media-frame min-h-[260px] overflow-hidden">
              <Image
                src="/media/iot-sensor.jpg"
                alt="Environmental sensor mounted beside data centre equipment"
                fill
                sizes="(max-width: 1024px) 100vw, 34vw"
                className="object-cover"
              />
            </div>
            <div className="border border-[var(--line)] bg-[var(--panel)] p-6">
              <p className="brand-mono mb-4 text-[var(--grey-2)]">What the client receives</p>
              <ul className="space-y-3">
                {METHOD_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-[var(--grey-1)]">
                    <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-[var(--color-green)]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
