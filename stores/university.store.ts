import { create } from "zustand";

const useUniversityStore = create((set) => ({
    universities: [],
    isLoading: false,
    error: null,
    setUniversities: (universities: any) => set(() => ({ universities })),
    setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
    setError: (error: any) => set(() => ({ error })),
}))

export default useUniversityStore;