import { create } from 'zustand'

const useStdStore = create((set) => ({
    students: [],
    isLoading: false,
    error: null,
    setStudents: (students: any) => set(() => ({ students })),
    setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
    setError: (error: any) => set(() => ({ error })),
}))

export default useStdStore;