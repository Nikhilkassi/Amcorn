'use client'
import { create } from 'zustand'
import type { Job, Sensor } from '@/types'

interface FacilityStore {
  selectedFacilityId: string
  connectionStatus: 'connected' | 'disconnected' | 'error'
  sensorOverrides: Record<string, Partial<Sensor>>
  jobOverrides: Record<string, Partial<Job>>
  setSelectedFacility: (id: string) => void
  setConnectionStatus: (s: FacilityStore['connectionStatus']) => void
  updateSensor: (id: string, data: Partial<Sensor>) => void
  updateJob: (id: string, data: Partial<Job>) => void
}

export const useFacilityStore = create<FacilityStore>((set) => ({
  selectedFacilityId: 'f1',
  connectionStatus: 'connected',
  sensorOverrides: {},
  jobOverrides: {},
  setSelectedFacility: (id) => set({ selectedFacilityId: id }),
  setConnectionStatus: (connectionStatus) => set({ connectionStatus }),
  updateSensor: (id, data) =>
    set((s) => ({ sensorOverrides: { ...s.sensorOverrides, [id]: { ...s.sensorOverrides[id], ...data } } })),
  updateJob: (id, data) =>
    set((s) => ({ jobOverrides: { ...s.jobOverrides, [id]: { ...s.jobOverrides[id], ...data } } })),
}))
