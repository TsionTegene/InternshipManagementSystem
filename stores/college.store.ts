import { create } from 'zustand'

const useCollegeStore = create((set) => ({
    colleges: [],
    isLoading: false,
    error: null,
    setColleges: (colleges: any) => set(() => ({colleges})),
    setError: (error: any) => set(() => ({ error })),

}))

export default useCollegeStore;