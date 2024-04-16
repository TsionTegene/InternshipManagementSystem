import { create } from 'zustand';

interface SessionState {
  setIsLoading: any;
  setIsError: any;
  setUserId: any;
  setEmail: any;
  setRole: any;
  setError: any;
  isLoading: boolean;
  isError: boolean;
  error: any;
  userId: string | null;
  email: string | null;
  role: string | null;
}

const useSessionStore = create<SessionState>((set) => ({
  userId: null,
  email: null,
  role: null,
  error: null,
  isLoading: false, // Add missing property
  isError: false, // Add missing property
  setUserId: (userId: string) => set({ userId }),
  setEmail: (email: string) => set({ email }),
  setRole: (role: string) => set({ role }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  setIsError: (isError: boolean) => set({ isError }),
  setError: (error: any) => set({ error }),
}));

export default useSessionStore;
