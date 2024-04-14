import { create } from "zustand";

const useSessionStore = create((set) => ({
    user: null,
    token: null,
}))