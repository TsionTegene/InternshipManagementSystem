import { create } from "zustand";

const useRoleStore = create((set) => ({
    roleName: [],
    isLoading: false,
    error: null,
    setRole: (roleName:any) => set(() => ({ roleName: roleName })),
    setIsLoading: (isLoading:any) => set(() => ({ isLoading: isLoading })),
    setError: (error:any) => set(() => ({ error: error })),
}))

export default useRoleStore;
