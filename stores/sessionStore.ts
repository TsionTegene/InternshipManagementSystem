import { create } from 'zustand';

// implementing a session store from zustand jwt token and user data 
interface SessionState {
  isLoading: boolean;
  token: string | null;
  error: any;
  user: any;
}

const useSessionStore = create<SessionState>((set) => ({
  isLoading: false,
  token: null,
  error: null,
  user: null,
  setToken: (token: string) => set(() => ({ token })),
  setUser: (user: any) => set(() => ({ user })),
  setError: (error: any) => set(() => ({ error })),
  setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
}))

export default useSessionStore;