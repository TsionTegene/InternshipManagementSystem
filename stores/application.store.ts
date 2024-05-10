import { create } from 'zustand'

export const useApplicationStore = create((set) => ({
    applications: [],
    isLoading: false,
    error: null,
    applicationId:null,
    setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
    setApplications: (applications: any) => {
        console.log('Setting applications:', applications);
        set(() => ({ applications }));
    },
    setError: (error: any) => set(() => ({ error })),
    setApplicationId: (applicationId: any) => set(() => ({ applicationId })),

}));