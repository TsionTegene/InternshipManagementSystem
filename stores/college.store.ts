import { create } from 'zustand'

export const useCollegeStore = create((set) => ({
    colleges: [],
    isLoading: false,
    error: null,
    setColleges: (colleges: any) => {
        console.log('Setting colleges:', colleges);
        set(() => ({ colleges }));
    },
    setError: (error: any) => set(() => ({ error })),
}));
