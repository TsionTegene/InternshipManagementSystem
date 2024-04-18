import { create } from 'zustand'

const useDepartmentStore = create((set) => ({
    departments: [],
    isLoading: false,
    error: null,
    setDepartments: (departments: any) => set(() => ({ departments })),
    setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
    setError: (error: any) => set(() => ({ error })),
}))

export default useDepartmentStore;