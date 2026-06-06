'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Sensor } from '@/types'

const STATUS_COLOR: Record<Sensor['status'], string> = {
  active:  '#22C55E',
  idle:    '#4A5E78',
  alert:   '#EF4444',
  offline: '#374151',
}

const TYPE_LABEL: Record<Sensor['type'], string> = {
  occupancy:   'Occupancy',
  air_quality: 'Air Quality',
  humidity:    'Humidity',
  temperature: 'Temperature',
}

export function SensorMapOverlay({ sensors }: { sensors: Sensor[] }) {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selected = selectedId ? sensors.find((sensor) => sensor.id === selectedId) ?? null : null

  return (
    <div className="relative w-full h-full">
      {/* Floor plan SVG */}
      <svg viewBox="0 0 100 100" className="w-full h-full" style={{ background: 'var(--ink)' }}>
        {/* Floor plan walls */}
        <rect x="5" y="5" width="90" height="90" rx="1" fill="none" stroke="var(--color-border)" strokeWidth="0.5" />
        {/* Rooms */}
        <rect x="5" y="5" width="30" height="40" fill="rgba(147,30,34,0.18)" stroke="var(--color-border)" strokeWidth="0.3" />
        <rect x="35" y="5" width="60" height="55" fill="rgba(244,241,236,0.06)" stroke="var(--color-border)" strokeWidth="0.3" />
        <rect x="5" y="45" width="30" height="50" fill="rgba(244,241,236,0.05)" stroke="var(--color-border)" strokeWidth="0.3" />
        <rect x="35" y="60" width="60" height="35" fill="rgba(147,30,34,0.12)" stroke="var(--color-border)" strokeWidth="0.3" />
        {/* Labels */}
        <text x="13" y="24" fontSize="3" fill="var(--color-text-muted)" fontFamily="var(--font-mono)">Reception</text>
        <text x="52" y="30" fontSize="3" fill="var(--color-text-muted)" fontFamily="var(--font-mono)">Open Plan</text>
        <text x="13" y="68" fontSize="3" fill="var(--color-text-muted)" fontFamily="var(--font-mono)">Washrooms</text>
        <text x="55" y="74" fontSize="3" fill="var(--color-text-muted)" fontFamily="var(--font-mono)">Boardroom</text>

        {/* Sensors */}
        {sensors.map((sensor) => {
          const color = STATUS_COLOR[sensor.status]
          const isAlert = sensor.status === 'alert'
          return (
            <g
              key={sensor.id}
              transform={`translate(${sensor.x}, ${sensor.y})`}
              className="cursor-pointer"
              onClick={() => setSelectedId(selectedId === sensor.id ? null : sensor.id)}
            >
              {isAlert && (
                <circle r="4" fill={color} opacity="0.2">
                  <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
                </circle>
              )}
              <circle r="3" fill={color} opacity={sensor.status === 'idle' ? 0.5 : 1} />
              <circle r="1.5" fill="white" opacity="0.9" />
            </g>
          )
        })}
      </svg>

      {/* Tooltip */}
      {selected && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-3 right-3 glass ticked p-4 min-w-[160px] z-10"
        >
          <div className="flex items-center justify-between gap-3 mb-2">
            <span className="text-xs font-bold text-white">{selected.name}</span>
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: STATUS_COLOR[selected.status] }}
            />
          </div>
          <p className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider mb-1">{TYPE_LABEL[selected.type]}</p>
          <p className="text-xl font-black text-white">
            {selected.type === 'air_quality' || selected.type === 'occupancy'
              ? Math.round(selected.value)
              : selected.value.toFixed(1)}
            <span className="text-xs font-normal text-[var(--color-text-muted)] ml-1">{selected.unit}</span>
          </p>
          <p className="text-[10px] text-[var(--color-text-muted)] mt-2 capitalize">{selected.status}</p>
        </motion.div>
      )}

      {/* Legend */}
      <div className="absolute bottom-3 left-3 flex items-center gap-3">
        {Object.entries(STATUS_COLOR).map(([status, color]) => (
          <div key={status} className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full" style={{ background: color }} />
            <span className="text-[10px] text-[var(--color-text-muted)] capitalize">{status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
