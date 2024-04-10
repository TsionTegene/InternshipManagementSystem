import { create } from 'zustand'

const useDepartmentStore = create((set) => ({
    departments: [],
    isLoading: false,
    error: null,
    setDepartments: (departments: any) => set(() => ({ departments })),
}))

export default useDepartmentStore;