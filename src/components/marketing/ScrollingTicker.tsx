import { TICKER_ITEMS } from '@/lib/mockData'

export function ScrollingTicker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <div className="overflow-hidden border-y border-[var(--line)] bg-[var(--ink)] py-3" aria-hidden>
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="brand-mono flex items-center gap-3 whitespace-nowrap px-6 text-[var(--grey-1)]">
            <span className="h-1.5 w-1.5 bg-[var(--color-accent)] flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
