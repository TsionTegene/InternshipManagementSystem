import { create } from "zustand";

const useUserStore = create((set) => ({
    user: [],
    isLoading: false,
    error: null,
    setUser: (user: any) => set(() => ({ user })),
    setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
    setError: (error: any) => set(() => ({ error })),
}))

export default useUserStore;