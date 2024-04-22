import { create } from 'zustand'

const useDepartmentStore = create((set) => ({
    departments: [],
    isLoading: false,
    error: null,
    departmentId:null,
    setDepartments: (departments: any) => set(() => ({ departments })),
    setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
    setError: (error: any) => set(() => ({ error })),
    setDepartmentId: (departmentId: any) => set(() => ({ departmentId })),

}))

export default useDepartmentStore;