import { create } from 'zustand'

const useMentorStore = create((set) => ({
    mentors: [],
    isLoading: false,
    error: null,
    setMentors: (mentors: any) => set(() => ({ mentors })),
    setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
    setError: (error: any) => set(() => ({ error })),
}))

export default useMentorStore;