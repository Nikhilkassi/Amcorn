'use client'
import { useState } from 'react'
import { Check, SlidersHorizontal, X } from 'lucide-react'

type ConsentState = {
  analytics: boolean
  marketing: boolean
}

const STORAGE_KEY = 'amcorn-cookie-preferences'

function readStoredConsent(): ConsentState | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) as ConsentState : null
  } catch {
    return null
  }
}

function saveConsent(value: ConsentState) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
}

export function CookiePreferences() {
  const [visible, setVisible] = useState(() => readStoredConsent() === null)
  const [panelOpen, setPanelOpen] = useState(false)
  const [consent, setConsent] = useState<ConsentState>(() => readStoredConsent() ?? { analytics: false, marketing: false })

  const acceptAll = () => {
    const next = { analytics: true, marketing: true }
    setConsent(next)
    saveConsent(next)
    setVisible(false)
    setPanelOpen(false)
  }

  const save = () => {
    saveConsent(consent)
    setVisible(false)
    setPanelOpen(false)
  }

  if (!visible) {
    return (
      <button
        type="button"
        className="cookie-reopen"
        onClick={() => { setVisible(true); setPanelOpen(true) }}
        aria-label="Open cookie preferences"
      >
        <SlidersHorizontal size={15} />
      </button>
    )
  }

  return (
    <div className="cookie-shell" role="dialog" aria-modal="false" aria-label="Cookie preferences">
      <div className="cookie-card">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="brand-mono mb-2 text-[var(--grey-2)]">Cookie preferences</p>
            <p className="text-sm leading-relaxed text-[var(--grey-1)]">
              Necessary storage keeps the site working. Optional analytics and marketing storage stay off unless you allow them.
            </p>
          </div>
          <button type="button" className="cookie-icon" onClick={() => setVisible(false)} aria-label="Close cookie notice">
            <X size={16} />
          </button>
        </div>

        {panelOpen && (
          <div className="mt-5 grid gap-3 border-t border-[var(--line)] pt-5">
            <label className="cookie-toggle">
              <span>
                <span className="block text-sm font-bold text-[var(--paper)]">Necessary</span>
                <span className="block text-xs text-[var(--grey-2)]">Required for routing, forms, and preferences.</span>
              </span>
              <span className="cookie-pill is-on">Always on</span>
            </label>
            <label className="cookie-toggle">
              <span>
                <span className="block text-sm font-bold text-[var(--paper)]">Analytics</span>
                <span className="block text-xs text-[var(--grey-2)]">Helps us understand page performance.</span>
              </span>
              <input
                type="checkbox"
                checked={consent.analytics}
                onChange={(event) => setConsent((prev) => ({ ...prev, analytics: event.target.checked }))}
              />
            </label>
            <label className="cookie-toggle">
              <span>
                <span className="block text-sm font-bold text-[var(--paper)]">Marketing</span>
                <span className="block text-xs text-[var(--grey-2)]">Reserved for future campaign attribution.</span>
              </span>
              <input
                type="checkbox"
                checked={consent.marketing}
                onChange={(event) => setConsent((prev) => ({ ...prev, marketing: event.target.checked }))}
              />
            </label>
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          <button type="button" className="industrial-button" onClick={acceptAll}>
            Accept all <Check size={15} />
          </button>
          <button type="button" className="industrial-button secondary" onClick={save}>
            Save choices
          </button>
          <button type="button" className="cookie-link" onClick={() => setPanelOpen((value) => !value)}>
            {panelOpen ? 'Hide preferences' : 'Manage preferences'}
          </button>
        </div>
      </div>
    </div>
  )
}
