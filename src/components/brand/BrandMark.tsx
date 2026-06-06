import Image from 'next/image'
import { cn } from '@/lib/utils'

type WordmarkTone = 'red' | 'white' | 'black'

const WORDMARK_SRC: Record<WordmarkTone, string> = {
  red: '/brand/amcorn-red.png',
  white: '/brand/amcorn-white.png',
  black: '/brand/amcorn-black.png',
}

export function PeakMark({ className, tone = 'red' }: { className?: string; tone?: WordmarkTone }) {
  const fill = tone === 'white' ? 'var(--paper)' : tone === 'black' ? 'var(--ink)' : 'var(--red)'

  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={cn('block', className)}
    >
      <polygon points="50,6 94,94 70,94 50,52 30,94 6,94" fill={fill} />
    </svg>
  )
}

export function Wordmark({
  className,
  tone = 'red',
  priority = false,
}: {
  className?: string
  tone?: WordmarkTone
  priority?: boolean
}) {
  return (
    <Image
      src={WORDMARK_SRC[tone]}
      alt="AMCORN"
      width={1187}
      height={323}
      className={cn('block h-auto max-w-full', className)}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  )
}
