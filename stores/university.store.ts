// utilizing the quries from react query to fetch data from the server.

import { create } from "zustand";

// createing a state for the university data so that it can be used by the hook
const useUniversityStore = create((set) => ({
    universities: [],
    isLoading: false,
    error: null,
    setUniversities: (universities: any) => set(() => ({ universities })),
    setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
    setError: (error: any) => set(() => ({ error })),
}))

export default useUniversityStore;