import { create } from 'zustand'

export const useReportStore = create((set) => ({
    reports: [],
    isLoading: false,
    error: null,
    setReports: (reports: any) => set(() => ({ reports })),
    setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
    setError: (error: any) => set(() => ({ error })),
}))

