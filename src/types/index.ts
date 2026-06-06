export interface Service {
  id: string
  slug: string
  name: string
  description: string
  icon: string
  techLabel: string
  scopeLabel: string
  features: string[]
}

export interface Stat {
  label: string
  value: number
  suffix?: string
  prefix?: string
  decimals?: number
}

export interface StatusComponent {
  name: string
  status: 'operational' | 'degraded' | 'outage'
  uptime: number
}

export interface Sensor {
  id: string
  name: string
  type: 'occupancy' | 'air_quality' | 'humidity' | 'temperature'
  value: number
  unit: string
  status: 'active' | 'idle' | 'alert' | 'offline'
  lastSeenAt: string
  x: number
  y: number
}

export interface Facility {
  id: string
  name: string
  address: string
  floorArea: number
  sensors: Sensor[]
  activeJobCount: number
}

export type JobStatus = 'scheduled' | 'en_route' | 'in_progress' | 'complete' | 'verified'

export interface Job {
  id: string
  title: string
  facilityName: string
  operative: string
  scheduledAt: string
  status: JobStatus
  priority: 'low' | 'normal' | 'high'
}

export interface SLACommitment {
  id: string
  name: string
  targetFrequencyPerMonth: number
  actualCompletions: number
  compliancePercent: number
  status: 'GREEN' | 'AMBER' | 'RED'
}

export interface AnalyticsDataPoint {
  month: string
  cleanFrequency: number
  occupancy: number
  costPerSqm: number
  utilisation: number
}
