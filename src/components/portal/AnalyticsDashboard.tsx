'use client'
import {
  ResponsiveContainer, LineChart, Line, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  BarChart, Bar
} from 'recharts'
import { ANALYTICS_DATA } from '@/lib/mockData'

const TOOLTIP_STYLE = {
  backgroundColor: 'var(--color-bg-elevated)',
  border: '1px solid var(--color-border)',
  borderRadius: '2px',
  color: 'var(--color-text-primary)',
  fontSize: 12,
}

function ChartCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass ticked p-5">
      <p className="brand-mono text-[var(--color-text-muted)] mb-4">{title}</p>
      {children}
    </div>
  )
}

export function AnalyticsDashboard() {
  return (
    <div className="space-y-4">
      {/* Clean freq vs occupancy */}
      <ChartCard title="Clean Frequency vs Occupancy (%)">
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={ANALYTICS_DATA} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
            <defs>
              <linearGradient id="gradClean" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-cta)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="var(--color-cta)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gradOcc" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-accent)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="var(--color-accent)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="month" tick={{ fill: 'var(--color-text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: 'var(--color-text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={TOOLTIP_STYLE} />
            <Legend wrapperStyle={{ fontSize: 11, color: 'var(--color-text-secondary)' }} />
            <Area type="monotone" dataKey="cleanFrequency" name="Clean Freq" stroke="var(--color-cta)" fill="url(#gradClean)" strokeWidth={2} dot={false} />
            <Area type="monotone" dataKey="occupancy" name="Occupancy" stroke="var(--color-accent)" fill="url(#gradOcc)" strokeWidth={2} dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Cost per sqm */}
        <ChartCard title="Cost per m² (£)">
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={ANALYTICS_DATA} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="month" tick={{ fill: 'var(--color-text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: 'var(--color-text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} domain={[3, 5]} />
              <Tooltip contentStyle={TOOLTIP_STYLE} formatter={(v) => [`£${Number(v).toFixed(2)}`, 'Cost/m²']} />
              <Line type="monotone" dataKey="costPerSqm" name="£/m²" stroke="var(--color-green)" strokeWidth={2} dot={{ fill: 'var(--color-green)', r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Operative utilisation */}
        <ChartCard title="Operative Utilisation (%)">
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={ANALYTICS_DATA} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="month" tick={{ fill: 'var(--color-text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: 'var(--color-text-muted)', fontSize: 11 }} axisLine={false} tickLine={false} domain={[0, 100]} />
              <Tooltip contentStyle={TOOLTIP_STYLE} formatter={(v) => [`${v}%`, 'Utilisation']} />
              <Bar dataKey="utilisation" name="Utilisation" fill="var(--color-cta)" radius={[0, 0, 0, 0]} opacity={0.8} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  )
}
