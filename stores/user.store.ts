import { create } from "zustand";

const useUserStore = create((set) => ({
    user: [],
    isLoading: false,
    error: null,
    selectedUserID:null,
    setUser: (user: any) => set(() => ({ user })),
    setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
    setError: (error: any) => set(() => ({ error })),
    setSelectedUserID: (selectedUserID: any) => {
        console.log('Setting uid:', selectedUserID);

        set(() => ({ selectedUserID }))},

}))

export default useUserStore;