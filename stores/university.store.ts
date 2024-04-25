import { create } from "zustand";

const useUniversityStore = create((set) => ({
    universities: [],
    isLoading: false,
    count :[],
    error: null,
    setUniversities: (universities: any) => set(() => ({ universities })),
    setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
    setError: (error: any) => set(() => ({ error })),
    setCount: (count: any) => set(() => ({ count })),

}))

export default useUniversityStore;