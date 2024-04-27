import { create } from 'zustand';

interface SessionState {
  setUnivesityId: any;
  setUser: any;
  setIsLoading: any;
  setIsError: any;
  setUserId: any;
  setEmail: any;
  setRole: any;
  setError: any;
  setToken: any;
  isLoading: boolean;
  isError: boolean;
  error: any;
  token: any;
  user: any;
  userId: string | null;
  email: string | null;
  role: string | null;
  universityID :string |null
}

const useSessionStore = create<SessionState>((set) => ({
  user: null,
  userId:null,
  email: null,
  role: null,
  error: null,
  isLoading: false, // Add missing property
  isError: false, // Add missing property
  token: null,
  universityID:null,
  setUser: (user: any) => set({user}),
  setUserId: (userId: string) => {
    console.log('Setting userId:', userId);
    set({ userId })},
  setEmail: (email: string) => set({ email }),
  setRole: (role: string) => set({ role }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  setIsError: (isError: boolean) => set({ isError }),
  setError: (error: any) => set({ error }),
  setToken: (token: any) => set({ token }),
  setUnivesityId: (universityID: any) => set({ universityID }),

}));

export default useSessionStore;
